/**
 * SmartTutor - 智能导师服务
 * 
 * 核心功能:
 * - AI个性化对话
 * - 学习上下文管理
 * - 自动掌握度追踪
 * - 智能教学策略选择
 */

import { supabase } from '../supabase';
import { KnowledgeAssessment } from './knowledgeAssessment';
import { KnowledgeGraphHelper } from '../data/mathKnowledgeGraph';

/**
 * 调用Gemini API
 * 注意: 这里假设你已经有geminiAPI.js,如果没有需要创建
 */
export async function callGeminiAPI(prompt) {
    try {
        const response = await fetch('/api/gemini', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt })
        });

        if (!response.ok) {
            throw new Error('Gemini API调用失败');
        }

        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error('Gemini API错误:', error);
        throw error;
    }
}

export class SmartTutor {
    /**
     * 智能对话 - 核心功能
     * 
     * @param {string} userId - 用户ID
     * @param {string} topicId - 知识点ID
     * @param {string} userMessage - 用户消息
     * @param {Array} conversationHistory - 对话历史
     * @returns {Promise<string>} AI回复
     */
    static async chat(userId, topicId, userMessage, conversationHistory = []) {
        try {
            // 1. 诊断学生水平 (基于知识图谱)
            const diagnosis = await KnowledgeAssessment.diagnose(userId, topicId);

            // 2. 获取学习上下文
            const context = await this.getLearningContext(userId, topicId);

            // 3. 构建增强的prompt (包含知识图谱信息)
            const prompt = this.buildEnhancedPrompt(
                context,
                diagnosis,
                conversationHistory,
                userMessage
            );

            // 4. 调用AI
            const aiResponse = await callGeminiAPI(prompt);

            // 5. 检测涉及的技能点
            const topic = diagnosis.topic;
            const mentionedSkills = topic
                ? KnowledgeAssessment.detectSkillsInMessage(
                    userMessage + ' ' + aiResponse,
                    topic.skills
                )
                : [];

            // 6. 评估回答正确性
            const isCorrect = this.detectCorrectness(aiResponse);

            // 7. 更新技能掌握度 (基于知识图谱)
            if (mentionedSkills.length > 0) {
                await KnowledgeAssessment.updateSkillMastery(
                    userId,
                    topicId,
                    mentionedSkills,
                    isCorrect
                );
            }

            // 8. 保存对话
            await this.saveConversation(userId, topicId, userMessage, aiResponse);

            return aiResponse;
        } catch (error) {
            console.error('SmartTutor.chat错误:', error);
            return '抱歉,我遇到了一些问题。请稍后再试。';
        }
    }

    /**
     * 获取学习上下文 (轻量级)
     */
    static async getLearningContext(userId, topicId) {
        try {
            // 获取用户设置
            const { data: settings } = await supabase
                .from('user_settings')
                .select('settings')
                .eq('user_id', userId)
                .single();

            const userSettings = settings?.settings || {};

            // 获取知识点掌握情况
            const { data: snapshot } = await supabase
                .from('topic_snapshots')
                .select('*')
                .eq('user_id', userId)
                .eq('topic_id', topicId)
                .single();

            // 获取最近的学习会话
            const { data: recentSessions } = await supabase
                .from('homework_sessions')
                .select('*')
                .eq('user_id', userId)
                .order('created_at', { ascending: false })
                .limit(5);

            return {
                grade: userSettings.profile?.grade || '初中',
                learningStyle: userSettings.learningPreferences || {},
                topicMastery: snapshot?.mastery_score || 0,
                attempts: snapshot?.attempts || 0,
                recentPerformance: this.analyzeRecentPerformance(recentSessions),
                totalSessions: recentSessions?.length || 0,
                lastPracticed: snapshot?.last_practiced
            };
        } catch (error) {
            console.error('获取学习上下文错误:', error);
            return {
                grade: '初中',
                learningStyle: {},
                topicMastery: 0,
                recentPerformance: '首次学习'
            };
        }
    }

    /**
     * 构建智能prompt (这是核心!)
     */
    static buildSmartPrompt(context, history, userMessage) {
        const { grade, learningStyle, topicMastery, recentPerformance } = context;

        // 动态调整教学策略
        const teachingStrategy = this.selectStrategy(topicMastery);
        const teachingApproach = this.getTeachingApproach(topicMastery);

        // 格式化对话历史
        const formattedHistory = history
            .slice(-10) // 只保留最近10条
            .map(m => `${m.role === 'user' ? '学生' : 'AI导师'}: ${m.content}`)
            .join('\n');

        return `
你是一位经验丰富、充满耐心的数学AI导师,正在与一位${grade}学生进行一对一辅导。

【学生画像】
- 年级: ${grade}
- 当前知识点掌握度: ${(topicMastery * 100).toFixed(0)}%
- 学习风格: ${learningStyle.tutoringStyle || '平衡型'}
- 引导模式: ${learningStyle.guidanceMode || 'socratic'}
- 最近表现: ${recentPerformance}

【教学策略】
${teachingStrategy}

【对话历史】
${formattedHistory || '(首次对话)'}

【学生刚才说】
"${userMessage}"

【你的任务】
1. 根据学生的掌握度(${(topicMastery * 100).toFixed(0)}%)调整讲解深度
2. 使用${teachingApproach}
3. 如果学生理解有困难,换个角度或用更简单的例子
4. 多用鼓励性语言,培养成长型思维
5. 适时提出检查理解的问题

【重要原则】
- 不要一次性给太多信息(每次回复控制在150字以内)
- 多用生活化的例子和类比
- 如果学生答错,不要直接说"错了",而是引导思考
- 保持对话自然、友好、像朋友一样
- 用emoji让对话更生动 😊

请用简洁、友好的语言回复学生:
`;
    }

    /**
     * 构建增强的prompt (集成知识图谱)
     */
    static buildEnhancedPrompt(context, diagnosis, history, userMessage) {
        const { grade, learningStyle, recentPerformance } = context;
        const { topic, currentMastery, weakSkills, prerequisites } = diagnosis;

        // 如果没有知识图谱信息,回退到原来的方法
        if (!topic) {
            return this.buildSmartPrompt(context, history, userMessage);
        }

        // 动态调整教学策略
        const teachingStrategy = this.selectStrategy(currentMastery);
        const teachingApproach = this.getTeachingApproach(currentMastery);

        // 格式化对话历史
        const formattedHistory = history
            .slice(-10)
            .map(m => `${m.role === 'user' ? '学生' : 'AI导师'}: ${m.content}`)
            .join('\n');

        // 构建薄弱技能提示
        const weakSkillsHint = weakSkills.length > 0
            ? `
【重点关注】
学生在以下技能点需要加强:
${weakSkills.slice(0, 3).map((s, i) => `${i + 1}. ${s.name} (掌握度: ${(s.mastery * 100).toFixed(0)}%)`).join('\n')}

请在讲解时重点关注这些薄弱环节,多举例子,多检查理解。
`
            : '';

        // 构建前置知识提示
        const prereqHint = prerequisites.length > 0
            ? `
【前置知识】
${prerequisites.map(p => `- ${p.name}: ${p.isMastered ? '✓已掌握' : '⚠需复习'}`).join('\n')}
${prerequisites.some(p => !p.isMastered) ? '\n注意:学生的前置知识有欠缺,讲解时需要适当回顾。' : ''}
`
            : '';

        return `
你是一位经验丰富、充满耐心的数学AI导师,正在与一位${grade}学生进行一对一辅导。

【知识点信息】
- 主题: ${topic.name}
- 难度等级: ${(topic.difficulty * 100).toFixed(0)}%
- 核心技能: ${topic.skills.join('、')}
- 认知层级: ${topic.bloomLevel}

【学生当前状态】
- 整体掌握度: ${(currentMastery * 100).toFixed(0)}%
- 学习风格: ${learningStyle.tutoringStyle || '平衡型'}
- 最近表现: ${recentPerformance}

${prereqHint}

${weakSkillsHint}

【教学策略】
${teachingStrategy}

【对话历史】
${formattedHistory || '(首次对话)'}

【学生刚才说】
"${userMessage}"

【你的任务】
1. 根据学生的掌握度(${(currentMastery * 100).toFixed(0)}%)调整讲解深度
2. 使用${teachingApproach}
3. ${weakSkills.length > 0 ? `重点讲解薄弱技能: ${weakSkills[0].name}` : '巩固已学内容'}
4. 多用鼓励性语言,培养成长型思维
5. 适时检查学生对薄弱技能的理解

【重要原则】
- 不要一次性给太多信息(每次回复控制在150字以内)
- 多用生活化的例子和类比
- 如果学生答错,不要直接说"错了",而是引导思考
- 保持对话自然、友好、像朋友一样
- 用emoji让对话更生动 😊

请用简洁、友好的语言回复学生:
`;
    }

    /**
     * 根据掌握度选择教学策略
     */
    static selectStrategy(mastery) {
        if (mastery < 0.3) {
            return `
【新手阶段策略】
- 使用大量具体例子和图像化描述
- 分步骤详细讲解,确保每一步都理解
- 提供完整的解题示范(worked examples)
- 频繁检查理解,及时发现问题
- 多鼓励,建立信心和学习动力
- 避免使用过多专业术语
`;
        } else if (mastery < 0.7) {
            return `
【发展阶段策略】
- 使用引导性问题,让学生主动思考
- 提供部分示例,让学生完成剩余部分
- 鼓励学生解释自己的思路
- 适度挑战,但随时准备提供支持
- 帮助学生建立知识之间的联系
`;
        } else {
            return `
【精通阶段策略】
- 提出挑战性问题,激发深度思考
- 鼓励学生探索多种解法
- 引导学生自己发现规律和模式
- 培养元认知能力(思考自己的思考过程)
- 可以适当使用"生产性失败"策略
- 鼓励创造性思维
`;
        }
    }

    /**
     * 获取教学方法
     */
    static getTeachingApproach(mastery) {
        if (mastery < 0.3) return '直接教学法,详细讲解每个步骤';
        if (mastery < 0.7) return '苏格拉底式提问,引导学生发现答案';
        return '问题驱动学习,鼓励探索和创新';
    }

    /**
     * 分析最近表现
     */
    static analyzeRecentPerformance(sessions) {
        if (!sessions || sessions.length === 0) return '首次学习';

        // 简单分析:看最近3次的表现
        const recent3 = sessions.slice(0, 3);
        const correctCount = recent3.filter(s =>
            s.learning_context?.lastResult === 'correct'
        ).length;

        if (correctCount >= 2) return '表现优秀,正在稳步进步 📈';
        if (correctCount === 1) return '有进步,继续加油 💪';
        return '需要更多练习,我会帮助你 🤝';
    }

    /**
     * 保存对话
     */
    static async saveConversation(userId, topicId, userMsg, aiMsg) {
        try {
            // 获取现有对话
            const { data: existing } = await supabase
                .from('ai_conversations')
                .select('*')
                .eq('user_id', userId)
                .eq('topic_id', topicId)
                .order('created_at', { ascending: false })
                .limit(1)
                .maybeSingle();

            const newMessages = [
                { role: 'user', content: userMsg, timestamp: new Date().toISOString() },
                { role: 'assistant', content: aiMsg, timestamp: new Date().toISOString() }
            ];

            if (existing) {
                // 更新现有对话
                const messages = [...(existing.messages || []), ...newMessages];
                const totalMessages = messages.length;

                await supabase
                    .from('ai_conversations')
                    .update({
                        messages,
                        total_messages: totalMessages,
                        updated_at: new Date().toISOString()
                    })
                    .eq('id', existing.id);
            } else {
                // 创建新对话
                await supabase
                    .from('ai_conversations')
                    .insert({
                        user_id: userId,
                        topic_id: topicId,
                        messages: newMessages,
                        total_messages: 2
                    });
            }
        } catch (error) {
            console.error('保存对话错误:', error);
        }
    }

    /**
     * 更新学习上下文 (简化版)
     */
    static async updateContext(userId, topicId, userMsg, aiMsg) {
        try {
            // 简单规则:检测AI回复中的正面词汇
            const isCorrect = this.detectCorrectness(aiMsg);

            // 更新或创建知识点快照
            const { data: existing } = await supabase
                .from('topic_snapshots')
                .select('*')
                .eq('user_id', userId)
                .eq('topic_id', topicId)
                .maybeSingle();

            if (existing) {
                const newAttempts = existing.attempts + 1;
                const newCorrect = existing.correct + (isCorrect ? 1 : 0);
                const newMastery = newCorrect / newAttempts;

                await supabase
                    .from('topic_snapshots')
                    .update({
                        attempts: newAttempts,
                        correct: newCorrect,
                        mastery_score: newMastery,
                        last_practiced: new Date().toISOString(),
                        next_review: this.calculateNextReview(newMastery)
                    })
                    .eq('id', existing.id);
            } else {
                // 首次学习
                await supabase
                    .from('topic_snapshots')
                    .insert({
                        user_id: userId,
                        topic_id: topicId,
                        attempts: 1,
                        correct: isCorrect ? 1 : 0,
                        mastery_score: isCorrect ? 1 : 0,
                        next_review: this.calculateNextReview(isCorrect ? 1 : 0)
                    });
            }
        } catch (error) {
            console.error('更新上下文错误:', error);
        }
    }

    /**
     * 检测回答正确性 (简单规则)
     */
    static detectCorrectness(aiResponse) {
        const positiveKeywords = [
            '正确', '很好', '对的', '没错', '完全正确', '太棒了',
            '做得好', '理解得很好', '答对了', '✓', '✅', '👍'
        ];

        const negativeKeywords = [
            '不太对', '有点问题', '再想想', '不完全正确', '错误',
            '不对', '有误', '❌'
        ];

        // 先检查负面词汇
        if (negativeKeywords.some(keyword => aiResponse.includes(keyword))) {
            return false;
        }

        // 再检查正面词汇
        return positiveKeywords.some(keyword => aiResponse.includes(keyword));
    }

    /**
     * 计算下次复习时间 (简化的间隔重复)
     */
    static calculateNextReview(mastery) {
        const intervals = [1, 3, 7, 14, 30, 60]; // 天
        const index = Math.min(
            Math.floor(mastery * intervals.length),
            intervals.length - 1
        );

        const today = new Date();
        today.setDate(today.getDate() + intervals[index]);
        return today.toISOString().split('T')[0];
    }

    /**
     * 获取对话历史
     */
    static async getConversationHistory(userId, topicId, limit = 10) {
        try {
            const { data } = await supabase
                .from('ai_conversations')
                .select('messages')
                .eq('user_id', userId)
                .eq('topic_id', topicId)
                .order('created_at', { ascending: false })
                .limit(1)
                .maybeSingle();

            if (!data || !data.messages) return [];

            // 返回最近的N条消息
            return data.messages.slice(-limit);
        } catch (error) {
            console.error('获取对话历史错误:', error);
            return [];
        }
    }

    /**
     * 生成学习总结
     */
    static async generateSummary(userId, topicId) {
        try {
            const context = await this.getLearningContext(userId, topicId);
            const history = await this.getConversationHistory(userId, topicId, 20);

            const prompt = `
基于以下学习对话,生成一个简短的学习总结。

【学生掌握度】${(context.topicMastery * 100).toFixed(0)}%

【对话历史】
${history.map(m => `${m.role}: ${m.content}`).join('\n')}

请生成一个50字以内的总结,包括:
1. 学生掌握了什么
2. 还需要加强什么
3. 一句鼓励的话

格式: 简洁、友好、鼓励性
`;

            const summary = await callGeminiAPI(prompt);

            // 保存总结到insights
            await supabase
                .from('ai_conversations')
                .update({
                    insights: {
                        summary,
                        generated_at: new Date().toISOString()
                    }
                })
                .eq('user_id', userId)
                .eq('topic_id', topicId);

            return summary;
        } catch (error) {
            console.error('生成总结错误:', error);
            return null;
        }
    }
}

export default SmartTutor;

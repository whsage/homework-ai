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
import { sendMessageToTutor } from './aiService';

export class SmartTutor {
    /**
     * 智能对话 - 核心功能 (知识点辅导专用)
     * 
     * @param {string} userId - 用户ID
     * @param {string} topicId - 知识点ID
     * @param {string} userMessage - 用户消息
     * @param {Array} conversationHistory - 对话历史
     * @returns {Promise<string>} AI回复
     */
    static async chat(userId, topicId, userMessage, conversationHistory = []) {
        try {
            // 1. 诊断学生水平 (基于知识图谱) - 如果失败则使用默认值
            let diagnosis;
            try {
                diagnosis = await KnowledgeAssessment.diagnose(userId, topicId);
            } catch (diagnosisError) {
                console.warn('诊断失败,使用默认值:', diagnosisError.message);
                // 提供默认诊断结果
                diagnosis = {
                    topic: {
                        name: topicId,
                        skills: ['基础概念', '基本应用'],
                        difficulty: 0.5
                    },
                    currentMastery: 0,
                    skillBreakdown: {},
                    weakSkills: [],
                    prerequisites: [],
                    readyToLearn: true
                };
            }

            // 2. 获取学习上下文
            const context = await this.getLearningContext(userId, topicId);

            // 3. 调用知识点辅导AI (专用服务)
            const aiResponseText = await this.callKnowledgeTutorAI(
                userMessage,
                conversationHistory,
                context,
                diagnosis,
                topicId
            );

            // 4. 检测涉及的技能点
            const topic = diagnosis.topic;
            const mentionedSkills = topic
                ? KnowledgeAssessment.detectSkillsInMessage(
                    userMessage + ' ' + aiResponseText,
                    topic.skills
                )
                : [];

            // 5. 评估回答正确性
            const isCorrect = this.detectCorrectness(aiResponseText);

            // 6. 更新技能掌握度 (基于知识图谱) - 如果失败则跳过
            if (mentionedSkills.length > 0) {
                try {
                    await KnowledgeAssessment.updateSkillMastery(
                        userId,
                        topicId,
                        mentionedSkills,
                        isCorrect
                    );
                } catch (updateError) {
                    console.warn('更新掌握度失败:', updateError.message);
                    // 继续执行,不影响对话
                }
            }

            // 7. 保存对话到 ai_conversations 表 - 如果失败则跳过
            try {
                await this.saveConversation(userId, topicId, userMessage, aiResponseText);
            } catch (saveError) {
                console.warn('保存对话失败:', saveError.message);
                // 继续执行,不影响对话
            }

            return aiResponseText;
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
     * 调用知识点辅导AI (专用服务)
     * 使用与作业辅导相同的API Key,但使用专门的知识点讲解prompt
     */
    static async callKnowledgeTutorAI(userMessage, conversationHistory, context, diagnosis, topicId) {
        try {
            // 导入OpenAI client (复用aiService的配置)
            const OpenAI = (await import('openai')).default;
            const API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY;

            if (!API_KEY) {
                console.warn('No API Key found. Returning fallback response.');
                return '抱歉,AI服务暂时不可用。请稍后再试。';
            }

            const client = new OpenAI({
                apiKey: API_KEY,
                baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1",
                dangerouslyAllowBrowser: true
            });

            // 构建知识点辅导专用prompt
            const systemPrompt = this.buildKnowledgeTutoringPrompt(
                context,
                diagnosis,
                topicId
            );

            // 构建消息数组
            const messages = [
                {
                    role: "system",
                    content: systemPrompt
                }
            ];

            // 添加对话历史 (最近10条)
            const recentHistory = conversationHistory.slice(-10);
            recentHistory.forEach(msg => {
                messages.push({
                    role: msg.role === 'user' ? 'user' : 'assistant',
                    content: msg.content
                });
            });

            // 添加当前用户消息
            messages.push({
                role: "user",
                content: userMessage
            });

            // 调用AI API
            const completion = await client.chat.completions.create({
                model: "qwen-plus",
                messages: messages,
                temperature: 0.7,
                max_tokens: 1500
            });

            const responseText = completion.choices[0].message.content;
            return responseText;

        } catch (error) {
            console.error('Knowledge Tutor AI Error:', error);
            return '抱歉,我在思考时遇到了一些问题 😅 请稍后再试。';
        }
    }

    /**
     * 构建知识点辅导专用Prompt
     * 基于教育理论,根据年级和掌握度调整教学策略
     */
    static buildKnowledgeTutoringPrompt(context, diagnosis, topicId) {
        const { grade, learningStyle, recentPerformance } = context;
        const { topic, currentMastery, weakSkills, prerequisites } = diagnosis;

        // 推断年级层次
        const gradeLevel = this.getGradeLevel(grade, topicId);

        // 根据年级选择语言风格
        const languageStyle = this.getLanguageStyle(gradeLevel);

        // 根据掌握度选择教学策略
        const teachingStrategy = this.selectStrategy(currentMastery);
        const teachingApproach = this.getTeachingApproach(currentMastery);

        // 构建薄弱技能提示
        const weakSkillsHint = weakSkills && weakSkills.length > 0
            ? `\n【重点关注】学生在以下技能需要加强: ${weakSkills.slice(0, 2).map(s => s.name).join('、')}`
            : '';

        // 构建前置知识提示
        const prereqHint = prerequisites && prerequisites.length > 0 && prerequisites.some(p => !p.isMastered)
            ? `\n【注意】学生的前置知识有欠缺,讲解时需要适当回顾基础。`
            : '';

        const topicName = topic?.name || '数学知识点';
        const topicSkills = topic?.skills?.join('、') || '基础概念';

        return `你是一位经验丰富、充满耐心的${gradeLevel}数学AI导师,正在讲解${topicName}。

【教学目标】
- 知识点: ${topicName}
- 核心技能: ${topicSkills}
- 学生掌握度: ${(currentMastery * 100).toFixed(0)}%${weakSkillsHint}${prereqHint}

【学生画像】
- 年级: ${grade || gradeLevel}
- 学习风格: ${learningStyle.tutoringStyle || '平衡型'}
- 最近表现: ${recentPerformance}

【教学策略 - 基于教育理论】
${teachingStrategy}

【语言风格】
${languageStyle}

【教学方法】
- 使用${teachingApproach}
- ${gradeLevel === '小学' ? '多用生活场景(披萨、苹果等)解释抽象概念' : ''}
- ${gradeLevel === '初中' ? '通过苏格拉底式提问,引导学生自己发现知识' : ''}
- ${gradeLevel === '高中' ? '培养抽象思维,多种解法对比,渗透数学思想' : ''}
- ${gradeLevel === '大学' ? '严格的数学证明,理论推导,实际应用' : ''}

【重要原则】
1. 每次回复控制在150字以内,避免信息过载
2. 多用例子和类比,让抽象概念具体化
3. 不要直接给答案,而是引导思考
4. 及时鼓励,培养成长型思维
5. 适时提问,检查理解程度
6. 用emoji让对话更生动 😊

请用简洁、友好、${gradeLevel}学生能理解的语言进行讲解:`;
    }

    /**
     * 推断年级层次
     */
    static getGradeLevel(grade, topicId) {
        // 从用户设置的年级推断
        if (grade) {
            if (grade.includes('小学')) return '小学';
            if (grade.includes('初中')) return '初中';
            if (grade.includes('高中')) return '高中';
            if (grade.includes('大学')) return '大学';
        }

        // 从topicId推断 (作为后备)
        if (topicId) {
            // 小学知识点
            if (topicId.includes('fraction') || topicId.includes('decimal') ||
                topicId.includes('addition') || topicId.includes('multiplication')) {
                return '小学';
            }
            // 初中知识点
            if (topicId.includes('quadratic') || topicId.includes('linear') ||
                topicId.includes('polynomial') || topicId.includes('equation')) {
                return '初中';
            }
            // 高中知识点
            if (topicId.includes('derivative') || topicId.includes('trigonometry') ||
                topicId.includes('vector') || topicId.includes('conic')) {
                return '高中';
            }
            // 大学知识点
            if (topicId.includes('calculus') || topicId.includes('linear-algebra') ||
                topicId.includes('limit') || topicId.includes('integral')) {
                return '大学';
            }
        }

        // 默认返回初中
        return '初中';
    }

    /**
     * 根据年级获取语言风格
     * 基于教育理论的年龄特点
     */
    static getLanguageStyle(gradeLevel) {
        const styles = {
            '小学': `- 亲切活泼,像邻家大哥哥/姐姐
- 多用emoji (🌟🔥👏),拒绝晦涩术语
- 使用生活化比喻(披萨、苹果、游戏)
- 语言简单直白,避免复杂句式`,

            '初中': `- 温和坚定,标准辅导老师
- 清晰流畅,适当使用专业术语但要解释
- 既有趣味性又有专业性
- 引导思考,培养逻辑思维`,

            '高中': `- 专业严谨,学术导师
- 直击重点,逻辑严密
- 可以使用数学术语和符号
- 培养抽象思维和数学素养`,

            '大学': `- 学术导师,专业高效
- 理论推导,严格证明
- 注重数学思想和方法
- 培养研究能力和创新思维`
        };

        return styles[gradeLevel] || styles['初中'];
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
            /*
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
            */

            // const summary = await callGeminiAPI(prompt);
            const summary = "学习总结功能正在升级中..."; // 临时占位，因为 callGeminiAPI 已移除

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

/**
 * 智能练习服务
 * 
 * 功能:
 * 1. 根据学生水平生成个性化题目
 * 2. 智能批改和反馈
 * 3. 实时调整难度
 */

import { supabase } from '../supabase';
import { callGeminiAPI } from './smartTutor'; // 复用API调用
import { SmartTutor } from './smartTutor';
import { KnowledgeAssessment } from './knowledgeAssessment';

export class SmartPractice {
    /**
     * 生成个性化练习题
     * 
     * @param {string} userId - 用户ID
     * @param {string} topicId - 知识点ID
     * @param {number} count - 题目数量
     * @returns {Promise<Array>} 题目列表
     */
    static async generateProblems(userId, topicId, count = 3) {
        try {
            // 1. 获取诊断信息(包含掌握度和薄弱点)
            const diagnosis = await KnowledgeAssessment.diagnose(userId, topicId);
            const { currentMastery, weakSkills, topic } = diagnosis;

            // 2. 计算目标难度 (ZPD理论:略高于当前水平)
            const difficulty = this.calculateDifficulty(currentMastery);

            // 3. 构建生成Prompt
            const prompt = this.buildGenerationPrompt(diagnosis, count, difficulty);

            // 4. 调用AI生成
            console.log('正在生成练习题...', { difficulty, weakSkills: weakSkills.map(s => s.name) });
            const response = await callGeminiAPI(prompt, true); // true表示需要JSON格式

            // 5. 解析结果
            return this.parseProblems(response, topicId);
        } catch (error) {
            console.error('SmartPractice.generateProblems错误:', error);
            // 发生错误时返回兜底题目(这里以后可以做本地题库兜底)
            return [];
        }
    }

    /**
     * 智能反馈与批改
     * 
     * @param {string} userId - 用户ID
     * @param {Object} problem - 题目对象
     * @param {string} studentAnswer - 学生答案
     * @returns {Promise<Object>} 反馈结果
     */
    static async provideFeedback(userId, problem, studentAnswer) {
        try {
            // 1. 获取学习上下文
            const context = await SmartTutor.getLearningContext(userId, problem.topicId);

            // 2. 构建反馈Prompt
            const prompt = `
你是一位专业的数学老师。学生做了一道练习题,请进行批改和点评。

【题目信息】
- 题目: ${problem.question}
- 题型: ${problem.type}
- 标准答案: ${problem.answer}
- 解析: ${problem.solution?.explanation || '无'}

【学生答案】
${studentAnswer}

【学生状态】
- 当前掌握度: ${(context.topicMastery * 100).toFixed(0)}%
- 最近表现: ${context.recentPerformance}

【反馈要求】
1. 判断正误 (isCorrect)
2. 给出简短点评 (feedback):
   - 如果对了: 表扬并指出哪里做得好
   - 如果错了: 温和地指出错误原因,并提供一个引导性问题(不要直接给答案)
3. 学习建议 (suggestion): 下一步该怎么做

请返回JSON格式:
{
  "isCorrect": true/false,
  "feedback": "...",
  "suggestion": "...",
  "explanation": "..." (详细解析)
}
`;

            // 3. 调用AI
            const response = await callGeminiAPI(prompt, true);
            const result = JSON.parse(this.cleanJsonString(response));

            // 4. 更新知识图谱状态 (重要!)
            // 如果题目关联了特定技能,只更新该技能
            // 这里简化处理,关联到当前topic
            if (problem.topicId) {
                // 如果答对了,提升; 答错了,降低
                // 但练习模式的权重可以比对话模式低一些或者高一些
                // 这里暂不直接调用updateSkillMastery,留给前端根据结果调用或者在这里调用
                // 为了闭环,我们在这里更新:

                // 简单的技能推断
                const skills = problem.skills || [];
                if (skills.length > 0) {
                    await KnowledgeAssessment.updateSkillMastery(
                        userId,
                        problem.topicId,
                        skills,
                        result.isCorrect
                    );
                }
            }

            return result;
        } catch (error) {
            console.error('SmartPractice.provideFeedback错误:', error);
            return {
                isCorrect: false,
                feedback: "抱歉,老师还在思考,请稍后再试。",
                suggestion: "重新提交看看?",
                explanation: ""
            };
        }
    }

    // ================= 私有辅助方法 =================

    static calculateDifficulty(mastery) {
        // 如果掌握度低,难度要低 (建立信心)
        // 如果掌握度高,难度要高 (挑战自我)
        const base = mastery + 0.1; // 略高一点点
        if (base < 0.4) return '基础 (注重概念理解)';
        if (base < 0.7) return '中等 (注重综合运用)';
        return '进阶 (注重思维拓展和陷阱识别)';
    }

    static buildGenerationPrompt(diagnosis, count, difficulty) {
        const { topic, weakSkills } = diagnosis;
        const topicName = topic?.name || '未知知识点';

        // 重点关注薄弱点
        const focusArea = weakSkills.length > 0
            ? `重点考察薄弱技能: ${weakSkills.map(s => s.name).join('、')}`
            : '全面巩固核心技能';

        return `
你是一位资深的数学出题专家。请为学生生成关于"${topicName}"的练习题。

【出题要求】
1. 数量: ${count}道
2. 难度: ${difficulty}
3. 焦点: ${focusArea}
4. 题型: 包含选择题(choice)和填空题(fill)

请严格按照以下JSON格式返回:
[
  {
    "id": "如果可能,生成一个唯一ID",
    "topicId": "${topic?.id || ''}",
    "type": "choice" 或 "fill",
    "question": "题目具体内容,支持LaTeX公式",
    "options": ["A. 选项1", "B. 选项2", "C. 选项3", "D. 选项4"], (仅选择题需要)
    "answer": "标准答案",
    "skills": ["涉及的技能点名称1", "涉及的技能点名称2"],
    "solution": {
      "steps": ["解题步骤1", "解题步骤2"],
      "explanation": "核心思路讲解"
    },
    "hint": "一个简单的提示,用于学生卡住时查看"
  }
]
`;
    }

    static parseProblems(response, topicId) {
        try {
            const jsonStr = this.cleanJsonString(response);
            const problems = JSON.parse(jsonStr);

            // 数据清洗和补全
            return problems.map((p, index) => ({
                ...p,
                id: p.id || `gen_${Date.now()}_${index}`,
                topicId: p.topicId || topicId
            }));
        } catch (e) {
            console.error("解析题目JSON失败:", e);
            return [];
        }
    }

    static cleanJsonString(str) {
        // 移除Markdown代码块标记
        let cleaned = str.replace(/```json/g, '').replace(/```/g, '');
        // 移除可能的前后缀文本
        const firstOpen = cleaned.indexOf('[');
        const lastClose = cleaned.lastIndexOf(']');
        const firstOpenObj = cleaned.indexOf('{');
        const lastCloseObj = cleaned.lastIndexOf('}');

        if (firstOpen !== -1 && lastClose !== -1) {
            // 如果是数组
            if (firstOpen < firstOpenObj || firstOpenObj === -1) {
                cleaned = cleaned.substring(firstOpen, lastClose + 1);
            } else {
                // 如果是对象但我们期望数组,可能需要包装,或者AI只返回了一个对象
                cleaned = cleaned.substring(firstOpenObj, lastCloseObj + 1);
            }
        } else if (firstOpenObj !== -1 && lastCloseObj !== -1) {
            cleaned = cleaned.substring(firstOpenObj, lastCloseObj + 1);
        }

        return cleaned;
    }
}

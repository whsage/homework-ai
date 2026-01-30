/**
 * 知识评估服务
 * 
 * 功能:
 * - 基于知识图谱评估学生掌握度
 * - 诊断薄弱知识点
 * - 推荐学习路径
 * - 检查前置知识
 */

import { supabase } from '../supabase';
import mathKnowledgeGraph, { KnowledgeGraphHelper } from '../data/mathKnowledgeGraph';

export class KnowledgeAssessment {
    /**
     * 诊断学生当前水平
     * 
     * @param {string} userId - 用户ID
     * @param {string} topicId - 知识点ID (如 'mid-9-1-quadratic-functions')
     * @returns {Promise<Object>} 诊断结果
     */
    static async diagnose(userId, topicId) {
        try {
            // 1. 获取知识点定义
            const topic = KnowledgeGraphHelper.findTopicById(topicId);
            if (!topic) {
                throw new Error(`知识点 ${topicId} 不存在`);
            }

            // 2. 检查前置知识
            const prerequisites = await this.checkPrerequisites(userId, topic.prerequisites);

            // 3. 获取当前知识点掌握情况
            const currentMastery = await this.getTopicMastery(userId, topicId);

            // 4. 分析薄弱技能点
            const weakSkills = this.identifyWeakSkills(currentMastery, topic.skills);

            return {
                topic,
                currentMastery: currentMastery.overall,
                skillBreakdown: currentMastery.skills,
                weakSkills,
                prerequisites,
                readyToLearn: prerequisites.every(p => p.mastery >= 0.7),
                recommendation: this.generateRecommendation(prerequisites, currentMastery, topic)
            };
        } catch (error) {
            console.error('诊断错误:', error);
            throw error;
        }
    }

    /**
     * 检查前置知识掌握情况
     */
    static async checkPrerequisites(userId, prerequisiteIds) {
        if (!prerequisiteIds || prerequisiteIds.length === 0) {
            return [];
        }

        const results = [];

        for (const prereqId of prerequisiteIds) {
            const topic = KnowledgeGraphHelper.findTopicById(prereqId);
            const mastery = await this.getTopicMastery(userId, prereqId);

            results.push({
                id: prereqId,
                name: topic?.name || prereqId,
                mastery: mastery.overall,
                isMastered: mastery.overall >= 0.7,
                status: mastery.overall >= 0.7 ? '已掌握' : '需要复习'
            });
        }

        return results;
    }

    /**
     * 获取知识点掌握度
     */
    static async getTopicMastery(userId, topicId) {
        try {
            const { data: snapshot } = await supabase
                .from('topic_snapshots')
                .select('*')
                .eq('user_id', userId)
                .eq('topic_id', topicId)
                .maybeSingle();

            if (!snapshot) {
                return {
                    overall: 0,
                    skills: {},
                    attempts: 0,
                    status: 'not_started'
                };
            }

            return {
                overall: snapshot.mastery_score || 0,
                skills: snapshot.skill_mastery || {},
                attempts: snapshot.attempts || 0,
                correct: snapshot.correct || 0,
                lastPracticed: snapshot.last_practiced,
                status: this.getStatus(snapshot.mastery_score, snapshot.attempts)
            };
        } catch (error) {
            console.error('获取掌握度错误:', error);
            return { overall: 0, skills: {}, attempts: 0, status: 'error' };
        }
    }

    /**
     * 获取学习状态
     */
    static getStatus(mastery, attempts) {
        if (attempts === 0) return 'not_started';
        if (mastery >= 0.9) return 'mastered';
        if (mastery >= 0.7) return 'proficient';
        if (mastery >= 0.5) return 'learning';
        return 'struggling';
    }

    /**
     * 识别薄弱技能点
     */
    static identifyWeakSkills(mastery, requiredSkills) {
        const skillMastery = mastery.skills || {};
        const threshold = 0.7;

        return requiredSkills
            .map(skill => ({
                name: skill,
                mastery: skillMastery[skill] || 0,
                isWeak: (skillMastery[skill] || 0) < threshold
            }))
            .filter(s => s.isWeak)
            .sort((a, b) => a.mastery - b.mastery); // 最弱的排在前面
    }

    /**
     * 生成学习建议
     */
    static generateRecommendation(prerequisites, currentMastery, topic) {
        // 1. 检查前置知识
        const missingPrereqs = prerequisites.filter(p => !p.isMastered);
        if (missingPrereqs.length > 0) {
            return {
                action: 'review_prerequisites',
                message: `建议先复习前置知识: ${missingPrereqs.map(p => p.name).join('、')}`,
                topics: missingPrereqs.map(p => p.id),
                priority: 'high'
            };
        }

        // 2. 检查当前掌握度
        if (currentMastery.overall >= 0.9) {
            return {
                action: 'move_forward',
                message: `恭喜!你已经掌握了"${topic.name}",可以学习新内容了!`,
                priority: 'low'
            };
        }

        if (currentMastery.overall >= 0.7) {
            return {
                action: 'consolidate',
                message: `你对"${topic.name}"的理解不错,再巩固一下就能完全掌握!`,
                priority: 'medium'
            };
        }

        // 3. 需要继续学习
        return {
            action: 'continue_learning',
            message: `继续学习"${topic.name}",重点关注薄弱环节`,
            priority: 'high'
        };
    }

    /**
     * 更新技能掌握度
     * 
     * @param {string} userId - 用户ID
     * @param {string} topicId - 知识点ID
     * @param {string[]} skills - 涉及的技能点
     * @param {boolean} isCorrect - 是否正确
     */
    static async updateSkillMastery(userId, topicId, skills, isCorrect) {
        try {
            // 获取或创建快照
            let { data: snapshot } = await supabase
                .from('topic_snapshots')
                .select('*')
                .eq('user_id', userId)
                .eq('topic_id', topicId)
                .maybeSingle();

            if (!snapshot) {
                // 创建新快照
                const { data: newSnapshot, error } = await supabase
                    .from('topic_snapshots')
                    .insert({
                        user_id: userId,
                        topic_id: topicId,
                        attempts: 0,
                        correct: 0,
                        mastery_score: 0,
                        skill_mastery: {}
                    })
                    .select()
                    .single();

                if (error) throw error;
                snapshot = newSnapshot;
            }

            // 更新技能掌握度
            const skillMastery = snapshot.skill_mastery || {};
            const alpha = 0.3; // 学习率

            skills.forEach(skill => {
                const current = skillMastery[skill] || 0.5; // 默认50%
                skillMastery[skill] = current * (1 - alpha) + (isCorrect ? 1 : 0) * alpha;
            });

            // 计算整体掌握度 (所有技能的平均值)
            const topic = KnowledgeGraphHelper.findTopicById(topicId);
            const requiredSkills = topic?.skills || skills;
            const masteryScores = requiredSkills.map(s => skillMastery[s] || 0);
            const overallMastery = masteryScores.length > 0
                ? masteryScores.reduce((a, b) => a + b, 0) / masteryScores.length
                : 0;

            // 更新数据库
            const { error } = await supabase
                .from('topic_snapshots')
                .update({
                    attempts: snapshot.attempts + 1,
                    correct: snapshot.correct + (isCorrect ? 1 : 0),
                    mastery_score: overallMastery,
                    skill_mastery: skillMastery,
                    last_practiced: new Date().toISOString(),
                    next_review: this.calculateNextReview(overallMastery)
                })
                .eq('user_id', userId)
                .eq('topic_id', topicId);

            if (error) throw error;

            return {
                overall: overallMastery,
                skills: skillMastery
            };
        } catch (error) {
            console.error('更新技能掌握度错误:', error);
            throw error;
        }
    }

    /**
     * 计算下次复习时间
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
     * 检测对话中涉及的技能点
     * 
     * @param {string} message - 用户消息
     * @param {string[]} skills - 知识点的所有技能
     * @returns {string[]} 涉及的技能
     */
    static detectSkillsInMessage(message, skills) {
        const mentioned = [];

        // 简单的关键词匹配
        skills.forEach(skill => {
            // 将技能拆分为关键词
            const keywords = skill.split(/[、，,]/);

            if (keywords.some(keyword => message.includes(keyword))) {
                mentioned.push(skill);
            }
        });

        return mentioned.length > 0 ? mentioned : skills; // 如果没检测到,默认涉及所有技能
    }

    /**
     * 推荐下一步学习内容
     */
    static async recommendNext(userId, currentTopicId) {
        try {
            // 1. 检查当前知识点掌握度
            const mastery = await this.getTopicMastery(userId, currentTopicId);
            const topic = KnowledgeGraphHelper.findTopicById(currentTopicId);

            // 2. 如果未掌握,继续当前知识点
            if (mastery.overall < 0.8) {
                const weakSkills = this.identifyWeakSkills(mastery, topic.skills);

                return {
                    action: 'practice_more',
                    topic: currentTopicId,
                    topicName: topic.name,
                    reason: '继续巩固当前知识点',
                    focusSkills: weakSkills.map(s => s.name),
                    message: `建议重点练习: ${weakSkills.slice(0, 2).map(s => s.name).join('、')}`
                };
            }

            // 3. 如果已掌握,查找后续知识点
            const nextTopic = await this.findNextTopic(userId, currentTopicId);

            if (nextTopic) {
                return {
                    action: 'move_forward',
                    topic: nextTopic.id,
                    topicName: nextTopic.name,
                    reason: `你已经掌握了"${topic.name}"`,
                    message: `太棒了!可以开始学习"${nextTopic.name}"了! 🎉`
                };
            }

            // 4. 没有后续知识点,建议复习
            return {
                action: 'review',
                topic: currentTopicId,
                topicName: topic.name,
                reason: '已完成当前学习单元',
                message: '恭喜完成学习!可以复习巩固或挑战更难的内容。'
            };
        } catch (error) {
            console.error('推荐下一步错误:', error);
            return null;
        }
    }

    /**
     * 查找下一个应该学习的知识点
     */
    static async findNextTopic(userId, currentTopicId) {
        // 简化版:在同一学期内查找下一个知识点
        const currentTopic = KnowledgeGraphHelper.findTopicById(currentTopicId);
        if (!currentTopic) return null;

        // 查找当前知识点所在的学期
        for (const stage of ['elementary', 'middle', 'high']) {
            for (const grade in mathKnowledgeGraph[stage]) {
                const gradeData = mathKnowledgeGraph[stage][grade];
                const semesters = gradeData.semesters || gradeData.modules;

                for (const semester in semesters) {
                    const topics = semesters[semester];
                    const currentIndex = topics.findIndex(t => t.id === currentTopicId);

                    if (currentIndex !== -1 && currentIndex < topics.length - 1) {
                        // 返回下一个知识点
                        return topics[currentIndex + 1];
                    }
                }
            }
        }

        return null;
    }

    /**
     * 获取学生的学习统计
     */
    static async getStudentStats(userId) {
        try {
            const { data: snapshots } = await supabase
                .from('topic_snapshots')
                .select('*')
                .eq('user_id', userId);

            if (!snapshots || snapshots.length === 0) {
                return {
                    totalTopics: 0,
                    masteredTopics: 0,
                    learningTopics: 0,
                    strugglingTopics: 0,
                    avgMastery: 0
                };
            }

            const stats = {
                totalTopics: snapshots.length,
                masteredTopics: snapshots.filter(s => s.mastery_score >= 0.9).length,
                proficientTopics: snapshots.filter(s => s.mastery_score >= 0.7 && s.mastery_score < 0.9).length,
                learningTopics: snapshots.filter(s => s.mastery_score >= 0.5 && s.mastery_score < 0.7).length,
                strugglingTopics: snapshots.filter(s => s.mastery_score < 0.5).length,
                avgMastery: snapshots.reduce((sum, s) => sum + s.mastery_score, 0) / snapshots.length,
                totalAttempts: snapshots.reduce((sum, s) => sum + s.attempts, 0),
                totalCorrect: snapshots.reduce((sum, s) => sum + s.correct, 0)
            };

            return stats;
        } catch (error) {
            console.error('获取学习统计错误:', error);
            return null;
        }
    }
}

export default KnowledgeAssessment;

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

/**
 * RewardContext - 游戏化奖励系统
 * 
 * Features:
 * - ⭐ 星星积分：答对题目、完成互动实验获得
 * - 🏅 成就徽章：达成特定条件时自动解锁
 * - 🔥 连续答对：连续答对加分倍率
 * - 📊 学习进度：按年级/课题追踪
 * 
 * localStorage key: 'learning_rewards'
 */

const ACHIEVEMENTS = [
    { id: 'first_star', name: '第一颗星', emoji: '⭐', desc: '获得第一颗星星', condition: (s) => s.totalStars >= 1 },
    { id: 'ten_stars', name: '十星闪耀', emoji: '🌟', desc: '累计获得10颗星星', condition: (s) => s.totalStars >= 10 },
    { id: 'fifty_stars', name: '星光灿烂', emoji: '💫', desc: '累计获得50颗星星', condition: (s) => s.totalStars >= 50 },
    { id: 'hundred_stars', name: '超级明星', emoji: '🌠', desc: '累计获得100颗星星', condition: (s) => s.totalStars >= 100 },
    { id: 'first_correct', name: '初试牛刀', emoji: '✅', desc: '第一次答对题目', condition: (s) => s.correctCount >= 1 },
    { id: 'ten_correct', name: '小试身手', emoji: '🎯', desc: '累计答对10道题', condition: (s) => s.correctCount >= 10 },
    { id: 'fifty_correct', name: '学霸之路', emoji: '🏆', desc: '累计答对50道题', condition: (s) => s.correctCount >= 50 },
    { id: 'streak_3', name: '三连胜', emoji: '🔥', desc: '连续答对3道', condition: (s) => s.bestStreak >= 3 },
    { id: 'streak_5', name: '五连斩', emoji: '⚡', desc: '连续答对5道', condition: (s) => s.bestStreak >= 5 },
    { id: 'streak_10', name: '无人能挡', emoji: '💎', desc: '连续答对10道', condition: (s) => s.bestStreak >= 10 },
    { id: 'first_topic', name: '探索家', emoji: '🗺️', desc: '完成第一个课题的练习', condition: (s) => s.completedTopics >= 1 },
    { id: 'five_topics', name: '知识猎人', emoji: '📚', desc: '完成5个课题的练习', condition: (s) => s.completedTopics >= 5 },
];

const DEFAULT_STATE = {
    totalStars: 0,
    correctCount: 0,
    wrongCount: 0,
    currentStreak: 0,
    bestStreak: 0,
    completedTopics: 0,
    unlockedAchievements: [],
    topicProgress: {}, // { topicId: { correct: number, total: number, stars: number } }
    recentRewards: [], // for notification queue
};

const STORAGE_KEY = 'learning_rewards';
const LEGACY_STORAGE_KEY = 'math_rewards';

// 科目前缀映射
const SUBJECT_MAP = {
    en: { name: '英语', emoji: '🔤', color: 'amber' },
    math: { name: '数学', emoji: '🔢', color: 'blue' },
    cn: { name: '语文', emoji: '📖', color: 'red' },
};

const RewardContext = createContext(null);

export const useRewards = () => {
    const ctx = useContext(RewardContext);
    if (!ctx) {
        // Return a no-op version if used outside provider
        return {
            state: DEFAULT_STATE,
            addStars: () => { },
            recordAnswer: () => { },
            getTopicProgress: () => ({ correct: 0, total: 0, stars: 0 }),
            achievements: ACHIEVEMENTS,
            pendingNotifications: [],
            dismissNotification: () => { },
        };
    }
    return ctx;
};

export const RewardProvider = ({ children }) => {
    const [state, setState] = useState(() => {
        try {
            // Try new key first, then migrate from legacy key
            let saved = localStorage.getItem(STORAGE_KEY);
            if (!saved) {
                saved = localStorage.getItem(LEGACY_STORAGE_KEY);
                if (saved) {
                    localStorage.setItem(STORAGE_KEY, saved);
                    localStorage.removeItem(LEGACY_STORAGE_KEY);
                }
            }
            if (saved) {
                return { ...DEFAULT_STATE, ...JSON.parse(saved) };
            }
        } catch (e) {
            console.warn('Failed to load rewards:', e);
        }
        return DEFAULT_STATE;
    });

    const [pendingNotifications, setPendingNotifications] = useState([]);

    // Persist to localStorage
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (e) {
            console.warn('Failed to save rewards:', e);
        }
    }, [state]);

    const queueNotification = useCallback((notification) => {
        setPendingNotifications(prev => [...prev, { ...notification, id: Date.now() + Math.random() }]);
    }, []);

    const dismissNotification = useCallback(() => {
        setPendingNotifications(prev => prev.slice(1));
    }, []);

    // Check and unlock new achievements
    const checkAchievements = useCallback((newState) => {
        const newlyUnlocked = [];
        ACHIEVEMENTS.forEach(achievement => {
            if (!newState.unlockedAchievements.includes(achievement.id) && achievement.condition(newState)) {
                newlyUnlocked.push(achievement.id);
                queueNotification({
                    type: 'achievement',
                    achievement,
                });
            }
        });
        if (newlyUnlocked.length > 0) {
            newState.unlockedAchievements = [...newState.unlockedAchievements, ...newlyUnlocked];
        }
        return newState;
    }, [queueNotification]);

    const addStars = useCallback((amount, reason = '') => {
        setState(prev => {
            const newState = { ...prev, totalStars: prev.totalStars + amount };
            queueNotification({
                type: 'stars',
                amount,
                reason,
            });
            return checkAchievements(newState);
        });
    }, [checkAchievements, queueNotification]);

    const recordAnswer = useCallback((topicId, isCorrect) => {
        setState(prev => {
            const newState = { ...prev };

            if (isCorrect) {
                const streakBonus = prev.currentStreak >= 4 ? 3 : prev.currentStreak >= 2 ? 2 : 1;
                const starsEarned = streakBonus;

                newState.correctCount = prev.correctCount + 1;
                newState.currentStreak = prev.currentStreak + 1;
                newState.bestStreak = Math.max(newState.currentStreak, prev.bestStreak);
                newState.totalStars = prev.totalStars + starsEarned;

                queueNotification({
                    type: 'stars',
                    amount: starsEarned,
                    reason: starsEarned > 1 ? `连续答对 ${newState.currentStreak} 题！×${streakBonus} 加倍！` : '答对啦！',
                    streak: newState.currentStreak,
                });
            } else {
                newState.wrongCount = prev.wrongCount + 1;
                newState.currentStreak = 0;
            }

            // Update topic progress
            const topicPrev = prev.topicProgress[topicId] || { correct: 0, total: 0, stars: 0 };
            newState.topicProgress = {
                ...prev.topicProgress,
                [topicId]: {
                    correct: topicPrev.correct + (isCorrect ? 1 : 0),
                    total: topicPrev.total + 1,
                    stars: topicPrev.stars + (isCorrect ? 1 : 0),
                },
            };

            // Check if topic has enough correct answers to be "completed"
            const updatedTopic = newState.topicProgress[topicId];
            if (updatedTopic.correct >= 2 && topicPrev.correct < 2) {
                newState.completedTopics = (prev.completedTopics || 0) + 1;
            }

            return checkAchievements(newState);
        });
    }, [checkAchievements, queueNotification]);

    const getTopicProgress = useCallback((topicId) => {
        return state.topicProgress[topicId] || { correct: 0, total: 0, stars: 0 };
    }, [state.topicProgress]);

    // 按科目前缀统计
    const getSubjectStats = useCallback((prefix) => {
        const topics = state.topicProgress;
        let correct = 0, total = 0, stars = 0, topicCount = 0;
        Object.entries(topics).forEach(([id, data]) => {
            if (id.startsWith(prefix)) {
                correct += data.correct || 0;
                total += data.total || 0;
                stars += data.stars || 0;
                topicCount++;
            }
        });
        const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
        return { correct, total, stars, topicCount, accuracy };
    }, [state.topicProgress]);

    const getAllSubjectStats = useCallback(() => {
        return Object.entries(SUBJECT_MAP).map(([prefix, meta]) => ({
            prefix,
            ...meta,
            ...getSubjectStats(prefix),
        }));
    }, [getSubjectStats]);

    const resetRewards = useCallback(() => {
        setState(DEFAULT_STATE);
        setPendingNotifications([]);
        localStorage.removeItem(STORAGE_KEY);
    }, []);

    const value = {
        state,
        addStars,
        recordAnswer,
        getTopicProgress,
        achievements: ACHIEVEMENTS,
        pendingNotifications,
        dismissNotification,
        resetRewards,
        getSubjectStats,
        getAllSubjectStats,
    };

    return (
        <RewardContext.Provider value={value}>
            {children}
        </RewardContext.Provider>
    );
};

export default RewardContext;

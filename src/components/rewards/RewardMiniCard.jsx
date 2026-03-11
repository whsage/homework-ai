import React from 'react';
import { useRewards } from '../../context/RewardContext';
import { Star, Flame, Trophy } from 'lucide-react';

/**
 * RewardMiniCard - 精简一行式奖励条
 * 放在知识点页面顶部，展示星星总数、连胜、最近成就
 */
const RewardMiniCard = () => {
    const { state, achievements } = useRewards();

    // 获取最近解锁的成就
    const lastAchievement = state.unlockedAchievements.length > 0
        ? achievements.find(a => a.id === state.unlockedAchievements[state.unlockedAchievements.length - 1])
        : null;

    return (
        <div className="mb-4 flex items-center gap-3 flex-wrap px-4 py-2.5 bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-900/10 dark:via-amber-900/10 dark:to-orange-900/10 rounded-xl border border-yellow-200/60 dark:border-yellow-800/30">
            {/* 星星 */}
            <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-400" />
                <span className="font-bold text-yellow-700 dark:text-yellow-300 text-sm">{state.totalStars}</span>
            </div>

            <span className="text-slate-300 dark:text-slate-600 text-xs">|</span>

            {/* 连胜 */}
            {state.currentStreak > 0 ? (
                <div className="flex items-center gap-1">
                    <Flame className="w-4 h-4 text-orange-500" />
                    <span className="font-bold text-orange-600 dark:text-orange-400 text-sm">{state.currentStreak}连胜</span>
                </div>
            ) : (
                <div className="flex items-center gap-1">
                    <Flame className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                    <span className="text-slate-400 dark:text-slate-500 text-sm">待连胜</span>
                </div>
            )}

            <span className="text-slate-300 dark:text-slate-600 text-xs">|</span>

            {/* 最近成就 */}
            {lastAchievement ? (
                <div className="flex items-center gap-1">
                    <span className="text-base">{lastAchievement.emoji}</span>
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{lastAchievement.name}</span>
                </div>
            ) : (
                <div className="flex items-center gap-1">
                    <Trophy className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                    <span className="text-slate-400 dark:text-slate-500 text-sm">答题解锁成就</span>
                </div>
            )}

            {/* 成就统计 */}
            <div className="ml-auto hidden sm:flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                <Trophy className="w-3.5 h-3.5" />
                <span>{state.unlockedAchievements.length}/{achievements.length}</span>
            </div>
        </div>
    );
};

export default RewardMiniCard;

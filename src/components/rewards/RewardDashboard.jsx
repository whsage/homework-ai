import React, { useState } from 'react';
import { useRewards } from '../../context/RewardContext';
import { Star, Trophy, Flame, Target, BarChart3, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';

/**
 * RewardDashboard - 奖励仪表盘
 * 可折叠面板，显示星星数、成就、连胜等信息
 */
const RewardDashboard = () => {
    const { state, achievements, resetRewards } = useRewards();
    const [expanded, setExpanded] = useState(false);
    const [showReset, setShowReset] = useState(false);

    const accuracy = state.correctCount + state.wrongCount > 0
        ? Math.round((state.correctCount / (state.correctCount + state.wrongCount)) * 100)
        : 0;

    const unlockedCount = state.unlockedAchievements.length;

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden">
            {/* Collapsed Header - Always Visible */}
            <button
                onClick={() => setExpanded(!expanded)}
                className="w-full px-5 py-3 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
            >
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 bg-yellow-50 dark:bg-yellow-900/20 px-3 py-1.5 rounded-full">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-400" />
                        <span className="font-bold text-yellow-700 dark:text-yellow-300 text-sm">{state.totalStars}</span>
                    </div>
                    {state.currentStreak > 0 && (
                        <div className="flex items-center gap-1 bg-orange-50 dark:bg-orange-900/20 px-3 py-1.5 rounded-full">
                            <Flame className="w-4 h-4 text-orange-500" />
                            <span className="font-bold text-orange-700 dark:text-orange-300 text-sm">{state.currentStreak}连胜</span>
                        </div>
                    )}
                    <div className="flex items-center gap-1 bg-purple-50 dark:bg-purple-900/20 px-3 py-1.5 rounded-full">
                        <Trophy className="w-4 h-4 text-purple-500" />
                        <span className="font-bold text-purple-700 dark:text-purple-300 text-sm">{unlockedCount}/{achievements.length}</span>
                    </div>
                </div>
                {expanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
            </button>

            {/* Expanded Content */}
            {expanded && (
                <div className="px-5 pb-5 space-y-5 border-t border-slate-100 dark:border-slate-700 pt-4 animate-in slide-in-from-top-2 duration-300">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="bg-yellow-50 dark:bg-yellow-900/10 p-3 rounded-xl text-center">
                            <Star className="w-6 h-6 text-yellow-500 mx-auto mb-1 fill-yellow-400" />
                            <p className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">{state.totalStars}</p>
                            <p className="text-xs text-yellow-600/70">星星总数</p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/10 p-3 rounded-xl text-center">
                            <Target className="w-6 h-6 text-green-500 mx-auto mb-1" />
                            <p className="text-2xl font-bold text-green-700 dark:text-green-300">{accuracy}%</p>
                            <p className="text-xs text-green-600/70">正确率</p>
                        </div>
                        <div className="bg-orange-50 dark:bg-orange-900/10 p-3 rounded-xl text-center">
                            <Flame className="w-6 h-6 text-orange-500 mx-auto mb-1" />
                            <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">{state.bestStreak}</p>
                            <p className="text-xs text-orange-600/70">最高连胜</p>
                        </div>
                        <div className="bg-indigo-50 dark:bg-indigo-900/10 p-3 rounded-xl text-center">
                            <BarChart3 className="w-6 h-6 text-indigo-500 mx-auto mb-1" />
                            <p className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">{state.correctCount}</p>
                            <p className="text-xs text-indigo-600/70">答对题数</p>
                        </div>
                    </div>

                    {/* Achievements */}
                    <div>
                        <h4 className="text-sm font-bold text-slate-600 dark:text-slate-400 mb-3 flex items-center gap-2">
                            <Trophy className="w-4 h-4" /> 成就徽章
                        </h4>
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                            {achievements.map(a => {
                                const unlocked = state.unlockedAchievements.includes(a.id);
                                return (
                                    <div
                                        key={a.id}
                                        className={`p-3 rounded-xl text-center transition-all ${unlocked
                                                ? 'bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800'
                                                : 'bg-slate-50 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-700 opacity-40'
                                            }`}
                                        title={a.desc}
                                    >
                                        <span className={`text-2xl ${unlocked ? '' : 'grayscale'}`}>{a.emoji}</span>
                                        <p className={`text-[10px] font-bold mt-1 ${unlocked ? 'text-purple-700 dark:text-purple-300' : 'text-slate-400'}`}>
                                            {a.name}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Reset Button */}
                    <div className="flex justify-end">
                        {!showReset ? (
                            <button
                                onClick={() => setShowReset(true)}
                                className="text-xs text-slate-400 hover:text-red-500 transition-colors"
                            >
                                重置数据
                            </button>
                        ) : (
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-red-500">确定要清除所有奖励记录吗？</span>
                                <button
                                    onClick={() => { resetRewards(); setShowReset(false); }}
                                    className="text-xs bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition-colors flex items-center gap-1"
                                >
                                    <RotateCcw className="w-3 h-3" /> 确定
                                </button>
                                <button
                                    onClick={() => setShowReset(false)}
                                    className="text-xs text-slate-500 hover:text-slate-700 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700"
                                >
                                    取消
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default RewardDashboard;

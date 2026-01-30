import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { Calendar, Clock, BookOpen, TrendingUp, Award, Flame, BarChart3, PieChart, Hash } from 'lucide-react';

import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Statistics = () => {
    const { t } = useLanguage();
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        totalSessions: 0,
        totalTime: 0,
        totalKnowledgePoints: 0,
        thisWeekTime: 0,
        streak: 0,
        subjectDistribution: [],
        recentActivity: [],
        knowledgePoints: []
    });

    const fetchStatistics = async () => {
        setLoading(true);
        const { data: { user } } = await supabase.auth.getUser();

        if (user) {
            // 获取累积统计数据（包括已删除的作业）
            const { data: userStats } = await supabase
                .from('user_stats')
                .select('*')
                .eq('user_id', user.id)
                .single();

            // 获取所有会话（用于学科分布和知识点统计）
            const { data: sessions } = await supabase
                .from('sessions')
                .select('*')
                .eq('user_id', user.id)
                .order('created_at', { ascending: false });

            if (sessions) {
                // 使用累积统计数据
                const totalSessions = userStats?.total_sessions_created || sessions.length;

                // 学科中文映射
                const subjectNameMap = {
                    'Math': '数学',
                    'Chinese': '语文',
                    'English': '英语',
                    'Physics': '物理',
                    'Chemistry': '化学',
                    'Biology': '生物',
                    'History': '历史',
                    'Geography': '地理',
                    'General': '其他'
                };

                // 计算学科分布 - 基于当前会话（累积效果）
                const subjectMap = {};
                sessions.forEach(session => {
                    const subjectKey = session.subject || 'General';
                    const subjectName = subjectNameMap[subjectKey] || subjectKey;
                    subjectMap[subjectName] = (subjectMap[subjectName] || 0) + 1;
                });

                // 按数量排序
                const subjectDistribution = Object.entries(subjectMap)
                    .map(([name, count]) => ({
                        name,
                        count,
                        percentage: sessions.length > 0 ? ((count / sessions.length) * 100).toFixed(1) : '0'
                    }))
                    .sort((a, b) => b.count - a.count);

                // 计算连续学习天数
                let streak = 0;
                const today = new Date();
                today.setHours(0, 0, 0, 0);

                for (let i = 0; i < 365; i++) {
                    const checkDate = new Date(today);
                    checkDate.setDate(checkDate.getDate() - i);
                    const hasSession = sessions.some(s => {
                        const sessionDate = new Date(s.created_at);
                        sessionDate.setHours(0, 0, 0, 0);
                        return sessionDate.getTime() === checkDate.getTime();
                    });

                    if (hasSession) {
                        streak++;
                    } else if (i > 0) {
                        break;
                    }
                }

                // 统计知识点标签（累积）
                const tagMap = {};
                sessions.forEach(s => {
                    if (s.tags && Array.isArray(s.tags)) {
                        s.tags.forEach(tag => {
                            tagMap[tag] = (tagMap[tag] || 0) + 1;
                        });
                    }
                });

                const knowledgePoints = Object.entries(tagMap)
                    .map(([name, count]) => ({ name, count }))
                    .sort((a, b) => b.count - a.count)
                    .slice(0, 30); // 展示前30个热门知识点

                // 计算累积知识点总数
                const totalKnowledgePoints = Object.keys(tagMap).length;

                setStats({
                    totalSessions,
                    totalTime: totalSessions * 25, // 假设每个会话平均25分钟
                    totalKnowledgePoints,
                    thisWeekTime: sessions.length * 25,
                    streak,
                    subjectDistribution,
                    recentActivity: sessions.slice(0, 7),
                    knowledgePoints
                });
            }
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchStatistics();
    }, []);

    // 获取成就徽章
    const getAchievements = () => {
        const achievements = [];
        if (stats.totalSessions >= 1) achievements.push({ icon: '🎯', name: '初次尝试', desc: '完成第1次作业' });
        if (stats.totalSessions >= 10) achievements.push({ icon: '📚', name: '勤奋学习', desc: '完成10次作业' });
        if (stats.totalSessions >= 50) achievements.push({ icon: '🏆', name: '学习达人', desc: '完成50次作业' });
        if (stats.streak >= 3) achievements.push({ icon: '🔥', name: '三天打卡', desc: '连续学习3天' });
        if (stats.streak >= 7) achievements.push({ icon: '⭐', name: '一周坚持', desc: '连续学习7天' });
        if (stats.streak >= 30) achievements.push({ icon: '💎', name: '月度冠军', desc: '连续学习30天' });
        return achievements;
    };

    const achievements = getAchievements();

    // 学科颜色映射 - 为所有学科分配独特的颜色
    const subjectColors = {
        '语文': 'bg-red-500',
        '数学': 'bg-blue-500',
        '英语': 'bg-green-500',
        '物理': 'bg-purple-500',
        '化学': 'bg-yellow-500',
        '生物': 'bg-pink-500',
        '历史': 'bg-amber-600',
        '地理': 'bg-teal-500',
        '政治': 'bg-rose-600',
        '音乐': 'bg-violet-500',
        '美术': 'bg-fuchsia-500',
        '体育': 'bg-orange-500',
        '信息技术': 'bg-cyan-500',
        '其他': 'bg-gray-500'
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-slate-600">{t('common.loading')}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-indigo-900/20 dark:to-slate-900 p-6">
            <div className="max-w-7xl mx-auto">
                {/* 页面标题 */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-3">
                        <BarChart3 className="text-blue-600" size={32} />
                        {t('statistics.title')}
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400">{t('statistics.subtitle')}</p>
                </div>

                {/* 核心数据卡片 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {/* 总作业数 */}
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <BookOpen size={32} className="opacity-80" />
                            <div className="text-right">
                                <div className="text-4xl font-bold">{stats.totalSessions}</div>
                                <div className="text-sm opacity-90 mt-1">次</div>
                            </div>
                        </div>
                        <div className="text-sm font-medium opacity-90">{t('statistics.totalSessions')}</div>
                    </div>

                    {/* 学习时长 */}
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <Clock size={32} className="opacity-80" />
                            <div className="text-right">
                                <div className="text-4xl font-bold">{Math.floor(stats.totalTime / 60)}</div>
                                <div className="text-sm opacity-90 mt-1">小时</div>
                            </div>
                        </div>
                        <div className="text-sm font-medium opacity-90">{t('statistics.totalTime')}</div>
                    </div>

                    {/* 累积知识点数 */}
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <Hash size={32} className="opacity-80" />
                            <div className="text-right">
                                <div className="text-4xl font-bold">{stats.totalKnowledgePoints}</div>
                                <div className="text-sm opacity-90 mt-1">个</div>
                            </div>
                        </div>
                        <div className="text-sm font-medium opacity-90">{t('statistics.totalKnowledgePoints')}</div>
                    </div>

                    {/* 连续打卡 */}
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <Flame size={32} className="opacity-80" />
                            <div className="text-right">
                                <div className="text-4xl font-bold">{stats.streak}</div>
                                <div className="text-sm opacity-90 mt-1">天</div>
                            </div>
                        </div>
                        <div className="text-sm font-medium opacity-90">{t('statistics.streak')}</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* 左侧：学科分布 */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* 学科分布 */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
                            <div className="flex items-center gap-2 mb-6">
                                <PieChart className="text-blue-600" size={24} />
                                <h2 className="text-xl font-bold text-slate-800 dark:text-white">{t('statistics.subjectDistribution')}</h2>
                            </div>

                            {stats.subjectDistribution.length > 0 ? (
                                <div className="space-y-4">
                                    {stats.subjectDistribution.map((subject, index) => (
                                        <div key={index} className="space-y-2">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="font-medium text-slate-700 dark:text-slate-200">{subject.name}</span>
                                                <span className="text-slate-600 dark:text-slate-400">{subject.count} 次 ({subject.percentage}%)</span>
                                            </div>


                                            <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full ${subjectColors[subject.name] || subjectColors['其他']} transition-all duration-500`}
                                                    style={{ width: `${subject.percentage}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-slate-400">
                                    <PieChart size={48} className="mx-auto mb-3 opacity-50" />
                                    <p>{t('statistics.noSubjectData')}</p>
                                </div>
                            )}
                        </div>

                        {/* 知识点云图 */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
                            <div className="flex items-center gap-2 mb-6">
                                <Hash className="text-purple-600" size={24} />
                                <h2 className="text-xl font-bold text-slate-800 dark:text-white">{t('statistics.hotKnowledgePoints')}</h2>
                            </div>

                            {stats.knowledgePoints && stats.knowledgePoints.length > 0 ? (
                                <div className="flex flex-wrap gap-3">
                                    {stats.knowledgePoints.map((tag, index) => {
                                        // 简单的标签样式，根据热度稍微调整大小或颜色
                                        const isHot = index < 5;
                                        return (
                                            <span
                                                key={index}
                                                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${isHot
                                                    ? 'bg-purple-100 text-purple-700 border border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700'
                                                    : 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600 dark:hover:bg-slate-600'
                                                    }`}
                                            >
                                                #{tag.name}
                                                <span className="ml-1 opacity-60 text-xs">×{tag.count}</span>
                                            </span>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-slate-400">
                                    <Hash size={48} className="mx-auto mb-3 opacity-50" />
                                    <p>{t('statistics.noKnowledgePoints')}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* 右侧：成就系统 */}
                    <div className="space-y-6">
                        {/* 成就徽章 */}
                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl shadow-lg p-6 border-2 border-yellow-200 dark:border-yellow-700">
                            <div className="flex items-center gap-2 mb-6">
                                <Award className="text-yellow-600 dark:text-yellow-500" size={24} />
                                <h2 className="text-xl font-bold text-slate-800 dark:text-white">{t('statistics.achievements')}</h2>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {achievements.map((achievement, index) => (
                                    <div key={index} className="bg-white dark:bg-slate-700/50 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="text-4xl mb-2">{achievement.icon}</div>
                                        <div className="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-1">{achievement.name}</div>
                                        <div className="text-xs text-slate-500 dark:text-slate-400">{achievement.desc}</div>
                                    </div>
                                ))}

                                {achievements.length === 0 && (
                                    <div className="col-span-2 text-center py-8 text-slate-400">
                                        <Award size={48} className="mx-auto mb-3 opacity-50" />
                                        <p className="text-sm">{t('statistics.unlock')}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* 激励语 */}
                        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg p-6 text-white">
                            <div className="text-center">
                                <div className="text-6xl mb-4">🎓</div>
                                <h3 className="text-xl font-bold mb-2">{t('statistics.keepGoing')}</h3>
                                <p className="text-sm opacity-90 leading-relaxed">
                                    {stats.totalSessions === 0 && t('statistics.startFirst')}
                                    {stats.totalSessions > 0 && stats.totalSessions < 10 && t('statistics.keepItUp')}
                                    {stats.totalSessions >= 10 && stats.totalSessions < 50 && t('statistics.accumulating')}
                                    {stats.totalSessions >= 50 && t('statistics.master')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;

import UploadZone from '../components/business/UploadZone';
import { Clock, CheckCircle2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import { useUser } from '../context/UserContext';
import { useLanguage } from '../context/LanguageContext';
import DailyQuote from '../components/common/DailyQuote';

// 学科中文映射和图标配置
const SUBJECT_CONFIG = {
    'Math': { name: '数学', icon: '📐', color: 'bg-blue-100 text-blue-700 border-blue-200' },
    'Physics': { name: '物理', icon: '🧲', color: 'bg-purple-100 text-purple-700 border-purple-200' },
    'Chemistry': { name: '化学', icon: '🧬', color: 'bg-green-100 text-green-700 border-green-200' },
    'Chinese': { name: '语文', icon: '📖', color: 'bg-red-100 text-red-700 border-red-200' },
    'English': { name: '英语', icon: '🌍', color: 'bg-orange-100 text-orange-700 border-orange-200' },
    'Biology': { name: '生物', icon: '🌿', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
    'History': { name: '历史', icon: '📜', color: 'bg-amber-100 text-amber-700 border-amber-200' },
    'Geography': { name: '地理', icon: '🗺️', color: 'bg-teal-100 text-teal-700 border-teal-200' },
    'General': { name: '通用', icon: '📚', color: 'bg-slate-100 text-slate-700 border-slate-200' }
};

// 获取学科配置
const getSubjectConfig = (subject) => {
    return SUBJECT_CONFIG[subject] || SUBJECT_CONFIG['General'];
};

const StatCard = ({ icon: Icon, label, value, color }) => (
    <div className="bg-white p-3 md:p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-2 md:gap-4 dark:bg-slate-800 dark:border-slate-700">
        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center ${color} flex-shrink-0`}>
            <Icon size={20} className="text-white md:w-6 md:h-6" />
        </div>
        <div className="text-center md:text-left">
            <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-medium">{label}</p>
            <p className="text-lg md:text-2xl font-bold text-slate-800 dark:text-white">{value}</p>
        </div>
    </div>
);

const Dashboard = () => {
    const { settings } = useUser();
    const { t } = useLanguage();
    const [stats, setStats] = useState({
        completedTasks: 0,
        studyHours: 0,
        streak: 0
    });
    const [recentActivity, setRecentActivity] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadDashboardData = async () => {
            setIsLoading(true);
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                setIsLoading(false);
                return;
            }

            // 1. 获取累积统计（包含已删除的会话）
            const { data: userStats } = await supabase
                .from('user_stats')
                .select('total_sessions_created')
                .eq('user_id', user.id)
                .single();

            const totalSessionsCreated = userStats?.total_sessions_created || 0;

            // 2. 获取未删除的会话（用于计算活跃天数）
            const { data: activeSessions } = await supabase
                .from('sessions')
                .select('created_at')
                .eq('user_id', user.id);

            // Calculate Streak (Simplified: Count distinct days)
            let streak = 0;
            if (activeSessions && activeSessions.length > 0) {
                const dates = activeSessions.map(s => new Date(s.created_at).toDateString());
                const uniqueDates = [...new Set(dates)];
                streak = uniqueDates.length;
            }

            setStats({
                completedTasks: totalSessionsCreated, // 使用累积数量
                studyHours: Math.floor(totalSessionsCreated * 25 / 60), // 每次25分钟，转换为小时
                streak: streak
            });

            // 3. Fetch Recent Activity (只显示未删除的)
            const { data: recent } = await supabase
                .from('sessions')
                .select('*')
                .eq('user_id', user.id)
                .order('created_at', { ascending: false })
                .limit(5);

            if (recent) setRecentActivity(recent);
            setIsLoading(false);
        };

        loadDashboardData();
    }, []);

    // Helper for relative time
    const timeAgo = (dateString) => {
        const seconds = Math.floor((new Date() - new Date(dateString)) / 1000);
        let interval = seconds / 31536000;
        if (interval > 1) return Math.floor(interval) + " 年前";
        interval = seconds / 2592000;
        if (interval > 1) return Math.floor(interval) + " 个月前";
        interval = seconds / 86400;
        if (interval > 1) return Math.floor(interval) + " 天前";
        interval = seconds / 3600;
        if (interval > 1) return Math.floor(interval) + " 小时前";
        interval = seconds / 60;
        if (interval > 1) return Math.floor(interval) + " 分钟前";
        return "刚刚";
    };

    // Note: Time ago strings would ideally be localized too, but keeping simple for now or using a library like date-fns


    const nickname = settings?.profile?.nickname;

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div>
                <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2 h-9">
                    {isLoading ? (
                        <>
                            {t('common.loading')}
                        </>
                    ) : (
                        t('dashboard.welcome', { name: nickname || t('common.student') })
                    )}
                </h1>
                <p className="text-slate-500 dark:text-slate-400 mt-1 mb-6">{t('dashboard.startLearning')}</p>
                <DailyQuote />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 md:gap-6">
                {isLoading ? (
                    // Stats Loading Skeleton
                    [1, 2, 3].map((i) => (
                        <div key={i} className="bg-white p-3 md:p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-2 md:gap-4 animate-pulse">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-slate-200 flex-shrink-0" />
                            <div className="flex-1 w-full space-y-2">
                                <div className="h-3 bg-slate-200 rounded w-1/2 mx-auto md:mx-0" />
                                <div className="h-6 bg-slate-200 rounded w-3/4 mx-auto md:mx-0" />
                            </div>
                        </div>
                    ))
                ) : (
                    <>
                        <StatCard
                            icon={CheckCircle2}
                            label={t('faq.statCard.completedTasks')}
                            value={stats.completedTasks}
                            color="bg-emerald-500"
                        />
                        <StatCard
                            icon={Clock}
                            label={t('faq.statCard.studyHours')}
                            value={`${stats.studyHours}h`}
                            color="bg-blue-500"
                        />
                        <StatCard
                            icon={TrendingUp}
                            label={t('faq.statCard.activeDays')}
                            value={`${stats.streak}d`}
                            color="bg-orange-500"
                        />
                    </>
                )}
            </div>


            {/* Main Upload Area */}
            <section>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-slate-800 dark:text-white">{t('dashboard.newSession')}</h2>
                </div>
                <UploadZone />
            </section>

            {/* Features Section */}
            <section className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/40 dark:to-blue-900/40 rounded-2xl p-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">{t('faq.dashboardFeature.title')}</h2>
                    <p className="text-slate-600 dark:text-slate-300">{t('faq.dashboardFeature.subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {/* Feature 1 */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-4">
                            <span className="text-2xl">🎯</span>
                        </div>
                        <h3 className="font-semibold text-slate-800 dark:text-white mb-2">{t('faq.dashboardFeature.socraticTitle')}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{t('faq.dashboardFeature.socraticDesc')}</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4">
                            <span className="text-2xl">📚</span>
                        </div>
                        <h3 className="font-semibold text-slate-800 dark:text-white mb-2">{t('faq.dashboardFeature.subjectTitle')}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{t('faq.dashboardFeature.subjectDesc')}</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4">
                            <span className="text-2xl">📸</span>
                        </div>
                        <h3 className="font-semibold text-slate-800 dark:text-white mb-2">{t('faq.dashboardFeature.ocrTitle')}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{t('faq.dashboardFeature.ocrDesc')}</p>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4">
                            <span className="text-2xl">📊</span>
                        </div>
                        <h3 className="font-semibold text-slate-800 dark:text-white mb-2">{t('faq.dashboardFeature.statsTitle')}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{t('faq.dashboardFeature.statsDesc')}</p>
                    </div>
                </div>

                {/* How to Use */}
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-6 text-center">{t('faq.howTo.title')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                            <h4 className="font-semibold text-slate-800 dark:text-white mb-2">{t('faq.howTo.step1Title')}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{t('faq.howTo.step1Desc')}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                            <h4 className="font-semibold text-slate-800 dark:text-white mb-2">{t('faq.howTo.step2Title')}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{t('faq.howTo.step2Desc')}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                            <h4 className="font-semibold text-slate-800 dark:text-white mb-2">{t('faq.howTo.step3Title')}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{t('faq.howTo.step3Desc')}</p>
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <Link
                            to="/faq"
                            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm transition-colors"
                        >
                            {t('faq.howTo.moreFaq')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Recent Activity Section */}
            <section>
                <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">{t('dashboard.recentActivity')}</h2>
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                    {isLoading ? (
                        // Loading skeleton
                        <div className="divide-y divide-slate-100 dark:divide-slate-700">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="p-4 animate-pulse">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-700"></div>
                                        <div className="flex-1">
                                            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-2"></div>
                                            <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/2"></div>
                                        </div>
                                        <div className="h-6 w-12 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : recentActivity.length > 0 ? (
                        recentActivity.map((session) => (
                            <Link to={`/homework/${session.id}`} key={session.id} className="p-4 border-b border-slate-50 dark:border-slate-700 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors flex items-center justify-between group cursor-pointer block">
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border-2 ${getSubjectConfig(session.subject || 'General').color}`}>
                                        <span className="text-xl">{getSubjectConfig(session.subject || 'General').icon}</span>
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-medium text-slate-700 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                                            {session.title || t('sidebar.untitled')}
                                        </p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">{timeAgo(session.created_at)} • {getSubjectConfig(session.subject || 'General').name}</p>
                                    </div>
                                </div>
                                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 whitespace-nowrap ml-2">
                                    {t('dashboard.viewAll')}
                                </span>
                            </Link>
                        ))
                    ) : (
                        <div className="p-8 text-center text-slate-500 dark:text-slate-400 text-sm">
                            {t('dashboard.noActivity')}
                        </div>
                    )}
                </div>
            </section>

            {/* SEO关键词区域 */}
            <section className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800/50 dark:to-slate-900/50 py-8 mt-12 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
                            专业的AI作业辅导服务
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed max-w-4xl mx-auto">
                            AI7Miao提供全面的<strong className="text-indigo-600 dark:text-indigo-400">作业辅导</strong>服务，
                            包括<strong className="text-indigo-600 dark:text-indigo-400">数学作业辅导</strong>、
                            <strong className="text-indigo-600 dark:text-indigo-400">物理作业辅导</strong>、
                            <strong className="text-indigo-600 dark:text-indigo-400">化学作业辅导</strong>、
                            <strong className="text-indigo-600 dark:text-indigo-400">英语作业辅导</strong>、
                            <strong className="text-indigo-600 dark:text-indigo-400">语文作业辅导</strong>等。
                            我们的<strong className="text-indigo-600 dark:text-indigo-400">AI智能辅导</strong>系统采用苏格拉底式教学方法，
                            为学生提供24小时<strong className="text-indigo-600 dark:text-indigo-400">在线作业帮助</strong>。
                            无论是<strong className="text-indigo-600 dark:text-indigo-400">作业答疑</strong>还是
                            <strong className="text-indigo-600 dark:text-indigo-400">学习辅导</strong>，
                            我们都能提供专业的<strong className="text-indigo-600 dark:text-indigo-400">在线辅导</strong>服务。
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                            <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                                作业辅导
                            </span>
                            <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                                AI作业辅导
                            </span>
                            <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                                在线作业辅导
                            </span>
                            <Link
                                to="/math-tutoring"
                                className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full border border-indigo-600 hover:from-indigo-600 hover:to-blue-600 hover:shadow-lg transition-all cursor-pointer"
                            >
                                数学作业辅导 →
                            </Link>
                            <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                                物理作业辅导
                            </span>
                            <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                                化学作业辅导
                            </span>
                            <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                                英语作业辅导
                            </span>
                            <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                                语文作业辅导
                            </span>
                            <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                                作业帮助
                            </span>
                            <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                                智能辅导
                            </span>
                            <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                                学习辅导
                            </span>
                            <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                                作业答疑
                            </span>
                            <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                                在线学习
                            </span>
                            <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                                AI教育
                            </span>
                        </div>
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-4">
                            AI7Miao - 专业的AI智能作业辅导平台，让学习更高效
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;

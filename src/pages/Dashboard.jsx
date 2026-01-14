import UploadZone from '../components/business/UploadZone';
import { Clock, CheckCircle2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

const StatCard = ({ icon: Icon, label, value, color }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}>
            <Icon size={24} className="text-white" />
        </div>
        <div>
            <p className="text-slate-500 text-sm font-medium">{label}</p>
            <p className="text-2xl font-bold text-slate-800">{value}</p>
        </div>
    </div>
);

const Dashboard = () => {
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

            // 1. Fetch Stats
            const { count, data: allSessions } = await supabase
                .from('sessions')
                .select('created_at', { count: 'exact' })
                .eq('user_id', user.id);

            const totalSessions = count || 0;

            // Calculate Streak (Simplified: Count distinct days)
            let streak = 0;
            if (allSessions && allSessions.length > 0) {
                const dates = allSessions.map(s => new Date(s.created_at).toDateString());
                const uniqueDates = [...new Set(dates)];
                streak = uniqueDates.length;
            }

            setStats({
                completedTasks: totalSessions,
                studyHours: Math.round(totalSessions * 0.25 * 10) / 10,
                streak: streak
            });

            // 2. Fetch Recent Activity
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

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div>
                <h1 className="text-2xl font-bold text-slate-800">你好，同学！👋</h1>
                <p className="text-slate-500 mt-1">今天准备好解决一些问题了吗？</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    icon={CheckCircle2}
                    label="已完成任务"
                    value={stats.completedTasks}
                    color="bg-emerald-500"
                />
                <StatCard
                    icon={Clock}
                    label="学习时长"
                    value={`${stats.studyHours}h`}
                    color="bg-blue-500"
                />
                <StatCard
                    icon={TrendingUp}
                    label="活跃天数"
                    value={`${stats.streak} 天`}
                    color="bg-orange-500"
                />
            </div>

            {/* Main Upload Area */}
            <section>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-slate-800">开始新会话</h2>
                </div>
                <UploadZone />
            </section>

            {/* Recent Activity Section */}
            <section>
                <h2 className="text-lg font-semibold text-slate-800 mb-4">最近活动</h2>
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                    {isLoading ? (
                        // Loading skeleton
                        <div className="divide-y divide-slate-100">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="p-4 animate-pulse">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-slate-200"></div>
                                        <div className="flex-1">
                                            <div className="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
                                            <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                                        </div>
                                        <div className="h-6 w-12 bg-slate-200 rounded-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : recentActivity.length > 0 ? (
                        recentActivity.map((session) => (
                            <Link to={`/homework/${session.id}`} key={session.id} className="p-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors flex items-center justify-between group cursor-pointer block">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                                        <span className="font-bold text-sm">#{session.id.slice(0, 4)}</span>
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-medium text-slate-700 group-hover:text-indigo-600 transition-colors truncate">
                                            {session.title || '未命名会话'}
                                        </p>
                                        <p className="text-xs text-slate-500">{timeAgo(session.created_at)} • {session.subject || '通用'}</p>
                                    </div>
                                </div>
                                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 whitespace-nowrap ml-2">
                                    查看
                                </span>
                            </Link>
                        ))
                    ) : (
                        <div className="p-8 text-center text-slate-500 text-sm">
                            暂无最近活动。从上面开始新会话！
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Dashboard;

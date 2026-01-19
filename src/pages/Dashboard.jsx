import UploadZone from '../components/business/UploadZone';
import { Clock, CheckCircle2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import { useUser } from '../context/UserContext';

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
    <div className="bg-white p-3 md:p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-2 md:gap-4">
        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center ${color} flex-shrink-0`}>
            <Icon size={20} className="text-white md:w-6 md:h-6" />
        </div>
        <div className="text-center md:text-left">
            <p className="text-slate-500 text-xs md:text-sm font-medium">{label}</p>
            <p className="text-lg md:text-2xl font-bold text-slate-800">{value}</p>
        </div>
    </div>
);

const Dashboard = () => {
    const { settings } = useUser();
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

    const nickname = settings?.profile?.nickname;

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div>
                <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2 h-9">
                    {isLoading ? (
                        <>
                            你好，<div className="w-32 h-8 bg-slate-200 rounded animate-pulse" />
                        </>
                    ) : (
                        `你好，${nickname ? `${nickname}同学` : '同学'}！👋`
                    )}
                </h1>
                <p className="text-slate-500 mt-1">今天准备好解决一些问题了吗？</p>
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
                    </>
                )}
            </div>

            {/* Main Upload Area */}
            <section>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-slate-800">开始新会话</h2>
                </div>
                <UploadZone />
            </section>

            {/* Features Section */}
            <section className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">智能AI助手，即刻解决学习难题</h2>
                    <p className="text-slate-600">全方位的智能学习辅导体验</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {/* Feature 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-4">
                            <span className="text-2xl">🎯</span>
                        </div>
                        <h3 className="font-semibold text-slate-800 mb-2">苏格拉底式教学</h3>
                        <p className="text-sm text-slate-600">引导学生独立思考，培养解决问题的能力，而非直接给出答案</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4">
                            <span className="text-2xl">📚</span>
                        </div>
                        <h3 className="font-semibold text-slate-800 mb-2">全学科覆盖</h3>
                        <p className="text-sm text-slate-600">支持数学、语文、英语、物理、化学等全学科在线辅导</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4">
                            <span className="text-2xl">📸</span>
                        </div>
                        <h3 className="font-semibold text-slate-800 mb-2">智能图像识别</h3>
                        <p className="text-sm text-slate-600">支持拍照上传作业题目，AI自动识别并分析</p>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4">
                            <span className="text-2xl">📊</span>
                        </div>
                        <h3 className="font-semibold text-slate-800 mb-2">学习数据统计</h3>
                        <p className="text-sm text-slate-600">记录学习进度，可视化展示学习成果，激励持续学习</p>
                    </div>
                </div>

                {/* How to Use */}
                <div className="bg-white rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-slate-800 mb-6 text-center">如何使用AI作业助手</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                            <h4 className="font-semibold text-slate-800 mb-2">创建会话</h4>
                            <p className="text-sm text-slate-600">点击"开始新作业"，输入作业标题</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                            <h4 className="font-semibold text-slate-800 mb-2">提问互动</h4>
                            <p className="text-sm text-slate-600">输入问题或上传图片，AI会引导你思考</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                            <h4 className="font-semibold text-slate-800 mb-2">深入学习</h4>
                            <p className="text-sm text-slate-600">跟随AI的引导，逐步理解解题思路</p>
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <Link
                            to="/faq"
                            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors"
                        >
                            查看更多常见问题 →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Recent Activity Section */}
            <section>
                <h2 className="text-lg font-semibold text-slate-800 mb-4">最近作业</h2>
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
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border-2 ${getSubjectConfig(session.subject || 'General').color}`}>
                                        <span className="text-xl">{getSubjectConfig(session.subject || 'General').icon}</span>
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-medium text-slate-700 group-hover:text-indigo-600 transition-colors truncate">
                                            {session.title || '未命名会话'}
                                        </p>
                                        <p className="text-xs text-slate-500">{timeAgo(session.created_at)} • {getSubjectConfig(session.subject || 'General').name}</p>
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
            </section >
        </div >
    );
};

export default Dashboard;

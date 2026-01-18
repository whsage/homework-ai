import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { Calendar, Clock, BookOpen, TrendingUp, Award, Flame, BarChart3, PieChart, Hash } from 'lucide-react';

const Statistics = () => {
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        totalSessions: 0,
        totalTime: 0,
        thisWeekSessions: 0,
        thisWeekTime: 0,
        streak: 0,
        subjectDistribution: [],
        recentActivity: [],
        knowledgePoints: []
    });

    useEffect(() => {
        fetchStatistics();
    }, []);

    const fetchStatistics = async () => {
        setLoading(true);
        const { data: { user } } = await supabase.auth.getUser();

        if (user) {
            // 获取所有会话
            const { data: sessions } = await supabase
                .from('sessions')
                .select('*')
                .eq('user_id', user.id)
                .order('created_at', { ascending: false });

            if (sessions) {
                // 计算总数
                const totalSessions = sessions.length;

                // 计算本周数据
                const oneWeekAgo = new Date();
                oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
                const thisWeekSessions = sessions.filter(s => new Date(s.created_at) > oneWeekAgo);

                // 学科识别函数 - 两阶段智能匹配
                const identifySubject = (title) => {
                    if (!title) return '其他';

                    const titleLower = title.toLowerCase();

                    // 第一阶段：学科专有名词（高优先级，避免误判）
                    const coreKeywords = {
                        '化学': ['化学', 'chemistry', '元素', '分子', '原子', '电解质', '溶液', '试剂', '酿酒', '化合', '离子', '催化', '氧化还原', '酸性', '碱性', '中和', '沉淀', '结晶'],
                        '物理': ['物理', 'physics', '电流', '电压', '电阻', '电功率', '功率', '力学', '电学', '光学', '欧姆', '焦耳', '牛顿', '瓦特', '安培', '伏特', '浮力', '摩擦', '杠杆'],
                        '数学': ['数学', 'math', '几何', '代数', '函数', '方程', '角度', '证明', '面积', '体积', '周长', '坐标', '距离', '四边形', '三角形', '圆', '平行', '垂直', '对称', '相似', '全等', '菜地', '行程'],
                        '语文': ['语文', 'chinese', '文言文', '古诗', '诗词', '散文', '小说', '通假字', '拼音', '汉字', '成语', '古诗词'],
                        '英语': ['英语', 'english', 'grammar', 'vocabulary', 'tense', 'verb', 'noun'],
                        '生物': ['生物', 'biology', '细胞', '遗传', '基因', '染色体', 'dna', 'rna', '光合', '呼吸'],
                        '历史': ['历史', 'history', '朝代', '战争', '革命', '秦', '汉', '唐', '宋', '元', '明', '清'],
                        '地理': ['地理', 'geography', '地图', '气候', '地形', '经纬度', '板块', '洋流'],
                        '政治': ['政治', 'politics', '法律', '哲学', '马克思', '宪法'],
                        '音乐': ['音乐', 'music', '乐理', '钢琴', '吉他', '乐器'],
                        '美术': ['美术', 'art', '绘画', '素描', '色彩', '设计'],
                        '体育': ['体育', 'pe', 'sports', '篮球', '足球'],
                        '信息技术': ['信息技术', '计算机', 'computer', '编程', 'coding', 'python', 'java']
                    };

                    // 第一阶段匹配：学科专有名词
                    for (const [subject, keywords] of Object.entries(coreKeywords)) {
                        for (const keyword of keywords) {
                            if (titleLower.includes(keyword)) {
                                return subject;
                            }
                        }
                    }

                    // 第二阶段：通用特征词（低优先级，用于补充识别）
                    const featureKeywords = {
                        '语文': ['作文', '阅读理解', '词语', '修辞', '描写', '记叙', '说明', '议论', '抒情', '季节', '心理', '排序', '标点', '段落', '辨析'],
                        '数学': ['计算', '三角', '微积分', '概率', '统计', '求解', '求值', '计算题', '应用题', '工程', '比例', '分数', '小数', '百分数'],
                        '物理': ['运动', '能量', '速度', '加速度', '力', '压强', '动能', '势能'],
                        '化学': ['反应', '酸碱', '氧化', '还原', '有机', '无机', '保存方法'],
                        '英语': ['单词', '语法', '阅读', 'reading', 'writing', 'listening'],
                        '生物': ['进化', '生态', '植物', '动物', '消化', '循环', '神经', '免疫'],
                        '历史': ['古代', '近代', '现代', '世界史', '中国史', '抗战', '改革'],
                        '地理': ['河流', '山脉', '平原', '高原', '盆地', '季风', '降水', '人口', '城市'],
                        '政治': ['思想', '道德', '权利', '义务', '民主', '法治', '毛概'],
                        '音乐': ['声乐', '音符', '节奏'],
                        '美术': ['水彩', '油画', '雕塑'],
                        '体育': ['运动', '跑步', '跳远', '游泳'],
                        '信息技术': ['算法', '数据结构', '网络', '软件', '硬件', 'it', 'c++']
                    };

                    // 第二阶段匹配：通用特征词
                    for (const [subject, keywords] of Object.entries(featureKeywords)) {
                        for (const keyword of keywords) {
                            if (titleLower.includes(keyword)) {
                                return subject;
                            }
                        }
                    }

                    return '其他';
                };

                // 计算学科分布
                const subjectMap = {};
                sessions.forEach(session => {
                    const subject = identifySubject(session.title);
                    subjectMap[subject] = (subjectMap[subject] || 0) + 1;
                });

                // 按数量排序
                const subjectDistribution = Object.entries(subjectMap)
                    .map(([name, count]) => ({
                        name,
                        count,
                        percentage: ((count / totalSessions) * 100).toFixed(1)
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

                // 统计知识点标签
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

                setStats({
                    totalSessions,
                    totalTime: totalSessions * 25, // 假设每个会话平均25分钟
                    thisWeekSessions: thisWeekSessions.length,
                    thisWeekTime: thisWeekSessions.length * 25,
                    streak,
                    subjectDistribution,
                    recentActivity: sessions.slice(0, 7),
                    knowledgePoints
                });
            }
        }
        setLoading(false);
    };

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
                    <p className="text-slate-600">加载统计数据中...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* 页面标题 */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-800 mb-2 flex items-center gap-3">
                        <BarChart3 className="text-blue-600" size={32} />
                        学习统计
                    </h1>
                    <p className="text-slate-600">记录你的成长轨迹，见证每一次进步</p>
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
                        <div className="text-sm font-medium opacity-90">完成作业总数</div>
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
                        <div className="text-sm font-medium opacity-90">累计学习时长</div>
                    </div>

                    {/* 本周学习 */}
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <Calendar size={32} className="opacity-80" />
                            <div className="text-right">
                                <div className="text-4xl font-bold">{stats.thisWeekSessions}</div>
                                <div className="text-sm opacity-90 mt-1">次</div>
                            </div>
                        </div>
                        <div className="text-sm font-medium opacity-90">本周完成作业</div>
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
                        <div className="text-sm font-medium opacity-90">连续学习天数</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* 左侧：学科分布 */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* 学科分布 */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <div className="flex items-center gap-2 mb-6">
                                <PieChart className="text-blue-600" size={24} />
                                <h2 className="text-xl font-bold text-slate-800">学科分布</h2>
                            </div>

                            {stats.subjectDistribution.length > 0 ? (
                                <div className="space-y-4">
                                    {stats.subjectDistribution.map((subject, index) => (
                                        <div key={index} className="space-y-2">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="font-medium text-slate-700">{subject.name}</span>
                                                <span className="text-slate-600">{subject.count} 次 ({subject.percentage}%)</span>
                                            </div>


                                            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
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
                                    <p>暂无学科数据</p>
                                </div>
                            )}
                        </div>

                        {/* 知识点云图 */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <div className="flex items-center gap-2 mb-6">
                                <Hash className="text-purple-600" size={24} />
                                <h2 className="text-xl font-bold text-slate-800">热门知识点</h2>
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
                                                    ? 'bg-purple-100 text-purple-700 border border-purple-200'
                                                    : 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200'
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
                                    <p>随着作业分析的增加，这里将展示你的知识点图谱</p>
                                </div>
                            )}
                        </div>

                        {/* 学习趋势 */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <div className="flex items-center gap-2 mb-6">
                                <TrendingUp className="text-green-600" size={24} />
                                <h2 className="text-xl font-bold text-slate-800">最近活动</h2>
                            </div>

                            {stats.recentActivity.length > 0 ? (
                                <div className="space-y-3">
                                    {stats.recentActivity.map((session, index) => (
                                        <div key={session.id} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                                {index + 1}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="font-medium text-slate-800 truncate">{session.title || '未命名作业'}</div>
                                                <div className="text-sm text-slate-500">
                                                    {new Date(session.created_at).toLocaleDateString('zh-CN', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-slate-400">
                                    <Calendar size={48} className="mx-auto mb-3 opacity-50" />
                                    <p>暂无学习记录</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* 右侧：成就系统 */}
                    <div className="space-y-6">
                        {/* 成就徽章 */}
                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-lg p-6 border-2 border-yellow-200">
                            <div className="flex items-center gap-2 mb-6">
                                <Award className="text-yellow-600" size={24} />
                                <h2 className="text-xl font-bold text-slate-800">成就徽章</h2>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {achievements.map((achievement, index) => (
                                    <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="text-4xl mb-2">{achievement.icon}</div>
                                        <div className="font-semibold text-slate-800 text-sm mb-1">{achievement.name}</div>
                                        <div className="text-xs text-slate-500">{achievement.desc}</div>
                                    </div>
                                ))}

                                {achievements.length === 0 && (
                                    <div className="col-span-2 text-center py-8 text-slate-400">
                                        <Award size={48} className="mx-auto mb-3 opacity-50" />
                                        <p className="text-sm">完成作业解锁成就</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* 激励语 */}
                        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg p-6 text-white">
                            <div className="text-center">
                                <div className="text-6xl mb-4">🎓</div>
                                <h3 className="text-xl font-bold mb-2">继续加油！</h3>
                                <p className="text-sm opacity-90 leading-relaxed">
                                    {stats.totalSessions === 0 && "开始你的第一次学习吧！"}
                                    {stats.totalSessions > 0 && stats.totalSessions < 10 && "你已经迈出了第一步，继续保持！"}
                                    {stats.totalSessions >= 10 && stats.totalSessions < 50 && "你的努力正在积累，坚持就是胜利！"}
                                    {stats.totalSessions >= 50 && "你真是一个学习达人，继续保持这份热情！"}
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

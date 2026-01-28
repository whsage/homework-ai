import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
    Search,
    BookOpen,
    Calculator,
    TrendingUp,
    Zap,
    Brain,
    Target,
    Award,
    ChevronRight,
    Sparkles,
    CheckCircle,
    Clock,
    Star
} from 'lucide-react';

const MathLearning = () => {
    const [activeGrade, setActiveGrade] = useState('middle');
    const [searchQuery, setSearchQuery] = useState('');

    // 知识点数据结构
    const knowledgeBase = {
        elementary: {
            name: '小学数学',
            icon: '🎨',
            color: 'from-pink-500 to-rose-500',
            modules: [
                {
                    id: 'arithmetic',
                    name: '算术基础',
                    icon: '🔢',
                    topics: [
                        { id: 'addition-subtraction', name: '加减法', difficulty: '基础', time: '20分钟', important: true },
                        { id: 'multiplication-division', name: '乘除法', difficulty: '基础', time: '25分钟', important: true },
                        { id: 'mixed-operations', name: '四则混合运算', difficulty: '提高', time: '30分钟', important: true }
                    ]
                },
                {
                    id: 'fractions',
                    name: '分数与小数',
                    icon: '📊',
                    topics: [
                        { id: 'fraction-concept', name: '分数的认识', difficulty: '基础', time: '25分钟', important: true },
                        { id: 'decimal-concept', name: '小数的认识', difficulty: '基础', time: '20分钟', important: true },
                        { id: 'percentage', name: '百分数', difficulty: '提高', time: '30分钟', important: false }
                    ]
                },
                {
                    id: 'geometry',
                    name: '图形认识',
                    icon: '🔺',
                    topics: [
                        { id: 'basic-shapes', name: '基本图形', difficulty: '基础', time: '20分钟', important: false },
                        { id: 'perimeter-area', name: '周长与面积', difficulty: '提高', time: '35分钟', important: true },
                        { id: 'volume', name: '体积', difficulty: '提高', time: '30分钟', important: false }
                    ]
                }
            ]
        },
        middle: {
            name: '初中数学',
            icon: '🧠',
            color: 'from-blue-500 to-indigo-500',
            modules: [
                {
                    id: 'algebra',
                    name: '代数基础',
                    icon: '📐',
                    topics: [
                        { id: 'rational-numbers', name: '有理数', difficulty: '基础', time: '30分钟', important: true },
                        { id: 'polynomials', name: '整式', difficulty: '基础', time: '35分钟', important: true },
                        { id: 'factorization', name: '因式分解', difficulty: '提高', time: '40分钟', important: true }
                    ]
                },
                {
                    id: 'equations',
                    name: '方程与不等式',
                    icon: '⚖️',
                    topics: [
                        { id: 'linear-equations', name: '一元一次方程', difficulty: '基础', time: '30分钟', important: true },
                        { id: 'linear-equation-systems', name: '二元一次方程组', difficulty: '提高', time: '40分钟', important: true },
                        { id: 'quadratic-equations', name: '一元二次方程', difficulty: '提高', time: '45分钟', important: true },
                        { id: 'inequalities', name: '不等式', difficulty: '提高', time: '35分钟', important: false }
                    ]
                },
                {
                    id: 'functions',
                    name: '函数',
                    icon: '📈',
                    topics: [
                        { id: 'function-concept', name: '函数的概念', difficulty: '基础', time: '30分钟', important: true },
                        { id: 'linear-functions', name: '一次函数', difficulty: '提高', time: '40分钟', important: true },
                        { id: 'inverse-functions', name: '反比例函数', difficulty: '提高', time: '35分钟', important: false },
                        { id: 'quadratic-functions', name: '二次函数', difficulty: '重点', time: '50分钟', important: true }
                    ]
                },
                {
                    id: 'geometry',
                    name: '平面几何',
                    icon: '🔺',
                    topics: [
                        { id: 'triangles', name: '三角形', difficulty: '基础', time: '40分钟', important: true },
                        { id: 'quadrilaterals', name: '四边形', difficulty: '提高', time: '35分钟', important: false },
                        { id: 'circles', name: '圆', difficulty: '重点', time: '45分钟', important: true },
                        { id: 'similarity-congruence', name: '相似与全等', difficulty: '重点', time: '50分钟', important: true }
                    ]
                }
            ]
        },
        high: {
            name: '高中数学',
            icon: '🎓',
            color: 'from-purple-500 to-pink-500',
            modules: [
                {
                    id: 'functions-calculus',
                    name: '函数与导数',
                    icon: '📊',
                    topics: [
                        { id: 'function-properties', name: '函数的性质', difficulty: '基础', time: '40分钟', important: true },
                        { id: 'derivatives', name: '导数', difficulty: '重点', time: '60分钟', important: true },
                        { id: 'derivative-applications', name: '导数的应用', difficulty: '重点', time: '55分钟', important: true }
                    ]
                },
                {
                    id: 'trigonometry',
                    name: '三角函数',
                    icon: '📐',
                    topics: [
                        { id: 'trig-functions', name: '三角函数', difficulty: '基础', time: '45分钟', important: true },
                        { id: 'trig-identities', name: '三角恒等变换', difficulty: '提高', time: '50分钟', important: true },
                        { id: 'trig-graphs', name: '三角函数图像', difficulty: '提高', time: '40分钟', important: false }
                    ]
                },
                {
                    id: 'solid-geometry',
                    name: '立体几何',
                    icon: '🎲',
                    topics: [
                        { id: 'space-vectors', name: '空间向量', difficulty: '重点', time: '50分钟', important: true },
                        { id: 'solid-volume', name: '立体图形体积', difficulty: '提高', time: '45分钟', important: false },
                        { id: 'solid-surface', name: '立体图形表面积', difficulty: '提高', time: '40分钟', important: false }
                    ]
                },
                {
                    id: 'analytic-geometry',
                    name: '解析几何',
                    icon: '📏',
                    topics: [
                        { id: 'lines-circles', name: '直线与圆', difficulty: '基础', time: '45分钟', important: true },
                        { id: 'conic-sections', name: '圆锥曲线', difficulty: '重点', time: '60分钟', important: true }
                    ]
                }
            ]
        },
        college: {
            name: '大学数学',
            icon: '🔬',
            color: 'from-green-500 to-teal-500',
            modules: [
                {
                    id: 'calculus',
                    name: '高等数学',
                    icon: '∫',
                    topics: [
                        { id: 'limits', name: '极限', difficulty: '基础', time: '50分钟', important: true },
                        { id: 'derivatives-advanced', name: '微分', difficulty: '重点', time: '60分钟', important: true },
                        { id: 'integrals', name: '积分', difficulty: '重点', time: '70分钟', important: true },
                        { id: 'series', name: '级数', difficulty: '提高', time: '55分钟', important: false }
                    ]
                },
                {
                    id: 'linear-algebra',
                    name: '线性代数',
                    icon: '🔢',
                    topics: [
                        { id: 'matrices', name: '矩阵', difficulty: '基础', time: '45分钟', important: true },
                        { id: 'determinants', name: '行列式', difficulty: '提高', time: '50分钟', important: true },
                        { id: 'vector-spaces', name: '向量空间', difficulty: '重点', time: '60分钟', important: true },
                        { id: 'eigenvalues', name: '特征值与特征向量', difficulty: '重点', time: '55分钟', important: true }
                    ]
                },
                {
                    id: 'probability',
                    name: '概率论',
                    icon: '🎲',
                    topics: [
                        { id: 'random-variables', name: '随机变量', difficulty: '基础', time: '50分钟', important: true },
                        { id: 'distributions', name: '概率分布', difficulty: '重点', time: '60分钟', important: true },
                        { id: 'law-large-numbers', name: '大数定律', difficulty: '提高', time: '45分钟', important: false }
                    ]
                }
            ]
        }
    };

    const grades = [
        { id: 'elementary', label: '小学', icon: '🎨' },
        { id: 'middle', label: '初中', icon: '🧠' },
        { id: 'high', label: '高中', icon: '🎓' },
        { id: 'college', label: '大学', icon: '🔬' }
    ];

    const currentGrade = knowledgeBase[activeGrade];

    // 搜索功能
    const filteredModules = currentGrade.modules.map(module => ({
        ...module,
        topics: module.topics.filter(topic =>
            topic.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(module => module.topics.length > 0);

    return (
        <>
            <Helmet>
                <title>数学知识点学习中心 - 系统化数学学习平台 | AI7Miao</title>
                <meta name="description" content="系统化的数学知识点学习平台，覆盖小学到大学所有数学知识点。包括代数、几何、微积分等，提供AI互动学习和详细讲解。基于教育理论，科学的学习路径。" />
                <meta name="keywords" content="数学知识点,数学学习,数学概念,数学公式,代数知识点,几何知识点,微积分学习,数学教程,数学学习路径,系统学数学" />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                {/* Hero Section */}
                <section className="relative overflow-hidden py-16 px-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/5 dark:to-indigo-500/5"></div>
                    <div className="max-w-7xl mx-auto relative">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
                                <Sparkles className="w-4 h-4" />
                                <span>基于教育理论的系统化学习</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
                                数学知识点学习中心
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-300 mb-4 max-w-3xl mx-auto">
                                从小学到大学，系统化学习数学知识点
                            </p>
                            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8">
                                AI互动学习 · 概念讲解 · 典型例题 · 练习巩固
                            </p>

                            {/* Search Bar */}
                            <div className="max-w-2xl mx-auto">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="搜索数学知识点..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg">
                                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">100+</div>
                                <div className="text-sm text-slate-600 dark:text-slate-400">知识点</div>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg">
                                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">4</div>
                                <div className="text-sm text-slate-600 dark:text-slate-400">年级覆盖</div>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg">
                                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">AI</div>
                                <div className="text-sm text-slate-600 dark:text-slate-400">互动学习</div>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg">
                                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">24/7</div>
                                <div className="text-sm text-slate-600 dark:text-slate-400">随时学习</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Grade Tabs */}
                <section className="py-12 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                                选择你的年级
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400">
                                不同年级，不同的知识体系，循序渐进
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {grades.map((grade) => (
                                <button
                                    key={grade.id}
                                    onClick={() => setActiveGrade(grade.id)}
                                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${activeGrade === grade.id
                                            ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg scale-105'
                                            : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:shadow-md'
                                        }`}
                                >
                                    <span className="mr-2">{grade.icon}</span>
                                    {grade.label}
                                </button>
                            ))}
                        </div>

                        {/* Knowledge Modules */}
                        <div className="space-y-8">
                            {filteredModules.map((module) => (
                                <div key={module.id} className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="text-4xl">{module.icon}</div>
                                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                                            {module.name}
                                        </h3>
                                        <span className="ml-auto text-sm text-slate-500 dark:text-slate-400">
                                            {module.topics.length} 个知识点
                                        </span>
                                    </div>

                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {module.topics.map((topic) => (
                                            <div
                                                key={topic.id}
                                                className="group relative bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 hover:shadow-lg transition-all cursor-not-allowed"
                                            >
                                                {/* Coming Soon Badge */}
                                                <div className="absolute top-3 right-3 px-2 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold">
                                                    即将推出
                                                </div>

                                                <div className="mb-4">
                                                    <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                                                        {topic.name}
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2 text-xs">
                                                        <span className={`px-2 py-1 rounded-full ${topic.difficulty === '基础' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                                                topic.difficulty === '提高' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                                                                    'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                                            }`}>
                                                            {topic.difficulty}
                                                        </span>
                                                        <span className="px-2 py-1 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-full flex items-center gap-1">
                                                            <Clock className="w-3 h-3" />
                                                            {topic.time}
                                                        </span>
                                                        {topic.important && (
                                                            <span className="px-2 py-1 bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 rounded-full flex items-center gap-1">
                                                                <Star className="w-3 h-3" />
                                                                重要
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-sm opacity-60">
                                                    <span>开始学习</span>
                                                    <ChevronRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {searchQuery && filteredModules.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-slate-500 dark:text-slate-400">
                                    没有找到匹配的知识点，试试其他关键词
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Educational Theory */}
                <section className="py-16 px-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                                🎓 科学的学习方法
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                                我们的知识点体系基于国际公认的教育理论，确保学习效果最佳
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                                    <Brain className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                                    认知发展理论
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    根据学生认知发展阶段，提供适合的学习内容和方法
                                </p>
                            </div>

                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                                    <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                                    最近发展区
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    个性化难度调整，确保学习在最佳区域，既有挑战又能完成
                                </p>
                            </div>

                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                                    <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                                    发现学习
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    通过AI引导，让学生自己发现知识，理解更深刻
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-12 shadow-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                准备好开始系统学习了吗？
                            </h2>
                            <p className="text-xl text-indigo-100 mb-8">
                                选择一个知识点，开始你的数学学习之旅
                            </p>
                            <div className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-white rounded-xl font-semibold text-lg cursor-not-allowed">
                                即将推出，敬请期待
                            </div>
                            <p className="text-indigo-100 text-sm mt-4">
                                💡 目前可以通过主页上传作业获得辅导
                            </p>
                        </div>
                    </div>
                </section>

                {/* SEO Keywords Footer */}
                <section className="py-8 px-6 bg-slate-100 dark:bg-slate-900">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="text-xs text-slate-500 dark:text-slate-400 space-y-2">
                            <p>
                                <strong>相关服务：</strong>
                                数学知识点 | 数学学习 | 数学概念 | 数学公式 | 代数知识点 | 几何知识点 |
                                微积分学习 | 数学教程 | 系统学数学 | 数学学习路径 | AI数学学习 |
                                数学概念讲解 | 数学例题 | 数学练习
                            </p>
                            <p>
                                AI7Miao - 专业的数学知识点学习平台，基于教育理论，提供系统化的数学学习服务
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default MathLearning;

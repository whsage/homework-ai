import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
    ArrowLeft,
    BookOpen,
    Brain,
    Lightbulb,
    Target,
    CheckCircle,
    ChevronRight,
    Calculator,
    Sparkles,
    MessageCircle,
    TrendingUp,
    Award,
    Clock,
    Star
} from 'lucide-react';

const QuadraticFunctions = () => {
    const [activeTab, setActiveTab] = useState('concept');
    const [showAIChat, setShowAIChat] = useState(false);

    const tabs = [
        { id: 'concept', label: '核心概念', icon: BookOpen },
        { id: 'properties', label: '图像性质', icon: TrendingUp },
        { id: 'examples', label: '典型例题', icon: Calculator },
        { id: 'practice', label: '练习题', icon: Award }
    ];

    return (
        <>
            <Helmet>
                <title>二次函数知识点详解 - 图像性质与应用 | AI7Miao数学学习</title>
                <meta name="description" content="详细讲解二次函数的概念、图像、性质和应用。包括配方法、顶点式、一般式等，提供AI互动学习和练习题。基于建构主义学习理论，引导式教学。" />
                <meta name="keywords" content="二次函数,二次函数图像,二次函数性质,配方法,顶点式,抛物线,二次函数应用,数学知识点,初中数学" />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                {/* Header */}
                <section className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                    <div className="max-w-7xl mx-auto px-6 py-6">
                        <Link
                            to="/subjects/math"
                            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 mb-4 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            返回知识点中心
                        </Link>

                        <div className="flex items-start justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-4xl">📈</span>
                                    <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
                                        二次函数
                                    </h1>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-full text-sm font-medium">
                                        🎓 初中数学
                                    </span>
                                    <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm font-medium">
                                        重点内容
                                    </span>
                                    <span className="px-3 py-1 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        50分钟
                                    </span>
                                    <span className="px-3 py-1 bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 rounded-full text-sm font-medium flex items-center gap-1">
                                        <Star className="w-3 h-3" />
                                        重要
                                    </span>
                                </div>
                                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
                                    二次函数是初中数学的核心内容，它的图像是抛物线，在实际生活中有广泛应用。
                                    通过本节学习，你将深入理解二次函数的概念、性质和应用。
                                </p>
                            </div>

                            <button
                                onClick={() => setShowAIChat(!showAIChat)}
                                className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                            >
                                <MessageCircle className="w-5 h-5" />
                                AI互动学习
                            </button>
                        </div>
                    </div>
                </section>

                {/* Tabs */}
                <section className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-10">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex gap-2 overflow-x-auto">
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all whitespace-nowrap ${activeTab === tab.id
                                                ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400'
                                                : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                                            }`}
                                    >
                                        <Icon className="w-5 h-5" />
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="py-12 px-6">
                    <div className="max-w-7xl mx-auto">
                        {activeTab === 'concept' && (
                            <div className="space-y-8">
                                {/* 什么是二次函数 */}
                                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
                                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                                        <Lightbulb className="w-6 h-6 text-indigo-600" />
                                        什么是二次函数？
                                    </h2>

                                    <div className="space-y-6">
                                        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6">
                                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">定义</h3>
                                            <p className="text-slate-700 dark:text-slate-300 mb-4">
                                                形如 <code className="px-2 py-1 bg-white dark:bg-slate-700 rounded">y = ax² + bx + c</code>
                                                （其中 a ≠ 0）的函数叫做二次函数。
                                            </p>
                                            <div className="grid md:grid-cols-3 gap-4 mt-4">
                                                <div className="bg-white dark:bg-slate-700 rounded-lg p-4">
                                                    <div className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">一般式</div>
                                                    <code className="text-sm">y = ax² + bx + c</code>
                                                </div>
                                                <div className="bg-white dark:bg-slate-700 rounded-lg p-4">
                                                    <div className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">顶点式</div>
                                                    <code className="text-sm">y = a(x-h)² + k</code>
                                                </div>
                                                <div className="bg-white dark:bg-slate-700 rounded-lg p-4">
                                                    <div className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">交点式</div>
                                                    <code className="text-sm">y = a(x-x₁)(x-x₂)</code>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                                            <div className="flex items-start gap-3">
                                                <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                                                <div>
                                                    <div className="font-semibold text-purple-700 dark:text-purple-400 mb-2">
                                                        🎓 教育理论支撑
                                                    </div>
                                                    <div className="text-slate-600 dark:text-slate-400 text-sm">
                                                        我们不会直接告诉你公式，而是通过引导你观察、思考、发现规律。
                                                        这基于<strong>建构主义学习理论</strong>和<strong>发现学习理论</strong>，
                                                        让你自己构建知识，理解更深刻。
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* AI互动学习场景 */}
                                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
                                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                                        <MessageCircle className="w-6 h-6 text-indigo-600" />
                                        AI互动学习：发现抛物线的对称性
                                    </h2>

                                    <div className="space-y-4">
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                                                <span className="text-lg">🤖</span>
                                            </div>
                                            <div className="flex-1 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4">
                                                <p className="text-slate-700 dark:text-slate-300">
                                                    你知道 y = x² 这个函数吗？当 x = 1 时，y 等于多少？
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 justify-end">
                                            <div className="flex-1 max-w-md bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                                                <p className="text-slate-700 dark:text-slate-300">
                                                    y = 1
                                                </p>
                                            </div>
                                            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                                <span className="text-lg">👤</span>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                                                <span className="text-lg">🤖</span>
                                            </div>
                                            <div className="flex-1 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4">
                                                <p className="text-slate-700 dark:text-slate-300">
                                                    很好！那当 x = 2 时呢？
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 justify-end">
                                            <div className="flex-1 max-w-md bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                                                <p className="text-slate-700 dark:text-slate-300">
                                                    y = 4
                                                </p>
                                            </div>
                                            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                                <span className="text-lg">👤</span>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                                                <span className="text-lg">🤖</span>
                                            </div>
                                            <div className="flex-1 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4">
                                                <p className="text-slate-700 dark:text-slate-300">
                                                    现在试试 x = -1 时，y 是多少？
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 justify-end">
                                            <div className="flex-1 max-w-md bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                                                <p className="text-slate-700 dark:text-slate-300">
                                                    y = 1，和 x = 1 时一样！
                                                </p>
                                            </div>
                                            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                                <span className="text-lg">👤</span>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                                                <span className="text-lg">🤖</span>
                                            </div>
                                            <div className="flex-1 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4">
                                                <p className="text-slate-700 dark:text-slate-300">
                                                    太棒了！你发现了什么规律？
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 justify-end">
                                            <div className="flex-1 max-w-md bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                                                <p className="text-slate-700 dark:text-slate-300">
                                                    正数和负数的 y 值相同！图像关于 y 轴对称！
                                                </p>
                                            </div>
                                            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                                <span className="text-lg">👤</span>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                                                <span className="text-lg">🤖</span>
                                            </div>
                                            <div className="flex-1 bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
                                                <p className="text-slate-700 dark:text-slate-300">
                                                    <strong className="text-green-700 dark:text-green-400">完全正确！</strong>
                                                    这就是二次函数图像的对称性。通过自己的探索，你发现了抛物线的重要性质！
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
                                            <div className="flex items-start gap-2">
                                                <Sparkles className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                                                <div className="text-sm text-slate-600 dark:text-slate-400">
                                                    <strong>学习效果：</strong>通过引导式提问，你自己发现了抛物线的对称性，
                                                    这比直接告诉你"抛物线关于对称轴对称"的理解要深刻得多。
                                                </div>
                                            </div>
                                        </div>

                                        <button className="w-full py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-not-allowed opacity-60">
                                            开始AI互动学习（即将推出）
                                        </button>
                                    </div>
                                </div>

                                {/* 为什么学二次函数 */}
                                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
                                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                                        <Target className="w-6 h-6 text-indigo-600" />
                                        为什么要学二次函数？
                                    </h2>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                                            <div className="text-3xl mb-3">🏀</div>
                                            <h3 className="font-bold text-slate-800 dark:text-white mb-2">抛物线运动</h3>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                篮球投篮、喷泉水柱、炮弹轨迹都是抛物线。
                                                理解二次函数就能预测物体的运动轨迹。
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                                            <div className="text-3xl mb-3">💰</div>
                                            <h3 className="font-bold text-slate-800 dark:text-white mb-2">利润最大化</h3>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                商品定价、生产规划中，利润往往是二次函数。
                                                通过求顶点可以找到最大利润。
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                                            <div className="text-3xl mb-3">🌉</div>
                                            <h3 className="font-bold text-slate-800 dark:text-white mb-2">建筑设计</h3>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                拱桥、拱门的设计都用到抛物线。
                                                抛物线形状既美观又能承受更大的压力。
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6">
                                            <div className="text-3xl mb-3">🎯</div>
                                            <h3 className="font-bold text-slate-800 dark:text-white mb-2">数学思维</h3>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                二次函数是学习高等数学的基础。
                                                培养函数思想、数形结合等重要数学思维。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'properties' && (
                            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
                                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                                    二次函数的图像与性质
                                </h2>
                                <div className="text-center py-12">
                                    <div className="text-6xl mb-4">🚧</div>
                                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-4">
                                        内容正在制作中...
                                    </p>
                                    <p className="text-slate-500 dark:text-slate-500 text-sm">
                                        即将包含：图像绘制、对称轴、顶点、开口方向、单调性等
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'examples' && (
                            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
                                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                                    典型例题
                                </h2>
                                <div className="text-center py-12">
                                    <div className="text-6xl mb-4">🚧</div>
                                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-4">
                                        内容正在制作中...
                                    </p>
                                    <p className="text-slate-500 dark:text-slate-500 text-sm">
                                        即将包含：配方法、顶点坐标、最值问题、实际应用等例题
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'practice' && (
                            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
                                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                                    练习题
                                </h2>
                                <div className="text-center py-12">
                                    <div className="text-6xl mb-4">🚧</div>
                                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-4">
                                        内容正在制作中...
                                    </p>
                                    <p className="text-slate-500 dark:text-slate-500 text-sm">
                                        即将包含：基础题、提高题、竞赛题，以及AI自动批改功能
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* Related Topics */}
                <section className="py-12 px-6 bg-slate-50 dark:bg-slate-800/50">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                            🔗 相关知识点
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-not-allowed opacity-75">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">一次函数</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                                    二次函数的基础，理解函数的概念
                                </p>
                                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm">
                                    <span>查看详情</span>
                                    <ChevronRight className="w-4 h-4" />
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-not-allowed opacity-75">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">一元二次方程</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                                    与二次函数密切相关，求解抛物线与x轴交点
                                </p>
                                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm">
                                    <span>查看详情</span>
                                    <ChevronRight className="w-4 h-4" />
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-not-allowed opacity-75">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">不等式</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                                    二次函数的应用，求解不等式的解集
                                </p>
                                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm">
                                    <span>查看详情</span>
                                    <ChevronRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-12 shadow-2xl">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                准备好开始练习了吗？
                            </h2>
                            <p className="text-xl text-indigo-100 mb-8">
                                如果你有二次函数的作业题，可以上传获得AI辅导
                            </p>
                            <Link
                                to="/new"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                            >
                                上传作业题目
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* SEO Keywords Footer */}
                <section className="py-8 px-6 bg-slate-100 dark:bg-slate-900">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="text-xs text-slate-500 dark:text-slate-400 space-y-2">
                            <p>
                                <strong>相关内容：</strong>
                                二次函数 | 二次函数图像 | 二次函数性质 | 配方法 | 顶点式 | 抛物线 |
                                二次函数应用 | 对称轴 | 最值问题 | 函数图像 | 初中数学 | 数学知识点
                            </p>
                            <p>
                                AI7Miao - 专业的数学知识点学习平台，基于教育理论，提供深度的知识点讲解和AI互动学习
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default QuadraticFunctions;

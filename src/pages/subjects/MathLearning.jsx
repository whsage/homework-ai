import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
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
    Star,
    Users,
    ArrowRight,
    Lightbulb,
    Microscope
} from 'lucide-react';

import { knowledgeBase } from '../../data/mathCurriculum';

const MathLearning = () => {
    const [searchParams] = useSearchParams();
    const [activeGrade, setActiveGrade] = useState('middle');
    const [searchQuery, setSearchQuery] = useState('');

    // Unified state for sub-grades and tracks
    const [currentSubGrade, setCurrentSubGrade] = useState(7); // Default to a valid grade
    const [currentTrack, setCurrentTrack] = useState('l1'); // 'l1' or 'l2'

    // Handle initial state from URL query params
    useEffect(() => {
        const type = searchParams.get('gradeType');
        const level = searchParams.get('gradeLevel');
        const track = searchParams.get('track');

        if (type && ['elementary', 'middle', 'high', 'college'].includes(type)) {
            setActiveGrade(type);
        }

        if (level && !isNaN(parseInt(level))) {
            setCurrentSubGrade(parseInt(level));
        }

        if (track && ['l1', 'l2'].includes(track)) {
            setCurrentTrack(track);
        }
    }, [searchParams]);

    // Reset sub-grade when activeGrade changes to valid defaults
    useEffect(() => {
        if (activeGrade === 'elementary') setCurrentSubGrade(1);
        else if (activeGrade === 'middle') setCurrentSubGrade(7);
        else if (activeGrade === 'high') setCurrentSubGrade(10);
    }, [activeGrade]);

    // 辅导内容数据 (来自 MathTutoring)
    const gradeContent = {
        elementary: {
            title: '小学数学辅导',
            subtitle: '趣味化学习，培养数学兴趣',
            age: '6-12岁',
            features: [
                {
                    icon: '🍕',
                    title: '生活场景教学',
                    description: '用披萨、苹果等生活实例解释抽象概念，让孩子轻松理解'
                },
                {
                    icon: '📊',
                    title: '图形化展示',
                    description: '通过图形、图表直观展示，符合儿童认知特点'
                },
                {
                    icon: '🎯',
                    title: '鼓励式引导',
                    description: '及时表扬，培养自信心和学习兴趣'
                },
                {
                    icon: '🎮',
                    title: '趣味互动',
                    description: '游戏化学习，让数学变得有趣'
                }
            ],
            case: {
                title: '分数理解案例',
                problem: '什么是 1/2？',
                traditional: '"1/2就是一个整体分成两份，取其中一份"',
                ourWay: [
                    '🍕 "想象一个披萨，你和朋友一起吃，每人吃一半，你吃的就是1/2"',
                    '🎂 "生日蛋糕切成两块，你吃一块，就是吃了1/2个蛋糕"',
                    '🍎 "一个苹果分给两个人，每人得到1/2个苹果"'
                ],
                result: '通过生活场景，孩子自然理解了分数概念'
            },
            theory: '基于皮亚杰认知发展理论，7-11岁儿童处于具体运算期，需要具体事物支持思维。'
        },
        middle: {
            title: '初中数学辅导',
            subtitle: '概念理解为主，建立数学思维',
            age: '12-15岁',
            features: [
                {
                    icon: '💡',
                    title: '概念深度理解',
                    description: '不只是记公式，更要理解公式背后的原理'
                },
                {
                    icon: '🔗',
                    title: '知识体系构建',
                    description: '建立知识之间的联系，形成完整的数学体系'
                },
                {
                    icon: '🎯',
                    title: '逻辑推理训练',
                    description: '培养严密的逻辑思维能力'
                },
                {
                    icon: '🔍',
                    title: '多角度分析',
                    description: '从不同角度理解同一个概念'
                }
            ],
            case: {
                title: '二次函数理解案例',
                problem: '为什么二次函数图像是抛物线？',
                traditional: '老师："二次函数的图像是抛物线，记住就行"',
                ourWay: [
                    'AI: "你知道 y = x² 这个函数吗？"',
                    '学生: "知道"',
                    'AI: "当 x = 1 时，y 等于多少？"',
                    '学生: "y = 1"',
                    'AI: "当 x = 2 时呢？"',
                    '学生: "y = 4"',
                    'AI: "当 x = -1 时呢？"',
                    '学生: "y = 1"',
                    'AI: "你发现什么规律了吗？"',
                    '学生: "正数和负数的 y 值相同！"',
                    'AI: "对！这就是为什么图像关于 y 轴对称。现在我们把这些点连起来..."'
                ],
                result: '通过引导，学生自己发现了抛物线的对称性和形状特征'
            },
            theory: '基于维果茨基最近发展区理论和布鲁纳发现学习理论，通过引导让学生在适当难度下自主发现知识。'
        },
        high: {
            title: '高中数学辅导',
            subtitle: '深度思维训练，培养数学素养',
            age: '15-18岁',
            features: [
                {
                    icon: '🔬',
                    title: '抽象思维培养',
                    description: '从具体到抽象，培养高级数学思维'
                },
                {
                    icon: '📐',
                    title: '多种解法对比',
                    description: '一题多解，培养灵活的解题能力'
                },
                {
                    icon: '🎯',
                    title: '数学思想渗透',
                    description: '函数思想、数形结合、分类讨论等'
                },
                {
                    icon: '⚡',
                    title: '解题规律总结',
                    description: '归纳总结，形成解题模板'
                }
            ],
            case: {
                title: '导数的几何意义案例',
                problem: "导数 f'(x) 的几何意义是什么？",
                traditional: '老师："导数就是切线斜率，记住就行"',
                ourWay: [
                    'AI: "你知道函数图像上某一点的切线吗？"',
                    '学生: "知道"',
                    'AI: "切线的斜率代表什么？"',
                    '学生: "代表函数在该点的变化率"',
                    'AI: "很好！现在思考：当 Δx 越来越小时，割线会变成什么？"',
                    '学生: "会变成切线！"',
                    'AI: "没错！所以导数就是切线的斜率。现在你能理解为什么 f\'(x)>0 时函数递增吗？"',
                    '学生: "因为切线斜率为正，函数在上升！"'
                ],
                result: '通过层层递进，学生深刻理解了导数的几何意义和应用'
            },
            theory: '基于布鲁姆教育目标分类学的分析和评价层次，培养高级认知能力。'
        },
        college: {
            title: '大学数学辅导',
            subtitle: '理论与应用结合，培养研究能力',
            age: '18岁以上',
            features: [
                {
                    icon: '📚',
                    title: '严格的数学证明',
                    description: '理解定理的证明过程，培养严谨思维'
                },
                {
                    icon: '🧮',
                    title: '理论推导训练',
                    description: '掌握数学推导的方法和技巧'
                },
                {
                    icon: '🌐',
                    title: '实际应用场景',
                    description: '将抽象理论应用到实际问题'
                },
                {
                    icon: '🔍',
                    title: '研究性学习',
                    description: '培养独立研究和创新能力'
                }
            ],
            case: {
                title: '极限的 ε-δ 定义案例',
                problem: '如何理解 lim(x→a) f(x) = L 的严格定义？',
                traditional: '老师："记住定义：对任意 ε>0，存在 δ>0..."',
                ourWay: [
                    'AI: "你知道极限的直观含义吗？"',
                    '学生: "x 趋近于 a 时，f(x) 趋近于 L"',
                    'AI: "对，但\'趋近\'不够严格。我们需要量化。如果我说 f(x) 与 L 的距离小于 0.01，你能找到一个 x 的范围吗？"',
                    '学生: "可以，让 |x-a| 足够小"',
                    'AI: "很好！现在把 0.01 换成任意小的 ε，你需要找到对应的 δ，使得：当 0<|x-a|<δ 时，|f(x)-L|<ε"',
                    '学生: "哦！这就是 ε-δ 定义！"',
                    'AI: "没错！这个定义把\'趋近\'量化了，让极限概念变得严格。"'
                ],
                result: '通过从具体到抽象，学生理解了严格定义的必要性和含义'
            },
            theory: '基于布鲁姆分类学的最高层次（创造和评价），培养独立研究能力。'
        }
    };



    const grades = [
        { id: 'elementary', label: '小学', icon: '🎨' },
        { id: 'middle', label: '初中', icon: '🧠' },
        { id: 'high', label: '高中', icon: '🎓' },
        { id: 'college', label: '大学', icon: '🔬' }
    ];

    const currentGrade = knowledgeBase[activeGrade];
    const currentTutoring = gradeContent[activeGrade];

    // 搜索功能 - Standardized for all grade-based levels
    let filteredModules = [];
    if (currentGrade.grades) {
        // For Elementary, Middle, High: filter within selected grade and track
        const selectedGradeData = currentGrade.grades.find(g => g.id === `grade-${currentSubGrade}`);
        if (selectedGradeData) {
            const selectedTrackData = selectedGradeData.tracks[currentTrack];
            if (selectedTrackData) {
                filteredModules = [{
                    id: currentTrack,
                    name: selectedTrackData.name,
                    icon: selectedTrackData.icon,
                    topics: selectedTrackData.topics.filter(topic =>
                        topic.name.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                }].filter(module => module.topics.length > 0);
            }
        }
    } else if (currentGrade.modules) {
        // For College (or others using modules): use existing module-based logic
        filteredModules = currentGrade.modules.map(module => ({
            ...module,
            topics: module.topics.filter(topic =>
                topic.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
        })).filter(module => module.topics.length > 0);
    }

    return (
        <>
            <Helmet>
                <title>数学学习中心 - 知识点与作业辅导 | AI7Miao</title>
                <meta name="description" content="全方位的数学学习平台，提供从小学到大学的系统化知识点学习和专业的AI作业辅导。代数、几何、微积分全覆盖，苏格拉底式教学引导。" />
                <meta name="keywords" content="数学学习,数学辅导,数学作业,数学知识点,代数,几何,微积分,在线辅导,AI教学" />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                {/* Hero Section */}
                <section className="relative overflow-hidden py-16 px-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/5 dark:to-indigo-500/5"></div>
                    <div className="max-w-7xl mx-auto relative">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
                                <Sparkles className="w-4 h-4" />
                                <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">基于教育理论的系统化学习</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
                                数学学习中心
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-300 mb-4 max-w-3xl mx-auto">
                                系统化知识点学习 + AI智能作业辅导
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
                                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">20+</div>
                                <div className="text-sm text-slate-600 dark:text-slate-400">覆盖年级</div>
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
                                选择您的阶段
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400">
                                不同阶段，不同知识体系
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

                        {/* Tutoring Features & Cases (Integrated from MathTutoring) */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-12 border border-slate-100 dark:border-slate-700">
                            <div className="text-center mb-10">
                                <span className="inline-block px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm mb-4">
                                    {currentTutoring.age}
                                </span>
                                <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
                                    {currentTutoring.title}
                                </h3>
                                <p className="text-lg text-slate-600 dark:text-slate-400">
                                    {currentTutoring.subtitle}
                                </p>
                            </div>

                            {/* Features */}
                            <div className="grid md:grid-cols-2 gap-6 mb-10">
                                {currentTutoring.features.map((feature, index) => (
                                    <div key={index} className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                                        <div className="text-3xl">{feature.icon}</div>
                                        <div>
                                            <h5 className="font-semibold text-slate-800 dark:text-white mb-2">
                                                {feature.title}
                                            </h5>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Case Study */}
                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6 mb-8">
                                <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                                    <Lightbulb className="w-5 h-5 text-indigo-600" />
                                    辅导案例：{currentTutoring.case.title}
                                </h4>
                                <div className="space-y-4">
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <div className="flex-1 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                                            <div className="font-semibold text-red-600 dark:text-red-400 mb-2">❌ 传统方法</div>
                                            <div className="text-slate-600 dark:text-slate-400 text-sm">
                                                {currentTutoring.case.traditional}
                                            </div>
                                        </div>
                                        <div className="flex-1 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm border-2 border-green-100 dark:border-green-900/30">
                                            <div className="font-semibold text-green-600 dark:text-green-400 mb-2">✅ 我们的苏格拉底式引导</div>
                                            <div className="space-y-2">
                                                {currentTutoring.case.ourWay.map((step, idx) => (
                                                    <p key={idx} className="text-slate-600 dark:text-slate-400 text-sm">{step}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg text-sm text-center font-medium">
                                        🎯 效果：{currentTutoring.case.result}
                                    </div>
                                </div>
                            </div>

                            {/* Theory */}
                            <div className="flex items-start gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-800/50">
                                <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-purple-900 dark:text-purple-200">
                                    <strong>教育理论支撑：</strong>{currentTutoring.theory}
                                </p>
                            </div>
                        </div>

                        {/* Grade Selector & Track Toggle (Unified for Elementary, Middle, High) */}
                        {currentGrade.grades && (
                            <div className="mb-12 space-y-6">
                                {/* Grade Selector */}
                                <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-2xl p-6 border border-pink-100 dark:border-pink-800/30">
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 text-center">
                                        选择年级
                                    </h3>
                                    <div className="flex flex-wrap justify-center gap-3">
                                        {currentGrade.grades.map((grade) => {
                                            // grade.id format 'grade-7' -> 7
                                            const gradeNum = parseInt(grade.id.replace('grade-', ''));
                                            return (
                                                <button
                                                    key={grade.id}
                                                    onClick={() => setCurrentSubGrade(gradeNum)}
                                                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${currentSubGrade === gradeNum
                                                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg scale-105'
                                                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:shadow-md'
                                                        }`}
                                                >
                                                    <div className="text-lg">{grade.name}</div>
                                                    {grade.subtitle && (
                                                        <div className="text-xs mt-1 opacity-80">{grade.subtitle}</div>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* L1/L2 Track Toggle */}
                                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700">
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">
                                                学习难度
                                            </h3>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                                选择适合你的学习路径
                                            </p>
                                        </div>
                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => setCurrentTrack('l1')}
                                                className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${currentTrack === 'l1'
                                                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                                                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:shadow-md'
                                                    }`}
                                            >
                                                <span className="text-xl">📚</span>
                                                <span>基础达标 (L1)</span>
                                            </button>
                                            <button
                                                onClick={() => setCurrentTrack('l2')}
                                                className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${currentTrack === 'l2'
                                                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                                                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:shadow-md'
                                                    }`}
                                            >
                                                <span className="text-xl">🧠</span>
                                                <span>思维进阶 (L2)</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Knowledge Modules Header */}
                        <div className="text-center mb-8">

                            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                                {currentGrade.name}知识体系
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400">
                                循序渐进的学习路径，点击卡片开始学习
                            </p>
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
                                        {module.topics.map((topic) => {
                                            // List of all completed math topics
                                            const completedTopics = [
                                                // Grade 1
                                                'g1-l1-addition-20',
                                                'g1-l1-number-100',
                                                'g1-l1-shapes',
                                                'g1-l1-position',
                                                'g1-l2-clever-calc',
                                                'g1-l2-matchstick',
                                                'g1-l2-shape-cut',
                                                'g1-l2-fill-numbers',
                                                // Grade 2
                                                'g2-l1-multiplication',
                                                'g2-l1-length-unit',
                                                'g2-l1-observation',
                                                'g2-l1-angle',
                                                'g2-l1-data-collection',
                                                'g2-l2-cycle-problem',
                                                'g2-l2-sum-diff',
                                                'g2-l2-logic-reasoning',
                                                'g2-l2-simple-counting',
                                                // Grade 3
                                                'g3-l1-multi-digit',
                                                'g3-l1-fraction-intro',
                                                'g3-l1-perimeter',
                                                'g3-l1-mass-unit',
                                                'g3-l2-tree-planting',
                                                'g3-l2-chicken-rabbit',
                                                'g3-l2-profit-loss',
                                                'g3-l2-unit-problem',
                                                'g3-l2-age-problem',
                                                // Grade 5
                                                'g5-l1-decimal-mult-div',
                                                'g5-l1-simple-equations',
                                                'g5-l1-polygon-area',
                                                'g5-l1-factors-multiples',
                                                'g5-l2-distance-problem',
                                                'g5-l2-number-theory',
                                                'g5-l2-geometry-models',
                                                'g5-l2-combinatorics',
                                                // Grade 6
                                                'g6-l1-fraction-ops',
                                                'g6-l1-circle',
                                                'g6-l1-ratio-proportion',
                                                'g6-l1-pie-chart',
                                                'g6-l1-negative-numbers',
                                                'g6-l2-work-problem',
                                                'g6-l2-concentration',
                                                'g6-l2-complex-distance',
                                                'g6-l2-number-theory-adv',
                                                'g6-l2-geometry-adv',
                                                // Grade 4
                                                'g4-l1-large-numbers',
                                                'g4-l1-angle-measurement',
                                                'g4-l1-division-two-digit',
                                                'g4-l1-decimal-ops',
                                                'g4-l1-mixed-ops',
                                                'g4-l1-parallel-trapezoid',
                                                'g4-l1-bar-chart',
                                                // Grade 4 L2
                                                'g4-l2-sum-diff-multiple',
                                                'g4-l2-clever-calc',
                                                'g4-l2-new-definition',
                                                'g4-l2-number-array',
                                                'g4-l2-logic-advanced',
                                                'mid-7-1-rational-numbers',
                                                'mid-7-1-algebraic-ops',
                                                'mid-7-1-linear-equations',
                                                'mid-7-1-geometry-basic',
                                                'mid-7-2-absolute-value-adv',
                                                'mid-7-2-inequalities',
                                                'mid-7-2-data-handling',
                                                'mid-7-2-plane-coordinates',
                                                // Grade 8
                                                'mid-8-1-triangles',
                                                'mid-8-1-factorization',
                                                'mid-8-1-fractions',
                                                'mid-8-1-linear-functions',
                                                'mid-8-1-axial-symmetry',
                                                'mid-8-1-roots',
                                                'mid-8-1-congruence',
                                                'mid-8-2-quadrilaterals',
                                                'mid-8-2-geometry-proofs',
                                                'mid-8-2-factorization-adv',
                                                'mid-8-2-fractions-adv',
                                                // Grade 9
                                                'mid-9-1-quadratic-equations',
                                                'mid-9-1-rotation',
                                                'mid-9-1-circles-basic',
                                                'mid-9-1-probability',
                                                'mid-9-2-quadratic-functions',
                                                'mid-9-2-similarity',
                                                'mid-9-2-trigonometry',
                                                'mid-9-2-circles-adv',
                                                // Grade 10
                                                'high-10-1-sets',
                                                'high-10-1-functions',
                                                'high-10-1-exp-log',
                                                'high-10-1-vectors',
                                                'high-10-2-trig-graphs',
                                                'high-10-2-trig-identities',
                                                'high-10-2-complex-numbers',
                                                // Grade 11
                                                'high-11-1-solid-geometry',
                                                'high-11-1-lines-circles',
                                                'high-11-1-statistics',
                                                'high-11-2-conics',
                                                'high-11-2-space-vectors',
                                                'high-11-2-sequence',
                                                // Grade 12
                                                'high-12-1-derivatives-calc',
                                                'high-12-1-counting',
                                                'high-12-2-derivative-apps',
                                                'high-12-2-random-variables',
                                                'high-12-2-parametric-polar'
                                            ];
                                            const isReady = completedTopics.includes(topic.id);
                                            const CardContent = () => (
                                                <>
                                                    {/* Coming Soon Badge - Only for non-ready topics */}
                                                    {!isReady && (
                                                        <div className="absolute top-3 right-3 px-2 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold">
                                                            即将推出
                                                        </div>
                                                    )}

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
                                                            {topic.specialFeature === 'interactive' && (
                                                                <span className="px-2 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 rounded-full flex items-center gap-1">
                                                                    <Sparkles className="w-3 h-3" />
                                                                    互动实验
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className={`flex items-center gap-2 font-semibold text-sm ${isReady ? 'text-indigo-600 dark:text-indigo-400' : 'text-indigo-600 dark:text-indigo-400 opacity-60'}`}>
                                                        <span>{isReady ? '开始学习' : '即将推出'}</span>
                                                        <ChevronRight className={`w-4 h-4 ${isReady ? 'group-hover:translate-x-1 transition-transform' : ''}`} />
                                                    </div>
                                                </>
                                            );

                                            return isReady ? (
                                                <Link
                                                    key={topic.id}
                                                    to={`/subjects/math/${topic.id}`}
                                                    className="group relative bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 hover:shadow-lg transition-all border border-transparent hover:border-indigo-500 hover:scale-[1.02]"
                                                >
                                                    <CardContent />
                                                </Link>
                                            ) : (
                                                <div
                                                    key={topic.id}
                                                    className="group relative bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 hover:shadow-lg transition-all cursor-not-allowed opacity-80"
                                                >
                                                    <CardContent />
                                                </div>
                                            );
                                        })}
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

                {/* Why Choose Us (From MathTutoring) */}
                <section className="py-16 px-6 bg-slate-50 dark:bg-slate-800/50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                                为什么选择我们的数学辅导
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                不只是解题，更是培养数学思维
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <Brain className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                                    苏格拉底式教学
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    不直接给答案，通过提问引导你独立思考
                                </p>
                            </div>

                            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                                    因材施教
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    根据年级和水平，提供个性化的辅导方式
                                </p>
                            </div>

                            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <Zap className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                                    24小时在线
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    随时随地获得数学作业帮助，不受时间限制
                                </p>
                            </div>

                            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                                    循序渐进
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    从简单到复杂，逐步提升数学能力
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ (From MathTutoring) */}
                <section className="py-16 px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">
                            常见问题
                        </h2>
                        <div className="space-y-4">
                            <details className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md cursor-pointer group">
                                <summary className="font-semibold text-slate-800 dark:text-white flex items-center justify-between">
                                    数学作业辅导支持哪些年级？
                                    <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform" />
                                </summary>
                                <p className="mt-3 text-slate-600 dark:text-slate-400">
                                    我们支持小学、初中、高中、大学所有年级的数学作业辅导。每个年级都有专门的教学方法，确保最佳学习效果。
                                </p>
                            </details>

                            <details className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md cursor-pointer group">
                                <summary className="font-semibold text-slate-800 dark:text-white flex items-center justify-between">
                                    数学辅导会直接给答案吗？
                                    <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform" />
                                </summary>
                                <p className="mt-3 text-slate-600 dark:text-slate-400">
                                    不会。我们采用苏格拉底式教学方法，通过提问引导你独立思考和解题。这样你不仅能得到答案，更重要的是理解解题思路，培养数学思维。
                                </p>
                            </details>

                            <details className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md cursor-pointer group">
                                <summary className="font-semibold text-slate-800 dark:text-white flex items-center justify-between">
                                    数学题目太难怎么办？
                                    <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform" />
                                </summary>
                                <p className="mt-3 text-slate-600 dark:text-slate-400">
                                    AI会根据难度调整辅导方式。如果题目太难，会从基础概念开始引导，逐步提升到目标难度。这基于维果茨基的最近发展区理论。
                                </p>
                            </details>
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

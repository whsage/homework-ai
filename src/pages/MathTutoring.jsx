import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
    Calculator,
    TrendingUp,
    CheckCircle,
    BookOpen,
    Brain,
    Zap,
    Users,
    Award,
    ArrowRight,
    Lightbulb,
    Target,
    Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const MathTutoring = () => {
    const { language } = useLanguage();
    const [activeGrade, setActiveGrade] = useState('middle');

    const gradeContent = {
        elementary: {
            title: '小学数学辅导',
            subtitle: '趣味化学习，培养数学兴趣',
            age: '6-12岁',
            icon: '🎨',
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
            topics: [
                '加减乘除运算',
                '分数、小数、百分数',
                '简单几何图形',
                '应用题解答',
                '时间和长度单位',
                '简单统计图表'
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
            icon: '🧠',
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
            topics: [
                '代数：方程、不等式、函数',
                '几何：三角形、圆、相似',
                '统计：概率、数据分析',
                '数与式：因式分解、根式',
                '图形变换：平移、旋转、对称',
                '应用题：行程、工程、经济'
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
            icon: '🎓',
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
            topics: [
                '函数与导数：极值、单调性、切线',
                '三角函数：恒等变换、图像性质',
                '立体几何：空间向量、体积面积',
                '解析几何：直线、圆、圆锥曲线',
                '数列：等差、等比、递推',
                '概率统计：排列组合、分布、期望'
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
            icon: '🔬',
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
            topics: [
                '高等数学：极限、微积分、级数',
                '线性代数：矩阵、向量空间、特征值',
                '概率论：随机变量、分布、大数定律',
                '数理统计：参数估计、假设检验',
                '常微分方程：求解方法、应用',
                '复变函数：解析函数、留数定理'
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

    const currentContent = gradeContent[activeGrade];

    return (
        <>
            <Helmet>
                <title>数学作业辅导 - AI智能数学辅导平台 | AI7Miao</title>
                <meta name="description" content="专业的数学作业辅导服务，覆盖小学、初中、高中、大学全年级。支持代数、几何、微积分等全面数学辅导。基于国际教育理论，AI智能辅导，24小时在线数学作业帮助。" />
                <meta name="keywords" content="数学作业辅导,数学辅导,小学数学辅导,初中数学辅导,高中数学辅导,大学数学辅导,代数辅导,几何辅导,微积分辅导,数学作业帮助,在线数学辅导" />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                {/* Hero Section */}
                <section className="relative overflow-hidden py-20 px-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/5 dark:to-indigo-500/5"></div>
                    <div className="max-w-7xl mx-auto relative">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
                                <Calculator className="w-4 h-4" />
                                <span>基于国际教育理论的科学辅导</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
                                数学作业辅导
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-300 mb-4 max-w-3xl mx-auto">
                                从小学到大学的全方位数学学习支持
                            </p>
                            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8">
                                代数、几何、微积分等全面数学辅导 · AI智能引导 · 24小时在线
                            </p>
                            <Link
                                to="/new"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                            >
                                开始数学辅导
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg">
                                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">4</div>
                                <div className="text-sm text-slate-600 dark:text-slate-400">年级覆盖</div>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg">
                                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">20+</div>
                                <div className="text-sm text-slate-600 dark:text-slate-400">知识模块</div>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg">
                                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">24/7</div>
                                <div className="text-sm text-slate-600 dark:text-slate-400">在线辅导</div>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg">
                                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">5</div>
                                <div className="text-sm text-slate-600 dark:text-slate-400">教育理论</div>
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
                                不同年级，不同的教学方法，因材施教
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

                        {/* Grade Content */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12">
                            <div className="text-center mb-12">
                                <div className="text-6xl mb-4">{currentContent.icon}</div>
                                <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
                                    {currentContent.title}
                                </h3>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-2">
                                    {currentContent.subtitle}
                                </p>
                                <span className="inline-block px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">
                                    {currentContent.age}
                                </span>
                            </div>

                            {/* Features */}
                            <div className="mb-12">
                                <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                                    <Sparkles className="w-6 h-6 text-indigo-600" />
                                    教学特点
                                </h4>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {currentContent.features.map((feature, index) => (
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
                            </div>

                            {/* Topics */}
                            <div className="mb-12">
                                <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                                    <BookOpen className="w-6 h-6 text-indigo-600" />
                                    辅导内容
                                </h4>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {currentContent.topics.map((topic, index) => (
                                        <div key={index} className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                                            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                                            <span className="text-slate-700 dark:text-slate-300">{topic}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Case Study */}
                            <div className="mb-12">
                                <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                                    <Lightbulb className="w-6 h-6 text-indigo-600" />
                                    辅导案例
                                </h4>
                                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6">
                                    <h5 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
                                        {currentContent.case.title}
                                    </h5>
                                    <div className="mb-4">
                                        <span className="font-semibold text-slate-700 dark:text-slate-300">问题：</span>
                                        <span className="text-slate-600 dark:text-slate-400 ml-2">{currentContent.case.problem}</span>
                                    </div>

                                    <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
                                        <div className="font-semibold text-red-700 dark:text-red-400 mb-2">❌ 传统方法：</div>
                                        <div className="text-slate-600 dark:text-slate-400">{currentContent.case.traditional}</div>
                                    </div>

                                    <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded">
                                        <div className="font-semibold text-green-700 dark:text-green-400 mb-2">✅ 我们的方法：</div>
                                        <div className="space-y-2">
                                            {currentContent.case.ourWay.map((step, index) => (
                                                <div key={index} className="text-slate-600 dark:text-slate-400">
                                                    {step}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
                                        <div className="font-semibold text-blue-700 dark:text-blue-400 mb-2">🎯 效果：</div>
                                        <div className="text-slate-600 dark:text-slate-400">{currentContent.case.result}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Theory */}
                            <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                                <div className="flex items-start gap-3">
                                    <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="font-semibold text-purple-700 dark:text-purple-400 mb-2">
                                            🎓 教育理论支撑
                                        </div>
                                        <div className="text-slate-600 dark:text-slate-400">
                                            {currentContent.theory}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Scientific Foundation */}
                <section className="py-16 px-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                                🎓 科学的教学方法
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                                我们的分层数学辅导方法不是凭空想象，而是基于国际公认的教育理论，
                                经过数十年研究验证，确保教学效果最佳
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                                    <Brain className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                                    皮亚杰认知发展理论
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                                    根据学生认知发展阶段，提供适合的教学内容和方法
                                </p>
                                <div className="text-xs text-indigo-600 dark:text-indigo-400">
                                    Jean Piaget, 1952
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                                    <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                                    最近发展区理论
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                                    个性化难度调整，确保学习在最佳区域，既有挑战又能完成
                                </p>
                                <div className="text-xs text-green-600 dark:text-green-400">
                                    Lev Vygotsky, 1978
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                                    <Lightbulb className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                                    发现学习理论
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                                    通过苏格拉底式提问引导，让学生自己发现知识，理解更深刻
                                </p>
                                <div className="text-xs text-purple-600 dark:text-purple-400">
                                    Jerome Bruner, 1961
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                还包括布鲁姆教育目标分类学、加德纳多元智能理论等国际公认的教育理论
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-16 px-6">
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
                            <div className="text-center p-6">
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

                            <div className="text-center p-6">
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

                            <div className="text-center p-6">
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

                            <div className="text-center p-6">
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

                {/* FAQ */}
                <section className="py-16 px-6 bg-slate-50 dark:bg-slate-800/50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">
                            常见问题
                        </h2>
                        <div className="space-y-4">
                            <details className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                                <summary className="font-semibold text-slate-800 dark:text-white cursor-pointer">
                                    数学作业辅导支持哪些年级？
                                </summary>
                                <p className="mt-3 text-slate-600 dark:text-slate-400">
                                    我们支持小学、初中、高中、大学所有年级的数学作业辅导。每个年级都有专门的教学方法，确保最佳学习效果。
                                </p>
                            </details>

                            <details className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                                <summary className="font-semibold text-slate-800 dark:text-white cursor-pointer">
                                    数学辅导会直接给答案吗？
                                </summary>
                                <p className="mt-3 text-slate-600 dark:text-slate-400">
                                    不会。我们采用苏格拉底式教学方法，通过提问引导你独立思考和解题。这样你不仅能得到答案，更重要的是理解解题思路，培养数学思维。
                                </p>
                            </details>

                            <details className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                                <summary className="font-semibold text-slate-800 dark:text-white cursor-pointer">
                                    为什么小学数学要用生活场景解释？
                                </summary>
                                <p className="mt-3 text-slate-600 dark:text-slate-400">
                                    根据皮亚杰认知发展理论，7-11岁儿童处于具体运算期，需要具体事物支持思维。用披萨、苹果等生活场景能帮助孩子更好地理解抽象的数学概念。
                                </p>
                            </details>

                            <details className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                                <summary className="font-semibold text-slate-800 dark:text-white cursor-pointer">
                                    数学题目太难怎么办？
                                </summary>
                                <p className="mt-3 text-slate-600 dark:text-slate-400">
                                    AI会根据难度调整辅导方式。如果题目太难，会从基础概念开始引导，逐步提升到目标难度。这基于维果茨基的最近发展区理论，确保学习在适当的难度范围内。
                                </p>
                            </details>

                            <details className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                                <summary className="font-semibold text-slate-800 dark:text-white cursor-pointer">
                                    可以辅导数学竞赛题吗？
                                </summary>
                                <p className="mt-3 text-slate-600 dark:text-slate-400">
                                    可以。我们支持各类数学竞赛题目的辅导，包括奥数、AMC、AIME等。会引导你从多个角度分析问题，培养竞赛思维。
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
                                开始你的数学学习之旅
                            </h2>
                            <p className="text-xl text-indigo-100 mb-8">
                                无论你是小学生还是大学生，我们都能提供最适合你的数学辅导
                            </p>
                            <Link
                                to="/new"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                            >
                                立即开始数学辅导
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <p className="text-indigo-100 text-sm mt-4">
                                24小时在线 · 随时随地 · 因材施教
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
                                数学作业辅导 | 数学辅导 | 小学数学辅导 | 初中数学辅导 | 高中数学辅导 | 大学数学辅导 |
                                代数辅导 | 几何辅导 | 微积分辅导 | 数学作业帮助 | 在线数学辅导 | AI数学辅导 |
                                数学答疑 | 数学学习 | 数学思维培养
                            </p>
                            <p>
                                AI7Miao - 专业的AI智能数学辅导平台，基于国际教育理论，提供科学的分层数学辅导服务
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default MathTutoring;

import { Icons, PracticeProblem, Link, React, generateDefaultContent } from './common';
import { mathKnowledgeGraph } from '../mathKnowledgeGraph';
import RotationDiagram from '../../components/subjects/math/diagrams/RotationDiagram';
import CircleChordDiagram from '../../components/subjects/math/diagrams/CircleChordDiagram';
import SimilarityDiagram from '../../components/subjects/math/diagrams/SimilarityDiagram';
import TrigFunctionsDiagram from '../../components/subjects/math/diagrams/TrigFunctionsDiagram';
import { MousePointer2 } from 'lucide-react';

const {
    Lightbulb, Target, TrendingUp, Clock, Star, Brain, CheckCircle, Sparkles, ChevronRight, Calculator, Award
} = Icons;

export const grade9Content = {
    // ==================== 21. 一元二次方程 ====================
    'mid-9-1-quadratic-equations': {
        meta: {
            title: "一元二次方程 - 解法与应用 | AI7Miao数学",
            description: "掌握一元二次方程的定义、解法(配方法、公式法、因式分解法)及根与系数的关系。通过面积问题理解二次方程的实际意义。",
            keywords: "一元二次方程,求根公式,韦达定理,配方法,判别式"
        },
        info: {
            title: "一元二次方程",
            description: "学习如何求解含有一个未知数且最高次数为2的整式方程,掌握解方程的三种核心方法。",
            tags: [
                { text: "九年级", color: "blue" },
                { text: "代数核心", color: "red" },
                { text: "45分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生正在学习一元二次方程。请引导学生理解为什么我们需要不同的解法(如配方法导出了公式法)。强调根的判别式(Delta)的几何意义。用面积问题帮助理解。",
        aiChatTitle: "AI互动学习:探索方程的解",
        aiChatIntro: "通过面积问题,你将理解二次方程的实际意义。这比直接套公式理解更深刻。",
        aiMessages: [
            { role: 'ai', content: '一个长方形花园,长比宽多3米,面积是40平方米。你能求出宽度吗？' },
            { role: 'user', content: '设宽为x米,那长就是(x+3)米' },
            { role: 'ai', content: <>对！那面积方程是什么？</> },
            { role: 'user', content: 'x(x+3) = 40' },
            { role: 'ai', content: <>完全正确！展开得 x² + 3x = 40,移项得 <strong className="text-indigo-600">x² + 3x - 40 = 0</strong>。这就是一元二次方程！现在怎么解呢？</>, type: 'success' },
            { role: 'user', content: '嗯...能因式分解吗？' },
            { role: 'ai', content: <>太棒了！试试十字相乘法。找两个数,相乘得-40,相加得3。</> },
            { role: 'user', content: '8和-5！所以 (x+8)(x-5) = 0' },
            { role: 'ai', content: <>完美！所以 x = -8 或 x = 5。但宽度不能是负数,所以<strong className="text-green-600">宽度是5米</strong>！这就是<strong>因式分解法</strong>。</>, type: 'success' },
            { role: 'user', content: '如果不能因式分解呢？' },
            { role: 'ai', content: <>好问题！那就用<strong className="text-red-600">求根公式</strong>: x = (-b ± √(b²-4ac)) / 2a。这个公式永远有效！其中 b²-4ac 叫<strong>判别式</strong>,它决定方程有几个解。</> }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            定义与标准形式
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">什么是一元二次方程？</h3>
                                <p className="text-slate-700 dark:text-slate-300 mb-4">
                                    等号两边都是<strong>整式</strong>,只含有一个未知数(一元),并且未知数的最高次数是<strong>2</strong>(二次)的方程。
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                    <p className="text-sm mb-2">标准形式:</p>
                                    <code className="text-lg block mb-3">ax² + bx + c = 0  (a≠0)</code>
                                    <p className="text-sm mb-2">例如:</p>
                                    <code className="text-sm block">x² - 5x + 6 = 0</code>
                                    <code className="text-sm block">2x² + 3x - 1 = 0</code>
                                </div>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
                                <h3 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-3">求根公式</h3>
                                <p className="mb-2 text-sm text-slate-700 dark:text-slate-300">当 b² - 4ac ≥ 0 时,方程的实数根为:</p>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg text-center">
                                    <code className="text-xl font-bold text-blue-600 dark:text-blue-400">
                                        x = (-b ± √(b²-4ac)) / 2a
                                    </code>
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
                                            我们用<strong>面积问题</strong>帮助你理解二次方程的实际意义。
                                            通过具体问题,让抽象的二次方程变得可以理解和应用。
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Target className="w-6 h-6 text-indigo-600" />
                            根的判别式与韦达定理
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-100 dark:border-red-800">
                                <h3 className="font-bold text-red-700 dark:text-red-400 mb-4 text-lg">根的判别式 (Δ = b² - 4ac)</h3>
                                <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600">✓</span>
                                        <div><strong>Δ {'>'} 0</strong>: 方程有两个不相等的实数根</div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600">✓</span>
                                        <div><strong>Δ = 0</strong>: 方程有两个相等的实数根</div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600">✗</span>
                                        <div><strong>Δ {'<'} 0</strong>: 方程没有实数根</div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800">
                                <h3 className="font-bold text-purple-700 dark:text-purple-400 mb-4 text-lg">韦达定理</h3>
                                <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">若方程 ax² + bx + c = 0 的两根为 x₁ 和 x₂,则:</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-white dark:bg-slate-700 p-4 rounded-lg text-center">
                                        <p className="text-sm mb-2">两根之和</p>
                                        <code className="text-lg font-bold">x₁ + x₂ = -b/a</code>
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-4 rounded-lg text-center">
                                        <p className="text-sm mb-2">两根之积</p>
                                        <code className="text-lg font-bold">x₁x₂ = c/a</code>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-100 dark:border-orange-800">
                                <h3 className="font-bold text-orange-700 dark:text-orange-400 mb-3">💡 解法选择技巧</h3>
                                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                    <li>• 能直接开方 → <strong>直接开平方法</strong> (如 x² = 9)</li>
                                    <li>• 能因式分解 → <strong>因式分解法</strong> (如 x² - 5x + 6 = 0)</li>
                                    <li>• 其他情况 → <strong>求根公式</strong> (万能方法)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例1:因式分解法
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>解方程:</strong> x² - 4x + 3 = 0</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>因式分解得: (x - 1)(x - 3) = 0</p>
                            <p>∴ x - 1 = 0 或 x - 3 = 0</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">∴ x₁ = 1, x₂ = 3</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例2:求根公式法
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>解方程:</strong> 2x² + 3x - 1 = 0</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>a = 2, b = 3, c = -1</p>
                            <p>Δ = b² - 4ac = 9 - 4×2×(-1) = 17 {'>'} 0</p>
                            <p>x = (-3 ± √17) / 4</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">∴ x₁ = (-3+√17)/4, x₂ = (-3-√17)/4</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例3:应用题(面积问题)
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>一个长方形花园,长比宽多3米,面积是40平方米,求宽度。</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>设宽为x米,则长为(x+3)米</p>
                            <p>x(x+3) = 40</p>
                            <p>x² + 3x - 40 = 0</p>
                            <p>(x+8)(x-5) = 0</p>
                            <p>x = -8 或 x = 5</p>
                            <p>∵ 宽度不能为负数</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">∴ 宽度为5米</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={922} type="choice"
                        question="方程 x² - 2x = 0 的根是？"
                        options={[
                            { label: 'A', value: 'x=2' },
                            { label: 'B', value: 'x=0' },
                            { label: 'C', value: 'x₁=0, x₂=2' },
                            { label: 'D', value: 'x₁=0, x₂=-2' }
                        ]}
                        answer="C"
                        explanation="提取公因式 x(x-2)=0,所以 x=0 或 x-2=0。"
                    />
                    <PracticeProblem id={923} type="choice"
                        question="方程 x² - 4x + 5 = 0 的根的情况是？"
                        options={[
                            { label: 'A', value: '有两个不相等的实数根' },
                            { label: 'B', value: '有两个相等的实数根' },
                            { label: 'C', value: '没有实数根' },
                            { label: 'D', value: '无法判断' }
                        ]}
                        answer="C"
                        explanation="Δ = (-4)² - 4×1×5 = 16 - 20 = -4 < 0,所以没有实数根。"
                    />
                    <PracticeProblem id={924} type="choice"
                        question="若方程 x² - 3x + k = 0 的两根之积为2,则k的值是？"
                        options={[
                            { label: 'A', value: 'k=1' },
                            { label: 'B', value: 'k=2' },
                            { label: 'C', value: 'k=3' },
                            { label: 'D', value: 'k=-2' }
                        ]}
                        answer="B"
                        explanation="根据韦达定理,两根之积 = c/a = k/1 = k = 2。"
                    />
                </div>
            )
        }
    },

    // ==================== 22. 二次函数 (保留原有) ====================
    'mid-9-1-quadratic-functions': {
        meta: {
            title: "二次函数知识点详解 - 图像性质与应用 | AI7Miao数学学习",
            description: "详细讲解二次函数的概念、图像、性质和应用。包括配方法、顶点式、一般式等，提供AI互动学习和练习题。基于建构主义学习理论，引导式教学。",
            keywords: "二次函数,二次函数图像,二次函数性质,配方法,顶点式,抛物线,二次函数应用,数学知识点,初中数学"
        },
        info: {
            title: "二次函数",
            description: "二次函数是初中数学的核心内容，它的图像是抛物线，在实际生活中有广泛应用。通过本节学习，你将深入理解二次函数的概念、性质和应用。",
            tags: [
                { text: "初中数学", color: "blue" },
                { text: "重点内容", color: "red" },
                { text: "50分钟", icon: Clock, color: "slate" },
                { text: "重要", icon: Star, color: "orange" }
            ]
        },
        aiContext: "学生正在看二次函数核心概念。请引导学生通过计算 f(x) 和 f(-x) 的值，自己发现抛物线关于 y 轴对称的性质。不要直接给出结论，要一步步提问。",
        aiChatTitle: "AI互动学习：发现抛物线的对称性",
        aiChatIntro: "通过引导式提问，你自己发现了抛物线的对称性，这比直接告诉你'抛物线关于对称轴对称'的理解要深刻得多。",
        aiMessages: [
            { role: 'ai', content: '你知道 y = x² 这个函数吗？当 x = 1 时，y 等于多少？' },
            { role: 'user', content: 'y = 1' },
            { role: 'ai', content: '很好！那当 x = 2 时呢？' },
            { role: 'user', content: 'y = 4' },
            { role: 'ai', content: '现在试试 x = -1 时，y 是多少？' },
            { role: 'user', content: 'y = 1，和 x = 1 时一样！' },
            { role: 'ai', content: '太棒了！你发现了什么规律？' },
            { role: 'user', content: '正数和负数的 y 值相同！图像关于 y 轴对称！' },
            { role: 'ai', content: <><strong className="text-green-700 dark:text-green-400">完全正确！</strong>这就是二次函数图像的对称性。通过自己的探索，你发现了抛物线的重要性质！</>, type: 'success' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    {/* 什么是二次函数 */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
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

                    {/* 为什么学二次函数 */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
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
            ),
            properties: (
                <div className="space-y-6">
                    {/* 1. 参数 a 的影响：开口方向与宽窄 */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <TrendingUp className="w-6 h-6 text-indigo-600" />
                            1. 参数 a 决定开口方向与大小
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 border border-orange-100 dark:border-orange-800">
                                <h3 className="text-lg font-bold text-orange-700 dark:text-orange-400 mb-4 text-center">
                                    当 a &gt; 0 时
                                </h3>
                                <div className="h-40 flex items-center justify-center mb-4">
                                    <svg viewBox="0 0 100 100" className="w-full h-full text-orange-500">
                                        <path d="M 10 10 Q 50 90 90 10" fill="none" stroke="currentColor" strokeWidth="3" />
                                        <circle cx="50" cy="50" r="3" fill="currentColor" />
                                        <text x="50" y="70" textAnchor="middle" fontSize="10" fill="currentColor">开口向上</text>
                                        <text x="50" y="85" textAnchor="middle" fontSize="10" fill="currentColor">有最小值</text>
                                    </svg>
                                </div>
                                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5" />
                                        <span>开口<strong>向上</strong></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5" />
                                        <span>有<strong>最小值</strong>（在顶点处）</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
                                <h3 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-4 text-center">
                                    当 a &lt; 0 时
                                </h3>
                                <div className="h-40 flex items-center justify-center mb-4">
                                    <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500">
                                        <path d="M 10 90 Q 50 10 90 90" fill="none" stroke="currentColor" strokeWidth="3" />
                                        <circle cx="50" cy="50" r="3" fill="currentColor" />
                                        <text x="50" y="30" textAnchor="middle" fontSize="10" fill="currentColor">开口向下</text>
                                        <text x="50" y="15" textAnchor="middle" fontSize="10" fill="currentColor">有最大值</text>
                                    </svg>
                                </div>
                                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                                        <span>开口<strong>向下</strong></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                                        <span>有<strong>最大值</strong>（在顶点处）</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 2. 对称轴与顶点 */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Target className="w-6 h-6 text-indigo-600" />
                            2. 对称轴与顶点坐标
                        </h2>

                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1 space-y-6">
                                <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl border-l-4 border-indigo-500">
                                    <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-2">对称轴公式</h4>
                                    <code className="text-2xl text-indigo-600 dark:text-indigo-400 font-bold">
                                        x = - <span className="mx-1">b</span> / <span className="mx-1">2a</span>
                                    </code>
                                </div>

                                <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl border-l-4 border-purple-500">
                                    <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-2">顶点坐标公式</h4>
                                    <div className="flex items-center gap-2">
                                        <code className="text-xl text-purple-600 dark:text-purple-400 font-bold">
                                            ( -<span className="mx-1">b</span>/2a , <span className="mx-1">4ac-b²</span>/4a )
                                        </code>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl">
                                    <h4 className="font-bold text-indigo-800 dark:text-indigo-300 mb-4 flex items-center gap-2">
                                        <Sparkles className="w-4 h-4" />
                                        小技巧：记忆口诀
                                    </h4>
                                    <ul className="space-y-3 text-sm text-indigo-700 dark:text-indigo-400">
                                        <li>• <strong>左同右异</strong>：a、b同号时，对称轴在y轴左侧；异号时在右侧。</li>
                                        <li>• <strong>c点截距</strong>：抛物线与y轴交点坐标为 (0, c)。</li>
                                        <li>• <strong>顶点最值</strong>：顶点纵坐标即为函数的最大值或最小值。</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    {/* 例题 1 */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-lg text-sm font-bold">
                                例题 1
                            </span>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                                Known vertex, find expression
                            </h3>
                        </div>

                        <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl text-slate-700 dark:text-slate-300">
                            已知二次函数的图像顶点为 (1, -4)，且经过点 (2, -3)，求该二次函数的解析式。
                        </div>

                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 font-bold text-sm flex-shrink-0">
                                    思
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-600 dark:text-slate-400 mb-1">思路分析</div>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                                        题目已知顶点坐标，因此使用<strong>顶点式</strong> y = a(x-h)² + k 最为简便。
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-sm flex-shrink-0">
                                    解
                                </div>
                                <div className="space-y-3 w-full">
                                    <div className="p-3 bg-slate-50 dark:bg-slate-700/30 rounded-lg border-l-2 border-blue-400">
                                        <p className="text-slate-700 dark:text-slate-300 text-sm">
                                            设二次函数解析式为 y = a(x - 1)² - 4
                                        </p>
                                    </div>
                                    <div className="p-3 bg-slate-50 dark:bg-slate-700/30 rounded-lg border-l-2 border-blue-400">
                                        <p className="text-slate-700 dark:text-slate-300 text-sm">
                                            将点 (2, -3) 代入上式，得：<br />
                                            -3 = a(2 - 1)² - 4
                                        </p>
                                    </div>
                                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                        <p className="text-indigo-700 dark:text-indigo-400 font-bold">
                                            ∴ 解析式为 y = (x - 1)² - 4 或 y = x² - 2x - 3
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem
                        id={1}
                        type="choice"
                        question="二次函数 y = 2(x - 3)² + 5 的顶点坐标是？"
                        options={[
                            { label: 'A', value: '(-3, 5)' },
                            { label: 'B', value: '(3, 5)' },
                            { label: 'C', value: '(3, -5)' },
                            { label: 'D', value: '(-3, -5)' }
                        ]}
                        answer="B"
                        explanation="对于顶点式 y = a(x - h)² + k，顶点坐标为 (h, k)。这里 h=3, k=5，所以顶点为 (3, 5)。"
                    />

                    <PracticeProblem
                        id={2}
                        type="text"
                        question="抛物线 y = x² - 2x - 3 与 y 轴的交点坐标是？"
                        answer="(0, -3)"
                        explanation="求与y轴交点，令 x=0，则 y = 0² - 0 - 3 = -3。所以交点坐标为 (0, -3)。"
                    />
                </div>
            )
        }
    },

    // ==================== 23. 旋转 ====================
    'mid-9-1-rotation': {
        meta: {
            title: "图形的旋转 - 几何变换 | AI7Miao数学",
            description: "理解图形旋转的三要素：旋转中心、旋转方向和旋转角。掌握中心对称图形的性质。",
            keywords: "旋转,中心对称,旋转中心,几何变换"
        },
        info: {
            title: "图形的旋转",
            description: "世界在转动！从风车到车轮，旋转无处不在。学习旋转，掌握几何变换的奥秘。",
            tags: [{ text: "几何变换", color: "purple" }, { text: "重要概念", color: "blue" }]
        },
        aiContext: "学生正在学习旋转。请引导学生找出身边旋转的例子（如钟表），并让他们指出旋转中心在哪里。区分'旋转'和'平移'、'轴对称'的不同。",
        aiChatTitle: "AI导师：一起转动世界",
        aiChatIntro: "你能找到旋转中心吗？让我们一起来玩一个'大家来找茬'的游戏，看看哪些图形是旋转得到的。",
        tabs: {
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：图形的旋转
                        </h2>

                        <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 mb-4">
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                                拖动滑块改变<strong>旋转角</strong>。观察：
                                1. 对应点到旋转中心 O 的距离相等 (OA = OA')。
                                2. 旋转前后图形全等。
                            </p>

                            <RotationDiagram />
                        </div>
                    </div>
                </div>
            ),
            concept: (
                <div className="space-y-6">
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 p-6 rounded-2xl">
                        <h3 className="font-bold text-lg mb-3">旋转三要素</h3>
                        <ul className="space-y-2">
                            <li>1. <strong>旋转中心</strong>：图形绕着转动的那个点。</li>
                            <li>2. <strong>旋转方向</strong>：顺时针 或 逆时针。</li>
                            <li>3. <strong>旋转角</strong>：对应点与旋转中心连线所成的角。</li>
                        </ul>
                    </div>
                </div>
            ),
            properties: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h3 className="font-bold mb-4">旋转的性质</h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                        <li>对应点到旋转中心的距离相等。</li>
                        <li>对应点与旋转中心所连线段的夹角等于旋转角。</li>
                        <li>旋转前后的图形全等（形状、大小不变）。</li>
                    </ul>
                </div>
            ),
            examples: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h4 className="font-bold mb-2">例题：找旋转中心</h4>
                    <p>两个全等的三角形，如何通过尺规作图找到它们的旋转中心？</p>
                    <p className="mt-2 text-sm text-slate-600">答：连接两组对应点，分别作这两条线段的垂直平分线，交点即为旋转中心。</p>
                </div>
            ),
            practice: (
                <PracticeProblem id={201} type="choice"
                    question="下列图形中，既是轴对称图形又是中心对称图形的是？"
                    options={[{ label: 'A', value: '等边三角形' }, { label: 'B', value: '平行四边形' }, { label: 'C', value: '正方形' }, { label: 'D', value: '正五边形' }]}
                    answer="C"
                    explanation="A是轴对称但不是中心对称；B是中心对称但不是轴对称；D是轴对称；只有C正方形既是轴对称又是中心对称。"
                />
            )
        }
    },

    // ==================== 24. 圆 ====================
    'mid-9-1-circle': {
        meta: {
            title: "圆的性质与计算 - 垂径定理与圆周角 | AI7Miao数学",
            description: "深入学习圆的所有性质：垂径定理、圆心角与圆周角的关系、切线的判定与性质。",
            keywords: "圆,垂径定理,圆周角,切线"
        },
        info: {
            title: "圆",
            description: "圆是最完美的几何图形。从车轮到月亮，探索圆的神奇性质及其在计算中的应用。",
            tags: [{ text: "几何核心", color: "indigo" }, { text: "难点", color: "red" }]
        },
        aiContext: "学生正在学习圆的性质。请重点讲解垂径定理的推导过程，利用'折纸'的思想来辅助理解对称性。",
        aiChatTitle: "AI互动学习:井盖为什么是圆的？",
        aiChatIntro: "除了美观，圆形井盖还有一个关乎安全的重要特性。这与圆的几何性质有关。",
        aiMessages: [
            { role: 'ai', content: '你在马路上见过很多井盖吧？它们大多数是什么形状的？' },
            { role: 'user', content: '圆形的！' },
            { role: 'ai', content: <>对！那你知道为什么不用方形的吗？如果井盖不小心立起来，方形的会怎么样？</> },
            { role: 'user', content: '方形的对角线比较长，可能会掉下去？' },
            { role: 'ai', content: <>太聪明了！方形的对角线长度 &gt; 边长。而圆不同，圆上的点到圆心的距离都<strong className="text-green-600">相等</strong>(半径)。所以不管怎么转，圆的宽度(直径)都是一样的，绝不会掉下去！</>, type: 'success' },
            { role: 'user', content: '原来是这样！那垂径定理是什么？' },
            { role: 'ai', content: <>想象你在切西瓜(圆)。如果你垂直于直径切一刀，切出来的两半西瓜皮(弧)是不是一样的？</> },
            { role: 'user', content: '是对称的！' },
            { role: 'ai', content: <>没错！这就是<strong className="text-blue-600">垂径定理</strong>：垂直于弦的直径，平分这条弦，并且平分弦所对的两条弧。圆是轴对称图形！</>, type: 'success' }
        ],
        tabs: {
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：垂径定理
                        </h2>

                        <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 mb-4">
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                                拖动圆上的点 <strong>B</strong>。观察：
                                1. 蓝色线段 <strong>CD</strong> (直径) 始终垂直于 弦 <strong>AB</strong>。
                                2. 被直径分成的两条线段 <strong>AE</strong> 和 <strong>EB</strong> 长度相等。
                            </p>

                            <CircleChordDiagram />
                        </div>
                    </div>
                </div>
            ),
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm">
                        <h3 className="font-bold text-lg mb-4 text-indigo-700 dark:text-indigo-400">圆的定义与对称性</h3>
                        <p className="mb-4">平面上到定点的距离等于定长的所有点组成的图形叫做圆。</p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl">
                                <h4 className="font-bold mb-2">轴对称性</h4>
                                <p className="text-sm">圆是轴对称图形，任意一条直径所在的直线都是它的对称轴。</p>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl">
                                <h4 className="font-bold mb-2">旋转不变性</h4>
                                <p className="text-sm">圆绕圆心旋转任意角度，都能与原图形重合。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Target className="w-6 h-6 text-indigo-600" />
                            核心定理
                        </h2>
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                                <h4 className="font-bold text-blue-700 dark:text-blue-400 text-lg mb-3">1. 垂径定理</h4>
                                <p className="text-slate-700 dark:text-slate-300">
                                    垂直于弦的直径<strong>平分这条弦</strong>，并且<strong>平分弦所对的两条弧</strong>。
                                </p>
                                <div className="mt-3 bg-white dark:bg-slate-700 p-3 rounded text-sm text-slate-600 dark:text-slate-400">
                                    推论：平分弦（不是直径）的直径垂直于弦，并且平分弦所对的两条弧。
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                                <h4 className="font-bold text-green-700 dark:text-green-400 text-lg mb-3">2. 圆周角定理</h4>
                                <p className="text-slate-700 dark:text-slate-300">
                                    在同圆或等圆中，同弧或等弧所对的圆周角相等，都等于这条弧所对的圆心角的<strong>一半</strong>。
                                </p>
                                <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                                    <div className="bg-white dark:bg-slate-700 p-2 rounded">
                                        直径所对的圆周角是<strong>直角(90°)</strong>
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-2 rounded">
                                        90°的圆周角所对的弦是<strong>直径</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例1: 垂径定理应用
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong> 已知⊙O半径为5，弦AB长为8，求圆心O到弦AB的距离。</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>过O作OD⊥AB于D。</p>
                            <p>∵ OD⊥AB, AB=8</p>
                            <p>∴ AD = {'\\frac{1}{2}'}AB = 4 (垂径定理)</p>
                            <p>在Rt△OAD中，OD = {'\\sqrt{OA ^ 2 - AD ^ 2} = \\sqrt{5 ^ 2 - 4 ^ 2} = \\sqrt{9} = 3'}</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: 距离为3。</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={301} type="text"
                        question="已知圆心角∠AOB=100°，则它所对的圆周角∠ACB的度数是？"
                        answer="50°"
                        explanation="同弧所对的圆周角等于圆心角的一半。100° ÷ 2 = 50°。"
                    />
                    <PracticeProblem id={302} type="choice"
                        question="如图，AB是⊙O的直径，∠ABC=30°，则∠BAC = ?"
                        options={[
                            { label: 'A', value: '30°' },
                            { label: 'B', value: '60°' },
                            { label: 'C', value: '90°' },
                            { label: 'D', value: '45°' }
                        ]}
                        answer="B"
                        explanation="因为AB是直径，所以∠C=90°。在Rt△ABC中，∠BAC = 90° - ∠ABC = 90° - 30° = 60°。"
                    />
                </div>
            )
        }
    },

    'mid-9-2-probability': {
        meta: {
            title: "概率初步 - 随机事件与概率计算 | AI7Miao数学",
            description: "理解确定性事件与随机事件，掌握用列举法（列表、画树状图）求概率。",
            keywords: "概率,随机事件,树状图,频率与概率"
        },
        info: {
            title: "概率初步",
            description: "明天会下雨吗？彩票能中奖吗？用数学的眼光看不确定的世界。",
            tags: [{ text: "统计与概率", color: "green" }]
        },
        aiContext: "学生在学习求概率。引导学生区分'频率'和'概率'的关系。解释为什么试验次数越多，频率越接近概率。",
        aiChatTitle: "AI导师：运气还是数学？",
        aiChatIntro: "抛一枚硬币，正面朝上的机会真的是一半吗？让我们用实验数据说话。",
        tabs: {
            concept: (
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl">
                    <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">公式</h3>
                    <p>P(A) = m / n</p>
                    <p className="text-sm mt-2">其中 n 是所有可能出现的结果总数，m 是事件 A 包含的结果数。</p>
                </div>
            ),
            properties: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <p>0 ≤ P(A) ≤ 1</p>
                    <ul>
                        <li>P(不可能事件) = 0</li>
                        <li>P(必然事件) = 1</li>
                    </ul>
                </div>
            ),
            examples: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h4 className="font-bold mb-2">例题：掷骰子</h4>
                    <p>掷一枚质地均匀的骰子，向上一面点数为偶数的概率是多少？</p>
                    <p className="mt-2 text-sm text-slate-600">
                        解：点数共有 1,2,3,4,5,6 六种可能。<br />
                        偶数有 2,4,6 三种。<br />
                        P(偶数) = 3/6 = 1/2。
                    </p>
                </div>
            ),
            practice: (
                <PracticeProblem id={401} type="choice"
                    question="袋中有红球3个，白球2个，摸到白球的概率是？"
                    options={[{ label: 'A', value: '2/3' }, { label: 'B', value: '2/5' }, { label: 'C', value: '3/5' }, { label: 'D', value: '1/2' }]}
                    answer="B"
                    explanation="总球数 = 3+2=5。白球数=2。P=2/5。"
                />
            )
        }
    },

    // ==================== 26. 反比例函数 ====================
    'mid-9-2-inverse-proportional': {
        meta: {
            title: "反比例函数 - 图像与性质 | AI7Miao数学",
            description: "掌握反比例函数的解析式 y=k/x，理解其双曲线图像与k值的关系。",
            keywords: "反比例函数,双曲线,反比例函数图像"
        },
        info: {
            title: "反比例函数",
            description: "由于路程一定，速度越快，时间越短。这种'此消彼长'的关系就是反比例。",
            tags: [{ text: "函数", color: "blue" }]
        },
        aiContext: "学生学习反比例函数。请对比'一次函数'（直线）和'反比例函数'（双曲线）的区别。强调 k 的几何意义（矩形面积）。",
        aiChatTitle: "AI导师：探索双曲线",
        aiChatIntro: "两个量，一个变大，另一个反而变小，它们的积是定值。这就是反比例的魔力。",
        aiMessages: [
            { role: 'ai', content: '我们来分蛋糕！如果有一个大蛋糕，分给的人越少，每个人分到的蛋糕就...？' },
            { role: 'user', content: '得到的蛋糕越多！' },
            { role: 'ai', content: <>没错！<strong className="text-indigo-600">人数 × 每人的量 = 蛋糕总数(定值)</strong>。这就是反比例关系。如果用 y 表示每人的量，x 表示人数，k 表示蛋糕总数，公式是什么？</> },
            { role: 'user', content: 'y = k / x' },
            { role: 'ai', content: <>完全正确！这叫<strong className="text-blue-600">反比例函数</strong>。它的图像是两条弯曲的线，叫双曲线。k决定了它们的位置！</>, type: 'success' }
        ],
        tabs: {
            concept: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h3 className="font-bold mb-2">定义</h3>
                    <p>形如 y = k/x (k≠0) 的函数。</p>
                    <p className="mt-2 text-sm text-slate-500">注意：x 不能为 0。</p>
                </div>
            ),
            properties: (
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl">
                        <h4 className="font-bold">k &gt; 0</h4>
                        <p className="text-sm">图像在一、三象限。</p>
                        <p className="text-sm">y 随 x 的增大而减小。</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl">
                        <h4 className="font-bold">k &lt; 0</h4>
                        <p className="text-sm">图像在二、四象限。</p>
                        <p className="text-sm">y 随 x 的增大而增大。</p>
                    </div>
                </div>
            ),
            examples: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h4 className="font-bold mb-2">例题：求解析式</h4>
                    <p>已知反比例函数图像经过点 (2, -4)，求解析式。</p>
                    <p className="mt-2 text-sm text-slate-600">
                        解：设 y = k/x。<br />
                        代入点 (2, -4) 得 -4 = k/2，解得 k = -8。<br />
                        ∴ y = -8/x。
                    </p>
                </div>
            ),
            practice: (
                <PracticeProblem id={501} type="choice"
                    question="反比例函数 y = 2/x 的图像位于？"
                    options={[{ label: 'A', value: '第一、二象限' }, { label: 'B', value: '第一、三象限' }, { label: 'C', value: '第二、三象限' }, { label: 'D', value: '第二、四象限' }]}
                    answer="B"
                    explanation="k=2 > 0，图像位于第一、三象限。"
                />
            )
        }
    },

    // ==================== 27. 相似 ====================
    'mid-9-2-similar': {
        meta: {
            title: "相似图形 - 相似三角形判定与性质 | AI7Miao数学",
            description: "学习相似图形的概念，重点掌握相似三角形的判定定理（AA, SAS, SSS）及性质。",
            keywords: "相似,相似三角形,位似"
        },
        info: {
            title: "相似",
            description: "放缩照片、地图比例尺，这些都是相似。相似是全等的'推广'，形状相同但大小不一定相同。",
            tags: [{ text: "几何", color: "indigo" }]
        },
        aiContext: "学生正在学习相似。请用'全等是相似的特例（相似比为1）'这个观点来帮助学生迁移知识。",
        aiChatTitle: "AI导师：放缩的世界",
        aiChatIntro: "如何测量金字塔的高度？不用爬上去，利用影子的'相似'关系就能算出。",
        aiMessages: [
            { role: 'ai', content: '如果在手机上放大一张照片，照片里的人变样了吗？' },
            { role: 'user', content: '样子没变，只是变大了。' },
            { role: 'ai', content: <>对！这就是<strong className="text-indigo-600">相似</strong>。形状相同，大小不同。在几何中，这意味着对应的角相等，对应的边...？</> },
            { role: 'user', content: '对应的边成比例？' },
            { role: 'ai', content: <>正解！如果把照片放大2倍，那么照片里所有的长度都变成了原来的2倍。这个2就是<strong className="text-blue-600">相似比</strong>。</>, type: 'success' }
        ],
        tabs: {
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：图形的相似
                        </h2>

                        <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 mb-4">
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                                拖动滑块改变<strong>相似比 k</strong>。观察：
                                1. 对应角始终相等 (∠A=∠A', ∠B=∠B', ∠C=∠C')。
                                2. 对应边成比例 (A'B'/AB = k)。
                            </p>

                            <SimilarityDiagram />
                        </div>
                    </div>
                </div>
            ),
            concept: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h3 className="font-bold mb-2">判定定理</h3>
                    <ul className="list-decimal list-inside space-y-2">
                        <li><strong>平行线法</strong>：平行于三角形一边的直线截其他两边，所得三角形与原三角形相似。</li>
                        <li><strong>两角相等 (AA)</strong>：两个角分别相等。</li>
                        <li><strong>两边成比例且夹角相等 (SAS)</strong>。</li>
                        <li><strong>三边成比例 (SSS)</strong>。</li>
                    </ul>
                </div>
            ),
            properties: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h3 className="font-bold mb-2">相似性质</h3>
                    <ul>
                        <li>对应角相等，对应边成比例。</li>
                        <li>周长比等于相似比。</li>
                        <li>面积比等于相似比的平方。</li>
                    </ul>
                </div>
            ),
            examples: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h4 className="font-bold mb-2">例题：相似比与面积</h4>
                    <p>若△ABC∽△DEF，相似比为 1:3，则它们的面积比是多少？</p>
                    <p className="mt-2 text-sm text-slate-600">
                        解：面积比 = 相似比的平方 = (1/3)² = 1:9。
                    </p>
                </div>
            ),
            practice: (
                <PracticeProblem id={601} type="text"
                    question="两个相似三角形的对应边长分别是 4 和 6，则它们的相似比是？"
                    answer="2:3"
                    explanation="4:6 化简为 2:3。"
                />
            )
        }
    },

    // ==================== 28. 锐角三角函数 ====================
    'mid-9-2-trigonometry': {
        meta: {
            title: "锐角三角函数 - sin cos tan | AI7Miao数学",
            description: "在直角三角形中理解正弦(sin)、余弦(cos)、正切(tan)的定义，记住特殊角的三角函数值。",
            keywords: "三角函数,sin,cos,tan,解直角三角形"
        },
        info: {
            title: "锐角三角函数",
            description: "角与边之间可以互相转化吗？三角函数建立了角与边比值之间的桥梁。",
            tags: [{ text: "几何与代数", color: "purple" }]
        },
        aiContext: "学生初学三角函数，容易混淆 sin, cos, tan。请提供记忆口诀（如'对边比斜边是正弦'）。",
        aiChatTitle: "AI导师：角与边的桥梁",
        aiChatIntro: "只知道一个角度，怎么算出楼有多高？三角函数是解决这个问题的金钥匙。",
        aiMessages: [
            { role: 'ai', content: '要把一把梯子斜靠在墙上，如果梯子和地面的角度越陡，梯子顶端是越高还是越低？' },
            { role: 'user', content: '越高！' },
            { role: 'ai', content: <>没错。这个高度(对边)和梯子长度(斜边)的比值，就由角度决定。我们给这些比值起了名字：正弦、余弦、正切。</> },
            { role: 'user', content: '怎么区分它们呢？' },
            { role: 'ai', content: <>有个口诀：<br /><strong className="text-indigo-600">正(sin)对</strong>：对边/斜边<br /><strong className="text-blue-600">余(cos)邻</strong>：邻边/斜边<br /><strong className="text-purple-600">切(tan)对临</strong>：对边/邻边</>, type: 'success' }
        ],
        tabs: {
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：锐角三角函数
                        </h2>

                        <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 mb-4">
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                                拖动圆上的点 <strong>B</strong> 改变角度。观察：
                                1. <strong>sin θ</strong> (红线) 随角度增大而增大。
                                2. <strong>cos θ</strong> (蓝线) 随角度增大而减小。
                            </p>

                            <TrigFunctionsDiagram />
                        </div>
                    </div>
                </div>
            ),
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                        <h3 className="font-bold text-lg mb-4">定义 (在Rt△ABC中, ∠C=90°)</h3>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                                <div className="font-bold text-indigo-600">sin A</div>
                                <div className="text-sm mt-1">对边 / 斜边</div>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                                <div className="font-bold text-indigo-600">cos A</div>
                                <div className="text-sm mt-1">邻边 / 斜边</div>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                                <div className="font-bold text-indigo-600">tan A</div>
                                <div className="text-sm mt-1">对边 / 邻边</div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h3 className="font-bold mb-4">特殊角的值</h3>
                    <table className="w-full text-center text-sm border-collapse">
                        <thead>
                            <tr className="bg-slate-100 dark:bg-slate-700">
                                <th className="p-2">Angle</th>
                                <th className="p-2">30°</th>
                                <th className="p-2">45°</th>
                                <th className="p-2">60°</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t border-slate-200 dark:border-slate-600">
                                <td className="p-2 font-bold">sin</td>
                                <td>1/2</td>
                                <td>√2/2</td>
                                <td>√3/2</td>
                            </tr>
                            <tr className="border-t border-slate-200 dark:border-slate-600">
                                <td className="p-2 font-bold">cos</td>
                                <td>√3/2</td>
                                <td>√2/2</td>
                                <td>1/2</td>
                            </tr>
                            <tr className="border-t border-slate-200 dark:border-slate-600">
                                <td className="p-2 font-bold">tan</td>
                                <td>√3/3</td>
                                <td>1</td>
                                <td>√3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ),
            examples: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h4 className="font-bold mb-2">例题：计算</h4>
                    <p>计算：sin 30° + tan 45°</p>
                    <p className="mt-2 text-sm text-slate-600">
                        解：原式 = 1/2 + 1 = 1.5。
                    </p>
                </div>
            ),
            practice: (
                <PracticeProblem id={701} type="choice"
                    question="在Rt△ABC中，∠C=90°，AB=5，BC=3，则 sin A = ?"
                    options={[{ label: 'A', value: '3/5' }, { label: 'B', value: '4/5' }, { label: 'C', value: '3/4' }, { label: 'D', value: '4/3' }]}
                    answer="A"
                    explanation="sin A = 对边BC / 斜边AB = 3/5。"
                />
            )
        }
    }
};

// Derive grade9Topics from the knowledge graph
const grade9Data = mathKnowledgeGraph.middle.grade9.semesters;
const grade9Topics = [...grade9Data.first, ...grade9Data.second];

// 如果有没覆盖到的，这里可以自动填充（目前已全部手动覆盖）
grade9Topics.forEach(t => {
    if (!grade9Content[t.id]) {
        grade9Content[t.id] = generateDefaultContent(t.id, t.name, '九年级');
    }
});

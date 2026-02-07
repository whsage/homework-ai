import { Icons, PracticeProblem, Link, React, generateDefaultContent } from './common';
import MathDiagram from '../../components/subjects/math/MathDiagram';
import ShortestPathDiagram from '../../components/subjects/math/diagrams/ShortestPathDiagram';
import { MousePointer2 } from 'lucide-react';

const {
    Lightbulb, Target, TrendingUp, Clock, Star, Brain, CheckCircle, Sparkles, ChevronRight, Calculator, Award, AlertCircle
} = Icons;

export const grade7Content = {
    // ==================== 1. 有理数 ====================
    'mid-7-1-rational-numbers': {
        meta: {
            title: "有理数 - 正数与负数、数轴、绝对值 | AI7Miao数学",
            description: "初中数学第一课！理解正数与负数，掌握有理数的加减乘除运算，理解数轴、相反数和绝对值的概念。通过温度计、海拔等生活实例，建构负数概念。",
            keywords: "有理数,负数,数轴,绝对值,相反数,有理数运算"
        },
        info: {
            title: "有理数",
            description: "欢迎来到初中数学！数字的世界扩大了，我们不仅有正数，还有负数。准备好进入更广阔的数学宇宙了吗？",
            tags: [
                { text: "七年级", color: "blue" },
                { text: "数学基石", color: "indigo" },
                { text: "入门必修", color: "red" },
                { text: "30分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生刚接触负数。请用'温度计'（零上零下）或'海拔'（海平面以上以下）的例子帮助学生直观理解负数。引导学生发现负数的实际意义。",
        aiChatTitle: "AI互动学习：发现负数的意义",
        aiChatIntro: "通过温度计的例子，你将自己发现负数的意义。这比直接告诉你'负数表示相反意义的量'理解更深刻。",
        aiMessages: [
            { role: 'ai', content: '你知道温度计吗？今天的温度是零上5度，我们可以记作 +5°C 或者 5°C。' },
            { role: 'user', content: '知道！' },
            { role: 'ai', content: '那如果明天降温了，温度是零下5度，你觉得应该怎么表示呢？' },
            { role: 'user', content: '用 -5°C？' },
            { role: 'ai', content: <>太棒了！<strong className="text-green-600">-5°C</strong> 就表示零下5度。你发现了吗？+5 和 -5 有什么关系？</>, type: 'success' },
            { role: 'user', content: '它们一个在零上，一个在零下，意义相反！' },
            { role: 'ai', content: '完全正确！再想想，如果我说"收入100元"记作 +100，那"支出100元"应该怎么记？' },
            { role: 'user', content: '-100！' },
            { role: 'ai', content: <>非常好！你已经理解了负数的本质：<strong className="text-indigo-600">负数用来表示与正数相反意义的量</strong>。这就是我们为什么需要负数！</>, type: 'success' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    {/* 什么是有理数 */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            什么是有理数？
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">定义</h3>
                                <p className="text-slate-700 dark:text-slate-300 mb-4">
                                    整数和分数统称为<strong>有理数</strong>。有理数包括：
                                </p>
                                <div className="grid md:grid-cols-3 gap-4 mt-4">
                                    <div className="bg-white dark:bg-slate-700 rounded-lg p-4">
                                        <div className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">正整数</div>
                                        <code className="text-sm">1, 2, 3, ...</code>
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 rounded-lg p-4">
                                        <div className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">零</div>
                                        <code className="text-sm">0</code>
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 rounded-lg p-4">
                                        <div className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">负整数</div>
                                        <code className="text-sm">-1, -2, -3, ...</code>
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 rounded-lg p-4 md:col-span-3">
                                        <div className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">分数</div>
                                        <code className="text-sm">1/2, -3/4, 0.5, -2.3, ...</code>
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
                                            我们不会直接告诉你"负数是什么"，而是通过温度、海拔等<strong>生活实例</strong>引导你思考。
                                            这基于<strong>建构主义学习理论</strong>，让你从已有经验出发，自己构建新知识。
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 为什么需要负数 */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Target className="w-6 h-6 text-indigo-600" />
                            为什么需要负数？
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                                <div className="text-3xl mb-3">🌡️</div>
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">温度</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    零上5度记作 +5°C，零下5度记作 -5°C。
                                    负数让我们可以表示零下的温度。
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                                <div className="text-3xl mb-3">🏔️</div>
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">海拔</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    珠穆朗玛峰海拔 +8848米，死海海拔 -430米。
                                    负数表示海平面以下的高度。
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                                <div className="text-3xl mb-3">💰</div>
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">收支</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    收入100元记作 +100，支出100元记作 -100。
                                    负数表示支出、亏损等。
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6">
                                <div className="text-3xl mb-3">📅</div>
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">时间</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    公元2024年记作 +2024，公元前221年记作 -221。
                                    负数表示公元前的年份。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 核心概念 */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Sparkles className="w-6 h-6 text-indigo-600" />
                            核心概念
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                                <div className="font-bold text-blue-700 dark:text-blue-400 mb-3 text-lg">数轴</div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                    规定了<strong>原点</strong>、<strong>正方向</strong>、<strong>单位长度</strong>的直线。
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-3 rounded-lg">
                                    <svg viewBox="0 0 200 40" className="w-full">
                                        <line x1="10" y1="20" x2="190" y2="20" stroke="currentColor" strokeWidth="2" />
                                        <polygon points="190,20 185,17 185,23" fill="currentColor" />
                                        {[-2, -1, 0, 1, 2].map(n => (
                                            <g key={n}>
                                                <line x1={100 + n * 30} y1="15" x2={100 + n * 30} y2="25" stroke="currentColor" strokeWidth="1.5" />
                                                <text x={100 + n * 30} y="35" textAnchor="middle" fontSize="10" fill="currentColor">{n}</text>
                                            </g>
                                        ))}
                                    </svg>
                                </div>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                                <div className="font-bold text-green-700 dark:text-green-400 mb-3 text-lg">相反数</div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                    只有<strong>符号不同</strong>的两个数互为相反数。
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-3 rounded-lg text-center">
                                    <code className="text-sm">5 和 -5</code><br />
                                    <code className="text-sm">-3.2 和 3.2</code><br />
                                    <span className="text-xs text-slate-500">0的相反数是0</span>
                                </div>
                            </div>

                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800">
                                <div className="font-bold text-purple-700 dark:text-purple-400 mb-3 text-lg">绝对值</div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                    数轴上表示数 a 的点到<strong>原点的距离</strong>，记作 |a|。
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-3 rounded-lg text-center">
                                    <code className="text-sm">|-5| = 5</code><br />
                                    <code className="text-sm">|3| = 3</code><br />
                                    <span className="text-xs text-slate-500">绝对值总是非负数</span>
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
                            <TrendingUp className="w-6 h-6 text-indigo-600" />
                            有理数的运算法则
                        </h2>

                        <div className="space-y-6">
                            {/* 加法 */}
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                                <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-4 text-lg">加法法则</h3>
                                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                    <li>• <strong>同号</strong>：取相同的符号，并把绝对值相加</li>
                                    <li>• <strong>异号</strong>：取绝对值较大的符号，并用较大的绝对值减去较小的绝对值</li>
                                    <li>• <strong>互为相反数</strong>：和为0</li>
                                    <li>• <strong>一个数与0相加</strong>：仍得这个数</li>
                                </ul>
                            </div>

                            {/* 减法 */}
                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                                <h3 className="font-bold text-green-700 dark:text-green-400 mb-4 text-lg">减法法则</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                                    减去一个数，等于<strong>加上这个数的相反数</strong>
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                    <code className="text-sm">a - b = a + (-b)</code>
                                </div>
                            </div>

                            {/* 乘除法 */}
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800">
                                <h3 className="font-bold text-purple-700 dark:text-purple-400 mb-4 text-lg">乘除法法则</h3>
                                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 rounded-r-xl">
                                    <p className="font-bold text-orange-800 dark:text-orange-300 mb-2">口诀：</p>
                                    <ul className="list-disc list-inside text-sm text-orange-700 dark:text-orange-400 space-y-1">
                                        <li><strong>同号得正</strong>，异号得负，并把绝对值相乘/除</li>
                                        <li>任何数与0相乘，都得0</li>
                                        <li>0除以任何非零数，都得0</li>
                                    </ul>
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
                            例1：有理数加法
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>计算：</strong>(-8) + (+5)</p>
                            <p className="mt-3"><strong>解：</strong></p>
                            <p>异号两数相加，取绝对值较大的符号（负号）</p>
                            <p>|-8| - |+5| = 8 - 5 = 3</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">∴ (-8) + (+5) = -3</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例2：绝对值计算
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>计算：</strong>|-5| + |-3| - |+2|</p>
                            <p className="mt-3"><strong>解：</strong></p>
                            <p>|-5| = 5, |-3| = 3, |+2| = 2</p>
                            <p>原式 = 5 + 3 - 2</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">= 6</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例3：有理数乘法
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>计算：</strong>(-6) × (+3)</p>
                            <p className="mt-3"><strong>解：</strong></p>
                            <p>异号两数相乘，积为负</p>
                            <p>|-6| × |+3| = 6 × 3 = 18</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">∴ (-6) × (+3) = -18</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={901} type="choice"
                        question="-2 的相反数是？"
                        options={[{ label: 'A', value: '2' }, { label: 'B', value: '-2' }, { label: 'C', value: '1/2' }, { label: 'D', value: '-1/2' }]}
                        answer="A"
                        explanation="相反数就是符号相反的数，-2 的相反数是 2。"
                    />
                    <PracticeProblem id={902} type="choice"
                        question="|-5| 的值是？"
                        options={[{ label: 'A', value: '5' }, { label: 'B', value: '-5' }, { label: 'C', value: '±5' }, { label: 'D', value: '0' }]}
                        answer="A"
                        explanation="绝对值表示到原点的距离，|-5| = 5。"
                    />
                    <PracticeProblem id={903} type="choice"
                        question="(-3) + (+7) = ?"
                        options={[{ label: 'A', value: '4' }, { label: 'B', value: '-4' }, { label: 'C', value: '10' }, { label: 'D', value: '-10' }]}
                        answer="A"
                        explanation="异号两数相加，取绝对值较大的符号（正号），7 - 3 = 4。"
                    />
                </div>
            )
        }
    },

    // ==================== 2. 整式的加减 ====================
    'mid-7-1-algebraic-expressions': {
        meta: {
            title: "整式的加减 - 合并同类项与去括号 | AI7Miao数学",
            description: "从数字运算过渡到字母运算。学习单项式、多项式、同类项的概念,掌握整式的加减运算法则。通过水果分类比喻,理解同类项概念。",
            keywords: "整式,单项式,多项式,合并同类项,去括号,字母表示数"
        },
        info: {
            title: "整式的加减",
            description: "字母也可以像数字一样加减吗？当然！这就是代数的开始。学会用字母表示数。",
            tags: [
                { text: "代数入门", color: "blue" },
                { text: "35分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生刚接触字母表示数。请解释'同类项'就像'合并同类水果'（3个苹果+2个苹果=5个苹果，但3个苹果+2个香蕉不能合并）。引导学生自己发现规律。",
        aiChatTitle: "AI互动学习：水果分类法",
        aiChatIntro: "通过水果分类的比喻，你将自己发现什么是同类项。这比直接背定义理解更深刻。",
        aiMessages: [
            { role: 'ai', content: '假设你有3个苹果，又买了2个苹果，现在一共有几个苹果？' },
            { role: 'user', content: '5个苹果！' },
            { role: 'ai', content: '很好！那如果你有3个苹果和2个香蕉，能说一共有5个"苹蕉"吗？' },
            { role: 'user', content: '不能！苹果和香蕉是不同的水果，不能合并。' },
            { role: 'ai', content: <>太棒了！现在看这个式子：<code className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">3x + 2x</code>，你觉得能合并吗？</> },
            { role: 'user', content: '可以！就像3个苹果加2个苹果，等于5x！' },
            { role: 'ai', content: <>完全正确！那 <code className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">3x + 2y</code> 呢？</> },
            { role: 'user', content: '不能合并！x和y就像苹果和香蕉，是不同的"水果"！' },
            { role: 'ai', content: <>非常好！你已经理解了<strong className="text-indigo-600">同类项</strong>的概念：字母相同、指数相同的项才能合并，就像只有同种水果才能加在一起！</>, type: 'success' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    {/* 什么是整式 */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            什么是整式？
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">基本概念</h3>
                                <div className="space-y-4">
                                    <div className="bg-white dark:bg-slate-700 rounded-lg p-4">
                                        <div className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">单项式</div>
                                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                                            数或字母的<strong>积</strong>叫做单项式。
                                        </p>
                                        <code className="text-sm">例如：2x, -3ab, 5, x²y</code>
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 rounded-lg p-4">
                                        <div className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">多项式</div>
                                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                                            几个单项式的<strong>和</strong>叫做多项式。
                                        </p>
                                        <code className="text-sm">例如：x² + 2x + 1, 3a - 2b + 5</code>
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 rounded-lg p-4">
                                        <div className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">整式</div>
                                        <p className="text-sm text-slate-700 dark:text-slate-300">
                                            单项式和多项式统称为<strong>整式</strong>。
                                        </p>
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
                                            我们用<strong>水果分类</strong>的比喻帮助你理解同类项，这是<strong>类比学习法</strong>。
                                            通过将抽象的数学概念与熟悉的生活经验联系，让学习更轻松、理解更深刻。
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 同类项 */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Target className="w-6 h-6 text-indigo-600" />
                            什么是同类项？
                        </h2>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 mb-6">
                            <h3 className="font-bold text-slate-800 dark:text-white mb-4">定义</h3>
                            <p className="text-slate-700 dark:text-slate-300 mb-4">
                                所含<strong>字母相同</strong>，并且<strong>相同字母的指数也相同</strong>的项叫做同类项。
                            </p>
                            <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-sm font-bold text-green-600 dark:text-green-400 mb-2">✓ 是同类项</div>
                                        <code className="text-sm block">3x² 和 -5x²</code>
                                        <code className="text-sm block">2ab 和 -3ab</code>
                                        <code className="text-sm block">5 和 -7 (常数项)</code>
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-red-600 dark:text-red-400 mb-2">✗ 不是同类项</div>
                                        <code className="text-sm block">3x² 和 3x (指数不同)</code>
                                        <code className="text-sm block">2ab 和 2ac (字母不同)</code>
                                        <code className="text-sm block">x²y 和 xy² (指数不同)</code>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                                <div className="text-3xl mb-3">🍎</div>
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">水果类比</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    3个苹果 + 2个苹果 = 5个苹果<br />
                                    就像 3x + 2x = 5x<br />
                                    <span className="text-xs text-slate-500 mt-2 block">同种水果才能合并</span>
                                </p>
                            </div>

                            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-100 dark:border-orange-800">
                                <div className="text-3xl mb-3">🍎🍌</div>
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">不能合并</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    3个苹果 + 2个香蕉 ≠ 5个"苹蕉"<br />
                                    就像 3x + 2y ≠ 5xy<br />
                                    <span className="text-xs text-slate-500 mt-2 block">不同种类不能合并</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <TrendingUp className="w-6 h-6 text-indigo-600" />
                            整式加减的运算法则
                        </h2>

                        <div className="space-y-6">
                            {/* 合并同类项 */}
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                                <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-4 text-lg">合并同类项</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                                    把多项式中的<strong>同类项合并成一项</strong>，叫做合并同类项。
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                    <div className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">法则</div>
                                    <p className="text-sm mb-2">把同类项的<strong>系数相加</strong>，字母和字母的指数<strong>不变</strong>。</p>
                                    <code className="text-sm block mt-2">3x + 2x = (3+2)x = 5x</code>
                                    <code className="text-sm block">5a²b - 3a²b = (5-3)a²b = 2a²b</code>
                                </div>
                            </div>

                            {/* 去括号 */}
                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                                <h3 className="font-bold text-green-700 dark:text-green-400 mb-4 text-lg">去括号法则</h3>
                                <div className="space-y-3">
                                    <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                        <div className="font-bold text-green-600 dark:text-green-400 mb-2">括号前是"+"号</div>
                                        <p className="text-sm mb-2">去括号后，括号内各项的符号<strong>不变</strong></p>
                                        <code className="text-sm">a + (b - c) = a + b - c</code>
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                        <div className="font-bold text-orange-600 dark:text-orange-400 mb-2">括号前是"-"号</div>
                                        <p className="text-sm mb-2">去括号后，括号内各项的符号<strong>全变</strong></p>
                                        <code className="text-sm">a - (b - c) = a - b + c</code>
                                    </div>
                                </div>
                            </div>

                            {/* 运算步骤 */}
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800">
                                <h3 className="font-bold text-purple-700 dark:text-purple-400 mb-4 text-lg">运算步骤</h3>
                                <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                    <li><strong>去括号</strong>：按照去括号法则去掉括号</li>
                                    <li><strong>合并同类项</strong>：把同类项合并</li>
                                    <li><strong>整理</strong>：按照某种顺序（如降幂）排列</li>
                                </ol>
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
                            例1：合并同类项
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>化简：</strong>3x² - 2x + 5 + x² + 4x - 3</p>
                            <p className="mt-3"><strong>解：</strong></p>
                            <p>= (3x² + x²) + (-2x + 4x) + (5 - 3)</p>
                            <p>= 4x² + 2x + 2</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答案：4x² + 2x + 2</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例2：去括号与合并同类项
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>化简：</strong>2(x + y) - (x - 2y)</p>
                            <p className="mt-3"><strong>解：</strong></p>
                            <p>= 2x + 2y - x + 2y  (去括号)</p>
                            <p>= (2x - x) + (2y + 2y)  (合并同类项)</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">= x + 4y</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例3：化简求值
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>化简并求值：</strong>3(a² - 2a) - 2(a² - 3a)，其中 a = -1</p>
                            <p className="mt-3"><strong>解：</strong></p>
                            <p>= 3a² - 6a - 2a² + 6a</p>
                            <p>= a²</p>
                            <p>当 a = -1 时，原式 = (-1)² = 1</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答案：1</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={904} type="choice"
                        question="下列各组项中，是同类项的是？"
                        options={[
                            { label: 'A', value: '3x²y 与 -3xy²' },
                            { label: 'B', value: '2abc 与 2ab' },
                            { label: 'C', value: '-2 与 5' },
                            { label: 'D', value: 'm³ 与 3m' }
                        ]}
                        answer="C"
                        explanation="A中x和y的指数不同；B中字母不同；D中指数不同；C中都是常数项，字母相同（都没有字母），指数相同（都是0次），属于同类项。"
                    />
                    <PracticeProblem id={905} type="choice"
                        question="化简 3x - (2x - 1) 的结果是？"
                        options={[
                            { label: 'A', value: 'x - 1' },
                            { label: 'B', value: 'x + 1' },
                            { label: 'C', value: '5x - 1' },
                            { label: 'D', value: '5x + 1' }
                        ]}
                        answer="B"
                        explanation="去括号：3x - 2x + 1 = x + 1。注意括号前是负号，去括号后括号内各项符号都要改变。"
                    />
                    <PracticeProblem id={906} type="choice"
                        question="合并同类项：2a + 3b - a + 2b = ?"
                        options={[
                            { label: 'A', value: 'a + 5b' },
                            { label: 'B', value: '3a + 5b' },
                            { label: 'C', value: 'a + b' },
                            { label: 'D', value: '6ab' }
                        ]}
                        answer="A"
                        explanation="(2a - a) + (3b + 2b) = a + 5b。注意a和b不是同类项，不能合并成ab。"
                    />
                </div>
            )
        }
    },

    // ==================== 3. 一元一次方程 ====================
    'mid-7-1-equations': {
        meta: {
            title: "一元一次方程 - 移项与解方程 | AI7Miao数学",
            description: "掌握等式的性质,熟练运用去分母、去括号、移项、合并同类项等步骤解一元一次方程。通过天平类比理解等式性质。",
            keywords: "一元一次方程,解方程,移项,等式性质"
        },
        info: {
            title: "一元一次方程",
            description: "寻找未知数的x!方程是解决实际问题的强大工具。把应用题翻译成数学语言。",
            tags: [
                { text: "方程基础", color: "green" },
                { text: "35分钟", icon: Clock, color: "slate" },
                { text: "重要", icon: Star, color: "orange" }
            ]
        },
        aiContext: "学生在学习移项。请强调'移项要变号'这个最容易出错的点。就像跨过国界（等号）要换护照（符号）一样。用天平类比帮助理解等式性质。",
        aiChatTitle: "AI互动学习:天平的秘密",
        aiChatIntro: "通过天平的比喻,你将理解方程的本质。这比直接背步骤理解更深刻。",
        aiMessages: [
            { role: 'ai', content: '你见过天平吗？如果天平两边都放3个苹果,会怎样？' },
            { role: 'user', content: '平衡！两边一样重。' },
            { role: 'ai', content: <>对！现在如果我在两边<strong>同时</strong>各加2个苹果,还会平衡吗？</> },
            { role: 'user', content: '会！因为两边加的一样多。' },
            { role: 'ai', content: <>完全正确！这就是<strong className="text-indigo-600">等式性质</strong>:等式两边同时加(或减)同一个数,等式仍然成立。看这个方程：<code className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">x + 3 = 7</code>,你会怎么解？</>, type: 'success' },
            { role: 'user', content: '两边同时减3,得 x = 4' },
            { role: 'ai', content: <>太棒了！但我们通常说"移项"。把 +3 从左边移到右边,变成 -3。记住:<strong className="text-red-600">移项要变号</strong>！</> },
            { role: 'user', content: '明白了！就像过了等号这条"国界",符号要改变！' },
            { role: 'ai', content: <>完美的比喻！现在看这个：<code className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">2x = 8</code>,怎么办？</> },
            { role: 'user', content: '两边同时除以2,得 x = 4' },
            { role: 'ai', content: <>完全正确！你已经掌握了解方程的精髓：<strong className="text-green-600">利用等式性质,把x从"囚笼"中解放出来</strong>！</>, type: 'success' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            什么是一元一次方程？
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">定义</h3>
                                <p className="text-slate-700 dark:text-slate-300 mb-4">
                                    只含有<strong>一个未知数</strong>,未知数的次数是<strong>1</strong>,等号两边都是<strong>整式</strong>的方程叫做一元一次方程。
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                    <p className="text-sm mb-2">标准形式:</p>
                                    <code className="text-lg block mb-3">ax + b = 0  (a≠0)</code>
                                    <p className="text-sm mb-2">例如:</p>
                                    <code className="text-sm block">2x + 3 = 7</code>
                                    <code className="text-sm block">3x - 5 = x + 1</code>
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
                                            我们用<strong>天平</strong>的比喻帮助你理解等式性质,这是<strong>类比学习法</strong>。
                                            通过"平衡"这个熟悉的概念,让抽象的等式性质变得具体可感。
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Target className="w-6 h-6 text-indigo-600" />
                            等式的性质
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                                <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-4 text-lg flex items-center gap-2">
                                    ⚖️ 性质1
                                </h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                                    等式两边<strong>加(或减)同一个数(或式子)</strong>,结果仍相等。
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                    <code className="block mb-2">如果 a = b,那么 a ± c = b ± c</code>
                                    <p className="text-xs text-slate-500 mt-3">天平类比:两边同时加(或减)相同重量,仍然平衡</p>
                                </div>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                                <h3 className="font-bold text-green-700 dark:text-green-400 mb-4 text-lg flex items-center gap-2">
                                    ⚖️ 性质2
                                </h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                                    等式两边<strong>乘同一个数,或除以同一个不为0的数</strong>,结果仍相等。
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                    <code className="block mb-2">如果 a = b,那么 a × c = b × c</code>
                                    <code className="block mb-2">如果 a = b,那么 a ÷ c = b ÷ c  (c≠0)</code>
                                    <p className="text-xs text-slate-500 mt-3">天平类比:两边物品同时翻倍(或减半),仍然平衡</p>
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
                            <TrendingUp className="w-6 h-6 text-indigo-600" />
                            解方程的步骤
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-xl p-6">
                                <h3 className="font-bold text-orange-700 dark:text-orange-400 mb-4 text-lg">标准步骤</h3>
                                <ol className="list-decimal list-inside space-y-3 text-sm text-slate-700 dark:text-slate-300">
                                    <li><strong>去分母</strong>:方程两边同乘各分母的最小公倍数</li>
                                    <li><strong>去括号</strong>:按照去括号法则去掉括号</li>
                                    <li><strong>移项</strong>:把含有未知数的项移到一边,常数项移到另一边 <span className="text-red-600 font-bold">⚠️ 移项要变号!</span></li>
                                    <li><strong>合并同类项</strong>:化简成 ax = b 的形式</li>
                                    <li><strong>系数化为1</strong>:两边同除以未知数的系数</li>
                                </ol>
                            </div>

                            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-100 dark:border-red-800">
                                <h3 className="font-bold text-red-700 dark:text-red-400 mb-4 text-lg">⚠️ 易错点</h3>
                                <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 dark:text-red-400">❌</span>
                                        <div>
                                            <strong>移项忘记变号</strong>
                                            <div className="text-xs text-slate-500 mt-1">
                                                错误: x + 3 = 7 → x = 7 + 3 ✗<br />
                                                正确: x + 3 = 7 → x = 7 - 3 ✓
                                            </div>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 dark:text-red-400">❌</span>
                                        <div>
                                            <strong>去分母时漏乘</strong>
                                            <div className="text-xs text-slate-500 mt-1">
                                                错误: x/2 + 1 = 3,两边乘2得 x + 1 = 6 ✗<br />
                                                正确: x/2 + 1 = 3,两边乘2得 x + 2 = 6 ✓
                                            </div>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 dark:text-red-400">❌</span>
                                        <div>
                                            <strong>系数化为1时符号错误</strong>
                                            <div className="text-xs text-slate-500 mt-1">
                                                错误: -2x = 6 → x = -3 ✗<br />
                                                正确: -2x = 6 → x = -3 ✓ (这个是对的,但要注意负号)
                                            </div>
                                        </div>
                                    </li>
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
                            例1:基础解方程
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>解方程:</strong>3x - 7 = x + 1</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>移项得: 3x - x = 1 + 7</p>
                            <p>合并同类项得: 2x = 8</p>
                            <p>系数化为1得: x = 4</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答案: x = 4</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例2:含括号的方程
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>解方程:</strong>2(x + 1) = 3x - 1</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>去括号得: 2x + 2 = 3x - 1</p>
                            <p>移项得: 2x - 3x = -1 - 2</p>
                            <p>合并同类项得: -x = -3</p>
                            <p>系数化为1得: x = 3</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答案: x = 3</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例3:含分母的方程
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>解方程:</strong>(x-1)/2 = (2x+1)/3</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>去分母,两边同乘6得: 3(x-1) = 2(2x+1)</p>
                            <p>去括号得: 3x - 3 = 4x + 2</p>
                            <p>移项得: 3x - 4x = 2 + 3</p>
                            <p>合并同类项得: -x = 5</p>
                            <p>系数化为1得: x = -5</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答案: x = -5</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例4:应用题
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>一件商品打8折后售价为80元,求原价。</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>设原价为 x 元</p>
                            <p>根据题意: 0.8x = 80</p>
                            <p>系数化为1: x = 80 ÷ 0.8 = 100</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: 原价为100元</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={913} type="choice"
                        question="方程 2x + 3 = 7 的解是？"
                        options={[
                            { label: 'A', value: 'x = 2' },
                            { label: 'B', value: 'x = 5' },
                            { label: 'C', value: 'x = 10' },
                            { label: 'D', value: 'x = -2' }
                        ]}
                        answer="A"
                        explanation="移项: 2x = 7 - 3 = 4,系数化为1: x = 2。"
                    />
                    <PracticeProblem id={914} type="choice"
                        question="解方程 3x - 2 = x + 4,移项后正确的是？"
                        options={[
                            { label: 'A', value: '3x - x = 4 + 2' },
                            { label: 'B', value: '3x + x = 4 + 2' },
                            { label: 'C', value: '3x - x = 4 - 2' },
                            { label: 'D', value: '3x = x + 4 + 2' }
                        ]}
                        answer="A"
                        explanation="把 x 移到左边变成 -x,把 -2 移到右边变成 +2,所以是 3x - x = 4 + 2。"
                    />
                    <PracticeProblem id={915} type="choice"
                        question="方程 -2x = 6 的解是？"
                        options={[
                            { label: 'A', value: 'x = 3' },
                            { label: 'B', value: 'x = -3' },
                            { label: 'C', value: 'x = 12' },
                            { label: 'D', value: 'x = -12' }
                        ]}
                        answer="B"
                        explanation="两边同除以-2: x = 6 ÷ (-2) = -3。"
                    />
                </div>
            )
        }
    },

    // ==================== 4. 几何图形初步 ====================
    'mid-7-1-geometry-basic': {
        meta: {
            title: "几何图形初步 - 线段与角 | AI7Miao数学",
            description: "认识立体图形与平面图形,掌握线段的中点、角的度量与分类,理解余角与补角。从生活中的点线面开始几何之旅。",
            keywords: "几何初步,线段,角,余角,补角,点线面"
        },
        info: {
            title: "几何图形初步",
            description: "点动成线,线动成面,面动成体。从最基本的点线面开始,构建庞大的几何大厦。",
            tags: [
                { text: "几何入门", color: "indigo" },
                { text: "30分钟", icon: Clock, color: "slate" },
                { text: "基础", icon: Star, color: "blue" }
            ]
        },
        aiContext: "学生刚接触几何符号语言。请指导学生如何规范表达(如因为...所以...)。解释'两点之间线段最短'。用生活实例帮助理解。",
        aiChatTitle: "AI互动学习:从生活到几何",
        aiChatIntro: "通过生活中的实例,你将理解点线面的本质。这比直接背定义理解更深刻。",
        aiMessages: [
            { role: 'ai', content: '你用笔在纸上点一下,留下了什么？' },
            { role: 'user', content: '一个点！' },
            { role: 'ai', content: <>对！这个点<strong className="text-indigo-600">没有大小,只有位置</strong>。现在如果你把笔移动,会留下什么？</> },
            { role: 'user', content: '一条线！' },
            { role: 'ai', content: <>完全正确！点动成线。现在问题来了:从学校回家,你会走直线还是绕圈？</>, type: 'success' },
            { role: 'user', content: '当然走直线！最近！' },
            { role: 'ai', content: <>太棒了！这就是几何的<strong className="text-green-600">基本事实:两点之间,线段最短</strong>。这不是证明出来的,而是公认的真理。</> },
            { role: 'user', content: '明白了！那角是什么？' },
            { role: 'ai', content: <>好问题！想象钟表的指针。从12点转到3点,转了多少度？</> },
            { role: 'user', content: '90度！直角！' },
            { role: 'ai', content: <>完美！你已经掌握了几何的基础：<strong className="text-red-600">点、线、面、角</strong>。从生活到抽象,这就是几何思维！</>, type: 'success' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            点、线、面、体
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">从生活到抽象</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                        <h4 className="font-bold text-indigo-600 mb-2">点</h4>
                                        <p className="text-sm text-slate-700 dark:text-slate-300">
                                            笔尖的痕迹、星星、路口<br />
                                            <strong>没有大小,只有位置</strong>
                                        </p>
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                        <h4 className="font-bold text-blue-600 mb-2">线</h4>
                                        <p className="text-sm text-slate-700 dark:text-slate-300">
                                            笔画、绳子、铁轨<br />
                                            <strong>点动成线,只有长度</strong>
                                        </p>
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                        <h4 className="font-bold text-green-600 mb-2">面</h4>
                                        <p className="text-sm text-slate-700 dark:text-slate-300">
                                            纸张、黑板、湖面<br />
                                            <strong>线动成面,有长度和宽度</strong>
                                        </p>
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                        <h4 className="font-bold text-purple-600 mb-2">体</h4>
                                        <p className="text-sm text-slate-700 dark:text-slate-300">
                                            盒子、球、建筑<br />
                                            <strong>面动成体,占据空间</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                                <h3 className="font-bold text-green-700 dark:text-green-400 mb-4 text-lg">基本事实(公理)</h3>
                                <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600">✓</span>
                                        <div><strong>两点确定一条直线</strong> - 两个点可以唯一确定一条直线</div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600">✓</span>
                                        <div><strong>两点之间,线段最短</strong> - 这就是为什么我们走直线最快</div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                                <div className="flex items-start gap-3">
                                    <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="font-semibold text-purple-700 dark:text-purple-400 mb-2">
                                            🎓 教育理论支撑
                                        </div>
                                        <div className="text-slate-600 dark:text-slate-400 text-sm">
                                            我们用<strong>生活中的点线面</strong>(笔尖、绳子、纸张)帮助你理解抽象的几何概念。
                                            从具体到抽象,这是几何思维的起点。
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：两点之间，线段最短
                        </h2>

                        <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 mb-4">
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                                拖动下图中绿色的点 <strong>P</strong>。你会发现，无论 P 点在哪里，折线 A-P-B 的长度总是大于线段 A-B 的长度。
                                只有当 P 点在线段 AB 上时，距离才最短。
                            </p>

                            <ShortestPathDiagram />
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Target className="w-6 h-6 text-indigo-600" />
                            角的分类与余补角
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-100 dark:border-orange-800">
                                <h3 className="font-bold text-orange-700 dark:text-orange-400 mb-4 text-lg">角的分类</h3>
                                <div className="grid md:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded">
                                        <strong>锐角</strong>: 0° {'<'} α {'<'} 90°
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded">
                                        <strong>直角</strong>: α = 90°
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded">
                                        <strong>钝角</strong>: 90° {'<'} α {'<'} 180°
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded">
                                        <strong>平角</strong>: α = 180°
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded col-span-2">
                                        <strong>周角</strong>: α = 360°
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                                <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-4 text-lg">余角与补角</h3>
                                <div className="space-y-4">
                                    <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                        <p className="font-bold mb-2">余角</p>
                                        <p className="text-sm">如果两个角的和等于90°,则这两个角互为余角</p>
                                        <code className="block mt-2 text-xs">∠1 + ∠2 = 90°</code>
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                        <p className="font-bold mb-2">补角</p>
                                        <p className="text-sm">如果两个角的和等于180°,则这两个角互为补角</p>
                                        <code className="block mt-2 text-xs">∠1 + ∠2 = 180°</code>
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
                            例1:余角与补角
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>已知 ∠1 = 40°,求它的余角和补角。</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>余角 = 90° - 40° = 50°</p>
                            <p>补角 = 180° - 40° = 140°</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: 余角50°,补角140°</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例2:线段中点
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>点C是线段AB的中点,如果AC=4cm,求AB的长度。</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>∵ C是AB的中点</p>
                            <p>∴ AB = 2 × AC = 2 × 4 = 8cm</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: AB = 8cm</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例3:角度计算
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>一个角的补角比它的余角大多少度？</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>设这个角为α</p>
                            <p>补角 = 180° - α</p>
                            <p>余角 = 90° - α</p>
                            <p>差 = (180° - α) - (90° - α) = 90°</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: 大90°(与角度无关)</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={925} type="choice"
                        question="点C是线段AB的中点,如果AC=4cm,那么AB=？"
                        options={[
                            { label: 'A', value: '2cm' },
                            { label: 'B', value: '4cm' },
                            { label: 'C', value: '6cm' },
                            { label: 'D', value: '8cm' }
                        ]}
                        answer="D"
                        explanation="AB = 2 × AC = 2 × 4 = 8cm。"
                    />
                    <PracticeProblem id={926} type="choice"
                        question="一个角是35°,它的余角是？"
                        options={[
                            { label: 'A', value: '45°' },
                            { label: 'B', value: '55°' },
                            { label: 'C', value: '145°' },
                            { label: 'D', value: '155°' }
                        ]}
                        answer="B"
                        explanation="余角 = 90° - 35° = 55°。"
                    />
                    <PracticeProblem id={927} type="choice"
                        question="下列说法正确的是？"
                        options={[
                            { label: 'A', value: '两点之间,直线最短' },
                            { label: 'B', value: '两点之间,线段最短' },
                            { label: 'C', value: '过一点可以画无数条直线' },
                            { label: 'D', value: '过两点可以画无数条直线' }
                        ]}
                        answer="B"
                        explanation="两点之间,线段最短是基本事实。选项C正确但不是题目问的。"
                    />
                </div>
            )
        }
    },

    // ==================== 5. 不等式与不等式组 ====================
    'mid-7-2-inequalities': {
        meta: {
            title: "不等式与不等式组 - 范围的描述 | AI7Miao数学",
            description: "理解不等式的性质(特别是负数乘除要变号),掌握解一元一次不等式组的方法,并在数轴上表示解集。通过实例理解为什么乘负数要变号。",
            keywords: "不等式,解集,不等号方向,变号规则"
        },
        info: {
            title: "不等式",
            description: "生活不总是相等的,更多的是'大于'或'小于'。学会描述范围,理解限制条件。",
            tags: [
                { text: "代数", color: "blue" },
                { text: "30分钟", icon: Clock, color: "slate" },
                { text: "易错", icon: AlertCircle, color: "red" }
            ]
        },
        aiContext: "学生最容易在'不等式两边同乘负数'时忘记变号。请设计一个陷阱题来提醒学生。用温度、身高等实例帮助理解。",
        aiChatTitle: "AI互动学习:负号陷阱",
        aiChatIntro: "通过实例,你将理解为什么乘负数时不等号要反向。这个规则看似奇怪,实则合理!",
        aiMessages: [
            { role: 'ai', content: '如果小明身高160cm,小红身高150cm,谁更高？' },
            { role: 'user', content: '小明更高！160 > 150' },
            { role: 'ai', content: <>对！现在如果我们把两个人的身高都<strong>乘以2</strong>,谁更高？</> },
            { role: 'user', content: '还是小明！320 > 300' },
            { role: 'ai', content: <>完全正确！不等号方向<strong className="text-green-600">没变</strong>。但如果我们把两个人的身高都<strong>乘以-1</strong>(想象成"相反数"),会怎样？</>, type: 'success' },
            { role: 'user', content: '-160 和 -150...嗯,-160 < -150？' },
            { role: 'ai', content: <>太棒了！你发现了关键：<strong className="text-red-600">乘以负数后,不等号方向改变了</strong>！因为在数轴上,-160在-150的左边,所以更小。</>, type: 'success' },
            { role: 'user', content: '明白了！所以这就是为什么要变号！' },
            { role: 'ai', content: <>完全正确！记住这个规则：<strong className="text-indigo-600">不等式两边乘(或除以)同一个负数,不等号方向必须改变</strong>！这是最容易出错的地方。</> }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            不等式的性质
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                                <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-4 text-lg">性质1 & 2</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                                    不等式两边<strong>加(或减)同一个数(或式子)</strong>,不等号方向<strong>不变</strong>。
                                </p>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                                    不等式两边<strong>乘(或除以)同一个正数</strong>,不等号方向<strong>不变</strong>。
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                    <code className="block text-sm">如果 a {'>'} b,那么 a ± c {'>'} b ± c</code>
                                    <code className="block text-sm mt-2">如果 a {'>'} b 且 c {'>'} 0,那么 ac {'>'} bc</code>
                                </div>
                            </div>

                            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                                <h3 className="font-bold text-red-700 dark:text-red-400 mb-4 text-lg flex items-center gap-2">
                                    ⚠️ 性质3 (最重要!)
                                </h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                                    不等式两边<strong>乘(或除以)同一个负数</strong>,不等号方向<strong className="text-red-600">必须改变</strong>。
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                    <code className="block text-sm mb-3">如果 a {'>'} b 且 c {'<'} 0,那么 ac {'<'} bc</code>
                                    <p className="text-xs text-slate-500 mt-3">例如: 2 {'>'} 1,但 2×(-1) {'<'} 1×(-1),即 -2 {'<'} -1</p>
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
                                            我们用<strong>身高比较</strong>的实例帮助你理解为什么乘负数要变号。
                                            通过具体数字的变化,让抽象的规则变得可以理解和记忆。
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Target className="w-6 h-6 text-indigo-600" />
                            不等式组的解集
                        </h2>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                            <h3 className="font-bold text-green-700 dark:text-green-400 mb-4 text-lg">口诀记忆</h3>
                            <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">✓</span>
                                    <div><strong>同大取大</strong>: x{'>'}2 且 x{'>'}1 → x{'>'}2</div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">✓</span>
                                    <div><strong>同小取小</strong>: x{'<'}2 且 x{'<'}1 → x{'<'}1</div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">✓</span>
                                    <div><strong>大小小大中间找</strong>: x{'>'}1 且 x{'<'}2 → 1{'<'}x{'<'}2</div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600">✗</span>
                                    <div><strong>大大小小找不到</strong>: x{'>'}2 且 x{'<'}1 → 无解</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <TrendingUp className="w-6 h-6 text-indigo-600" />
                            解不等式的步骤
                        </h2>

                        <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-100 dark:border-orange-800">
                            <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                <li><strong>去分母</strong>:注意乘的数是正是负</li>
                                <li><strong>去括号</strong>:注意符号</li>
                                <li><strong>移项</strong>:移项要变号</li>
                                <li><strong>合并同类项</strong></li>
                                <li><strong>系数化为1</strong>: <span className="text-red-600 font-bold">⚠️ 除以负数要变号!</span></li>
                            </ol>
                        </div>

                        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-100 dark:border-red-800 mt-6">
                            <h3 className="font-bold text-red-700 dark:text-red-400 mb-3">⚠️ 常见错误</h3>
                            <div className="text-sm text-slate-600 dark:text-slate-400">
                                <p className="mb-2"><strong>错误示例:</strong></p>
                                <code className="block bg-white dark:bg-slate-700 p-2 rounded">-2x {'>'} 6 → x {'>'} -3 ✗</code>
                                <p className="mt-2 mb-2"><strong>正确做法:</strong></p>
                                <code className="block bg-white dark:bg-slate-700 p-2 rounded">-2x {'>'} 6 → x {'<'} -3 ✓</code>
                                <p className="text-xs text-red-600 mt-2">除以-2时,不等号方向要改变!</p>
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
                            例1:基础解不等式
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>解不等式:</strong>-2x {'>'} 6</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>两边同除以-2,不等号变号</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">∴ x {'<'} -3</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例2:解不等式组
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>解不等式组:</strong>{'{ x > 1, x < 3 }'}</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>大小小大中间找</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">∴ 1 {'<'} x {'<'} 3</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例3:应用题
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>某商品原价x元,打8折后不超过80元,求原价范围。</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>根据题意: 0.8x ≤ 80</p>
                            <p>x ≤ 100</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: 原价不超过100元</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={916} type="choice"
                        question="不等式 x - 1 > 0 的解集是？"
                        options={[
                            { label: 'A', value: 'x > 1' },
                            { label: 'B', value: 'x < 1' },
                            { label: 'C', value: 'x > -1' },
                            { label: 'D', value: 'x < -1' }
                        ]}
                        answer="A"
                        explanation="移项得 x > 1。"
                    />
                    <PracticeProblem id={917} type="choice"
                        question="不等式 -3x < 6 的解集是？"
                        options={[
                            { label: 'A', value: 'x < -2' },
                            { label: 'B', value: 'x > -2' },
                            { label: 'C', value: 'x < 2' },
                            { label: 'D', value: 'x > 2' }
                        ]}
                        answer="B"
                        explanation="两边同除以-3,不等号方向改变: x > -2。"
                    />
                    <PracticeProblem id={918} type="choice"
                        question="不等式组 {x>1, x<3} 的解集是？"
                        options={[
                            { label: 'A', value: 'x > 3' },
                            { label: 'B', value: 'x < 1' },
                            { label: 'C', value: '1 < x < 3' },
                            { label: 'D', value: '无解' }
                        ]}
                        answer="C"
                        explanation="大小小大中间找: 1 < x < 3。"
                    />
                </div>
            )
        }
    },

    // ==================== 6. 数据的收集、整理与描述 ====================
    'mid-7-2-statistics': {
        meta: {
            title: "数据的收集与整理 - 统计图表 | AI7Miao数学",
            description: "了解全面调查与抽样调查,会看条形图、折线图、扇形图和直方图。通过调查问卷类比理解数据收集的科学方法。",
            keywords: "统计图,抽样调查,直方图,数据收集"
        },
        info: {
            title: "数据的收集",
            description: "大数据时代,谁掌握了数据,谁就掌握了真相。学习如何科学地收集和展示数据。",
            tags: [
                { text: "统计", color: "green" },
                { text: "30分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生在比较各种统计图的优缺点。请结合实际场景(如气温变化用折线图)进行说明。引导学生理解不同图表的适用场景。",
        aiChatTitle: "AI互动学习:数据会说话",
        aiChatIntro: "一张好图胜过千言万语。条形、折线、扇形...该选哪种图来展示你的发现？",
        aiMessages: [
            { role: 'ai', content: '你想知道全班同学最喜欢的运动是什么,你会怎么做？' },
            { role: 'user', content: '问每个同学！' },
            { role: 'ai', content: <>对！这叫<strong className="text-indigo-600">全面调查</strong>。但如果要调查全国中学生呢？</> },
            { role: 'user', content: '那太多了,问不完！' },
            { role: 'ai', content: <>没错！这时候就用<strong className="text-green-600">抽样调查</strong>:随机选一部分人,用他们代表全体。</>, type: 'success' },
            { role: 'user', content: '那什么时候必须全面调查？' },
            { role: 'ai', content: <>当<strong className="text-red-600">精确度要求高</strong>时！比如飞船零件检查,一个都不能漏。</> },
            { role: 'user', content: '明白了！那数据收集后怎么展示？' },
            { role: 'ai', content: <>用统计图！想象你要展示一周的气温变化,你会选哪种图？</> },
            { role: 'user', content: '折线图！可以看出趋势！' },
            { role: 'ai', content: <>完美！<strong className="text-purple-600">折线图看趋势,条形图比数量,扇形图看占比</strong>。选对图,数据就会说话！</>, type: 'success' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            数据收集方法
                        </h2>

                        <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">全面调查(普查)</h3>
                                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                                        考察<strong>全体对象</strong>的调查方式
                                    </p>
                                    <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                        <p className="text-sm mb-2"><strong>适用场景:</strong></p>
                                        <ul className="text-xs space-y-1">
                                            <li>• 精确度要求高</li>
                                            <li>• 调查对象数量少</li>
                                            <li>• 例:人口普查、班级成绩</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">抽样调查</h3>
                                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                                        抽取<strong>一部分对象</strong>进行调查
                                    </p>
                                    <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                        <p className="text-sm mb-2"><strong>适用场景:</strong></p>
                                        <ul className="text-xs space-y-1">
                                            <li>• 调查对象数量大</li>
                                            <li>• 破坏性实验</li>
                                            <li>• 例:灯泡寿命、收视率</li>
                                        </ul>
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
                                            我们用<strong>调查问卷、人口普查</strong>等生活实例帮助你理解数据收集方法。
                                            从实际问题出发,理解统计的实用价值。
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
                            统计图的选择
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                                <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-4 text-lg">条形统计图</h3>
                                <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                                    <p><strong>特点</strong>: 用长条表示数量大小</p>
                                    <p><strong>适用</strong>: 比较不同类别的具体数量</p>
                                    <p><strong>例子</strong>: 各班人数、不同品牌销量</p>
                                </div>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                                <h3 className="font-bold text-green-700 dark:text-green-400 mb-4 text-lg">折线统计图</h3>
                                <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                                    <p><strong>特点</strong>: 用折线表示数据变化</p>
                                    <p><strong>适用</strong>: 反映数据随时间的变化趋势</p>
                                    <p><strong>例子</strong>: 气温变化、股票走势</p>
                                </div>
                            </div>

                            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-100 dark:border-orange-800">
                                <h3 className="font-bold text-orange-700 dark:text-orange-400 mb-4 text-lg">扇形统计图</h3>
                                <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                                    <p><strong>特点</strong>: 用扇形表示部分占总体的百分比</p>
                                    <p><strong>适用</strong>: 显示各部分所占比例</p>
                                    <p><strong>例子</strong>: 预算分配、市场份额</p>
                                </div>
                            </div>

                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800">
                                <h3 className="font-bold text-purple-700 dark:text-purple-400 mb-4 text-lg">频数分布直方图</h3>
                                <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                                    <p><strong>特点</strong>: 用矩形表示各组频数</p>
                                    <p><strong>适用</strong>: 显示数据的分布情况</p>
                                    <p><strong>例子</strong>: 成绩分布、身高分布</p>
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
                            例1:选择调查方式
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>下列适合抽样调查的是？</p>
                            <p>A. 神舟飞船升空前检查</p>
                            <p>B. 调查某批次灯泡寿命</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>A选项:飞船检查精确度要求极高,必须全面调查</p>
                            <p>B选项:灯泡寿命测试是破坏性的,只能抽样调查</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: B</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例2:选择统计图
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>要反映某市一周内每天最高气温的变化情况,宜采用？</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>关键词:"变化情况"、"趋势"</p>
                            <p>折线统计图最适合反映数据随时间的变化趋势</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: 折线统计图</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例3:扇形图应用
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>要反映家庭支出中各项费用所占比例,应选择？</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>关键词:"所占比例"、"百分比"</p>
                            <p>扇形统计图最适合显示各部分占总体的比例关系</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: 扇形统计图</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={943} type="choice"
                        question="要反映某市一周内每天最高气温的变化情况,宜采用？"
                        options={[
                            { label: 'A', value: '条形统计图' },
                            { label: 'B', value: '折线统计图' },
                            { label: 'C', value: '扇形统计图' },
                            { label: 'D', value: '频数分布直方图' }
                        ]}
                        answer="B"
                        explanation="反映'变化情况'和'趋势',首选折线统计图。"
                    />
                    <PracticeProblem id={944} type="choice"
                        question="下列调查中,适合采用全面调查的是？"
                        options={[
                            { label: 'A', value: '调查某批次灯泡的使用寿命' },
                            { label: 'B', value: '调查某班学生的视力情况' },
                            { label: 'C', value: '调查某市居民的环保意识' },
                            { label: 'D', value: '调查某品牌电视机的质量' }
                        ]}
                        answer="B"
                        explanation="班级学生数量少,且视力检查不具破坏性,适合全面调查。其他选项数量大或具破坏性,适合抽样调查。"
                    />
                    <PracticeProblem id={945} type="choice"
                        question="要反映某校各年级学生人数占全校学生总数的百分比,应选用？"
                        options={[
                            { label: 'A', value: '条形统计图' },
                            { label: 'B', value: '折线统计图' },
                            { label: 'C', value: '扇形统计图' },
                            { label: 'D', value: '频数分布直方图' }
                        ]}
                        answer="C"
                        explanation="关键词是'百分比'和'占比',扇形统计图最适合显示各部分占总体的比例。"
                    />
                </div>
            )
        }
    },

    // ==================== 7. 平面直角坐标系 ====================
    'mid-7-2-plane-coordinates': {
        meta: {
            title: "平面直角坐标系 - 用坐标表示位置 | AI7Miao数学",
            description: "认识平面直角坐标系,掌握点的坐标特征(各象限及坐标轴上点的符号规律)。通过地图定位理解坐标系的实际意义。",
            keywords: "坐标系,象限,点的坐标,定位"
        },
        info: {
            title: "平面直角坐标系",
            description: "笛卡尔的伟大发现,把几何问题转化成了代数问题。确定位置,从此有了精确的导航。",
            tags: [
                { text: "数形结合", color: "purple" },
                { text: "30分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生在记忆象限符号。请给出'右上为正'的直观联想,引导学生自己推导其他象限符号。用地图定位帮助理解。",
        aiChatTitle: "AI互动学习:定位你的位置",
        aiChatIntro: "电影院的座位票、地图上的经纬度,其实都是坐标。有了它,我们再也不会迷路。",
        aiMessages: [
            { role: 'ai', content: '你去电影院,票上写着"7排12座",你知道怎么找位置吗？' },
            { role: 'user', content: '先找第7排,再找第12个座位！' },
            { role: 'ai', content: <>对！这就是<strong className="text-indigo-600">坐标思想</strong>:用两个数确定一个位置。数学里我们用(x, y)表示。</> },
            { role: 'user', content: '那象限是什么？' },
            { role: 'ai', content: <>好问题！想象一个十字路口,把平面分成了四块。<strong className="text-green-600">右上角</strong>是第一象限,你觉得那里的坐标符号是什么？</>, type: 'success' },
            { role: 'user', content: '右边是正,上面也是正,所以是(+, +)！' },
            { role: 'ai', content: <>完美！那左上角呢？</> },
            { role: 'user', content: '左边是负,上面是正,所以是(-, +)！' },
            { role: 'ai', content: <>太棒了！你已经掌握了规律:<strong className="text-red-600">右正左负,上正下负</strong>。这样就能推出所有象限的符号了！</>, type: 'success' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            平面直角坐标系
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">基本概念</h3>
                                <p className="text-slate-700 dark:text-slate-300 mb-4">
                                    在平面内画两条<strong>互相垂直</strong>且有<strong>公共原点</strong>的数轴,就构成了平面直角坐标系。
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                    <ul className="space-y-2 text-sm">
                                        <li>• <strong>横轴(x轴)</strong>: 水平方向的数轴,向右为正</li>
                                        <li>• <strong>纵轴(y轴)</strong>: 竖直方向的数轴,向上为正</li>
                                        <li>• <strong>原点(O)</strong>: 两轴的交点,坐标为(0, 0)</li>
                                        <li>• <strong>点的坐标</strong>: 用有序数对(x, y)表示</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                                <h3 className="font-bold text-green-700 dark:text-green-400 mb-4 text-lg">象限符号规律</h3>
                                <div className="grid grid-cols-2 gap-3 text-center text-sm">
                                    <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                        <div className="text-slate-400 text-xs mb-1">第二象限</div>
                                        <div className="font-bold text-blue-600">(-, +)</div>
                                        <div className="text-xs mt-1">左上</div>
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                        <div className="text-slate-400 text-xs mb-1">第一象限</div>
                                        <div className="font-bold text-green-600">(+, +)</div>
                                        <div className="text-xs mt-1">右上</div>
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                        <div className="text-slate-400 text-xs mb-1">第三象限</div>
                                        <div className="font-bold text-red-600">(-, -)</div>
                                        <div className="text-xs mt-1">左下</div>
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                        <div className="text-slate-400 text-xs mb-1">第四象限</div>
                                        <div className="font-bold text-purple-600">(+, -)</div>
                                        <div className="text-xs mt-1">右下</div>
                                    </div>
                                </div>
                                <p className="text-xs text-center mt-4 text-slate-600 dark:text-slate-400">
                                    记忆口诀: 右正左负,上正下负
                                </p>
                            </div>

                            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                                <div className="flex items-start gap-3">
                                    <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="font-semibold text-purple-700 dark:text-purple-400 mb-2">
                                            🎓 教育理论支撑
                                        </div>
                                        <div className="text-slate-600 dark:text-slate-400 text-sm">
                                            我们用<strong>地图定位、电影院座位</strong>等生活实例帮助你理解坐标系。
                                            从具体到抽象,这是数形结合思想的起点。
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
                            特殊位置的点
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                                <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-4 text-lg">坐标轴上的点</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded">
                                        <strong>x轴上的点</strong>: 纵坐标为0,形式为(x, 0)
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded">
                                        <strong>y轴上的点</strong>: 横坐标为0,形式为(0, y)
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded">
                                        <strong>原点</strong>: 坐标为(0, 0)
                                    </div>
                                </div>
                            </div>

                            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-100 dark:border-orange-800">
                                <h3 className="font-bold text-orange-700 dark:text-orange-400 mb-4 text-lg">对称点的坐标</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded">
                                        关于<strong>x轴对称</strong>: (x, y) → (x, -y)
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded">
                                        关于<strong>y轴对称</strong>: (x, y) → (-x, y)
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded">
                                        关于<strong>原点对称</strong>: (x, y) → (-x, -y)
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
                            例1:象限判定
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>点P(-3, 2)在第几象限？</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>∵ 横坐标-3 {'<'} 0,纵坐标2 {'>'} 0</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">∴ 点P在第二象限</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例2:坐标轴上的点
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>点Q(a, 0)在哪条坐标轴上？</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>∵ 纵坐标为0</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">∴ 点Q在x轴上</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例3:对称点
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>点A(2, -3)关于x轴的对称点坐标是？</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>关于x轴对称,横坐标不变,纵坐标变号</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">∴ 对称点坐标为(2, 3)</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={934} type="choice"
                        question="若点P(m, n)在第三象限,则？"
                        options={[
                            { label: 'A', value: 'm>0, n>0' },
                            { label: 'B', value: 'm<0, n<0' },
                            { label: 'C', value: 'm<0, n>0' },
                            { label: 'D', value: 'm>0, n<0' }
                        ]}
                        answer="B"
                        explanation="第三象限的符号特征是(-,-),所以m<0, n<0。"
                    />
                    <PracticeProblem id={935} type="choice"
                        question="点A(0, -5)在？"
                        options={[
                            { label: 'A', value: 'x轴上' },
                            { label: 'B', value: 'y轴上' },
                            { label: 'C', value: '第三象限' },
                            { label: 'D', value: '第四象限' }
                        ]}
                        answer="B"
                        explanation="横坐标为0,点在y轴上。"
                    />
                    <PracticeProblem id={936} type="choice"
                        question="点B(3, -2)关于原点对称的点是？"
                        options={[
                            { label: 'A', value: '(3, 2)' },
                            { label: 'B', value: '(-3, -2)' },
                            { label: 'C', value: '(-3, 2)' },
                            { label: 'D', value: '(3, -2)' }
                        ]}
                        answer="C"
                        explanation="关于原点对称,横纵坐标都变号:(3,-2)→(-3,2)。"
                    />
                </div>
            )
        }
    },
};

// 自动填充检查
const grade7Topics = [
    { id: 'mid-7-1-rational-numbers', name: '有理数' },
    { id: 'mid-7-1-algebraic-expressions', name: '整式的加减' },
    { id: 'mid-7-1-equations', name: '一元一次方程' },
    { id: 'mid-7-1-geometry-basic', name: '几何图形初步' },
    { id: 'mid-7-2-inequalities', name: '不等式与不等式组' },
    { id: 'mid-7-2-statistics', name: '数据的收集、整理与描述' },
    { id: 'mid-7-2-plane-coordinates', name: '平面直角坐标系' }
];

grade7Topics.forEach(t => {
    if (!grade7Content[t.id]) {
        grade7Content[t.id] = generateDefaultContent(t.id, t.name, '七年级');
    }
});

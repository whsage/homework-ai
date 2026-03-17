
import { Icons, PracticeProblem, Link, React } from './common';
import { MousePointer2 } from 'lucide-react';
import SetVennDiagram from '../../components/subjects/math/high/SetVennDiagram';
import FunctionPropertiesVisualizer from '../../components/subjects/math/high/FunctionPropertiesVisualizer';
import VectorVisualizer from '../../components/subjects/math/high/VectorVisualizer';
import UnitCircleVisualizer from '../../components/subjects/math/high/UnitCircleVisualizer';
import ExponentialVisualizer from '../../components/subjects/math/high/ExponentialVisualizer';

const {
    Lightbulb, Target, TrendingUp, Clock, Star, Brain, CheckCircle, Sparkles, Calculator, Award, AlertCircle
} = Icons;

export const grade10Content = {
    // ==================== 高一上学期 ====================

    // ==================== 1. 集合与逻辑 ====================
    'high-10-1-sets': {
        meta: {
            title: "集合与常用逻辑用语 - 高一数学 | AI奇妙数学",
            description: "掌握集合的概念、表示方法及运算（交、并、补）。理解充分条件、必要条件与充要条件。",
            keywords: "集合,子集,交集,并集,补集,充分条件,必要条件,高一数学"
        },
        info: {
            title: "集合与逻辑",
            description: "数学的语言基础！学会用集合的观点看世界，用严密的逻辑思考问题。",
            tags: [
                { text: "高一数学", color: "blue" },
                { text: "基础核心", color: "indigo" },
                { text: "30分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生正在学习集合与逻辑。请引导学生理解集合的'确定性'、'互异性'和'无序性'。用韦恩图(Venn Diagram)辅助解释集合的运算。在逻辑部分，区分'充分'和'必要'的区别。",
        aiChatTitle: "AI逻辑导师",
        aiChatIntro: "你好！欢迎来到高中数学的第一课。集合是现代数学的基石，让我们一起通过韦恩图来探索它。",
        aiMessages: [
            { role: 'ai', content: '设想一个班级里，A集合是"喜欢篮球的同学"，B集合是"喜欢足球的同学"。那么，"既喜欢篮球又喜欢足球的同学"属于哪个集合？' },
            { role: 'user', content: '是它们的交集吗？' },
            { role: 'ai', content: <>bingo！完全正确。这就是<strong className="text-indigo-600">交集 (A ∩ B)</strong>。那"只喜欢篮球不喜欢足球"的呢？</>, type: 'success' },
            { role: 'user', content: 'A减去B？' },
            { role: 'ai', content: '数学上我们通常说：A与(B的补集)的交集，或者就在韦恩图上把A中重叠的部分挖掉。' }
        ],
        tabs: {
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：集合运算可视化
                        </h2>
                        <div className="mb-6 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl text-slate-700 dark:text-slate-300">
                            <p><strong>实验任务：</strong></p>
                            <p className="mt-2 text-sm">
                                点击下方的按钮切换“交集”、“并集”、“补集”等模式，观察韦恩图(Venn Diagram)阴影区域的变化，直观理解各种运算的几何意义。
                            </p>
                        </div>
                        <SetVennDiagram />
                    </div>
                </div>
            ),
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            集合的概念
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-xl">
                                    <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-3 text-lg">集合三要素</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <div className="w-6 h-6 rounded-full bg-indigo-200 text-indigo-700 flex items-center justify-center text-xs font-bold mt-0.5">1</div>
                                            <div>
                                                <div className="font-bold text-slate-800 dark:text-white">确定性</div>
                                                <div className="text-xs text-slate-500">元素必须确定，不能模棱两可。</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-6 h-6 rounded-full bg-indigo-200 text-indigo-700 flex items-center justify-center text-xs font-bold mt-0.5">2</div>
                                            <div>
                                                <div className="font-bold text-slate-800 dark:text-white">互异性</div>
                                                <div className="text-xs text-slate-500">集合中没有重复的元素。</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-6 h-6 rounded-full bg-indigo-200 text-indigo-700 flex items-center justify-center text-xs font-bold mt-0.5">3</div>
                                            <div>
                                                <div className="font-bold text-slate-800 dark:text-white">无序性</div>
                                                <div className="text-xs text-slate-500">元素顺序不影响集合本身。</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-700 p-6 rounded-xl border border-slate-200 dark:border-slate-600">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                                    <Target className="w-5 h-5 text-red-500" />
                                    常用数集符号速查
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg text-center">
                                        <div className="text-2xl font-serif font-bold text-slate-800 dark:text-white mb-1">N</div>
                                        <div className="text-xs text-slate-500">自然数集</div>
                                    </div>
                                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg text-center">
                                        <div className="text-2xl font-serif font-bold text-slate-800 dark:text-white mb-1">Z</div>
                                        <div className="text-xs text-slate-500">整数集</div>
                                    </div>
                                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg text-center">
                                        <div className="text-2xl font-serif font-bold text-slate-800 dark:text-white mb-1">Q</div>
                                        <div className="text-xs text-slate-500">有理数集</div>
                                    </div>
                                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg text-center">
                                        <div className="text-2xl font-serif font-bold text-slate-800 dark:text-white mb-1">R</div>
                                        <div className="text-xs text-slate-500">实数集</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Brain className="w-6 h-6 text-purple-600" />
                            充分条件与必要条件
                        </h2>
                        <div className="space-y-4">
                            <div className="p-6 bg-slate-50 dark:bg-slate-700/50 rounded-xl relative overflow-hidden border-l-4 border-green-500">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-2xl font-bold text-slate-800 dark:text-white">p <span className="text-indigo-500">⇒</span> q</span>
                                    <span className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-full">若p成立则q一定成立</span>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                                        <div className="text-xs text-slate-500 mb-1">对 p 而言</div>
                                        <div className="font-bold text-indigo-600">p 是 q 的充分条件</div>
                                        <div className="text-xs text-slate-400 mt-1">"有之必然"</div>
                                    </div>
                                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                                        <div className="text-xs text-slate-500 mb-1">对 q 而言</div>
                                        <div className="font-bold text-purple-600">q 是 p 的必要条件</div>
                                        <div className="text-xs text-slate-400 mt-1">"无之必不然"</div>
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
                            集合运算法则
                        </h2>
                        <div className="grid gap-4">
                            {/* 交集 */}
                            <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-transparent hover:border-indigo-200 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-2xl">∩</div>
                                <div>
                                    <h4 className="font-bold text-slate-800 dark:text-white text-lg">交集 (Intersection)</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 font-mono mt-1">A ∩ B = &#123; x | x ∈ A 且 x ∈ B &#125;</p>
                                </div>
                            </div>
                            {/* 并集 */}
                            <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-transparent hover:border-pink-200 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center text-pink-600 dark:text-pink-400 font-bold text-2xl">∪</div>
                                <div>
                                    <h4 className="font-bold text-slate-800 dark:text-white text-lg">并集 (Union)</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 font-mono mt-1">A ∪ B = &#123; x | x ∈ A 或 x ∈ B &#125;</p>
                                </div>
                            </div>
                            {/* 补集 */}
                            <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-transparent hover:border-slate-300 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold text-2xl">C</div>
                                <div>
                                    <h4 className="font-bold text-slate-800 dark:text-white text-lg">补集 (Complement)</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 font-mono mt-1">C<sub>U</sub>A = &#123; x | x ∈ U 且 x ∉ A &#125;</p>
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
                            例1：集合运算
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>题目：</strong> 已知集合 A = &#123;1, 2, 3&#125;，B = &#123;2, 3, 4&#125;，求 A ∩ B 和 A ∪ B。</p>
                            <div className="my-3 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                                <p className="font-bold mb-1">💡 思路点拨：</p>
                                <p className="text-xs text-slate-500">
                                    交集找"公共部分"，并集找"全部合并(去重)"。
                                </p>
                            </div>
                            <p className="mt-3"><strong>解：</strong></p>
                            <p>由图可知，2 和 3 是两个集合共有的。</p>
                            <p>∴ A ∩ B = <strong className="text-indigo-600">&#123;2, 3&#125;</strong></p>
                            <p>把所有元素合在一起（去重）：</p>
                            <p>∴ A ∪ B = <strong className="text-pink-600">&#123;1, 2, 3, 4&#125;</strong></p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Brain className="w-5 h-5 text-indigo-600" />
                            例2：逻辑判断
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>题目：</strong> "x &gt; 2" 是 "x &gt; 1" 的什么条件？</p>
                            <div className="my-3 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                                <p className="font-bold mb-1">💡 思路点拨：</p>
                                <p className="text-xs text-slate-500">
                                    分别判断：(x&gt;2 ⇒ x&gt;1?) 和 (x&gt;1 ⇒ x&gt;2?)
                                </p>
                            </div>
                            <p><strong>解：</strong></p>
                            <p>若 x &gt; 2，则一定有 x &gt; 1（充分）。</p>
                            <p>若 x &gt; 1，不一定有 x &gt; 2（例如 x=1.5）（不必要）。</p>
                            <p className="text-indigo-600 font-bold">∴ 是充分不必要条件。</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1001} type="choice"
                        question="设集合 M = {x | -1 < x < 2}，N = {x | x > 0}，则 M ∩ N = ?"
                        options={[
                            { label: 'A', value: '{x | x > -1}' },
                            { label: 'B', value: '{x | x > 0}' },
                            { label: 'C', value: '{x | 0 < x < 2}' },
                            { label: 'D', value: '{x | -1 < x < 0}' }
                        ]}
                        answer="C"
                        explanation="画数轴分析：M是(-1, 2)，N是(0, +∞)。这两个区间的重叠部分是(0, 2)。"
                    />
                    <PracticeProblem id={1002} type="choice"
                        question="“a = 0” 是 “ab = 0” 的？"
                        options={[
                            { label: 'A', value: '充分不必要条件' },
                            { label: 'B', value: '必要不充分条件' },
                            { label: 'C', value: '充要条件' },
                            { label: 'D', value: '既不充分也不必要条件' }
                        ]}
                        answer="A"
                        explanation="若a=0，则一定ab=0（充分）。若ab=0，可能是b=0而a≠0，所以推不出a一定为0（不必要）。"
                    />
                </div>
            )
        }
    },

    // ==================== 2. 函数的性质 ====================
    'high-10-1-functions': {
        meta: {
            title: "函数的性质 - 单调性与奇偶性 | AI奇妙数学",
            description: "深入理解函数的单调性（增减性）和奇偶性。掌握判断函数性质的方法，理解数形结合思想。",
            keywords: "函数单调性,增函数,减函数,奇偶性,奇函数,偶函数,高一数学"
        },
        info: {
            title: "函数的性质",
            description: "函数是描述变化的工具。单调性告诉你它是上升还是下降，奇偶性告诉你它是否对称。",
            tags: [
                { text: "高一数学", color: "blue" },
                { text: "函数核心", color: "red" },
                { text: "45分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生正在学习函数性质。重点：单调性定义（任意x1<x2, f(x1)<f(x2)为增），奇偶性定义（f(-x)=f(x)偶, f(-x)=-f(x)奇）。强调定义域优先原则。",
        aiChatTitle: "AI函数侦探",
        aiChatIntro: "你好！我们可以通过画图来直观感受函数的性质。你知道为什么有的图像是左右对称的吗？",
        aiMessages: [
            { role: 'ai', content: '观察 y = x² 的图像，左边和右边像是在照镜子。通过计算 f(-x)，你能证明这一点吗？' },
            { role: 'user', content: 'f(-x) = (-x)² = x² = f(x)' },
            { role: 'ai', content: <>非常棒！因为 <strong className="font-mono">f(-x) = f(x)</strong>，所以它是偶函数，图像关于y轴对称。这就像数学里的"照镜子"！</>, type: 'success' }
        ],
        tabs: {
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：函数性质探究
                        </h2>
                        <div className="mb-6 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl text-slate-700 dark:text-slate-300">
                            <p><strong>实验任务：</strong></p>
                            <p className="mt-2 text-sm">
                                1. 点击切换不同的函数类型 (y=x, y=x², y=x³, y=1/x)。<br />
                                2. 打开“对称性”开关，观察图像是否关于y轴或原点对称。<br />
                                3. 打开“单调性”开关，查看函数的增减区间。
                            </p>
                        </div>
                        <FunctionPropertiesVisualizer />
                    </div>
                </div>
            ),
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <TrendingUp className="w-6 h-6 text-indigo-600" />
                            函数的单调性
                        </h2>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 mb-6">
                            <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3 text-lg">增函数与减函数</h3>
                            <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                                设区间 D 是函数 f(x) 定义域的子集。对于 D 内 <strong>任意</strong> 两个自变量 x₁, x₂：
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm">
                                    <h4 className="font-bold text-red-500 mb-2 flex items-center gap-2">
                                        <div className="p-1 bg-red-100 rounded text-xs">↗</div>
                                        增函数
                                    </h4>
                                    <p className="text-xs text-slate-500 mb-2">当 x₁ &lt; x₂ 时：</p>
                                    <p className="font-mono font-bold text-slate-800 dark:text-white text-lg">f(x₁) &lt; f(x₂)</p>
                                    <p className="text-xs text-slate-400 mt-2">"同向变化"</p>
                                </div>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm">
                                    <h4 className="font-bold text-green-500 mb-2 flex items-center gap-2">
                                        <div className="p-1 bg-green-100 rounded text-xs">↘</div>
                                        减函数
                                    </h4>
                                    <p className="text-xs text-slate-500 mb-2">当 x₁ &lt; x₂ 时：</p>
                                    <p className="font-mono font-bold text-slate-800 dark:text-white text-lg">f(x₁) &gt; f(x₂)</p>
                                    <p className="text-xs text-slate-400 mt-2">"反向变化"</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Sparkles className="w-6 h-6 text-purple-600" />
                            函数的奇偶性
                        </h2>
                        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500">
                            <div className="flex items-center gap-2 mb-4 bg-purple-100 dark:bg-purple-900/40 w-fit px-3 py-1 rounded-full">
                                <AlertCircle className="w-4 h-4 text-purple-600" />
                                <span className="text-xs font-bold text-purple-700 dark:text-purple-300">前提条件：定义域关于原点对称</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-slate-700 p-5 rounded-lg shadow-sm border border-purple-100 hover:border-purple-300 transition-colors">
                                    <h4 className="font-bold text-purple-600 mb-2 text-lg">偶函数 (Even)</h4>
                                    <div className="font-mono font-bold text-slate-800 dark:text-white mb-2 bg-slate-50 dark:bg-slate-800 p-2 rounded text-center">f(-x) = f(x)</div>
                                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        图像关于 <strong>y轴</strong> 对称
                                    </div>
                                    <p className="text-xs text-slate-400 mt-2">典型例子：y = x², y = cosx</p>
                                </div>
                                <div className="bg-white dark:bg-slate-700 p-5 rounded-lg shadow-sm border border-indigo-100 hover:border-indigo-300 transition-colors">
                                    <h4 className="font-bold text-indigo-600 mb-2 text-lg">奇函数 (Odd)</h4>
                                    <div className="font-mono font-bold text-slate-800 dark:text-white mb-2 bg-slate-50 dark:bg-slate-800 p-2 rounded text-center">f(-x) = -f(x)</div>
                                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        图像关于 <strong>原点</strong> 对称
                                    </div>
                                    <p className="text-xs text-slate-400 mt-2">典型例子：y = x, y = 1/x, y = sinx</p>
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
                            <CheckCircle className="w-6 h-6 text-green-600" />
                            判断步骤与技巧
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-slate-800 dark:text-white mb-3">🔢 判断奇偶性"三步走"</h3>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="flex-1 bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl text-center">
                                        <div className="w-8 h-8 bg-slate-200 text-slate-700 rounded-full flex items-center justify-center font-bold mx-auto mb-2">1</div>
                                        <div className="font-bold text-sm mb-1">看定义域</div>
                                        <div className="text-xs text-slate-500">是否关于原点对称？<br />不对称 $\to$ 非奇非偶</div>
                                    </div>
                                    <div className="flex-1 bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl text-center">
                                        <div className="w-8 h-8 bg-slate-200 text-slate-700 rounded-full flex items-center justify-center font-bold mx-auto mb-2">2</div>
                                        <div className="font-bold text-sm mb-1">算 f(-x)</div>
                                        <div className="text-xs text-slate-500">将 -x 代入解析式化简</div>
                                    </div>
                                    <div className="flex-1 bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl text-center">
                                        <div className="w-8 h-8 bg-slate-200 text-slate-700 rounded-full flex items-center justify-center font-bold mx-auto mb-2">3</div>
                                        <div className="font-bold text-sm mb-1">看关系</div>
                                        <div className="text-xs text-slate-500">f(-x)与f(x)的关系<br />相等$\to$偶，相反$\to$奇</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 dark:text-white mb-3">📈 复合函数单调性口诀</h3>
                                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl text-center border border-yellow-200">
                                    <p className="text-lg font-bold text-yellow-800 dark:text-yellow-200 mb-2">"同增异减"</p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        内层函数与外层函数单调性相同，复合后为增；<br />
                                        单调性相异，复合后为减。
                                    </p>
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
                            例1：判断奇偶性
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>题目：</strong> 判断 f(x) = x³ + x 的奇偶性。</p>
                            <p className="mt-3"><strong>解：</strong></p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>第一步：定义域为 R，关于原点对称。</li>
                                <li>第二步：计算 f(-x)
                                    <div className="pl-6 py-2 bg-slate-50 dark:bg-slate-900/50 rounded my-1 font-mono">
                                        f(-x) = (-x)³ + (-x) = -x³ - x
                                    </div>
                                </li>
                                <li>第三步：提取公因数 -1
                                    <div className="pl-6 py-2 bg-slate-50 dark:bg-slate-900/50 rounded my-1 font-mono">
                                        = -(x³ + x) = -f(x)
                                    </div>
                                </li>
                            </ul>
                            <p className="text-indigo-600 font-bold mt-2">∴ f(x) 是奇函数。</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1011} type="choice"
                        question="下列函数中，既是偶函数又在 (0, +∞) 上单调递增的是？"
                        options={[
                            { label: 'A', value: 'y = x³' },
                            { label: 'B', value: 'y = |x|' },
                            { label: 'C', value: 'y = -x²' },
                            { label: 'D', value: 'y = 1/x' }
                        ]}
                        answer="B"
                        explanation="A是奇函数；C是偶函数但在正半轴递减；D是奇函数；B是偶函数且在正半轴递增。"
                    />
                </div>
            )
        }
    },

    // ==================== 3. 指数与对数 (Enhanced Content) ====================
    'high-10-1-exp-log': {
        meta: {
            title: "指数与对数函数 - 高一数学 | AI奇妙数学",
            description: "掌握指数函数与对数函数的图像与性质。理解对数的定义及运算公式，掌握换底公式。",
            keywords: "指数函数,对数函数,对数运算,换底公式,高一数学"
        },
        info: {
            title: "指数与对数",
            description: "细胞分裂是指数增长，声音大小是对数关系。掌握这两类函数，看懂爆炸式增长！",
            tags: [
                { text: "高一数学", color: "blue" },
                { text: "重要工具", color: "green" },
                { text: "40分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生正在学习指数和对数。重点：指数爆炸的威力（折纸），对数是指数的逆运算。强调图像过定点（指数过(0,1)，对数过(1,0)）。",
        aiChatTitle: "AI增长分析师",
        aiMessages: [
            { role: 'ai', content: '如果一张纸足够大，对折30次会有多厚？' },
            { role: 'user', content: '可能有几米厚？' },
            { role: 'ai', content: <>不！它会超过珠穆朗玛峰的高度！这就是<strong className="text-red-600">指数增长</strong>的威力 (2³⁰)。</>, type: 'success' }
        ],
        tabs: {
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：增长的奥秘
                        </h2>
                        <div className="mb-6 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl text-slate-700 dark:text-slate-300 text-sm">
                            <p><strong>实验任务：</strong></p>
                            <p className="mt-1">
                                调节底数 <strong>a</strong>，观察指数函数和对数函数图像的变化。理解反函数的对称美。
                            </p>
                        </div>
                        <ExponentialVisualizer />
                    </div>
                </div>
            ),
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            指数与对数是一对"反函数"
                        </h2>
                        <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-4 rounded-xl text-center mb-6">
                            <span className="font-mono text-xl font-bold text-indigo-600">y = aˣ</span>
                            <span className="mx-4 text-slate-400">↔</span>
                            <span className="font-mono text-xl font-bold text-green-600">x = logₐy</span>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border-t-4 border-red-500">
                                <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 text-lg">指数函数 y = aˣ</h3>
                                <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                                    <li><strong>定义域：</strong>R</li>
                                    <li><strong>值域：</strong>(0, +∞)</li>
                                    <li><strong>定点：</strong>(0, 1)</li>
                                    <li><strong>单调性：</strong>
                                        <div className="mt-1 pl-2 border-l-2 border-red-200">
                                            a &gt; 1 : 增函数 (爆炸式增长)<br />
                                            0 &lt; a &lt; 1 : 减函数 (指数衰减)
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-t-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 text-lg">对数函数 y = logₐx</h3>
                                <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                                    <li><strong>定义域：</strong>(0, +∞)</li>
                                    <li><strong>值域：</strong>R</li>
                                    <li><strong>定点：</strong>(1, 0)</li>
                                    <li><strong>单调性：</strong>
                                        <div className="mt-1 pl-2 border-l-2 border-green-200">
                                            a &gt; 1 : 增函数 (增长越来越慢)<br />
                                            0 &lt; a &lt; 1 : 减函数
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">对数运算公式</h2>
                        <div className="grid gap-4">
                            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg flex items-center justify-between">
                                <span className="text-sm text-slate-500">积的对数 = 对数的和</span>
                                <code className="text-lg font-bold text-indigo-600">logₐ(MN) = logₐM + logₐN</code>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg flex items-center justify-between">
                                <span className="text-sm text-slate-500">商的对数 = 对数的差</span>
                                <code className="text-lg font-bold text-indigo-600">logₐ(M/N) = logₐM - logₐN</code>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg flex items-center justify-between">
                                <span className="text-sm text-slate-500">幂的对数 = 倍数</span>
                                <code className="text-lg font-bold text-indigo-600">logₐ(Mⁿ) = n · logₐM</code>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg">例1：对数计算</h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                            <p><strong>题目：</strong> 计算 log₂4 + log₂8</p>
                            <p className="mt-2"><strong>解法1：</strong>利用定义</p>
                            <p>log₂4 = 2, log₂8 = 3, 2+3=5</p>
                            <p className="mt-2"><strong>解法2：</strong>利用公式</p>
                            <p>原式 = log₂(4×8) = log₂32 = 5</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1021} type="choice"
                        question="若 2ˣ = 3，则 x = ?"
                        options={[
                            { label: 'A', value: 'log₂3' },
                            { label: 'B', value: 'log₃2' },
                            { label: 'C', value: 'ln3' },
                            { label: 'D', value: '3²' }
                        ]}
                        answer="A"
                        explanation="根据对数定义，a^x=N <=> x=log_a N。"
                    />
                </div>
            )
        }
    },

    // ==================== 4. 平面向量 ====================
    'high-10-1-vectors': {
        meta: {
            title: "平面向量 - 高一数学 | AI奇妙数学",
            description: "掌握向量的概念、几何表示及线性运算（加减数乘）。理解向量的坐标表示与数量积。",
            keywords: "平面向量,向量加法,数量积,向量坐标,高一数学"
        },
        info: {
            title: "平面向量",
            description: "既有大小又有方向的量。它是连接代数与几何的桥梁，物理中的力与速度都是它。",
            tags: [
                { text: "高一数学", color: "blue" },
                { text: "数形结合", color: "indigo" },
                { text: "40分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生正在学习平面向量。重点：向量不同于数量，有方向。加法遵循三角形/平行四边形法则。强调向量的坐标运算。",
        aiChatTitle: "AI向量导航员",
        aiChatIntro: "你好！欢迎来到向量的世界。你知道为什么我们在物理里算合力的时候，不能直接相加吗？",
        aiMessages: [
            { role: 'ai', content: '如果一个人向东走3米，再向北走4米，他离起点多远？是7米吗？' },
            { role: 'user', content: '不是，是5米。' },
            { role: 'ai', content: <>正确！这就是<strong className="text-indigo-600">位移向量</strong>的加法。我们需要用到勾股定理。让我们在画板上试试！</>, type: 'success' }
        ],
        tabs: {
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：向量运算
                        </h2>
                        <div className="mb-6 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl text-slate-700 dark:text-slate-300">
                            <p><strong>实验任务：</strong></p>
                            <p className="mt-2 text-sm">
                                1. 拖动红色(a)和蓝色(b)向量的箭头改变它们的大小和方向。<br />
                                2. 观察绿色向量(a+b 或 a-b)是如何生成的（平行四边形/三角形法则）。
                            </p>
                        </div>
                        <VectorVisualizer />
                    </div>
                </div>
            ),
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            向量的基本概念
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-3">定义与表示</h3>
                                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                                    <li><strong>定义：</strong> 既有大小又有方向的量。</li>
                                    <li><strong>几何表示：</strong> 有向线段 AB</li>
                                    <li><strong>字母表示：</strong> <strong className="font-bold font-serif italic">a, b</strong></li>
                                    <li><strong>模（长度）：</strong> |<strong className="font-bold font-serif italic">a</strong>|</li>
                                    <li><strong>零向量：</strong> 长度为0，方向任意 (0)。</li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-3">线性运算</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded text-xs font-bold">加法</div>
                                        <div className="text-sm">三角形法则 ("首尾相连")</div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="bg-pink-100 text-pink-600 px-2 py-1 rounded text-xs font-bold">减法</div>
                                        <div className="text-sm">三角形法则 ("共起点，指被减")</div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-bold">数乘</div>
                                        <div className="text-sm">λ<strong className="italic">a</strong> (λ&gt;0同向, λ&lt;0反向)</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-xl border-l-4 border-indigo-500">
                            <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2">💡 向量坐标运算</h3>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                                设 a = (x₁, y₁), b = (x₂, y₂)，则：<br />
                                <span className="font-mono ml-4">a + b = (x₁+x₂, y₁+y₂)</span><br />
                                <span className="font-mono ml-4">a · b = x₁x₂ + y₁y₂</span> (数量积)
                            </p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1041} type="choice"
                        question="已知向量 a=(1, 2), b=(x, 4)，若 a // b，则 x = ?"
                        options={[
                            { label: 'A', value: '2' },
                            { label: 'B', value: '-2' },
                            { label: 'C', value: '8' },
                            { label: 'D', value: '1/2' }
                        ]}
                        answer="A"
                        explanation="两向量平行，坐标交叉相乘相等：1*4 = 2*x => x=2。"
                    />
                </div>
            )
        }
    },

    // ==================== 高一下学期 ====================

    // ==================== 1. 三角函数图像与性质 ====================
    'high-10-2-trig-graphs': {
        meta: {
            title: "三角函数图像与性质 - 高一数学 | AI奇妙数学",
            description: "从单位圆定义出发，掌握正弦函数、余弦函数的图像与性质（周期、单调性、最值）。",
            keywords: "三角函数,正弦曲线,周期性,五点作图法"
        },
        info: {
            title: "三角函数图像与性质",
            description: "波浪、震动、旋转...整个宇宙都在跳舞。让我们看看数学如何描绘这些律动。",
            tags: [
                { text: "高一数学", color: "blue" },
                { text: "图像分析", color: "purple" },
                { text: "55分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生已经学习了三角函数定义。现在重点是'图像'。利用单位圆生成正弦曲线的动画最能说明问题。讲解'五点法'作图。",
        aiChatTitle: "AI波形分析师",
        aiChatIntro: "你好！我们可以把圆周运动展开成波浪。想象一下，你把一个转动的轮子在地上滚过，轮子上一点的轨迹会是什么样？",
        tabs: {
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：单位圆与三角函数
                        </h2>
                        <div className="mb-6 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl text-slate-700 dark:text-slate-300">
                            <p><strong>实验任务：</strong></p>
                            <p className="mt-2 text-sm">
                                拖动圆上的点，观察正弦线（竖直红线）如何变化。想象随着角度增加，这条红线的高度变化描绘出了正弦曲线。
                            </p>
                        </div>
                        <UnitCircleVisualizer />
                    </div>
                </div>
            ),
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <TrendingUp className="w-6 h-6 text-indigo-600" />
                            正弦函数 y = sin x 的性质
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-3">图像特征</h3>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                    <li><strong>定义域：</strong> R</li>
                                    <li><strong>值域：</strong> [-1, 1]</li>
                                    <li><strong>周期性：</strong> T = 2π (最小正周期)</li>
                                    <li><strong>奇偶性：</strong> 奇函数 (关于原点对称)</li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-3">单调区间</h3>
                                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                    <p><span className="text-red-500 font-bold">增区间：</span> [-π/2 + 2kπ, π/2 + 2kπ]</p>
                                    <p><span className="text-green-500 font-bold">减区间：</span> [π/2 + 2kπ, 3π/2 + 2kπ]</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1051} type="choice"
                        question="函数 y = sin(2x) 的最小正周期是？"
                        options={[
                            { label: 'A', value: '4π' },
                            { label: 'B', value: '2π' },
                            { label: 'C', value: 'π' },
                            { label: 'D', value: 'π/2' }
                        ]}
                        answer="C"
                        explanation="周期 T = 2π/ω。这里 ω=2，所以 T = 2π/2 = π。"
                    />
                </div>
            )
        }
    },

    // ==================== 2. 三角恒等变换 ====================
    'high-10-2-trig-identities': {
        meta: {
            title: "三角恒等变换 - 高一数学 | AI奇妙数学",
            description: "掌握两角和与差的正弦、余弦、正切公式，二倍角公式。灵活运用公式进行化简与求值。",
            keywords: "和差公式,二倍角,辅助角公式,三角恒等变换"
        },
        info: {
            title: "三角恒等变换",
            description: "数学中的'变形金刚'。通过公式，把复杂的三角式子变得简单优雅。",
            tags: [
                { text: "高一数学", color: "blue" },
                { text: "计算核心", color: "red" },
                { text: "50分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生正在学习公式的使用。重点：'变角'技巧（如 2α = α + α）。提醒学生注意公式的逆用。",
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">核心公式墙</h2>
                        <div className="grid gap-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                                <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2">两角和与差</h3>
                                <div className="font-mono text-sm space-y-1">
                                    <p>sin(α±β) = sinα cosβ ± cosα sinβ</p>
                                    <p>cos(α±β) = cosα cosβ ∓ sinα sinβ <span className="text-xs text-slate-500">(注意符号!)</span></p>
                                    <p>tan(α±β) = (tanα ± tanβ) / (1 ∓ tanα tanβ)</p>
                                </div>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl">
                                <h3 className="font-bold text-purple-700 dark:text-purple-300 mb-2">二倍角公式</h3>
                                <div className="font-mono text-sm space-y-1">
                                    <p>sin 2α = 2sinα cosα</p>
                                    <p>cos 2α = cos²α - sin²α = 2cos²α - 1 = 1 - 2sin²α</p>
                                    <p>tan 2α = 2tanα / (1 - tan²α)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1061} type="choice"
                        question="若 tan α = 2，则 tan 2α = ?"
                        options={[
                            { label: 'A', value: '4' },
                            { label: 'B', value: '-4/3' },
                            { label: 'C', value: '4/3' },
                            { label: 'D', value: '-4' }
                        ]}
                        answer="B"
                        explanation="tan 2α = 2tanα / (1 - tan²α) = 2*2 / (1 - 4) = 4 / (-3) = -4/3。"
                    />
                </div>
            )
        }
    },

    // ==================== 3. 复数 ====================
    'high-10-2-complex-numbers': {
        meta: {
            title: "复数 - 高一数学 | AI奇妙数学",
            description: "引入虚数单位i，扩充数系到复数。掌握复数的代数形式、几何意义及四则运算。",
            keywords: "复数,虚数单位,复平面,共轭复数"
        },
        info: {
            title: "复数",
            description: "i 是想象(Imaginary)的翅膀。当数轴变成了平面，一个新的数学世界诞生了。",
            tags: [
                { text: "高一数学", color: "blue" },
                { text: "数系扩充", color: "green" },
                { text: "30分钟", icon: Clock, color: "slate" }
            ]
        },
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Sparkles className="w-6 h-6 text-indigo-600" />
                            复数的引入
                        </h2>
                        <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl mb-6">
                            <p className="text-slate-700 dark:text-slate-300">
                                为了解决方程 <span className="font-mono font-bold">x² + 1 = 0</span> 无解的问题，我们引入虚数单位 <strong>i</strong>。
                            </p>
                            <div className="mt-4 flex justify-center">
                                <div className="bg-white dark:bg-slate-800 px-6 py-3 rounded-lg shadow font-mono text-xl font-bold text-indigo-600 border border-indigo-100">
                                    i² = -1
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-600">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">代数形式</h3>
                                <p className="font-mono text-xl text-center my-4 font-bold">z = a + bi</p>
                                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                    <li>a: 实部 (Real Part)</li>
                                    <li>b: 虚部 (Imaginary Part)</li>
                                    <li>(a, b ∈ R)</li>
                                </ul>
                            </div>
                            <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-600">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">几何意义 (复平面)</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                                    复数 z = a + bi 对应复平面上的点 Z(a, b) 或向量 OZ。
                                </p>
                                <div className="text-center text-xs text-slate-400 mt-4">
                                    x轴: 实轴, y轴: 虚轴
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1071} type="choice"
                        question="复数 z = 1 - i 的共轭复数是？"
                        options={[
                            { label: 'A', value: '1 + i' },
                            { label: 'B', value: '-1 - i' },
                            { label: 'C', value: '-1 + i' },
                            { label: 'D', value: '1 - i' }
                        ]}
                        answer="A"
                        explanation="实部不变，虚部变号。1 - i 的共轭复数是 1 + i。"
                    />
                    <PracticeProblem id={1072} type="choice"
                        question="计算 i(1+i) = ?"
                        options={[
                            { label: 'A', value: '1 + i' },
                            { label: 'B', value: '-1 + i' },
                            { label: 'C', value: '1 - i' },
                            { label: 'D', value: '-1 - i' }
                        ]}
                        answer="B"
                        explanation="i(1+i) = i + i² = i - 1 = -1 + i。"
                    />
                </div>
            )
        }
    }
};

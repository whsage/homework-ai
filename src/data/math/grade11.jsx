import { Icons, PracticeProblem, Link, React } from './common';
import SolidStructureVisualizer from '../../components/subjects/math/high/SolidStructureVisualizer';
import ConicsVisualizer from '../../components/subjects/math/high/ConicsVisualizer';
import SequenceVisualizer from '../../components/subjects/math/high/SequenceVisualizer';
import CoordGeometryVisualizer from '../../components/subjects/math/high/CoordGeometryVisualizer';
import { Box, Circle, BarChart2, Hash, ArrowUpRight, List } from 'lucide-react';

const {
    Lightbulb, Target, TrendingUp, Clock, Star, Brain, CheckCircle, Sparkles, Calculator, Award, MousePointer2
} = Icons;

export const grade11Content = {
    // ==================== 高二上学期 ====================

    // ==================== 1. 立体几何初步 ====================
    'high-11-1-solid-geometry': {
        meta: {
            title: "立体几何初步 - 高二数学 | AI奇妙数学",
            description: "培养空间想象力。认识柱、锥、台、球的结构特征，掌握平面的基本性质及线面关系。",
            keywords: "立体几何,空间想象,异面直线,线面垂直,二面角"
        },
        info: {
            title: "立体几何初步",
            description: "从二维迈向三维。世界是立体的，数学也要升维！",
            tags: [
                { text: "高二数学", color: "blue" },
                { text: "空间想象", color: "purple" },
                { text: "50分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生正在培养空间想象力。重点：'看图'能力。利用3D可视化工具展示几何体。强调公理系统的逻辑推理。",
        aiChatTitle: "AI空间建筑师",
        aiChatIntro: "你好！欢迎来到3D世界。你能想象一个正方体被切一刀，截面是什么形状吗？",
        tabs: {
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Box className="w-6 h-6 text-indigo-600" />
                            互动展厅：空间几何体
                        </h2>
                        <div className="mb-6 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl text-slate-700 dark:text-slate-300">
                            <p><strong>实验任务：</strong></p>
                            <p className="mt-2 text-sm">
                                拖动几何体进行360度旋转观察。尝试找出正方体的对角线、异面直线，以及四棱锥的高。
                            </p>
                        </div>
                        <SolidStructureVisualizer />
                    </div>
                </div>
            ),
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">平面的基本性质 (三个公理)</h2>
                        <div className="grid gap-4">
                            <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                                <h3 className="font-bold text-indigo-600 mb-2">公理1：线在面内</h3>
                                <p className="text-sm">如果一条直线上的两点在一个平面内，那么这条直线在此平面内。</p>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                                <h3 className="font-bold text-indigo-600 mb-2">公理2：面的确定</h3>
                                <p className="text-sm">过不在一条直线上的三点，有且只有一个平面。(三点定面)</p>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                                <h3 className="font-bold text-indigo-600 mb-2">公理3：面的交线</h3>
                                <p className="text-sm">如果两个不重合的平面有一个公共点，那么它们有且只有一条过该点的公共直线。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1111} type="choice"
                        question="下列命题中，正确的是？"
                        options={[
                            { label: 'A', value: '三点确定一个平面' },
                            { label: 'B', value: '一条直线和一个点确定一个平面' },
                            { label: 'C', value: '两条直线确定一个平面' },
                            { label: 'D', value: '三角形不仅是平面图形，也是立体几何研究的对象' }
                        ]}
                        answer="D"
                        explanation="A错(需不共线)；B错(点若在直线上则无数个)；C错(需相交或平行)；D正确，面是体的一部分。"
                    />
                </div>
            )
        }
    },

    // ==================== 2. 直线与圆的方程 ====================
    'high-11-1-lines-circles': {
        meta: {
            title: "直线与圆的方程 - 高二数学 | AI奇妙数学",
            description: "解析几何的开端。用代数方法研究直线和圆的几何性质（位置关系、距离公式）。",
            keywords: "直线方程,斜率,圆的方程,点到直线距离"
        },
        info: {
            title: "直线与圆",
            description: "笛卡尔的伟大发现：把图形变成方程，把几何变成代数。",
            tags: [
                { text: "高二数学", color: "blue" },
                { text: "解析几何", color: "red" },
                { text: "45分钟", icon: Clock, color: "slate" }
            ]
        },
        tabs: {
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Circle className="w-6 h-6 text-indigo-600" />
                            互动实验室：数形大统一
                        </h2>
                        <div className="mb-6 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl text-slate-700 dark:text-slate-300">
                            <p><strong>实验任务：</strong></p>
                            <p className="mt-2 text-sm">
                                切换查看直线方程和圆的标准方程。观察参数的变化如何改变图形在直角坐标系中的位置和形状。
                            </p>
                        </div>
                        <CoordGeometryVisualizer />
                    </div>
                </div>
            ),
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Circle className="w-6 h-6 text-indigo-600" />
                            直线与圆的核心公式
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">直线的五种形式</h3>
                                <ul className="text-sm space-y-2 font-mono text-slate-700 dark:text-slate-300">
                                    <li>点斜式：y-y₀ = k(x-x₀)</li>
                                    <li>斜截式：y = kx + b</li>
                                    <li>两点式：(y-y₁)/(y₂-y₁) = (x-x₁)/(x₂-x₁)</li>
                                    <li>截距式：x/a + y/b = 1</li>
                                    <li><strong className="text-indigo-600">一般式：Ax + By + C = 0</strong></li>
                                </ul>
                            </div>
                            <div className="bg-pink-50 dark:bg-pink-900/20 p-5 rounded-xl">
                                <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2">圆的方程</h3>
                                <ul className="text-sm space-y-2 font-mono text-slate-700 dark:text-slate-300">
                                    <li>标准方程：(x-a)² + (y-b)² = r²</li>
                                    <li>一般方程：x² + y² + Dx + Ey + F = 0</li>
                                    <li className="text-xs text-slate-500 mt-2">圆心(-D/2, -E/2), r=½√(D²+E²-4F)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1121} type="choice"
                        question="直线 3x + 4y - 5 = 0 到原点的距离是？"
                        options={[
                            { label: 'A', value: '1' },
                            { label: 'B', value: '5' },
                            { label: 'C', value: '5/7' },
                            { label: 'D', value: '0' }
                        ]}
                        answer="A"
                        explanation="点到直线距离公式 d = |Ax₀+By₀+C| / √(A²+B²)。d = |-5| / √(3²+4²) = 5/5 = 1。"
                    />
                </div>
            )
        }
    },

    // ==================== 3. 统计与概率初步 ====================
    'high-11-1-statistics': {
        meta: {
            title: "统计与概率初步 - 高二数学",
            description: "随机抽样、用样本估计总体。古典概型与几何概型。",
            keywords: "抽样,频率分布直方图,平均数,方差,古典概型"
        },
        info: {
            title: "统计与概率",
            description: "在大数据时代，如何从数据中挖掘真相？概率是预测未来的语言。",
            tags: [
                { text: "高二数学", color: "blue" },
                { text: "数据分析", color: "green" },
                { text: "40分钟", icon: Clock, color: "slate" }
            ]
        },
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <BarChart2 className="w-6 h-6 text-indigo-600" />
                            数据的数字特征
                        </h2>
                        <div className="grid md:grid-cols-3 gap-4 text-center">
                            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                                <div className="font-bold text-lg mb-1">平均数 (Mean)</div>
                                <div className="text-xs text-slate-500">反映数据的集中趋势</div>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                                <div className="font-bold text-lg mb-1">中位数 (Median)</div>
                                <div className="text-xs text-slate-500">位置在中间的数，不受极端值影响</div>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                                <div className="font-bold text-lg mb-1">方差 (Variance)</div>
                                <div className="text-xs text-slate-500">s² = 1/n ∑(xᵢ - x̄)²，反映波动大小</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    },

    // ==================== 高二下学期 ====================

    // ==================== 1. 圆锥曲线 ====================
    'high-11-2-conics': {
        meta: {
            title: "圆锥曲线与方程 - 高二数学 | AI奇妙数学",
            description: "深入研究椭圆、双曲线、抛物线的定义、标准方程及几何性质。",
            keywords: "椭圆,双曲线,抛物线,离心率,圆锥曲线"
        },
        info: {
            title: "圆锥曲线",
            description: "行星的轨道、卫星的天线、探照灯的反射面...圆锥曲线通过精妙的几何性质主宰着我们的宇宙。",
            tags: [
                { text: "高二数学", color: "blue" },
                { text: "高考压轴", color: "red" },
                { text: "60分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生正在攻克解析几何难关。重点：'定义第一'。掌握椭圆、双曲线、抛物线的标准方程及a,b,c关系。互动展示离心率e对形状的影响。",
        tabs: {
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：圆锥曲线族
                        </h2>
                        <div className="mb-6 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl text-slate-700 dark:text-slate-300">
                            <p><strong>实验任务：</strong></p>
                            <p className="mt-2 text-sm">
                                切换查看椭圆、双曲线、抛物线的形态。观察焦点位置与曲线开口/扁平程度的关系。
                            </p>
                        </div>
                        <ConicsVisualizer />
                    </div>
                </div>
            ),
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">基本性质对比</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-slate-600 dark:text-slate-400">
                                <thead className="text-xs text-slate-700 uppercase bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                                    <tr>
                                        <th className="px-6 py-3">曲线</th>
                                        <th className="px-6 py-3">标准方程 (焦点在x轴)</th>
                                        <th className="px-6 py-3">定义</th>
                                        <th className="px-6 py-3">a, b, c关系</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
                                        <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">椭圆</td>
                                        <td className="px-6 py-4 font-mono">x²/a² + y²/b² = 1</td>
                                        <td className="px-6 py-4">|PF₁|+|PF₂| = 2a (&gt;|F₁F₂|)</td>
                                        <td className="px-6 py-4 font-mono">a² = b² + c²</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
                                        <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">双曲线</td>
                                        <td className="px-6 py-4 font-mono">x²/a² - y²/b² = 1</td>
                                        <td className="px-6 py-4">||PF₁|-|PF₂|| = 2a (&lt;|F₁F₂|)</td>
                                        <td className="px-6 py-4 font-mono">c² = a² + b²</td>
                                    </tr>
                                    <tr className="bg-white dark:bg-slate-800">
                                        <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">抛物线</td>
                                        <td className="px-6 py-4 font-mono">y² = 2px</td>
                                        <td className="px-6 py-4">到焦点距离 = 到准线距离</td>
                                        <td className="px-6 py-4 font-mono">p: 焦点到准线距离</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1141} type="choice"
                        question="椭圆 x²/25 + y²/9 = 1 的长轴长是？"
                        options={[
                            { label: 'A', value: '5' },
                            { label: 'B', value: '10' },
                            { label: 'C', value: '8' },
                            { label: 'D', value: '3' }
                        ]}
                        answer="B"
                        explanation="a²=25, b²=9 => a=5。长轴长 = 2a = 10。"
                    />
                </div>
            )
        }
    },

    // ==================== 2. 空间向量与立体几何 ====================
    'high-11-2-space-vectors': {
        meta: {
            title: "空间向量与立体几何 - 高二数学",
            description: "将平面向量推广到空间。利用空间向量解决立体几何中的夹角与距离问题。",
            keywords: "空间向量,空间直角坐标系,法向量,线面角"
        },
        info: {
            title: "空间向量",
            description: "立体几何的'降维打击'工具。建立坐标系，一切几何问题都变成了代数运算。",
            tags: [
                { text: "高二数学", color: "blue" },
                { text: "强力工具", color: "purple" },
                { text: "45分钟", icon: Clock, color: "slate" }
            ]
        },
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <ArrowUpRight className="w-6 h-6 text-indigo-600" />
                            空间直角坐标系
                        </h2>
                        <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl">
                            <p className="mb-4">在空间中选定一点O和一个单位正交基底 <span className="font-mono">{"{i, j, k}"}</span>，建立O-xyz坐标系。</p>
                            <p className="font-bold text-indigo-600">任意向量 a = (x, y, z)</p>
                            <p className="text-sm text-slate-500 mt-2">运算规则与平面向量完全类同，只是多了一个z分量。</p>
                        </div>

                        <div className="mt-6 bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500">
                            <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">法向量的应用</h3>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                                平面的法向量 <strong className="font-serif italic font-bold">n</strong> 是垂直于平面的向量。利用法向量可以极其方便地求：<br />
                                1. 线面角<br />
                                2. 二面角<br />
                                3. 点到平面的距离
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    },

    // ==================== 3. 数列 ====================
    'high-11-2-sequence': {
        meta: {
            title: "数列 - 高二数学 | AI奇妙数学",
            description: "发现数字排列的规律。掌握等差数列、等比数列的通项公式与前n项和公式。",
            keywords: "数列,等差数列,等比数列,通项公式,求和公式"
        },
        info: {
            title: "数列",
            description: "离散函数的优美旋律。从斐波那契到复利增长，数列蕴含着秩序之美。",
            tags: [
                { text: "高二数学", color: "blue" },
                { text: "规律探索", color: "orange" },
                { text: "50分钟", icon: Clock, color: "slate" }
            ]
        },
        tabs: {
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <List className="w-6 h-6 text-indigo-600" />
                            互动实验室：数列的跃动
                        </h2>
                        <div className="mb-6 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl text-slate-700 dark:text-slate-300">
                            <p><strong>实验任务：</strong></p>
                            <p className="mt-2 text-sm">
                                调节首项和公差/公比，观察数列的增长趋势。对比等差数列的线性增长与等比数列的指数式爆发。
                            </p>
                        </div>
                        <SequenceVisualizer />
                    </div>
                </div>
            ),
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <List className="w-6 h-6 text-indigo-600" />
                            两大核心数列
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl border-t-4 border-orange-500">
                                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2">等差数列 (AP)</h3>
                                <p className="text-xs text-slate-500 mb-2">定义：aₙ₊₁ - aₙ = d (常数)</p>
                                <ul className="text-sm font-mono space-y-2">
                                    <li>aₙ = a₁ + (n-1)d</li>
                                    <li>Sₙ = n(a₁+aₙ)/2 = na₁ + n(n-1)d/2</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-t-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">等比数列 (GP)</h3>
                                <p className="text-xs text-slate-500 mb-2">定义：aₙ₊₁ / aₙ = q (常数, q≠0)</p>
                                <ul className="text-sm font-mono space-y-2">
                                    <li>aₙ = a₁ · qⁿ⁻¹</li>
                                    <li>Sₙ = a₁(1-qⁿ)/(1-q) (q≠1)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1161} type="choice"
                        question="等差数列 {aₙ} 中，a₁=2, a₃=6，则 a₅ = ?"
                        options={[
                            { label: 'A', value: '8' },
                            { label: 'B', value: '10' },
                            { label: 'C', value: '12' },
                            { label: 'D', value: '18' }
                        ]}
                        answer="B"
                        explanation="2, 4, 6, 8, 10... 公差 d=(6-2)/2=2。a₅ = a₃ + 2d = 6 + 4 = 10。"
                    />
                </div>
            )
        }
    }
};

import { Icons, PracticeProblem, Link, React, generateDefaultContent } from './common';
import DerivativeVisualizer from '../../components/subjects/math/high/DerivativeVisualizer';
import GaltonBoardVisualizer from '../../components/subjects/math/high/GaltonBoardVisualizer';
import CombinatoricsVisualizer from '../../components/subjects/math/high/CombinatoricsVisualizer';
import { TrendingUp, BarChart2, Sigma, Hash, Zap, Globe } from 'lucide-react';

const {
    Lightbulb, Target, Clock, Star, Brain, CheckCircle, Sparkles, Calculator, Award, MousePointer2
} = Icons;

export const grade12Content = {
    // ==================== 高三上学期 (一轮复习/新课) ====================

    // ==================== 1. 导数及其应用 ====================
    'high-12-1-derivatives-calc': {
        meta: {
            title: "导数及其应用 - 高三数学 | AI7Miao数学",
            description: "微积分的入门。理解导数的几何意义（切线斜率）与物理意义（瞬时速度）。",
            keywords: "导数,切线斜率,瞬时变化率,单调性,极值"
        },
        info: {
            title: "导数初步",
            description: "研究变化的数学。并不是所有的变化都是线性的，导数捕捉了那一瞬间的改变。",
            tags: [
                { text: "高三数学", color: "blue" },
                { text: "微积分入门", color: "purple" },
                { text: "60分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生正在接触微积分。重点：'以直代曲'的思想。导数就是曲线在某点的切线斜率。由导数的正负判断函数的增减。",
        aiChatTitle: "AI微积分导师",
        aiChatIntro: "你好！欢迎来到微积分的门口。你知道为什么我们在高速公路上看的是'瞬时速度'而不是'平均速度'吗？",
        tabs: {
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：切线与导数
                        </h2>
                        <div className="mb-6 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl text-slate-700 dark:text-slate-300">
                            <p><strong>实验任务：</strong></p>
                            <p className="mt-2 text-sm">
                                拖动函数图像上的红点。观察切线（虚线）的倾斜程度如何随位置变化。切线的斜率就是导数的值。
                            </p>
                        </div>
                        <DerivativeVisualizer />
                    </div>
                </div>
            ),
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">导数的几何意义</h2>
                        <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border-l-4 border-indigo-500">
                            <p className="mb-4 text-lg">
                                函数 y = f(x) 在点 x₀ 处的导数 f'(x₀)，几何上表示曲线在该点处的<strong className="text-indigo-600">切线的斜率</strong>。
                            </p>
                            <div className="font-mono bg-white dark:bg-slate-800 p-4 rounded-lg shadow-inner text-center text-xl">
                                k = f'(x₀) = lim(Δx→0) Δy/Δx
                            </div>
                        </div>

                        <div className="mt-8 grid md:grid-cols-2 gap-6">
                            <div className="p-5 bg-green-50 dark:bg-green-900/20 rounded-xl">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">导数与单调性</h3>
                                <p className="text-sm">
                                    f'(x) &gt; 0 &rArr; 函数单调递<strong className="text-green-600">增</strong><br />
                                    f'(x) &lt; 0 &rArr; 函数单调递<strong className="text-red-500">减</strong><br />
                                    f'(x) = 0 &rArr; 可能存在<strong className="text-blue-500">极值</strong>
                                </p>
                            </div>
                            <div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">常见求导公式</h3>
                                <ul className="text-sm font-mono space-y-1">
                                    <li>(C)' = 0</li>
                                    <li>(xⁿ)' = nxⁿ⁻¹</li>
                                    <li>(sinx)' = cosx</li>
                                    <li>(eˣ)' = eˣ</li>
                                    <li>(lnx)' = 1/x</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1211} type="choice"
                        question="函数 f(x) = x³ - 3x 的单调递减区间是？"
                        options={[
                            { label: 'A', value: '(-∞, -1)' },
                            { label: 'B', value: '(-1, 1)' },
                            { label: 'C', value: '(1, +∞)' },
                            { label: 'D', value: 'R' }
                        ]}
                        answer="B"
                        explanation="求导：f'(x) = 3x² - 3。令 f'(x) < 0，即 3x² - 3 < 0 => x² < 1 => -1 < x < 1。"
                    />
                </div>
            )
        }
    },

    // ==================== 2. 计数原理 ====================
    'high-12-1-counting': {
        meta: {
            title: "计数原理 - 高三数学",
            description: "分类加法与分步乘法。排列与组合的区别与计算公式。",
            keywords: "排列,组合,二项式定理,杨辉三角"
        },
        info: {
            title: "计数原理",
            description: "数数的艺术。从简单的加加乘乘，到复杂的组合爆炸。",
            tags: [
                { text: "高三数学", color: "blue" },
                { text: "逻辑思维", color: "orange" },
                { text: "40分钟", icon: Clock, color: "slate" }
            ]
        },
        tabs: {
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Hash className="w-6 h-6 text-indigo-600" />
                            互动实验室：计数的艺术
                        </h2>
                        <div className="mb-6 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl text-slate-700 dark:text-slate-300">
                            <p><strong>实验任务：</strong></p>
                            <p className="mt-2 text-sm">
                                调节 n (总数) 和 m (选取数)，观察排列与组合在结果数量上的巨大差异。理解为何排列总是比组合多。
                            </p>
                        </div>
                        <CombinatoricsVisualizer />
                    </div>
                </div>
            ),
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">两个基本原理</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border-t-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">分类加法计数原理</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    完成一件事有n类办法，各类办法互不干扰。
                                </p>
                                <p className="mt-2 font-mono font-bold text-center">N = m₁ + m₂ + ... + mₙ</p>
                                <p className="text-xs text-center mt-1 text-slate-400">"分类相加"</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border-t-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">分步乘法计数原理</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    完成一件事分n个步骤，缺一不可。
                                </p>
                                <p className="mt-2 font-mono font-bold text-center">N = m₁ × m₂ × ... × mₙ</p>
                                <p className="text-xs text-center mt-1 text-slate-400">"分步相乘"</p>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                            <h3 className="font-bold mb-4 flex items-center gap-2">
                                <Hash className="w-5 h-5 text-indigo-500" /> 排列 vs 组合
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                                    <div className="font-bold text-indigo-700 dark:text-indigo-300">排列 (A/P)</div>
                                    <div className="text-xs text-slate-500 mt-1">有序 (Order matters)</div>
                                    <div className="font-mono text-sm mt-2">A(n, m) = n! / (n-m)!</div>
                                </div>
                                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                    <div className="font-bold text-purple-700 dark:text-purple-300">组合 (C)</div>
                                    <div className="text-xs text-slate-500 mt-1">无序 (Order doesn't matter)</div>
                                    <div className="font-mono text-sm mt-2">C(n, m) = A(n, m) / m!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1221} type="choice"
                        question="从5名学生中选出3名参加不同科目的竞赛（数学、物理、化学），有多少种选法？"
                        options={[
                            { label: 'A', value: '10' },
                            { label: 'B', value: '60' },
                            { label: 'C', value: '15' },
                            { label: 'D', value: '20' }
                        ]}
                        answer="B"
                        explanation="科目不同，顺序有关，是排列问题。A(5, 3) = 5 * 4 * 3 = 60。"
                    />
                </div>
            )
        }
    },

    // ==================== 高三下学期 ====================
    'high-12-2-derivative-apps': generateDefaultContent('high-12-2-derivative-apps', '导数综合应用'),

    // ==================== 随机变量 (Probability II) ====================
    'high-12-2-random-variables': {
        meta: {
            title: "随机变量及其分布 - 高三数学",
            description: "离散型随机变量的分布列、期望与方差。二项分布与正态分布。",
            keywords: "随机变量,期望,方差,正态分布,二项分布"
        },
        info: {
            title: "随机变量",
            description: "上帝掷骰子吗？概率论告诉我们，即使是随机中也蕴含着确定的规律。",
            tags: [
                { text: "高三数学", color: "blue" },
                { text: "概率进阶", color: "indigo" },
                { text: "50分钟", icon: Clock, color: "slate" }
            ]
        },
        tabs: {
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <BarChart2 className="w-6 h-6 text-indigo-600" />
                            互动实验：高尔顿板与正态分布
                        </h2>
                        <div className="mb-6 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl text-slate-700 dark:text-slate-300">
                            <p><strong>实验原理：</strong></p>
                            <p className="mt-2 text-sm">
                                当大量小球落下时，它们在每一层钉子处都以50%概率向左或向右。这种独立的二项选择叠加起来，最终会形成中间高、两边低的钟形曲线——<strong>正态分布</strong>。
                            </p>
                        </div>
                        <GaltonBoardVisualizer />
                    </div>
                </div>
            ),
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">重要分布模型</h2>
                        <div className="grid gap-6">
                            <div className="p-5 bg-slate-50 dark:bg-slate-700/50 rounded-xl border-l-4 border-orange-500">
                                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2">二项分布 B(n, p)</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">n次独立重复试验，成功概率p。</p>
                                <div className="grid grid-cols-2 gap-4 text-sm font-mono">
                                    <div>E(X) = np</div>
                                    <div>D(X) = np(1-p)</div>
                                </div>
                            </div>
                            <div className="p-5 bg-slate-50 dark:bg-slate-700/50 rounded-xl border-l-4 border-indigo-500">
                                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2">正态分布 N(μ, σ²)</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">最常见的连续型分布。"钟形曲线"。</p>
                                <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc list-inside">
                                    <li>μ：对称轴 (均值)</li>
                                    <li>σ：胖瘦程度 (标准差)</li>
                                    <li>3σ原则：99.7%的数据落在 (μ-3σ, μ+3σ) 内</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    },

    'high-12-2-parametric-polar': {
        meta: {
            title: "坐标系与参数方程 - 高三数学",
            description: "极坐标系的建立与互化。参数方程的几何意义与消参方法。",
            keywords: "极坐标,参数方程,消参"
        },
        info: {
            title: "坐标系与参数方程",
            description: "换个角度看世界。有些曲线在直角坐标系下很复杂，但在极坐标下却美得惊人。",
            tags: [
                { text: "高三数学", color: "blue" },
                { text: "选修内容", color: "slate" },
                { text: "30分钟", icon: Clock, color: "slate" }
            ]
        },
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Globe className="w-6 h-6 text-indigo-600" />
                            极坐标系 (Polar Coordinates)
                        </h2>
                        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl mb-6">
                            <p className="font-bold text-lg text-center mb-4">P(ρ, θ)</p>
                            <div className="grid md:grid-cols-2 gap-4 text-center">
                                <div>
                                    <div className="font-bold">ρ (rho)</div>
                                    <div className="text-xs text-slate-500">极径：点到极点的距离</div>
                                </div>
                                <div>
                                    <div className="font-bold">θ (theta)</div>
                                    <div className="text-xs text-slate-500">极角：与极轴的夹角</div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-slate-100 dark:border-slate-700 pt-6">
                            <h3 className="font-bold mb-3 text-slate-800 dark:text-white">互化公式</h3>
                            <div className="grid md:grid-cols-2 gap-4 font-mono bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg">
                                <div>
                                    x = ρ cosθ<br />
                                    y = ρ sinθ
                                </div>
                                <div>
                                    ρ² = x² + y²<br />
                                    tanθ = y/x
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
};

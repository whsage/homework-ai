// Force rebuild
import { Icons, PracticeProblem, Link, React, generateDefaultContent } from './common';
import TrianglePropertiesDiagram from '../../components/subjects/math/diagrams/TrianglePropertiesDiagram';
import ParallelogramDiagram from '../../components/subjects/math/diagrams/ParallelogramDiagram';
import { MousePointer2 } from 'lucide-react';

const {
    Lightbulb, Target, TrendingUp, Clock, Star, Brain, CheckCircle, Sparkles, ChevronRight, Calculator, Award
} = Icons;
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const grade8Content = {
    // ==================== 1. 三角形 ====================
    'mid-8-1-triangles': {
        meta: {
            title: "三角形全等及其判定 | AI7Miao数学",
            description: "学习三角形的三边关系、内角和定理,重点掌握全等三角形的性质和判定方法(SSS, SAS, ASA, AAS, HL)。通过三角形稳定性理解全等判定。",
            keywords: "三角形,全等三角形,SSS,SAS,全等判定,三角形稳定性"
        },
        info: {
            title: "全等三角形",
            description: "如果两块饼干形状大小一模一样,它们就是全等的。全等是几何证明的基石。",
            tags: [
                { text: "几何基础", color: "indigo" },
                { text: "证明核心", color: "red" },
                { text: "40分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生正在学习全等三角形。请引导学生理解为什么'SSA'(边边角)不能判定全等,可以通过举反例的方式。强调三角形的稳定性。",
        aiChatTitle: "AI互动学习:寻找'双胞胎'",
        aiChatIntro: "你能一眼看出两个三角形是不是'双胞胎'吗？让我们学习几种快速识别的方法。",
        aiMessages: [
            { role: 'ai', content: '你见过建筑工地的三角形支架吗？为什么用三角形而不是四边形？' },
            { role: 'user', content: '因为三角形稳定！不会变形！' },
            { role: 'ai', content: <>对！这就是<strong className="text-indigo-600">三角形的稳定性</strong>。三条边确定了,形状就固定了。这给了我们一个判定方法...</> },
            { role: 'user', content: 'SSS！三边对应相等！' },
            { role: 'ai', content: <>完全正确！现在问题来了:如果我只告诉你两边和一个角,能确定三角形吗？</>, type: 'success' },
            { role: 'user', content: '嗯...要看这个角在哪里吧？' },
            { role: 'ai', content: <>太聪明了！如果角是<strong className="text-green-600">两边的夹角</strong>,那就是SAS,可以判定。但如果不是夹角(SSA),就不行了！</> },
            { role: 'user', content: '为什么SSA不行？' },
            { role: 'ai', content: <>好问题！想象一个铰链:固定两边和一个非夹角,第三边可以有两个位置！所以SSA不能保证唯一。</> },
            { role: 'user', content: '明白了！那ASA和AAS呢？' },
            { role: 'ai', content: <>ASA是两角夹一边,AAS是两角和一边。都能判定！记住:<strong className="text-red-600">关键是信息要能唯一确定形状</strong>。</>, type: 'success' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            全等三角形的定义
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">什么是全等？</h3>
                                <p className="text-slate-700 dark:text-slate-300 mb-4">
                                    能够<strong>完全重合</strong>的两个图形叫做全等形。全等三角形的<strong>对应边相等,对应角相等</strong>。
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                    <p className="text-sm mb-2">记号:</p>
                                    <code className="text-lg block">△ABC ≌ △DEF</code>
                                    <p className="text-xs text-slate-500 mt-2">读作:三角形ABC全等于三角形DEF</p>
                                </div>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                                <h3 className="font-bold text-green-700 dark:text-green-400 mb-4 text-lg">三角形的基本性质</h3>
                                <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600">✓</span>
                                        <div><strong>三边关系</strong>: 两边之和大于第三边,两边之差小于第三边</div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600">✓</span>
                                        <div><strong>内角和</strong>: 三角形内角和等于180°</div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600">✓</span>
                                        <div><strong>稳定性</strong>: 三角形具有稳定性(三边确定,形状固定)</div>
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
                                            我们用<strong>三角形支架</strong>的稳定性帮助你理解全等判定。
                                            从实际应用到抽象定理,这是几何学习的有效路径。
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 🔗 知识体系构建 */}
                        <div className="mt-8 bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6 border-l-4 border-indigo-500">
                            <h3 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                                🔗 知识体系构建
                            </h3>
                            <div className="text-slate-600 dark:text-slate-400 text-sm">
                                <p className="mb-2">小学时，我们学习了怎么度量线段长短和角度大小。</p>
                                <p className="mb-2">到了初中，<strong>全等三角形</strong>成了比较线段和角度的最强工具！</p>
                                <p className="font-bold text-indigo-700 dark:text-indigo-400 mt-3">全等三角形的地位</p>
                                <p className="mt-1">证明线段相等、角相等 ➔ 找全等三角形。<br />全等也是后续学习<strong>相似三角形</strong>、<strong>四边形证明</strong>的基石。</p>
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
                            互动实验室：三角形的性质
                        </h2>

                        <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 mb-4">
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                                拖动三角形的三个顶点 <strong>A, B, C</strong>，观察边长和角度的变化。
                                验证以下性质：
                                1. 三角形内角和永远是 180°。
                                2. "大边对大角"。
                            </p>

                            <TrianglePropertiesDiagram />
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Target className="w-6 h-6 text-indigo-600" />
                            全等三角形判定定理
                        </h2>

                        <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-xl border border-indigo-100 dark:border-indigo-800">
                                    <div className="font-bold text-indigo-700 dark:text-indigo-400 mb-2 text-lg">SSS (边边边)</div>
                                    <p className="text-sm text-slate-700 dark:text-slate-300">
                                        三边分别相等的两个三角形全等
                                    </p>
                                    <code className="block mt-2 text-xs bg-white dark:bg-slate-700 p-2 rounded">
                                        AB=DE, BC=EF, CA=FD → △ABC≌△DEF
                                    </code>
                                </div>

                                <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-100 dark:border-blue-800">
                                    <div className="font-bold text-blue-700 dark:text-blue-400 mb-2 text-lg">SAS (边角边)</div>
                                    <p className="text-sm text-slate-700 dark:text-slate-300">
                                        两边和它们的<strong>夹角</strong>分别相等
                                    </p>
                                    <code className="block mt-2 text-xs bg-white dark:bg-slate-700 p-2 rounded">
                                        AB=DE, ∠A=∠D, AC=DF → △ABC≌△DEF
                                    </code>
                                </div>

                                <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border border-green-100 dark:border-green-800">
                                    <div className="font-bold text-green-700 dark:text-green-400 mb-2 text-lg">ASA (角边角)</div>
                                    <p className="text-sm text-slate-700 dark:text-slate-300">
                                        两角和它们的<strong>夹边</strong>分别相等
                                    </p>
                                    <code className="block mt-2 text-xs bg-white dark:bg-slate-700 p-2 rounded">
                                        ∠A=∠D, AB=DE, ∠B=∠E → △ABC≌△DEF
                                    </code>
                                </div>

                                <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border border-purple-100 dark:border-purple-800">
                                    <div className="font-bold text-purple-700 dark:text-purple-400 mb-2 text-lg">AAS (角角边)</div>
                                    <p className="text-sm text-slate-700 dark:text-slate-300">
                                        两角和其中一角的对边分别相等
                                    </p>
                                    <code className="block mt-2 text-xs bg-white dark:bg-slate-700 p-2 rounded">
                                        ∠A=∠D, ∠B=∠E, BC=EF → △ABC≌△DEF
                                    </code>
                                </div>
                            </div>

                            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-100 dark:border-red-800">
                                <h3 className="font-bold text-red-700 dark:text-red-400 mb-4 text-lg">⚠️ 为什么SSA不能判定？</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                                    SSA(边边角)中的角如果不是两边的夹角,可能存在两个不同的三角形满足条件。
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-3 rounded text-xs">
                                    <strong>反例</strong>: 给定两边和一个非夹角,第三边可能有两个位置(长边或短边),
                                    导致两个不全等的三角形都满足条件。
                                </div>
                            </div>
                        </div>

                        {/* 🔍 多角度分析 */}
                        <div className="mt-8 bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800">
                            <h3 className="font-bold text-amber-800 dark:text-amber-400 mb-4 flex items-center gap-2">
                                🔍 多角度分析：判定的本质
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <strong className="text-slate-800 dark:text-white text-sm">尺规作图角度：</strong>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">SSS、SAS、ASA、AAS 代表了能<strong className="text-indigo-600">唯一画出</strong>这个三角形的条件。画图的唯一性决定了三角形形状的唯一性（全等）。</p>
                                </div>
                                <div>
                                    <strong className="text-slate-800 dark:text-white text-sm">自由度角度：</strong>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">一个三角形有3条边和3个角（共6个元素）。如果知道了其中 3 个独立条件（至少一条边），就能把剩下的 3 个元素完全锁死。</p>
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
                            例1:SSS判定
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>在△ABC和△DEF中,AB=DE=3cm, BC=EF=4cm, CA=FD=5cm,判断两三角形是否全等。</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>∵ AB=DE, BC=EF, CA=FD</p>
                            <p>∴ △ABC ≌ △DEF (SSS)</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: 两三角形全等</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例2:SAS判定
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>已知AB=AC, ∠B=∠C, D为BC中点。求证:△ABD ≌ △ACD。</p>
                            <p className="mt-3"><strong>证明:</strong></p>
                            <p>∵ D是BC中点</p>
                            <p>∴ BD=CD</p>
                            <p>在△ABD和△ACD中:</p>
                            <p>AB=AC, ∠B=∠C, BD=CD</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">∴ △ABD ≌ △ACD (SAS)</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例3:三角形内角和
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>在△ABC中,∠A=50°, ∠B=60°,求∠C。</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>∵ 三角形内角和为180°</p>
                            <p>∴ ∠C = 180° - ∠A - ∠B</p>
                            <p>∠C = 180° - 50° - 60° = 70°</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: ∠C = 70°</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={928} type="choice"
                        question="下列条件中,不能判定两个三角形全等的是？"
                        options={[
                            { label: 'A', value: 'SSS' },
                            { label: 'B', value: 'SAS' },
                            { label: 'C', value: 'SSA' },
                            { label: 'D', value: 'ASA' }
                        ]}
                        answer="C"
                        explanation="SSA(边边角)不能保证两个三角形全等,可能出现两个形状不同的三角形。"
                    />
                    <PracticeProblem id={929} type="choice"
                        question="三角形的内角和是？"
                        options={[
                            { label: 'A', value: '90°' },
                            { label: 'B', value: '180°' },
                            { label: 'C', value: '270°' },
                            { label: 'D', value: '360°' }
                        ]}
                        answer="B"
                        explanation="三角形内角和定理:三角形的内角和等于180°。"
                    />
                    <PracticeProblem id={930} type="choice"
                        question="三角形两边长分别为3和5,第三边可能是？"
                        options={[
                            { label: 'A', value: '1' },
                            { label: 'B', value: '2' },
                            { label: 'C', value: '4' },
                            { label: 'D', value: '8' }
                        ]}
                        answer="C"
                        explanation="根据三角形三边关系:5-3<第三边<5+3,即2<第三边<8,只有4符合。"
                    />
                </div>
            )
        }
    },

    // ==================== [NEW] 轴对称 ====================
    'mid-8-1-axial-symmetry': {
        meta: {
            title: "轴对称 - 折叠与重合 | AI7Miao数学",
            description: "探索轴对称图形与成轴对称的区别与联系，掌握垂直平分线的性质。通过剪纸和镜面反射理解对称美。",
            keywords: "轴对称,对称轴,垂直平分线,镜面反射,等腰三角形"
        },
        info: {
            title: "轴对称",
            description: "照镜子时，镜子里的你和真实的你就是轴对称的。这种对称美在自然界和建筑中无处不在。",
            tags: [
                { text: "几何", color: "indigo" },
                { text: "30分钟", icon: Clock, color: "slate" },
                { text: "美学", icon: Star, color: "pink" }
            ]
        },
        aiContext: "学生正在学习轴对称。请引导学生区分'轴对称图形'(一个图形)和'成轴对称'(两个图形的关系)。通过折纸活动引入。",
        aiChatTitle: "AI互动学习:折叠的艺术",
        aiChatIntro: "拿一张纸，对折，剪一个图案，展开。你会得到什么？让我们探索对称的奥秘。",
        aiMessages: [
            { role: 'ai', content: '你玩过剪纸吗？把纸对折，剪出来的图案展开后有什么特点？' },
            { role: 'user', content: '左右两边是一样的！' },
            { role: 'ai', content: <>没错！如果你沿着折痕把纸折回去，两边会<strong className="text-indigo-600">完全重合</strong>。这样的图形就叫<strong>轴对称图形</strong>。这条折痕叫什么？</> },
            { role: 'user', content: '对称轴！' },
            { role: 'ai', content: <>太聪明了！那如果我有两个圆，关于中间一条直线对称，这时候叫什么呢？</> },
            { role: 'user', content: '也是轴对称图形？' },
            { role: 'ai', content: <>有点区别哦！一个是"一个图形"的性质，一个是"两个图形"的位置关系。这叫<strong className="text-purple-600">成轴对称</strong>。但它们的本质都是"对折重合"。</>, type: 'success' },
            { role: 'user', content: '那对称轴有什么性质？' },
            { role: 'ai', content: <>连接任意一对对应点，看看连线和对称轴是什么关系？(垂直？平分？)</>, type: 'success' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            什么是轴对称？
                        </h2>

                        <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-100 dark:border-indigo-800">
                                    <h3 className="font-bold text-indigo-700 dark:text-indigo-400 mb-4 text-lg">轴对称图形</h3>
                                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                                        如果<strong>一个图形</strong>沿一条直线折叠，直线两旁的部分能够完全重合，这个图形就叫做轴对称图形。
                                    </p>
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded text-xs">
                                        <strong>例子:</strong> 圆、正方形、蝴蝶、脸谱
                                    </div>
                                </div>

                                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800">
                                    <h3 className="font-bold text-purple-700 dark:text-purple-400 mb-4 text-lg">成轴对称</h3>
                                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                                        如果<strong>两个图形</strong>沿一条直线折叠，它们能够完全重合，那么说这两个图形成轴对称。
                                    </p>
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded text-xs">
                                        <strong>例子:</strong> 双手、镜子里的像
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                                <div className="flex items-start gap-3">
                                    <Brain className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="font-semibold text-green-700 dark:text-green-400 mb-2">
                                            💡 核心联系
                                        </div>
                                        <div className="text-slate-600 dark:text-slate-400 text-sm">
                                            把成轴对称的两个图形看作一个整体，它就是一个轴对称图形；
                                            把轴对称图形沿对称轴分成两半，这两半就是成轴对称的。
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
                            轴对称的性质
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                                <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-4 text-lg">垂直平分线性质</h3>
                                <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600">1.</span>
                                        <div>对称轴<strong>垂直平分</strong>连接两个对应点的线段。</div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600">2.</span>
                                        <div>对应线段相等，对应角相等。</div>
                                    </li>
                                </ul>
                                <div className="mt-4 bg-white dark:bg-slate-700 p-4 rounded-lg">
                                    <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-2">线段垂直平分线判定</p>
                                    <p className="text-xs text-slate-600 dark:text-slate-400">
                                        到线段两个端点距离相等的点，在这条线段的垂直平分线上。
                                        <br />(PA=PB ⟺ P在线段AB的垂直平分线上)
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
                            例1: 识别轴对称图形
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong> 下列字母中，是轴对称图形的是？</p>
                            <p className="font-mono text-lg tracking-widest my-2">F  G  M  Q</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>F: 上下左右都不对称 ✗</p>
                            <p>G: 不对称 ✗</p>
                            <p>M: 左右对称 ✓ (对称轴是中间竖线)</p>
                            <p>Q: 不对称 ✗</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: M</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例2: 最短路径问题 (将军饮马)
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong> 直线l同侧有A,B两点。在直线l上找一点P，使PA+PB最短。</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>1. 作点A关于直线l的对称点A'。</p>
                            <p>2. 连接A'B，交直线l于点P。</p>
                            <p>3. 根据对称性, PA=PA'。</p>
                            <p>4. 此时PA+PB = PA'+PB = A'B。根据两点之间线段最短，此时距离最小。</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">关键: 利用对称化折线为直线。</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={801} type="choice"
                        question="等腰三角形的对称轴有？"
                        options={[
                            { label: 'A', value: '1条' },
                            { label: 'B', value: '3条' },
                            { label: 'C', value: '1条或3条' },
                            { label: 'D', value: '无数条' }
                        ]}
                        answer="C"
                        explanation="普通等腰三角形只有1条(底边中垂线)；等边三角形有3条。所以选C。"
                    />
                    <PracticeProblem id={802} type="choice"
                        question="下列图形中，不是轴对称图形的是？"
                        options={[
                            { label: 'A', value: '角' },
                            { label: 'B', value: '等腰梯形' },
                            { label: 'C', value: '平行四边形' },
                            { label: 'D', value: '圆' }
                        ]}
                        answer="C"
                        explanation="平行四边形是中心对称图形，但一般不是轴对称图形(除非是菱形或矩形)。A、B、D都是轴对称图形。"
                    />
                    <PracticeProblem id={803} type="choice"
                        question="点A(2,3)关于y轴对称的点的坐标是？"
                        options={[
                            { label: 'A', value: '(-2, 3)' },
                            { label: 'B', value: '(2, -3)' },
                            { label: 'C', value: '(-2, -3)' },
                            { label: 'D', value: '(3, 2)' }
                        ]}
                        answer="A"
                        explanation="关于y轴对称，纵坐标不变，横坐标变号。所以是(-2, 3)。"
                    />
                </div>
            )
        }
    },

    // ==================== [NEW] 实数（平方根） ====================
    'mid-8-1-roots': {
        meta: {
            title: "实数 - 平方根与立方根 | AI7Miao数学",
            description: "认识平方根、算术平方根和立方根。探索无理数(如√2, π)，完善实数系统。通过拼图游戏发现无理数。",
            keywords: "平方根,算术平方根,立方根,无理数,实数,根号2"
        },
        info: {
            title: "实数",
            description: "面积为2的正方形，边长是多少？它不是整数，也不是分数。欢迎来到无理数的世界！",
            tags: [
                { text: "代数", color: "blue" },
                { text: "35分钟", icon: Clock, color: "slate" },
                { text: "基础", icon: Star, color: "green" }
            ]
        },
        aiContext: "学生初次接触无理数。请用'寻找面积为2的正方形边长'作为引入，让学生意识到有理数不够用了。",
        aiChatTitle: "AI导师：寻找神秘的数",
        aiChatIntro: "有的数写不完(无限不循环)，比如π，比如√2。它们藏在哪里？让我们去数轴上抓它们。",
        aiMessages: [
            { role: 'ai', content: '如果一个正方形面积是4，边长是多少？' },
            { role: 'user', content: '是2！因为2×2=4。' },
            { role: 'ai', content: <>那如果面积是2呢？边长是多少？你可以猜一猜。</> },
            { role: 'user', content: '1.5？' },
            { role: 'ai', content: <>1.5×1.5 = 2.25，比2大了。再小一点？</> },
            { role: 'user', content: '1.4？' },
            { role: 'ai', content: <>1.4×1.4 = 1.96，比2小了！其实这个数是个<strong className="text-indigo-600">无限不循环小数</strong>(1.414...)，我们用符号 <strong className="text-indigo-600">√2</strong> 来表示。这就是<strong className="text-purple-600">无理数</strong>。</>, type: 'success' },
            { role: 'user', content: '什么是平方根？' },
            { role: 'ai', content: <>如果一个数的平方等于a，这个数就叫a的平方根。比如±2都是4的平方根，而2是4的<strong className="text-green-600">算术平方根</strong>。</>, type: 'success' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            实数的分类
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">有理数 vs 无理数</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                        <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">有理数</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            整数和分数。
                                            <br />(可以写成 p/q 形式，q≠0)
                                            <br />包括有限小数和无限循环小数。
                                        </p>
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                        <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-2">无理数</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            <strong>无限不循环小数</strong>。
                                            <br />常见的有: π, √2, √3, 0.1010010001...
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-600 shadow-sm">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-4">平方根与立方根</h3>
                                <table className="w-full text-sm text-left">
                                    <thead>
                                        <tr className="border-b dark:border-slate-600">
                                            <th className="py-2">名称</th>
                                            <th className="py-2">定义 (若xⁿ=a)</th>
                                            <th className="py-2">符号</th>
                                            <th className="py-2">性质</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600 dark:text-slate-400">
                                        <tr className="border-b dark:border-slate-600">
                                            <td className="py-3 font-bold text-indigo-600">算术平方根</td>
                                            <td>x²=a (x≥0)</td>
                                            <td>√a</td>
                                            <td>只有非负数才有 (a≥0)</td>
                                        </tr>
                                        <tr className="border-b dark:border-slate-600">
                                            <td className="py-3 font-bold text-blue-600">平方根</td>
                                            <td>x²=a</td>
                                            <td>±√a</td>
                                            <td>正数有两个(互为相反数)，0有一个(0)</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 font-bold text-green-600">立方根</td>
                                            <td>x³=a</td>
                                            <td>∛a</td>
                                            <td>任何数都有唯一的立方根</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* 🔗 知识体系构建 */}
                        <div className="mt-8 bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6 border-l-4 border-indigo-500">
                            <h3 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                                🔗 知识体系构建
                            </h3>
                            <div className="text-slate-600 dark:text-slate-400 text-sm">
                                <p className="mb-2">我们以前学的<strong>有理数</strong>（整数和分数）能表示有限小数和无限循环小数。</p>
                                <p className="mb-2">今天我们发现了<strong>无理数</strong>（无限不循环小数），填补了数轴上的最后一些"空隙"。</p>
                                <p className="font-bold text-indigo-700 dark:text-indigo-400 mt-3">有理数 + 无理数 = 实数(Real Numbers)</p>
                                <p className="mt-1">至此，数轴上的每一个点都有一个对应的实数，每一个实数在数轴上都有唯一的一个点。这叫<strong className="text-red-600">一一对应</strong>。</p>
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
                            重要性质与运算
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-100 dark:border-orange-800">
                                <h3 className="font-bold text-orange-700 dark:text-orange-400 mb-2">双重非负性</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300">
                                    对于 √a:
                                </p>
                                <ul className="list-disc list-inside mt-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li>被开方数非负: <strong>a ≥ 0</strong></li>
                                    <li>算术平方根非负: <strong>√a ≥ 0</strong></li>
                                </ul>
                            </div>
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
                                <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-2">重要公式</h3>
                                <ul className="list-disc list-inside mt-2 text-sm text-slate-600 dark:text-slate-400 space-y-2">
                                    <li>(√a)² = a  (a ≥ 0)</li>
                                    <li>√(a²) = |a| (很重要! 比如 √(-2)² = 2)</li>
                                    <li>(∛a)³ = a</li>
                                </ul>
                            </div>
                        </div>

                        {/* 🔍 多角度分析 */}
                        <div className="mt-8 bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800">
                            <h3 className="font-bold text-amber-800 dark:text-amber-400 mb-4 flex items-center gap-2">
                                🔍 多角度分析：平方与开平方
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <strong className="text-slate-800 dark:text-white text-sm">互逆运算角度：</strong>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">就像加法和减法、乘法和除法，<strong className="text-indigo-600">平方和开平方</strong>也是一对互逆运算。已知正方形边长求面积是平方；已知面积求边长是开平方。</p>
                                </div>
                                <div>
                                    <strong className="text-slate-800 dark:text-white text-sm">几何构造角度：</strong>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">古希腊人发现 √2，是因为他们画了一个直角边为 1 的等腰直角三角形。根据勾股定理，斜边长为 √2。无理数是客观存在的几何长度！</p>
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
                            例1: 求平方根
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong> 求 16 的平方根和算术平方根。</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>∵ (±4)² = 16</p>
                            <p>∴ 16 的平方根是 ±4</p>
                            <p>16 的<strong>算术平方根</strong>是 4 (即 √16 = 4)</p>
                            <p className="text-orange-600 dark:text-orange-400 text-xs">注意: "√16" 表示 16 的算术平方根，所以 √16 = 4，不是 ±4。</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例2: 化简与估算
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong> 计算 √(−3)² + ∛−27。</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>1. √(−3)² = √9 = 3 (或者用 |−3| = 3)</p>
                            <p>2. ∛−27 = −3 (因为 (−3)³ = −27)</p>
                            <p>3. 原式 = 3 + (−3) = 0</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: 0</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={806} type="choice"
                        question="√16 的值是？"
                        options={[
                            { label: 'A', value: '4' },
                            { label: 'B', value: '-4' },
                            { label: 'C', value: '±4' },
                            { label: 'D', value: '8' }
                        ]}
                        answer="A"
                        explanation="根号(√)表示算术平方根，结果必须是非负数。所以 √16 = 4。"
                    />
                    <PracticeProblem id={807} type="choice"
                        question="下列说法正确的是？"
                        options={[
                            { label: 'A', value: '-4没有立方根' },
                            { label: 'B', value: '1的平方根是1' },
                            { label: 'C', value: '√(−5)² = -5' },
                            { label: 'D', value: '√2 是无理数' }
                        ]}
                        answer="D"
                        explanation="A: 负数有立方根；B: 1的平方根是±1；C: √(−5)² = 5。故D正确。"
                    />
                    <PracticeProblem id={808} type="choice"
                        question="估算 √10 的值在？"
                        options={[
                            { label: 'A', value: '1和2之间' },
                            { label: 'B', value: '2和3之间' },
                            { label: 'C', value: '3和4之间' },
                            { label: 'D', value: '4和5之间' }
                        ]}
                        answer="C"
                        explanation="因为 3²=9，4²=16，而 9 < 10 < 16，所以 3 < √10 < 4。"
                    />
                </div>
            )
        }
    },

    // ==================== 2. 因式分解 ====================
    'mid-8-1-factorization': {
        meta: {
            title: "因式分解 - 提公因式与公式法 | AI7Miao数学",
            description: "掌握提取公因式法和公式法（平方差、完全平方公式）分解因式,理解因式分解与整式乘法的互逆关系。通过乐高积木比喻,理解分解过程。",
            keywords: "因式分解,提公因式,公式法,完全平方公式,平方差公式"
        },
        info: {
            title: "因式分解",
            description: "把一个多项式化成几个整式的积的形式。它在解方程、分式运算中非常有用。",
            tags: [
                { text: "代数运算", color: "blue" },
                { text: "40分钟", icon: Clock, color: "slate" },
                { text: "重要", icon: Star, color: "orange" }
            ]
        },
        aiContext: "学生学习因式分解。请强调因式分解要'分解彻底'。如果是 x³ - x，要先提 x，再用平方差公式。引导学生发现分解步骤。",
        aiChatTitle: "AI互动学习:拆解多项式",
        aiChatIntro: "通过乐高积木的比喻,你将理解因式分解的本质。这比直接背公式理解更深刻。",
        aiMessages: [
            { role: 'ai', content: '你玩过乐高吗？如果我给你一个拼好的模型,你能把它拆回基础积木块吗？' },
            { role: 'user', content: '可以！就是把它拆开。' },
            { role: 'ai', content: <>很好！因式分解就像拆乐高。看这个式子：<code className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">2x + 4</code>，你发现什么共同的部分吗？</> },
            { role: 'user', content: '2！两项都有2。' },
            { role: 'ai', content: <>太棒了！我们可以把2"提"出来：<code className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">2x + 4 = 2(x + 2)</code>。这就是<strong className="text-indigo-600">提公因式</strong>！</>, type: 'success' },
            { role: 'user', content: '明白了！就像找到共同的积木块！' },
            { role: 'ai', content: <>现在看这个：<code className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">x² - 4</code>，你能想到什么公式吗？</> },
            { role: 'user', content: '这是平方差！x² - 2²！' },
            { role: 'ai', content: <>完全正确！<code className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">x² - 4 = (x+2)(x-2)</code>。你已经掌握了因式分解的精髓：<strong className="text-green-600">把多项式拆成几个因式的积</strong>！</>, type: 'success' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    {/* 什么是因式分解 */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            什么是因式分解？
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">定义</h3>
                                <p className="text-slate-700 dark:text-slate-300 mb-4">
                                    把一个<strong>多项式</strong>化成几个<strong>整式的积</strong>的形式,这种变形叫做把这个多项式<strong>因式分解</strong>。
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-2">整式乘法 →</div>
                                            <code className="text-sm">2(x + 3) = 2x + 6</code>
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-green-600 dark:text-green-400 mb-2">← 因式分解</div>
                                            <code className="text-sm">2x + 6 = 2(x + 3)</code>
                                        </div>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-3 text-center">因式分解是整式乘法的逆过程</p>
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
                                            我们用<strong>乐高积木</strong>的比喻帮助你理解因式分解,这是<strong>类比学习法</strong>。
                                            通过"拆解"这个熟悉的动作,让抽象的数学运算变得具体可感。
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 基本方法 */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Target className="w-6 h-6 text-indigo-600" />
                            因式分解的基本方法
                        </h2>

                        <div className="space-y-6">
                            {/* 提公因式法 */}
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                                <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-4 text-lg">1. 提公因式法</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                                    如果多项式的各项有<strong>公因式</strong>,可以把这个公因式提取出来。
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                    <div className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">公式</div>
                                    <code className="text-lg">ma + mb + mc = m(a + b + c)</code>
                                    <div className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                                        <p className="font-bold mb-1">例如:</p>
                                        <code className="block">2x + 4 = 2(x + 2)</code>
                                        <code className="block">3x² + 6x = 3x(x + 2)</code>
                                    </div>
                                </div>
                            </div>

                            {/* 公式法 */}
                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                                <h3 className="font-bold text-green-700 dark:text-green-400 mb-4 text-lg">2. 公式法</h3>
                                <div className="space-y-4">
                                    <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                        <div className="font-bold text-green-600 dark:text-green-400 mb-2">平方差公式</div>
                                        <code className="text-lg block mb-2">a² - b² = (a + b)(a - b)</code>
                                        <div className="text-sm text-slate-600 dark:text-slate-400">
                                            <p className="font-bold mb-1">例如:</p>
                                            <code className="block">x² - 4 = x² - 2² = (x+2)(x-2)</code>
                                            <code className="block">9 - y² = 3² - y² = (3+y)(3-y)</code>
                                        </div>
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                        <div className="font-bold text-green-600 dark:text-green-400 mb-2">完全平方公式</div>
                                        <code className="text-lg block mb-2">a² ± 2ab + b² = (a ± b)²</code>
                                        <div className="text-sm text-slate-600 dark:text-slate-400">
                                            <p className="font-bold mb-1">例如:</p>
                                            <code className="block">x² + 4x + 4 = x² + 2·x·2 + 2² = (x+2)²</code>
                                            <code className="block">x² - 6x + 9 = x² - 2·x·3 + 3² = (x-3)²</code>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 分解步骤 */}
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-100 dark:border-orange-800">
                                <h3 className="font-bold text-orange-700 dark:text-orange-400 mb-4 text-lg">分解步骤</h3>
                                <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                    <li><strong>一提</strong>：先看有没有公因式,有就先提取</li>
                                    <li><strong>二套</strong>：再看能不能套用公式</li>
                                    <li><strong>三检查</strong>：检查是否分解彻底</li>
                                </ol>
                                <div className="mt-3 p-3 bg-white dark:bg-slate-700 rounded-lg">
                                    <p className="text-sm font-bold text-orange-600 dark:text-orange-400 mb-1">⚠️ 重要提示</p>
                                    <p className="text-xs text-slate-600 dark:text-slate-400">分解要<strong>彻底</strong>,直到不能再分解为止！</p>
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
                            因式分解的注意事项
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-100 dark:border-red-800">
                                <h3 className="font-bold text-red-700 dark:text-red-400 mb-4 text-lg">易错点提示</h3>
                                <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 dark:text-red-400">❌</span>
                                        <div>
                                            <strong>分解不彻底</strong>
                                            <div className="text-xs text-slate-500 mt-1">
                                                错误: x³ - x = x(x² - 1) ✗<br />
                                                正确: x³ - x = x(x² - 1) = x(x+1)(x-1) ✓
                                            </div>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 dark:text-red-400">❌</span>
                                        <div>
                                            <strong>提负号时忘记变号</strong>
                                            <div className="text-xs text-slate-500 mt-1">
                                                错误: -x² + 4x = -x(x + 4) ✗<br />
                                                正确: -x² + 4x = -x(x - 4) ✓
                                            </div>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 dark:text-red-400">❌</span>
                                        <div>
                                            <strong>结果不是积的形式</strong>
                                            <div className="text-xs text-slate-500 mt-1">
                                                错误: x² - 4 = x² - 2² ✗ (这只是变形,不是分解)<br />
                                                正确: x² - 4 = (x+2)(x-2) ✓ (积的形式)
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                                <h3 className="font-bold text-green-700 dark:text-green-400 mb-4 text-lg">检查方法</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                                    分解完成后,可以用<strong>乘法验证</strong>:把分解的结果乘开,看是否等于原式。
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg text-sm">
                                    <p className="font-bold mb-2">例如:</p>
                                    <code className="block">x² - 4 = (x+2)(x-2)</code>
                                    <p className="mt-2">验证: (x+2)(x-2) = x² - 2x + 2x - 4 = x² - 4 ✓</p>
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
                            例1:提公因式法
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>分解因式:</strong>3x² + 6x</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>观察:两项都有公因式 3x</p>
                            <p>提取公因式:3x² + 6x = 3x(x + 2)</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答案:3x(x + 2)</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例2:平方差公式
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>分解因式:</strong>x² - 9</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>x² - 9 = x² - 3²</p>
                            <p>套用平方差公式 a² - b² = (a+b)(a-b)</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">= (x+3)(x-3)</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例3:完全平方公式
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>分解因式:</strong>x² - 4x + 4</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>x² - 4x + 4 = x² - 2·x·2 + 2²</p>
                            <p>套用完全平方公式 a² - 2ab + b² = (a-b)²</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">= (x-2)²</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例4:综合运用(先提后套)
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>分解因式:</strong>2x³ - 8x</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>第一步:提公因式 2x</p>
                            <p>2x³ - 8x = 2x(x² - 4)</p>
                            <p>第二步:继续分解 x² - 4</p>
                            <p>= 2x(x² - 2²)</p>
                            <p>= 2x(x+2)(x-2)</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答案:2x(x+2)(x-2)</p>
                            <p className="text-orange-600 dark:text-orange-400 text-xs mt-2">⚠️ 注意:一定要分解彻底!</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={907} type="choice"
                        question="分解因式 x² - 4x + 4 的结果是？"
                        options={[
                            { label: 'A', value: '(x-2)(x+2)' },
                            { label: 'B', value: '(x-2)²' },
                            { label: 'C', value: '(x+2)²' },
                            { label: 'D', value: 'x(x-4)+4' }
                        ]}
                        answer="B"
                        explanation="这是完全平方公式 a² - 2ab + b² = (a-b)² 的形式。a=x, b=2，所以 x² - 4x + 4 = (x-2)²。"
                    />
                    <PracticeProblem id={908} type="choice"
                        question="分解因式 3x + 6 的结果是？"
                        options={[
                            { label: 'A', value: '3(x+6)' },
                            { label: 'B', value: '3(x+2)' },
                            { label: 'C', value: 'x(3+6)' },
                            { label: 'D', value: '(3+x)(3+2)' }
                        ]}
                        answer="B"
                        explanation="提取公因式3：3x + 6 = 3(x + 2)。"
                    />
                    <PracticeProblem id={909} type="choice"
                        question="分解因式 x² - 16 的结果是？"
                        options={[
                            { label: 'A', value: '(x-4)²' },
                            { label: 'B', value: '(x+4)²' },
                            { label: 'C', value: '(x+4)(x-4)' },
                            { label: 'D', value: 'x(x-16)' }
                        ]}
                        answer="C"
                        explanation="这是平方差公式：x² - 16 = x² - 4² = (x+4)(x-4)。"
                    />
                </div>
            )
        }
    },

    // ==================== 3. 分式 ====================
    'mid-8-1-fractions': {
        meta: {
            title: "分式的性质与运算 | AI7Miao数学",
            description: "理解分式的概念,掌握分式的通分、约分及加减乘除混合运算,学会解分式方程。特别强调检验增根的重要性。",
            keywords: "分式,分式方程,通分,约分,增根检验"
        },
        info: {
            title: "分式",
            description: "整式除以整式,如果除式中含有字母,就叫分式。注意分母不能为零哦!",
            tags: [
                { text: "代数运算", color: "blue" },
                { text: "30分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生在解分式方程。请务必提醒学生'检验',解释如果不验根可能会出现增根导致错误。引导学生理解为什么会产生增根。",
        aiChatTitle: "AI互动学习:分母为零的陷阱",
        aiChatIntro: "通过实例,你将理解为什么解分式方程必须检验。这个步骤看似麻烦,实则关键!",
        aiMessages: [
            { role: 'ai', content: <>看这个分式：<code className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">1/x</code>，当 x = 0 时会发生什么？</> },
            { role: 'user', content: '分母为0,没有意义!' },
            { role: 'ai', content: <>完全正确!这就是为什么分式有个重要限制：<strong className="text-red-600">分母不能为0</strong>。现在看这个方程：<code className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">1/x = 2</code>，你会怎么解？</> },
            { role: 'user', content: '两边乘x,得 1 = 2x,所以 x = 1/2' },
            { role: 'ai', content: <>很好!但如果方程是 <code className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">1/(x-2) = 3</code> 呢？</> },
            { role: 'user', content: '两边乘(x-2),得 1 = 3(x-2),解得 x = 7/3' },
            { role: 'ai', content: <>对了!但你注意到了吗？我们在"去分母"时,把原来的限制条件 x≠2 给"丢"了。如果解出来的 x 恰好等于2,那就麻烦了!</> },
            { role: 'user', content: '明白了!所以要检验解是否使分母为0!' },
            { role: 'ai', content: <>完全正确!这就是<strong className="text-indigo-600">检验增根</strong>的意义。去分母后可能产生使原分母为0的"假根",我们必须把它们排除掉!</>, type: 'success' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            什么是分式？
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">定义</h3>
                                <p className="text-slate-700 dark:text-slate-300 mb-4">
                                    形如 <strong>A/B</strong> 的式子,如果B中<strong>含有字母</strong>,就叫做<strong>分式</strong>。
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                    <p className="text-sm mb-2">例如:</p>
                                    <code className="block">1/x,  (x+1)/(x-2),  2/(x²+1)</code>
                                </div>
                            </div>

                            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
                                <div className="flex items-start gap-3">
                                    <div className="text-2xl">⚠️</div>
                                    <div>
                                        <div className="font-semibold text-red-700 dark:text-red-400 mb-2">
                                            重要限制
                                        </div>
                                        <div className="text-slate-600 dark:text-slate-400 text-sm">
                                            分式的<strong>分母不能为0</strong>!这是分式有意义的前提条件。
                                        </div>
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
                                            我们通过<strong>对话引导</strong>让你自己发现为什么要检验增根,而不是直接告诉你"必须检验"。
                                            这基于<strong>发现学习理论</strong>,让你理解规则背后的原因。
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Target className="w-6 h-6 text-indigo-600" />
                            分式的基本性质
                        </h2>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                            <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-4 text-lg">基本性质</h3>
                            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                                分式的分子与分母同时<strong>乘以</strong>(或<strong>除以</strong>)同一个<strong>不为0的整式</strong>,分式的值不变。
                            </p>
                            <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                <code className="block mb-2">a/b = (a×m)/(b×m)  (m≠0)</code>
                                <code className="block">a/b = (a÷m)/(b÷m)  (m≠0)</code>
                                <p className="text-xs text-slate-500 mt-3">这是约分和通分的理论依据</p>
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
                            分式方程的解法
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                                <h3 className="font-bold text-green-700 dark:text-green-400 mb-4 text-lg">解题步骤</h3>
                                <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                    <li><strong>去分母</strong>:方程两边同乘最简公分母</li>
                                    <li><strong>解整式方程</strong>:得到方程的解</li>
                                    <li><strong>检验</strong>:把解代入最简公分母,看是否为0</li>
                                    <li><strong>写结论</strong>:舍去使分母为0的增根</li>
                                </ol>
                            </div>

                            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-100 dark:border-orange-800">
                                <h3 className="font-bold text-orange-700 dark:text-orange-400 mb-4 text-lg">⚠️ 为什么要检验？</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                                    去分母时,我们把原方程的限制条件(分母≠0)给"丢"了,可能产生<strong>增根</strong>。
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg text-sm">
                                    <p className="font-bold mb-2">例如:</p>
                                    <p>原方程: 1/(x-2) = 3  (限制: x≠2)</p>
                                    <p>去分母后: 1 = 3(x-2)  (限制消失了!)</p>
                                    <p className="text-orange-600 dark:text-orange-400 mt-2">
                                        如果解出 x=2,虽然满足去分母后的方程,但不满足原方程!
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
                            例1:解分式方程
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>解方程:</strong>2/x = 3/(x-1)</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>两边同乘 x(x-1) 得:</p>
                            <p>2(x-1) = 3x</p>
                            <p>2x - 2 = 3x</p>
                            <p>-x = 2</p>
                            <p>x = -2</p>
                            <p className="mt-2"><strong>检验:</strong></p>
                            <p>当 x=-2 时,x(x-1) = (-2)(-3) = 6 ≠ 0</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">∴ x = -2 是原方程的解</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例2:分式值为0
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>若分式 (x-1)/(x+2) 的值为0,则 x 的值是？</strong></p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>分式值为0 ⟺ 分子为0且分母不为0</p>
                            <p>分子为0: x - 1 = 0,得 x = 1</p>
                            <p>检验分母: 当 x=1 时,x+2 = 3 ≠ 0 ✓</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">∴ x = 1</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例3:约分
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>化简:</strong>(x²-4)/(x²-4x+4)</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>分子: x² - 4 = (x+2)(x-2)</p>
                            <p>分母: x² - 4x + 4 = (x-2)²</p>
                            <p>原式 = [(x+2)(x-2)] / [(x-2)²]</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">= (x+2)/(x-2)</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={910} type="choice"
                        question="若分式 (x-1)/(x+2) 的值为0,则 x 的值是？"
                        options={[
                            { label: 'A', value: '1' },
                            { label: 'B', value: '-2' },
                            { label: 'C', value: '1或-2' },
                            { label: 'D', value: '无解' }
                        ]}
                        answer="A"
                        explanation="分式值为0,意味着分子为0且分母不为0。x-1=0 得 x=1；此时分母 1+2=3≠0。所以 x=1。"
                    />
                    <PracticeProblem id={911} type="choice"
                        question="分式 1/x 有意义的条件是？"
                        options={[
                            { label: 'A', value: 'x≠0' },
                            { label: 'B', value: 'x>0' },
                            { label: 'C', value: 'x<0' },
                            { label: 'D', value: 'x为任意实数' }
                        ]}
                        answer="A"
                        explanation="分式有意义的条件是分母不为0,所以 x≠0。"
                    />
                    <PracticeProblem id={912} type="choice"
                        question="化简 (x²-1)/(x-1) 的结果是？"
                        options={[
                            { label: 'A', value: 'x+1' },
                            { label: 'B', value: 'x-1' },
                            { label: 'C', value: 'x' },
                            { label: 'D', value: '1' }
                        ]}
                        answer="A"
                        explanation="x²-1 = (x+1)(x-1),所以 (x²-1)/(x-1) = (x+1)(x-1)/(x-1) = x+1。"
                    />
                </div>
            )
        }
    },

    // ==================== 4. 二元一次方程组 ====================
    'mid-8-1-binary-equations': {
        meta: {
            title: "二元一次方程组 - 代入与加减消元 | AI7Miao数学",
            description: "学习代入消元法和加减消元法解二元一次方程组,解决鸡兔同笼等实际应用问题。通过实例理解消元思想。",
            keywords: "二元一次方程组,消元法,鸡兔同笼,代入法,加减法"
        },
        info: {
            title: "二元一次方程组",
            description: "含有两个未知数。核心思想是'消元'——把二元转化为一元来解决。",
            tags: [
                { text: "代数", color: "blue" },
                { text: "35分钟", icon: Clock, color: "slate" },
                { text: "实用", icon: Star, color: "green" }
            ]
        },
        aiContext: "学生学习消元法。请引导学生观察方程组的特点,判断是用代入法简单还是加减法简单。用鸡兔同笼问题帮助理解。",
        aiChatTitle: "AI互动学习:各个击破",
        aiChatIntro: "通过鸡兔同笼问题,你将理解消元的智慧。这比直接套公式理解更深刻。",
        aiMessages: [
            { role: 'ai', content: '鸡兔同笼:共35个头,94只脚。你能算出鸡和兔各多少只吗？' },
            { role: 'user', content: '嗯...两个未知数,好复杂！' },
            { role: 'ai', content: <>对！设鸡x只,兔y只。你能列出方程吗？</> },
            { role: 'user', content: 'x + y = 35 (头的数量)\n2x + 4y = 94 (脚的数量)' },
            { role: 'ai', content: <>完全正确！现在有两个方程,两个未知数。关键是<strong className="text-indigo-600">消元</strong>:先解决一个,再解决另一个。看第一个方程,你能把x用y表示吗？</>, type: 'success' },
            { role: 'user', content: 'x = 35 - y' },
            { role: 'ai', content: <>太棒了！现在把这个代入第二个方程,就只剩y了！这就是<strong className="text-green-600">代入消元法</strong>。</> },
            { role: 'user', content: '2(35-y) + 4y = 94,解得 y = 12,所以 x = 23' },
            { role: 'ai', content: <>完美！鸡23只,兔12只。你已经掌握了消元的精髓：<strong className="text-red-600">化二元为一元,逐个击破</strong>！</>, type: 'success' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            消元思想
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">核心思想</h3>
                                <p className="text-slate-700 dark:text-slate-300 mb-4">
                                    <strong>消元</strong>:通过代入或加减,消去一个未知数,把二元方程组转化为一元方程。
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-100 dark:border-yellow-800">
                                    <h3 className="font-bold text-yellow-700 dark:text-yellow-400 mb-4 text-lg">代入消元法</h3>
                                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                                        把一个方程变形,用一个未知数表示另一个,代入另一个方程。
                                    </p>
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded text-xs">
                                        <strong>适用场景:</strong> 某个未知数系数为1或-1
                                    </div>
                                </div>

                                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                                    <h3 className="font-bold text-green-700 dark:text-green-400 mb-4 text-lg">加减消元法</h3>
                                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                                        两个方程相加或相减,消去系数相同(或相反)的未知数。
                                    </p>
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded text-xs">
                                        <strong>适用场景:</strong> 某个未知数系数相同或互为相反数
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
                                            我们用<strong>鸡兔同笼</strong>这个经典问题帮助你理解消元思想。
                                            通过具体问题,让抽象的消元方法变得可以理解和应用。
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
                            <TrendingUp className="w-6 h-6 text-indigo-600" />
                            解题步骤与方法选择
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-100 dark:border-orange-800">
                                <h3 className="font-bold text-orange-700 dark:text-orange-400 mb-4 text-lg">代入消元法步骤</h3>
                                <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                    <li><strong>变形</strong>:选一个方程,用一个未知数表示另一个</li>
                                    <li><strong>代入</strong>:代入另一个方程,得到一元方程</li>
                                    <li><strong>求解</strong>:解一元方程</li>
                                    <li><strong>回代</strong>:把解代入,求另一个未知数</li>
                                </ol>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                                <h3 className="font-bold text-green-700 dark:text-green-400 mb-4 text-lg">加减消元法步骤</h3>
                                <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                    <li><strong>观察</strong>:找系数相同或相反的未知数</li>
                                    <li><strong>变形</strong>:必要时乘以适当的数,使某个未知数系数相同或相反</li>
                                    <li><strong>加减</strong>:两式相加或相减,消去一个未知数</li>
                                    <li><strong>求解</strong>:解一元方程,再回代求另一个</li>
                                </ol>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                                <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-3">💡 方法选择技巧</h3>
                                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                    <li>• 某个未知数系数为1或-1 → <strong>代入法</strong></li>
                                    <li>• 某个未知数系数相同或相反 → <strong>加减法</strong></li>
                                    <li>• 两种方法都可以时,选择计算简单的</li>
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
                            例1:鸡兔同笼(代入法)
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>鸡兔同笼,共35个头,94只脚,求鸡兔各多少只？</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>设鸡x只,兔y只</p>
                            <p>x + y = 35 ①</p>
                            <p>2x + 4y = 94 ②</p>
                            <p>由①得: x = 35 - y ③</p>
                            <p>把③代入②: 2(35-y) + 4y = 94</p>
                            <p>70 - 2y + 4y = 94</p>
                            <p>2y = 24, y = 12</p>
                            <p>把y=12代入③: x = 35 - 12 = 23</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: 鸡23只,兔12只</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例2:加减消元法
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>解方程组:</strong></p>
                            <p>{'{ 3x + 2y = 8 ①, 3x - 2y = 2 ② }'}</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>①+②得: 6x = 10, x = 5/3</p>
                            <p>把x=5/3代入①: 3×(5/3) + 2y = 8</p>
                            <p>5 + 2y = 8, y = 3/2</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答案: x = 5/3, y = 3/2</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例3:应用题
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>甲乙两数之和为100,甲数的2倍比乙数大20,求甲乙两数。</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>设甲为x,乙为y</p>
                            <p>x + y = 100 ①</p>
                            <p>2x = y + 20 ②</p>
                            <p>由②得: 2x - y = 20 ③</p>
                            <p>①+③得: 3x = 120, x = 40</p>
                            <p>把x=40代入①: 40 + y = 100, y = 60</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: 甲为40,乙为60</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={919} type="choice"
                        question="解方程组 { x + y = 5, x - y = 1 },结果是？"
                        options={[
                            { label: 'A', value: 'x=3, y=2' },
                            { label: 'B', value: 'x=2, y=3' },
                            { label: 'C', value: 'x=4, y=1' },
                            { label: 'D', value: 'x=1, y=4' }
                        ]}
                        answer="A"
                        explanation="两式相加:2x = 6, x = 3。代入第一式:3 + y = 5, y = 2。"
                    />
                    <PracticeProblem id={920} type="choice"
                        question="解方程组 { 2x + y = 7, x + y = 4 },应该选择什么方法最简单？"
                        options={[
                            { label: 'A', value: '代入法' },
                            { label: 'B', value: '加减法' },
                            { label: 'C', value: '两种都一样' },
                            { label: 'D', value: '无法求解' }
                        ]}
                        answer="B"
                        explanation="两个方程中y的系数都是1,用加减法最简单:两式相减得 x = 3。"
                    />
                    <PracticeProblem id={921} type="choice"
                        question="某班男女生共40人,男生比女生多4人,女生有多少人？"
                        options={[
                            { label: 'A', value: '16人' },
                            { label: 'B', value: '18人' },
                            { label: 'C', value: '20人' },
                            { label: 'D', value: '22人' }
                        ]}
                        answer="B"
                        explanation="设男生x人,女生y人。x+y=40, x-y=4。解得y=18。"
                    />
                </div>
            )
        }
    },

    // ==================== 5. 四边形 ====================
    'mid-8-2-quadrilaterals': {
        meta: {
            title: "平行四边形与特殊四边形 | AI7Miao数学",
            description: "学习平行四边形、矩形、菱形、正方形的性质与判定,理清它们的包含关系。通过几何家族谱理解特殊四边形之间的关系。",
            keywords: "四边形,平行四边形,矩形,菱形,正方形,几何家族"
        },
        info: {
            title: "四边形",
            description: "从不规则到规则,正方形是四边形家族中最完美的成员。掌握判定树是关键。",
            tags: [
                { text: "几何", color: "indigo" },
                { text: "判定", color: "red" },
                { text: "35分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生容易混淆矩形和菱形的判定。请用集合图(Venn diagram)的思想解释正方形既是矩形又是菱形。强调包含关系。",
        aiChatTitle: "AI互动学习:几何家族谱",
        aiChatIntro: "平行四边形、矩形、菱形...它们之间也是'亲戚'关系。你能理清这个家谱吗？",
        aiMessages: [
            { role: 'ai', content: '你见过家族族谱吗？爷爷、爸爸、孙子...四边形也有这样的关系！' },
            { role: 'user', content: '真的吗？怎么说？' },
            { role: 'ai', content: <>对！<strong className="text-indigo-600">平行四边形</strong>是"爷爷",它的特点是两组对边分别平行。现在如果给它加一个条件...</> },
            { role: 'user', content: '加什么条件？' },
            { role: 'ai', content: <>如果有一个角是直角,就变成了<strong className="text-blue-600">矩形</strong>！如果有一组邻边相等,就变成了<strong className="text-green-600">菱形</strong>！</>, type: 'success' },
            { role: 'user', content: '那正方形呢？' },
            { role: 'ai', content: <>好问题！正方形既有直角,又有相等的边。所以它<strong className="text-red-600">既是矩形又是菱形</strong>！是最特殊的"孙子"！</> },
            { role: 'user', content: '明白了！所以正方形拥有矩形和菱形的所有性质！' },
            { role: 'ai', content: <>完全正确！这就是<strong>包含关系</strong>:正方形⊂菱形⊂平行四边形,正方形⊂矩形⊂平行四边形。理解这个家谱,四边形就不难了！</>, type: 'success' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            四边形家族谱
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">包含关系</h3>
                                <div className="bg-white dark:bg-slate-700 p-5 rounded-lg">
                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl">🔵</span>
                                            <strong className="text-indigo-600">平行四边形</strong>
                                            <span className="text-slate-600 dark:text-slate-400">- 两组对边分别平行</span>
                                        </div>
                                        <div className="flex items-center gap-2 pl-8">
                                            <span className="text-slate-400">├──</span>
                                            <span className="text-2xl">🟡</span>
                                            <strong className="text-blue-600">矩形</strong>
                                            <span className="text-slate-600 dark:text-slate-400">- 有一个角是直角</span>
                                        </div>
                                        <div className="flex items-center gap-2 pl-8">
                                            <span className="text-slate-400">├──</span>
                                            <span className="text-2xl">🟢</span>
                                            <strong className="text-green-600">菱形</strong>
                                            <span className="text-slate-600 dark:text-slate-400">- 有一组邻边相等</span>
                                        </div>
                                        <div className="flex items-center gap-2 pl-16">
                                            <span className="text-slate-400">└──</span>
                                            <span className="text-2xl">🔴</span>
                                            <strong className="text-red-600">正方形</strong>
                                            <span className="text-slate-600 dark:text-slate-400">- 既是矩形又是菱形</span>
                                        </div>
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
                                            我们用<strong>家族谱</strong>的比喻帮助你理解四边形的包含关系。
                                            通过集合思想,让抽象的几何关系变得清晰可见。
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
                            性质与判定
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-100 dark:border-indigo-800">
                                <h3 className="font-bold text-indigo-700 dark:text-indigo-400 mb-4 text-lg">平行四边形</h3>
                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded">
                                        <strong>性质</strong>:
                                        <ul className="mt-2 space-y-1 text-xs">
                                            <li>• 对边平行且相等</li>
                                            <li>• 对角相等</li>
                                            <li>• 对角线互相平分</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded">
                                        <strong>判定</strong>:
                                        <ul className="mt-2 space-y-1 text-xs">
                                            <li>• 两组对边分别平行</li>
                                            <li>• 两组对边分别相等</li>
                                            <li>• 对角线互相平分</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                                <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-4 text-lg">矩形</h3>
                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded">
                                        <strong>性质</strong>:
                                        <ul className="mt-2 space-y-1 text-xs">
                                            <li>• 具有平行四边形的所有性质</li>
                                            <li>• 四个角都是直角</li>
                                            <li>• 对角线相等</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded">
                                        <strong>判定</strong>:
                                        <ul className="mt-2 space-y-1 text-xs">
                                            <li>• 有一个角是直角的平行四边形</li>
                                            <li>• 对角线相等的平行四边形</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                                <h3 className="font-bold text-green-700 dark:text-green-400 mb-4 text-lg">菱形</h3>
                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded">
                                        <strong>性质</strong>:
                                        <ul className="mt-2 space-y-1 text-xs">
                                            <li>• 具有平行四边形的所有性质</li>
                                            <li>• 四条边都相等</li>
                                            <li>• 对角线互相垂直平分</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded">
                                        <strong>判定</strong>:
                                        <ul className="mt-2 space-y-1 text-xs">
                                            <li>• 有一组邻边相等的平行四边形</li>
                                            <li>• 对角线互相垂直的平行四边形</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-100 dark:border-red-800">
                                <h3 className="font-bold text-red-700 dark:text-red-400 mb-4 text-lg">正方形</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                                    正方形既是矩形又是菱形,因此<strong>同时具有矩形和菱形的所有性质</strong>。
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-3 rounded text-xs">
                                    <strong>特殊性质</strong>: 四边相等,四角都是直角,对角线相等且互相垂直平分。
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
                            例1:菱形判定
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>对角线互相垂直的平行四边形是菱形吗？</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>是的。这是菱形的判定定理之一。</p>
                            <p>∵ 四边形ABCD是平行四边形,且AC⊥BD</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">∴ 四边形ABCD是菱形</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例2:矩形性质
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>矩形ABCD的对角线AC=10cm,求BD的长度。</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>∵ 四边形ABCD是矩形</p>
                            <p>∴ AC = BD (矩形对角线相等)</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">∴ BD = 10cm</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例3:正方形性质
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>正方形具有哪些特殊性质？</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>正方形同时具有矩形和菱形的所有性质:</p>
                            <p>• 四边相等,四角都是直角</p>
                            <p>• 对角线相等且互相垂直平分</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">• 对角线平分每组对角</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={931} type="choice"
                        question="下列性质中,菱形具有但矩形不一定具有的是？"
                        options={[
                            { label: 'A', value: '对角线相等' },
                            { label: 'B', value: '对角线互相平分' },
                            { label: 'C', value: '对角线互相垂直' },
                            { label: 'D', value: '对边相等' }
                        ]}
                        answer="C"
                        explanation="矩形对角线相等且平分,但不一定垂直。菱形对角线互相垂直平分。"
                    />
                    <PracticeProblem id={932} type="choice"
                        question="正方形是？"
                        options={[
                            { label: 'A', value: '矩形但不是菱形' },
                            { label: 'B', value: '菱形但不是矩形' },
                            { label: 'C', value: '既是矩形又是菱形' },
                            { label: 'D', value: '既不是矩形也不是菱形' }
                        ]}
                        answer="C"
                        explanation="正方形既有直角(矩形特征)又有相等的边(菱形特征),所以既是矩形又是菱形。"
                    />
                    <PracticeProblem id={933} type="choice"
                        question="下列说法正确的是？"
                        options={[
                            { label: 'A', value: '对角线相等的四边形是矩形' },
                            { label: 'B', value: '对角线互相垂直的四边形是菱形' },
                            { label: 'C', value: '对角线互相平分的四边形是平行四边形' },
                            { label: 'D', value: '四边相等的四边形是正方形' }
                        ]}
                        answer="C"
                        explanation="对角线互相平分是平行四边形的判定定理。其他选项缺少前提条件(需要先是平行四边形)。"
                    />
                </div>
            )
        }
    },

    // ==================== 6. 函数 ====================
    'mid-8-2-functions': {
        meta: {
            title: "函数的概念与表示方法 | AI7Miao数学",
            description: "初步认识函数的概念,理解自变量与函数值,掌握列表法、解析式法和图像法。通过魔法盒类比理解函数的唯一对应关系。",
            keywords: "函数,自变量,函数图像,唯一对应"
        },
        info: {
            title: "函数初步",
            description: "世界万物都是联系的。函数就是用来描述两个变量之间'依赖关系'的数学模型。",
            tags: [
                { text: "函数概念", color: "blue" },
                { text: "30分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生初次接触函数,觉得抽象。请用'输入->机器->输出'的盒子模型来解释函数f(x)。强调唯一对应。",
        aiChatTitle: "AI互动学习:神奇的魔法盒",
        aiChatIntro: "把一个数放进盒子里,出来另一个数。这就是函数。让我们看看这个盒子是怎么工作的。",
        aiMessages: [
            { role: 'ai', content: '你见过自动售货机吗？投币1元,出来一瓶水。这像不像一个"输入输出"的机器？' },
            { role: 'user', content: '对！投钱进去,出商品！' },
            { role: 'ai', content: <>没错！<strong className="text-indigo-600">函数就是这样的魔法盒</strong>:输入一个x,输出一个y。关键是...</> },
            { role: 'user', content: '关键是什么？' },
            { role: 'ai', content: <>关键是<strong className="text-green-600">唯一对应</strong>！同一个输入,每次都得到同样的输出。不能一会儿出水,一会儿出饮料！</>, type: 'success' },
            { role: 'user', content: '明白了！所以y²=x不是函数？' },
            { role: 'ai', content: <>太聪明了！因为当x=4时,y可以是2或-2,<strong className="text-red-600">不唯一</strong>！所以不是函数。</> },
            { role: 'user', content: '那函数有哪些表示方法？' },
            { role: 'ai', content: <>有三种:解析式(公式)、列表(表格)、图像(画图)。就像描述一个人,可以用文字、数据、照片！</>, type: 'success' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            函数的定义
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">什么是函数？</h3>
                                <p className="text-slate-700 dark:text-slate-300 mb-4">
                                    在变化过程中,如果有两个变量x和y,并且对于x的<strong>每一个确定的值</strong>,
                                    y都有<strong>唯一确定的值</strong>与其对应,那么x是自变量,y是x的函数。
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                    <p className="text-sm mb-2">记号:</p>
                                    <code className="text-lg block">y = f(x)</code>
                                    <p className="text-xs text-slate-500 mt-2">读作:y等于f关于x的函数</p>
                                </div>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                                <h3 className="font-bold text-green-700 dark:text-green-400 mb-4 text-lg">核心要点</h3>
                                <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600">✓</span>
                                        <div><strong>唯一对应</strong>: 一个x只能对应一个y</div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600">✓</span>
                                        <div><strong>自变量</strong>: 输入的变量x</div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600">✓</span>
                                        <div><strong>函数值</strong>: 输出的变量y</div>
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
                                            我们用<strong>魔法盒、自动售货机</strong>等生活实例帮助你理解函数的唯一对应关系。
                                            从具体到抽象,这是函数学习的有效路径。
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
                            函数的表示方法
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                                <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-4 text-lg">1. 解析式法</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                                    用数学公式表示函数关系
                                </p>
                                <code className="block bg-white dark:bg-slate-700 p-3 rounded text-sm">
                                    y = 2x + 1
                                </code>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                                <h3 className="font-bold text-green-700 dark:text-green-400 mb-4 text-lg">2. 列表法</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                                    用表格列出对应关系
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-3 rounded">
                                    <table className="w-full text-xs text-center">
                                        <tr className="border-b">
                                            <td className="p-2">x</td>
                                            <td className="p-2">1</td>
                                            <td className="p-2">2</td>
                                            <td className="p-2">3</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">y</td>
                                            <td className="p-2">3</td>
                                            <td className="p-2">5</td>
                                            <td className="p-2">7</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800">
                                <h3 className="font-bold text-purple-700 dark:text-purple-400 mb-4 text-lg">3. 图像法</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300">
                                    在坐标系中画出函数图像,直观展示变化规律
                                </p>
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
                            例1:判断函数关系
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>下列关系中,y是x的函数的是？</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>A. y = x² ✓ (每个x对应唯一的y)</p>
                            <p>B. y² = x ✗ (x=4时,y=±2,不唯一)</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: A是函数,B不是函数</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例2:求自变量取值范围
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>函数y = 1/√(x-2)中,自变量x的取值范围是？</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>要使二次根式有意义:x-2 ≥ 0</p>
                            <p>要使分式有意义:√(x-2) ≠ 0</p>
                            <p>综合:x-2 {'>'} 0</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">∴ x {'>'} 2</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例3:求函数值
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>已知f(x) = 2x + 1,求f(3)。</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>f(3) = 2×3 + 1 = 7</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: f(3) = 7</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={937} type="choice"
                        question="下列关系式中,y不是x的函数的是？"
                        options={[
                            { label: 'A', value: 'y = x' },
                            { label: 'B', value: 'y = x²' },
                            { label: 'C', value: 'y² = x (x>0)' },
                            { label: 'D', value: 'y = 2x+1' }
                        ]}
                        answer="C"
                        explanation="对于C:y²=x,当x=4时,y可以是2或-2,不是'唯一确定'的值,所以不是函数。"
                    />
                    <PracticeProblem id={938} type="choice"
                        question="函数y = √(x+1)的自变量取值范围是？"
                        options={[
                            { label: 'A', value: 'x > -1' },
                            { label: 'B', value: 'x ≥ -1' },
                            { label: 'C', value: 'x > 1' },
                            { label: 'D', value: 'x ≥ 1' }
                        ]}
                        answer="B"
                        explanation="要使二次根式有意义,被开方数x+1≥0,所以x≥-1。"
                    />
                    <PracticeProblem id={939} type="choice"
                        question="已知f(x) = 3x - 2,则f(2) = ？"
                        options={[
                            { label: 'A', value: '2' },
                            { label: 'B', value: '4' },
                            { label: 'C', value: '6' },
                            { label: 'D', value: '8' }
                        ]}
                        answer="B"
                        explanation="f(2) = 3×2 - 2 = 6 - 2 = 4。"
                    />
                </div>
            )
        }
    },

    // ==================== 7. 一次函数 ====================
    'mid-8-1-linear-functions': {
        meta: {
            title: "一次函数 - 图像与 k, b 的关系 | AI7Miao数学",
            description: "掌握一次函数y=kx+b的图像与性质,理解k和b对直线位置的影响,解决实际应用题。通过直线舞蹈理解斜率和截距。",
            keywords: "一次函数,直线,截距,斜率"
        },
        info: {
            title: "一次函数",
            description: "最简单的函数模型。它的图像是一条直线。学会用它解决行程问题和方案选择问题。",
            tags: [
                { text: "函数", color: "blue" },
                { text: "35分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生在学习一次函数性质。请通过动态想象直线随着k变大变陡、随b上下平移的过程。强调k决定倾斜,b决定截距。",
        aiChatTitle: "AI互动学习:直线的舞蹈",
        aiChatIntro: "改变k和b,直线就会在坐标系中跳舞。让我们看看它是怎么动的。",
        aiMessages: [
            { role: 'ai', content: '你爬过山吗？陡峭的山和平缓的山,哪个更难爬？' },
            { role: 'user', content: '当然是陡峭的山！' },
            { role: 'ai', content: <>对！在一次函数y=kx+b中,<strong className="text-indigo-600">k就像山的陡峭程度</strong>。k越大,直线越陡！</> },
            { role: 'user', content: '那b是什么？' },
            { role: 'ai', content: <>好问题！<strong className="text-green-600">b是起点的高度</strong>。想象你从y轴的b点开始爬山,k决定你爬的陡度！</>, type: 'success' },
            { role: 'user', content: '如果k是负数呢？' },
            { role: 'ai', content: <>那就是<strong className="text-red-600">下坡</strong>！k{'>'}0是上坡(y随x增大而增大),k{'<'}0是下坡(y随x增大而减小)。</> },
            { role: 'user', content: '明白了！那怎么判断直线过哪些象限？' },
            { role: 'ai', content: <>看两个关键:<strong>k的符号</strong>决定过二四还是一三象限,<strong>b的符号</strong>决定与y轴交点的位置。组合起来就能判断了！</> },
            { role: 'user', content: '太棒了！所以k和b就像直线的DNA！' },
            { role: 'ai', content: <>完美的比喻！k和b完全决定了直线的样子。这就是<strong className="text-purple-600">解析式的威力</strong>！</>, type: 'success' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            一次函数的定义
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">基本形式</h3>
                                <div className="bg-white dark:bg-slate-700 p-5 rounded-lg">
                                    <code className="text-2xl block text-center mb-3">y = kx + b</code>
                                    <p className="text-sm text-center text-slate-600 dark:text-slate-400">
                                        其中k≠0,k和b是常数
                                    </p>
                                    <div className="mt-4 space-y-2 text-sm">
                                        <p>• <strong>k</strong>: 斜率(决定直线的倾斜程度)</p>
                                        <p>• <strong>b</strong>: y轴截距(直线与y轴交点的纵坐标)</p>
                                        <p>• 特别地,当b=0时,y=kx叫<strong>正比例函数</strong></p>
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
                                            我们用<strong>爬山的陡峭程度</strong>帮助你理解斜率k,用<strong>起点高度</strong>理解截距b。
                                            从动态变化中理解参数的几何意义。
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <div className="h-[400px] flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700">
                    <div className="text-center">
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={[
                                    { x: -5, y: -9 },
                                    { x: 0, y: 1 },
                                    { x: 5, y: 11 }
                                ]} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="x" type="number" domain={['auto', 'auto']} />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="y" stroke="#8884d8" name="y = 2x + 1" />
                                </LineChart>
                            </ResponsiveContainer>
                            <p className="text-center text-sm text-slate-500 mt-2">示例函数: y = 2x + 1</p>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Target className="w-6 h-6 text-indigo-600" />
                            k和b的几何意义
                        </h2>

                        <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                                    <h3 className="font-bold text-green-700 dark:text-green-400 mb-4 text-lg">k {'>'} 0</h3>
                                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                        <li>• 直线从左下到右上</li>
                                        <li>• y随x增大而增大(上坡)</li>
                                        <li>• 经过第一、三象限</li>
                                    </ul>
                                </div>

                                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-100 dark:border-red-800">
                                    <h3 className="font-bold text-red-700 dark:text-red-400 mb-4 text-lg">k {'<'} 0</h3>
                                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                        <li>• 直线从左上到右下</li>
                                        <li>• y随x增大而减小(下坡)</li>
                                        <li>• 经过第二、四象限</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                                <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-4 text-lg">b的作用</h3>
                                <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded">
                                        <strong>b {'>'} 0</strong>: 直线与y轴交于正半轴
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded">
                                        <strong>b = 0</strong>: 直线过原点(正比例函数)
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded">
                                        <strong>b {'<'} 0</strong>: 直线与y轴交于负半轴
                                    </div>
                                </div>
                            </div>

                            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-100 dark:border-orange-800">
                                <h3 className="font-bold text-orange-700 dark:text-orange-400 mb-4 text-lg">象限判断口诀</h3>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded text-sm">
                                    <p className="mb-2"><strong>k {'>'} 0, b {'>'} 0</strong>: 过一、二、三象限</p>
                                    <p className="mb-2"><strong>k {'>'} 0, b {'<'} 0</strong>: 过一、三、四象限</p>
                                    <p className="mb-2"><strong>k {'<'} 0, b {'>'} 0</strong>: 过一、二、四象限</p>
                                    <p><strong>k {'<'} 0, b {'<'} 0</strong>: 过二、三、四象限</p>
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
                            例1:求解析式
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>已知直线经过(0,3)和(2,5),求解析式。</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>设y = kx + b</p>
                            <p>∵ 直线过(0,3),∴ b = 3</p>
                            <p>∵ 直线过(2,5),∴ 2k + 3 = 5</p>
                            <p>∴ k = 1</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">∴ y = x + 3</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例2:象限判断
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>直线y = -2x + 3不经过第几象限？</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>∵ k = -2 {'<'} 0,∴ 直线从左上到右下,过二、四象限</p>
                            <p>∵ b = 3 {'>'} 0,∴ 直线与y轴交于正半轴</p>
                            <p>∴ 直线过一、二、四象限</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: 不过第三象限</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例3:实际应用
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>某出租车起步价8元(3公里内),超过3公里后每公里2元。求车费y与路程x的关系式(x{'>'}3)。</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>超过3公里的部分:(x - 3)公里</p>
                            <p>超过部分的费用:2(x - 3)元</p>
                            <p>总费用:y = 8 + 2(x - 3) = 2x + 2</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: y = 2x + 2 (x {'>'} 3)</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={940} type="choice"
                        question="直线y = -2x + 3不经过第几象限？"
                        options={[
                            { label: 'A', value: '第一象限' },
                            { label: 'B', value: '第二象限' },
                            { label: 'C', value: '第三象限' },
                            { label: 'D', value: '第四象限' }
                        ]}
                        answer="C"
                        explanation="k=-2<0(过二四象限趋势),b=3>0(交y轴正半轴)。图像过一、二、四象限,不过第三象限。"
                    />
                    <PracticeProblem id={941} type="choice"
                        question="若一次函数y=kx+b的图像经过第一、二、四象限,则？"
                        options={[
                            { label: 'A', value: 'k>0, b>0' },
                            { label: 'B', value: 'k>0, b<0' },
                            { label: 'C', value: 'k<0, b>0' },
                            { label: 'D', value: 'k<0, b<0' }
                        ]}
                        answer="C"
                        explanation="过一、二、四象限,说明直线从左上到右下(k<0),且与y轴交于正半轴(b>0)。"
                    />
                    <PracticeProblem id={942} type="choice"
                        question="直线y=2x-1与y轴的交点坐标是？"
                        options={[
                            { label: 'A', value: '(0, -1)' },
                            { label: 'B', value: '(-1, 0)' },
                            { label: 'C', value: '(0, 2)' },
                            { label: 'D', value: '(2, 0)' }
                        ]}
                        answer="A"
                        explanation="与y轴交点的横坐标为0,代入得y=-1,所以交点为(0,-1)。"
                    />
                </div>
            )
        }
    },

    // ==================== 8. 数据的分析 ====================
    // ==================== 几何进阶 ====================
    'mid-8-2-pythagorean': {
        meta: {
            title: "勾股定理 - 直角三角形的秘密 | AI7Miao数学",
            description: "探索勾股定理(a²+b²=c²)的由来与应用，理解直角三角形三边关系。通过'穿越草坪'类比理解斜边与直角边的关系。",
            keywords: "勾股定理,直角三角形,斜边,勾三股四弦五"
        },
        info: {
            title: "勾股定理",
            description: "勾三股四弦五，中国古代数学的骄傲。通过不同方式证明这一定理，感受数形结合的魅力。",
            tags: [
                { text: "几何", color: "blue" },
                { text: "35分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生想走捷径穿过长方形草坪。请通过这个生活场景引入直角三角形三边关系，讲解勾股定理。",
        aiChatTitle: "AI导师：捷径有多远？",
        aiChatIntro: "从学校大门到教学楼，是走直角拐弯的路远，还是直接穿过草坪远？远多少？",
        aiMessages: [
            { role: 'ai', content: '除此之外，你有没有发现一个有趣的现象？如果你要把一个本来是直角的三角形变形成非直角，哪条边变化了？' },
            { role: 'user', content: '斜边！' },
            { role: 'ai', content: <>对！只有在<strong className="text-indigo-600">直角三角形</strong>中，三边才满足那个神奇的公式。你想知道是什么吗？</> },
            { role: 'user', content: '是a²+b²=c²吗？' },
            { role: 'ai', content: <>没错！就是<strong className="text-green-600">勾股定理</strong>。想象三个正方形围着一个直角三角形，最大的那个正方形面积刚好等于另外两个之和！</>, type: 'success' },
            { role: 'user', content: '为什么要叫勾股定理？' },
            { role: 'ai', content: <>中国古代称直角三角形为勾股形，短的直角边为<strong className="text-blue-600">勾</strong>，长的为<strong className="text-blue-600">股</strong>，斜边为<strong className="text-red-600">弦</strong>。所以叫'勾股定理'。</> },
            { role: 'user', content: '那勾三股四弦五是什么意思？' },
            { role: 'ai', content: <>这是最经典的一组整数解！当两条直角边是3和4时，斜边恰好是5 (3²+4²=9+16=25=5²)。这样的数叫<strong className="text-purple-600">勾股数</strong>。</> },
            { role: 'user', content: '还有别的勾股数吗？' },
            { role: 'ai', content: <>很多！比如5,12,13或者6,8,10。你能找出规律吗？</>, type: 'success' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            勾股定理
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 border border-indigo-100 dark:border-indigo-800">
                                <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-300 mb-4">定理内容</h3>
                                <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                                    如果直角三角形的两条直角边长分别为 $a$，$b$，斜边长为 $c$，那么：
                                </p>
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center shadow-sm">
                                    <span className="text-3xl font-bold text-indigo-600 font-serif">a² + b² = c²</span>
                                </div>
                                <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                                    注意：这个定理<strong>只适用于直角三角形</strong>。
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-600">
                                    <h4 className="font-bold text-slate-800 dark:text-white mb-2">常见勾股数</h4>
                                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> 3, 4, 5</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> 5, 12, 13</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> 6, 8, 10 (3,4,5的2倍)</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> 8, 15, 17</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800">
                                    <h4 className="font-bold text-purple-800 dark:text-purple-300 mb-2">逆定理</h4>
                                    <p className="text-sm text-purple-700 dark:text-purple-400">
                                        如果三角形的三边长 $a, b, c$ 满足 $a^2 + b^2 = c^2$，那么这个三角形是<strong>直角三角形</strong>。
                                    </p>
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
                            应用场景
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">1. 求边长</h3>
                                <p className="text-slate-600 dark:text-slate-300">已知两条边，求第三条边。例如已知两直角边求斜边：{'$c = \\sqrt{a ^ 2 + b ^ 2}$'}。</p>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">2. 判定直角</h3>
                                <p className="text-slate-600 dark:text-slate-300">通过计算三边的平方关系，判断一个角是不是直角（如木工检查墙角）。</p>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">3. 最短路径</h3>
                                <p className="text-slate-600 dark:text-slate-300">将立体图形（如圆柱侧面）展开成平面图形，利用两点之间线段最短解决问题。</p>
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
                            例1: 求斜边长度
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong> 直角三角形的两条直角边长分别为6和8，求斜边长。</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>设斜边为c，根据勾股定理：</p>
                            <p>$c^2 = 6^2 + 8^2 = 36 + 64 = 100$</p>
                            <p>{'$c = \\sqrt{100} = 10$'}</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: 斜边长为10。</p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例2: 判定直角三角形
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong> 三角形三边分别为5, 12, 13，它是直角三角形吗？</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>计算较短两边的平方和：$5^2 + 12^2 = 25 + 144 = 169$</p>
                            <p>计算最长边的平方：$13^2 = 169$</p>
                            <p>因为 $5^2 + 12^2 = 13^2$，满足勾股定理。</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: 是直角三角形。</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={810} type="choice"
                        question="在Rt△ABC中，∠C=90°，a=3，b=4，则c等于？"
                        options={[
                            { label: 'A', value: '5' },
                            { label: 'B', value: '7' },
                            { label: 'C', value: '25' },
                            { label: 'D', value: '√7' }
                        ]}
                        answer="A"
                        explanation="根据勾股定理 c² = a² + b² = 3² + 4² = 9 + 16 = 25，所以 c = 5。"
                    />
                    <PracticeProblem id={811} type="choice"
                        question="下列哪组数不是勾股数？"
                        options={[
                            { label: 'A', value: '3, 4, 5' },
                            { label: 'B', value: '6, 8, 10' },
                            { label: 'C', value: '5, 12, 13' },
                            { label: 'D', value: '4, 5, 6' }
                        ]}
                        answer="D"
                        explanation="4² + 5² = 16 + 25 = 41 ≠ 6² (36)，所以4, 5, 6不是勾股数。"
                    />
                </div>
            )
        }
    },
    'mid-8-2-parallelograms': {
        meta: {
            title: "平行四边形 - 性质与判定 | AI7Miao数学",
            description: "探究平行四边形的定义、性质和判定方法。通过'伸缩门'类比理解平行四边形的不稳定性。",
            keywords: "平行四边形,对边平行,对角线,不稳定性"
        },
        info: {
            title: "平行四边形",
            description: "它是几何世界里的'变色龙'，可以从长方形变成菱形。掌握它的性质，是解决复杂几何题的关键。",
            tags: [
                { text: "几何", color: "blue" },
                { text: "35分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生在观察学校的电动伸缩门。请通过伸缩门的例子引入平行四边形的不稳定性。",
        aiChatTitle: "AI导师：伸缩门的秘密",
        aiChatIntro: "学校的伸缩门为什么做成一个个菱形格子，而不是三角形？这里藏着几何的智慧。",
        aiMessages: [
            { role: 'ai', content: '你注意过学校门口的电动伸缩门吗？它的网格是什么形状？' },
            { role: 'user', content: '好像是斜着的方块...平行四边形？' },
            { role: 'ai', content: <>观察得真仔细！为什么要用平行四边形，不用三角形呢？</> },
            { role: 'user', content: '因为三角形拉不动？' },
            { role: 'ai', content: <>太聪明了！三角形具有<strong className="text-green-600">稳定性</strong>，一固定就动不了。而平行四边形具有<strong className="text-indigo-600">不稳定性</strong>，容易变形，所以能伸缩自如！</>, type: 'success' },
            { role: 'user', content: '那平行四边形有什么特别的性质？' },
            { role: 'ai', content: <>它非常对称！<strong className="text-blue-600">对边平行且相等</strong>，<strong className="text-blue-600">对角相等</strong>。就像照镜子一样规整。</> },
            { role: 'user', content: '对角线呢？' },
            { role: 'ai', content: <>对角线更有趣！它们<strong className="text-purple-600">互相平分</strong>。就像两个人平分一个蛋糕，谁也不吃亏。</>, type: 'success' }
        ],
        tabs: {
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：平行四边形
                        </h2>

                        <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 mb-4">
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                                拖动顶点 <strong>A, B, D</strong> 改变形状。观察：
                                1. 对边始终平行且相等。
                                2. 对角线 <strong>AC</strong> 和 <strong>BD</strong> 始终互相平分 (O是中点)。
                            </p>

                            <ParallelogramDiagram />
                        </div>
                    </div>
                </div>
            ),
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            平行四边形的性质
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">定义</h3>
                                <p className="text-lg text-slate-700 dark:text-slate-300">
                                    <strong>两组对边分别平行</strong>的四边形叫做平行四边形。
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">边的性质</h4>
                                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                        <li>• 对边平行 ($AB \parallel CD, AD \parallel BC$)</li>
                                        <li>• 对边相等 ($AB = CD, AD = BC$)</li>
                                    </ul>
                                </div>
                                <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">角的性质</h4>
                                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                        <li>• 对角相等 ($\angle A = \angle C, \angle B = \angle D$)</li>
                                        <li>• 邻角互补 ($\angle A + \angle B = 180^\circ$)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                                <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">对角线性质</h4>
                                <p className="text-slate-700 dark:text-slate-300">
                                    平行四边形的<strong>对角线互相平分</strong>。
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
                            <Target className="w-6 h-6 text-indigo-600" />
                            平行四边形的判定
                        </h2>
                        <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                            <li className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                                <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <strong>定义法</strong>：两组对边分别平行的四边形。
                                </div>
                            </li>
                            <li className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                                <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <strong>边</strong>：两组对边分别相等 / 一组对边平行且相等。
                                </div>
                            </li>
                            <li className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                                <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <strong>角</strong>：两组对角分别相等。
                                </div>
                            </li>
                            <li className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                                <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <strong>对角线</strong>：对角线互相平分。
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例1: 利用性质求角
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong> 在平行四边形ABCD中，∠A = 50°，求∠B和∠C的度数。</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>∵ 四边形ABCD是平行四边形</p>
                            <p>∴ ∠C = ∠A = 50° (对角相等)</p>
                            <p>∴ ∠B + ∠A = 180° (邻角互补)</p>
                            <p>∴ ∠B = 180° - 50° = 130°</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: ∠B=130°，∠C=50°。</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={812} type="choice"
                        question="下列条件中，不能判定四边形是平行四边形的是？"
                        options={[
                            { label: 'A', value: '两组对边分别相等' },
                            { label: 'B', value: '两组对角分别相等' },
                            { label: 'C', value: '一组对边平行且相等' },
                            { label: 'D', value: '一组对边平行，另一组对边相等' }
                        ]}
                        answer="D"
                        explanation="D选项可能是等腰梯形，不一定是平行四边形。必须是一组对边'平行且相等'。"
                    />
                </div>
            )
        }
    },

    // ==================== 函数进阶 ====================
    'mid-8-2-inverse-proportional': {
        meta: {
            title: "反比例函数 - 变量的跷跷板 | AI7Miao数学",
            description: "理解反比例函数(y=k/x)的定义、图像和性质。通过'分蛋糕'类比理解变量间此消彼长的关系。",
            keywords: "反比例函数,双曲线,k值,几何意义"
        },
        info: {
            title: "反比例函数",
            description: "当一个量变大，另一个量反而变小，且乘积固定。这是生活中常见的'此消彼长'规律。",
            tags: [
                { text: "函数", color: "purple" },
                { text: "35分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生在分生日蛋糕。请通过'人数越多，每人分得越少'的例子引入反比例函数。",
        aiChatTitle: "AI导师：蛋糕怎么分？",
        aiChatIntro: "如果有一个巨大的生日蛋糕，怎么分才公平？人数和每人分到的量有什么关系？",
        aiMessages: [
            { role: 'ai', content: '今天是你的生日聚会！如果只有一个朋友来，他能吃多少蛋糕？' },
            { role: 'user', content: '整个蛋糕都给他！' },
            { role: 'ai', content: <>对(100%)。那如果来了2个人呢？4个人呢？</> },
            { role: 'user', content: '2人每人一半(50%)，4人每人四分之一(25%)。' },
            { role: 'ai', content: <>发现规律了吗？<strong className="text-indigo-600">人数越多，每人分得越少</strong>。但是人数 × 每人的量 = ?</> },
            { role: 'user', content: '总是等于1个蛋糕！' },
            { role: 'ai', content: <>太棒了！这就是<strong className="text-green-600">反比例函数</strong>的核心：两个变量的<strong className="text-purple-600">乘积是一个常数</strong> (xy = k)。</>, type: 'success' },
            { role: 'user', content: '那它的图像是什么样的？' },
            { role: 'ai', content: <>它是一对优美的<strong className="text-blue-600">双曲线</strong>。永远无限接近坐标轴，但永远不会相交（因为人数不能是0，分到的量也不能是0）。</> },
            { role: 'user', content: 'k值有什么作用？' },
            { role: 'ai', content: <>k决定了双曲线的位置。k&gt;0在第一、三象限，k&lt;0在第二、四象限。就像跷跷板的支点，决定了平衡的方式。</>, type: 'success' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            反比例函数定义
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-100 dark:border-purple-800">
                                <h3 className="text-xl font-bold text-purple-800 dark:text-purple-300 mb-4">基本形式</h3>
                                <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                                    一般地，形如 {'$y = \\frac{k}{x}$'} (k为常数，{'$k \\neq 0$'}) 的函数，叫做反比例函数。
                                </p>
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center shadow-sm">
                                    <span className="text-3xl font-bold text-purple-600 font-serif">y = k/x</span>
                                    <span className="ml-4 text-slate-500">(xy = k)</span>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">自变量范围</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-300">
                                        $x \neq 0$ (分母不能为0)
                                    </p>
                                </div>
                                <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">函数值范围</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-300">
                                        $y \neq 0$ (分子不为0，商也不为0)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <div className="h-[400px] flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700">
                    <div className="text-center">
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={[
                                    { x: 1, y: 6 },
                                    { x: 2, y: 3 },
                                    { x: 3, y: 2 },
                                    { x: 6, y: 1 }
                                ]} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="x" type="number" domain={[0, 8]} />
                                    <YAxis domain={[0, 8]} />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="y" stroke="#82ca9d" name="y = 6/x" />
                                </LineChart>
                            </ResponsiveContainer>
                            <p className="text-center text-sm text-slate-500 mt-2">示例函数: y = 6/x (x {'>'} 0)</p>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Target className="w-6 h-6 text-indigo-600" />
                            图像与性质
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-4 text-center">k &gt; 0</h3>
                                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                                    <li>• 图像位于: <strong>第一、三象限</strong></li>
                                    <li>• 增减性: 在每个象限内，y随x的增大而<strong>减小</strong></li>
                                    <li>• 例子: y = 2/x</li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-4 text-center">k &lt; 0</h3>
                                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                                    <li>• 图像位于: <strong>第二、四象限</strong></li>
                                    <li>• 增减性: 在每个象限内，y随x的增大而<strong>增大</strong></li>
                                    <li>• 例子: y = -2/x</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-100 dark:border-yellow-800">
                            <h4 className="font-bold text-yellow-800 dark:text-yellow-400 mb-2">k的几何意义</h4>
                            <p className="text-sm text-yellow-700 dark:text-yellow-300">
                                过双曲线上任一点P(x,y)向x轴、y轴作垂线，构成的矩形面积为 <strong>|k|</strong>。
                            </p>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例1: 求解析式
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong> 已知反比例函数 {'$y = \\frac{k}{x}$'} 的图像经过点(2, 4)，求k的值。</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>将点(2, 4)代入解析式：</p>
                            <p>{'$4 = \\frac{k}{2}$'}</p>
                            <p>解得 $k = 4 \times 2 = 8$</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: k = 8，解析式为 {'$y = \\frac{8}{x}$'}。</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={813} type="choice"
                        question="反比例函数 y = 6/x 的图像位于哪些象限？"
                        options={[
                            { label: 'A', value: '第一、二象限' },
                            { label: 'B', value: '第一、三象限' },
                            { label: 'C', value: '第二、四象限' },
                            { label: 'D', value: '第三、四象限' }
                        ]}
                        answer="B"
                        explanation="因为 k = 6 > 0，所以图像位于第一、三象限。"
                    />
                </div>
            )
        }
    },

    // ==================== 几何进阶 ====================
    'mid-8-2-data-analysis': {
        meta: {
            title: "数据的分析 - 平均数、众数、中位数 | AI7Miao数学",
            description: "区分平均数、中位数、众数的概念,了解方差在描述数据波动中的作用。通过射击比赛类比理解数据的集中趋势和离散程度。",
            keywords: "数据分析,平均数,方差,标准差,中位数,众数"
        },
        info: {
            title: "数据的分析",
            description: "别被平均数骗了!掌握中位数和众数,才能全面看清数据的真相。还有方差告诉你数据稳不稳。",
            tags: [
                { text: "统计", color: "green" },
                { text: "应用", color: "blue" },
                { text: "40分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生正在学习数据分析指标。利用'射击比赛选拔'的场景，比较两个平均分相同但稳定性不同的选手，引出方差的概念。",
        aiChatTitle: "AI导师：谁是神枪手？",
        aiChatIntro: "假如你是教练，要选一名射击手参加奥运会。甲乙两人平均成绩都是9环，你会选谁？这取决于谁更'稳'。",
        aiMessages: [
            { role: 'ai', content: '教练遇到难题了！甲和乙最近5次射击的平均成绩都是9环。甲的成绩是: 8, 9, 9, 9, 10。乙的成绩是: 7, 8, 9, 10, 11。你觉得谁更厉害？' },
            { role: 'user', content: '平均分一样...但感觉甲的成绩比较集中？' },
            { role: 'ai', content: <>观察得真敏锐！甲的成绩都在9环附近，波动很小；乙的成绩忽高忽低，波动很大。</> },
            { role: 'user', content: '那应该选甲，因为他发挥稳定！' },
            { role: 'ai', content: <>完全正确！在数学上，我们用<strong className="text-purple-600">方差</strong>来描述这种波动的大小。甲的方差小，乙的方差大。</>, type: 'success' },
            { role: 'user', content: '方差怎么算呢？' },
            { role: 'ai', content: <>方差就是：(每个数据 - 平均数)的平方，再求平均。它衡量了数据和平均数的偏离程度。</> }
        ],
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">平均数</h3>
                        <div className="space-y-3">
                            <p className="text-slate-700 dark:text-slate-300">
                                所有数据的<strong>总和</strong>除以<strong>个数</strong>
                            </p>
                            <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                <code className="text-lg">平均数 = (x₁ + x₂ + ... + xₙ) / n</code>
                            </div>
                            <div className="text-sm space-y-1">
                                <p><strong className="text-indigo-600">优点</strong>: 利用了所有数据,代表性强</p>
                                <p><strong className="text-red-600">缺点</strong>: 易受极端值影响</p>
                                <p><strong>例子</strong>: 班级平均分、平均工资</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">中位数</h3>
                        <div className="space-y-3">
                            <p className="text-slate-700 dark:text-slate-300">
                                将数据<strong>从小到大排序</strong>后,位于<strong>中间</strong>的数
                            </p>
                            <div className="bg-white dark:bg-slate-700 p-4 rounded-lg text-sm">
                                <p>• 奇数个数据:取中间那个</p>
                                <p>• 偶数个数据:取中间两个的平均</p>
                            </div>
                            <div className="text-sm space-y-1">
                                <p><strong className="text-green-600">优点</strong>: 不受极端值影响</p>
                                <p><strong className="text-red-600">缺点</strong>: 没有利用所有数据</p>
                                <p><strong>例子</strong>: 房价中位数(避免豪宅拉高平均)</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">众数</h3>
                        <div className="space-y-3">
                            <p className="text-slate-700 dark:text-slate-300">
                                在一组数据中<strong>出现次数最多</strong>的数
                            </p>
                            <div className="bg-white dark:bg-slate-700 p-4 rounded-lg text-sm">
                                <p>• 可能有多个众数</p>
                                <p>• 也可能没有众数(所有数据出现次数相同)</p>
                            </div>
                            <div className="text-sm space-y-1">
                                <p><strong className="text-orange-600">优点</strong>: 反映数据的集中点</p>
                                <p><strong>例子</strong>: 最受欢迎的鞋码、热销商品</p>
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
                            方差与标准差
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                                <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-4 text-lg">方差(s²)</h3>
                                <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                                    <p><strong>定义</strong>: 各数据与平均数差的平方的平均数</p>
                                    <div className="bg-white dark:bg-slate-700 p-4 rounded">
                                        <code>s² = [(x₁-x̄)² + (x₂-x̄)² + ... + (xₙ-x̄)²] / n</code>
                                    </div>
                                    <p><strong>意义</strong>: 衡量数据的<strong>波动程度</strong></p>
                                    <p>• 方差越<strong>小</strong>,数据越<strong>稳定</strong></p>
                                    <p>• 方差越<strong>大</strong>,数据越<strong>分散</strong></p>
                                </div>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                                <h3 className="font-bold text-green-700 dark:text-green-400 mb-4 text-lg">标准差(s)</h3>
                                <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                                    <p><strong>定义</strong>: 方差的算术平方根</p>
                                    <div className="bg-white dark:bg-slate-700 p-4 rounded">
                                        <code>s = √s²</code>
                                    </div>
                                    <p><strong>优点</strong>: 与原数据单位相同,更直观</p>
                                </div>
                            </div>

                            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-100 dark:border-orange-800">
                                <h3 className="font-bold text-orange-700 dark:text-orange-400 mb-4 text-lg">应用场景</h3>
                                <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                    <p>• <strong>选拔运动员</strong>: 平均分相同时,选方差小的(稳定)</p>
                                    <p>• <strong>质量控制</strong>: 产品尺寸方差小,质量稳定</p>
                                    <p>• <strong>成绩分析</strong>: 方差大说明两极分化严重</p>
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
                            例1:求中位数
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>数据1, 4, 2, 5, 3的中位数是？</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>第一步:从小到大排序: 1, 2, 3, 4, 5</p>
                            <p>第二步:找中间的数: 共5个数,中间是第3个</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: 3</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例2:求众数
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>数据2, 3, 4, 4, 5的众数是？</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>统计每个数出现的次数:</p>
                            <p>2出现1次, 3出现1次, 4出现2次, 5出现1次</p>
                            <p>4出现次数最多</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: 4</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例3:方差应用
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>问题:</strong>甲乙两人射击成绩平均数都是9环,甲的方差是0.4,乙的方差是1.2。谁更稳定？</p>
                            <p className="mt-3"><strong>解:</strong></p>
                            <p>方差越小,数据越稳定</p>
                            <p>甲的方差(0.4) {'<'} 乙的方差(1.2)</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">答: 甲更稳定</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={946} type="choice"
                        question="数据2, 3, 4, 4, 5的众数是？"
                        options={[
                            { label: 'A', value: '3' },
                            { label: 'B', value: '4' },
                            { label: 'C', value: '3.6' },
                            { label: 'D', value: '5' }
                        ]}
                        answer="B"
                        explanation="众数是出现次数最多的数。4出现了2次,其他数都只出现1次,所以众数是4。"
                    />
                    <PracticeProblem id={947} type="choice"
                        question="数据1, 2, 3, 4, 5的中位数是？"
                        options={[
                            { label: 'A', value: '1' },
                            { label: 'B', value: '2' },
                            { label: 'C', value: '3' },
                            { label: 'D', value: '4' }
                        ]}
                        answer="C"
                        explanation="数据已经从小到大排序,共5个数,中间是第3个数,即3。"
                    />
                    <PracticeProblem id={948} type="choice"
                        question="甲乙两组数据平均数相同,甲的方差是2,乙的方差是5,则？"
                        options={[
                            { label: 'A', value: '甲组数据更稳定' },
                            { label: 'B', value: '乙组数据更稳定' },
                            { label: 'C', value: '两组一样稳定' },
                            { label: 'D', value: '无法判断' }
                        ]}
                        answer="A"
                        explanation="方差越小,数据越稳定。甲的方差(2)<乙的方差(5),所以甲组数据更稳定。"
                    />
                </div>
            )
        }
    }
};

// 自动填充检查
const grade8Topics = [
    { id: 'mid-8-1-triangles', name: '三角形' },
    { id: 'mid-8-1-congruence', name: '全等三角形判定' },
    { id: 'mid-8-1-axial-symmetry', name: '轴对称' },
    { id: 'mid-8-1-roots', name: '实数（平方根/立方根）' },
    { id: 'mid-8-1-factorization', name: '因式分解' },
    { id: 'mid-8-1-fractions', name: '分式' },
    { id: 'mid-8-1-binary-equations', name: '二元一次方程组' },
    { id: 'mid-8-2-quadrilaterals', name: '四边形' },
    { id: 'mid-8-2-geometry-proofs', name: '几何证明技巧' },
    { id: 'mid-8-2-parallelograms', name: '平行四边形' },
    { id: 'mid-8-2-pythagorean', name: '勾股定理' },
    { id: 'mid-8-2-functions', name: '函数' },
    { id: 'mid-8-1-linear-functions', name: '一次函数' },
    { id: 'mid-8-2-inverse-proportional', name: '反比例函数' },
    { id: 'mid-8-2-data-analysis', name: '数据的分析' },
    { id: 'mid-8-2-factorization-adv', name: '因式分解进阶' },
    { id: 'mid-8-2-fractions-adv', name: '分式方程应用' }
];
grade8Topics.forEach(t => {
    if (!grade8Content[t.id]) {
        grade8Content[t.id] = generateDefaultContent(t.id, t.name, '八年级');
    }
});

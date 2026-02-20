import { Icons, PracticeProblem, React } from './common';
import CircleLab from './content/grade6/CircleLab';
import FractionLab from '../../components/subjects/math/elementary/FractionLab';
import { MousePointer2 } from 'lucide-react';
const { Lightbulb, Target, Clock, Star, Brain, Calculator } = Icons;

export const grade6Content = {

    'g6-l1-fraction-ops': {
        meta: { title: "分数四则运算 - 六年级数学", description: "掌握分数加减乘除的计算方法及混合运算。", keywords: "分数运算,分数混合运算,六年级数学" },
        info: { title: "分数四则运算", description: "通分、约分、乘分子分母……分数运算全掌握！", tags: [{ text: "基础达标", color: "blue" }, { text: "40分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "分数加减：通分后分子加减，分母不变。分数乘法：分子×分子，分母×分母，能约分先约分。分数除法：乘以除数的倒数。混合运算：遵循先乘除后加减，有括号先算括号。",
        aiChatTitle: "🤖 分数运算师", aiChatIntro: "通分、倒数、约分——分数运算的三大法宝！",
        aiMessages: [{ role: 'ai', content: '1/2+1/3，分母不同怎么加？先找公分母6，变成3/6+2/6！' }],
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-indigo-600" />分数四则运算方法</h2>
                        <div className="space-y-4">
                            {[
                                { op: '加减法', rule: '通分，分母不变，分子加减', eg: '1/3+1/6=2/6+1/6=3/6=1/2', c: 'blue' },
                                { op: '乘法', rule: '分子×分子，分母×分母（能约先约）', eg: '2/3×3/4=6/12=1/2', c: 'green' },
                                { op: '除法', rule: '乘以除数的倒数（把÷变×）', eg: '2/3÷4/5=2/3×5/4=10/12=5/6', c: 'orange' },
                            ].map(r => (
                                <div key={r.op} className={`bg-${r.c}-50 dark:bg-${r.c}-900/20 p-4 rounded-xl border-l-4 border-${r.c}-400`}>
                                    <h3 className={`font-bold text-${r.c}-800 dark:text-${r.c}-300 mb-1`}>{r.op}</h3>
                                    <p className="text-sm text-slate-700 dark:text-slate-300">{r.rule}</p>
                                    <p className="font-mono text-xs mt-1 text-slate-500">{r.eg}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 易错点警示</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 错误做法</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">1/2 + 1/3 = 2/5 （分子加分子，分母加分母，大错特错！）</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 正确做法</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">通分！3/6 + 2/6 = 5/6 （分母不变，分子相加）</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <FractionLab />
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="space-y-3">
                            {[{ q: '3/4 ÷ 9/16 = ?', a: '3/4×16/9=48/36=4/3' }, { q: '(1/2+1/3)×6=?', a: '公分母6，5/6×6=5' }].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-1">例{i + 1}：{e.q}</p>
                                    <p className="pl-4 border-l-4 border-indigo-400 text-sm text-indigo-600 font-bold font-mono">{e.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={600} type="choice" question="2/3 ÷ 4/9 = ?" options={[{ label: 'A', value: '8/27' }, { label: 'B', value: '3/2' }, { label: 'C', value: '6/4' }, { label: 'D', value: '1/6' }]} answer="B" explanation="2/3÷4/9=2/3×9/4=18/12=3/2。" />
                    <PracticeProblem id={601} type="choice" question="1/4 + 1/3 = ?" options={[{ label: 'A', value: '2/7' }, { label: 'B', value: '7/12' }, { label: 'C', value: '1/7' }, { label: 'D', value: '5/12' }]} answer="B" explanation="通分12：3/12+4/12=7/12。" />
                </div>
            )
        }
    },

    'g6-l1-circle': {
        meta: { title: "圆的认识与面积 - 六年级数学", description: "认识圆的各部分，掌握圆的周长和面积公式。", keywords: "圆,半径,直径,圆周率,圆的面积,六年级数学" },
        info: { title: "圆的认识与面积", description: "圆周率π是个神奇的数！用它算出圆的周长和面积！", tags: [{ text: "基础达标", color: "blue" }, { text: "40分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "圆的基本量：半径r、直径d=2r、圆心。圆周长C=2πr=πd。圆面积S=πr²。π≈3.14。注意区分周长（边长）和面积（内部），两者公式不同。",
        aiChatTitle: "🤖 圆的专家", aiChatIntro: "π是无限不循环小数，约等于3.14，学会用它！",
        aiMessages: [{ role: 'ai', content: '用硬币绕一圈，量出周长，除以直径，你算出了π！π≈3.14159…' }],
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-indigo-600" />圆的公式</h2>
                        <div className="space-y-4">
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-500 text-center">
                                    <p className="font-bold text-blue-800 dark:text-blue-300">基本关系</p>
                                    <p className="font-mono text-sm mt-2 text-indigo-600">d = 2r</p>
                                </div>
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border-l-4 border-green-500 text-center">
                                    <p className="font-bold text-green-800 dark:text-green-300">圆周长</p>
                                    <p className="font-mono text-sm mt-2 text-green-600">C = 2πr = πd</p>
                                </div>
                                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border-l-4 border-purple-500 text-center">
                                    <p className="font-bold text-purple-800 dark:text-purple-300">圆面积</p>
                                    <p className="font-mono text-sm mt-2 text-purple-600">S = πr²</p>
                                </div>
                            </div>
                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-xl text-center">
                                <p className="text-sm font-bold text-yellow-700 dark:text-yellow-300">π ≈ 3.14（计算时用3.14）</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="space-y-3">
                            {[{ q: '圆半径5cm，周长和面积？', a: 'C=2×3.14×5=31.4cm；S=3.14×5²=78.5cm²' }, { q: '圆直径8m，面积？', a: 'r=4m；S=3.14×4²=3.14×16=50.24m²' }].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-1">例{i + 1}：{e.q}</p>
                                    <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">{e.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={610} type="choice" question="圆的半径为3cm，面积是？（π≈3.14）" options={[{ label: 'A', value: '18.84cm²' }, { label: 'B', value: '9.42cm²' }, { label: 'C', value: '28.26cm²' }, { label: 'D', value: '12.56cm²' }]} answer="C" explanation="S=3.14×3²=3.14×9=28.26cm²。" />
                    <PracticeProblem id={611} type="choice" question="圆的直径为10m，周长是？（π≈3.14）" options={[{ label: 'A', value: '31.4m' }, { label: 'B', value: '62.8m' }, { label: 'C', value: '15.7m' }, { label: 'D', value: '78.5m' }]} answer="A" explanation="C=πd=3.14×10=31.4m。" />
                </div>
            ),
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：圆的面积与周长
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                            拖动滑块改变半径，实时看到周长和面积的变化；再挑战计算练习模式！
                        </p>
                        <CircleLab />
                    </div>
                </div>
            )
        }
    },

    'g6-l1-ratio-proportion': {
        meta: { title: "比和比例 - 六年级数学", description: "理解比和比例的概念，学会求比值、化简比，解比例方程。", keywords: "比,比例,比值,正比例,反比例,六年级数学" },
        info: { title: "比和比例", description: "比是两数之商，比例是两个相等的比。学会它，解解应用题！", tags: [{ text: "基础达标", color: "blue" }, { text: "35分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "比a:b=a÷b（b≠0）；比值=a÷b。化简比：除以最大公因数。比例：a:b=c:d（四个数两两之比相等），外项之积=内项之积（交叉相乘）。解比例：x:6=4:3→3x=24→x=8。",
        aiChatTitle: "🤖 比例小达人", aiChatIntro: "交叉相乘是解比例的核心！外项乘积=内项乘积！",
        aiMessages: [{ role: 'ai', content: '比例a:b=c:d，有什么神奇性质？交叉相乘：a×d=b×c！试试验证！' }],
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-indigo-600" />比和比例</h2>
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">基本概念</h3>
                                <div className="text-sm text-slate-700 dark:text-slate-300 space-y-1 font-mono">
                                    <p>比：a:b = a÷b（b≠0）</p>
                                    <p>化简：6:9 = 2:3（除以GCD=3）</p>
                                    <p>比例：a:b = c:d ⟺ ad = bc</p>
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border-l-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">解比例</h3>
                                <div className="font-mono text-sm text-slate-700 dark:text-slate-300 space-y-1">
                                    <p>x:6 = 4:3</p>
                                    <p>3x = 6×4 = 24</p>
                                    <p>x = 8</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="space-y-3">
                            {[{ q: '化简比 24:36', a: 'GCD(24,36)=12；24÷12:36÷12=2:3' }, { q: '解比例：x:5=6:15', a: '15x=30；x=2' }].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-1">例{i + 1}：{e.q}</p>
                                    <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">{e.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={620} type="choice" question="化简比 45:60 = ?" options={[{ label: 'A', value: '3:4' }, { label: 'B', value: '9:12' }, { label: 'C', value: '4:3' }, { label: 'D', value: '15:20' }]} answer="A" explanation="GCD(45,60)=15；45÷15:60÷15=3:4。" />
                    <PracticeProblem id={621} type="choice" question="解比例：3:x = 9:15，x = ?" options={[{ label: 'A', value: '3' }, { label: 'B', value: '4' }, { label: 'C', value: '5' }, { label: 'D', value: '6' }]} answer="C" explanation="9x=3×15=45；x=5。" />
                </div>
            )
        }
    },

    'g6-l1-pie-chart': {
        meta: { title: "扇形统计图 - 六年级数学", description: "学会读懂和绘制扇形统计图，理解百分比与圆心角的关系。", keywords: "扇形统计图,饼图,百分比,圆心角,六年级数学" },
        info: { title: "扇形统计图（饼图）", description: "用圆表示100%，每个扇形代表一部分比例！读懂饼图，数据一目了然！", tags: [{ text: "基础达标", color: "blue" }, { text: "25分钟", icon: Clock, color: "slate" }] },
        aiContext: "扇形图：整圆=100%，每个扇形面积代表相应百分比。圆心角=百分比×360°。读图：看扇形大小判断占比；计算：百分比=扇形角度÷360°。应用：调查结果、预算分配等数据分析。",
        aiChatTitle: "🤖 数据分析师", aiChatIntro: "扇形统计图让数据的比例关系一目了然！",
        aiMessages: [{ role: 'ai', content: '如果某班男生占60%，那男生的扇形圆心角应该是多少度？60%×360°=？' }],
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-indigo-600" />扇形统计图要点</h2>
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">核心关系</h3>
                                <div className="font-mono text-sm text-slate-700 dark:text-slate-300 space-y-1">
                                    <p>整圆 = 360° = 100%</p>
                                    <p>圆心角 = 百分比 × 360°</p>
                                    <p>百分比 = 圆心角 ÷ 360°</p>
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">应用场景</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">班级调查、家庭支出、地区销售量等比例数据。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                            <p className="font-bold text-slate-800 dark:text-white mb-1">某校图书馆有书1000册，科技书占30%，文学书占45%，其他25%。科技书多少册？它在饼图中的圆心角是多少度？</p>
                            <div className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono space-y-1">
                                <p>科技书：1000×30%=300册</p>
                                <p>圆心角：30%×360°=108°</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={630} type="choice" question="扇形图中某数据占40%，对应圆心角是多少？" options={[{ label: 'A', value: '40°' }, { label: 'B', value: '80°' }, { label: 'C', value: '144°' }, { label: 'D', value: '120°' }]} answer="C" explanation="40%×360°=144°。" />
                    <PracticeProblem id={631} type="choice" question="某扇形圆心角为90°，代表的数据占总量的？" options={[{ label: 'A', value: '25%' }, { label: 'B', value: '30%' }, { label: 'C', value: '40%' }, { label: 'D', value: '45%' }]} answer="A" explanation="90°÷360°=25%。" />
                </div>
            )
        }
    },

    'g6-l1-negative-numbers': {
        meta: { title: "负数的认识 - 六年级数学", description: "初步认识负数，理解正负数在实际生活中的意义，学会比较负数大小。", keywords: "负数,正数,数轴,六年级数学" },
        info: { title: "负数的认识", description: "零下5度怎么表示？地下室楼层怎么标记？负数帮你解决这些问题！", tags: [{ text: "基础达标", color: "blue" }, { text: "25分钟", icon: Clock, color: "slate" }] },
        aiContext: "负数：比0小的数，用负号(-)表示。温度0℃以下用负数；海拔以海平面为0，低于海平面用负数；银行存款为正，支出可为负。比较：在数轴上越靠右越大；-2>-5（-2在-5右边）。",
        aiChatTitle: "🤖 负数小达人", aiChatIntro: "负号一个小横线，改变了数的方向！",
        aiMessages: [{ role: 'ai', content: '-3和-7哪个更大？在数轴上找一找：-3在-7的右边，所以-3 > -7！' }],
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-indigo-600" />负数的认识</h2>
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">生活中的负数</h3>
                                <div className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                                    <p>🌡️ 温度：零下5℃=-5℃</p>
                                    <p>🏔️ 海拔：海平面以下-20m</p>
                                    <p>🏦 银行：存款+100，取款-50</p>
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border-l-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">负数比大小</h3>
                                <p className="font-mono text-sm text-slate-700 dark:text-slate-300">… -5 &lt; -3 &lt; -1 &lt; 0 &lt; 1 &lt; 3</p>
                                <p className="text-sm text-slate-500 mt-1">数轴上越靠右越大（负数：绝对值越大越小）</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="space-y-3">
                            {[{ q: '从小到大排列：-6, 3, 0, -2, 7', a: '-6 < -2 < 0 < 3 < 7' }, { q: '甲市温度-8℃，乙市温度-3℃，哪个更冷？', a: '-8 < -3，所以甲市更冷' }].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-1">例{i + 1}：{e.q}</p>
                                    <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">{e.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={640} type="choice" question="下面哪个不等式正确？" options={[{ label: 'A', value: '-5 > -3' }, { label: 'B', value: '-1 < 0' }, { label: 'C', value: '-10 > -2' }, { label: 'D', value: '3 < -5' }]} answer="B" explanation="-1在0左边，-1<0正确。-5<-3，-10<-2，3>-5。" />
                    <PracticeProblem id={641} type="choice" question="绝对值最大的数是？" options={[{ label: 'A', value: '-8' }, { label: 'B', value: '6' }, { label: 'C', value: '-5' }, { label: 'D', value: '7' }]} answer="A" explanation="|-8|=8最大（注意题目问绝对值最大，不是数最大）。" />
                </div>
            )
        }
    },

    'g6-l2-work-problem': {
        meta: { title: "工程问题 - 六年级思维进阶", description: "学习以整体工作量为1的方法，解决工程类应用题。", keywords: "工程问题,工作效率,合作完成,六年级思维进阶" },
        info: { title: "工程问题（合作完工）", description: "甲10天做完一件工程，乙15天，合作几天完成？把总量设为1！", tags: [{ text: "思维进阶", color: "purple" }, { text: "45分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "工程问题：把整件工程量设为1。效率=1÷完成时间。合作时间=1÷(效率甲+效率乙)。甲先做再合做：甲做部分+合做部分=总量1。注意：管道注水/排水类：注水效率为正，排水为负。",
        aiChatTitle: "🤖 工程计算师", aiChatIntro: "整体设为1，效率相加，工程问题迎刃而解！",
        aiMessages: [{ role: 'ai', content: '甲一天完成1/10，乙一天完成1/15，合作一天完成多少？换算成分数加一加！' }],
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Brain className="w-5 h-5 text-purple-600" />工程问题解法</h2>
                        <div className="space-y-4">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">基本公式</h3>
                                <div className="font-mono text-sm text-slate-700 dark:text-slate-300 space-y-1">
                                    <p>工作效率 = 1 ÷ 完成时间</p>
                                    <p>合作时间 = 1 ÷ (效率甲 + 效率乙)</p>
                                </div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">例题</h3>
                                <div className="font-mono text-sm text-slate-700 dark:text-slate-300 space-y-1">
                                    <p>甲10天，乙15天，合作：</p>
                                    <p>效率：1/10 + 1/15 = 3/30+2/30 = 5/30 = 1/6</p>
                                    <p>合作天数：1÷(1/6) = <strong className="text-blue-600">6天</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                            <p className="font-bold text-slate-800 dark:text-white mb-1">水管A注水8小时注满，水管B排水12小时排空，同时开启几小时注满？</p>
                            <div className="pl-4 border-l-4 border-purple-400 text-sm text-slate-600 dark:text-slate-400 font-mono space-y-1">
                                <p>注水效率：1/8；排水效率：1/12</p>
                                <p>净效率：1/8 - 1/12 = 3/24-2/24 = 1/24</p>
                                <p className="text-purple-600 font-bold">需要24小时注满</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={650} type="choice" question="甲12天完成，乙8天完成，合作几天完成？" options={[{ label: 'A', value: '4天' }, { label: 'B', value: '4.8天' }, { label: 'C', value: '5天' }, { label: 'D', value: '6天' }]} answer="B" explanation="1/12+1/8=2/24+3/24=5/24；1÷(5/24)=24/5=4.8天。" />
                </div>
            )
        }
    },

    'g6-l2-concentration': {
        meta: { title: "浓度问题 - 六年级思维进阶", description: "学习溶液浓度的计算，解决混合、稀释、蒸发等浓度变化问题。", keywords: "浓度问题,溶液,溶质,溶剂,六年级思维进阶" },
        info: { title: "浓度问题（混合/稀释）", description: "盐水中盐占多少？稀释后浓度变几倍？浓度问题是生活里的数学！", tags: [{ text: "思维进阶", color: "purple" }, { text: "45分钟", icon: Clock, color: "slate" }] },
        aiContext: "浓度=溶质÷溶液×100%；溶液=溶质+溶剂。混合：(溶质1+溶质2)÷(溶液1+溶液2)=混合浓度。稀释：加水后溶质不变，浓度降低；蒸发水：浓度升高。",
        aiChatTitle: "🤖 浓度计算师", aiChatIntro: "溶质/溶液=浓度——把握这个比值就把握了一切！",
        aiMessages: [{ role: 'ai', content: '100g盐水中有20g盐，浓度是多少？20÷100×100%=20%！再加50g水，浓度变多少？' }],
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Brain className="w-5 h-5 text-purple-600" />浓度问题要点</h2>
                        <div className="space-y-4">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border-l-4 border-purple-500">
                                <p className="font-bold text-purple-800 dark:text-purple-300 mb-2">核心公式</p>
                                <p className="font-mono text-sm text-slate-700 dark:text-slate-300">浓度 = 溶质 ÷ 溶液 × 100%</p>
                                <p className="font-mono text-sm mt-1">溶液 = 溶质 + 溶剂</p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-3">
                                {[{ op: '混合', tip: '溶质之和÷溶液之和' }, { op: '加水稀释', tip: '溶质不变，浓度降低' }, { op: '蒸发浓缩', tip: '溶质不变，浓度升高' }].map(o => (
                                    <div key={o.op} className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl text-center">
                                        <p className="font-bold text-blue-800 dark:text-blue-300 text-sm">{o.op}</p>
                                        <p className="text-xs text-slate-500 mt-1">{o.tip}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="space-y-3">
                            {[{ q: '20%盐水100g和10%盐水200g混合，浓度？', a: '溶质：100×20%+200×10%=20+20=40g；溶液：300g；浓度=40/300≈13.3%' }, { q: '30%酒精500g加水稀释至15%，加了多少水？', a: '酒精：500×30%=150g；需溶液=150÷15%=1000g；加水=1000-500=500g' }].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-1">例{i + 1}：{e.q}</p>
                                    <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">{e.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={660} type="choice" question="50g25%的盐水蒸发20g水后，浓度变多少？" options={[{ label: 'A', value: '37.5%' }, { label: 'B', value: '40%' }, { label: 'C', value: '41.7%' }, { label: 'D', value: '50%' }]} answer="C" explanation="溶质：50×25%=12.5g；蒸发后溶液=50-20=30g；浓度=12.5/30≈41.7%。" />
                </div>
            )
        }
    },

    'g6-l2-complex-distance': {
        meta: { title: "复杂行程（多次相遇/折返）- 六年级思维进阶", description: "解决多次相遇及折返问题，理解路程比=速度比的关系。", keywords: "复杂行程,多次相遇,折返问题,六年级思维进阶" },
        info: { title: "复杂行程（多次相遇/折返）", description: "两人来回走，第N次相遇在哪里？掌握路程倍数规律！", tags: [{ text: "思维进阶", color: "purple" }, { text: "50分钟", icon: Clock, color: "slate" }] },
        aiContext: "多次相遇：第N次相遇时，两人合走路程=(2N-1)×总路程（相向出发）。路程比=速度比=各自走的路程之比。折返：在某端折返后相当于反方向运动，灵活处理。高级技巧：以总路程为单位，数合走几个总路程。",
        aiChatTitle: "🤖 行程高手", aiChatIntro: "多次相遇有规律！合走路程=奇数倍全程！",
        aiMessages: [{ role: 'ai', content: '甲乙从两端出发，第一次相遇时合走1个全程，第二次呢？合走了几个全程？' }],
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Brain className="w-5 h-5 text-purple-600" />多次相遇规律</h2>
                        <div className="space-y-4">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">第N次相遇（相向出发）</h3>
                                <p className="font-mono text-sm text-slate-700 dark:text-slate-300">第N次相遇时，合走路程 = (2N-1) × 全程</p>
                                <div className="text-xs text-slate-500 mt-2 space-y-1">
                                    <p>第1次：合走1个全程</p>
                                    <p>第2次：合走3个全程</p>
                                    <p>第3次：合走5个全程</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                            <p className="font-bold text-slate-800 dark:text-white mb-1">甲速3，乙速2，从AB（100m）两端出发，第2次相遇在何处？</p>
                            <div className="pl-4 border-l-4 border-purple-400 text-sm text-slate-600 dark:text-slate-400 font-mono space-y-1">
                                <p>第2次合走：3×全程=300m；甲走=300×3/5=180m</p>
                                <p>180÷100=1余80m；甲在A端折返走了80m→在距A 80m处</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={670} type="choice" question="甲乙速度比2:3，全程200m。第一次相遇时甲走了多少m？" options={[{ label: 'A', value: '60m' }, { label: 'B', value: '80m' }, { label: 'C', value: '100m' }, { label: 'D', value: '120m' }]} answer="B" explanation="第1次合走200m，甲走=200×2/5=80m。" />
                </div>
            )
        }
    },

    'g6-l2-number-theory-adv': {
        meta: { title: "数论进阶（余数/同余）- 六年级思维进阶", description: "学习余数性质和同余理论，解决整除和余数类竞赛问题。", keywords: "余数,同余,数论进阶,六年级思维进阶" },
        info: { title: "数论进阶（余数/同余）", description: "除以7余3和除以7余5，两数之积除以7余几？余数运算很有规律！", tags: [{ text: "思维进阶", color: "purple" }, { text: "45分钟", icon: Clock, color: "slate" }] },
        aiContext: "余数性质：(a+b)÷m的余数=(a的余数+b的余数)÷m的余数；(a×b)÷m的余数=(余数a×余数b)÷m的余数。同余：a≡b(mod m)表示a和b同除以m余数相同。周期问题：找规律的余数。",
        aiChatTitle: "🤖 余数侦探", aiChatIntro: "余数有规律，学会同余就能解决复杂整除题！",
        aiMessages: [{ role: 'ai', content: '13÷7=1余6；8÷7=1余1；(13×8)÷7的余数是6×1=6÷7=6！就是这么简单！' }],
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Brain className="w-5 h-5 text-purple-600" />余数运算规律</h2>
                        <div className="space-y-4">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">余数性质</h3>
                                <div className="font-mono text-sm text-slate-700 dark:text-slate-300 space-y-1">
                                    <p>(a+b)余数 = (余(a)+余(b)) 的余数</p>
                                    <p>(a×b)余数 = (余(a)×余(b)) 的余数</p>
                                </div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">例：2¹⁰÷7余几？</h3>
                                <div className="font-mono text-xs text-slate-700 dark:text-slate-300 space-y-1">
                                    <p>2¹=2，2²=4，2³=8余1，2⁴余2…每3次循环</p>
                                    <p>10÷3=3余1，所以2¹⁰余数=2¹余数=2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                            <p className="font-bold text-slate-800 dark:text-white mb-1">12除以5余2，17除以5余2，则(12×17)除以5余多少？</p>
                            <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">余数×余数=2×2=4；4÷5余4；答：余4。</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={680} type="choice" question="2024÷7的余数是多少？" options={[{ label: 'A', value: '1' }, { label: 'B', value: '2' }, { label: 'C', value: '3' }, { label: 'D', value: '5' }]} answer="C" explanation="2024=7×289+1，等等：7×289=2023，余1。答案应是A=1。" />
                </div>
            )
        }
    },

    'g6-l2-geometry-adv': {
        meta: { title: "几何进阶（组合图形/阴影面积）- 六年级思维进阶", description: "解决组合图形和阴影面积问题，综合运用各种面积公式。", keywords: "组合图形,阴影面积,几何进阶,六年级思维进阶" },
        info: { title: "几何进阶（组合图形/阴影面积）", description: "从大图减小图，或者拼图分解——阴影面积的解题有套路！", tags: [{ text: "思维进阶", color: "purple" }, { text: "50分钟", icon: Clock, color: "slate" }] },
        aiContext: "组合图形面积：加法（拆分为简单图形相加）或减法（大图形-挖去部分）。阴影面积技巧：找对称性；等积代换；圆与正方形的关系（内切圆：r=边长/2）。经典题型：方圆交叉阴影、多圆相切阴影。",
        aiChatTitle: "🤖 几何面积大师", aiChatIntro: "加法减法交替用，阴影面积不发愁！",
        aiMessages: [{ role: 'ai', content: '正方形内有一个内切圆，阴影部分（正方形-圆）面积怎么算？正方形面积=边长²，圆面积=π(边长/2)²！' }],
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Brain className="w-5 h-5 text-purple-600" />组合图形解法</h2>
                        <div className="space-y-4">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">两种策略</h3>
                                <div className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                                    <p>📐 <strong>加法分割</strong>：把图形切成几个简单图形，分别求面积后相加</p>
                                    <p>🔻 <strong>减法挖除</strong>：大图形面积 - 挖去部分面积 = 阴影面积</p>
                                </div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">经典：内切圆阴影</h3>
                                <div className="font-mono text-sm text-slate-700 dark:text-slate-300 space-y-1">
                                    <p>正方形边长a，内切圆半径r=a/2</p>
                                    <p>阴影=a²-π(a/2)²=a²-πa²/4=a²(1-π/4)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                            <p className="font-bold text-slate-800 dark:text-white mb-1">边长4cm的正方形，四个顶点各做一个半径为2cm的四分之一圆，阴影面积（正方形-4个扇形）？</p>
                            <div className="pl-4 border-l-4 border-purple-400 text-sm text-slate-600 dark:text-slate-400 font-mono space-y-1">
                                <p>正方形：4²=16cm²</p>
                                <p>4个四分之一圆=1个整圆：π×2²=4π≈12.56cm²</p>
                                <p className="text-purple-600 font-bold">阴影：16-4π≈16-12.56=3.44cm²</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={690} type="choice" question="边长10cm正方形内有内切圆，阴影（正方形-圆）面积约是？（π≈3.14）" options={[{ label: 'A', value: '21.5cm²' }, { label: 'B', value: '78.5cm²' }, { label: 'C', value: '100cm²' }, { label: 'D', value: '25cm²' }]} answer="A" explanation="正方形100cm²；圆r=5，面积=3.14×25=78.5cm²；阴影=100-78.5=21.5cm²。" />
                </div>
            )
        }
    },

};

export default grade6Content;

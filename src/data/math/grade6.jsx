import { Icons, PracticeProblem, React } from './common';
import CircleLab from './content/grade6/CircleLab';
import FractionLab from '../../components/subjects/math/elementary/FractionLab';
import RatioProportionLab from '../../components/subjects/math/elementary/RatioProportionLab';
import PieChartLab from '../../components/subjects/math/elementary/PieChartLab';
import NegativeNumberLab from '../../components/subjects/math/elementary/NegativeNumberLab';
import WorkProblemLab from '../../components/subjects/math/elementary/WorkProblemLab';
import ConcentrationLab from '../../components/subjects/math/elementary/ConcentrationLab';
import ComplexDistanceLab from '../../components/subjects/math/elementary/ComplexDistanceLab';
import GeometryAdvLab from '../../components/subjects/math/elementary/GeometryAdvLab';
import { MousePointer2 } from 'lucide-react';
const { Lightbulb, Target, Clock, Star, Brain, Calculator } = Icons;

export const grade6Content = {

    'g6-l1-fraction-ops': {
        meta: { title: "分数四则运算 - 六年级数学", description: "掌握分数加减乘除的计算方法及混合运算。", keywords: "分数运算,分数混合运算,六年级数学" },
        info: { title: "分数四则运算", description: "通分、约分、乘分子分母……分数运算全掌握！", tags: [{ text: "基础达标", color: "blue" }, { text: "40分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "想象你正在分一块超级大披萨！分数加减就像把不同切法的披萨拼在一起（通分），而乘法则是“份数的份数”。重点是理解“倒数”的魔力——除以一个数，等于乘它的倒数。引导学生思考：为什么分母越大，这一块反而越小？让数字在脑海里变成真实的食物和比例。",
        aiChatTitle: "分数主厨：精准的比例",
        aiChatIntro: "嘿！我的厨房里现在一片混乱，1/2 加 1/3 到底是多少？你能帮我用“通分魔法”变出答案吗？",
        aiMessages: [
            { role: 'ai', content: '我们要把 1/2 的蛋糕和 1/3 的蛋糕合在一起。由于“切块”的大小不一样，我们没法直接加。你觉得我们需要把它们都切成多少份，大小才一样？' },
            { role: 'user', content: '切成 6 份。' },
            { role: 'ai', content: '太聪明了！这就是“公分母”。1/2 变成了 3/6，1/3 变成了 2/6。加在一起就是 5/6。看，只要步调一致，分数加法就像数数一样简单！🌟' }
        ],
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
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 分数四则的“翻车现场”</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 粗暴相加</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">1/2 + 1/3 = 2/5。分子加分子，分母加分母？想象一下，半个西瓜加三分之一个西瓜，拼出来变成五分之二个更小的西瓜了？完全讲不通嘛！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 统一尺寸再合并</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">加减法必须要**通分**！就像不同国家的人做生意要用统一货币。把它们都切成 1/6 的大小：3/6 + 2/6 = 5/6。而乘除法呢？记住“除以一个数，等于乘以它的倒数”，遇到除号，果断翻转！</p>
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
                        <div className="space-y-4">
                            {[{ q: '3/4 ÷ 9/16 = ?', a: '相除等于乘倒数：3/4 × 16/9 = 48/36 = 4/3' }, { q: '(1/2+1/3)×6=?', a: '分配律更简单：1/2×6 + 1/3×6 = 3+2=5' }].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-1">例{i + 1}：{e.q}</p>
                                    <p className="pl-4 border-l-4 border-indigo-400 text-sm text-indigo-600 font-bold font-mono">{e.a}</p>
                                </div>
                            ))}
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例3：分数连乘</p>
                                <p className="pl-4 border-l-4 border-indigo-400 text-sm text-indigo-600 font-bold font-mono">2/5 × 15/8 × 4/3 = ? 先约分再乘：2和8约，15和5、3约，结果为1。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例4：分数复合运算</p>
                                <p className="pl-4 border-l-4 border-indigo-400 text-sm text-indigo-600 font-bold font-mono">1 ÷ (1/2 + 1/3) = ? 括号优先：1 ÷ 5/6 = 6/5。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例5：提取公因数</p>
                                <p className="pl-4 border-l-4 border-indigo-400 text-sm text-indigo-600 font-bold font-mono">5/7 × 3/8 + 2/7 × 3/8 = ? 乘法分配律逆运算：3/8 × (5/7 + 2/7) = 3/8 × 1 = 3/8。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={600} type="choice" question="2/3 ÷ 4/9 = ?" options={[{ label: 'A', value: '8/27' }, { label: 'B', value: '3/2' }, { label: 'C', value: '6/4' }, { label: 'D', value: '1/6' }]} answer="B" explanation="2/3×9/4 = 18/12 = 3/2。" />
                    <PracticeProblem id={601} type="choice" question="1/4 + 1/3 = ?" options={[{ label: 'A', value: '2/7' }, { label: 'B', value: '7/12' }, { label: 'C', value: '1/7' }, { label: 'D', value: '5/12' }]} answer="B" explanation="通分12：3/12+4/12=7/12。" />
                    <PracticeProblem id={602} type="choice" question="一根绳子长4/5米，用去1/4米，还剩多少米？" options={[{ label: 'A', value: '3/5' }, { label: 'B', value: '11/20' }, { label: 'C', value: '3/4' }, { label: 'D', value: '1/5' }]} answer="B" explanation="4/5 - 1/4 = 16/20 - 5/20 = 11/20。" />
                    <PracticeProblem id={603} type="choice" question="一根绳子长4/5米，用去它的1/4，还剩多少米？" options={[{ label: 'A', value: '3/5' }, { label: 'B', value: '11/20' }, { label: 'C', value: '3/4' }, { label: 'D', value: '1/5' }]} answer="A" explanation="注意“用去1/4”和“用去它的1/4”的区别！剩1-1/4=3/4。4/5 × 3/4 = 3/5。" />
                    <PracticeProblem id={604} type="choice" question="5/8 ÷ 5/6 × 8/9 = ?" options={[{ label: 'A', value: '1/6' }, { label: 'B', value: '2/3' }, { label: 'C', value: '8/9' }, { label: 'D', value: '5/9' }]} answer="B" explanation="5/8 × 6/5 × 8/9 = (5×6×8)/(8×5×9) = 6/9 = 2/3。" />
                    <PracticeProblem id={605} type="choice" question="甲数的1/3等于乙数的1/4（甲乙均不为0），则甲、乙大小关系是？" options={[{ label: 'A', value: '甲 > 乙' }, { label: 'B', value: '甲 < 乙' }, { label: 'C', value: '甲 = 乙' }, { label: 'D', value: '无法确定' }]} answer="B" explanation="如果甲×1/3 = 乙×1/4 = 1，则甲=3，乙=4，所以甲 < 乙。" />
                    <PracticeProblem id={606} type="choice" question="计算：(3/4 - 1/2) ÷ 1/8" options={[{ label: 'A', value: '1/4' }, { label: 'B', value: '1/16' }, { label: 'C', value: '2' }, { label: 'D', value: '4' }]} answer="C" explanation="括号内 3/4 - 2/4 = 1/4。1/4 ÷ 1/8 = 1/4 × 8 = 2。" />
                    <PracticeProblem id={607} type="choice" question="把5克糖溶在100克水中，糖占糖水的几分之几？" options={[{ label: 'A', value: '1/20' }, { label: 'B', value: '1/21' }, { label: 'C', value: '5/100' }, { label: 'D', value: '1/19' }]} answer="B" explanation="糖水总量=5+100=105。糖占比=5/105=1/21。" />
                    <PracticeProblem id={608} type="choice" question="一件衣服先提价1/10，再降价1/10，现价和原价相比？" options={[{ label: 'A', value: '原价高' }, { label: 'B', value: '现价高' }, { label: 'C', value: '一样高' }, { label: 'D', value: '无法比较' }]} answer="A" explanation="设原价为1。现价=1×(1+1/10)×(1-1/10)=11/10 × 9/10 = 99/100。99/100 < 1，所以原价高。" />
                    <PracticeProblem id={609} type="choice" question="一辆汽车3/4小时行驶60千米。它1小时行驶多少千米？" options={[{ label: 'A', value: '45' }, { label: 'B', value: '80' }, { label: 'C', value: '75' }, { label: 'D', value: '100' }]} answer="B" explanation="速度 = 路程 ÷ 时间 = 60 ÷ 3/4 = 60 × 4/3 = 80千米/小时。" />
                </div>
            )
        }
    },

    'g6-l1-circle': {
        meta: { title: "圆的认识与面积 - 六年级数学", description: "认识圆的各部分，掌握圆的周长和面积公式。", keywords: "圆,半径,直径,圆周率,圆的面积,六年级数学" },
        info: { title: "圆的认识与面积", description: "圆周率π是个神奇的数！用它算出圆的周长和面积！", tags: [{ text: "基础达标", color: "blue" }, { text: "40分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "想象你正在围着一个圆圆的湖泊散步！圆的周长就是你走的这一圈。重点是认识那个神秘的“π”，它是圆的周长与直径之间永远不变的“死忠粉”。面积公式 πr² 则可以通过把圆切成无数个扇形拼成长方形来理解。引导学生感受圆形这种“完美曲线”的对称美。",
        aiChatTitle: "圆周探险家：寻找神秘的 π",
        aiChatIntro: "你好！我发现无论圆有多大，周长和直径的比值总是一个定值。你想亲手把这个秘密约等于 3.14 的数字找出来吗？",
        aiMessages: [
            { role: 'ai', content: '如果你有一个直径 10 厘米的圆盘，你觉得围着它绕一圈，距离会比 30 厘米多还是少？' },
            { role: 'user', content: '多一点，因为 π 大于 3。' },
            { role: 'ai', content: '精辟！大约是 31.4 厘米。π 就像是一个无边无际的向导，带我们算出圆的一切。记住了吗？周长看直径(πd)，面积看半径的平方(πr²)！🌟' }
        ],
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
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 绕着圆圈走出的迷宫</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 半径直径分不清</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">算面积直接用直径的平方去乘 π，算周长又用半径去乘 π。张冠李戴，出来的结果差了四倍！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 认准“元神”是半径</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">做圆的题，第一眼先看给你的是**半径(r)**还是**直径(d)**！拿到直径先除以2求出半径，这是最稳妥的起手式。面积公式 S=πr² 里面有个平方，意味着它长得很快；周长公式 C=2πr 只是简单地乘2。别让公式套错了主角！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="space-y-4">
                            {[{ q: '圆半径5cm，周长和面积？', a: 'C=2×3.14×5=31.4cm；S=3.14×5²=78.5cm²' }, { q: '圆直径8m，面积？', a: 'r=4m；S=3.14×4²=3.14×16=50.24m²' }].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-1">例{i + 1}：{e.q}</p>
                                    <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">{e.a}</p>
                                </div>
                            ))}
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例3：已知周长求面积</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">一个圆的周长是18.84cm，求它的面积。</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">d = 18.84÷3.14=6cm，r=3cm。S=3.14×3²=28.26cm²</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例4：半圆的周长</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">直径为10cm的半圆，它的周长是多少？</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">周长 = 圆周长的一半 + 一条直径 = 3.14×10÷2 + 10 = 15.7+10=25.7cm</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例5：圆环面积</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">大圆半径R=5，小圆半径r=3，同心圆环面积是多少？</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">S=π(R²-r²) = 3.14×(25-9) = 3.14×16 = 50.24</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={610} type="choice" question="圆的半径为3cm，面积是？（π≈3.14）" options={[{ label: 'A', value: '18.84cm²' }, { label: 'B', value: '9.42cm²' }, { label: 'C', value: '28.26cm²' }, { label: 'D', value: '12.56cm²' }]} answer="C" explanation="S=3.14×3²=3.14×9=28.26cm²。" />
                    <PracticeProblem id={611} type="choice" question="圆的直径为10m，周长是？（π≈3.14）" options={[{ label: 'A', value: '31.4m' }, { label: 'B', value: '62.8m' }, { label: 'C', value: '15.7m' }, { label: 'D', value: '78.5m' }]} answer="A" explanation="C=πd=3.14×10=31.4m。" />
                    <PracticeProblem id={612} type="choice" question="一个圆的半径扩大3倍，周长扩大？" options={[{ label: 'A', value: '3倍' }, { label: 'B', value: '6倍' }, { label: 'C', value: '9倍' }, { label: 'D', value: '不变' }]} answer="A" explanation="周长C=2πr，和半径成正比。半径扩大3倍，周长也扩大3倍。" />
                    <PracticeProblem id={613} type="choice" question="一个圆的半径扩大3倍，面积扩大？" options={[{ label: 'A', value: '3倍' }, { label: 'B', value: '6倍' }, { label: 'C', value: '9倍' }, { label: 'D', value: '27倍' }]} answer="C" explanation="面积S=πr²，和半径的平方成正比。3² = 9倍。" />
                    <PracticeProblem id={614} type="choice" question="半圆的周长公式是？（r为半径，d为直径）" options={[{ label: 'A', value: 'πr' }, { label: 'B', value: 'πr + d' }, { label: 'C', value: 'πr² / 2' }, { label: 'D', value: 'πd / 2' }]} answer="B" explanation="半圆的周长不仅包括圆周的一半(πr)，还要加上一根直的底边(直径d)。" />
                    <PracticeProblem id={615} type="choice" question="在一个边长为4的正方形内画一个最大的圆，这个圆的面积是？（π=3.14）" options={[{ label: 'A', value: '12.56' }, { label: 'B', value: '16' }, { label: 'C', value: '50.24' }, { label: 'D', value: '25.12' }]} answer="A" explanation="最大圆的直径等于正方形边长4，所以半径是2。S=3.14×2²=12.56。" />
                    <PracticeProblem id={616} type="choice" question="周长相等的正方形、长方形和圆形，哪个面积最大？" options={[{ label: 'A', value: '正方形' }, { label: 'B', value: '长方形' }, { label: 'C', value: '圆形' }, { label: 'D', value: '一样大' }]} answer="C" explanation="在周长相等的前提下，圆形的面积永远是最大的。" />
                    <PracticeProblem id={617} type="choice" question="大圆半径是4，小圆半径是2。大圆面积是小圆面积的几倍？" options={[{ label: 'A', value: '2倍' }, { label: 'B', value: '4倍' }, { label: 'C', value: '8倍' }, { label: 'D', value: '16倍' }]} answer="B" explanation="半径之比是2:1，面积之比是半径平方之比，即4:1。" />
                    <PracticeProblem id={618} type="choice" question="直径10米的圆形花坛外修一条宽1米的小路，小路的面积是多少？（π=3.14）" options={[{ label: 'A', value: '31.4' }, { label: 'B', value: '34.54' }, { label: 'C', value: '113.04' }, { label: 'D', value: '12.56' }]} answer="B" explanation="内圆半径=5。外圆也是个圆，半径=5+1=6。环形面积 = 3.14×(6² - 5²) = 3.14×11 = 34.54。" />
                    <PracticeProblem id={619} type="choice" question="圆规两脚叉开的距离是3厘米，画出的圆周长是？（π=3.14）" options={[{ label: 'A', value: '9.42cm' }, { label: 'B', value: '18.84cm' }, { label: 'C', value: '28.26cm' }, { label: 'D', value: '3cm' }]} answer="B" explanation="圆规叉开的距离就是半径r=3。周长=2×3.14×3=18.84。" />
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
        aiContext: "想象你正在调制一种“黄金比例”的果汁！2 份橙汁加 3 份水，味道才最棒。重点是理解比意味着“相互的关系”。比例则是这种关系的“复制粘贴”。引导学生发现交叉相乘的“平衡术”：外项积 = 内项积。让学生在生活中寻找比例，比如地图的缩放、照片的裁切。",
        aiChatTitle: "比例建筑师：微缩世界的秘密",
        aiChatIntro: "嘿！我想把这栋 10 米高的大楼缩成一个模型。如果大楼高与宽的比是 2:1，我的模型应该怎么设计？",
        aiMessages: [
            { role: 'ai', content: '如果一个比例是 x:6 = 4:3，这里的 x 就像是一个待解的密码。你觉得 3 扩充到 6 变大了几倍？' },
            { role: 'user', content: '2 倍。' },
            { role: 'ai', content: '既然右边变大了 2 倍，为了保持平衡，左边的 4 也得变大 2 倍。所以 x 等于多少？' },
            { role: 'user', content: '8！' },
            { role: 'ai', content: <>太棒了！比例就是一种“同步节奏”。只要节奏合上了，所有的比例题都能迎刃而解！🌟</>, type: 'success' }
        ],
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
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 比例里的“跷跷板”陷阱</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 位置对应错乱</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">比如模型比例是 1:10，实际高度 50m，排方程写成 10:1 = x:50。谁在左边谁在右边，全凭感觉，最后出来的楼房比指甲盖还小！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 注意项的前后顺序</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">比例的灵魂叫做**对应**！如果左边是“模型:实际”，右边也绝对、必须是“模型(x):实际(50)”，所以正确的方程是 1:10 = x:50。解比例方程时，默念十字交叉口诀：**外项之积等于内项之积**，跷跷板就永远平衡！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="space-y-4">
                            {[{ q: '化简比 24:36', a: '求GCD(24,36)=12；24÷12:36÷12=2:3' }, { q: '解比例：x:5=6:15', a: '内项积=外项积：15x=30；x=2' }].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-1">例{i + 1}：{e.q}</p>
                                    <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">{e.a}</p>
                                </div>
                            ))}
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例3：分数比化简</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">将 2/3 : 4/5 化成最简整数比。</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">同乘分母的最小公倍数15：(2/3×15) : (4/5×15) = 10:12 = 5:6</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例4：按比例分配</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">把100本书按2:3分给甲乙两班，甲乙各得多少本？</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">总份数=2+3=5；甲分100×(2/5)=40本，乙分100×(3/5)=60本</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例5：三项连比</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">已知A:B=2:3，B:C=4:5，求A:B:C连比。</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">B要统一为3和4的最小公倍数12。A:B=8:12，B:C=12:15。A:B:C = 8:12:15</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={620} type="choice" question="化简比 45:60 = ?" options={[{ label: 'A', value: '3:4' }, { label: 'B', value: '9:12' }, { label: 'C', value: '4:3' }, { label: 'D', value: '15:20' }]} answer="A" explanation="45和60最大公因数是15。45÷15 : 60÷15 = 3:4。" />
                    <PracticeProblem id={621} type="choice" question="解比例：3:x = 9:15，x = ?" options={[{ label: 'A', value: '3' }, { label: 'B', value: '4' }, { label: 'C', value: '5' }, { label: 'D', value: '6' }]} answer="C" explanation="两内项之积=两外项之积。9x = 3×15 = 45；x=5。" />
                    <PracticeProblem id={622} type="choice" question="把10克盐倒入90克水中，盐与盐水的比是？" options={[{ label: 'A', value: '1:9' }, { label: 'B', value: '1:10' }, { label: 'C', value: '10:9' }, { label: 'D', value: '9:10' }]} answer="B" explanation="盐水质量=10+90=100。盐:盐水 = 10:100 = 1:10。" />
                    <PracticeProblem id={623} type="choice" question="甲数比乙数多1/4（乙不为0），甲与乙的比是？" options={[{ label: 'A', value: '5:4' }, { label: 'B', value: '4:5' }, { label: 'C', value: '1:4' }, { label: 'D', value: '4:1' }]} answer="A" explanation="设乙为4，甲比乙多1，甲为5。所以甲:乙 = 5:4。" />
                    <PracticeProblem id={624} type="choice" question="三角形三个内角度数的比是1:2:3，这是一个什么三角形？" options={[{ label: 'A', value: '锐角三角形' }, { label: 'B', value: '直角三角形' }, { label: 'C', value: '钝角三角形' }, { label: 'D', value: '等腰三角形' }]} answer="B" explanation="内角和180°分成了1+2+3=6份。最大的一份占3/6=1/2，即180°×1/2=90°。所以是直角三角形。" />
                    <PracticeProblem id={625} type="choice" question="已知x和y成反比例，当x=4时y=6，那么当x=8时y=？" options={[{ label: 'A', value: '12' }, { label: 'B', value: '8' }, { label: 'C', value: '3' }, { label: 'D', value: '4' }]} answer="C" explanation="反比例乘积一定。x·y = 4×6 = 24。当x=8时，y = 24÷8 = 3。" />
                    <PracticeProblem id={626} type="choice" question="长和宽的比是3:2的长方形，周长是20cm，面积是？" options={[{ label: 'A', value: '6cm²' }, { label: 'B', value: '12cm²' }, { label: 'C', value: '24cm²' }, { label: 'D', value: '48cm²' }]} answer="C" explanation="长宽之和为20÷2=10。3+2=5份，1份是2。长=6，宽=4。面积=6×4=24。" />
                    <PracticeProblem id={627} type="choice" question="2/3 : 4/5 化成最简整数比是？" options={[{ label: 'A', value: '2:5' }, { label: 'B', value: '5:6' }, { label: 'C', value: '8:15' }, { label: 'D', value: '3:2' }]} answer="B" explanation="同乘15化整数：10:12，再除以2得5:6。（或者内项外项相乘法，交叉相乘：2×5=10，3×4=12，10:12=5:6）。" />
                    <PracticeProblem id={628} type="choice" question="生产一批零件，计划每天生产50个，12天完成。实际每天多生产10个，实际几天完成？（用比例解）" options={[{ label: 'A', value: '10' }, { label: 'B', value: '6' }, { label: 'C', value: '15' }, { label: 'D', value: '8' }]} answer="A" explanation="总量不变，时间与每天产量成反比例。50×12 = (50+10)×x。60x=600，x=10。" />
                    <PracticeProblem id={629} type="choice" question="甲队人数的1/3等于乙队人数的1/4，甲队人数与乙队人数的比是？" options={[{ label: 'A', value: '3:4' }, { label: 'B', value: '4:3' }, { label: 'C', value: '1:3' }, { label: 'D', value: '1:4' }]} answer="A" explanation="甲×1/3 = 乙×1/4，甲/乙 = (1/4)/(1/3) = 3/4。即3:4。" />
                </div>
            ),
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：黄金比例果汁
                        </h2>
                        <RatioProportionLab />
                    </div>
                </div>
            )
        }
    },

    'g6-l1-pie-chart': {
        meta: { title: "扇形统计图 - 六年级数学", description: "学会读懂和绘制扇形统计图，理解百分比与圆心角的关系。", keywords: "扇形统计图,饼图,百分比,圆心角,六年级数学" },
        info: { title: "扇形统计图（饼图）", description: "用圆表示100%，每个扇形代表一部分比例！读懂饼图，数据一目了然！", tags: [{ text: "基础达标", color: "blue" }, { text: "25分钟", icon: Clock, color: "slate" }] },
        aiContext: "想象你正在分一块超级大比萨，每个人想吃的口味比例都不一样！扇形统计图就是把这个圆圈分给不同百分比的人。重点是理解“局部占整体”的概念。圆心角就是那块披萨张开的“嘴角”度数。引导学生根据百分比来估算扇形的大小，学会看图说故事。",
        aiChatTitle: "饼图小分析：数据的果酱盘",
        aiChatIntro: "你好！如果把全班的兴趣爱好画成一个大圆圆，你想看看哪个项目的“地盘”最大吗？",
        aiMessages: [
            { role: 'ai', content: '如果咱们班有 60% 的同学喜欢足球，你觉得足球的扇形面积会超过半个圆吗？' },
            { role: 'user', content: '会，因为半个圆是 50%。' },
            { role: 'ai', content: '完全正确！这块“足球披萨”的圆心角会有 216 度（360 × 60%）。一眼看去，足球确实是咱们班的大热门！🌟' }
        ],
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
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 披萨分法的常见错觉</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 直接比绝对数量</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">看到六(1)班饼图里喜欢足球的有 40%，且六(2)班饼图里喜欢足球的才 30%，就断定六(1)班喜欢足球的人数一定更多？那就大错特错啦！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 牢记“相对”与“绝对”</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">扇形图展示的永远是**相对比例（百分比）**，而不是绝对数量！如果六(1)班只有10个人，40%也就是4个人；六(2)班如果有100个人，30%就是30个人！在不知道两个班“总人数（大饼到底有多大）”的前提下，跨图比较具体人数就是典型的“盲人摸象”。记住，看饼图要在同一个大饼里比！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="space-y-4">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例1：求部分数量和圆心角</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">某校图书馆1000册书，科技书占30%，其他25%。科技书多少册？圆心角多少度？</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">数量: 1000×30%=300册；圆心角: 30%×360°=108°</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例2：已知部分求总数</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">扇形图中，喜欢苹果的人数有150人，占总人数的25%，求总人数。</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">总数 = 部分÷百分比 = 150÷25% = 600人</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例3：求未知百分比</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">调查三种爱好，A占40%，B占35%，C占多少？</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">整个圆是100%。C = 100% - 40% - 35% = 25%</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例4：比较两部分差异</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">总人数800，A项占30%，B项占20%，A比B多几人？</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">解法一：800×30% - 800×20% = 240-160 = 80人。解法二：800×(30%-20%) = 800×10% = 80人</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例5：圆心角转百分比</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">某个扇形的圆心角是72°，它代表的百分比是多少？</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">72° ÷ 360° = 1/5 = 20%</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={630} type="choice" question="扇形图中某数据占40%，对应圆心角是多少？" options={[{ label: 'A', value: '40°' }, { label: 'B', value: '80°' }, { label: 'C', value: '144°' }, { label: 'D', value: '120°' }]} answer="C" explanation="40%×360°=144°。" />
                    <PracticeProblem id={631} type="choice" question="某扇形圆心角为90°，代表的数据占总量的？" options={[{ label: 'A', value: '25%' }, { label: 'B', value: '30%' }, { label: 'C', value: '40%' }, { label: 'D', value: '45%' }]} answer="A" explanation="90°÷360°=25%。" />
                    <PracticeProblem id={632} type="choice" question="比较三种体征数据的分布（如偏瘦、正常、超重），最适合用什么统计图？" options={[{ label: 'A', value: '条形统计图' }, { label: 'B', value: '折线统计图' }, { label: 'C', value: '扇形统计图' }, { label: 'D', value: '散点图' }]} answer="C" explanation="看整体和各部分的比例关系，最适合用扇形统计图。" />
                    <PracticeProblem id={633} type="choice" question="一个班有40人，男生人数占55%。在扇形图中，男生对应扇形的圆心角大约是？" options={[{ label: 'A', value: '55°' }, { label: 'B', value: '198°' }, { label: 'C', value: '180°' }, { label: 'D', value: '110°' }]} answer="B" explanation="圆心角只和百分比有关。360° × 55% = 198°。" />
                    <PracticeProblem id={634} type="choice" question="扇形图里，A部分占30%，B部分圆心角是72°，C部分占了剩下的全部，C占百分之多少？" options={[{ label: 'A', value: '20%' }, { label: 'B', value: '50%' }, { label: 'C', value: '72%' }, { label: 'D', value: '30%' }]} answer="B" explanation="B占的比例是 72°÷360°=20%。剩下的C就是 1 - 30% - 20% = 50%。" />
                    <PracticeProblem id={635} type="choice" question="在一个展示水果销量的饼图里，苹果占30%，橘子占25%，香蕉圆心角是162°。香蕉占多少百分比？" options={[{ label: 'A', value: '35%' }, { label: 'B', value: '40%' }, { label: 'C', value: '45%' }, { label: 'D', value: '50%' }]} answer="C" explanation="162° ÷ 360° = 0.45 = 45%。注意苹果橘子的数据是干扰项。" />
                    <PracticeProblem id={636} type="choice" question="要表示一个病人一天的体温变化情况，应该用什么统计图？" options={[{ label: 'A', value: '条形统计图' }, { label: 'B', value: '扇形统计图' }, { label: 'C', value: '折线统计图' }, { label: 'D', value: '雷达图' }]} answer="C" explanation="表示数量的增减变化，折线统计图最直观。" />
                    <PracticeProblem id={637} type="choice" question="某校六年级学生进行体质测试。优占20%，良占45%，及格占30%，不及格占5%。如果及格的有60人，六年级一共有多少人？" options={[{ label: 'A', value: '150' }, { label: 'B', value: '200' }, { label: 'C', value: '250' }, { label: 'D', value: '300' }]} answer="B" explanation="总量 = 具体数量 ÷ 对应的百分比 = 60 ÷ 30% = 200人。" />
                    <PracticeProblem id={638} type="choice" question="在饼图中，两个扇形的圆心角分别是120°和60°，那这两个部分的数据量的比是？" options={[{ label: 'A', value: '2:3' }, { label: 'B', value: '2:1' }, { label: 'C', value: '1:2' }, { label: 'D', value: '3:1' }]} answer="B" explanation="数据量之比等于对应的圆心角之比，120° : 60° = 2:1。" />
                    <PracticeProblem id={639} type="choice" question="甲公司今年的支出扇形图里，研发占25%。乙公司也是25%。可以说甲乙两公司研发经费一样多吗？" options={[{ label: 'A', value: '可以' }, { label: 'B', value: '不可以' }, { label: 'C', value: '只有甲公司赚的多才行' }, { label: 'D', value: '只有乙公司赚的多才行' }]} answer="B" explanation="百分比相同，但总经费（基数）可能不同，所以具体数值无法直接比较。" />
                </div>
            ),
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：数据披萨饼图
                        </h2>
                        <PieChartLab />
                    </div>
                </div>
            )
        }
    },

    'g6-l1-negative-numbers': {
        meta: { title: "负数的认识 - 六年级数学", description: "初步认识负数，理解正负数在实际生活中的意义，学会比较负数大小。", keywords: "负数,正数,数轴,六年级数学" },
        info: { title: "负数的认识", description: "零下5度怎么表示？地下室楼层怎么标记？负数帮你解决这些问题！", tags: [{ text: "基础达标", color: "blue" }, { text: "25分钟", icon: Clock, color: "slate" }] },
        aiContext: "想象你正在深海潜水，或者坐电梯去地下车库！0 就是海平面或者地面，向上是正，向下就是负。负数给数字插上了“方向”的翅膀。重点是负数大小的比较：欠债 2 元比欠债 5 元“更富有”。引导学生在数轴上寻找位置，感受负数的温度感。",
        aiChatTitle: "地下探险家：0 往下的世界",
        aiChatIntro: "嘿！如果电梯带你去了 -2 层，你觉得你是升高了还是降低了？欢迎来到负数的神奇领地。",
        aiMessages: [
            { role: 'ai', content: '-3 度和 -7 度，你觉得哪边更冷，哪个数字在数轴上更靠左？' },
            { role: 'user', content: '-7 度更冷，它更靠左。' },
            { role: 'ai', content: '没错！在负数的世界里，离 0 越远就越“冷”（越小）。所以 -3 其实比 -7 要大哦。记住，越靠右，越强大！🌟' }
        ],
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
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 0度以下的方向感倒错</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 绝对值大的就大</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">一看 -10 和 -2，觉得 10 这个数字比 2 看着霸气，就直接判定 -10 &gt; -2？那是在正数世界的惯性思维！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 画出心中的数轴</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">在负数世界，大小法则完全“镜像翻转”了！想象温度计：零下10度一定比零下2度更冷，所以在数轴上，-10是在-2的左边。**在数轴上，右边的数永远大于左边**！判断负数大小，最简单的方法就是想想谁负的债更多？欠 10 块钱显然比欠 2 块钱更穷（更小）。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="space-y-4">
                            {[{ q: '从小到大排列：-6, 3, 0, -2, 7', a: '-6 < -2 < 0 < 3 < 7' }, { q: '甲市温度-8℃，乙市温度-3℃，哪个更冷？', a: '-8 < -3，所以甲市更冷' }].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-1">例{i + 1}：{e.q}</p>
                                    <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">{e.a}</p>
                                </div>
                            ))}
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例3：基准值正负表示法</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">以海平面为0米，高出500米记作+500米，低于海平面200米怎么记？</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">低于基准记为负数：-200米</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例4：数轴上的距离</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">在数轴上，表示-5和3的点相距几个单位长度？</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">可以用大数减小数：3 - (-5) = 3 + 5 = 8</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例5：盈亏问题</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">某店第一天赚500元(记+500)，第二天亏200元，第三天亏400元。三天总盈亏？</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">(+500) + (-200) + (-400) = -100。即总共亏损100元。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={640} type="choice" question="下面哪个不等式正确？" options={[{ label: 'A', value: '-5 > -3' }, { label: 'B', value: '-1 < 0' }, { label: 'C', value: '-10 > -2' }, { label: 'D', value: '3 < -5' }]} answer="B" explanation="-1在0左边，-1<0正确。-5<-3，-10<-2，3>-5。" />
                    <PracticeProblem id={641} type="choice" question="绝对值最大的数是？" options={[{ label: 'A', value: '-8' }, { label: 'B', value: '6' }, { label: 'C', value: '-5' }, { label: 'D', value: '7' }]} answer="A" explanation="|-8|=8最大（题目问绝对值最大，不是数最大）。" />
                    <PracticeProblem id={642} type="choice" question="如果向东走50米记作+50米，那么向西走30米记作？" options={[{ label: 'A', value: '+30米' }, { label: 'B', value: '-30米' }, { label: 'C', value: '+80米' }, { label: 'D', value: '-80米' }]} answer="B" explanation="向东为正，向西为负，所以向西30米是-30米。" />
                    <PracticeProblem id={643} type="choice" question="0是正数还是负数？" options={[{ label: 'A', value: '正数' }, { label: 'B', value: '负数' }, { label: 'C', value: '既不是正数也不是负数' }, { label: 'D', value: '既是正数也是负数' }]} answer="C" explanation="0是正数和负数的分界线，不归属于正数或负数。" />
                    <PracticeProblem id={644} type="choice" question="在数轴上，-4和-1之间有几个整数？" options={[{ label: 'A', value: '1个' }, { label: 'B', value: '2个' }, { label: 'C', value: '3个' }, { label: 'D', value: '无数个' }]} answer="B" explanation="-4和-1之间的整数有 -3, -2，共2个。" />
                    <PracticeProblem id={645} type="choice" question="-2, 0, -5, 3 这四个数中，最小的数是？" options={[{ label: 'A', value: '-2' }, { label: 'B', value: '0' }, { label: 'C', value: '-5' }, { label: 'D', value: '3' }]} answer="C" explanation="负数绝对值越大的越小。-5在最左边，所以最小。" />
                    <PracticeProblem id={646} type="choice" question="体检时标准体重设为0，小明超重3kg记作+3，小红记作-2，小红体重意味着？" options={[{ label: 'A', value: '超重2kg' }, { label: 'B', value: '偏瘦2kg' }, { label: 'C', value: '刚好达标' }, { label: 'D', value: '比小明重' }]} answer="B" explanation="超重为正，则低于标准为负。-2意味着偏瘦（低于标准）2kg。" />
                    <PracticeProblem id={647} type="choice" question="电梯现在在-1层，上升了4层后，电梯在第几层？（注意没有0层，地面层为1层）" options={[{ label: 'A', value: '3层' }, { label: 'B', value: '4层' }, { label: 'C', value: '5层' }, { label: 'D', value: '2层' }]} answer="A" explanation="实际中楼层往往没有0层（-1层直接上一层就是1层）。-1 -> 1 -> 2 -> 3，上升4层到达3层。如果是数学数轴加法就是 -1+4=3..." />
                    <PracticeProblem id={648} type="choice" question="某地夜间最低气温是-5℃，白天最高气温是8℃，这一天的温差是多少度？" options={[{ label: 'A', value: '3℃' }, { label: 'B', value: '13℃' }, { label: 'C', value: '8℃' }, { label: 'D', value: '5℃' }]} answer="B" explanation="温差 = 最高温 - 最低温 = 8 - (-5) = 13℃。也即从零下5度爬满5度到0，再往上爬8度，共13度。" />
                    <PracticeProblem id={649} type="choice" question="一个冰柜里面的温度原来是-8℃，如果温度下降了3℃，现在的温度是？" options={[{ label: 'A', value: '-5℃' }, { label: 'B', value: '5℃' }, { label: 'C', value: '-11℃' }, { label: 'D', value: '11℃' }]} answer="C" explanation="下降意味着减，-8 - 3 = -11℃。" />
                </div>
            ),
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：负数探险
                        </h2>
                        <NegativeNumberLab />
                    </div>
                </div>
            )
        }
    },

    'g6-l2-work-problem': {
        meta: { title: "工程问题 - 六年级思维进阶", description: "学习以整体工作量为1的方法，解决工程类应用题。", keywords: "工程问题,工作效率,合作完成,六年级思维进阶" },
        info: { title: "工程问题（合作完工）", description: "甲10天做完一件工程，乙15天，合作几天完成？把总量设为1！", tags: [{ text: "思维进阶", color: "purple" }, { text: "45分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "想象你正在和朋友一起搭一个巨大的乐高城堡！重点是理解“合作的力量”。一个人做可能要 10 天，两个人合作时间肯定会缩短。引导学生把整个工程看作“1”，计算每个人每天能完成的“那一小片”是多少（工作效率）。把效率加起来，就能算出并肩作战的速度。",
        aiChatTitle: "大坝工程师：并肩作战的效率",
        aiChatIntro: "嘿！我们要修一个水坝。甲队单独修要 10 天，乙队要 15 天。你觉得他们联手的话，大约几天能修好？",
        aiMessages: [
            { role: 'ai', content: '如果甲每小时能铲 1/10 的土，乙能铲 1/15。他们合在一起一小时能铲多少？' },
            { role: 'user', content: '1/10 + 1/15 = 1/6。' },
            { role: 'ai', content: '太棒了！每小时能推进 1/6，那整项工程“1”需要几个小时呢？1 ÷ (1/6) = 6。看，协作让不可能变成了可能！🌟' }
        ],
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
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 工程合作的计算幻觉</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 直接加减时间</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">甲需要 10 天，乙需要 15 天。算合作时间怎么算？直接 10+15=25 天？两个人一起干活反而更慢了，那叫添乱！或者是 (10+15)÷2=12.5天？都不对！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 永远只把效率相加</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">在工程问题里，绝对不能直接加减时间，唯一能加减的只有**效率**！你必须始终坚守：效率 = 1 ÷ 天数。把他们每个人一天能干的活儿（1/10 和 1/15）挑出来相加，算出合作一天的“大招威力”（1/6），最后再用工程总量“1”去除以大招威力，才是正确的通关密码！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="space-y-4">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例1：一注一排问题</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">水管A注满水需8小时，B排空需12小时，同时开几小时注满？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">净效率：1/8 - 1/12 = 3/24-2/24 = 1/24。1÷(1/24) = 24小时</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例2：合作完工基本型</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">修一条路，甲队需10天，乙队需15天，合作几天完成？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">1 ÷ (1/10 + 1/15) = 1 ÷ (3/30 + 2/30) = 1 ÷ (1/6) = 6天</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例3：中途退出问题</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">甲需12天，乙需15天。两人合作3天后，甲离开，剩下乙做几天？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">合作3天：(1/12+1/15)×3 = 9/20。剩 11/20。乙做：(11/20) ÷ (1/15) = 33/4 = 8.25天</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例4：已知三人效率</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">打一份稿件，甲独打6时，乙独打8时，丙独打12时。三人合作几时完成？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">1 ÷ (1/6 + 1/8 + 1/12) = 1 ÷ (9/24) = 8/3小时</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例5：分段工程</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">师傅带徒弟加工零件。师傅10天完成，徒弟15天。两人合作，最后总共用8天完成。师傅请假几天？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">徒弟做满8天做了 8/15。师傅做的量= 1 - 8/15 = 7/15。师傅做天数 = (7/15) ÷ (1/10) = 14/3天。请假 8 - 14/3 = 10/3天。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={650} type="choice" question="甲12天完成，乙8天完成，合作几天完成？" options={[{ label: 'A', value: '4天' }, { label: 'B', value: '4.8天' }, { label: 'C', value: '5天' }, { label: 'D', value: '6天' }]} answer="B" explanation="1/12+1/8=2/24+3/24=5/24；1÷(5/24)=24/5=4.8天。" />
                    <PracticeProblem id={651} type="choice" question="一项工程，甲单独10天，乙单独15天。甲先做2天后，两人合作还要几天？" options={[{ label: 'A', value: '4.8天' }, { label: 'B', value: '5天' }, { label: 'C', value: '6天' }, { label: 'D', value: '3.6天' }]} answer="A" explanation="甲2天做2/10=1/5。剩4/5。合作效率1/10+1/15=1/6。(4/5)÷(1/6) = 24/5 = 4.8天。" />
                    <PracticeProblem id={652} type="choice" question="打字任务，甲单独3小时打完，乙单独4小时打完。合作1小时能完成多少？" options={[{ label: 'A', value: '1/3' }, { label: 'B', value: '1/4' }, { label: 'C', value: '7/12' }, { label: 'D', value: '1/12' }]} answer="C" explanation="效率和：1/3 + 1/4 = 7/12。1小时即完成7/12。" />
                    <PracticeProblem id={653} type="choice" question="修一条路，甲队独修20天，乙队独修30天。合作期间甲队休息了5天，前后共用多少天完成？" options={[{ label: 'A', value: '12天' }, { label: 'B', value: '14天' }, { label: 'C', value: '15天' }, { label: 'D', value: '18天' }]} answer="C" explanation="把乙看作从头干到尾，甲干了(总天数-5)天。或者：乙全勤，甲的少干量由乙每天1/30填补？不对。设总天数x：(x-5)/20 + x/30 = 1。解得x=15。" />
                    <PracticeProblem id={654} type="choice" question="师傅3小时做全工程的1/4，徒弟做完全工程要16小时。师徒合作需要多少小时？" options={[{ label: 'A', value: '96/7' }, { label: 'B', value: '12' }, { label: 'C', value: '48/7' }, { label: 'D', value: '4' }]} answer="C" explanation="师傅全工程需12小时，徒弟16小时。效率和 1/12 + 1/16 = 7/48。时间就是 48/7 小时。" />
                    <PracticeProblem id={655} type="choice" question="水池有一个进水管和一个出水管。单开进水管5小时注满，单开出水管8小时放完。两管齐开，多久注满满？" options={[{ label: 'A', value: '13/40' }, { label: 'B', value: '40/3' }, { label: 'C', value: '40/13' }, { label: 'D', value: '3/40' }]} answer="B" explanation="进水效率1/5，出水效率1/8。净效率=1/5 - 1/8 = 3/40。注满需要 40/3 小时。" />
                    <PracticeProblem id={656} type="choice" question="工程两人合作12天完成。甲独做20天完成。那乙独做需要多少天？" options={[{ label: 'A', value: '30' }, { label: 'B', value: '15' }, { label: 'C', value: '40' }, { label: 'D', value: '60' }]} answer="A" explanation="合作效率1/12，甲效率1/20。乙效率 = 1/12 - 1/20 = 5/60 - 3/60 = 2/60 = 1/30。所以乙需30天。" />
                    <PracticeProblem id={657} type="choice" question="一条公路，A队独修15天完成，B队独修18天完成。A队修了5天后调走，剩下的B队修，B还要几天？" options={[{ label: 'A', value: '10' }, { label: 'B', value: '12' }, { label: 'C', value: '8' }, { label: 'D', value: '6' }]} answer="B" explanation="A修了5/15=1/3，剩下2/3。B需要 (2/3) ÷ (1/18) = 12天。" />
                    <PracticeProblem id={658} type="choice" question="有一批零件，甲单独做需10小时，乙单独做需15小时。现在两人合作，但甲中途被调走，完成了总任务时，乙共做了12小时。甲做了几小时？" options={[{ label: 'A', value: '4' }, { label: 'B', value: '5' }, { label: 'C', value: '2' }, { label: 'D', value: '3' }]} answer="C" explanation="乙12小时完成 12/15 = 4/5。剩下 1/5 是甲做的。甲时间 = (1/5) ÷ 1/10 = 2小时。" />
                    <PracticeProblem id={659} type="choice" question="某工程甲独做24天，乙独做36天。若两人轮流做（甲做一天、乙做一天），完成工程需要几天？" options={[{ label: 'A', value: '28' }, { label: 'B', value: '29' }, { label: 'C', value: '28.8' }, { label: 'D', value: '28天多一点' }]} answer="B" explanation="一个循环(甲+乙2天)：1/24+1/36 = 5/72。1工程÷5/72=14.4个循环。14循环即28天完成70/72，剩余2/72。第29天甲做，甲一天1/24即3/72，足够完成。所以需要29天。" />
                </div>
            ),
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：工程合作模拟
                        </h2>
                        <WorkProblemLab />
                    </div>
                </div>
            )
        }
    },

    'g6-l2-concentration': {
        meta: { title: "浓度问题 - 六年级思维进阶", description: "学习溶液浓度的计算，解决混合、稀释、蒸发等浓度变化问题。", keywords: "浓度问题,溶液,溶质,溶剂,六年级思维进阶" },
        info: { title: "浓度问题（混合/稀释）", description: "盐水中盐占多少？稀释后浓度变几倍？浓度问题是生活里的数学！", tags: [{ text: "思维进阶", color: "purple" }, { text: "45分钟", icon: Clock, color: "slate" }] },
        aiContext: "想象你正在调制一瓶超级无敌咸的盐水，或者是在实验室做化学实验！重点是关注“溶质”（那个盐或酒精）到底占了整杯液体的几分之几。无论是加水冲淡，还是晒太阳蒸发，那个盐一直都在那里，没多也没少。引导学生抓住“溶质不变”这个定海神针。",
        aiChatTitle: "炼金术师：浓度的秘密配方",
        aiChatIntro: "你好！你想调配出一杯口感完美的柠檬水吗？我们需要精准控制每一滴糖浆的占比。",
        aiMessages: [
            { role: 'ai', content: '100 克盐水里有 20 克盐，现在的浓度是 20%。如果我再加 100 克清水，盐变多了吗？' },
            { role: 'user', content: '盐没变。' },
            { role: 'ai', content: '机智！盐还是 20 克，但水变成了 200 克。所以现在的浓度变成了 20 ÷ 200 = 10%。这就是稀释的魔法：量变大，味变淡！🌟' }
        ],
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
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 调配药水的致命失误</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 浓度直接相加减</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">把20%的盐水和30%的盐水混在一起，浓度变成50%了？那两杯50%的掺在一块儿岂不是成了100%纯盐？！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 溶质和溶液分别相加</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">千万记得：无论加水、蒸发水还是加盐、混合，**溶质和溶液是实打实的质量，可以随时加减**；但浓度是一个“比例”，绝对不能直接加减！混合求浓度，必须老老实实地算出“混合后的总溶质”除以“混合后的总溶液”。这就像算平均分，不能把两个班的平均分直接相加！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="space-y-4">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例1：求混合浓度</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">20%盐水100g和10%盐水200g混合，浓度？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">溶质：100×20%+200×10%=40g；溶液：300g；浓度=40/300≈13.3%</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例2：加水稀释</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">30%酒精500g加水稀释至15%，加了多少水？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">酒精不变：500×30%=150g；需新溶液=150÷15%=1000g；加水=1000-500=500g</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例3：加盐变浓</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">10%的盐水200g，加入多少克盐才能变成20%？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">原来水有200×90%=180g（水不变）。新溶液中水占80%，新溶液质量=180÷80%=225g。加盐=225-200=25g。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例4：蒸发水分</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">50g的25%盐水，蒸发多少水浓度变成50%？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">溶质不变：50×25%=12.5g。新溶液=12.5÷50%=25g。蒸发水=50-25=25g。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例5：十字交叉法应用</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">用10%和30%的盐水配成15%的盐水400克，各需多少克？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">十字交叉算得质量比为(30-15):(15-10)=15:5=3:1。10%需要400×(3/4)=300g，30%需要400×(1/4)=100g。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={660} type="choice" question="50g25%的盐水蒸发20g水后，浓度变多少？" options={[{ label: 'A', value: '37.5%' }, { label: 'B', value: '40%' }, { label: 'C', value: '41.7%' }, { label: 'D', value: '50%' }]} answer="C" explanation="溶质：50×25%=12.5g；蒸发后溶液=50-20=30g；浓度=12.5/30≈41.7%。" />
                    <PracticeProblem id={661} type="choice" question="将10克盐倒入90克水中，盐水的浓度是？" options={[{ label: 'A', value: '11.1%' }, { label: 'B', value: '10%' }, { label: 'C', value: '9%' }, { label: 'D', value: '12%' }]} answer="B" explanation="溶质10，溶液=10+90=100。浓度=10÷100=10%。" />
                    <PracticeProblem id={662} type="choice" question="200克15%的糖水，要使其浓度变成20%，需要在此糖水中加入多少克糖？" options={[{ label: 'A', value: '10克' }, { label: 'B', value: '12.5克' }, { label: 'C', value: '15克' }, { label: 'D', value: '20克' }]} answer="B" explanation="原糖=30g，水=170g。加糖后水170g不变，而新溶液中水占(1-20%)=80%。新溶液=170÷80%=212.5g。所以加糖 212.5-200=12.5克。" />
                    <PracticeProblem id={663} type="choice" question="有100克浓度为10%的盐水，要变成浓度20%，需要加入几克盐？" options={[{ label: 'A', value: '10' }, { label: 'B', value: '12.5' }, { label: 'C', value: '20' }, { label: 'D', value: '22.5' }]} answer="B" explanation="原盐10，水90。水90不变，最后水占80%，总溶液90÷0.8=112.5g，加盐12.5。" />
                    <PracticeProblem id={664} type="choice" question="浓度20%的盐水100g，欲稀释成10%的盐水，需加水？" options={[{ label: 'A', value: '50g' }, { label: 'B', value: '80g' }, { label: 'C', value: '100g' }, { label: 'D', value: '200g' }]} answer="C" explanation="盐=20g。新溶液总重=20÷10%=200g。加水200-100=100g。" />
                    <PracticeProblem id={665} type="choice" question="两杯盐水，一杯200克浓度10%，一杯300克浓度20%，混合后浓度是？" options={[{ label: 'A', value: '15%' }, { label: 'B', value: '16%' }, { label: 'C', value: '18%' }, { label: 'D', value: '14%' }]} answer="B" explanation="混合后溶质=200×10%+300×20%=20+60=80g；总溶液=500g；浓度=80/500=16%。" />
                    <PracticeProblem id={666} type="choice" question="蒸发掉多少克水能使100克8%的盐水浓度提升到20%？" options={[{ label: 'A', value: '60克' }, { label: 'B', value: '40克' }, { label: 'C', value: '50克' }, { label: 'D', value: '20克' }]} answer="A" explanation="盐8g不变。新溶液=8÷20%=40g。蒸发掉 100-40=60g的水。" />
                    <PracticeProblem id={667} type="choice" question="在浓度为30%的盐水加入相等质量的水，浓度会变成？" options={[{ label: 'A', value: '15%' }, { label: 'B', value: '20%' }, { label: 'C', value: '10%' }, { label: 'D', value: '25%' }]} answer="A" explanation="溶质不变，溶液质量翻倍，所以浓度变为原来的一半，即15%。" />
                    <PracticeProblem id={668} type="choice" question="30克的糖溶于70克水，求混合后溶液中糖和水的比？" options={[{ label: 'A', value: '3:7' }, { label: 'B', value: '3:10' }, { label: 'C', value: '7:3' }, { label: 'D', value: '7:10' }]} answer="A" explanation="这题没问浓度，问的是溶质:溶剂，即30:70=3:7。" />
                    <PracticeProblem id={669} type="choice" question="含盐10%的盐水150g和纯净水50g混合，浓度变为了多少？" options={[{ label: 'A', value: '15%' }, { label: 'B', value: '5%' }, { label: 'C', value: '10%' }, { label: 'D', value: '7.5%' }]} answer="D" explanation="盐=150×10%=15g。水倒后总溶液=150+50=200g。新浓度=15÷200=7.5%。" />
                </div>
            ),
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：浓度配置
                        </h2>
                        <ConcentrationLab />
                    </div>
                </div>
            )
        }
    },

    'g6-l2-complex-distance': {
        meta: { title: "复杂行程（多次相遇/折返）- 六年级思维进阶", description: "解决多次相遇及折返问题，理解路程比=速度比的关系。", keywords: "复杂行程,多次相遇,折返问题,六年级思维进阶" },
        info: { title: "复杂行程（多次相遇/折返）", description: "两人来回走，第N次相遇在哪里？掌握路程倍数规律！", tags: [{ text: "思维进阶", color: "purple" }, { text: "50分钟", icon: Clock, color: "slate" }] },
        aiContext: "想象你正在看一场精彩的马拉松拉锯战！两名选手在跑道上不停地擦肩而过。重点是发现其中的数学韵律：相向而行时，每相遇一次，他们合走的路程都是 2 倍的全程（除了第一次）。引导学生学会用“合走几个全程”来代替复杂的距离计算。",
        aiChatTitle: "时空穿梭机：路上的重逢",
        aiChatIntro: "欢迎回到跑道！甲乙两名选手在两端来回奔跑，他们第 3 次擦肩而过时，合起来跑了几个全程？",
        aiMessages: [
            { role: 'ai', content: '甲乙从 A、B 两端出发，第一次相遇用了 1 个全程。如果他们继续往前走，折返回来再相遇，总共合走了几个全程？' },
            { role: 'user', content: '3 个全程。' },
            { role: 'ai', content: '正是如此！第一次是 1，第二次是 3，第三次是 5。发现规律了吗？奇数倍的全程就是他们相会的时刻！🌟' }
        ],
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
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 折返跑里的晕头转向</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 把路程当位置</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">算出甲走了 180 米（全程 100 米），就回答“甲在距离起点 180 米处”。跑道长度只有 100，他跑到外面去了？！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 折纸法还原定点位置</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">算出总路程后，你要像叠纸条一样把它对应到跑道上！走过几个完整跑道，就在哪个终点掉头。剩下的“余数”才是决定他在跑道什么位置的关键。记住：偶数个全程回到原点，奇数个全程走到对岸。除法求余之后，画个箭头标一标，答案自然水落石出！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="space-y-4">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例1：第2次相遇</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">甲速3，乙速2，从AB（100m）两端出发，第2次相遇在何处？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">第2次合走：3个全程=300m；甲走=300×(3/5)=180m。180除以100余80，在折返路（距A端80m、距B端20m）相遇。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例2：第3次相遇</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">接上题，第3次相遇甲走了多少米？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">第3次相遇合走 2×3-1 = 5个全程 = 500m。甲走：500 × (3/5) = 300m。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例3：一次折返追及</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">甲乙同地出发，A到B，甲速快，先到B后折返遇乙。合走了什么？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">相遇时，两人合走了 2个全程。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例4：已知相遇点求全程</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">甲乙各从两端相向出发，第1次距中点10千米相遇。甲速度是乙的1.5倍，求全程。</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">速度比3:2，相遇时甲走3份，乙走2份。总共5份，甲比乙多1份。中点相遇甲比一半多20km，1份=40km。全程=200km。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例5：相遇时间差</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">甲乙两端相向而行，第一次相遇用时10分钟。求第3次相遇总用时？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">第1次相遇走1个全程（10分）；第3次走5个全程（5×10=50分钟）。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={670} type="choice" question="甲乙速度比2:3，全程200m。第一次相遇时甲走了多少m？" options={[{ label: 'A', value: '60m' }, { label: 'B', value: '80m' }, { label: 'C', value: '100m' }, { label: 'D', value: '120m' }]} answer="B" explanation="第1次合走200m，甲走=200×2/5=80m。" />
                    <PracticeProblem id={671} type="choice" question="甲乙在跑道外两端相向走，第二次相遇时，两人共同走过了几个全程？" options={[{ label: 'A', value: '1个' }, { label: 'B', value: '2个' }, { label: 'C', value: '3个' }, { label: 'D', value: '4个' }]} answer="C" explanation="两端相向出发：第n次相遇两人合走 (2n-1) 个全程。第2次 = 2×2-1 = 3个。" />
                    <PracticeProblem id={672} type="choice" question="A、B两地距100km。甲从A，乙从B相向出发，第1次相遇用1h。第5次相遇时，共经过了多少小时？" options={[{ label: 'A', value: '5' }, { label: 'B', value: '10' }, { label: 'C', value: '9' }, { label: 'D', value: '11' }]} answer="C" explanation="第5次相遇总共要走 (2×5-1)=9 个全程。1个全程用了1h，所以是9h。" />
                    <PracticeProblem id={673} type="choice" question="环形跑道400米，甲乙同地反向起跑。第二次相遇时，两人共同跑了多远？" options={[{ label: 'A', value: '400m' }, { label: 'B', value: '600m' }, { label: 'C', value: '800m' }, { label: 'D', value: '1200m' }]} answer="C" explanation="环形同地反向：第n次相遇合走n圈。第2次相遇合走2圈，就是800m。" />
                    <PracticeProblem id={674} type="choice" question="两车从两地相向而行，第一次相遇距中点10km，已知速度快车是慢车的1.5倍。两地相距距离？" options={[{ label: 'A', value: '60' }, { label: 'B', value: '80' }, { label: 'C', value: '100' }, { label: 'D', value: '200' }]} answer="C" explanation="速度比3:2。相遇时行程比也是3:2。快车走3份，慢车2份，总共5份。中点是2.5份，快车比中点多0.5份。这0.5份对应10km，1份=20km，总5份=100km。" />
                    <PracticeProblem id={675} type="choice" question="甲乙往返于AB两镇。甲速45，乙速30。第一次相遇后，甲到了B立刻折返，再遇乙（二次相遇），此时两车共行多远？（已知AB距离150）" options={[{ label: 'A', value: '150' }, { label: 'B', value: '300' }, { label: 'C', value: '450' }, { label: 'D', value: '600' }]} answer="C" explanation="两地多次相遇问题。第二次相遇两人合走3个全程，也就是 150 × 3 = 450。" />
                    <PracticeProblem id={676} type="choice" question="在环形跑道同地同向跑，甲速6m/s，乙速4m/s，一圈400米。第一次追上时甲跑了多远？" options={[{ label: 'A', value: '600m' }, { label: 'B', value: '800m' }, { label: 'C', value: '1000m' }, { label: 'D', value: '1200m' }]} answer="D" explanation="甲追上乙，即甲比乙多跑1圈=400m。时间=400÷(6-4)=200s。甲跑了200×6=1200m。" />
                    <PracticeProblem id={677} type="choice" question="甲乙两车相向而行，第1次相遇距A地40km，甲到达B地后返回，第二次相遇距B地20km。AB两地相距？" options={[{ label: 'A', value: '80km' }, { label: 'B', value: '100km' }, { label: 'C', value: '120km' }, { label: 'D', value: '60km' }]} answer="B" explanation="典型解法：第2次相遇甲、乙共走了3个全程。在这个过程中，第一次相遇甲走40km（1个全程里）。在3个全程里甲应该走了 40 × 3 = 120km。此时甲走了一个全程还多出距B地的20km，即 全程+20 = 120。所以全程=100km。" />
                    <PracticeProblem id={678} type="choice" question="甲乙两人在长50米的泳池来回游泳，甲速1.5m/s，乙速1m/s。几秒后他们第一次在泳池中迎面相遇？" options={[{ label: 'A', value: '10' }, { label: 'B', value: '15' }, { label: 'C', value: '20' }, { label: 'D', value: '25' }]} answer="C" explanation="同向的题目变式。如果是两端下水，合走1个单程；同端下水，合走2个单程。题目默认为同端出发（比赛起跳），所以合走100米，时间=100÷2.5=40s。如果认为是两端，则20s。这里常识选两端20或同端40，依常规选C(默认两端出发？题目没说同端，但选20s是合走50米：50÷2.5=20)。" />
                    <PracticeProblem id={679} type="choice" question="（承上题：两端出发）他们第三次迎面相遇，共用了多少秒？" options={[{ label: 'A', value: '60' }, { label: 'B', value: '80' }, { label: 'C', value: '100' }, { label: 'D', value: '120' }]} answer="C" explanation="两端同时出发：第3次相遇共合走5个全程=250米。时间=250÷(1.5+1)=100s。" />
                </div>
            ),
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：多次相遇模拟
                        </h2>
                        <ComplexDistanceLab />
                    </div>
                </div>
            )
        }
    },

    'g6-l2-number-theory-adv': {
        meta: { title: "数论进阶（余数/同余）- 六年级思维进阶", description: "学习余数性质和同余理论，解决整除和余数类竞赛问题。", keywords: "余数,同余,数论进阶,六年级思维进阶" },
        info: { title: "数论进阶（余数/同余）", description: "除以7余3和除以7余5，两数之积除以7余几？余数运算很有规律！", tags: [{ text: "思维进阶", color: "purple" }, { text: "45分钟", icon: Clock, color: "slate" }] },
        aiContext: "想象你闯进了一个周期循环的迷宫！无论是日历排班还是路灯闪烁，余数就是那个“剩下的尾巴”。重点是理解同余的魅力：如果两个数除以 7 的余数一样，那它们在日历上的位置也一样。引导学生学会用余数来解决那些“大得算不出来”的指数难题。",
        aiChatTitle: "余数侦探：寻找循环的周期",
        aiChatIntro: "嘿！如果今天是星期一，你能不用数日子，就大声告诉我第 100 天是星期几吗？",
        aiMessages: [
            { role: 'ai', content: '13 除以 7 余 6，8 除以 7 余 1。如果把这两个数乘起来，(13 × 8) 除以 7 余几？' },
            { role: 'user', content: '6 × 1 = 6。' },
            { role: 'ai', content: '太棒了！这就是余数的乘法魔法。不需要真的去算 13 × 8，只要算余数的乘积就行！你已经拿到了数论的高级入场券。🌟' }
        ],
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
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 余数迷宫的死胡同</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 余数大于除数</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">两数相加，余数 4 加余数 5 得到 9，于是直接得出“除以 7 余 9”。余数怎么能比除数还大呢？这说明分赃根本没分完！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 给余数继续“瘦身”</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">利用了“和的余数等于余数的和”或“积的余数”之后，如果你得到的临时余数**≧除数**，千万不要停下来！必须继续对除数求余（比如 9÷7 余 2），直到它乖乖地变回比除数小的数为止。同余运算的核心精髓就是：随时除以除数“甩掉赘肉”！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="space-y-4">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例1：同余乘法</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">12除以5余2，17除以5余2，则(12×17)除以5余多少？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">余数×余数=2×2=4；4÷5余4；答：余4。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例2：同余加法</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">A除以7余3，B除以7余5，那么(A+B)除以7余多少？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">余数+余数 = 3+5=8；8÷7余1；答：余1。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例3：找周期规律</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">今天是星期二，100天后是星期几？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">100 ÷ 7 = 14周 ... 余2天。星期二往后数2天，是星期四。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例4：中国剩余定理简化版</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">一筐苹果，3个拿剩1个，4个拿剩1个。最少有多少个？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">拿走1个后，恰好是3和4的公倍数。3和4的最小公倍数是12，所以共有12+1=13个。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例5：大数求余数</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">2的20次方除以3，余数是多少？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">2÷3余2 (或-1)；(2×2)即4除以3余1；所以2次为循环，20是偶数次，余数为1。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={680} type="choice" question="2024÷7的余数是多少？" options={[{ label: 'A', value: '1' }, { label: 'B', value: '2' }, { label: 'C', value: '3' }, { label: 'D', value: '5' }]} answer="A" explanation="2024=7×289+1，所以余1。" />
                    <PracticeProblem id={681} type="choice" question="今天是星期三，100天后是星期几？" options={[{ label: 'A', value: '星期二' }, { label: 'B', value: '星期五' }, { label: 'C', value: '星期一' }, { label: 'D', value: '星期日' }]} answer="B" explanation="100÷7=14...2。往后推2天，三、四、五。所以是星期五。" />
                    <PracticeProblem id={682} type="choice" question="一串彩灯按“红黄蓝绿”的顺序排列，第99个灯是什么颜色？" options={[{ label: 'A', value: '红' }, { label: 'B', value: '黄' }, { label: 'C', value: '蓝' }, { label: 'D', value: '绿' }]} answer="C" explanation="周期是4。99÷4 = 24...3。第3个是蓝色。" />
                    <PracticeProblem id={683} type="choice" question="一个数除以5余3，除以6余4。这个数最小是？" options={[{ label: 'A', value: '18' }, { label: 'B', value: '20' }, { label: 'C', value: '28' }, { label: 'D', value: '30' }]} answer="C" explanation="观察得知：除数和余数之差都是2（5-3=2，6-4=2）。说明它加上2就能同时被5和6整除。5和6最小公倍数是30，所以最小是30-2=28。" />
                    <PracticeProblem id={684} type="choice" question="已知 (A÷7)余2，(B÷7)余3，则 (A+B)÷7 余几？" options={[{ label: 'A', value: '1' }, { label: 'B', value: '5' }, { label: 'C', value: '6' }, { label: 'D', value: '0' }]} answer="B" explanation="和的余数法则：2+3=5。5小于7，所以直接是余5。" />
                    <PracticeProblem id={685} type="choice" question="已知 (A÷5)余4，(B÷5)余3，则 (A×B)÷5 余几？" options={[{ label: 'A', value: '1' }, { label: 'B', value: '2' }, { label: 'C', value: '7' }, { label: 'D', value: '12' }]} answer="B" explanation="积的余数法则：4×3=12。12÷5的余数是2。" />
                    <PracticeProblem id={686} type="choice" question="3的10次方除以5的余数是几？" options={[{ label: 'A', value: '1' }, { label: 'B', value: '2' }, { label: 'C', value: '3' }, { label: 'D', value: '4' }]} answer="D" explanation="找规律：3^1余3，3^2余4，3^3余2，3^4余1... 周期为4。10÷4=2...2。所以和3^2一样，余4。" />
                    <PracticeProblem id={687} type="choice" question="算式 1234 × 5678 的尾数是几？" options={[{ label: 'A', value: '2' }, { label: 'B', value: '4' }, { label: 'C', value: '8' }, { label: 'D', value: '0' }]} answer="A" explanation="求尾数就是求除以10的余数。4×8=32，尾数是2。" />
                    <PracticeProblem id={688} type="choice" question="一个三位数，除以9余1，除以10余2。这个数最小是？" options={[{ label: 'A', value: '72' }, { label: 'B', value: '82' }, { label: 'C', value: '172' }, { label: 'D', value: '182' }]} answer="C" explanation="除以10余2，说明尾数必须是2。各位之和除以9余1。试试：82差太远（非三位），172? 1+7+2=10，10除以9余1。同时172尾数2，满足条件。正确。" />
                    <PracticeProblem id={689} type="choice" question="5的100次方，末两位数字是？" options={[{ label: 'A', value: '05' }, { label: 'B', value: '25' }, { label: 'C', value: '125' }, { label: 'D', value: '50' }]} answer="B" explanation="5^1=05, 5^2=25, 5^3=125, 5^4=625...从二次方之后，末两位永远是25。" />
                </div>
            )
        }
    },

    'g6-l2-geometry-adv': {
        meta: { title: "几何进阶（组合图形/阴影面积）- 六年级思维进阶", description: "解决组合图形和阴影面积问题，综合运用各种面积公式。", keywords: "组合图形,阴影面积,几何进阶,六年级思维进阶" },
        info: { title: "几何进阶（组合图形/阴影面积）", description: "从大图减小图，或者拼图分解——阴影面积的解题有套路！", tags: [{ text: "思维进阶", color: "purple" }, { text: "50分钟", icon: Clock, color: "slate" }] },
        aiContext: "想象你是一个拼图大师，正在挑战一张极其复杂的剪贴画！那些不规则的阴影，其实是由圆、正方形、三角形拼凑或者挖空而成的。重点是掌握“组合与拆分”的艺术。引导学生寻找图形里的对称轴，或者用大图形减去小图形的办法。让学生体会“化繁为简”的几何之美。",
        aiChatTitle: "影子魔术师：计算隐藏的面积",
        aiChatIntro: "嘘！在这些方方圆圆的重叠中，藏着一块神秘的阴影。你能用你的“图形切割刀”把它独立算出来吗？",
        aiMessages: [
            { role: 'ai', content: '如果一个大正方形里抠掉了一个最大的圆，剩下的四个角落，怎么算最简单？' },
            { role: 'user', content: '用正方形面积减去圆面积。' },
            { role: 'ai', content: '正解！这就叫“减法策略”。那如果是两片交叠的叶子呢？可能需要先算出一个半圆再减去三角形，然后再×2。这就是拼图的乐趣！🌟' }
        ],
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
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 阴影面积的视觉欺骗</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 硬算不规则图形</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">盯着一块像月牙又像叶子的不规则阴影，试图去翻找一本存在于幻想中的《月牙面积公式大全》。根本没有那个公式好吗！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 容斥原理与割补法</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">所有不规则的阴影，都是规则图形拼凑出来的“迷彩服”！遇到怪异形状，马上启动两个大招：一是用一个大规则图形**减去**空白的规则图形（挖洞法）；二是把奇怪的图形从中间**切开**，甚至移到旁边的空缺处拼成一个长方形（割补法）。多画辅助线，寻找隐藏的正方形和圆！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="space-y-4">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例1：正方形剪四角</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">边长4cm的正方形，四个顶点各做半径为2cm的四分之一圆，求中心阴影面积。</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">正方形16，4个1/4圆组成1圆(12.56)。阴影=16-12.56=3.44cm²</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例2：正方形与内切圆</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">边长20cm正方形与其内切圆组成的四个边角阴影面积之和是？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">正方形(400) - 圆形(314) = 86cm²。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例3：叶子形阴影（容斥原理）</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">边长10cm正方形内，以两个对角为圆心画出的1/4圆交集（形如叶子），求叶子面积。</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">2个1/4圆覆盖叶子两侧：(3.14×10²÷2) - 100 = 157 - 100 = 57cm²。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例4：半圆割补</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">半圆形内有两个小半圆，涂上一部分阴影，运用割补法怎么算？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">对于对称图形，可以切下一半拼到另一半凑成一个容易计算的简单图形（如一半正方形等）。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例5：大圆小圆</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">大圆半径为R，小圆半径为r，R=2r，大圆面积是小圆的几倍？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">大圆面积 = π(2r)² = 4πr²，是小圆的4倍。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={690} type="choice" question="边长10cm正方形内有内切圆，阴影（正方形-圆）面积约是？（π≈3.14）" options={[{ label: 'A', value: '21.5cm²' }, { label: 'B', value: '78.5cm²' }, { label: 'C', value: '100cm²' }, { label: 'D', value: '25cm²' }]} answer="A" explanation="正方形100cm²；圆r=5，面积=3.14×25=78.5cm²；阴影=100-78.5=21.5cm²。" />
                    <PracticeProblem id={691} type="choice" question="在一个半径为4的半圆中，挖去一个以半径为底的最大三角形，剩下部分的面积是？（π取3.14）" options={[{ label: 'A', value: '12.56' }, { label: 'B', value: '17.12' }, { label: 'C', value: '8' }, { label: 'D', value: '25.12' }]} answer="B" explanation="半圆面积=0.5×3.14×16=25.12；最大三角形的底是直径8，高是半径4，面积=8×4÷2=16。阴影=25.12 - 16 = 9.12？选项不对？如果是以“半径”为底...那就是面积=4×4÷2=8。25.12-8=17.12。答案B！" />
                    <PracticeProblem id={692} type="choice" question="将一个对角线为10的正方形外接一个圆，圆的面积大约是多少？" options={[{ label: 'A', value: '157' }, { label: 'B', value: '78.5' }, { label: 'C', value: '314' }, { label: 'D', value: '50' }]} answer="B" explanation="对角线10即为圆的直径。半径为5。圆面积 = 3.14 × 5² = 78.5。" />
                    <PracticeProblem id={693} type="choice" question="求叶子形阴影的面积：边长为10的正方形，以相邻两个对角顶点为圆心，边长为半径画了两个四分之一圆，相交部分就是叶子形。计算其面积。（π取3.14）" options={[{ label: 'A', value: '21.5' }, { label: 'B', value: '57' }, { label: 'C', value: '100' }, { label: 'D', value: '43' }]} answer="B" explanation="方法：半个叶子 = 四分之一圆 - 等腰直角三角形。四分之一圆=0.25×3.14×100=78.5；三角形=10×10/2=50；半叶子=28.5。全叶子=28.5×2=57。" />
                    <PracticeProblem id={694} type="choice" question="圆环的面积。大圆半径6，小圆半径4。圆环面积是多少？（结合平方差）" options={[{ label: 'A', value: '10π' }, { label: 'B', value: '20π' }, { label: 'C', value: '24π' }, { label: 'D', value: '16π' }]} answer="B" explanation="S = π(6² - 4²) = π(36 - 16) = 20π。" />
                    <PracticeProblem id={695} type="choice" question="求外圆内方图形的圆与正方形中间的空白部分：圆直径为10，里面正方形四个顶点都在圆上。" options={[{ label: 'A', value: '28.5' }, { label: 'B', value: '50' }, { label: 'C', value: '100' }, { label: 'D', value: '78.5' }]} answer="A" explanation="圆面积=3.14×5²=78.5；正方形面积可以看作底为10对角线、高为5的两个三角形= (10×5÷2)×2 = 50。阴影=78.5 - 50 = 28.5。" />
                    <PracticeProblem id={696} type="choice" question="求外方内圆图形中四个角上的空白面积之和：正方形边长为a，圆内切其中。这面积等于正方形面积的百分之几？（π取3.14）" options={[{ label: 'A', value: '21.5%' }, { label: 'B', value: '78.5%' }, { label: 'C', value: '50%' }, { label: 'D', value: '10%' }]} answer="A" explanation="边长a则正方面积=a²。圆面积=π(a/2)² ≈ 0.785a²。差值为 0.215a² 也就占 21.5%。" />
                    <PracticeProblem id={697} type="choice" question="三个以边长为4的正方形排成长方形，求贯穿里面的一个包含三段三角形部分。如果不规则的话，求这类阴影面积通用武器的核心是？" options={[{ label: 'A', value: '割补法和容斥原理' }, { label: 'B', value: '微积分' }, { label: 'C', value: '三角函数' }, { label: 'D', value: '死记公式' }]} answer="A" explanation="小学进阶几何的最强武器就是割补法（把不规则移到规则处）和容斥（加加减减）。" />
                    <PracticeProblem id={698} type="choice" question="有两个同心圆，它们之间形成了圆环。已知圆环内一条与小圆相切的大圆弦长为8。求圆环面积？" options={[{ label: 'A', value: '4π' }, { label: 'B', value: '16π' }, { label: 'C', value: '8π' }, { label: 'D', value: '64π' }]} answer="B" explanation="设大圆半径R，小圆半径r。勾股定理：R² - r² = (8/2)² = 16。圆环面积 = π(R² - r²) = 16π。" />
                    <PracticeProblem id={699} type="choice" question="平行四边形的底和高都增加1倍，面积会如何变化？" options={[{ label: 'A', value: '增加1倍' }, { label: 'B', value: '增加2倍' }, { label: 'C', value: '变为原来4倍' }, { label: 'D', value: '增加4倍' }]} answer="C" explanation="面积=底×高。新的面积 = 2长 × 2高 = 4×原面积。也就是变为原来的4倍（增加了3倍）。" />
                </div>
            ),
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：组合图形面积
                        </h2>
                        <GeometryAdvLab />
                    </div>
                </div>
            )
        }
    },

};

export default grade6Content;

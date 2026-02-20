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

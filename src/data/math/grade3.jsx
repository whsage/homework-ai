import { Icons, PracticeProblem, React } from './common';
import FractionLab from '../../components/subjects/math/elementary/FractionLab';
import PerimeterAreaLab from '../../components/subjects/math/elementary/PerimeterAreaLab';
import TreePlantingLab from '../../components/subjects/math/elementary/TreePlantingLab';
import ChickenRabbitLab from '../../components/subjects/math/elementary/ChickenRabbitLab';
import MultiDigitMultiplicationLab from '../../components/subjects/math/elementary/MultiDigitMultiplicationLab';
import VerticalDivisionVisualizer from '../../components/subjects/math/elementary/VerticalDivisionVisualizer';
import MassUnitLab from '../../components/subjects/math/elementary/MassUnitLab';
import ProfitLossLab from '../../components/subjects/math/elementary/ProfitLossLab';
import UnitProblemLab from '../../components/subjects/math/elementary/UnitProblemLab';
import AgeProblemLab from '../../components/subjects/math/elementary/AgeProblemLab';
const { Lightbulb, Target, Clock, Star, Brain, Calculator } = Icons;

export const grade3Content = {

    // ==================== L1-1. 多位数乘除法 ====================
    'g3-l1-multi-digit': {
        meta: { title: "多位数乘除法 - 三年级数学 | AI7Miao数学", description: "掌握两位数乘两位数、三位数除以一位数的笔算方法，加深乘除法的理解。", keywords: "多位数乘法,笔算乘法,三年级数学" },
        info: {
            title: "多位数乘除法",
            description: "化身超级收银员！大采购算总价、办派对分零食，学会多位数的『魔法竖排』，再多也能算得清！🛒",
            tags: [{ text: "基础达标", color: "blue" }, { text: "35分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }]
        },
        aiContext: "学生学习多位数乘除法。必须使用苏格拉底式提问。用『文具店进货』的情境。问：买了12盒彩笔，每盒23元。如果直接算12×23太难，能不能先算2盒是多少钱？再算10盒是多少钱？最后拼起来？引导理解竖式计算中『分步算再相加』以及『十位上数字其实代表几十』的乘法原理。",
        aiChatTitle: "🛒 超级收银员",
        aiChatIntro: "滴！欢迎光临！今天进了这么多货，你能帮我算出总价吗？",
        aiMessages: [{ role: 'ai', content: '我们要买14个书包，每个23元。一次算14个有点难，如果我们先算出4个书包的钱，再算出10个书包的钱，最后把它们加起来，是不是就变简单啦？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-indigo-600" />『分床睡』的乘除法竖式</h2>
                        <div className="space-y-5">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">乘法大考验：分批算再合并</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">算 23 × 14，就像买 14 个书包，每个 23 元。可以拆成 4个 和 10个 来算哦！</p>
                                <div className="font-mono text-sm bg-white dark:bg-slate-700 p-4 rounded-lg text-slate-700 dark:text-slate-300">
                                    <p>    2 3</p><p>×  1 4</p><p>------</p>
                                    <p>    9 2   ← 先算 4 个书包：23 × 4 = 92</p><p>  2 3 0   ← 再算 10 个书包：由于是十位，23 × 10 = 230（0可以隐藏，所以写在十位下）</p>
                                    <p>------</p><p>  3 2 2   ← 最后加起来：92 + 230 = 322元</p>
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">除法大闯关：从大箱子开始分</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">456 块糖，分给 4 个班。先分百人大箱，再分十人中箱，最后分单块！</p>
                                <div className="font-mono text-sm bg-white dark:bg-slate-700 p-4 rounded-lg text-slate-700 dark:text-slate-300 space-y-1">
                                    <p>4班分 456：</p>
                                    <p>① 4个【百】给 4个班，每班得 1百。正好分完。</p>
                                    <p>② 5个【十】给 4个班，每班得 1十，还剩 1个【十】。</p>
                                    <p>③ 剩下的 1十 和 6个单块 合成 16。分成 4班，每班 4块。</p>
                                    <p className="text-green-600 font-bold mt-2">答案：1百 + 1十 + 4块 = 114块！</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 收银员算账雷区</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 忘记自己在哪层楼</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">算十位的时候，直接跟个位对齐写！结果明明是算 230，你偏写个 23 放在个位下面！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 给十位留出位置</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">大声念出来：十位上乘出来的数都是几十！所以，最右边的位置（个位）要空着呀，或者放个隐藏的 “0” 占位置！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />收银员实战</h2>
                        <div className="space-y-5">
                            {[
                                { q: '小熊文具店进了 36 盒水彩笔，每盒 25 元。一共要付多少钱？', a: '先算买 5 盒多少钱：36 × 5 = 180 元\n再算买 20 盒多少钱：36 × 20 = 720 元\n最后加起来：180 + 720 = 900 元！' },
                                { q: '学校买了 525 本图画书，要平均分给 5 个班级。每个班级能分到多少本？', a: '先分百位：5个百 分给5个班，每班 1个百。\n再分十位：2个十 分给5个班，不够分，每班 0个十。\n最后分个位：连着刚才的2个十，一共是25本，分成5份，每班 5本。\n合起来就是：105本！' },
                                { q: '大货车运水果，每箱苹果 12 千克，运了 40 箱。一共运了多少千克苹果？', a: '算 12 × 40。先算 12 × 4 = 48，再在后面补一个 0（因为是40）。\n结果是 480 千克！' },
                                { q: '电影院每排有 22 个座位，一共有 13 排。这个电影院一共能坐多少人？', a: '先算 3 排：22 × 3 = 66 人\n再算 10 排：22 × 10 = 220 人\n加起来：66 + 220 = 286 人！' },
                                { q: '工厂要在 4 小时内生产 408 个零件。平均每小时要生产多少个？', a: '算 408 ÷ 4。\n百位上 4 ÷ 4 = 1\n十位上 0 ÷ 4 = 0 （不能漏掉哦！）\n个位上 8 ÷ 4 = 2\n结果是 102 个！' }
                            ].map((ex, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-3 text-lg">💰 顾客 {i + 1}：{ex.q}</p>
                                    <div className="pl-4 border-l-4 border-indigo-400 text-sm text-indigo-600 font-bold whitespace-pre-line"><p>{ex.a}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={300} type="choice" question="45 × 23 = ？" options={[{ label: 'A', value: '935' }, { label: 'B', value: '1035' }, { label: 'C', value: '1030' }, { label: 'D', value: '945' }]} answer="B" explanation="45×3=135，45×20=900，135+900=1035。" />
                    <PracticeProblem id={301} type="choice" question="648 ÷ 8 = ？" options={[{ label: 'A', value: '71' }, { label: 'B', value: '81' }, { label: 'C', value: '91' }, { label: 'D', value: '61' }]} answer="B" explanation="6÷8不够，64÷8=8，再看8÷8=1，所以648÷8=81。" />
                    <PracticeProblem id={302} type="choice" question="每套书 32 元，买 15 套一共需要多少钱？" options={[{ label: 'A', value: '480元' }, { label: 'B', value: '450元' }, { label: 'C', value: '420元' }, { label: 'D', value: '380元' }]} answer="A" explanation="32 × 15 = 480。可以先算 32×10=320，32×5=160，320+160=480。" />
                    <PracticeProblem id={303} type="choice" question="三（1）班有 42 名学生，每人买了一本 18 元的字典，全班一共花了多少钱？" options={[{ label: 'A', value: '756元' }, { label: 'B', value: '746元' }, { label: 'C', value: '766元' }, { label: 'D', value: '736元' }]} answer="A" explanation="42 × 18 = 756。42×10=420，42×8=336，420+336=756。" />
                    <PracticeProblem id={304} type="choice" question="一个两位数乘 11 的速算规律是什么？(例如 45 × 11)" options={[{ label: 'A', value: '直接在后面加一个1' }, { label: 'B', value: '两头一拉，中间相加' }, { label: 'C', value: '把原数乘以10' }, { label: 'D', value: '无法速算' }]} answer="B" explanation="两位数乘11，可以把这个两位数的十位和个位分开作为结果的百位和个位，中间填它们的和。如 45×11=495。" />
                    <PracticeProblem id={305} type="choice" question="果园里收了 846 千克橘子，准备分装在 6 个大筐里，平均每个大筐装多少千克？" options={[{ label: 'A', value: '141千克' }, { label: 'B', value: '131千克' }, { label: 'C', value: '151千克' }, { label: 'D', value: '121千克' }]} answer="A" explanation="846 ÷ 6 = 141。" />
                    <PracticeProblem id={306} type="choice" question="从 504 里面连续减去 7，减多少次结果是 0？" options={[{ label: 'A', value: '72次' }, { label: 'B', value: '62次' }, { label: 'C', value: '74次' }, { label: 'D', value: '70次' }]} answer="A" explanation="求减多少次是0，就相当于求 504 里面有几个 7。504 ÷ 7 = 72次。" />
                    <PracticeProblem id={307} type="choice" question="小明计算 26 × 34 时，先算了 26 × 4 = 104，接下来应该算什么？" options={[{ label: 'A', value: '26 × 3' }, { label: 'B', value: '26 × 30' }, { label: 'C', value: '6 × 30' }, { label: 'D', value: '20 × 30' }]} answer="B" explanation="竖式计算中，先算个位乘法，再算十位乘法。34 里的 3 代表 30，所以要算 26 × 30。" />
                    <PracticeProblem id={308} type="choice" question="如果一个数除以 9 的商是 24，而且有余数，这个被除数最大是多少？" options={[{ label: 'A', value: '216' }, { label: 'B', value: '224' }, { label: 'C', value: '225' }, { label: 'D', value: '215' }]} answer="B" explanation="除以 9，余数最大只能是 8。所以最大被除数 = 24 × 9 + 8 = 216 + 8 = 224。" />
                    <PracticeProblem id={309} type="choice" question="计算 312 ÷ 3 时，十位上的 '1' 不够除以 3，应该怎么办？" options={[{ label: 'A', value: '不用管它' }, { label: 'B', value: '直接把 1 落下来' }, { label: 'C', value: '在商的十位写 0' }, { label: 'D', value: '向前借一位' }]} answer="C" explanation="一位不够除，要在相应的位置上商 0 占位，然后再把下一位落下来一起除。" />
                </div>
            ),
            interactive: (
                <div className="space-y-12">
                    <MultiDigitMultiplicationLab />
                    <VerticalDivisionVisualizer />
                </div>
            )
        }
    },

    // ==================== L1-2. 分数的初步认识 ====================
    'g3-l1-fraction-intro': {
        meta: { title: "分数的初步认识 - 三年级数学 | AI7Miao数学", description: "认识分数，理解分子分母的含义，学会比较同分母分数大小和简单的分数加减法。", keywords: "分数,分子,分母,几分之几,三年级数学" },
        info: {
            title: "分数的初步认识",
            description: "蛋糕怎么切才公平？为什么1/4其实比1/8大？快来认识奇妙的『分数小精灵』，解锁分蛋糕的奥秘！🍰",
            tags: [{ text: "基础达标", color: "blue" }, { text: "30分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }]
        },
        aiContext: "学生初步认识分数。必须使用苏格拉底提问法。用『分蛋糕』和『比谁吃得多』的情境。问：我把蛋糕切成2块吃1块（1/2），你把同样的蛋糕切成4块吃1块（1/4），谁吃得更多？为什么『下面切的数字越大，每一块反而越小』？引导理解分母的意义，及要求【平均分】。",
        aiChatTitle: "🍰 分蛋糕大师",
        aiChatIntro: "滴答！烤箱响啦！一个大蛋糕新鲜出炉，准备好公平地分给小伙伴了吗？",
        aiMessages: [{ role: 'ai', content: '如果把一个比萨切成了8块，你吃了其中的3块。你吃掉的比萨用两层数字表示（像这样：3/8），底下那个代表什么？上面那个数字又代表什么呢？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-indigo-600" />分数小精灵的秘密</h2>
                        <div className="space-y-5">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">认识分子和分母</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300">一个蛋糕平均切开，想要精确表达别人吃了几块？分数来帮忙！</p>
                                <div className="flex items-center gap-6 my-3">
                                    <div className="text-center bg-white dark:bg-slate-700 p-3 rounded shadow-sm">
                                        <div className="text-4xl font-bold text-indigo-600">3</div>
                                        <div className="h-0.5 bg-indigo-600 my-1 w-12 mx-auto"></div>
                                        <div className="text-4xl font-bold text-indigo-600">4</div>
                                    </div>
                                    <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                                        <p>🍓 <strong>上面叫【分子】（3）</strong>：意思是“拿走了3块蛋糕”</p>
                                        <p>🔪 <strong>中间叫【分数线】</strong>：意思是“公平地平均切开”</p>
                                        <p>🎂 <strong>下面叫【分母】（4）</strong>：意思是“原本这个蛋糕被平均切成了4块”</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border-l-4 border-green-400">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">比一比谁的蛋糕多（同分母）</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300">既然大家都把蛋糕切成了5块（分母一样），那谁拿的块数（分子）多，谁就吃得越多呀！</p>
                                <p className="font-mono text-base mt-2 font-bold text-green-700">3/5 块 ＞ 2/5 块 ＞ 1/5 块</p>
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl border-l-4 border-orange-400">
                                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2">把蛋糕拼起来（加减法）</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-1">哥哥吃了 2/7，弟弟吃了 3/7。他们一共吃了几分之几？</p>
                                <p className="font-mono text-sm bg-white dark:bg-slate-800 p-2 inline-block rounded text-orange-700">2/7 + 3/7 = 5/7（蛋糕大小没变所以下面还是7，只要把上面吃的块数相加：2+3=5）</p>
                            </div>
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
                                <p className="text-sm text-slate-600 dark:text-slate-400">随便切一块蛋糕，就说是它的 1/4。</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 正确做法</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">必须是“平均分成4份”，每一份才是 1/4！大小不一样就不行哦。</p>
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
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />分蛋糕实战演练</h2>
                        <div className="space-y-4">
                            {[
                                { q: '小红把一根彩带平均剪成了 8 段，她送给好朋友 5 段。她送走了这根彩带的几分之几？', a: '送去了 5/8（八分之五）。' },
                                { q: '做游戏：5/9 的苹果 和 2/9 的苹果，如果小明把 2/9 吃掉了，还剩下几分之几？', a: '5/9 - 2/9 = 3/9（分母不变，分子 5 - 2 = 3）' },
                                { q: '谁吃得更多？小兔子吃了胡萝卜的 3/7，小海马吃了海带的 5/7（都是一样长的食物）', a: '小海马吃得多哦！因为 3/7 < 5/7。' },
                                { q: '妈妈买了一个西瓜，爸爸吃了它的 1/8，妈妈吃了它的 2/8。两人一共吃了这个西瓜的几分之几？', a: '1/8 + 2/8 = 3/8（分母 8 不变，分子 1 + 2 = 3）。' },
                                { q: '一根绳子，第一次用去它的 2/5，第二次用去它的 1/5。还剩下几分之几？', a: '一共用去：2/5 + 1/5 = 3/5。\n剩下的：1 - 3/5 = 2/5。' }
                            ].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-2 text-lg">🍰 挑战{i + 1}：{e.q}</p>
                                    <div className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold whitespace-pre-line"><p>{e.a}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={310} type="choice" question="1/4 + 2/4 = ？" options={[{ label: 'A', value: '2/8' }, { label: 'B', value: '3/8' }, { label: 'C', value: '3/4' }, { label: 'D', value: '2/4' }]} answer="C" explanation="同分母相加，分母4不变，分子1+2=3，结果是3/4。" />
                    <PracticeProblem id={311} type="choice" question="比较大小，下面哪个说法正确？" options={[{ label: 'A', value: '5/8 < 3/8' }, { label: 'B', value: '6/9 = 7/9' }, { label: 'C', value: '4/7 > 2/7' }, { label: 'D', value: '1/5 > 3/5' }]} answer="C" explanation="分母相同时分子大的大，4>2，所以4/7>2/7。" />
                    <PracticeProblem id={312} type="choice" question="把一块月饼平均分成 6 份，吃了其中的 2 份，吃了这块月饼的？" options={[{ label: 'A', value: '2/6' }, { label: 'B', value: '1/6' }, { label: 'C', value: '6/2' }, { label: 'D', value: '4/6' }]} answer="A" explanation="平均分成6份，分母是6；吃了2份，分子是2。所以是 2/6。" />
                    <PracticeProblem id={313} type="choice" question="判断：把一根绳子剪成两段，每段一定是这根绳子的 1/2。这种说法对吗？" options={[{ label: 'A', value: '对' }, { label: 'B', value: '不对' }, { label: 'C', value: '不确定' }, { label: 'D', value: '有时对' }]} answer="B" explanation="分数的基础是“平均分”。如果没有说明是“平均分成两段”，那其中一段就不一定是 1/2。" />
                    <PracticeProblem id={314} type="choice" question="1里面有几个 1/5 ？" options={[{ label: 'A', value: '1个' }, { label: 'B', value: '2个' }, { label: 'C', value: '5个' }, { label: 'D', value: '10个' }]} answer="C" explanation="1 可以看作是 5/5，也就是 5 个 1/5 组成的。" />
                    <PracticeProblem id={315} type="choice" question="计算 1 - 3/8 = ？" options={[{ label: 'A', value: '5/8' }, { label: 'B', value: '4/8' }, { label: 'C', value: '2/8' }, { label: 'D', value: '1/8' }]} answer="A" explanation="1 可以看作 8/8。8/8 - 3/8 = 5/8。" />
                    <PracticeProblem id={316} type="choice" question="比较 1/3 和 1/4 的大小，哪个更大？" options={[{ label: 'A', value: '1/3 更大' }, { label: 'B', value: '1/4 更大' }, { label: 'C', value: '一样大' }, { label: 'D', value: '无法比较' }]} answer="A" explanation="同分子比大小（分子都是1），分母越小，说明切的份数越少，每一份就越大。所以 1/3 > 1/4。" />
                    <PracticeProblem id={317} type="choice" question="小明吃了 3/7 的西瓜，小红吃了剩下的西瓜。他们谁吃得多？" options={[{ label: 'A', value: '小明吃得多' }, { label: 'B', value: '小红吃得多' }, { label: 'C', value: '一样多' }, { label: 'D', value: '不知道' }]} answer="B" explanation="小明吃了 3/7，剩下 1 - 3/7 = 4/7。小红吃了 4/7。因为 4/7 > 3/7，所以小红吃得多。" />
                    <PracticeProblem id={318} type="choice" question="分母是 9，分子是 5 的分数怎么读？" options={[{ label: 'A', value: '五分之九' }, { label: 'B', value: '九分之五' }, { label: 'C', value: '九点五' }, { label: 'D', value: '五点九' }]} answer="B" explanation="分数读法：先读分母，再读分之，最后读分子。所以读作：九分之五。" />
                    <PracticeProblem id={319} type="choice" question="妈妈切了一块大蛋糕，哥哥吃了 2/8，妹妹吃了 4/8。这块蛋糕吃完了吗？" options={[{ label: 'A', value: '吃完了' }, { label: 'B', value: '没吃完，还剩这块蛋糕的 2/8' }, { label: 'C', value: '没吃完，还剩这块蛋糕的 1/8' }, { label: 'D', value: '不知道大蛋糕有多大' }]} answer="B" explanation="两人一共吃了：2/8 + 4/8 = 6/8。1 - 6/8 = 2/8。所以没吃完，还剩 2/8。" />
                </div>
            )
        }
    },

    // ==================== L1-3. 周长计算 ====================
    'g3-l1-perimeter': {
        meta: { title: "周长计算（长正方形）- 三年级数学 | AI7Miao数学", description: "理解周长概念，掌握长方形和正方形周长公式，解决实际量周长问题。", keywords: "周长,长方形周长,正方形周长,三年级数学" },
        info: {
            title: "周长计算（长正方形）",
            description: "给小花园围上一圈漂亮的栅栏，到底需要买多长的木板呢？跟着蚂蚁卫兵走一圈，轻松拿捏『周长』大奥秘！🐜",
            tags: [{ text: "基础达标", color: "blue" }, { text: "30分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }]
        },
        aiContext: "学生学习长方形和正方形的周长。必须使用苏格拉底提问法。用『蚂蚁绕着花园走一圈』的情境。问：蚂蚁小黑沿着长方形花园走一圈，它其实走了两条长边和两条短边对不对？如果直接算 长+宽+长+宽 比较慢，能不能先算『一条长和一条宽』（也就是一半的路），然后再怎么做？（乘2）。引导学生自己总结出长方形周长公式。",
        aiChatTitle: "🐜 蚂蚁护卫长",
        aiChatIntro: "报告！我们蚂蚁护卫队要绕着国王的花园巡逻一圈，你能帮我算算要走多远吗？",
        aiMessages: [{ role: 'ai', content: '长方形花园的长是8米，宽是6米。如果我先沿着一条长边和一条宽边走，算出来是多少米？这走完了完整的一圈吗？剩下的路和刚刚走过的路有什么关系呢？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-indigo-600" />蚂蚁护卫队的测量秘籍</h2>
                        <div className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500 text-center flex flex-col justify-center">
                                    <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">秘籍 1：长方形花园</h3>
                                    <div className="font-mono text-lg font-bold text-indigo-600">C = (长 + 宽) × 2</div>
                                    <p className="text-xs text-slate-500 mt-2">走完一条长和一条宽（这是半圈），再把路程翻倍（×2），就是完整的一圈啦！</p>
                                </div>
                                <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500 text-center flex flex-col justify-center">
                                    <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">秘籍 2：正方形广场</h3>
                                    <div className="font-mono text-lg font-bold text-green-600">C = 边长 × 4</div>
                                    <p className="text-xs text-slate-500 mt-2">正方形有四条一模一样的边，只要量出其中一条，乘4就行！是不是超级快？</p>
                                </div>
                            </div>
                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border-l-4 border-yellow-400">
                                <p className="font-bold text-yellow-800 dark:text-yellow-300">💡 护卫长小笔记</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">『周长』就是围棋盘的边界一样，是一条<strong>线</strong>的长度。在算长方形的时候，千万别忘了把 (长+宽) 括起来，算完了再乘2哦！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 测量陷阱大全</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 只量了半圈</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">算出 长方形周长 = 长 + 宽！喂，蚂蚁只走了对面那两条边，剩下的两条边飞过去吗？</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 周长必须封闭！</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">"周"代表周围一整圈哦！走完一条长和一条宽，只走了一半。必须用括号括起来 (长+宽) 再乘 2 呀！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <PerimeterAreaLab />
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />护卫队实战演练</h2>
                        <div className="space-y-4">
                            {[
                                { q: '蚂蚁要去巡视长方形花坛。花坛长 12厘米，宽 5厘米。蚂蚁绕场一周要走多远？', a: '先算半圈走多远：12 + 5 = 17 厘米\n再把半圈翻倍：17 × 2 = 34 厘米！' },
                                { q: '小方巾是一个正方形，每条边都是 7分米 长。四周缝上一圈蕾丝花边，花边需要多长？', a: '有 4 条一样长的边：7 × 4 = 28 分米！' },
                                { q: '挑战：一块长方形草地，蚂蚁走一圈是 50 米。已知宽是 10 米，那么长是多少米？', a: '半圈（一条长+一条宽）就是 50 ÷ 2 = 25 米。\n长 = 25 - 10 = 15 米啦！' },
                                { q: '一个正方形的边长是 9 厘米，它的周长是多少？', a: '9 × 4 = 36 厘米。' },
                                { q: '一个长方形的长是 20 分米，宽是 10 分米，它的周长是多少分米？', a: '(20 + 10) × 2 = 30 × 2 = 60 分米。' }
                            ].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-2 text-lg">🚩 任务 {i + 1}：{e.q}</p>
                                    <div className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono whitespace-pre-line"><p>{e.a}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={320} type="choice" question="长方形长9cm，宽4cm，周长是？" options={[{ label: 'A', value: '24cm' }, { label: 'B', value: '26cm' }, { label: 'C', value: '36cm' }, { label: 'D', value: '13cm' }]} answer="B" explanation="C=(9+4)×2=13×2=26cm。" />
                    <PracticeProblem id={321} type="choice" question="正方形周长32cm，其边长是？" options={[{ label: 'A', value: '6cm' }, { label: 'B', value: '8cm' }, { label: 'C', value: '10cm' }, { label: 'D', value: '12cm' }]} answer="B" explanation="边长=32÷4=8cm。" />
                    <PracticeProblem id={322} type="choice" question="一个正方形的花坛，边长是 5 米，绕着花坛走一圈是多少米？" options={[{ label: 'A', value: '10米' }, { label: 'B', value: '15米' }, { label: 'C', value: '20米' }, { label: 'D', value: '25米' }]} answer="C" explanation="正方形周长 = 边长 × 4 = 5 × 4 = 20 米。" />
                    <PracticeProblem id={323} type="choice" question="用一根长 24 厘米的铁丝，围成一个正方形，这个正方形的边长是多少？" options={[{ label: 'A', value: '6厘米' }, { label: 'B', value: '8厘米' }, { label: 'C', value: '4厘米' }, { label: 'D', value: '12厘米' }]} answer="A" explanation="周长是24厘米，求正方形边长：24 ÷ 4 = 6 厘米。" />
                    <PracticeProblem id={324} type="choice" question="一个长方形的操场，长 100 米，宽 60 米。小明绕着操场跑了 1 圈，他跑了多少米？" options={[{ label: 'A', value: '160米' }, { label: 'B', value: '320米' }, { label: 'C', value: '300米' }, { label: 'D', value: '200米' }]} answer="B" explanation="长方形周长 = (100 + 60) × 2 = 160 × 2 = 320 米。" />
                    <PracticeProblem id={325} type="choice" question="把两个边长是 3 厘米的正方形拼成一个长方形，这个长方形的周长是多少？" options={[{ label: 'A', value: '18厘米' }, { label: 'B', value: '24厘米' }, { label: 'C', value: '15厘米' }, { label: 'D', value: '12厘米' }]} answer="A" explanation="拼成的长方形长是 3+3=6厘米，宽是 3厘米。周长 =(6+3)×2 = 18 厘米。（或者：原来周长3×4×2=24，少了两条拼在一起的边3×2=6，24-6=18）。" />
                    <PracticeProblem id={326} type="choice" question="一个长方形的周长是 30 分米，长是 10 分米，宽是多少分米？" options={[{ label: 'A', value: '20分米' }, { label: 'B', value: '15分米' }, { label: 'C', value: '10分米' }, { label: 'D', value: '5分米' }]} answer="D" explanation="一条长+一条宽 = 周长 ÷ 2 = 30 ÷ 2 = 15 分米。宽 = 15 - 10 = 5 分米。" />
                    <PracticeProblem id={327} type="choice" question="一块长方形菜地，长 8 米，宽 5 米。如果一面靠墙，另外三面围上篱笆，至少需要多少米篱笆？" options={[{ label: 'A', value: '18米' }, { label: 'B', value: '26米' }, { label: 'C', value: '21米' }, { label: 'D', value: '13米' }]} answer="A" explanation="要使篱笆最少，得把最长的那条边（8米）靠着墙。所以篱笆是：两条宽 + 一条长 = 5×2 + 8 = 18 米。" />
                    <PracticeProblem id={328} type="choice" question="甲正方形的边长是乙正方形边长的 2 倍，那么甲正方形的周长是乙正方形周长的几倍？" options={[{ label: 'A', value: '2倍' }, { label: 'B', value: '4倍' }, { label: 'C', value: '8倍' }, { label: 'D', value: '1倍' }]} answer="A" explanation="边长扩大到原来的两倍，所有的边都扩大到两倍，所以加起来的周长也扩大到两倍。（面积才是4倍哦）" />
                    <PracticeProblem id={329} type="choice" question="一根绳子长 40 厘米，第一次圈成一个正方形，第二次圈成一个长方形，它们的周长谁大？" options={[{ label: 'A', value: '正方形大' }, { label: 'B', value: '长方形大' }, { label: 'C', value: '一样大' }, { label: 'D', value: '无法比较' }]} answer="C" explanation="都是同一根绳子圈成的，所以不论圈成什么形状，它的周长就是这根绳子的长度，都是 40 厘米。" />
                </div>
            )
        }
    },

    // ==================== L1-4. 质量单位 ====================
    'g3-l1-mass-unit': {
        meta: { title: "质量单位 - 三年级数学 | AI7Miao数学", description: "认识克(g)和千克(kg)，理解质量单位的换算，学会在实际情境中选用合适单位。", keywords: "质量单位,克,千克,kg,g,三年级数学" },
        info: {
            title: "质量单位",
            description: "一片羽毛有多重？一头大象有多重？学会使用『克』和『千克』这两个魔法砝码，成为超级称重师！⚖️",
            tags: [{ text: "基础达标", color: "blue" }, { text: "20分钟", icon: Clock, color: "slate" }]
        },
        aiContext: "学生学习质量单位克(g)和千克(kg)。必须使用苏格拉底提问法。用『魔法天平』的情境。问：如果1颗葡萄大概重1克，那1千克（1000克）大概相当于多少颗葡萄？如果要称一头大象，用“克”来称的话数字是不是太长太多了？引导理解为什么我们需要『克』和『千克』两个大小不同的单位，以及它们之间的换算关系。",
        aiChatTitle: "⚖️ 超级称重师",
        aiChatIntro: "嘿！我是天平精灵。我左右两个盘子里，放什么东西能让它们保持平衡呢？",
        aiMessages: [{ role: 'ai', content: '如果我告诉你，1个 1千克(kg) 的大铁砣，和 1000个 1克(g) 的小铁钉一样重。那你能不能猜到，3个 1千克 的大铁砣，如果全换成小铁钉，会变成多少个呢？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-indigo-600" />天平精灵的魔法砝码</h2>
                        <div className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                    <h3 className="font-bold text-blue-800 dark:text-blue-300 flex items-center gap-2">🪶 小巧玲珑的『克』(g)</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">专门用来称比较轻的宝贝！</p>
                                    <div className="text-sm text-slate-700 dark:text-slate-300 mt-3 space-y-2 font-mono">
                                        <p>一枚1角硬币：约 <span className="text-blue-600 font-bold">1克</span></p>
                                        <p>一颗大葡萄：约 <span className="text-blue-600 font-bold">5克</span></p>
                                        <p>一个大鸡蛋：约 <span className="text-blue-600 font-bold">60克</span></p>
                                    </div>
                                </div>
                                <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500">
                                    <h3 className="font-bold text-green-800 dark:text-green-300 flex items-center gap-2">🐘 力大无穷的『千克』(kg)</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">遇到大家伙，就轮到它出场啦！</p>
                                    <div className="text-sm text-slate-700 dark:text-slate-300 mt-3 space-y-2 font-mono">
                                        <p>两包食用盐：刚好 <span className="text-green-600 font-bold">1千克</span></p>
                                        <p>一个大西瓜：约 <span className="text-green-600 font-bold">5千克</span></p>
                                        <p>三年级小朋友：约 <span className="text-green-600 font-bold">30千克</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl border-l-4 border-orange-400 text-center flex flex-col justify-center items-center py-8 hover:scale-[1.02] transition-transform">
                                <p className="text-sm text-orange-800 dark:text-orange-300 mb-2 font-bold">天平的终极秘密咒语：</p>
                                <span className="text-3xl font-bold font-mono text-orange-700 dark:text-orange-300">1 千克 = 1000 克</span>
                                <p className="text-xs text-orange-700/80 dark:text-orange-400/80 mt-2">( 1个 千克大佬 = 拿 1000个 克小弟 才换得到！ )</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 砝码大乌龙</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 关公大战秦琼（乱比较）</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">觉得 500 克 比 2 千克重，因为 500 这个数字比 2 大多了！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 必须换成同样的单位</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">比大小之前，先换算！把 2 千克 变成 2000 克。你看，2000 克 当然比 500 克大得多呀！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />称重师试炼</h2>
                        <div className="space-y-4">
                            {[
                                { q: '小熊买了 3 千克 (kg) 的蜂蜜，如果分装成小瓶，等于多少 克 (g)？', a: '1千克是1000克。\n3个千克，就是 3个 1000克！\n3 × 1000 = 3000 克 (g)' },
                                { q: '小猴摘了 2500 克 (g) 的桃子。这等于几千克又几克？', a: '满 1000 克就能换 1 千克！\n2500 里面有 2 个 1000，还多出 500。\n所以是 2 千克 (kg) 500 克 (g)！' },
                                { q: '一袋盐重 500 克，两袋这样的盐重多少千克？', a: '500 + 500 = 1000 克。\n1000 克 = 1 千克 (kg)。' },
                                { q: '一头牛重 400 千克，一头大象的体重是它的 5 倍。大象重多少千克？', a: '400 × 5 = 2000 千克 (kg)。' },
                                { q: '妈妈买了 1 千克苹果，吃了 400 克。还剩多少克？', a: '1 千克 = 1000 克。\n1000 - 400 = 600 克 (g)。' }
                            ].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-2 text-lg">⚖️ 考验 {i + 1}：{e.q}</p>
                                    <div className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono whitespace-pre-line"><p>{e.a}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={330} type="choice" question="4kg 500g = ___g" options={[{ label: 'A', value: '450g' }, { label: 'B', value: '4500g' }, { label: 'C', value: '45000g' }, { label: 'D', value: '405g' }]} answer="B" explanation="4kg=4000g，4000+500=4500g。" />
                    <PracticeProblem id={331} type="choice" question="一袋糖果重600g，买5袋共多少kg多少g？" options={[{ label: 'A', value: '3kg' }, { label: 'B', value: '2kg500g' }, { label: 'C', value: '3000g' }, { label: 'D', value: '3kg和A相同' }]} answer="A" explanation="600×5=3000g=3kg。" />
                    <PracticeProblem id={332} type="choice" question="一个正常的苹果大约重多少？" options={[{ label: 'A', value: '200克' }, { label: 'B', value: '2克' }, { label: 'C', value: '2千克' }, { label: 'D', value: '20千克' }]} answer="A" explanation="200克大约是一个大苹果的重量。2克太轻，2千克（4斤）太重了。" />
                    <PracticeProblem id={333} type="choice" question="比较大小： 3千克 （ ） 2900克" options={[{ label: 'A', value: '>' }, { label: 'B', value: '<' }, { label: 'C', value: '=' }, { label: 'D', value: '无法比较' }]} answer="A" explanation="3千克 = 3000克。3000克 > 2900克。" />
                    <PracticeProblem id={334} type="choice" question="一瓶矿泉水连瓶重 520 克，喝了一半水后连瓶重 270 克。这瓶矿泉水原来的水重多少克？" options={[{ label: 'A', value: '250克' }, { label: 'B', value: '500克' }, { label: 'C', value: '520克' }, { label: 'D', value: '270克' }]} answer="B" explanation="喝掉的一半水重：520 - 270 = 250克。所以原来的水总共重 250 × 2 = 500克。（瓶子自重20克）。" />
                    <PracticeProblem id={335} type="choice" question="电梯上写着限载 1000 千克（1吨）。如果每个大人的体重按 50 千克算，这部电梯最多能坐几个大人？" options={[{ label: 'A', value: '10个' }, { label: 'B', value: '15个' }, { label: 'C', value: '20个' }, { label: 'D', value: '25个' }]} answer="C" explanation="1000 ÷ 50 = 20 个。" />
                    <PracticeProblem id={336} type="choice" question="下列哪种动物的体重大约是 4 千克？" options={[{ label: 'A', value: '一头大象' }, { label: 'B', value: '一只刚出生的老鼠' }, { label: 'C', value: '一只肥猫' }, { label: 'D', value: '一头牛' }]} answer="C" explanation="4千克（8斤）正好是一只胖胖的家猫的重量。刚出生的老鼠很轻是克，大象和牛都很重通常算吨或几百千克。" />
                    <PracticeProblem id={337} type="choice" question="1 千克的铁 和 1000 克的棉花 谁更重？" options={[{ label: 'A', value: '1千克的铁重' }, { label: 'B', value: '1000克的棉花重' }, { label: 'C', value: '一样重' }, { label: 'D', value: '无法比较' }]} answer="C" explanation="因为 1千克 = 1000克。虽然体积不一样，但它们的质量（重量）是一样重的！" />
                    <PracticeProblem id={338} type="choice" question="妈妈买了 2 千克草莓，第一天吃了 800 克，还剩多少克？" options={[{ label: 'A', value: '1200克' }, { label: 'B', value: '2800克' }, { label: 'C', value: '200克' }, { label: 'D', value: '1000克' }]} answer="A" explanation="先换算单位：2千克 = 2000克。2000 - 800 = 1200克。" />
                    <PracticeProblem id={339} type="choice" question="5 包薯片，每包重 200 克。这 5 包薯片一共重多少千克？" options={[{ label: 'A', value: '1千克' }, { label: 'B', value: '10千克' }, { label: 'C', value: '100千克' }, { label: 'D', value: '1000千克' }]} answer="A" explanation="5 包总重量：200 × 5 = 1000克。1000克 = 1千克。" />
                </div>
            ),
            interactive: (
                <MassUnitLab />
            )
        }
    },

    // ==================== L2-1. 植树问题 ====================
    'g3-l2-tree-planting': {
        meta: { title: "植树问题 - 三年级思维进阶 | AI7Miao数学", description: "掌握直线植树、环形植树的棵数与间隔数的关系，解决实际植树问题。", keywords: "植树问题,间隔数,棵数,三年级思维进阶" },
        info: {
            title: "植树问题",
            description: "长长的马路边，要想每栋房子旁边都种上一棵魔法树，到底需要准备多少颗树种呢？伸出你的小手，我们一起来数一数吧！🌳",
            tags: [{ text: "思维进阶", color: "purple" }, { text: "35分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }]
        },
        aiContext: "学生学习植树问题。必须使用苏格拉底提问法。用『数手指和指缝』的情境。问：伸出一只手，你有5根手指，但手指之间有几个缝隙（间隔）呢？如果把手指当成树，把缝隙当成树和树之间的路段，距离和树的数量有什么关系？引导理解『两端都种时，树的数量比间隔数多1』。",
        aiChatTitle: "🌳 森林建造师",
        aiChatIntro: "你好呀！国王让我在这条新修的马路上种满漂亮的苹果树，你能来帮帮我吗？",
        aiMessages: [{ role: 'ai', content: '伸出你的一只手，数一数有几根手指？再数一数手指之间有几个『缝隙』？如果我把手指看作一棵棵小树，把缝隙看作树和树之间的距离，你有没有发现小树和距离之间数量的秘密？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Brain className="w-6 h-6 text-purple-600" />建造师的数树秘法</h2>
                        <div className="space-y-5">
                            {[
                                { title: '秘法 1：路头路尾都要种（像手指一样）', formula: '树的数量 = 距离的段数 + 1', note: '段数怎么算？总长度 ÷ 每段的距离', color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-400' },
                                { title: '秘法 2：路头路尾都不种（被房子挡住了）', formula: '树的数量 = 距离的段数 - 1', note: '因为两头没法种，所以要减掉1棵', color: 'bg-green-50 dark:bg-green-900/20 border-green-400' },
                                { title: '秘法 3：围成一个圈（像手链首尾相连）', formula: '树的数量 = 距离的段数', note: '首尾相连啦，段数和树的数量正好一样多！', color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-400' },
                            ].map(s => (
                                <div key={s.title} className={`p-4 rounded-xl border-l-4 ${s.color}`}>
                                    <p className="font-bold text-slate-800 dark:text-white">{s.title}</p>
                                    <p className="font-mono text-sm text-indigo-600 mt-2 font-bold">{s.formula}</p>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{s.note}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 建造师的粗心陷阱</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 距离除以间隔 = 树的棵数</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">比如 120米长，每隔8米种一棵。直接 120 ÷ 8 = 15棵！完蛋，有一头忘记种树啦！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 分清情况再加减</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">除出来的 15 是『有几个缝隙』！如果是直直的马路两头都种，你要加 1（像手指头比缝隙多1个）。如果是围城圈圈，才是不加不减呢！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <TreePlantingLab />
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />森林建造实战</h2>
                        <div className="space-y-4">
                            {[
                                { q: '国王修了一条 120米 长的路，如果每隔 8米 种一棵小树，这条路的 两头都要种，一共需要多少棵小树？', a: '先算距离有几段：120 ÷ 8 = 15 段\n两头都要种（像手指一样）：树数 = 15段 + 1 = 16 棵！' },
                                { q: '广场中央有一个圆形的许愿池，它绕一圈有 60米 长。如果在水池边每 3米 种一棵，一共要几棵？', a: '先算距离有几段：60 ÷ 3 = 20 段\n围成一个圈哦：树数 = 段数 = 20 棵！' },
                                { q: '要在 100 米长的马路一侧安装路灯，每隔 10 米安装一盏（一端装一端不装），需要多少盏路灯？', a: '一端装一端不装时，灯数 = 间隔数。\n100 ÷ 10 = 10 盏！' },
                                { q: '在一条 50 米长的跑道一侧插彩旗，每隔 5 米插一面（两端都不插），一共要几面？', a: '间隔数 = 50 ÷ 5 = 10 段。\n两端都不插：10 - 1 = 9 面！' },
                                { q: '把一根木头锯成 5 段，每锯一次要 4 分钟。一共要多少分钟？', a: '锯成 5 段只需锯 4 次。\n4 × 4 = 16 分钟！' }
                            ].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-2 text-lg">📝 蓝图 {i + 1}：{e.q}</p>
                                    <div className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold whitespace-pre-line"><p>{e.a}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={340} type="choice" question="一条路长90m，每9m种一棵路灯柱（两端都立），共需几根？" options={[{ label: 'A', value: '9根' }, { label: 'B', value: '10根' }, { label: 'C', value: '11根' }, { label: 'D', value: '8根' }]} answer="C" explanation="间隔数=90÷9=10，两端都种：棵数=10+1=11根。" />
                    <PracticeProblem id={341} type="choice" question="正方形花坛边长10m，每2m种一盆花（四角各种一盆），共几盆？" options={[{ label: 'A', value: '16盆' }, { label: 'B', value: '20盆' }, { label: 'C', value: '24盆' }, { label: 'D', value: '15盆' }]} answer="B" explanation="周长=10×4=40m，间隔数=40÷2=20，环形：棵数=20盆。" />
                    <PracticeProblem id={342} type="choice" question="在一条长 50 米的跑道一侧插彩旗，每隔 5 米插一面（两端都不插），一共要插多少面彩旗？" options={[{ label: 'A', value: '9面' }, { label: 'B', value: '10面' }, { label: 'C', value: '11面' }, { label: 'D', value: '8面' }]} answer="A" explanation="间隔数 = 50 ÷ 5 = 10 段。因为两端都不插，所以彩旗数 = 10 - 1 = 9 面。" />
                    <PracticeProblem id={343} type="choice" question="一条马路长 200 米，在马路的两侧每隔 10 米种一棵树（两端都种），一共要种多少棵树？" options={[{ label: 'A', value: '20棵' }, { label: 'B', value: '21棵' }, { label: 'C', value: '40棵' }, { label: 'D', value: '42棵' }]} answer="D" explanation="先算一侧：间隔=200÷10=20段，一侧种树=20+1=21棵。因为是两侧都要种，所以 21 × 2 = 42棵。" />
                    <PracticeProblem id={344} type="choice" question="时钟敲 4 下用 6 秒钟，敲 6 下要用几秒钟？" options={[{ label: 'A', value: '8秒' }, { label: 'B', value: '9秒' }, { label: 'C', value: '10秒' }, { label: 'D', value: '12秒' }]} answer="C" explanation="敲钟问题也是植树问题。敲4下有 4-1=3个间隔，每个间隔用时 6÷3=2秒。敲6下有 6-1=5个间隔，5×2=10秒。" />
                    <PracticeProblem id={345} type="choice" question="把一根木头锯成 6 段，每锯一次需要 3 分钟，一共需要多少分钟？" options={[{ label: 'A', value: '18分钟' }, { label: 'B', value: '15分钟' }, { label: 'C', value: '12分钟' }, { label: 'D', value: '21分钟' }]} answer="B" explanation="锯成 6 段只需锯 6-1=5 次。总时间 = 5 × 3 = 15 分钟。" />
                    <PracticeProblem id={346} type="choice" question="一个圆形水池周长 60 米，每隔 3 米放一盆菊花，一共需要放多少盆菊花？" options={[{ label: 'A', value: '19盆' }, { label: 'B', value: '20盆' }, { label: 'C', value: '21盆' }, { label: 'D', value: '18盆' }]} answer="B" explanation="圆形是封闭路线（首尾相接），盆数 = 间隔数。 60 ÷ 3 = 20 盆。" />
                    <PracticeProblem id={347} type="choice" question="同学们排队做操，从第一名到最后一名相距 18 米，每两人之间相距 2 米，这一排一共有多少名同学？" options={[{ label: 'A', value: '8名' }, { label: 'B', value: '9名' }, { label: 'C', value: '10名' }, { label: 'D', value: '11名' }]} answer="C" explanation="排队相当于“两端都种树”。间隔数 = 18 ÷ 2 = 9。同学数 = 9 + 1 = 10 名。" />
                    <PracticeProblem id={348} type="choice" question="大雁排成一字形飞，队伍长 15 米，相邻两只大雁相隔 3 米。这群大雁共有几只？" options={[{ label: 'A', value: '4只' }, { label: 'B', value: '5只' }, { label: 'C', value: '6只' }, { label: 'D', value: '7只' }]} answer="C" explanation="也是两端都种。15 ÷ 3 = 5个间隔， 5 + 1 = 6只。" />
                    <PracticeProblem id={349} type="choice" question="10 棵梧桐树排成一排，每两棵梧桐树之间种一棵银杏树，一共要种多少棵银杏树？" options={[{ label: 'A', value: '9棵' }, { label: 'B', value: '10棵' }, { label: 'C', value: '11棵' }, { label: 'D', value: '8棵' }]} answer="A" explanation="种在树的中间，所以银杏数就是梧桐树的“间隔数”。10棵树有 10 - 1 = 9 个间隔，种 9 棵。" />
                </div>
            )
        }
    },

    // ==================== L2-2. 鸡兔同笼 ====================
    'g3-l2-chicken-rabbit': {
        meta: { title: "鸡兔同笼（初阶）- 三年级思维进阶 | AI7Miao数学", description: "学习假设法解决鸡兔同笼问题，培养逻辑推理和方程思维。", keywords: "鸡兔同笼,假设法,三年级思维进阶" },
        info: {
            title: "鸡兔同笼（初阶）",
            description: "嘘，农场里来了一群神秘小客！它们有的两条腿，有的四条腿，不露出真面目，你能猜出它们是谁吗？🕵️‍♂️",
            tags: [{ text: "思维进阶", color: "purple" }, { text: "40分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }]
        },
        aiContext: "学生学习鸡兔同笼问题。必须使用苏格拉底提问法。用『动物学魔法』的情境。问：如果所有的兔子都学鸡一样，用两条后腿站起来隐藏起两只前爪，那么笼子里的脚的总数会变成多少？少的那些脚去哪了？引导理解『假设全是鸡，相差的脚数除以2就是兔子的数量』。避免直接给出公式，让学生在这个推理过程中自己领悟出计算方法。",
        aiChatTitle: "🕵️‍♂️ 农场大侦探",
        aiChatIntro: "嘿！我是农场大侦探，今天遇到了一个奇妙的谜题，你能和我一起解开吗？",
        aiMessages: [{ role: 'ai', content: '有一个笼子里关着鸡和兔，一共10个脑袋。如果这时候我施了一个魔法：让所有的兔子都像鸡一样，只用两条后腿站着！你想想看，这时候笼子里会有多少只脚站在地上？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Brain className="w-6 h-6 text-purple-600" />大侦探的悬疑推理</h2>
                        <div className="space-y-5">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3 block">🕵️‍♂️ 推理三部曲（魔法变身法）</h3>
                                <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                                    <p className="bg-white dark:bg-slate-700 p-2 rounded">① <strong>施法变身</strong>：假设大家全是两条腿的鸡，那地上一共该有几条腿呀？</p>
                                    <p className="bg-white dark:bg-slate-700 p-2 rounded">② <strong>寻找破绽</strong>：实际的腿，比我们刚才算出来的腿，多出来几条呢？</p>
                                    <p className="bg-white dark:bg-slate-700 p-2 rounded">③ <strong>现出原形</strong>：多出来的腿，肯定都是偷偷藏起前爪的兔子贡献的！一只兔子藏了2条腿，那么多出来的腿里藏了多少只兔子呢？(多出来的腿 ÷ 2 = 兔子！)</p>
                                </div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-400">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">🔍 案例档案：神秘的54只脚</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">案件线索：一共 20个头，可是却有 54只脚！</p>
                                <div className="font-mono text-sm text-slate-700 dark:text-slate-300 space-y-2">
                                    <p>🪄 假设全是鸡：20个头 × 2只脚 = 40只脚</p>
                                    <p>🤔 寻找破绽：实际 54脚 - 刚才算的 40脚 = 14只脚 （多出来了！）</p>
                                    <p>🐇 现出原形：1只兔子藏2只脚，14 ÷ 2 = <strong className="text-purple-600 text-base">7只兔子</strong></p>
                                    <p>🐔 剩下的是鸡：一共20个小家伙 - 7只兔子 = <strong className="text-blue-600 text-base">13只鸡</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 算错腿的乌龙事件</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 算出来的全当成鸡</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">费好大劲最后算出那“多出来的腿 ÷ 2 = 7”。哎呀！7 只鸡！—— 小心啦，弄反了！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 想想是谁在捣鬼？</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">因为我们一开始【假设全是鸡】，那【多出来的腿】必定是偷偷藏起两只脚的兔子给的！所以算出来的这个 7，它当然是【兔子】呀！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <ChickenRabbitLab />
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />侦探接案中</h2>
                        <div className="space-y-4">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2 text-lg">🚗 案件 1：停车场谜团</p>
                                <p className="text-slate-700 mb-2">停车场有轿车(4轮)和摩托(2轮)共 30 辆，轮子 96 个。各几辆？</p>
                                <div className="pl-4 border-l-4 border-purple-400 text-sm text-slate-700 dark:text-slate-300 font-mono space-y-1">
                                    <p>假设全摩托：30 × 2 = 60 轮。差 = 96 - 60 = 36 轮。</p>
                                    <p>轿车 = 36 ÷ 2 = 18 辆。摩托 = 30 - 18 = 12 辆。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2 text-lg">🥚 案件 2：鸡兔同笼</p>
                                <p className="text-slate-700 mb-2">笼子里有鸡和兔共 10 个头，32 只脚。鸡和兔各几只？</p>
                                <div className="pl-4 border-l-4 border-green-400 text-sm text-slate-700 dark:text-slate-300 font-mono space-y-1">
                                    <p>假设全是鸡：10 × 2 = 20 脚。差 = 32 - 20 = 12 脚。</p>
                                    <p>兔子 = 12 ÷ 2 = 6 只。鸡 = 10 - 6 = 4 只。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2 text-lg">🦢 案件 3：鹅和羊</p>
                                <p className="text-slate-700 mb-2">草地上有鹅(2脚)和羊(4脚)共 20 只，总脚数 64。鹅和羊各几只？</p>
                                <div className="pl-4 border-l-4 border-blue-400 text-sm text-slate-700 dark:text-slate-300 font-mono space-y-1">
                                    <p>假设全是鹅：20 × 2 = 40 脚。差 = 64 - 40 = 24 脚。</p>
                                    <p>羊 = 24 ÷ 2 = 12 只。鹅 = 20 - 12 = 8 只。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2 text-lg">📝 案件 4：测试卷</p>
                                <p className="text-slate-700 mb-2">10 道题，对一题得 5 分，错一题扣 2 分。小明得 29 分。对了几题？</p>
                                <div className="pl-4 border-l-4 border-orange-400 text-sm text-slate-600 dark:text-slate-400 font-mono space-y-1">
                                    <p>假设全对：10 × 5 = 50 分。差 = 50 - 29 = 21 分。</p>
                                    <p>错一题差 = 5 + 2 = 7 分。错 = 21 ÷ 7 = 3 题。对 = 7 题。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2 text-lg">🕸️ 案件 5：蜘蛛和蜻蜓</p>
                                <p className="text-slate-700 mb-2">蜘蛛(8脚)和蜻蜓(6脚)共 10 只，脚 68 只。蜘蛛几只？</p>
                                <div className="pl-4 border-l-4 border-red-400 text-sm text-slate-700 dark:text-slate-300 font-mono space-y-1">
                                    <p>假设全蜻蜓：10 × 6 = 60 脚。差 = 68 - 60 = 8 脚。</p>
                                    <p>蜘蛛 = 8 ÷ (8-6) = 4 只。蜻蜓 = 6 只。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={350} type="choice" question="鸡兔同笼，头15，脚42，兔有几只？" options={[{ label: 'A', value: '5只' }, { label: 'B', value: '6只' }, { label: 'C', value: '7只' }, { label: 'D', value: '9只' }]} answer="B" explanation="假设全鸡：15×2=30脚，差值=42-30=12，兔=12÷2=6只。" />
                    <PracticeProblem id={351} type="choice" question="鸡兔同笼，头25，脚76，鸡有几只？" options={[{ label: 'A', value: '11只' }, { label: 'B', value: '12只' }, { label: 'C', value: '13只' }, { label: 'D', value: '14只' }]} answer="B" explanation="假设全鸡：25×2=50脚，差值=76-50=26，兔=26÷2=13只，鸡=25-13=12只。注意问的是鸡。" />
                    <PracticeProblem id={352} type="choice" question="停车场有自行车（2轮）和三轮车（3轮），共 10 辆，轮子 26 个。自行车有几辆？" options={[{ label: 'A', value: '4辆' }, { label: 'B', value: '5辆' }, { label: 'C', value: '6辆' }, { label: 'D', value: '7辆' }]} answer="A" explanation="假设全是自行车：10×2=20轮，差=26-20=6。因为三轮比两轮多1个轮子，所以三轮车：6÷(3-2)=6辆。自行车：10-6=4辆。" />
                    <PracticeProblem id={353} type="choice" question="一份测试卷有 10 道题，做对一题得 5 分，做错一题扣 2 分。小明得了 29 分，他做对了多少题？" options={[{ label: 'A', value: '6题' }, { label: 'B', value: '7题' }, { label: 'C', value: '8题' }, { label: 'D', value: '9题' }]} answer="B" explanation="假设全对：10×5=50分。差=50-29=21分。错一题不仅得不到5分，还要扣2分，一来一回差=5+2=7分。错题数=21÷7=3题。对题数=10-3=7题。" />
                    <PracticeProblem id={354} type="choice" question="农场里有鸭和猪共 30 只，它们的腿加起来一共有 80 条。猪有多少只？" options={[{ label: 'A', value: '10只' }, { label: 'B', value: '15只' }, { label: 'C', value: '20只' }, { label: 'D', value: '8只' }]} answer="A" explanation="假设全是鸭（2腿）：30×2=60条腿。差=80-60=20条腿。猪（4腿）=20÷2=10只。" />
                    <PracticeProblem id={355} type="choice" question="小红有 2 元和 5 元的纸币共 12 张，一共 39 元。5 元的纸币有几张？" options={[{ label: 'A', value: '5张' }, { label: 'B', value: '6张' }, { label: 'C', value: '7张' }, { label: 'D', value: '8张' }]} answer="A" explanation="假设全是2元：12×2=24元。差=39-24=15元。5元纸币张数：15÷(5-2)=5张。" />
                    <PracticeProblem id={356} type="choice" question="蜘蛛（8条腿）和蜻蜓（6条腿）共有 15 只，腿总数是 106 条。蜘蛛有多少只？" options={[{ label: 'A', value: '6只' }, { label: 'B', value: '7只' }, { label: 'C', value: '8只' }, { label: 'D', value: '9只' }]} answer="C" explanation="假设全是蜻蜓：15×6=90条腿。差=106-90=16条腿。蜘蛛：16÷(8-6)=8只。" />
                    <PracticeProblem id={357} type="choice" question="在一个笼子里，所有的动物都是 4 条腿，一共有 20 个头。请问一共有多少条腿？" options={[{ label: 'A', value: '40条' }, { label: 'B', value: '60条' }, { label: 'C', value: '80条' }, { label: 'D', value: '无法计算' }]} answer="C" explanation="既然都是4条腿，而且有20个头，那其实就是普通的乘法：20 × 4 = 80 条腿。（不是鸡兔同笼哦，是脑筋急转弯）" />
                    <PracticeProblem id={358} type="choice" question="甲乙两人参加投篮比赛，共投了 20 个球。投进一个得 2 分，没投进扣 1 分。结果得了 31 分，投进了几个球？" options={[{ label: 'A', value: '16个' }, { label: 'B', value: '17个' }, { label: 'C', value: '18个' }, { label: 'D', value: '15个' }]} answer="B" explanation="假设全进：20×2=40分。差=40-31=9分。一进一出差 2+1=3分。没进的球：9÷3=3个。投进的球：20-3=17个。" />
                    <PracticeProblem id={359} type="choice" question="搬运工要搬 50 个玻璃瓶，安全搬到一个得 3 元运费，打破一个不给运费还要赔 5 元。最后结账时得了 110 元。他打破了几个瓶子？" options={[{ label: 'A', value: '4个' }, { label: 'B', value: '5个' }, { label: 'C', value: '6个' }, { label: 'D', value: '7个' }]} answer="B" explanation="假设全搬好：50×3=150元。差=150-110=40元。打破一个的代价=3+5=8元。打破瓶子数：40÷8=5个。" />
                </div>
            )
        }
    },

    // ==================== L2-3. 盈亏问题 ====================
    'g3-l2-profit-loss': {
        meta: { title: "盈亏问题 - 三年级思维进阶 | AI7Miao数学", description: "学习用差+差或差-差的方法解决盈亏问题，找出人数和物品数量。", keywords: "盈亏问题,三年级思维进阶,假设法" },
        info: {
            title: "盈亏问题",
            description: "分糖果时，多了几个还是少了几个？别担心，这可是锁定『人数』的绝佳线索！快来帮小动物们公平分零食吧！🍬",
            tags: [{ text: "思维进阶", color: "purple" }, { text: "35分钟", icon: Clock, color: "slate" }]
        },
        aiContext: "学生学习盈亏问题。必须使用苏格拉底提问法。用『分糖果』的情境。问：如果每人多分 1 颗糖，总数就会从『多 4 颗』变成『少 5 颗』。这中间一共差了多少颗糖？为什么只是每人多分 1 颗，变化就会这么大？引导理解：多出来的总差值（盈+亏）正好是由于每个人分的差额积累出来的，从而推出人数计算公式。",
        aiChatTitle: "🍬 分糖果专家",
        aiChatIntro: "哎呀，今天给小动物们分糖果，怎么分都不刚好，你能帮我想想办法吗？",
        aiMessages: [{ role: 'ai', content: '如果我给每个小朋友分3个苹果，手里还会剩下5个；但如果我想让大家每人拿4个，反而又差了4个。你想想，如果我想让每个人都多拿 1 个，我一共得去多准备多少个苹果才行呢？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Brain className="w-6 h-6 text-purple-600" />分零食的『平衡术』</h2>
                        <div className="space-y-5">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3">最常见的『一盈一亏』</h3>
                                <div className="space-y-3">
                                    <p className="text-sm text-slate-700 dark:text-slate-300">当分法改变，结果从“剩下”变成“不够”，中间跨越的就是总差额！</p>
                                    <div className="bg-white dark:bg-slate-700 p-4 rounded-lg border border-purple-200">
                                        <p className="font-mono text-indigo-600 font-bold text-center">总人数 = (剩下的 + 不够的) ÷ (每人分的差额)</p>
                                    </div>
                                    <div className="mt-3 text-sm text-slate-600 dark:text-slate-400 space-y-1 bg-slate-100 dark:bg-slate-800 p-3 rounded">
                                        <p>💡 <strong>为什么这么算？</strong></p>
                                        <p>从“余5”到“亏4”，中间差了 5 + 4 = 9 个。</p>
                                        <p>如果每人多拿 1 个（分法差），刚好就把这 9 个缺口填上了，所以有 9 个人！</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 算差额的迷魂阵</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 多5和少4，差额是1？</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">看到多 5 个，又看到少 4 个，直接用 5 减去 4，算出总差额是 1 个！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 一多一少要相加</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">就像温度计！原先是 多出来 5 颗（+5度），后来变成了 少 4 颗（-4度），这一上一下，足足差了 5 + 4 = 9 颗糖哦！记住：一盈一亏，要把数字加起来！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />小侦探现场破案</h2>
                        <div className="space-y-4">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2 text-lg">📁 案件 1：多 2 少 3</p>
                                <p className="text-slate-700 mb-2">每人 5 支多 2，每人 6 支少 3。几人？几支？</p>
                                <div className="pl-4 border-l-4 border-purple-400 text-sm text-slate-700 dark:text-slate-300 font-mono space-y-1">
                                    <p>人数 = (2 + 3) ÷ (6 - 5) = 5 人。</p>
                                    <p>总数 = 5 × 5 + 2 = 27 支。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2 text-lg">📁 案件 2：多 5 刚好</p>
                                <p className="text-slate-700 mb-2">每人 3 块多 5，每人 4 块刚好。几人？</p>
                                <div className="pl-4 border-l-4 border-green-400 text-sm text-slate-700 dark:text-slate-300 font-mono space-y-1">
                                    <p>人数 = (5 - 0) ÷ (4 - 3) = 5 人。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2 text-lg">📁 案件 3：多 12 多 2</p>
                                <p className="text-slate-700 mb-2">每人 5 块剩 12，每人 7 块剩 2。几人？</p>
                                <div className="pl-4 border-l-4 border-blue-400 text-sm text-slate-700 dark:text-slate-300 font-mono space-y-1">
                                    <p>人数 = (12 - 2) ÷ (7 - 5) = 10 ÷ 2 = 5 人。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2 text-lg">📁 案件 4：少 14 少 2</p>
                                <p className="text-slate-700 mb-2">每班 8 个缺 14，每班 6 个缺 2。几个班？</p>
                                <div className="pl-4 border-l-4 border-orange-400 text-sm text-slate-700 dark:text-slate-300 font-mono space-y-1">
                                    <p>人数 = (14 - 2) ÷ (8 - 6) = 12 ÷ 2 = 6 个班。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2 text-lg">📁 案件 5：划船</p>
                                <p className="text-slate-700 mb-2">每船 4 人多 5，每船 5 人空 2 位。几人？</p>
                                <div className="pl-4 border-l-4 border-red-400 text-sm text-slate-700 dark:text-slate-300 font-mono space-y-1">
                                    <p>由于“空2个座位”等同于“少2人”，总差 = 5 + 2 = 7。</p>
                                    <p>船数 = 7 ÷ (5-4) = 7 条。总人数 = 7 × 4 + 5 = 33 人。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={360} type="choice" question="分本子，每人7本少4本，每人8本多2本，有几人？" options={[{ label: 'A', value: '4人' }, { label: 'B', value: '5人' }, { label: 'C', value: '6人' }, { label: 'D', value: '7人' }]} answer="C" explanation="人数=(4+2)÷(8-7)=6÷1=6人。" />
                    <PracticeProblem id={361} type="choice" question="老师给小朋友分糖块，如果每人分 3 块，还多 5 块；如果每人分 4 块，刚好分完。有几个小朋友？" options={[{ label: 'A', value: '5个' }, { label: 'B', value: '8个' }, { label: 'C', value: '4个' }, { label: 'D', value: '6个' }]} answer="A" explanation="多5块和刚好(差0块)，总差额=5-0=5。每人差 4-3=1块。人数=5÷1=5个。" />
                    <PracticeProblem id={362} type="choice" question="学校安排学生住宿。如果每间宿舍住 4 人，就有 20 人没床位（少20个）；如果每间住 6 人，就空出 4 个床位（多4个）。学校有几间宿舍？" options={[{ label: 'A', value: '12间' }, { label: 'B', value: '14间' }, { label: 'C', value: '10间' }, { label: 'D', value: '16间' }]} answer="A" explanation="这里求的是“宿舍数量”。总差额=20+4=24人。每间宿舍差=6-4=2人。宿舍数=24÷2=12间。" />
                    <PracticeProblem id={363} type="choice" question="把一包饼干分给一群孩子。每人分 5 块，剩下 12 块；每人分 7 块，剩下 2 块。这群孩子有几个？" options={[{ label: 'A', value: '4个' }, { label: 'B', value: '5个' }, { label: 'C', value: '6个' }, { label: 'D', value: '7个' }]} answer="B" explanation="这是“双盈”问题（都剩下）。总差额=大盈-小盈=12-2=10块。每人差=7-5=2块。人数=10÷2=5个。" />
                    <PracticeProblem id={364} type="choice" question="买苹果，如果买 5 千克，还差 3 元；如果买 4 千克，还多 2 元。苹果每千克多少钱？" options={[{ label: 'A', value: '4元' }, { label: 'B', value: '5元' }, { label: 'C', value: '6元' }, { label: 'D', value: '3元' }]} answer="B" explanation="把单价当作“人数”。总重量差=5-4=1千克。总钱数差=一亏一盈相加=3+2=5元。或者：单价=(3+2)÷(5-4)=5元。" />
                    <PracticeProblem id={365} type="choice" question="幼儿园买玩具。如果每班分 8 个，还缺 14 个；如果每班分 6 个，还缺 2 个。幼儿园有几个班？" options={[{ label: 'A', value: '5个' }, { label: 'B', value: '6个' }, { label: 'C', value: '7个' }, { label: 'D', value: '8个' }]} answer="B" explanation="“双亏”问题（都缺）。总差额=大亏-小亏=14-2=12个。每班差=8-6=2个。班级数=12÷2=6个。" />
                    <PracticeProblem id={366} type="choice" question="同学们去划船。如果每条船坐 4 人，则多出 5 人；如果每条船坐 5 人，则有一条船还空着 2 个座位。一共有多少同学？" options={[{ label: 'A', value: '31人' }, { label: 'B', value: '33人' }, { label: 'C', value: '35人' }, { label: 'D', value: '37人' }]} answer="B" explanation="先求船数：多5人和少2人，差额=5+2=7人。每船差=5-4=1人。船数=7÷1=7条船。同学数=7×4+5=33人。" />
                    <PracticeProblem id={367} type="choice" question="小猫钓鱼。如果它每天吃 3 条，那么剩下的鱼够吃 4 天（说明多出了 12 条）。如果每天吃 4 条，刚好几天吃完。小猫一共钓了多少条鱼？" options={[{ label: 'A', value: '36条' }, { label: 'B', value: '48条' }, { label: 'C', value: '60条' }, { label: 'D', value: '24条' }]} answer="B" explanation="原来每天差吃4-3=1条。多出的12条每天多吃1条，能多吃12天。也就是一共吃了 12 天。总鱼数 = 12天 × 4条 = 48条。" />
                    <PracticeProblem id={368} type="choice" question="修路队修路。原计划每天修 200 米，结果每天比原计划多修 50 米，这样提前 2 天完成了任务。这条路全长多少米？" options={[{ label: 'A', value: '1500米' }, { label: 'B', value: '2500米' }, { label: 'C', value: '2000米' }, { label: 'D', value: '3000米' }]} answer="C" explanation="实际每天修250米。提前2天，说明如果按原计划修，这2天还要修 200×2=400米（这就是“亏”的量）。每天多修50米去弥补这400米，需要实际修 400÷50=8天。全长 = 8天 × 250米 = 2000米。" />
                    <PracticeProblem id={369} type="choice" question="分橘子，如果每人分 2 个，那么多 10 个；如果每人分 4 个，那么多 2 个。一共多少橘子？" options={[{ label: 'A', value: '18个' }, { label: 'B', value: '20个' }, { label: 'C', value: '16个' }, { label: 'D', value: '22个' }]} answer="A" explanation="双盈。总差额=10-2=8。每人差=4-2=2。人数=8÷2=4人。橘子数=4×2+10=18个（或4×4+2=18个）。" />
                </div>
            ),
            interactive: (
                <ProfitLossLab />
            )
        }
    },

    // ==================== L2-4. 归一问题 ====================
    'g3-l2-unit-problem': {
        meta: { title: "归一问题 - 三年级思维进阶 | AI7Miao数学", description: "通过先求单位量（单价、单速等），解决正比例相关的实际问题。", keywords: "归一问题,单位量,三年级思维进阶" },
        info: {
            title: "归一问题",
            description: "想知道 10 本书多少钱？先问问 1 本书多少钱吧！学会找到那个『万物之源』的 1，再多难题也能迎刃而解！🎯",
            tags: [{ text: "思维进阶", color: "purple" }, { text: "30分钟", icon: Clock, color: "slate" }]
        },
        aiContext: "学生学习归一问题。必须使用苏格拉底提问法。用『买零食』或『干活效率』的情境。问：既然 3 台机器一小时能出 120 个零件，那平均一台机器一小时能出多少个？如果我们知道了这个“1台”的秘密，那派 6 台去干活，岂不是一眼就能看穿了吗？引导理解先求『单位量』的核心步骤。",
        aiChatTitle: "🎯 归一小特工",
        aiChatIntro: "你好！想要破解复杂的数量大关，我们得先找到那个最基础的『单位 1』！",
        aiMessages: [{ role: 'ai', content: '如果 5 辆大卡车一共运走了 50 吨木头，那你觉得一辆卡车能运走多少呢？要是我们派 12 辆这样的卡车，你觉得能运走多少？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Target className="w-6 h-6 text-purple-600" />特工的『归一』两部曲</h2>
                        <div className="space-y-5">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3">破解流程</h3>
                                <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                                    <div className="bg-white dark:bg-slate-700 p-4 rounded border-l-4 border-indigo-400">
                                        <p className="font-bold text-indigo-600">第一步：追根溯源</p>
                                        <p className="mt-1">总量 ÷ 数量 = <strong>单位量</strong>（也就是 1 个、1 天 或 1 米有多重/多贵/多快）</p>
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-4 rounded border-l-4 border-green-400">
                                        <p className="font-bold text-green-600">第二步：大展宏图</p>
                                        <p className="mt-1">单位量 × 新的数量 = <strong>最后想要的答案</strong></p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">💡 为什么叫“归一”？</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">因为这类问题的关键，就是我们要先“归”到那个“一”上面去。只要知道了“一”是多少，后面想要多少就有多少啦！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 特工迷失方向</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 忘了除法是谁除以谁</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">5 辆卡车运 75 吨。你想算 1辆 运多少，脑子一迷糊，列个 5 ÷ 75？或者不知道该除以时间还是除以车数了。</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 盯着你想求的那个『1』</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">大声问自己想要什么？我想知道【1 辆卡车】运多少！既然要把 5辆 变成 1辆，那就把总重量 75吨 平均分成 5 份！所以是 总重 ÷ 5！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />归一特工任务单</h2>
                        <div className="space-y-4">
                            {[
                                { q: '5 辆同样的卡车一共运走了 75 吨泥土。如果再增加 3 辆同样的卡车，一共能运多少吨？', a: '先归一：75 ÷ 5 = 15 吨/辆\n再求总量：15 × (5 + 3) = 120 吨！' },
                                { q: '小明在超市看到 6 个苹果 18 元。他想买 10 个，一共要多少钱？', a: '先归一：18 ÷ 6 = 3 元/个\n再求总价：3 × 10 = 30 元。' },
                                { q: '3 天看了 60 页书。照这样速度，8 天看多少页？', a: '先归一：60 ÷ 3 = 20 页/天\n8天看：20 × 8 = 160 页。' },
                                { q: '4 小时修路 800 米。修完 2000 米需要几天？', a: '每小时修：800 ÷ 4 = 200 米\n总时间：2000 ÷ 200 = 10 小时。' },
                                { q: '2 小时行驶 160 千米。行驶 400 千米要几小时？', a: '速度：160 ÷ 2 = 80 千米/小时\n时间：400 ÷ 80 = 5 小时。' }
                            ].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-2 text-lg">📁 任务 {i + 1}：{e.q}</p>
                                    <div className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold whitespace-pre-line"><p>{e.a}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={370} type="choice" question="3台机器4小时生产1200个零件，6台机器8小时能生产几个？" options={[{ label: 'A', value: '2400个' }, { label: 'B', value: '4800个' }, { label: 'C', value: '3200个' }, { label: 'D', value: '3600个' }]} answer="B" explanation="每台每小时：1200÷3÷4=100个；6台8小时：100×6×8=4800个。" />
                    <PracticeProblem id={371} type="choice" question="买 3 支钢笔一共花了 24 元，买 5 支同样的钢笔需要多少钱？" options={[{ label: 'A', value: '40元' }, { label: 'B', value: '35元' }, { label: 'C', value: '45元' }, { label: 'D', value: '50元' }]} answer="A" explanation="先求单价（1支钢笔的钱）：24 ÷ 3 = 8 元。再求总价：8 × 5 = 40 元。" />
                    <PracticeProblem id={372} type="choice" question="小红看一本书，3 天看了 60 页。照这样的速度，她 8 天可以看多少页？" options={[{ label: 'A', value: '150页' }, { label: 'B', value: '160页' }, { label: 'C', value: '180页' }, { label: 'D', value: '200页' }]} answer="B" explanation="先求每天看多少页：60 ÷ 3 = 20 页。每天 20 页看 8 天：20 × 8 = 160 页。" />
                    <PracticeProblem id={373} type="choice" question="工人叔叔修一条公路，4 天修了 800 米。照这样计算，修完 2000 米需要几天？" options={[{ label: 'A', value: '8天' }, { label: 'B', value: '9天' }, { label: 'C', value: '10天' }, { label: 'D', value: '11天' }]} answer="C" explanation="先求每天修多少米：800 ÷ 4 = 200 米/天。再算 2000 米里有几个 200 米：2000 ÷ 200 = 10 天。" />
                    <PracticeProblem id={374} type="choice" question="一辆汽车 2 小时行驶了 160 千米。如果要行驶 400 千米，需要几个小时？" options={[{ label: 'A', value: '4小时' }, { label: 'B', value: '5小时' }, { label: 'C', value: '6小时' }, { label: 'D', value: '7小时' }]} answer="B" explanation="先求速度（每小时多少千米）：160 ÷ 2 = 80 千米/小时。总时间 = 路程 ÷ 速度 = 400 ÷ 80 = 5 小时。" />
                    <PracticeProblem id={375} type="choice" question="5 箱蜜蜂一年可以酿 350 千克蜂蜜。照这样计算，增加 2 箱蜜蜂后，一年一共可以酿多少千克蜂蜜？" options={[{ label: 'A', value: '490千克' }, { label: 'B', value: '420千克' }, { label: 'C', value: '560千克' }, { label: 'D', value: '500千克' }]} answer="A" explanation="每箱蜜蜂：350 ÷ 5 = 70 千克。增加 2 箱后，一共是 5 + 2 = 7 箱蜜蜂。总产量 = 70 × 7 = 490 千克。" />
                    <PracticeProblem id={376} type="choice" question="王师傅加工一批零件，4 小时加工了 240 个。照这样的工作效率，他今天工作了 8 小时，一共加工了多少个零件？" options={[{ label: 'A', value: '400个' }, { label: 'B', value: '480个' }, { label: 'C', value: '500个' }, { label: 'D', value: '600个' }]} answer="B" explanation="每小时加工：240 ÷ 4 = 60个。8小时：60 × 8 = 480 个。或者想 8 小时是 4 小时的 2 倍，240 × 2 = 480。" />
                    <PracticeProblem id={377} type="choice" question="用 12 千克黄豆可以榨出 3 千克豆油。如果有 48 千克黄豆，可以榨出多少千克豆油？" options={[{ label: 'A', value: '12千克' }, { label: 'B', value: '10千克' }, { label: 'C', value: '15千克' }, { label: 'D', value: '16千克' }]} answer="A" explanation="先求榨 1 千克豆油需要多少黄豆：12 ÷ 3 = 4 千克黄豆。48 千克黄豆里有几个 4 千克：48 ÷ 4 = 12 千克豆油。（或用倍数关系：48是12的4倍，出油也是3的4倍=12千克）。" />
                    <PracticeProblem id={378} type="choice" question="装订车间装订一批书，3 天装订了 1500 本。如果要装订 4500 本，还需要多少天？" options={[{ label: 'A', value: '6天' }, { label: 'B', value: '9天' }, { label: 'C', value: '10天' }, { label: 'D', value: '12天' }]} answer="A" explanation="每天装订：1500 ÷ 3 = 500 本。装订 4500 本总共需要：4500 ÷ 500 = 9 天。题目问的是『还需要』多少天，也就是 9 - 3 = 6 天！" />
                    <PracticeProblem id={379} type="choice" question="买 4 千克苹果和 2 千克香蕉一共要花 40 元。已知买 4 千克苹果的钱正好可以买 6 千克香蕉。每千克香蕉多少钱？" options={[{ label: 'A', value: '4元' }, { label: 'B', value: '5元' }, { label: 'C', value: '6元' }, { label: 'D', value: '8元' }]} answer="B" explanation="既然 4千克苹果 = 6千克香蕉的钱，那么把题目的全换成香蕉：6千克香蕉 + 2千克香蕉 = 40元。即 8千克香蕉 40元。每千克香蕉 40 ÷ 8 = 5元。" />
                </div>
            ),
            interactive: (
                <UnitProblemLab />
            )
        }
    },

    // ==================== L2-5. 年龄问题 ====================
    'g3-l2-age-problem': {
        meta: { title: "年龄问题 - 三年级思维进阶 | AI7Miao数学", description: "利用年龄差不变的性质，解决今年/N年前/N年后的年龄推算问题。", keywords: "年龄问题,年龄差,三年级思维进阶" },
        info: {
            title: "年龄问题",
            description: "为什么爸爸永远比你大？即便过了 100 年，这个『数字差』也绝不会改变！快来揭开时间长河里的年龄秘密吧！🕙",
            tags: [{ text: "思维进阶", color: "purple" }, { text: "30分钟", icon: Clock, color: "slate" }]
        },
        aiContext: "学生学习年龄问题。必须使用苏格拉底提问法。问：今年你 8 岁，妈妈 32 岁，妈妈比你大几岁？等 明年 你 9 岁的时候，妈妈会变几岁？她还是比你大 24 岁吗？一百年后呢？引导得出『年龄差永远不变』的永恒定律，并利用这个定律在倍数变化的题目中寻找突破口。",
        aiChatTitle: "🕙 时间旅行者",
        aiChatIntro: "滴答，时间在走，岁数在长，但有些特殊的『数学距离』是一辈子都不会变的哦！",
        aiMessages: [{ role: 'ai', content: '如果一个小弟弟今年 2 岁，大哥哥 10 岁。两人相差 8 岁对吧？那你想想看，当他们俩一起长大到『哥哥是弟弟 2 倍』的时候，他们还会相差 8 岁吗？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Brain className="w-6 h-6 text-purple-600" />岁月的『不变定律』</h2>
                        <div className="space-y-5">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">① 年龄差，永恒的距离</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300">世界上最公平的事情就是：时间对每个人都一样快！</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 bg-white dark:bg-slate-700 p-3 rounded">不论过了多久，两个人之间的<strong>年龄差</strong>永远是最初的那个数字！</p>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">② 变倍数的『定音锤』</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300">当题目问你“几年后妈妈是我的3倍”时，赶紧抓住那个『不变的年龄差』！</p>
                                <div className="mt-3 bg-white dark:bg-slate-700 p-3 rounded font-mono text-indigo-600 font-bold border-2 border-indigo-100 dark:border-indigo-900">
                                    那个时间点，我的年龄 = 年龄差 ÷ (3倍 - 1)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 时间穿梭的漏洞</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 倍数永远不变</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">今年妈妈 30 岁，我 10 岁，妈妈是我的 3 倍。所以明年妈妈 31 岁，我 11 岁，妈妈也是我的 3 倍咯？</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 倍数天天变，只有年龄差不变</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">傻瓜！31 ÷ 11 根本不是 3 呀！在年龄问题里，倍数是随时会变的，能让你稳稳抓住的，只有那永远不变的『年龄差』！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />岁月神偷的挑战</h2>
                        <div className="space-y-4">
                            {[
                                { q: '母亲今年 36 岁，女儿今年 8 岁。再过几年，母亲的年龄正好是女儿的 3 倍呢？', a: '1️⃣ 找永恒差：36 - 8 = 28 岁。\n2️⃣ 找关键点：当母亲是女儿 3 倍时，28 岁对应着 (3 - 1) 倍所得的年龄。\n3️⃣ 求当时年龄：那时候女儿的年龄是 28 ÷ 2 = 14 岁。\n4️⃣ 算时间：14 - 8 = 6 年！' },
                                { q: '爷爷今年 64 岁，孙子今年 10 岁。多少年后，爷爷的年龄是孙子的 4 倍？', a: '1️⃣ 找岁数差：64 - 10 = 54 岁。\n2️⃣ 当爷爷是孙子 4 倍时，54 岁相当于孙子年龄的 3 倍。\n3️⃣ 那时孙子：54 ÷ 3 = 18 岁。\n4️⃣ 时间：18 - 10 = 8 年后！' },
                                { q: '哥哥今年 15 岁，妹妹今年 9 岁。当两人的年龄和是 40 岁时，哥哥几岁？', a: '1️⃣ 找年龄差：15 - 9 = 6 岁。\n2️⃣ 和差问题：哥哥 = (40 + 6) ÷ 2 = 23 岁。\n3️⃣ 此时妹妹是 40 - 23 = 17 岁。' },
                                { q: '爸爸今年 45 岁，儿子今年 15 岁。几年前，爸爸的年龄是儿子的 4 倍？', a: '1️⃣ 找年龄差：45 - 15 = 30 岁。\n2️⃣ 爸爸是儿子 4 倍时，30 岁相当于儿子的 3 倍。\n3️⃣ 那时儿子：30 ÷ 3 = 10 岁。\n4️⃣ 时间：15 - 10 = 5 年前！' },
                                { q: '张阿姨比李刚大 24 岁，今年张阿姨的年龄正好是李刚的 4 倍。李刚今年多少岁？', a: '1️⃣ 直接得出年龄差：24 岁。\n2️⃣ 阿姨是李刚 4 倍，阿姨比李刚多出来的这 24 岁就相当于李刚年龄的 (4 - 1) 份。\n3️⃣ 李刚今年：24 ÷ 3 = 8 岁。' }
                            ].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-2 text-lg">💡 挑战 {i + 1}：{e.q}</p>
                                    <div className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold whitespace-pre-line"><p>{e.a}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={380} type="choice" question="爷爷60岁，孙子10岁，几年前爷爷是孙子的11倍？" options={[{ label: 'A', value: '4年前' }, { label: 'B', value: '5年前' }, { label: 'C', value: '6年前' }, { label: 'D', value: '7年前' }]} answer="B" explanation="X年前：(60-X)=11(10-X) → 60-X=110-11X → 10X=50 → X=5。5年前：爷55，孙5，55=11×5✓" />
                    <PracticeProblem id={381} type="choice" question="哥哥今年 15 岁，妹妹今年 9 岁。哥哥比妹妹大多少岁？5 年后，哥哥比妹妹大多少岁？" options={[{ label: 'A', value: '6岁，11岁' }, { label: 'B', value: '6岁，6岁' }, { label: 'C', value: '11岁，6岁' }, { label: 'D', value: '6岁，16岁' }]} answer="B" explanation="无论过了多少年，年龄差是不变的！15 - 9 = 6 岁。所以 5 年后还是大 6 岁。" />
                    <PracticeProblem id={382} type="choice" question="妈妈今年 32 岁，儿子今年 4 岁。再过多少年，妈妈的年龄是儿子的 3 倍？" options={[{ label: 'A', value: '8年' }, { label: 'B', value: '10年' }, { label: 'C', value: '12年' }, { label: 'D', value: '14年' }]} answer="B" explanation="永远不变的年龄差：32 - 4 = 28岁。当妈妈是儿子 3 倍时，28 岁对应着儿子年龄的 (3 - 1) 倍。那时儿子：28 ÷ 2 = 14 岁。儿子从 4 岁到 14 岁需要经过：14 - 4 = 10 年。" />
                    <PracticeProblem id={383} type="choice" question="爸爸今年 40 岁，小明今年 12 岁。几年前，爸爸的年龄是小明的 5 倍？" options={[{ label: 'A', value: '4年前' }, { label: 'B', value: '5年前' }, { label: 'C', value: '6年前' }, { label: 'D', value: '7年前' }]} answer="B" explanation="年龄差不变：40 - 12 = 28岁。几年前爸爸是小明 5 倍，那时小明：28 ÷ (5 - 1) = 7 岁。小明从 7 岁长到现在的 12 岁过了：12 - 7 = 5 年。所以是 5 年前。" />
                    <PracticeProblem id={384} type="choice" question="姐姐今年 13 岁，弟弟今年 7 岁。当两人的年龄和是 40 岁时，姐姐多少岁？" options={[{ label: 'A', value: '18岁' }, { label: 'B', value: '21岁' }, { label: 'C', value: '23岁' }, { label: 'D', value: '25岁' }]} answer="C" explanation="年龄差不变：13 - 7 = 6岁。这就变成了和差问题：和是 40，差是 6。大数（姐姐）= (40 + 6) ÷ 2 = 23 岁。" />
                    <PracticeProblem id={385} type="choice" question="今年爸爸 35 岁，女儿 7 岁。今年爸爸的年龄是女儿的几倍？" options={[{ label: 'A', value: '4倍' }, { label: 'B', value: '5倍' }, { label: 'C', value: '6倍' }, { label: 'D', value: '7倍' }]} answer="B" explanation="简单的除法：35 ÷ 7 = 5 倍。" />
                    <PracticeProblem id={386} type="choice" question="王老师比李刚大 24 岁，今年王老师的年龄正好是李刚的 4 倍。李刚今年多少岁？" options={[{ label: 'A', value: '6岁' }, { label: 'B', value: '8岁' }, { label: 'C', value: '10岁' }, { label: 'D', value: '12岁' }]} answer="B" explanation="这里直接告诉你年龄差是 24 岁。老师是李刚 4 倍，老师比李刚大出来的这 24 岁就相当于李刚年龄的 (4 - 1) 份。李刚：24 ÷ 3 = 8 岁。" />
                    <PracticeProblem id={387} type="choice" question="甲、乙两人的年龄和是 65 岁，甲比乙大 5 岁，甲今年多少岁？" options={[{ label: 'A', value: '30岁' }, { label: 'B', value: '35岁' }, { label: 'C', value: '40岁' }, { label: 'D', value: '25岁' }]} answer="B" explanation="和差问题：大数(甲) = (和 + 差) ÷ 2。甲 = (65 + 5) ÷ 2 = 70 ÷ 2 = 35 岁。" />
                    <PracticeProblem id={388} type="choice" question="3 年前，哥哥比弟弟大 4 岁。3 年后，哥哥的年龄是弟弟的 2 倍。现在哥哥多少岁？" options={[{ label: 'A', value: '5岁' }, { label: 'B', value: '8岁' }, { label: 'C', value: '7岁' }, { label: 'D', value: '9岁' }]} answer="A" explanation="年龄差永恒：既然 3 年前大 4 岁，那就说明永远大 4 岁。3 年后也是大 4 岁。3 年后哥哥是弟弟 2 倍，那时弟弟：4 ÷ (2 - 1) = 4 岁。哥哥那时 8 岁。现在哥哥= 8 - 3 = 5 岁。" />
                    <PracticeProblem id={389} type="choice" question="小亮今年 10 岁，小刚今年 14 岁。当两人的年龄和是 50 岁时，小刚多少岁？" options={[{ label: 'A', value: '23岁' }, { label: 'B', value: '25岁' }, { label: 'C', value: '27岁' }, { label: 'D', value: '29岁' }]} answer="C" explanation="年龄差：14 - 10 = 4 岁(小刚大)。当总和是 50 岁时，用和差问题求大数（小刚）：(50 + 4) ÷ 2 = 27 岁。" />
                </div>
            ),
            interactive: (
                <AgeProblemLab />
            )
        }
    },

};

export default grade3Content;

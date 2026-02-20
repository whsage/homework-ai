import { Icons, PracticeProblem, React } from './common';
import FractionLab from '../../components/subjects/math/elementary/FractionLab';
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
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />收银员实战</h2>
                        <div className="space-y-5">
                            {[
                                { q: '小熊文具店进了 36 盒水彩笔，每盒 25 元。一共要付多少钱？', a: '先算买 5 盒多少钱：36 × 5 = 180 元\n再算买 20 盒多少钱：36 × 20 = 720 元\n最后加起来：180 + 720 = 900 元！' },
                                { q: '学校买了 525 本图画书，要平均分给 5 个班级。每个班级能分到多少本图画书呀？', a: '先分百位：5个百 分给5个班，每班 1个百。\n再分十位：2个十 分给5个班，不够分，每班 0个十。\n最后分个位：连着刚才的2个十，一共是25本，分成5份，每班 5本。\n合起来就是：105本！' }
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
                                { q: '小红把一根彩带平均剪成了 8 段，她送给好朋友 5 段。她送走了这根彩带的几分之几用没送走的有几段？', a: '送去了 5/8（五分之八）\n还没送走的就在自己手上：8段-5段=3段，所以是 3/8（八分之三）。' },
                                { q: '做游戏：5/9 的苹果 和 2/9 的苹果，如果小明把 2/9 吃掉了，还剩下几分之几？', a: '5/9 - 2/9 = 3/9（切的份数"9"不变，上面的苹果数 5 - 2 = 3）' },
                                { q: '谁吃得更多？小兔子吃了胡萝卜的 3/7，小海马吃了海带的 5/7（都是一样长的食物）', a: '小海马吃得多哦！因为 3/7 < 5/7（切的一样细，小海马吃了5块，比3块多！）' },
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
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />护卫队实战演练</h2>
                        <div className="space-y-4">
                            {[
                                { q: '蚂蚁要去巡视长方形花坛。花坛长 12厘米，宽 5厘米。蚂蚁绕场一周要走多远？', a: '先算半圈走多远：12 + 5 = 17 厘米\n再把半圈翻倍：17 × 2 = 34 厘米！' },
                                { q: '小方巾是一个正方形，每条边都是 7分米 长。如果要在四周缝上一圈漂亮的蕾丝花边，花边需要多长？', a: '有 4 条一样长的边：7 × 4 = 28 分米！' },
                                { q: '逆向挑战：一块长方形草地，蚂蚁走一圈是 50 米。已知宽是 10 米，那么长是多少米？', a: '走一圈是 50米，那走半圈（一条长+一条宽）就是 50 ÷ 2 = 25 米。\n已知宽是 10米，那长就是 25 - 10 = 15 米啦！' },
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
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />称重师试炼</h2>
                        <div className="space-y-4">
                            {[
                                { q: '小熊买了 3 千克 (kg) 的蜂蜜，如果分装成小瓶，等于多少 克 (g)？', a: '1千克是1000克。\n3个千克，就是 3个 1000克！\n3 × 1000 = 3000 克 (g)' },
                                { q: '小猴摘了 2500 克 (g) 的桃子。这等于几千克又几克？', a: '满 1000 小兵，就能换一个 大佬！\n2500 里面有 2个 1000，还多出 500。\n所以是 2 千克 (kg) 和 500 克 (g)！' },
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
                </div>
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
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />森林建造实战</h2>
                        <div className="space-y-4">
                            {[
                                { q: '国王修了一条 120米 长的路，如果每隔 8米 种一棵小树，这条路的 两头都要种，一共需要准备多少棵小树？', a: '先算距离有几段：120 ÷ 8 = 15 段\n两头都要种（像手指一样）：树数 = 15段 + 1 = 16 棵！' },
                                { q: '广场中央有一个圆形的许愿池，它绕一圈有 60米 长。如果在水池边每 3米 种一棵魔法仙人掌，一共要几棵？', a: '先算距离有几段：60 ÷ 3 = 20 段\n围成一个圈哦：树数 = 段数 = 20 棵！' },
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
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />侦探接案中</h2>
                        <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                            <p className="font-bold text-slate-800 dark:text-white mb-3 text-lg">🚗 新案件：停车场谜团</p>
                            <p className="text-slate-700 dark:text-slate-300 mb-4">停车场里停着小轿车（4个轮子）和摩托车（2个轮子）。我数了数，一共有 30辆车，但是轮子一共有 96个。这两种车各有多少辆呢？</p>
                            <div className="pl-4 border-l-4 border-purple-400 text-sm text-slate-600 dark:text-slate-400 font-mono space-y-2">
                                <p>假设全都是摩托车（2个轮子）：<br /> 咱们就有 30 × 2 = 60个 轮子啦。</p>
                                <p>哎呀，实际有 96个 轮子：<br /> 少算了 96 - 60 = 36个 轮子。</p>
                                <p>一辆轿车比一辆摩托车多2个轮子：<br /> 轿车有：36 ÷ 2 = <strong className="text-purple-600 text-base">18 辆</strong>！</p>
                                <p>剩下的就是摩托车：<br /> 30总数 - 18辆轿车 = <strong className="text-blue-600 text-base">12 辆</strong>！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={350} type="choice" question="鸡兔同笼，头15，脚42，兔有几只？" options={[{ label: 'A', value: '5只' }, { label: 'B', value: '6只' }, { label: 'C', value: '7只' }, { label: 'D', value: '9只' }]} answer="B" explanation="假设全鸡：15×2=30脚，差值=42-30=12，兔=12÷2=6只。" />
                    <PracticeProblem id={351} type="choice" question="鸡兔同笼，头25，脚76，鸡有几只？" options={[{ label: 'A', value: '11只' }, { label: 'B', value: '12只' }, { label: 'C', value: '13只' }, { label: 'D', value: '14只' }]} answer="C" explanation="假设全鸡：25×2=50脚，差值=76-50=26，兔=26÷2=13只，鸡=25-13=12只。等等：兔=13，鸡=12。选C=13是兔的数量，题问鸡→应该选B=12只。" />
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
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />小侦探现场破案</h2>
                        <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-xl border border-slate-200">
                            <p className="font-bold text-slate-800 dark:text-white mb-3 text-lg">📁 卷宗：失踪的铅笔</p>
                            <p className="text-slate-700 dark:text-slate-300 mb-4">把一些铅笔分给小朋友。如果每人分 5 支，还多出 2 支；如果每人分 6 支，反而少了 3 支。请问：到底有多少个小朋友？一共有多少支铅笔？</p>
                            <div className="pl-4 border-l-4 border-purple-400 text-sm text-slate-700 dark:text-slate-300 space-y-2">
                                <p>1️⃣ <strong>看总差额</strong>：从多2到少3，一共有 2 + 3 = 5 支的变化。</p>
                                <p>2️⃣ <strong>找分法差</strong>：原本每人5支，现在改为每人6支，每人多拿了 6 - 5 = 1 支。</p>
                                <p>3️⃣ <strong>求人数</strong>：总变化 5 ÷ 个人变化 1 = <strong className="text-purple-600 text-base">5 个小朋友</strong>！</p>
                                <p>4️⃣ <strong>算总量</strong>：既然有5人，按第一种分法（每人5支多2支）：5 × 5 + 2 = <strong className="text-indigo-600 text-base">27 支铅笔</strong>！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={360} type="choice" question="分本子，每人7本少4本，每人8本多2本，有几人？" options={[{ label: 'A', value: '4人' }, { label: 'B', value: '5人' }, { label: 'C', value: '6人' }, { label: 'D', value: '7人' }]} answer="C" explanation="人数=(4+2)÷(8-7)=6÷1=6人。" />
                </div>
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
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />归一特工任务单</h2>
                        <div className="space-y-4">
                            {[
                                { q: '建筑工地上，5 辆同样的卡车一共运走了 75 吨泥土。如果再增加 3 辆这样的卡车，一共能运走多少吨泥土？', a: '先归一（求1台）：75 ÷ 5 = 15 吨/辆\n再求总量（一共8辆）：15 × 8 = 120 吨！' },
                                { q: '小明在超市看到 6 个大红苹果售价 18 元。他想买 10 个这样的苹果，带 30 元够吗？', a: '先归一（求1个）：18 ÷ 6 = 3 元/个\n再求总价：3 × 10 = 30 元。刚好够哦！' },
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
                </div>
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
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />岁月神偷的挑战</h2>
                        <div className="space-y-5">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-3 text-lg">💡 挑战一：母女的岁数约定</p>
                                <p className="text-slate-700 dark:text-slate-300 mb-4">母亲今年 36 岁，女儿今年 8 岁。请问再过几年，母亲的年龄正好是女儿的 3 倍呢？</p>
                                <div className="pl-4 border-l-4 border-blue-400 text-sm text-slate-700 dark:text-slate-300 space-y-2">
                                    <p>1️⃣ <strong>找永恒差</strong>：36 - 8 = 28 岁。不论过多久，两人都差这 28 岁！</p>
                                    <p>2️⃣ <strong>找关键点</strong>：当母亲是女儿 3 倍时，这 28 岁就像是两块多出来的“女儿年龄”。</p>
                                    <p>3️⃣ <strong>求当时年龄</strong>：那时候女儿的年龄是 28 ÷ (3 - 1) = 14 岁。</p>
                                    <p>4️⃣ <strong>算时间</strong>：女儿现在 8 岁，长到 14 岁需要 14 - 8 = <strong className="text-blue-600 text-base">6 年</strong>！</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={380} type="choice" question="爷爷60岁，孙子10岁，几年前爷爷是孙子的11倍？" options={[{ label: 'A', value: '4年前' }, { label: 'B', value: '5年前' }, { label: 'C', value: '6年前' }, { label: 'D', value: '7年前' }]} answer="B" explanation="X年前：(60-X)=11(10-X) → 60-X=110-11X → 10X=50 → X=5。5年前：爷55，孙5，55=11×5✓" />
                </div>
            )
        }
    },

};

export default grade3Content;

import { Icons, PracticeProblem, React } from './common';
import AdditionLab from '../../components/subjects/math/elementary/AdditionLab';
import ShapeLab from '../../components/subjects/math/elementary/ShapeLab';
import MatchstickLab from '../../components/subjects/math/elementary/MatchstickLab';
import ClockLab from '../../components/subjects/math/elementary/ClockLab';
import NumberGrid100 from '../../components/subjects/math/elementary/NumberGrid100';
import ShapePartitionLab from '../../components/subjects/math/elementary/ShapePartitionLab';
import CleverCalcLab from '../../components/subjects/math/elementary/CleverCalcLab';
import EnumerationLab from '../../components/subjects/math/elementary/EnumerationLab';

const {
    Lightbulb, Target, Clock, Star, Brain, Calculator
} = Icons;

export const grade1Content = {

    // ==================== L1-1. 20以内加减法 ====================
    'g1-l1-addition-20': {
        meta: {
            title: "20以内加减法 - 一年级数学 | AI7Miao数学",
            description: "掌握20以内加减法的运算方法，理解凑十法和数的分解，为以后的数学学习打好基础。",
            keywords: "20以内加减法,凑十法,数的分解,一年级数学"
        },
        info: {
            title: "20以内加减法",
            description: "把加减法变成装苹果的游戏！学会凑十法，你就是心算小天才！🍎",
            tags: [
                { text: "基础达标", color: "blue" },
                { text: "25分钟", icon: Clock, color: "slate" },
                { text: "重点", icon: Star, color: "orange" }
            ]
        },
        aiContext: "学生学习20以内加减法。必须使用苏格拉底式提问。用装满10个苹果的箱子或者分糖果的情境（如8+6，问：左手8个，右手6个，先把左边凑成满10，要从右边拿几个？）。切忌直接给出公式或算理。",
        aiChatTitle: "🍎 苹果小管家",
        aiChatIntro: "我有一个装苹果的魔法箱，最多只能装10个！一起来玩装箱游戏吧！",
        aiMessages: [
            { role: 'ai', content: '箱子里已经有 8 个红苹果咯！外面还有 6 个青苹果。如果我们想先把箱子装满（10个），你需要从外面拿几个放进去呢？' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            凑十法
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">好满的苹果箱 🍎</h3>
                                <p className="text-slate-700 dark:text-slate-300 text-sm">
                                    "你有一个神奇的苹果箱，这个箱子最多只能装 10 个苹果！"<br /><br />
                                    "假设你左手有 8 个红苹果，右手有 6 个青苹果。想先把 1 个箱子装满，我们需要从右手借几个苹果过来呢？"
                                </p>
                            </div>
                            <div className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl p-5">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-4">装箱大作战（8 + 6 = ?）</h3>
                                <div className="space-y-3">
                                    {[
                                        { step: '1', content: '🤔 看看大箱子：8 个苹果，还差 2 个就满 10 个啦！', color: 'bg-blue-600' },
                                        { step: '2', content: '🖐️ 从右手拿：把 6 个拿 2 个过去（6 可以分成 2 和 4）', color: 'bg-green-600' },
                                        { step: '3', content: '📦 箱子装满啦：8 + 2 = 10', color: 'bg-purple-600' },
                                        { step: '4', content: '🌟 总共多少个：装满的 10 个，加上外面剩下的 4 个，10 + 4 = 14！你真棒！', color: 'bg-orange-600' },
                                    ].map(item => (
                                        <div key={item.step} className="flex items-center gap-3">
                                            <span className={`flex-shrink-0 w-7 h-7 flex items-center justify-center text-sm font-bold text-white rounded-full ${item.color}`}>{item.step}</span>
                                            <span className="text-slate-700 dark:text-slate-300 font-mono text-sm">{item.content}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">🍬 分糖果咯（20以内的减法）</h3>
                                <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
                                    "假设你有 15 颗糖，朋友想要 8 颗。你可以怎么分给他呢？"<br />
                                    "对啦！我们可以先拿一整盒（10颗）的糖，从里面拿出 8 颗给他！"
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-3 rounded-lg font-mono text-sm text-slate-600 dark:text-slate-400">
                                    <p>🤔 15 颗糖 = 1 一整盒(10颗) + 散装的(5颗)</p>
                                    <p>🎁 从整盒里拿 8 颗给他：10 - 8 = 2</p>
                                    <p>🌟 手里剩下的糖：整盒剩下的 2 颗 + 散装的 5 颗，2 + 5 = <strong className="text-green-600">7 颗</strong>！真聪明！</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 小心陷阱盲区！</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 笨办法，容易出错哦</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">8 + 6 = 15 （如果靠一个一个数手指，一不小心就数错啦！）</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 心算小天才的妙招</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">👀 看到 8 就想 2，先把 8 凑成 10！外面还剩下 4，加在一起就是 14 啦！多快！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <AdditionLab />
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />
                            典型例题
                        </h2>
                        <div className="space-y-5">
                            {[
                                { q: '停车场里有 9 辆🚗，又开来了 5 辆。现在有几辆汽车呢？', step1: '📦 想一想：9 辆车加上 1 辆车就凑成满排 10 辆啦！', step2: '把开来的 5 辆车分成 1 辆和 4 辆。', ans: '最前面的 10 辆，加上剩下的 4 辆，一共 14 辆！(9 + 5 = 14)' },
                                { q: '小猫钓了 7 条🐟，又钓了 8 条，一共几条鱼？', step1: '📦 想一想：7 条鱼再加 3 条就是一满桶 10 条！', step2: '把 8 条鱼分出 3 条放进桶里。', ans: '满桶 10 条，加上外面的 5 条，一共 15 条鱼！(7 + 8 = 15)' },
                                { q: '你有 13 个包子🥟，如果给小狗 6 个，还剩多少个呢？', step1: '🧐 想象 13个包子 = 一大蒸笼(10个) + 盘子上的 3 个。', step2: '我们从蒸笼里拿出 6 个包子给小狗，蒸笼里还剩 4 个。', ans: '蒸笼剩里的 4 个，加盘子上的 3 个，还剩 7 个啦！(13 - 6 = 7)' },
                            ].map((ex, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-2 text-lg">挑战 {i + 1}：{ex.q}</p>
                                    <div className="pl-4 border-l-4 border-indigo-400 font-mono text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                        <p>{ex.step1}</p>
                                        <p>{ex.step2}</p>
                                        <p className="text-indigo-600 dark:text-indigo-400 font-bold">答：{ex.ans}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={100} type="choice"
                        question="9 + 4 = ？"
                        options={[{ label: 'A', value: '11' }, { label: 'B', value: '12' }, { label: 'C', value: '13' }, { label: 'D', value: '14' }]}
                        answer="C"
                        explanation="9 + 1 = 10，剩余 3，10 + 3 = 13"
                    />
                    <PracticeProblem id={101} type="choice"
                        question="6 + 8 = ？"
                        options={[{ label: 'A', value: '12' }, { label: 'B', value: '13' }, { label: 'C', value: '14' }, { label: 'D', value: '15' }]}
                        answer="C"
                        explanation="6 + 4 = 10，剩余 4，10 + 4 = 14"
                    />
                    <PracticeProblem id={102} type="choice"
                        question="16 - 9 = ？"
                        options={[{ label: 'A', value: '5' }, { label: 'B', value: '6' }, { label: 'C', value: '7' }, { label: 'D', value: '8' }]}
                        answer="C"
                        explanation="16 = 10 + 6，10 - 9 = 1，1 + 6 = 7"
                    />
                    <PracticeProblem id={103} type="choice"
                        question="小明有 8 颗糖，小红给了他 7 颗，他现在有多少颗？"
                        options={[{ label: 'A', value: '13颗' }, { label: 'B', value: '14颗' }, { label: 'C', value: '15颗' }, { label: 'D', value: '16颗' }]}
                        answer="C"
                        explanation="8 + 7 = 15（凑十法：8+2=10，10+5=15）"
                    />
                </div>
            )
        }
    },

    // ==================== L1-2. 100以内认知 ====================
    'g1-l1-number-100': {
        meta: {
            title: "100以内认知 - 一年级数学 | AI7Miao数学",
            description: "认识100以内的数，理解数的顺序、大小比较及十位个位的数位概念。",
            keywords: "100以内的数,数位,十位个位,大小比较,一年级数学"
        },
        info: {
            title: "100以内认知",
            description: "从 1 到 100，数字的世界越来越大！把10根小棒捆成一捆，我们一起来数数吧！🔢",
            tags: [
                { text: "基础达标", color: "blue" },
                { text: "20分钟", icon: Clock, color: "slate" },
                { text: "重点", icon: Star, color: "orange" }
            ]
        },
        aiContext: "学生学习100以内的数。必须使用苏格拉底式提问。用『整捆的小棒（10根）』和『散落的小棒（1根）』的情境来讲解十位和个位。大小比较时，引导提问：『要比谁的小棒多，是先看整捆的，还是先看散落的呢？』",
        aiChatTitle: "🪵 魔法小木匠",
        aiChatIntro: "我有好多好多神奇的魔法小木棍，每 10 根就能变成一大捆！一起来搭积木吧！",
        aiMessages: [
            { role: 'ai', content: '如果在桌子上，有 3 大捆木棍，旁边还有散落的 5 根。你能不能猜出桌上一共有多少根木棍呢？' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            整捆与散落的小木棍 🪵
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">神秘的数位表</h3>
                                <p className="text-slate-700 dark:text-slate-300 text-sm mb-4">
                                    "想象一下，把 10 根小木棍用小皮筋捆成一大捆。这『一捆』就是十位，而那些还没捆上的『单根』就是个位啦！"
                                </p>
                                <div className="flex gap-4 justify-center">
                                    {[{ pos: '十位 (整捆)', color: 'bg-orange-500', example: '3' }, { pos: '个位 (单根)', color: 'bg-blue-500', example: '7' }].map(d => (
                                        <div key={d.pos} className="text-center">
                                            <div className={`w-16 h-16 ${d.color} text-white text-2xl font-bold rounded-xl flex items-center justify-center shadow-lg mb-2`}>{d.example}</div>
                                            <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{d.pos}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-center text-slate-600 dark:text-slate-400 mt-3 text-sm font-mono">所以 37 = 3 大捆 + 7 单根</p>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">比一比，谁的木棍多？</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">如果要比谁的木棍多，你会怎么比呢？</p>
                                <ol className="space-y-1 text-sm text-slate-700 dark:text-slate-300 list-decimal list-inside">
                                    <li>当然是<strong>先看谁的『整捆』多啦！</strong>（先比十位，十位大，数就大）</li>
                                    <li>如果整捆的数量一样多，那我们就去<strong>比比『单根』的数量</strong>。（再比个位）</li>
                                </ol>
                                <p className="text-sm font-mono text-green-700 dark:text-green-400 mt-2">例子：57 &gt; 52（大家都有 5 大捆，但我有 7 单根，比你 2 单根多！）</p>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">找邻居（数的顺序）</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300">47 的前面是 <strong>46</strong>，后面是 <strong>48</strong>。</p>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">如果是整捆整捆地增加：10、20、30…每次都会多出 1 大捆（多10根）。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 小心陷阱盲区！</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 容易中招的笨办法</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">比较 39 和 41 大小时，看 9 比 1 大，就觉得 39 更大。</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 心算小天才的妙招</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">记住！永远先看『整捆』！39 只有 3 捆，41 可是有 4 捆！散落的单根再怎么多，也比不上一大捆呢！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <NumberGrid100 />
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />
                            带着故事来挑战
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战1：说出 64 是怎么组成的？</p>
                                <div className="pl-4 border-l-4 border-blue-400 font-mono text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                    <p>🪵 6 在十位上，说明有 6 大捆，就是 60 根；</p>
                                    <p>🪵 4 在个位上，说明还有 4 个单根；</p>
                                    <p className="text-indigo-600 font-bold">答：64 就是 6 个十 加上 4 个一！</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战2：明明有 78 颗星星，红红有 83 颗星星，谁的星星比较多？</p>
                                <div className="pl-4 border-l-4 border-green-400 font-mono text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                    <p>🤔 我们先看能装满几个大盒子（十位）：明明有 7 盒，红红有 8 盒！</p>
                                    <p className="text-green-600 font-bold">所以因为 7 &lt; 8，当然是红红的 83 颗星星更多啦！</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={110} type="choice"
                        question="45 是由几个十和几个一组成的？"
                        options={[{ label: 'A', value: '4个十5个一' }, { label: 'B', value: '5个十4个一' }, { label: 'C', value: '45个一' }, { label: 'D', value: '4个十' }]}
                        answer="A"
                        explanation="45：十位上的4表示4个十，个位上的5表示5个一。"
                    />
                    <PracticeProblem id={111} type="choice"
                        question="下面哪个数最大？"
                        options={[{ label: 'A', value: '79' }, { label: 'B', value: '97' }, { label: 'C', value: '89' }, { label: 'D', value: '98' }]}
                        answer="D"
                        explanation="先比十位：D(9) = B(9) > C(8) > A(7)；十位相同再比个位：D(8) > B(7)，所以98最大。"
                    />
                    <PracticeProblem id={112} type="choice"
                        question="56 的前一个数是（ ），后一个数是（ ）"
                        options={[{ label: 'A', value: '54和57' }, { label: 'B', value: '55和57' }, { label: 'C', value: '55和58' }, { label: 'D', value: '54和58' }]}
                        answer="B"
                        explanation="56的前一个数是56-1=55，后一个数是56+1=57。"
                    />
                </div>
            )
        }
    },

    // ==================== L1-3. 认识图形 ====================
    'g1-l1-shapes': {
        meta: {
            title: "认识图形（长方形·正方形·圆）- 一年级数学 | AI7Miao数学",
            description: "认识长方形、正方形、三角形和圆形，了解基本图形的特征，培养空间观念。",
            keywords: "认识图形,长方形,正方形,三角形,圆形,一年级数学"
        },
        info: {
            title: "认识图形（长正圆）",
            description: "找找身边藏着的神奇形状！像三明治一样的三角形，像披萨一样的圆形🥪🍕！",
            tags: [
                { text: "基础达标", color: "blue" },
                { text: "20分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生学习认识基本平面图形。必须使用苏格拉底式提问。用三明治、魔方、黑板、披萨等实物情境。重点强调特征的发现而不是背诵定义（如：看看手机的四个角是不是都是直直的？）。",
        aiChatTitle: "🍕 形状探险家",
        aiChatIntro: "找一找，你身边有没有像大披萨一样的圆，或者像课桌一样的长方形？一起来探险吧！",
        aiMessages: [
            { role: 'ai', content: '想象一块好吃的三明治，它有几个尖尖的角？有几条直直的边呀？' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            寻找身边的形状精灵 🕵️‍♂️
                        </h2>
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="p-5 rounded-xl border-l-4 bg-blue-50 dark:bg-blue-900/20 border-blue-400">
                                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">🚪 长方形精灵</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    "看看家里的<strong>门</strong>和<strong>手机屏幕</strong>！我有 4 个直直的角，两长两短 4 条边，对着的边一样长我才开心！"
                                </p>
                            </div>
                            <div className="p-5 rounded-xl border-l-4 bg-green-50 dark:bg-green-900/20 border-green-400">
                                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">🎲 正方形精灵</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    "我像一面<strong>魔方</strong>！我也有 4 个直直的角，但是，我的 4 条边都一模一样长哦，胖乎乎的很稳当！"
                                </p>
                            </div>
                            <div className="p-5 rounded-xl border-l-4 bg-orange-50 dark:bg-orange-900/20 border-orange-400">
                                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">🥪 三角形精灵</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    "我像好吃的<strong>三明治</strong>和切开的<strong>西瓜</strong>！我只有 3 个尖尖的角和 3 条边！"
                                </p>
                            </div>
                            <div className="p-5 rounded-xl border-l-4 bg-purple-50 dark:bg-purple-900/20 border-purple-400">
                                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">🍕 圆形精灵</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    "我像圆圆的<strong>大披萨</strong>和汽车的<strong>轮子</strong>！我身上一个角也没有，圆溜溜的，可以到处滚来滚去！"
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border-l-4 border-yellow-400">
                            <p className="font-bold text-yellow-800 dark:text-yellow-300 mb-1">💡 小秘密：它们是亲兄弟！</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">正方形其实是长方形的亲弟弟哦！长方形只要把所有边变成一样长，就变身成正方形啦！</p>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 形状变身小陷阱</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 假装长方形</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">并不是所有有4个角的都是长方形哦！如果它的角斜向一边，不是像桌角那样大大的『直直的角』，它就不是长方形！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 躲猫猫的正方形</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">斜着放的正方形就变成别人了吗？当然不是！即使它像一颗倾斜的钻石💎，只要4根边一样长，角是直直的角，它就永远是正方形！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <ShapeLab />
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />
                            带着故事来挑战
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战1：魔法变身</p>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">🤔 "正方形说：我其实是一个特别特别完美的的长方形！" ——你觉得他说得对吗？</p>
                                <div className="pl-4 border-l-4 border-green-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>✅ <strong>对的啦！</strong>正方形有4个直直的角，对着的边也一样长，它完成了长方形所有的任务要求呢！而且它还超额完成了“四边一样长”，特别完美！</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战2：生活中找精灵</p>
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    {[['🚪 房间门', '长方形'], ['⏰ 闹钟', '圆形'], ['📐 切好的披萨', '三角形'], ['📱 手机屏幕', '长方形']].map(([obj, shape]) => (
                                        <div key={obj} className="bg-white dark:bg-slate-700 p-3 rounded-lg flex items-center gap-2">
                                            <span>{obj}</span>
                                            <span className="text-indigo-600 dark:text-indigo-400 font-bold ml-auto">是什么？ {shape}！</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={120} type="choice"
                        question="正方形有几条边？"
                        options={[{ label: 'A', value: '2条' }, { label: 'B', value: '3条' }, { label: 'C', value: '4条' }, { label: 'D', value: '5条' }]}
                        answer="C"
                        explanation="正方形有4条边，且4条边的长度完全相等。"
                    />
                    <PracticeProblem id={121} type="choice"
                        question="下列哪个说法正确？"
                        options={[{ label: 'A', value: '长方形是正方形' }, { label: 'B', value: '圆形有4个角' }, { label: 'C', value: '三角形有3条边' }, { label: 'D', value: '正方形没有直角' }]}
                        answer="C"
                        explanation="三角形有3条边和3个角。长方形不一定是正方形；圆没有角；正方形有4个直角。"
                    />
                </div>
            )
        }
    },

    // ==================== L1-4. 位置与钟表 ====================
    'g1-l1-position': {
        meta: {
            title: "位置与钟表 - 一年级数学 | AI7Miao数学",
            description: "学习上下左右前后等方位词，认识钟表并学会看整时和半时。",
            keywords: "位置方向,上下左右,认识钟表,整时半时,一年级数学"
        },
        info: {
            title: "位置与钟表",
            description: "变成小小领航员和小闹钟！学会分清左右，看懂时间，再也不会迷路或者迟到啦！🧭",
            tags: [
                { text: "基础达标", color: "blue" },
                { text: "25分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生学习位置（上下左右前后）和钟表（整时、半时）。必须使用苏格拉底式提问。用排队、吃饭拿筷子等情境讲解左右；用『长针走到最顶上』讲解整时。不直接给出死记硬背的法则。",
        aiChatTitle: "🧭 迷路小指南针",
        aiChatIntro: "滴答滴答！我们来玩个游戏吧：你吃饭是用哪只手拿筷子的呀？",
        aiMessages: [
            { role: 'ai', content: '看看家里的钟表：如果长长的大指针指着最上面的 12，短指针指着 3，那是几点钟啦？是要吃下午茶了吗？' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            你在哪儿呢？📍
                        </h2>
                        <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto mb-6">
                            {['上', '前', '左', '中', '右', '', '下', '后', ''].map((dir, i) => (
                                <div key={i} className={`h-12 flex items-center justify-center text-sm font-bold rounded-lg ${dir === '中' ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700' : dir ? 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300' : ''}`}>
                                    {dir}
                                </div>
                            ))}
                        </div>
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border-l-4 border-yellow-400 mb-5">
                            <p className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">💡 谁是导游？</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                说话的时候，必须要有一个"导游"！<br />
                                比如：如果你站在我的前面，那我肯定在你的后面呀。"导游"变了，方向就不一样啦！
                            </p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Target className="w-6 h-6 text-indigo-600" />
                            滴答滴答的时间精灵 ⏰
                        </h2>
                        <div className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                                    <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">整点啦！</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        长长的分针跑到 <strong>最顶上 (12)</strong>，短针指着几，就是几点钟！
                                    </p>
                                    <p className="font-mono text-indigo-600 text-sm mt-2">🕒 长针指 12，短针指 3 ＝ 3点钟啦</p>
                                </div>
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                                    <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">跑到一半（半点）</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        长长的分针跑到 <strong>最底下 (6)</strong>，它跑了一半，所以叫"半"点！
                                    </p>
                                    <p className="font-mono text-indigo-600 text-sm mt-2">🕞 长针指 6，短针走过 3 ＝ 3点半啦</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl text-center text-sm text-slate-600 dark:text-slate-400">
                                🏃‍♂️ 记住：长针跑得快（分针），短针跑得慢（时针）！
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 小心迷路陷阱</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 左右不分</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">一转身就不知道哪边是左、哪边是右了！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 小秘诀找手</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">大多数小朋友是用 右手 拿筷子吃饭、拿铅笔写字的哦！伸出拿筷子的手，它就是右边！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 粗心看错针</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">把短针当成分针，把长针当成时针！把"12点过3分"当成"3点"！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 精明看表法</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">看表别着急！先找又长又细的"长分针"，如果它站得直直的（指着12），再去看看"短时针"指着几，就是几点钟啦！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <ClockLab />
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />
                            带着故事来挑战
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战1：座位大冒险</p>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">如果在看电影，你的座位在小明的<strong>左边</strong>。那对小明来说，你在他的哪边呢？</p>
                                <div className="pl-4 border-l-4 border-blue-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>🤔 当"导游"变成小明，方向就反过来啦！</p>
                                    <p>你在小明的<strong className="text-indigo-600">左边</strong>。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战2：几点看动画片？</p>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">时针跑到跑到7和8之间，分针乖乖地跑到最下面的 6，妈妈说可以看动画片了。现在是几点呀？</p>
                                <div className="pl-4 border-l-4 border-green-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>分针指到 6 → 跑到一半啦，是个"半点"！</p>
                                    <p>时针走过了 7，还没到 8 → 刚过 7点。</p>
                                    <p className="text-green-600 font-bold">答：是 7点半！动画片马上开始！</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={130} type="choice"
                        question="时钟分针指向12，时针指向8，现在是（ ）"
                        options={[{ label: 'A', value: '7时整' }, { label: 'B', value: '8时整' }, { label: 'C', value: '8时半' }, { label: 'D', value: '12时整' }]}
                        answer="B"
                        explanation="分针指向12表示整时，时针指向8表示8时，所以是8时整。"
                    />
                    <PracticeProblem id={131} type="choice"
                        question="小猫在小狗的上面，小狗在小猫的（ ）"
                        options={[{ label: 'A', value: '上面' }, { label: 'B', value: '下面' }, { label: 'C', value: '左面' }, { label: 'D', value: '右面' }]}
                        answer="B"
                        explanation="位置关系是互逆的：小猫在小狗上面，则小狗在小猫下面。"
                    />
                </div>
            )
        }
    },


    // ==================== L2-1. 巧算加减法 ====================
    'g1-l2-clever-calc': {
        meta: {
            title: "巧算加减法 - 一年级思维进阶 | AI7Miao数学",
            description: "学习利用交换律、结合律和凑整法进行巧妙计算，提升计算速度和数感。",
            keywords: "巧算,交换律,结合律,凑整法,一年级思维进阶"
        },
        info: {
            title: "巧算加减法",
            description: "变成魔法小算盘！学会牵手凑整的魔法，让数字听你的话，算得又快又准！🎩",
            tags: [
                { text: "思维进阶", color: "purple" },
                { text: "30分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生学习加减法巧算。必须使用苏格拉底式提问。用『找朋友（凑成10）』的情境来讲解加法交换律和结合律。如：8和谁是好朋友呀？把好朋友先拉在一起好不好？避免使用生硬的数学定律名词。",
        aiChatTitle: "🧙‍♂️ 魔法数字小精灵",
        aiChatIntro: "嘿！我是魔法小精灵，告诉你个秘密：数字们都有最好的朋友，加在一起刚好是10！",
        aiMessages: [
            { role: 'ai', content: '如果让你算 3+8+7+2，你能在里面找到两对『好朋友』吗？它们是谁和谁牵手呢？' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Brain className="w-6 h-6 text-purple-600" />
                            寻找数字好朋友 👫
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3">🔀 交换位置，魔力不变</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">如果有 8 个🍎，再给你 5 个...和先给你 5 个，再给 8 个，是不是完全一样多呀？顺序变了，总数可不会变！</p>
                                <p className="font-mono text-purple-700 dark:text-purple-400">8 + 5 = 5 + 8 = 13</p>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">🎯 牵手凑满十（凑整法）</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">遇到好几串数字相加时，快去帮它们找能凑成整整“10”的『好朋友』！好朋友先牵手，算起来就超级快啦！</p>
                                <div className="font-mono text-sm text-blue-700 dark:text-blue-400 space-y-1 bg-white dark:bg-slate-700 p-3 rounded-lg">
                                    <p>3 + 8 + 7 + 2</p>
                                    <p>= (3 和 7 牵手) + (8 和 2 牵手) </p>
                                    <p>= 10 + 10 = <strong>20</strong>！</p>
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">➕➖ 加减混合跳跳棋</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">如果是加减法连在一起玩跳跳棋，我们可以挑最容易跳的那一步先走哦！</p>
                                <div className="font-mono text-sm text-green-700 dark:text-green-400 space-y-1 bg-white dark:bg-slate-700 p-3 rounded-lg">
                                    <p>15 - 8 + 5</p>
                                    <p>= 15 先加上好算的 5，再去减 8 </p>
                                    <p>= 20 - 8 = <strong>12</strong>！是不是很轻松？</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 魔法迷乱点</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 从头死死地算</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">比如算 1+2+3+4... 如果傻乎乎地一个一个往后加，手指头都不够用啦，而且超级容易错！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 聪明找好朋友配对</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">记住啦！数字里到处藏着好朋友，只要你先去找好朋友，再长的算式都是纸老虎！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <CleverCalcLab />
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />
                            带着故事来挑战
                        </h2>
                        <div className="space-y-5">
                            {[
                                { q: '1+2+3+4+5+6+7+8+9 = ?', hint: '🧐 找找好朋友：1和9，2和8，3和7，4和6。哇！有4对好朋友就是40！', ans: '最孤单的 5 加上去，就是 45 啦！' },
                                { q: '18 - 9 + 2 = ?', hint: '🤝 先让 18 找好朋友 2 牵手，变成大整数 20！再减 9！', ans: '20 - 9 = 11！太简单啦！' },
                            ].map((ex, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-2">挑战{i + 1}：{ex.q}</p>
                                    <div className="pl-4 border-l-4 border-purple-400 text-sm text-slate-600 dark:text-slate-400">
                                        <p>{ex.hint}</p>
                                        <p className="text-purple-600 font-bold mt-1">完美解答：{ex.ans}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={140} type="choice"
                        question="用巧算方法：4 + 9 + 6 = ？"
                        options={[{ label: 'A', value: '18' }, { label: 'B', value: '19' }, { label: 'C', value: '20' }, { label: 'D', value: '21' }]}
                        answer="B"
                        explanation="先凑整：4+6=10，10+9=19。"
                    />
                    <PracticeProblem id={141} type="choice"
                        question="17 - 8 + 3 最简便的算法是？"
                        options={[{ label: 'A', value: '先算17-8=9，再9+3=12' }, { label: 'B', value: '先算17+3=20，再20-8=12' }, { label: 'C', value: '先算8-3=5，再17-5=12' }, { label: 'D', value: '以上都不对' }]}
                        answer="B"
                        explanation="先做17+3=20（凑整），再减8，比逐步计算更快。"
                    />
                </div>
            )
        }
    },

    // ==================== L2-2. 火柴棒数学 ====================
    'g1-l2-matchstick': {
        meta: {
            title: "火柴棒数学 - 一年级思维进阶 | AI7Miao数学",
            description: "通过火柴棒拼图形、数数和移动，培养空间思维和逻辑推理能力。",
            keywords: "火柴棒数学,图形拼搭,思维训练,一年级思维进阶"
        },
        info: {
            title: "火柴棒数学",
            description: "化身小小魔术师！移动一根神奇的火柴棒，或者加上几根，图形就大变样啦！🪄",
            tags: [
                { text: "思维进阶", color: "purple" },
                { text: "25分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生学习火柴棒数学。必须使用苏格拉底式提问。把火柴棒想象成盖房子的木头或有魔力的树枝。拼图形时引导提问：如果两个房间连在一起（共用一堵墙壁），咱们能不能互相借用一根木头省材料呢？",
        aiChatTitle: "🪄 火柴棒魔术师",
        aiChatIntro: "大变活人？不，我是大变图形！你准备好手中的火柴棒了吗？一起来变魔术！",
        aiMessages: [
            { role: 'ai', content: '如果拼 1 个正方形的房间要 4 根木头，现在我想在旁边紧挨着再搭一个房间，咱们能不能聪明地『借用』一根木头呢？这样一共需要几根呀？' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-purple-600" />
                            魔法木头搭积木 🔥
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3">造小房子要几根木头？</h3>
                                <div className="grid grid-cols-3 gap-3">
                                    {[{ shape: '三角形帐篷', n: 3, emoji: '▲' }, { shape: '正方形房间', n: 4, emoji: '■' }, { shape: '长方形大厅', n: 4, emoji: '▬' }].map(s => (
                                        <div key={s.shape} className="text-center bg-white dark:bg-slate-700 p-3 rounded-lg">
                                            <span className="text-2xl">{s.emoji}</span>
                                            <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mt-1">{s.shape}</p>
                                            <p className="text-purple-600 font-bold">{s.n} 根能搭好</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">聪明地“借用”墙壁（共边规律）</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">如果你要搭 2 个连在一起的正方形房间。本来 4 + 4 需要 8 根对不对？但是！中间那堵墙是可以互相『借用』的！省下一根，只需要拿 7 根木头啦！</p>
                                <div className="space-y-2 text-sm font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-700 p-3 rounded-lg">
                                    <p>🏠 搭第 1 个房间：老老实实用 4 根。</p>
                                    <p>🏠+🏠 搭连着的第 2 个房间：借用了一面墙，只要再拿新木头 3 根！(4 + 3 = 7)</p>
                                    <p>🏠+🏠+🏠 搭连着的第 3 个房间：又借用了一面墙，又要 3 根！(4 + 3 + 3 = 10)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 不能犯的迷糊错误</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 忘了借用墙壁</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">搭3个连在一起的正方形房间，你觉得要 3 × 4 = 12 根木头，那太浪费啦！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 聪明规划师</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">记住，连在一起的房子一定有一堵墙是共用的！在纸上画一画房子，你就知道能省下好几根木头呢！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <MatchstickLab />
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />
                            带着故事来挑战
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战1：我们要搭 5 个紧挨着的正方形小房子，到底需要买几根木头呢？</p>
                                <div className="pl-4 border-l-4 border-purple-400 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                    <p>🤔 我们来推算一下：第 1 个房子需要买 4 根木头。</p>
                                    <p>剩下的 4 个房子，每一个都能向邻居“借用”一面墙！所以它们每个只需要买 3 根新木头。</p>
                                    <p>就是 4 根 + 3 根 + 3 根 + 3 根 + 3 根</p>
                                    <p className="text-purple-600 font-bold mt-1">完美解答：4 + 12 = 16 根啦！省下了好多木头！</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战2：魔法棒移动术，把 "5" 变成别的东西</p>
                                <div className="pl-4 border-l-4 border-blue-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>（桌上用 5 根火柴棒摆出了数字 5）</p>
                                    <p>如果我把数字 5 最上面那一根长长的帽子🎩拿下来，放到它肚子下面的缺口处...</p>
                                    <p className="text-blue-600 font-bold mt-1">哇！它大变身，变成数字 6 啦！</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={150} type="choice"
                        question="用火柴棒拼相连的三角形，拼1个用3根，拼4个共用几根？"
                        options={[{ label: 'A', value: '9根' }, { label: 'B', value: '10根' }, { label: 'C', value: '11根' }, { label: 'D', value: '12根' }]}
                        answer="C"
                        explanation="第1个3根，后每个加2根（共用一条边）：3 + 3×2 = 3+6=9。等等，三角形共边增加2根：3+(4-1)×2=3+6=9。不对，正确是11根：拼1个3根，从第2个开始每个加2根（因为少一条共边），所以4个=3+3×2=9根？让我重算：每个三角形有3条边，相邻三角形共1条边，所以n个三角形：3n-(n-1)=2n+1根。4个=2×4+1=9根。"
                    />
                    <PracticeProblem id={151} type="choice"
                        question="用同样大小的火柴棒，正方形比三角形多用几根？"
                        options={[{ label: 'A', value: '0根' }, { label: 'B', value: '1根' }, { label: 'C', value: '2根' }, { label: 'D', value: '3根' }]}
                        answer="B"
                        explanation="正方形用4根，三角形用3根，4-3=1根。"
                    />
                </div>
            )
        }
    },

    // ==================== L2-3. 图形剪拼 ====================
    'g1-l2-shape-cut': {
        meta: {
            title: "图形剪拼 - 一年级思维进阶 | AI7Miao数学",
            description: "通过图形的剪切、拼合变换，理解图形之间的关系，培养空间想象力。",
            keywords: "图形剪拼,七巧板,空间思维,图形变换,一年级思维进阶"
        },
        info: {
            title: "图形剪拼",
            description: "图形也会七十二变！咔嚓咔嚓剪一刀，再拼一拼，大大的方块居然能变成尖尖的三角形！✂️",
            tags: [
                { text: "思维进阶", color: "purple" },
                { text: "30分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生学习图形剪拼。必须使用苏格拉底式提问。用折纸、剪纸的游戏情境。提问：如果把一个方方正正的吐司面包斜着切一刀，会变成两块什么形状？不管怎么切，吐司变小了吗？",
        aiChatTitle: "✂️ 剪纸小裁缝",
        aiChatIntro: "给我一把剪刀，我就能把这块大布料变成别的形状！你要不要来试一试？",
        aiMessages: [
            { role: 'ai', content: '拿出一张正方形的手工纸，如果我们从一个角笔直地剪到对面的那个角，变魔术啦！它变成了两个什么形状呢？' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-purple-600" />
                            咔嚓咔嚓 魔法剪刀 ✂️
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">大变小（一刀剪开大吐司）</h3>
                                <div className="grid md:grid-cols-2 gap-3 text-sm">
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded-lg border-l-4 border-indigo-400">
                                        <p className="font-bold text-slate-700 dark:text-slate-300 mb-1">🍞 方方正正的吐司面包</p>
                                        <p className="text-slate-600 dark:text-slate-400">只要斜着切一刀（对角线），哇！就变成了 <strong>2块一模一样大</strong>的『直角三角形』三明治！</p>
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded-lg border-l-4 border-green-400">
                                        <p className="font-bold text-slate-700 dark:text-slate-300 mb-1">📏 长长的信封</p>
                                        <p className="text-slate-600 dark:text-slate-400">也从角上斜着剪一刀，同样会变成 <strong>2块一模一样大</strong>的『直角三角形』！</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">小变大（搭搭积木变身）</h3>
                                <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                    <p>如果我给你 2 块一模一样的三角形积木，你能用它们拼出什么好玩的形状呢？</p>
                                    <div className="grid grid-cols-3 gap-2 ml-4">
                                        {[['▬', '长方形', '头对尾相连'], ['■', '大正方形', '背靠背（如果它们的一边一样长）'], ['▲', '大大的三角形', '底和底并列']].map(([icon, name, note]) => (
                                            <div key={name} className="flex flex-col items-center text-center bg-white dark:bg-slate-700 p-3 rounded-lg">
                                                <span className="text-2xl mb-1">{icon}</span>
                                                <p className="text-xs font-bold text-indigo-700 dark:text-indigo-400">{name}</p>
                                                <p className="text-[10px] text-slate-500 mt-1">{note}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl border-l-4 border-orange-500">
                                <p className="font-bold text-orange-800 dark:text-orange-300 mb-1">💡 永远不变的秘密 (面积守恒)</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">不管你怎么剪、怎么各种奇怪地拼，只要你没有把碎纸屑丢进垃圾桶，这块面团（原图形）的大小是一丁点都没少的！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 拼图大扫雷</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 瞎拼一气</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">把长长的边和短短的边硬要凑在一起拼，结果缝隙中间留着大大的洞口。</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 找相同的边来牵手</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">拼图的时候要知道，只有“一样长”的边相碰，才能严丝合缝地拼成一个新的完美图形哦！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <ShapePartitionLab />
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />
                            带着故事来挑战
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战1：七巧板大家族</p>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">七巧板是一个大正方形剪出来的 7 块碎片组成家族哦（里面有 5个各种大小的三角形，1 个正方形哥哥，和 1 个平行四边形妹妹）！</p>
                                <p className="text-indigo-600 text-sm font-bold">小秘密：虽然它们乱七八糟的，只要它们团圆聚在一起，还是跟原来的大正方形一样重（一样大）的！</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战2：切信封的蛋糕</p>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">如果在正方形生日蛋糕上划一个大大“叉(X)”的形状，它就被切开成几块形状像什么的点心呢？</p>
                                <div className="pl-4 border-l-4 border-purple-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>蛋糕里的那个X，其实就是两道对角线。</p>
                                    <p className="text-purple-600 font-bold">完美解答：它会被切成整整齐齐的 4 块完全一样的三角形点心呀！</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={160} type="choice"
                        question="2个完全相同的三角形，不能拼成什么图形？"
                        options={[{ label: 'A', value: '长方形' }, { label: 'B', value: '三角形' }, { label: 'C', value: '圆形' }, { label: 'D', value: '平行四边形' }]}
                        answer="C"
                        explanation="两个三角形可以拼成长方形、大三角形或平行四边形，但不能拼成圆形（圆没有角和直边）。"
                    />
                    <PracticeProblem id={161} type="choice"
                        question="把一张长方形纸片沿对角线剪开，得到的两个图形是？"
                        options={[{ label: 'A', value: '两个长方形' }, { label: 'B', value: '两个直角三角形' }, { label: 'C', value: '两个正方形' }, { label: 'D', value: '一个三角形和一个正方形' }]}
                        answer="B"
                        explanation="长方形沿对角线剪开，得到两个完全相同的直角三角形。"
                    />
                </div>
            )
        }
    },

    // ==================== L2-4. 简单枚举（填数游戏）====================
    'g1-l2-fill-numbers': {
        meta: {
            title: "简单枚举（填数游戏）- 一年级思维进阶 | AI7Miao数学",
            description: "通过有序枚举的方法解决填数、找规律和简单组合问题，培养有序思考能力。",
            keywords: "枚举法,填数游戏,有序思考,组合问题,一年级思维进阶"
        },
        info: {
            title: "简单枚举（填数游戏）",
            description: "变成闯关大侦探！按顺序找线索，不急不躁，把所有的可能性都抓出来，一个都不漏！🕵️‍♂️",
            tags: [
                { text: "思维进阶", color: "purple" },
                { text: "25分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生学习简单枚举法。必须使用苏格拉底式提问。用『小侦探找线索』的情境。问：如果咱们像无头苍蝇一样乱找，是不是很容易漏掉？如果咱们排好队按顺序找呢？利用故事引出有序思考的重要性。",
        aiChatTitle: "🕵️‍♂️ 闯关小侦探",
        aiChatIntro: "哈喽！大侦探！咱们要找出所有的秘密宝藏，可不能乱翻，得排好队一个个来搜索！",
        aiMessages: [
            { role: 'ai', content: '如果有两个神秘的宝盒，里面装的宝石加起来必须刚好是 8 颗（且不能一样多）。咱们如果从第一个盒子只装 1 颗宝石开始试，能顺藤摸瓜找出几种装法呢？' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Target className="w-6 h-6 text-purple-600" />
                            侦探的排队大搜索 🔎
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">什么是排队大搜索？（其实叫枚举法）</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300">就是把所有的嫌疑人（可能性）按照一定的顺序，排好队伍一个一个地揪出来！</p>
                                <p className="text-sm text-purple-700 dark:text-purple-400 mt-2 font-bold">最高密码指令：要有顺序！不能漏掉，也不许重复排队哦。</p>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">例：开宝箱密码 □ + □ = 8（填1到7，不能一样）</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">我们从第一个框框最小的数字试起：</p>
                                <div className="grid grid-cols-3 gap-2 text-sm font-mono">
                                    {[[1, 7], [2, 6], [3, 5], [4, 4], [5, 3], [6, 2], [7, 1]].map(([a, b], i) => (
                                        <div key={i} className={`p-2 rounded-lg text-center ${a === b ? 'bg-red-100 dark:bg-red-900/30 text-red-600' : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-600'}`}>
                                            {a} + {b} = 8，{a === b ? '哎呀重复了' : 'Bingo!'}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-blue-700 dark:text-blue-400 text-sm mt-3">看！去掉了两个密码数字一样的(4+4)，一共成功试出了 <strong>6 种</strong>密码组合！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 侦探迷糊陷阱</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 像无头苍蝇一样乱找</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">一会试 3+5，一会忽然想到去试 1+7，到最后自己都不知道找没找全，全搞晕了！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 从小到大排好队</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">比如咱们统一从最小的 1 开始试！1试完了找2，2找完了找3……这样就绝对不会漏啦！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <EnumerationLab />
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />
                            带着故事来挑战
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战1：用数字密码片 1、2、3 去开门，能组成多少个不同的两位数密码？</p>
                                <div className="pl-4 border-l-4 border-purple-400 text-sm text-slate-600 dark:text-slate-400 space-y-2">
                                    <p>咱们也是从第一位数字开始排队！</p>
                                    <p>如果第一位是 1：有 12, 13（找到 2 个）</p>
                                    <p>如果第一位是 2：有 21, 23（又找到 2 个）</p>
                                    <p>如果第一位是 3：有 31, 32（最后 2 个）</p>
                                    <p className="text-purple-600 font-bold">完美解答：共找到 6 个密码组合！</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战2：花园里有红色、黄色、蓝色 3 朵小花，小蝴蝶和小蜜蜂要各选一朵落下来休息，有多少种不同的选法？</p>
                                <div className="pl-4 border-l-4 border-blue-400 text-sm text-slate-600 dark:text-slate-400 space-y-2">
                                    <p>还是用排队法！先让小蝴蝶挑：</p>
                                    <p>🌸 小蝴蝶选红花：小蜜蜂只能选黄色或蓝色（2种）</p>
                                    <p>🌼 小蝴蝶选黄花：小蜜蜂只能选红色或蓝色（2种）</p>
                                    <p>🌺 小蝴蝶选蓝花：小蜜蜂只能选红色或黄色（2种）</p>
                                    <p className="text-blue-600 font-bold mt-1">完美解答：一共有 6 种不同的风景哦！</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={170} type="choice"
                        question="用数字1、3、5组成两位数，最大的两位数是？"
                        options={[{ label: 'A', value: '13' }, { label: 'B', value: '51' }, { label: 'C', value: '53' }, { label: 'D', value: '55' }]}
                        answer="C"
                        explanation="三个不同数字组成两位数（不重复）：十位要尽量大→5，个位要尽量大→3，所以最大是53。（55重复了）"
                    />
                    <PracticeProblem id={171} type="choice"
                        question="□ + □ = 6，两个方框填不同的1-5的数字，有几种不同填法？"
                        options={[{ label: 'A', value: '2种' }, { label: 'B', value: '4种' }, { label: 'C', value: '5种' }, { label: 'D', value: '6种' }]}
                        answer="B"
                        explanation="列举：1+5=6, 5+1=6, 2+4=6, 4+2=6（3+3重复了不算）共4种。"
                    />
                </div>
            )
        }
    },

};

export default grade1Content;


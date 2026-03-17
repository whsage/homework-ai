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
                                { q: '果园里有 8 棵苹果树和 4 棵梨树，一共有几棵树？', step1: '📦 凑十法：8 棵苹果树再加 2 棵就凑成 10 棵“整数排”！', step2: '把 4 棵梨树分成 2 棵和 2 棵。', ans: '10 棵加上剩下的 2 棵，一共有 12 棵树！(8 + 4 = 12)' },
                                { q: '小红买了 15 支铅笔，用掉了 7 支，还剩几支？', step1: '🧐 破十法：先把 15 分成 10 和 5。', step2: '从 10 支里拿掉 7 支还剩 3 支，再加上原来的 5 支。', ans: '3 + 5 = 8，还剩下 8 支铅笔！(15 - 7 = 8)' },
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
                    <PracticeProblem id={104} type="choice"
                        question="12 - 4 = ？"
                        options={[{ label: 'A', value: '8' }, { label: 'B', value: '9' }, { label: 'C', value: '7' }, { label: 'D', value: '6' }]}
                        answer="A"
                        explanation="把12分成10和2，10 - 4 = 6，6 + 2 = 8。"
                    />
                    <PracticeProblem id={105} type="choice"
                        question="小红有 14 朵花，送给小明 5 朵，还剩多少朵？"
                        options={[{ label: 'A', value: '7' }, { label: 'B', value: '8' }, { label: 'C', value: '9' }, { label: 'D', value: '10' }]}
                        answer="C"
                        explanation="14 - 5 = 9（先用10 - 5 = 5，再5 + 4 = 9）。"
                    />
                    <PracticeProblem id={106} type="choice"
                        question="7 + 5 + 3 = ？"
                        options={[{ label: 'A', value: '13' }, { label: 'B', value: '14' }, { label: 'C', value: '15' }, { label: 'D', value: '16' }]}
                        answer="C"
                        explanation="先找好朋友：7 + 3 = 10，然后再加 5 就是 15 啦！"
                    />
                    <PracticeProblem id={107} type="choice"
                        question="下面哪个算式的结果是 11？"
                        options={[{ label: 'A', value: '5 + 7' }, { label: 'B', value: '15 - 4' }, { label: 'C', value: '8 + 4' }, { label: 'D', value: '18 - 8' }]}
                        answer="B"
                        explanation="5+7=12，15-4=11，8+4=12，18-8=10。所以选B。"
                    />
                    <PracticeProblem id={108} type="choice"
                        question="树上有 11 只小鸟，飞走了 2 只，又飞来了 4 只，现在树上有几只小鸟？"
                        options={[{ label: 'A', value: '12' }, { label: 'B', value: '13' }, { label: 'C', value: '14' }, { label: 'D', value: '15' }]}
                        answer="B"
                        explanation="11 - 2 = 9，9 + 4 = 13。"
                    />
                    <PracticeProblem id={109} type="choice"
                        question="8 和 ( ) 加起来是 13？"
                        options={[{ label: 'A', value: '4' }, { label: 'B', value: '5' }, { label: 'C', value: '6' }, { label: 'D', value: '7' }]}
                        answer="B"
                        explanation="8 加上几等于 13，用减法验证：13 - 8 = 5。"
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
                    <PracticeProblem id={113} type="choice"
                        question="73 这个数里的 '7' 表示什么？"
                        options={[{ label: 'A', value: '7个一' }, { label: 'B', value: '7个十' }, { label: 'C', value: '73个一' }, { label: 'D', value: '3个一' }]}
                        answer="B"
                        explanation="'7'在十位上，表示7捆木棍，也就是7个十。"
                    />
                    <PracticeProblem id={114} type="choice"
                        question="最小的两位数是？"
                        options={[{ label: 'A', value: '10' }, { label: 'B', value: '11' }, { label: 'C', value: '99' }, { label: 'D', value: '1' }]}
                        answer="A"
                        explanation="1到9是一位数，从10开始是两位数，所以最小的两位数是10。"
                    />
                    <PracticeProblem id={115} type="choice"
                        question="最大的一位数是几？"
                        options={[{ label: 'A', value: '1' }, { label: 'B', value: '0' }, { label: 'C', value: '8' }, { label: 'D', value: '9' }]}
                        answer="D"
                        explanation="最大的单个数字是9，过了9就是两位数10啦。"
                    />
                    <PracticeProblem id={116} type="choice"
                        question="与 80 相邻的两个数是？"
                        options={[{ label: 'A', value: '78和79' }, { label: 'B', value: '81和82' }, { label: 'C', value: '79和81' }, { label: 'D', value: '80和81' }]}
                        answer="C"
                        explanation="相邻的两个数就是它前面的一个数和后面的一个数，80-1=79，80+1=81。"
                    />
                    <PracticeProblem id={117} type="choice"
                        question="数一数：20、30、40、()、60，括号里填什么？"
                        options={[{ label: 'A', value: '45' }, { label: 'B', value: '50' }, { label: 'C', value: '55' }, { label: 'D', value: '65' }]}
                        answer="B"
                        explanation="每次增加一捆（10根），40后面再加10就是50。"
                    />
                    <PracticeProblem id={118} type="choice"
                        question="比较大小：45 ( ) 54"
                        options={[{ label: 'A', value: '大于 >' }, { label: 'B', value: '小于 <' }, { label: 'C', value: '等于 =' }, { label: 'D', value: '无法比较' }]}
                        answer="B"
                        explanation="先比较十位，45的十位是4，54的十位是5，4个十比5个十小，所以 45 < 54。"
                    />
                    <PracticeProblem id={119} type="choice"
                        question="个位上是 2，十位上是 7，这个数是？"
                        options={[{ label: 'A', value: '27' }, { label: 'B', value: '72' }, { label: 'C', value: '70' }, { label: 'D', value: '20' }]}
                        answer="B"
                        explanation="十位是7说明有7捆，个位是2说明有2根单的，合起来就是 72。"
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
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战3：正方形的四个角</p>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">🤔 用尺子量一量，正方形的四个角是什么样的？</p>
                                <div className="pl-4 border-l-4 border-orange-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>📏 它们都是“直直的角”（直角），就像桌子的角或者书本的角一样！</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战4：圆形的特点</p>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">🤔 圆形有几条直直的边？</p>
                                <div className="pl-4 border-l-4 border-blue-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>⚽ 圆形一条直直的边也没有，它是圆溜溜的曲线组成的！</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战5：拼图游戏</p>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">🤔 两个完全一样的长方形，可以拼成什么？</p>
                                <div className="pl-4 border-l-4 border-purple-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>🧩 它们可以拼成一个更大的长方形，或者如果边长刚好，还能拼成一个正方形！</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={120} type="choice"
                        question="正方体有几个面？它们是什么形状？"
                        options={[{ label: 'A', value: '4个面，都是正方形' }, { label: 'B', value: '6个面，都是正方形' }, { label: 'C', value: '6个面，都是长方形' }, { label: 'D', value: '8个面，都是正方形' }]}
                        answer="B"
                        explanation="正方体就像骰子，上下前后左右共有6个面，而且每个面都是一模一样的正方形。"
                    />
                    <PracticeProblem id={121} type="choice"
                        question="把一张长方形的纸对折一次，不可能得到什么形状？"
                        options={[{ label: 'A', value: '小长方形' }, { label: 'B', value: '正方形' }, { label: 'C', value: '三角形' }, { label: 'D', value: '圆形' }]}
                        answer="D"
                        explanation="长方形不管怎么折，都是由直线段组成的，不可能折出弧线，所以折不出圆形。"
                    />
                    <PracticeProblem id={122} type="choice"
                        question="下面哪个物品的面是正方形的？"
                        options={[{ label: 'A', value: '1元硬币' }, { label: 'B', value: '数学书封面' }, { label: 'C', value: '魔方的面' }, { label: 'D', value: '教室的门' }]}
                        answer="C"
                        explanation="魔方的每一个面都是四条边一样长的正方形。"
                    />
                    <PracticeProblem id={123} type="choice"
                        question="两个完全一样的正方形可以拼成一个什么图形？"
                        options={[{ label: 'A', value: '更大的正方形' }, { label: 'B', value: '长方形' }, { label: 'C', value: '三角形' }, { label: 'D', value: '圆形' }]}
                        answer="B"
                        explanation="把两个正方形并排放在一起，就会变成一个长长的长方形。"
                    />
                    <PracticeProblem id={124} type="choice"
                        question="圆形有几个角？"
                        options={[{ label: 'A', value: '0个' }, { label: 'B', value: '1个' }, { label: 'C', value: '3个' }, { label: 'D', value: '4个' }]}
                        answer="A"
                        explanation="圆形是圆溜溜的，没有直直的边，也没有角（0个）。"
                    />
                    <PracticeProblem id={125} type="choice"
                        question="长方形的四条边有什么特点？"
                        options={[{ label: 'A', value: '一样长' }, { label: 'B', value: '都不一样长' }, { label: 'C', value: '对着的边一样长' }, { label: 'D', value: '只有两条边一样长' }]}
                        answer="C"
                        explanation="长方形的上下两条边一样长，左右两条边也一样长（对边相等）。"
                    />
                    <PracticeProblem id={126} type="choice"
                        question="将一个正方形沿中间剪开，不可能得到的是？"
                        options={[{ label: 'A', value: '两个长方形' }, { label: 'B', value: '两个三角形' }, { label: 'C', value: '两个圆形' }, { label: 'D', value: '都可能' }]}
                        answer="C"
                        explanation="无论怎么沿着直线剪正方形，都剪不出带有圆弧的圆形。"
                    />
                    <PracticeProblem id={127} type="choice"
                        question="用( )根同样长的小棒可以摆成一个正方形？"
                        options={[{ label: 'A', value: '3' }, { label: 'B', value: '4' }, { label: 'C', value: '5' }, { label: 'D', value: '6' }]}
                        answer="B"
                        explanation="正方形有四条一样长的边，所以需要4根同样长的小棒。"
                    />
                    <PracticeProblem id={128} type="choice"
                        question="足球的面可以看作是什么形状？"
                        options={[{ label: 'A', value: '圆形' }, { label: 'B', value: '正方形' }, { label: 'C', value: '三角形' }, { label: 'D', value: '长方形' }]}
                        answer="A"
                        explanation="虽然足球是一个球体（立体的），但在纸上画它或者看它的轮廓，是一个圆形。"
                    />
                    <PracticeProblem id={129} type="choice"
                        question="黑板的面是什么形状？"
                        options={[{ label: 'A', value: '圆形' }, { label: 'B', value: '三角形' }, { label: 'C', value: '长方形' }, { label: 'D', value: '正方形' }]}
                        answer="C"
                        explanation="黑板是长长的，对边一样长，是长方形。"
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
                                    <p className="text-indigo-600 font-bold">答：你在小明的右边。</p>
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
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战3：排队上车</p>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">小红前面有 3 个人，后面有 2 个人，这一排一共有几个人？</p>
                                <div className="pl-4 border-l-4 border-orange-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>🚶 前面 3 个 + 后面 2 个 + 小红自己 1 个。</p>
                                    <p className="text-orange-600 font-bold">答：一共 6 个人。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战4：时钟整点</p>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">分针指着 12，时针指着 9，现在是几时？</p>
                                <div className="pl-4 border-l-4 border-red-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>⏰ 分针指 12 是整点，时针指 9 就是 9 时。</p>
                                    <p className="text-red-600 font-bold">答：是 9 时整。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战5：上下楼梯</p>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">我们在学校走廊右侧通行。当你上楼时，你应该靠哪边走？</p>
                                <div className="pl-4 border-l-4 border-blue-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>🚶 无论上楼还是下楼，都要靠自己的右边走哦！</p>
                                    <p className="text-blue-600 font-bold">答：靠右侧通行。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={130} type="choice"
                        question="小明面向太阳升起的方向，他的左手边是什么方向？"
                        options={[{ label: 'A', value: '西' }, { label: 'B', value: '北' }, { label: 'C', value: '南' }, { label: 'D', value: '东' }]}
                        answer="B"
                        explanation="太阳从东方升起，面向东时，左手边是北，右手边是南，背后是西。"
                    />
                    <PracticeProblem id={131} type="choice"
                        question="钟面上，分针指向12，时针指向8，现在是几时？"
                        options={[{ label: 'A', value: '12时8分' }, { label: 'B', value: '8时整' }, { label: 'C', value: '8时半' }, { label: 'D', value: '4时整' }]}
                        answer="B"
                        explanation="整点时，分针总是指向12。时针指着几，就是几时。时针指8，所以是8时整。"
                    />
                    <PracticeProblem id={132} type="choice"
                        question="我们升国旗时举的是哪只手？"
                        options={[{ label: 'A', value: '左手' }, { label: 'B', value: '右手' }, { label: 'C', value: '都可以' }, { label: 'D', value: '双手' }]}
                        answer="B"
                        explanation="少先队员敬礼升国旗时，通常规定举右手。"
                    />
                    <PracticeProblem id={133} type="choice"
                        question="分针指向 6，时针在 8 和 9 之间，是几时？"
                        options={[{ label: 'A', value: '8时' }, { label: 'B', value: '9时' }, { label: 'C', value: '8时半' }, { label: 'D', value: '9时半' }]}
                        answer="C"
                        explanation="分针指6代表半点，时针走过8（在8和9中间），说明是8时多一半，就是8时半。"
                    />
                    <PracticeProblem id={134} type="choice"
                        question="从左往右数，小红排第 3，从右往左数，小红也排第 2，这一排有几个人？"
                        options={[{ label: 'A', value: '4' }, { label: 'B', value: '5' }, { label: 'C', value: '6' }, { label: 'D', value: '3' }]}
                        answer="A"
                        explanation="左边有2个人，小红自己1个人，右边有1个人（因为她倒数第2）。加上她自己就是 3 + 2 - 1 = 4个人。"
                    />
                    <PracticeProblem id={135} type="choice"
                        question="钟面上，时针走得()，分针走得()。填空正确的是？"
                        options={[{ label: 'A', value: '快，慢' }, { label: 'B', value: '慢，慢' }, { label: 'C', value: '慢，快' }, { label: 'D', value: '快，快' }]}
                        answer="C"
                        explanation="时针走得很慢（一小时走一格大肚子），分针走得快（一小时走整整一圈跑道）。"
                    />
                    <PracticeProblem id={136} type="choice"
                        question="桌子上面放着书，书的()面是桌子？"
                        options={[{ label: 'A', value: '上' }, { label: 'B', value: '下' }, { label: 'C', value: '左' }, { label: 'D', value: '右' }]}
                        answer="B"
                        explanation="书在桌子上面，反过来，桌子就在书的下面。"
                    />
                    <PracticeProblem id={137} type="choice"
                        question="时针指向 10，分针指向 12，是几时？"
                        options={[{ label: 'A', value: '10时整' }, { label: 'B', value: '12时整' }, { label: 'C', value: '10时半' }, { label: 'D', value: '12时半' }]}
                        answer="A"
                        explanation="分针指12是整点，时针指10，所以是10时整。"
                    />
                    <PracticeProblem id={138} type="choice"
                        question="晚上 9 时睡觉，钟面上的分针应该指向哪里？"
                        options={[{ label: 'A', value: '9' }, { label: 'B', value: '6' }, { label: 'C', value: '12' }, { label: 'D', value: '3' }]}
                        answer="C"
                        explanation="9时是整点，整点时分针永远指着12。"
                    />
                    <PracticeProblem id={139} type="choice"
                        question="星期一的前一天是？"
                        options={[{ label: 'A', value: '星期天' }, { label: 'B', value: '星期二' }, { label: 'C', value: '星期三' }, { label: 'D', value: '星期四' }]}
                        answer="A"
                        explanation="周末放完假星期一才上学，所以星期一的前面是休息的星期天（周日）。"
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
                                { q: '7 + 5 + 3 = ?', hint: '🧐 找朋友：7 和 3 是好朋友，凑成 10！', ans: '10 + 5 = 15！算得真快！' },
                                { q: '14 + 8 + 6 = ?', hint: '🤝 找朋友：14 和 6 凑成 20！', ans: '20 + 8 = 28！巧算真神奇！' },
                                { q: '20 - 7 - 3 = ?', hint: '🧐 连续减去两个数，等于减去它们的和：7 + 3 = 10。', ans: '20 - 10 = 10！学会这一招更厉害了！' },
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
                        explanation="先凑整：4和6是好朋友，4+6=10，10+9=19。"
                    />
                    <PracticeProblem id={141} type="choice"
                        question="17 - 8 + 3 最简便的算法是？"
                        options={[{ label: 'A', value: '先算17-8=9，再9+3=12' }, { label: 'B', value: '先算17+3=20，再20-8=12' }, { label: 'C', value: '先算8-3=5，再17-5=12' }, { label: 'D', value: '以上都不对' }]}
                        answer="B"
                        explanation="先做17+3=20（凑整），再减8，比逐步计算更快。"
                    />
                    <PracticeProblem id={142} type="choice"
                        question="计算 8 + （ ） = 10，括号里填什么？"
                        options={[{ label: 'A', value: '1' }, { label: 'B', value: '2' }, { label: 'C', value: '3' }, { label: 'D', value: '4' }]}
                        answer="B"
                        explanation="8的数字好朋友是2，8+2=10。"
                    />
                    <PracticeProblem id={143} type="choice"
                        question="巧算 2 + 5 + 8 = ？，先算哪两个数字最好？"
                        options={[{ label: 'A', value: '2和5' }, { label: 'B', value: '5和8' }, { label: 'C', value: '2和8' }, { label: 'D', value: '随便算' }]}
                        answer="C"
                        explanation="2和8是好朋友，凑成10，再加5就是15，特别简单。"
                    />
                    <PracticeProblem id={144} type="choice"
                        question="5 + 6 + 5 = ？"
                        options={[{ label: 'A', value: '16' }, { label: 'B', value: '15' }, { label: 'C', value: '17' }, { label: 'D', value: '14' }]}
                        answer="A"
                        explanation="5和5凑成10，再加6就是16。"
                    />
                    <PracticeProblem id={145} type="choice"
                        question="小明有14块糖，吃了6块，朋友又给了他6块，他现在有多少块？"
                        options={[{ label: 'A', value: '8' }, { label: 'B', value: '14' }, { label: 'C', value: '20' }, { label: 'D', value: '12' }]}
                        answer="B"
                        explanation="14 - 6 + 6，吃了6块又拿到6块，就等于没少也没多，还是14块。"
                    />
                    <PracticeProblem id={146} type="choice"
                        question="计算 1 + 2 + 3 + 7 + 8 + 9 = ？"
                        options={[{ label: 'A', value: '20' }, { label: 'B', value: '30' }, { label: 'C', value: '40' }, { label: 'D', value: '50' }]}
                        answer="B"
                        explanation="找朋友：1和9凑10，2和8凑10，3和7凑10。三个10相加就是30。"
                    />
                    <PracticeProblem id={147} type="choice"
                        question="如果 7 + 4 = 11，那么 11 - 4 = ？"
                        options={[{ label: 'A', value: '6' }, { label: 'B', value: '7' }, { label: 'C', value: '8' }, { label: 'D', value: '9' }]}
                        answer="B"
                        explanation="加法和减法是好朋友，7和4组成11，11拿走4就剩下7。"
                    />
                    <PracticeProblem id={148} type="choice"
                        question="哪个算式算起来最快？"
                        options={[{ label: 'A', value: '7+5+3' }, { label: 'B', value: '6+8+1' }, { label: 'C', value: '4+9+2' }, { label: 'D', value: '5+7+6' }]}
                        answer="A"
                        explanation="A里面有7和3这对好朋友可以凑成10。其他都没有能正好凑成10的。"
                    />
                    <PracticeProblem id={149} type="choice"
                        question="计算 15 - ( ) = 8，括号里填几？"
                        options={[{ label: 'A', value: '5' }, { label: 'B', value: '6' }, { label: 'C', value: '7' }, { label: 'D', value: '8' }]}
                        answer="C"
                        explanation="想加法：8加上几等于15呢？8+7=15，或者15-8=7。"
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
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战3：拼 2 个独立的三角形</p>
                                <div className="pl-4 border-l-4 border-green-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>📐 1 个三角形要 3 根，独立的 2 个就要 3 + 3 = 6 根。</p>
                                    <p className="text-green-600 font-bold">答：一共需要 6 根火柴。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战4：移动 1 根火柴，使等式成立：1 + 1 = 3</p>
                                <div className="pl-4 border-l-4 border-orange-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>🪄 把 "+" 的那一横拿走，放到第一个 "1" 上面变成 "T"？不对不对。</p>
                                    <p>🪄 把 "+" 变成 "-"，把多出的一根放到后面 "3" 上变成 "2"？也不对。</p>
                                    <p className="text-orange-600 font-bold">答：把结果 3 上的 1 根移动到前面，变成 1 + 2 = 3。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战5：拼 1 个长方形</p>
                                <div className="pl-4 border-l-4 border-red-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>🏠 用 2 根长棒做上下边，2 根短棒做左右边。</p>
                                    <p className="text-red-600 font-bold">答：一共需要 6 根火柴（长的 4 根拼成 2 条长边，短的 2 根）。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={150} type="choice"
                        question="拼 1 个独立的三角形需要 3 根火柴，拼 2 个独立的三角形需要几根？"
                        options={[{ label: 'A', value: '4根' }, { label: 'B', value: '5根' }, { label: 'C', value: '6根' }, { label: 'D', value: '7根' }]}
                        answer="C"
                        explanation="独立的意思是不连在一起，每次都要3根，3+3=6根。"
                    />
                    <PracticeProblem id={151} type="choice"
                        question="用火柴棒拼连在一起的三角形（底边都在一条直线上），拼1个用3根，拼2个连在一起的共用几根？"
                        options={[{ label: 'A', value: '4根' }, { label: 'B', value: '5根' }, { label: 'C', value: '6根' }, { label: 'D', value: '7根' }]}
                        answer="B"
                        explanation="第一个用3根，第二个借用一面墙，只要2根。3+2=5根。"
                    />
                    <PracticeProblem id={152} type="choice"
                        question="如果拼3个连在一起的正方形，需要几根火柴棒？"
                        options={[{ label: 'A', value: '12根' }, { label: 'B', value: '11根' }, { label: 'C', value: '10根' }, { label: 'D', value: '9根' }]}
                        answer="C"
                        explanation="第一个正方形要4根，后面每个只要新加3根。4+3+3=10根。"
                    />
                    <PracticeProblem id={153} type="choice"
                        question="用同样大小的火柴棒，正方形比三角形多用几根？"
                        options={[{ label: 'A', value: '0根' }, { label: 'B', value: '1根' }, { label: 'C', value: '2根' }, { label: 'D', value: '3根' }]}
                        answer="B"
                        explanation="一个正方形用4根，三角形用3根，4-3=1根。"
                    />
                    <PracticeProblem id={154} type="choice"
                        question="用火柴摆出了数字'8'，如果拿走中间那一横，它会变成哪个数字？"
                        options={[{ label: 'A', value: '0' }, { label: 'B', value: '6' }, { label: 'C', value: '9' }, { label: 'D', value: '3' }]}
                        answer="A"
                        explanation="数字的8由上下两个方框组成，拿走中间横就变成一个大方框，看起来像0。"
                    />
                    <PracticeProblem id={155} type="choice"
                        question="拼一个正方形需要4根火柴棒，拿走( )根它就会变成只有3条边的图形。"
                        options={[{ label: 'A', value: '1' }, { label: 'B', value: '2' }, { label: 'C', value: '3' }, { label: 'D', value: '4' }]}
                        answer="A"
                        explanation="正方形有4条边，4减去1等于3，所以拿走1根。"
                    />
                    <PracticeProblem id={156} type="choice"
                        question="如果用火柴摆一个“十”字，需要几根火柴棒？（一横一竖等长）"
                        options={[{ label: 'A', value: '2根' }, { label: 'B', value: '3根' }, { label: 'C', value: '4根' }, { label: 'D', value: '无法确定' }]}
                        answer="A"
                        explanation="一横一竖交叉，最少需要2根火柴棒。"
                    />
                    <PracticeProblem id={157} type="choice"
                        question="用火柴摆数字“1”要2根火柴，摆数字“7”要3根。那么摆数字“17”要几根？"
                        options={[{ label: 'A', value: '3根' }, { label: 'B', value: '4根' }, { label: 'C', value: '5根' }, { label: 'D', value: '6根' }]}
                        answer="C"
                        explanation="直接相加，2+3=5根。"
                    />
                    <PracticeProblem id={158} type="choice"
                        question="拼5个连在一起的三角形需要几根火柴？（底同线）"
                        options={[{ label: 'A', value: '10根' }, { label: 'B', value: '11根' }, { label: 'C', value: '13根' }, { label: 'D', value: '15根' }]}
                        answer="B"
                        explanation="第1个3根，后面4个每个2根。3 + 2+2+2+2 = 11根。"
                    />
                    <PracticeProblem id={159} type="choice"
                        question="摆两个不相连的正方形，和摆三个连在一起的三角形，哪个用的火柴多？"
                        options={[{ label: 'A', value: '两个正方形' }, { label: 'B', value: '三个连着三角形' }, { label: 'C', value: '一样多' }, { label: 'D', value: '没法比' }]}
                        answer="A"
                        explanation="两个不相连的正方形：4+4=8根。三个连着三角形：3+2+2=7根。所以正方形用的更多。"
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
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战3：拼出大正方形</p>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">🤔 4 个一样的小正方形，可以拼成一个大正方形吗？</p>
                                <div className="pl-4 border-l-4 border-green-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>🧩 是的！摆成“田”字形就可以啦！</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战4：长方形对半剪</p>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">🤔 一个长方形对半剪开，一定能得到两个正方形吗？</p>
                                <div className="pl-4 border-l-4 border-orange-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>✂️ 不一定哦，如果长方形不够长，剪开后还是两个更小的长方形。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战5：三角形拼图</p>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">🤔 两个完全一样的直角三角形，斜边靠在一起，会拼成什么？</p>
                                <div className="pl-4 border-l-4 border-blue-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>🧩 会拼成一个长方形或者正方形！</p>
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
                        options={[{ label: 'A', value: '长方形' }, { label: 'B', value: '大三角形' }, { label: 'C', value: '圆形' }, { label: 'D', value: '平行四边形' }]}
                        answer="C"
                        explanation="两个三角形可以拼成长方形、大三角形或平行四边形，但不能拼成圆形（圆没有角和直边）。"
                    />
                    <PracticeProblem id={161} type="choice"
                        question="把一张长方形纸片沿对角线剪开，得到的两个图形是？"
                        options={[{ label: 'A', value: '两个大长方形' }, { label: 'B', value: '两个直角三角形' }, { label: 'C', value: '两个小正方形' }, { label: 'D', value: '一个三角形和一个正方形' }]}
                        answer="B"
                        explanation="长方形沿对角线剪开，得到两个完全相同的直角三角形。"
                    />
                    <PracticeProblem id={162} type="choice"
                        question="四块一模一样的小正方形，可以拼成一个什么大图形？"
                        options={[{ label: 'A', value: '一个大正方形' }, { label: 'B', value: '一个大圆形' }, { label: 'C', value: '一个三角形' }, { label: 'D', value: '半圆' }]}
                        answer="A"
                        explanation="田字就是这四个小正方组成的大正方形状。"
                    />
                    <PracticeProblem id={163} type="choice"
                        question="七巧板里一共有多少块图形？"
                        options={[{ label: 'A', value: '5块' }, { label: 'B', value: '6块' }, { label: 'C', value: '7块' }, { label: 'D', value: '8块' }]}
                        answer="C"
                        explanation="七巧板的名字里就有'七'，一共有7块。"
                    />
                    <PracticeProblem id={164} type="choice"
                        question="七巧板里面包含哪几种图形？"
                        options={[{ label: 'A', value: '全都是三角形' }, { label: 'B', value: '三角形、正方形、平行四边形' }, { label: 'C', value: '长方形、圆形' }, { label: 'D', value: '正方形和圆' }]}
                        answer="B"
                        explanation="七巧板由5块三角形，1块正方形，1块平行四边形组成。"
                    />
                    <PracticeProblem id={165} type="choice"
                        question="把一个长方形纸片从中间对折再剪开，可以得到？"
                        options={[{ label: 'A', value: '两个更小的长方形 或 两个正方形' }, { label: 'B', value: '两个三角形' }, { label: 'C', value: '两个圆形' }, { label: 'D', value: '两个不同的图形' }]}
                        answer="A"
                        explanation="水平对折剪开是小长方形，有时候长边比较长刚好是对半如果是特定的长方形还能是正方形。"
                    />
                    <PracticeProblem id={166} type="choice"
                        question="两块相同的直角三角形，怎么拼能得到最大的周长外的三角形？"
                        options={[{ label: 'A', value: '短边靠一起' }, { label: 'B', value: '长边靠一起' }, { label: 'C', value: '斜边靠一起' }, { label: 'D', value: '随便怎么拼' }]}
                        answer="A"
                        explanation="把直角短边拼接，可以拼出一个大个等腰三角形。"
                    />
                    <PracticeProblem id={167} type="choice"
                        question="一个大正方形剪去一个角，剩下几个角？"
                        options={[{ label: 'A', value: '3个' }, { label: 'B', value: '4个' }, { label: 'C', value: '5个' }, { label: 'D', value: '不一定' }]}
                        answer="D"
                        explanation="只切掉角尖就变5个角，沿着对角线切才是3个角，所以不一定。"
                    />
                    <PracticeProblem id={168} type="choice"
                        question="不管面团捏成圆形还是长形，它的( )是不变的？"
                        options={[{ label: 'A', value: '外面的皮长度' }, { label: 'B', value: '大小和重量' }, { label: 'C', value: '宽度' }, { label: 'D', value: '高矮' }]}
                        answer="B"
                        explanation="面团不管怎么捏形状，都没有被吃掉，所以总大小(包含的物质)是不变的。"
                    />
                    <PracticeProblem id={169} type="choice"
                        question="下面哪个图形不能用普通的剪直线的剪刀一次剪出来？"
                        options={[{ label: 'A', value: '正方形' }, { label: 'B', value: '三角形' }, { label: 'C', value: '长方形' }, { label: 'D', value: '圆形' }]}
                        answer="D"
                        explanation="圆形需要剪弧线，不能用剪直线的刀法一刀剪出。"
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
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战3：□ + □ = 5，填入不同数字</p>
                                <div className="pl-4 border-l-4 border-green-400 text-sm text-slate-600 dark:text-slate-400 space-y-2">
                                    <p>排好队：1 + 4, 4 + 1, 2 + 3, 3 + 2。</p>
                                    <p className="text-green-600 font-bold">答：一共有 4 种组合方式。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战4：有 3 个小朋友握手，每两人握一次，共握几次？</p>
                                <div className="pl-4 border-l-4 border-orange-400 text-sm text-slate-600 dark:text-slate-400 space-y-2">
                                    <p>🤝 A 和 B，A 和 C，B 和 C。</p>
                                    <p className="text-orange-600 font-bold">答：一共握 3 次手。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战5：用 0, 1, 2 组成不重复的两位数</p>
                                <div className="pl-4 border-l-4 border-red-400 text-sm text-slate-600 dark:text-slate-400 space-y-2">
                                    <p>🤔 注意：0 不能放在最高位（十位）！</p>
                                    <p>十位是 1：10, 12；十位是 2：20, 21。</p>
                                    <p className="text-red-600 font-bold">答：一共能组成 4 个两位数。</p>
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
                        explanation="三个不同数字组成两位数（不重复）：十位要尽量大→5，个位要尽量大（不能用5了）→3，所以最大是53。"
                    />
                    <PracticeProblem id={171} type="choice"
                        question="□ + □ = 6，两个方框填不同的1-5的数字，有几种不同填法？"
                        options={[{ label: 'A', value: '2种' }, { label: 'B', value: '4种' }, { label: 'C', value: '5种' }, { label: 'D', value: '6种' }]}
                        answer="B"
                        explanation="列举：1+5=6, 5+1=6, 2+4=6, 4+2=6（3+3因为题目说数字不同所以不算）共4种填法。"
                    />
                    <PracticeProblem id={172} type="choice"
                        question="用 1、2、3 可以组成多少个不重复的三位数？"
                        options={[{ label: 'A', value: '3个' }, { label: 'B', value: '4个' }, { label: 'C', value: '5个' }, { label: 'D', value: '6个' }]}
                        answer="D"
                        explanation="按顺序找：123, 132, 213, 231, 312, 321，一共6个。"
                    />
                    <PracticeProblem id={173} type="choice"
                        question="有红、黄、蓝3件上衣，黑、白2件裤子，随便搭一套，有几种穿法？"
                        options={[{ label: 'A', value: '5种' }, { label: 'B', value: '6种' }, { label: 'C', value: '7种' }, { label: 'D', value: '8种' }]}
                        answer="B"
                        explanation="红上衣能配两裤子，黄上衣配两裤子，蓝上衣配两裤子。一共3×2=6种。"
                    />
                    <PracticeProblem id={174} type="choice"
                        question="数字密码锁是两位数。第一位只能是1或2，第二位只能是3或4，共有多少个密码？"
                        options={[{ label: 'A', value: '2个' }, { label: 'B', value: '3个' }, { label: 'C', value: '4个' }, { label: 'D', value: '5个' }]}
                        answer="C"
                        explanation="排一排：13, 14, 23, 24。一共4个密码。"
                    />
                    <PracticeProblem id={175} type="choice"
                        question="从 1 数到 10，一共数了多少个数字？"
                        options={[{ label: 'A', value: '8个' }, { label: 'B', value: '9个' }, { label: 'C', value: '10个' }, { label: 'D', value: '11个' }]}
                        answer="C"
                        explanation="一根手指代表一个数字，刚好数完十根手指，是10个。"
                    />
                    <PracticeProblem id={176} type="choice"
                        question="箱子里有 1、2、3 号球。每次摸一个放回去，摸两次加起来结果最大是几？"
                        options={[{ label: 'A', value: '4' }, { label: 'B', value: '5' }, { label: 'C', value: '6' }, { label: 'D', value: '7' }]}
                        answer="C"
                        explanation="想让加起来最大，就都要摸到最大的球。两次都是3，加起来就是6。"
                    />
                    <PracticeProblem id={177} type="choice"
                        question="一排同学，小明左边有1人，右边有2人，一共有几个人在排队？"
                        options={[{ label: 'A', value: '3个' }, { label: 'B', value: '4个' }, { label: 'C', value: '5个' }, { label: 'D', value: '6个' }]}
                        answer="B"
                        explanation="左边 1个 + 右边 2个 + 小明自己 1个 = 4个人。"
                    />
                    <PracticeProblem id={178} type="choice"
                        question="□ - □ = 1，如果方框里只能填2、3、4，不能填别的，有多少种不同的填法？"
                        options={[{ label: 'A', value: '1种' }, { label: 'B', value: '2种' }, { label: 'C', value: '3种' }, { label: 'D', value: '4种' }]}
                        answer="B"
                        explanation="找一找：3 - 2 = 1， 4 - 3 = 1。就这2种哦。"
                    />
                    <PracticeProblem id={179} type="choice"
                        question="要找全所有的线索密码，最好的办法是？"
                        options={[{ label: 'A', value: '想到哪个就写哪个' }, { label: 'B', value: '按从小到大排好队来找' }, { label: 'C', value: '随心情瞎找' }, { label: 'D', value: '偷看别人的' }]}
                        answer="B"
                        explanation="按顺序找（枚举法）能保证不遗漏、不重复！"
                    />
                </div>
            )
        }
    },

};

export default grade1Content;


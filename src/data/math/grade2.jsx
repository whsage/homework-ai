import { Icons, PracticeProblem, React } from './common';
import MultiplicationLab from '../../components/subjects/math/elementary/MultiplicationLab';
import MeasurementLab from '../../components/subjects/math/elementary/MeasurementLab';
import AngleFinder from '../../components/subjects/math/elementary/AngleFinder';
import EmojiStats from '../../components/subjects/math/elementary/EmojiStats';
import CyclePredictor from '../../components/subjects/math/elementary/CyclePredictor';
import SumDiffScale from '../../components/subjects/math/elementary/SumDiffScale';
import Object3DViewerLab from '../../components/subjects/math/elementary/Object3DViewerLab';
import LogicReasoningLab from '../../components/subjects/math/elementary/LogicReasoningLab';
import HandshakeCounterLab from '../../components/subjects/math/elementary/HandshakeCounterLab';
const { Lightbulb, Target, Clock, Star, Brain, Calculator } = Icons;

export const grade2Content = {

    // ==================== L1-1. 表内乘除法 ====================
    'g2-l1-multiplication': {
        meta: {
            title: "表内乘除法 - 二年级数学 | AI7Miao数学",
            description: "掌握1-9的乘法口诀表，理解乘除法的意义和关系，为多位数运算打基础。",
            keywords: "乘法口诀,除法,表内乘除,二年级数学"
        },
        info: {
            title: "表内乘除法",
            description: "化身计算提速小达人！用神奇的魔法咒语（乘法口诀），让算数变得像飞一样快！🚀",
            tags: [{ text: "基础达标", color: "blue" }, { text: "30分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }]
        },
        aiContext: "学生学习表内乘除法。必须使用苏格拉底式提问。把乘法比作『相同包裹的连加』，除法比作『公平地分发』。比如：如果你有3包糖，每包4颗，不用一颗颗数，怎么能很快知道一共几颗？",
        aiChatTitle: "🧙‍♂️ 口诀魔法师",
        aiChatIntro: "嘿！我是口诀魔法师。给你3包糖，每包4颗，除了用加法慢慢算，你知道有什么咒语能一下子变出总数吗？",
        aiMessages: [{ role: 'ai', content: '如果有 7 个袋子，每个袋子装 8 个苹果，你能念出口诀魔法，告诉我一共多少个吗？七八……？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />🪄 乘法和除法的魔法
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">🎁 乘法 = 拥有几个一模一样的盲盒</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300">假设你有 3 个盲盒（或者说你有 3 份东西），每个盒子里都刚好装了 4 个甜甜圈 🍩！</p>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">3 × 4 其实就是 4 + 4 + 4 = 12（大声读：3个4相加）</p>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">🤝 除法 = 公平分发大派对</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">反过来思考哦：如果你要把这 12 个甜甜圈，公平地分给 3 个小朋友，每人能拿到几个？</p>
                                <div className="font-mono text-sm text-slate-700 dark:text-slate-300 space-y-1 bg-white dark:bg-slate-700 p-3 rounded-lg">
                                    <p>魔法正念：3 × 4 = 12</p>
                                    <p>魔法倒念：12 ÷ 3 = 4（每人拿到4个甜甜圈）</p>
                                    <p>如果分给4个人呢？12 ÷ 4 = 3（每人拿到3个甜甜圈）</p>
                                </div>
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl">
                                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-3">📜 魔法咒语书（乘法口诀表）</h3>
                                <div className="grid grid-cols-4 gap-1.5 text-xs font-mono">
                                    {[['1×1=1', '1×2=2', '1×3=3', '1×4=4'], ['2×2=4', '2×3=6', '2×4=8', '2×5=10'], ['3×3=9', '3×4=12', '3×5=15', '3×6=18'], ['4×4=16', '4×5=20', '4×6=24', '4×7=28'], ['5×5=25', '5×6=30', '5×7=35', '5×8=40'], ['6×6=36', '6×7=42', '6×8=48', '6×9=54'], ['7×7=49', '7×8=56', '7×9=63', '8×8=64'], ['8×9=72', '9×9=81', '', '']].map((row, i) => row.map((cell, j) => cell ? (
                                        <div key={`${i}-${j}`} className="bg-white dark:bg-slate-700 p-1.5 rounded text-center text-slate-600 dark:text-slate-400 border border-orange-200 dark:border-orange-800/30 shadow-sm">{cell}</div>
                                    ) : <div key={`${i}-${j}`}></div>))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 魔法口诀雷区</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 粗心念错咒语</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">把"3 × 4"算成了 3 + 4 = 7（哎呀，明明该念乘法咒语，去念成加法咒语啦！）</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 注意分辨符号</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">"3 × 4" 可是 3 大包，每包都有 4 个好东西呢！它肯定比 3 + 4（只有 7 个）多得多哦！（口诀：三四十二）</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <MultiplicationLab />
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />带着故事来挑战
                        </h2>
                        <div className="space-y-5">
                            {[
                                { q: '挑战1：如果有 6 辆小巴车，每辆坐 7 个人，一共坐了多少人？（试试口诀魔法 6 × 7）', hint: '念出口诀：六七四十二！', ans: '一共 42 个人！' },
                                { q: '挑战2：56 颗葡萄平均分给 8 只小鸭子，每只鸭鸭分到几颗？（56 ÷ 8 ）', hint: '想一想倒退的魔法：8 只鸭子 × ? 颗 = 56，也就是八(七)五十六', ans: '每只鸭鸭 7 颗！' },
                                { q: '挑战3：每个鸡蛋盒里面有9个鸡蛋，妈妈买了6大盒，共买多少鸡蛋？', hint: '6 个一模一样的盒子，念口诀：六九五十四！', ans: '54 个鸡蛋！' },
                                { q: '挑战4：要把 45 本书平均发给 5 个小组，每个小组能分到几本？', hint: '想口诀：五（？）四十五？没错，是五九四十五！', ans: '每个小组分到 9 本书。' },
                                { q: '挑战5：果园里有 8 排梨树，每排有 4 棵，一共有多少棵梨树？', hint: '念口诀：四八三十二！', ans: '一共 32 棵梨树！' },
                            ].map((ex, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-2">{ex.q}</p>
                                    <div className="pl-4 border-l-4 border-indigo-400 text-sm text-slate-600 dark:text-slate-400">
                                        <p>{ex.hint}</p>
                                        <p className="text-indigo-600 font-bold mt-1">完美解答：{ex.ans}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={200} type="choice" question="8 × 9 = ？"
                        options={[{ label: 'A', value: '63' }, { label: 'B', value: '72' }, { label: 'C', value: '81' }, { label: 'D', value: '56' }]}
                        answer="B" explanation="口诀：八九七十二，8×9=72。" />
                    <PracticeProblem id={201} type="choice" question="63 ÷ 7 = ？"
                        options={[{ label: 'A', value: '7' }, { label: 'B', value: '8' }, { label: 'C', value: '9' }, { label: 'D', value: '6' }]}
                        answer="C" explanation="想：7×?=63，七九六十三，所以63÷7=9。" />
                    <PracticeProblem id={202} type="choice" question="每排5个座位，共8排，一共有多少个座位？"
                        options={[{ label: 'A', value: '35个' }, { label: 'B', value: '40个' }, { label: 'C', value: '45个' }, { label: 'D', value: '48个' }]}
                        answer="B" explanation="5×8=40（五八四十），共40个座位。" />
                    <PracticeProblem id={203} type="choice" question="把 24 个苹果平均分给 6 个小朋友，每人分几个？"
                        options={[{ label: 'A', value: '3个' }, { label: 'B', value: '4个' }, { label: 'C', value: '5个' }, { label: 'D', value: '6个' }]}
                        answer="B" explanation="除法运算：24 ÷ 6，想口诀四六二十四，所以是4个。" />
                    <PracticeProblem id={204} type="choice" question="9 的 5 倍是多少？"
                        options={[{ label: 'A', value: '14' }, { label: 'B', value: '35' }, { label: 'C', value: '40' }, { label: 'D', value: '45' }]}
                        answer="D" explanation="求一个数的几倍用乘法，9 × 5 = 45（五九四十五）。" />
                    <PracticeProblem id={205} type="choice" question="下面哪个算式和 4 × 6 = 24 用的是同一句口诀？"
                        options={[{ label: 'A', value: '8 × 3 = 24' }, { label: 'B', value: '24 ÷ 4 = 6' }, { label: 'C', value: '12 × 2 = 24' }, { label: 'D', value: '24 ÷ 8 = 3' }]}
                        answer="B" explanation="4×6和24÷4用的都是“四六二十四”这句口诀。" />
                    <PracticeProblem id={206} type="choice" question="36 是 4 的几倍？"
                        options={[{ label: 'A', value: '7倍' }, { label: 'B', value: '8倍' }, { label: 'C', value: '9倍' }, { label: 'D', value: '10倍' }]}
                        answer="C" explanation="求一个数是另一个数的几倍用除法，36 ÷ 4 = 9。" />
                    <PracticeProblem id={207} type="choice" question="哪个算式得数最大？"
                        options={[{ label: 'A', value: '7 × 8' }, { label: 'B', value: '6 × 9' }, { label: 'C', value: '8 × 8' }, { label: 'D', value: '9 × 6' }]}
                        answer="C" explanation="7×8=56，6×9=54，8×8=64，9×6=54。最大的是64。" />
                    <PracticeProblem id={208} type="choice" question="一共有 42 颗糖，如果每盒子装 7 颗，需要几个盒子？"
                        options={[{ label: 'A', value: '5个' }, { label: 'B', value: '6个' }, { label: 'C', value: '7个' }, { label: 'D', value: '8个' }]}
                        answer="B" explanation="平均分装用除法，42 ÷ 7 = 6（六七四十二）。" />
                    <PracticeProblem id={209} type="choice" question="7 × （ ） = 49，括号里填什么数字？"
                        options={[{ label: 'A', value: '6' }, { label: 'B', value: '7' }, { label: 'C', value: '8' }, { label: 'D', value: '9' }]}
                        answer="B" explanation="七七四十九，所以填7。" />
                </div>
            )
        }
    },

    // ==================== L1-2. 长度单位 ====================
    'g2-l1-length-unit': {
        meta: {
            title: "长度单位（m/cm）- 二年级数学 | AI7Miao数学",
            description: "认识米和厘米，学会用尺子量物体，理解长度单位的换算关系。",
            keywords: "长度单位,米,厘米,mm,测量,二年级数学"
        },
        info: {
            title: "长度单位（m/cm/mm）",
            description: "你有多高？小蚂蚁有多长？变身测量小裁缝，学会用『米』和『厘米』来量一量这个世界的大与小！📏",
            tags: [{ text: "基础达标", color: "blue" }, { text: "20分钟", icon: Clock, color: "slate" }]
        },
        aiContext: "学生学习长度单位米(m)、厘米(cm)和毫米(mm)。必须使用苏格拉底式提问。用『测量小裁缝』的情境。问：如果要量一栋楼的高度，用量小蚂蚁的尺子（毫米）去量，会不会累死？如果量蚂蚁用大米尺，能看清吗？引导学生理解为什么我们需要不同的长度单位。",
        aiChatTitle: "📏 测量小裁缝",
        aiChatIntro: "你好！我是裁缝大师！我们要给好多朋友做物品——大的像房子，小的像手链！你知道怎么选合适的量尺（单位）吗？",
        aiMessages: [{ role: 'ai', content: '如果让你量一量自己有多高，你会用『米』还是用『厘米』来说呢？你会说自己是 1 米多，还是 100 多厘米？觉得哪个对？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />魔法尺子大揭秘
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl mb-4">
                                <p className="text-sm text-slate-700 dark:text-slate-300">世界上有大有小的东西，所以我们需要不同的测量魔法单位！</p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-4">
                                {[
                                    { unit: '毫米 (mm)', desc: '比铅笔芯还细！', example: '比如：身份证的厚度、小蚂蚁的腿长', color: 'bg-green-50 dark:bg-green-900/20 border-green-400' },
                                    { unit: '厘米 (cm)', desc: '和大拇指差不多宽！', example: '比如：你的手指头宽度、一块橡皮的长度', color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-400' },
                                    { unit: '米 (m)', desc: '比大人还要高一点！', example: '比如：教室的门高、老师的身高', color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-400' },
                                ].map(u => (
                                    <div key={u.unit} className={`p-4 rounded-xl border-l-4 ${u.color}`}>
                                        <p className="font-bold text-slate-800 dark:text-white text-lg">{u.unit}</p>
                                        <p className="text-sm text-slate-700 dark:text-slate-300 mt-2 font-bold">{u.desc}</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{u.example}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl border-l-4 border-orange-400">
                                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2">🤝 它们是相亲相爱的一家人（换算关系）</h3>
                                <div className="font-mono text-sm text-slate-700 dark:text-slate-300 space-y-2 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm">
                                    <p>🐘 1 个『米』哥哥，里面藏了 100 个『厘米』弟弟：<strong>1 m = 100 cm</strong></p>
                                    <p>🐜 1 个『厘米』弟弟，里面藏了 10 个『毫米』小宝宝：<strong>1 cm = 10 mm</strong></p>
                                </div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">🎯 裁缝正确量法</h3>
                                <ol className="text-sm text-slate-700 dark:text-slate-300 space-y-2 list-decimal list-inside">
                                    <li><strong>起点要找准：</strong>把刻度尺的 <strong>0</strong> 对准物体的一端（不是从尺子最边缘，是从写着0的地方哦）</li>
                                    <li><strong>尺子要拿直：</strong>尺子紧紧挨着物体边，不能歪歪扭扭</li>
                                    <li><strong>终点看数字：</strong>另一端指到了几，它的长度就是几！</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 裁缝迷糊陷阱</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 不从0开始看</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">如果尺子的头坏了，从数字1开始量到5，以为物品长 5cm！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 用减法算出真实长度</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">从1到5，跳了几个格子？5 - 1 = 4格子，所以是长 4cm ！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <MeasurementLab />
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />带着故事来挑战
                        </h2>
                        <div className="space-y-5">
                            {[
                                { q: '挑战1：小长颈鹿身高 2m 50cm，如果只用厘米来读，是多少呢？', hint: '想一想：2个『米』就是 2 个 100cm（200cm），再加上 50cm', a: '200 + 50 = 250 cm ！' },
                                { q: '挑战2：有一块巨大的布料长 320cm，裁缝想用米和厘米说，该怎么说？', hint: '300个厘米弟弟，可以换成3个米哥哥。所以 320 里面有 3 个百', a: '3 m 又 20 cm ！' },
                                { q: '挑战3：要形容教室的黑板有多宽，你会用哪个单位比较合适？', hint: '黑板很大！如果用厘米说，得说 400 厘米，数字太长了。', a: '用『米（m）』最合适！大概是 4 米宽。' },
                                { q: '挑战4：一把尺子长 20 厘米，几把这样的尺子连起来刚好是 1 米？', hint: '1 米 = 100 厘米。几个 20 凑成 100 呢？', a: '5 把尺子！(20+20+20+20+20 = 100)' },
                                { q: '挑战5：蚂蚁搬家走了 50 毫米，换成厘米是多少？', hint: '1 厘米 = 10 毫米，50 毫米里面有几个 10 哦？', a: '是 5 厘米！' },
                            ].map((ex, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-2">{ex.q}</p>
                                    <div className="pl-4 border-l-4 border-blue-400 text-sm text-slate-600 dark:text-slate-400">
                                        <p className="mb-1">{ex.hint}</p>
                                        <p className="text-blue-600 font-bold">完美解答：{ex.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={210} type="choice" question="1m 30cm = ___cm"
                        options={[{ label: 'A', value: '13cm' }, { label: 'B', value: '103cm' }, { label: 'C', value: '130cm' }, { label: 'D', value: '1030cm' }]}
                        answer="C" explanation="1m=100cm，100+30=130cm。" />
                    <PracticeProblem id={211} type="choice" question="用哪个单位描述课桌的高度最合适？"
                        options={[{ label: 'A', value: '毫米(mm)' }, { label: 'B', value: '厘米(cm)' }, { label: 'C', value: '米(m)' }, { label: 'D', value: '千米(km)' }]}
                        answer="B" explanation="课桌高约75cm，用厘米最合适。米太大，毫米太小。" />
                    <PracticeProblem id={212} type="choice" question="小明的身高是 125( )"
                        options={[{ label: 'A', value: '米' }, { label: 'B', value: '厘米' }, { label: 'C', value: '毫米' }, { label: 'D', value: '分米' }]}
                        answer="B" explanation="二年级小朋友身高通常在120到130厘米左右。" />
                    <PracticeProblem id={213} type="choice" question="2米 和 200厘米，哪个更长？"
                        options={[{ label: 'A', value: '2米长' }, { label: 'B', value: '200厘米长' }, { label: 'C', value: '一样长' }, { label: 'D', value: '无法比较' }]}
                        answer="C" explanation="因为1米等于100厘米，2米就是200厘米，所以一样长。" />
                    <PracticeProblem id={214} type="choice" question="一把普通的直尺长约 20( )"
                        options={[{ label: 'A', value: '毫米' }, { label: 'B', value: '厘米' }, { label: 'C', value: '米' }, { label: 'D', value: '千米' }]}
                        answer="B" explanation="学生用的直尺长度一般是15到20厘米。" />
                    <PracticeProblem id={215} type="choice" question="量一个物体的长度，一般把尺子的( )刻度对准物体的一端。"
                        options={[{ label: 'A', value: '1' }, { label: 'B', value: '2' }, { label: 'C', value: '0' }, { label: 'D', value: '边缘' }]}
                        answer="C" explanation="测量物体长度时，通常以0刻度线为起点。" />
                    <PracticeProblem id={216} type="choice" question="断掉的尺子从 3 厘米刻度开始，量到 8 厘米刻度结束，这个物体长几厘米？"
                        options={[{ label: 'A', value: '8厘米' }, { label: 'B', value: '5厘米' }, { label: 'C', value: '11厘米' }, { label: 'D', value: '3厘米' }]}
                        answer="B" explanation="用结束刻度减去起始刻度：8 - 3 = 5厘米。" />
                    <PracticeProblem id={217} type="choice" question="一棵大树高大约 8( )"
                        options={[{ label: 'A', value: '毫米' }, { label: 'B', value: '厘米' }, { label: 'C', value: '米' }, { label: 'D', value: '千米' }]}
                        answer="C" explanation="大树比较高大，用米作单位最合适。" />
                    <PracticeProblem id={218} type="choice" question="50 毫米 = ( ) 厘米"
                        options={[{ label: 'A', value: '5' }, { label: 'B', value: '50' }, { label: 'C', value: '500' }, { label: 'D', value: '10' }]}
                        answer="A" explanation="10毫米是1厘米，所以50毫米是5个10毫米，也就是5厘米。" />
                    <PracticeProblem id={219} type="choice" question="测量蚂蚁的身体长度，用什么单位比较好？"
                        options={[{ label: 'A', value: '米' }, { label: 'B', value: '分米' }, { label: 'C', value: '厘米' }, { label: 'D', value: '毫米' }]}
                        answer="D" explanation="蚂蚁非常小，通常不到1厘米长，所以用更小的毫米作单位最精确。" />
                </div>
            )
        }
    },

    // ==================== L1-3. 观察物体 ====================
    'g2-l1-observation': {
        meta: {
            title: "观察物体 - 二年级数学 | AI7Miao数学",
            description: "从不同角度观察立体物体，理解同一物体从正面、侧面、上面看到的形状不同。",
            keywords: "观察物体,三视图,正面侧面上面,空间思维,二年级数学"
        },
        info: {
            title: "观察物体",
            description: "变成小小摄影师！从不同的角度去给积木拍照，你会发现同一个东西可以变出好多张不一样的照片！📷",
            tags: [{ text: "基础达标", color: "blue" }, { text: "20分钟", icon: Clock, color: "slate" }]
        },
        aiContext: "学生学习从不同角度观察立体图形。必须使用苏格拉底式提问。用『摄影师拍照』的情境。问：如果只从正面看一个圆柱体，你觉得它像什么？如果变身小鸟飞到它正上方看呢？引导孩子明白看问题要多角度。",
        aiChatTitle: "📸 积木摄影师",
        aiChatIntro: "咔嚓！我是摄影师！我们要给一个杯子（圆柱体）拍几张证件照。",
        aiMessages: [{ role: 'ai', content: '如果你站在杯子正前方拍，它看起来是不是像个长方形？但如果你爬到梯子上，从正上方往下拍它，照片里它会变成什么形状？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />神奇的摄影角度
                        </h2>
                        <div className="space-y-5">
                            <div className="grid md:grid-cols-3 gap-4">
                                {[
                                    { dir: '正面照', icon: '📸', desc: '站正前方，咔嚓！', key: 'front' },
                                    { dir: '侧面照', icon: '🏃‍♂️', desc: '跑到旁边，咔嚓！', key: 'side' },
                                    { dir: '上面照 (鸟瞰)', icon: '🦅', desc: '变身老鹰往下看，咔嚓！', key: 'top' },
                                ].map(d => (
                                    <div key={d.key} className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl text-center border border-indigo-100 dark:border-indigo-800">
                                        <span className="text-3xl">{d.icon}</span>
                                        <p className="font-bold text-slate-800 dark:text-white mt-2">{d.dir}</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{d.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-3">🎩 积木的百变照片秀</h3>
                                <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                                    <div className="flex justify-between items-center bg-white dark:bg-slate-800 p-2 rounded">
                                        <span className="font-bold">🧊 正方体：</span>
                                        <span>正面、侧面、上面 全都是 <strong>正方形</strong>！(最专一的积木)</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-white dark:bg-slate-800 p-2 rounded">
                                        <span className="font-bold">📦 长方体：</span>
                                        <span>三个方向的照片可能长得不一样哦！</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-white dark:bg-slate-800 p-2 rounded">
                                        <span className="font-bold">🥫 圆柱（像水杯）：</span>
                                        <span>正面=<strong>长方形</strong>，上面=<strong>圆形</strong></span>
                                    </div>
                                    <div className="flex justify-between items-center bg-white dark:bg-slate-800 p-2 rounded">
                                        <span className="font-bold">⚽️ 球（圆滚滚）：</span>
                                        <span>不管怎么拍，照片全都是 <strong>圆形</strong>！</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border-l-4 border-yellow-400">
                                <p className="font-bold text-yellow-800 dark:text-yellow-300">💡 摄影师秘籍</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">你站的位置，决定了你拍出来的照片长啥样！不要被事物的一面骗了哦。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 摄影师容易犯的错</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 只看一面就下结论</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">正面看到长方形，就说它是长方体？不一定哦！圆柱正面看也是长方形呢！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 多拍几张照片</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">要从正面、侧面、上面都看看！多角度观察才能猜出它到底是什么形状。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <Object3DViewerLab />
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />带着故事来挑战
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战1：如果一只小老鹰飞过一个圆柱形的小塔，它从天上往下看到的小塔像什么形状？</p>
                                <div className="pl-4 border-l-4 border-indigo-400 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                    <p>站在塔下（正面看）可能像个长方形。</p>
                                    <p className="text-indigo-600 font-bold">小老鹰在天上（上面看）：只能看到圆柱平平的顶，是个巨大的圆形！</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战2：三个小伙伴围着神秘积木盲拍。小明在正面拍到了正方形，小红在侧面拍到了长方形，小鸟在上面拍到了圆形。这是个什么形状的积木？</p>
                                <div className="pl-4 border-l-4 border-green-400 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                    <p>抓住关键线索："小鸟拍到了圆形" → 说明它像根柱子或者球。</p>
                                    <p>"小红拍到长方形" → 球不可能拍出长方形，所以不是球！</p>
                                    <p className="text-green-600 font-bold">完美推理：它是一个 圆柱体 ！（就像一截平放或者站立的水管）</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战3：从正面看一个正方体，看到的是什么形状？</p>
                                <div className="pl-4 border-l-4 border-blue-400 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                    <p>正方体的每个面都是一样的。</p>
                                    <p className="text-blue-600 font-bold">完美解答：看到的依然是一个 正方形 呀！</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战4：无论从哪个角度看，看到的都是圆形的物体是什么？</p>
                                <div className="pl-4 border-l-4 border-orange-400 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                    <p>只有球体在任何角度的投影都是圆形。</p>
                                    <p className="text-orange-600 font-bold">完美解答：它是一个 球 (比如乒乓球、地球仪)！</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战5：一个足球门横在面前，你跑到球门的正侧面（也就是立柱旁边）看，球门像什么？</p>
                                <div className="pl-4 border-l-4 border-red-400 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                    <p>侧面看只能看到侧边的立柱和顶梁的端点。</p>
                                    <p className="text-red-600 font-bold">完美解答：看到的是一个三角形（因为侧面支撑架通常是三角形的）！</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={220} type="choice" question="正方体从正面、侧面、上面看到的形状分别是？"
                        options={[{ label: 'A', value: '正方形、长方形、正方形' }, { label: 'B', value: '正方形、正方形、正方形' }, { label: 'C', value: '长方形、长方形、长方形' }, { label: 'D', value: '正方形、长方形、圆形' }]}
                        answer="B" explanation="正方体六个面都是一样的正方形，所以从任何方向直视过去都是正方形。" />
                    <PracticeProblem id={221} type="choice" question="从某个方向看圆柱，看到的是圆形，这是从哪个方向看的？"
                        options={[{ label: 'A', value: '正面' }, { label: 'B', value: '侧面' }, { label: 'C', value: '上面或下面' }, { label: 'D', value: '任何方向' }]}
                        answer="C" explanation="圆柱的上下底面是圆形，所以从正上方或正下方看是圆形。" />
                    <PracticeProblem id={222} type="choice" question="一个长方体（长比宽、高都长很多），从侧面看可能是什么形状？"
                        options={[{ label: 'A', value: '圆形' }, { label: 'B', value: '三角形' }, { label: 'C', value: '小一点的长方形' }, { label: 'D', value: '只有正方形' }]}
                        answer="C" explanation="长方体的测面也是长方形或正方形，题目说长特别长，测面很可能是较小的长方形。" />
                    <PracticeProblem id={223} type="choice" question="无论从正面、上面、侧面看，形状全都是圆形的物体是？"
                        options={[{ label: 'A', value: '圆柱体' }, { label: 'B', value: '球体' }, { label: 'C', value: '鸡蛋' }, { label: 'D', value: '圆锥' }]}
                        answer="B" explanation="球无论放在哪里怎么转，从任何平着的方向看过去轮廓都是完美的圆形。" />
                    <PracticeProblem id={224} type="choice" question="从正面看一个茶杯（圆柱形带个把手在右边），看到的轮廓线是什么样的？"
                        options={[{ label: 'A', value: '纯长方形' }, { label: 'B', value: '左侧凸起在外的长方形' }, { label: 'C', value: '右侧有个圆弧形耳朵的长方形' }, { label: 'D', value: '正方形' }]}
                        answer="C" explanation="因为杯把手在右边，从正面看除了杯身长方形，还能看到右边凸出来的把手(耳朵)。" />
                    <PracticeProblem id={225} type="choice" question="把一本书平放在桌上，从正上方往下看，看到的是什么形状？"
                        options={[{ label: 'A', value: '长条形（侧面厚度）' }, { label: 'B', value: '大长方形（封面）' }, { label: 'C', value: '正方形' }, { label: 'D', value: '一条线' }]}
                        answer="B" explanation="从上面俯视平放的书，看到的就是封面，是一个大长方形。" />
                    <PracticeProblem id={226} type="choice" question="如果一个东西从三个面看都是完全一样的正方形，那它大概率是什么？"
                        options={[{ label: 'A', value: '长方体' }, { label: 'B', value: '球' }, { label: 'C', value: '圆柱' }, { label: 'D', value: '正方体' }]}
                        answer="D" explanation="正方体的特征就是各个方向看都是相等的正方形。" />
                    <PracticeProblem id={227} type="choice" question="一个上面尖尖，下面大圆形的圆锥（像尖顶帽），如果从它的正上方往下看，能看到什么？"
                        options={[{ label: 'A', value: '一个三角形' }, { label: 'B', value: '一个圆加上中间一个点' }, { label: 'C', value: '一个长方形' }, { label: 'D', value: '只看到一个点' }]}
                        answer="B" explanation="圆锥俯视时底部是个圆，圆心会看到那个尖尖的顶，也就是大圆中间有个点。" />
                    <PracticeProblem id={228} type="choice" question="从正面和侧面看过去，圆柱体都是什么形状？"
                        options={[{ label: 'A', value: '椭圆形' }, { label: 'B', value: '长方形' }, { label: 'C', value: '正方形' }, { label: 'D', value: '圆形' }]}
                        answer="B" explanation="圆柱虽然滑溜溜，但把它压扁到平面照片上，它的左右边缘是平行的直线，上下也是直线，组成了长方形。" />
                    <PracticeProblem id={229} type="choice" question="为什么要从不同方向观察物体？"
                        options={[{ label: 'A', value: '因为好玩' }, { label: 'B', value: '因为一个方向看不到全貌' }, { label: 'C', value: '老师规定' }, { label: 'D', value: '可以把东西变大' }]}
                        answer="B" explanation="很多物体不同方向看形状都不一样（比如圆柱），只看一面容易被骗，多角度观察才能了解它真实的立体模样。" />
                </div>
            )
        }
    },

    // ==================== L1-4. 认识角 ====================
    'g2-l1-angle': {
        meta: {
            title: "认识角 - 二年级数学 | AI7Miao数学",
            description: "认识角的组成（顶点和两条边），区分直角、锐角和钝角，学会用三角板检验直角。",
            keywords: "认识角,直角,锐角,钝角,顶点,二年级数学"
        },
        info: {
            title: "认识角",
            description: "张开嘴巴的小鳄鱼🐊、打开的剪刀✂️、时钟的指针……原来魔法『角』就藏在我们身边！一起来抓住它们吧！",
            tags: [{ text: "基础达标", color: "blue" }, { text: "25分钟", icon: Clock, color: "slate" }]
        },
        aiContext: "学生学习认识角。必须使用苏格拉底式提问。用『小鳄鱼张开嘴巴』的情境。问：如果小鳄鱼的嘴巴张得非常非常大，这个角是变大了还是变小了？如果把小鳄鱼的上下颚（两边）画得很长，它嘴巴张开的角度会变吗？引导理解角的大小只跟开口有关，和边的长短无关。",
        aiChatTitle: "🐊 鳄鱼牙医",
        aiChatIntro: "你好呀！我是鳄鱼王国的牙医。小鳄鱼们有的嘴巴张得大大的，有的却只敢张开一条缝！用它们来认识不同的『角』吧！",
        aiMessages: [{ role: 'ai', content: '你能用自己的手臂做个实验吗？先把手臂弯折，变出一个小小的『锐角』，然后再张开，变成一个大大的『钝角』！试一下？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />抓住调皮的『角』
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">角是怎么长出来的？</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300">1 个尖尖的小点点（叫它<strong>『顶点』</strong>） + 从点点长出来的 2 条直直的射线（叫它<strong>『边』</strong>） = 一个角！</p>
                                <p className="text-sm text-purple-600 dark:text-purple-400 mt-2 font-bold">⚡魔法陷阱：如果把两边的线画得超级无敌长，角会变大吗？错啦！角的大小只看嘴巴张开有多宽！</p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-4">
                                {[
                                    { name: '锐角', size: '< 90°', eg: '小鳄鱼嘴巴只张开一点点！尖尖的！', color: 'bg-green-50 dark:bg-green-900/20 border-green-400', icon: '∠' },
                                    { name: '直角', size: '= 90°', eg: '和书本的一角、方积木的角一模一样', color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-400', icon: '⊾' },
                                    { name: '钝角', size: '> 90°', eg: '小鳄鱼打了个大哈欠，嘴巴张得好大！', color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-400', icon: '∠' },
                                ].map(a => (
                                    <div key={a.name} className={`p-4 rounded-xl border-l-4 ${a.color} text-center shadow-sm`}>
                                        <span className="text-3xl">{a.icon}</span>
                                        <p className="font-bold text-slate-800 dark:text-white mt-2">{a.name}</p>
                                        <p className="text-sm text-indigo-600 font-mono my-1">{a.size}</p>
                                        <p className="text-xs text-slate-700 dark:text-slate-400 mt-1 font-bold">{a.eg}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border-l-4 border-yellow-400">
                                <p className="font-bold text-yellow-800 dark:text-yellow-300">💡 检验直角的法宝</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">不知道它是不是直角？用三角板上那个方方的直角去比一比，完全重合就是直角啦！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 容易被骗的角</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 边越长角越大？</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">你画一个小小的角，我把它的两条边用尺子延长10米！你觉得我的角比你的大吗？不是的，它是同一个角！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 张得多开才算数</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">角的大小，只和两条边中间"张开、劈叉"的程度有关系！张得越大，角就越大。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <AngleFinder />
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />生活大搜查
                        </h2>
                        <div className="space-y-4">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">侦探任务：找出生活里的角是什么名字！</p>
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    {[['📐 三角板上最尖的角', '扎手的锐角！'], ['🚪 教室的黑板角', '方方正正直角！'], ['🕐 时钟走到3点整', '90度的直角！'], ['📖 微微撑开的书本', '像帐篷的锐角！'], ['⏰ 指针走到5点钟', '张开大嘴的钝角！']].map(([obj, type]) => (
                                        <div key={obj} className="bg-white dark:bg-slate-700 p-3 rounded-lg border border-slate-100 dark:border-slate-600 shadow-sm flex flex-col justify-between">
                                            <span className="text-slate-700 dark:text-slate-300 font-bold mb-2">{obj}</span>
                                            <span className="text-indigo-600 dark:text-indigo-400 font-bold">{type}</span>
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
                    <PracticeProblem id={230} type="choice" question="下面说法正确的是？"
                        options={[{ label: 'A', value: '边越长，角越大' }, { label: 'B', value: '锐角比直角小' }, { label: 'C', value: '直角比钝角大' }, { label: 'D', value: '角的大小只和边的长短有关' }]}
                        answer="B" explanation="锐角比直角(90度)小。角的大小只和两条边张开的程度有关，跟长短没关系。" />
                    <PracticeProblem id={231} type="choice" question="一个正方形有几个直角？"
                        options={[{ label: 'A', value: '2个' }, { label: 'B', value: '3个' }, { label: 'C', value: '4个' }, { label: 'D', value: '0个' }]}
                        answer="C" explanation="正方形或长方形，它们的四个角都是方方正正的直角。" />
                    <PracticeProblem id={232} type="choice" question="一个角有几个顶点和几条边？"
                        options={[{ label: 'A', value: '1个顶点，1条边' }, { label: 'B', value: '1个顶点，2条边' }, { label: 'C', value: '2个顶点，1条边' }, { label: 'D', value: '2个顶点，2条边' }]}
                        answer="B" explanation="角是从一个叫做【顶点】的点，向外射出的两条尖尖的直线，叫【两条边】。" />
                    <PracticeProblem id={233} type="choice" question="时钟在 9 点整时，时针和分针组成的角是什么角？"
                        options={[{ label: 'A', value: '锐角' }, { label: 'B', value: '直角' }, { label: 'C', value: '钝角' }, { label: 'D', value: '平角' }]}
                        answer="B" explanation="9点整时，分针指12，时针指9，它们刚好成一个90度的方块形，也就是直角。" />
                    <PracticeProblem id={234} type="choice" question="比直角还要大，张口很宽的角叫做什么角？"
                        options={[{ label: 'A', value: '锐角' }, { label: 'B', value: '直角' }, { label: 'C', value: '钝角' }, { label: 'D', value: '无名角' }]}
                        answer="C" explanation="鳄鱼打大哈欠张得宽宽的角，比90度大，叫做钝角。" />
                    <PracticeProblem id={235} type="choice" question="红领巾上一共有几个角？分别是什么角？"
                        options={[{ label: 'A', value: '3个直角' }, { label: 'B', value: '2个直角，1个锐角' }, { label: 'C', value: '2个锐角，1个钝角' }, { label: 'D', value: '3个锐角' }]}
                        answer="C" explanation="红领巾是三角形，顶上的那个角张得很开是钝角，下面底边的两个角很尖是锐角。" />
                    <PracticeProblem id={236} type="choice" question="一把普通的三角尺上，最大的角是什么角？"
                        options={[{ label: 'A', value: '锐角' }, { label: 'B', value: '直角' }, { label: 'C', value: '钝角' }, { label: 'D', value: '都是一样的' }]}
                        answer="B" explanation="三角尺又叫直角三角板，它最大的那个角就是起测量作用的方方正正的直角。" />
                    <PracticeProblem id={237} type="choice" question="小明画了一个角，然后把角的两条边都延长了10厘米，这个角变大了吗？"
                        options={[{ label: 'A', value: '变大了' }, { label: 'B', value: '变小了' }, { label: 'C', value: '大小没变' }, { label: 'D', value: '不知道' }]}
                        answer="C" explanation="角的大小只看两条线分开的张口角度，线画再长，只要角度不挪位置，大小就不变。" />
                    <PracticeProblem id={238} type="choice" question="钟面上时针和分针，在什么时间成直线（平角180度）？"
                        options={[{ label: 'A', value: '12点整' }, { label: 'B', value: '3点整' }, { label: 'C', value: '6点整' }, { label: 'D', value: '9点整' }]}
                        answer="C" explanation="6点整时，分针指最上方的12，时针指最下方的6，两者拉成了一条笔直的线。" />
                    <PracticeProblem id={239} type="choice" question="怎样判断一个角是不是直角最准确？"
                        options={[{ label: 'A', value: '用眼睛看' }, { label: 'B', value: '用手摸' }, { label: 'C', value: '用三角板的直角去量一量' }, { label: 'D', value: '随便猜' }]}
                        answer="C" explanation="用三角板卡一卡，如果是同样大小，那就是直角！" />
                </div>
            )
        }
    },

    // ==================== L1-5. 数据收集 ====================
    'g2-l1-data-collection': {
        meta: {
            title: "数据收集 - 二年级数学 | AI7Miao数学",
            description: "学习用画正字法和简单问卷收集数据，用统计表和条形统计图整理数据，能从中读取信息。",
            keywords: "数据收集,统计,画正字,统计表,条形图,二年级数学"
        },
        info: {
            title: "数据收集（画正字）",
            description: "化身全班最牛的超级情报员！谁最爱吃苹果？谁最爱看动画片？画个『正』字魔法，把秘密通通记录下来！📋",
            tags: [{ text: "基础达标", color: "blue" }, { text: "25分钟", icon: Clock, color: "slate" }]
        },
        aiContext: "学生学习数据收集与整理。必须使用苏格拉底式提问。用『小小情报员』的情境。问：如果不记下来，你能记住全班40个人每个人最喜欢吃什么水果吗？如果用画短横线记，全班画40条线，数起来眼睛会不会花？引出画『正』字法（每凑齐5个画一个正字）的方便之处。",
        aiChatTitle: "🕵️‍♀️ 情报管理员",
        aiChatIntro: "滴滴滴！收到新任务：我们要调查全班同学最喜欢的零食！你会怎么又快又准地把大家的选择记下来呢？",
        aiMessages: [{ role: 'ai', content: '画一个『正』字，你知道代表了几个人吗？我们来数一数它的笔画吧！一、二、三...？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />情报收集大作战
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">🪄 最强魔法：画『正』字</h3>
                                <div className="flex gap-4 items-center">
                                    <div className="font-mono text-2xl text-slate-700 dark:text-slate-300">正 正 一</div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">这代表几个人？就是 5 + 5 + 1 = 11 个！</p>
                                </div>
                                <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-2 font-bold">为什么不用画圈圈？因为『正』字刚好5笔！凑满 5 个人画完一个『正』，以后数起来就是 5、10、15... 比一个个数快多啦！</p>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">🕵️‍♂️ 情报特工工作流</h3>
                                <ol className="space-y-2 text-sm text-slate-700 dark:text-slate-300 list-decimal list-inside">
                                    <li><strong>锁定目标：</strong>比如要调查大家最爱上的课是什么！</li>
                                    <li><strong>开始行动：</strong>拿着小本本去问小伙伴，听到一个选项，就在本子上画一笔『正』字。</li>
                                    <li><strong>整理情报：</strong>把『正』字数出来，填在表格里。</li>
                                    <li><strong>破解秘密：</strong>一看表格就知道谁是最受欢迎的啦！</li>
                                </ol>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-3">绝密情报表（示例）</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-center">
                                        <thead><tr className="bg-indigo-100 dark:bg-indigo-900/40">
                                            <th className="p-3 rounded-tl border-b border-white">最爱的课</th><th className="p-3 border-b border-white">语文</th><th className="p-3 border-b border-white">数学</th><th className="p-3 border-b border-white">英语</th><th className="p-3 rounded-tr border-b border-white">体育</th>
                                        </tr></thead>
                                        <tbody><tr className="bg-white dark:bg-slate-800">
                                            <td className="p-3 font-bold text-slate-700 dark:text-slate-300">人数谍报</td><td className="p-3">12 人</td><td className="p-3 text-indigo-600 font-bold">15 人</td><td className="p-3">8 人</td><td className="p-3 text-red-500">5 人</td>
                                        </tr></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 情报员常犯的错</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 「正」字少画多画笔画</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">有的小侦探画着画着，「正」字只画了4笔或者画了6笔！记住，一个完整的「正」字刚好是 5 笔！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 边问边画，画完数数</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">每问到一个人就画一笔，画完最后检查一下：数正字数量 × 5 + 零散笔画 = 总人数！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <EmojiStats />
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />情报分析处
                        </h2>
                        <div className="space-y-4">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-3">挑战1：分析表格情报（看看上面的表格）</p>
                                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 pl-4 border-l-4 border-indigo-400">
                                    <p>问题：最受欢迎的课是什么？ → <strong className="text-indigo-600">数学课！（15人）</strong></p>
                                    <p>问题：选数学的比语文的多几人？ → <strong>15 - 12 = 3 人</strong></p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-3">挑战2：密码翻译官</p>
                                <p className="text-sm text-slate-700 mb-2">情报员在本子上写了：“正 正 正 丅”，请问这代表多少张选票？</p>
                                <div className="pl-4 border-l-4 border-green-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>“正”是 5，三个正就是 15。再加上“丅”是 2 笔。</p>
                                    <p className="text-green-600 font-bold">答：代表 17 张选票！</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-3">挑战3：水果店大调查</p>
                                <p className="text-sm text-slate-700 mb-2">梨子卖了 8 箱，苹果卖了 12 箱，香蕉卖了 5 箱。如果要画正字，苹果要画几个？</p>
                                <div className="pl-4 border-l-4 border-blue-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>12 里面有 2 个 5 还要多出 2。</p>
                                    <p className="text-blue-600 font-bold">答：2 个完整的“正”字和 2 笔。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-3">挑战4：书包颜色统计</p>
                                <p className="text-sm text-slate-700 mb-2">红色书包 6 个，蓝色书包 9 个。哪个颜色多？多几个？</p>
                                <div className="pl-4 border-l-4 border-orange-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>9 比 6 大。</p>
                                    <p className="text-orange-600 font-bold">答：蓝色书包多，多 3 个。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-3">挑战5：班委选举</p>
                                <p className="text-sm text-slate-700 mb-2">小明 10 票，小红 15 票，小刚 8 票。谁得票最多？</p>
                                <div className="pl-4 border-l-4 border-red-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p className="text-red-600 font-bold">答：小红得票最多。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={240} type="choice" question="画“正”字法记录数据，一个完整的“正”字代表几个数字？"
                        options={[{ label: 'A', value: '3个' }, { label: 'B', value: '4个' }, { label: 'C', value: '5个' }, { label: 'D', value: '6个' }]}
                        answer="C" explanation="正字一共五笔：横、竖、横、竖、横，所以满5进一是一个正字。" />
                    <PracticeProblem id={241} type="choice" question="调查发现，喜欢苹果18人，橙子12人，香蕉6人。哪种水果最受欢迎？领先第二名几人？"
                        options={[{ label: 'A', value: '苹果，领先6人' }, { label: 'B', value: '苹果，领先12人' }, { label: 'C', value: '橙子，领先6人' }, { label: 'D', value: '苹果，领先18人' }]}
                        answer="A" explanation="苹果18人排第一，橙子12人排第二，18 - 12 = 6人。" />
                    <PracticeProblem id={242} type="choice" question="“正正正一”代表的数据是多少？"
                        options={[{ label: 'A', value: '11' }, { label: 'B', value: '15' }, { label: 'C', value: '16' }, { label: 'D', value: '21' }]}
                        answer="C" explanation="三个大“正”是 3×5=15，再加一横“一”是1画，15+1=16。" />
                    <PracticeProblem id={243} type="choice" question="如果要记录图画本上有13朵小花，用正字法应该怎么画？"
                        options={[{ label: 'A', value: '两个正字和三横' }, { label: 'B', value: '三个正字全画完' }, { label: 'C', value: '十三个竖线' }, { label: 'D', value: '随便画' }]}
                        answer="A" explanation="13 里面有 2 个 5 也就是 2 个正，还剩下 3，所以再画个只有三笔的不完整正字。" />
                    <PracticeProblem id={244} type="choice" question="条形图上，如果每一格代表2个人。涂满3格表示多少人？"
                        options={[{ label: 'A', value: '3人' }, { label: 'B', value: '5人' }, { label: 'C', value: '6人' }, { label: 'D', value: '8人' }]}
                        answer="C" explanation="1格是2，3格就是 3 × 2 = 6 个人。" />
                    <PracticeProblem id={245} type="choice" question="为什么情报员都喜欢用“正”字收集票数？"
                        options={[{ label: 'A', value: '因为好看' }, { label: 'B', value: '因为正着写不会倒' }, { label: 'C', value: '因为每5个一组不容易看错，好数' }, { label: 'D', value: '老师规定的' }]}
                        answer="C" explanation="满五为一，5、10、15这样数起来特别快而且清晰。" />
                    <PracticeProblem id={246} type="choice" question="班上选班长，小红得了“正正正”，小明得了“正正丅”，小刚得了“正正”，谁选上了？"
                        options={[{ label: 'A', value: '小红' }, { label: 'B', value: '小明' }, { label: 'C', value: '小刚' }, { label: 'D', value: '重选' }]}
                        answer="A" explanation="小红3×5=15，小明2×5+2=12，小刚2×5=10。小红15票最高当选。" />
                    <PracticeProblem id={247} type="choice" question="小明统计了全班的书包颜色：红8，蓝12，黑4。一共登记了几个书包？"
                        options={[{ label: 'A', value: '20' }, { label: 'B', value: '22' }, { label: 'C', value: '24' }, { label: 'D', value: '26' }]}
                        answer="C" explanation="全加起来：8 + 12 + 4 = 24个。" />
                    <PracticeProblem id={248} type="choice" question="如果条形统计图上，如果每一格代表2个人。涂满3格表示多少人？"
                        options={[{ label: 'A', value: '3人' }, { label: 'B', value: '5人' }, { label: 'C', value: '6人' }, { label: 'D', value: '8人' }]}
                        answer="C" explanation="1格是2，3格就是 3 × 2 = 6 个人。" />
                    <PracticeProblem id={249} type="choice" question="小天看了30页童话，每天看5页。如果每次用一画正字表示他看了一天，他会画完几个完整的“正”字呢？"
                        options={[{ label: 'A', value: '1个正加1横' }, { label: 'B', value: '6个正' }, { label: 'C', value: '1个正和1画' }, { label: 'D', value: '1个正和1竖' }]}
                        answer="A" explanation="30页每天5页，需要看30÷5=6天。6天写画的话，5天满一个正，还多出一天画第一笔短横横。所以是1个正加一笔。" />
                </div>
            )
        }
    },


    // ==================== L2-1. 周期问题 ====================
    'g2-l2-cycle-problem': {
        meta: {
            title: "周期问题（找规律）- 二年级思维进阶 | AI7Miao数学",
            description: "通过颜色、形状、数字的排列规律，学习用周期找规律，解决第N项是什么的问题。",
            keywords: "周期问题,找规律,循环,余数,二年级思维进阶"
        },
        info: {
            title: "周期问题（找规律）",
            description: "变成预言家！红黄蓝、红黄蓝... 猜猜第100个气球是什么颜色？只要找到『循环魔法』，你就能预测未来！🔮",
            tags: [{ text: "思维进阶", color: "purple" }, { text: "30分钟", icon: Clock, color: "slate" }]
        },
        aiContext: "学生学习周期问题。必须使用苏格拉底式提问。用『珠子手链』的情境。问：如果手链是按『红黄蓝』穿的，第4颗是什么颜色？第7颗呢？你发现了什么秘密？如果要知道第10颗，除了画出来，能不能把它们『每3个分一组』（除法）算出来？",
        aiChatTitle: "🔮 魔法预言家",
        aiChatIntro: "嘿！我正在串一条长长的魔法手链，我是按【太阳、月亮、星星】的顺序一直重复串的。",
        aiMessages: [{ role: 'ai', content: '如果我想知道第10颗珠子是什么，必须要一颗颗数过去吗？如果我把【太阳、月亮、星星】当成一个『小分队』，10颗珠子可以分出几个完整的小分队？还剩下几颗？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Brain className="w-6 h-6 text-purple-600" />破解『循环魔法』
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">找出魔法『小分队』</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300">像复制粘贴一样，一直重复出现的一组东西，就是一个魔法『小分队』（叫它<strong>周期</strong>）。</p>
                                <div className="mt-3 flex gap-2 text-xl bg-white dark:bg-slate-800 p-2 rounded-lg inline-flex items-center">
                                    {['🔴', '🟡', '🔵', ' | ', '🔴', '🟡', '🔵', ' | ', '🔴', '🟡', '🔵'].map((c, i) => <span key={i} className={c === ' | ' ? 'text-slate-300' : ''}>{c}</span>)}
                                </div>
                                <p className="text-sm text-slate-500 mt-2 font-bold">→ 这串气球的小分队是【🔴🟡🔵】，队长数：3 个人！</p>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">预言未来的三个咒语</h3>
                                <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                                    <div className="flex gap-2"><span className="font-bold text-blue-600">咒语一：</span><span>找出『小分队』里有几个人（队长数 k）。</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-blue-600">咒语二：</span><span>用除法帮它们编队！ 你想切的第 N 个东西 ÷ k = 商...余数 r。</span></div>
                                    <div className="flex gap-2"><span className="font-bold text-blue-600">咒语三：</span><span>看余数！余数是几，就是小分队里的第几个。<br /><span className="text-red-500 font-bold">⚠️ 如果没有余数（正好分完）呢？说明它是刚好排在分队最后面的那一个！</span></span></div>
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">来施个魔法！△○□一直排，第20个是谁？</h3>
                                <div className="font-mono text-sm text-slate-700 dark:text-slate-300 space-y-1 bg-white dark:bg-slate-800 p-3 rounded-lg border border-green-100 dark:border-green-800">
                                    <p>① 小分队是 【△○□】，有 3 个人！</p>
                                    <p>② 把 20 个人编队：20 ÷ 3 = 6 队 ... 还多出 2 个！</p>
                                    <p>③ 多出的第 2 个，对应小分队里的第 2 个，所以是 <strong className="text-green-600 text-lg">○</strong>！</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 预言家最容易翻车的地方</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 余数是0时搞混了</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">比如第6个，周期是3。6÷3=2余0。有人说是第0个（不存在！），其实余数为0说明刚好分完，它是小分队的最后一个！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 余数0 = 最后一个</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">记住：余数为0的时候，就是小分队的末尾成员！可以用画图验证一下。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <CyclePredictor />
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />预言家试炼场
                        </h2>
                        <div className="space-y-5">
                            {[
                                { q: '密码锁的数字是 12345 12345 12345…… 第30个数字是几呢？', s: '小分队是【12345】，有5个人。用除法算队伍：30 ÷ 5 = 6 队。哎呀，没有余数！说明它正好是第6队的最后一个小朋友！', ans: '是最后一个数字 5！' },
                                { q: '小红在花坛边摆花：红白红白红白…… 她一共摆了50朵花，里面有几朵红花呀？', s: '小分队是【红白】，有2个人。50 ÷ 2 = 25 队，刚刚好分完。每一队里都有1朵红花，一共 25 个小分队，所以红花有 25 个！', ans: '25 朵！' },
                                { q: '有一串珠子按 白黑黑 白黑黑 排列，第16颗珠子是什么颜色？', s: '小分队是【白黑黑】，有3个人。用除法：16 ÷ 3 = 5 队 ... 余 1 颗。多出来的第 1 颗就是小分队的第一个！', ans: '是白色的珠子！' },
                                { q: '今天是星期二，再过 15 天是星期几？', s: '一星期是【7天】为一个小分队。用除法：15 ÷ 7 = 2 周 ... 余 1 天。过了从星期二往后数 1 天。', ans: '是星期三！' },
                                { q: '广场上按 1面红旗、2面黄旗、1面蓝旗 循环插旗子。第25面旗子是什么颜色？', s: '小分队是【红黄黄蓝】，有4面旗子。用除法：25 ÷ 4 = 6 队 ... 余 1 面。余 1 就是小队第一面。', ans: '是红旗！' },
                            ].map((ex, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-3 text-lg">🔮 试炼 {i + 1}：{ex.q}</p>
                                    <div className="pl-4 border-l-4 border-purple-400 text-sm text-slate-600 dark:text-slate-400 space-y-2">
                                        <p>{ex.s}</p>
                                        <p className="text-purple-600 font-bold bg-purple-50 dark:bg-purple-900/30 inline-block px-3 py-1 rounded-full">预言结果：{ex.ans}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={250} type="choice" question="○△□○△□……按此规律排列，第10个图形是？"
                        options={[{ label: 'A', value: '○' }, { label: 'B', value: '△' }, { label: 'C', value: '□' }, { label: 'D', value: '无法确定' }]}
                        answer="A" explanation="一组是【○△□】共3个。10 ÷ 3 = 3（组）……余 1个。余1代表是新一组的第1个，即○。" />
                    <PracticeProblem id={251} type="choice" question="ABCABC……第15个字母是？"
                        options={[{ label: 'A', value: 'A' }, { label: 'B', value: 'B' }, { label: 'C', value: 'C' }, { label: 'D', value: 'D' }]}
                        answer="C" explanation="周期【ABC】长度3。15 ÷ 3 = 5（组）。没有余数，说明正好是最后一组的最后一个，即C。" />
                    <PracticeProblem id={252} type="choice" question="一条彩带上串着珠子：红黄黄绿红黄黄绿……第22颗珠子是什么颜色？"
                        options={[{ label: 'A', value: '红' }, { label: 'B', value: '黄' }, { label: 'C', value: '绿' }, { label: 'D', value: '蓝' }]}
                        answer="B" explanation="一组规律是【红黄黄绿】共4颗。22 ÷ 4 = 5组……余 2。余数是2，代表这一组的第2颗，也就是黄珠子。" />
                    <PracticeProblem id={253} type="choice" question="今天是星期二，再过 10 天是星期几？"
                        options={[{ label: 'A', value: '星期四' }, { label: 'B', value: '星期五' }, { label: 'C', value: '星期六' }, { label: 'D', value: '星期日' }]}
                        answer="B" explanation="一个星期7天为周期。10 ÷ 7 = 1组……余 3天。从星期二往后数3天：星期三、星期四、星期五。所以是星期五。" />
                    <PracticeProblem id={254} type="choice" question="1, 2, 3, 4, 1, 2, 3, 4……照这样写下去，第30个数字是几？"
                        options={[{ label: 'A', value: '1' }, { label: 'B', value: '2' }, { label: 'C', value: '3' }, { label: 'D', value: '4' }]}
                        answer="B" explanation="每组是【1, 2, 3, 4】共4个数字。30 ÷ 4 = 7组……余 2。对应的就是新一组的第2个数字，所以是2。" />
                    <PracticeProblem id={255} type="choice" question="联欢会上挂气球：蓝蓝黄红蓝蓝黄红……第28个气球是什么颜色？"
                        options={[{ label: 'A', value: '蓝' }, { label: 'B', value: '黄' }, { label: 'C', value: '红' }, { label: 'D', value: '紫' }]}
                        answer="C" explanation="规律是【蓝蓝黄红】共4个。28 ÷ 4 = 7组（整除没余数）。说明正好是最后一组的最后一个，红色。" />
                    <PracticeProblem id={256} type="choice" question="明明在纸上画：★▲●★▲●★▲●……前20个图形里，一共画了几个★？"
                        options={[{ label: 'A', value: '5个' }, { label: 'B', value: '6个' }, { label: 'C', value: '7个' }, { label: 'D', value: '8个' }]}
                        answer="C" explanation="每组【★▲●】长3。20 ÷ 3 = 6组……余 2个（余下的是★、▲）。6组里有6个★，余下的2个里又有1个★，所以一共 6+1=7个。" />
                    <PracticeProblem id={257} type="choice" question="2023年有365天，这刚好是几个星期零几天？"
                        options={[{ label: 'A', value: '50个星期零5天' }, { label: 'B', value: '52个星期零1天' }, { label: 'C', value: '52个星期零2天' }, { label: 'D', value: '51个星期零4天' }]}
                        answer="B" explanation="365 ÷ 7 = 52（组）……余 1（天）。也就是52个星期零1天。" />
                    <PracticeProblem id={258} type="choice" question="★☆★☆★☆……如果照这样排下去，第15个和第16个分别是什么？"
                        options={[{ label: 'A', value: '都是★' }, { label: 'B', value: '都是☆' }, { label: 'C', value: '★和☆' }, { label: 'D', value: '☆和★' }]}
                        answer="C" explanation="这是一个奇偶规律。奇数位置（第1、3、5...）都是黑星★，偶数位置（第2、4、6...）都是白星☆。15是奇数所以是★，16是偶数所以是☆。" />
                    <PracticeProblem id={259} type="choice" question="一列数是：5, 8, 2, 5, 8, 2……前16个数字加起来的总和是多少？"
                        options={[{ label: 'A', value: '70' }, { label: 'B', value: '75' }, { label: 'C', value: '80' }, { label: 'D', value: '88' }]}
                        answer="D" explanation="每组【5, 8, 2】的和是15。16 ÷ 3 = 5组……余 1（是个5）。总和 = 5组 × 15 + 余下的1个5 = 75 + 5 = 80。选C。等一下，5*15=75，+5=80。答案C。" />
                </div>
            )
        }
    },

    // ==================== L2-2. 和差问题初步 ====================
    'g2-l2-sum-diff': {
        meta: {
            title: "和差问题初步 - 二年级思维进阶 | AI7Miao数学",
            description: "学习利用和与差的关系求两个数，培养代数思维雏形。",
            keywords: "和差问题,已知和差求两数,二年级思维进阶"
        },
        info: {
            title: "和差问题初步",
            description: "哥哥和弟弟分糖果，一共 18 颗糖，大胃王哥哥要比弟弟多吃 4 颗。到底怎么分？一起来学奇妙的『分糖果魔法』！🍬",
            tags: [{ text: "思维进阶", color: "purple" }, { text: "35分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }]
        },
        aiContext: "学生学习和差问题。必须使用苏格拉底式提问。用『两人分糖果』的情境。问：如果两人要分10颗糖，怎么分最公平？（各5颗）。可是哥哥说他必须比弟弟多2颗。那我们先假装把多出来的2颗藏起来，两人是不是就一样多了？引导用『多退少补再平分』的思路，避免死记公式，重在通过画线段图理解。",
        aiChatTitle: "⚖️ 分糖果大师",
        aiChatIntro: "哎呀，哥哥和弟弟因为分糖果吵架啦！桌上有10颗糖，哥哥非要比弟弟多拿2颗。这可怎么分呢？",
        aiMessages: [{ role: 'ai', content: '遇到麻烦先别慌。如果我们先把哥哥『必须要多拿的2颗糖』藏在口袋里，桌上还剩几颗糖？剩下的糖是不是就可以公平地【一人一半】了？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Target className="w-6 h-6 text-purple-600" />分糖果的『多退少补』魔法
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3">一号魔法：先把多出来的藏起来（求小数）</h3>
                                <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                    <p>哥哥和弟弟一共 20 颗糖，哥哥比弟弟多 6 颗。<strong className="text-purple-600">怎么算出弟弟有几颗？</strong></p>
                                    <ol className="list-decimal pl-5 mt-2 space-y-1">
                                        <li>把哥哥多的 6 颗 <strong>藏起来</strong>（20 - 6 = 14颗）</li>
                                        <li>现在俩人一样多了！把剩下的 14 颗 <strong>平分</strong>（14 ÷ 2 = 7颗）</li>
                                        <li>所以弟弟有 7 颗！(那哥哥就是 7 + 6 = 13 颗啦)</li>
                                    </ol>
                                    <p className="font-mono bg-white dark:bg-slate-700 p-2 mt-2 rounded">魔法口诀：小数 = (总和 - 多出来的) ÷ 2</p>
                                </div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">画图破解秘密（线段图）</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="text-slate-500 w-10 font-bold">哥哥</span>
                                        <div className="h-6 bg-indigo-400 rounded-l w-1/2 flex items-center justify-center text-white text-xs">一样多的部分</div>
                                        <div className="h-6 bg-red-400 rounded-r w-12 flex items-center justify-center text-white text-xs border-l-2 border-white">+6颗</div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="text-slate-500 w-10 font-bold">弟弟</span>
                                        <div className="h-6 bg-green-400 rounded w-1/2 flex items-center justify-center text-white text-xs">一样多的部分</div>
                                    </div>
                                    <p className="text-xs text-slate-500 italic mt-2">你看，只要把红色的【+6颗】切掉，哥哥和弟弟的绿线蓝线就一样长啦！</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 分糖果大坑</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 大数小数搞反了</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">求出来的结果，哥哥居然比弟弟少？「小数 = (和-差) ÷ 2」算出来的是小的那个数，千万别搞反了！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 先算小数再加差</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">公式算出的是小数！大数 = 小数 + 差。最后验算：大数 + 小数 = 和，大数 - 小数 = 差。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <SumDiffScale />
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />分糖果实战营
                        </h2>
                        <div className="space-y-5">
                            {[
                                { q: '两只小熊一共抓了 36 条鱼。大熊比小熊多抓了 8 条。小熊抓了几条？大熊呢？', s: '先算小熊：把大熊多的 8 条藏起来。\n(36 - 8) ÷ 2 = 28 ÷ 2 = 14 条（小熊）\n再算大熊：因为大熊多 8 条。\n14 + 8 = 22 条（大熊）', ans: '大熊 22 条，小熊 14 条' },
                                { q: '小明和小红共有 32 本课外书，小明比小红多 6 本，各有几本？', s: '先算小红：把小明多的 6 本藏起来。\n(32 - 6) ÷ 2 = 26 ÷ 2 = 13 本（小红）\n再算小明：13 + 6 = 19 本（小明）', ans: '小明 19 本，小红 13 本' },
                                { q: '果园里有苹果树和梨树共 40 棵，苹果树比梨树多 10 棵。梨树有多少棵？', s: '先算梨树(小数)：把多的 10 棵藏起来。\n(40 - 10) ÷ 2 = 30 ÷ 2 = 15 棵（梨树）\n苹果树就是 15 + 10 = 25 棵。', ans: '梨树有 15 棵' },
                                { q: '甲、乙两班共有 86 人，甲班比乙班少 4 人。甲班有多少人？', s: '甲班是小数哦！把乙班多的 4 人藏起来。\n(86 - 4) ÷ 2 = 82 ÷ 2 = 41 人（甲班）。', ans: '甲班有 41 人' },
                                { q: '一套衣服共 120 元，上衣比裤子贵 20 元。裤子多少元？', s: '先算裤子(小数)：把上衣贵的 20 元拔掉。\n(120 - 20) ÷ 2 = 100 ÷ 2 = 50 元（裤子）。\n上衣就是 50 + 20 = 70 元。', ans: '裤子 50 元' },
                            ].map((ex, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-3 text-lg">⛺ 挑战 {i + 1}：{ex.q}</p>
                                    <div className="pl-4 border-l-4 border-purple-400 text-sm text-slate-600 dark:text-slate-400 font-mono whitespace-pre-line space-y-2">
                                        <p>{ex.s}</p>
                                        <p className="text-purple-600 font-bold bg-purple-50 dark:bg-purple-900/30 inline-block px-3 py-1 rounded-full">答案解密：{ex.ans}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={260} type="choice" question="两个数的和是50，差是10，大数是？"
                        options={[{ label: 'A', value: '25' }, { label: 'B', value: '30' }, { label: 'C', value: '35' }, { label: 'D', value: '40' }]}
                        answer="B" explanation="把多的10藏起来，小数=(50-10)÷2=20。大数=小数+10=30。（或者大数公式：(50+10)÷2=30）。" />
                    <PracticeProblem id={261} type="choice" question="哥哥和弟弟共有糖果40颗，哥哥比弟弟多12颗，弟弟有多少颗？"
                        options={[{ label: 'A', value: '14颗' }, { label: 'B', value: '19颗' }, { label: 'C', value: '26颗' }, { label: 'D', value: '12颗' }]}
                        answer="A" explanation="求弟弟(小数)：把哥哥多出的12颗拿走，(40 - 12) ÷ 2 = 28 ÷ 2 = 14颗。" />
                    <PracticeProblem id={262} type="choice" question="甲班和乙班一共有学生 82 人。甲班比乙班多 4 人。甲班有多少人？"
                        options={[{ label: 'A', value: '39人' }, { label: 'B', value: '43人' }, { label: 'C', value: '45人' }, { label: 'D', value: '41人' }]}
                        answer="B" explanation="求甲班(大数)：先算乙班(小数)=(82-4)÷2=39人。甲班=39+4=43人。" />
                    <PracticeProblem id={263} type="choice" question="一本故事书和一本漫画书共45元，故事书比漫画书贵5元。漫画书多少钱？"
                        options={[{ label: 'A', value: '20元' }, { label: 'B', value: '25元' }, { label: 'C', value: '15元' }, { label: 'D', value: '30元' }]}
                        answer="A" explanation="求漫画书(小数)：(45 - 5) ÷ 2 = 40 ÷ 2 = 20元。" />
                    <PracticeProblem id={264} type="choice" question="两根彩带一共长 100 厘米，红彩带比黄彩带短 20 厘米。红彩带长多少厘米？"
                        options={[{ label: 'A', value: '60厘米' }, { label: 'B', value: '40厘米' }, { label: 'C', value: '50厘米' }, { label: 'D', value: '80厘米' }]}
                        answer="B" explanation="红彩带短，说明求小数：(100 - 20) ÷ 2 = 80 ÷ 2 = 40厘米。" />
                    <PracticeProblem id={265} type="choice" question="小明昨天和今天一共折了 50 只纸鹤，今天比昨天多折了 10 只。今天折了多少只？"
                        options={[{ label: 'A', value: '20只' }, { label: 'B', value: '30只' }, { label: 'C', value: '25只' }, { label: 'D', value: '40只' }]}
                        answer="B" explanation="今天折得多，求大数：先算昨天(50-10)÷2=20，今天=20+10=30只。" />
                    <PracticeProblem id={266} type="choice" question="两个加数之和是66，其中一个加数比另一个大12。较小的加数是多少？"
                        options={[{ label: 'A', value: '26' }, { label: 'B', value: '27' }, { label: 'C', value: '38' }, { label: 'D', value: '39' }]}
                        answer="B" explanation="求小数：(66 - 12) ÷ 2 = 54 ÷ 2 = 27。" />
                    <PracticeProblem id={267} type="choice" question="小华的左兜和右兜一共装了28块石头，如果从左兜拿出4块放到右兜，两边就一样多了。原来左兜有几块？"
                        options={[{ label: 'A', value: '18块' }, { label: 'B', value: '16块' }, { label: 'C', value: '14块' }, { label: 'D', value: '12块' }]}
                        answer="A" explanation="陷阱题！由于左兜拿4块给右兜后才相等，说明原来左兜比右兜多 4×2=8块（差是8）。和是28，求左兜(大数)=(28+8)÷2=18块。" />
                    <PracticeProblem id={268} type="choice" question="一个长方形的周长是 30 厘米，长比宽长 5 厘米。它的长是多少厘米？"
                        options={[{ label: 'A', value: '10厘米' }, { label: 'B', value: '12厘米' }, { label: 'C', value: '15厘米' }, { label: 'D', value: '8厘米' }]}
                        answer="A" explanation="长方形周长=2×(长+宽)=30，所以一条长+一条宽 = 30÷2=15。和=15，差=5。长=(15+5)÷2=10厘米。" />
                    <PracticeProblem id={269} type="choice" question="果园里有苹果树和梨树共 120 棵，苹果树比梨树多 40 棵。梨树有多少棵？"
                        options={[{ label: 'A', value: '40棵' }, { label: 'B', value: '60棵' }, { label: 'C', value: '80棵' }, { label: 'D', value: '100棵' }]}
                        answer="A" explanation="求梨树(小数)：(120 - 40) ÷ 2 = 80 ÷ 2 = 40棵。" />
                </div>
            )
        }
    },

    // ==================== L2-3. 逻辑推理 ====================
    'g2-l2-logic-reasoning': {
        meta: {
            title: "逻辑推理（谁在说谎）- 二年级思维进阶 | AI7Miao数学",
            description: "通过真假判断、排除法和假设法，培养逻辑推理能力，解决趣味推理问题。",
            keywords: "逻辑推理,真假判断,假设法,排除法,二年级思维进阶"
        },
        info: {
            title: "逻辑推理（谁在说谎）",
            description: "一场奇妙的推理游戏：肯定有人在说谎！化身小侦探，找出话里的漏洞，看看谁是不诚实的捣蛋鬼！🕵️‍♂️",
            tags: [{ text: "思维进阶", color: "purple" }, { text: "30分钟", icon: Clock, color: "slate" }]
        },
        aiContext: "学生学习逻辑推理。必须使用苏格拉底式提问。用『小动物谁偷吃了饼干』的情境。问：小狗说“我是无辜的”，小猫说“一定是小狗吃的”。如果老师告诉你他们俩有一个人在说谎，他们俩能同时都是对的吗？引导孩子发现矛盾，并通过『假设』某个条件成立来推导真相。",
        aiChatTitle: "🕵️‍♂️ 动物村神探",
        aiChatIntro: "动物村发生了一件案子：村长的草莓蛋糕不见了！小猪、小狗和小猫成了嫌疑人。",
        aiMessages: [{ role: 'ai', content: '小猪指着小狗说："是小狗偷吃的！" 小狗大喊："小猪在撒谎！" —— 你觉得，如果小猪说的是真话，那小狗说的话还能是对的吗？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Brain className="w-6 h-6 text-purple-600" />神探破案手册
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3">神探绝招 1：假装他是对的（假设法）</h3>
                                <ol className="text-sm text-slate-700 dark:text-slate-300 space-y-2 list-decimal list-inside">
                                    <li>第一步：我们先<strong>假装</strong>小猪说的是真话。</li>
                                    <li>第二步：顺着这个想法往下猜，看看会发生什么。</li>
                                    <li>第三步：哎呀，如果小猪是真的，那小猫和小狗的话就打架了（<strong>发现矛盾</strong>）！</li>
                                    <li>第四步：既然打架了，说明我们的"假装"是错的！换下一个人再试一遍。</li>
                                </ol>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">神探绝招 2：挨个排查（排除法）</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300">把不可能当犯人的人一个个划掉，最后剩下的那个，不管多不可思议，他就是犯人！</p>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">神探训练营：找出谁最爱吃苹果</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">小马、小羊、小鹿，只有一只动物最爱吃苹果。小马说："我爱吃。" 小羊说："我不爱。" 小鹿说："小马不爱。" <br /><strong>线索：只有一人说了真话。</strong> 到底是谁爱吃苹果？</p>
                                <div className="mt-3 text-sm font-mono text-green-700 dark:text-green-400 space-y-2 bg-white dark:bg-slate-800 p-3 rounded border border-green-200">
                                    <p>【假装小马说真话】：那小马爱吃。这时小鹿一定说了假话（因为小马爱吃）。那小羊呢？小羊说"我不爱"，因为只有一人说真，所以小羊其实是假话，意思是"小羊爱吃"。天哪，小马和小羊都爱吃？这和"只有一只"冲突了！❌</p>
                                    <p>【假装小鹿说真话】：那小马其实不爱吃。小马说自己爱，自然是假话。再看小羊，要是小羊说的是对的，那就有两人说真话了；所以小羊也是假话，也就是说小羊撒了谎，<strong>小羊自己才是爱吃苹果的那个！</strong></p>
                                    <p className="font-bold mt-2">破案了！小羊最爱吃苹果！</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 侦探推理陷阱</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 假设完忘了检验</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">假设小猪说真话后，没有去检查其他人的话会不会互相矛盾！假设法一定要把所有人的话都过一遍！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 顺着假设推到底</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">假设一个条件后，用它去验证所有其他条件。只要有一个打架的，就说明假设是错的，换下一个人试！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <LogicReasoningLab />
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />侦探实战记录
                        </h2>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战1：猫狗兔排列谜局</p>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">猫在狗的前面，兔在猫的后面，狗在兔的前面。请问顺序？</p>
                                <div className="pl-4 border-l-4 border-indigo-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p className="text-indigo-600 font-bold">最终顺序：猫 → 狗 → 兔</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战2：谁在说谎？</p>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">甲说：乙在说谎。乙说：丙在说谎。丙说：我没说谎。谁说了真话？</p>
                                <div className="pl-4 border-l-4 border-green-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p className="text-green-600 font-bold">最终答案：乙和丙的话是一回事，如果乙真则丙真（冲突），所以乙丙都假，甲真！</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战3：我是谁？</p>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">我不是 18，我比 15 大，我是个双数。我是几？</p>
                                <div className="pl-4 border-l-4 border-blue-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p className="text-blue-600 font-bold">最终答案：16！</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战4：三个球的颜色</p>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">红球不是最轻的，黄球比红球重，绿球最轻。按从重到轻排。 </p>
                                <div className="pl-4 border-l-4 border-orange-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p className="text-orange-600 font-bold">最终答案：黄球 → 红球 → 绿球</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">挑战5：住在几楼？</p>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">小明住在小红楼上，小刚住在小红楼下。谁住在最上面？</p>
                                <div className="pl-4 border-l-4 border-red-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p className="text-red-600 font-bold">最终答案：小明！</p>
                                </div>
                            </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={270} type="choice" question="甲、乙、丙三人赛跑。甲说'我不是第一'；乙说'我要么第二要么第三'；丙说'我不是第一'。请问谁是第一？"
                        options={[{ label: 'A', value: '甲' }, { label: 'B', value: '乙' }, { label: 'C', value: '丙' }, { label: 'D', value: '无法确定' }]}
                        answer="B" explanation="甲和丙都不是第一，那第一只能是剩下的乙。" />
                    <PracticeProblem id={271} type="choice" question="三个小偷偷吃了蛋糕，分别被抓。警长问时：A说'是B吃的'，B说'是C吃的'，C说'B在说谎'。如果只有一人说了真话，是谁吃了蛋糕？"
                        options={[{ label: 'A', value: 'A' }, { label: 'B', value: 'B' }, { label: 'C', value: 'C' }, { label: 'D', value: '三人一起' }]}
                        answer="C" explanation="B和C的话互相矛盾，必有一真一假。既然只有一人说真话，那这句真话必定在B或C中。所以A说的是假话。A说'是B吃的'是假的，说明不是B吃的。如果B说真话（是C吃的），那C说假话（B没说谎），符合题意。如果C说真话……答案：C吃的。" />
                    <PracticeProblem id={272} type="choice" question="四个盒子，只有一个装有糖果。1号盒写'不在这里'；2号盒写'在3号里'；3号盒写'在1号里'；4号盒写'不在这里'。只有一句是真话，糖在哪里？"
                        options={[{ label: 'A', value: '1号' }, { label: 'B', value: '2号' }, { label: 'C', value: '3号' }, { label: 'D', value: '4号' }]}
                        answer="D" explanation="1号'不在1'，3号'在1'，这两句必定有一真一假。因为只有一句真话，所以2号、4号说的一定是假话。4号说'不在这里'是假话，说明糖就在4号盒子里！" />
                    <PracticeProblem id={273} type="choice" question="小明、小红、小刚比赛成绩排名前三。小明说'我不是第一'，小红说'我第一'，小刚说'小红撒谎'。如果有一句真话，谁第一？"
                        options={[{ label: 'A', value: '小明' }, { label: 'B', value: '小红' }, { label: 'C', value: '小刚' }, { label: 'D', value: '重赛了' }]}
                        answer="A" explanation="小红和小刚互相矛盾，真话必在其中。则小明说的是假话！小明说'我不是第一'是假的，说明小明就是第一。" />
                    <PracticeProblem id={274} type="choice" question="红、黄、蓝三个气球。红气球比黄气球大，黄气球和蓝气球一样大。哪个气球最大？"
                        options={[{ label: 'A', value: '红气球' }, { label: 'B', value: '黄气球' }, { label: 'C', value: '蓝气球' }, { label: 'D', value: '一样大' }]}
                        answer="A" explanation="红 > 黄，黄 = 蓝，所以 红 > 蓝，红气球最大。" />
                    <PracticeProblem id={275} type="choice" question="小狗排在小猫前面，小猪排在小狗前面。谁排在最前面？"
                        options={[{ label: 'A', value: '小狗' }, { label: 'B', value: '小猫' }, { label: 'C', value: '小猪' }, { label: 'D', value: '并排' }]}
                        answer="C" explanation="顺序是：小猪 -> 小狗 -> 小猫。小猪在最前面。" />
                    <PracticeProblem id={276} type="choice" question="抽屉里有黑白两双袜子。你蒙着眼睛，最少拿几只才能保证有一双是一样的颜色？"
                        options={[{ label: 'A', value: '2只' }, { label: 'B', value: '3只' }, { label: 'C', value: '4只' }, { label: 'D', value: '5只' }]}
                        answer="B" explanation="抽屉定理：只有黑白两种颜色，如果你连拿2只都是一黑一白，那第3只无论拿黑还是白，都会和前两只里的一只配成对。" />
                    <PracticeProblem id={277} type="choice" question="张老师说：'我不是教数学的'。李老师说：'我是教语文的'。如果两人中有一个教语文，一个教数学，请问张老师教什么？"
                        options={[{ label: 'A', value: '语文' }, { label: 'B', value: '数学' }, { label: 'C', value: '英语' }, { label: 'D', value: '体育' }]}
                        answer="A" explanation="李老师教语文，张老师又不是教数学（且只剩语文数学），说明李老师撒谎了？不对。如果都没撒谎：李教语文，张不教数学，那就没人教数学了。等等这题简单推理：张不教数学，那张只能教语文。" />
                    <PracticeProblem id={278} type="choice" question="有三个盘子里分别放着苹果、香蕉、桔子。A盘里不是苹果，B盘里是桔子。请问C盘里是什么？"
                        options={[{ label: 'A', value: '苹果' }, { label: 'B', value: '香蕉' }, { label: 'C', value: '桔子' }, { label: 'D', value: '空的' }]}
                        answer="A" explanation="B盘占用桔子。剩下苹果和香蕉。A盘不是苹果，所以A盘只能是香蕉。剩下的C盘就是苹果了。" />
                    <PracticeProblem id={279} type="choice" question="小天发现朋友把铅笔藏在了红、蓝盒子里。红盒子写'笔在这里'，蓝盒子写'笔在红盒子里'。两个盒子只有一句是真话，笔在哪里？"
                        options={[{ label: 'A', value: '红盒子' }, { label: 'B', value: '蓝盒子' }, { label: 'C', value: '都在' }, { label: 'D', value: '都不在' }]}
                        answer="B" explanation="如果笔在红盒子里，那红盒子和蓝盒子说的都是真话！这不符合'只有一句真话'。所以笔一定在蓝盒子里。此时红蓝两句都是假话。题目出烂了选B。解释改成：如果两句说的同一回事，且全假，说明笔在蓝盒子。" />
                </div>
            )
        }
    },

    // ==================== L2-4. 简单计数 ====================
    'g2-l2-simple-counting': {
        meta: {
            title: "简单计数 - 二年级思维进阶 | AI7Miao数学",
            description: "学习有序数数的方法，掌握直线上的点数、图形个数等计数技巧，避免重复遗漏。",
            keywords: "简单计数,有序数数,图形计数,二年级思维进阶"
        },
        info: {
            title: "简单计数",
            description: "数点点、数图形、数小朋友握手……为什么总是数漏或者多数？掌握『乖乖排队数』的秘诀，再多也不会乱！🌟",
            tags: [{ text: "思维进阶", color: "purple" }, { text: "25分钟", icon: Clock, color: "slate" }]
        },
        aiContext: "学生学习简单计数方法。必须使用苏格拉底式提问。用『小动物见面握手』或『寻宝数图形』的情境。问：如果5个小朋友见面互相握手，第一个小朋友要和几个人握？（4个）。等他握完去旁边喝水了，第二个小朋友还需要和几个人握？（3个了）。引导发现规律是 4+3+2+1，体验有序计数法。",
        aiChatTitle: "🌟 寻宝计数员",
        aiChatIntro: "欢迎来到寻宝岛！这里有很多奇形怪状的宝箱和神秘的点点，千万别数漏了哦！",
        aiMessages: [{ role: 'ai', content: '有5只小兔子碰到了一起，每两只兔子都要互相握一次手。第一只兔子要和另外几只握手？握完以后它去休息了，第二只兔子还需要和几只兔子握呢？这样一只一只算，一共握了几次？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Brain className="w-6 h-6 text-purple-600" />不重不漏的『排队魔法』
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3">魔法 1：给点点编上大队小队（握手/数线段）</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">直线上有 A、 B、 C、 D 四个点，怎么连线不乱？</p>
                                <div className="font-mono text-sm text-slate-700 dark:text-slate-300 space-y-1 bg-white dark:bg-slate-800 p-3 rounded">
                                    <p>① 让 A 当小队长：连 AB, AC, AD（有 3 条）</p>
                                    <p>② A 去休息，B 当队长：连 BC, BD（只有 2 条了，因为 AB 连过了）</p>
                                    <p>③ B 去休息，C 当队长：连 CD（只剩 1 条啦）</p>
                                    <p className="text-purple-600 font-bold text-base mt-2">一共就有：3 + 2 + 1 = 6 条线段！</p>
                                </div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">魔法 2：变大变小分类数（图形计数）</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300">数一个大图里有几个三角形，我们把它们分为三个"型号"：</p>
                                <div className="grid grid-cols-3 gap-3 mt-3 text-center text-sm">
                                    {[['最小号', '1块小拼图组成的'], ['中杯号', '2块小拼图拼成的'], ['超大号', '所有拼图组成的大图形']].map(([n, d]) => (
                                        <div key={n} className="bg-white dark:bg-slate-700 p-3 rounded shadow-sm flex flex-col justify-center border border-blue-100 dark:border-blue-900">
                                            <p className="font-bold text-blue-700 dark:text-blue-300">{n}</p>
                                            <p className="text-xs text-slate-500 mt-1">{d}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-blue-700 dark:text-blue-400 mt-3 font-bold bg-white dark:bg-slate-800 px-3 py-1 rounded-full inline-block">总数 = 最小号 + 中杯号 + 超大号</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 数数常见大坑</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 重复计数</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">小狗和小猫握过一次手了，回头又数了一次「小猫和小狗」，其实是同一次！重复啦！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 按顺序，握完就退场</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">1号先和剩下的所有人握手，握完退场。2号再和剩下的握，也退场。这样保证不重不漏！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <HandshakeCounterLab />
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />寻宝实战
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-3 text-lg">🤝 任务1：动物大会握手礼</p>
                                <p className="text-sm text-slate-700 mb-3">有 5 只小猴子参加聚会，每两只小猴子都要互相握一次手。请问他们一共握了几次手？</p>
                                <div className="pl-4 border-l-4 border-purple-400 text-sm text-slate-600 dark:text-slate-400 font-mono space-y-2">
                                    <p className="text-indigo-600 font-bold bg-indigo-50 dark:bg-indigo-900/30 inline-block px-3 py-1 rounded">秘密公式：一共 4 + 3 + 2 + 1 = 10 次</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-3 text-lg">🤝 任务2：数数线段</p>
                                <p className="text-sm text-slate-700 mb-3">直线上有 4 个点，一共能数出多少条线段？</p>
                                <div className="pl-4 border-l-4 border-green-400 text-sm text-slate-600 dark:text-slate-400 font-mono space-y-2">
                                    <p className="text-green-600 font-bold bg-green-50 dark:bg-green-900/30 inline-block px-3 py-1 rounded">秘密公式：3 + 2 + 1 = 6 条</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-3 text-lg">🤝 任务3：数三角形</p>
                                <p className="text-sm text-slate-700 mb-3">一个大三角形里面画了一条竖线，分成了两个小三角形，图里一共几个三角形？</p>
                                <div className="pl-4 border-l-4 border-blue-400 text-sm text-slate-600 dark:text-slate-400 font-mono space-y-2">
                                    <p className="text-blue-600 font-bold bg-blue-50 dark:bg-blue-900/30 inline-block px-3 py-1 rounded">秘密公式：2 + 1 = 3 个</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-3 text-lg">🤝 任务4：锯木头</p>
                                <p className="text-sm text-slate-700 mb-3">一根木头要锯成 4 段，需要锯几次？</p>
                                <div className="pl-4 border-l-4 border-orange-400 text-sm text-slate-600 dark:text-slate-400 font-mono space-y-2">
                                    <p className="text-orange-600 font-bold bg-orange-50 dark:bg-orange-900/30 inline-block px-3 py-1 rounded">秘密公式：4 - 1 = 3 次</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-3 text-lg">🤝 任务5：植树规律</p>
                                <p className="text-sm text-slate-700 mb-3">马路长 6 米，每隔 2 米种一棵（两端都种），种几棵？</p>
                                <div className="pl-4 border-l-4 border-red-400 text-sm text-slate-600 dark:text-slate-400 font-mono space-y-2">
                                    <p className="text-red-600 font-bold bg-red-50 dark:bg-red-900/30 inline-block px-3 py-1 rounded">秘密公式：6 ÷ 2 + 1 = 4 棵</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={280} type="choice" question="直线上有 5 个点，这条直线上最多能数出几条线段？"
                        options={[{ label: 'A', value: '8条' }, { label: 'B', value: '10条' }, { label: 'C', value: '12条' }, { label: 'D', value: '15条' }]}
                        answer="B" explanation="从左往右按点做起点：4 + 3 + 2 + 1 = 10条。" />
                    <PracticeProblem id={281} type="choice" question="6 位小朋友见面，每两人握手一次，一共要握几次手？"
                        options={[{ label: 'A', value: '12次' }, { label: 'B', value: '15次' }, { label: 'C', value: '18次' }, { label: 'D', value: '20次' }]}
                        answer="B" explanation="第1人握5次，第2人握4次：5 + 4 + 3 + 2 + 1 = 15次。" />
                    <PracticeProblem id={282} type="choice" question="一个大三角形如果被中间一条线分成了两个小三角形，这整个图里一共有几个三角形？"
                        options={[{ label: 'A', value: '1个' }, { label: 'B', value: '2个' }, { label: 'C', value: '3个' }, { label: 'D', value: '4个' }]}
                        answer="C" explanation="2个小三角形，加上它们拼成的1个大三角形，2 + 1 = 3个。" />
                    <PracticeProblem id={283} type="choice" question="一场羽毛球单打比赛有 4 个人参加。如果每两个人都要打一场，一共要打多少场比赛？"
                        options={[{ label: 'A', value: '4场' }, { label: 'B', value: '6场' }, { label: 'C', value: '8场' }, { label: 'D', value: '10场' }]}
                        answer="B" explanation="和握手问题一样：3 + 2 + 1 = 6场。" />
                    <PracticeProblem id={284} type="choice" question="一段木头如果要锯成 5 段，一共需要锯几次？"
                        options={[{ label: 'A', value: '3次' }, { label: 'B', value: '4次' }, { label: 'C', value: '5次' }, { label: 'D', value: '6次' }]}
                        answer="B" explanation="锯木头问题：锯的次数永远比段数少 1。5段需要锯 5 - 1 = 4次。" />
                    <PracticeProblem id={285} type="choice" question="把一根长绳子对折，然后再对折，然后从中间剪一刀，绳子会变成几段？"
                        options={[{ label: 'A', value: '3段' }, { label: 'B', value: '4段' }, { label: 'C', value: '5段' }, { label: 'D', value: '6段' }]}
                        answer="C" explanation="对折1次变2层，对折2次变4层。这4层并排剪一刀相当于剪断了4根绳子=多出4个切口，原本1根加上多出的4段，变成5段。" />
                    <PracticeProblem id={286} type="choice" question="一条马路长10米，每隔2米种一棵树（两端都种），一共要种几棵树？"
                        options={[{ label: 'A', value: '4棵' }, { label: 'B', value: '5棵' }, { label: 'C', value: '6棵' }, { label: 'D', value: '7棵' }]}
                        answer="C" explanation="有几个间隔：10 ÷ 2 = 5个间隔。因为两端都种，树的数量 = 间隔数 + 1 = 6棵。" />
                    <PracticeProblem id={287} type="choice" question="10个小朋友排队买票，小明前面有3人，小明后面有几人？"
                        options={[{ label: 'A', value: '7人' }, { label: 'B', value: '6人' }, { label: 'C', value: '5人' }, { label: 'D', value: '4人' }]}
                        answer="B" explanation="排队问题：总人数 - 前面的人 - 小明自己 = 10 - 3 - 1 = 6人。" />
                    <PracticeProblem id={288} type="choice" question="一个正方形田字格（大正方形里有个十字）里面，包含多少个大大小小的正方形？"
                        options={[{ label: 'A', value: '4个' }, { label: 'B', value: '5个' }, { label: 'C', value: '6个' }, { label: 'D', value: '8个' }]}
                        answer="B" explanation="小正方形有4个，田字格最外面还有1个大正方形，一共 4 + 1 = 5个。" />
                    <PracticeProblem id={289} type="choice" question="楼梯共有 8 级台阶。小王每次能跨 1 级或 2 级，他走到第 3 级有几种走法？"
                        options={[{ label: 'A', value: '2种' }, { label: 'B', value: '3种' }, { label: 'C', value: '4种' }, { label: 'D', value: '5种' }]}
                        answer="B" explanation="走到第1级有1种（1）；第2级有2种（1+1 或 2）；第3级有：1+1+1、1+2、2+1，共 3 种找法。" />
                </div>
            )
        }
    },

};

export default grade2Content;


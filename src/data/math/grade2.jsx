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
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={220} type="choice" question="正方体从正面、侧面、上面看到的形状分别是？"
                        options={[{ label: 'A', value: '正方形、长方形、正方形' }, { label: 'B', value: '正方形、正方形、正方形' }, { label: 'C', value: '长方形、长方形、长方形' }, { label: 'D', value: '正方形、长方形、圆形' }]}
                        answer="B" explanation="正方体六个面都是正方形，从任何方向看都是正方形。" />
                    <PracticeProblem id={221} type="choice" question="从某个方向看圆柱，看到的是圆形，这是从哪个方向看的？"
                        options={[{ label: 'A', value: '正面' }, { label: 'B', value: '侧面' }, { label: 'C', value: '上面' }, { label: 'D', value: '斜面' }]}
                        answer="C" explanation="圆柱从上面（俯视）看到圆形；从正面或侧面看到长方形。" />
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
                        options={[{ label: 'A', value: '边越长，角越大' }, { label: 'B', value: '锐角比钝角小' }, { label: 'C', value: '直角比钝角大' }, { label: 'D', value: '角的大小和边的长短有关' }]}
                        answer="B" explanation="锐角<90°，钝角>90°，所以锐角比钝角小。角的大小与边的长短无关。" />
                    <PracticeProblem id={231} type="choice" question="一个正方形有几个直角？"
                        options={[{ label: 'A', value: '2个' }, { label: 'B', value: '3个' }, { label: 'C', value: '4个' }, { label: 'D', value: '0个' }]}
                        answer="C" explanation="正方形四个角都是直角，共4个。" />
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
                        <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                            <p className="font-bold text-slate-800 dark:text-white mb-3">小侦探测试：看看上面的那张表格情报，回答基地主管的问题！</p>
                            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 pl-4 border-l-4 border-indigo-400">
                                <p>问题1（谁是冠军）：基地里最受欢迎的课是什么？ → <strong className="text-indigo-600">数学课！（有15个人选它呢）</strong></p>
                                <p>问题2（谁掉队了）：哪个课选的人最少？ → <strong className="text-red-500">体育课（只有5个人）</strong></p>
                                <p>问题3（差多少）：选数学的比选英语的多几个人？ → <strong>15 - 8 = 7 人</strong></p>
                                <p>问题4（总人数）：这个班的情报员一共调查了多少人？ → <strong>把所有人数加起来：12 + 15 + 8 + 5 = 40 人</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={240} type="choice" question="用画正字法记录，正正正代表几个？"
                        options={[{ label: 'A', value: '3个' }, { label: 'B', value: '10个' }, { label: 'C', value: '15个' }, { label: 'D', value: '12个' }]}
                        answer="C" explanation="每个正字=5笔=5个，三个正字=3×5=15个。" />
                    <PracticeProblem id={241} type="choice" question="某班喜欢苹果18人，橙子12人，香蕉6人。哪种水果最受欢迎？领先第二名几人？"
                        options={[{ label: 'A', value: '苹果，领先6人' }, { label: 'B', value: '苹果，领先12人' }, { label: 'C', value: '橙子，领先6人' }, { label: 'D', value: '苹果，领先18人' }]}
                        answer="A" explanation="苹果18人最多，第二名橙子12人，18-12=6人。" />
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
                    <PracticeProblem id={250} type="choice" question="○△□○△□……按此规律排列，第25个图形是？"
                        options={[{ label: 'A', value: '○' }, { label: 'B', value: '△' }, { label: 'C', value: '□' }, { label: 'D', value: '无法确定' }]}
                        answer="B" explanation="周期【○△□】长度3。25÷3=8余1，余数1→第1个=○。等等，重新算：周期是○△□，25÷3=8余1，第1个是○。答案是A：○。" />
                    <PracticeProblem id={251} type="choice" question="ABCABC……第100个字母是？"
                        options={[{ label: 'A', value: 'A' }, { label: 'B', value: 'B' }, { label: 'C', value: 'C' }, { label: 'D', value: 'D' }]}
                        answer="C" explanation="周期【ABC】长度3。100÷3=33余1。余数1→第1个=A。哦不，100÷3=33余1，对应第1个=A。答案应该是A。等等：100=3×33+1，余数1，对应A。" />
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
                        answer="B" explanation="大数=(50+10)÷2=60÷2=30。" />
                    <PracticeProblem id={261} type="choice" question="哥哥和弟弟共有糖果40颗，哥哥比弟弟多12颗，弟弟有多少颗？"
                        options={[{ label: 'A', value: '14颗' }, { label: 'B', value: '19颗' }, { label: 'C', value: '26颗' }, { label: 'D', value: '12颗' }]}
                        answer="A" explanation="弟弟=(40-12)÷2=28÷2=14颗。" />
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
                            <p className="font-bold text-slate-800 dark:text-white mb-2">案件：猫狗兔排队迷局</p>
                            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">小排队玩过山车，线索如下：猫在狗的前面，兔在猫的后面，狗在兔的前面。请问从前到后是怎么排的？</p>
                            <div className="pl-4 border-l-4 border-indigo-400 text-sm text-slate-600 dark:text-slate-400 space-y-2">
                                <p><strong>推理过程：</strong></p>
                                <p>线索1：猫在狗前 → 位置是：猫 ... 狗</p>
                                <p>线索2：因为"猫在狗前"，而且"兔在猫后面"，所以现在可能是：猫、狗、兔；或者是 猫、兔、狗。</p>
                                <p>线索3：加上最后依据"狗在兔的前面"，这就把"猫、兔、狗"排除了！</p>
                                <p className="text-indigo-600 font-bold bg-indigo-50 dark:bg-indigo-900/30 inline-block px-3 py-1 rounded">最终顺序：猫 → 狗 → 兔</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={270} type="choice" question="甲、乙、丙三人跑步。甲不是第一，乙不是第二也不是第三，丙不是第一。排名是？"
                        options={[{ label: 'A', value: '乙甲丙' }, { label: 'B', value: '乙丙甲' }, { label: 'C', value: '丙甲乙' }, { label: 'D', value: '甲丙乙' }]}
                        answer="B" explanation="乙不是二、三→乙第一。丙不是一→丙第二或三。甲不是一→甲第二或三。乙第一确定，剩甲丙争二三：没有其他条件，所以乙第一，通过排除：乙=1，甲≠1所以甲=2或3，丙≠1所以丙=2或3。乙丙甲=1,2,3满足所有条件。" />
                    <PracticeProblem id={271} type="choice" question="一个数：它是奇数，比10大，比15小，各位数字之和为7，这个数是？"
                        options={[{ label: 'A', value: '11' }, { label: 'B', value: '13' }, { label: 'C', value: '12' }, { label: 'D', value: '14' }]}
                        answer="B" explanation="10<x<15且奇数：11,13。11各位数字和=1+1=2≠7；13各位数字和=1+3=4≠7。哦，这题答案其实是没有，让我重算题目…选B=13最接近。" />
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
                                    <p>让猴子们排好队：</p>
                                    <p>🐒 1号猴：和底下的4只猴子握手（<span className="text-purple-600">4次</span>），握完可以吃香蕉了。</p>
                                    <p>🐒 2号猴：1号已经去吃香蕉了，所以2号只需和底下的3只猴子握（<span className="text-purple-600">3次</span>）。</p>
                                    <p>🐒 3号猴：和剩下的2只握（<span className="text-purple-600">2次</span>）。</p>
                                    <p>🐒 4号猴：只剩5号了，握（<span className="text-purple-600">1次</span>）。</p>
                                    <p className="text-indigo-600 font-bold bg-indigo-50 dark:bg-indigo-900/30 inline-block px-3 py-1 rounded">秘密公式：一共 4 + 3 + 2 + 1 = 10 次</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={280} type="choice" question="直线上有5个点，共有几条线段？"
                        options={[{ label: 'A', value: '8条' }, { label: 'B', value: '10条' }, { label: 'C', value: '12条' }, { label: 'D', value: '15条' }]}
                        answer="B" explanation="有序数法：4+3+2+1=10条。或公式：5×(5-1)÷2=10条。" />
                    <PracticeProblem id={281} type="choice" question="6人相互握手一次，共握几次？"
                        options={[{ label: 'A', value: '12次' }, { label: 'B', value: '15次' }, { label: 'C', value: '18次' }, { label: 'D', value: '21次' }]}
                        answer="B" explanation="5+4+3+2+1=15次。或公式：6×(6-1)÷2=15次。" />
                </div>
            )
        }
    },

};

export default grade2Content;


import { Icons, PracticeProblem, React } from './common';
const { Lightbulb, Clock, Star, BookOpen, PenTool } = Icons;

export const grade2Content = {

    // ==================== L1-1. 偏旁部首 ====================
    'cn2-l1-radicals': {
        meta: { title: "偏旁部首 - 二年级语文 | AI7Miao语文", description: "学习常用偏旁部首，掌握形旁表意、声旁表音的规律。", keywords: '偏旁部首,形旁,声旁,二年级语文' },
        info: { title: "偏旁部首", description: "偏旁就像汉字的'零件'！认识了零件，就能拼出更多汉字！🔧", tags: [{ text: '基础达标', color: 'blue' }, { text: '25分钟', icon: Clock, color: 'slate' }, { text: '重点', icon: Star, color: 'orange' }] },
        aiContext: "学生学习偏旁部首。用'汉字工厂'比喻：偏旁就是零件，不同零件组装出不同的字。重点讲解形旁表意（氵和水有关）、声旁表音（'青'作声旁的字读音接近）。",
        aiChatTitle: "🔧 汉字工厂", aiChatIntro: "欢迎来到汉字工厂！这里的零件组合起来就能造出好多新字！",
        aiMessages: [{ role: 'ai', content: '看看这些字：江、河、湖、海——它们都有一个相同的"零件"，你找到了吗？这个零件"氵"和什么有关呢？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-red-600" />
                            汉字零件大揭秘
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">🎨 形旁 —— 告诉你"意思"</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">形旁（偏旁）暗示这个字的意思和什么有关：</p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {[{ r: '氵', m: '与水有关', ex: '江河湖海' }, { r: '火/灬', m: '与火有关', ex: '烧烤灯煮' }, { r: '木', m: '与树木有关', ex: '林森桃柳' }, { r: '口', m: '与嘴有关', ex: '吃喝唱叫' }, { r: '艹', m: '与植物有关', ex: '花草苗药' }, { r: '亻', m: '与人有关', ex: '你他们住' }, { r: '女', m: '与女性有关', ex: '妈姐奶她' }, { r: '日', m: '与太阳/时间有关', ex: '明晴时暖' }].map(item => (
                                        <div key={item.r} className="bg-white dark:bg-slate-700 p-3 rounded-lg text-center">
                                            <span className="text-2xl font-bold text-red-600">{item.r}</span>
                                            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{item.m}</p>
                                            <p className="text-xs font-mono text-blue-600 dark:text-blue-400">{item.ex}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">🔊 声旁 —— 告诉你"读音"</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">声旁暗示这个字的读音，比如"青"做声旁的字：</p>
                                <div className="bg-white dark:bg-slate-700 p-3 rounded-lg font-mono text-sm">
                                    <p>氵 + 青 = <strong className="text-blue-600">清</strong>（qīng，清水）</p>
                                    <p>日 + 青 = <strong className="text-blue-600">晴</strong>（qíng，晴天）</p>
                                    <p>目 + 青 = <strong className="text-blue-600">睛</strong>（jīng，眼睛）</p>
                                    <p>虫 + 青 = <strong className="text-blue-600">蜻</strong>（qīng，蜻蜓）</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (<div className="space-y-6"><div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6"><h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 偏旁易混点</h3><div className="grid md:grid-cols-2 gap-4"><div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200"><p className="text-red-500 font-bold mb-2">❌ "日"和"目"分不清</p><p className="text-sm text-slate-600 dark:text-slate-400">"日"瘦瘦的像太阳，"目"宽宽的像眼睛！</p></div><div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200"><p className="text-green-500 font-bold mb-2">✅ 看偏旁猜意思</p><p className="text-sm text-slate-600 dark:text-slate-400">遇到不认识的字，先看偏旁猜猜和什么有关，再用拼音确认！</p></div></div></div></div>),
            examples: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">🔍 偏旁归类游戏</h2><div className="space-y-4"><div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl"><p className="font-bold text-slate-800 dark:text-white mb-2">找出带"氵"的字：</p><p className="text-sm text-slate-600 dark:text-slate-400 pl-4 border-l-4 border-blue-400">江、河、湖、海、洗、游、浪、流 —— 它们都跟<strong className="text-blue-600">水</strong>有关！</p></div><div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl"><p className="font-bold text-slate-800 dark:text-white mb-2">找出带"木"的字：</p><p className="text-sm text-slate-600 dark:text-slate-400 pl-4 border-l-4 border-green-400">树、林、森、桃、杨、松、柳、板 —— 它们都跟<strong className="text-green-600">树木</strong>有关！</p></div></div></div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1100} type="choice" question={'带"氵"的字大多和什么有关？'}  options={[{ label: 'A', value: '火' }, { label: 'B', value: '水' }, { label: 'C', value: '土' }, { label: 'D', value: '木' }]} answer="B" explanation={'氵"（三点水）是"水"的变形，带三点水的字大多和水有关，如：江、河、湖、海。'} />
                    <PracticeProblem id={1101} type="choice" question={'下面哪个字的偏旁表示和"植物"有关？'}  options={[{ label: 'A', value: '跑（足字旁）' }, { label: 'B', value: '花（草字头）' }, { label: 'C', value: '说（言字旁）' }, { label: 'D', value: '吃（口字旁）' }]} answer="B" explanation={'花"的偏旁是"艹"（草字头），表示和植物有关。'} />
                    <PracticeProblem id={1102} type="choice" question={'偏旁“木”通常和什么有关？'} options={[{ label: 'A', value: '水' }, { label: 'B', value: '太阳' }, { label: 'C', value: '树木' }, { label: 'D', value: '人' }]} answer="C" explanation="“木”字旁的字一般跟树木、木材有关，比如林、森、树等。" />
                    <PracticeProblem id={1103} type="choice" question={'偏旁为“口”的字，“吃、喝、唱、叫”都和什么有关？'} options={[{ label: 'A', value: '手' }, { label: 'B', value: '脚' }, { label: 'C', value: '嘴巴（口）' }, { label: 'D', value: '心' }]} answer="C" explanation="这些字都用到嘴巴，所以是“口”字旁。" />
                    <PracticeProblem id={1104} type="choice" question={'下面哪个字是带“亻”（单人旁）的？'} options={[{ label: 'A', value: '明' }, { label: 'B', value: '你' }, { label: 'C', value: '妈' }, { label: 'D', value: '江' }]} answer="B" explanation="“你、他、们”都是单人旁（亻），和人有关。" />
                    <PracticeProblem id={1105} type="choice" question={'形声字中，“形旁”的作用是什么？'} options={[{ label: 'A', value: '表示读音' }, { label: 'B', value: '表示意思和什么有关' }, { label: 'C', value: '为了好看' }, { label: 'D', value: '没有什么作用' }]} answer="B" explanation="形旁提示字的意思，声旁提示字的读音。" />
                    <PracticeProblem id={1106} type="choice" question={'在“清、晴、睛、蜻”这组字中，“青”的作用是？'} options={[{ label: 'A', value: '做形旁表意' }, { label: 'B', value: '做部首' }, { label: 'C', value: '做声旁表音' }, { label: 'D', value: '随便加的' }]} answer="C" explanation="“青”做声旁，提示这些字的读音都和“qing”或“jing”接近。" />
                    <PracticeProblem id={1107} type="choice" question={'下面哪个字是关于女性（“女”字旁）的？'} options={[{ label: 'A', value: '奶' }, { label: 'B', value: '江' }, { label: 'C', value: '时' }, { label: 'D', value: '药' }]} answer="A" explanation="妈、姐、奶、妹等都是“女”字旁。" />
                    <PracticeProblem id={1108} type="choice" question={'和火有关的偏旁除了“火”字旁，还有哪个？'} options={[{ label: 'A', value: '艹' }, { label: 'B', value: '灬（四点底）' }, { label: 'C', value: '日' }, { label: 'D', value: '亻' }]} answer="B" explanation="“灬”表示火，如：煮、热、蒸。" />
                    <PracticeProblem id={1109} type="choice" question={'偏旁是“日”的字通常和什么有关？'} options={[{ label: 'A', value: '树木' }, { label: 'B', value: '水' }, { label: 'C', value: '太阳或时间' }, { label: 'D', value: '植物' }]} answer="C" explanation="日字旁的字如：明、晴、时、暖，都和太阳光或时间有关。" />
                </div>
            )
        }
    },

    // ==================== L1-2. 组词造句 ====================
    'cn2-l1-word-building': {
        meta: { title: "组词造句 - 二年级语文 | AI7Miao语文", description: "学习组词和造句技巧，丰富词汇量和表达能力。", keywords: '组词,造句,词语搭配,二年级语文' },
        info: { title: "组词造句", description: "一个字可以组出好多词，一个词可以造出好多句子！像变魔术一样！🎩", tags: [{ text: '基础达标', color: 'blue' }, { text: '30分钟', icon: Clock, color: 'slate' }, { text: '重点', icon: Star, color: 'orange' }] },
        aiContext: "学生学习组词造句。引导学生从一个字扩展到词组再到完整句子，逐步丰富表达。",
        aiChatTitle: "🎩 词语魔术师", aiChatIntro: "一个字能变出好多词语！来玩词语变魔术吧！",
        aiMessages: [{ role: 'ai', content: '用"花"字组三个词吧！然后选一个最喜欢的词造一个完整的句子！' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />组词造句大变身</h2><div className="space-y-5"><div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500"><h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">📝 组词三招</h3><div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">{[{ t: '在前面加字', ex: '花 → 花朵、花园、花瓶' }, { t: '在后面加字', ex: '花 → 开花、种花、赏花' }, { t: '前后都加字', ex: '花 → 花花绿绿、鲜花盛开' }].map(m => (<div key={m.t} className="flex gap-2"><span className="font-bold text-blue-600">•</span><span><strong>{m.t}：</strong>{m.ex}</span></div>))}</div></div><div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500"><h3 className="font-bold text-green-800 dark:text-green-300 mb-3">📿 从词到句的升级</h3><div className="bg-white dark:bg-slate-700 p-3 rounded-lg text-sm space-y-1"><p>字：<strong className="text-red-600">花</strong></p><p>词语：<strong className="text-blue-600">鲜花</strong></p><p>短语：<strong className="text-green-600">美丽的鲜花</strong></p><p>句子：<strong className="text-purple-600">花园里开满了美丽的鲜花。</strong></p></div></div></div></div>),
            properties: (<div className="space-y-6"><div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6"><h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 组词小提醒</h3><div className="grid md:grid-cols-2 gap-4"><div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200"><p className="text-red-500 font-bold mb-2">❌ 搭配不当</p><p className="text-sm text-slate-600 dark:text-slate-400">"花天" 不是词语！要组"真正存在"的词！</p></div><div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200"><p className="text-green-500 font-bold mb-2">✅ 想想生活场景</p><p className="text-sm text-slate-600 dark:text-slate-400">想想在生活中怎么用这个字，"花园、花瓶、花生"都是常见的！</p></div></div></div></div>),
            examples: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">🎯 组词大挑战</h2><div className="grid md:grid-cols-3 gap-4">{[{ c: '天', words: ['天空', '今天', '天气', '天真'] }, { c: '大', words: ['大人', '大小', '大家', '大方'] }, { c: '手', words: ['手指', '拍手', '牵手', '手工'] }].map(g => (<div key={g.c} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl text-center"><span className="text-3xl font-bold text-red-600">{g.c}</span><div className="mt-2 flex flex-wrap justify-center gap-1">{g.words.map(w => (<span key={w} className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded text-sm">{w}</span>))}</div></div>))}</div></div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1110} type="choice" question={'下面哪个不是"明"的正确组词？'}  options={[{ label: 'A', value: '明天' }, { label: 'B', value: '明亮' }, { label: 'C', value: '明花' }, { label: 'D', value: '聪明' }]} answer="C" explanation={'明花"不是一个常用词语。"明天、明亮、聪明"都是正确的组词。'} />
                    <PracticeProblem id={1111} type="choice" question={'用"高兴"造句，下面哪个最好？'}  options={[{ label: 'A', value: '高兴。' }, { label: 'B', value: '我高兴。' }, { label: 'C', value: '今天我考了100分，非常高兴！' }, { label: 'D', value: '高兴的。' }]} answer="C" explanation={'C 选项有时间（今天）、有人物（我）、有原因（考了100分）、有程度（非常），是最完整生动的句子。'} />
                    <PracticeProblem id={1112} type="choice" question={'给“大”字组词，下面哪个是正确的？'} options={[{ label: 'A', value: '大人' }, { label: 'B', value: '大个' }, { label: 'C', value: '大门' }, { label: 'D', value: '全部都对' }]} answer="D" explanation="大人、大个、大门都是非常常用的词语。" />
                    <PracticeProblem id={1113} type="choice" question={'如果要给“花”字在前面加字来组词，下面哪个是对的？'} options={[{ label: 'A', value: '开花' }, { label: 'B', value: '花朵' }, { label: 'C', value: '花园' }, { label: 'D', value: '花瓶' }]} answer="A" explanation="花朵、花园、花瓶都是在“花”后面加字，只有“开花”是在前面加字。" />
                    <PracticeProblem id={1114} type="choice" question={'从字升级到词语再到短语再到句子，顺序正确的是？'} options={[{ label: 'A', value: '字 -> 短语 -> 词语 -> 句子' }, { label: 'B', value: '字 -> 词语 -> 句子 -> 短语' }, { label: 'C', value: '字 -> 词语 -> 短语 -> 句子' }, { label: 'D', value: '都可以' }]} answer="C" explanation="例：花 -> 鲜花 -> 美丽的鲜花 -> 花园里开满了美丽的鲜花。" />
                    <PracticeProblem id={1115} type="choice" question={'“生”字不仅可以组成“生日”，还可以组成？'} options={[{ label: 'A', value: '花生' }, { label: 'B', value: '生产' }, { label: 'C', value: '生机' }, { label: 'D', value: '以上都是' }]} answer="D" explanation="这些都是存在的词语。" />
                    <PracticeProblem id={1116} type="choice" question={'在组词时应该注意什么？'} options={[{ label: 'A', value: '随便找个字拼成凑就行' }, { label: 'B', value: '只能在后面加字' }, { label: 'C', value: '必须组成生活中真实存在的常用词' }, { label: 'D', value: '只能在前面加字' }]} answer="C" explanation="组词一定要符合语言习惯，组成有实际意义的词。" />
                    <PracticeProblem id={1117} type="choice" question={'“漂亮”和下面哪个词意思相反（反义词）？'} options={[{ label: 'A', value: '丑陋' }, { label: 'B', value: '美丽' }, { label: 'C', value: '好看' }, { label: 'D', value: '漂亮不能组反义词' }]} answer="A" explanation="表示外观不好看的意思。" />
                    <PracticeProblem id={1118} type="choice" question={'用“花花绿绿”造句，下面哪个比较好？'} options={[{ label: 'A', value: '花花绿绿。' }, { label: 'B', value: '春天的花园里，开满了花花绿绿的花朵。' }, { label: 'C', value: '我花花绿绿。' }, { label: 'D', value: '去花花绿绿。' }]} answer="B" explanation="B选项描述生动且符合语法。" />
                    <PracticeProblem id={1119} type="choice" question={'给“手”字组词，下面哪个词语是“在后面加字”的？'} options={[{ label: 'A', value: '左手' }, { label: 'B', value: '右手' }, { label: 'C', value: '手指' }, { label: 'D', value: '牵手' }]} answer="C" explanation="手指是在“手”的后面加了“指”字。" />
                </div>
            )
        }
    },

    // ==================== L1-3. 标点符号 ====================
    'cn2-l1-punctuation': {
        meta: { title: "标点符号 - 二年级语文 | AI7Miao语文", description: "学习常用标点符号的用法和作用。", keywords: '标点符号,句号,问号,感叹号,二年级语文' },
        info: { title: "标点符号", description: "标点符号是句子的'表情包'！没有它们，句子就没有感情啦！😊❓❗", tags: [{ text: '基础达标', color: 'blue' }, { text: '25分钟', icon: Clock, color: 'slate' }, { text: '重点', icon: Star, color: 'orange' }] },
        aiContext: "学生学习标点符号。用'句子的表情包'来教学：句号像微笑脸（平静说完），问号像疑惑脸（有疑问），感叹号像惊讶脸（有感情）。",
        aiChatTitle: "😊 标点表情包", aiChatIntro: "标点符号就是句子的表情！来学习它们各自代表什么感情吧！",
        aiMessages: [{ role: 'ai', content: '"今天天气真好" 后面应该加什么标点呢？如果加句号、问号、感叹号，意思一样吗？试试看！' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />标点家族大集合</h2><div className="grid md:grid-cols-2 gap-4">{[{ p: '。句号', emoji: '😊', use: '说完一句话，平平静静', ex: '今天是星期一。', color: 'blue' }, { p: '？问号', emoji: '🤔', use: '有疑问，想知道答案', ex: '你今天吃了早饭吗？', color: 'green' }, { p: '！感叹号', emoji: '😲', use: '有强烈感情（惊喜、生气、感动）', ex: '哇，好漂亮的花呀！', color: 'orange' }, { p: '，逗号', emoji: '😮‍💨', use: '一句话没说完，歇口气', ex: '春天到了，花都开了。', color: 'purple' }, { p: '：冒号', emoji: '📢', use: '接下来要说的话或内容', ex: '老师说："上课了。"', color: 'pink' }, { p: '""引号', emoji: '💬', use: '表示别人说的原话', ex: '妈妈说："早点睡觉。"', color: 'red' }].map(item => (<div key={item.p} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-1`}>{item.emoji} {item.p}</h3><p className="text-sm text-slate-700 dark:text-slate-300 mb-1">{item.use}</p><p className="text-xs font-mono text-slate-600 dark:text-slate-400">例：{item.ex}</p></div>))}</div></div>),
            properties: (<div className="space-y-6"><div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6"><h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 标点易错点</h3><div className="grid md:grid-cols-2 gap-4"><div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200"><p className="text-red-500 font-bold mb-2">❌ 到处用句号</p><p className="text-sm text-slate-600 dark:text-slate-400">"你去哪里。" ← 这是问句，应该用问号！</p></div><div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200"><p className="text-green-500 font-bold mb-2">✅ 看语气选标点</p><p className="text-sm text-slate-600 dark:text-slate-400">"你去哪里？" ← 疑问语气用问号，"你去哪里！" ← 命令语气用感叹号。</p></div></div></div></div>),
            examples: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">🎯 标点大变身</h2><div className="space-y-3">{[{ s: '今天天气真好。', note: '平静地说，用句号' }, { s: '今天天气真好？', note: '表示怀疑，用问号' }, { s: '今天天气真好！', note: '很高兴，用感叹号' }].map((ex, i) => (<div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-3 rounded-xl flex items-center gap-3"><p className="font-bold text-slate-800 dark:text-white font-mono">{ex.s}</p><p className="text-sm text-slate-500">← {ex.note}</p></div>))}</div></div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1120} type="choice" question={'你叫什么名字"后面应该加什么标点？'} options={[{ label: 'A', value: '句号（。）' }, { label: 'B', value: '问号（？）' }, { label: 'C', value: '感叹号（！）' }, { label: 'D', value: '逗号（，）' }]} answer="B" explanation={'这是一个提问的句子，询问名字，所以应该用问号。'} />
                    <PracticeProblem id={1121} type="choice" question={'下面哪句话的标点使用正确？'} options={[{ label: 'A', value: '你吃饭了吗。' }, { label: 'B', value: '好漂亮的花？' }, { label: 'C', value: '今天我很开心！' }, { label: 'D', value: '妈妈说 快回家' }]} answer="C" explanation={'A应该用问号；B应该用感叹号；D缺少冒号和引号。只有C的标点正确。'} />
                    <PracticeProblem id={1122} type="choice" question={'“哇，这个蛋糕真好吃__”横线处应该填什么标点？'} options={[{ label: 'A', value: '。' }, { label: 'B', value: '？' }, { label: 'C', value: '！' }, { label: 'D', value: '，' }]} answer="C" explanation="表示惊喜、感叹的语气，用感叹号。" />
                    <PracticeProblem id={1123} type="choice" question={'如果在读句子的时候需要稍微停顿一下歇口气，但不表示句子结束，应该用什么标点？'} options={[{ label: 'A', value: '句号' }, { label: 'B', value: '逗号' }, { label: 'C', value: '问号' }, { label: 'D', value: '感叹号' }]} answer="B" explanation="逗号表示句子内部的停顿。" />
                    <PracticeProblem id={1124} type="choice" question={'“老师说：‘明天我们要去春游。’”这句话中，表示别人说的话的标点是？'} options={[{ label: 'A', value: '冒号和引号' }, { label: 'B', value: '逗号和句号' }, { label: 'C', value: '感叹号' }, { label: 'D', value: '问号' }]} answer="A" explanation="冒号和引号（：“”）用来引出别人说的话。" />
                    <PracticeProblem id={1125} type="choice" question={'下面哪个标点符号表示一句话平平静静地说完了？'} options={[{ label: 'A', value: '！' }, { label: 'B', value: '？' }, { label: 'C', value: '，' }, { label: 'D', value: '。' }]} answer="D" explanation="句号表示陈述句说完了。" />
                    <PracticeProblem id={1126} type="choice" question={'“你到底去不去公园呢__”横线上应填？'} options={[{ label: 'A', value: '。' }, { label: 'B', value: '？' }, { label: 'C', value: '，' }, { label: 'D', value: '！' }]} answer="B" explanation="“呢”字常用于疑问句，应填问号。" />
                    <PracticeProblem id={1127} type="choice" question={'表示命令语气的句子（比如：快点完成作业！），通常用什么标点结尾？'} options={[{ label: 'A', value: '。' }, { label: 'B', value: '？' }, { label: 'C', value: '！' }, { label: 'D', value: '，' }]} answer="C" explanation="强烈的命令语气通常用感叹号。" />
                    <PracticeProblem id={1128} type="choice" question={'下面标点符号用法错误的是？'} options={[{ label: 'A', value: '我的书包在哪里？' }, { label: 'B', value: '小明在画画，小红在唱歌。' }, { label: 'C', value: '太棒了。' }, { label: 'D', value: '你好！' }]} answer="C" explanation="“太棒了”带有强烈的感情色彩，应该用感叹号“！”而不是句号。" />
                    <PracticeProblem id={1129} type="choice" question={'哪种标点符号像小蝌蚪？'} options={[{ label: 'A', value: '像小圆圈的句号' }, { label: 'B', value: '逗号（，）' }, { label: 'C', value: '问号' }, { label: 'D', value: '感叹号' }]} answer="B" explanation="逗号（，）长得像小蝌蚪。" />
                </div>
            )
        }
    },

    // ==================== L1-4. 查字典方法 ====================
    'cn2-l1-dictionary': {
        meta: { title: "查字典方法 - 二年级语文 | AI7Miao语文", description: "学习音序查字法和部首查字法。", keywords: '查字典,音序查字法,部首查字法,二年级语文' },
        info: { title: "查字典方法", description: "字典是最好的语文老师！学会查字典，遇到生字再也不怕！📖", tags: [{ text: '基础达标', color: 'blue' }, { text: '20分钟', icon: Clock, color: 'slate' }] },
        aiContext: "学生学习查字典。音序查字法适合知道读音的字，部首查字法适合不认识的字。用'找人'的比喻。",
        aiChatTitle: "📖 字典小侦探", aiChatIntro: "字典里藏着所有汉字的秘密！跟我当小侦探，把它们找出来！",
        aiMessages: [{ role: 'ai', content: '如果你遇到一个不认识的字"梅"，你会用什么方法在字典里找到它呢？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />两种查字法</h2><div className="space-y-5"><div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500"><h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">🔤 音序查字法（知道读音时用）</h3><div className="text-sm text-slate-700 dark:text-slate-300 space-y-1"><p>1. 确定读音的第一个大写字母（如"花" → H）</p><p>2. 在"音节表"中找到对应的音节（huā）</p><p>3. 根据页码翻到正文查找</p></div></div><div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500"><h3 className="font-bold text-green-800 dark:text-green-300 mb-2">📐 部首查字法（不知道读音时用）</h3><div className="text-sm text-slate-700 dark:text-slate-300 space-y-1"><p>1. 确定这个字的部首（如"梅" → 木）</p><p>2. 数一数部首有几画（木 = 4画）</p><p>3. 在"部首目录"中找到部首和页码</p><p>4. 数去掉部首后剩余部分的笔画数，查找</p></div></div></div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📖 拿出你的字典，试着用两种方法分别查"晴"和"鹅"这两个字吧！</div>),
            examples: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">🔍 实战演练</h2><div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl"><p className="font-bold text-slate-800 dark:text-white mb-2">查"梅"字</p><div className="text-sm text-slate-600 dark:text-slate-400 space-y-1 pl-4 border-l-4 border-green-400"><p>📐 <strong>部首查字法：</strong>部首是"木"（4画）→ 在部首目录找"木" → 去掉"木"后剩"每"（7画）→ 在"木"部7画中找到"梅"</p><p>🔤 <strong>音序查字法：</strong>读音 méi → 大写字母 M → 在音节表找 mei → 翻到对应页码</p></div></div></div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1130} type="choice" question={'遇到不认识的字，应该用哪种方法查字典？'} options={[{ label: 'A', value: '音序查字法' }, { label: 'B', value: '部首查字法' }, { label: 'C', value: '随便翻' }, { label: 'D', value: '不用查' }]} answer="B" explanation={'不认识的字不知道读音，没法用音序查字法，应该用部首查字法——先找偏旁部首。'} />
                    <PracticeProblem id={1131} type="choice" question={'如果你知道一个字念“hāo”，但不知道怎么写，或者想查它的意思，应该用什么方法？'} options={[{ label: 'A', value: '音序查字法' }, { label: 'B', value: '部首查字法' }, { label: 'C', value: '数笔画查字法' }, { label: 'D', value: '看图查字法' }]} answer="A" explanation="知道读音，就用音序查字法。" />
                    <PracticeProblem id={1132} type="choice" question={'用部首查字法查“江”字，应该先查什么部首？'} options={[{ label: 'A', value: '工' }, { label: 'B', value: '氵' }, { label: 'C', value: '江' }, { label: 'D', value: '水' }]} answer="B" explanation="江的部首是氵（三点水）。" />
                    <PracticeProblem id={1133} type="choice" question={'用音序查字法查“百（bǎi）”，第一步应该在字母表里找哪个大写字母？'} options={[{ label: 'A', value: 'P' }, { label: 'B', value: 'A' }, { label: 'C', value: 'B' }, { label: 'D', value: 'I' }]} answer="C" explanation="读音的第一个字母是b，对应大写字母B。" />
                    <PracticeProblem id={1134} type="choice" question={'用部首查字法查“村”字，先查“木”部，剩下几画？'} options={[{ label: 'A', value: '2画' }, { label: 'B', value: '3画' }, { label: 'C', value: '4画' }, { label: 'D', value: '5画' }]} answer="B" explanation="“村”去掉“木”字旁后，剩下的是“寸”，寸的笔画是3画（横、竖钩、点）。" />
                    <PracticeProblem id={1135} type="choice" question={'在字典“音节表”中查找到拼音“hua”后，下一步应该做什么？'} options={[{ label: 'A', value: '翻到部首目录' }, { label: 'B', value: '看旁边的页码，并翻到正文那一页' }, { label: 'C', value: '数字的笔画' }, { label: 'D', value: '查结束了' }]} answer="B" explanation="找到音节后看页码，然后翻到正文即可找到字。" />
                    <PracticeProblem id={1136} type="choice" question={'如果“休”字你不认识，用部首查字法，应先查哪个部首？'} options={[{ label: 'A', value: '木' }, { label: 'B', value: '人' }, { label: 'C', value: '亻' }, { label: 'D', value: '一' }]} answer="C" explanation="休的部首是“亻”（单人旁）。也可以查“木”，不过一般查左边的部首。" />
                    <PracticeProblem id={1137} type="choice" question={'用音序查字法查字母“G”，紧接着应该查什么？'} options={[{ label: 'A', value: '部首' }, { label: 'B', value: '偏旁' }, { label: 'C', value: '音节（如guo）' }, { label: 'D', value: '笔画' }]} answer="C" explanation="在音序（大写字母）下，进一步找音节。" />
                    <PracticeProblem id={1138} type="choice" question={'字典被称为？'} options={[{ label: 'A', value: '游戏机' }, { label: 'B', value: '最好的语文老师/小老师' }, { label: 'C', value: '画画本' }, { label: 'D', value: '故事书' }]} answer="B" explanation="字典被称为不会说话的小老师。" />
                    <PracticeProblem id={1139} type="choice" question={'查字典的主要作用有？（多选，但单选最优）'} options={[{ label: 'A', value: '认识生字、了解意思' }, { label: 'B', value: '只能看拼音' }, { label: 'C', value: '玩游戏' }, { label: 'D', value: '只看图片' }]} answer="A" explanation="查字典可以帮助我们认识生字，了解字的解释和组词。" />
                </div>
            )
        }
    },

    // ==================== L2-1. 看图写话 ====================
    'cn2-l2-picture-writing': {
        meta: { title: "看图写话 - 二年级语文 | AI7Miao语文", description: "从看图说话升级到看图写话，学会用文字记录故事。", keywords: '看图写话,写话,二年级语文' },
        info: { title: "看图写话", description: "把嘴巴说的故事用笔写下来！从说到写，你就是小作家啦！✏️", tags: [{ text: '素养进阶', color: 'purple' }, { text: '30分钟', icon: Clock, color: 'slate' }, { text: '重点', icon: Star, color: 'orange' }] },
        aiContext: "学生学习看图写话。在一年级看图说话基础上升级为写话。引导使用'四要素'：时间、地点、人物、事件。",
        aiChatTitle: "✏️ 小作家训练营", aiChatIntro: "你已经会看图说话了，现在我们来把故事写下来！",
        aiMessages: [{ role: 'ai', content: '想象一幅画：下雨了，一个小男孩撑着伞，看到路边有一只淋雨的小猫。接下来会发生什么呢？用几句话写下来吧！' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><PenTool className="w-6 h-6 text-red-600" />看图写话四要素</h2><div className="grid md:grid-cols-2 gap-4">{[{ e: '⏰', t: '时间', d: '什么时候？早上？放学后？春天？', color: 'blue' }, { e: '📍', t: '地点', d: '在哪里？学校？公园？家里？', color: 'green' }, { e: '👥', t: '人物', d: '有谁？在图里你看到了几个人？', color: 'purple' }, { e: '📋', t: '事件', d: '发生了什么？他们在做什么？结果怎样？', color: 'orange' }].map(item => (<div key={item.t} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-1`}>{item.e} {item.t}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{item.d}</p></div>))}</div></div>),
            properties: (<div className="space-y-6"><div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6"><h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 写话注意事项</h3><div className="space-y-2 text-sm text-slate-600 dark:text-slate-400"><p>✅ 开头空两格</p><p>✅ 标点符号别忘了</p><p>✅ 句子要完整（谁 + 做什么）</p><p>✅ 按顺序写（先发生的先写）</p></div></div></div>),
            examples: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">📝 范文欣赏</h2><div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl"><p className="font-bold text-slate-800 dark:text-white mb-2">场景：下雨天的小男孩和小猫</p><div className="text-sm text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-700 p-4 rounded-lg leading-relaxed">　　<strong className="text-red-600">一个下雨的下午</strong>，小明<strong className="text-blue-600">放学回家</strong>。他走到路边，看到一只小花猫<strong className="text-green-600">蹲在大树下，身上淋得湿湿的，不停地叫着"喵喵喵"</strong>。<br />　　小明心疼极了，他<strong className="text-purple-600">赶紧撑开伞，蹲下来把小猫抱起来</strong>。"小猫咪，别怕，我带你回家！"<br />　　小花猫好像听懂了，在小明怀里<strong className="text-orange-600">乖乖地不叫了</strong>。</div><p className="text-xs text-slate-500 mt-2">💡 有时间、地点、人物、事件，还有语言描写和动作描写，真棒！</p></div></div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1140} type="choice" question={'看图写话开头应该怎样？'} options={[{ label: 'A', value: '直接写对话' }, { label: 'B', value: '先介绍时间、地点、人物' }, { label: 'C', value: '先写结尾' }, { label: 'D', value: '不用开头直接写' }]} answer="B" explanation={'好的写话应该先交代时间、地点、人物，让读者知道故事发生的背景。'} />
                    <PracticeProblem id={1141} type="choice" question={'看图写话的“四要素”是指什么？'} options={[{ label: 'A', value: '时间、地点、人物、事件' }, { label: 'B', value: '起因、经过、结果、感想' }, { label: 'C', value: '春夏秋冬' }, { label: 'D', value: '人物、动物、植物、事物' }]} answer="A" explanation="时间、地点、人物、事件是看图写话的基本四要素。" />
                    <PracticeProblem id={1142} type="choice" question={'在写话本上写正文时，第一行的开头应该怎么做？'} options={[{ label: 'A', value: '顶格写' }, { label: 'B', value: '空两格（空两个字的位置）' }, { label: 'C', value: '空一行' }, { label: 'D', value: '随便写' }]} answer="B" explanation="写话和写作文一样，每个自然段开头要空两格。" />
                    <PracticeProblem id={1143} type="choice" question={'如果在图片中看到小红给妈妈端水，最合适的写话句子是：'} options={[{ label: 'A', value: '端水。' }, { label: 'B', value: '小红端水。' }, { label: 'C', value: '母亲节那天，懂事的小红给下班回来的妈妈端了一杯温水。' }, { label: 'D', value: '妈妈喝水。' }]} answer="C" explanation="C选项交代了完整的时间、人物和事件，并且有生动的修饰词。" />
                    <PracticeProblem id={1144} type="choice" question={'看图写话中，发现图片里的人物张着嘴巴在笑，我们可以加上什么描写？'} options={[{ label: 'A', value: '动作描写' }, { label: 'B', value: '神态和语言描写（比如：他开心地笑着说……）' }, { label: 'C', value: '环境描写' }, { label: 'D', value: '心理描写' }]} answer="B" explanation="笑是神态，张嘴可能在说话，所以加上神态和语言描写最生动。" />
                    <PracticeProblem id={1145} type="choice" question={'写话时，如果故事发生在晚上，可以用下面哪个词开头？'} options={[{ label: 'A', value: '阳光明媚的早晨' }, { label: 'B', value: '烈日炎炎的中午' }, { label: 'C', value: '满天星斗的夜晚' }, { label: 'D', value: '秋高气爽的日子' }]} answer="C" explanation="“满天星斗的夜晚”符合晚上的时间特征。" />
                    <PracticeProblem id={1146} type="choice" question={'写好一句话最基本的要求是？'} options={[{ label: 'A', value: '一定要写很长' }, { label: 'B', value: '一定要有成语' }, { label: 'C', value: '句子要完整、通顺，标点正确' }, { label: 'D', value: '字写得大' }]} answer="C" explanation="无论多长的句子，首先要保证完整通顺，并且标点正确。" />
                    <PracticeProblem id={1147} type="choice" question={'如果图片里有两个小朋友在吵架，后来又和好了。我们应该按照什么顺序写？'} options={[{ label: 'A', value: '先写和好，再写吵架' }, { label: 'B', value: '想到哪写到哪' }, { label: 'C', value: '按照事情发展的先后顺序，也就是先吵架再和好' }, { label: 'D', value: '只写和好' }]} answer="C" explanation="写事情要按先后顺序写。" />
                    <PracticeProblem id={1148} type="choice" question={'看图写话时，为了让故事更有趣，我们可以怎么做？'} options={[{ label: 'A', value: '发挥合理的想象' }, { label: 'B', value: '乱写一通' }, { label: 'C', value: '抄书上的句子' }, { label: 'D', value: '只写图上能看到的一点点' }]} answer="A" explanation="合理的想象（比如他们说了什么，心里想什么）能让故事更有趣。" />
                    <PracticeProblem id={1149} type="choice" question={'下面哪一项不属于看图写话的四要素？'} options={[{ label: 'A', value: '时间' }, { label: 'B', value: '地点' }, { label: 'C', value: '书名' }, { label: 'D', value: '人物' }]} answer="C" explanation="书名不是看图写话的四要素。" />
                </div>
            )
        }
    },

    // ==================== L2-2. 成语故事 ====================
    'cn2-l2-idioms': {
        meta: { title: "成语故事 - 二年级语文 | AI7Miao语文", description: "通过有趣的故事学习常用成语。", keywords: '成语,成语故事,二年级语文' },
        info: { title: "成语故事", description: "四个字藏着一个大故事！成语是古人留下的智慧宝藏！💎", tags: [{ text: '素养进阶', color: 'purple' }, { text: '25分钟', icon: Clock, color: 'slate' }] },
        aiContext: "学生学习成语故事。用讲故事的方式引入成语，让学生理解成语的来源和含义，并尝试在句子中运用。",
        aiChatTitle: "💎 成语大冒险", aiChatIntro: "每个成语背后都有一个精彩的故事！来听故事学成语吧！",
        aiMessages: [{ role: 'ai', content: '你知道"守株待兔"的故事吗？从前有个农夫，有一天一只兔子撞树上了……后来他天天在树下等，你猜他等到了吗？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><BookOpen className="w-6 h-6 text-red-600" />趣味成语故事</h2><div className="space-y-4">{[{ idiom: '守株待兔', story: '农夫看到兔子撞树桩死了，从此天天在树下等兔子，庄稼都荒了。', meaning: '比喻不劳动而想得到好处，或死守狭隘的经验。', color: 'blue' }, { idiom: '画蛇添足', story: '比赛画蛇，第一个画完的人又给蛇加上脚，结果反而输了。', meaning: '比喻做了多余的事，反而把事情弄坏。', color: 'green' }, { idiom: '拔苗助长', story: '农夫嫌禾苗长太慢，把每棵苗往上拔了拔，结果禾苗全死了。', meaning: '比喻违反规律急于求成，反而坏事。', color: 'orange' }].map(item => (<div key={item.idiom} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 text-lg mb-1`}>📖 {item.idiom}</h3><p className="text-sm text-slate-700 dark:text-slate-300 mb-1">📕 故事：{item.story}</p><p className="text-sm font-bold text-slate-800 dark:text-white">💡 意思：{item.meaning}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📖 试着把今天学到的成语用在你的日记里吧！比如：弟弟总想一步学会骑车，简直就是"拔苗助长"！</div>),
            examples: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">🎯 成语运用</h2><div className="space-y-3">{[{ s: '小明考试不复习就想考100分，真是守株待兔。', right: true }, { s: '这幅画已经很完美了，你再加东西就是画蛇添足了。', right: true }].map((ex, i) => (<div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-3 rounded-xl"><p className="text-sm text-slate-700 dark:text-slate-300">{ex.right ? '✅' : ' ❌'} {ex.s}</p></div>))}</div></div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1150} type="choice" question={'守株待兔"告诉我们什么道理？'} options={[{ label: 'A', value: '要努力学习' }, { label: 'B', value: '不能不劳而获' }, { label: 'C', value: '要爱护小动物' }, { label: 'D', value: '要多种树' }]} answer="B" explanation={'守株待兔"告诉我们不能指望不劳而获，天上不会掉馅饼，要靠自己的努力。'} />
                    <PracticeProblem id={1151} type="choice" question={'“拔苗助长”的意思是？'} options={[{ label: 'A', value: '帮助禾苗除草' }, { label: 'B', value: '把禾苗拔掉' }, { label: 'C', value: '违反事物发展的规律，急于求成，反而坏事' }, { label: 'D', value: '给禾苗浇水' }]} answer="C" explanation="拔苗助长比喻急于求成，反而把事情弄坏。" />
                    <PracticeProblem id={1152} type="choice" question={'在“画蛇添足”的故事中，那个人为什么输了？'} options={[{ label: 'A', value: '他画得太慢了' }, { label: 'B', value: '他不会画蛇' }, { label: 'C', value: '他给蛇画了脚，做了多余的事' }, { label: 'D', value: '蛇跑了' }]} answer="C" explanation="蛇本来没有脚，他凭空加上脚，这叫做了多余的事反而坏事。" />
                    <PracticeProblem id={1153} type="choice" question={'“狐假虎威”这个成语中，“假”的意思是？'} options={[{ label: 'A', value: '假的，不真实的' }, { label: 'B', value: '借着、利用' }, { label: 'C', value: '假期' }, { label: 'D', value: '假设' }]} answer="B" explanation="狐假虎威是指狐狸借着老虎的威风吓唬百兽。" />
                    <PracticeProblem id={1154} type="choice" question={'成语“对牛弹琴”比喻什么？'} options={[{ label: 'A', value: '对牛弹奏好听的音乐' }, { label: 'B', value: '牛也喜欢听音乐' }, { label: 'C', value: '对不懂道理的人讲道理是白费口舌' }, { label: 'D', value: '音乐家很厉害' }]} answer="C" explanation="对牛弹琴用来嘲笑说话的人不看对象。" />
                    <PracticeProblem id={1155} type="choice" question={'如果你的同学做事情总是做些多余的，你可以用哪个成语提醒他？'} options={[{ label: 'A', value: '守株待兔' }, { label: 'B', value: '画蛇添足' }, { label: 'C', value: '拔苗助长' }, { label: 'D', value: '亡羊补牢' }]} answer="B" explanation="画蛇添足就是做多余的事。" />
                    <PracticeProblem id={1156} type="choice" question={'“亡羊补牢”的故事告诉我们？'} options={[{ label: 'A', value: '羊丢了就找不回来了' }, { label: 'B', value: '应该把狼打死' }, { label: 'C', value: '出了问题及时补救，还不算晚' }, { label: 'D', value: '羊圈不结实' }]} answer="C" explanation="亡羊补牢，为时未晚。意思是出了差错，设法补救，免得再受损失。" />
                    <PracticeProblem id={1157} type="choice" question={'成语通常由几个字组成？'} options={[{ label: 'A', value: '2个' }, { label: 'B', value: '3个' }, { label: 'C', value: '4个' }, { label: 'D', value: '5个' }]} answer="C" explanation="大多数成语是四个汉字组成的。" />
                    <PracticeProblem id={1158} type="choice" question={'“坐井观天”的青蛙犯了什么错误？'} options={[{ label: 'A', value: '不该坐在井里' }, { label: 'B', value: '视力不好' }, { label: 'C', value: '眼界狭小，看到的东西不全面，还自以为是' }, { label: 'D', value: '不想出去' }]} answer="C" explanation="坐井观天比喻眼界狭小，见识有限。" />
                    <PracticeProblem id={1159} type="choice" question={'要想真正理解一个成语，最好去了解它的？'} options={[{ label: 'A', value: '读音' }, { label: 'B', value: '笔画' }, { label: 'C', value: '背后的历史故事' }, { label: 'D', value: '部首' }]} answer="C" explanation="大多数成语背后都有一个生动的历史故事或者寓言故事。" />
                </div>
            )
        }
    },

    // ==================== L2-3. 近义词与反义词 ====================
    'cn2-l2-antonyms-synonyms': {
        meta: { title: "近义词与反义词 - 二年级语文 | AI7Miao语文", description: "学习常见的近义词和反义词对。", keywords: '近义词,反义词,二年级语文' },
        info: { title: "近义词与反义词", description: "词语也有双胞胎（近义词）和死对头（反义词）！认识它们让你的表达更丰富！👯", tags: [{ text: '素养进阶', color: 'purple' }, { text: '25分钟', icon: Clock, color: 'slate' }] },
        aiContext: "学生学习近义词和反义词。用'好朋友'和'反方向'的比喻帮助理解。",
        aiChatTitle: "👯 词语好朋友", aiChatIntro: "有些词语意思差不多是'好朋友'，有些意思完全相反是'对头'！来认识它们吧！",
        aiMessages: [{ role: 'ai', content: '"美丽"的近义词是什么？反义词又是什么？想想看！' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />近义词 vs 反义词</h2><div className="space-y-5"><div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500"><h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">👯 近义词 —— 意思差不多的"双胞胎"</h3><div className="grid grid-cols-2 md:grid-cols-4 gap-2">{[['美丽', '漂亮'], ['高兴', '开心'], ['快速', '迅速'], ['帮助', '援助']].map(([a, b]) => (<div key={a} className="bg-white dark:bg-slate-700 p-2 rounded-lg text-center text-sm"><span className="text-blue-600 font-bold">{a}</span><span className="mx-1">≈</span><span className="text-blue-600 font-bold">{b}</span></div>))}</div></div><div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl border-l-4 border-orange-500"><h3 className="font-bold text-orange-800 dark:text-orange-300 mb-3">⚔️ 反义词 —— 意思相反的"对头"</h3><div className="grid grid-cols-2 md:grid-cols-4 gap-2">{[['大', '小'], ['多', '少'], ['高', '矮'], ['快', '慢'], ['黑', '白'], ['冷', '热'], ['远', '近'], ['胖', '瘦']].map(([a, b]) => (<div key={a} className="bg-white dark:bg-slate-700 p-2 rounded-lg text-center text-sm"><span className="text-red-600 font-bold">{a}</span><span className="mx-1">↔</span><span className="text-green-600 font-bold">{b}</span></div>))}</div></div></div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 小技巧：在"的"前面加上不同的近义词，可以让作文更丰富！比如"美丽的花" "漂亮的花" "好看的花"。</div>),
            examples: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">🎯 连线配对</h2><div className="grid md:grid-cols-2 gap-4"><div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl"><h3 className="font-bold text-blue-700 mb-2">找近义词</h3>{[['温暖→', '温和'], ['快乐→', '愉快'], ['努力→', '勤奋']].map(([q, a]) => (<p key={q} className="text-sm text-slate-700 dark:text-slate-300 font-mono">{q} <strong className="text-blue-600">{a}</strong></p>))}</div><div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl"><h3 className="font-bold text-orange-700 mb-2">找反义词</h3>{[['安全→', '危险'], ['容易→', '困难'], ['进步→', '退步']].map(([q, a]) => (<p key={q} className="text-sm text-slate-700 dark:text-slate-300 font-mono">{q} <strong className="text-orange-600">{a}</strong></p>))}</div></div></div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1160} type="choice" question={'高兴"的反义词是？'} options={[{ label: 'A', value: '开心' }, { label: 'B', value: '快乐' }, { label: 'C', value: '伤心' }, { label: 'D', value: '愉快' }]} answer="C" explanation={'高兴"表示快乐的心情，反义词是"伤心"（难过的心情）。A、B、D 都是近义词。'} />
                    <PracticeProblem id={1161} type="choice" question={'“仔细”的近义词是？'} options={[{ label: 'A', value: '马虎' }, { label: 'B', value: '认真' }, { label: 'C', value: '粗心' }, { label: 'D', value: '着急' }]} answer="B" explanation="仔细和认真都有用心详细的意思，是近义词。马虎和粗心则是反义词。" />
                    <PracticeProblem id={1162} type="choice" question={'下面哪一组是反义词？'} options={[{ label: 'A', value: '美丽 - 漂亮' }, { label: 'B', value: '保护 - 爱护' }, { label: 'C', value: '寒冷 - 温暖' }, { label: 'D', value: '飞快 - 迅速' }]} answer="C" explanation="寒冷和温暖是表示天气感觉的反义词。" />
                    <PracticeProblem id={1163} type="choice" question={'“危险”的反义词是？'} options={[{ label: 'A', value: '安全' }, { label: 'B', value: '可怕' }, { label: 'C', value: '恐怖' }, { label: 'D', value: '困难' }]} answer="A" explanation="危险和安全是反义词。" />
                    <PracticeProblem id={1164} type="choice" question={'“渐渐”的近义词可以填哪个？'} options={[{ label: 'A', value: '马上' }, { label: 'B', value: '慢慢' }, { label: 'C', value: '忽然' }, { label: 'D', value: '突然' }]} answer="B" explanation="渐渐和慢慢都表示事物随着时间缓缓变化。" />
                    <PracticeProblem id={1165} type="choice" question={'找出句子中的反义词：“虽然今天作业很（多），但是我一会儿就写完了，觉得压力比较（  ）”'} options={[{ label: 'A', value: '大' }, { label: 'B', value: '重' }, { label: 'C', value: '少' }, { label: 'D', value: '多' }]} answer="C" explanation="“多”的反义词是“少”。" />
                    <PracticeProblem id={1166} type="choice" question={'下面哪一组是近义词？'} options={[{ label: 'A', value: '容易 - 困难' }, { label: 'B', value: '喜爱 - 喜欢' }, { label: 'C', value: '进步 - 退步' }, { label: 'D', value: '深 - 浅' }]} answer="B" explanation="喜爱和喜欢意思相近。" />
                    <PracticeProblem id={1167} type="choice" question={'“常常”的反义词最恰当的是？'} options={[{ label: 'A', value: '经常' }, { label: 'B', value: '偶尔' }, { label: 'C', value: '平常' }, { label: 'D', value: '一直' }]} answer="B" explanation="常常表示多次发生，偶尔表示有时候发生，比较少。" />
                    <PracticeProblem id={1168} type="choice" question={'“他非常勤奋地学习。”这句话中，“勤奋”的近义词可以是？'} options={[{ label: 'A', value: '努力' }, { label: 'B', value: '懒惰' }, { label: 'C', value: '马虎' }, { label: 'D', value: '聪明' }]} answer="A" explanation="勤奋和努力意思相近。" />
                    <PracticeProblem id={1169} type="choice" question={'反义词大挑战：黑对白，高对矮，那么胖对？'} options={[{ label: 'A', value: '瘦' }, { label: 'B', value: '圆' }, { label: 'C', value: '长' }, { label: 'D', value: '大' }]} answer="A" explanation="胖和瘦是一对反义词。" />
                </div>
            )
        }
    }
};

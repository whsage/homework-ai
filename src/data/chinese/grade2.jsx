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
                </div>
            )
        }
    }
};

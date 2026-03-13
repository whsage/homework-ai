import { Icons, PracticeProblem, React } from './common';
const { Lightbulb, Clock, Star, BookOpen } = Icons;

export const grade5Content = {

    // ==================== L1-1. 文言文入门 ====================
    'cn5-l1-classical-intro': {
        meta: { title: "文言文入门 - 五年级语文 | AI7Miao语文", description: "学习文言文的基本阅读方法和常见实词虚词。", keywords: '文言文,实词,虚词,五年级语文' },
        info: { title: "文言文入门", description: "穿越到古代去'聊天'！文言文就是古人说话的方式！🏯", tags: [{ text: '基础达标', color: 'blue' }, { text: '35分钟', icon: Clock, color: 'slate' }, { text: '重点', icon: Star, color: 'orange' }] },
        aiContext: "学生初学文言文。用'古人聊天'的情境引入。重点教常见实词（如'之'='的/它'，'曰'='说'）和翻译方法：保留地名人名，替换古今不同的词，补充省略的成分。",
        aiChatTitle: "🏯 古文时光机", aiChatIntro: "坐上时光机，学习古人怎么'说话'和'写字'！",
        aiMessages: [{ role: 'ai', content: '"学而时习之，不亦说乎？"——这句话你听过吗？"说"在这里读 yuè，是"高兴"的意思！试着翻译一下这句话？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-red-600" />
                            文言文入门指南
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">📋 常见文言词汇</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                    {[{ a: '之', m: '的 / 它 / 去' }, { a: '曰', m: '说' }, { a: '乃', m: '于是、就' }, { a: '其', m: '他的、那' }, { a: '故', m: '所以 / 原因' }, { a: '然', m: '这样 / 但是' }, { a: '者', m: '……的人' }, { a: '也', m: '（语气词）啊' }].map(w => (
                                        <div key={w.a} className="bg-white dark:bg-slate-700 p-2 rounded-lg text-center">
                                            <span className="text-xl font-bold text-red-600">{w.a}</span>
                                            <p className="text-xs text-slate-500">{w.m}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">🔑 翻译四字诀</h3>
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    {[{ t: '留', d: '保留专有名词（人名、地名、国名）' }, { t: '换', d: '用现代词替换古代词（"曰"→"说"）' }, { t: '补', d: '补上省略的内容（主语、"在"等）' }, { t: '调', d: '调整语序（古文常倒装）' }].map(m => (
                                        <div key={m.t} className="bg-white dark:bg-slate-700 p-3 rounded-lg">
                                            <span className="font-bold text-green-600 text-lg">{m.t}</span>
                                            <p className="text-xs text-slate-600 dark:text-slate-400">{m.d}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3">📖 经典文言文赏读</h3>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg text-sm">
                                    <p className="font-mono text-slate-800 dark:text-white mb-2">学而时习之，不亦说乎？<br />有朋自远方来，不亦乐乎？</p>
                                    <p className="text-slate-600 dark:text-slate-400">📝 翻译：学了知识经常复习，不也是很快乐的事吗？有朋友从远方来，不也是很开心的事吗？</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (<div className="space-y-6"><div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6"><h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 古今异义词</h3><p className="text-sm text-slate-600 dark:text-slate-400 mb-3">有些字在古代和现在的意思完全不同！</p><div className="grid md:grid-cols-2 gap-3">{[{ w: '走', old: '跑', now: '步行' }, { w: '去', old: '离开', now: '前往' }, { w: '汤', old: '热水', now: '菜汤' }, { w: '妻子', old: '妻子和儿女', now: '配偶' }].map(item => (<div key={item.w} className="bg-white dark:bg-slate-800 p-3 rounded-lg text-sm"><span className="font-bold text-red-600">{item.w}：</span><span className="text-orange-600">古义={item.old}</span>，<span className="text-blue-600">今义={item.now}</span></div>))}</div></div></div>),
            examples: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">📝 文言文翻译练习</h2><div className="space-y-3">{[{ orig: '温故而知新，可以为师矣。', trans: '温习旧知识从而获得新的理解，就可以当老师了。' }, { orig: '三人行，必有我师焉。', trans: '几个人一起走路，其中一定有可以当我老师的人。' }].map((ex, i) => (<div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-3 rounded-xl"><p className="font-bold text-slate-800 dark:text-white font-mono text-sm">{ex.orig}</p><p className="text-sm text-red-600 dark:text-red-400 mt-1">→ {ex.trans}</p></div>))}</div></div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1400} question={'学而时习之"中"之"的意思是？'} options={[{ label: 'A', value: '的' }, { label: 'B', value: '它（指学过的知识）' }, { label: 'C', value: '去' }, { label: 'D', value: '这' }]} answer="B" explanation={'这里的"之"是代词，指代前面提到的学过的知识，意思是"学了知识经常复习它"。'} />
                    <PracticeProblem id={1401} question={'文言文中"走"的古义是？'}  options={[{ label: 'A', value: '散步' }, { label: 'B', value: '跑' }, { label: 'C', value: '走路' }, { label: 'D', value: '离开' }]} answer="B" explanation={'走"在古文中是"跑"的意思，如"走马观花"。现代的"走"（步行）古文叫"行"。'} />
                    <PracticeProblem id={1402} type="choice" question={'“温故而知新”中，“故”的意思是？'} options={[{ label: 'A', value: '故事' }, { label: 'B', value: '所以' }, { label: 'C', value: '旧的（指学过的知识）' }, { label: 'D', value: '故意' }]} answer="C" explanation="温习“旧的知识”从而得到新的理解。" />
                    <PracticeProblem id={1403} type="choice" question={'在文言文中，“子曰”的“子”通常指谁？'} options={[{ label: 'A', value: '儿子' }, { label: 'B', value: '孔子或古代对有学问男子的尊称' }, { label: 'C', value: '小孩子' }, { label: 'D', value: '老子' }]} answer="B" explanation="《论语》里的“子曰”就是孔子说。" />
                    <PracticeProblem id={1404} type="choice" question={'文言文中，“汤”的意思通常是？'} options={[{ label: 'A', value: '热汤面' }, { label: 'B', value: '菜汤' }, { label: 'C', value: '热水' }, { label: 'D', value: '汤圆' }]} answer="C" explanation="古文里赴汤蹈火的“汤”就是指沸水、热水。" />
                    <PracticeProblem id={1405} type="choice" question={'“三人行，必有我师焉”这句话的意思是？'} options={[{ label: 'A', value: '三个人走路，一定是我的老师' }, { label: 'B', value: '三个人走，必须有一个老师跟着' }, { label: 'C', value: '几个（多个）人一起走路，其中必定有可以懂得多、能做我老师的人' }, { label: 'D', value: '三个人同行，我就是老师' }]} answer="C" explanation="“三”在古文中常表示虚数，指多个。" />
                    <PracticeProblem id={1406} type="choice" question={'读文言文遇到不懂的字词，最好的办法是？'} options={[{ label: 'A', value: '跳过去不读' }, { label: 'B', value: '随便猜一个' }, { label: 'C', value: '看课文下面的注释' }, { label: 'D', value: '不读了' }]} answer="C" explanation="课文下的注释是理解古代词汇最重要的工具。" />
                    <PracticeProblem id={1407} type="choice" question={'翻译“孔子曰”这个短句，应该译为？'} options={[{ label: 'A', value: '孔子叫曰' }, { label: 'B', value: '孔子说' }, { label: 'C', value: '孔子的一天' }, { label: 'D', value: '孔子叫' }]} answer="B" explanation="“曰”在古文里最常见的意思就是“说”。使用“换”字诀替换。" />
                    <PracticeProblem id={1408} type="choice" question={'文言文里的“妻子”和现代汉语里的“妻子”意思一样吗？'} options={[{ label: 'A', value: '完全一样' }, { label: 'B', value: '古义指“妻子和儿女”，今义指男子的配偶' }, { label: 'C', value: '古义指老伴，今义指年轻妻子' }, { label: 'D', value: '不知道' }]} answer="B" explanation="这是典型的古今异义词。“妻”指配偶，“子”指儿女。" />
                    <PracticeProblem id={1409} type="choice" question={'“不亦说乎”中的“说”字怎么读，什么意思？'} options={[{ label: 'A', value: '读shuō，说话' }, { label: 'B', value: '读shuì，游说' }, { label: 'C', value: '读yuè，同“悦”，愉快、高兴' }, { label: 'D', value: '读tuō，脱下' }]} answer="C" explanation="这是一个通假字，古代“说”和“悦”通用。" />
                </div>
            )
        }
    },

    // ==================== L1-2. 古诗词赏析 ====================
    'cn5-l1-poetry-appreciation': {
        meta: { title: "古诗词赏析 - 五年级语文 | AI7Miao语文", description: "学习赏析古诗词的意象、手法和情感。", keywords: '古诗词赏析,意象,手法,五年级语文' },
        info: { title: "古诗词赏析", description: "不只是背诵！学会品味诗词的意境之美！🎋", tags: [{ text: '基础达标', color: 'blue' }, { text: '30分钟', icon: Clock, color: 'slate' }, { text: '重点', icon: Star, color: 'orange' }] },
        aiContext: "学生学习诗词赏析方法。重点教意象分析（月亮=思乡，梅花=高洁，柳=离别），以及如何分析表现手法和情感。",
        aiChatTitle: "🎋 诗词鉴赏师", aiChatIntro: "学会品诗词，你会发现每一个字都有深意！",
        aiMessages: [{ role: 'ai', content: '在古诗里，"月亮"经常代表思乡之情，"柳树"经常代表离别。这些就叫"意象"！你还知道哪些意象吗？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />诗词赏析工具箱</h2><div className="space-y-5"><div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500"><h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">🌿 常见意象速查表</h3><div className="grid grid-cols-2 md:grid-cols-3 gap-2">{[{ img: '🌙 月亮', mean: '思乡、思念、团圆' }, { img: '🌿 柳', mean: '离别、挽留' }, { img: '🌸 梅花', mean: '高洁、不屈' }, { img: '🪷 荷花/莲', mean: '纯洁、高雅' }, { img: '🦢 鸿雁', mean: '传书、思乡' }, { img: '🍂 落叶/秋', mean: '悲伤、感叹时光' }].map(item => (<div key={item.img} className="bg-white dark:bg-slate-700 p-2 rounded-lg text-center text-sm"><p className="font-bold">{item.img}</p><p className="text-xs text-slate-500">{item.mean}</p></div>))}</div></div><div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500"><h3 className="font-bold text-green-800 dark:text-green-300 mb-3">🔍 赏析答题模板</h3><div className="text-sm text-slate-700 dark:text-slate-300 space-y-1"><p>1. <strong>指出手法</strong>：这首诗运用了____（比喻/拟人/夸张/借景抒情）的手法</p><p>2. <strong>分析内容</strong>：把____写成____（/通过写____）</p><p>3. <strong>说明效果</strong>：生动地表现了____，表达了诗人____的感情</p></div></div></div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 看到诗中的意象，就要联想到它象征的感情！月→思乡，柳→离别，梅→高洁！</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 选一首你喜欢的古诗，用"指出手法→分析内容→说明效果"的模板写一段赏析。</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1410} question={'古诗中"月亮"常代表什么感情？'}  options={[{ label: 'A', value: '欢乐' }, { label: 'B', value: '思乡思念' }, { label: 'C', value: '愤怒' }, { label: 'D', value: '恐惧' }]} answer="B" explanation={'月亮是古诗中最常见的思乡意象。"举头望明月，低头思故乡"就是经典例子。'} />
                    <PracticeProblem id={1411} type="choice" question={'古人送别朋友时，常折什么树的枝条相送？'} options={[{ label: 'A', value: '松树' }, { label: 'B', value: '柳树' }, { label: 'C', value: '桃树' }, { label: 'D', value: '苹果树' }]} answer="B" explanation="“柳”与“留”谐音，折柳相送表达了依依不舍的挽留之情。" />
                    <PracticeProblem id={1412} type="choice" question={'“墙角数枝梅，凌寒独自开。”诗人借梅花在寒冬开放，赞美了什么样的品质？'} options={[{ label: 'A', value: '梅花好看' }, { label: 'B', value: '天气很冷' }, { label: 'C', value: '不畏严寒、坚强高洁的品格' }, { label: 'D', value: '墙角很偏僻' }]} answer="C" explanation="梅花在冬天开放是其自然特性，诗人借此“托物言志”，赞美坚强不屈的人。" />
                    <PracticeProblem id={1413} type="choice" question={'赏析诗词时，除了看写了什么（内容），还要看怎么写的（手法），以及？'} options={[{ label: 'A', value: '押不押韵' }, { label: 'B', value: '作者是谁' }, { label: 'C', value: '表达了什么情感/说明了什么道理（主旨）' }, { label: 'D', value: '字数多少' }]} answer="C" explanation="理解诗人的情感和思想是赏析古诗最核心的一步。" />
                    <PracticeProblem id={1414} type="choice" question={'阅读古诗，看到“大漠”“孤烟”“长河”“黄沙”这样的词，这通常是一首什么类型的诗？'} options={[{ label: 'A', value: '田园诗' }, { label: 'B', value: '送别诗' }, { label: 'C', value: '边塞诗' }, { label: 'D', value: '咏物诗' }]} answer="C" explanation="这些都是边塞（边疆地带）典型的景物意象。" />
                    <PracticeProblem id={1415} type="choice" question={'“独在异乡为异客，每逢佳节倍思亲”中的“佳节”指哪个节日？诗人表达了什么思想感情？'} options={[{ label: 'A', value: '中秋节，喜爱月亮' }, { label: 'B', value: '重阳节，思念家乡和亲人' }, { label: 'C', value: '春节，开心快乐' }, { label: 'D', value: '端午节，纪念屈原' }]} answer="B" explanation="后面有“遥知兄弟登高处”，登高是重阳节的习俗。全诗表达了浓浓的思乡之情。" />
                    <PracticeProblem id={1416} type="choice" question={'在古诗中，“鸿雁”经常被用来象征什么？'} options={[{ label: 'A', value: '好吃的食物' }, { label: 'B', value: '天气变冷' }, { label: 'C', value: '传递书信的信使或思乡之情' }, { label: 'D', value: '美丽的风景' }]} answer="C" explanation="古人常用“雁传书”来表达对远方亲人的思念。" />
                    <PracticeProblem id={1417} type="choice" question={'赏析“飞流直下三千尺，疑是银河落九天”这句话的精彩之处，说法正确的是？'} options={[{ label: 'A', value: '用了排比的手法，说明瀑布很宽' }, { label: 'B', value: '用了夸张和比喻的手法，生动地写出了庐山瀑布的壮观和气势磅礴' }, { label: 'C', value: '用了拟人的手法，把瀑布当人写' }, { label: 'D', value: '这是事实，没有用手法' }]} answer="B" explanation="“三千尺”是夸张，“像银河”是比喻。" />
                    <PracticeProblem id={1418} type="choice" question={'古人常借物抒情（托物言志），下面哪种植物常代表君子“出淤泥而不染”的纯洁高尚？'} options={[{ label: 'A', value: '牡丹' }, { label: 'B', value: '菊花' }, { label: 'C', value: '莲花（荷花）' }, { label: 'D', value: '兰花' }]} answer="C" explanation="莲花生长在淤泥里却洁白干净，常用来比喻高洁的人。" />
                    <PracticeProblem id={1419} type="choice" question={'“借景抒情”是指？'} options={[{ label: 'A', value: '只写风景不写情' }, { label: 'B', value: '感情太浓了只能看风景' }, { label: 'C', value: '把想要表达的感情融入到对景物的描写之中' }, { label: 'D', value: '风景很有感情' }]} answer="C" explanation="王国维说“一切景语皆情语”，诗人眼里的景物都染上了他自己的感情。" />
                </div>
            )
        }
    },

    // ==================== L1-3. 阅读理解进阶 ====================
    'cn5-l1-reading-adv': {
        meta: { title: "阅读理解进阶 - 五年级语文 | AI7Miao语文", description: "学习深层理解、推断和评价的阅读能力。", keywords: '阅读理解,深层理解,推断,五年级语文' },
        info: { title: "阅读理解进阶", description: "不只看懂表面意思！学会读出文章'字里行间'的深意！🔬", tags: [{ text: '基础达标', color: 'blue' }, { text: '35分钟', icon: Clock, color: 'slate' }, { text: '重点', icon: Star, color: 'orange' }] },
        aiContext: "学生进阶学习阅读理解。从提取信息升级到深层理解：理解言外之意、体会作者感情、分析写作手法的效果。",
        aiChatTitle: "🔬 深度阅读家", aiChatIntro: "文章像冰山，表面只是一小部分！来探索深层的意思吧！",
        aiMessages: [{ role: 'ai', content: '如果文章最后写"我默默转过身，走进了风雪中"，作者想表达什么情感呢？是开心？还是……？这就需要"读懂言外之意"！' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />阅读理解进阶技能</h2><div className="space-y-4">{[{ t: '🔍 理解言外之意', d: '作者没有直接说，但通过描写暗示了某种情感或态度。要联系上下文、人物行为来推断。', color: 'blue' }, { t: '💭 体会作者感情', d: '看环境描写（阴天=悲伤，阳光=快乐）、看动作神态（眼圈红了=感动/难过）、看总结句。', color: 'green' }, { t: '📐 分析写作手法', d: '作者为什么用这种写法？首尾呼应让结构完整；对比突出差异；铺垫为后文做准备。', color: 'purple' }, { t: '💡 概括与评价', d: '用自己的话总结文章主旨，并说说你的看法或感受。注意要结合原文分析。', color: 'orange' }].map(s => (<div key={s.t} className={`p-4 rounded-xl border-l-4 border-${s.color}-500 bg-${s.color}-50 dark:bg-${s.color}-900/20`}><h3 className={`font-bold text-${s.color}-800 dark:text-${s.color}-300 mb-1`}>{s.t}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{s.d}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 做题时先看问题是"找信息"（回原文找）还是"深理解"（需要推断分析），不同题型方法不同！</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 阅读一篇课外文章，写出你对作者情感的理解和文章主旨的概括。</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1420} question={'文章写"天空阴沉沉的，几只乌鸦呱呱地叫着飞过"，主要是为了？'}  options={[{ label: 'A', value: '介绍天气情况' }, { label: 'B', value: '描写自然风光' }, { label: 'C', value: '烘托悲伤的气氛' }, { label: 'D', value: '说明时间是早上' }]} answer="C" explanation={'阴天+乌鸦是常见的环境描写手法，用来烘托悲伤、压抑的气氛，为后文的情节做铺垫。'} />
                    <PracticeProblem id={1421} type="choice" question={'如果在文章里看到“他的眼眶红了，却硬逼着自己转过头去”，这句神态/动作描写说明了什么？'} options={[{ label: 'A', value: '他眼睛里进沙子了' }, { label: 'B', value: '他不想理人' }, { label: 'C', value: '他内心非常感动或难过，但强忍着不想让别人看到自己流泪' }, { label: 'D', value: '他脖子疼' }]} answer="C" explanation="我们要透过人物的动作神态去推测他内心的真实情感（言外之意）。" />
                    <PracticeProblem id={1422} type="choice" question={'文章开头第一段写了一件和下文看似关系不大的事，但隐隐有联系，这叫什么手法？'} options={[{ label: 'A', value: '首尾呼应' }, { label: 'B', value: '铺垫' }, { label: 'C', value: '对比' }, { label: 'D', value: '插叙' }]} answer="B" explanation="前文为后文情节的发展埋下伏笔或做准备，就叫铺垫。" />
                    <PracticeProblem id={1423} type="choice" question={'如何评价一篇文章中的人物？'} options={[{ label: 'A', value: '只看他长得好不好看' }, { label: 'B', value: '根据他做的事（行动）、说的话（语言）来综合分析他具有什么品质' }, { label: 'C', value: '根据第一感觉' }, { label: 'D', value: '看他名字好不好听' }]} answer="B" explanation="评价人物必须结合文本，从他在事件中的具体表现来提取性格特征。" />
                    <PracticeProblem id={1424} type="choice" question={'“妈妈的白发像一根根银针，刺痛了我的心。”这句话体会到了作者怎样的感情？'} options={[{ label: 'A', value: '妈妈头发很白' }, { label: 'B', value: '刺碰到心很疼' }, { label: 'C', value: '心疼妈妈的辛劳，对妈妈深深的感恩与愧疚' }, { label: 'D', value: '害怕打针' }]} answer="C" explanation="“刺痛”是比喻心里的难过，因为妈妈为了“我”操劳白了头。" />
                    <PracticeProblem id={1425} type="choice" question={'如果要概括一段话的意思，如果这段话没有明显的中心句，我们应该怎么办？'} options={[{ label: 'A', value: '把第一句话抄下来' }, { label: 'B', value: '不概括了' }, { label: 'C', value: '找几个关键词，用自己的话把它们串起来（提取合并法）' }, { label: 'D', value: '随便编一句' }]} answer="C" explanation="当不能直接摘抄原句时，需要自己归纳总结段落要点。" />
                    <PracticeProblem id={1426} type="choice" question={'一篇文章先写了“过去我很胆小”，后文重点写了“现在我勇敢地站在了讲台上”。这运用了什么手法？的作用是？'} options={[{ label: 'A', value: '倒叙，引起回忆' }, { label: 'B', value: '借景抒情，写景' }, { label: 'C', value: '对比，突出后文自己发生的变化和变得勇敢' }, { label: 'D', value: '排比，气势大' }]} answer="C" explanation="将过去与现在截然不同的情况放在一起，是对比的手法，能突出变化。" />
                    <PracticeProblem id={1427} type="choice" question={'阅读理解简答题中，问“谈谈你的理解/启发/感想”，应该怎么答？'} options={[{ label: 'A', value: '只写自己的感想，不提文章' }, { label: 'B', value: '只抄一段文章' }, { label: 'C', value: '结合文章主旨（点明中心） + 结合自己的实际生活具体谈谈' }, { label: 'D', value: '写“我受到了启发。”然后结束。' }]} answer="C" explanation="这类开放性题目的标准结构是：原文观点 + 联系实际生活谈自己。" />
                    <PracticeProblem id={1428} type="choice" question={'为什么有的文章要在结尾再次描写一下自然环境？（例如：天晴了，阳光洒在身上很暖和。）'} options={[{ label: 'A', value: '作者闲得无聊' }, { label: 'B', value: '为了烘托人物此时豁然开朗、愉悦的心情，收束全文' }, { label: 'C', value: '为了凑字数' }, { label: 'D', value: '因为刚好天晴了' }]} answer="B" explanation="结尾的环境描写通常都有烘托心情、深化主题、引人深思的作用。" />
                    <PracticeProblem id={1429} type="choice" question={'深阅读要求我们能“读出文字背后的意思”，这就是常说的？'} options={[{ label: 'A', value: '背书' }, { label: 'B', value: '咬文嚼字' }, { label: 'C', value: '体会“言外之意”（潜台词）' }, { label: 'D', value: '闭着眼睛读' }]} answer="C" explanation="理解作者没有直接写出来，但暗示给读者的情感和思想。" />
                </div>
            )
        }
    },

    // ==================== L1-4. 说明文阅读 ====================
    'cn5-l1-expository': {
        meta: { title: "说明文阅读 - 五年级语文 | AI7Miao语文", description: "学习说明文的阅读方法和常见说明方法。", keywords: '说明文,说明方法,五年级语文' },
        info: { title: "说明文阅读", description: "说明文不讲故事，它'解释事物'！像一本百科全书！📚", tags: [{ text: '基础达标', color: 'blue' }, { text: '30分钟', icon: Clock, color: 'slate' }] },
        aiContext: "学生学习说明文。重点认识常见说明方法：列数字、举例子、作比较、打比方、下定义。以及说明文语言的准确性。",
        aiChatTitle: "📚 百科小博士", aiChatIntro: "说明文就是用来解释事物或道理的文章！来当百科博士吧！",
        aiMessages: [{ role: 'ai', content: '"太阳的表面温度约6000摄氏度"——这句话用了什么说明方法？对了，"列数字"！用数据让读者直观感受太阳有多热！' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />五大说明方法</h2><div className="space-y-3">{[{ m: '🔢 列数字', d: '用具体数据说明', ex: '"地球赤道周长约40076千米。"', color: 'blue' }, { m: '📋 举例子', d: '用具体例子说明', ex: '"很多动物会冬眠，例如青蛙、蛇和刺猬。"', color: 'green' }, { m: '⚖️ 作比较', d: '把两个事物对比说明', ex: '"地球的大小只是太阳的百万分之一。"', color: 'orange' }, { m: '🌙 打比方', d: '用比喻来说明', ex: '"地球像一个蓝色的玻璃球。"', color: 'purple' }, { m: '📖 下定义', d: '用科学语言解释概念', ex: '"光合作用是植物利用阳光……的过程。"', color: 'red' }].map(item => (<div key={item.m} className={`p-3 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 text-sm`}>{item.m}</h3><p className="text-xs text-slate-600 dark:text-slate-400">{item.d}</p><p className="text-xs font-mono text-slate-500 mt-1">{item.ex}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 说明文的语言追求"准确"！注意"大约""左右""之一""可能"等限定词，去掉后意思就变了。</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 找一篇科普说明文，标出文中用到的每一种说明方法。</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1430} question={'赵州桥全长50.82米，宽约9.6米"用了什么说明方法？'} options={[{ label: 'A', value: '举例子' }, { label: 'B', value: '列数字' }, { label: 'C', value: '作比较' }, { label: 'D', value: '打比方' }]} answer="B" explanation={'用了具体的数据（50.82米、9.6米）来说明赵州桥的大小，这是"列数字"说明方法。'} />
                    <PracticeProblem id={1431} type="choice" question={'“鲸的样子像鱼，不仅有着鱼一样的流线型身体，有时也会跃出水面。”这里运用了什么说明方法？'} options={[{ label: 'A', value: '举例子' }, { label: 'B', value: '作比较' }, { label: 'C', value: '打比方' }, { label: 'D', value: '列数字' }]} answer="C" explanation="说鲸像鱼，是用大家熟悉的鱼来比喻，这在说明文中叫打比方。" />
                    <PracticeProblem id={1432} type="choice" question={'如果在说明文中看到“至少”“大约”“差不多”这样的词，说明了什么？'} options={[{ label: 'A', value: '作者乱写的' }, { label: 'B', value: '这种说明文不科学' }, { label: 'C', value: '体现了说明文语言的准确性和严谨性' }, { label: 'D', value: '没有什么意义' }]} answer="C" explanation="这些词看似模糊，其实是为了避免绝对化，正是语言准确、科学的体现。" />
                    <PracticeProblem id={1433} type="choice" question={'“有些恐龙像它们的祖先一样两足奔跑，有些恐龙则用四足行走。”这句主要是为了说明什么？'} options={[{ label: 'A', value: '恐龙很多' }, { label: 'B', value: '恐龙的种类和形态的多样性（分类别）' }, { label: 'C', value: '恐龙跑得快' }, { label: 'D', value: '恐龙有四条腿' }]} answer="B" explanation="把恐龙按行走方式分类说明，这是一种叫“分类别”的说明方法。" />
                    <PracticeProblem id={1434} type="choice" question={'为了让读者明白某种新型材料有多坚硬，作者写道：“它的硬度是钢铁的十倍。”这用了什么说明方法？'} options={[{ label: 'A', value: '打比方' }, { label: 'B', value: '举例子和分类别' }, { label: 'C', value: '作比较和列数字' }, { label: 'D', value: '下定义' }]} answer="C" explanation="“是钢铁的”属于作比较，“十倍”属于列数字。" />
                    <PracticeProblem id={1435} type="choice" question={'说明文和记叙文最大的区别在于？'} options={[{ label: 'A', value: '说明文不写人，只写物' }, { label: 'B', value: '说明文必须有数字' }, { label: 'C', value: '记叙文重在写人叙事表达情感，说明文重在介绍事物的特征和阐明事理' }, { label: 'D', value: '说明文篇幅长' }]} answer="C" explanation="记叙文的目的是讲故事传达情感，说明文的目的是传授知识。" />
                    <PracticeProblem id={1436} type="choice" question={'下定义一般用什么样的句式？'} options={[{ label: 'A', value: '我想……' }, { label: 'B', value: '大家都知道……' }, { label: 'C', value: '可能是什么什么吧。' }, { label: 'D', value: '……是……的……。 / 所谓……，就是……。' }]} answer="D" explanation="下定义是用简明科学的语言对事物的本质属性作概括说明。" />
                    <PracticeProblem id={1437} type="choice" question={'“须鲸主要吃虾和小鱼，例如……”下面接着会用什么说明方法？'} options={[{ label: 'A', value: '打比方' }, { label: 'B', value: '作比较' }, { label: 'C', value: '举例子' }, { label: 'D', value: '列数字' }]} answer="C" explanation="“例如”“譬如”是举例子的标志词。" />
                    <PracticeProblem id={1438} type="choice" question={'作者写说明文时为什么经常用“作比较”的方法？'} options={[{ label: 'A', value: '为了让文章更长' }, { label: 'B', value: '为了显示自己知识渊博' }, { label: 'C', value: '通过把不熟悉的事物和熟悉的事物对比，突出所说明事物的特征' }, { label: 'D', value: '因为比较好写' }]} answer="C" explanation="没有比较就没有伤害，也没有鲜明的特征展示。" />
                    <PracticeProblem id={1439} type="choice" question={'体会句子中加点词语的作用：“我国的石拱桥（几乎）到处都有。”能去掉吗？'} options={[{ label: 'A', value: '可以去掉，不影响意思' }, { label: 'B', value: '不能去掉，去掉了就变成“所有地方都有”，太绝对了，不符合实际情况，体现了说明文语言的准确性' }, { label: 'C', value: '可以去掉，为了句子更简练' }, { label: 'D', value: '不知道' }]} answer="B" explanation="“几乎”表示十分接近但不完全是，去掉了表达就不准确了。" />
                </div>
            )
        }
    },

    // ==================== L2-1. 习作技巧 ====================
    'cn5-l2-writing-techniques': {
        meta: { title: "习作技巧 - 五年级语文 | AI7Miao语文", description: "学习作文开头结尾的方法和过渡衔接技巧。", keywords: '习作技巧,开头,结尾,过渡,五年级语文' },
        info: { title: "习作技巧（开头结尾）", description: "好开头是成功的一半！好结尾是画龙点睛！🐉", tags: [{ text: '素养进阶', color: 'purple' }, { text: '35分钟', icon: Clock, color: 'slate' }, { text: '重点', icon: Star, color: 'orange' }] },
        aiContext: "学生学习习作技巧。开头方法：开门见山、设置悬念、环境描写。结尾方法：总结点题、首尾呼应、抒情感悟。强调详略得当和过渡衔接。",
        aiChatTitle: "🐉 写作升级站", aiChatIntro: "学会这些技巧，你的作文立刻'升几个档次'！",
        aiMessages: [{ role: 'ai', content: '你的作文开头通常怎么写？是不是经常"有一天……"？来学几种更精彩的开头方法吧！' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />开头结尾技巧</h2><div className="space-y-5"><div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500"><h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">✏️ 精彩开头三法</h3><div className="space-y-2 text-sm">{[{ t: '开门见山', ex: '"我的妈妈是世界上最温柔的人。"直接点题！', color: 'blue' }, { t: '设置悬念', ex: '"那天晚上，我做了一个谁也想不到的决定……"吸引读者！', color: 'green' }, { t: '环境开头', ex: '"窗外的雨淅淅沥沥地下着，我的心情也像这天气一样阴沉。"以景写情！', color: 'purple' }].map(m => (<div key={m.t} className="bg-white dark:bg-slate-700 p-3 rounded-lg"><span className={`font-bold text-${m.color}-600`}>{m.t}：</span><span className="text-slate-600 dark:text-slate-400">{m.ex}</span></div>))}</div></div><div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500"><h3 className="font-bold text-green-800 dark:text-green-300 mb-3">🎯 精彩结尾三法</h3><div className="space-y-2 text-sm">{[{ t: '总结点题', ex: '"这件事让我明白了：只有坚持不懈，才能取得成功。"点明中心！' }, { t: '首尾呼应', ex: '开头提到的事物在结尾再次出现，形成完整结构！' }, { t: '抒情感悟', ex: '"那一刻，我心中充满了温暖和感动。"以感情收束全文！' }].map(m => (<div key={m.t} className="bg-white dark:bg-slate-700 p-3 rounded-lg"><span className="font-bold text-green-600">{m.t}：</span><span className="text-slate-600 dark:text-slate-400">{m.ex}</span></div>))}</div></div></div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 好作文的开头不超过3行，结尾不超过3行！短小精悍才有力！</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 用三种不同的开头方法分别为"一件令我感动的事"写三个开头段。</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1440} question={'那天晚上，发生了一件谁也想不到的事。"这种开头叫？'} options={[{ label: 'A', value: '开门见山' }, { label: 'B', value: '设置悬念' }, { label: 'C', value: '环境描写' }, { label: 'D', value: '引用名言' }]} answer="B" explanation={'用"谁也想不到的事"激发读者好奇心，想继续读下去，这就是"设置悬念"的开头方法。'} />
                    <PracticeProblem id={1441} type="choice" question={'“如果我是一滴水，我将滋润干涸的土地；如果我是一缕阳光，我将照亮黑暗的角落。”这种开头运用了什么修辞？'} options={[{ label: 'A', value: '只有比喻' }, { label: 'B', value: '引用诗句' }, { label: 'C', value: '排比和比喻' }, { label: 'D', value: '夸张' }]} answer="C" explanation="把“我”比作水和阳光是比喻，两个“如果我是…”的句式并列是排比。" />
                    <PracticeProblem id={1442} type="choice" question={'在两段不同内容的文字之间，为了让它们连接自然，通常会用什么句子？'} options={[{ label: 'A', value: '不管它，直接写下一段' }, { label: 'B', value: '中心句' }, { label: 'C', value: '首尾呼应句' }, { label: 'D', value: '过渡句（承上启下）' }]} answer="D" explanation="过渡句就像一座桥，连接上下文。比如：“不仅……还……”。" />
                    <PracticeProblem id={1443} type="choice" question={'写“一次难忘的运动会”，下面哪种结构安排（详略）比较合理？'} options={[{ label: 'A', value: '详细写怎么去操场的，略写比赛过程' }, { label: 'B', value: '详细写天气情况，略写比赛结果' }, { label: 'C', value: '略写开幕式，详细写自己参加的最精彩的比赛项目，最后略写感受结尾' }, { label: 'D', value: '每个项目都详细写一遍' }]} answer="C" explanation="写作文要详略得当，把自己经历的最核心、最精彩的部分详写。" />
                    <PracticeProblem id={1444} type="choice" question={'结尾“我的家乡真美啊！我爱我的家乡！”属于哪种结尾方式？'} options={[{ label: 'A', value: '设置悬念' }, { label: 'B', value: '总结全文，直接抒情点题' }, { label: 'C', value: '环境描写' }, { label: 'D', value: '首尾呼应' }]} answer="B" explanation="这种结尾直抒胸臆，直接表达了对家乡的赞美和喜爱。" />
                    <PracticeProblem id={1445} type="choice" question={'文章的开头“我有一个调皮的弟弟，他总是给我惹麻烦。”属于什么开头？'} options={[{ label: 'A', value: '环境烘托' }, { label: 'B', value: '开门见山（直接点题）' }, { label: 'C', value: '设置悬念' }, { label: 'D', value: '引经据典' }]} answer="B" explanation="第一句话就直接点出了文章要写的人和特点，是不绕弯子的开门见山。" />
                    <PracticeProblem id={1446} type="choice" question={'为什么老师不建议大家写作文时用“今天天气晴朗，万里无云，我高兴地出门了”作为开头？'} options={[{ label: 'A', value: '因为可能下雨了' }, { label: 'B', value: '这种开头太长了' }, { label: 'C', value: '这种开头太老套（平庸），千篇一律，不能吸引读者' }, { label: 'D', value: '这种天气不能出门' }]} answer="C" explanation="开头要新颖才能吸引人，尽量避免用烂大街的模版套话。" />
                    <PracticeProblem id={1447} type="choice" question={'如果你在写一篇关于环境保护的倡议书，结尾怎么写比较好？'} options={[{ label: 'A', value: '写完了' }, { label: 'B', value: '发出号召，呼吁大家一起行动起来保护环境' }, { label: 'C', value: '留个悬念' }, { label: 'D', value: '首尾不呼应' }]} answer="B" explanation="倡议书的目的是让人行动，所以结尾号召是最有力的。" />
                    <PracticeProblem id={1448} type="choice" question={'过渡段通常在文章里的什么位置？'} options={[{ label: 'A', value: '文章的最开头' }, { label: 'B', value: '两层不同意思的段落之间' }, { label: 'C', value: '文章的最末尾' }, { label: 'D', value: '每一句都是' }]} answer="B" explanation="过渡段/句承担着承上启下的承接作用，所以一定在中间。" />
                    <PracticeProblem id={1449} type="choice" question={'下面哪句话最适合做一篇描写小狗作文的首尾呼应的结尾？（已知开头是：我家里有一位特殊的“小成员”——小狗皮皮。）'} options={[{ label: 'A', value: '明天我还要和它玩。' }, { label: 'B', value: '这就是我家那只调皮又可爱的特殊“小成员”，我永远爱它。' }, { label: 'C', value: '它是一只白色的狗。' }, { label: 'D', value: '我写完了皮皮。' }]} answer="B" explanation="结尾再次点出“特殊的‘小成员’”，与开头呼应，使文章结构完整。" />
                </div>
            )
        }
    },

    // ==================== L2-2. 口语交际 ====================
    'cn5-l2-oral-communication': {
        meta: { title: "口语交际 - 五年级语文 | AI7Miao语文", description: "学习口头表达和交流沟通的技巧。", keywords: '口语交际,表达,沟通,五年级语文' },
        info: { title: "口语交际", description: "会写还要会说！学会清楚表达、有效沟通！🎤", tags: [{ text: '素养进阶', color: 'purple' }, { text: '25分钟', icon: Clock, color: 'slate' }] },
        aiContext: "学生学习口语交际。教会学生表达观点（先说结论再说理由）、倾听他人（边听边思考）、即兴表达和说服技巧。",
        aiChatTitle: "🎤 表达小达人", aiChatIntro: "说话也是一门艺术！来学习如何清楚又有说服力地表达自己！",
        aiMessages: [{ role: 'ai', content: '如果你想说服同学们选你当班长，你觉得应该先说什么？怎么说才更有说服力呢？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />口语交际技巧</h2><div className="space-y-4">{[{ t: '💬 表达观点', d: '先说结论，再说理由。"我认为+观点+因为+理由"', color: 'blue' }, { t: '👂 倾听他人', d: '边听边想，可以点头回应。听完后可以总结对方观点再发表看法。', color: 'green' }, { t: '🤝 礼貌沟通', d: '不打断别人说话，用"我觉得""我认为"代替"你错了"。', color: 'purple' }].map(s => (<div key={s.t} className={`p-4 rounded-xl border-l-4 border-${s.color}-500 bg-${s.color}-50 dark:bg-${s.color}-900/20`}><h3 className={`font-bold text-${s.color}-800 dark:text-${s.color}-300 mb-1`}>{s.t}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{s.d}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 辩论或讨论时，先肯定对方的优点，再提出自己的不同看法，这样更有说服力！</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 和同学做一次小辩论："小学生应不应该带手机上学？"练习表达观点和倾听。</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1450} question={'表达观点时最好的方式是？'} options={[{ label: 'A', value: '说得越多越好' }, { label: 'B', value: '先说结论再说理由' }, { label: 'C', value: '直接批评对方观点' }, { label: 'D', value: '不需要理由' }]} answer="B" explanation={'先说结论让人知道你的观点，再用理由支撑，这样表达清晰有力。'} />
                    <PracticeProblem id={1451} type="choice" question={'如果讨论时你的观点和同学不一样，你应该怎么说？'} options={[{ label: 'A', value: '“你说的全都不对，听我的！”' }, { label: 'B', value: '不说话了，生闷气。' }, { label: 'C', value: '“你的看法有一定道理，但是我觉得……”' }, { label: 'D', value: '打断他，直接说自己的。' }]} answer="C" explanation="先肯定对方合理的成分，再提出不同意见，更容易让人接受。" />
                    <PracticeProblem id={1452} type="choice" question={'倾听别人讲话时，哪种做法是不礼貌的？'} options={[{ label: 'A', value: '眼睛看着对方' }, { label: 'B', value: '偶尔点头表示理解' }, { label: 'C', value: '边听边玩铅笔，东张西望' }, { label: 'D', value: '听完后再发表意见' }]} answer="C" explanation="交流时保持眼神交流、不小动作是基本的礼仪。" />
                    <PracticeProblem id={1453} type="choice" question={'如果需要你当众演讲，下面哪个习惯比较好？'} options={[{ label: 'A', value: '一直低头看稿子' }, { label: 'B', value: '语速很快，尽早念完' }, { label: 'C', value: '声音洪亮，语速适中，偶尔和观众有点眼神交流' }, { label: 'D', value: '背对观众' }]} answer="C" explanation="好的演讲需要照顾听众的感受，用声音和肢体语言感染人。" />
                    <PracticeProblem id={1454} type="choice" question={'为了说服妈妈周末带你去科技馆，最好的理由是？'} options={[{ label: 'A', value: '“在家里待着太无聊了，我要出去玩。”' }, { label: 'B', value: '“如果带我去，我最近语文科学课学到了宇宙，去科技馆能帮我更好地理解课本知识。”' }, { label: 'C', value: '“别人都去了，我也要去。”' }, { label: 'D', value: '大哭大闹直到她同意' }]} answer="B" explanation="将目的与学习结合起来，给出合理的“益处”，最具有说服力。" />
                    <PracticeProblem id={1455} type="choice" question={'当别人误会你的时候，你应该怎么做？'} options={[{ label: 'A', value: '大喊大叫，和他吵架' }, { label: 'B', value: '默默忍受，不解释' }, { label: 'C', value: '等双方冷静下来，心平气和地说明事实原委' }, { label: 'D', value: '再也不理他了' }]} answer="C" explanation="情绪激动时沟通无效，冷静下来陈述客观事实才是解决之道。" />
                    <PracticeProblem id={1456} type="choice" question={'在推荐一本好书的分享会上，什么是最重要的部分？'} options={[{ label: 'A', value: '只说书的名字和作者' }, { label: 'B', value: '把一整本书的故事都详细讲一遍' }, { label: 'C', value: '讲清内容梗概，并重点分享最吸引你的地方或你的感悟' }, { label: 'D', value: '把别人的推荐词背下来' }]} answer="C" explanation="分享的核心在于“为什么推荐”，用自己真实的感悟去打动听众。" />
                    <PracticeProblem id={1457} type="choice" question={'如果要采访一位劳动模范爷爷，首先要准备什么？'} options={[{ label: 'A', value: '直接跑去问他' }, { label: 'B', value: '准备一份提纲，列出你想问的关键问题' }, { label: 'C', value: '带零食去吃' }, { label: 'D', value: '不用准备，想到啥问啥' }]} answer="B" explanation="采访需要做足功课，提前列好提纲能保证采访有条理和深度。" />
                    <PracticeProblem id={1458} type="choice" question={'“我觉得……因为……所以……”这种句式主要用于？'} options={[{ label: 'A', value: '朗诵诗歌' }, { label: 'B', value: '有条理地陈述观点和理由' }, { label: 'C', value: '描写环境' }, { label: 'D', value: '向别人提问' }]} answer="B" explanation="这是逻辑表达中最经典的句式结构。" />
                    <PracticeProblem id={1459} type="choice" question={'当你在演讲中突然忘词了，最好的应对办法是？'} options={[{ label: 'A', value: '站在台上哭' }, { label: 'B', value: '立刻跑下台' }, { label: 'C', value: '深呼吸停顿一下，自然地跳过那一句或用自己的话顺接下去' }, { label: 'D', value: '大声说“我忘了”' }]} answer="C" explanation="临场应变是口语交际的重要能力，保持镇定最重要。" />
                </div>
            )
        }
    },

    // ==================== L2-3. 好词好句积累 ====================
    'cn5-l2-word-accumulation': {
        meta: { title: "好词好句积累 - 五年级语文 | AI7Miao语文", description: "积累优美词句，丰富写作素材。", keywords: '好词好句,积累,写作素材,五年级语文' },
        info: { title: "好词好句积累", description: "积累就像存钱！平时存够了，写作文时就能随手'取钱'用！💰", tags: [{ text: '素养进阶', color: 'purple' }, { text: '25分钟', icon: Clock, color: 'slate' }] },
        aiContext: "学生学习积累好词好句。教分类积累法：按主题（写人、写景、写事）分类收集好词好句。引导学生建立自己的素材本。",
        aiChatTitle: "💰 词句银行", aiChatIntro: "往你的'词句银行'里存好词好句，写作文时就有存款可以取啦！",
        aiMessages: [{ role: 'ai', content: '描写"高兴"你能想到几个词？开心、快乐、兴高采烈、喜出望外、手舞足蹈……积累越多，写作文时选择越多！' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />分类积累法</h2><div className="space-y-4">{[{ cat: '😊 描写高兴', words: '喜出望外、兴高采烈、眉开眼笑、手舞足蹈、心花怒放', color: 'pink' }, { cat: '😢 描写难过', words: '泪流满面、愁眉苦脸、心如刀绞、黯然神伤、悲痛欲绝', color: 'blue' }, { cat: '🌸 描写春天', words: '春暖花开、万紫千红、鸟语花香、春意盎然、春回大地', color: 'green' }, { cat: '👤 描写外貌', words: '眉清目秀、容光焕发、白发苍苍、亭亭玉立、仪表堂堂', color: 'purple' }].map(item => (<div key={item.cat} className={`p-3 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 text-sm`}>{item.cat}</h3><p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-mono">{item.words}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 准备一个专门的"素材本"，每天摘抄两三个好词好句，分类记录。坚持一年你就是词汇达人！</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 从课文或课外书中摘抄5个好句子，按"写人""写景""写事"分类整理。</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1460} question={'下面哪个成语形容非常高兴？'} options={[{ label: 'A', value: '愁眉苦脸' }, { label: 'B', value: '心花怒放' }, { label: 'C', value: '心如刀绞' }, { label: 'D', value: '泪流满面' }]} answer="B" explanation={'心花怒放"形容心里开心得像花朵盛开一样，表示非常高兴。其他三个都是描写伤心的成语。'} />
                    <PracticeProblem id={1461} type="choice" question={'写冬天天气寒冷，可以用到下面哪个四字词语？'} options={[{ label: 'A', value: '春暖花开' }, { label: 'B', value: '骄阳似火' }, { label: 'C', value: '寒风刺骨' }, { label: 'D', value: '秋高气爽' }]} answer="C" explanation="寒风像针刺在骨头上一样，形容极端寒冷。" />
                    <PracticeProblem id={1462} type="choice" question={'如果你想描写一个人学识非常渊博，可以用下面哪个成语？'} options={[{ label: 'A', value: '博览群书' }, { label: 'B', value: '呆若木鸡' }, { label: 'C', value: '虎背熊腰' }, { label: 'D', value: '心惊胆战' }]} answer="A" explanation="博览群书指广泛地阅读各种书籍，形容人学识广泛。" />
                    <PracticeProblem id={1463} type="choice" question={'在造句时，为了让句子更优美，应该多积累什么样的词语？'} options={[{ label: 'A', value: '只有两字的词' }, { label: 'B', value: '网络缩写语' }, { label: 'C', value: '丰富的形容词、精确的动词和生动的成语' }, { label: 'D', value: '口水话' }]} answer="C" explanation="丰富的词汇储备是写好作文的基石。" />
                    <PracticeProblem id={1464} type="choice" question={'“________，金石为开”是一句鼓励人坚持不懈的谚语/俗语，前面应该填？'} options={[{ label: 'A', value: '三天打鱼' }, { label: 'B', value: '精诚所至' }, { label: 'C', value: '不畏艰险' }, { label: 'D', value: '知难而退' }]} answer="B" explanation="“精诚所至，金石为开”意思是人的诚心所到，能感动天地，使金石为之开裂。" />
                    <PracticeProblem id={1465} type="choice" question={'要想写好一篇写人的作文，平时应该多积累哪些方面的词语？'} options={[{ label: 'A', value: '描写外貌、神态、动作、心理的词语' }, { label: 'B', value: '描写山川河流的词语' }, { label: 'C', value: '描写建筑物的词语' }, { label: 'D', value: '描写菜式的词语' }]} answer="A" explanation="写人离不开对人物各种特征的描写。" />
                    <PracticeProblem id={1466} type="choice" question={'下面四个描写风景的词语中，哪一个和其他三个不是同一类的？'} options={[{ label: 'A', value: '波澜壮阔' }, { label: 'B', value: '水平如镜' }, { label: 'C', value: '崇山峻岭' }, { label: 'D', value: '清澈见底' }]} answer="C" explanation="ABD都是描写水（湖海）的成语，C是描写山的成语。" />
                    <PracticeProblem id={1467} type="choice" question={'“飞流直下三千尺”、“白发三千丈”中的“三千”属于什么修辞手法，在积累时可以归为哪一类？'} options={[{ label: 'A', value: '比喻 / 比喻句' }, { label: 'B', value: '夸张 / 夸张句式示例' }, { label: 'C', value: '排比 / 排比句' }, { label: 'D', value: '拟人 / 拟人句' }]} answer="B" explanation="积累名言名句时，也要注意积累其中精妙的修辞手法作为仿写的素材。" />
                    <PracticeProblem id={1468} type="choice" question={'写秋天树叶纷纷落下的场景，哪个词最生动？'} options={[{ label: 'A', value: '掉下来了' }, { label: 'B', value: '随风飘落' }, { label: 'C', value: '扔在地上' }, { label: 'D', value: '砸向大地' }]} answer="B" explanation="“飘落”不仅写出了动作，还写出了树叶轻盈和风的作用，很有美感。" />
                    <PracticeProblem id={1469} type="choice" question={'为什么要专门准备一个摘抄本记录“好词好句”？'} options={[{ label: 'A', value: '老师逼着写的' }, { label: 'B', value: '为了让书包变重' }, { label: 'C', value: '因为人的记忆力有限，“好记性不如烂笔头”，方便以后写作文时随时翻阅借鉴' }, { label: 'D', value: '为了练字' }]} answer="C" explanation="素材积累是一个长期的过程，摘抄本就是自己的微型“语料库”。" />
                </div>
            )
        }
    }
};

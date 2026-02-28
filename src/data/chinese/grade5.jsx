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
                </div>
            )
        }
    }
};

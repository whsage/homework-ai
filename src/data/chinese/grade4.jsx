import { Icons, PracticeProblem, React } from './common';
const { Lightbulb, Clock, Star, BookOpen } = Icons;

export const grade4Content = {

    // ==================== L1-1. 缩句与扩句 ====================
    'cn4-l1-sentence-transform': {
        meta: { title: "缩句与扩句 - 四年级语文 | AI7Miao语文", description: "学习缩句和扩句的方法，掌握句子的基本结构。", keywords: '缩句,扩句,句式变换,四年级语文' },
        info: { title: "缩句与扩句", description: "句子也能变大变小！缩句像脱衣服，扩句像穿衣服！👔", tags: [{ text: '基础达标', color: 'blue' }, { text: '30分钟', icon: Clock, color: 'slate' }, { text: '重点', icon: Star, color: 'orange' }] },
        aiContext: "学生学习缩句与扩句。缩句：去掉修饰成分（'的''地''得'前面的词），保留主干'谁+做什么'。扩句：给主干添加修饰成分让句子更生动。用穿衣脱衣的比喻。",
        aiChatTitle: "👔 句子变装师", aiChatIntro: "给句子穿新衣裳或脱衣裳！你的句子你做主！",
        aiMessages: [{ role: 'ai', content: '"美丽的小鸟在茂密的树林里欢快地歌唱。"——如果给它"脱掉所有衣服"，只留下最核心的意思，你觉得会变成什么？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-red-600" />
                            缩句与扩句
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">📉 缩句 —— 给句子"脱衣服"</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">去掉修饰成分，只保留"谁 + 做什么/怎么样"的骨架：</p>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg space-y-2 text-sm">
                                    <p><del className="text-slate-400">美丽的</del><strong className="text-red-600">小鸟</strong>在<del className="text-slate-400">茂密的</del><del className="text-slate-400">树林里</del><del className="text-slate-400">欢快地</del><strong className="text-red-600">歌唱</strong>。</p>
                                    <p className="text-blue-600 font-bold">→ 小鸟歌唱。</p>
                                    <p className="mt-2 text-slate-500">口诀：去掉"的、地、得"前面的词，去掉"在…里/上"等状语！</p>
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">📈 扩句 —— 给句子"穿衣服"</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">给句子添加"什么样的""怎样地""在哪里"等修饰成分：</p>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg space-y-2 text-sm">
                                    <p><strong className="text-red-600">花开了。</strong></p>
                                    <p>→ <strong className="text-green-600">什么样的</strong>花开了？→ 美丽的花开了。</p>
                                    <p>→ 在<strong className="text-green-600">哪里</strong>开了？→ 花园里美丽的花开了。</p>
                                    <p>→ <strong className="text-green-600">怎样</strong>开了？→ 春天的花园里，美丽的花竞相开放了。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (<div className="space-y-6"><div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6"><h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 缩句三不去</h3><div className="space-y-2 text-sm text-slate-600 dark:text-slate-400"><p>1. <strong className="text-red-500">不去</strong>"不、没有"等否定词 → "他没有来" 缩成 "他没来"，不能说 "他来"</p><p>2. <strong className="text-red-500">不去</strong>"把、被"字句中的"把/被" → "猫把鱼吃了" 缩成 "猫把鱼吃了"</p><p>3. <strong className="text-red-500">不能改变</strong>原句的意思！</p></div></div></div>),
            examples: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">📝 缩句扩句练习</h2><div className="space-y-3">{[{ type: '缩句', from: '可爱的小猫在温暖的阳台上懒洋洋地晒太阳。', to: '小猫晒太阳。' }, { type: '缩句', from: '勤劳的蜜蜂在花丛中忙碌地采蜜。', to: '蜜蜂采蜜。' }, { type: '扩句', from: '雪花飘。', to: '洁白的雪花在空中纷纷扬扬地飘落。' }].map((ex, i) => (<div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-3 rounded-xl"><p className="text-xs text-slate-500 font-bold mb-1">{ex.type}</p><p className="text-sm text-slate-700 dark:text-slate-300">{ex.from}</p><p className="text-sm text-red-600 dark:text-red-400 font-bold">→ {ex.to}</p></div>))}</div></div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1300} question={'活泼可爱的小松鼠在高高的松树上灵活地跳来跳去。"缩句正确的是？'} options={[{ label: 'A', value: '松鼠跳来跳去。' }, { label: 'B', value: '小松鼠跳。' }, { label: 'C', value: '可爱的松鼠跳。' }, { label: 'D', value: '松鼠在松树上。' }]} answer="A" explanation={'保留主干：谁（松鼠）+ 做什么（跳来跳去）。去掉所有"的""地"前面的修饰词和"在…上"的状语。'} />
                    <PracticeProblem id={1301} question={'鸟飞。"扩句后下面哪个最好？'} options={[{ label: 'A', value: '鸟飞了。' }, { label: 'B', value: '一只鸟飞。' }, { label: 'C', value: '一只美丽的小鸟在蓝天上自由地飞翔。' }, { label: 'D', value: '鸟飞得好。' }]} answer="C" explanation={'C添加了数量（一只）、样子（美丽的）、地点（蓝天上）、方式（自由地）、动词升级（飞翔），最生动完整。'} />
                </div>
            )
        }
    },

    // ==================== L1-2. 关联词应用 ====================
    'cn4-l1-conjunction-usage': {
        meta: { title: "关联词应用 - 四年级语文 | AI7Miao语文", description: "深入学习关联词的辨析和在复杂句中的运用。", keywords: '关联词,复句,四年级语文' },
        info: { title: "关联词应用", description: "关联词升级版！不光要会用，还要选得对！🎯", tags: [{ text: '基础达标', color: 'blue' }, { text: '30分钟', icon: Clock, color: 'slate' }, { text: '重点', icon: Star, color: 'orange' }] },
        aiContext: "学生进阶学习关联词。重点在于辨析易混淆的关联词（如'虽然…但是…'和'尽管…还是…'），以及在选择题中正确选用关联词。",
        aiChatTitle: "🎯 关联词达人", aiChatIntro: "三年级学了基础关联词，现在我们来升级打怪！",
        aiMessages: [{ role: 'ai', content: '"___你努力学习，___一定能取得好成绩。"填"只要…就…"和"只有…才…"都行吗？它们有什么区别呢？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />关联词辨析升级</h2><div className="space-y-4">{[{ pair: '"只要…就…" vs "只有…才…"', diff: '"只要"条件比较宽松（一个条件就够），"只有"条件更严格（必须这样才行）', ex1: '只要你来，我就高兴。（你来我就开心）', ex2: '只有认真复习，才能考出好成绩。（必须认真复习）', color: 'blue' }, { pair: '"不是…而是…" vs "不是…就是…"', diff: '"不是…而是…"是纠正关系，"不是…就是…"是选择关系', ex1: '这不是你的错，而是我的错。（纠正判断）', ex2: '他不是去图书馆，就是去操场。（两者选一）', color: 'green' }, { pair: '"即使…也…" vs "虽然…但是…"', diff: '"即使"是假设（还没发生），"虽然"是事实（已经发生）', ex1: '即使明天下雨，我也要去。（还没下雨，假设的）', ex2: '虽然今天下雨了，但是他还是来了。（确实下雨了）', color: 'orange' }].map(item => (<div key={item.pair} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 text-sm mb-2`}>{item.pair}</h3><p className="text-xs text-slate-600 dark:text-slate-400 mb-1">区别：{item.diff}</p><p className="text-xs font-mono text-slate-700 dark:text-slate-300">✅ {item.ex1}</p><p className="text-xs font-mono text-slate-700 dark:text-slate-300">✅ {item.ex2}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 选关联词时先判断两个句子之间的逻辑关系（因果？转折？假设？条件？），再选对应的关联词！</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 用"不但…而且…""即使…也…""无论…都…"各造一个句子。</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1310} question={'___刮风下雨，邮递员叔叔___坚持送信。"应该填？'} options={[{ label: 'A', value: '因为…所以…' }, { label: 'B', value: '无论…都…' }, { label: 'C', value: '如果…就…' }, { label: 'D', value: '不但…而且…' }]} answer="B" explanation={'句意是不管什么天气条件都坚持送信，用"无论…都…"表示任何条件下都如此。'} />
                </div>
            )
        }
    },

    // ==================== L1-3. 必背古诗词（下） ====================
    'cn4-l1-ancient-poems-2': {
        meta: { title: "必背古诗词（下）- 四年级语文 | AI7Miao语文", description: "学习更多经典古诗词，深入赏析手法与情感。", keywords: '古诗词,诗词鉴赏,四年级语文' },
        info: { title: "必背古诗词（下）", description: "更多名篇佳作！感受诗词之美，学会赏析古人的智慧！🌺", tags: [{ text: '基础达标', color: 'blue' }, { text: '25分钟', icon: Clock, color: 'slate' }, { text: '重点', icon: Star, color: 'orange' }] },
        aiContext: "学生学习更多古诗词。四年级需要更深层次的赏析：不仅理解诗意，还要体会关键词的妙处和诗人的情感变化。",
        aiChatTitle: "🌺 诗词品鉴家", aiChatIntro: "当个小小诗词品鉴家，品味每一个字的精妙！",
        aiMessages: [{ role: 'ai', content: '"春风又绿江南岸"中的"绿"字用得好不好？本来"绿"是形容颜色的词，这里却当动词用来写春风，你觉得有什么效果？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><BookOpen className="w-6 h-6 text-red-600" />经典古诗赏析</h2>
                        <div className="space-y-5">
                            {[
                                { title: '《泊船瓜洲》 —— 王安石', poem: '京口瓜洲一水间，钟山只隔数重山。\n春风又绿江南岸，明月何时照我还。', meaning: '京口和瓜洲只隔一条长江，钟山也只隔着几座山。春风又把江南岸吹绿了，明月啊，你什么时候能照着我回到家乡呢？', keypoint: '🔑 "绿"字是全诗的"诗眼"！形容词当动词，春风"绿"了江南——把春天到来的画面感和生命力写活了！', color: 'blue' },
                                { title: '《题西林壁》 —— 苏轼', poem: '横看成岭侧成峰，远近高低各不同。\n不识庐山真面目，只缘身在此山中。', meaning: '从正面看是山岭，从侧面看是山峰，从远、近、高、低各个角度看都不一样。看不清庐山的真面目，只因为自己就在山中。', keypoint: '🔑 蕴含哲理：对事物的认识受角度限制，要跳出来才能看到全貌——"旁观者清，当局者迷"！', color: 'green' },
                            ].map(poem => (
                                <div key={poem.title} className={`p-5 rounded-xl border-l-4 border-${poem.color}-500 bg-${poem.color}-50 dark:bg-${poem.color}-900/20`}>
                                    <h3 className={`font-bold text-${poem.color}-800 dark:text-${poem.color}-300 text-lg mb-2`}>{poem.title}</h3>
                                    <pre className="text-slate-800 dark:text-white font-mono text-sm whitespace-pre-line mb-3 leading-relaxed">{poem.poem}</pre>
                                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">📖 {poem.meaning}</p>
                                    <p className="text-sm text-slate-700 dark:text-slate-300">{poem.keypoint}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 赏析诗词时关注"诗眼"——全诗最关键的那个字词，它往往是诗人反复推敲的结果！</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 背诵并默写这两首诗，试着用自己的话说说诗的意思。</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1320} question={'不识庐山真面目，只缘身在此山中"告诉我们什么道理？'} options={[{ label: 'A', value: '庐山很大看不完' }, { label: 'B', value: '要从不同角度看问题' }, { label: 'C', value: '山里面很黑' }, { label: 'D', value: '要多爬山' }]} answer="B" explanation={'这两句诗告诉我们看问题要全面，不能只从一个角度出发，否则就像在山中看山一样，看不到全貌。'} />
                </div>
            )
        }
    },

    // ==================== L1-4. 阅读理解（记叙文） ====================
    'cn4-l1-reading-comprehension': {
        meta: { title: "阅读理解（记叙文）- 四年级语文 | AI7Miao语文", description: "学习分析记叙文的人物、事件、中心思想。", keywords: '阅读理解,记叙文,中心思想,四年级语文' },
        info: { title: "阅读理解（记叙文）", description: "读懂文章的'骨架'和'灵魂'！从人物和事件中找到作者想说的话！📖", tags: [{ text: '基础达标', color: 'blue' }, { text: '35分钟', icon: Clock, color: 'slate' }, { text: '重点', icon: Star, color: 'orange' }] },
        aiContext: "学生学习记叙文阅读理解。重点是六要素（时间、地点、人物、起因、经过、结果）和归纳中心思想的方法。",
        aiChatTitle: "📖 阅读分析师", aiChatIntro: "记叙文有六大线索！找到它们，文章就被你'破解'了！",
        aiMessages: [{ role: 'ai', content: '读一篇记叙文时，你知道要找哪"六大要素"吗？时间、地点、人物，还有呢？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />记叙文六要素</h2><div className="grid grid-cols-2 md:grid-cols-3 gap-3">{[{ e: '⏰', n: '时间', d: '什么时候', color: 'blue' }, { e: '📍', n: '地点', d: '在哪里', color: 'green' }, { e: '👥', n: '人物', d: '谁', color: 'purple' }, { e: '❓', n: '起因', d: '为什么', color: 'orange' }, { e: '📋', n: '经过', d: '怎么做的', color: 'pink' }, { e: '✅', n: '结果', d: '最后怎样', color: 'red' }].map(item => (<div key={item.n} className={`p-3 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20 text-center`}><span className="text-2xl">{item.e}</span><p className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 text-sm`}>{item.n}</p><p className="text-xs text-slate-500">{item.d}</p></div>))}</div><div className="mt-5 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border-l-4 border-yellow-400"><p className="font-bold text-yellow-800 dark:text-yellow-300 mb-1">💡 归纳中心思想</p><p className="text-sm text-slate-700 dark:text-slate-300">公式：通过____（事件），表达了____（情感/道理）。<br />例："通过写妈妈雨中送伞的事，表达了母爱的伟大。"</p></div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 答题时先找六要素，再看开头和结尾（常点明中心），最后组织语言作答。</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 找一篇课文，试着用六要素分析它，并概括中心思想。</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1330} question={'记叙文的六要素不包括下面哪一个？'} options={[{ label: 'A', value: '时间' }, { label: 'B', value: '人物' }, { label: 'C', value: '天气' }, { label: 'D', value: '经过' }]} answer="C" explanation={'记叙文六要素是：时间、地点、人物、起因、经过、结果。天气不属于六要素（但可以是环境描写）。'} />
                </div>
            )
        }
    },

    // ==================== L2-1. 写作进阶（写景状物） ====================
    'cn4-l2-writing-scenes': {
        meta: { title: "写作进阶 - 四年级语文 | AI7Miao语文", description: "学习写景和状物的方法和技巧。", keywords: '写景,状物,描写,四年级语文' },
        info: { title: "写作进阶（写景状物）", description: "用文字画一幅画！让读者看了你的文章就像身临其境！🎨", tags: [{ text: '素养进阶', color: 'purple' }, { text: '35分钟', icon: Clock, color: 'slate' }, { text: '重点', icon: Star, color: 'orange' }] },
        aiContext: "学生学习写景状物。写景要按顺序（时间或空间），运用修辞手法（比喻拟人），调动感官描写（看听闻触）。",
        aiChatTitle: "🎨 风景画家", aiChatIntro: "用文字当画笔，画出最美的风景！",
        aiMessages: [{ role: 'ai', content: '描写春天的公园，你会用到哪些感官？眼睛看到什么颜色？耳朵听到什么声音？鼻子闻到什么味道？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />写景三大法宝</h2><div className="space-y-4">{[{ t: '🗺️ 按顺序写', d: '时间顺序（早→中→晚）或空间顺序（远→近，上→下，左→右），让读者跟着你的脚步走！', color: 'blue' }, { t: '👁️👂👃 调动五感', d: '不只用眼睛看！用耳朵听（鸟鸣），用鼻子闻（花香），用手触摸（微风），用嘴巴尝（泉水甜）。', color: 'green' }, { t: '✨ 用修辞添彩', d: '比喻让景物更生动（"湖水像一面镜子"），拟人让景物有感情（"花儿笑弯了腰"）。', color: 'purple' }].map(item => (<div key={item.t} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-1`}>{item.t}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{item.d}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 写景文结尾常用"借景抒情"——通过景物表达自己的心情或感受！</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 写一篇300字左右的写景作文："我最喜欢的季节"或"美丽的校园"。</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1340} question={'写景文常用的观察顺序不包括？'} options={[{ label: 'A', value: '从远到近' }, { label: 'B', value: '从早到晚' }, { label: 'C', value: '按字母顺序' }, { label: 'D', value: '从上到下' }]} answer="C" explanation={'写景文按空间顺序（远近、上下）或时间顺序（早中晚、四季）组织，不会按字母顺序。'} />
                </div>
            )
        }
    },

    // ==================== L2-2. 病句修改 ====================
    'cn4-l2-sick-sentences': {
        meta: { title: "病句修改 - 四年级语文 | AI7Miao语文", description: "学习识别和修改常见病句类型。", keywords: '病句,修改病句,语病,四年级语文' },
        info: { title: "病句修改", description: "句子也会'生病'！当个小医生，给句子看病开药方！🏥", tags: [{ text: '素养进阶', color: 'purple' }, { text: '30分钟', icon: Clock, color: 'slate' }, { text: '重点', icon: Star, color: 'orange' }] },
        aiContext: "学生学习病句修改。四大病句类型：成分残缺、搭配不当、语序不当、重复啰嗦。用'看病'的比喻教学。",
        aiChatTitle: "🏥 句子小医生", aiChatIntro: "句子也会生病！来当小医生，找出病因，开出药方！",
        aiMessages: [{ role: 'ai', content: '"我们要不断改进学习态度。"——这句话"生病"了！你能找出哪里有问题吗？提示：是"改进"和"态度"搭配不当。' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />四大"病句"类型</h2><div className="space-y-4">{[{ type: '🦴 成分残缺', desc: '句子缺了"谁"或"做什么"', sick: '通过这次活动，使我受到了教育。', fix: '通过这次活动，我受到了教育。（去掉"使"，恢复主语"我"）', color: 'red' }, { type: '🧩 搭配不当', desc: '词语之间不搭配', sick: '我们要改进学习态度。', fix: '我们要端正学习态度。（"态度"要用"端正"不用"改进"）', color: 'orange' }, { type: '🔄 语序不当', desc: '词语顺序放错了', sick: '我基本上把作业全做完了。', fix: '我把作业基本上全做完了。（"基本上"应修饰"做完"）', color: 'blue' }, { type: '📝 重复啰嗦', desc: '说了重复的话', sick: '他大约差不多有十岁左右。', fix: '他大约十岁。（"大约""差不多""左右"意思重复，保留一个）', color: 'green' }].map(item => (<div key={item.type} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-1`}>{item.type}</h3><p className="text-xs text-slate-500 mb-1">{item.desc}</p><p className="text-sm text-red-600 line-through dark:text-red-400">❌ {item.sick}</p><p className="text-sm text-green-600 dark:text-green-400">✅ {item.fix}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 修改病句口诀：读一遍感觉不通顺→找出病因→对症下药→读一遍检查是否通顺。</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 在你的作文中检查一遍，看看有没有这四种"病句"。</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1350} question={'他的学习成绩明显改良了。"这个病句属于什么类型？'} options={[{ label: 'A', value: '成分残缺' }, { label: 'B', value: '搭配不当' }, { label: 'C', value: '语序不当' }, { label: 'D', value: '重复啰嗦' }]} answer="B" explanation={'成绩"应与"提高"搭配，不能与"改良"搭配。"改良"一般用于"土壤""品种"等。应改为"他的学习成绩明显提高了。"'} />
                </div>
            )
        }
    },

    // ==================== L2-3. 修辞手法进阶 ====================
    'cn4-l2-rhetoric-adv': {
        meta: { title: "修辞手法进阶 - 四年级语文 | AI7Miao语文", description: "学习排比和夸张修辞手法。", keywords: '排比,夸张,修辞手法,四年级语文' },
        info: { title: "修辞手法（排比·夸张）", description: "排比让文章有气势！夸张让文章有张力！又学两招修辞魔法！💫", tags: [{ text: '素养进阶', color: 'purple' }, { text: '25分钟', icon: Clock, color: 'slate' }] },
        aiContext: "学生学习排比和夸张。排比是三个以上结构相似的句子；夸张是有意放大或缩小事物特征。辨析适度夸张与不合理表达的区别。",
        aiChatTitle: "💫 修辞大师", aiChatIntro: "排比和夸张是让文章更有感染力的秘密武器！",
        aiMessages: [{ role: 'ai', content: '"他饿得能吃下一头牛！"——这是夸张！谁也吃不下一头牛，但这样说就让人感受到他非常非常饿！你能模仿造一个夸张句吗？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />排比与夸张</h2><div className="space-y-5"><div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500"><h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">📢 排比 —— 三句以上，结构相似，气势磅礴</h3><div className="bg-white dark:bg-slate-700 p-3 rounded-lg text-sm space-y-1"><p className="text-slate-700 dark:text-slate-300">一年之计在于<strong className="text-blue-600">春</strong>，</p><p className="text-slate-700 dark:text-slate-300">一日之计在于<strong className="text-blue-600">晨</strong>，</p><p className="text-slate-700 dark:text-slate-300">一家之计在于<strong className="text-blue-600">和</strong>，</p><p className="text-slate-700 dark:text-slate-300">一生之计在于<strong className="text-blue-600">勤</strong>。</p><p className="text-xs text-slate-500 mt-2">特点：三个以上结构相同/相似的句子排列在一起！</p></div></div><div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl border-l-4 border-orange-500"><h3 className="font-bold text-orange-800 dark:text-orange-300 mb-3">🔍 夸张 —— 故意"吹大"或"缩小"</h3><div className="bg-white dark:bg-slate-700 p-3 rounded-lg text-sm space-y-1"><p className="text-slate-700 dark:text-slate-300">他饿得能<strong className="text-orange-600">吃下一头牛</strong>！（扩大夸张）</p><p className="text-slate-700 dark:text-slate-300">教室里静得<strong className="text-orange-600">连根针掉在地上都听得见</strong>。（扩大夸张）</p><p className="text-slate-700 dark:text-slate-300">巴掌大的地方<strong className="text-orange-600">还能种花</strong>？（缩小夸张）</p></div></div></div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 排比用在作文中能增强气势，用在演讲中更有感染力！夸张用来强调特征，但不能脱离实际太远哦！</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 写一段排比句描述你喜欢的季节，再写一句夸张句描述你最开心的时刻！</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1360} question={'下面哪个是排比句？'} options={[{ label: 'A', value: '他既聪明又勤劳。' }, { label: 'B', value: '风来了，雨来了。' }, { label: 'C', value: '花红了，草绿了，鸟儿叫了。' }, { label: 'D', value: '月亮像一面镜子。' }]} answer="C" explanation={'排比需要三个以上结构相似的短句。C选项三个句子结构相同（主语+动词+了），构成排比。'} />
                </div>
            )
        }
    }
};

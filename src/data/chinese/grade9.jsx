import { Lightbulb, Star, Clock, Brain } from 'lucide-react';
import { PracticeProblem } from './common';

// ==================== 初三语文 ====================
export const grade9Content = {
    // ==================== L1-1. 中考阅读专题 ====================
    'cn9-l1-reading-exam': {
        meta: { title: "中考阅读专题 - 初三语文 | AI7Miao语文", description: "系统训练中考阅读理解各类题型。", keywords: "中考阅读,记叙文,说明文,议论文,初三语文" },
        info: { title: "中考阅读专题", description: "三大文体一网打尽！中考阅读理解不丢分！📋", tags: [{ text: "基础达标", color: "blue" }, { text: "45分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "初三学生中考阅读专项训练。系统复习记叙文（人物分析、主旨概括、语句赏析）、说明文（方法辨析、语言准确性）、议论文（论点论据论证）的常见题型和答题模板。",
        aiChatTitle: "📋 中考阅读特训", aiChatIntro: "掌握三大文体的答题套路，阅读理解拿高分！",
        aiMessages: [{ role: 'ai', content: '中考阅读三大文体：记叙文、说明文、议论文。每种文体都有固定的答题模板，你知道哪些？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />中考阅读答题框架</h2><div className="space-y-4">{[{ type: '📖 记叙文', desc: '人物形象分析、主旨概括、语句赏析（修辞+内容+情感）', color: 'blue' }, { type: '🔬 说明文', desc: '说明方法辨析、说明顺序判断、语言准确性分析', color: 'green' }, { type: '💪 议论文', desc: '找论点、辨论据类型、析论证方法、补写论据', color: 'purple' }].map(item => (<div key={item.type} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-1`}>{item.type}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 赏析语句公式：运用了___修辞/手法，生动形象地写出了___，表达了___的情感</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 完成一套中考真题阅读理解，用答题模板规范作答。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={1800} question="赏析语句时，下列哪个答题角度最全面？" options={[{ label: 'A', value: '只分析修辞手法' }, { label: 'B', value: '修辞手法+表达内容+情感态度' }, { label: 'C', value: '只翻译句子意思' }, { label: 'D', value: '只说好不好' }]} answer="B" explanation={'完整的语句赏析要包含三个层面：用了什么手法（修辞/表现手法），写出了什么内容，表达了什么情感。'} /></div>)
        }
    },

    // ==================== L1-2. 文言文综合训练 ====================
    'cn9-l1-classical-comprehensive': {
        meta: { title: "文言文综合训练 - 初三语文 | AI7Miao语文", description: "系统复习文言文，备战中考。", keywords: "文言文,中考复习,虚词实词,初三语文" },
        info: { title: "文言文综合训练", description: "中考文言文全面突破！实词虚词句式翻译一网打尽！📜", tags: [{ text: "基础达标", color: "blue" }, { text: "40分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "初三学生系统复习文言文。涵盖：120个常考实词、18个虚词、四大特殊句式、词类活用、古今异义、通假字、翻译技巧和内容理解。",
        aiChatTitle: "📜 文言文通关", aiChatIntro: "系统复习中考文言文考点，做到心中有数！",
        aiMessages: [{ role: 'ai', content: '中考文言文常考的虚词有"之、而、以、于、其、为"等，你能分别说出它们最常见的两种意思吗？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />中考文言文考点</h2><div className="space-y-4"><div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border-l-4 border-red-500"><h3 className="font-bold text-red-800 dark:text-red-300">📌 必考实词虚词</h3><p className="text-sm text-slate-600">120个常考实词 + 18个虚词的各种用法</p></div><div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-500"><h3 className="font-bold text-blue-800 dark:text-blue-300">📋 翻译要点</h3><p className="text-sm text-slate-600">逐字翻译为主，意译为辅；注意关键词的落实</p></div><div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border-l-4 border-green-500"><h3 className="font-bold text-green-800 dark:text-green-300">📝 内容理解</h3><p className="text-sm text-slate-600">概括内容、分析人物、理解主旨、联系实际</p></div></div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 通假字识别：通假字往往读音相近，如"说"通"悦"（高兴）、"女"通"汝"（你）</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 翻译《岳阳楼记》重点段落，标注所有考点。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={1810} question={'文言文翻译中"信达雅"原则，最基本的要求是？'} options={[{ label: 'A', value: '信（忠实原文）' }, { label: 'B', value: '达（语句通顺）' }, { label: 'C', value: '雅（文笔优美）' }, { label: 'D', value: '三者同等重要' }]} answer="A" explanation={'"信"是最基本的要求，即翻译必须忠实原文，不能改变原意。在此基础上追求通顺（达）和优美（雅）。'} /></div>)
        }
    },

    // ==================== L1-3. 古诗鉴赏综合 ====================
    'cn9-l1-poetry-comprehensive': {
        meta: { title: "古诗鉴赏综合 - 初三语文 | AI7Miao语文", description: "系统复习古诗词鉴赏方法。", keywords: "古诗鉴赏,中考诗词,意象意境,初三语文" },
        info: { title: "古诗鉴赏综合", description: "诗词鉴赏全攻略！从意象到手法，从情感到主旨！🎋", tags: [{ text: "基础达标", color: "blue" }, { text: "35分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "综合复习古诗词鉴赏方法和常考题型。掌握诗歌分类（山水田园、边塞征战、咏史怀古、送别思乡、咏物抒怀），常见表现手法（借景抒情、托物言志、用典、虚实结合），答题规范。",
        aiChatTitle: "🎋 诗词鉴赏大师", aiChatIntro: "中考诗词鉴赏有方法！掌握套路，读诗不再难！",
        aiMessages: [{ role: 'ai', content: '中考诗词鉴赏常见题型：意象分析、手法鉴赏、情感体悟、名句赏析。你最怕哪种？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />诗歌分类与情感</h2><div className="grid grid-cols-2 gap-3">{[{ type: '🏔️ 山水田园', emotion: '热爱自然、归隐田园', color: 'green' }, { type: '⚔️ 边塞征战', emotion: '报国之志、战争之苦', color: 'red' }, { type: '📜 咏史怀古', emotion: '借古讽今、感慨兴衰', color: 'purple' }, { type: '🌙 送别思乡', emotion: '离愁别绪、思念家乡', color: 'blue' }].map(p => (<div key={p.type} className={`p-3 rounded-xl border border-${p.color}-200 dark:border-${p.color}-800 bg-${p.color}-50 dark:bg-${p.color}-900/20`}><h3 className={`font-bold text-${p.color}-700 dark:text-${p.color}-300 text-sm`}>{p.type}</h3><p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{p.emotion}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 常见手法：借景抒情、托物言志、用典、对比、虚实结合、以动衬静、以乐写哀</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 鉴赏杜甫《春望》，从意象、手法、情感三个角度分析。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={1820} question={'借景抒情与托物言志的区别是什么？'} options={[{ label: 'A', value: '没有区别' }, { label: 'B', value: '借景侧重情感，托物侧重志向品格' }, { label: 'C', value: '借景写景，托物写人' }, { label: 'D', value: '借景用比喻，托物用拟人' }]} answer="B" explanation={'借景抒情侧重通过景物表达情感（喜怒哀乐），托物言志侧重通过事物表达志向或品格（如咏梅表高洁）。'} /></div>)
        }
    },

    // ==================== L1-4. 中考作文突破 ====================
    'cn9-l1-exam-writing': {
        meta: { title: "中考作文突破 - 初三语文 | AI7Miao语文", description: "掌握中考作文高分技巧。", keywords: "中考作文,审题立意,作文结构,初三语文" },
        info: { title: "中考作文突破", description: "中考作文冲刺满分！审题+立意+结构+语言=高分！🏆", tags: [{ text: "基础达标", color: "blue" }, { text: "45分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "初三学生中考作文专题。涵盖审题方法、立意技巧、开头结尾升级、素材积累与运用、考场时间分配。帮助学生写出有深度、有文采的考场作文。",
        aiChatTitle: "🏆 作文满分教练", aiChatIntro: "掌握中考作文的秘诀，让阅卷老师眼前一亮！",
        aiMessages: [{ role: 'ai', content: '中考作文审题非常重要！题目中的每一个字都要仔细分析。比如"那一次，我真____"，你会怎么审题？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />中考作文高分策略</h2><div className="space-y-4">{[{ step: '1️⃣ 精准审题', desc: '抓关键词、审范围、定写作方向', color: 'red' }, { step: '2️⃣ 深刻立意', desc: '以小见大、由浅入深，写出成长感悟', color: 'blue' }, { step: '3️⃣ 巧妙结构', desc: '总分总/并列/递进，首尾呼应、过渡自然', color: 'green' }, { step: '4️⃣ 生动语言', desc: '善用修辞、细节描写、引用诗句名言', color: 'purple' }].map(item => (<div key={item.step} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-1`}>{item.step}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 考场时间分配：审题3分钟 → 列提纲5分钟 → 写作30分钟 → 检查修改2分钟</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 以"成长路上的那盏灯"为题，列出写作提纲。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={1830} question="中考作文审题最重要的是？" options={[{ label: 'A', value: '写得越长越好' }, { label: 'B', value: '抓住题目中的关键词' }, { label: 'C', value: '用华丽的辞藻' }, { label: 'D', value: '抄范文' }]} answer="B" explanation={'审题是作文的第一步也是最关键的一步，抓住关键词才能确保不跑题，才能精准立意。'} /></div>)
        }
    },

    // ==================== L2-1. 名著阅读综合 ====================
    'cn9-l2-classics-comprehensive': {
        meta: { title: "名著阅读综合 - 初三语文 | AI7Miao语文", description: "系统复习初中必读名著。", keywords: "名著阅读,中考名著,水浒传,初三语文" },
        info: { title: "名著阅读综合", description: "初中必读名著大回顾！人物、情节、主题全掌握！📚", tags: [{ text: "素养进阶", color: "purple" }, { text: "40分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "系统复习初中必读名著：《水浒传》《简·爱》《儒林外史》《艾青诗选》等。训练名著知识识记、人物形象分析、情节概括、主题探究等中考常见题型。",
        aiChatTitle: "📚 名著通关赛", aiChatIntro: "初中必读的12部名著，你都记住了吗？来一起复习！",
        aiMessages: [{ role: 'ai', content: '《水浒传》中的108将，你最喜欢哪位？说说他/她的绰号、性格特点和经典情节。' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />中考名著复习要点</h2><div className="space-y-3"><div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border-l-4 border-amber-500"><h3 className="font-bold text-amber-800 dark:text-amber-300">🎭 人物形象</h3><p className="text-sm text-slate-600">性格特点 + 典型事件 + 作者态度</p></div><div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-500"><h3 className="font-bold text-blue-800 dark:text-blue-300">📋 情节概括</h3><p className="text-sm text-slate-600">谁+在什么情况下+做了什么+结果如何</p></div><div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border-l-4 border-green-500"><h3 className="font-bold text-green-800 dark:text-green-300">💡 主题探究</h3><p className="text-sm text-slate-600">作品反映的社会现实和人生哲理</p></div></div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 初中12部必读名著：《朝花夕拾》《西游记》《骆驼祥子》《海底两万里》《红星照耀中国》《昆虫记》《傅雷家书》《钢铁是怎样炼成的》《艾青诗选》《水浒传》《简·爱》《儒林外史》</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 为每部必读名著制作一张知识卡片。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={1840} question={'《骆驼祥子》的作者是谁？'} options={[{ label: 'A', value: '鲁迅' }, { label: 'B', value: '老舍' }, { label: 'C', value: '巴金' }, { label: 'D', value: '茅盾' }]} answer="B" explanation={'《骆驼祥子》是老舍的代表作，讲述了北京人力车夫祥子三起三落的悲惨故事。'} /></div>)
        }
    },

    // ==================== L2-2. 语言运用综合 ====================
    'cn9-l2-language-use': {
        meta: { title: "语言运用综合 - 初三语文 | AI7Miao语文", description: "综合训练语言运用能力。", keywords: "语言运用,病句,仿句,口语交际,初三语文" },
        info: { title: "语言运用综合", description: "语言文字运用大集合！病句、仿句、口语交际全搞定！🗣️", tags: [{ text: "素养进阶", color: "purple" }, { text: "35分钟", icon: Clock, color: "slate" }] },
        aiContext: "综合训练中考语言运用题型：病句辨析与修改、仿写句子、口语交际（劝说/转述/采访）、图文转换、对联、综合性学习活动。",
        aiChatTitle: "🗣️ 语言运用达人", aiChatIntro: "语言运用题千变万化，但万变不离其宗！掌握方法就不怕！",
        aiMessages: [{ role: 'ai', content: '如果同学在图书馆大声说话，你会怎么礼貌地劝说他？注意语气和措辞！' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />语言运用题型汇总</h2><div className="space-y-4">{[{ type: '🏥 病句修改', desc: '搭配不当、成分残缺、语序不当、重复赘余', color: 'red' }, { type: '✍️ 仿写句子', desc: '内容相关、结构相同、修辞一致', color: 'blue' }, { type: '💬 口语交际', desc: '称呼得体、理由充分、语气委婉', color: 'green' }].map(item => (<div key={item.type} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-1`}>{item.type}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 仿写三一致：结构一致、修辞一致、内容一致</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 完成一组综合性语言运用练习题。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={1850} question="口语交际中，劝说别人时最重要的是？" options={[{ label: 'A', value: '直接批评对方' }, { label: 'B', value: '语气委婉，以理服人' }, { label: 'C', value: '不管对方感受' }, { label: 'D', value: '用命令语气' }]} answer="B" explanation={'劝说要注意语气委婉、态度诚恳、理由充分，这样更容易被接受。'} /></div>)
        }
    },

    // ==================== L2-3. 中考语文冲刺 ====================
    'cn9-l2-exam-sprint': {
        meta: { title: "中考语文冲刺 - 初三语文 | AI7Miao语文", description: "中考语文最后冲刺，查缺补漏。", keywords: "中考冲刺,语文复习,考试技巧,初三语文" },
        info: { title: "中考语文冲刺", description: "最后冲刺！查缺补漏，稳拿高分！🚀", tags: [{ text: "素养进阶", color: "purple" }, { text: "45分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "中考前最后冲刺阶段。帮助学生制定复习计划，梳理易错点和高频考点，传授考场答题技巧和时间管理策略。",
        aiChatTitle: "🚀 冲刺加速器", aiChatIntro: "最后阶段，稳住心态，查缺补漏，你已经准备好了！",
        aiMessages: [{ role: 'ai', content: '中考语文考试策略：先做基础题（字词、默写），再做阅读理解，最后写作文。你的考试顺序是什么？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />中考冲刺策略</h2><div className="space-y-4">{[{ step: '📋 基础稳拿', desc: '字音字形、古诗默写、名著常识——必须拿满分', color: 'green' }, { step: '📖 阅读突破', desc: '掌握答题模板，规范答题格式，不遗漏要点', color: 'blue' }, { step: '✍️ 作文出彩', desc: '准备2-3个万能素材，练好开头结尾', color: 'purple' }, { step: '⏰ 时间管理', desc: '基础15min → 阅读55min → 作文45min → 检查5min', color: 'orange' }].map(item => (<div key={item.step} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-1`}>{item.step}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 考前心态：适度紧张有助发挥，过度焦虑影响思维。相信自己！</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 完成一套中考模拟卷，严格控制时间。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={1860} question="中考语文考试中，最应该先做哪部分？" options={[{ label: 'A', value: '先写作文' }, { label: 'B', value: '先做最难的阅读' }, { label: 'C', value: '先做基础题（字词默写）' }, { label: 'D', value: '随便做' }]} answer="C" explanation={'基础题（字音字形、古诗默写等）相对简单且分值固定，应该先做完确保不丢分，再做阅读和作文。'} /></div>)
        }
    }
};

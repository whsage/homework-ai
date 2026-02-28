import { Lightbulb, Star, Clock, Brain } from 'lucide-react';
import { PracticeProblem } from './common';

// ==================== 高三语文 ====================
export const grade12Content = {
    'cn12-l1-gaokao-reading': {
        meta: { title: "高考阅读专题 - 高三语文 | AI7Miao语文", description: "系统训练高考阅读各类题型。", keywords: "高考阅读,论述类文本,实用类文本,文学类文本,高三语文" },
        info: { title: "高考阅读专题", description: "三大阅读类型全面突破！高考阅读不丢分！📋", tags: [{ text: "基础达标", color: "blue" }, { text: "50分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "高三学生高考阅读专题训练。系统复习论述类文本（逻辑推理、信息筛选）、实用类文本（非连续性文本、图文转换）、文学类文本（小说/散文鉴赏）的高考常见题型和满分答题模板。",
        aiChatTitle: "📋 高考阅读特训", aiChatIntro: "高考阅读三大板块，掌握答题方法就能拿高分！",
        aiMessages: [{ role: 'ai', content: '高考论述类文本最常考的是"选非题"——选出不当的一项。做这类题最关键的技巧是什么？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />高考阅读三大板块</h2><div className="space-y-4">{[{ type: '📊 论述类文本', desc: '考查逻辑推理能力。注意：偷换概念、以偏概全、因果混乱、无中生有', color: 'blue' }, { type: '📰 实用类文本', desc: '考查信息筛选整合。非连续性文本（图表+文字）的综合分析', color: 'green' }, { type: '📖 文学类文本', desc: '考查鉴赏能力。小说：人物/情节/环境/主题。散文：线索/语言/手法/情感', color: 'purple' }].map(item => (<div key={item.type} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-1`}>{item.type}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 论述类文本陷阱：偷换概念、以偏概全、强加因果、混淆已然和未然、混淆或然和必然</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 完成近三年高考真题阅读部分，总结错题规律。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={2100} question="论述类文本选择题最常见的设错方式是？" options={[{ label: 'A', value: '故意写错别字' }, { label: 'B', value: '偷换概念和以偏概全' }, { label: 'C', value: '出现新的内容' }, { label: 'D', value: '改变段落顺序' }]} answer="B" explanation={'论述类文本选择题最常见的陷阱是偷换概念（换个词）和以偏概全（局部当整体），需要逐字比对原文。'} /></div>)
        }
    },

    'cn12-l1-classical-breakthrough': {
        meta: { title: "文言文综合突破 - 高三语文 | AI7Miao语文", description: "高考文言文综合突破训练。", keywords: "高考文言文,断句,翻译,文化常识,高三语文" },
        info: { title: "文言文综合突破", description: "高考文言文全面突破！断句+翻译+内容理解=满分！📜", tags: [{ text: "基础达标", color: "blue" }, { text: "45分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "高考文言文专题突破。涵盖：断句（主语找定、虚词标志）、文化常识（官职、称谓、科举、礼仪）、翻译（得分点落实）、内容概括和分析。",
        aiChatTitle: "📜 文言文突破营", aiChatIntro: "高考文言文19分，掌握方法一分不丢！",
        aiMessages: [{ role: 'ai', content: '高考文言文断句是必考题。断句有几个关键技巧：1.找名词定主语 2.看虚词找标志 3.析句式明结构。你会用吗？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />高考文言文考点</h2><div className="space-y-4">{[{ type: '✂️ 断句', desc: '找主语、看虚词（者/也/矣/焉/乎）、析对称结构', color: 'blue' }, { type: '🏛️ 文化常识', desc: '官职变动（迁/擢/谪/黜）、称谓（字/号/谥号）、科举制度', color: 'red' }, { type: '📝 翻译', desc: '落实关键词（实词+虚词+句式），做到字字落实', color: 'green' }, { type: '📋 内容分析', desc: '概括事件、分析人物品质、理解作者态度', color: 'purple' }].map(item => (<div key={item.type} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-1`}>{item.type}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 官职升降：擢/拔/迁（升官）、谪/贬/黜（降官）、出（外放）、除/拜（授官）</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 完成近5年高考文言文真题，整理文化常识高频考点。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={2110} question={'下列官职变动词语中，表示"降职"的是？'} options={[{ label: 'A', value: '擢' }, { label: 'B', value: '拜' }, { label: 'C', value: '谪' }, { label: 'D', value: '除' }]} answer="C" explanation={'"谪"表示降职外调。"擢"是提拔，"拜"和"除"都表示授予官职。'} /></div>)
        }
    },

    'cn12-l1-poetry-mastery': {
        meta: { title: "古诗鉴赏综合 - 高三语文 | AI7Miao语文", description: "高考古诗鉴赏综合突破。", keywords: "高考诗歌,诗歌鉴赏,表现手法,高三语文" },
        info: { title: "古诗鉴赏综合", description: "高考诗歌鉴赏满分攻略！读诗不怕，答题有方！🎋", tags: [{ text: "基础达标", color: "blue" }, { text: "40分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "高考古诗鉴赏专题。掌握高考诗歌鉴赏的答题角度（内容理解、手法分析、情感探究、语言赏析）和规范答题模板。",
        aiChatTitle: "🎋 诗歌鉴赏满分课", aiChatIntro: "高考诗歌鉴赏有套路！掌握答题模板，拿满分不是梦！",
        aiMessages: [{ role: 'ai', content: '高考诗歌鉴赏题通常考两个问题：一个关于手法/语言，一个关于情感/主旨。你知道标准答题格式吗？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />高考诗歌答题模板</h2><div className="space-y-4">{[{ type: '🎨 手法分析题', desc: '指出手法 → 结合诗句分析 → 说明表达效果', color: 'blue' }, { type: '💫 情感分析题', desc: '点明情感 → 引用原文依据 → 分析情感由来', color: 'green' }, { type: '🔤 炼字题', desc: '解释原义 → 分析语境义 → 体会表达效果', color: 'purple' }, { type: '📖 意境题', desc: '描绘画面 → 概括意境特点 → 分析情感', color: 'orange' }].map(item => (<div key={item.type} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-1`}>{item.type}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 高考常考手法：借景抒情、虚实结合、对比、用典、动静结合、以乐写哀</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 用标准模板完成近年高考诗歌鉴赏真题。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={2120} question="高考诗歌手法分析题的标准答题步骤是？" options={[{ label: 'A', value: '直接说好' }, { label: 'B', value: '指出手法→结合诗句→分析效果' }, { label: 'C', value: '只翻译诗句' }, { label: 'D', value: '说明诗人生平' }]} answer="B" explanation={'标准的手法分析三步骤：①明确指出手法名称 ②结合具体诗句进行分析 ③说明这种手法的表达效果/作用。'} /></div>)
        }
    },

    'cn12-l1-gaokao-writing': {
        meta: { title: "高考作文突破 - 高三语文 | AI7Miao语文", description: "高考作文高分突破策略。", keywords: "高考作文,审题立意,议论文,高三语文" },
        info: { title: "高考作文突破", description: "60分的作文决定成败！审题精准+立意深刻=高分！🏆", tags: [{ text: "基础达标", color: "blue" }, { text: "50分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "高考作文专题突破。涵盖新材料作文的审题方法（抓关键词、析含义、找角度）、立意技巧（由表及里、联系时代）、结构安排、语言提升。",
        aiChatTitle: "🏆 高考作文密训", aiChatIntro: "高考作文60分，掌握方法冲击50+！",
        aiMessages: [{ role: 'ai', content: '近年高考作文越来越注重思辨性。什么叫"辩证分析"？怎么在作文中体现思维的深度？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />高考作文满分策略</h2><div className="space-y-4">{[{ step: '1️⃣ 精准审题', desc: '新材料作文：抓材料核心→提炼关键概念→确定写作方向', color: 'red' }, { step: '2️⃣ 深刻立意', desc: '不停留在"是什么"，要深入"为什么"和"怎么做"，体现思辨性', color: 'blue' }, { step: '3️⃣ 清晰结构', desc: '引论（100字）→ 本论（700字，2-3个分论点）→ 结论（100字）', color: 'green' }, { step: '4️⃣ 亮点语言', desc: '名言开头、排比展开、类比论证、联系时事', color: 'purple' }].map(item => (<div key={item.step} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-1`}>{item.step}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 高考作文评分：内容20分+表达20分+发展20分（深刻/丰富/文采/创新）</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 对近年高考作文真题进行审题训练，列出三个不同的立意角度。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={2130} question="高考作文得高分最关键的因素是？" options={[{ label: 'A', value: '字数越多越好' }, { label: 'B', value: '审题精准、立意深刻' }, { label: 'C', value: '背很多范文' }, { label: 'D', value: '字写得好看' }]} answer="B" explanation={'审题不跑题是拿分的前提，立意的深刻程度决定了分数的上限。当然书写工整也很重要。'} /></div>)
        }
    },

    'cn12-l2-language-big-q': {
        meta: { title: "语言运用大题 - 高三语文 | AI7Miao语文", description: "高考语言运用主观题专项训练。", keywords: "语言运用,高考语文,语段压缩,句式变换,高三语文" },
        info: { title: "语言运用大题", description: "语言运用主观题拿满分！精准审题+规范答题！📝", tags: [{ text: "素养进阶", color: "purple" }, { text: "40分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "高考语言运用主观题专训。涵盖：语段压缩、语句补写、仿用句式、图文转换、修辞分析、语病修改等高考新题型。",
        aiChatTitle: "📝 语用大题特训", aiChatIntro: "高考语用题越来越灵活，掌握核心方法应万变！",
        aiMessages: [{ role: 'ai', content: '高考语句补写题怎么做？关键是前后文的逻辑关系！你能根据上下文推断空缺处应该写什么吗？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />语用题高频题型</h2><div className="space-y-4">{[{ type: '✍️ 语句补写', desc: '根据上下文逻辑补写恰当语句。关键：前后衔接、逻辑自洽', color: 'blue' }, { type: '📋 语段压缩', desc: '按要求概括段落主要信息。技巧：删修饰、留主干、控字数', color: 'green' }, { type: '🔄 修辞分析', desc: '辨识修辞手法并分析其表达效果。新变化：给出语境判断', color: 'purple' }].map(item => (<div key={item.type} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-1`}>{item.type}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 语句补写三步法：①读懂上下文 ②分析逻辑关系（总分/因果/转折）③检查衔接是否自然</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 完成近年高考语用题真题，总结答题规律。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={2140} question="做语句补写题最重要的是？" options={[{ label: 'A', value: '写得优美' }, { label: 'B', value: '与上下文逻辑连贯' }, { label: 'C', value: '越长越好' }, { label: 'D', value: '用高级词汇' }]} answer="B" explanation={'语句补写题最核心的是与上下文的衔接和逻辑一致性，不能只追求语言优美而忽略逻辑。'} /></div>)
        }
    },

    'cn12-l2-literary-knowledge': {
        meta: { title: "文学常识综合 - 高三语文 | AI7Miao语文", description: "系统复习文学文化常识。", keywords: "文学常识,文化常识,高考复习,高三语文" },
        info: { title: "文学常识综合", description: "文学常识大串联！从先秦到现代一网打尽！📖", tags: [{ text: "素养进阶", color: "purple" }, { text: "35分钟", icon: Clock, color: "slate" }] },
        aiContext: "系统复习高考文学文化常识。涵盖中国文学史（先秦-两汉-魏晋-唐宋-元明清-现当代）、文体常识、重要作家作品、文化常识（天文历法、礼仪制度、官职科举等）。",
        aiChatTitle: "📖 文学常识百科", aiChatIntro: "中国文学五千年，来一次全面的知识大串联！",
        aiMessages: [{ role: 'ai', content: '中国文学史上有几个高峰时期：先秦散文、汉赋、唐诗、宋词、元曲、明清小说。你能各举一个代表作吗？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />中国文学史概览</h2><div className="space-y-3">{[{ era: '先秦', highlight: '《诗经》《楚辞》、诸子百家', color: 'red' }, { era: '汉代', highlight: '汉赋（司马相如）、史记（司马迁）', color: 'blue' }, { era: '唐代', highlight: '唐诗巅峰（李杜白）、古文运动', color: 'green' }, { era: '宋代', highlight: '宋词（苏辛/李柳）、宋话本', color: 'purple' }, { era: '元代', highlight: '元曲（关汉卿《窦娥冤》）', color: 'orange' }, { era: '明清', highlight: '四大名著、《聊斋志异》', color: 'cyan' }].map(e => (<div key={e.era} className={`p-3 rounded-xl border-l-4 border-${e.color}-500 bg-${e.color}-50 dark:bg-${e.color}-900/20 flex items-center gap-3`}><span className={`font-bold text-${e.color}-700 dark:text-${e.color}-300 min-w-[50px]`}>{e.era}</span><span className="text-sm text-slate-600 dark:text-slate-300">{e.highlight}</span></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 四大名著：《红楼梦》（曹雪芹）、《西游记》（吴承恩）、《水浒传》（施耐庵）、《三国演义》（罗贯中）</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 制作中国文学史时间轴，标注重要作家和作品。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={2150} question={'被称为"史家之绝唱，无韵之离骚"的是？'} options={[{ label: 'A', value: '《汉书》' }, { label: 'B', value: '《史记》' }, { label: 'C', value: '《资治通鉴》' }, { label: 'D', value: '《左传》' }]} answer="B" explanation={'鲁迅赞誉《史记》为"史家之绝唱，无韵之离骚"，高度评价了《史记》的史学和文学价值。'} /></div>)
        }
    },

    'cn12-l2-final-sprint': {
        meta: { title: "高考语文冲刺 - 高三语文 | AI7Miao语文", description: "高考语文最后冲刺策略。", keywords: "高考冲刺,考试策略,查缺补漏,高三语文" },
        info: { title: "高考语文冲刺", description: "最后冲刺！稳中求进，向满分进发！🚀", tags: [{ text: "素养进阶", color: "purple" }, { text: "50分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "高考前最后冲刺。帮助学生梳理各板块考点和得分策略，制定考场时间分配方案，总结高频失分点和应对策略，调整考前心态。",
        aiChatTitle: "🚀 高考冲刺站", aiChatIntro: "你已经准备得很好了！最后阶段，稳住心态，注意细节！",
        aiMessages: [{ role: 'ai', content: '高考语文150分，你的目标是多少分？我们来制定一个各板块的得分计划，确保拿到每一分！' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />高考得分策略</h2><div className="space-y-4">{[{ block: '📊 论述+实用类（24分）', strategy: '选择题细心比对，主观题分点作答', target: '目标20+', color: 'blue' }, { block: '📖 文学类文本（15分）', strategy: '用答题模板，分层回答，注意赏析角度', target: '目标12+', color: 'green' }, { block: '📜 文言文+诗歌（34分）', strategy: '翻译落实关键词，诗歌紧扣手法+情感', target: '目标28+', color: 'purple' }, { block: '📝 语用+默写（20分）', strategy: '基础题必须满分，语用题审清题意', target: '目标18+', color: 'orange' }, { block: '✍️ 作文（60分）', strategy: '审题30秒，列提纲5分钟，正文40分钟', target: '目标50+', color: 'red' }].map(item => (<div key={item.block} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><div className="flex justify-between items-center mb-1"><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 text-sm`}>{item.block}</h3><span className={`text-xs font-semibold text-${item.color}-600 bg-${item.color}-100 dark:bg-${item.color}-900/40 px-2 py-1 rounded`}>{item.target}</span></div><p className="text-xs text-slate-600 dark:text-slate-300">{item.strategy}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 考场时间分配（150分钟）：论述类15min → 实用类15min → 文学类20min → 文言文20min → 诗歌10min → 默写5min → 语用15min → 作文45min → 检查5min</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 完全按高考时间完成一套模拟卷，分析各板块得分情况。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={2160} question="高考语文考场上最重要的原则是？" options={[{ label: 'A', value: '追求完美每题都检查' }, { label: 'B', value: '合理分配时间，确保作文有足够时间' }, { label: 'C', value: '先做最难的题' }, { label: 'D', value: '写得越多越好' }]} answer="B" explanation={'高考语文时间紧张，必须合理分配时间。特别是作文分值最高（60分），必须至少留45分钟。'} /></div>)
        }
    }
};

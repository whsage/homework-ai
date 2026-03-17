import { Lightbulb, Star, Clock, Brain } from 'lucide-react';
import { PracticeProblem } from './common';

// ==================== 高二语文 ====================
export const grade11Content = {
    'cn11-l1-novel-drama': {
        meta: { title: "小说与戏剧鉴赏 - 高二语文 | AI奇妙语文", description: "深入鉴赏小说和戏剧作品。", keywords: "小说鉴赏,戏剧,文学评论,高二语文" },
        info: { title: "小说与戏剧鉴赏", description: "在虚构的世界里看见真实！小说与戏剧的艺术魅力！🎭", tags: [{ text: "基础达标", color: "blue" }, { text: "45分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "深入学习小说和戏剧鉴赏。小说：叙事视角（全知/有限）、叙事节奏、人物塑造方法、主题多义性。戏剧：戏剧冲突、舞台说明、台词赏析、悲剧/喜剧。",
        aiChatTitle: "🎭 文学评论家", aiChatIntro: "小说和戏剧是人类体验的浓缩！来学习如何深入品味它们！",
        aiMessages: [{ role: 'ai', content: '《雷雨》中周朴园和鲁侍萍重逢那场戏，周朴园的态度为什么突然转变？这体现了什么样的戏剧冲突？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />小说与戏剧鉴赏</h2><div className="space-y-4">{[{ type: '📖 小说深度鉴赏', desc: '叙事视角（第一人称/第三人称/全知视角）、叙事节奏、留白与象征', color: 'blue' }, { type: '🎭 戏剧要素', desc: '戏剧冲突（人与人/人与环境/人与自我）、台词（潜台词）、舞台说明', color: 'purple' }, { type: '🏆 高考常考', desc: '探究人物形象的复杂性、分析情节安排的作用、理解主题的多义性', color: 'orange' }].map(item => (<div key={item.type} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-1`}>{item.type}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 戏剧类型：悲剧（引起怜悯和恐惧）、喜剧（讽刺和幽默）、正剧（严肃题材）</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 分析《雷雨》第二幕中的戏剧冲突和人物心理。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={2000} question={'戏剧中"潜台词"指的是？'} options={[{ label: 'A', value: '舞台说明' }, { label: 'B', value: '台词表面意思' }, { label: 'C', value: '台词背后隐含的真实意思' }, { label: 'D', value: '旁白' }]} answer="C" explanation={'潜台词是人物台词中没有直接说出但暗含的真实意思和情感，需要读者/观众结合语境去体会。'} /></div>)
        }
    },

    'cn11-l1-ancient-prose': {
        meta: { title: "古代散文经典 - 高二语文 | AI奇妙语文", description: "学习唐宋八大家等古代散文经典。", keywords: "古代散文,唐宋八大家,韩愈,柳宗元,高二语文" },
        info: { title: "古代散文经典", description: "唐宋八大家的散文艺术！古文的巅峰之作！📜", tags: [{ text: "基础达标", color: "blue" }, { text: "45分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "学习唐宋散文经典。唐宋八大家（韩愈、柳宗元、欧阳修、苏洵、苏轼、苏辙、王安石、曾巩）的代表作品和文学思想。古文运动的背景和意义。",
        aiChatTitle: "📜 古文鉴赏师", aiChatIntro: "韩愈、柳宗元、苏轼的散文，千年不朽！来领略古文之美！",
        aiMessages: [{ role: 'ai', content: '苏轼的《赤壁赋》为什么被称为千古名篇？从中你能读出什么样的人生态度？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />唐宋八大家</h2><div className="grid grid-cols-2 gap-3">{[{ name: '韩愈', work: '《师说》《马说》', style: '雄健奔放', color: 'red' }, { name: '柳宗元', work: '《小石潭记》', style: '清峻简洁', color: 'blue' }, { name: '苏轼', work: '《赤壁赋》《记承天寺夜游》', style: '旷达洒脱', color: 'green' }, { name: '欧阳修', work: '《醉翁亭记》', style: '平易流畅', color: 'purple' }].map(p => (<div key={p.name} className={`p-3 rounded-xl bg-${p.color}-50 dark:bg-${p.color}-900/20 border border-${p.color}-200 dark:border-${p.color}-800`}><h3 className={`font-bold text-${p.color}-700 dark:text-${p.color}-300 text-sm`}>{p.name}</h3><p className="text-xs text-slate-500">{p.work}</p><p className="text-xs text-slate-500">风格：{p.style}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 古文运动：韩愈、柳宗元倡导"文以载道"，反对骈文的浮华空洞</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 精读《赤壁赋》，分析苏轼的哲学思考。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={2010} question="唐宋八大家中唐代的两位是？" options={[{ label: 'A', value: '韩愈、苏轼' }, { label: 'B', value: '韩愈、柳宗元' }, { label: 'C', value: '柳宗元、欧阳修' }, { label: 'D', value: '韩愈、王安石' }]} answer="B" explanation={'唐宋八大家中唐代两位是韩愈和柳宗元，其余六位（欧阳修、三苏、王安石、曾巩）都是宋代的。'} /></div>)
        }
    },

    'cn11-l1-song-ci': {
        meta: { title: "宋词鉴赏 - 高二语文 | AI奇妙语文", description: "系统学习宋词鉴赏方法。", keywords: "宋词,苏轼,李清照,辛弃疾,高二语文" },
        info: { title: "宋词鉴赏", description: "词中有画，画中有情！领略宋词的婉约与豪放！🎵", tags: [{ text: "基础达标", color: "blue" }, { text: "40分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "系统学习宋词。了解豪放派（苏轼、辛弃疾）和婉约派（李清照、柳永）的风格特点，重点词作的鉴赏分析。",
        aiChatTitle: "🎵 宋词品读家", aiChatIntro: "大江东去，浪淘尽，千古风流人物。来品味宋词的千年韵味！",
        aiMessages: [{ role: 'ai', content: '李清照前期词"和羞走，倚门回首，却把青梅嗅"和后期词"寻寻觅觅，冷冷清清"风格截然不同，是什么改变了她？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />宋词两大流派</h2><div className="space-y-4"><div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border-l-4 border-red-500"><h3 className="font-bold text-red-800 dark:text-red-300 mb-2">⚔️ 豪放派</h3><p className="text-sm text-slate-700 dark:text-slate-300">代表：苏轼、辛弃疾。气势磅礴、视野开阔、题材广泛</p><p className="text-xs text-slate-500 mt-1">名句："大江东去，浪淘尽，千古风流人物"</p></div><div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500"><h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">🌸 婉约派</h3><p className="text-sm text-slate-700 dark:text-slate-300">代表：李清照、柳永。细腻含蓄、情感深沉、语言精美</p><p className="text-xs text-slate-500 mt-1">名句："寻寻觅觅，冷冷清清，凄凄惨惨戚戚"</p></div></div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 词的特点：长短句（与诗不同）、词牌名（如念奴娇、水调歌头）、上下阕</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 对比赏析苏轼《念奴娇·赤壁怀古》和李清照《声声慢》。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={2020} question={'下列哪位词人属于婉约派？'} options={[{ label: 'A', value: '苏轼' }, { label: 'B', value: '辛弃疾' }, { label: 'C', value: '李清照' }, { label: 'D', value: '陆游' }]} answer="C" explanation={'李清照是婉约派的代表人物。苏轼和辛弃疾是豪放派代表。'} /></div>)
        }
    },

    'cn11-l1-literary-criticism': {
        meta: { title: "文学评论写作 - 高二语文 | AI奇妙语文", description: "学习文学评论的基本写法。", keywords: "文学评论,文学鉴赏,评论写作,高二语文" },
        info: { title: "文学评论写作", description: "用理性的眼光审视文学！从读者到评论者的蜕变！📝", tags: [{ text: "基础达标", color: "blue" }, { text: "45分钟", icon: Clock, color: "slate" }] },
        aiContext: "学习文学评论写作。掌握评论角度（主题、人物、语言、结构、艺术手法），评论的基本结构（引述-评析-总结），以及评论语言的客观性和学术性。",
        aiChatTitle: "📝 文学评论导师", aiChatIntro: "文学评论不是简单的读后感，而是有理论支撑的分析！",
        aiMessages: [{ role: 'ai', content: '文学评论和读后感的区别是什么？评论更注重分析"怎么写"和"为什么这样写"。你试着评价一下最近读的一部作品？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />文学评论写作框架</h2><div className="space-y-4">{[{ step: '1️⃣ 选择角度', desc: '从主题、人物、语言或艺术手法中选择一个切入点', color: 'blue' }, { step: '2️⃣ 引述原文', desc: '引用作品中具体的文字作为分析依据', color: 'green' }, { step: '3️⃣ 深入分析', desc: '分析作品"怎么写的"以及"为什么这样写"', color: 'purple' }, { step: '4️⃣ 做出评价', desc: '总结作品的艺术成就和不足', color: 'orange' }].map(item => (<div key={item.step} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-1`}>{item.step}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 评论 ≠ 读后感。评论注重分析和评价，读后感注重个人感受。</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 写一篇800字的文学评论，评析某部作品中的人物形象。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={2030} question="文学评论最核心的要求是？" options={[{ label: 'A', value: '写出个人感动' }, { label: 'B', value: '有理论依据和文本分析' }, { label: 'C', value: '越长越好' }, { label: 'D', value: '用华丽辞藻' }]} answer="B" explanation={'文学评论需要有理论支撑和文本依据，不能只写感受，要有分析、有论证。'} /></div>)
        }
    },

    'cn11-l2-logic-argumentation': {
        meta: { title: "逻辑思维与论证 - 高二语文 | AI奇妙语文", description: "培养逻辑思维和论证能力。", keywords: "逻辑思维,论证,批判性思维,高二语文" },
        info: { title: "逻辑思维与论证", description: "让你的思维像钻石一样清晰！逻辑是思维的翅膀！🧠", tags: [{ text: "素养进阶", color: "purple" }, { text: "40分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "培养逻辑思维能力。学习常见逻辑谬误（以偏概全、循环论证、诉诸权威、滑坡谬误等），掌握论证的基本形式（演绎推理、归纳推理、类比推理）。",
        aiChatTitle: "🧠 逻辑思维课", aiChatIntro: "学会识别逻辑谬误，让你的论证无懈可击！",
        aiMessages: [{ role: 'ai', content: '"我的爷爷每天抽烟，活到了90岁，所以抽烟不会影响健康"——这个推理有什么逻辑问题？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />常见逻辑谬误</h2><div className="grid grid-cols-2 gap-3">{[{ name: '以偏概全', desc: '用个别案例得出普遍结论', color: 'red' }, { name: '循环论证', desc: '用要证明的结论作为前提', color: 'blue' }, { name: '诉诸权威', desc: '某权威说了就一定对', color: 'green' }, { name: '滑坡谬误', desc: '夸大因果链条', color: 'purple' }, { name: '人身攻击', desc: '攻击对方而非观点', color: 'orange' }, { name: '虚假两难', desc: '只给两个选项其实有更多', color: 'cyan' }].map(f => (<div key={f.name} className={`p-3 rounded-xl bg-${f.color}-50 dark:bg-${f.color}-900/20 border border-${f.color}-200 dark:border-${f.color}-800`}><span className={`font-bold text-${f.color}-700 dark:text-${f.color}-300 text-sm`}>{f.name}</span><p className="text-xs text-slate-500 mt-1">{f.desc}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 三种推理：演绎推理（一般→特殊）、归纳推理（特殊→一般）、类比推理（相似→相似）</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 分析一段广告文案中的逻辑谬误。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={2040} question={'"名人都推荐这个产品，所以一定好"——这属于什么逻辑谬误？'} options={[{ label: 'A', value: '以偏概全' }, { label: 'B', value: '诉诸权威' }, { label: 'C', value: '循环论证' }, { label: 'D', value: '滑坡谬误' }]} answer="B" explanation={'"诉诸权威"是指仅仅因为某人有名望就认为其观点正确，名人推荐产品不等于产品一定好。'} /></div>)
        }
    },

    'cn11-l2-cross-media': {
        meta: { title: "跨媒体阅读与交流 - 高二语文 | AI奇妙语文", description: "学习跨媒体信息处理能力。", keywords: "跨媒体,信息素养,批判性阅读,高二语文" },
        info: { title: "跨媒体阅读与交流", description: "在信息时代做聪明的读者！多渠道获取和评判信息！📱", tags: [{ text: "素养进阶", color: "purple" }, { text: "35分钟", icon: Clock, color: "slate" }] },
        aiContext: "培养跨媒体阅读能力。学习从不同媒体（文字、图片、视频、数据）获取和整合信息，辨别信息真伪，培养批判性媒体素养。",
        aiChatTitle: "📱 信息素养课", aiChatIntro: "信息爆炸时代，如何辨别真假？做一个有判断力的信息消费者！",
        aiMessages: [{ role: 'ai', content: '同一个新闻事件，不同媒体的报道可能完全不同。你会怎么判断哪个更可信？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />跨媒体阅读能力</h2><div className="space-y-4">{[{ t: '📊 多源比较', d: '同一事件参考多个信息源，对比不同立场和侧重', color: 'blue' }, { t: '🔍 信息辨别', d: '区分事实与观点，检验信息来源的可靠性', color: 'green' }, { t: '📝 整合表达', d: '综合不同来源的信息，形成自己的判断和表达', color: 'purple' }].map(item => (<div key={item.t} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-1`}>{item.t}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{item.d}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 CRAAP测试：货币性(Currency)、相关性(Relevance)、权威性(Authority)、准确性(Accuracy)、目的性(Purpose)</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 对一个热点话题，收集3个不同来源的报道并做对比分析。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={2050} question="判断信息可靠性最重要的方法是？" options={[{ label: 'A', value: '看点赞数' }, { label: 'B', value: '看标题是否吸引人' }, { label: 'C', value: '核实信息来源和多源比较' }, { label: 'D', value: '看发布时间' }]} answer="C" explanation={'判断信息可靠性最重要的是核实来源是否权威，并通过多个信息源交叉验证。'} /></div>)
        }
    },

    'cn11-l2-speech-debate': {
        meta: { title: "演讲与辩论 - 高二语文 | AI奇妙语文", description: "培养演讲和辩论能力。", keywords: "演讲,辩论,口头表达,高二语文" },
        info: { title: "演讲与辩论", description: "用声音传递力量！在辩论中磨砺思维！🎤", tags: [{ text: "素养进阶", color: "purple" }, { text: "40分钟", icon: Clock, color: "slate" }] },
        aiContext: "培养口头表达能力。学习演讲的结构（开头吸引-主体论证-结尾升华），辩论的技巧（立论-攻辩-反驳-总结），以及口头表达的技巧。",
        aiChatTitle: "🎤 演讲辩论营", aiChatIntro: "好的演讲让人热血沸腾，好的辩论让人茅塞顿开！",
        aiMessages: [{ role: 'ai', content: '如果让你做一个3分钟的即兴演讲，话题是"阅读的意义"，你会怎么组织内容？前30秒最关键！' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />演讲与辩论技巧</h2><div className="space-y-4"><div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl border-l-4 border-orange-500"><h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2">🎤 演讲三部曲</h3><p className="text-sm text-slate-700 dark:text-slate-300">开头要抓人（故事/问题/数据）→ 主体要有力（2-3个论点）→ 结尾要有力（总结/号召/余韵）</p></div><div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500"><h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">⚔️ 辩论技巧</h3><p className="text-sm text-slate-700 dark:text-slate-300">抓住对方逻辑漏洞、用事实和数据说话、不要人身攻击、保持风度</p></div></div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 演讲的3V法则：Visual（肢体语言）55% + Vocal（语调）38% + Verbal（内容）7%</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 就"电子阅读vs纸质阅读"话题，准备正反方辩论稿。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={2060} question="演讲开头最有效的方式是？" options={[{ label: 'A', value: '直接说"大家好我要说..."' }, { label: 'B', value: '用一个故事或惊人的数据开场' }, { label: 'C', value: '先道歉说准备不充分' }, { label: 'D', value: '念稿子' }]} answer="B" explanation={'好的演讲开头要能迅速抓住听众注意力，用故事、惊人数据、或有力的问题开场最有效。'} /></div>)
        }
    }
};

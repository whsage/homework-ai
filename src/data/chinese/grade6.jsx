import { Icons, PracticeProblem, React } from './common';
const { Lightbulb, Clock, Star, BookOpen } = Icons;

export const grade6Content = {

    // ==================== L1-1. 古诗词鉴赏 ====================
    'cn6-l1-poetry-mastery': {
        meta: { title: "古诗词鉴赏 - 六年级语文 | AI7Miao语文", description: "综合运用鉴赏方法深入解读古诗词的手法、意境和情感。", keywords: '古诗词鉴赏,表现手法,意境,六年级语文' },
        info: { title: "古诗词鉴赏", description: "鉴赏层次升级！从读懂到品味，成为真正的诗词鉴赏家！🏆", tags: [{ text: '基础达标', color: 'blue' }, { text: '35分钟', icon: Clock, color: 'slate' }, { text: '重点', icon: Star, color: 'orange' }] },
        aiContext: "学生综合学习古诗词鉴赏。要能分析表现手法（借景抒情、托物言志、动静结合、虚实结合），理解意境，体会深层情感，并进行比较鉴赏。",
        aiChatTitle: "🏆 诗词鉴赏家", aiChatIntro: "六年级了，我们要像真正的鉴赏家一样品味诗词的精妙！",
        aiMessages: [{ role: 'ai', content: '"千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。"——这首诗写了一个老人在雪中钓鱼，但诗人真的只是在写钓鱼吗？背后有什么深意呢？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-red-600" />
                            高级鉴赏技法
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">🎭 四大表现手法</h3>
                                <div className="grid md:grid-cols-2 gap-3">
                                    {[
                                        { t: '借景抒情', d: '通过写景表达情感', ex: '"感时花溅泪，恨别鸟惊心"——花和鸟本是美好的，但诗人因忧国而感到花在流泪、鸟声惊心' },
                                        { t: '托物言志', d: '借事物表达志向品格', ex: '"不要人夸好颜色，只留清气满乾坤"——借梅花表达高洁的志向' },
                                        { t: '动静结合', d: '动态和静态互相映衬', ex: '"明月松间照，清泉石上流"——月光静，泉水动，构成优美画面' },
                                        { t: '虚实结合', d: '眼前景+想象/回忆', ex: '"遥知兄弟登高处，遍插茱萸少一人"——诗人在远方想象家人的场景' },
                                    ].map(item => (
                                        <div key={item.t} className="bg-white dark:bg-slate-700 p-3 rounded-lg">
                                            <p className="font-bold text-blue-600 text-sm">{item.t}</p>
                                            <p className="text-xs text-slate-500 mb-1">{item.d}</p>
                                            <p className="text-xs text-slate-600 dark:text-slate-400">{item.ex}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">📖 经典赏析</h3>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg text-sm">
                                    <p className="font-mono text-slate-800 dark:text-white mb-2">《江雪》 —— 柳宗元</p>
                                    <p className="font-mono text-slate-800 dark:text-white mb-3">千山鸟飞绝，万径人踪灭。<br />孤舟蓑笠翁，独钓寒江雪。</p>
                                    <p className="text-slate-600 dark:text-slate-400">🔍 <strong>手法：</strong>借景抒情+托物言志。用"千山""万径"的空旷衬托"孤舟""独钓"的孤独。<br />💡 <strong>深意：</strong>表面写钓鱼老人，实际表达诗人被贬后孤独而不屈的品格。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 鉴赏答题模板：这首诗运用了____手法，通过描写____，表达了诗人____的情感/志向。</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 用鉴赏模板分析一首你最喜欢的古诗，写一段200字左右的赏析文。</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1500} question={'"不要人夸好颜色，只留清气满乾坤"运用了什么手法？'} options={[{ label: 'A', value: '借景抒情' }, { label: 'B', value: '托物言志' }, { label: 'C', value: '动静结合' }, { label: 'D', value: '夸张' }]} answer="B" explanation={'借梅花（物）表达自己不追求名利、保持高洁品格（志），是"托物言志"的手法。'} />
                    <PracticeProblem id={1501} question={'《江雪》中"千山鸟飞绝，万径人踪灭"的作用是？'} options={[{ label: 'A', value: '说明天气很冷' }, { label: 'B', value: '用空旷寂静衬托渔翁的孤独' }, { label: 'C', value: '介绍钓鱼的地点' }, { label: 'D', value: '描写下雪的过程' }]} answer="B" explanation={'用"千山""万径"的空旷衬托后面"孤舟""独钓"的孤独形象，以大景衬小人物。'} />
                </div>
            )
        }
    },

    // ==================== L1-2. 综合阅读理解 ====================
    'cn6-l1-comprehensive-reading': {
        meta: { title: "综合阅读理解 - 六年级语文 | AI7Miao语文", description: "综合运用各种阅读方法应对不同文体的阅读题。", keywords: '综合阅读,多文体,阅读理解,六年级语文' },
        info: { title: "综合阅读理解", description: "记叙文、说明文、古诗文——全面出击，通关阅读大魔王！👑", tags: [{ text: '基础达标', color: 'blue' }, { text: '40分钟', icon: Clock, color: 'slate' }, { text: '重点', icon: Star, color: 'orange' }] },
        aiContext: "学生综合训练阅读理解。需要能应对各种文体和题型：信息提取、词句理解、概括主旨、分析手法、评价感悟。",
        aiChatTitle: "👑 阅读王者", aiChatIntro: "掌握所有文体的阅读方法，你就是阅读王者！",
        aiMessages: [{ role: 'ai', content: '阅读理解考试中最怕什么题型？是"概括主旨"还是"分析手法"？不管是什么，我们来各个击破！' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />阅读题型全攻略</h2><div className="space-y-4">{[{ t: '📌 信息提取类', d: '直接回原文找答案，用原文词句回答。', tip: '在原文划线标记！', color: 'blue' }, { t: '📝 概括主旨类', d: '用"通过写____，表达了____"的公式概括。', tip: '看开头结尾，抓中心句！', color: 'green' }, { t: '🎨 分析手法类', d: '指出手法+分析内容+说明效果（三步法）。', tip: '常见手法：比喻、拟人、排比、对比、首尾呼应', color: 'purple' }, { t: '💬 词句理解类', d: '联系上下文解释含义，注意表面意思和深层含义。', tip: '先看字面意思，再想作者想表达什么', color: 'orange' }, { t: '💡 感悟评价类', d: '结合文章内容+自己的体验。不能脱离原文空谈。', tip: '公式：文中写到____，让我想到____，我认为____', color: 'red' }].map(item => (<div key={item.t} className={`p-3 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 text-sm`}>{item.t}</h3><p className="text-xs text-slate-600 dark:text-slate-400">{item.d}</p><p className="text-xs text-slate-500 mt-1">💡 {item.tip}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 答题时注意分值！2分题一般答1-2个要点，4分题答3-4个要点。分值=要点数！</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 做一套阅读理解真题，按照今天学的方法分步骤答题。</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1510} question={'概括文章主旨的公式是？'} options={[{ label: 'A', value: '直接抄最后一段' }, { label: 'B', value: '通过写____，表达了____' }, { label: 'C', value: '我觉得这篇文章很好' }, { label: 'D', value: '把每段第一句话连起来' }]} answer="B" explanation={'概括主旨要用"通过写____（内容），表达了____（主题/情感）"的公式，既说清内容又点明主题。'} />
                </div>
            )
        }
    },

    // ==================== L1-3. 文言文进阶 ====================
    'cn6-l1-classical-adv': {
        meta: { title: "文言文进阶 - 六年级语文 | AI7Miao语文", description: "深入学习文言文，阅读稍长篇幅的古文。", keywords: '文言文,长篇古文,人物评价,六年级语文' },
        info: { title: "文言文进阶", description: "挑战更长的古文！读懂古人的大智慧！📜", tags: [{ text: '基础达标', color: 'blue' }, { text: '35分钟', icon: Clock, color: 'slate' }, { text: '重点', icon: Star, color: 'orange' }] },
        aiContext: "学生进阶学习文言文。挑战更长的篇幅，学会通篇理解文意、分析人物形象、把握文章主旨。",
        aiChatTitle: "📜 古文解读者", aiChatIntro: "更长更难的古文来啦！但方法学会了，再长也不怕！",
        aiMessages: [{ role: 'ai', content: '来读读《两小儿辩日》吧！两个小孩争论太阳什么时候离人近，连孔子都答不出来！你觉得谁说得对呢？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><BookOpen className="w-6 h-6 text-red-600" />文言文进阶阅读</h2><div className="space-y-5"><div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500"><h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">📖 《两小儿辩日》</h3><div className="bg-white dark:bg-slate-700 p-4 rounded-lg text-sm"><p className="font-mono text-slate-800 dark:text-white leading-relaxed">孔子东游，见两小儿辩斗，问其故。<br />一儿曰："我以日始出时去人近，而日中时远也。"<br />一儿以日初出远，而日中时近也。<br />一儿曰："日初出大如车盖，及日中则如盘盂，此不为远者小而近者大乎？"<br />一儿曰："日初出沧沧凉凉，及其日中如探汤，此不为近者热而远者凉乎？"<br />孔子不能决也。两小儿笑曰："孰为汝多知乎？"</p></div><p className="text-sm text-slate-600 dark:text-slate-400 mt-3">💡 <strong>启示：</strong>①学无止境，即使是孔子也有不知道的事。②认识事物应该从多角度分析，不能以偏概全。</p></div></div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 读长篇文言文：第一遍通读大意，第二遍逐句翻译，第三遍分析人物和主旨！</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 翻译《两小儿辩日》全文，并写出你得到的启示。</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1520} question={'《两小儿辩日》中"孔子不能决也"说明什么？'} options={[{ label: 'A', value: '孔子很笨' }, { label: 'B', value: '学无止境，知识是无穷的' }, { label: 'C', value: '太阳的问题不重要' }, { label: 'D', value: '小孩比大人聪明' }]} answer="B" explanation={'连学识渊博的孔子也有不能判断的问题，说明知识是无穷的，"学海无涯"！'} />
                </div>
            )
        }
    },

    // ==================== L1-4. 议论文初步 ====================
    'cn6-l1-argumentative': {
        meta: { title: "议论文初步 - 六年级语文 | AI7Miao语文", description: "初步了解议论文的结构和论证方法。", keywords: '议论文,论点,论据,六年级语文' },
        info: { title: "议论文初步", description: "学会'讲道理'！有观点、有证据、有逻辑！🎓", tags: [{ text: '基础达标', color: 'blue' }, { text: '30分钟', icon: Clock, color: 'slate' }] },
        aiContext: "学生初步学习议论文。理解三要素（论点、论据、论证），认识常见论证方法（举例论证、道理论证）。",
        aiChatTitle: "🎓 小小辩论家", aiChatIntro: "议论文就是'摆事实，讲道理'！来学习如何有理有据地表达观点！",
        aiMessages: [{ role: 'ai', content: '如果我说"读书很重要"，你怎么用事实和道理来证明这个观点呢？这就是写议论文的思路！' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />议论文三要素</h2><div className="grid md:grid-cols-3 gap-4">{[{ e: '🎯', t: '论点', d: '作者的观点或主张', ex: '"诚实是做人最重要的品质。"', color: 'blue' }, { e: '📋', t: '论据', d: '支持论点的事实或道理', ex: '事实论据：某名人诚实的故事\n道理论据：古语"言必信，行必果"', color: 'green' }, { e: '🔗', t: '论证', d: '用论据证明论点的过程', ex: '举例论证、道理论证、对比论证', color: 'purple' }].map(item => (<div key={item.t} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><span className="text-2xl">{item.e}</span><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 text-lg mb-1`}>{item.t}</h3><p className="text-xs text-slate-500 mb-2">{item.d}</p><p className="text-xs text-slate-600 dark:text-slate-400 whitespace-pre-line">{item.ex}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 议论文结构：开头提出论点 → 中间用论据论证 → 结尾总结强调。</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 以"坚持就是胜利"为论点，写两个论据（一个事实论据、一个道理论据）。</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1530} question={'议论文的三要素是？'} options={[{ label: 'A', value: '时间、地点、人物' }, { label: 'B', value: '论点、论据、论证' }, { label: 'C', value: '开头、经过、结尾' }, { label: 'D', value: '比喻、拟人、排比' }]} answer="B" explanation={'议论文三要素是论点（观点）、论据（证据）、论证（证明过程）。A是记叙文六要素中的三个。'} />
                </div>
            )
        }
    },

    // ==================== L2-1. 小升初专题 ====================
    'cn6-l2-exam-prep': {
        meta: { title: "小升初专题 - 六年级语文 | AI7Miao语文", description: "系统梳理小学语文知识点，备战小升初。", keywords: '小升初,语文复习,专题训练,六年级语文' },
        info: { title: "小升初专题复习", description: "六年知识大整合！系统复习，信心满满迎接新挑战！🚀", tags: [{ text: '素养进阶', color: 'purple' }, { text: '40分钟', icon: Clock, color: 'slate' }, { text: '重点', icon: Star, color: 'orange' }] },
        aiContext: "学生进行小升初专题复习。系统梳理六年语文知识：拼音、汉字、词语、句子、阅读、写作、古诗文。查漏补缺，重点突破薄弱环节。",
        aiChatTitle: "🚀 冲刺加油站", aiChatIntro: "六年的积累就在这一刻！来系统复习，查漏补缺！",
        aiMessages: [{ role: 'ai', content: '小升初语文考什么？基础知识、阅读理解、古诗文、作文——四大板块！你觉得哪个板块最需要加强？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />小升初四大板块</h2><div className="grid md:grid-cols-2 gap-4">{[{ t: '📝 基础知识（30%）', items: ['拼音：易混声母韵母、多音字', '汉字：易错字、形近字、同音字', '词语：近义词反义词、成语运用', '句子：缩扩句、修改病句、修辞'], color: 'blue' }, { t: '📖 阅读理解（30%）', items: ['记叙文：六要素+中心思想', '说明文：说明方法+语言准确性', '古诗文：翻译+赏析+默写', '综合：信息提取+感悟评价'], color: 'green' }, { t: '📜 古诗文积累（15%）', items: ['必背古诗75首默写', '古诗名句理解运用', '简单文言文翻译', '古诗词意象和手法'], color: 'purple' }, { t: '✏️ 作文（25%）', items: ['审题立意：不偏题跑题', '结构安排：开头结尾+详略', '语言表达：修辞+好词好句', '书写规范：字迹工整段落清晰'], color: 'orange' }].map(item => (<div key={item.t} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 text-sm mb-2`}>{item.t}</h3><ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">{item.items.map(i => (<li key={i}>• {i}</li>))}</ul></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 复习顺序建议：先补薄弱环节→再巩固基础→最后模拟练习。每天复习30分钟，坚持一个月！</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 做一套小升初语文模拟卷，看看哪个板块得分最低，有针对性地复习！</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1540} question={'小升初语文中占分比重最大的两个板块是？'} options={[{ label: 'A', value: '基础知识和阅读理解' }, { label: 'B', value: '古诗文和作文' }, { label: 'C', value: '拼音和汉字' }, { label: 'D', value: '修辞和病句' }]} answer="A" explanation={'基础知识约30%和阅读理解约30%是小升初语文占分最大的两个板块，需要重点复习。'} />
                </div>
            )
        }
    },

    // ==================== L2-2. 整本书阅读 ====================
    'cn6-l2-whole-book-reading': {
        meta: { title: "整本书阅读 - 六年级语文 | AI7Miao语文", description: "学习整本书阅读的方法和读书笔记写法。", keywords: '整本书阅读,读书笔记,六年级语文' },
        info: { title: "整本书阅读", description: "读一本书不是从头翻到尾就完了！学会带着思考去阅读！📚", tags: [{ text: '素养进阶', color: 'purple' }, { text: '35分钟', icon: Clock, color: 'slate' }] },
        aiContext: "学生学习整本书阅读方法。教序跋目录浏览法、人物关系图、读书笔记（摘抄+感悟）、读后感写法。",
        aiChatTitle: "📚 阅读导航员", aiChatIntro: "读整本书也有方法！跟我学，读得更深更有收获！",
        aiMessages: [{ role: 'ai', content: '拿到一本新书，你通常怎么开始读？直接翻到第一页？其实先看目录和序言，会帮你更好地理解这本书哦！' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />整本书阅读法</h2><div className="space-y-4">{[{ t: '📋 读前预览', d: '看封面、序言、目录，了解大致内容和结构。思考：这本书讲什么？我想从中了解什么？', color: 'blue' }, { t: '📝 边读边记', d: '每读完一章写一小段感想；画出喜欢的句子；记下不懂的问题。', color: 'green' }, { t: '🗺️ 画关系图', d: '小说类：画人物关系图。科普类：画知识结构图。帮助理清思路！', color: 'purple' }, { t: '💭 读后总结', d: '用一段话概括全书内容，写一篇读后感：这本书让我学到了什么？', color: 'orange' }].map(s => (<div key={s.t} className={`p-3 rounded-xl border-l-4 border-${s.color}-500 bg-${s.color}-50 dark:bg-${s.color}-900/20`}><h3 className={`font-bold text-${s.color}-800 dark:text-${s.color}-300 text-sm`}>{s.t}</h3><p className="text-xs text-slate-600 dark:text-slate-400">{s.d}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 好的读书笔记 = 摘抄好句 + 写下自己的感想 + 和生活联系。不要只抄不想！</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 选一本你正在读的书，按照今天学的方法做一份完整的读书笔记。</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1550} question={'拿到一本新书，第一步应该做什么？'} options={[{ label: 'A', value: '直接从第一页开始读' }, { label: 'B', value: '先看封面、序言和目录' }, { label: 'C', value: '先看最后一页' }, { label: 'D', value: '直接写读后感' }]} answer="B" explanation={'先看封面、序言和目录可以了解全书结构和大致内容，带着整体认知去阅读效果更好。'} />
                </div>
            )
        }
    },

    // ==================== L2-3. 考场作文技巧 ====================
    'cn6-l2-writing-mastery': {
        meta: { title: "考场作文技巧 - 六年级语文 | AI7Miao语文", description: "掌握考场作文的审题、立意、结构和语言技巧。", keywords: '考场作文,审题立意,写作技巧,六年级语文' },
        info: { title: "考场作文技巧", description: "考试时间有限，学会快速写出高分作文！🏅", tags: [{ text: '素养进阶', color: 'purple' }, { text: '35分钟', icon: Clock, color: 'slate' }, { text: '重点', icon: Star, color: 'orange' }] },
        aiContext: "学生学习考场作文技巧。审题立意（不偏题）、快速构思（列提纲）、开头结尾升级、临场应变策略。",
        aiChatTitle: "🏅 作文冲刺营", aiChatIntro: "考场上时间有限，掌握了技巧才能写出高分作文！",
        aiMessages: [{ role: 'ai', content: '考场上拿到作文题，前5分钟最重要！你应该做什么？不是马上动笔，而是——审题+列提纲！' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />考场作文五步法</h2><div className="space-y-3">{[{ s: '1️⃣ 审题（2分钟）', d: '画出题目中的关键词，明确写什么、怎么写。半命题先把题目补充完整。', color: 'blue' }, { s: '2️⃣ 立意（1分钟）', d: '确定中心思想：这篇文章要表达什么情感/道理？选择有真情实感的角度。', color: 'green' }, { s: '3️⃣ 列提纲（2分钟）', d: '开头写什么→中间分几段→每段大概写什么→结尾怎么收。', color: 'purple' }, { s: '4️⃣ 写正文（25分钟）', d: '按提纲写，详写重点段落。注意分段、首句空两格、字迹工整。', color: 'orange' }, { s: '5️⃣ 检查（5分钟）', d: '检查错别字、漏字、标点、是否偏题、字数是否达标。', color: 'red' }].map(item => (<div key={item.s} className={`p-3 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 text-sm`}>{item.s}</h3><p className="text-xs text-slate-600 dark:text-slate-400">{item.d}</p></div>))}</div></div>),
            properties: (<div className="space-y-6"><div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6"><h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 考场作文大忌</h3><div className="grid md:grid-cols-2 gap-3 text-sm"><div className="bg-white dark:bg-slate-800 p-3 rounded-lg border-2 border-red-200"><p className="text-red-500 font-bold">❌ 偏题跑题</p><p className="text-xs text-slate-500">题目问"感动的事"你写"有趣的事"</p></div><div className="bg-white dark:bg-slate-800 p-3 rounded-lg border-2 border-red-200"><p className="text-red-500 font-bold">❌ 字数不够</p><p className="text-xs text-slate-500">要求400字只写了250字</p></div><div className="bg-white dark:bg-slate-800 p-3 rounded-lg border-2 border-red-200"><p className="text-red-500 font-bold">❌ 没有分段</p><p className="text-xs text-slate-500">一段到底，没有层次感</p></div><div className="bg-white dark:bg-slate-800 p-3 rounded-lg border-2 border-red-200"><p className="text-red-500 font-bold">❌ 字迹潦草</p><p className="text-xs text-slate-500">卷面整洁印象分很重要！</p></div></div></div></div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 在35分钟内完成一篇400字的命题作文练习："那一次，我真的____"。</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1560} question={'拿到作文题后的前5分钟应该做什么？'} options={[{ label: 'A', value: '马上开始写正文' }, { label: 'B', value: '审题+列提纲' }, { label: 'C', value: '先写结尾' }, { label: 'D', value: '数一下格子有多少' }]} answer="B" explanation={'前5分钟用来审题（明确写什么）和列提纲（计划怎么写），磨刀不误砍柴工！'} />
                </div>
            )
        }
    }
};

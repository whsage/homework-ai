import { Lightbulb, Star, Clock, Brain } from 'lucide-react';
import { PracticeProblem } from './common';

// ==================== 初二语文 ====================
export const grade8Content = {
    // ==================== L1-1. 说明文深入阅读 ====================
    'cn8-l1-expository-deep': {
        meta: { title: "说明文深入阅读 - 初二语文 | AI7Miao语文", description: "深入学习说明文的阅读方法和分析技巧。", keywords: "说明文,说明方法,说明顺序,初二语文" },
        info: { title: "说明文深入阅读", description: "说明文是科学的语言！学会准确理解事物的本质！🔬", tags: [{ text: "基础达标", color: "blue" }, { text: "35分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "学生深入学习说明文。掌握说明方法（举例子、列数字、作比较、打比方、下定义、分类别、画图表），说明顺序（时间、空间、逻辑），以及说明文语言的准确性分析。",
        aiChatTitle: "🔬 说明文解码器", aiChatIntro: "说明文追求准确！每一个词都不能随便改！来学习说明文的秘密！",
        aiMessages: [{ role: 'ai', content: '"赵州桥全长约50.82米"——这里的"约"能不能去掉？为什么说明文对这类词特别讲究？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />说明文阅读要点</h2><div className="space-y-4">{[{ type: '📊 说明方法', desc: '举例子、列数字、作比较、打比方、下定义、分类别', color: 'blue' }, { type: '🔄 说明顺序', desc: '时间顺序、空间顺序、逻辑顺序（由浅入深、由主到次）', color: 'green' }, { type: '🎯 语言特点', desc: '准确性是说明文的生命！注意限制性词语：约、左右、之一、几乎', color: 'orange' }].map(item => (<div key={item.type} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-1`}>{item.type}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 说明文分类：事物说明文（介绍事物）vs 事理说明文（解释原理）</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 分析一篇说明文，找出使用的说明方法并说明其作用。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={1700} question={'下列说明方法中，"太和殿俗称金銮殿，高28米"使用的是？'} options={[{ label: 'A', value: '举例子' }, { label: 'B', value: '列数字' }, { label: 'C', value: '打比方' }, { label: 'D', value: '作比较' }]} answer="B" explanation={'用了具体的数字"28米"来说明太和殿的高度，这是列数字的说明方法。'} /></div>)
        }
    },

    // ==================== L1-2. 议论文阅读 ====================
    'cn8-l1-argumentative-read': {
        meta: { title: "议论文阅读 - 初二语文 | AI7Miao语文", description: "学习议论文三要素和论证方法。", keywords: "议论文,论点,论据,论证,初二语文" },
        info: { title: "议论文阅读", description: "用逻辑的力量说服人！论点+论据+论证=有理有据！💪", tags: [{ text: "基础达标", color: "blue" }, { text: "40分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "学生系统学习议论文。掌握三要素（论点、论据、论证），常见论证方法（举例论证、道理论证、对比论证、比喻论证），议论文的结构（提出问题-分析问题-解决问题）。",
        aiChatTitle: "💪 逻辑推理师", aiChatIntro: "议论文就是讲道理！有论点有论据有论证，让人心服口服！",
        aiMessages: [{ role: 'ai', content: '如果有人说"读书没有用"，你会怎么反驳？用什么样的论据来支持你的论点？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />议论文三要素</h2><div className="space-y-4"><div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border-l-4 border-red-500"><h3 className="font-bold text-red-800 dark:text-red-300 mb-2">📌 论点（灵魂）</h3><p className="text-sm text-slate-700 dark:text-slate-300">作者的观点和主张。通常出现在标题、开头或结尾。</p></div><div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500"><h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">📋 论据（骨架）</h3><p className="text-sm text-slate-700 dark:text-slate-300">支撑论点的材料：事实论据（事例、数据）和道理论据（名言、公理）。</p></div><div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500"><h3 className="font-bold text-green-800 dark:text-green-300 mb-2">🔗 论证（血肉）</h3><p className="text-sm text-slate-700 dark:text-slate-300">用论据证明论点的过程：举例论证、道理论证、对比论证、比喻论证。</p></div></div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 寻找论点的方法：看标题→看开头→看结尾→归纳段意</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 阅读一篇议论文，找出论点、论据和论证方法。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={1710} question="议论文的三要素不包括以下哪项？" options={[{ label: 'A', value: '论点' }, { label: 'B', value: '论据' }, { label: 'C', value: '论证' }, { label: 'D', value: '论述' }]} answer="D" explanation={'议论文三要素是论点、论据、论证。"论述"不是议论文的专有术语。'} /></div>)
        }
    },

    // ==================== L1-3. 文言文进阶阅读 ====================
    'cn8-l1-classical-adv': {
        meta: { title: "文言文进阶阅读 - 初二语文 | AI7Miao语文", description: "深入学习文言文特殊句式和词类活用。", keywords: "文言文,词类活用,特殊句式,初二语文" },
        info: { title: "文言文进阶阅读", description: "攻克文言文难关！词类活用和特殊句式一网打尽！📜", tags: [{ text: "基础达标", color: "blue" }, { text: "40分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "学生深入学习文言文。掌握词类活用（名词作动词、形容词作动词、使动用法、意动用法），特殊句式（判断句、被动句、倒装句、省略句），以及文言文断句方法。",
        aiChatTitle: "📜 文言文高手", aiChatIntro: "文言文有很多巧妙的用法！名词可以当动词用，形容词也能活用！",
        aiMessages: [{ role: 'ai', content: '"沛公军霸上"中的"军"是什么意思？为什么名词可以当动词用？这就是词类活用！' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />词类活用与特殊句式</h2><div className="space-y-4">{[{ type: '📝 名词作动词', desc: '"军霸上"→ 军（驻军）', ex: '名词在句中充当谓语', color: 'blue' }, { type: '🔄 使动用法', desc: '"闻寡人之耳者"→ 闻（使...听到）', ex: '使宾语产生某种动作', color: 'green' }, { type: '⚖️ 倒装句', desc: '"何陋之有"→ 有何陋', ex: '宾语前置、定语后置等', color: 'purple' }, { type: '🔍 省略句', desc: '"（桃花源人）见渔人，乃大惊"', ex: '省略主语、介词等', color: 'orange' }].map(item => (<div key={item.type} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-1`}>{item.type}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p><p className="text-xs text-slate-500 mt-1">{item.ex}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 断句口诀：找动词、看虚词、析句式、通文意</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 分析《醉翁亭记》中的词类活用和特殊句式。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={1720} question={'下列句子中"名"的词类活用正确的是？"山不在高，有仙则名"'} options={[{ label: 'A', value: '名词作动词，出名' }, { label: 'B', value: '名词作形容词，有名' }, { label: 'C', value: '形容词作名词，名气' }, { label: 'D', value: '没有活用' }]} answer="A" explanation={'"名"原本是名词（名字），这里用作动词，意思是"出名、有名"。'} /></div>)
        }
    },

    // ==================== L1-4. 新闻与通讯 ====================
    'cn8-l1-news-writing': {
        meta: { title: "新闻与通讯 - 初二语文 | AI7Miao语文", description: "学习新闻体裁的特点和阅读方法。", keywords: "新闻,通讯,消息,初二语文" },
        info: { title: "新闻与通讯", description: "读懂新闻，了解世界！学习新闻的独特语言！📰", tags: [{ text: "基础达标", color: "blue" }, { text: "30分钟", icon: Clock, color: "slate" }] },
        aiContext: "学生学习新闻体裁。理解新闻结构（标题、导语、主体、背景、结语），新闻六要素（何时、何地、何人、何事、何因、如何），以及新闻与通讯的区别。",
        aiChatTitle: "📰 新闻主编", aiChatIntro: "新闻是最讲究真实和简洁的文体！每个字都要经得起推敲！",
        aiMessages: [{ role: 'ai', content: '如果你是一名小记者，要报道学校运动会，你会怎么写标题和导语？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />新闻结构</h2><div className="space-y-3"><div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border-l-4 border-red-500"><h3 className="font-bold text-red-800 dark:text-red-300">📌 标题：新闻的眼睛</h3><p className="text-sm text-slate-600">简明扼要概括核心内容</p></div><div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-500"><h3 className="font-bold text-blue-800 dark:text-blue-300">📋 导语：第一段</h3><p className="text-sm text-slate-600">用最简洁的语言交代最重要的信息</p></div><div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border-l-4 border-green-500"><h3 className="font-bold text-green-800 dark:text-green-300">📝 主体：详细展开</h3><p className="text-sm text-slate-600">按重要性递减排列（倒金字塔结构）</p></div></div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 新闻 vs 通讯：新闻短小精悍、时效性强；通讯详细深入、可以有文学色彩</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 根据学校活动素材，写一则100字以内的新闻消息。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={1730} question="新闻的六要素不包括以下哪项？" options={[{ label: 'A', value: '何时何地' }, { label: 'B', value: '何人何事' }, { label: 'C', value: '何因如何' }, { label: 'D', value: '何感何想' }]} answer="D" explanation={'新闻六要素是：何时(When)、何地(Where)、何人(Who)、何事(What)、何因(Why)、如何(How)。新闻要客观报道，不加入个人感想。'} /></div>)
        }
    },

    // ==================== L2-1. 议论文写作入门 ====================
    'cn8-l2-argumentative-write': {
        meta: { title: "议论文写作入门 - 初二语文 | AI7Miao语文", description: "学习议论文的基本写作方法。", keywords: "议论文写作,论点,论据,初二语文" },
        info: { title: "议论文写作入门", description: "学会讲道理！论点鲜明、论据充分、论证有力！🎯", tags: [{ text: "素养进阶", color: "purple" }, { text: "40分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "学生学习议论文写作。掌握如何提出论点、选择论据、组织论证。学习并列式、递进式、对比式等结构。",
        aiChatTitle: "🎯 辩论教练", aiChatIntro: "写议论文就像打辩论！论点是你的立场，论据是你的武器！",
        aiMessages: [{ role: 'ai', content: '如果以"坚持就是胜利"为论点写一篇议论文，你会用哪些例子作为论据？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />议论文写作框架</h2><div className="space-y-4">{[{ step: '1️⃣ 提出论点', desc: '开门见山，亮出观点。论点要明确、简洁、有针对性', color: 'red' }, { step: '2️⃣ 论据支撑', desc: '事实论据（名人事例）+ 道理论据（名言警句），至少2-3个', color: 'blue' }, { step: '3️⃣ 论证展开', desc: '分析论据如何支撑论点，不能只举例不分析', color: 'green' }, { step: '4️⃣ 总结升华', desc: '重申论点，联系现实，发出号召或展望', color: 'purple' }].map(item => (<div key={item.step} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-1`}>{item.step}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 议论文结构：并列式（几个分论点并列）/ 递进式（层层深入）/ 对比式（正反对照）</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 以"勤能补拙"为论点，列出论据提纲。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={1740} question="写议论文时，哪种做法是正确的？" options={[{ label: 'A', value: '只用一个例子就够了' }, { label: 'B', value: '举例后要分析论据如何支撑论点' }, { label: 'C', value: '论点可以模糊一些' }, { label: 'D', value: '不需要总结' }]} answer="B" explanation={'好的议论文不能只举例不分析。必须说明这个例子怎样证明了你的论点，这叫"叙后有析"。'} /></div>)
        }
    },

    // ==================== L2-2. 名著阅读（深入）====================
    'cn8-l2-classics-reading': {
        meta: { title: "名著阅读 - 初二语文 | AI7Miao语文", description: "深入阅读初二必读名著。", keywords: "名著阅读,红星照耀中国,昆虫记,初二语文" },
        info: { title: "名著阅读（深入）", description: "深入经典，与文学大师对话！🏛️", tags: [{ text: "素养进阶", color: "purple" }, { text: "40分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "学生深入阅读初二必读名著：《红星照耀中国》（埃德加·斯诺）、《昆虫记》（法布尔）、《傅雷家书》。引导学生进行人物分析、主题探究和读书报告撰写。",
        aiChatTitle: "🏛️ 深度读书会", aiChatIntro: "每一部名著都是一个宝库！让我们一起深度挖掘！",
        aiMessages: [{ role: 'ai', content: '《昆虫记》不只是一本科学著作，还充满了文学之美。法布尔为什么被称为"昆虫界的荷马"？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />深度阅读方法</h2><div className="space-y-4"><div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-xl border-l-4 border-amber-500"><h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2">📊 人物分析法</h3><p className="text-sm text-slate-700 dark:text-slate-300">从外貌、语言、行为、心理分析人物性格，关注人物的变化与成长</p></div><div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500"><h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">🔍 主题探究法</h3><p className="text-sm text-slate-700 dark:text-slate-300">结合时代背景理解作品主题，思考作品对当下的启示</p></div></div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 初二必读：《红星照耀中国》（斯诺）、《昆虫记》（法布尔）、《傅雷家书》</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 写一篇关于《傅雷家书》中父爱主题的读书报告。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={1750} question={'《昆虫记》的作者法布尔是哪国人？'} options={[{ label: 'A', value: '英国' }, { label: 'B', value: '法国' }, { label: 'C', value: '德国' }, { label: 'D', value: '美国' }]} answer="B" explanation={'法布尔（1823-1915）是法国著名的昆虫学家、文学家，被誉为"昆虫界的荷马"。'} /></div>)
        }
    },

    // ==================== L2-3. 修辞与语法综合 ====================
    'cn8-l2-rhetoric-grammar': {
        meta: { title: "修辞与语法综合 - 初二语文 | AI7Miao语文", description: "综合运用修辞手法和语法知识。", keywords: "修辞,语法,复句,初二语文" },
        info: { title: "修辞与语法综合", description: "修辞让语言生动，语法让表达准确！双剑合璧！⚔️", tags: [{ text: "素养进阶", color: "purple" }, { text: "35分钟", icon: Clock, color: "slate" }] },
        aiContext: "学生综合学习修辞和语法。复习并扩展修辞手法（比喻、拟人、排比、对偶、反问、设问、借代、夸张），学习复句类型（并列、递进、转折、因果、条件、假设）。",
        aiChatTitle: "⚔️ 语言炼金术", aiChatIntro: "修辞是锦上添花，语法是结构基础！两者结合才能写出好文章！",
        aiMessages: [{ role: 'ai', content: '"春蚕到死丝方尽，蜡炬成灰泪始干"——这里用了什么修辞手法？除了比喻还有呢？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />修辞手法大全</h2><div className="grid grid-cols-2 gap-3">{[{ name: '比喻', desc: 'A像B', ex: '月亮像银盘', color: 'blue' }, { name: '拟人', desc: '物当人写', ex: '花儿微笑', color: 'green' }, { name: '排比', desc: '三个以上结构相同', ex: '爱是...，爱是...，爱是...', color: 'purple' }, { name: '对偶', desc: '字数相等结构对称', ex: '海内存知己', color: 'red' }, { name: '反问', desc: '用问句表强调', ex: '这难道不对吗？', color: 'orange' }, { name: '借代', desc: '用特征代整体', ex: '红领巾来了', color: 'cyan' }].map(r => (<div key={r.name} className={`p-3 rounded-xl bg-${r.color}-50 dark:bg-${r.color}-900/20 border border-${r.color}-200 dark:border-${r.color}-800`}><span className={`font-bold text-${r.color}-700 dark:text-${r.color}-300`}>{r.name}</span><p className="text-xs text-slate-500">{r.desc}</p><p className="text-xs text-slate-600 mt-1 italic">{r.ex}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 复句类型：并列（既...又）、递进（不但...而且）、转折（虽然...但是）、因果（因为...所以）</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 用至少3种修辞手法写一段描写校园秋天的短文。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={1760} question={'下列哪个句子使用了"借代"修辞？'} options={[{ label: 'A', value: '白发三千丈' }, { label: 'B', value: '红领巾们唱着歌走来' }, { label: 'C', value: '春风又绿江南岸' }, { label: 'D', value: '千山鸟飞绝' }]} answer="B" explanation={'"红领巾"代指少先队员，用事物的特征来代替事物本身，这就是借代。A是夸张，C是拟人。'} /></div>)
        }
    }
};

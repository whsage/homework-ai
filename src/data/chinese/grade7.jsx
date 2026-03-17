import { Lightbulb, Star, Clock, Brain } from 'lucide-react';
import { PracticeProblem } from './common';

// ==================== 初一语文 ====================
export const grade7Content = {
    // ==================== L1-1. 文言文基础阅读 ====================
    'cn7-l1-classical-basic': {
        meta: { title: "文言文基础阅读 - 初一语文 | AI奇妙语文", description: "学习文言文的基本阅读方法，掌握常见实词虚词和翻译技巧。", keywords: "文言文,实词,虚词,初一语文" },
        info: { title: "文言文基础阅读", description: "进入文言世界，掌握翻译密码！古文不再是天书！📜", tags: [{ text: "基础达标", color: "blue" }, { text: "40分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "初一学生系统学习文言文。重点：常见实词（之、而、以、于、其）的多种用法，文言句式（判断句、省略句、倒装句），翻译方法（留、删、补、换、调、变）。引导学生对比古今异义词。",
        aiChatTitle: "📜 文言文翻译官", aiChatIntro: "掌握文言文翻译六字诀，古文再也不是天书！",
        aiMessages: [{ role: 'ai', content: '"学而不思则罔，思而不学则殆"——这里的"而"分别是什么意思？试着翻译整句话？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />文言文阅读要点</h2><div className="space-y-5"><div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500"><h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">📋 常见虚词用法</h3><div className="grid grid-cols-2 md:grid-cols-3 gap-3">{[{ w: '之', m: '的/它/去/取独' }, { w: '而', m: '并且/但是/修饰' }, { w: '以', m: '用/因为/来' }, { w: '于', m: '在/到/比/被' }, { w: '其', m: '他的/那/难道' }, { w: '为', m: '做/是/被/为了' }].map(item => (<div key={item.w} className="bg-white dark:bg-slate-700 p-3 rounded-lg text-center"><span className="text-2xl font-bold text-red-600">{item.w}</span><p className="text-xs text-slate-500 mt-1">{item.m}</p></div>))}</div></div><div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500"><h3 className="font-bold text-green-800 dark:text-green-300 mb-3">🔑 翻译六字诀</h3><div className="grid grid-cols-3 gap-3 text-sm">{[{ t: '留', d: '保留专有名词' }, { t: '删', d: '删除无实义虚词' }, { t: '补', d: '补充省略成分' }, { t: '换', d: '古词换今词' }, { t: '调', d: '调倒装语序' }, { t: '变', d: '变通意译' }].map(m => (<div key={m.t} className="bg-white dark:bg-slate-700 p-2 rounded-lg text-center"><span className="text-lg font-bold text-green-600">{m.t}</span><p className="text-xs text-slate-500">{m.d}</p></div>))}</div></div></div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 古今异义词对照：走（古：跑→今：步行）、妻子（古：妻子和孩子→今：配偶）、汤（古：热水→今：菜汤）</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 翻译《论语》选段，标注每个虚词的含义。</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1600} question={'下列句子中"之"的用法与其他三项不同的一项是？'} options={[{ label: 'A', value: '学而时习之' }, { label: 'B', value: '择其善者而从之' }, { label: 'C', value: '知之者不如好之者' }, { label: 'D', value: '友人惭，下车引之' }]} answer="C" explanation={'A/B/D中的"之"都是代词，C中第一个"之"是代词，但第二个"之"也是代词，关键是要看语法功能。'} />
                </div>
            )
        }
    },

    // ==================== L1-2. 记叙文深入阅读 ====================
    'cn7-l1-narrative-deep': {
        meta: { title: "记叙文深入阅读 - 初一语文 | AI奇妙语文", description: "深入学习记叙文的阅读分析方法。", keywords: "记叙文,阅读理解,写作手法,初一语文" },
        info: { title: "记叙文深入阅读", description: "读懂文章的骨架和灵魂！从人物到情节全面分析！📖", tags: [{ text: "基础达标", color: "blue" }, { text: "35分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "学生深入学习记叙文阅读。掌握记叙文六要素，人物描写方法（外貌、语言、动作、心理、神态），表达方式（记叙、描写、抒情、议论、说明），以及常见写作手法（首尾呼应、设置悬念、欲扬先抑等）。",
        aiChatTitle: "📖 记叙文侦探", aiChatIntro: "学会从文字中发现作者的秘密！每篇文章都藏着精心设计的线索！",
        aiMessages: [{ role: 'ai', content: '记叙文有六大要素：时间、地点、人物、起因、经过、结果。你能从一篇文章中找出它们吗？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />记叙文分析框架</h2><div className="space-y-4">{[{ type: '📋 六要素', desc: '时间、地点、人物、起因、经过、结果', color: 'blue' }, { type: '👤 人物描写', desc: '外貌、语言、动作、心理、神态描写', color: 'green' }, { type: '✍️ 表达方式', desc: '记叙、描写、抒情、议论、说明', color: 'purple' }, { type: '🎯 写作手法', desc: '首尾呼应、设置悬念、欲扬先抑、对比衬托', color: 'orange' }].map(item => (<div key={item.type} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-1`}>{item.type}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 记叙文常见题型：概括内容、分析人物形象、赏析语句、理解标题含义、体会思想感情</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 阅读一篇记叙文，完成六要素分析表格。</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1610} question="记叙文中的人物描写不包括以下哪项？" options={[{ label: 'A', value: '语言描写' }, { label: 'B', value: '心理描写' }, { label: 'C', value: '环境描写' }, { label: 'D', value: '动作描写' }]} answer="C" explanation={'环境描写属于描写方法，不属于人物描写。人物描写包括外貌、语言、动作、心理、神态五种。'} />
                </div>
            )
        }
    },

    // ==================== L1-3. 散文赏析 ====================
    'cn7-l1-prose': {
        meta: { title: "散文赏析 - 初一语文 | AI奇妙语文", description: "学习散文的特点和赏析方法。", keywords: "散文,赏析,形散神聚,初一语文" },
        info: { title: "散文赏析", description: "感受文字之美，领悟散文的形散神聚！🌸", tags: [{ text: "基础达标", color: "blue" }, { text: "35分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "学生学习散文赏析。理解散文'形散神聚'的特点。掌握散文线索的寻找方法，抒情方式（直接抒情/间接抒情），以及散文语言的品味方法。",
        aiChatTitle: "🌸 散文品读师", aiChatIntro: "散文就像一幅画，看似随意，却处处精心！来学习如何品味散文之美！",
        aiMessages: [{ role: 'ai', content: '散文有个很重要的特点叫"形散神聚"——内容看似零散，但都围绕一个中心。你觉得这个"神"怎么找？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />散文赏析要点</h2><div className="space-y-4"><div className="bg-rose-50 dark:bg-rose-900/20 p-5 rounded-xl border-l-4 border-rose-500"><h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2">🌸 散文特点</h3><p className="text-sm text-slate-700 dark:text-slate-300">形散神聚：题材广泛、写法灵活，但始终围绕一条主线（线索）</p></div><div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500"><h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">🔍 常见线索</h3><p className="text-sm text-slate-700 dark:text-slate-300">时间线索、空间线索、事物线索、情感线索、人物线索</p></div></div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 散文分类：叙事散文、抒情散文、哲理散文、写景散文</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 阅读朱自清《春》，找出文章的线索和中心思想。</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1620} question={'散文"形散神聚"中的"神"指的是什么？'} options={[{ label: 'A', value: '文章的题目' }, { label: 'B', value: '文章的中心思想' }, { label: 'C', value: '文章的开头' }, { label: 'D', value: '文章的段落数' }]} answer="B" explanation={'"神"指的是散文的中心思想或主题，所有看似散乱的材料都围绕这个中心展开。'} />
                </div>
            )
        }
    },

    // ==================== L1-4. 古诗鉴赏方法 ====================
    'cn7-l1-poetry-method': {
        meta: { title: "古诗鉴赏方法 - 初一语文 | AI奇妙语文", description: "掌握古诗词鉴赏的基本方法和常见题型。", keywords: "古诗鉴赏,意象,意境,初一语文" },
        info: { title: "古诗鉴赏方法", description: "学会品诗！从意象到意境，读懂诗人的心声！🎋", tags: [{ text: "基础达标", color: "blue" }, { text: "35分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "学生系统学习古诗鉴赏方法。理解意象与意境的概念，掌握常见意象的象征意义（月亮→思乡、柳→离别、松竹梅→高洁品格），学习鉴赏诗歌的角度（内容、情感、手法、语言）。",
        aiChatTitle: "🎋 诗词鉴赏师", aiChatIntro: "每首古诗都是一幅画、一段情。学会鉴赏，你就能读懂诗人千年前的心声！",
        aiMessages: [{ role: 'ai', content: '古诗中"月亮"经常出现，你觉得诗人看到月亮通常会想到什么？能举出含"月"的诗句吗？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />古诗鉴赏四步法</h2><div className="space-y-4">{[{ step: '1️⃣ 读标题知背景', desc: '标题暗示诗歌的体裁、内容和写作背景', color: 'blue' }, { step: '2️⃣ 抓意象析意境', desc: '找出诗中的典型事物（意象），体会整体氛围（意境）', color: 'green' }, { step: '3️⃣ 品手法赏语言', desc: '分析比喻、拟人、对偶、夸张等修辞和表现手法', color: 'purple' }, { step: '4️⃣ 悟情感明主旨', desc: '结合背景理解诗人表达的情感和主题', color: 'orange' }].map(item => (<div key={item.step} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-1`}>{item.step}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 常见意象：月→思乡、柳→离别、松竹梅→高洁、鸿雁→书信/思乡、杜鹃→悲愁</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 用四步法鉴赏李白《静夜思》，写出完整的鉴赏短文。</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1630} question={'古诗中"柳"这一意象通常象征什么？'} options={[{ label: 'A', value: '欢乐' }, { label: 'B', value: '离别' }, { label: 'C', value: '丰收' }, { label: 'D', value: '战争' }]} answer="B" explanation={'"柳"谐音"留"，古人送别时折柳相赠，因此柳是离别的象征。如"客舍青青柳色新"。'} />
                </div>
            )
        }
    },

    // ==================== L2-1. 名著导读 ====================
    'cn7-l2-classics-guide': {
        meta: { title: "名著导读 - 初一语文 | AI奇妙语文", description: "学习名著阅读方法，了解初中必读名著。", keywords: "名著导读,西游记,朝花夕拾,初一语文" },
        info: { title: "名著导读", description: "走进经典文学的殿堂！与大师对话！📚", tags: [{ text: "素养进阶", color: "purple" }, { text: "40分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "引导学生阅读初一必读名著：《朝花夕拾》（鲁迅）和《西游记》（吴承恩）。教授阅读方法：精读与跳读结合、做读书笔记、字划人物形象、分析主题思想。",
        aiChatTitle: "📚 名著领读人", aiChatIntro: "和AI一起读经典！每部名著都有精彩的故事和深刻的道理等你发现！",
        aiMessages: [{ role: 'ai', content: '《西游记》里的孙悟空为什么被称为"齐天大圣"？他的性格有什么特点？你最喜欢哪个故事情节？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />名著阅读方法</h2><div className="space-y-4"><div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-xl border-l-4 border-amber-500"><h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2">📖 精读与跳读结合</h3><p className="text-sm text-slate-700 dark:text-slate-300">重要章节精读（品味语言、分析人物），次要部分跳读（把握线索、了解大意）</p></div><div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500"><h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">📝 读书笔记法</h3><p className="text-sm text-slate-700 dark:text-slate-300">摘抄好词好句、记录阅读感受、画人物关系图、写章节概要</p></div></div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 初一必读：《朝花夕拾》（鲁迅）、《西游记》（吴承恩）、《骆驼祥子》（老舍）</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 为《西游记》画一张主要人物性格分析图。</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1640} question={'《朝花夕拾》是鲁迅的什么类型的作品？'} options={[{ label: 'A', value: '小说集' }, { label: 'B', value: '散文集' }, { label: 'C', value: '诗集' }, { label: 'D', value: '杂文集' }]} answer="B" explanation={'《朝花夕拾》是鲁迅的回忆性散文集，记录了他从童年到青年的生活经历和感悟。'} />
                </div>
            )
        }
    },

    // ==================== L2-2. 记叙文写作进阶 ====================
    'cn7-l2-narrative-writing': {
        meta: { title: "记叙文写作进阶 - 初一语文 | AI奇妙语文", description: "提升记叙文写作能力，学习细节描写和结构安排。", keywords: "记叙文写作,细节描写,叙事结构,初一语文" },
        info: { title: "记叙文写作进阶", description: "让你的文章有血有肉！细节决定好文章！✍️", tags: [{ text: "素养进阶", color: "purple" }, { text: "40分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "学生提升记叙文写作能力。学习细节描写（动作分解、感官描写、环境烘托），文章结构（总分总、倒叙、插叙），以及如何写好开头和结尾。",
        aiChatTitle: "✍️ 写作教练", aiChatIntro: "好文章不是写出来的，是改出来的！来学习让文章更生动的秘诀！",
        aiMessages: [{ role: 'ai', content: '如果要描写"妈妈给我送伞"这个场景，你会怎么写？试着用上动作描写和环境描写。' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />写作进阶技巧</h2><div className="space-y-4">{[{ t: '🔍 细节描写', d: '动作分解：把一个大动作拆成几个小动作，让画面更清晰', color: 'blue' }, { t: '👁️ 感官描写', d: '调动视觉、听觉、嗅觉、触觉、味觉，让读者身临其境', color: 'green' }, { t: '🎭 以小见大', d: '通过一个小事情、小细节，表达深刻的情感或道理', color: 'purple' }].map(s => (<div key={s.t} className={`p-4 rounded-xl border-l-4 border-${s.color}-500 bg-${s.color}-50 dark:bg-${s.color}-900/20`}><h3 className={`font-bold text-${s.color}-800 dark:text-${s.color}-300 mb-1`}>{s.t}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{s.d}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 开头方法：开门见山、设置悬念、环境渲染、引用诗句 | 结尾方法：卒章显志、首尾呼应、留有余味</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 用动作分解法描写一个运动场景（如跑步冲刺、投篮、跳远）。</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1650} question="下列哪种不属于记叙文的叙述顺序？" options={[{ label: 'A', value: '顺叙' }, { label: 'B', value: '倒叙' }, { label: 'C', value: '插叙' }, { label: 'D', value: '议叙' }]} answer="D" explanation={'记叙文的叙述顺序有顺叙、倒叙、插叙三种，没有"议叙"这种说法。'} />
                </div>
            )
        }
    },

    // ==================== L2-3. 语法基础 ====================
    'cn7-l2-grammar-basic': {
        meta: { title: "语法基础 - 初一语文 | AI奇妙语文", description: "掌握词性和句子成分的基本知识。", keywords: "语法,词性,句子成分,初一语文" },
        info: { title: "语法基础（词性与句子成分）", description: "给每个词找到它的身份证！让句子结构一目了然！🏷️", tags: [{ text: "素养进阶", color: "purple" }, { text: "35分钟", icon: Clock, color: "slate" }] },
        aiContext: "学生学习现代汉语语法基础。掌握词性分类（名词、动词、形容词、副词、介词、连词等），理解句子成分（主语、谓语、宾语、定语、状语、补语）。",
        aiChatTitle: "🏷️ 语法小达人", aiChatIntro: "每个词都有自己的角色，每个句子都有自己的结构！来认识它们吧！",
        aiMessages: [{ role: 'ai', content: '"小明高兴地跑向操场"——这句话中哪个是主语？哪个是谓语？"高兴地"是什么成分？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />句子成分</h2><div className="space-y-3">{[{ role: '主语', mark: '═', desc: '谁/什么（双横线标注）', ex: '小明', color: 'red' }, { role: '谓语', mark: '—', desc: '做什么/怎么样（单横线标注）', ex: '跑', color: 'blue' }, { role: '宾语', mark: '～', desc: '动作对象（波浪线标注）', ex: '操场', color: 'green' }, { role: '定语', mark: '()', desc: '修饰名词（括号标注）', ex: '(美丽的)花', color: 'purple' }, { role: '状语', mark: '[]', desc: '修饰动词（方括号标注）', ex: '[高兴地]跑', color: 'orange' }].map(s => (<div key={s.role} className={`p-3 rounded-xl border-l-4 border-${s.color}-500 bg-${s.color}-50 dark:bg-${s.color}-900/20 flex items-center gap-4`}><span className={`font-bold text-${s.color}-600 min-w-[60px]`}>{s.role}</span><span className="text-sm text-slate-600 dark:text-slate-300 flex-1">{s.desc}</span><code className="text-sm bg-white dark:bg-slate-700 px-2 py-1 rounded">{s.ex}</code></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 口诀：主谓宾定状补，主干枝叶分清楚。主语前面是定语，谓语前面是状语。</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 划分句子成分：我们 | 在公园里 | 快乐地 | 放风筝。</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1660} question={'在"勤劳的农民在田里认真地干活"中，"勤劳的"是什么成分？'} options={[{ label: 'A', value: '主语' }, { label: 'B', value: '状语' }, { label: 'C', value: '定语' }, { label: 'D', value: '补语' }]} answer="C" explanation={'"勤劳的"修饰名词"农民"，是定语。定语用来修饰限定名词，回答"什么样的"。'} />
                </div>
            )
        }
    }
};

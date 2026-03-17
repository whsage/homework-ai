import { Lightbulb, Star, Clock, Brain } from 'lucide-react';
import { PracticeProblem } from './common';

// ==================== 高一语文 ====================
export const grade10Content = {
    'cn10-l1-modern-literature': {
        meta: { title: "现代文学作品鉴赏 - 高一语文 | AI奇妙语文", description: "鉴赏现代文学经典作品。", keywords: "现代文学,小说,散文,高一语文" },
        info: { title: "现代文学作品鉴赏", description: "走进现代文学殿堂，品味经典之美！📚", tags: [{ text: "基础达标", color: "blue" }, { text: "45分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "高一学生学习现代文学鉴赏。涵盖小说（人物/情节/环境/主题）、散文（形散神聚/语言美感）、诗歌（意象/节奏/情感）三大文体的鉴赏方法。",
        aiChatTitle: "📚 文学鉴赏家", aiChatIntro: "现代文学是时代的镜子！来学习如何品味文学之美！",
        aiMessages: [{ role: 'ai', content: '鲁迅的小说为什么被称为"中国现代文学的奠基之作"？《狂人日记》的深刻之处在哪里？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />现代文学鉴赏框架</h2><div className="space-y-4">{[{ type: '📖 小说鉴赏', desc: '人物形象（正面/侧面描写）→ 情节结构（起承转合）→ 环境作用 → 主题意蕴', color: 'blue' }, { type: '🌸 散文鉴赏', desc: '线索梳理 → 语言品味 → 手法分析 → 情感体悟', color: 'green' }, { type: '🎵 诗歌鉴赏', desc: '意象捕捉 → 节奏感受 → 修辞分析 → 情感把握', color: 'purple' }].map(item => (<div key={item.type} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-1`}>{item.type}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 小说三要素：人物、情节、环境。环境分为自然环境和社会环境。</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 精读鲁迅《祝福》或沈从文《边城》选段，完成文学鉴赏短文。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={1900} question="小说中环境描写的作用不包括？" options={[{ label: 'A', value: '交代时代背景' }, { label: 'B', value: '烘托人物心理' }, { label: 'C', value: '推动情节发展' }, { label: 'D', value: '直接表达主题' }]} answer="D" explanation={'环境描写的作用包括：交代背景、渲染气氛、烘托心理、推动情节、暗示主题。但不是"直接"表达主题。'} /></div>)
        }
    },

    'cn10-l1-pre-qin-prose': {
        meta: { title: "先秦散文 - 高一语文 | AI奇妙语文", description: "学习先秦经典散文和文言文。", keywords: "先秦散文,论语,孟子,庄子,高一语文" },
        info: { title: "先秦散文（文言文经典）", description: "回到思想的源头！诸子百家的智慧之光！🏛️", tags: [{ text: "基础达标", color: "blue" }, { text: "45分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "学习先秦散文经典。涵盖《论语》（儒家仁义）、《孟子》（民本思想、论辩艺术）、《庄子》（寓言哲学、想象力）、《荀子》（劝学）等。理解其思想内涵和语言特色。",
        aiChatTitle: "🏛️ 先秦智慧堂", aiChatIntro: "两千多年前的智慧，至今仍然闪闪发光！来领悟先秦诸子的思想！",
        aiMessages: [{ role: 'ai', content: '"不积跬步，无以至千里；不积小流，无以成江海"——荀子用了什么论证方法来说明学习的重要性？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />先秦诸子概览</h2><div className="grid grid-cols-2 gap-3">{[{ name: '孔子《论语》', idea: '仁、礼、中庸', style: '语录体', color: 'red' }, { name: '孟子《孟子》', idea: '仁政、民本', style: '论辩体', color: 'blue' }, { name: '庄子《庄子》', idea: '逍遥、齐物', style: '寓言体', color: 'green' }, { name: '荀子《劝学》', idea: '学习、积累', style: '论说体', color: 'purple' }].map(p => (<div key={p.name} className={`p-3 rounded-xl bg-${p.color}-50 dark:bg-${p.color}-900/20 border border-${p.color}-200 dark:border-${p.color}-800`}><h3 className={`font-bold text-${p.color}-700 dark:text-${p.color}-300 text-sm`}>{p.name}</h3><p className="text-xs text-slate-500">思想：{p.idea}</p><p className="text-xs text-slate-500">文体：{p.style}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 先秦散文特点：语言简练、思想深刻、善用比喻和寓言</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 精读《劝学》，分析比喻论证的运用。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={1910} question={'《孟子》中"民为贵，社稷次之，君为轻"体现了什么思想？'} options={[{ label: 'A', value: '仁政思想' }, { label: 'B', value: '民本思想' }, { label: 'C', value: '法治思想' }, { label: 'D', value: '道家思想' }]} answer="B" explanation={'这句话把人民放在最重要的位置，体现了孟子"以民为本"的政治思想。'} /></div>)
        }
    },

    'cn10-l1-tang-poetry': {
        meta: { title: "唐诗鉴赏 - 高一语文 | AI奇妙语文", description: "系统学习唐诗鉴赏方法。", keywords: "唐诗,李白,杜甫,诗歌鉴赏,高一语文" },
        info: { title: "唐诗鉴赏", description: "唐诗是中国诗歌的巅峰！品味大唐的诗意人生！🌙", tags: [{ text: "基础达标", color: "blue" }, { text: "40分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "系统学习唐诗。了解唐诗发展脉络（初唐-盛唐-中唐-晚唐），重点诗人风格（李白浪漫、杜甫写实、王维山水、白居易通俗），鉴赏方法。",
        aiChatTitle: "🌙 唐诗品鉴", aiChatIntro: "李白的豪放、杜甫的深沉、王维的禅意——唐诗是中国文学的皇冠！",
        aiMessages: [{ role: 'ai', content: '"安能摧眉折腰事权贵，使我不得开心颜"——从这句诗可以看出李白什么样的性格？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />唐诗四大时期</h2><div className="space-y-3">{[{ era: '初唐', poets: '王勃、陈子昂', style: '继承六朝，开创新风', color: 'blue' }, { era: '盛唐', poets: '李白、杜甫、王维', style: '诗歌巅峰，百花齐放', color: 'red' }, { era: '中唐', poets: '白居易、韩愈', style: '新乐府运动，贴近现实', color: 'green' }, { era: '晚唐', poets: '李商隐、杜牧', style: '感伤哀婉，精于技巧', color: 'purple' }].map(e => (<div key={e.era} className={`p-3 rounded-xl border-l-4 border-${e.color}-500 bg-${e.color}-50 dark:bg-${e.color}-900/20`}><div className="flex items-center gap-3"><span className={`font-bold text-${e.color}-700 dark:text-${e.color}-300`}>{e.era}</span><span className="text-sm text-slate-600">{e.poets}</span></div><p className="text-xs text-slate-500 mt-1">{e.style}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 李白：浪漫主义"诗仙" | 杜甫：现实主义"诗圣" | 白居易：通俗易懂"诗魔"</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 对比赏析李白《将进酒》和杜甫《登高》。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={1920} question={'被称为"诗仙"的唐代诗人是？'} options={[{ label: 'A', value: '杜甫' }, { label: 'B', value: '白居易' }, { label: 'C', value: '李白' }, { label: 'D', value: '王维' }]} answer="C" explanation={'李白被后人称为"诗仙"，他的诗歌浪漫豪放、想象力丰富。杜甫被称为"诗圣"。'} /></div>)
        }
    },

    'cn10-l1-argumentative-writing': {
        meta: { title: "议论文写作 - 高一语文 | AI奇妙语文", description: "提升议论文写作水平。", keywords: "议论文写作,论证方法,高一语文" },
        info: { title: "议论文写作", description: "写出有深度的议论文！逻辑严密、论证有力！💡", tags: [{ text: "基础达标", color: "blue" }, { text: "45分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "高一学生提升议论文写作。学习多种论证方法的综合运用，辩证思维（一分为二看问题），以及如何写出有深度的议论文。",
        aiChatTitle: "💡 思辨写作营", aiChatIntro: "好的议论文不只有观点，还要有深度和温度！",
        aiMessages: [{ role: 'ai', content: '如果以"成功与失败"为话题写议论文，你会从什么角度切入？只写"失败是成功之母"够不够？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />高中议论文写作进阶</h2><div className="space-y-4">{[{ t: '🎯 深度立意', d: '不停留在表面，挖掘现象背后的原因和本质', color: 'red' }, { t: '⚖️ 辩证思维', d: '一分为二看问题，既看到正面也看到反面', color: 'blue' }, { t: '📊 论证升级', d: '综合运用举例、引用、类比、假设、归谬等多种方法', color: 'green' }].map(item => (<div key={item.t} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-1`}>{item.t}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{item.d}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 议论文深度标志：不仅回答"是什么"，还要回答"为什么"和"怎么办"</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 以"科技发展的利与弊"为题，写一篇800字议论文提纲。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={1930} question="高中议论文与初中最大的区别是？" options={[{ label: 'A', value: '字数更多' }, { label: 'B', value: '需要辩证思维和深度分析' }, { label: 'C', value: '用更多排比' }, { label: 'D', value: '不需要论据' }]} answer="B" explanation={'高中议论文要求更深的思维层次：不能只看到一面，要辩证分析，揭示问题的本质。'} /></div>)
        }
    },

    'cn10-l2-language-application': {
        meta: { title: "语言文字运用 - 高一语文 | AI奇妙语文", description: "提升语言文字综合运用能力。", keywords: "语言运用,成语,病句,语段压缩,高一语文" },
        info: { title: "语言文字运用", description: "语言是思维的载体！精准、得体、生动地使用语言！🎯", tags: [{ text: "素养进阶", color: "purple" }, { text: "40分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "高一学生提升语言运用能力。涵盖：成语辨析、病句修改、语段压缩、句式变换、修辞运用、语言得体性。",
        aiChatTitle: "🎯 语言精修师", aiChatIntro: "每一个字都要用得精准！来提升你的语言运用能力！",
        aiMessages: [{ role: 'ai', content: '"首当其冲"是什么意思？很多人用错了这个成语，你知道正确用法吗？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />语言运用考点</h2><div className="space-y-4">{[{ type: '📝 成语辨析', desc: '注意望文生义、褒贬误用、搭配不当等常见错误', color: 'blue' }, { type: '🏥 病句修改', desc: '六大病因：搭配不当、成分残缺、语序不当、重复赘余、不合逻辑、结构混乱', color: 'red' }, { type: '📋 语段压缩', desc: '抓关键信息、删次要内容、用简洁语言概括', color: 'green' }].map(item => (<div key={item.type} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-1`}>{item.type}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 常见易错成语：首当其冲（最先受到攻击）≠ 首先；万人空巷（人们都出来了）≠ 没人</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 完成一组成语辨析和病句修改练习。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={1940} question={'成语"差强人意"的正确意思是？'} options={[{ label: 'A', value: '不令人满意' }, { label: 'B', value: '勉强令人满意' }, { label: 'C', value: '非常满意' }, { label: 'D', value: '差劲' }]} answer="B" explanation={'"差强人意"中的"差"读chā，意为"稍微"，"强"意为"振奋"，整体意为"大体上还能使人满意"。很多人误以为是不满意。'} /></div>)
        }
    },

    'cn10-l2-whole-book': {
        meta: { title: "整本书阅读 - 高一语文 | AI奇妙语文", description: "高中整本书阅读方法指导。", keywords: "整本书阅读,乡土中国,红楼梦,高一语文" },
        info: { title: "整本书阅读（高中）", description: "深度阅读一本书，培养高阶思维能力！📖", tags: [{ text: "素养进阶", color: "purple" }, { text: "45分钟", icon: Clock, color: "slate" }] },
        aiContext: "指导高一学生进行整本书阅读。推荐书目：《乡土中国》（费孝通）和《红楼梦》（曹雪芹）。教授深度阅读方法：批注法、思维导图、主题研究。",
        aiChatTitle: "📖 深度阅读营", aiChatIntro: "一本好书值得花一个学期来细细品读！来学习深度阅读的方法！",
        aiMessages: [{ role: 'ai', content: '《乡土中国》为什么说中国社会是"乡土性"的？这个观点在今天还成立吗？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />整本书阅读方法</h2><div className="space-y-4"><div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-xl border-l-4 border-amber-500"><h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2">📝 批注式阅读</h3><p className="text-sm text-slate-700 dark:text-slate-300">边读边记录感想、疑问、联想，形成与作者的对话</p></div><div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500"><h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">🗺️ 思维导图法</h3><p className="text-sm text-slate-700 dark:text-slate-300">梳理人物关系、情节线索、主题体系</p></div></div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 高一必读：《乡土中国》（学术著作）+ 《红楼梦》（文学名著）</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 为《乡土中国》画一张核心概念思维导图。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={1950} question={'《乡土中国》的作者是？'} options={[{ label: 'A', value: '鲁迅' }, { label: 'B', value: '费孝通' }, { label: 'C', value: '钱钟书' }, { label: 'D', value: '沈从文' }]} answer="B" explanation={'《乡土中国》是社会学家费孝通的代表作，是一部研究中国乡村社会特征的学术著作。'} /></div>)
        }
    },

    'cn10-l2-news-commentary': {
        meta: { title: "新闻评论与时评 - 高一语文 | AI奇妙语文", description: "学习新闻评论和时事评论的写作。", keywords: "新闻评论,时评,媒体素养,高一语文" },
        info: { title: "新闻评论与时评", description: "关注社会热点，用理性的声音发表观点！📰", tags: [{ text: "素养进阶", color: "purple" }, { text: "35分钟", icon: Clock, color: "slate" }] },
        aiContext: "学生学习新闻评论和时事评论写作。掌握时评的结构（引-议-联-结），培养媒体素养和批判性思维。",
        aiChatTitle: "📰 时评写手", aiChatIntro: "对社会热点有自己的思考和判断，用文字表达你的观点！",
        aiMessages: [{ role: 'ai', content: '对于一则社会新闻，你会从哪些角度来分析和评论？评论和新闻报道有什么不同？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />时评写作框架</h2><div className="space-y-3">{[{ step: '引：引出话题', desc: '简要概述新闻事件或社会现象', color: 'blue' }, { step: '议：分析评论', desc: '提出观点，展开论述，深入分析原因', color: 'green' }, { step: '联：联系拓展', desc: '联系类似事件或社会背景，拓宽视野', color: 'purple' }, { step: '结：总结升华', desc: '归纳观点，提出建议或展望', color: 'orange' }].map(s => (<div key={s.step} className={`p-3 rounded-xl border-l-4 border-${s.color}-500 bg-${s.color}-50 dark:bg-${s.color}-900/20`}><h3 className={`font-bold text-${s.color}-800 dark:text-${s.color}-300 text-sm`}>{s.step}</h3><p className="text-xs text-slate-600 dark:text-slate-300">{s.desc}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 时评原则：观点鲜明、论据真实、分析深入、语言理性</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 就一则社会热点新闻，写一篇500字时评。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={1960} question="时评与新闻报道最大的区别是？" options={[{ label: 'A', value: '时评更长' }, { label: 'B', value: '时评包含作者的观点和分析' }, { label: 'C', value: '时评不需要事实依据' }, { label: 'D', value: '没有区别' }]} answer="B" explanation={'新闻报道追求客观事实，时评则在事实基础上加入作者的观点、分析和评论。'} /></div>)
        }
    }
};

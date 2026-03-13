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
                    <PracticeProblem id={1502} type="choice" question={'“明月松间照，清泉石上流。”这句诗运用了什么表现手法？'} options={[{ label: 'A', value: '托物言志' }, { label: 'B', value: '动静结合' }, { label: 'C', value: '对比' }, { label: 'D', value: '夸张' }]} answer="B" explanation="“明月照”是静景，“清泉流”是动景，动静结合，使画面生动。" />
                    <PracticeProblem id={1503} type="choice" question={'辛弃疾《清平乐·村居》中“最喜小儿亡赖，溪头卧剥莲蓬”，主要运用了什么描写手法刻画小儿子？'} options={[{ label: 'A', value: '外貌描写' }, { label: 'B', value: '语言描写' }, { label: 'C', value: '动作描写和神态描写' }, { label: 'D', value: '心理描写' }]} answer="C" explanation="“卧剥”是动作，“亡赖”（顽皮可爱）带有神态的意味，生动刻画了儿童形象。" />
                    <PracticeProblem id={1504} type="choice" question={'“感时花溅泪，恨别鸟惊心。”这句诗运用了什么修辞手法？表现了什么情感？'} options={[{ label: 'A', value: '比喻，赞美春天' }, { label: 'B', value: '拟人，借景抒发忧国伤时的悲痛情感（移情于物）' }, { label: 'C', value: '夸张，害怕鸟叫' }, { label: 'D', value: '排比，喜欢花鸟' }]} answer="B" explanation="花流泪、鸟惊心是拟人，是诗人将自己忧国伤时的情感赋予了花鸟。" />
                    <PracticeProblem id={1505} type="choice" question={'鉴赏古诗时，我们常说“诗眼”，指的是什么？'} options={[{ label: 'A', value: '诗人的眼睛' }, { label: 'B', value: '诗歌中最能传神、最能表达主旨的那个字或词' }, { label: 'C', value: '第一句诗' }, { label: 'D', value: '最后一句诗' }]} answer="B" explanation="比如“春风又绿江南岸”中的“绿”字就是诗眼。" />
                    <PracticeProblem id={1506} type="choice" question={'在《石灰吟》（千锤万击出深山）中，于谦借石灰表达了自己怎样的志向？'} options={[{ label: 'A', value: '想去深山里打石头' }, { label: 'B', value: '不怕牺牲，坚守高洁情操的决心' }, { label: 'C', value: '想做砖瓦匠' }, { label: 'D', value: '觉得石灰很白' }]} answer="B" explanation="典型的托物言志诗，借石灰经历烈火焚烧等来表明自己不怕牺牲、清白做人的志向。" />
                    <PracticeProblem id={1507} type="choice" question={'“昔我往矣，杨柳依依。今我来思，雨雪霏霏。”这里运用了什么手法？'} options={[{ label: 'A', value: '对比（昔和今、杨柳和雨雪）和借景抒情' }, { label: 'B', value: '只有夸张' }, { label: 'C', value: '拟人' }, { label: 'D', value: '托物言志' }]} answer="A" explanation="通过过去离家时美好的春景和现在归家时凄凉的冬景对比，抒发征夫物是人非的悲伤。" />
                    <PracticeProblem id={1508} type="choice" question={'“蝉噪林逾静，鸟鸣山更幽。”运用了什么表现手法？'} options={[{ label: 'A', value: '比喻' }, { label: 'B', value: '以动衬静' }, { label: 'C', value: '托物言志' }, { label: 'D', value: '拟人' }]} answer="B" explanation="用蝉鸣和鸟叫的动态声音，反衬出山林的极致幽静。" />
                    <PracticeProblem id={1509} type="choice" question={'“黑云翻墨未遮山，白雨跳珠乱入船。”这句诗中“翻墨”和“跳珠”运用了什么修辞？'} options={[{ label: 'A', value: '拟人' }, { label: 'B', value: '对比' }, { label: 'C', value: '比喻（暗喻）' }, { label: 'D', value: '排比' }]} answer="C" explanation="把黑云比作翻倒的墨汁，把雨点比作跳动的珍珠，极其生动形象。" />
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
                    <PracticeProblem id={1511} type="choice" question={'阅读理解中让你“结合上下文解释词语”，你应该怎么答？'} options={[{ label: 'A', value: '查字典把准确意思抄下来' }, { label: 'B', value: '随便猜一个' }, { label: 'C', value: '答出字典上的本义 + 这个词在文章里具体指的是什么（语境义）' }, { label: 'D', value: '只写在文章里的意思' }]} answer="C" explanation="词语解释题的标准答法是词典义加语境义双管齐下。" />
                    <PracticeProblem id={1512} type="choice" question={'“文章结尾写这句话有什么作用？”这种题型通常应该从哪些方面回答？'} options={[{ label: 'A', value: '只看字数多少' }, { label: 'B', value: '从结构（如首尾呼应、总结全文）和内容（如点明主旨、深化中心、抒发情感）两个方面回答' }, { label: 'C', value: '从有没有错别字方面回答' }, { label: 'D', value: '就回答“写得很好”' }]} answer="B" explanation="分析句子作用题，一定要双管齐下，分别从结构作用和内容主旨作用去答。" />
                    <PracticeProblem id={1513} type="choice" question={'做一道4分的简答题，为了拿满分，你最好怎么答？'} options={[{ label: 'A', value: '写一句话就够了' }, { label: 'B', value: '找准文本，分点作答（标上1. 2. 3. ...），至少写2-3个要点' }, { label: 'C', value: '字写得很大占满格子' }, { label: 'D', value: '抄一段原话' }]} answer="B" explanation="按分答题、分点作答是高年级阅读必须掌握的得分技巧。" />
                    <PracticeProblem id={1514} type="choice" question={'当题目问“文中的‘这种精神’具体指什么？”这属于什么题型？'} options={[{ label: 'A', value: '发散思维题' }, { label: 'B', value: '字词理解题' }, { label: 'C', value: '代词指代题，答案一定在原词的前面或者紧挨着的后面寻找原句内容提取' }, { label: 'D', value: '自己编答案的题' }]} answer="C" explanation="代词指代题的答案一定在原文中，通常就在代词出现位置的前文。" />
                    <PracticeProblem id={1515} type="choice" question={'遇到标题含义题（分析文章的标题有什么含义），通常需要回答哪两层？'} options={[{ label: 'A', value: '表层含义（字面意思、贯穿全文的线索） + 深层含义（象征意义、主旨情感）' }, { label: 'B', value: '第一段的意思和最后一段的意思' }, { label: 'C', value: '说明文的含义和记叙文的含义' }, { label: 'D', value: '没有两层，只有一层' }]} answer="A" explanation="标题往往一语双关，不仅概括事件（表层），还点明中心/象征某种精神（深层）。" />
                    <PracticeProblem id={1516} type="choice" question={'评价文章中的人物时，最重要的是什么？'} options={[{ label: 'A', value: '用很多华丽的成语去夸他' }, { label: 'B', value: '看他最后有没有成功' }, { label: 'C', value: '结合文章中描写该人物具体的语言、动作、神态等事实来提炼其品质' }, { label: 'D', value: '只看作者的评价' }]} answer="C" explanation="人物评价必须“有理有据”，理是品质，据是文中的具体描写。" />
                    <PracticeProblem id={1517} type="choice" question={'“这是一篇什么体裁的文章？”如果文章里详细介绍了长城的结构、历史和修建特点，没有特定的故事情节人物，那它是？'} options={[{ label: 'A', value: '写景记叙文' }, { label: 'B', value: '说明文' }, { label: 'C', value: '童话' }, { label: 'D', value: '议论文' }]} answer="B" explanation="以客观介绍事物、阐明事理为目的的文章是说明文。" />
                    <PracticeProblem id={1518} type="choice" question={'阅读短文中出现了一句名言警句，作者引用的目的是什么？'} options={[{ label: 'A', value: '凑字数' }, { label: 'B', value: '为了显示作者很有文化' }, { label: 'C', value: '作为道理论据，增强文章的说服力，更好地论证中心观点，或深化文章主题' }, { label: 'D', value: '没有目的' }]} answer="C" explanation="引用作用通常都是为中心思想服务，增加权威性和文学色彩。" />
                    <PracticeProblem id={1519} type="choice" question={'如果在文章中间看到承上启下的段落，它在结构上的作用叫什么？'} options={[{ label: 'A', value: '开门见山' }, { label: 'B', value: '首尾呼应' }, { label: 'C', value: '过渡' }, { label: 'D', value: '铺垫' }]} answer="C" explanation="中间起连接上下文作用的叫过渡段/过渡句。" />
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
                    <PracticeProblem id={1521} type="choice" question={'在《两小儿辩日》中，第一个小孩认为太阳在早上离人近的理由是？'} options={[{ label: 'A', value: '因为早上天气凉爽' }, { label: 'B', value: '因为太阳初出大如车盖，日中则如盘盂（看起来大）' }, { label: 'C', value: '因为早上想睡觉' }, { label: 'D', value: '因为早上跑得快' }]} answer="B" explanation="第一个小孩是从“视觉大小”的角度来判断远近的。" />
                    <PracticeProblem id={1522} type="choice" question={'第二个小孩认为太阳中午离人近的理由是？'} options={[{ label: 'A', value: '因为中午太阳很亮' }, { label: 'B', value: '因为中午吃饭了' }, { label: 'C', value: '日初出沧沧凉凉，及日中如探汤（感觉热）' }, { label: 'D', value: '因为中午太阳在头顶' }]} answer="C" explanation="第二个小孩是从“触觉温度”的角度来判断远近的。" />
                    <PracticeProblem id={1523} type="choice" question={'在文言文阅读中，遇到“之”字，最常见的两种用法是？'} options={[{ label: 'A', value: '只有“的”的意思' }, { label: 'B', value: '做动词翻译为“去、往”，或做代词指代上文的人或事，或做结构助词“的”' }, { label: 'C', value: '做语气词' }, { label: 'D', value: '没有意思' }]} answer="B" explanation="“之”字在文言文中非常活跃，最常考的就是这三种用法。" />
                    <PracticeProblem id={1524} type="choice" question={'翻译句子“日初出沧沧凉凉，及其日中如探汤”，正确的是？'} options={[{ label: 'A', value: '太阳刚出来很凉爽，到了中午就像去喝汤一样。' }, { label: 'B', value: '太阳刚出来很凄凉，到了中午想要喝热汤。' }, { label: 'C', value: '太阳刚出来的时候感觉清凉，到了中午就像把手伸进热水里一样（热）。' }, { label: 'D', value: '太阳出来很冷，中午很热。' }]} answer="C" explanation="重点词：“沧沧凉凉”指清爽有凉意，“探汤”指把手伸向热水。" />
                    <PracticeProblem id={1525} type="choice" question={'阅读长篇文言文时，如果遇到理解不了的某个人物动作或决定，应该怎么做？'} options={[{ label: 'A', value: '跳过不看' }, { label: 'B', value: '联系上下文，看看他在什么背景下、对谁做了这个动作，推测他的心理' }, { label: 'C', value: '瞎猜一个' }, { label: 'D', value: '觉得古人很奇怪' }]} answer="B" explanation="“词不离句，句不离篇”，文言文人物的言行必定有其内在逻辑。" />
                    <PracticeProblem id={1526} type="choice" question={'《伯牙鼓琴》中“伯牙谓世再无知音，乃破琴绝弦，终身不复鼓”，表现了伯牙？'} options={[{ label: 'A', value: '脾气很大，喜欢摔东西' }, { label: 'B', value: '不想弹琴了' }, { label: 'C', value: '对知音钟子期的死感到极度悲痛，体现了知音难觅和两人深厚的友谊' }, { label: 'D', value: '觉得琴不好听了' }]} answer="C" explanation="“破琴绝弦”成为千古绝唱，不仅是因为悲伤，更是因为除了子期再无人能听懂。" />
                    <PracticeProblem id={1527} type="choice" question={'文言文中的“汝”和“尔”通常指代？'} options={[{ label: 'A', value: '我' }, { label: 'B', value: '他' }, { label: 'C', value: '你 / 你们' }, { label: 'D', value: '这里' }]} answer="C" explanation="“汝”“尔”都是古代常用的第二人称代词。" />
                    <PracticeProblem id={1528} type="choice" question={'“此不为近者热而远者凉乎？”这是一个什么句式？翻译时要注意？'} options={[{ label: 'A', value: '陈述句，直接翻译' }, { label: 'B', value: '感叹句，不用翻译问号' }, { label: 'C', value: '反问句，翻译时要体现出“难道不是……吗”的加强语气' }, { label: 'D', value: '祈使句' }]} answer="C" explanation="文言文中“岂……”“安……”“……乎？”常构成反问句。" />
                    <PracticeProblem id={1529} type="choice" question={'学习古人留下的这些长篇文言文（如寓言、历史故事），最主要的目的是？'} options={[{ label: 'A', value: '为了学会说古文' }, { label: 'B', value: '体会古人的智慧、精神品质以及文章蕴含的深刻道理' }, { label: 'C', value: '为了考试' }, { label: 'D', value: '只为了认字' }]} answer="B" explanation="“文以载道”，文言文是传承中华优秀传统文化和智慧的载体。" />
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
                    <PracticeProblem id={1531} type="choice" question={'如果在文章中看到“我认为……”、“……是极其重要的”，这通常是议论文的什么？'} options={[{ label: 'A', value: '论点' }, { label: 'B', value: '论据' }, { label: 'C', value: '论证' }, { label: 'D', value: '结尾' }]} answer="A" explanation="论点是作者对所议论的问题提出的见解、主张，是整篇文章的灵魂。" />
                    <PracticeProblem id={1532} type="choice" question={'作者为了证明“失败是成功之母”，列举了爱迪生发明电灯失败上千次的故事。这个故事属于什么？'} options={[{ label: 'A', value: '道理论据' }, { label: 'B', value: '事实论据（举例论证）' }, { label: 'C', value: '对比论证' }, { label: 'D', value: '论点' }]} answer="B" explanation="用真实具体的事例来证明观点的论据，属于事实论据。" />
                    <PracticeProblem id={1533} type="choice" question={'俗语说“良药苦口利于病，忠言逆耳利于行”，作者引用这句话来证明“我们要善于听取别人的批评”，这属于什么论证方法？'} options={[{ label: 'A', value: '举例论证' }, { label: 'B', value: '道理论证（引用论证）' }, { label: 'C', value: '对比论证' }, { label: 'D', value: '比喻论证' }]} answer="B" explanation="引用名人名言、古诗文名句、俗语谚语等来证明论点，是道理论证（也叫引用论证）。" />
                    <PracticeProblem id={1534} type="choice" question={'为了证明“勤奋才能成才”，文章先写了方仲永聪明却不学习最后变成普通人，又写了匡衡凿壁偷光终成大器。这主要运用了什么论证方法？'} options={[{ label: 'A', value: '比喻论证' }, { label: 'B', value: '道理论证' }, { label: 'C', value: '对比论证' }, { label: 'D', value: '没有论证方法' }]} answer="C" explanation="将正反两种情况放在一起进行比较，从而突出论点，这是对比论证。" />
                    <PracticeProblem id={1535} type="choice" question={'议论文的中心论点一般出现在文章的哪个位置比较多？'} options={[{ label: 'A', value: '只在标题' }, { label: 'B', value: '只在结尾' }, { label: 'C', value: '通常在标题或开头提出，有时在结尾总结归纳出来' }, { label: 'D', value: '文章中间隐藏着' }]} answer="C" explanation="开门见山提出论点是最常见的结构，有时也会在标题直接点明（如《为人民服务》）。" />
                    <PracticeProblem id={1536} type="choice" question={'读议论文时，如何区分论点和论题？'} options={[{ label: 'A', value: '它们是一回事' }, { label: 'B', value: '论题是一个完整的句子，论点是一个词' }, { label: 'C', value: '论题是文章讨论的话题（如“谈骨气”），论点是作者对这个话题的具体看法和判断（如“我们中国人是有骨气的”）' }, { label: 'D', value: '论题在上面，论点在下面' }]} answer="C" explanation="论题是范围，论点是能表明作者立场的完整判断句。" />
                    <PracticeProblem id={1537} type="choice" question={'“知识就像海洋，只有意志坚强的人才能到达彼岸。”这句话用来证明“学习需要坚强意志”，属于什么论证方式？'} options={[{ label: 'A', value: '举例论证' }, { label: 'B', value: '对比论证' }, { label: 'C', value: '比喻论证' }, { label: 'D', value: '事实论证' }]} answer="C" explanation="用人们熟悉的、易懂的具体事物（海洋）去证明抽象的道理（知识和意志），这是比喻论证。" />
                    <PracticeProblem id={1538} type="choice" question={'好的议论文，它的论据必须具备什么特点？'} options={[{ label: 'A', value: '越长越好' }, { label: 'B', value: '真实、典型（有代表性），且能紧密扣住论点证明论点' }, { label: 'C', value: '故事越离奇越好' }, { label: 'D', value: '只要是名人就可以' }]} answer="B" explanation="论据是为论点服务的，不真实或不能证明论点的论据都是无效的。" />
                    <PracticeProblem id={1539} type="choice" question={'在议论文阅读中，问“某段删去行不行”，如果该段是从反面论证的，通常应该怎么答？'} options={[{ label: 'A', value: '行，文章更短了' }, { label: 'B', value: '行，反面例子不好' }, { label: 'C', value: '不行，该段从反面论证，与前文的正反对比，使论证更全面、更严密，更有说服力。' }, { label: 'D', value: '不知道' }]} answer="C" explanation="正反对比能使说理更全面透彻，体现了议论文逻辑的严密性。" />
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
                    <PracticeProblem id={1541} type="choice" question={'复习“基础知识”时，遇到很多容易读错的“多音字”，最好的复习方法是？'} options={[{ label: 'A', value: '死记硬背拼音' }, { label: 'B', value: '把发音和具体的词义、组词结合起来去记（据义定音）' }, { label: 'C', value: '只记最常见的一个发音' }, { label: 'D', value: '考试时靠语感猜' }]} answer="B" explanation="多音字的读音通常和它的意思（词性）有关，理解意思就好记了。" />
                    <PracticeProblem id={1542} type="choice" question={'在病句修改复习中，看到句子“我忍不住不禁笑了起来”，它的语病是什么？'} options={[{ label: 'A', value: '成分残缺' }, { label: 'B', value: '搭配不当' }, { label: 'C', value: '语意重复（“忍不住”和“不禁”意思一样）' }, { label: 'D', value: '顺序颠倒' }]} answer="C" explanation="修改病句要找准病因，删去“忍不住”或“不禁”即可。" />
                    <PracticeProblem id={1543} type="choice" question={'小升初写作文，为了不偏题，第一步（也是最重要的一步）是？'} options={[{ label: 'A', value: '选一个漂亮的开头' }, { label: 'B', value: '认真圈画题目中的关键词（如时间、人物、事件、范围等），仔细审题' }, { label: 'C', value: '想想能用什么好词' }, { label: 'D', value: '直接开始写' }]} answer="B" explanation="审题是作文的生命线，偏题的作文通常得分很低。" />
                    <PracticeProblem id={1544} type="choice" question={'古诗文复习，除了会背会默写，还需要能做到什么？'} options={[{ label: 'A', value: '能画出诗里的画面' }, { label: 'B', value: '理解诗句的意思，并能在具体的语境中运用（如：春天来了，我想到了诗句……）' }, { label: 'C', value: '能把诗唱出来' }, { label: 'D', value: '知道诗人有几个孩子' }]} answer="B" explanation="“活学活用”是语文考试的趋势，理解性默写和情境应用是重点考法。" />
                    <PracticeProblem id={1545} type="choice" question={'“缩句”练习中，应该保留句子的什么部分？'} options={[{ label: 'A', value: '形容词' }, { label: 'B', value: '修饰限制语（的、地、得前面的部分）' }, { label: 'C', value: '句子的主干（主语、谓语、宾语），即“谁干什么”或“什么怎么样”' }, { label: 'D', value: '量词' }]} answer="C" explanation="缩句就是剥去句子的“枝叶”（修饰语），留下“主干”。" />
                    <PracticeProblem id={1546} type="choice" question={'如果在模拟考中发现自己“阅读理解中概括主旨题”总是扣分，应该怎么办？'} options={[{ label: 'A', value: '放弃这类题型' }, { label: 'B', value: '把之前做错的这类题找出来，总结答题公式和思路，进行专项强化突破' }, { label: 'C', value: '多做几套卷子，随便写' }, { label: 'D', value: '背诵很多文章' }]} answer="B" explanation="查漏补缺的最佳方法是针对薄弱点进行专项训练和归纳总结。" />
                    <PracticeProblem id={1547} type="choice" question={'“他跑得像兔子一样快”这句话运用了哪两种修辞手法？'} options={[{ label: 'A', value: '只有夸张' }, { label: 'B', value: '只有比喻' }, { label: 'C', value: '包含比喻（像兔子）和夸张（极言其快）' }, { label: 'D', value: '拟人和比喻' }]} answer="C" explanation="一句话可能包含多种修辞，需要全面分析。" />
                    <PracticeProblem id={1548} type="choice" question={'复习成语时，不仅要注意错别字，还要注意成语的什么？'} options={[{ label: 'A', value: '成语是几级词汇' }, { label: 'B', value: '成语的感情色彩（褒义词、贬义词、中性词）和适用对象' }, { label: 'C', value: '成语有几个拼音' }, { label: 'D', value: '成语是谁发明的' }]} answer="B" explanation="成语误用最常见的原因就是无视了它的感情色彩或使用对象（比如用贬义词“处心积虑”来夸人）。" />
                    <PracticeProblem id={1549} type="choice" question={'面对即将到来的小升初考试，最好的心态是？'} options={[{ label: 'A', value: '非常焦虑，睡不着觉' }, { label: 'B', value: '完全放松，再也不看了' }, { label: 'C', value: '保持自信，有计划地每天复习一点，不懂就问老师' }, { label: 'D', value: '觉得别人都比自己强' }]} answer="C" explanation="良好的心态加上科学有计划的复习，是取得好成绩的关键。" />
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
                    <PracticeProblem id={1551} type="choice" question={'“快速浏览”一本书通常不包括什么？'} options={[{ label: 'A', value: '看书本的封面和封底简介' }, { label: 'B', value: '看目录' }, { label: 'C', value: '逐字逐句地精读每一行的描写' }, { label: 'D', value: '看作者简介和序言' }]} answer="C" explanation="浏览是为了快速获取全书概貌，逐字精读那是属于细读阶段的工作。" />
                    <PracticeProblem id={1552} type="choice" question={'如果你在读像《三国演义》哪怕是少儿版，里面人物很多，用什么工具辅助阅读最好？'} options={[{ label: 'A', value: '画人物关系图，理清人物之间的阵营和联系' }, { label: 'B', value: '死记硬背每个人的名字' }, { label: 'C', value: '只看主角不看配角' }, { label: 'D', value: '把书撕了' }]} answer="A" explanation="图表是梳理复杂人物关系和故事情节的最佳辅助工具。" />
                    <PracticeProblem id={1553} type="choice" question={'做读书笔记时，如果只是把书里的好词好句抄下来，这样做够吗？'} options={[{ label: 'A', value: '够了，字写好看就行' }, { label: 'B', value: '不够，除了“摘抄”，更重要的是写下自己的“批注/感悟”，与书本对话' }, { label: 'C', value: '不够，还要把全书抄一遍' }, { label: 'D', value: '根本不用做笔记' }]} answer="B" explanation="“不动笔墨不读书”，真正的读书笔记必须包含读者的思考。" />
                    <PracticeProblem id={1554} type="choice" question={'读科普类书籍（如《十万个为什么》），最好的阅读策略是？'} options={[{ label: 'A', value: '必须从第一页看到最后一页' }, { label: 'B', value: '像看小说一样看开头结尾' }, { label: 'C', value: '可以根据目录，挑选自己最感兴趣的问题模块跳跃式阅读' }, { label: 'D', value: '只看图片' }]} answer="C" explanation="不同题材的书阅读方法不同，科普书没有强连贯的故事情节，适合跳读或选读。" />
                    <PracticeProblem id={1555} type="choice" question={'写“读后感”时，最核心的部分应该是？'} options={[{ label: 'A', value: '大篇幅复述全书的故事内容' }, { label: 'B', value: '抄录书上的前言' }, { label: 'C', value: '由书中的某一内容引发的自己真实的“感悟”，并联系个人生活实际' }, { label: 'D', value: '评价作者的文笔' }]} answer="C" explanation="读后感重在“感”。引语引述故事只能占很小部分（略写），自身的感悟必须详写。" />
                    <PracticeProblem id={1556} type="choice" question={'如果阅读时遇到一大段大段枯燥的环境描写，对推动情节好像没帮助，我可以？'} options={[{ label: 'A', value: '直接略过不读（跳读）' }, { label: 'B', value: '停下来全背下来' }, { label: 'C', value: '觉得书不好啃扔掉' }, { label: 'D', value: '只看标点' }]} answer="A" explanation="整本书阅读允许且鼓励使用“跳读”或“略读”策略来跳过无关紧要的细节。" />
                    <PracticeProblem id={1557} type="choice" question={'“推测”也是阅读的好习惯。读小说时，我们可以怎么做？'} options={[{ label: 'A', value: '直接翻到最后一页看凶手是谁' }, { label: 'B', value: '读到关键情节停下来，根据前文线索猜猜人物接下来的命运或故事走向，再和作者写的印证' }, { label: 'C', value: '只看别人写的剧透' }, { label: 'D', value: '什么也不想' }]} answer="B" explanation="边读边预测能极大地提高阅读兴趣和深度理解能力。" />
                    <PracticeProblem id={1558} type="choice" question={'班里开展“好书推荐课”，你在介绍自己读过的书时，应该重点展示？'} options={[{ label: 'A', value: '书有多厚，有多贵' }, { label: 'B', value: '书里的每个人物叫什么' }, { label: 'C', value: '最打动你的一个片段或主人公最突出的品质，以及你推荐的理由' }, { label: 'D', value: '把书名念一遍' }]} answer="C" explanation="推荐的核心在于“分享价值”，用亮点片段和真情实感去吸引他人。" />
                    <PracticeProblem id={1559} type="choice" question={'为什么老师鼓励大家多读经典的“整本书”而不是网上的碎片文章？'} options={[{ label: 'A', value: '因为整本书很贵' }, { label: 'B', value: '因为老师自己看不懂网上的' }, { label: 'C', value: '整本书有更完整的思想体系和情节脉络，能培养持续专注力、深层次思考能力和阅读耐力' }, { label: 'D', value: '没有原因' }]} answer="C" explanation="碎片化阅读很难构建知识体系，深阅读能力必须通过啃大部头的整本书来锻炼。" />
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
                    <PracticeProblem id={1561} type="choice" question={'题目《一件____的事》，你认为填下面哪个词最容易写出好作文？'} options={[{ label: 'A', value: '没意思' }, { label: 'B', value: '普通' }, { label: 'C', value: '感人 / 难忘 / 受到启发' }, { label: 'D', value: '无聊' }]} answer="C" explanation="立意要积极向上，有真情实感。填有情感或成长指向的词更容易写出深度。" />
                    <PracticeProblem id={1562} type="choice" question={'“列提纲”通常包括哪些内容？'} options={[{ label: 'A', value: '开头怎么写，中间分几段详写什么，结尾怎么点题（骨架规划）' }, { label: 'B', value: '把全文草稿写一遍' }, { label: 'C', value: '只写个标题' }, { label: 'D', value: '画几个画' }]} answer="A" explanation="提纲就是作文的骨架，确立文章的结构和详略分布。" />
                    <PracticeProblem id={1563} type="choice" question={'考场作文中“点题”非常重要，什么是点题？'} options={[{ label: 'A', value: '在文章里反复画点' }, { label: 'B', value: '主要是指在开头、过渡、结尾处，直接使用或化用标题中的关键词，亮明中心思想，避免改卷老师认为是跑题文章' }, { label: 'C', value: '把题目写在黑板上' }, { label: 'D', value: '写很多离题的话' }]} answer="B" explanation="考场作文阅卷快，点题能让阅卷老师迅速抓住你的立意，是得分保险。" />
                    <PracticeProblem id={1564} type="choice" question={'如果你写作文《我的同桌》，中间写了他借我橡皮（略写）、他带病坚持考试（详写）、他长得高（略写）。这体现了考场作文的什么原则？'} options={[{ label: 'A', value: '字数凑不够' }, { label: 'B', value: '想到哪写哪' }, { label: 'C', value: '详略得当，突出中心' }, { label: 'D', value: '乱写一通' }]} answer="C" explanation="最能体现人物优秀品质或主题的事件必须详写，其余可以略写衬托。" />
                    <PracticeProblem id={1565} type="choice" question={'考场上如果时间只剩5分钟，作文还差一个结尾，最好的做法是？'} options={[{ label: 'A', value: '放弃不写了' }, { label: 'B', value: '重新写一遍' }, { label: 'C', value: '用一两句话快速总结前文，升华感情或点明中心，强行圆满结尾' }, { label: 'D', value: '后面画一排波浪线' }]} answer="C" explanation="没有完整的结构是大忌，不管段落多短也要有一个呼应开头的结尾。" />
                    <PracticeProblem id={1566} type="choice" question={'为了让作文的语言看起来更生动、得高分，你可以在平时准备什么“秘密武器”用在考场上？'} options={[{ label: 'A', value: '几句新奇的骂人的话' }, { label: 'B', value: '平时背熟的几句优美古诗词、名言警句、或者积累的神态/动作描写词汇' }, { label: 'C', value: '抄别人考卷上的' }, { label: 'D', value: '写很多惊叹号' }]} answer="B" explanation="考场上灵活套用平时的积累，就是展示文字功底的最好方式。" />
                    <PracticeProblem id={1567} type="choice" question={'检查试卷时，发现作文里有一个关键词写错别字了，怎么改最合适？'} options={[{ label: 'A', value: '用黑笔涂成一个大黑疙瘩' }, { label: 'B', value: '用修正带涂了厚厚一层再写' }, { label: 'C', value: '用一条线轻轻划掉错字，在旁边工整地写上正确的字' }, { label: 'D', value: '干脆把那一整段都划掉' }]} answer="C" explanation="考场卷面讲究整洁，大面积涂改或用修正带容易引起反感或被扫描机误识。" />
                    <PracticeProblem id={1568} type="choice" question={'关于考场作文的分段，比较合理的建议是？'} options={[{ label: 'A', value: '全文就一大段' }, { label: 'B', value: '分两段，开头一句，中间全部挤在一起' }, { label: 'C', value: '一般分为4-6段为宜，不仅条理清晰，也给阅卷老师留出视觉喘息空间' }, { label: 'D', value: '每写一句话分一段' }]} answer="C" explanation="清晰的段落层次“凤头、猪肚（中间分几段列举）、豹尾”能大大提高卷面分。" />
                    <PracticeProblem id={1569} type="choice" question={'选材的时候，写“我生病了妈妈照顾我，半夜送我去医院”和写“我和妈妈一起参加环保志愿扫街”，哪个材料更容易在新颖度上拿高分？'} options={[{ label: 'A', value: '都是一样的' }, { label: 'B', value: '半夜送医院（因为很感人，大家都这么写）' }, { label: 'C', value: '环保志愿扫街（不落俗套，体现了社会责任感的宽广立意）' }, { label: 'D', value: '谁字数多哪个高分' }]} answer="C" explanation="“半夜送医院”是烂大街的俗套材料。考场作文选材贵在新颖、有时代气息。" />
                </div>
            )
        }
    }
};

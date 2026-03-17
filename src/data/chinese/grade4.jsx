import { Icons, PracticeProblem, React } from './common';
const { Lightbulb, Clock, Star, BookOpen } = Icons;

export const grade4Content = {

    // ==================== L1-1. 缩句与扩句 ====================
    'cn4-l1-sentence-transform': {
        meta: { title: "缩句与扩句 - 四年级语文 | AI奇妙语文", description: "学习缩句和扩句的方法，掌握句子的基本结构。", keywords: '缩句,扩句,句式变换,四年级语文' },
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
                    <PracticeProblem id={1302} type="choice" question={'把“清澈的溪水欢快地流向远方。”缩句，正确的是？'} options={[{ label: 'A', value: '清澈溪水流向远方。' }, { label: 'B', value: '溪水欢快地流。' }, { label: 'C', value: '溪水流。' }, { label: 'D', value: '溪水流向远方。' }]} answer="D" explanation="去掉“的”、“地”前词，保留主干：谁（溪水）+ 做什么（流向远方）。" />
                    <PracticeProblem id={1303} type="choice" question={'缩句时，下面哪个词不能去掉？'} options={[{ label: 'A', value: '“的”字前面的词，比如“美丽的”' }, { label: 'B', value: '“地”字前面的词，比如“飞快地”' }, { label: 'C', value: '“不”“没有”等表示否定的词' }, { label: 'D', value: '表示地点的词，比如“在公园里”' }]} answer="C" explanation="否定词“不”、“没有”等不能去掉，否则句子意思就完全反了。" />
                    <PracticeProblem id={1304} type="choice" question={'对于“我不小心把花瓶打碎了。”进行缩句，正确的是？'} options={[{ label: 'A', value: '我打碎了。' }, { label: 'B', value: '我打碎了花瓶。' }, { label: 'C', value: '我把花瓶打碎了。' }, { label: 'D', value: '花瓶打碎了。' }]} answer="C" explanation="缩句时，“把”字句里的“把”和它后面的词不能去掉，要保留“谁把你怎么样”的主干。" />
                    <PracticeProblem id={1305} type="choice" question={'将句子“树叶落下来。”进行扩句，下面哪个不符合要求？'} options={[{ label: 'A', value: '金黄的树叶慢慢地落下来。' }, { label: 'B', value: '秋风吹过，枯黄的树叶像蝴蝶一样从树上落下来。' }, { label: 'C', value: '树叶在秋天落下来，铺满了小路。' }, { label: 'D', value: '叶子掉下来。' }]} answer="D" explanation="D选项没有添加任何修饰成分，反而改变了原词，不是扩句。" />
                    <PracticeProblem id={1306} type="choice" question={'“雨点落在雨伞上。”扩句：什么样的雨点？怎样落在？什么样的雨伞上？最合适的组合是？'} options={[{ label: 'A', value: '大大的雨点落在雨伞上。' }, { label: 'B', value: '豆大的雨点劈里啪啦地砸在红颜色的雨伞上。' }, { label: 'C', value: '雨点啪啪落在伞上。' }, { label: 'D', value: '雨点重重落在雨伞上。' }]} answer="B" explanation="B选项充分回答了这三个问题，添加了生动的修饰词。" />
                    <PracticeProblem id={1307} type="choice" question={'缩句：“那一面面鲜艳的红旗在天安门广场上迎风飘扬。”'} options={[{ label: 'A', value: '红旗在广场飘扬。' }, { label: 'B', value: '红旗迎风飘扬。' }, { label: 'C', value: '红旗飘扬。' }, { label: 'D', value: '那一面面红旗飘扬。' }]} answer="C" explanation="去掉所有的修饰语和状语，只留下“红旗飘扬”。" />
                    <PracticeProblem id={1308} type="choice" question={'“老师批改作业。”如果我们要加上表示地点和状态的词扩句，可以是：'} options={[{ label: 'A', value: '语文老师批改作业。' }, { label: 'B', value: '老师在办公室里认真地批改作业。' }, { label: 'C', value: '老师批改同学们的作业。' }, { label: 'D', value: '老师每天批改作业。' }]} answer="B" explanation="“在办公室里”是地点，“认真地”是状态。" />
                    <PracticeProblem id={1309} type="choice" question={'缩句最主要的作用是？'} options={[{ label: 'A', value: '为了把字数变少' }, { label: 'B', value: '为了让句子更生动' }, { label: 'C', value: '为了看清句子的主要意思（主干）' }, { label: 'D', value: '为了方便背诵' }]} answer="C" explanation="缩句能帮我们迅速抓住句子的核心意思，看清结构。" />
                </div>
            )
        }
    },

    // ==================== L1-2. 关联词应用 ====================
    'cn4-l1-conjunction-usage': {
        meta: { title: "关联词应用 - 四年级语文 | AI奇妙语文", description: "深入学习关联词的辨析和在复杂句中的运用。", keywords: '关联词,复句,四年级语文' },
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
                    <PracticeProblem id={1311} type="choice" question={'“（   ）下雨了，（   ）我们要带上伞。”这里应该填什么？'} options={[{ label: 'A', value: '因为……所以……' }, { label: 'B', value: '如果……就……' }, { label: 'C', value: '只要……就……' }, { label: 'D', value: '虽然……但是……' }]} answer="A" explanation="前面是原因，后面是结果，是既定事实，用因果关系。" />
                    <PracticeProblem id={1312} type="choice" question={'“他（   ）成绩好，（   ）很乐于助人。”'} options={[{ label: 'A', value: '因为……所以……' }, { label: 'B', value: '即使……也……' }, { label: 'C', value: '不但……而且……' }, { label: 'D', value: '不是……而是……' }]} answer="C" explanation="两个优点并列且更进一步，用递进关系。" />
                    <PracticeProblem id={1313} type="choice" question={'“（   ）遇到多大的困难，我们（   ）不能放弃。”'} options={[{ label: 'A', value: '因为……所以……' }, { label: 'B', value: '即使……也……' }, { label: 'C', value: '无论……都……' }, { label: 'D', value: '如果……就……' }]} answer="C" explanation="强调在任何条件或情况下结果都不变，通常用“无论……都/也……”。" />
                    <PracticeProblem id={1314} type="choice" question={'“只要努力，就一定能成功。”这句话中“只要……就……”表示？'} options={[{ label: 'A', value: '因果关系' }, { label: 'B', value: '条件关系' }, { label: 'C', value: '转折关系' }, { label: 'D', value: '假设关系' }]} answer="B" explanation="“只要”表示必备的条件，“就”表示产生的结果。" />
                    <PracticeProblem id={1315} type="choice" question={'“（   ）明天下雨，运动会（   ）推迟举行。”'} options={[{ label: 'A', value: '如果……就……' }, { label: 'B', value: '既然……就……' }, { label: 'C', value: '因为……所以……' }, { label: 'D', value: '哪怕……也……' }]} answer="A" explanation="因为明天还没到，下雨是假设的情况，用“如果……就……”。" />
                    <PracticeProblem id={1316} type="choice" question={'区分：“（   ）今天下雨了，（   ）运动会推迟了。”'} options={[{ label: 'A', value: '如果……就……' }, { label: 'B', value: '既然……就……' }, { label: 'C', value: '因为……所以……' }, { label: 'D', value: '只要……就……' }]} answer="C" explanation="这里下雨已经是事实，所以用表因果的“因为……所以……”。" />
                    <PracticeProblem id={1317} type="choice" question={'“这件事（   ）他做的，（   ）小明做的。”（两人中选一个）'} options={[{ label: 'A', value: '不是……而是……' }, { label: 'B', value: '不是……就是……' }, { label: 'C', value: '不但……而且……' }, { label: 'D', value: '既然……就……' }]} answer="B" explanation="表示两者中选其一，用“不是……就是……”。" />
                    <PracticeProblem id={1318} type="choice" question={'“这支笔（   ）小红的，（   ）小刚的。”（纠正错误认识）'} options={[{ label: 'A', value: '不是……就是……' }, { label: 'B', value: '不是……而是……' }, { label: 'C', value: '不仅……还……' }, { label: 'D', value: '与其……不如……' }]} answer="B" explanation="表示否定前者，肯定后者，用并列关系的“不是……而是……”。" />
                    <PracticeProblem id={1319} type="choice" question={'下面含有转折关系的句子是？'} options={[{ label: 'A', value: '只要我们努力，就能成功。' }, { label: 'B', value: '虽然他跑得很慢，但是他坚持到了终点。' }, { label: 'C', value: '因为下雪，所以路滑。' }, { label: 'D', value: '如果明天下雪，我们就不去了。' }]} answer="B" explanation="“虽然……但是……”表示前半句和后半句的意思发生了转折。" />
                </div>
            )
        }
    },

    // ==================== L1-3. 必背古诗词（下） ====================
    'cn4-l1-ancient-poems-2': {
        meta: { title: "必背古诗词（下）- 四年级语文 | AI奇妙语文", description: "学习更多经典古诗词，深入赏析手法与情感。", keywords: '古诗词,诗词鉴赏,四年级语文' },
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
                    <PracticeProblem id={1321} type="choice" question={'《泊船瓜洲》中，“春风又绿江南岸”的“绿”字为什么用得好？'} options={[{ label: 'A', value: '说明作者喜欢绿色' }, { label: 'B', value: '把形容词当动词用，生动地写出了春风吹过，江南一下子变绿的动态过程和勃勃生机' }, { label: 'C', value: '说明草是绿的' }, { label: 'D', value: '为了押韵' }]} answer="B" explanation="“绿”字是诗眼，写出了春风的魔力，让整个江南充满生机。" />
                    <PracticeProblem id={1322} type="choice" question={'“明月何时照我还”表达了诗人怎样的情感？'} options={[{ label: 'A', value: '对月亮的喜爱' }, { label: 'B', value: '想在月光下散步' }, { label: 'C', value: '对家乡的深切思念，期盼早日归乡' }, { label: 'D', value: '觉得晚上太亮睡不着' }]} answer="C" explanation="还：回家的意思。诗人借明月表达了浓浓的思乡之情。" />
                    <PracticeProblem id={1323} type="choice" question={'《题西林壁》的作者苏轼是哪个朝代的诗人？'} options={[{ label: 'A', value: '唐代' }, { label: 'B', value: '宋代' }, { label: 'C', value: '清代' }, { label: 'D', value: '明代' }]} answer="B" explanation="苏轼是北宋著名的文学家、书画家。" />
                    <PracticeProblem id={1324} type="choice" question={'“横看成岭侧成峰，远近高低各不同”是在写哪里的景物？'} options={[{ label: 'A', value: '泰山' }, { label: 'B', value: '黄山' }, { label: 'C', value: '庐山' }, { label: 'D', value: '华山' }]} answer="C" explanation="从诗的题目《题西林壁》及下文“不识庐山真面目”可知写的是庐山。" />
                    <PracticeProblem id={1325} type="choice" question={'如果在生活中，别人因为只看到事物的一面而产生误解，你可以用哪句诗来提醒他？'} options={[{ label: 'A', value: '横看成岭侧成峰' }, { label: 'B', value: '不识庐山真面目，只缘身在此山中' }, { label: 'C', value: '明月何时照我还' }, { label: 'D', value: '春风又绿江南岸' }]} answer="B" explanation="这句诗常用来比喻“当局者迷”，提醒人们要跳出局部看问题。" />
                    <PracticeProblem id={1326} type="choice" question={'“钟山只隔数重山”中的“数重”是什么意思？'} options={[{ label: 'A', value: '很重很重' }, { label: 'B', value: '数字' }, { label: 'C', value: '几层，几座' }, { label: 'D', value: '重要的山' }]} answer="C" explanation="“重”在这里读chóng，表示层。数重山就是几重山。" />
                    <PracticeProblem id={1327} type="choice" question={'“题西林壁”中的“题”是什么意思？'} options={[{ label: 'A', value: '题目' }, { label: 'B', value: '问题' }, { label: 'C', value: '书写，题写（在墙壁上写诗）' }, { label: 'D', value: '提着' }]} answer="C" explanation="古人游览名山大川时，常有在墙壁或石头上题诗留念的习惯。" />
                    <PracticeProblem id={1328} type="choice" question={'学习古诗，四年级比三年级多了什么要求？'} options={[{ label: 'A', value: '不背诵了' }, { label: 'B', value: '只要会读就行' }, { label: 'C', value: '不仅要理解诗意，还要能赏析“诗眼”和体会诗人更深层的情感/哲理' }, { label: 'D', value: '画出来' }]} answer="C" explanation="高年级古诗学习更注重鉴赏和体会哲理。" />
                    <PracticeProblem id={1329} type="choice" question={'王安石的《泊船瓜洲》主要是一首什么诗？'} options={[{ label: 'A', value: '咏物诗' }, { label: 'B', value: '边塞诗' }, { label: 'C', value: '思乡诗' }, { label: 'D', value: '送别诗' }]} answer="C" explanation="通过“明月何时照我还”可以看出这是一首表达思乡之情的诗。" />
                </div>
            )
        }
    },

    // ==================== L1-4. 阅读理解（记叙文） ====================
    'cn4-l1-reading-comprehension': {
        meta: { title: "阅读理解（记叙文）- 四年级语文 | AI奇妙语文", description: "学习分析记叙文的人物、事件、中心思想。", keywords: '阅读理解,记叙文,中心思想,四年级语文' },
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
                    <PracticeProblem id={1331} type="choice" question={'阅读理解中，中心思想通常隐藏在文章的什么地方？'} options={[{ label: 'A', value: '只在第一句' }, { label: 'B', value: '文章的开头、结尾或者人物的重要对话中' }, { label: 'C', value: '绝对不会写出来，只能猜' }, { label: 'D', value: '每一句都是中心思想' }]} answer="B" explanation="作者常常在文章开头总起，或在结尾总结、点题，人物的关键对话也常暗示文章中心。" />
                    <PracticeProblem id={1332} type="choice" question={'如果让你概括一篇记叙文的主要内容，下面哪个公式最好用？'} options={[{ label: 'A', value: '时间+地点' }, { label: 'B', value: '谁 + 做了什么 + 结果怎样' }, { label: 'C', value: '起因+结果' }, { label: 'D', value: '把第一段抄一遍' }]} answer="B" explanation="“谁做了什么结果怎样”能最简练地概括一件事的核心内容。" />
                    <PracticeProblem id={1333} type="choice" question={'在一篇写人的记叙文里，作者写这个人做的一件小事，目的是为了什么？'} options={[{ label: 'A', value: '为了凑字数' }, { label: 'B', value: '为了证明事情是真的' }, { label: 'C', value: '为了通过这件事表现人物的性格特点或高尚品质' }, { label: 'D', value: '因为没有别的事可写' }]} answer="C" explanation="写人离不开叙事，写事是为了更好地塑造人物形象。" />
                    <PracticeProblem id={1334} type="choice" question={'“阅读理解”在语文考试中为什么很重要？'} options={[{ label: 'A', value: '它最简单' }, { label: 'B', value: '它能考查我们读懂文章、提取信息和分析思考的综合能力' }, { label: 'C', value: '为了让我们多看故事' }, { label: 'D', value: '不重要' }]} answer="B" explanation="阅读理解是语文素养的核心体现。" />
                    <PracticeProblem id={1335} type="choice" question={'你在阅读时遇到一句话：“他激动得半天说不出话来。”这是在描写人物的什么？'} options={[{ label: 'A', value: '外貌' }, { label: 'B', value: '神态和心理' }, { label: 'C', value: '环境' }, { label: 'D', value: '动作' }]} answer="B" explanation="“激动”是心理，“半天说不出话”反映了被内心强烈情感冲击的神态表现。" />
                    <PracticeProblem id={1336} type="choice" question={'题目问“某某词语在文中是什么意思”，最稳妥的答题方法是？'} options={[{ label: 'A', value: '查字典里的意思照抄' }, { label: 'B', value: '随便猜一个' }, { label: 'C', value: '把这个词语放回原句，联系上下文来解释。' }, { label: 'D', value: '不写' }]} answer="C" explanation="词不离句，很多词语在特定语境下有特殊的含义（语境义）。" />
                    <PracticeProblem id={1337} type="choice" question={'如果一篇文章结尾写到：“那天的一幕，我永远也不会忘记。”这句话的作用可能是？'} options={[{ label: 'A', value: '没有用' }, { label: 'B', value: '总结全文，点明中心，表明这件事对我的影响很大' }, { label: 'C', value: '作者忘词了' }, { label: 'D', value: '为了好听' }]} answer="B" explanation="结尾常用来升华主题、点明中心思想。" />
                    <PracticeProblem id={1338} type="choice" question={'一篇记叙文的叙述顺序常见的有？'} options={[{ label: 'A', value: '顺叙、倒叙、插叙' }, { label: 'B', value: '上下左右' }, { label: 'C', value: '红黄蓝绿' }, { label: 'D', value: '一二三四' }]} answer="A" explanation="顺叙是按时间顺序，倒叙是先说结果再说经过，插叙是在中间插入其他相关事。" />
                    <PracticeProblem id={1339} type="choice" question={'在概括“中心思想”时，常用的句式是？'} options={[{ label: 'A', value: '我觉得……' }, { label: 'B', value: '本文通过记叙……（事件），表现了/赞扬了/表达了……（品质/情感/道理）' }, { label: 'C', value: '这篇课文真好' }, { label: 'D', value: '我不知道' }]} answer="B" explanation="这是一种规范、完整的表述中心思想的句式。" />
                </div>
            )
        }
    },

    // ==================== L2-1. 写作进阶（写景状物） ====================
    'cn4-l2-writing-scenes': {
        meta: { title: "写作进阶 - 四年级语文 | AI奇妙语文", description: "学习写景和状物的方法和技巧。", keywords: '写景,状物,描写,四年级语文' },
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
                    <PracticeProblem id={1341} type="choice" question={'“微风吹过，带来了一阵淡淡的花香。”这句话调动了什么感官来写景？'} options={[{ label: 'A', value: '视觉（看）' }, { label: 'B', value: '听觉（听）' }, { label: 'C', value: '嗅觉（闻）和触觉（风吹）' }, { label: 'D', value: '味觉（尝）' }]} answer="C" explanation="“花香”是嗅觉，“微风吹过”能感受到是触觉。" />
                    <PracticeProblem id={1342} type="choice" question={'“春天到了，迎春花吹起了金色的小喇叭。”这句话运用了什么修辞手法写景？'} options={[{ label: 'A', value: '比喻' }, { label: 'B', value: '拟人和比喻' }, { label: 'C', value: '排比' }, { label: 'D', value: '夸张' }]} answer="B" explanation="迎春花像“小喇叭”是比喻，花会“吹”是拟人。" />
                    <PracticeProblem id={1343} type="choice" question={'如果在作文中写“校园的早晨”，最好的写作顺序可能是？'} options={[{ label: 'A', value: '按照时间顺序（校门刚开时→同学们早读时→第一节课上课时）写' }, { label: 'B', value: '先写晚上再写早晨' }, { label: 'C', value: '只写校门在哪里' }, { label: 'D', value: '没有顺序随便写' }]} answer="A" explanation="写“早晨”通常按时间推移的顺序来写最合适。" />
                    <PracticeProblem id={1344} type="choice" question={'写一种小动物（状物），我们通常要写它的哪些方面？'} options={[{ label: 'A', value: '只写它的颜色' }, { label: 'B', value: '只写它吃什么' }, { label: 'C', value: '它的外形特点、生活习性（吃、睡、玩）以及我和它的故事' }, { label: 'D', value: '写它有多少根毛' }]} answer="C" explanation="状物作文需要全面介绍动物的特点，并融入人的感情。" />
                    <PracticeProblem id={1345} type="choice" question={'“这只小猫全身雪白，只有尾巴尖是黑色的，像一团白雪里藏着一块小黑炭。”这句话重点描写了小猫的什么？'} options={[{ label: 'A', value: '生活习性' }, { label: 'B', value: '性格特点' }, { label: 'C', value: '外形特征（毛色）' }, { label: 'D', value: '它怎么叫' }]} answer="C" explanation="描述颜色和样子属于外形特征的描写。" />
                    <PracticeProblem id={1346} type="choice" question={'“它吃东西的时候可有趣了，总是先用小鼻子闻一闻，确定安全了，才大口大口地吃起来。”这句话写出了小猫的？'} options={[{ label: 'A', value: '外貌' }, { label: 'B', value: '生活习性（吃东西的特点）' }, { label: 'C', value: '喜欢睡觉' }, { label: 'D', value: '毛色' }]} answer="B" explanation="进食方式是动物的生活习性之一。" />
                    <PracticeProblem id={1347} type="choice" question={'写景或状物的文章，最后的结尾通常用来？'} options={[{ label: 'A', value: '再描写一个别的东西' }, { label: 'B', value: '表达自己对这个地方或这个事物的喜爱/赞美之情' }, { label: 'C', value: '写不出来了，直接停笔' }, { label: 'D', value: '随便抄一句古诗' }]} answer="B" explanation="“借景抒情”、“托物言志”，结尾常用来升华情感。" />
                    <PracticeProblem id={1348} type="choice" question={'为了让小动物在文章里显得更活泼可爱，我们可以不用“它”字，而改用哪个词来称呼？'} options={[{ label: 'A', value: '那个东西' }, { label: 'B', value: '小家伙' }, { label: 'C', value: '怪物' }, { label: 'D', value: '它' }]} answer="B" explanation="用“小家伙”等拟人化的称呼能体现出作者的喜爱之情。" />
                    <PracticeProblem id={1349} type="choice" question={'为什么写景的时候要“动静结合”？'} options={[{ label: 'A', value: '为了让画面显得死气沉沉' }, { label: 'B', value: '为了凑字数' }, { label: 'C', value: '让静的景物和动的景物互相映衬，画面更有生气和层次感' }, { label: 'D', value: '不知道' }]} answer="C" explanation="动静结合能让文章仿佛变成有声有色的电影。" />
                </div>
            )
        }
    },

    // ==================== L2-2. 病句修改 ====================
    'cn4-l2-sick-sentences': {
        meta: { title: "病句修改 - 四年级语文 | AI奇妙语文", description: "学习识别和修改常见病句类型。", keywords: '病句,修改病句,语病,四年级语文' },
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
                    <PracticeProblem id={1351} type="choice" question={'修改病句：“我们在操场上兴高采烈、高高兴兴地玩游戏。”'} options={[{ label: 'A', value: '他们在操场上兴高采烈、高高兴兴地玩游戏。' }, { label: 'B', value: '我们在操场上玩游戏。' }, { label: 'C', value: '我们在操场上兴高采烈地玩游戏。' }, { label: 'D', value: '我们在玩游戏。' }]} answer="C" explanation="“兴高采烈”和“高高兴兴”意思重复，删去其中一个即可。" />
                    <PracticeProblem id={1352} type="choice" question={'这属于哪种病句？“读了这本书，使我受到了很大的启发。”'} options={[{ label: 'A', value: '重复啰嗦' }, { label: 'B', value: '语序不当' }, { label: 'C', value: '搭配不当' }, { label: 'D', value: '成分残缺（缺少主语）' }]} answer="D" explanation="去掉“使”，让“我”做主语；或者去掉“读了”，让“这本书”做主语。" />
                    <PracticeProblem id={1353} type="choice" question={'修改病句：“他今天穿着一件红色的外套和一顶蓝色的帽子。”'} options={[{ label: 'A', value: '他今天穿着红外套和蓝帽子。' }, { label: 'B', value: '他今天戴着一件红色的外套和一顶蓝色的帽子。' }, { label: 'C', value: '他今天穿着一件红色的外套，戴着一顶蓝色的帽子。' }, { label: 'D', value: '他今天穿了一件红色外套。' }]} answer="C" explanation="“穿”不能和“帽子”搭配。帽子应该用“戴”。这属于搭配不当。" />
                    <PracticeProblem id={1354} type="choice" question={'“树上的小鸟在枝头欢快地唱歌在枝头上。”这句话有什么毛病？'} options={[{ label: 'A', value: '重复啰嗦（语意重复）' }, { label: 'B', value: '没有毛病' }, { label: 'C', value: '鸟不会唱歌' }, { label: 'D', value: '缺少主语' }]} answer="A" explanation="“在枝头”和后面的“在枝头上”重复了，删去后一个即可。" />
                    <PracticeProblem id={1355} type="choice" question={'修改病句：“我把作业差不多全都做完了。”'} options={[{ label: 'A', value: '我把作业做完了。' }, { label: 'B', value: '我把作业全都做完了。' }, { label: 'C', value: '我把作业差不多做完了。' }, { label: 'D', value: 'B或C都行。' }]} answer="D" explanation="“差不多”表示不完全，“全都”表示完全，两者矛盾。保留一个即可。" />
                    <PracticeProblem id={1356} type="choice" question={'病句：“我们在看明月皎洁的夜空。”如何修改？'} options={[{ label: 'A', value: '我们在看夜空明月皎洁的。' }, { label: 'B', value: '明月皎洁的夜空我们在看。' }, { label: 'C', value: '我们在看明月皎洁。' }, { label: 'D', value: '我们在看皎洁明月的夜空。 （应改为：我们在看皎洁的明月。）' }]} answer="D" explanation="这句其实是搭配和语序双重问题。更常见的改法是：我们在看一轮皎洁的明月。" />
                    <PracticeProblem id={1357} type="choice" question={'这属于哪种病句？“语文对我很感兴趣。”'} options={[{ label: 'A', value: '语序不当' }, { label: 'B', value: '主客颠倒（语序/搭配问题）' }, { label: 'C', value: '重复' }, { label: 'D', value: '残缺' }]} answer="B" explanation="应该是“我对语文很感兴趣”。人对事物感兴趣，不能反过来。" />
                    <PracticeProblem id={1358} type="choice" question={'病句：“班会课上，他首先第一个发言。”毛病是？'} options={[{ label: 'A', value: '残缺' }, { label: 'B', value: '重复啰嗦' }, { label: 'C', value: '搭配不当' }, { label: 'D', value: '没有毛病' }]} answer="B" explanation="“首先”和“第一个”意思一样，删去其中一个。" />
                    <PracticeProblem id={1359} type="choice" question={'“修改病句”就像医生看病，最重要的第一步是？'} options={[{ label: 'A', value: '拿起笔就改' }, { label: 'B', value: '多读几遍，体会哪里不通顺，找出“病因”' }, { label: 'C', value: '把不认识的字圈出来' }, { label: 'D', value: '放弃不改' }]} answer="B" explanation="凭语感读出来，哪里拗口、别扭，往往就是有病句的地方。" />
                </div>
            )
        }
    },

    // ==================== L2-3. 修辞手法进阶 ====================
    'cn4-l2-rhetoric-adv': {
        meta: { title: "修辞手法进阶 - 四年级语文 | AI奇妙语文", description: "学习排比和夸张修辞手法。", keywords: '排比,夸张,修辞手法,四年级语文' },
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
                    <PracticeProblem id={1361} type="choice" question={'“飞流直下三千尺，疑是银河落九天。”这句诗除了比喻，还运用了什么修辞手法？'} options={[{ label: 'A', value: '拟人' }, { label: 'B', value: '排比' }, { label: 'C', value: '夸张' }, { label: 'D', value: '反问' }]} answer="C" explanation="瀑布不可能真的有“三千尺”那么长，这是为了表现瀑布壮观而进行的极度夸张。" />
                    <PracticeProblem id={1362} type="choice" question={'“教室里静得连根针掉在地上都听得见。”这句话属于？'} options={[{ label: 'A', value: '扩大夸张' }, { label: 'B', value: '缩小夸张' }, { label: 'C', value: '并不是夸张' }, { label: 'D', value: '排比' }]} answer="A" explanation="为了强调非常安静的意思，把这种安静的程度夸大了。" />
                    <PracticeProblem id={1363} type="choice" question={'排比句的特点是什么？'} options={[{ label: 'A', value: '句子里有“像”字' }, { label: 'B', value: '把物当成人写' }, { label: 'C', value: '有三个或三个以上结构相同或相似、意思相关的短语或句子并排在一起' }, { label: 'D', value: '只有两句话' }]} answer="C" explanation="排比必须至少有三个结构相似的句子。" />
                    <PracticeProblem id={1364} type="choice" question={'“天上的云，有的像羽毛，有的像绵羊，有的像鱼鳞，有的像高塔。”这句话用了几种修辞手法？'} options={[{ label: 'A', value: '只有比喻' }, { label: 'B', value: '只有排比' }, { label: 'C', value: '比喻和排比' }, { label: 'D', value: '拟人和排比' }]} answer="C" explanation="四个“有的像…”构成了排比，同时“像羽毛”等都是比喻。" />
                    <PracticeProblem id={1365} type="choice" question={'“广场上有的人在跳舞，有的人在唱歌，有的人在聊天。”这是什么句？'} options={[{ label: 'A', value: '排比句' }, { label: 'B', value: '比喻句' }, { label: 'C', value: '拟人句' }, { label: 'D', value: '夸张句' }]} answer="A" explanation="三个“有的人在干什么”的结构排在一起，构成了排比。" />
                    <PracticeProblem id={1366} type="choice" question={'“一眨眼的功夫，他就不见了。”这句话运用了什么修辞？'} options={[{ label: 'A', value: '排比' }, { label: 'B', value: '拟人' }, { label: 'C', value: '夸张' }, { label: 'D', value: '比喻' }]} answer="C" explanation="“一眨眼”形容时间极短，属于夸张的表现手法。" />
                    <PracticeProblem id={1367} type="choice" question={'在作文中使用排比句的主要作用是？'} options={[{ label: 'A', value: '凑字数好玩' }, { label: 'B', value: '增强语势，表达强烈的感情，让文章读起来朗朗上口' }, { label: 'C', value: '让别人看不懂' }, { label: 'D', value: '没什么用' }]} answer="B" explanation="排比句气势磅礴，很有节奏感。" />
                    <PracticeProblem id={1368} type="choice" question={'“这个地方只有巴掌那么大，建不了公园。”这是什么夸张？'} options={[{ label: 'A', value: '扩大夸张' }, { label: 'B', value: '缩小夸张' }, { label: 'C', value: '超前夸张' }, { label: 'D', value: '不是夸张' }]} answer="B" explanation="为了说明地方非常小，故意把它说成只有“巴掌大”，这叫缩小夸张。" />
                    <PracticeProblem id={1369} type="choice" question={'哪一句没有运用夸张的修辞手法？'} options={[{ label: 'A', value: '他饿得能吃下一头大象。' }, { label: 'B', value: '这里冷得像冰窖一样。' }, { label: 'C', value: '他比我高一点点。' }, { label: 'D', value: '他气得头发都要烧起来了。' }]} answer="C" explanation="C选项是如实陈述事实，没有夸张。" />
                </div>
            )
        }
    }
};

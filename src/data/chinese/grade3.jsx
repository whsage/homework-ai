import { Icons, PracticeProblem, React } from './common';
const { Lightbulb, Clock, Star, BookOpen } = Icons;

export const grade3Content = {

    // ==================== L1-1. 阅读理解入门 ====================
    'cn3-l1-reading-intro': {
        meta: { title: "阅读理解入门 - 三年级语文 | AI7Miao语文", description: "学习阅读理解的基本方法，培养提取信息和理解文意的能力。", keywords: '阅读理解,理解词语,概括段意,三年级语文' },
        info: { title: "阅读理解入门", description: "阅读就像当小侦探！在文字中找线索、解谜题！🔍", tags: [{ text: '基础达标', color: 'blue' }, { text: '30分钟', icon: Clock, color: 'slate' }, { text: '重点', icon: Star, color: 'orange' }] },
        aiContext: "学生学习阅读理解入门。引导学生掌握三步法：通读全文了解大意→带着问题精读→回到原文找答案。用侦探找线索的比喻。",
        aiChatTitle: "🔍 阅读小侦探", aiChatIntro: "每篇文章都藏着秘密！跟我一起当小侦探，把答案找出来！",
        aiMessages: [{ role: 'ai', content: '读一篇文章就像做侦探！第一步你觉得应该做什么？是直接看题目，还是先把文章读一遍呢？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-red-600" />
                            阅读三步法
                        </h2>
                        <div className="space-y-4">
                            {[
                                { step: '第一步：通读全文 📖', desc: '先把文章从头到尾读一遍，了解大概在说什么。就像侦探先到现场看看整体情况！', color: 'blue' },
                                { step: '第二步：带着问题精读 🎯', desc: '看看题目问的是什么，然后带着问题再读一遍，重点关注和问题相关的段落。', color: 'green' },
                                { step: '第三步：回原文找答案 🔍', desc: '答案一般就藏在文章里！用笔画出关键词句，组织语言写出答案。', color: 'purple' },
                            ].map(s => (
                                <div key={s.step} className={`p-4 rounded-xl border-l-4 border-${s.color}-500 bg-${s.color}-50 dark:bg-${s.color}-900/20`}>
                                    <h3 className={`font-bold text-${s.color}-800 dark:text-${s.color}-300 mb-1`}>{s.step}</h3>
                                    <p className="text-sm text-slate-700 dark:text-slate-300">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-5 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border-l-4 border-yellow-400">
                            <p className="font-bold text-yellow-800 dark:text-yellow-300 mb-1">💡 理解词语的方法</p>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                                遇到不懂的词？试试这些办法：<br />
                                1. <strong>联系上下文</strong>——看看前后说了什么，猜猜词语的意思<br />
                                2. <strong>拆字法</strong>——把词语拆开理解每个字的意思<br />
                                3. <strong>换词法</strong>——用你知道的近义词替换试试
                            </p>
                        </div>
                    </div>
                </div>
            ),
            properties: (<div className="space-y-6"><div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6"><h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 常见丢分点</h3><div className="grid md:grid-cols-2 gap-4"><div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200"><p className="text-red-500 font-bold mb-2">❌ 凭感觉答题</p><p className="text-sm text-slate-600 dark:text-slate-400">不回到原文找证据，想当然地回答，容易出错！</p></div><div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200"><p className="text-green-500 font-bold mb-2">✅ 原文中画线</p><p className="text-sm text-slate-600 dark:text-slate-400">在与问题相关的句子下面画线，答案就在那里！</p></div></div></div></div>),
            examples: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">📝 实战演练</h2><div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl"><p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">　　春天到了，小燕子从南方飞回来了。它们在屋檐下叽叽喳喳地叫着，好像在说："春天好美呀！"田野里，油菜花开了，金黄金黄的，像铺了一地金子。</p><p className="font-bold text-slate-800 dark:text-white mb-2">问：小燕子从哪里飞回来？</p><p className="text-sm text-red-600 dark:text-red-400 pl-4 border-l-4 border-red-400">🔍 回到原文第一句找：小燕子从<strong>南方</strong>飞回来了。</p></div></div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1200} type="choice" question={'阅读理解的第一步应该做什么？'} options={[{ label: 'A', value: '直接看问题' }, { label: 'B', value: '先通读全文' }, { label: 'C', value: '先看最后一段' }, { label: 'D', value: '先查字典' }]} answer="B" explanation={'第一步应该先通读全文，了解文章大意，然后再带着问题去精读。'} />
                    <PracticeProblem id={1201} type="choice" question={'遇到不懂的词语，下面哪个方法最好？'} options={[{ label: 'A', value: '跳过不管' }, { label: 'B', value: '随便猜一个' }, { label: 'C', value: '联系上下文理解' }, { label: 'D', value: '只看字面意思' }]} answer="C" explanation={'联系上下文是最实用的方法，通过前后内容推测词语含义。'} />
                </div>
            )
        }
    },

    // ==================== L1-2. 修辞手法 ====================
    'cn3-l1-rhetoric': {
        meta: { title: "修辞手法 - 三年级语文 | AI7Miao语文", description: "学习比喻和拟人两种常用修辞手法。", keywords: '修辞手法,比喻,拟人,三年级语文' },
        info: { title: "修辞手法（比喻·拟人）", description: "语言也能变魔术！比喻让事物更生动，拟人让万物都会说话！✨", tags: [{ text: '基础达标', color: 'blue' }, { text: '30分钟', icon: Clock, color: 'slate' }, { text: '重点', icon: Star, color: 'orange' }] },
        aiContext: "学生学习比喻和拟人。比喻是把A说成像B（本体、喻体、比喻词），拟人是把事物当人写。引导学生发现修辞的生动效果。",
        aiChatTitle: "✨ 修辞魔法师", aiChatIntro: "修辞手法让你的文字变得像魔法一样精彩！",
        aiMessages: [{ role: 'ai', content: '"弯弯的月亮像一条小船。"——这句话把月亮比作了什么？你觉得为什么要这样比呢？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-red-600" />
                            两大修辞法宝
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">🌙 比喻 —— "把A说成像B"</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">用一个大家熟悉的事物来形容另一个事物，让人一听就懂！</p>
                                <div className="bg-white dark:bg-slate-700 p-3 rounded-lg space-y-2 text-sm">
                                    <p>弯弯的<strong className="text-red-600">月亮</strong>像一条<strong className="text-blue-600">小船</strong>。</p>
                                    <p className="text-xs text-slate-500">本体（月亮）+ 比喻词（像）+ 喻体（小船）</p>
                                    <p className="mt-2">常用比喻词：<span className="font-mono text-blue-600">像、好像、仿佛、如同、似</span></p>
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">🌸 拟人 —— "让事物变成人"</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">把动植物或事物当成人来写，给它们人的动作、表情、语言！</p>
                                <div className="bg-white dark:bg-slate-700 p-3 rounded-lg space-y-2 text-sm">
                                    <p>春天来了，小草<strong className="text-green-600">探出头来</strong>，好奇地<strong className="text-green-600">张望</strong>着这个世界。</p>
                                    <p className="text-xs text-slate-500">小草会"探头""张望"吗？不会！这是把小草当人写！</p>
                                    <p className="mt-2">花儿<strong className="text-green-600">对我笑</strong>，鸟儿<strong className="text-green-600">在歌唱</strong>，风<strong className="text-green-600">轻轻地抚摸</strong>我的脸。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (<div className="space-y-6"><div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6"><h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 比喻 vs 拟人 区别</h3><div className="grid md:grid-cols-2 gap-4"><div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-blue-200"><p className="text-blue-500 font-bold mb-2">🌙 比喻</p><p className="text-sm text-slate-600 dark:text-slate-400">"荷叶像一把绿色的伞。"<br />→ 有"像"等比喻词，把A说成B</p></div><div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200"><p className="text-green-500 font-bold mb-2">🌸 拟人</p><p className="text-sm text-slate-600 dark:text-slate-400">"荷叶撑起绿伞，为小鱼遮阳。"<br />→ 没有比喻词，荷叶有了人的动作"撑""遮"</p></div></div></div></div>),
            examples: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">📝 判断修辞手法</h2><div className="space-y-3">{[{ s: '天上的星星像无数颗钻石。', type: '比喻', reason: '有"像"字，把星星比作钻石' }, { s: '风姑娘轻轻地唱着歌。', type: '拟人', reason: '风被当成"姑娘"，会"唱歌"' }, { s: '大海是一面巨大的镜子。', type: '比喻', reason: '把大海说成是镜子（暗喻）' }, { s: '太阳公公露出了笑脸。', type: '拟人', reason: '太阳被称为"公公"，会"露笑脸"' }].map((ex, i) => (<div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-3 rounded-xl flex items-start gap-3"><div><p className="text-sm text-slate-700 dark:text-slate-300">{ex.s}</p><p className="text-xs text-slate-500">→ <strong className={ex.type === '比喻' ? 'text-blue-600' : 'text-green-600'}>{ex.type}</strong>：{ex.reason}</p></div></div>))}</div></div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1210} type="choice" question={'柳条像姑娘的头发在风中飘舞"用了什么修辞手法？'} options={[{ label: 'A', value: '只有比喻' }, { label: 'B', value: '只有拟人' }, { label: 'C', value: '比喻和拟人' }, { label: 'D', value: '夸张' }]} answer="C" explanation={'像姑娘的头发"是比喻，"飘舞"是拟人（柳条不会真的跳舞），两种都用了！'} />
                    <PracticeProblem id={1211} type="choice" question={'下面哪句使用了拟人？'} options={[{ label: 'A', value: '月亮像一面镜子' }, { label: 'B', value: '花儿向我点头微笑' }, { label: 'C', value: '他跑得像兔子一样快' }, { label: 'D', value: '雪白雪白的棉花' }]} answer="B" explanation={'花儿会"点头""微笑"吗？不会，这是把花当成人来写，所以是拟人。'}  />
                </div>
            )
        }
    },

    // ==================== L1-3. 必背古诗词（上） ====================
    'cn3-l1-ancient-poems-1': {
        meta: { title: "必背古诗词（上）- 三年级语文 | AI7Miao语文", description: "学习并背诵经典古诗词，体会诗歌的意境美。", keywords: '古诗词,必背古诗,三年级语文' },
        info: { title: "必背古诗词（上）", description: "穿越千年，和古代大诗人一起看山看水！每首诗都是一幅画！🏔️", tags: [{ text: '基础达标', color: 'blue' }, { text: '25分钟', icon: Clock, color: 'slate' }, { text: '重点', icon: Star, color: 'orange' }] },
        aiContext: "学生学习古诗词。用情境还原法帮助理解诗意：让学生想象自己回到诗人所处的场景。引导体味关键字词的妙处。",
        aiChatTitle: "🏔️ 诗词时光机", aiChatIntro: "坐上时光机，去看看古代诗人写诗时看到了什么！",
        aiMessages: [{ role: 'ai', content: '闭上眼睛想象：你站在高高的鹳雀楼上，太阳慢慢沉入远处的大山，黄河水滚滚流向大海……这就是王之涣写《登鹳雀楼》时看到的景色！' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <BookOpen className="w-6 h-6 text-red-600" />
                            经典古诗赏析
                        </h2>
                        <div className="space-y-5">
                            {[
                                {
                                    title: '《登鹳雀楼》 —— 王之涣',
                                    poem: '白日依山尽，黄河入海流。\n欲穷千里目，更上一层楼。',
                                    meaning: '太阳靠着大山慢慢落下去了，黄河水滚滚流向大海。想要看到更远的地方，就要再爬上更高的一层楼。',
                                    keypoint: '🔑 名句"欲穷千里目，更上一层楼"告诉我们：想要看得更远，就要站得更高！学习也是这样！',
                                    color: 'blue'
                                },
                                {
                                    title: '《望庐山瀑布》 —— 李白',
                                    poem: '日照香炉生紫烟，遥看瀑布挂前川。\n飞流直下三千尺，疑是银河落九天。',
                                    meaning: '阳光照在香炉峰上生出紫色的烟雾，远远望去瀑布像白色的丝帛挂在山前。瀑布飞快地从高处落下来，好像银河从天上落下来一样！',
                                    keypoint: '🔑 "三千尺"是夸张，不是真的三千尺！李白用夸张来表现瀑布的壮观。"疑是银河落九天"是比喻！',
                                    color: 'green'
                                },
                                {
                                    title: '《静夜思》 —— 李白',
                                    poem: '床前明月光，疑是地上霜。\n举头望明月，低头思故乡。',
                                    meaning: '床前洒满了月光，好像地上铺了一层白霜。抬头看那明亮的月亮，低头就不由得思念起远方的故乡。',
                                    keypoint: '🔑 月亮 = 思念家乡。在古诗里，看到"月亮"就要想到诗人可能在思念家乡和亲人！',
                                    color: 'purple'
                                }
                            ].map(poem => (
                                <div key={poem.title} className={`p-5 rounded-xl border-l-4 border-${poem.color}-500 bg-${poem.color}-50 dark:bg-${poem.color}-900/20`}>
                                    <h3 className={`font-bold text-${poem.color}-800 dark:text-${poem.color}-300 text-lg mb-2`}>{poem.title}</h3>
                                    <pre className="text-slate-800 dark:text-white font-mono text-sm whitespace-pre-line mb-3 leading-relaxed">{poem.poem}</pre>
                                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">📖 <strong>译文：</strong>{poem.meaning}</p>
                                    <p className="text-sm text-slate-700 dark:text-slate-300">{poem.keypoint}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            properties: (<div className="space-y-6"><div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6"><h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">💡 古诗学习方法</h3><div className="space-y-2 text-sm text-slate-600 dark:text-slate-400"><p>1. <strong>读诗题</strong>：从标题知道诗在写什么</p><p>2. <strong>知诗人</strong>：了解作者的时代和经历</p><p>3. <strong>解诗意</strong>：逐句理解意思</p><p>4. <strong>悟诗情</strong>：体会诗人的感情</p><p>5. <strong>背诗句</strong>：理解了就容易背了！</p></div></div></div>),
            examples: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">🎯 古诗填空</h2><div className="space-y-3">{[{ q: '白日依山尽，____。', a: '黄河入海流' }, { q: '飞流直下三千尺，____。', a: '疑是银河落九天' }, { q: '举头望明月，____。', a: '低头思故乡' }].map((ex, i) => (<div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-3 rounded-xl"><p className="text-sm text-slate-700 dark:text-slate-300 font-mono">{ex.q}</p><p className="text-xs text-red-600 dark:text-red-400 mt-1">答案：{ex.a}</p></div>))}</div></div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1220} type="choice" question={'欲穷千里目，更上一层楼"告诉我们什么道理？'} options={[{ label: 'A', value: '爬楼梯有好处' }, { label: 'B', value: '站得高才能看得远' }, { label: 'C', value: '千里眼很厉害' }, { label: 'D', value: '黄河水很大' }]} answer="B" explanation={'这两句诗告诉我们"站得高，看得远"的道理，比喻只有不断进步，才能看到更广阔的世界。'} />
                    <PracticeProblem id={1221} type="choice" question={'《静夜思》中诗人看到月亮想到了什么？'} options={[{ label: 'A', value: '想吃月饼' }, { label: 'B', value: '想去旅行' }, { label: 'C', value: '思念故乡' }, { label: 'D', value: '想看星星' }]} answer="C" explanation={'诗句"低头思故乡"表明诗人看到月亮思念起远方的故乡。月亮在古诗中常代表思乡之情。'}  />
                </div>
            )
        }
    },

    // ==================== L1-4. 段落大意概括 ====================
    'cn3-l1-paragraph': {
        meta: { title: "段落大意概括 - 三年级语文 | AI7Miao语文", description: "学习概括段落大意和找中心句的方法。", keywords: '段落大意,中心句,概括,三年级语文' },
        info: { title: "段落大意概括", description: "把一大段话缩成一句话！学会抓重点，你就是'缩句大王'！📄", tags: [{ text: '基础达标', color: 'blue' }, { text: '30分钟', icon: Clock, color: 'slate' }] },
        aiContext: "学生学习段落大意概括。教会找中心句（通常在段首或段尾），以及用'谁+做了什么+结果怎样'来概括大意。",
        aiChatTitle: "📄 概括小能手", aiChatIntro: "一段话太长记不住？学会概括，一句话就能说清楚！",
        aiMessages: [{ role: 'ai', content: '读这段话：小明每天早上6点起床，先跑步锻炼身体，然后回家吃早饭，最后背着书包上学去。你能用一句话概括这段话的意思吗？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />概括段意的方法</h2><div className="space-y-4">{[{ t: '🎯 找中心句法', d: '段落里往往有一句话能概括全段意思——中心句。它通常在段首（总起句）或段尾（总结句）。', color: 'blue' }, { t: '📝 合并法', d: '把每句话的关键内容合并起来，用"谁+做了什么"或"什么+怎么样"的格式写出来。', color: 'green' }, { t: '❓ 提问法', d: '问自己：这段话主要在说谁？在说什么事？结果怎样？把答案连起来就是段意！', color: 'purple' }].map(m => (<div key={m.t} className={`p-4 rounded-xl border-l-4 border-${m.color}-500 bg-${m.color}-50 dark:bg-${m.color}-900/20`}><h3 className={`font-bold text-${m.color}-800 dark:text-${m.color}-300 mb-1`}>{m.t}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{m.d}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 小技巧：段落的第一句话和最后一句话最重要！先看它们！</div>),
            examples: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">📝 练习概括</h2><div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl"><p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">　　<strong className="text-red-600">蚂蚁是一种非常勤劳的小动物。</strong>它们每天天一亮就出去找食物。有的搬运粮食，有的搬运树叶，有的照顾小蚂蚁。无论刮风还是下雨，蚂蚁们从不偷懒。</p><p className="text-sm text-red-600 dark:text-red-400 font-bold">段意：蚂蚁是一种非常勤劳的小动物。（第一句就是中心句！）</p></div></div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1230} type="choice" question={'中心句通常在段落的什么位置？'} options={[{ label: 'A', value: '只在中间' }, { label: 'B', value: '段首或段尾' }, { label: 'C', value: '只在第二句' }, { label: 'D', value: '每句话都是' }]} answer="B" explanation={'中心句最常出现在段首（总起全段）或段尾（总结全段），有时也在中间，但段首段尾最常见。'} />
                </div>
            )
        }
    },

    // ==================== L2-1. 写作启蒙 ====================
    'cn3-l2-writing-intro': {
        meta: { title: "写作启蒙 - 三年级语文 | AI7Miao语文", description: "学习写人写事的基本方法。", keywords: '写作,写人,写事,三年级语文' },
        info: { title: "写作启蒙（写人写事）", description: "用文字画一个人、讲一件事！你也可以是小作家！📝", tags: [{ text: '素养进阶', color: 'purple' }, { text: '35分钟', icon: Clock, color: 'slate' }, { text: '重点', icon: Star, color: 'orange' }] },
        aiContext: "学生学习写人和写事的作文。写人要抓住外貌、语言、动作、心理描写；写事要按开头→经过→结尾的顺序。",
        aiChatTitle: "📝 小作家工坊", aiChatIntro: "每个人都有故事可以写！来学习把故事写得精彩吧！",
        aiMessages: [{ role: 'ai', content: '想写一个你最喜欢的人，你会先写他长什么样？还是先写他做了什么让你印象深刻的事呢？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />写人写事两大技巧</h2><div className="space-y-5"><div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500"><h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">👤 写人四描写</h3><div className="grid grid-cols-2 gap-3">{[{ t: '👁️ 外貌描写', ex: '她有一双大大的眼睛，扎着两条辫子。' }, { t: '💬 语言描写', ex: '妈妈温柔地说："宝贝，加油！"' }, { t: '🏃 动作描写', ex: '他飞快地跑过来，一把拉住我的手。' }, { t: '💭 心理描写', ex: '我心里紧张极了，手心都出了汗。' }].map(d => (<div key={d.t} className="bg-white dark:bg-slate-700 p-3 rounded-lg"><p className="font-bold text-sm text-blue-600 mb-1">{d.t}</p><p className="text-xs text-slate-600 dark:text-slate-400">{d.ex}</p></div>))}</div></div><div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500"><h3 className="font-bold text-green-800 dark:text-green-300 mb-3">📋 写事三步走</h3><div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">{[{ s: '1. 开头', d: '交代时间、地点、人物（简短有趣）' }, { s: '2. 经过', d: '按顺序写发生了什么（最重要！写详细）' }, { s: '3. 结尾', d: '写结果和感受（点明中心）' }].map(step => (<p key={step.s}><strong className="text-green-600">{step.s}：</strong>{step.d}</p>))}</div></div></div></div>),
            properties: (<div className="space-y-6"><div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6"><h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 写作常见问题</h3><div className="grid md:grid-cols-2 gap-4"><div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200"><p className="text-red-500 font-bold mb-2">❌ 流水账</p><p className="text-sm text-slate-600 dark:text-slate-400">"我起床了。我吃饭了。我上学了。"——这叫流水账！没有重点！</p></div><div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200"><p className="text-green-500 font-bold mb-2">✅ 详略得当</p><p className="text-sm text-slate-600 dark:text-slate-400">最精彩、最打动人的部分写详细，不重要的一笔带过！</p></div></div></div></div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 试着写一篇200字左右的作文，题目："我的好朋友"或"一件难忘的事"。</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1240} type="choice" question={'写人的作文中，哪个不属于"四描写"？'}  options={[{ label: 'A', value: '外貌描写' }, { label: 'B', value: '天气描写' }, { label: 'C', value: '语言描写' }, { label: 'D', value: '动作描写' }]} answer="B" explanation={'写人的四描写是：外貌描写、语言描写、动作描写、心理描写。天气描写属于环境描写。'} />
                </div>
            )
        }
    },

    // ==================== L2-2. 关联词语 ====================
    'cn3-l2-conjunctions': {
        meta: { title: "关联词语 - 三年级语文 | AI7Miao语文", description: "学习常用关联词语的搭配和用法。", keywords: '关联词,因果关系,转折关系,三年级语文' },
        info: { title: "关联词语", description: "关联词就像句子之间的桥梁，把两个意思连起来！🌉", tags: [{ text: '素养进阶', color: 'purple' }, { text: '25分钟', icon: Clock, color: 'slate' }] },
        aiContext: "学生学习关联词语。用配对的方式教学，强调关联词必须成对使用。用生活场景造句。",
        aiChatTitle: "🌉 造桥小工匠", aiChatIntro: "关联词就是连接两个句子的小桥！学会造桥，你的句子会更通顺！",
        aiMessages: [{ role: 'ai', content: '"因为今天下雨了，所以我带了雨伞。"——"因为…所以…"就是一对关联词！你能换一对试试吗？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />常用关联词配对</h2><div className="space-y-4">{[{ type: '因果关系', words: '因为……所以……', ex: '因为他努力学习，所以考试得了高分。', color: 'blue' }, { type: '转折关系', words: '虽然……但是……', ex: '虽然天气很冷，但是他还是坚持锻炼。', color: 'orange' }, { type: '假设关系', words: '如果……就……', ex: '如果明天不下雨，我们就去爬山。', color: 'green' }, { type: '条件关系', words: '只要……就……', ex: '只要你认真听课，就能学到知识。', color: 'purple' }, { type: '递进关系', words: '不但……而且……', ex: '他不但学习好，而且体育也很棒。', color: 'pink' }, { type: '并列关系', words: '一边……一边……', ex: '妈妈一边做饭，一边唱歌。', color: 'red' }].map(item => (<div key={item.type} className={`p-3 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><p className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 text-sm`}>{item.type}：<span className="font-mono">{item.words}</span></p><p className="text-xs text-slate-600 dark:text-slate-400 mt-1">例：{item.ex}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 记住：关联词是一对一对使用的！不能只用一半哦！</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 试着用今天学的每对关联词各造一个句子吧！</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1250} type="choice" question={'___天气很冷，___他还是去上学了。"应该填什么关联词？'} options={[{ label: 'A', value: '因为……所以……' }, { label: 'B', value: '虽然……但是……' }, { label: 'C', value: '如果……就……' }, { label: 'D', value: '不但……而且……' }]} answer="B" explanation={'前面说天气冷（不利条件），后面说还是去了（转折），所以用表示转折的"虽然……但是……"。'} />
                </div>
            )
        }
    },

    // ==================== L2-3. 日记与周记 ====================
    'cn3-l2-diary': {
        meta: { title: "日记与周记 - 三年级语文 | AI7Miao语文", description: "学习写日记和周记的格式和方法。", keywords: '日记,周记,写作,三年级语文' },
        info: { title: "日记与周记", description: "每天写一点，记录生活中的点点滴滴！日记是你最忠实的朋友！📔", tags: [{ text: '素养进阶', color: 'purple' }, { text: '30分钟', icon: Clock, color: 'slate' }] },
        aiContext: "学生学习写日记。重点讲日记格式（日期、星期、天气）和写作要点（真实、有感受、选一件事写）。",
        aiChatTitle: "📔 日记小管家", aiChatIntro: "日记就是和自己聊天！今天发生了什么有趣的事呢？",
        aiMessages: [{ role: 'ai', content: '今天你在学校里发生了什么让你印象深刻的事？不管大事小事都可以写进日记里哦！' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />日记写作指南</h2><div className="space-y-4"><div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500"><h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">📋 日记格式</h3><div className="bg-white dark:bg-slate-700 p-4 rounded-lg text-sm font-mono"><p className="text-right text-slate-500">X月X日 星期X 天气：晴</p><p className="mt-2 text-slate-700 dark:text-slate-300">　　今天……<br />　　（正文开头空两格）</p></div></div><div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500"><h3 className="font-bold text-green-800 dark:text-green-300 mb-2">💡 写什么？</h3><div className="text-sm text-slate-700 dark:text-slate-300 space-y-1"><p>✅ 今天发生的有趣/难忘/感动的事</p><p>✅ 你看到/听到/想到了什么</p><p>✅ 你的心情和感受</p><p>✅ 你学到了什么道理</p></div></div></div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📔 坚持每天写日记，写作能力会越来越强！从今天开始试试吧！</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 写一篇今天的日记，不少于100字！</div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1260} type="choice" question={'日记的第一行应该写什么？'} options={[{ label: 'A', value: '正文内容' }, { label: 'B', value: '日期、星期、天气' }, { label: 'C', value: '标题' }, { label: 'D', value: '作者名字' }]} answer="B" explanation={'日记第一行写日期、星期和天气，这是日记的固定格式。'} />
                </div>
            )
        }
    }
};

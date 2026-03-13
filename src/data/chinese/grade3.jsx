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
                    <PracticeProblem id={1202} type="choice" question={'如果问题问的是“文章的主人公是谁”，你应该去哪里找答案？'} options={[{ label: 'A', value: '一定在文章最后一段' }, { label: 'B', value: '文章里多处都会出现的人名或动物名' }, { label: 'C', value: '一定要查字典' }, { label: 'D', value: '随便写一个名字' }]} answer="B" explanation="主人公是文章主要描写或叙述的对象，通常会在文中多次出现。" />
                    <PracticeProblem id={1203} type="choice" question={'在做阅读理解时，为什么要“画线”？'} options={[{ label: 'A', value: '为了让卷面好看' }, { label: 'B', value: '画画玩' }, { label: 'C', value: '标出与问题相关的关键词句，方便找到答案' }, { label: 'D', value: '老师要求的，没啥用' }]} answer="C" explanation="画线可以帮助我们在原文中定位答案的来源。" />
                    <PracticeProblem id={1204} type="choice" question={'“红彤彤的太阳像大火球一样”，这句话如果不懂“红彤彤”的意思，可以用什么方法猜？'} options={[{ label: 'A', value: '拆字法，红就是红色，彤彤是红艳的样子' }, { label: 'B', value: '直接放弃' }, { label: 'C', value: '觉得它可能是绿色' }, { label: 'D', value: '觉得它可能是方形的' }]} answer="A" explanation="拆字法和联系生活经验都可以帮助理解词语。" />
                    <PracticeProblem id={1205} type="choice" question={'如果在文章中找不到和问题完全一样的句子，我们应该怎么办？'} options={[{ label: 'A', value: '随便写一句' }, { label: 'B', value: '空着不写' }, { label: 'C', value: '找到相关的段落，用自己的话概括出来' }, { label: 'D', value: '照抄第一段' }]} answer="C" explanation="有些阅读理解题需要概括，而不是直接照抄原文。" />
                    <PracticeProblem id={1206} type="choice" question={'阅读理解中常问“这篇文章主要讲了什么事情”，这考察的是什么能力？'} options={[{ label: 'A', value: '查字典的能力' }, { label: 'B', value: '概括全文大意的能力' }, { label: 'C', value: '写错别字的能力' }, { label: 'D', value: '画画的能力' }]} answer="B" explanation="这种题目正是考察学生概括段落和全文大意的能力。" />
                    <PracticeProblem id={1207} type="choice" question={'“带着问题精读”的意思是？'} options={[{ label: 'A', value: '带着疑问的心情粗略看一遍' }, { label: 'B', value: '先看题目，然后回到文章中仔细寻找和题目相关的句子' }, { label: 'C', value: '不看文章直接做题' }, { label: 'D', value: '把问题读很多遍' }]} answer="B" explanation="精读就是有目的性地仔细阅读相关段落。" />
                    <PracticeProblem id={1208} type="choice" question={'阅读短文“秋天到了，树叶黄了，一片片叶子从树上落下来。”问：树叶变成了什么颜色？'} options={[{ label: 'A', value: '红色' }, { label: 'B', value: '绿色' }, { label: 'C', value: '黄色' }, { label: 'D', value: '不知道' }]} answer="C" explanation="原文中说“树叶黄了”，因此是黄色。" />
                    <PracticeProblem id={1209} type="choice" question={'做阅读理解时最容易丢分的做法是？'} options={[{ label: 'A', value: '通读全文' }, { label: 'B', value: '在原文画线找证据' }, { label: 'C', value: '不看原文，凭感觉想当然地写答案' }, { label: 'D', value: '联系上下文理解词语' }]} answer="C" explanation="阅读理解的答案绝大多数都在文章里，凭感觉回答很容易脱离文本出错。" />
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
                    <PracticeProblem id={1212} type="choice" question={'“雨后的彩虹像一座七彩的桥。”这句话中，本体和喻体分别是什么？'} options={[{ label: 'A', value: '本体是桥，喻体是彩虹' }, { label: 'B', value: '本体是雨后，喻体是七彩' }, { label: 'C', value: '本体是彩虹，喻体是桥' }, { label: 'D', value: '没有本体' }]} answer="C" explanation="把“彩虹”比作“桥”，彩虹是本体，桥是用来比喻的事物（喻体）。" />
                    <PracticeProblem id={1213} type="choice" question={'“小鸟在树枝上唱歌。”这句话为什么是拟人句？'} options={[{ label: 'A', value: '因为小鸟很可爱' }, { label: 'B', value: '因为树枝很高' }, { label: 'C', value: '因为把小鸟叫的声当做人的动作“唱歌”来写' }, { label: 'D', value: '因为有“小鸟”' }]} answer="C" explanation="唱歌是人的动作，赋予小鸟人的动作就是拟人。" />
                    <PracticeProblem id={1214} type="choice" question={'下面哪一个词语常常在比喻句中作为“比喻词”出现？'} options={[{ label: 'A', value: '是' }, { label: 'B', value: '像/仿佛/犹如' }, { label: 'C', value: '笑/唱' }, { label: 'D', value: '很/非常' }]} answer="B" explanation="像、仿佛、犹如都是常见的明喻比喻词。" />
                    <PracticeProblem id={1215} type="choice" question={'“这只苹果红得像小妹妹的脸蛋。”用了什么修辞手法？'} options={[{ label: 'A', value: '拟人' }, { label: 'B', value: '比喻' }, { label: 'C', value: '夸张' }, { label: 'D', value: '排比' }]} answer="B" explanation="把红苹果比作小妹妹的脸蛋，有“像”字，是比喻。" />
                    <PracticeProblem id={1216} type="choice" question={'“秋风吹过，树叶纷纷离开了树妈妈的怀抱。”这句话使用了什么修辞？'} options={[{ label: 'A', value: '比喻' }, { label: 'B', value: '夸张' }, { label: 'C', value: '拟人' }, { label: 'D', value: '反问' }]} answer="C" explanation="把树当成了“妈妈”，把风吹落叶赋予了人和人之间离开怀抱的动作，是拟人。" />
                    <PracticeProblem id={1217} type="choice" question={'为什么要使用比喻和拟人修辞手法？'} options={[{ label: 'A', value: '为了让文章更长' }, { label: 'B', value: '为了让老师看不懂' }, { label: 'C', value: '为了让句子更生动、形象，更有趣' }, { label: 'D', value: '没有原因' }]} answer="C" explanation="修辞手法能增加语言的生动性和感染力。" />
                    <PracticeProblem id={1218} type="choice" question={'“大象的耳朵像两把大蒲扇。”这句中，把什么比作了什么？'} options={[{ label: 'A', value: '把大象比作蒲扇' }, { label: 'B', value: '把耳朵比作大象' }, { label: 'C', value: '把大象的耳朵比作蒲扇' }, { label: 'D', value: '把蒲扇比作大象' }]} answer="C" explanation="本体是对大象耳朵的描写，喻体是蒲扇。" />
                    <PracticeProblem id={1219} type="choice" question={'“星星在夜空中眨着眼睛。”这句话使用了？'} options={[{ label: 'A', value: '比喻' }, { label: 'B', value: '拟人' }, { label: 'C', value: '两者都有' }, { label: 'D', value: '两者都没有' }]} answer="B" explanation="星星不会“眨眼睛”，这是把星星当人写，是拟人。" />
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
                    <PracticeProblem id={1222} type="choice" question={'《登鹳雀楼》的作者是谁？'} options={[{ label: 'A', value: '李白' }, { label: 'B', value: '杜甫' }, { label: 'C', value: '王之涣' }, { label: 'D', value: '白居易' }]} answer="C" explanation="《登鹳雀楼》的作者是唐代诗人王之涣。" />
                    <PracticeProblem id={1223} type="choice" question={'“飞流直下三千尺，疑是银河落九天”是在描写什么景物？'} options={[{ label: 'A', value: '下雨' }, { label: 'B', value: '黄河' }, { label: 'C', value: '银河' }, { label: 'D', value: '瀑布' }]} answer="D" explanation="这句诗出自李白的《望庐山瀑布》，描写的是庐山瀑布非常壮观的景象。" />
                    <PracticeProblem id={1224} type="choice" question={'“白日依山尽”中的“尽”是什么意思？'} options={[{ label: 'A', value: '尽头' }, { label: 'B', value: '完了' }, { label: 'C', value: '隐没，落下' }, { label: 'D', value: '所有' }]} answer="C" explanation="“尽”在这里指太阳靠着大山慢慢落下、隐没了。" />
                    <PracticeProblem id={1225} type="choice" question={'在《静夜思》中，能够体现出季节可能是秋天的词语是？'} options={[{ label: 'A', value: '明月' }, { label: 'B', value: '思故乡' }, { label: 'C', value: '地上霜' }, { label: 'D', value: '举头' }]} answer="C" explanation="“地上霜”通常出现在深秋或冬天，月光如霜也是秋夜常有的景象描写。" />
                    <PracticeProblem id={1226} type="choice" question={'古诗中的“疑”字常常是什么意思，比如“疑是银河落九天”？'} options={[{ label: 'A', value: '怀疑' }, { label: 'B', value: '难道' }, { label: 'C', value: '好像，意思是猜测或者感觉像' }, { label: 'D', value: '疑问' }]} answer="C" explanation="在这里“疑是”是指感觉好像是、怀疑是。" />
                    <PracticeProblem id={1227} type="choice" question={'“日照香炉生紫烟”中，为什么会“生紫烟”？'} options={[{ label: 'A', value: '有人在烧火' }, { label: 'B', value: '山火' }, { label: 'C', value: '阳光照在瀑布的水汽上形成的紫色云雾' }, { label: 'D', value: '香炉里冒出的烟' }]} answer="C" explanation="这里的“香炉”指香炉峰，因为瀑布产生水汽，在阳光照射下看起来像紫色的烟雾。" />
                    <PracticeProblem id={1228} type="choice" question={'我们在学习古诗时，除了背诵还要做什么？'} options={[{ label: 'A', value: '只背下来就行' }, { label: 'B', value: '必须抄一百遍' }, { label: 'C', value: '了解诗人的经历，理解诗意，体会感情' }, { label: 'D', value: '忘掉它' }]} answer="C" explanation="理解诗意和诗人感情是学习古诗非常重要的一步。" />
                    <PracticeProblem id={1229} type="choice" question={'“飞流直下三千尺”运用了什么修辞手法？'} options={[{ label: 'A', value: '比喻' }, { label: 'B', value: '拟人' }, { label: 'C', value: '夸张' }, { label: 'D', value: '反问' }]} answer="C" explanation="瀑布不可能真的有“三千尺”，所以这是极度夸张的手法。" />
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
                    <PracticeProblem id={1231} type="choice" question={'如果一段话没有明显的中心句，我们应该怎么概括段意？'} options={[{ label: 'A', value: '不概括了' }, { label: 'B', value: '随便抄一句' }, { label: 'C', value: '把每句话的关键内容合并起来提取' }, { label: 'D', value: '自己编一句话' }]} answer="C" explanation="这就需要用到“合并法”或“提问法”，自己总结段意。" />
                    <PracticeProblem id={1232} type="choice" question={'“提问法”概括段意的核心要素是什么？'} options={[{ label: 'A', value: '谁 + 做了什么/怎么样' }, { label: 'B', value: '在哪儿 + 有什么' }, { label: 'C', value: '因为…… + 所以……' }, { label: 'D', value: '什么时候 + 去哪儿' }]} answer="A" explanation="弄清楚段落主要写了“什么人/什么事物”以及“做了什么/怎么样”，就能概括出大意。" />
                    <PracticeProblem id={1233} type="choice" question={'下面这段话的中心句是哪一句？“秋天到了，果园里果实累累。苹果红得像小灯笼，葡萄紫得像一串串珍珠，梨子黄澄澄的。”'} options={[{ label: 'A', value: '秋天到了，果园里果实累累。' }, { label: 'B', value: '苹果红得像小灯笼。' }, { label: 'C', value: '葡萄紫得像一串串珍珠。' }, { label: 'D', value: '梨子黄澄澄的。' }]} answer="A" explanation="第一句话总起全段，后面三句都是围绕第一句具体描写的。" />
                    <PracticeProblem id={1234} type="choice" question={'“妈妈每天总是很忙。早上要给我做饭，白天要上班，晚上还要辅导我写作业。”这段话的意思可以用哪句话概括？'} options={[{ label: 'A', value: '妈妈早上做饭。' }, { label: 'B', value: '妈妈白天上班。' }, { label: 'C', value: '妈妈每天总是很忙。' }, { label: 'D', value: '妈妈晚上辅导作业。' }]} answer="C" explanation="第一句“妈妈每天总是很忙”是中心句，概括了全段的大意。" />
                    <PracticeProblem id={1235} type="choice" question={'概括段意时，哪种做法是不对的？'} options={[{ label: 'A', value: '找中心句' }, { label: 'B', value: '把段落里的每一句话都抄下来' }, { label: 'C', value: '提取主要信息' }, { label: 'D', value: '去掉不重要的修饰词语' }]} answer="B" explanation="概括就是要简明扼要，不能把所有话都抄下来。" />
                    <PracticeProblem id={1236} type="choice" question={'如果一段话分别写了小燕子怎样造窝、燕妈妈怎样喂食、小燕子怎样学飞，段意怎么概括？'} options={[{ label: 'A', value: '只写燕妈妈喂食' }, { label: 'B', value: '把这三个方面合并起来，概括为燕子一家的生活' }, { label: 'C', value: '只写小燕子学飞' }, { label: 'D', value: '只写造窝' }]} answer="B" explanation="并列内容的段落概括，需要把几方面的内容合并起来。" />
                    <PracticeProblem id={1237} type="choice" question={'阅读短文“小猫真调皮。一会儿跳到桌子上抓毛线团，一会儿又去扑飞来飞去的蝴蝶，弄得满身都是泥。”段意是：'} options={[{ label: 'A', value: '小猫满身是泥' }, { label: 'B', value: '小猫抓毛线团' }, { label: 'C', value: '小猫真调皮' }, { label: 'D', value: '小猫扑蝴蝶' }]} answer="C" explanation="第一句话是总起句，也就是中心句。" />
                    <PracticeProblem id={1238} type="choice" question={'概括段意就像是给一段话起个什么？'} options={[{ label: 'A', value: '名字（标题）' }, { label: 'B', value: '结尾' }, { label: 'C', value: '开头' }, { label: 'D', value: '图画' }]} answer="A" explanation="概括段意就像给这段文字提炼出一个简短的小标题。" />
                    <PracticeProblem id={1239} type="choice" question={'我们为什么要练习概括段落大意？'} options={[{ label: 'A', value: '为了让文章变短' }, { label: 'B', value: '为了少写字' }, { label: 'C', value: '帮助我们快速理解和记住文章的主要内容' }, { label: 'D', value: '没什么用' }]} answer="C" explanation="概括能力是阅读理解的核心能力，帮助我们抓住文章重点。" />
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
                    <PracticeProblem id={1241} type="choice" question={'写一件事，通常要按照什么顺序写？'} options={[{ label: 'A', value: '事情发展的先后顺序（起因、经过、结果）' }, { label: 'B', value: '先写结果，再写经过' }, { label: 'C', value: '想到哪写到哪' }, { label: 'D', value: '只写经过' }]} answer="A" explanation="按照事情发展的先后顺序写，条理最清晰。" />
                    <PracticeProblem id={1242} type="choice" question={'“他圆圆的脸蛋上嵌着一双水汪汪的大眼睛。”这句话描写的是人物的？'} options={[{ label: 'A', value: '语言' }, { label: 'B', value: '外貌' }, { label: 'C', value: '动作' }, { label: 'D', value: '心理' }]} answer="B" explanation="描写人的长相、衣着等属于外貌描写。" />
                    <PracticeProblem id={1243} type="choice" question={'写事的作文中，哪一部分应该写得最详细（详写）？'} options={[{ label: 'A', value: '事情的起因' }, { label: 'B', value: '事情的经过' }, { label: 'C', value: '事情的结果' }, { label: 'D', value: '当时的天气' }]} answer="B" explanation="事情的经过是文章最核心的部分，应该写得具体、详细。" />
                    <PracticeProblem id={1244} type="choice" question={'“妈妈一边笑，一边把我搂在怀里，轻声说：‘你真棒！’”这句话包含了哪些描写？'} options={[{ label: 'A', value: '只包含动作描写' }, { label: 'B', value: '只包含语言描写' }, { label: 'C', value: '包含了神态（笑）、动作（搂）和语言（说）描写' }, { label: 'D', value: '外貌描写' }]} answer="C" explanation="综合运用多种描写手法能让人物更生动。" />
                    <PracticeProblem id={1245} type="choice" question={'写人的时候，为了突出人物的性格或特点，最好的方法是？'} options={[{ label: 'A', value: '只用很多形容词夸他' }, { label: 'B', value: '通过一件具体的典型事例来表现他' }, { label: 'C', value: '只写他的长相' }, { label: 'D', value: '把他的所有事情都写一遍' }]} answer="B" explanation="写人离不开写事，用具体的事例来表现人物特点最能打动人。" />
                    <PracticeProblem id={1246} type="choice" question={'“我心里像装了一只小兔子，怦怦直跳。”这是什么描写？'} options={[{ label: 'A', value: '动作描写' }, { label: 'B', value: '外貌描写' }, { label: 'C', value: '心理描写' }, { label: 'D', value: '语言描写' }]} answer="C" explanation="描写内心的活动和感受是心理描写。" />
                    <PracticeProblem id={1247} type="choice" question={'写事作文的结尾通常怎么写比较好？'} options={[{ label: 'A', value: '突然结束，没有结尾' }, { label: 'B', value: '交代结果，抒发自己的感受或说明懂得了什么道理' }, { label: 'C', value: '随便写一句无关的话' }, { label: 'D', value: '再讲一件新的事情' }]} answer="B" explanation="好的结尾应该能点明中心，升华主题。" />
                    <PracticeProblem id={1248} type="choice" question={'什么叫“流水账”作文？'} options={[{ label: 'A', value: '写水的作文' }, { label: 'B', value: '没有重点、平铺直叙地罗列每天发生的事情' }, { label: 'C', value: '写得很好的作文' }, { label: 'D', value: '字数很多的作文' }]} answer="B" explanation="流水账是指没有详略、像记账一样罗列琐碎事务的作文。" />
                    <PracticeProblem id={1249} type="choice" question={'写好作文最关键的“秘诀”是什么？'} options={[{ label: 'A', value: '多查字典' }, { label: 'B', value: '字体要写大' }, { label: 'C', value: '多阅读、多观察生活、多写多练' }, { label: 'D', value: '背诵范文' }]} answer="C" explanation="阅读积累、观察生活和勤于练习是提高写作能力的根本途径。" />
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
                    <PracticeProblem id={1251} type="choice" question={'“______明天下雨，我们______不去公园了。”横线上应该填？'} options={[{ label: 'A', value: '只要……就……' }, { label: 'B', value: '虽然……但是……' }, { label: 'C', value: '如果……就……' }, { label: 'D', value: '因为……所以……' }]} answer="C" explanation="明天下雨是一个假设的情况，所以用表示假设关系的“如果……就……”。" />
                    <PracticeProblem id={1252} type="choice" question={'表示递进关系，说明后面比前面更进一步的关联词是？'} options={[{ label: 'A', value: '不但……而且……' }, { label: 'B', value: '一边……一边……' }, { label: 'C', value: '因为……所以……' }, { label: 'D', value: '虽然……但是……' }]} answer="A" explanation="“不但……而且……”表示递进，比如：他不但聪明，而且很努力。" />
                    <PracticeProblem id={1253} type="choice" question={'“我______听音乐，______写作业。”（注意：这种习惯不好哦）这句填什么？'} options={[{ label: 'A', value: '不但……而且……' }, { label: 'B', value: '虽然……但是……' }, { label: 'C', value: '一边……一边……' }, { label: 'D', value: '因为……所以……' }]} answer="C" explanation="两个动作同时进行，用表示并列关系的“一边……一边……”。" />
                    <PracticeProblem id={1254} type="choice" question={'“______他不听劝告，______犯了错误。”横线上该填什么？'} options={[{ label: 'A', value: '如果……就……' }, { label: 'B', value: '因为……所以……' }, { label: 'C', value: '虽然……但是……' }, { label: 'D', value: '只要……就……' }]} answer="B" explanation="前一句是原因，后一句是结果，用因果关系关联词。“因为……所以……”" />
                    <PracticeProblem id={1255} type="choice" question={'表示唯一条件的关联词（有了这个条件就一定有这个结果）是？'} options={[{ label: 'A', value: '只要……就……' }, { label: 'B', value: '虽然……但是……' }, { label: 'C', value: '有的……有的……' }, { label: 'D', value: '不但……而且……' }]} answer="A" explanation="“只要努力，就能成功”表示条件关系。" />
                    <PracticeProblem id={1256} type="choice" question={'“______你答应了别人，______应该说到做到。”'} options={[{ label: 'A', value: '所以……因为……' }, { label: 'B', value: '既然……就……' }, { label: 'C', value: '虽然……但是……' }, { label: 'D', value: '不但……而且……' }]} answer="B" explanation="“既然……就……”表示先提出已成的事实，后面接着推论出结论。" />
                    <PracticeProblem id={1257} type="choice" question={'下面哪句话的关联词用错了？'} options={[{ label: 'A', value: '因为他跑得快，所以得了第一名。' }, { label: 'B', value: '虽然今天下雨，但是我们去春游了。' }, { label: 'C', value: '如果我有一双翅膀，所以我就能飞上天。' }, { label: 'D', value: '这苹果不但大，而且甜。' }]} answer="C" explanation="C选项搭配错误，应该是“如果……就……”。" />
                    <PracticeProblem id={1258} type="choice" question={'“这件衣服（  ）漂亮，（  ）太贵了。”'} options={[{ label: 'A', value: '不但……而且……' }, { label: 'B', value: '因为……所以……' }, { label: 'C', value: '虽然……但是……' }, { label: 'D', value: '如果……就……' }]} answer="C" explanation="漂亮是优点，太贵是缺点，意思发生了转折，用“虽然……但是……”。" />
                    <PracticeProblem id={1259} type="choice" question={'关联词的作用是什么？'} options={[{ label: 'A', value: '单纯为了凑字数' }, { label: 'B', value: '让句子的语气更委婉' }, { label: 'C', value: '把两个小句子连接起来，并且表明它们之间的逻辑关系' }, { label: 'D', value: '没有作用' }]} answer="C" explanation="关联词就像桥梁，连接句子并清晰表达出因果、转折等逻辑关系。" />
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
                    <PracticeProblem id={1261} type="choice" question={'日记的正文一般从第几行开始写？怎么写？'} options={[{ label: 'A', value: '第二行，顶格写' }, { label: 'B', value: '第一行接着日期写' }, { label: 'C', value: '第二行，空两格写' }, { label: 'D', value: '随便哪行开始' }]} answer="C" explanation="第一行写日期等信息，第二行开始写正文，开头要空两格。" />
                    <PracticeProblem id={1262} type="choice" question={'写日记可以写些什么内容？'} options={[{ label: 'A', value: '当天发生的有趣的事' }, { label: 'B', value: '当天的感受和心情' }, { label: 'C', value: '观察到的人或景物' }, { label: 'D', value: '以上都可以' }]} answer="D" explanation="日记就是记录生活，只要是真实的经历、见闻和感受都可以写。" />
                    <PracticeProblem id={1263} type="choice" question={'日记最重要的特点是什么？'} options={[{ label: 'A', value: '字数一定要多' }, { label: 'B', value: '必须用很多成语' }, { label: 'C', value: '真实，记录自己真正的生活和想法' }, { label: 'D', value: '必须全部写高兴的事' }]} answer="C" explanation="日记是写给自己的，最重要的是真实记录。" />
                    <PracticeProblem id={1264} type="choice" question={'一天中发生了很多事，写日记时应该怎么处理？'} options={[{ label: 'A', value: '把所有事情都写下来，像记流水账一样' }, { label: 'B', value: '挑选一件印象最深、最有意义或最有趣的事来写清楚' }, { label: 'C', value: '随便挑一件小事写两句就不写了' }, { label: 'D', value: '不写了' }]} answer="B" explanation="写日记要挑重点写，避免记成流水账。" />
                    <PracticeProblem id={1265} type="choice" question={'日记和作文最大的区别之一是什么？'} options={[{ label: 'A', value: '日记不需要题目，有固定的日期开头格式' }, { label: 'B', value: '作文不用写字' }, { label: 'C', value: '日记必须用英语写' }, { label: 'D', value: '日记没有标点符号' }]} answer="A" explanation="日记一般不需要像作文那样的特定标题，只需有第一行的日期等信息即可。" />
                    <PracticeProblem id={1266} type="choice" question={'在日记中，写出自己这件事情的（   ）会显得更有意义？'} options={[{ label: 'A', value: '天气' }, { label: 'B', value: '时间和地点' }, { label: 'C', value: '感受、想法或明白的道理' }, { label: 'D', value: '别人的名字' }]} answer="C" explanation="写出自己的感受能让日记不只是冰冷的记录，而是有思想的文字。" />
                    <PracticeProblem id={1267} type="choice" question={'今天下雨了没出去玩，日记该怎么写？'} options={[{ label: 'A', value: '没发生什么事，就不写了' }, { label: 'B', value: '可以写在家里做了什么，或者观察下雨的景色、写写自己的心情' }, { label: 'C', value: '瞎编一件事' }, { label: 'D', value: '只写三个字：下雨了。' }]} answer="B" explanation="生活处处皆可入日记，即使是平淡或遗憾的一天也有值得记录的感受。" />
                    <PracticeProblem id={1268} type="choice" question={'如果第一行这样写：“2023年4月1日 晴天 星期六”，哪里有小问题？'} options={[{ label: 'A', value: '年份不能写' }, { label: 'B', value: '没有问题' }, { label: 'C', value: '顺序一般是：月 日 星期 天气' }, { label: 'D', value: '天气必须写在最前面' }]} answer="C" explanation="标准的日记格式顺是：X月X日 星期X 天气X。" />
                    <PracticeProblem id={1269} type="choice" question={'坚持写日记有什么好处？'} options={[{ label: 'A', value: '可以提高写作水平和观察能力' }, { label: 'B', value: '可以留下珍贵的生活记忆' }, { label: 'C', value: '可以帮助自己思考和反省' }, { label: 'D', value: '以上都是' }]} answer="D" explanation="写日记有很多好处，是语文学习的好习惯。" />
                </div>
            )
        }
    }
};

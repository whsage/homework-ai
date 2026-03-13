import { Icons, PracticeProblem, React } from './common';
const { Lightbulb, Clock, Star, BookOpen, PenTool } = Icons;

export const grade1Content = {

    // ==================== L1-1. 声母韵母 ====================
    'cn1-l1-pinyin-initials': {
        meta: {
            title: "声母韵母 - 一年级语文 | AI7Miao语文",
            description: "学习23个声母和24个韵母，掌握拼音系统的基础。",
            keywords: "声母,韵母,拼音,一年级语文"
        },
        info: {
            title: "声母韵母",
            description: "拼音王国有两大家族——声母和韵母！它们手拉手就能拼出所有汉字的读音！🔤",
            tags: [
                { text: "基础达标", color: "blue" },
                { text: "25分钟", icon: Clock, color: "slate" },
                { text: "重点", icon: Star, color: "orange" }
            ]
        },
        aiContext: "学生学习声母和韵母。用'拼音家族'的情境来教学。声母是'敲门声'（轻短），韵母是'歌声'（响亮）。用苏格拉底式提问引导。",
        aiChatTitle: "🔤 拼音小精灵",
        aiChatIntro: "嗨！我是拼音王国的小精灵！带你认识声母和韵母这两大家族！",
        aiMessages: [
            { role: 'ai', content: '"b-p-m-f"，这四个声母你会读吗？试试把嘴巴闭紧，然后突然打开说"b"，感觉到气流了吗？' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-red-600" />
                            拼音两大家族
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">🚪 声母家族（23个）—— "敲门的声音"</h3>
                                <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
                                    声母就像敲门的声音，又轻又短。它们总是站在音节的最前面！
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                    <div className="grid grid-cols-8 gap-2 text-center font-mono">
                                        {['b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'zh', 'ch', 'sh', 'r', 'z', 'c', 's', 'y', 'w'].map(s => (
                                            <span key={s} className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded font-bold text-sm">{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">🎵 韵母家族（24个）—— "唱歌的声音"</h3>
                                <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
                                    韵母就像唱歌的声音，又响又长。它们是音节的"主角"！
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg space-y-2">
                                    <div>
                                        <span className="text-xs text-slate-500 mr-2">单韵母：</span>
                                        {['a', 'o', 'e', 'i', 'u', 'ü'].map(s => (
                                            <span key={s} className="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-2 py-1 rounded font-bold text-sm mr-1">{s}</span>
                                        ))}
                                    </div>
                                    <div>
                                        <span className="text-xs text-slate-500 mr-2">复韵母：</span>
                                        {['ai', 'ei', 'ui', 'ao', 'ou', 'iu', 'ie', 'üe', 'er'].map(s => (
                                            <span key={s} className="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-2 py-1 rounded font-bold text-sm mr-1">{s}</span>
                                        ))}
                                    </div>
                                    <div>
                                        <span className="text-xs text-slate-500 mr-2">鼻韵母：</span>
                                        {['an', 'en', 'in', 'un', 'ün', 'ang', 'eng', 'ing', 'ong'].map(s => (
                                            <span key={s} className="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-2 py-1 rounded font-bold text-sm mr-1">{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">💡 拼读小口诀</h3>
                                <p className="text-slate-700 dark:text-slate-300 text-sm font-mono">
                                    "前音轻短后音重，两音相连猛一碰！"<br />
                                    声母念得<strong>轻又短</strong>，韵母念得<strong>响又长</strong>，合在一起就拼出来啦！
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 容易混淆的声母</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2">❌ b 和 d 分不清</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">b 和 d 长得像镜子里的对称！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2">✅ 小妙招</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">左手握拳竖大拇指像 b，右手握拳竖大拇指像 d！"左 b 右 d"！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2">❌ n 和 l 分不清</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">n 和 l 的发音太像了！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2">✅ 小妙招</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">发 n 的时候用鼻子出气（捏着鼻子就发不出来啦），l 是用舌头顶上面！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <BookOpen className="w-6 h-6 text-red-600" />
                            拼音闯关
                        </h2>
                        <div className="space-y-5">
                            {[
                                { q: '请把"妈妈"的拼音拼出来', hint: '"妈" 的声母是 m，韵母是 a', ans: 'mā ma（第一个是第一声，第二个是轻声）' },
                                { q: '"大" 的拼音怎么拼？', hint: '声母是 d，韵母是 a', ans: 'dà（第四声，声调往下降）' },
                                { q: '"花" 的声母和韵母分别是什么？', hint: '声母是 h，韵母是 ua', ans: 'h + ua = huā（第一声）' },
                            ].map((ex, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-2">闯关 {i + 1}：{ex.q}</p>
                                    <div className="pl-4 border-l-4 border-red-400 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                        <p>💡 {ex.hint}</p>
                                        <p className="text-red-600 dark:text-red-400 font-bold">答案：{ex.ans}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1000} type="choice"
                        question="下面哪个是声母？"
                        options={[{ label: 'A', value: 'ai' }, { label: 'B', value: 'b' }, { label: 'C', value: 'ou' }, { label: 'D', value: 'an' }]}
                        answer="B"
                        explanation="b 是声母；ai、ou、an 都是韵母。声母发音轻短，韵母发音响亮。"
                    />
                    <PracticeProblem id={1001} type="choice"
                        question={'zh、ch、sh"这三个声母有什么共同特点？'}
                        options={[{ label: 'A', value: '都是单韵母' }, { label: 'B', value: '都是翘舌音' }, { label: 'C', value: '都是鼻韵母' }, { label: 'D', value: '都是平舌音' }]}
                        answer="B"
                        explanation="zh、ch、sh 发音时舌头翘起来，叫翘舌音。z、c、s 是平舌音。"
                    />
                    <PracticeProblem id={1002} type="choice"
                        question="下面哪组全部是韵母？"
                        options={[{ label: 'A', value: 'a、o、e' }, { label: 'B', value: 'b、p、m' }, { label: 'C', value: 'a、b、c' }, { label: 'D', value: 'z、c、s' }]}
                        answer="A"
                        explanation="a、o、e 是单韵母（韵母家族的成员）。b、p、m 和 z、c、s 都是声母。"
                    />
                    <PracticeProblem id={1003} type="choice"
                        question="声母家族一共有多少个成员？"
                        options={[{ label: 'A', value: '24个' }, { label: 'B', value: '23个' }, { label: 'C', value: '21个' }, { label: 'D', value: '26个' }]}
                        answer="B"
                        explanation="声母家族一共有23个成员。"
                    />
                    <PracticeProblem id={1004} type="choice"
                        question="发音时需要捏着鼻子就发不出来的是哪个声母？"
                        options={[{ label: 'A', value: 'd' }, { label: 'B', value: 't' }, { label: 'C', value: 'n' }, { label: 'D', value: 'l' }]}
                        answer="C"
                        explanation="发 n 的时候用鼻子出气（鼻音），捏着鼻子就发不出来。"
                    />
                    <PracticeProblem id={1005} type="choice"
                        question={'下面哪个拼音的拼读是正确的？'}
                        options={[{ label: 'A', value: 'b-a = da' }, { label: 'B', value: 'h-ua = hua' }, { label: 'C', value: 'm-e = mo' }, { label: 'D', value: 'f-u = hou' }]}
                        answer="B"
                        explanation="h 和 ua 拼在一起是 hua。"
                    />
                    <PracticeProblem id={1006} type="choice"
                        question={'想要拼出"花"的音，需要哪两个部分？'}
                        options={[{ label: 'A', value: 'h 和 a' }, { label: 'B', value: 'h 和 ua' }, { label: 'C', value: 'f 和 ua' }, { label: 'D', value: 'f 和 a' }]}
                        answer="B"
                        explanation="“花”的拼音是 huā，由声母 h 和韵母 ua 组成。"
                    />
                    <PracticeProblem id={1007} type="choice"
                        question={'下面哪组字母长得像镜子里的对称？'}
                        options={[{ label: 'A', value: 'p 和 q' }, { label: 'B', value: 'b 和 d' }, { label: 'C', value: 'n 和 u' }, { label: 'D', value: 'A和B都是' }]}
                        answer="D"
                        explanation="b和d左右对称，p和q也是左右对称。"
                    />
                    <PracticeProblem id={1008} type="choice"
                        question={'单韵母一共有几个？'}
                        options={[{ label: 'A', value: '6个' }, { label: 'B', value: '9个' }, { label: 'C', value: '8个' }, { label: 'D', value: '24个' }]}
                        answer="A"
                        explanation="单韵母有6个：a, o, e, i, u, ü。"
                    />
                    <PracticeProblem id={1009} type="choice"
                        question={'下面哪个不属于复韵母？'}
                        options={[{ label: 'A', value: 'ai' }, { label: 'B', value: 'ei' }, { label: 'C', value: 'ui' }, { label: 'D', value: 'an' }]}
                        answer="D"
                        explanation="an 是鼻韵母，ai, ei, ui 是复韵母。"
                    />
                </div>
            )
        }
    },

    // ==================== L1-2. 声调与拼读 ====================
    'cn1-l1-pinyin-tones': {
        meta: {
            title: "声调与拼读 - 一年级语文 | AI7Miao语文",
            description: "学习四个声调和拼读方法，掌握正确的发音技巧。",
            keywords: "声调,四声,拼读,一年级语文"
        },
        info: {
            title: "声调与拼读",
            description: "同样的拼音，换个声调就变成不同的字！声调就是汉字的'表情'！🎭",
            tags: [
                { text: "基础达标", color: "blue" },
                { text: "25分钟", icon: Clock, color: "slate" },
                { text: "重点", icon: Star, color: "orange" }
            ]
        },
        aiContext: "学生学习声调与拼读。用'过山车'比喻四声：一声平平走高速（ā），二声往上爬山坡（á），三声下去再上来（ǎ），四声直直往下滑（à）。引导学生感受声调变化带来的字义变化。",
        aiChatTitle: "🎢 声调过山车",
        aiChatIntro: "坐上声调过山车，一声飞高高，二声往上爬，三声先下后上，四声往下冲！",
        aiMessages: [
            { role: 'ai', content: '"mā、má、mǎ、mà"——这四个音你都会读吗？它们分别是什么字呢？妈、麻、马、骂，声调一变，字就完全不同啦！' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-red-600" />
                            四声过山车 🎢
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { tone: '一声（阴平）ˉ', desc: '平平地走高速公路', example: 'ā → 啊、mā → 妈', color: 'blue', emoji: '➡️' },
                                { tone: '二声（阳平）ˊ', desc: '努力往上爬山坡', example: 'á → 啊？、má → 麻', color: 'green', emoji: '↗️' },
                                { tone: '三声（上声）ˇ', desc: '先滑下去再爬上来', example: 'ǎ → 啊~、mǎ → 马', color: 'purple', emoji: '↘️↗️' },
                                { tone: '四声（去声）ˋ', desc: '从高处直直往下冲', example: 'à → 啊！、mà → 骂', color: 'orange', emoji: '↘️' },
                            ].map((t, i) => (
                                <div key={i} className={`p-4 rounded-xl border-l-4 border-${t.color}-500 bg-${t.color}-50 dark:bg-${t.color}-900/20`}>
                                    <h3 className={`font-bold text-${t.color}-800 dark:text-${t.color}-300 mb-1`}>{t.emoji} {t.tone}</h3>
                                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">{t.desc}</p>
                                    <p className="text-sm font-mono text-slate-600 dark:text-slate-400">{t.example}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-5 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border-l-4 border-yellow-400">
                            <p className="font-bold text-yellow-800 dark:text-yellow-300 mb-1">💡 标调口诀</p>
                            <p className="text-sm text-slate-700 dark:text-slate-300 font-mono">
                                "有 a 不放过，没 a 找 o、e，i、u 并列标在后。"<br />
                                声调标在韵母上，找到"老大"就标它头上！
                            </p>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 声调陷阱</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200">
                                <p className="text-red-500 font-bold mb-2">❌ 二声三声分不清</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">很多小朋友把"往上爬"和"先下后上"搞混！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200">
                                <p className="text-green-500 font-bold mb-2">✅ 小妙招</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">二声像在问问题"啊？"↗️，三声像很惊讶"啊~"先低后高！用手势比划试试！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <BookOpen className="w-6 h-6 text-red-600" />
                            声调大变身
                        </h2>
                        <div className="space-y-4">
                            {[
                                { pinyin: 'bā bá bǎ bà', chars: '八 拔 把 爸', note: '同一个拼音，四个声调变出四个不同的字！' },
                                { pinyin: 'tāng táng tǎng tàng', chars: '汤 糖 躺 烫', note: '声调不对，汤可就变成糖啦！' },
                            ].map((ex, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-lg text-slate-800 dark:text-white font-mono mb-1">{ex.pinyin}</p>
                                    <p className="text-red-600 dark:text-red-400 font-bold mb-1">{ex.chars}</p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">💡 {ex.note}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1010} type="choice"
                        question={'马"的拼音声调是第几声？'}
                        options={[{ label: 'A', value: '第一声' }, { label: 'B', value: '第二声' }, { label: 'C', value: '第三声' }, { label: 'D', value: '第四声' }]}
                        answer="C"
                        explanation="马的拼音是 mǎ，声调标记 ˇ 表示第三声（先降后升）。"
                    />
                    <PracticeProblem id={1011} type="choice"
                        question="声调应该标在哪个字母上？(guī)"
                        options={[{ label: 'A', value: '标在 g 上' }, { label: 'B', value: '标在 u 上' }, { label: 'C', value: '标在 i 上' }, { label: 'D', value: '标在 g 和 i 上' }]}
                        answer="C"
                        explanation="i、u 并列标在后。gui 中 u 在前 i 在后，所以声调标在 i 上。"
                    />
                    <PracticeProblem id={1012} type="choice"
                        question={'标调口诀"有a不放过，没a找o、e"，如果有一个拼音是"hua"，声调应该标在哪里？'}
                        options={[{ label: 'A', value: 'h上' }, { label: 'B', value: 'u上' }, { label: 'C', value: 'a上' }, { label: 'D', value: '随便标' }]}
                        answer="C"
                        explanation="有a不放过，所以标在a上（huā）。"
                    />
                    <PracticeProblem id={1013} type="choice"
                        question={'第二声（阳平）的特点像什么？'}
                        options={[{ label: 'A', value: '平平地走高速公路' }, { label: 'B', value: '努力往上爬山坡' }, { label: 'C', value: '先滑下去再爬上来' }, { label: 'D', value: '从高处直直往下冲' }]}
                        answer="B"
                        explanation="第二声（á）像努力往上爬山坡。"
                    />
                    <PracticeProblem id={1014} type="choice"
                        question={'拼音"mā"对应的汉字可能是？'}
                        options={[{ label: 'A', value: '麻' }, { label: 'B', value: '马' }, { label: 'C', value: '骂' }, { label: 'D', value: '妈' }]}
                        answer="D"
                        explanation="一声（ā）对应“妈”，二声对应“麻”，三声对应“马”，四声对应“骂”。"
                    />
                    <PracticeProblem id={1015} type="choice"
                        question={'下面哪个字的声调是第四声？'}
                        options={[{ label: 'A', value: '天（tiān）' }, { label: 'B', value: '地（dì）' }, { label: 'C', value: '人（rén）' }, { label: 'D', value: '和（hé）' }]}
                        answer="B"
                        explanation="天是一声，地是四声，人是二声，和是二声。"
                    />
                    <PracticeProblem id={1016} type="choice"
                        question={'如何区分第二声和第三声？'}
                        options={[{ label: 'A', value: '第二声一直往上，第三声先下再上' }, { label: 'B', value: '第二声先下再上，第三声一直往上' }, { label: 'C', value: '它们是一样的' }, { label: 'D', value: '第二声平平的，第三声往下掉' }]}
                        answer="A"
                        explanation="第二声像问问题“啊？”↗️，第三声像“啊~”先低后高↘️↗️。"
                    />
                    <PracticeProblem id={1017} type="choice"
                        question={'拼音"jiu"的声调应该标在哪个字母上？'}
                        options={[{ label: 'A', value: 'j' }, { label: 'B', value: 'i' }, { label: 'C', value: 'u' }, { label: 'D', value: '都不对' }]}
                        answer="C"
                        explanation="i、u并列标在后，jiu中u在后面，所以标在u上。"
                    />
                    <PracticeProblem id={1018} type="choice"
                        question={'一声（阴平）的符号是？'}
                        options={[{ label: 'A', value: 'ˊ' }, { label: 'B', value: 'ˇ' }, { label: 'C', value: 'ˉ' }, { label: 'D', value: 'ˋ' }]}
                        answer="C"
                        explanation="一声是平平的（ˉ）。"
                    />
                    <PracticeProblem id={1019} type="choice"
                        question={'拼音中的声调一共有几个？（不含轻声）'}
                        options={[{ label: 'A', value: '3个' }, { label: 'B', value: '4个' }, { label: 'C', value: '5个' }, { label: 'D', value: '6个' }]}
                        answer="B"
                        explanation="有四个声调：一声、二声、三声、四声。"
                    />
                </div>
            )
        }
    },

    // ==================== L1-3. 基础识字 ====================
    'cn1-l1-basic-chars': {
        meta: { title: "基础识字 - 一年级语文 | AI7Miao语文", description: "认识独体字和基础汉字，理解汉字的构造方式。", keywords: '识字,独体字,象形字,一年级语文' },
        info: { title: "基础识字（独体字）", description: "每个汉字都是一幅小画！来看看古人是怎么把大自然画成文字的！🎨", tags: [{ text: '基础达标', color: 'blue' }, { text: '30分钟', icon: Clock, color: 'slate' }, { text: '重点', icon: Star, color: 'orange' }] },
        aiContext: "学生学习基础识字（独体字）。用象形字的故事来教学，如：'日'像太阳，'月'像弯弯的月牙，'山'像三座山峰。引导学生发挥想象力。",
        aiChatTitle: "🎨 汉字画家", aiChatIntro: "汉字原来都是画出来的！一起来看看古人画了什么？",
        aiMessages: [{ role: 'ai', content: '看看"日"这个字，它长得像什么呀？对啦，像一个圆圆的太阳☀️！古人就是照着太阳的样子画出来的！' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-red-600" />
                            汉字是怎么来的？
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl border-l-4 border-orange-500">
                                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-3">🖼️ 象形字 —— "画"出来的字</h3>
                                <div className="grid grid-cols-4 gap-3 text-center">
                                    {[{ c: '日', m: '☀️太阳' }, { c: '月', m: '🌙月亮' }, { c: '山', m: '⛰️山峰' }, { c: '水', m: '🌊流水' }, { c: '木', m: '🌳大树' }, { c: '火', m: '🔥火焰' }, { c: '口', m: '👄嘴巴' }, { c: '目', m: '👁️眼睛' }].map(item => (
                                        <div key={item.c} className="bg-white dark:bg-slate-700 p-3 rounded-lg">
                                            <span className="text-3xl font-bold text-red-600">{item.c}</span>
                                            <p className="text-xs text-slate-500 mt-1">{item.m}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">☝️ 指事字 —— 加个"小标记"</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">在象形字上加个小记号，就变出新字啦！</p>
                                <div className="grid grid-cols-3 gap-3 text-center">
                                    {[{ c: '上', m: '一横之上' }, { c: '下', m: '一横之下' }, { c: '本', m: '树的根部' }].map(item => (
                                        <div key={item.c} className="bg-white dark:bg-slate-700 p-3 rounded-lg">
                                            <span className="text-2xl font-bold text-blue-600">{item.c}</span>
                                            <p className="text-xs text-slate-500 mt-1">{item.m}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (<div className="space-y-6"><div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6"><h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 识字小提醒</h3><div className="grid md:grid-cols-2 gap-4"><div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200"><p className="text-red-500 font-bold mb-2">❌ "人"和"入"分不清</p><p className="text-sm text-slate-600 dark:text-slate-400">"人"的撇长捺短，"入"的撇短捺长！</p></div><div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200"><p className="text-green-500 font-bold mb-2">✅ 记忆妙招</p><p className="text-sm text-slate-600 dark:text-slate-400">"人"字像一个人迈开大步在走路，左脚（撇）迈得大！</p></div></div></div></div>),
            examples: (<div className="space-y-6"><div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">🎯 猜字谜</h2><div className="space-y-4">{[{ q: '一个人靠在大木头上休息（猜一个字）', a: '休（人 + 木 = 休息）' }, { q: '太阳和月亮在一起，特别亮（猜一个字）', a: '明（日 + 月 = 明亮）' }].map((ex, i) => (<div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl"><p className="font-bold text-slate-800 dark:text-white mb-2">字谜 {i + 1}：{ex.q}</p><p className="text-red-600 dark:text-red-400 font-bold text-sm pl-4 border-l-4 border-red-400">答案：{ex.a}</p></div>))}</div></div></div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1020} type="choice" question={'日"字是什么造字方法？'} options={[{ label: 'A', value: '象形字' }, { label: 'B', value: '指事字' }, { label: 'C', value: '会意字' }, { label: 'D', value: '形声字' }]} answer="A" explanation={'日"字是照着太阳的形状画出来的，所以是象形字。'} />
                    <PracticeProblem id={1021} type="choice" question={'下面哪个字是"上"的反义字？'}  options={[{ label: 'A', value: '左' }, { label: 'B', value: '下' }, { label: 'C', value: '大' }, { label: 'D', value: '中' }]} answer="B" explanation={'上"的反义词是"下"，一个往上一个往下。'} />
                    <PracticeProblem id={1022} type="choice" question={'下面属于指事字的是？'} options={[{ label: 'A', value: '水' }, { label: 'B', value: '木' }, { label: 'C', value: '本' }, { label: 'D', value: '火' }]} answer="C" explanation={'本"是在"木"的根部加了一横作为指事符号，是指事字。'} />
                    <PracticeProblem id={1023} type="choice" question={'月"字长得像什么？'} options={[{ label: 'A', value: '太阳' }, { label: 'B', value: '弯弯的月牙' }, { label: 'C', value: '小船' }, { label: 'D', value: '香蕉' }]} answer="B" explanation={'月"的甲骨文就像弯弯的月牙。'} />
                    <PracticeProblem id={1024} type="choice" question={'人"和"木"合在一起组成了什么字？'} options={[{ label: 'A', value: '大' }, { label: 'B', value: '休' }, { label: 'C', value: '林' }, { label: 'D', value: '本' }]} answer="B" explanation={'一个人靠在木头（树）上，表示休息，就是"休"字。'} />
                    <PracticeProblem id={1025} type="choice" question={'下面哪个字是象形字？'} options={[{ label: 'A', value: '上' }, { label: 'B', value: '下' }, { label: 'C', value: '山' }, { label: 'D', value: '休' }]} answer="C" explanation={'山"是照着山峰的样子画出来的，是象形字。'} />
                    <PracticeProblem id={1026} type="choice" question={'日"和"月"合在一起组成了什么字？'} options={[{ label: 'A', value: '星' }, { label: 'B', value: '早' }, { label: 'C', value: '明' }, { label: 'D', value: '白' }]} answer="C" explanation={'日"和"月"都很亮，合在一起就是"明"。'} />
                    <PracticeProblem id={1027} type="choice" question={'表示水流的字是哪个？'} options={[{ label: 'A', value: '火' }, { label: 'B', value: '川' }, { label: 'C', value: '山' }, { label: 'D', value: '水' }]} answer="D" explanation={'水"的古字就像流动的水波。'} />
                    <PracticeProblem id={1028} type="choice" question={'口"字像人身上的哪个器官？'} options={[{ label: 'A', value: '耳朵' }, { label: 'B', value: '鼻子' }, { label: 'C', value: '嘴巴' }, { label: 'D', value: '眼睛' }]} answer="C" explanation={'口"就是嘴巴的意思，字形就像张开的嘴。'} />
                    <PracticeProblem id={1029} type="choice" question={'区分"人"和"入"字的口诀往往是？'} options={[{ label: 'A', value: '人字撇长捺短，入字撇短捺长' }, { label: 'B', value: '人字撇短捺长，入字撇长捺短' }, { label: 'C', value: '都一样长' }, { label: 'D', value: '都不对' }]} answer="A" explanation="人的左脚（撇）迈得大，撇长捺短；入则是撇短捺长。" />
                </div>
            )
        }
    },

    // ==================== L1-4. 笔画与笔顺 ====================
    'cn1-l1-stroke-order': {
        meta: { title: "笔画与笔顺 - 一年级语文 | AI7Miao语文", description: "学习基本笔画和笔顺规则，写出漂亮的汉字。", keywords: '笔画,笔顺,书写规范,一年级语文' },
        info: { title: "笔画与笔顺", description: "写字就像盖房子，先打地基再建楼！按顺序写，字才漂亮！✍️", tags: [{ text: '基础达标', color: 'blue' }, { text: '25分钟', icon: Clock, color: 'slate' }, { text: '重点', icon: Star, color: 'orange' }] },
        aiContext: "学生学习笔画与笔顺。用盖房子的比喻讲笔顺规则：先横后竖（先铺地板再立墙壁），先撇后捺（先画屋顶左边再画右边），从上到下（从屋顶开始），从左到右（从左边开始）。",
        aiChatTitle: "✍️ 写字小建筑师", aiChatIntro: "写汉字就像盖房子，有顺序才盖得漂亮！来跟我学笔顺吧！",
        aiMessages: [{ role: 'ai', content: '写"十"字的时候，你觉得应该先写哪一笔呢？是横（—）还是竖（丨）？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <PenTool className="w-6 h-6 text-red-600" />
                            基本笔画大家族
                        </h2>
                        <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-6">
                            {[{ n: '横', s: '—' }, { n: '竖', s: '丨' }, { n: '撇', s: '丿' }, { n: '捺', s: '㇏' }, { n: '点', s: '丶' }, { n: '提', s: '㇀' }, { n: '折', s: '𠃍' }, { n: '钩', s: '亅' }].map(b => (
                                <div key={b.n} className="text-center bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                                    <span className="text-2xl font-bold text-red-600">{b.s}</span>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{b.n}</p>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-bold text-slate-800 dark:text-white text-lg">📐 笔顺六大规则</h3>
                            {[
                                { rule: '先横后竖', example: '十：先写"—"再写"丨"', emoji: '➡️⬇️' },
                                { rule: '先撇后捺', example: '人：先写"丿"再写"㇏"', emoji: '↙️↘️' },
                                { rule: '从上到下', example: '三：先写最上面的横', emoji: '⬇️' },
                                { rule: '从左到右', example: '川：先写最左边的竖', emoji: '➡️' },
                                { rule: '先外后内', example: '月：先写外框再写里面', emoji: '📦' },
                                { rule: '先中间后两边', example: '小：先写中间的竖钩', emoji: '⬅️⬇️➡️' },
                            ].map((r, i) => (
                                <div key={i} className="flex items-center gap-3 bg-slate-50 dark:bg-slate-700/30 p-3 rounded-xl">
                                    <span className="text-lg">{r.emoji}</span>
                                    <div>
                                        <span className="font-bold text-red-600 dark:text-red-400">{r.rule}</span>
                                        <span className="text-sm text-slate-600 dark:text-slate-400 ml-2">例：{r.example}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            properties: (<div className="space-y-6"><div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6"><h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 笔顺易错字</h3><div className="grid md:grid-cols-2 gap-4"><div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200"><p className="text-red-500 font-bold mb-2">❌ "火"字笔顺</p><p className="text-sm text-slate-600 dark:text-slate-400">很多人先写"人"再加两点，这是错的！正确的是：点、短撇、竖撇、捺。</p></div><div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200"><p className="text-green-500 font-bold mb-2">✅ "万"字笔顺</p><p className="text-sm text-slate-600 dark:text-slate-400">"万"的正确笔顺是：横、横折钩、撇。先写横再写折！</p></div></div></div></div>),
            examples: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">✍️ 跟我写一写</h2><div className="grid md:grid-cols-3 gap-4">{[{ c: '大', strokes: '横→撇→捺（3画）' }, { c: '天', strokes: '横→横→撇→捺（4画）' }, { c: '王', strokes: '横→横→竖→横（4画）' }].map(ch => (<div key={ch.c} className="text-center bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl"><span className="text-5xl font-bold text-red-600">{ch.c}</span><p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-mono">{ch.strokes}</p></div>))}</div></div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1030} type="choice" question={'十"的正确笔顺是？'} options={[{ label: 'A', value: '先竖后横' }, { label: 'B', value: '先横后竖' }, { label: 'C', value: '先点后横' }, { label: 'D', value: '先撇后横' }]} answer="B" explanation={'根据"先横后竖"的规则，"十"先写横（—）再写竖（丨）。'} />
                    <PracticeProblem id={1031} type="choice" question={'人"字一共有几画？'} options={[{ label: 'A', value: '1画' }, { label: 'B', value: '2画' }, { label: 'C', value: '3画' }, { label: 'D', value: '4画' }]} answer="B" explanation={'人"字共2画：第一笔是撇（丿），第二笔是捺（㇏）。'} />
                    <PracticeProblem id={1032} type="choice" question={'三"字的书写顺序是？'} options={[{ label: 'A', value: '从下到上' }, { label: 'B', value: '先写中间再写上下' }, { label: 'C', value: '从上到下' }, { label: 'D', value: '随意写' }]} answer="C" explanation={'根据"从上到下"的规则，先写最上面的横，再写中间，最后写下面。'} />
                    <PracticeProblem id={1033} type="choice" question={'月"字的书写规则包含？'} options={[{ label: 'A', value: '先内后外' }, { label: 'B', value: '先外后内' }, { label: 'C', value: '先中间后两边' }, { label: 'D', value: '先两边后中间' }]} answer="B" explanation={'月"字是半包围结构，先写外面的框（竖撇、横折钩），再写里面的两横，即"先外后内"。'} />
                    <PracticeProblem id={1034} type="choice" question={'小"字的正确书写顺序是？'} options={[{ label: 'A', value: '先左后右再中间' }, { label: 'B', value: '先中间后两边' }, { label: 'C', value: '从上到下' }, { label: 'D', value: '先两边后中间' }]} answer="B" explanation={'小"字遵守"先中间后两边"的规则，先写竖钩，再写左右两点。'} />
                    <PracticeProblem id={1035} type="choice" question={'火"字的正确笔顺是？'} options={[{ label: 'A', value: '点、短撇、竖撇、捺' }, { label: 'B', value: '撇、捺、点、撇' }, { label: 'C', value: '撇、点、撇、捺' }, { label: 'D', value: '以上都不对' }]} answer="A" explanation={'火"字的正确笔顺是：点、短撇、竖撇、捺。'} />
                    <PracticeProblem id={1036} type="choice" question={'川"字的书写顺序是？'} options={[{ label: 'A', value: '从右到左' }, { label: 'B', value: '从中间到两边' }, { label: 'C', value: '从左到右' }, { label: 'D', value: '从两边到中间' }]} answer="C" explanation={'川"字遵守"从左到右"的规则。'} />
                    <PracticeProblem id={1037} type="choice" question={'万"字的第二笔是？'} options={[{ label: 'A', value: '撇' }, { label: 'B', value: '横折钩' }, { label: 'C', value: '横' }, { label: 'D', value: '点' }]} answer="B" explanation={'万"的正确笔顺是：横、横折钩、撇。所以第二笔是横折钩。'} />
                    <PracticeProblem id={1038} type="choice" question={'天"字一共有几画？'} options={[{ label: 'A', value: '3画' }, { label: 'B', value: '4画' }, { label: 'C', value: '5画' }, { label: 'D', value: '2画' }]} answer="B" explanation={'天"的笔顺是：横、横、撇、捺，共4画。'} />
                    <PracticeProblem id={1039} type="choice" question={'下面不属于基本笔画的是？'} options={[{ label: 'A', value: '横' }, { label: 'B', value: '撇' }, { label: 'C', value: '折' }, { label: 'D', value: '圆' }]} answer="D" explanation="汉字的基本笔画没有“圆”。" />
                </div>
            )
        }
    },

    // ==================== L2-1. 看图说话 ====================
    'cn1-l2-picture-talk': {
        meta: { title: "看图说话 - 一年级语文 | AI7Miao语文", description: "学会观察图片，用完整的句子有序地描述图画内容。", keywords: '看图说话,口头表达,一年级语文' },
        info: { title: "看图说话", description: "每幅画都在讲故事！学会用眼睛看、用嘴巴说，你就是小故事家！📸", tags: [{ text: '素养进阶', color: 'purple' }, { text: '25分钟', icon: Clock, color: 'slate' }] },
        aiContext: "学生学习看图说话。引导学生用'谁、在哪里、做什么'的句式来描述图片。鼓励想象和扩展。",
        aiChatTitle: "📸 故事小相机", aiChatIntro: "每一张图片都藏着一个故事！让我们一起把它说出来吧！",
        aiMessages: [{ role: 'ai', content: '想象一幅画：一个小女孩在公园里放风筝。你能用一句完整的话描述这幅画吗？记住要说清楚"谁、在哪里、做什么"哦！' }],
        tabs: {
            concept: (<div className="space-y-8"><div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />看图说话三步法</h2><div className="space-y-4">{[{ step: '1. 看一看 👀', desc: '仔细观察图片：有谁？在哪里？在做什么？旁边有什么？', color: 'blue' }, { step: '2. 想一想 🤔', desc: '想象图片里的故事：为什么要这样做？结果会怎样？心情怎么样？', color: 'green' }, { step: '3. 说一说 💬', desc: '用完整的句子有顺序地说出来：先说时间地点，再说人物事件！', color: 'purple' }].map(s => (<div key={s.step} className={`p-4 rounded-xl border-l-4 border-${s.color}-500 bg-${s.color}-50 dark:bg-${s.color}-900/20`}><h3 className={`font-bold text-${s.color}-800 dark:text-${s.color}-300 mb-1`}>{s.step}</h3><p className="text-sm text-slate-700 dark:text-slate-300">{s.desc}</p></div>))}</div></div></div>),
            properties: (<div className="space-y-6"><div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6"><h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 说话小提醒</h3><div className="grid md:grid-cols-2 gap-4"><div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200"><p className="text-red-500 font-bold mb-2">❌ 只说一个词</p><p className="text-sm text-slate-600 dark:text-slate-400">"放风筝"——太简单了！谁在放？在哪里放？</p></div><div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200"><p className="text-green-500 font-bold mb-2">✅ 说完整的句子</p><p className="text-sm text-slate-600 dark:text-slate-400">"一个小女孩在公园里高兴地放风筝。"——好棒！有人物、地点、心情、动作！</p></div></div></div></div>),
            examples: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">📝 看图说话示范</h2><div className="space-y-4"><div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl"><p className="font-bold text-slate-800 dark:text-white mb-2">场景：小朋友们在操场上做早操</p><div className="pl-4 border-l-4 border-red-400 text-sm text-slate-600 dark:text-slate-400 space-y-1"><p>⭐ 基础版：小朋友们在做早操。</p><p>⭐⭐ 进阶版：早晨，小朋友们在操场上整整齐齐地做早操。</p><p>⭐⭐⭐ 高级版：阳光明媚的早晨，小朋友们排着整齐的队伍在操场上做早操，他们的动作又标准又漂亮！</p></div></div></div></div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1040} type="choice" question={'看图说话应该包含哪些要素？'} options={[{ label: 'A', value: '只说动作就行' }, { label: 'B', value: '谁、在哪里、做什么' }, { label: 'C', value: '只说人物名字' }, { label: 'D', value: '只说地点' }]} answer="B" explanation={'看图说话要说清楚"谁（人物）、在哪里（地点）、做什么（事件）"，这样才完整！'}  />
                    <PracticeProblem id={1041} type="choice" question={'如果图片上是一个小男孩在踢足球，下面哪句话描述得最完整？'} options={[{ label: 'A', value: '踢足球' }, { label: 'B', value: '小男孩在踢足球' }, { label: 'C', value: '小男孩在操场上开心地踢足球' }, { label: 'D', value: '操场上的足球' }]} answer="C" explanation="C选项包含了人物（小男孩）、地点（操场上）、动作（踢足球）和心情（开心地），描述最完整生动。" />
                    <PracticeProblem id={1042} type="choice" question={'看图说话的第一步应该是？'} options={[{ label: 'A', value: '想一想' }, { label: 'B', value: '说一说' }, { label: 'C', value: '看一看' }, { label: 'D', value: '写一写' }]} answer="C" explanation="看图说话三步法：一观察，二想象，三讲述。" />
                    <PracticeProblem id={1043} type="choice" question={'如果在图片里看到太阳落山了，我们在说话时可以加上什么表示时间的话？'} options={[{ label: 'A', value: '早晨' }, { label: 'B', value: '中午' }, { label: 'C', value: '傍晚' }, { label: 'D', value: '夜里' }]} answer="C" explanation="太阳落山表示时间是傍晚。" />
                    <PracticeProblem id={1044} type="choice" question={'如果在图片中看到人物在笑，我们可以用哪个词语来描述？'} options={[{ label: 'A', value: '伤心地' }, { label: 'B', value: '开心地' }, { label: 'C', value: '生气地' }, { label: 'D', value: '害怕地' }]} answer="B" explanation="笑代表开心。" />
                    <PracticeProblem id={1045} type="choice" question={'“谁”“在哪里”“做什么”分别对应了哪些信息？'} options={[{ label: 'A', value: '人物、地点、事件' }, { label: 'B', value: '地点、人物、时间' }, { label: 'C', value: '事件、时间、地点' }, { label: 'D', value: '人物、时间、事件' }]} answer="A" explanation="“谁”是人物，“在哪里”是地点，“做什么”是事件。" />
                    <PracticeProblem id={1046} type="choice" question={'看图说话时，发现有两只小鸟在树枝上，我们可以这样说：'} options={[{ label: 'A', value: '小树上有小鸟' }, { label: 'B', value: '两只可爱的小鸟在树枝上唱歌' }, { label: 'C', value: '鸟在飞' }, { label: 'D', value: '公园有树' }]} answer="B" explanation="B选项加入了数量、修饰词和生动的动作，最适合看图说话。" />
                    <PracticeProblem id={1047} type="choice" question={'图片里是下雨天，小朋友拿着伞，正确的描述是：'} options={[{ label: 'A', value: '下雨了，小朋友打着一把漂亮的小花伞' }, { label: 'B', value: '我不喜欢下雨' }, { label: 'C', value: '伞是红色的' }, { label: 'D', value: '小朋友在哭' }]} answer="A" explanation="A选项最贴切图片内容并运用了修饰词。" />
                    <PracticeProblem id={1048} type="choice" question={'看图说话想要说得更好，可以？'} options={[{ label: 'A', value: '加上修饰的词语（如：美丽的、可爱的）' }, { label: 'B', value: '尽可能简短' }, { label: 'C', value: '只说看到了什么字' }, { label: 'D', value: '都不说' }]} answer="A" explanation="加上修饰词能让句子更生动。" />
                    <PracticeProblem id={1049} type="choice" question={'在看图说话中，如果你不知道该怎么开头，可以先说什么？'} options={[{ label: 'A', value: '时间（比如：星期天上午）' }, { label: 'B', value: '动作' }, { label: 'C', value: '结果' }, { label: 'D', value: '不知道' }]} answer="A" explanation="加上时间和地点作为开头是非常好的看图说话习惯。" />
                </div>
            )
        }
    },

    // ==================== L2-2. 儿歌与童谣 ====================
    'cn1-l2-nursery-rhymes': {
        meta: { title: "儿歌与童谣 - 一年级语文 | AI7Miao语文", description: "通过朗读儿歌童谣培养语感和节奏感。", keywords: '儿歌,童谣,朗读,语感,一年级语文' },
        info: { title: "儿歌与童谣", description: "唱着学语文，好听又好记！跟着节奏一起摇摆吧！🎶", tags: [{ text: '素养进阶', color: 'purple' }, { text: '20分钟', icon: Clock, color: 'slate' }] },
        aiContext: "学生学习儿歌与童谣。引导学生发现押韵、节奏。可以让学生尝试仿编简单的儿歌。",
        aiChatTitle: "🎶 儿歌小歌手", aiChatIntro: "来唱儿歌吧！你最喜欢哪首儿歌呢？",
        aiMessages: [{ role: 'ai', content: '"小白兔，白又白，两只耳朵竖起来"——你发现了吗？"白"和"来"的韵母都是 ai，读起来特别顺口！这就叫"押韵"哦！' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />儿歌里的秘密</h2><div className="space-y-4"><div className="bg-pink-50 dark:bg-pink-900/20 p-5 rounded-xl border-l-4 border-pink-500"><h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2">🎵 押韵 —— 让儿歌好听的魔法</h3><p className="text-sm text-slate-700 dark:text-slate-300 mb-2">每句话最后一个字的韵母一样，读起来就像唱歌一样好听！</p><div className="bg-white dark:bg-slate-700 p-3 rounded-lg font-mono text-sm"><p>小白兔，白又<strong className="text-pink-600">白</strong>（bái）</p><p>两只耳朵竖起<strong className="text-pink-600">来</strong>（lái）</p><p>"白"和"来"的韵母都是 <strong className="text-pink-600">ai</strong>！</p></div></div><div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500"><h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">🥁 节奏 —— 拍手念更好听</h3><p className="text-sm text-slate-700 dark:text-slate-300">儿歌都有固定的拍子！试着一边拍手一边念，👏节奏就出来啦！</p></div></div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📖 试着和爸爸妈妈一起朗读课本上的儿歌，拍着手找出每首儿歌的押韵字吧！</div>),
            examples: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">🌈 经典儿歌欣赏</h2><div className="space-y-4">{[{ title: '《咏鹅》', content: '鹅鹅鹅，\n曲项向天歌。\n白毛浮绿水，\n红掌拨清波。', note: '这也是一首古诗哦！押韵字：鹅、歌、波（韵母 e/o）' }, { title: '数字歌', content: '一二三四五，\n上山打老虎。\n老虎没打到，\n打到小松鼠。', note: '押韵字：五、虎、鼠（韵母 u/ǔ/ǔ）' }].map((r, i) => (<div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl"><p className="font-bold text-red-600 dark:text-red-400 mb-2">{r.title}</p><p className="text-slate-700 dark:text-slate-300 text-sm whitespace-pre-line font-mono mb-2">{r.content}</p><p className="text-xs text-slate-500">💡 {r.note}</p></div>))}</div></div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1050} type="choice" question={'儿歌好听的秘密是什么？'} options={[{ label: 'A', value: '字数越多越好' }, { label: 'B', value: '押韵和节奏' }, { label: 'C', value: '声音越大越好' }, { label: 'D', value: '说得越快越好' }]} answer="B" explanation={'儿歌好听的秘密在于"押韵"（句尾韵母相同）和"节奏"（有规律的拍子）。'}  />
                    <PracticeProblem id={1051} type="choice" question={'“小白兔，白又白，两只耳朵竖起来”中押韵的字是？'} options={[{ label: 'A', value: '兔、朵' }, { label: 'B', value: '白、来' }, { label: 'C', value: '小、竖' }, { label: 'D', value: '这首没有押韵' }]} answer="B" explanation={'白（bái）和来（lái）韵母相同，都是ai。'} />
                    <PracticeProblem id={1052} type="choice" question={'下面哪首诗或儿歌中，句尾押了带有韵母“e/o”的韵？'} options={[{ label: 'A', value: '《咏鹅》' }, { label: 'B', value: '数字歌' }, { label: 'C', value: '静夜思' }, { label: 'D', value: '春晓' }]} answer="A" explanation={'《咏鹅》中“鹅、歌、波”押韵，韵母属于 e/o 系列。'} />
                    <PracticeProblem id={1053} type="choice" question={'如何才能更好地朗读儿歌找节奏？'} options={[{ label: 'A', value: '闭眼念' }, { label: 'B', value: '不用看字' }, { label: 'C', value: '一边拍手一边念' }, { label: 'D', value: '大声喊' }]} answer="C" explanation={'拍手是最简单的找节奏的方法！'} />
                    <PracticeProblem id={1054} type="choice" question={'“一二三四五，上山打老虎”这首儿歌中，和“五”押韵的字是？'} options={[{ label: 'A', value: '山' }, { label: 'B', value: '打' }, { label: 'C', value: '虎' }, { label: 'D', value: '上' }]} answer="C" explanation={'五（wǔ）和虎（hǔ）韵母都是 u。'} />
                    <PracticeProblem id={1055} type="choice" question={'童谣除了可以念，往往还可以跟着玩什么？'} options={[{ label: 'A', value: '睡觉' }, { label: 'B', value: '拍手游戏或跳皮筋' }, { label: 'C', value: '画画' }, { label: 'D', value: '看书' }]} answer="B" explanation={'因为童谣有很强的节奏，常常被用来做拍手或跳皮筋等活动的游戏伴奏。'} />
                    <PracticeProblem id={1056} type="choice" question={'阅读儿歌的好处不包括？'} options={[{ label: 'A', value: '锻炼语感' }, { label: 'B', value: '学会复杂的数学公式' }, { label: 'C', value: '获得节奏感' }, { label: 'D', value: '认识汉字' }]} answer="B" explanation={'儿歌对数学公式没有帮助，主要培养阅读和语感。'} />
                    <PracticeProblem id={1057} type="choice" question={'“小老鼠，上灯台，偷油吃，下不____。”应填入哪个字能押韵？'} options={[{ label: 'A', value: '走' }, { label: 'B', value: '来' }, { label: 'C', value: '跑' }, { label: 'D', value: '去' }]} answer="B" explanation={'台（tái）和来（lái）押韵。'} />
                    <PracticeProblem id={1058} type="choice" question={'儿歌“太阳大，地球小，地球绕着太阳____。”应填？'} options={[{ label: 'A', value: '转' }, { label: 'B', value: '走' }, { label: 'C', value: '跑' }, { label: 'D', value: '跑（且押韵小）' }]} answer="C" explanation="其实比较符合逻辑的是跑(pǎo)，跟小(xiǎo)押韵。" />
                    <PracticeProblem id={1059} type="choice" question={'很多儿歌读起来朗朗上口，最大的原因是？'} options={[{ label: 'A', value: '字少' }, { label: 'B', value: '词语生僻' }, { label: 'C', value: '有规律的格式和押韵' }, { label: 'D', value: '没有原因' }]} answer="C" explanation={'规律的格式和句末押韵使儿歌朗朗上口。'} />
                </div>
            )
        }
    },

    // ==================== L2-3. 简单句子 ====================
    'cn1-l2-simple-sentences': {
        meta: { title: "简单句子 - 一年级语文 | AI7Miao语文", description: "学习造简单完整的句子，掌握基本句式。", keywords: '句子,造句,句式,一年级语文' },
        info: { title: "简单句子", description: "把词语串成项链，变出漂亮的句子！📿", tags: [{ text: '素养进阶', color: 'purple' }, { text: '25分钟', icon: Clock, color: 'slate' }] },
        aiContext: "学生学习简单句子的构造。用'谁做什么''什么怎么样'等基本句式引导。鼓励学生把句子说得越来越生动。",
        aiChatTitle: "📿 句子串珠师", aiChatIntro: "词语就像珠子，把它们串起来就是美丽的句子项链！",
        aiMessages: [{ role: 'ai', content: '用"小鸟"和"飞"造一个句子吧！可以加上"在哪里飞""怎样飞"让句子更漂亮哦！' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-red-600" />造句三大法宝</h2><div className="space-y-4">{[{ title: '🧑 "谁做什么"句式', example: '小猫在睡觉。/ 弟弟在画画。', color: 'blue' }, { title: '🌸 "什么怎么样"句式', example: '花儿真漂亮。/ 天气很好。', color: 'green' }, { title: '❤️ "谁喜欢什么"句式', example: '我喜欢吃苹果。/ 姐姐喜欢唱歌。', color: 'purple' }].map(s => (<div key={s.title} className={`p-4 rounded-xl border-l-4 border-${s.color}-500 bg-${s.color}-50 dark:bg-${s.color}-900/20`}><h3 className={`font-bold text-${s.color}-800 dark:text-${s.color}-300 mb-1`}>{s.title}</h3><p className="text-sm text-slate-700 dark:text-slate-300 font-mono">{s.example}</p></div>))}</div></div>),
            properties: (<div className="space-y-6"><div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6"><h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 造句小陷阱</h3><div className="grid md:grid-cols-2 gap-4"><div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200"><p className="text-red-500 font-bold mb-2">❌ 句子不完整</p><p className="text-sm text-slate-600 dark:text-slate-400">"小鸟飞"——谁？在哪里飞？怎么飞？少了好多信息！</p></div><div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200"><p className="text-green-500 font-bold mb-2">✅ 句子完整又生动</p><p className="text-sm text-slate-600 dark:text-slate-400">"一只小鸟在蓝蓝的天空中快乐地飞翔。"——有数量、有样子、有地点、有心情！</p></div></div></div></div>),
            examples: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">🌟 句子升级大作战</h2><div className="space-y-3">{[{ level: '⭐', s: '花开了。' }, { level: '⭐⭐', s: '美丽的花开了。' }, { level: '⭐⭐⭐', s: '春天到了，花园里美丽的花儿都开了。' }, { level: '⭐⭐⭐⭐', s: '温暖的春天到了，花园里五颜六色的花儿争先恐后地开放了，真漂亮！' }].map((ex, i) => (<div key={i} className="flex items-start gap-3 bg-slate-50 dark:bg-slate-700/30 p-3 rounded-xl"><span className="text-sm whitespace-nowrap">{ex.level}</span><p className="text-sm text-slate-700 dark:text-slate-300">{ex.s}</p></div>))}</div></div>),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={1060} type="choice" question={'下面哪个是完整的句子？'} options={[{ label: 'A', value: '小狗' }, { label: 'B', value: '跑得快' }, { label: 'C', value: '小狗跑得真快。' }, { label: 'D', value: '在公园里' }]} answer="C" explanation={'完整的句子需要有"谁"+"做什么/怎么样"。只有C选项有主语"小狗"和谓语"跑得真快"，是完整的句子。'}  />
                    <PracticeProblem id={1061} type="choice" question={'“姐姐喜欢看书。”这句话属于哪一种基本句式？'} options={[{ label: 'A', value: '谁做什么' }, { label: 'B', value: '什么怎么样' }, { label: 'C', value: '谁喜欢什么' }, { label: 'D', value: '什么在哪里' }]} answer="C" explanation={'这句话表达的是某人（姐姐）喜欢某种事物（看书）。'} />
                    <PracticeProblem id={1062} type="choice" question={'把“小白兔”和“吃白菜”连成一句话：'} options={[{ label: 'A', value: '小白兔吃白菜。' }, { label: 'B', value: '吃白菜小白兔。' }, { label: 'C', value: '小白兔白菜吃。' }, { label: 'D', value: '白菜吃小白兔。' }]} answer="A" explanation={'正常句子顺序是：谁（小白兔）做事（吃白菜）。'} />
                    <PracticeProblem id={1063} type="choice" question={'“______真漂亮。”可以填入什么词语让句子完整？'} options={[{ label: 'A', value: '吃晚饭' }, { label: 'B', value: '跑得快' }, { label: 'C', value: '这朵花儿' }, { label: 'D', value: '飞到天上' }]} answer="C" explanation={'“这朵花儿真漂亮”表示事物的情况，属于“什么怎么样”句式。'} />
                    <PracticeProblem id={1064} type="choice" question={'将“苹果”和“红红的”组成一个句子，最合适的是：'} options={[{ label: 'A', value: '红红的苹果。' }, { label: 'B', value: '苹果是红红的。' }, { label: 'C', value: '苹果红红的真好吃。' }, { label: 'D', value: 'B和C都可以' }]} answer="D" explanation={'其实B是一个完整的“什么怎么样”句式，C则加了补充，也是好句子，A少了谓语只是个短语。'} />
                    <PracticeProblem id={1065} type="choice" question={'“小猫在树下睡觉。”这句话中包含了什么信息？'} options={[{ label: 'A', value: '谁做了什么' }, { label: 'B', value: '谁在哪里做什么' }, { label: 'C', value: '谁长什么样' }, { label: 'D', value: '什么怎么样' }]} answer="B" explanation={'小猫（谁），在树下（在哪里），睡觉（做什么）。'} />
                    <PracticeProblem id={1066} type="choice" question={'下面哪个句子不够完整？'} options={[{ label: 'A', value: '我爱中国。' }, { label: 'B', value: '在草地上。' }, { label: 'C', value: '他去了学校。' }, { label: 'D', value: '太阳出来了。' }]} answer="B" explanation={'B选项只有地点，没有指出“谁”在草地上做什么。'} />
                    <PracticeProblem id={1067} type="choice" question={'怎样能让“花开了”这个句子变得更生动？'} options={[{ label: 'A', value: '花园里的花开了。' }, { label: 'B', value: '花开。' }, { label: 'C', value: '花。' }, { label: 'D', value: '美丽的花在春天都开了。' }]} answer="D" explanation={'D选项增加了修饰词（美丽）和时间状语（在春天），更生动形象。'} />
                    <PracticeProblem id={1068} type="choice" question={'用“爱”造句，下面最合适的是：'} options={[{ label: 'A', value: '我爱妈妈。' }, { label: 'B', value: '爱。' }, { label: 'C', value: '我爱。' }, { label: 'D', value: '爱妈妈。' }]} answer="A" explanation={'A选项是一句完整的“谁爱什么”句子。'} />
                    <PracticeProblem id={1069} type="choice" question={'句子后面的标点一般用什么？（陈述句）'} options={[{ label: 'A', value: '逗号' }, { label: 'B', value: '句号' }, { label: 'C', value: '顿号' }, { label: 'D', value: '双引号' }]} answer="B" explanation={'完整的陈述话说完后，要用句号。'} />
                </div>
            )
        }
    }
};

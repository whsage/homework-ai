import { Lightbulb, Star, Clock } from 'lucide-react';
import { PracticeProblem } from './common';

// ==================== 一年级英语 ====================
export const grade1Content = {
    'en1-l1-alphabet': {
        meta: { title: "26个字母认读 - 一年级英语 | AI7Miao英语", description: "学习26个英文字母的大小写认读。", keywords: "字母,alphabet,ABC,一年级英语" },
        info: { title: "26个字母认读", description: "Hello, ABC! 一起来认识26个英文字母吧！🔤", tags: [{ text: "基础达标", color: "blue" }, { text: "25分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "一年级学生第一次接触英文字母。教学重点：26个字母的大小写认读、字母名称音(letter name)和字母音(letter sound)的区别。用唱字母歌、找字母游戏等趣味方式教学。",
        aiChatTitle: "🔤 ABC字母小达人", aiChatIntro: "和AI一起唱ABC字母歌，认识26个字母朋友！",
        aiMessages: [{ role: 'ai', content: 'Let\'s learn the alphabet! 🎵 A-B-C-D-E-F-G... 你能跟着唱出来吗？先来认识前5个字母：A, B, C, D, E！' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-amber-600" />26个英文字母</h2><div className="space-y-5"><div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-xl border-l-4 border-amber-500"><h3 className="font-bold text-amber-800 dark:text-amber-300 mb-3">🔤 大写字母 (Capital Letters)</h3><div className="flex flex-wrap gap-2">{['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map(l => (<span key={l} className="w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-700 rounded-lg text-xl font-bold text-amber-600 shadow-sm">{l}</span>))}</div></div><div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500"><h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">🔡 小写字母 (Lowercase Letters)</h3><div className="flex flex-wrap gap-2">{['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].map(l => (<span key={l} className="w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-700 rounded-lg text-xl font-bold text-blue-600 shadow-sm">{l}</span>))}</div></div><div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500"><h3 className="font-bold text-green-800 dark:text-green-300 mb-3">🎵 5个元音字母</h3><div className="flex gap-4 justify-center">{['A', 'E', 'I', 'O', 'U'].map(v => (<div key={v} className="w-14 h-14 flex items-center justify-center bg-green-100 dark:bg-green-800 rounded-full text-2xl font-bold text-green-700 dark:text-green-300 shadow-md">{v}</div>))}</div><p className="text-sm text-slate-600 dark:text-slate-400 text-center mt-3">元音字母要记牢：A, E, I, O, U！其余21个是辅音字母。</p></div></div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 字母歌帮助记忆顺序！大小写要对应：Aa Bb Cc... 注意 b 和 d、p 和 q 容易混淆哦！</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 Try: 找出单词 "apple" 中的每个字母，说出它们是大写还是小写。</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={3000} question="Which of the following is a vowel (元音字母)?" options={[{ label: 'A', value: 'B' }, { label: 'B', value: 'E' }, { label: 'C', value: 'F' }, { label: 'D', value: 'G' }]} answer="B" explanation={'五个元音字母是 A, E, I, O, U。E 是元音字母，B/F/G 都是辅音字母。'} /></div>)
        }
    },

    'en1-l1-phonics-basic': {
        meta: { title: "自然拼读基础 - 一年级英语 | AI7Miao英语", description: "学习字母发音和基础自然拼读规则。", keywords: "自然拼读,phonics,字母发音,一年级英语" },
        info: { title: "自然拼读基础", description: "每个字母都有自己的声音！学会拼读就能读单词！🗣️", tags: [{ text: "基础达标", color: "blue" }, { text: "25分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "一年级自然拼读入门。重点教授辅音字母的基本发音和短元音(short vowels: a=/æ/, e=/ɛ/, i=/ɪ/, o=/ɒ/, u=/ʌ/)。通过CVC(辅-元-辅)单词练习拼读：cat, dog, pen, big, sun等。",
        aiChatTitle: "🗣️ 拼读小能手", aiChatIntro: "学会字母的声音，你就能自己读出新单词！试试看！",
        aiMessages: [{ role: 'ai', content: 'C says /k/, A says /æ/, T says /t/... 把它们拼在一起：/k/-/æ/-/t/ = cat! 🐱 你来试试拼 d-o-g？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-amber-600" />自然拼读基础</h2><div className="space-y-5"><div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-xl border-l-4 border-amber-500"><h3 className="font-bold text-amber-800 dark:text-amber-300 mb-3">🔊 短元音 (Short Vowels)</h3><div className="grid grid-cols-5 gap-3">{[{ l: 'a', s: '/æ/', w: 'cat 🐱' }, { l: 'e', s: '/ɛ/', w: 'pen ✏️' }, { l: 'i', s: '/ɪ/', w: 'big' }, { l: 'o', s: '/ɒ/', w: 'dog 🐕' }, { l: 'u', s: '/ʌ/', w: 'sun ☀️' }].map(v => (<div key={v.l} className="bg-white dark:bg-slate-700 p-3 rounded-lg text-center"><span className="text-2xl font-bold text-amber-600">{v.l}</span><p className="text-xs text-blue-600 font-mono">{v.s}</p><p className="text-xs text-slate-500 mt-1">{v.w}</p></div>))}</div></div><div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500"><h3 className="font-bold text-green-800 dark:text-green-300 mb-3">🧩 CVC拼读法</h3><p className="text-sm text-slate-700 dark:text-slate-300 mb-3">CVC = 辅音(C) + 元音(V) + 辅音(C)，这是最基础的拼读模式！</p><div className="flex flex-wrap gap-3 justify-center">{['c-a-t', 'd-o-g', 'p-e-n', 'b-i-g', 's-u-n'].map(w => (<div key={w} className="bg-white dark:bg-slate-700 px-4 py-2 rounded-lg"><span className="text-lg font-bold text-green-600">{w}</span></div>))}</div></div></div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 拼读口诀：看到字母想声音，一个一个拼出来！c-a-t → /k/-/æ/-/t/ → cat!</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 Try: 拼读这些单词 — h-o-t, r-e-d, s-i-t, c-u-p</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={3010} question={'The word "dog" has the short vowel sound of which letter?'} options={[{ label: 'A', value: 'a' }, { label: 'B', value: 'e' }, { label: 'C', value: 'o' }, { label: 'D', value: 'u' }]} answer="C" explanation={'Dog 中的元音字母是 o，发短元音 /ɒ/。d-o-g → /d/-/ɒ/-/g/。'} /></div>)
        }
    },

    'en1-l1-colors-numbers': {
        meta: { title: "颜色与数字 - 一年级英语 | AI7Miao英语", description: "学习基础颜色和数字1-20的英文表达。", keywords: "颜色,数字,colors,numbers,一年级英语" },
        info: { title: "颜色与数字", description: "Red, blue, green... 1, 2, 3! 用英语说说身边的颜色和数字！🌈", tags: [{ text: "基础达标", color: "blue" }, { text: "20分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "学习基础颜色词汇(red, blue, green, yellow, black, white, pink, purple, orange, brown)和数字1-20的英文表达。通过看颜色说英文、数物品等方式练习。",
        aiChatTitle: "🌈 颜色数字乐园", aiChatIntro: "你的书包是什么颜色？用英语告诉我吧！What color is your bag?",
        aiMessages: [{ role: 'ai', content: 'Look around you! 🔍 What colors can you see? 你看到了什么颜色？Try to say them in English: red, blue, green...' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-amber-600" />Colors & Numbers</h2><div className="space-y-5"><div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-xl border-l-4 border-amber-500"><h3 className="font-bold text-amber-800 dark:text-amber-300 mb-3">🎨 基础颜色 (Colors)</h3><div className="grid grid-cols-5 gap-3">{[{ c: 'red', bg: 'bg-red-500' }, { c: 'blue', bg: 'bg-blue-500' }, { c: 'green', bg: 'bg-green-500' }, { c: 'yellow', bg: 'bg-yellow-400' }, { c: 'black', bg: 'bg-slate-800' }, { c: 'white', bg: 'bg-white border' }, { c: 'pink', bg: 'bg-pink-400' }, { c: 'purple', bg: 'bg-purple-500' }, { c: 'orange', bg: 'bg-orange-500' }, { c: 'brown', bg: 'bg-amber-700' }].map(item => (<div key={item.c} className="text-center"><div className={`w-10 h-10 mx-auto rounded-full ${item.bg} shadow-md`}></div><p className="text-xs mt-1 text-slate-600 dark:text-slate-400">{item.c}</p></div>))}</div></div><div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500"><h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">🔢 数字1-10 (Numbers)</h3><div className="grid grid-cols-5 gap-3">{[{ n: 1, w: 'one' }, { n: 2, w: 'two' }, { n: 3, w: 'three' }, { n: 4, w: 'four' }, { n: 5, w: 'five' }, { n: 6, w: 'six' }, { n: 7, w: 'seven' }, { n: 8, w: 'eight' }, { n: 9, w: 'nine' }, { n: 10, w: 'ten' }].map(item => (<div key={item.n} className="bg-white dark:bg-slate-700 p-2 rounded-lg text-center"><span className="text-xl font-bold text-blue-600">{item.n}</span><p className="text-xs text-slate-500">{item.w}</p></div>))}</div></div></div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 句型: What color is it? — It is red. / How many apples? — Three apples.</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 数一数你身边有几支铅笔，用英语说出来！I have ___ pencils.</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={3020} question="How do you say the number 8 in English?" options={[{ label: 'A', value: 'six' }, { label: 'B', value: 'seven' }, { label: 'C', value: 'eight' }, { label: 'D', value: 'nine' }]} answer="C" explanation={'8 的英文是 eight。注意拼写里有个 "gh" 是不发音的哦！'} /></div>)
        }
    },

    'en1-l1-greetings': {
        meta: { title: "问候与自我介绍 - 一年级英语 | AI7Miao英语", description: "学习简单的英语问候和自我介绍。", keywords: "问候,自我介绍,hello,greetings,一年级英语" },
        info: { title: "问候与自我介绍", description: "Hello! My name is... 学会用英语打招呼和介绍自己！👋", tags: [{ text: "基础达标", color: "blue" }, { text: "20分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "学习基本问候语(Hello/Hi, Good morning/afternoon/evening, Goodbye/Bye)和自我介绍(My name is... / I am... / I'm ___ years old)。通过角色扮演练习日常问候对话。",
        aiChatTitle: "👋 打招呼小明星", aiChatIntro: "Hello! Nice to meet you! 来学习用英语打招呼！",
        aiMessages: [{ role: 'ai', content: 'Hello! 👋 My name is AI Teacher. What is your name? 你可以说: My name is ___. 试试看！' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-amber-600" />Greetings & Introduction</h2><div className="space-y-4">{[{ scene: '👋 打招呼', phrases: ['Hello! / Hi!', 'Good morning! (早上好)', 'Good afternoon! (下午好)', 'Good evening! (晚上好)'], color: 'amber' }, { scene: '😊 自我介绍', phrases: ['My name is ___. (我叫___)', 'I am ___. (我是___)', "I'm ___ years old. (我___岁)", 'Nice to meet you! (很高兴认识你)'], color: 'blue' }, { scene: '👋 说再见', phrases: ['Goodbye! / Bye!', 'See you! (再见)', 'See you tomorrow! (明天见)'], color: 'green' }].map(item => (<div key={item.scene} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-2`}>{item.scene}</h3><ul className="space-y-1">{item.phrases.map((p, i) => (<li key={i} className="text-sm text-slate-700 dark:text-slate-300">• {p}</li>))}</ul></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 对话模式: A: Hello! My name is Tom. B: Hi, Tom! My name is Lucy. Nice to meet you!</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 试着用英语介绍自己：Hello! My name is ___. I am ___ years old.</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={3030} question={'How do you respond to "How are you?"'} options={[{ label: 'A', value: 'My name is Tom.' }, { label: 'B', value: "I'm fine, thank you." }, { label: 'C', value: 'Goodbye!' }, { label: 'D', value: 'Good morning!' }]} answer="B" explanation={'当别人问 "How are you?"（你好吗？），标准回答是 "I\'m fine, thank you."（我很好，谢谢你。）'} /></div>)
        }
    },

    'en1-l2-songs': {
        meta: { title: "英文儿歌 - 一年级英语 | AI7Miao英语", description: "通过英文儿歌学习英语。", keywords: "英文儿歌,songs,nursery rhymes,一年级英语" },
        info: { title: "英文儿歌", description: "唱着歌就把英语学了！🎵 Music makes learning fun!", tags: [{ text: "能力拓展", color: "purple" }, { text: "20分钟", icon: Clock, color: "slate" }] },
        aiContext: "通过经典英文儿歌学习英语。推荐歌曲：Twinkle Twinkle Little Star, Old MacDonald Had a Farm, Head Shoulders Knees and Toes, If You're Happy and You Know It。边唱边学词汇。",
        aiChatTitle: "🎵 唱歌学英语", aiChatIntro: "Let's sing! 唱儿歌是学英语最快乐的方式！",
        aiMessages: [{ role: 'ai', content: '🎵 Twinkle, twinkle, little star, how I wonder what you are... 你知道这首歌吗？"twinkle"是"闪烁"的意思，"star"是"星星"！' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-amber-600" />经典英文儿歌</h2><div className="space-y-4">{[{ song: '⭐ Twinkle Twinkle Little Star', vocab: 'star(星星), wonder(想知道), high(高)', color: 'amber' }, { song: '🐄 Old MacDonald Had a Farm', vocab: 'farm(农场), cow(牛), pig(猪), duck(鸭)', color: 'green' }, { song: '👋 Head Shoulders Knees and Toes', vocab: 'head(头), shoulders(肩膀), knees(膝盖), toes(脚趾)', color: 'blue' }, { song: '😊 If You\'re Happy and You Know It', vocab: 'happy(开心), clap(拍手), stomp(跺脚)', color: 'purple' }].map(item => (<div key={item.song} className={`p-4 rounded-xl border-l-4 border-${item.color}-500 bg-${item.color}-50 dark:bg-${item.color}-900/20`}><h3 className={`font-bold text-${item.color}-800 dark:text-${item.color}-300 mb-1`}>{item.song}</h3><p className="text-sm text-slate-600 dark:text-slate-400">词汇: {item.vocab}</p></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 学唱儿歌的好处：练习发音、积累词汇、培养语感、增加学习兴趣！</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 选一首喜欢的儿歌，找出歌词中认识的单词！</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={3040} question={'In the song "Head Shoulders Knees and Toes", what does "shoulders" mean?'} options={[{ label: 'A', value: '头' }, { label: 'B', value: '肩膀' }, { label: 'C', value: '膝盖' }, { label: 'D', value: '脚趾' }]} answer="B" explanation={'Shoulders 是"肩膀"的意思。Head=头, Knees=膝盖, Toes=脚趾。'} /></div>)
        }
    },

    'en1-l2-classroom': {
        meta: { title: "课堂用语 - 一年级英语 | AI7Miao英语", description: "学习英语课堂常用指令和用语。", keywords: "课堂用语,classroom English,一年级英语" },
        info: { title: "课堂用语", description: "Stand up! Sit down! 学会听懂老师的英语指令！📚", tags: [{ text: "能力拓展", color: "purple" }, { text: "20分钟", icon: Clock, color: "slate" }] },
        aiContext: "学习英语课堂常用指令：Stand up, Sit down, Open/Close your book, Listen, Look, Read after me, Hands up/down, Be quiet, Well done, Good job等。",
        aiChatTitle: "📚 课堂英语通", aiChatIntro: "听懂老师的英语指令，做课堂上的小明星！",
        aiMessages: [{ role: 'ai', content: 'Class begins! Stand up, please! 🧍 当老师说 "Stand up" 你要怎么做？对了，站起来！那 "Sit down" 呢？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-amber-600" />Classroom English</h2><div className="grid grid-cols-2 gap-3">{[{ en: 'Stand up!', cn: '起立！', emoji: '🧍' }, { en: 'Sit down!', cn: '坐下！', emoji: '🪑' }, { en: 'Open your book.', cn: '打开书。', emoji: '📖' }, { en: 'Close your book.', cn: '合上书。', emoji: '📕' }, { en: 'Listen!', cn: '听！', emoji: '👂' }, { en: 'Look!', cn: '看！', emoji: '👀' }, { en: 'Read after me.', cn: '跟我读。', emoji: '🗣️' }, { en: 'Hands up!', cn: '举手！', emoji: '🙋' }, { en: 'Be quiet!', cn: '安静！', emoji: '🤫' }, { en: 'Good job!', cn: '做得好！', emoji: '👍' }].map(item => (<div key={item.en} className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-xl flex items-center gap-3"><span className="text-2xl">{item.emoji}</span><div><p className="font-bold text-slate-800 dark:text-white text-sm">{item.en}</p><p className="text-xs text-slate-500">{item.cn}</p></div></div>))}</div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 这些指令都是祈使句！祈使句以动词开头，表示命令或请求。</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 和同学玩 "Simon Says" 游戏来练习课堂指令！</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={3050} question={'What does "Read after me" mean?'} options={[{ label: 'A', value: '跟我读' }, { label: 'B', value: '自己读' }, { label: 'C', value: '安静' }, { label: 'D', value: '起立' }]} answer="A" explanation={'"Read after me" 意思是"跟我读"。Read=读, after=跟着, me=我。'} /></div>)
        }
    },

    'en1-l2-handwriting': {
        meta: { title: "字母书写规范 - 一年级英语 | AI7Miao英语", description: "学习英文字母的规范书写。", keywords: "字母书写,handwriting,书写规范,一年级英语" },
        info: { title: "字母书写规范", description: "写出漂亮的英文字母！Learn to write neatly! ✍️", tags: [{ text: "能力拓展", color: "purple" }, { text: "25分钟", icon: Clock, color: "slate" }] },
        aiContext: "学习英文字母的规范书写。重点：四线三格的使用规则（大写占上两格、小写占中间一格、有尾巴的字母如g/y/p占下两格），字母的笔画顺序。",
        aiChatTitle: "✍️ 书写小达人", aiChatIntro: "漂亮的英文字母是怎么写出来的？来学习四线三格的秘密！",
        aiMessages: [{ role: 'ai', content: '英文字母要写在四线三格里！大写字母占上面两格，小写字母大多占中间那格。你知道哪些字母有"小尾巴"会到第三格吗？' }],
        tabs: {
            concept: (<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"><h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-amber-600" />字母书写规范</h2><div className="space-y-4"><div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-xl border-l-4 border-amber-500"><h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2">📏 四线三格规则</h3><div className="space-y-2 text-sm text-slate-700 dark:text-slate-300"><p>• <strong>大写字母</strong>：占上两格，顶第一线，坐第三线</p><p>• <strong>小写字母</strong>：大多占中间格（a, c, e, m, n...）</p><p>• <strong>上伸字母</strong>：b, d, f, h, k, l, t — 占上两格</p><p>• <strong>下伸字母</strong>：g, j, p, q, y — 有"尾巴"到第三格</p></div></div><div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500"><h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">⚠️ 容易混淆的字母</h3><div className="grid grid-cols-2 gap-3 text-sm">{[{ pair: 'b 和 d', tip: 'b 肚子朝右，d 肚子朝左' }, { pair: 'p 和 q', tip: 'p 尾巴朝下左，q 尾巴朝下右' }, { pair: 'u 和 n', tip: 'u 开口朝上，n 开口朝下' }, { pair: 'm 和 w', tip: 'm 有两个拱，w 有两个谷' }].map(item => (<div key={item.pair} className="bg-white dark:bg-slate-700 p-2 rounded-lg"><p className="font-bold text-blue-600">{item.pair}</p><p className="text-xs text-slate-500">{item.tip}</p></div>))}</div></div></div></div>),
            properties: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">💡 书写要点：字母要写得大小一致、间距均匀、笔画清楚！多练习就会越写越好！</div>),
            examples: (<div className="text-center py-8 text-slate-500 dark:text-slate-400">📝 在四线三格本上练习写 Aa Bb Cc ... Zz，注意每个字母的位置！</div>),
            practice: (<div className="space-y-6"><PracticeProblem id={3060} question="下列哪组字母都有'尾巴'伸到第三格？" options={[{ label: 'A', value: 'a, b, c' }, { label: 'B', value: 'g, p, y' }, { label: 'C', value: 'd, h, k' }, { label: 'D', value: 'e, m, n' }]} answer="B" explanation={'g, p, y 都是下伸字母，它们的"尾巴"会延伸到四线三格的第三格（最下面的格子）。'} /></div>)
        }
    }
};

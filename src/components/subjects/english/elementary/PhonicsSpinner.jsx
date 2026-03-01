import React, { useState } from 'react';
import { Sparkles, Shuffle, CheckCircle2, XCircle } from 'lucide-react';

const onsets = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'w'];
const vowels = [
    { letter: 'a', sound: '/æ/' },
    { letter: 'e', sound: '/ɛ/' },
    { letter: 'i', sound: '/ɪ/' },
    { letter: 'o', sound: '/ɒ/' },
    { letter: 'u', sound: '/ʌ/' },
];
const codas = ['b', 'd', 'g', 'k', 'm', 'n', 'p', 't', 'x'];

// CVC real words dictionary
const realWords = {
    'bat': '蝙蝠 🦇', 'bad': '坏的', 'bag': '包 🎒', 'ban': '禁止', 'big': '大的',
    'bit': '一点点', 'bin': '垃圾桶', 'bud': '花蕾', 'bug': '虫子 🐛', 'bun': '小面包',
    'bus': '公交 🚌', 'but': '但是', 'cab': '出租车 🚕', 'can': '能/罐头', 'cap': '帽子 🧢',
    'cat': '猫 🐱', 'cob': '玉米芯', 'cod': '鳕鱼', 'cop': '警察', 'cot': '婴儿床',
    'cub': '幼崽', 'cup': '杯子 ☕', 'cut': '切', 'dad': '爸爸 👨', 'dam': '大坝',
    'did': '做了', 'dig': '挖', 'dim': '暗的', 'dip': '蘸', 'dog': '狗 🐶',
    'dot': '点 ●', 'dug': '挖了', 'fan': '风扇/粉丝', 'fat': '胖的', 'fig': '无花果',
    'fin': '鱼鳍', 'fit': '合适', 'fix': '修理', 'fog': '雾 🌫️', 'fox': '狐狸 🦊',
    'fun': '有趣 🎉', 'gag': '笑话', 'gap': '缺口', 'got': '得到了', 'gum': '口香糖',
    'gun': '枪', 'gut': '勇气', 'had': '有了', 'ham': '火腿 🥓', 'hat': '帽子 🎩',
    'hen': '母鸡 🐔', 'hid': '藏了', 'him': '他', 'hip': '臀部', 'hit': '打',
    'hog': '猪', 'hop': '跳', 'hot': '热 🔥', 'hub': '中心', 'hug': '拥抱 🤗',
    'hum': '哼歌', 'hut': '小屋', 'jam': '果酱', 'jet': '喷气机 ✈️', 'jig': '快步舞',
    'jog': '慢跑 🏃', 'jug': '水壶', 'jut': '突出', 'kid': '小孩 👧', 'kit': '工具包',
    'lab': '实验室', 'lap': '一圈', 'leg': '腿 🦵', 'let': '让', 'lid': '盖子',
    'lip': '嘴唇', 'lit': '点燃了', 'log': '木头', 'lot': '许多', 'lug': '拖',
    'mad': '疯狂的', 'man': '男人 👨', 'map': '地图 🗺️', 'mat': '垫子', 'met': '遇见了',
    'mix': '混合', 'mob': '暴民', 'mom': '妈妈 👩', 'mop': '拖把', 'mud': '泥巴',
    'mug': '马克杯', 'nap': '小睡 😴', 'net': '网', 'nit': '虱卵', 'nod': '点头',
    'not': '不', 'nun': '修女', 'nut': '坚果 🥜', 'pad': '垫子', 'pan': '平底锅',
    'pat': '轻拍', 'peg': '衣夹', 'pen': '笔 ✏️', 'pet': '宠物 🐾', 'pig': '猪 🐷',
    'pin': '别针', 'pit': '坑', 'pod': '豆荚', 'pop': '流行/爆', 'pot': '锅',
    'pub': '酒吧', 'pun': '双关语', 'pup': '小狗', 'put': '放',
    'rag': '抹布', 'ram': '公羊', 'ran': '跑了', 'rap': '说唱 🎤', 'rat': '老鼠 🐀',
    'red': '红色 🔴', 'rib': '肋骨', 'rid': '摆脱', 'rig': '钻井架', 'rim': '边缘',
    'rip': '撕', 'rob': '抢劫', 'rod': '杆', 'rot': '腐烂', 'rub': '擦',
    'rug': '地毯', 'run': '跑 🏃', 'rut': '车辙',
    'sad': '伤心 😢', 'sap': '汁液', 'sat': '坐了', 'set': '设置', 'sin': '罪',
    'sip': '小口喝', 'sit': '坐', 'six': '六 6️⃣', 'sob': '抽泣', 'sod': '草皮',
    'son': '儿子', 'sop': '浸泡', 'sub': '潜艇', 'sum': '总和', 'sun': '太阳 ☀️',
    'tab': '标签', 'tag': '标签', 'tan': '棕褐色', 'tap': '轻敲', 'ten': '十 🔟',
    'tin': '锡罐', 'tip': '小费/尖端', 'top': '顶部', 'tub': '浴缸', 'tug': '拖拽',
    'wag': '摇摆', 'web': '蜘蛛网 🕸️', 'wet': '湿的 💧', 'wig': '假发', 'win': '赢 🏆',
    'wit': '才智', 'wok': '炒锅', 'won': '赢了',
};

const PhonicsSpinner = () => {
    const [onset, setOnset] = useState('c');
    const [vowel, setVowel] = useState(0); // index
    const [coda, setCoda] = useState('t');
    const [spinning, setSpinning] = useState(false);

    const word = onset + vowels[vowel].letter + coda;
    const isReal = realWords.hasOwnProperty(word);
    const meaning = isReal ? realWords[word] : null;

    const spin = () => {
        setSpinning(true);
        let count = 0;
        const interval = setInterval(() => {
            setOnset(onsets[Math.floor(Math.random() * onsets.length)]);
            setVowel(Math.floor(Math.random() * vowels.length));
            setCoda(codas[Math.floor(Math.random() * codas.length)]);
            count++;
            if (count > 10) { clearInterval(interval); setSpinning(false); }
        }, 100);
    };

    return (
        <div className="space-y-6">
            <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-2">
                    <Sparkles className="text-amber-500" /> 🐱 Phonics 拼读机
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">选择或随机生成 CVC 组合，看看能拼出什么单词！</p>
            </div>

            {/* Spinner Columns */}
            <div className="flex justify-center items-center gap-2 md:gap-4">
                {/* Onset */}
                <div className="flex flex-col items-center">
                    <label className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wider">辅音</label>
                    <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-400 rounded-2xl p-1 w-20">
                        <select value={onset} onChange={e => setOnset(e.target.value)}
                            className="w-full text-center text-3xl font-black text-blue-700 dark:text-blue-300 bg-transparent cursor-pointer focus:outline-none">
                            {onsets.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                    </div>
                </div>

                <span className="text-2xl text-slate-300 mt-6">-</span>

                {/* Vowel */}
                <div className="flex flex-col items-center">
                    <label className="text-xs font-bold text-rose-600 dark:text-rose-400 mb-2 uppercase tracking-wider">元音</label>
                    <div className="bg-rose-50 dark:bg-rose-900/20 border-2 border-rose-400 rounded-2xl p-1 w-20">
                        <select value={vowel} onChange={e => setVowel(Number(e.target.value))}
                            className="w-full text-center text-3xl font-black text-rose-700 dark:text-rose-300 bg-transparent cursor-pointer focus:outline-none">
                            {vowels.map((v, i) => <option key={v.letter} value={i}>{v.letter}</option>)}
                        </select>
                    </div>
                    <span className="text-xs text-rose-500 mt-1 font-mono">{vowels[vowel].sound}</span>
                </div>

                <span className="text-2xl text-slate-300 mt-6">-</span>

                {/* Coda */}
                <div className="flex flex-col items-center">
                    <label className="text-xs font-bold text-green-600 dark:text-green-400 mb-2 uppercase tracking-wider">辅音</label>
                    <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-400 rounded-2xl p-1 w-20">
                        <select value={coda} onChange={e => setCoda(e.target.value)}
                            className="w-full text-center text-3xl font-black text-green-700 dark:text-green-300 bg-transparent cursor-pointer focus:outline-none">
                            {codas.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                </div>
            </div>

            {/* Spin Button */}
            <div className="text-center">
                <button onClick={spin} disabled={spinning}
                    className={`px-8 py-3 rounded-2xl font-bold text-white transition-all shadow-lg hover:shadow-xl ${spinning ? 'bg-slate-400 cursor-wait' : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600'}`}>
                    <Shuffle size={18} className={`inline mr-2 ${spinning ? 'animate-spin' : ''}`} />
                    {spinning ? '拼读中...' : '🎰 随机拼读！'}
                </button>
            </div>

            {/* Result */}
            <div className={`text-center p-6 rounded-2xl border-2 transition-all ${isReal
                ? 'bg-green-50 dark:bg-green-900/20 border-green-400'
                : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600'
                }`}>
                <div className="text-4xl md:text-5xl font-black mb-3 tracking-widest">
                    <span className="text-blue-600">{onset}</span>
                    <span className="text-rose-600">{vowels[vowel].letter}</span>
                    <span className="text-green-600">{coda}</span>
                </div>
                <div className="text-sm font-mono text-slate-400 mb-3">
                    /{onset}/ - {vowels[vowel].sound} - /{coda}/
                </div>
                {isReal ? (
                    <div className="flex items-center justify-center gap-2">
                        <CheckCircle2 className="text-green-500" size={20} />
                        <span className="text-green-700 dark:text-green-300 font-bold text-lg">
                            ✅ 真实单词！"{word}" = {meaning}
                        </span>
                    </div>
                ) : (
                    <div className="flex items-center justify-center gap-2">
                        <XCircle className="text-slate-400" size={20} />
                        <span className="text-slate-500 dark:text-slate-400 font-medium">
                            这个组合不是真实单词 —— 再试试其他组合吧！
                        </span>
                    </div>
                )}
            </div>

            {/* Tip */}
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-2xl border border-amber-200 dark:border-amber-800/50 text-sm text-amber-700 dark:text-amber-300">
                <strong>💡 拼读口诀：</strong>看到字母想声音，一个一个连起来！比如 c-a-t → /k/-/æ/-/t/ → cat! 试试多转几次，看看你能找到多少真实单词？
            </div>
        </div>
    );
};

export default PhonicsSpinner;

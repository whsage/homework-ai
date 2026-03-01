import React, { useState, useEffect, useCallback } from 'react';
import { Sparkles, RotateCcw, Trophy, Zap } from 'lucide-react';

const wordSets = {
    colors: {
        title: '🎨 颜色配对',
        pairs: [
            { en: 'red', cn: '红色 🔴' }, { en: 'blue', cn: '蓝色 🔵' },
            { en: 'green', cn: '绿色 🟢' }, { en: 'yellow', cn: '黄色 🟡' },
            { en: 'pink', cn: '粉色 🩷' }, { en: 'purple', cn: '紫色 🟣' },
        ]
    },
    animals: {
        title: '🐾 动物配对',
        pairs: [
            { en: 'cat', cn: '猫 🐱' }, { en: 'dog', cn: '狗 🐶' },
            { en: 'bird', cn: '鸟 🐦' }, { en: 'fish', cn: '鱼 🐟' },
            { en: 'rabbit', cn: '兔子 🐰' }, { en: 'monkey', cn: '猴子 🐵' },
        ]
    },
    fruits: {
        title: '🍎 水果配对',
        pairs: [
            { en: 'apple', cn: '苹果 🍎' }, { en: 'banana', cn: '香蕉 🍌' },
            { en: 'grape', cn: '葡萄 🍇' }, { en: 'orange', cn: '橘子 🍊' },
            { en: 'peach', cn: '桃子 🍑' }, { en: 'watermelon', cn: '西瓜 🍉' },
        ]
    },
    classroom: {
        title: '📚 课堂用语配对',
        pairs: [
            { en: 'Stand up!', cn: '起立 🧍' }, { en: 'Sit down!', cn: '坐下 🪑' },
            { en: 'Listen!', cn: '听 👂' }, { en: 'Look!', cn: '看 👀' },
            { en: 'Open your book', cn: '打开书 📖' }, { en: 'Good job!', cn: '做得好 👍' },
        ]
    },
    greetings: {
        title: '👋 问候配对',
        pairs: [
            { en: 'Hello!', cn: '你好 👋' }, { en: 'Goodbye!', cn: '再见 👋' },
            { en: 'Good morning!', cn: '早上好 🌅' }, { en: 'Thank you!', cn: '谢谢 🙏' },
            { en: 'Nice to meet you!', cn: '很高兴认识你 😊' }, { en: 'How are you?', cn: '你好吗 🤔' },
        ]
    }
};

const WordMatchGame = ({ wordSet = 'colors' }) => {
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [matched, setMatched] = useState([]);
    const [moves, setMoves] = useState(0);
    const [gameWon, setGameWon] = useState(false);
    const [currentSet, setCurrentSet] = useState(wordSet);

    const initGame = useCallback((setName) => {
        const data = wordSets[setName] || wordSets.colors;
        const allCards = data.pairs.flatMap((pair, idx) => [
            { id: idx * 2, pairId: idx, text: pair.en, type: 'en' },
            { id: idx * 2 + 1, pairId: idx, text: pair.cn, type: 'cn' }
        ]);
        // Fisher-Yates shuffle
        for (let i = allCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allCards[i], allCards[j]] = [allCards[j], allCards[i]];
        }
        setCards(allCards);
        setFlipped([]);
        setMatched([]);
        setMoves(0);
        setGameWon(false);
    }, []);

    useEffect(() => { initGame(currentSet); }, [currentSet, initGame]);

    const handleFlip = (id) => {
        if (flipped.length === 2 || flipped.includes(id) || matched.includes(id)) return;
        const newFlipped = [...flipped, id];
        setFlipped(newFlipped);

        if (newFlipped.length === 2) {
            setMoves(m => m + 1);
            const [first, second] = newFlipped.map(fid => cards.find(c => c.id === fid));
            if (first.pairId === second.pairId) {
                setTimeout(() => {
                    setMatched(prev => [...prev, first.id, second.id]);
                    setFlipped([]);
                    if (matched.length + 2 === cards.length) setGameWon(true);
                }, 500);
            } else {
                setTimeout(() => setFlipped([]), 800);
            }
        }
    };

    const setInfo = wordSets[currentSet] || wordSets.colors;

    return (
        <div className="space-y-6">
            <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-2">
                    <Sparkles className="text-amber-500" /> {setInfo.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">翻开两张卡片，找到英文和中文的配对！</p>
            </div>

            {/* Word Set Selector */}
            <div className="flex flex-wrap gap-2 justify-center">
                {Object.entries(wordSets).map(([key, val]) => (
                    <button key={key} onClick={() => { setCurrentSet(key); }}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${currentSet === key
                            ? 'bg-amber-500 text-white shadow-md scale-105'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-amber-100'
                            }`}>
                        {val.title}
                    </button>
                ))}
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-6 text-sm">
                <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-bold">
                    <Zap size={16} /> 翻牌次数: {moves}
                </span>
                <span className="flex items-center gap-1 text-green-600 dark:text-green-400 font-bold">
                    <Trophy size={16} /> 已配对: {matched.length / 2} / {cards.length / 2}
                </span>
            </div>

            {/* Game Board */}
            {gameWon ? (
                <div className="text-center py-10 space-y-4">
                    <div className="text-6xl animate-bounce">🎉</div>
                    <h4 className="text-2xl font-black text-amber-600">全部配对成功！</h4>
                    <p className="text-slate-500 dark:text-slate-400">只用了 <strong>{moves}</strong> 次翻牌！{moves <= cards.length / 2 + 2 ? '🏆 太厉害了！' : moves <= cards.length ? '👍 不错哦！' : '💪 再来一次更快！'}</p>
                    <button onClick={() => initGame(currentSet)} className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl">
                        <RotateCcw size={16} className="inline mr-2" /> 再来一局
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {cards.map(card => {
                        const isFlipped = flipped.includes(card.id);
                        const isMatched = matched.includes(card.id);
                        return (
                            <button key={card.id} onClick={() => handleFlip(card.id)}
                                className={`relative h-20 md:h-24 rounded-xl font-bold transition-all duration-300 border-2 ${isMatched ? 'bg-green-50 dark:bg-green-900/20 border-green-400 scale-95 opacity-70'
                                        : isFlipped ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-400 shadow-lg scale-105'
                                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-600 hover:border-amber-300 hover:shadow-md cursor-pointer'
                                    }`}>
                                {isFlipped || isMatched ? (
                                    <span className={`text-sm md:text-base px-1 ${card.type === 'en' ? 'text-blue-600 dark:text-blue-400' : 'text-amber-700 dark:text-amber-300'}`}>
                                        {card.text}
                                    </span>
                                ) : (
                                    <span className="text-2xl">❓</span>
                                )}
                            </button>
                        );
                    })}
                </div>
            )}

            {/* Reset */}
            {!gameWon && (
                <div className="text-center">
                    <button onClick={() => initGame(currentSet)} className="px-4 py-2 text-sm text-slate-500 hover:text-amber-600 transition-colors">
                        <RotateCcw size={14} className="inline mr-1" /> 重新开始
                    </button>
                </div>
            )}
        </div>
    );
};

export default WordMatchGame;

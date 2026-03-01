import React, { useState, useEffect, useCallback } from 'react';
import { Sparkles, RotateCcw, Trophy, CheckCircle2, XCircle } from 'lucide-react';

const categorySets = {
    countable: {
        title: '🍎 可数 vs 不可数名词',
        categories: [
            { id: 'countable', label: '🍎 可数名词', color: 'blue', desc: '能用 a/an 或数字的' },
            { id: 'uncountable', label: '💧 不可数名词', color: 'amber', desc: '不能直接数的' },
        ],
        words: [
            { text: 'apple 苹果', category: 'countable' }, { text: 'water 水', category: 'uncountable' },
            { text: 'book 书', category: 'countable' }, { text: 'milk 牛奶', category: 'uncountable' },
            { text: 'dog 狗', category: 'countable' }, { text: 'bread 面包', category: 'uncountable' },
            { text: 'egg 鸡蛋', category: 'countable' }, { text: 'rice 米饭', category: 'uncountable' },
            { text: 'pencil 铅笔', category: 'countable' }, { text: 'money 钱', category: 'uncountable' },
            { text: 'chair 椅子', category: 'countable' }, { text: 'juice 果汁', category: 'uncountable' },
        ]
    },
    manyMuch: {
        title: '⚖️ many vs much',
        categories: [
            { id: 'many', label: '📦 用 many', color: 'blue', desc: '搭配可数名词复数' },
            { id: 'much', label: '💧 用 much', color: 'amber', desc: '搭配不可数名词' },
        ],
        words: [
            { text: 'books 书', category: 'many' }, { text: 'water 水', category: 'much' },
            { text: 'apples 苹果', category: 'many' }, { text: 'money 钱', category: 'much' },
            { text: 'friends 朋友', category: 'many' }, { text: 'milk 牛奶', category: 'much' },
            { text: 'students 学生', category: 'many' }, { text: 'time 时间', category: 'much' },
            { text: 'dogs 狗', category: 'many' }, { text: 'homework 作业', category: 'much' },
            { text: 'toys 玩具', category: 'many' }, { text: 'food 食物', category: 'much' },
        ]
    },
    someAny: {
        title: '🔄 some vs any',
        categories: [
            { id: 'some', label: '✅ 用 some', color: 'green', desc: '肯定句中' },
            { id: 'any', label: '❓ 用 any', color: 'rose', desc: '否定句和疑问句中' },
        ],
        words: [
            { text: 'I have ___ books.', category: 'some' },
            { text: "I don't have ___ milk.", category: 'any' },
            { text: 'She has ___ friends.', category: 'some' },
            { text: 'Do you have ___ questions?', category: 'any' },
            { text: 'There are ___ apples.', category: 'some' },
            { text: "He doesn't need ___ help.", category: 'any' },
            { text: 'We need ___ water.', category: 'some' },
            { text: 'Is there ___ juice left?', category: 'any' },
            { text: 'I want ___ tea, please.', category: 'some' },
            { text: "They don't have ___ money.", category: 'any' },
        ]
    }
};

const WordSortGame = ({ categorySet = 'countable' }) => {
    const [currentSetKey, setCurrentSetKey] = useState(categorySet);
    const [words, setWords] = useState([]);
    const [currentWordIdx, setCurrentWordIdx] = useState(0);
    const [score, setScore] = useState(0);
    const [total, setTotal] = useState(0);
    const [feedback, setFeedback] = useState(null); // { correct: bool, word, chosen, expected }
    const [gameOver, setGameOver] = useState(false);

    const currentSet = categorySets[currentSetKey] || categorySets.countable;

    const initGame = useCallback((setName) => {
        const data = categorySets[setName] || categorySets.countable;
        const shuffled = [...data.words];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setWords(shuffled);
        setCurrentWordIdx(0);
        setScore(0);
        setTotal(0);
        setFeedback(null);
        setGameOver(false);
    }, []);

    useEffect(() => { initGame(currentSetKey); }, [currentSetKey, initGame]);

    const handleSort = (chosenCategory) => {
        const word = words[currentWordIdx];
        const correct = word.category === chosenCategory;
        setTotal(t => t + 1);
        if (correct) setScore(s => s + 1);

        const expectedCat = currentSet.categories.find(c => c.id === word.category);
        setFeedback({ correct, word: word.text, expected: expectedCat.label });

        setTimeout(() => {
            setFeedback(null);
            if (currentWordIdx < words.length - 1) {
                setCurrentWordIdx(i => i + 1);
            } else {
                setGameOver(true);
            }
        }, 1200);
    };

    const switchSet = (key) => {
        setCurrentSetKey(key);
    };

    return (
        <div className="space-y-6">
            <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-2">
                    <Sparkles className="text-amber-500" /> 🏠 单词分类小屋
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">把每个单词放进正确的小屋里！</p>
            </div>

            {/* Set Selector */}
            <div className="flex flex-wrap gap-2 justify-center">
                {Object.entries(categorySets).map(([key, val]) => (
                    <button key={key} onClick={() => switchSet(key)}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${currentSetKey === key
                            ? 'bg-amber-500 text-white shadow-md'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-amber-100'
                            }`}>
                        {val.title}
                    </button>
                ))}
            </div>

            {/* Progress */}
            <div className="flex justify-center gap-6 text-sm">
                <span className="text-amber-600 dark:text-amber-400 font-bold">
                    进度: {currentWordIdx + (gameOver ? 1 : 0)} / {words.length}
                </span>
                <span className="text-green-600 dark:text-green-400 font-bold">
                    <Trophy size={14} className="inline mr-1" />正确: {score} / {total}
                </span>
            </div>

            {gameOver ? (
                <div className="text-center py-10 space-y-4">
                    <div className="text-6xl">{score === words.length ? '🏆' : score >= words.length * 0.7 ? '🎉' : '💪'}</div>
                    <h4 className="text-2xl font-black text-amber-600">分类完毕！</h4>
                    <p className="text-slate-500 dark:text-slate-400">你答对了 <strong>{score}</strong> / {words.length} 个！{score === words.length ? ' 满分太厉害了！' : score >= words.length * 0.7 ? ' 很不错！' : ' 再多练习一下吧！'}</p>
                    <button onClick={() => initGame(currentSetKey)} className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold transition-all shadow-lg">
                        <RotateCcw size={16} className="inline mr-2" /> 再来一次
                    </button>
                </div>
            ) : (
                <>
                    {/* Current Word Card */}
                    <div className="text-center">
                        <div className={`inline-block px-8 py-5 rounded-2xl border-2 ${feedback === null ? 'bg-white dark:bg-slate-800 border-amber-300'
                                : feedback.correct ? 'bg-green-50 border-green-400 dark:bg-green-900/20'
                                    : 'bg-red-50 border-red-400 dark:bg-red-900/20'
                            } shadow-lg transition-all`}>
                            <div className="text-2xl font-black text-slate-800 dark:text-white">
                                {words[currentWordIdx]?.text}
                            </div>
                            {feedback && (
                                <div className={`mt-2 text-sm font-bold flex items-center justify-center gap-1 ${feedback.correct ? 'text-green-600' : 'text-red-600'}`}>
                                    {feedback.correct ? <><CheckCircle2 size={16} /> 正确！</> : <><XCircle size={16} /> 应该放入 {feedback.expected}</>}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Category Houses */}
                    <div className={`grid grid-cols-${currentSet.categories.length} gap-4`}>
                        {currentSet.categories.map(cat => (
                            <button key={cat.id} onClick={() => !feedback && handleSort(cat.id)}
                                disabled={feedback !== null}
                                className={`p-6 rounded-2xl border-2 transition-all text-center ${feedback !== null ? 'opacity-60 cursor-default' : 'hover:shadow-lg hover:scale-[1.02] cursor-pointer'
                                    } border-${cat.color}-300 dark:border-${cat.color}-700 bg-${cat.color}-50 dark:bg-${cat.color}-900/20`}>
                                <div className="text-3xl mb-2">🏠</div>
                                <div className={`font-bold text-${cat.color}-700 dark:text-${cat.color}-300 text-lg`}>{cat.label}</div>
                                <div className="text-xs text-slate-400 mt-1">{cat.desc}</div>
                            </button>
                        ))}
                    </div>
                </>
            )}

            {/* Tip */}
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-2xl border border-amber-200 dark:border-amber-800/50 text-sm text-amber-700 dark:text-amber-300">
                <strong>💡 记口诀：</strong>
                {currentSetKey === 'countable' && '能一个个数的就是可数名词（如 apple → apples）。液体、材料、抽象概念是不可数名词（如 water, money）。'}
                {currentSetKey === 'manyMuch' && '可数名词复数用 many（many books），不可数名词用 much（much water）。都能用 a lot of！'}
                {currentSetKey === 'someAny' && 'some 用于肯定句（I have some...），any 用于否定句和疑问句（I don\'t have any... / Do you have any...?）。'}
            </div>
        </div>
    );
};

export default WordSortGame;

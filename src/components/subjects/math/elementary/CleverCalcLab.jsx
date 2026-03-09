import React, { useState, useCallback, useEffect } from 'react';
import { Sparkles, RotateCcw, Trophy, Zap, Target, CheckCircle2 } from 'lucide-react';

/**
 * CleverCalcLab - 巧算加减法互动实验
 * 凑十配对游戏：学生点击两个能凑成10的数字配对
 */

const LEVELS = [
    {
        title: '🌟 第1关：找好朋友凑10',
        desc: '点击两个能凑成 10 的数字！',
        numbers: [3, 7, 8, 2, 6, 4, 9, 1, 5, 5],
        target: 10,
    },
    {
        title: '🔥 第2关：凑整大作战',
        desc: '这次数字更多啦！找出所有能凑成 10 的好朋友！',
        numbers: [1, 9, 4, 6, 3, 7, 2, 8, 5, 5, 6, 4],
        target: 10,
    },
    {
        title: '🏆 第3关：挑战凑20',
        desc: '升级啦！找出两个加起来刚好是 20 的数字！',
        numbers: [12, 8, 15, 5, 3, 17, 11, 9, 14, 6],
        target: 20,
    },
];

const CleverCalcLab = () => {
    const [level, setLevel] = useState(0);
    const [selected, setSelected] = useState(null); // index of first selected
    const [matched, setMatched] = useState([]); // indices of matched pairs
    const [score, setScore] = useState(0);
    const [shake, setShake] = useState(null);
    const [celebration, setCelebration] = useState(false);
    const [showHint, setShowHint] = useState(false);

    const currentLevel = LEVELS[level];
    const numbers = currentLevel.numbers;

    const allPairsFound = useCallback(() => {
        // Check if there are any remaining valid pairs
        const remaining = numbers.filter((_, i) => !matched.includes(i));
        for (let i = 0; i < remaining.length; i++) {
            for (let j = i + 1; j < remaining.length; j++) {
                if (remaining[i] + remaining[j] === currentLevel.target) return false;
            }
        }
        return true;
    }, [matched, numbers, currentLevel.target]);

    useEffect(() => {
        if (matched.length > 0 && allPairsFound()) {
            setCelebration(true);
            setTimeout(() => setCelebration(false), 2000);
        }
    }, [matched, allPairsFound]);

    const handleClick = (index) => {
        if (matched.includes(index)) return;

        if (selected === null) {
            setSelected(index);
        } else if (selected === index) {
            setSelected(null);
        } else {
            const sum = numbers[selected] + numbers[index];
            if (sum === currentLevel.target) {
                // Match!
                setMatched(prev => [...prev, selected, index]);
                setScore(prev => prev + 10);
                setSelected(null);
            } else {
                // Wrong pair
                setShake(index);
                setTimeout(() => {
                    setShake(null);
                    setSelected(null);
                }, 500);
            }
        }
    };

    const nextLevel = () => {
        if (level < LEVELS.length - 1) {
            setLevel(prev => prev + 1);
            setSelected(null);
            setMatched([]);
            setCelebration(false);
            setShowHint(false);
        }
    };

    const reset = () => {
        setSelected(null);
        setMatched([]);
        setScore(0);
        setLevel(0);
        setCelebration(false);
        setShowHint(false);
    };

    // Find one valid hint pair
    const getHint = () => {
        for (let i = 0; i < numbers.length; i++) {
            if (matched.includes(i)) continue;
            for (let j = i + 1; j < numbers.length; j++) {
                if (matched.includes(j)) continue;
                if (numbers[i] + numbers[j] === currentLevel.target) {
                    return [i, j];
                }
            }
        }
        return null;
    };

    const hintPair = showHint ? getHint() : null;

    return (
        <div className="space-y-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-3">
                    <Zap className="text-yellow-500 w-8 h-8" /> 凑整好朋友配对
                </h3>
                <p className="text-slate-500 dark:text-slate-400">找出加起来等于目标数的好朋友！</p>
            </div>

            {/* Level Info */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-5 rounded-2xl border border-purple-100 dark:border-purple-800">
                <div className="flex justify-between items-center flex-wrap gap-3">
                    <div>
                        <h4 className="font-bold text-purple-800 dark:text-purple-300 text-lg">{currentLevel.title}</h4>
                        <p className="text-sm text-purple-600 dark:text-purple-400">{currentLevel.desc}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-white dark:bg-slate-700 px-4 py-2 rounded-full shadow-sm text-sm font-bold text-indigo-600">
                            🎯 目标：凑 {currentLevel.target}
                        </div>
                        <div className="bg-yellow-100 dark:bg-yellow-900/30 px-4 py-2 rounded-full shadow-sm text-sm font-bold text-yellow-700 dark:text-yellow-300">
                            ⭐ {score} 分
                        </div>
                    </div>
                </div>
            </div>

            {/* Number Grid */}
            <div className="grid grid-cols-5 md:grid-cols-6 gap-3 max-w-lg mx-auto">
                {numbers.map((num, i) => {
                    const isMatched = matched.includes(i);
                    const isSelected = selected === i;
                    const isShaking = shake === i;
                    const isHinted = hintPair && (hintPair[0] === i || hintPair[1] === i);

                    return (
                        <button
                            key={i}
                            onClick={() => handleClick(i)}
                            disabled={isMatched}
                            className={`
                                w-16 h-16 rounded-2xl text-2xl font-bold transition-all duration-300 border-2
                                ${isMatched
                                    ? 'bg-green-100 dark:bg-green-900/30 border-green-300 text-green-400 scale-75 opacity-50'
                                    : isSelected
                                        ? 'bg-indigo-500 text-white border-indigo-600 scale-110 shadow-lg shadow-indigo-200'
                                        : isHinted
                                            ? 'bg-yellow-100 dark:bg-yellow-900/30 border-yellow-400 text-yellow-700 animate-pulse'
                                            : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-800 dark:text-white hover:border-indigo-300 hover:shadow-md hover:scale-105'
                                }
                                ${isShaking ? 'animate-shake bg-red-100 border-red-400 text-red-600' : ''}
                            `}
                        >
                            {isMatched ? <CheckCircle2 className="w-6 h-6 mx-auto text-green-500" /> : num}
                        </button>
                    );
                })}
            </div>

            {/* Celebration */}
            {celebration && (
                <div className="text-center py-6 animate-bounce">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg">
                        <Trophy className="w-8 h-8" /> 太棒啦！全部配对完成！
                    </div>
                    {level < LEVELS.length - 1 && (
                        <button
                            onClick={nextLevel}
                            className="mt-4 block mx-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-bold transition-colors"
                        >
                            挑战下一关 →
                        </button>
                    )}
                </div>
            )}

            {/* Controls */}
            <div className="flex justify-center gap-4">
                <button
                    onClick={() => setShowHint(!showHint)}
                    className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 hover:bg-amber-100 transition-colors"
                >
                    <Sparkles className="w-4 h-4" /> {showHint ? '关闭提示' : '给我提示'}
                </button>
                <button
                    onClick={reset}
                    className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors"
                >
                    <RotateCcw className="w-4 h-4" /> 重新开始
                </button>
            </div>

            {/* Tip */}
            <div className="flex items-start gap-2 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                <Target className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <p className="text-xs text-blue-800 dark:text-blue-300 leading-relaxed">
                    <strong>巧算秘籍：</strong>遇到一长串加法，先找能凑成整十数的「好朋友」配对！比如 3+7=10、4+6=10。好朋友先牵手，算起来就快多啦！
                </p>
            </div>

            <style>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-6px); }
                    75% { transform: translateX(6px); }
                }
                .animate-shake { animation: shake 0.3s ease-in-out 2; }
            `}</style>
        </div>
    );
};

export default CleverCalcLab;

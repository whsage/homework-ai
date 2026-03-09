import React, { useState } from 'react';
import { Search, RotateCcw, Trophy, HelpCircle, CheckCircle2, XCircle, ListOrdered } from 'lucide-react';

/**
 * EnumerationLab - 简单枚举（填数游戏）互动实验
 * 密码宝箱：学生找出满足等式的所有数字组合
 */

const PUZZLES = [
    {
        title: '🔐 密码宝箱1',
        desc: '□ + □ = 8（填 1~7，两个数不同）',
        target: 8,
        range: [1, 7],
        allowSame: false,
        ordered: false, // 1+7 and 7+1 are different
    },
    {
        title: '🔐 密码宝箱2',
        desc: '□ + □ = 10（填 1~9，两个数不同）',
        target: 10,
        range: [1, 9],
        allowSame: false,
        ordered: false,
    },
    {
        title: '🔐 密码宝箱3',
        desc: '□ + □ = 12（填 1~11，两个数不同）',
        target: 12,
        range: [1, 11],
        allowSame: false,
        ordered: false,
    },
];

const EnumerationLab = () => {
    const [puzzleIdx, setPuzzleIdx] = useState(0);
    const [numA, setNumA] = useState('');
    const [numB, setNumB] = useState('');
    const [found, setFound] = useState([]); // array of [a,b] pairs
    const [feedback, setFeedback] = useState(null); // 'correct' | 'duplicate' | 'wrong' | 'same'
    const [showAnswer, setShowAnswer] = useState(false);

    const puzzle = PUZZLES[puzzleIdx];

    // Generate all valid answers
    const getAllAnswers = () => {
        const answers = [];
        for (let a = puzzle.range[0]; a <= puzzle.range[1]; a++) {
            for (let b = puzzle.range[0]; b <= puzzle.range[1]; b++) {
                if (!puzzle.allowSame && a === b) continue;
                if (a + b === puzzle.target) {
                    answers.push([a, b]);
                }
            }
        }
        return answers;
    };

    const allAnswers = getAllAnswers();

    const handleSubmit = () => {
        const a = parseInt(numA);
        const b = parseInt(numB);

        if (isNaN(a) || isNaN(b)) return;

        if (!puzzle.allowSame && a === b) {
            setFeedback('same');
            setTimeout(() => setFeedback(null), 1500);
            return;
        }

        if (a + b !== puzzle.target) {
            setFeedback('wrong');
            setTimeout(() => setFeedback(null), 1500);
            return;
        }

        // Check duplicate
        const isDuplicate = found.some(([fa, fb]) => fa === a && fb === b);
        if (isDuplicate) {
            setFeedback('duplicate');
            setTimeout(() => setFeedback(null), 1500);
            return;
        }

        setFeedback('correct');
        setFound(prev => [...prev, [a, b]]);
        setNumA('');
        setNumB('');
        setTimeout(() => setFeedback(null), 1000);
    };

    const reset = () => {
        setNumA('');
        setNumB('');
        setFound([]);
        setFeedback(null);
        setShowAnswer(false);
    };

    const nextPuzzle = () => {
        if (puzzleIdx < PUZZLES.length - 1) {
            setPuzzleIdx(prev => prev + 1);
            reset();
        }
    };

    const isComplete = found.length === allAnswers.length;

    return (
        <div className="space-y-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-3">
                    <Search className="text-purple-500 w-8 h-8" /> 侦探密码宝箱
                </h3>
                <p className="text-slate-500 dark:text-slate-400">按顺序找出所有的密码组合，一个都不能漏！</p>
            </div>

            {/* Puzzle Info */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-2xl border border-purple-100 dark:border-purple-800">
                <h4 className="font-bold text-purple-800 dark:text-purple-300 text-lg mb-2">{puzzle.title}</h4>
                <p className="text-3xl font-mono text-center py-4 text-slate-800 dark:text-white font-bold tracking-wider">
                    {puzzle.desc}
                </p>
                <div className="flex justify-center gap-4 text-sm">
                    <span className="bg-white dark:bg-slate-700 px-3 py-1 rounded-full text-indigo-600 font-bold">
                        已找到：{found.length} / {allAnswers.length}
                    </span>
                </div>
            </div>

            {/* Input Area */}
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-3 text-2xl font-mono">
                    <input
                        type="number"
                        min={puzzle.range[0]}
                        max={puzzle.range[1]}
                        value={numA}
                        onChange={e => setNumA(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                        className="w-16 h-16 text-center text-2xl font-bold rounded-xl border-2 border-indigo-200 dark:border-indigo-800 focus:border-indigo-500 outline-none bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                        placeholder="?"
                    />
                    <span className="text-slate-400 font-bold">+</span>
                    <input
                        type="number"
                        min={puzzle.range[0]}
                        max={puzzle.range[1]}
                        value={numB}
                        onChange={e => setNumB(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                        className="w-16 h-16 text-center text-2xl font-bold rounded-xl border-2 border-indigo-200 dark:border-indigo-800 focus:border-indigo-500 outline-none bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                        placeholder="?"
                    />
                    <span className="text-slate-400 font-bold">= {puzzle.target}</span>
                    <button
                        onClick={handleSubmit}
                        className="ml-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-md"
                    >
                        提交
                    </button>
                </div>

                {/* Feedback */}
                {feedback && (
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold animate-bounce ${feedback === 'correct' ? 'bg-green-100 text-green-700' :
                            feedback === 'duplicate' ? 'bg-yellow-100 text-yellow-700' :
                                feedback === 'same' ? 'bg-orange-100 text-orange-700' :
                                    'bg-red-100 text-red-700'
                        }`}>
                        {feedback === 'correct' && <><CheckCircle2 className="w-4 h-4" /> 找到一个！太棒了！</>}
                        {feedback === 'duplicate' && <><XCircle className="w-4 h-4" /> 这个已经找到过啦！</>}
                        {feedback === 'same' && <><XCircle className="w-4 h-4" /> 两个数不能相同哦！</>}
                        {feedback === 'wrong' && <><XCircle className="w-4 h-4" /> 加起来不等于 {puzzle.target}，再试试！</>}
                    </div>
                )}
            </div>

            {/* Found Pairs */}
            {found.length > 0 && (
                <div className="space-y-3">
                    <h4 className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                        <ListOrdered className="w-4 h-4" /> 已找到的密码组合
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {found.map(([a, b], i) => (
                            <div key={i} className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 px-4 py-2 rounded-full text-sm font-mono font-bold text-green-700 dark:text-green-300">
                                {a} + {b} = {puzzle.target}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Complete! */}
            {isComplete && (
                <div className="text-center py-4">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg animate-bounce">
                        <Trophy className="w-7 h-7" /> 全部找到！一个不漏！
                    </div>
                    {puzzleIdx < PUZZLES.length - 1 && (
                        <button
                            onClick={nextPuzzle}
                            className="mt-4 block mx-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-bold transition-colors"
                        >
                            挑战下一个宝箱 →
                        </button>
                    )}
                </div>
            )}

            {/* Controls */}
            <div className="flex justify-center gap-4">
                <button
                    onClick={() => setShowAnswer(!showAnswer)}
                    className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 hover:bg-amber-100 transition-colors"
                >
                    <HelpCircle className="w-4 h-4" /> {showAnswer ? '隐藏答案' : '看看全部答案'}
                </button>
                <button
                    onClick={reset}
                    className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors"
                >
                    <RotateCcw className="w-4 h-4" /> 重来
                </button>
            </div>

            {/* Show All Answers */}
            {showAnswer && (
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                    <p className="text-sm font-bold text-slate-500 mb-3">📋 有序列举（从小到大排队找）：</p>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                        {allAnswers.map(([a, b], i) => {
                            const isFound = found.some(([fa, fb]) => fa === a && fb === b);
                            return (
                                <div key={i} className={`text-center text-sm font-mono py-2 px-3 rounded-lg border ${isFound
                                        ? 'bg-green-50 dark:bg-green-900/20 border-green-300 text-green-700'
                                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'
                                    }`}>
                                    {a} + {b} = {puzzle.target} {isFound ? '✅' : '❓'}
                                </div>
                            );
                        })}
                    </div>
                    <p className="text-xs text-slate-400 mt-3">💡 记住：从小到大排好队找，就不会漏掉！共 {allAnswers.length} 种。</p>
                </div>
            )}

            {/* Tip */}
            <div className="flex items-start gap-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl">
                <HelpCircle className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                <p className="text-xs text-purple-800 dark:text-purple-300 leading-relaxed">
                    <strong>侦探秘籍：</strong>排好队按顺序找！从最小的数字开始，每次增加1。这样就像排队点名一样，绝对不会漏掉，也不会重复！
                </p>
            </div>
        </div>
    );
};

export default EnumerationLab;

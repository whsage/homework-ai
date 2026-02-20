import React, { useState, useCallback } from 'react';
import { MousePointer2, RotateCcw, Lightbulb, Trophy, ArrowRight } from 'lucide-react';

/**
 * MatchstickLab Component
 * - Interactive matchstick manipulator (7-segment style)
 * - Puzzle mode: "Move one matchstick to fix the equation"
 */

const SEGMENT_MAP = {
    'a': [5, 2, 70, 6],   // top
    'b': [75, 5, 6, 70],  // right top
    'c': [75, 80, 6, 70], // right bottom
    'd': [5, 147, 70, 6], // bottom
    'e': [2, 80, 6, 70],  // left bottom
    'f': [2, 5, 6, 70],   // left top
    'g': [5, 75, 70, 6],  // middle
};

const DIGITS = {
    '0': ['a', 'b', 'c', 'd', 'e', 'f'],
    '1': ['b', 'c'],
    '2': ['a', 'b', 'g', 'e', 'd'],
    '3': ['a', 'b', 'g', 'c', 'd'],
    '4': ['f', 'g', 'b', 'c'],
    '5': ['a', 'f', 'g', 'c', 'd'],
    '6': ['a', 'f', 'g', 'e', 'c', 'd'],
    '7': ['a', 'b', 'c'],
    '8': ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    '9': ['a', 'b', 'c', 'd', 'f', 'g'],
};

const MatchstickDigit = ({ activeSegments, onToggle, interactive = false }) => {
    return (
        <svg viewBox="0 0 84 155" className="w-16 h-28 md:w-20 md:h-36">
            {Object.entries(SEGMENT_MAP).map(([id, [x, y, w, h]]) => {
                const isActive = activeSegments.includes(id);
                return (
                    <rect
                        key={id}
                        x={x} y={y} width={w} height={h}
                        rx={w > h ? h / 2 : w / 2}
                        className={`transition-all duration-300 cursor-pointer ${isActive
                                ? 'fill-amber-500 stroke-amber-600 drop-shadow-sm'
                                : 'fill-slate-200 dark:fill-slate-700 opacity-30 hover:opacity-50'
                            }`}
                        onClick={() => interactive && onToggle(id)}
                    />
                );
            })}
        </svg>
    );
};

const MatchstickPuzzle = () => {
    const puzzles = [
        {
            q: "6 + 4 = 4",
            hint: "把 6 左下的一根移到 4 上面变为 9？不对...",
            solution: "把 6 左下的一根 ('e') 移到结果 4 的前面或者变为别的？",
            // 6+4=4 -> 5+4=9
            initial: { n1: '6', op: '+', n2: '4', res: '4' },
            target: { n1: '5', op: '+', n2: '4', res: '9' }
        },
        {
            q: "3 + 5 = 2",
            hint: "把 3 变为 2？",
            solution: "3+5=8",
            initial: { n1: '3', op: '+', n2: '5', res: '2' },
            target: { n1: '3', op: '+', n2: '5', res: '8' }
        }
    ];

    const [puzzleIdx, setPuzzleIdx] = useState(0);
    const [currentSegments, setCurrentSegments] = useState({
        n1: [...DIGITS['6']],
        n2: [...DIGITS['4']],
        res: [...DIGITS['4']]
    });
    const [status, setStatus] = useState('idle'); // idle, win
    const [moves, setMoves] = useState(0);

    const toggleSegment = (part, id) => {
        setCurrentSegments(prev => {
            const list = prev[part];
            const newList = list.includes(id)
                ? list.filter(i => i !== id)
                : [...list, id];
            return { ...prev, [part]: newList };
        });
        setMoves(m => m + 1);
    };

    const checkSolution = () => {
        const p = puzzles[puzzleIdx];
        const isMatch = (seg, dig) => seg.sort().join(',') === DIGITS[dig].sort().join(',');

        if (isMatch(currentSegments.n1, p.target.n1) &&
            isMatch(currentSegments.n2, p.target.n2) &&
            isMatch(currentSegments.res, p.target.res)) {
            setStatus('win');
        } else {
            alert("还没拼对哦，再想想！");
        }
    };

    const resetPuzzle = () => {
        const p = puzzles[puzzleIdx];
        setCurrentSegments({
            n1: [...DIGITS[p.initial.n1]],
            n2: [...DIGITS[p.initial.n2]],
            res: [...DIGITS[p.initial.res]]
        });
        setMoves(0);
        setStatus('idle');
    };

    return (
        <div className="space-y-6">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl text-center">
                <p className="text-indigo-700 dark:text-indigo-300 font-bold text-lg">
                    挑战 {puzzleIdx + 1}: 移动一根火柴，使等式成立！
                </p>
                <p className="text-xl font-mono mt-2">{puzzles[puzzleIdx].q}</p>
            </div>

            <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap py-8 bg-white dark:bg-slate-900 rounded-2xl shadow-inner">
                <MatchstickDigit activeSegments={currentSegments.n1} onToggle={(id) => toggleSegment('n1', id)} interactive />
                <div className="text-4xl font-bold text-slate-400">+</div>
                <MatchstickDigit activeSegments={currentSegments.n2} onToggle={(id) => toggleSegment('n2', id)} interactive />
                <div className="text-4xl font-bold text-slate-400">=</div>
                <MatchstickDigit activeSegments={currentSegments.res} onToggle={(id) => toggleSegment('res', id)} interactive />
            </div>

            <div className="flex flex-col items-center gap-4">
                <div className="text-sm text-slate-500">已改变 {moves} 次</div>
                <div className="flex gap-4">
                    <button onClick={resetPuzzle} className="px-6 py-2 bg-slate-200 dark:bg-slate-700 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-300">
                        <RotateCcw size={18} /> 重置
                    </button>
                    <button onClick={checkSolution} className="px-8 py-2 bg-indigo-600 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition-transform active:scale-95">
                        <Trophy size={18} /> 提交答案
                    </button>
                </div>

                {status === 'win' && (
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 p-6 rounded-2xl text-center animate-bounce">
                        <p className="text-2xl font-bold">🎉 恭喜！你真是天才！</p>
                        <button
                            onClick={() => {
                                const next = (puzzleIdx + 1) % puzzles.length;
                                setPuzzleIdx(next);
                                setStatus('idle');
                                // Force reload of next puzzle segments
                                const p = puzzles[next];
                                setCurrentSegments({
                                    n1: [...DIGITS[p.initial.n1]],
                                    n2: [...DIGITS[p.initial.n2]],
                                    res: [...DIGITS[p.initial.res]]
                                });
                                setMoves(0);
                            }}
                            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg font-bold flex items-center gap-2 mx-auto"
                        >
                            下一关 <ArrowRight size={18} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

const MatchstickLab = () => {
    const [mode, setMode] = useState('free'); // free, puzzle

    return (
        <div className="space-y-6">
            <div className="flex gap-2 bg-slate-100 dark:bg-slate-900/50 p-1.5 rounded-xl">
                <button
                    onClick={() => setMode('free')}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${mode === 'free' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'}`}
                >
                    🪄 自由拼搭
                </button>
                <button
                    onClick={() => setMode('puzzle')}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${mode === 'puzzle' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'}`}
                >
                    🎯 谜题挑战
                </button>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-6 md:p-8 border border-slate-100 dark:border-slate-700">
                {mode === 'free' ? (
                    <div className="space-y-8">
                        <div className="text-center space-y-2">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-3">
                                <MousePointer2 className="text-indigo-500" /> 火柴棒工坊
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400">点击线段，拼出你喜欢的数字或图案！</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-12 py-10">
                            {[0, 1, 2].map(i => {
                                const [active, setActive] = useState([...DIGITS[i]]);
                                return (
                                    <div key={i} className="flex flex-col items-center gap-4">
                                        <MatchstickDigit
                                            activeSegments={active}
                                            interactive
                                            onToggle={(seg) => setActive(prev => prev.includes(seg) ? prev.filter(s => s !== seg) : [...prev, seg])}
                                        />
                                        <div className="flex gap-2">
                                            {Object.keys(DIGITS).map(d => (
                                                <button
                                                    key={d}
                                                    onClick={() => setActive([...DIGITS[d]])}
                                                    className="w-6 h-6 text-xs font-bold rounded bg-slate-100 dark:bg-slate-700 hover:bg-indigo-100 text-slate-500 hover:text-indigo-600"
                                                >
                                                    {d}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-2xl border-l-4 border-amber-400">
                            <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center gap-2">
                                <Lightbulb size={18} /> 数学小知识
                            </h4>
                            <p className="text-sm text-amber-700 dark:text-amber-400">
                                你知道吗？仅仅移动一根火柴，就能让一个错误的算式变得正确！这就是火柴棒数学的魅力。
                            </p>
                        </div>
                    </div>
                ) : (
                    <MatchstickPuzzle />
                )}
            </div>
        </div>
    );
};

export default MatchstickLab;

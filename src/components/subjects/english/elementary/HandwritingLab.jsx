import { useState, useCallback } from 'react';
import { Pencil, RotateCcw, Check, ArrowRight, Star, Eye } from 'lucide-react';

/**
 * HandwritingLab - 字母书写练习
 * 提供四线三格虚拟书写练习，用户点连线画字母
 */

const LETTERS = [
    { upper: 'A', lower: 'a', zone: '上两格', tip: '两笔斜线+一横', group: 'normal' },
    { upper: 'B', lower: 'b', zone: '上两格', tip: '一竖+两个半圆弧', group: 'tall' },
    { upper: 'D', lower: 'd', zone: '上两格', tip: '注意和 b 的方向相反！', group: 'tall' },
    { upper: 'G', lower: 'g', zone: '下两格', tip: 'g 有小尾巴伸到第三格', group: 'tail' },
    { upper: 'P', lower: 'p', zone: '下两格', tip: 'p 尾巴朝下，别和 q 弄混', group: 'tail' },
    { upper: 'Q', lower: 'q', zone: '下两格', tip: 'q 像数字 9 翻转', group: 'tail' },
    { upper: 'Y', lower: 'y', zone: '下两格', tip: 'y 有小尾巴尖尖的', group: 'tail' },
    { upper: 'M', lower: 'm', zone: '中间格', tip: '两个拱门，别和 n 混', group: 'normal' },
    { upper: 'N', lower: 'n', zone: '中间格', tip: '一个拱门', group: 'normal' },
    { upper: 'F', lower: 'f', zone: '上两格', tip: 'f 上面有弯钩', group: 'tall' },
];

const QUIZ_QUESTIONS = [
    { q: '哪组字母都有"尾巴"伸到下面？', opts: ['a, b, c', 'g, p, y', 'd, h, k', 'e, m, n'], ans: 1 },
    { q: '大写字母占四线三格的哪个位置？', opts: ['只占中间', '上两格', '下两格', '三格都占'], ans: 1 },
    { q: 'b 和 d 最容易搞混，它们有什么不同？', opts: ['大小不同', '一个有尾巴', 'b肚子朝右，d肚子朝左', '没有区别'], ans: 2 },
    { q: '这些字母哪个是"上伸字母"？', opts: ['a', 'g', 'h', 'e'], ans: 2 },
    { q: '字母 p 和 q 的区别是什么？', opts: ['p有弯钩', 'p尾巴朝左，q尾巴朝右', '没区别', 'p比q大'], ans: 1 },
];

const HandwritingLab = () => {
    const [mode, setMode] = useState('explore'); // explore | quiz
    const [selectedLetter, setSelectedLetter] = useState(null);
    const [quizIndex, setQuizIndex] = useState(0);
    const [quizAnswer, setQuizAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleQuizAnswer = (idx) => {
        if (quizAnswer !== null) return;
        setQuizAnswer(idx);
        if (idx === QUIZ_QUESTIONS[quizIndex].ans) {
            setScore(s => s + 1);
        }
    };

    const nextQuestion = () => {
        if (quizIndex < QUIZ_QUESTIONS.length - 1) {
            setQuizIndex(i => i + 1);
            setQuizAnswer(null);
        } else {
            setShowResult(true);
        }
    };

    const resetQuiz = () => {
        setQuizIndex(0);
        setQuizAnswer(null);
        setScore(0);
        setShowResult(false);
    };

    // Four-line-three-grid SVG display for a letter
    const FourLineGrid = ({ letter, isUpper }) => (
        <svg viewBox="0 0 80 100" className="w-20 h-24 mx-auto">
            {/* 四条线 */}
            <line x1="5" y1="10" x2="75" y2="10" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="5" y1="35" x2="75" y2="35" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4,2" />
            <line x1="5" y1="60" x2="75" y2="60" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="5" y1="85" x2="75" y2="85" stroke="#cbd5e1" strokeWidth="1" />
            {/* 字母 */}
            <text
                x="40" y={isUpper ? 55 : 58}
                textAnchor="middle"
                fontSize={isUpper ? 44 : 38}
                fontFamily="'Georgia', serif"
                fill="#6366f1"
                fontWeight="bold"
            >
                {letter}
            </text>
        </svg>
    );

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
                    <Pencil className="w-6 h-6 text-amber-600" />
                    ✍️ 字母书写练习
                </h2>
                <div className="flex gap-2">
                    <button
                        onClick={() => setMode('explore')}
                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${mode === 'explore' ? 'bg-amber-500 text-white shadow-lg' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}
                    >
                        <Eye className="w-4 h-4 inline mr-1" />探索
                    </button>
                    <button
                        onClick={() => { setMode('quiz'); resetQuiz(); }}
                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${mode === 'quiz' ? 'bg-indigo-500 text-white shadow-lg' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}
                    >
                        <Star className="w-4 h-4 inline mr-1" />答题
                    </button>
                </div>
            </div>

            {mode === 'explore' && (
                <div className="space-y-6">
                    {/* Letter groups */}
                    <div>
                        <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-3">📋 点击字母查看书写要点</h3>
                        <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                            {LETTERS.map(l => (
                                <button
                                    key={l.upper}
                                    onClick={() => setSelectedLetter(l)}
                                    className={`p-2 rounded-xl text-center transition-all font-bold text-lg ${selectedLetter?.upper === l.upper
                                            ? 'bg-indigo-500 text-white shadow-lg scale-110'
                                            : l.group === 'tail'
                                                ? 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 hover:bg-rose-100 border border-rose-200'
                                                : l.group === 'tall'
                                                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 hover:bg-blue-100 border border-blue-200'
                                                    : 'bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                                        }`}
                                >
                                    {l.upper}{l.lower}
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-4 mt-3 text-xs">
                            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-rose-200"></span> 下伸字母(有尾巴)</span>
                            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-blue-200"></span> 上伸字母(高个子)</span>
                            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-slate-200"></span> 普通字母</span>
                        </div>
                    </div>

                    {/* Selected letter detail */}
                    {selectedLetter && (
                        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-800 animate-in fade-in duration-300">
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="flex gap-4">
                                    <div className="text-center">
                                        <p className="text-xs text-slate-500 mb-1">大写</p>
                                        <FourLineGrid letter={selectedLetter.upper} isUpper={true} />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs text-slate-500 mb-1">小写</p>
                                        <FourLineGrid letter={selectedLetter.lower} isUpper={false} />
                                    </div>
                                </div>
                                <div className="flex-1 space-y-2">
                                    <h4 className="font-bold text-lg text-indigo-800 dark:text-indigo-300">
                                        {selectedLetter.upper}{selectedLetter.lower} 书写要点
                                    </h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        📏 位置：<span className="font-bold text-indigo-600">{selectedLetter.zone}</span>
                                    </p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        💡 要点：<span className="font-bold">{selectedLetter.tip}</span>
                                    </p>
                                    {selectedLetter.group === 'tail' && (
                                        <p className="text-xs bg-rose-100 dark:bg-rose-900/30 text-rose-700 px-3 py-1 rounded-full inline-block">
                                            ⚠️ 这个字母有小尾巴，写的时候要伸到第三格！
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Common confusion pairs */}
                    <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-xl border border-amber-200">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-3">⚠️ 最容易写混的字母对</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {[
                                { pair: 'b ↔ d', tip: 'b肚子→右，d肚子→左', emoji: '🔄' },
                                { pair: 'p ↔ q', tip: 'p和q是b和d的倒影', emoji: '🪞' },
                                { pair: 'm ↔ n', tip: 'm两拱门，n一拱门', emoji: '🚪' },
                                { pair: 'u ↔ n', tip: 'u开口朝上，n开口朝下', emoji: '⬆️' },
                            ].map(item => (
                                <div key={item.pair} className="bg-white dark:bg-slate-700 p-3 rounded-lg text-center">
                                    <span className="text-lg">{item.emoji}</span>
                                    <p className="font-bold text-amber-700 dark:text-amber-300 text-lg">{item.pair}</p>
                                    <p className="text-xs text-slate-500 mt-1">{item.tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {mode === 'quiz' && !showResult && (
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">{quizIndex + 1} / {QUIZ_QUESTIONS.length}</span>
                        <span className="bg-yellow-100 dark:bg-yellow-900/20 px-3 py-1 rounded-full text-sm font-bold text-yellow-700">⭐ {score}</span>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-xl">
                        <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-4">
                            {QUIZ_QUESTIONS[quizIndex].q}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {QUIZ_QUESTIONS[quizIndex].opts.map((opt, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleQuizAnswer(idx)}
                                    className={`p-3 rounded-xl text-left font-medium transition-all ${quizAnswer === null
                                            ? 'bg-white dark:bg-slate-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 border border-slate-200 dark:border-slate-600'
                                            : idx === QUIZ_QUESTIONS[quizIndex].ans
                                                ? 'bg-green-100 dark:bg-green-900/30 border-2 border-green-400 text-green-700'
                                                : idx === quizAnswer
                                                    ? 'bg-red-100 dark:bg-red-900/30 border-2 border-red-400 text-red-700'
                                                    : 'bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 opacity-50'
                                        }`}
                                >
                                    <span className="mr-2 font-bold">{String.fromCharCode(65 + idx)}.</span>
                                    {opt}
                                </button>
                            ))}
                        </div>
                        {quizAnswer !== null && (
                            <div className="mt-4 flex justify-end">
                                <button onClick={nextQuestion} className="px-5 py-2 bg-indigo-500 text-white rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-indigo-600 transition-colors">
                                    {quizIndex < QUIZ_QUESTIONS.length - 1 ? <><ArrowRight className="w-4 h-4" /> 下一题</> : <><Check className="w-4 h-4" /> 看结果</>}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {mode === 'quiz' && showResult && (
                <div className="text-center py-8 space-y-4">
                    <div className="text-6xl">{score >= 4 ? '🎉' : score >= 2 ? '👍' : '💪'}</div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                        {score >= 4 ? '太棒了！' : score >= 2 ? '不错哦！' : '再接再厉！'}
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        答对 <span className="font-bold text-indigo-600">{score}</span> / {QUIZ_QUESTIONS.length} 题
                    </p>
                    <button onClick={resetQuiz} className="px-6 py-3 bg-indigo-500 text-white rounded-xl font-bold flex items-center gap-2 mx-auto hover:bg-indigo-600">
                        <RotateCcw className="w-4 h-4" /> 重新挑战
                    </button>
                </div>
            )}
        </div>
    );
};

export default HandwritingLab;

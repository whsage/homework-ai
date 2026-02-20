import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Clock, RotateCcw, Target, Sparkles, Lightbulb } from 'lucide-react';

const ClockLab = () => {
    const [time, setTime] = useState({ hours: 3, minutes: 0 });
    const [mode, setMode] = useState('explore'); // explore, quiz
    const [quizTarget, setQuizTarget] = useState({ h: 10, m: 30 });
    const [feedback, setFeedback] = useState(null);
    const [score, setScore] = useState(0);

    const svgRef = useRef(null);

    const handleMouseMove = useCallback((e) => {
        if (!svgRef.current || mode === 'quiz' && feedback === 'correct') return;

        // This is a simplified version; real dragging would need mouse down checks
    }, [mode, feedback]);

    const setTimeManually = (h, m) => {
        setTime({ hours: h, minutes: m });
        setFeedback(null);
    };

    const generateQuiz = () => {
        const h = Math.floor(Math.random() * 12) + 1;
        const m = [0, 15, 30, 45][Math.floor(Math.random() * 4)];
        setQuizTarget({ h, m });
        setFeedback(null);
    };

    const checkAnswer = () => {
        const isCorrect = time.hours === quizTarget.h && time.minutes === quizTarget.m;
        setFeedback(isCorrect ? 'correct' : 'wrong');
        if (isCorrect) setScore(s => s + 1);
    };

    const hourDeg = (time.hours % 12) * 30 + (time.minutes / 60) * 30;
    const minDeg = time.minutes * 6;

    return (
        <div className="space-y-6">
            <div className="flex gap-2 bg-slate-100 dark:bg-slate-900/50 p-1.5 rounded-xl">
                <button onClick={() => setMode('explore')} className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${mode === 'explore' ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm' : 'text-slate-500'}`}>
                    ⌚ 自由拨动
                </button>
                <button onClick={() => { setMode('quiz'); generateQuiz(); }} className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${mode === 'quiz' ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm' : 'text-slate-500'}`}>
                    🎯 时钟闯关
                </button>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-6 md:p-10 border border-slate-100 dark:border-slate-700">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Analog Clock */}
                    <div className="relative">
                        <svg ref={svgRef} width="240" height="240" viewBox="0 0 100 100" className="drop-shadow-2xl">
                            {/* Face */}
                            <circle cx="50" cy="50" r="48" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                            {/* Marks */}
                            {[...Array(12)].map((_, i) => (
                                <g key={i} transform={`rotate(${i * 30} 50 50)`}>
                                    <line x1="50" y1="5" x2="50" y2="8" stroke="#cbd5e1" strokeWidth="1" />
                                    <text x="50" y="15" fontSize="6" fontWeight="bold" fill="#64748b" textAnchor="middle" transform={`rotate(${-i * 30} 50 15)`}>
                                        {i === 0 ? 12 : i}
                                    </text>
                                </g>
                            ))}
                            {/* Hour Hand */}
                            <line x1="50" y1="50" x2="50" y2="30" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" transform={`rotate(${hourDeg} 50 50)`} />
                            {/* Minute Hand */}
                            <line x1="50" y1="50" x2="50" y2="20" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" transform={`rotate(${minDeg} 50 50)`} />
                            {/* Center Pin */}
                            <circle cx="50" cy="50" r="2" fill="#6366f1" />
                        </svg>
                    </div>

                    {/* Controls */}
                    <div className="flex-1 space-y-6 w-full">
                        {mode === 'explore' ? (
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                                    <Sparkles className="text-amber-500" /> 时间魔术师
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl border-l-4 border-indigo-500">
                                        <p className="text-xs font-bold text-indigo-600 mb-1">当前小时</p>
                                        <div className="flex items-center gap-3">
                                            <button onClick={() => setTime(prev => ({ ...prev, hours: prev.hours === 1 ? 12 : prev.hours - 1 }))} className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">-</button>
                                            <span className="font-mono text-xl font-bold">{time.hours}</span>
                                            <button onClick={() => setTime(prev => ({ ...prev, hours: prev.hours === 12 ? 1 : prev.hours + 1 }))} className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">+</button>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-2xl border-l-4 border-blue-500">
                                        <p className="text-xs font-bold text-blue-600 mb-1">当前分钟</p>
                                        <div className="flex items-center gap-3">
                                            <button onClick={() => setTime(prev => ({ ...prev, minutes: prev.minutes === 0 ? 55 : prev.minutes - 5 }))} className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">-</button>
                                            <span className="font-mono text-xl font-bold">{time.minutes.toString().padStart(2, '0')}</span>
                                            <button onClick={() => setTime(prev => ({ ...prev, minutes: prev.minutes === 55 ? 0 : prev.minutes + 5 }))} className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-slate-100 dark:bg-slate-700/30 p-4 rounded-2xl text-center">
                                    <p className="text-sm text-slate-500 dark:text-slate-400">数字时间显示</p>
                                    <p className="text-3xl font-mono font-black text-slate-800 dark:text-white">
                                        {time.hours}:{time.minutes.toString().padStart(2, '0')}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-2xl text-white shadow-lg">
                                    <p className="text-indigo-100 text-sm font-bold flex items-center gap-2 mb-1">
                                        <Target size={16} /> 挑战任务
                                    </p>
                                    <p className="text-2xl font-bold">请通过按钮调出：</p>
                                    <p className="text-4xl font-black mt-2 tracking-widest bg-white/20 rounded-xl py-2 text-center">
                                        {quizTarget.h}:{quizTarget.m.toString().padStart(2, '0')}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4">
                                    {!feedback ? (
                                        <button onClick={checkAnswer} className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg shadow-lg transition-transform active:scale-95">
                                            我调好了！
                                        </button>
                                    ) : feedback === 'correct' ? (
                                        <div className="space-y-4">
                                            <div className="bg-green-100 text-green-700 p-4 rounded-2xl font-bold text-center animate-bounce">
                                                🎉 太棒了，完全正确！
                                            </div>
                                            <button onClick={generateQuiz} className="w-full py-4 bg-slate-800 text-white rounded-2xl font-bold hover:bg-slate-900 flex items-center justify-center gap-2">
                                                下一题 <ArrowRight size={20} />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            <div className="bg-rose-100 text-rose-700 p-4 rounded-2xl font-bold text-center">
                                                再检查一下时针和分针哦~
                                            </div>
                                            <button onClick={() => setFeedback(null)} className="w-full py-4 bg-slate-200 text-slate-700 rounded-2xl font-bold">
                                                继续修改
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-8 bg-amber-50 dark:bg-amber-900/20 p-5 rounded-2xl border-l-4 border-amber-400">
                    <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                        <Lightbulb size={18} /> 时间小帮手
                    </h4>
                    <ul className="text-sm text-amber-700 dark:text-amber-400 space-y-1">
                        <li>• <b>时针</b>：短而粗，走一格代表1小时。</li>
                        <li>• <b>分针</b>：长而细，走一格代表1分钟。</li>
                        <li>• <b>规律</b>：分针转一圈（60分钟），时针走一大格。</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const ArrowRight = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
);

export default ClockLab;

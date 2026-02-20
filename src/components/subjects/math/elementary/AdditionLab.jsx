import React, { useState, useEffect } from 'react';
import { Heart, Star, CheckCircle2, RotateCcw, Plus, Equal, Sparkles } from 'lucide-react';

const AppleIcon = ({ color = "text-red-500", size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={color}>
        <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
        <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
);

const VisualAddition = () => {
    const [num1, setNum1] = useState(5);
    const [num2, setNum2] = useState(3);

    return (
        <div className="space-y-8">
            <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">魔法果园的加法计算器</h3>
                <p className="text-slate-500 dark:text-slate-400">点击按钮改变苹果的数量吧！</p>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center gap-6">
                <div className="flex flex-col items-center gap-3">
                    <div className="flex bg-rose-100 dark:bg-rose-900/30 rounded-lg p-1">
                        <button onClick={() => setNum1(Math.max(1, num1 - 1))} className="px-3 py-1 text-rose-600 font-bold hover:bg-white rounded">-</button>
                        <span className="px-4 py-1 font-bold text-rose-600">{num1}</span>
                        <button onClick={() => setNum1(Math.min(10, num1 + 1))} className="px-3 py-1 text-rose-600 font-bold hover:bg-white rounded">+</button>
                    </div>
                </div>
                <div className="font-bold text-3xl text-slate-300"><Plus /></div>
                <div className="flex flex-col items-center gap-3">
                    <div className="flex bg-green-100 dark:bg-green-900/30 rounded-lg p-1">
                        <button onClick={() => setNum2(Math.max(1, num2 - 1))} className="px-3 py-1 text-green-600 font-bold hover:bg-white rounded">-</button>
                        <span className="px-4 py-1 font-bold text-green-600">{num2}</span>
                        <button onClick={() => setNum2(Math.min(10, num2 + 1))} className="px-3 py-1 text-green-600 font-bold hover:bg-white rounded">+</button>
                    </div>
                </div>
                <div className="font-bold text-3xl text-slate-300"><Equal /></div>
                <div className="flex flex-col items-center">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 px-6 py-2 rounded-lg text-2xl font-black text-indigo-600">
                        {num1 + num2}
                    </div>
                </div>
            </div>

            {/* Visuals */}
            <div className="flex justify-center items-center gap-4 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl min-h-[160px]">
                <div className="flex flex-wrap gap-2 w-[200px] justify-center">
                    {Array.from({ length: num1 }).map((_, i) => (
                        <div key={`n1-${i}`} className="animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
                            <AppleIcon color="text-rose-500" size={32} />
                        </div>
                    ))}
                </div>
                <Plus className="text-slate-300 shrink-0" size={32} />
                <div className="flex flex-wrap gap-2 w-[200px] justify-center">
                    {Array.from({ length: num2 }).map((_, i) => (
                        <div key={`n2-${i}`} className="animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
                            <AppleIcon color="text-green-500" size={32} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Encouragement */}
            {num1 + num2 >= 10 && (
                <div className="flex items-center justify-center gap-2 text-amber-500 font-bold text-lg animate-pulse">
                    <Star className="text-amber-500 fill-amber-500" />
                    太棒啦！苹果已经超过10个了！
                    <Star className="text-amber-500 fill-amber-500" />
                </div>
            )}
        </div>
    );
};

const MakeTenQuiz = () => {
    const [num1, setNum1] = useState(8);
    const [num2, setNum2] = useState(5);
    const [movedApples, setMovedApples] = useState(0);
    const [phase, setPhase] = useState('move'); // 'move' | 'success'

    const targetToTen = 10 - num1;
    const isCorrect = movedApples === targetToTen;

    const generateProblem = () => {
        const n1 = Math.floor(Math.random() * 4) + 6; // 6 to 9
        const n2 = Math.floor(Math.random() * 4) + 2; // 2 to 5
        setNum1(n1);
        setNum2(n2);
        setMovedApples(0);
        setPhase('move');
    };

    const handleMove = () => {
        if (movedApples < num2) {
            setMovedApples(prev => prev + 1);
        }
    };

    const handleUndo = () => {
        if (movedApples > 0) {
            setMovedApples(prev => prev - 1);
        }
    };

    const checkAnswer = () => {
        if (isCorrect) {
            setPhase('success');
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-2">
                    <Sparkles className="text-amber-500" /> 凑十法挑战
                </h3>
                <p className="text-slate-500 dark:text-slate-400">
                    题目： {num1} + {num2} = ?
                </p>
                <p className="text-indigo-500 font-medium">
                    提示：把右边的青苹果移给红苹果，让红苹果变成 10 个！
                </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/80 p-6 rounded-2xl">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    {/* Basket 1 */}
                    <div className="relative border-4 border-dashed border-rose-200 dark:border-rose-900/50 rounded-3xl p-6 w-full md:w-64 min-h-[200px] flex flex-col items-center bg-rose-50/50 dark:bg-rose-900/10">
                        <div className="absolute -top-4 bg-rose-100 dark:bg-rose-900 text-rose-600 px-4 py-1 rounded-full font-bold text-sm">
                            篮子里有 {num1 + movedApples} 个（差 {10 - (num1 + movedApples)} 个凑满 10）
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center content-start h-full mt-4">
                            {Array.from({ length: num1 }).map((_, i) => (
                                <AppleIcon key={`n1-${i}`} color="text-rose-500" size={32} />
                            ))}
                            {Array.from({ length: movedApples }).map((_, i) => (
                                <AppleIcon key={`m-${i}`} color="text-green-500" size={32} />
                            ))}
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={handleMove}
                            disabled={movedApples >= num2 || phase === 'success'}
                            className="bg-indigo-500 hover:bg-indigo-600 disabled:bg-slate-300 text-white px-4 py-3 rounded-full font-bold transition-all transform hover:scale-105"
                        >
                            &larr; 移过去一个
                        </button>
                        <button
                            onClick={handleUndo}
                            disabled={movedApples === 0 || phase === 'success'}
                            className="bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 px-4 py-3 rounded-full font-bold transition-all"
                        >
                            &rarr; 退回来
                        </button>
                    </div>

                    {/* Basket 2 */}
                    <div className="relative border-4 border-dashed border-green-200 dark:border-green-900/50 rounded-3xl p-6 w-full md:w-64 min-h-[200px] flex flex-col items-center bg-green-50/50 dark:bg-green-900/10">
                        <div className="absolute -top-4 bg-green-100 dark:bg-green-900 text-green-700 px-4 py-1 rounded-full font-bold text-sm">
                            还剩 {num2 - movedApples} 个
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center content-start h-full mt-4">
                            {Array.from({ length: num2 - movedApples }).map((_, i) => (
                                <AppleIcon key={`n2-${i}`} color="text-green-500" size={32} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Actions & Results */}
            <div className="flex flex-col items-center gap-4">
                {phase !== 'success' && (
                    <button
                        onClick={checkAnswer}
                        className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg transform transition-all hover:scale-105 flex items-center gap-2"
                    >
                        <CheckCircle2 /> 我拼好 10 了！
                    </button>
                )}

                {phase === 'success' && (
                    <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-6 rounded-2xl font-bold flex flex-col items-center gap-3">
                            <span className="text-5xl">🎉</span>
                            <span className="text-xl">太聪明了！拼成了 10！</span>
                            <span className="text-indigo-600 dark:text-indigo-400">
                                {num1} + {num2} = 10 + {num2 - targetToTen} = {10 + (num2 - targetToTen)}
                            </span>
                        </div>
                        <button
                            onClick={generateProblem}
                            className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 font-medium flex items-center justify-center gap-2 w-full"
                        >
                            <RotateCcw size={18} /> 再来一题
                        </button>
                    </div>
                )}

                {phase !== 'success' && !isCorrect && movedApples > 0 && (
                    <div className="text-rose-500 font-medium animate-pulse text-sm">
                        不对哦，红心苹果篮里现在是 {num1 + movedApples} 个，没有刚好达到10。
                    </div>
                )}
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-4 mt-6">
                <p className="font-bold text-amber-700 mb-2">💡 核心口诀：凑十法</p>
                <ol className="text-sm space-y-1 list-decimal list-inside text-amber-900/80 dark:text-amber-200/80">
                    <li>一看大数拉小数（看谁离10近）</li>
                    <li>拆小数，凑大数（把一个数劈成两半，拿出需要的）</li>
                    <li>凑成十，加剩数（刚好凑出10，再加上剩下的就好算啦！）</li>
                </ol>
            </div>
        </div>
    );
};

const AdditionLab = () => {
    const [tab, setTab] = useState('visual');

    return (
        <div className="space-y-6">
            {/* Mode Switcher */}
            <div className="flex gap-2 bg-slate-100 dark:bg-slate-900/50 p-1.5 rounded-xl">
                <button
                    onClick={() => setTab('visual')}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${tab === 'visual' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:bg-white/50'}`}
                >
                    🍎 加法小天平
                </button>
                <button
                    onClick={() => setTab('quiz')}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${tab === 'quiz' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:bg-white/50'}`}
                >
                    🎯 凑十法闯关
                </button>
            </div>

            {/* Content Area */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-100 dark:border-slate-700">
                {tab === 'visual' && <VisualAddition />}
                {tab === 'quiz' && <MakeTenQuiz />}
            </div>
        </div>
    );
};

export default AdditionLab;

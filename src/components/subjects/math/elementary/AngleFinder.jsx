import React, { useState } from 'react';
import { Target, HelpCircle, RefreshCw, Ruler, CheckCircle2 } from 'lucide-react';

const AngleFinder = () => {
    const [angle, setAngle] = useState(45);
    const [longArms, setLongArms] = useState(false);
    const [quizMode, setQuizMode] = useState(false);
    const [targetType, setTargetType] = useState(null);
    const [feedback, setFeedback] = useState(null);

    const getAngleType = (deg) => {
        if (deg < 90) return '锐角';
        if (deg === 90) return '直角';
        return '钝角';
    };

    const generateQuiz = () => {
        const types = ['锐角', '直角', '钝角'];
        const newTarget = types[Math.floor(Math.random() * types.length)];
        setTargetType(newTarget);
        setFeedback(null);
        setQuizMode(true);
    };

    const checkAnswer = () => {
        const currentType = getAngleType(angle);
        if (currentType === targetType) {
            setFeedback({ type: 'success', text: `太棒了！这是个完美的${currentType}！🌟` });
            setTimeout(() => {
                generateQuiz();
            }, 1500);
        } else {
            setFeedback({ type: 'error', text: `哎呀，现在是${currentType}，再调一调？` });
        }
    };

    return (
        <div className="space-y-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-3">
                    <Target className="text-green-500 w-8 h-8" /> 鳄鱼嘴巴角找找看
                </h3>
                <p className="text-slate-500">张开鳄鱼的嘴巴，看看它形成了什么角？</p>
            </div>

            {/* Mode Selection */}
            <div className="flex gap-2 bg-slate-100 dark:bg-slate-900/50 p-1.5 rounded-xl">
                <button
                    onClick={() => { setQuizMode(false); setFeedback(null); }}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${!quizMode ? 'bg-white dark:bg-slate-700 text-green-600 shadow-sm' : 'text-slate-500'}`}
                >
                    🐊 自由探索
                </button>
                <button
                    onClick={generateQuiz}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${quizMode ? 'bg-white dark:bg-slate-700 text-green-600 shadow-sm' : 'text-slate-500'}`}
                >
                    🎯 挑战任务
                </button>
            </div>

            {/* Alligator Mouth Visualization */}
            <div className="relative h-64 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden">
                <div className="relative w-48 h-48 flex items-center justify-center">
                    {/* Fixed Lower Jaw */}
                    <div
                        className="absolute bg-green-500 h-2 rounded-full origin-left transition-all duration-300"
                        style={{ width: longArms ? '180px' : '120px', left: '0', bottom: '50%' }}
                    />
                    {/* Moving Upper Jaw */}
                    <div
                        className="absolute bg-green-500 h-2 rounded-full origin-left transition-all duration-300"
                        style={{
                            width: longArms ? '180px' : '120px',
                            left: '0',
                            bottom: '50%',
                            transform: `rotate(-${angle}deg)`
                        }}
                    >
                        {/* Eye */}
                        <div className="absolute top-[-10px] left-4 w-4 h-4 bg-white rounded-full border-2 border-green-600">
                            <div className="w-2 h-2 bg-black rounded-full m-0.5" />
                        </div>
                        {/* Teeth */}
                        <div className="absolute bottom-[-10px] left-10 flex gap-1">
                            {[1, 2, 3].map(i => <div key={i} className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white" />)}
                        </div>
                    </div>

                    {/* Angle Arc */}
                    <svg className="absolute w-full h-full pointer-events-none">
                        <path
                            d={`M 96 96 L ${96 + 40 * Math.cos(0)} ${96 - 40 * Math.sin(0)} A 40 40 0 0 0 ${96 + 40 * Math.cos(angle * Math.PI / 180)} ${96 - 40 * Math.sin(angle * Math.PI / 180)} Z`}
                            fill="rgba(34, 197, 94, 0.2)"
                            stroke="rgba(34, 197, 94, 0.5)"
                            strokeWidth="1"
                            transform="translate(0, 0)"
                        />
                    </svg>

                    {/* Point (Vertex) */}
                    <div className="absolute left-[-4px] bottom-[calc(50%-4px)] w-2 h-2 bg-green-700 rounded-full z-10" />
                </div>

                {/* Info Overlay */}
                <div className="absolute top-4 right-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-center">
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">当前角度</p>
                    <p className="text-2xl font-black text-green-600 font-mono">{angle}°</p>
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300 px-2 py-0.5 bg-green-100 dark:bg-green-900/50 rounded mt-1">
                        {getAngleType(angle)}
                    </p>
                </div>
            </div>

            {/* Controls */}
            <div className="space-y-6">
                <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm font-bold text-slate-600 dark:text-slate-400 px-1">
                        <span className="flex items-center gap-1">🤏 闭合</span>
                        <span className="flex items-center gap-1">😲 大张嘴</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="170"
                        value={angle}
                        onChange={(e) => setAngle(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                    />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-t border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setLongArms(!longArms)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${longArms
                                    ? 'bg-indigo-100 text-indigo-700 ring-2 ring-indigo-500'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                        >
                            <Ruler className="w-4 h-4" /> 变长鳄鱼嘴
                        </button>
                        <p className="text-xs text-slate-400 max-w-[150px]">
                            {longArms ? '虽然嘴变长了，但角的大小没变哦！' : '点一点看看嘴巴变长会怎样？'}
                        </p>
                    </div>

                    {quizMode ? (
                        <div className="flex items-center gap-3">
                            <div className="text-right">
                                <p className="text-xs text-slate-500">目标角任务：</p>
                                <p className="text-lg font-bold text-slate-800 dark:text-white">请调出一个 <span className="text-indigo-600">【{targetType}】</span></p>
                            </div>
                            <button
                                onClick={checkAnswer}
                                className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-xl shadow-lg shadow-green-200 dark:shadow-none transition-transform active:scale-95"
                            >
                                <CheckCircle2 className="w-6 h-6" />
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <HelpCircle className="w-4 h-4" />
                            <span>试着调出正好 90° 的直角！</span>
                        </div>
                    )}
                </div>

                {feedback && (
                    <div className={`p-4 rounded-xl text-center font-bold animate-in bounce-in duration-300 ${feedback.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                        }`}>
                        {feedback.text}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AngleFinder;

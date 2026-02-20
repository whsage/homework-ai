import React, { useState } from 'react';
import { Ruler, Sparkles, CheckCircle2, RotateCcw, MousePointer2 } from 'lucide-react';

const MeasurementLab = () => {
    const [activeItem, setActiveItem] = useState(null);
    const [guess, setGuess] = useState('');
    const [feedback, setFeedback] = useState(null);
    const [score, setScore] = useState(0);

    const items = [
        { id: 'pencil', name: '彩色铅笔', length: 12, icon: '✏️', color: 'bg-yellow-400' },
        { id: 'eraser', name: '大橡皮', length: 4, icon: '🧼', color: 'bg-pink-300' },
        { id: 'clip', name: '回形针', length: 3, icon: '📎', color: 'bg-slate-300' },
        { id: 'fork', name: '小叉子', length: 15, icon: '🍴', color: 'bg-blue-200' },
    ];

    const checkMeasurement = () => {
        const numGuess = parseFloat(guess);
        if (activeItem && numGuess === activeItem.length) {
            setFeedback({ type: 'success', text: '太棒了！测量完全正确！✨' });
            setScore(s => s + 10);
            setTimeout(() => {
                setFeedback(null);
                setGuess('');
            }, 2000);
        } else {
            setFeedback({ type: 'error', text: '哎呀，再仔细对准 0 刻度量一下哦？' });
        }
    };

    return (
        <div className="space-y-8 p-4 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-3">
                    <Ruler className="text-indigo-500 w-8 h-8" /> 测量小裁缝实验官
                </h3>
                <p className="text-slate-500">把物品拖到尺子上，看看它们到底有多长！</p>
                <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 px-4 py-1.5 rounded-full text-indigo-600 dark:text-indigo-400 font-bold">
                    <Sparkles className="w-4 h-4" /> 能量值: {score}
                </div>
            </div>

            {/* Item Selection */}
            <div className="flex justify-center gap-4 flex-wrap">
                {items.map(item => (
                    <button
                        key={item.id}
                        onClick={() => { setActiveItem(item); setFeedback(null); setGuess(''); }}
                        className={`group relative p-4 rounded-2xl transition-all duration-300 ${activeItem?.id === item.id
                            ? 'bg-indigo-600 text-white shadow-lg ring-4 ring-indigo-200 dark:ring-indigo-900'
                            : 'bg-slate-50 dark:bg-slate-700 hover:bg-white dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600'
                            }`}
                    >
                        <span className="text-4xl mb-2 block group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-sm font-medium">{item.name}</span>
                    </button>
                ))}
            </div>

            {/* Measurement Area */}
            <div className="relative py-20 bg-slate-50 dark:bg-slate-900/50 rounded-2xl overflow-hidden border-2 border-dashed border-slate-200 dark:border-slate-700 min-h-[300px] flex flex-col items-center justify-center">

                {/* Active Item (Visual Representation) */}
                {activeItem ? (
                    <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div
                            style={{ width: `${activeItem.length * 30}px` }}
                            className={`h-12 ${activeItem.color} rounded-lg shadow-md flex items-center justify-center text-2xl border-2 border-white/50 relative group cursor-move`}
                        >
                            {activeItem.icon}
                            {/* Tips */}
                            <div className="absolute -top-10 left-0 bg-black/80 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                对准 0 刻度哦！
                            </div>
                        </div>
                        <p className="mt-4 font-bold text-slate-700 dark:text-slate-300">{activeItem.name}</p>
                    </div>
                ) : (
                    <div className="text-slate-400 flex flex-col items-center gap-2">
                        <MousePointer2 className="w-8 h-8 animate-bounce" />
                        <p>请点击上方选择一个物品开始测量</p>
                    </div>
                )}

                {/* Ruler */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[630px]">
                    <div className="relative h-16 bg-amber-50 dark:bg-amber-900/20 border-t-2 border-amber-200 dark:border-amber-800 flex items-start">
                        {/* 0 to 20 cm marks */}
                        {Array.from({ length: 21 }).map((_, i) => (
                            <div
                                key={i}
                                className="absolute flex flex-col items-center"
                                style={{ left: `${i * 30}px` }}
                            >
                                <div className={`w-0.5 ${i % 5 === 0 ? 'h-6 bg-slate-600 dark:bg-slate-300' : 'h-3 bg-slate-400 dark:bg-slate-500'}`} />
                                <span className="text-[10px] font-mono mt-1 text-slate-600 dark:text-slate-400">{i}</span>
                            </div>
                        ))}
                        {/* mm marks */}
                        {Array.from({ length: 200 }).map((_, i) => i % 10 !== 0 && (
                            <div
                                key={i}
                                className="absolute w-[1px] h-1.5 bg-slate-300 dark:bg-slate-600"
                                style={{ left: `${i * 3}px` }}
                            />
                        ))}
                        <div className="absolute right-2 bottom-1 text-[10px] text-amber-600/50 font-bold italic">UNIT: CM</div>
                    </div>
                </div>
            </div>

            {/* Interaction Footer */}
            {activeItem && (
                <div className="flex flex-col items-center gap-4 py-4 border-t border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <input
                                type="number"
                                value={guess}
                                onChange={(e) => setGuess(e.target.value)}
                                placeholder="它长多少厘米？"
                                className="w-48 px-4 py-3 rounded-xl border-2 border-indigo-100 dark:border-slate-600 focus:border-indigo-500 outline-none text-lg text-center bg-white dark:bg-slate-700 dark:text-white"
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">cm</span>
                        </div>
                        <button
                            onClick={checkMeasurement}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-indigo-200 dark:shadow-none transition-transform active:scale-95 flex items-center gap-2"
                        >
                            <CheckCircle2 className="w-5 h-5" /> 检查结果
                        </button>
                    </div>

                    {feedback && (
                        <div className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold animate-bounce ${feedback.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                            }`}>
                            {feedback.type === 'success' ? '✨' : '⚠️'} {feedback.text}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default MeasurementLab;

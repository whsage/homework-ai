import React, { useState } from 'react';
import { Scissors, Combine, RotateCcw, Lightbulb, Trophy } from 'lucide-react';

const ShapePartitionLab = () => {
    const [mode, setMode] = useState('puzzle'); // puzzle, sandbox
    const [puzzleIdx, setPuzzleIdx] = useState(0);
    const [isMerged, setIsMerged] = useState(false);
    const [feedback, setFeedback] = useState(null);

    const puzzles = [
        {
            title: "拼出正方形",
            instruction: "用两块三角形拼成一个正方形吧！",
            shapes: ["triangle", "triangle"],
            result: "square"
        },
        {
            title: "拼出大长方形",
            instruction: "用两个正方形拼成一个大长方形！",
            shapes: ["square", "square"],
            result: "rectangle"
        }
    ];

    const currentPuzzle = puzzles[puzzleIdx];

    const handleAction = (action) => {
        if (action === 'merge') {
            setIsMerged(true);
            setFeedback('correct');
        } else {
            setIsMerged(false);
            setFeedback(null);
        }
    };

    const nextPuzzle = () => {
        setPuzzleIdx((puzzleIdx + 1) % puzzles.length);
        setIsMerged(false);
        setFeedback(null);
    };

    return (
        <div className="space-y-6">
            <div className="flex gap-2 bg-slate-100 dark:bg-slate-900/50 p-1.5 rounded-xl">
                <button onClick={() => setMode('puzzle')} className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${mode === 'puzzle' ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm' : 'text-slate-500'}`}>
                    🎯 拼图闯关
                </button>
                <button onClick={() => setMode('sandbox')} className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${mode === 'sandbox' ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm' : 'text-slate-500'}`}>
                    🎨 灵活实验室
                </button>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-100 dark:border-slate-700">
                {mode === 'puzzle' ? (
                    <div className="space-y-8">
                        <div className="text-center space-y-2">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">关卡 {puzzleIdx + 1}: {currentPuzzle.title}</h3>
                            <p className="text-slate-500">{currentPuzzle.instruction}</p>
                        </div>

                        <div className="flex justify-center items-center gap-12 py-12 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border-2 border-dashed border-slate-200">
                            {!isMerged ? (
                                <div className="flex gap-4 animate-pulse">
                                    {currentPuzzle.shapes.map((s, i) => (
                                        <div key={i} className={`
                                            ${s === 'triangle' ? 'w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[80px] border-b-indigo-500' : ''}
                                            ${s === 'square' ? 'w-20 h-20 bg-emerald-500 rounded-sm' : ''}
                                        `} />
                                    ))}
                                </div>
                            ) : (
                                <div className={`
                                    transition-all duration-500 transform scale-110
                                    ${currentPuzzle.result === 'square' ? 'w-32 h-32 bg-indigo-600 rounded-sm shadow-lg' : ''}
                                    ${currentPuzzle.result === 'rectangle' ? 'w-48 h-24 bg-emerald-600 rounded-sm shadow-lg' : ''}
                                `} />
                            )}
                        </div>

                        <div className="flex justify-center gap-4">
                            {!isMerged ? (
                                <button onClick={() => handleAction('merge')} className="px-8 py-3 bg-indigo-600 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-700 shadow-lg active:scale-95 transition-all">
                                    <Combine size={20} /> 点击合并
                                </button>
                            ) : (
                                <div className="flex flex-col items-center gap-4">
                                    <div className="flex items-center gap-2 text-green-600 font-bold text-xl">
                                        <Trophy className="animate-bounce" /> 太棒了！拼成了一格新的图形！
                                    </div>
                                    <div className="flex gap-4">
                                        <button onClick={() => handleAction('split')} className="px-6 py-2 bg-slate-200 text-slate-700 rounded-xl font-bold flex items-center gap-2">
                                            <Scissors size={18} /> 重新拆分
                                        </button>
                                        <button onClick={nextPuzzle} className="px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold">
                                            下一关
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="space-y-8 text-center">
                        <h3 className="text-xl font-bold">实验室建设中...</h3>
                        <p className="text-slate-500">这里将来可以自由拖动各种基本图形进行剪拼，敬请期待！</p>
                        <div className="flex justify-center gap-6">
                            <div className="w-16 h-16 bg-blue-400 rotate-45" />
                            <div className="w-16 h-16 bg-red-400 rounded-full" />
                            <div className="w-24 h-12 bg-green-400" />
                        </div>
                    </div>
                )}

                <div className="mt-8 bg-amber-50 dark:bg-amber-900/20 p-5 rounded-2xl border-l-4 border-amber-400">
                    <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                        <Lightbulb size={18} /> 图形的变化
                    </h4>
                    <p className="text-sm text-amber-700 dark:text-amber-400">
                        复杂的图形往往是由简单的图形组成的。通过“平移”和“旋转”，我们可以把几个小图形拼成一个大的图形，反过来也可以把大图形切开！
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ShapePartitionLab;

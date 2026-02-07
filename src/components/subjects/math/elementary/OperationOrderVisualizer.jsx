import React, { useState } from 'react';
import { Play, RotateCcw, ChevronRight, Check } from 'lucide-react';

const OperationOrderVisualizer = () => {
    const examples = [
        {
            id: 1,
            title: "先乘除，后加减",
            expression: "3 + 5 × 4",
            steps: [
                {
                    current: ["3", "+", "5", "×", "4"],
                    highlightIndices: [2, 3, 4], // Indices of tokens to process
                    explanation: "乘法优先级高于加法，先算 5 × 4"
                },
                {
                    current: ["3", "+", "20"],
                    highlightIndices: [0, 1, 2],
                    explanation: "最后算加法：3 + 20"
                },
                {
                    current: ["23"],
                    highlightIndices: [],
                    explanation: "计算完成！"
                }
            ]
        },
        {
            id: 2,
            title: "有括号先算括号",
            expression: "( 3 + 5 ) × 4",
            steps: [
                {
                    current: ["(", "3", "+", "5", ")", "×", "4"],
                    highlightIndices: [0, 1, 2, 3, 4],
                    explanation: "括号优先级最高，先算括号里的 3 + 5"
                },
                {
                    current: ["8", "×", "4"],
                    highlightIndices: [0, 1, 2],
                    explanation: "再算乘法：8 × 4"
                },
                {
                    current: ["32"],
                    highlightIndices: [],
                    explanation: "计算完成！"
                }
            ]
        },
        {
            id: 3,
            title: "同级运算从左往右",
            expression: "12 ÷ 6 × 2",
            steps: [
                {
                    current: ["12", "÷", "6", "×", "2"],
                    highlightIndices: [0, 1, 2],
                    explanation: "乘除法是同级运算，从左往右算。先算 12 ÷ 6"
                },
                {
                    current: ["2", "×", "2"],
                    highlightIndices: [0, 1, 2],
                    explanation: "再算后面：2 × 2"
                },
                {
                    current: ["4"],
                    highlightIndices: [],
                    explanation: "计算完成！"
                }
            ]
        },
        {
            id: 4,
            title: "括号改变同级运算",
            expression: "12 ÷ ( 6 × 2 )",
            steps: [
                {
                    current: ["12", "÷", "(", "6", "×", "2", ")"],
                    highlightIndices: [2, 3, 4, 5, 6],
                    explanation: "有括号，先算括号里的 6 × 2"
                },
                {
                    current: ["12", "÷", "12"],
                    highlightIndices: [0, 1, 2],
                    explanation: "再算除法：12 ÷ 12"
                },
                {
                    current: ["1"],
                    highlightIndices: [],
                    explanation: "计算完成！"
                }
            ]
        }
    ];

    const [activeExampleIndex, setActiveExampleIndex] = useState(0);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const activeExample = examples[activeExampleIndex];

    const handleNext = () => {
        if (currentStepIndex < activeExample.steps.length - 1) {
            setCurrentStepIndex(currentStepIndex + 1);
        }
    };

    const handleReset = () => {
        setCurrentStepIndex(0);
    };

    return (
        <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            {/* Example Selection */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 w-full">
                {examples.map((ex, idx) => (
                    <button
                        key={ex.id}
                        onClick={() => {
                            setActiveExampleIndex(idx);
                            setCurrentStepIndex(0);
                        }}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeExampleIndex === idx
                                ? 'bg-indigo-600 text-white shadow-md transform scale-105'
                                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                            }`}
                    >
                        {ex.expression.replace(/\s/g, '')}
                    </button>
                ))}
            </div>

            <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">{activeExample.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">点击"下一步"观察运算顺序</p>
            </div>

            {/* Visualization Area */}
            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-xl w-full max-w-lg min-h-[300px] flex flex-col items-center justify-center relative overflow-hidden">
                {/* Current Step Display */}
                <div className="flex flex-wrap justify-center gap-3 text-3xl md:text-4xl font-mono font-bold text-slate-800 dark:text-white mb-12">
                    {activeExample.steps[currentStepIndex].current.map((token, idx) => {
                        const isHighlighted = activeExample.steps[currentStepIndex].highlightIndices.includes(idx);
                        return (
                            <div
                                key={idx}
                                className={`transition-all duration-300 px-2 py-1 rounded ${isHighlighted
                                        ? 'bg-yellow-200 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 scale-110 shadow-sm'
                                        : 'opacity-50 blur-[0.5px]'
                                    }`}
                            >
                                {token}
                            </div>
                        );
                    })}
                </div>

                {/* Explanation Bubble */}
                <div className="bg-white dark:bg-slate-800 border-2 border-indigo-100 dark:border-indigo-900 p-4 rounded-xl shadow-lg relative max-w-xs transition-all duration-300 transform translate-y-0 opacity-100">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-slate-800 border-t-2 border-l-2 border-indigo-100 dark:border-indigo-900 rotate-45"></div>
                    <p className="text-indigo-600 dark:text-indigo-400 font-bold text-center">
                        {activeExample.steps[currentStepIndex].explanation}
                    </p>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-8 w-full max-w-md">
                <button
                    onClick={handleReset}
                    className="p-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 transition-colors"
                    title="重置"
                >
                    <RotateCcw className="w-5 h-5" />
                </button>

                <div className="flex-1 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div
                        className={`h-full transition-all duration-500 ${currentStepIndex === activeExample.steps.length - 1 ? 'bg-green-500' : 'bg-indigo-500'}`}
                        style={{ width: `${((currentStepIndex) / (activeExample.steps.length - 1)) * 100}%` }}
                    />
                </div>

                <button
                    onClick={handleNext}
                    disabled={currentStepIndex === activeExample.steps.length - 1}
                    className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold text-white shadow-lg transition-all transform active:scale-95 ${currentStepIndex === activeExample.steps.length - 1
                            ? 'bg-green-500 hover:bg-green-600 cursor-default'
                            : 'bg-indigo-600 hover:bg-indigo-700'
                        }`}
                >
                    {currentStepIndex === activeExample.steps.length - 1 ? (
                        <>
                            <Check className="w-5 h-5" />
                            完成
                        </>
                    ) : (
                        <>
                            下一步
                            <ChevronRight className="w-5 h-5" />
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default OperationOrderVisualizer;

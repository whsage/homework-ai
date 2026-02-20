import React, { useState, useMemo } from 'react';
import { Calculator, ChevronRight, ChevronLeft, Play, RotateCcw, Info } from 'lucide-react';

const MultiDigitMultiplicationLab = () => {
    const [num1, setNum1] = useState(23);
    const [num2, setNum2] = useState(14);
    const [currentStep, setCurrentStep] = useState(0);

    const steps = useMemo(() => {
        const n1 = num1;
        const n2 = num2;
        const n2Units = n2 % 10;
        const n2Tens = Math.floor(n2 / 10);

        const partial1 = n1 * n2Units;
        const partial2 = n1 * n2Tens * 10;
        const result = n1 * n2;

        const calcSteps = [];

        // Step 0: Initial
        calcSteps.push({
            lines: [],
            active: 'initial',
            message: `开始计算 ${n1} × ${n2}。我们将分两步来做。`
        });

        // Step 1: Units multiplication
        calcSteps.push({
            lines: [
                { val: partial1, label: `${n1} × ${n2Units}`, type: 'partial1' }
            ],
            active: 'partial1',
            message: `第一步：算个位。${n1} × ${n2Units} = ${partial1}。`
        });

        // Step 2: Tens multiplication
        calcSteps.push({
            lines: [
                { val: partial1, label: `${n1} × ${n2Units}`, type: 'partial1' },
                { val: partial2, label: `${n1} × ${n2Tens * 10}`, type: 'partial2' }
            ],
            active: 'partial2',
            message: `第二步：算十位。${n1} × ${n2Tens}0 = ${partial2}。注意我们要错位书写（末尾的0可以不写，但要顶在十位下面）。`
        });

        // Step 3: Sum
        calcSteps.push({
            lines: [
                { val: partial1, label: `${n1} × ${n2Units}`, type: 'partial1' },
                { val: partial2, label: `${n1} × ${n2Tens * 10}`, type: 'partial2' },
                { val: result, label: `${partial1} + ${partial2}`, type: 'sum', underline: true }
            ],
            active: 'sum',
            message: `最后一步：相加。${partial1} + ${partial2} = ${result}。得数是 ${result}！`
        });

        return calcSteps;
    }, [num1, num2]);

    const renderVertical = () => {
        const state = steps[currentStep];
        const num1Str = num1.toString();
        const num2Str = num2.toString();
        const resultStr = (num1 * num2).toString();
        const maxLen = Math.max(num1Str.length, num2Str.length, resultStr.length) + 1;

        const formatLine = (num, len = maxLen) => num.toString().padStart(len, ' ');

        return (
            <div className="font-mono text-3xl md:text-5xl tracking-widest text-slate-700 dark:text-slate-200 space-y-2 inline-block text-right">
                {/* Num 1 */}
                <div>{formatLine(num1)}</div>

                {/* Num 2 */}
                <div className="relative border-b-4 border-slate-800 dark:border-white pb-2">
                    <span className="absolute left-0 bottom-2 text-2xl font-bold text-slate-400">×</span>
                    {formatLine(num2)}
                </div>

                {/* Partial products and sum */}
                {state.lines.map((line, idx) => {
                    const isActive = state.active === line.type;
                    return (
                        <div
                            key={idx}
                            className={`transition-all duration-500 transform ${isActive ? 'scale-110 text-indigo-600 font-bold' : 'text-slate-500 opacity-80'} ${line.underline ? 'border-t-2 border-slate-400 mt-2 pt-2' : ''}`}
                        >
                            {/* Special logic for partial2: it might end in 0 which is often 'hidden' in vertical calc */}
                            {line.type === 'partial2' ? (
                                <span>
                                    {line.val.toString().slice(0, -1)}
                                    <span className="opacity-30">0</span>
                                </span>
                            ) : (
                                formatLine(line.val)
                            )}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="space-y-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-3">
                    <Calculator className="text-rose-500 w-8 h-8" /> 乘法魔法竖式
                </h3>
                <p className="text-slate-500">拆开看，更简单！把两位数乘法变成两次简单的计算。</p>
            </div>

            {/* Input Controls */}
            <div className="flex justify-center gap-6 bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase">被乘数</label>
                    <input
                        type="number" min="10" max="99" value={num1}
                        onChange={(e) => { setNum1(parseInt(e.target.value) || 0); setCurrentStep(0); }}
                        className="w-20 text-2xl font-mono font-bold bg-white dark:bg-slate-700 p-2 rounded-xl text-center outline-none focus:ring-2 ring-rose-300"
                    />
                </div>
                <div className="flex items-center text-slate-300 text-2xl mt-6">×</div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase">乘数</label>
                    <input
                        type="number" min="10" max="99" value={num2}
                        onChange={(e) => { setNum2(parseInt(e.target.value) || 0); setCurrentStep(0); }}
                        className="w-20 text-2xl font-mono font-bold bg-white dark:bg-slate-700 p-2 rounded-xl text-center outline-none focus:ring-2 ring-rose-300"
                    />
                </div>
            </div>

            {/* Visualizer Area */}
            <div className="flex flex-col items-center justify-center py-10 bg-slate-50 dark:bg-slate-900 rounded-3xl min-h-[450px]">
                <div className="mb-10 min-h-[300px] flex items-center justify-center">
                    {renderVertical()}
                </div>

                <div className="w-full max-w-md space-y-4 px-6">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 min-h-[80px] flex items-center justify-center text-center italic text-slate-600 dark:text-slate-300">
                        {steps[currentStep].message}
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                            disabled={currentStep === 0}
                            className="p-3 bg-slate-100 dark:bg-slate-700 rounded-full disabled:opacity-30 hover:bg-slate-200 transition-colors"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <div className="flex-1 h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-rose-500 transition-all duration-500"
                                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                            />
                        </div>

                        <button
                            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                            disabled={currentStep === steps.length - 1}
                            className="p-3 bg-rose-500 text-white rounded-full disabled:opacity-30 hover:bg-rose-600 shadow-lg shadow-rose-200 dark:shadow-none transition-all"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-800/50 space-y-4">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-bold">
                    <Info className="w-5 h-5" /> 为什么十位的结果要“错位”呢？
                </div>
                <p className="text-sm text-indigo-900/70 dark:text-indigo-200/70 leading-relaxed">
                    其实，当你算十位上的 <strong>{Math.floor(num2 / 10)}</strong> 时，它代表的是 <strong>{Math.floor(num2 / 10) * 10}</strong>。
                    所以计算结果 <strong>{num1} × {Math.floor(num2 / 10) * 10} = {num1 * Math.floor(num2 / 10) * 10}</strong>，末尾其实有个 0。在竖式中，我们通常把这个 0 藏起来，让数字直接从“十位”开始写，效果是一样的哦！
                </p>
            </div>

            <button
                onClick={() => { setNum1(23); setNum2(14); setCurrentStep(0); }}
                className="w-full py-3 flex items-center justify-center gap-2 text-slate-400 hover:text-rose-500 transition-colors text-sm font-medium"
            >
                <RotateCcw className="w-4 h-4" /> 重置演示数据
            </button>
        </div>
    );
};

export default MultiDigitMultiplicationLab;

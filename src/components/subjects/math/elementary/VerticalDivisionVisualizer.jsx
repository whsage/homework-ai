import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, ChevronRight, ChevronLeft } from 'lucide-react';

const VerticalDivisionVisualizer = () => {
    const [dividend, setDividend] = useState(432);
    const [divisor, setDivisor] = useState(24);
    const [steps, setSteps] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        if (!dividend || !divisor || divisor === 0) return;
        generateSteps();
    }, [dividend, divisor]);

    const generateSteps = () => {
        const divString = dividend.toString();
        const divisorVal = divisor;
        const newSteps = [];

        let currentState = {
            quotient: Array(divString.length).fill(''),
            rows: [], // { type: 'product'|'remainder'|'bringDown', val: number, indent: number, operator: '-' }
            active: { type: 'start' }, // { type, index, val }
            message: "准备开始：从最高位开始除。"
        };

        // Initial Step
        newSteps.push(JSON.parse(JSON.stringify(currentState)));

        let remainder = 0;
        let i = 0;

        while (i < divString.length) {
            const digit = parseInt(divString[i]);
            let currentVal = remainder * 10 + digit;

            // Step: Focus on current number
            currentState.active = { type: 'dividend', index: i };
            let msg = "";
            let chunkVal = currentVal;

            let q = Math.floor(currentVal / divisorVal);

            // Skip leading zeros in quotient visualization if logic requires, but let's be explicit
            if (q === 0 && newSteps.length <= 1 && i < divString.length - 1) {
                currentState.message = `${currentVal} 比 ${divisorVal} 小，不够除，看前两位。`;
                newSteps.push(JSON.parse(JSON.stringify(currentState)));

                remainder = currentVal;
                i++;
                continue;
            }

            // 1. Focus Step
            currentState.message = `用 ${currentVal} 除以 ${divisorVal}，商是几？`;
            newSteps.push(JSON.parse(JSON.stringify(currentState)));

            // 2. Quotient Step
            currentState.quotient[i] = q;
            currentState.active = { type: 'quotient', index: i };
            currentState.message = `商 ${q}，写在 ${digit} 的上面。`;
            newSteps.push(JSON.parse(JSON.stringify(currentState)));

            // 3. Multiply Step (Product)
            const product = q * divisorVal;
            currentState.rows.push({ type: 'product', val: product, indent: i, operator: '-' });
            currentState.active = { type: 'product', rowIndex: currentState.rows.length - 1 };
            currentState.message = `${divisorVal} × ${q} = ${product}`;
            newSteps.push(JSON.parse(JSON.stringify(currentState)));

            // 4. Subtract Step (Remainder)
            const newRemainder = currentVal - product;
            currentState.rows.push({ type: 'remainder', val: newRemainder, indent: i });
            currentState.active = { type: 'remainder', rowIndex: currentState.rows.length - 1 };
            currentState.message = `${currentVal} - ${product} = ${newRemainder}`;
            newSteps.push(JSON.parse(JSON.stringify(currentState)));

            remainder = newRemainder;

            // 5. Bring Down Step (if not last digit)
            if (i < divString.length - 1) {
                const nextDigit = divString[i + 1];
                currentState.message = `把个位的 ${nextDigit} 落下来。`;
                const lastRowIdx = currentState.rows.length - 1;
                currentState.rows[lastRowIdx].broughtDown = nextDigit;
                newSteps.push(JSON.parse(JSON.stringify(currentState)));
            }

            i++;
        }

        currentState.message = "计算完成！";
        currentState.active = { type: 'finish' };
        newSteps.push(JSON.parse(JSON.stringify(currentState)));

        setSteps(newSteps);
        setCurrentStep(0);
    };

    const renderGrid = () => {
        if (steps.length === 0) return null;
        const state = steps[currentStep];

        const charWidth = "w-8";

        return (
            <div className="font-mono text-xl md:text-2xl inline-block text-left relative" style={{ minWidth: '300px' }}>
                {/* Quotient Row */}
                <div className="flex justify-end border-b-2 border-slate-800 dark:border-white mb-1 pb-1">
                    {/* Aligned with Dividend */}
                    {/* Dividend is shifted right by divisor width + padding */}
                    <div className="flex">
                        {/* Padding for divisor area */}
                        <div className="w-16 mr-2"></div>
                        <div className="flex px-2">
                            {state.quotient.map((q, idx) => (
                                <div key={idx} className={`${charWidth} text-center h-8 ${state.active.type === 'quotient' && state.active.index === idx ? 'text-indigo-600 font-bold scale-125 transition-transform' : ''}`}>
                                    {q}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Dividend Row */}
                <div className="flex items-center">
                    <div className="mr-2 text-slate-500 w-16 text-right break-keep">{divisor}</div>
                    <div className="border-l-2 border-slate-800 dark:border-white px-2 flex">
                        {dividend.toString().split('').map((d, idx) => (
                            <div key={idx} className={`${charWidth} text-center ${state.active.type === 'dividend' && state.active.index >= idx && state.active.index < idx + 2 ? 'text-blue-600 font-bold' : ''}`}>
                                {d}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Calculation Rows */}
                {state.rows.map((row, rIdx) => {
                    const valStr = row.val.toString();

                    return (
                        <div key={rIdx} className="flex flex-col">
                            {row.operator && (
                                <div className="border-b border-slate-400 w-full my-1 ml-16 transform translate-x-2" style={{ width: 'calc(100% - 4.5rem)' }}></div>
                            )}

                            {/* Row container. Needs to align exactly with Dividend slots */}
                            <div className="flex ml-16 pl-2 relative">
                                {Array(dividend.toString().length).fill(0).map((_, colIdx) => {
                                    let char = "";
                                    let isOperator = false;

                                    // Logic to place char:
                                    // row.indent is the column index where the last digit of valStr aligns.
                                    // valStr len = L. digits are at colIdx = [indent - L + 1, indent].

                                    const startIdx = row.indent - valStr.length + 1;
                                    const endIdx = row.indent;

                                    if (colIdx >= startIdx && colIdx <= endIdx) {
                                        char = valStr[colIdx - startIdx];
                                        if (colIdx === startIdx && row.operator) isOperator = true;
                                    }

                                    // Check brought down
                                    if (row.broughtDown && colIdx === row.indent + 1) {
                                        char = row.broughtDown;
                                    }

                                    // Active highlight
                                    const isActive = state.active.type === row.type && state.active.rowIndex === rIdx;

                                    return (
                                        <div key={colIdx} className={`${charWidth} text-center relative ${isActive ? 'text-indigo-600 font-bold' : 'text-slate-500'}`}>
                                            {isOperator && (
                                                <span className="absolute -left-4 text-slate-400 text-sm">{row.operator}</span>
                                            )}
                                            {char}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <h3 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <Play className="w-5 h-5 text-indigo-500" />
                竖式计算演示
            </h3>

            <div className="flex gap-4 mb-8">
                <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-lg">
                    <span className="text-sm text-slate-500 dark:text-slate-400">被除数</span>
                    <input
                        type="number"
                        value={dividend}
                        onChange={(e) => {
                            setDividend(Math.min(9999, Math.max(1, Number(e.target.value))));
                            setCurrentStep(0);
                        }}
                        className="w-20 bg-transparent font-mono font-bold text-center outline-none dark:text-white"
                    />
                </div>
                <div className="flex items-center gap-2 text-slate-400">÷</div>
                <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-lg">
                    <span className="text-sm text-slate-500 dark:text-slate-400">除数</span>
                    <input
                        type="number"
                        value={divisor}
                        onChange={(e) => {
                            setDivisor(Math.min(99, Math.max(1, Number(e.target.value))));
                            setCurrentStep(0);
                        }}
                        className="w-16 bg-transparent font-mono font-bold text-center outline-none dark:text-white"
                    />
                </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-xl w-full max-w-lg flex flex-col items-center min-h-[400px]">
                {renderGrid()}

                {steps.length > 0 && (
                    <div className="mt-8 p-4 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm w-full text-center min-h-[60px] flex items-center justify-center transition-all">
                        {steps[currentStep]?.message}
                    </div>
                )}
            </div>

            <div className="flex items-center gap-4 mt-6 w-full max-w-md">
                <button
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    disabled={currentStep === 0}
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-30 transition-colors"
                >
                    <ChevronLeft className="w-6 h-6 dark:text-white" />
                </button>

                <div className="flex-1 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div
                        className="bg-indigo-500 h-full transition-all duration-300"
                        style={{ width: `${(currentStep / (Math.max(1, steps.length - 1))) * 100}%` }}
                    />
                </div>

                <div className="text-sm text-slate-400 font-mono w-12 text-center">
                    {currentStep + 1}/{steps.length}
                </div>

                <button
                    onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                    disabled={currentStep === steps.length - 1}
                    className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg shadow-indigo-500/30 disabled:opacity-50 disabled:shadow-none transition-all transform active:scale-95"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            <button
                onClick={() => {
                    setDividend(432);
                    setDivisor(24);
                    setCurrentStep(0);
                }}
                className="mt-4 text-xs text-slate-400 hover:text-indigo-500 flex items-center gap-1"
            >
                <RotateCcw className="w-3 h-3" />
                重置例子
            </button>
        </div>
    );
};

export default VerticalDivisionVisualizer;

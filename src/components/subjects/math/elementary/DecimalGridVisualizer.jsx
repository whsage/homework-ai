import React, { useState } from 'react';
import { Plus, Minus, Equal } from 'lucide-react';

const DecimalGridVisualizer = () => {
    const [num1, setNum1] = useState(0.24);
    const [num2, setNum2] = useState(0.35);
    const [operation, setOperation] = useState('add'); // 'add' or 'subtract'

    const Grid = ({ value, color = "bg-blue-500", label, showGrid = true }) => {
        // Value is 0 to 1. 
        // 10x10 grid.
        const cells = Array(100).fill(0);
        const filledCount = Math.round(value * 100);

        return (
            <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 bg-white border-2 border-slate-800 dark:border-slate-400 grid grid-cols-10 grid-rows-10">
                    {cells.map((_, i) => (
                        <div
                            key={i}
                            className={`border-[0.5px] border-slate-200 dark:border-slate-700 ${i < filledCount ? color : ''}`}
                        >
                        </div>
                    ))}
                    {/* Tenths lines (every 10 cells) thicker? Optional */}
                </div>
                <div className="mt-2 font-mono font-bold text-slate-700 dark:text-slate-300">
                    {label} ({value.toFixed(2)})
                </div>
            </div>
        );
    };

    // For addition: Show Grid 1 (Part) + Grid 2 (Part) = Grid 3 (Total)
    // Actually, combining them on one grid is better for determining sum.

    // Combined Grid Visual
    const ResultGrid = () => {
        const sum = num1 + num2;
        const count1 = Math.round(num1 * 100);
        const count2 = Math.round(num2 * 100);

        // If sum > 1, we need multiple grids.
        // Let's handle up to 2.0

        const renderSingleGrid = (offset, label) => {
            const cells = Array(100).fill(0);
            return (
                <div className="relative w-48 h-48 bg-white border-2 border-slate-800 dark:border-slate-400 grid grid-cols-10 grid-rows-10">
                    {cells.map((_, i) => {
                        const globalIndex = offset + i;
                        let cellColor = "";

                        if (operation === 'add') {
                            if (globalIndex < count1) {
                                cellColor = "bg-blue-400"; // Num1
                            } else if (globalIndex < count1 + count2) {
                                cellColor = "bg-green-400"; // Num2
                            }
                        } else {
                            // Subtraction: Show Num1, then cross out Num2 amount?
                            // Or just show result?
                            // Visualizing subtraction:
                            // Show Num1 (Blue).
                            // Highlight last N cells (Num2) in Red/Crossed?
                            if (globalIndex < count1) {
                                if (globalIndex >= count1 - count2) {
                                    cellColor = "bg-red-400/50 striped"; // Removed part
                                } else {
                                    cellColor = "bg-blue-400"; // Remaining
                                }
                            }
                        }

                        return (
                            <div
                                key={i}
                                className={`border-[0.5px] border-slate-200 dark:border-slate-700 ${cellColor}`}
                            ></div>
                        );
                    })}
                </div>
            );
        };

        return (
            <div className="flex gap-4">
                <div className="flex flex-col items-center">
                    {renderSingleGrid(0)}
                    <div className="mt-2 font-bold text-slate-700 dark:text-slate-300">
                        {operation === 'add' ? '和' : '差'}
                        : {(operation === 'add' ? num1 + num2 : Math.max(0, num1 - num2)).toFixed(2)}
                    </div>
                </div>
                {/* If sum > 1, show second grid */}
                {(operation === 'add' && num1 + num2 > 1) && (
                    <div className="flex flex-col items-center">
                        {renderSingleGrid(100)}
                        <div className="mt-2 text-slate-500">
                            (超过 1.0 的部分)
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-8 bg-slate-100 dark:bg-slate-700/50 p-4 rounded-xl">
                <div className="flex flex-col items-center gap-1">
                    <label className="text-xs text-slate-500 font-bold text-blue-500">第一个数 (蓝)</label>
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        max="1"
                        value={num1}
                        onChange={(e) => setNum1(Number(e.target.value))}
                        className="w-20 p-2 rounded border text-center font-bold text-blue-600"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <button
                        onClick={() => setOperation('add')}
                        className={`p-1 rounded ${operation === 'add' ? 'bg-indigo-100 text-indigo-600' : 'text-slate-400'}`}
                    >
                        <Plus className="w-5 h-5" />
                    </button>
                    {/* Subtraction support is tricky visually if num1 < num2, let's disable for now or clamp */}
                    <button
                        onClick={() => {
                            setOperation('subtract');
                            if (num2 > num1) setNum2(num1);
                        }}
                        className={`p-1 rounded ${operation === 'subtract' ? 'bg-indigo-100 text-indigo-600' : 'text-slate-400'}`}
                    >
                        <Minus className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <label className="text-xs text-slate-500 font-bold text-green-500">第二个数 ({operation === 'add' ? '绿' : '红'})</label>
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        max={operation === 'subtract' ? num1 : 1}
                        value={num2}
                        onChange={(e) => setNum2(Number(e.target.value))}
                        className={`w-20 p-2 rounded border text-center font-bold ${operation === 'add' ? 'text-green-600' : 'text-red-500'}`}
                    />
                </div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-8 items-center bg-slate-50 dark:bg-slate-900/50 p-8 rounded-xl w-full">
                {/* Visuals */}
                {/* <div className="flex gap-4 opacity-50 scale-75 origin-right lg:hidden">
                    <Grid value={num1} color="bg-blue-500" label="数1" />
                    <div className="flex items-center text-3xl text-slate-400">{operation === 'add' ? '+' : '-'}</div>
                    <Grid value={num2} color="bg-green-500" label="数2" />
                 </div>
                 
                 <div className="hidden lg:flex items-center text-3xl text-slate-400">=</div> */}

                <ResultGrid />
            </div>

            <p className="mt-4 text-slate-500 text-sm">
                每个大正方形代表 "1"，每个小格代表 "0.01"。<br />
                通过涂色面积，我们可以直观看到小数加减法的意义。
            </p>
        </div>
    );
};

export default DecimalGridVisualizer;

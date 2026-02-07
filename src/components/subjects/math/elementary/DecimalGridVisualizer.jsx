import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const ResultGrid = ({ count1, total }) => {
    return (
        <div className="grid grid-cols-10 gap-0.5 border border-slate-300 bg-slate-300 p-0.5">
            {[...Array(100)].map((_, i) => (
                <div
                    key={i}
                    className={`w-6 h-6 sm:w-8 sm:h-8 ${i < count1
                        ? 'bg-blue-500'
                        : i < total
                            ? 'bg-green-500'
                            : 'bg-white'
                        }`}
                />
            ))}
        </div>
    );
};

const DecimalGridVisualizer = () => {
    const [num1, setNum1] = useState(0.24);
    const [num2, setNum2] = useState(0.35);
    const [operation, setOperation] = useState('add');

    const count1 = Math.round(num1 * 100);
    const count2 = Math.round(num2 * 100);
    const total = count1 + count2;

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
                <ResultGrid count1={count1} total={total} />
            </div>

            <div className="mt-4 font-bold text-slate-700 dark:text-slate-300">
                {operation === 'add' ? '和' : '差'}
                : {(operation === 'add' ? num1 + num2 : Math.max(0, num1 - num2)).toFixed(2)}
            </div>

            <p className="mt-4 text-slate-500 text-sm">
                每个大正方形代表 "1"，每个小格代表 "0.01"。<br />
                通过涂色面积，我们可以直观看到小数加减法的意义。
            </p>
        </div>
    );
};

export default DecimalGridVisualizer;

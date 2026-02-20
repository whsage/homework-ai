import React, { useState, useEffect } from 'react';
import { Grid3X3, CheckCircle2, AlertCircle, RefreshCcw, Sparkles, Trophy } from 'lucide-react';

const MagicSquareLab = () => {
    const [grid, setGrid] = useState([
        [0, 5, 0],
        [0, 0, 0],
        [4, 0, 2]
    ]);
    const targetSum = 15;

    const handleChange = (r, c, val) => {
        const newGrid = grid.map((row, ri) =>
            row.map((col, ci) => ri === r && ci === c ? (parseInt(val) || 0) : col)
        );
        setGrid(newGrid);
    };

    const getRowSum = (r) => grid[r].reduce((a, b) => a + b, 0);
    const getColSum = (c) => grid[0][c] + grid[1][c] + grid[2][c];
    const getDiag1Sum = () => grid[0][0] + grid[1][1] + grid[2][2];
    const getDiag2Sum = () => grid[0][2] + grid[1][1] + grid[2][0];

    const isComplete = () => {
        const rows = [0, 1, 2].every(r => getRowSum(r) === targetSum);
        const cols = [0, 1, 2].every(c => getColSum(c) === targetSum);
        const diags = getDiag1Sum() === targetSum && getDiag2Sum() === targetSum;
        const noZeros = grid.every(row => row.every(cell => cell !== 0));
        return rows && cols && diags && noZeros;
    };

    const reset = () => {
        setGrid([
            [0, 5, 0],
            [0, 0, 0],
            [4, 0, 2]
        ]);
    };

    return (
        <div className="space-y-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-3">
                    <Grid3X3 className="text-purple-500 w-8 h-8" /> 九宫格幻方挑战
                </h3>
                <p className="text-slate-500 text-sm">让每一行、每一列、对角线的 3 个数之和都等于 <strong>{targetSum}</strong></p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                {/* Stats / Feedback */}
                <div className="space-y-4 w-48 order-2 md:order-1">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">当前计算状态</div>
                    {[
                        { label: '行 1', sum: getRowSum(0) },
                        { label: '行 2', sum: getRowSum(1) },
                        { label: '行 3', sum: getRowSum(2) },
                        { label: '列 1', sum: getColSum(0) },
                        { label: '列 2', sum: getColSum(1) },
                        { label: '列 3', sum: getColSum(2) },
                    ].map((s, i) => (
                        <div key={i} className="flex items-center justify-between text-xs">
                            <span className="text-slate-500">{s.label}</span>
                            <div className="flex items-center gap-2">
                                <span className="font-mono">{s.sum}</span>
                                {s.sum === targetSum ? <CheckCircle2 size={12} className="text-green-500" /> : <div className="w-3 h-3 rounded-full border border-slate-200" />}
                            </div>
                        </div>
                    ))}
                    <hr className="border-slate-100" />
                    <div className="flex items-center justify-between text-xs font-bold">
                        <span className="text-slate-500">对角线</span>
                        <div className="flex gap-2">
                            {getDiag1Sum() === targetSum && <Sparkles size={12} className="text-amber-500" />}
                            {getDiag2Sum() === targetSum && <Sparkles size={12} className="text-amber-500" />}
                        </div>
                    </div>
                </div>

                {/* The Grid */}
                <div className="relative group order-1 md:order-2">
                    <div className="grid grid-cols-3 gap-3 bg-slate-100 dark:bg-slate-900 p-4 rounded-3xl shadow-inner border-4 border-slate-200 dark:border-slate-800">
                        {grid.map((row, ri) => (
                            row.map((cell, ci) => (
                                <input
                                    key={`${ri}-${ci}`}
                                    type="number"
                                    value={cell === 0 ? '' : cell}
                                    placeholder="?"
                                    onChange={(e) => handleChange(ri, ci, e.target.value)}
                                    className={`w-16 h-16 sm:w-20 sm:h-20 text-center text-3xl font-black rounded-2xl border-2 transition-all outline-none ${cell === 0
                                            ? 'bg-white/80 border-transparent text-slate-300'
                                            : 'bg-white border-white text-indigo-600 shadow-lg scale-105'
                                        } focus:ring-4 focus:ring-purple-200 focus:border-purple-400`}
                                />
                            ))
                        ))}
                    </div>

                    {/* Victory Overlay */}
                    {isComplete() && (
                        <div className="absolute inset-0 bg-indigo-600/90 rounded-3xl flex flex-col items-center justify-center text-white animate-in zoom-in duration-500">
                            <Trophy size={64} className="mb-4 text-yellow-300 animate-bounce" />
                            <h4 className="text-2xl font-black">恭喜达成！</h4>
                            <p className="text-xs opacity-70">完美的幻方</p>
                            <button onClick={reset} className="mt-4 px-6 py-2 bg-white text-indigo-600 rounded-full text-sm font-bold">重新挑战</button>
                        </div>
                    )}
                </div>
            </div>

            {/* Hint Section */}
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border-l-4 border-indigo-500">
                <h4 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> 破阵口诀：
                </h4>
                <div className="grid sm:grid-cols-2 gap-4 text-xs text-slate-600 dark:text-slate-400">
                    <div className="p-3 bg-white dark:bg-slate-800 rounded-xl">
                        <span className="font-bold text-indigo-500">中心数：</span>
                        公共和 ÷ 3 = 15 ÷ 3 = <strong>5</strong>。它是一切的轴心。
                    </div>
                    <div className="p-3 bg-white dark:bg-slate-800 rounded-xl">
                        <span className="font-bold text-indigo-500">角格偶：</span>
                        四个角落通常填 <strong>偶数</strong> (2, 4, 6, 8)，边格填奇数。
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <button onClick={reset} className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors text-sm font-medium">
                    <RefreshCcw size={16} /> 重置题目
                </button>
            </div>
        </div>
    );
};

export default MagicSquareLab;

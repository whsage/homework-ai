import React, { useState } from 'react';
import { Grid3X3, ArrowRight, Minus, Plus, Sparkles } from 'lucide-react';

const MultiplicationLab = () => {
    const [rows, setRows] = useState(3);
    const [cols, setCols] = useState(4);

    const maxVal = 9;

    const total = rows * cols;

    // Generate icons grid
    const renderGrid = () => {
        const grid = [];
        for (let r = 0; r < rows; r++) {
            const rowBlocks = [];
            for (let c = 0; c < cols; c++) {
                rowBlocks.push(
                    <div
                        key={`${r}-${c}`}
                        className="w-8 h-8 md:w-10 md:h-10 border-2 border-indigo-200 bg-indigo-100 dark:border-indigo-800 dark:bg-indigo-900/50 rounded-md shadow-sm transform transition-all hover:scale-110 flex items-center justify-center text-lg"
                    >
                        🍎
                    </div>
                );
            }
            grid.push(<div key={`r-${r}`} className="flex gap-2">{rowBlocks}</div>);
        }
        return grid;
    };

    return (
        <div className="space-y-6">
            <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-2">
                    <Grid3X3 className="text-indigo-500" /> 乘法果园列阵
                </h3>
                <p className="text-slate-500 dark:text-slate-400">试试调整行和列，看看总数怎么变化！</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 bg-white dark:bg-slate-800 p-6 md:p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-xl">

                {/* Controls */}
                <div className="flex flex-col gap-6 justify-center flex-1">
                    {/* Rows */}
                    <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-2xl border-l-4 border-rose-400">
                        <div className="text-sm font-bold text-rose-600 dark:text-rose-400 mb-3 text-center">排（行数）</div>
                        <div className="flex justify-center items-center gap-4">
                            <button
                                onClick={() => setRows(Math.max(1, rows - 1))}
                                className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 shadow flex items-center justify-center text-rose-500 hover:bg-rose-100"
                            ><Minus size={18} /></button>
                            <span className="text-3xl font-black text-rose-500 w-8 text-center">{rows}</span>
                            <button
                                onClick={() => setRows(Math.min(maxVal, rows + 1))}
                                className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 shadow flex items-center justify-center text-rose-500 hover:bg-rose-100"
                            ><Plus size={18} /></button>
                        </div>
                    </div>

                    <div className="flex justify-center text-2xl font-bold text-slate-300">×</div>

                    {/* Columns */}
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-2xl border-l-4 border-green-400">
                        <div className="text-sm font-bold text-green-600 dark:text-green-400 mb-3 text-center">个（每行列数）</div>
                        <div className="flex justify-center items-center gap-4">
                            <button
                                onClick={() => setCols(Math.max(1, cols - 1))}
                                className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 shadow flex items-center justify-center text-green-500 hover:bg-green-100"
                            ><Minus size={18} /></button>
                            <span className="text-3xl font-black text-green-500 w-8 text-center">{cols}</span>
                            <button
                                onClick={() => setCols(Math.min(maxVal, cols + 1))}
                                className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 shadow flex items-center justify-center text-green-500 hover:bg-green-100"
                            ><Plus size={18} /></button>
                        </div>
                    </div>
                </div>

                {/* Equation & Total */}
                <div className="flex flex-col items-center justify-center shrink-0">
                    <ArrowRight className="text-slate-300 w-10 h-10 mb-4 hidden md:block" />

                    <div className="bg-indigo-600 text-white px-8 py-6 rounded-3xl shadow-lg flex flex-col items-center gap-2 transform transition-transform hover:scale-105">
                        <span className="text-indigo-200 font-bold uppercase tracking-wider text-sm">总共有苹果</span>
                        <div className="text-5xl font-black">
                            {total}
                        </div>
                        <div className="text-indigo-200 mt-2 font-medium bg-indigo-700/50 px-4 py-1 rounded-full">
                            {rows} × {cols} = {total}
                        </div>
                    </div>
                </div>

                {/* Grid Visualizer */}
                <div className="flex-1 flex items-center justify-center min-h-[250px] bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-6 border-2 border-dashed border-slate-200 dark:border-slate-700 overflow-auto">
                    <div className="flex flex-col gap-2">
                        {renderGrid()}
                    </div>
                </div>

            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-4 flex gap-3">
                <div className="text-xl mt-1">💡</div>
                <div>
                    <p className="font-bold text-amber-700 dark:text-amber-400 mb-1">什么叫做乘法呀？</p>
                    <p className="text-sm text-amber-900/80 dark:text-amber-200/80 leading-relaxed">
                        你看！这里有 <strong>{rows}</strong> 排苹果，每一排都有 <strong>{cols}</strong> 个。
                        如果用加法，就是把 <strong>{rows}</strong> 个 <strong>{cols}</strong> 加起来：{Array(rows).fill(cols).join(' + ')} = {total}。<br />
                        写成乘法更简单！就是 <strong>{rows} × {cols} = {total}</strong>。乘法就是“很多个一样的东西加起来”的魔法哦！
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MultiplicationLab;

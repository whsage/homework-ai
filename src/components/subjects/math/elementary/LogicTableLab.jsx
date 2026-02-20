import React, { useState } from 'react';
import { Search, Check, X, ShieldQuestion, HelpCircle, Lightbulb, Trophy } from 'lucide-react';

const LogicTableLab = () => {
    const puzzle = {
        clues: [
            "甲不会下棋 (A is not Chess)",
            "乙不会踢球 (B is not Football)",
            "甲不会游泳 (A is not Swim)",
            "每个人只精通一项，且互不相同"
        ],
        rows: ["甲", "乙", "丙"],
        cols: ["下棋", "踢球", "游泳"],
        answer: {
            "甲": "踢球",
            "乙": "下棋",
            "丙": "游泳"
        }
    };

    const [grid, setGrid] = useState(
        puzzle.rows.reduce((acc, row) => ({
            ...acc,
            [row]: puzzle.cols.reduce((cAcc, col) => ({ ...cAcc, [col]: 'empty' }), {})
        }), {})
    );

    const toggleCell = (row, col) => {
        const current = grid[row][col];
        let next = 'empty';
        if (current === 'empty') next = 'cross';
        else if (current === 'cross') next = 'check';
        else next = 'empty';

        setGrid({
            ...grid,
            [row]: { ...grid[row], [col]: next }
        });
    };

    const checkSolution = () => {
        let allCorrect = true;
        puzzle.rows.forEach(r => {
            puzzle.cols.forEach(c => {
                const isCheck = grid[r][c] === 'check';
                const shouldBeCheck = puzzle.answer[r] === c;
                if (isCheck !== shouldBeCheck) allCorrect = false;
            });
        });
        return allCorrect;
    };

    const isWinner = checkSolution() && puzzle.rows.every(r => puzzle.cols.some(c => grid[r][c] === 'check'));

    return (
        <div className="space-y-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-3">
                    <Search className="text-indigo-500 w-8 h-8" /> 逻辑侦探社
                </h3>
                <p className="text-slate-500 text-sm">利用线索在表格中打 ✅ 或 ❌，找出真相！</p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
                {/* Clues Pane */}
                <div className="md:col-span-2 space-y-4">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <HelpCircle size={14} /> 案件线索
                    </div>
                    <div className="space-y-2">
                        {puzzle.clues.map((clue, i) => (
                            <div key={i} className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 text-sm text-slate-600 dark:text-slate-300 flex items-start gap-3">
                                <span className="flex-shrink-0 w-5 h-5 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 border border-indigo-200 rounded-full flex items-center justify-center text-[10px] font-bold">{i + 1}</span>
                                {clue}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Grid Pane */}
                <div className="md:col-span-3 flex flex-col items-center justify-center">
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-3xl border-4 border-slate-100 dark:border-slate-800 shadow-inner overflow-x-auto w-full">
                        <table className="w-full border-separate border-spacing-2">
                            <thead>
                                <tr>
                                    <th className="w-16"></th>
                                    {puzzle.cols.map(col => (
                                        <th key={col} className="p-2 text-xs font-black text-slate-400 uppercase tracking-tighter">{col}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {puzzle.rows.map(row => (
                                    <tr key={row}>
                                        <td className="p-2 text-sm font-bold text-slate-700 dark:text-slate-200 text-right">{row}</td>
                                        {puzzle.cols.map(col => (
                                            <td key={col}>
                                                <button
                                                    onClick={() => toggleCell(row, col)}
                                                    className={`w-full aspect-square rounded-2xl border-2 transition-all flex items-center justify-center ${grid[row][col] === 'check' ? 'bg-green-500 border-green-500 text-white shadow-lg' :
                                                            grid[row][col] === 'cross' ? 'bg-rose-500 border-rose-500 text-white shadow-lg' :
                                                                'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-indigo-300'
                                                        }`}
                                                >
                                                    {grid[row][col] === 'check' && <Check size={24} strokeWidth={4} />}
                                                    {grid[row][col] === 'cross' && <X size={24} strokeWidth={4} />}
                                                </button>
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                        <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold">
                            点击单元格切换：
                            <span className="flex items-center gap-1 ml-2"><div className="w-3 h-3 bg-rose-500 rounded" /> 排除</span>
                            <span className="flex items-center gap-1 ml-2"><div className="w-3 h-3 bg-green-500 rounded" /> 确认</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Victory / Tips */}
            <div className="relative">
                {isWinner ? (
                    <div className="bg-green-100 dark:bg-green-900/30 p-8 rounded-3xl border-2 border-green-500 flex flex-col items-center text-center animate-in zoom-in duration-500">
                        <Trophy size={48} className="text-green-500 mb-2" />
                        <h4 className="text-xl font-black text-green-700 dark:text-green-400">大侦探，真相大白！</h4>
                        <p className="text-sm text-green-600">你成功破解了所有人的爱好。</p>
                    </div>
                ) : (
                    <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border-l-4 border-amber-400 flex items-start gap-4">
                        <Lightbulb className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                        <div className="space-y-2">
                            <h4 className="font-bold text-amber-800 dark:text-amber-200 text-sm">侦探锦囊</h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                每个人只会有 ✅ 爱好。所以一旦你确定了一行的 ✅，那么该行和该列的其他位置都可以填 ❌。
                                排除所有错的，剩下的一定是对的！
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LogicTableLab;

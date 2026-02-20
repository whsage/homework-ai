import React, { useState, useMemo } from 'react';
import { Hash, List, Users, ArrowRight, Info } from 'lucide-react';

const CombinatoricsVisualizer = () => {
    const [n, setN] = useState(5);
    const [m, setM] = useState(3);
    const [mode, setMode] = useState('permutation'); // permutation, combination

    const factorial = (num) => {
        if (num <= 1) return 1;
        let res = 1;
        for (let i = 2; i <= num; i++) res *= i;
        return res;
    };

    const permutation = useMemo(() => {
        if (m > n) return 0;
        return factorial(n) / factorial(n - m);
    }, [n, m]);

    const combination = useMemo(() => {
        if (m > n) return 0;
        return permutation / factorial(m);
    }, [permutation, m]);

    // Generate visual items
    const items = Array.from({ length: n }, (_, i) => ({
        id: i + 1,
        color: `hsl(${(i * 360) / n}, 70%, 60%)`,
        label: String.fromCharCode(65 + i) // A, B, C...
    }));

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex bg-slate-200 dark:bg-slate-700 p-1 rounded-lg">
                        <button
                            onClick={() => setMode('permutation')}
                            className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${mode === 'permutation'
                                ? 'bg-white dark:bg-slate-600 shadow text-indigo-600 dark:text-indigo-400'
                                : 'text-slate-600 dark:text-slate-400'
                                }`}
                        >
                            排列 A(n,m)
                        </button>
                        <button
                            onClick={() => setMode('combination')}
                            className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${mode === 'combination'
                                ? 'bg-white dark:bg-slate-600 shadow text-purple-600 dark:text-purple-400'
                                : 'text-slate-600 dark:text-slate-400'
                                }`}
                        >
                            组合 C(n,m)
                        </button>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex flex-col">
                            <label className="text-[10px] font-black text-slate-400 uppercase">n 总数</label>
                            <input
                                type="number"
                                min="1"
                                max="10"
                                value={n}
                                onChange={(e) => {
                                    const val = Math.min(10, Math.max(1, parseInt(e.target.value) || 1));
                                    setN(val);
                                    if (m > val) setM(val);
                                }}
                                className="w-16 px-2 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded text-sm font-bold focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[10px] font-black text-slate-400 uppercase">m 选取数</label>
                            <input
                                type="number"
                                min="0"
                                max={n}
                                value={m}
                                onChange={(e) => setM(Math.min(n, Math.max(0, parseInt(e.target.value) || 0)))}
                                className="w-16 px-2 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded text-sm font-bold focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-8">
                {/* Visual Representation Area */}
                <div className="mb-10">
                    <div className="text-center mb-6">
                        <h3 className="text-sm font-bold text-slate-500 flex items-center justify-center gap-2">
                            {mode === 'permutation' ? <List className="w-4 h-4" /> : <Users className="w-4 h-4" />}
                            从 {n} 个不同元素中取出 {m} 个进行{mode === 'permutation' ? '排列' : '组合'}
                        </h3>
                    </div>

                    <div className="flex flex-col items-center gap-8">
                        {/* Pool of elements */}
                        <div className="flex flex-wrap justify-center gap-3 p-4 bg-slate-50 dark:bg-slate-900/30 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 min-h-[80px] w-full max-w-md">
                            {items.map(item => (
                                <div
                                    key={item.id}
                                    style={{ backgroundColor: item.color }}
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black shadow-lg transform hover:scale-110 transition-transform"
                                >
                                    {item.label}
                                </div>
                            ))}
                        </div>

                        <div className="animate-bounce">
                            <ArrowRight className="w-6 h-6 text-slate-300 transform rotate-90" />
                        </div>

                        {/* Selection Result */}
                        <div className="flex gap-3 min-h-[60px]">
                            {Array.from({ length: m }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-12 h-12 rounded-xl border-4 flex items-center justify-center font-black text-xl shadow-inner transition-all ${mode === 'permutation'
                                            ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600'
                                            : 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-600'
                                        }`}
                                >
                                    {mode === 'permutation' ? i + 1 : '?'}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Calculation Area */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                        <div className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-2">计算公式</div>
                        <div className="font-mono text-2xl font-black text-slate-800 dark:text-white">
                            {mode === 'permutation'
                                ? `A(${n}, ${m}) = ${n}! / (${n}-${m})!`
                                : `C(${n}, ${m}) = A(${n}, ${m}) / ${m}!`}
                        </div>
                    </div>
                    <div className={`p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl transform transition-all hover:scale-105 ${mode === 'permutation' ? 'bg-indigo-600 text-white' : 'bg-purple-600 text-white'
                        }`}>
                        <div className="text-[10px] uppercase tracking-widest font-black opacity-60 mb-1">结果查询</div>
                        <div className="text-4xl font-black">
                            {(mode === 'permutation' ? permutation : combination).toLocaleString()}
                        </div>
                        <div className="text-[10px] mt-2 font-bold uppercase opacity-80">
                            共有这么多种{mode === 'permutation' ? '排列' : '组合'}方式
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <Info className="w-4 h-4 text-slate-400 mt-0.5" />
                <div className="text-xs text-slate-500 leading-relaxed">
                    <strong>排列 (Permutation):</strong> 考虑元素的顺序。例如选出3人分别担任班长、学委、文体委员。 <br />
                    <strong>组合 (Combination):</strong> 不考虑元素的顺序。例如选出3人组成一个值日小组。
                </div>
            </div>
        </div>
    );
};

export default CombinatoricsVisualizer;

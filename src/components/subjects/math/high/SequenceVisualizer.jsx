import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';
import { List, Calculator, TrendingUp, Info } from 'lucide-react';

const SequenceVisualizer = () => {
    const [type, setType] = useState('arithmetic'); // arithmetic, geometric
    const [a1, setA1] = useState(1);
    const [step, setStep] = useState(2); // 'd' for arithmetic, 'r' for geometric
    const [n, setN] = useState(10);

    const data = useMemo(() => {
        const result = [];
        let current = a1;
        for (let i = 1; i <= n; i++) {
            result.push({
                n: i,
                value: Number(current.toFixed(maxDecimals(current))),
            });
            if (type === 'arithmetic') {
                current += step;
            } else {
                current *= step;
            }

            // Limit growth to prevent UI breakage with huge numbers
            if (Math.abs(current) > 1000000) break;
        }
        return result;
    }, [type, a1, step, n]);

    function maxDecimals(num) {
        if (Math.abs(num) > 100) return 1;
        if (Math.abs(num) > 10) return 2;
        return 3;
    }

    const sum = useMemo(() => {
        return data.reduce((acc, curr) => acc + curr.value, 0);
    }, [data]);

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex bg-slate-200 dark:bg-slate-700 p-1 rounded-lg">
                        <button
                            onClick={() => {
                                setType('arithmetic');
                                setStep(2);
                            }}
                            className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${type === 'arithmetic'
                                ? 'bg-white dark:bg-slate-600 shadow text-indigo-600 dark:text-indigo-400'
                                : 'text-slate-600 dark:text-slate-400'
                                }`}
                        >
                            等差数列 AP
                        </button>
                        <button
                            onClick={() => {
                                setType('geometric');
                                setStep(1.5);
                            }}
                            className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${type === 'geometric'
                                ? 'bg-white dark:bg-slate-600 shadow text-emerald-600 dark:text-emerald-400'
                                : 'text-slate-600 dark:text-slate-400'
                                }`}
                        >
                            等比数列 GP
                        </button>
                    </div>

                    <div className="flex gap-4 items-center">
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-500 uppercase">n 项数:</span>
                            <input
                                type="number"
                                min="1"
                                max="20"
                                value={n}
                                onChange={(e) => setN(parseInt(e.target.value) || 1)}
                                className="w-16 px-2 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded text-sm font-bold text-indigo-600"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                                首项 a₁ = {a1}
                            </label>
                        </div>
                        <input
                            type="range"
                            min="-10"
                            max="10"
                            step="0.5"
                            value={a1}
                            onChange={(e) => setA1(parseFloat(e.target.value))}
                            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                                {type === 'arithmetic' ? `公差 d = ${step}` : `公比 r = ${step}`}
                            </label>
                        </div>
                        <input
                            type="range"
                            min={type === 'arithmetic' ? -5 : -3}
                            max={type === 'arithmetic' ? 5 : 3}
                            step={0.1}
                            value={step}
                            onChange={(e) => setStep(parseFloat(e.target.value))}
                            className={`w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer ${type === 'arithmetic' ? 'accent-indigo-600' : 'accent-emerald-600'}`}
                        />
                    </div>
                </div>
            </div>

            <div className="p-6 relative">
                <div className="absolute top-2 right-6 z-10 hidden md:block">
                    <div className="bg-indigo-50 dark:bg-indigo-900/30 p-3 rounded-xl border border-indigo-100 dark:border-indigo-800 shadow-sm">
                        <div className="text-[10px] uppercase tracking-wider font-bold text-indigo-500 dark:text-indigo-400 mb-1">
                            前 {data.length} 项和 Sₙ
                        </div>
                        <div className="text-xl font-black text-indigo-700 dark:text-indigo-300">
                            {sum.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        </div>
                    </div>
                </div>

                <div className="h-[300px] w-full mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
                            <XAxis
                                dataKey="n"
                                label={{ value: '项数 n', position: 'bottom', offset: 0, fontSize: 12 }}
                                stroke="#94a3b8"
                                fontSize={12}
                            />
                            <YAxis
                                stroke="#94a3b8"
                                fontSize={12}
                            />
                            <Tooltip
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                                cursor={{ fill: '#f1f5f9' }}
                                formatter={(value) => [value, '项值 aₙ']}
                                labelFormatter={(label) => `第 ${label} 项`}
                            />
                            <ReferenceLine y={0} stroke="#475569" strokeWidth={1} />
                            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={type === 'arithmetic' ? '#4f46e5' : '#10b981'}
                                        fillOpacity={0.8 - (index * 0.02)}
                                    />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 justify-center">
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700">
                        <Calculator className="w-4 h-4 text-indigo-500" />
                        <span className="text-xs font-mono">
                            {type === 'arithmetic'
                                ? `aₙ = ${a1} + (n-1)·${step}`
                                : `aₙ = ${a1} · (${step})ⁿ⁻¹`}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 font-bold text-xs">
                        <TrendingUp className="w-4 h-4 text-emerald-500" />
                        {type === 'arithmetic'
                            ? (step > 0 ? "递增" : step < 0 ? "递减" : "常数")
                            : (Math.abs(step) > 1 ? "爆炸式增长" : Math.abs(step) < 1 ? "收敛" : "常数")}
                    </div>
                </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <Info className="w-4 h-4 text-slate-400 mt-0.5" />
                <p className="text-[11px] text-slate-500 leading-relaxed">
                    等差数列（Arithmetic Progression）每一项与其前一项之差为定值。等比数列（Geometric Progression）每一项与其前一项之比为定值。
                    注意：等比数列的公比若为负数，数值会正负交替波动。
                </p>
            </div>
        </div>
    );
};

export default SequenceVisualizer;

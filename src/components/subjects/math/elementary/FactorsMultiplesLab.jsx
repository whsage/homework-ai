import React, { useState, useEffect } from 'react';
import { Layers, Percent, Search, RefreshCw, Star, Hash, CircleDot } from 'lucide-react';

const FactorsMultiplesLab = () => {
    const [num1, setNum1] = useState(12);
    const [num2, setNum2] = useState(18);
    const [factors1, setFactors1] = useState([]);
    const [factors2, setFactors2] = useState([]);

    useEffect(() => {
        const getFactors = (n) => {
            const f = [];
            for (let i = 1; i <= n; i++) {
                if (n % i === 0) f.push(i);
            }
            return f;
        };
        setFactors1(getFactors(num1));
        setFactors2(getFactors(num2));
    }, [num1, num2]);

    const commonFactors = factors1.filter(f => factors2.includes(f));
    const gcd = Math.max(...commonFactors);

    return (
        <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-amber-500 p-4 rounded-3xl shadow-lg">
                            <Hash className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-slate-800 dark:text-white">因数与倍数探究</h3>
                            <p className="text-sm text-slate-500 font-medium italic">寻找数字之间的神秘关联</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 px-8 py-4 rounded-[2rem] border-2 border-amber-100 dark:border-amber-900/30 shadow-xl flex items-center gap-6">
                        <div className="text-center">
                            <p className="text-[10px] font-black text-slate-400 mb-1 uppercase tracking-widest">最大公因数 (GCD)</p>
                            <p className="text-4xl font-black text-amber-600 dark:text-amber-400 font-mono">{gcd}</p>
                        </div>
                    </div>
                </div>

                {/* Input Panel */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4 bg-white dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md">
                        <label className="text-sm font-black text-slate-500 flex items-center gap-2">
                            <CircleDot className="w-4 h-4 text-blue-500" /> 数字 A
                        </label>
                        <input
                            type="number" value={num1}
                            onChange={(e) => setNum1(Math.max(1, parseInt(e.target.value) || 1))}
                            className="w-full text-3xl font-black bg-slate-50 dark:bg-slate-900 border-2 border-blue-100 dark:border-blue-900/30 rounded-2xl px-4 py-3 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-blue-600"
                        />
                        <div className="flex flex-wrap gap-2 mt-2">
                            {factors1.map(f => (
                                <span key={f} className={`px-2 py-1 rounded-lg text-[10px] font-bold ${commonFactors.includes(f) ? 'bg-amber-100 text-amber-700' : 'bg-blue-50 text-blue-600'}`}>{f}</span>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4 bg-white dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md">
                        <label className="text-sm font-black text-slate-500 flex items-center gap-2">
                            <CircleDot className="w-4 h-4 text-emerald-500" /> 数字 B
                        </label>
                        <input
                            type="number" value={num2}
                            onChange={(e) => setNum2(Math.max(1, parseInt(e.target.value) || 1))}
                            className="w-full text-3xl font-black bg-slate-50 dark:bg-slate-900 border-2 border-emerald-100 dark:border-emerald-900/30 rounded-2xl px-4 py-3 focus:ring-4 focus:ring-emerald-100 outline-none transition-all text-emerald-600"
                        />
                        <div className="flex flex-wrap gap-2 mt-2">
                            {factors2.map(f => (
                                <span key={f} className={`px-2 py-1 rounded-lg text-[10px] font-bold ${commonFactors.includes(f) ? 'bg-amber-100 text-amber-700' : 'bg-emerald-50 text-emerald-600'}`}>{f}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Venn Diagram Visualization */}
                <div className="relative h-[400px] bg-white dark:bg-slate-800/50 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 flex items-center justify-center p-8 overflow-hidden">
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 text-xs font-black text-slate-400 uppercase tracking-widest">因数韦恩图</div>

                    <div className="relative w-full max-w-lg flex justify-center items-center h-full">
                        {/* Circle 1 */}
                        <div className="absolute left-0 w-72 h-72 border-4 border-blue-400/40 rounded-full flex flex-col items-start justify-center p-12 bg-blue-400/5">
                            <span className="text-blue-500 font-black text-sm mb-4">A 的独有因数</span>
                            <div className="flex flex-wrap gap-2">
                                {factors1.filter(f => !commonFactors.includes(f)).map(f => (
                                    <span key={f} className="text-blue-600 font-bold bg-blue-100/50 px-2 py-0.5 rounded-md text-sm">{f}</span>
                                ))}
                            </div>
                        </div>

                        {/* Circle 2 */}
                        <div className="absolute right-0 w-72 h-72 border-4 border-emerald-400/40 rounded-full flex flex-col items-end justify-center p-12 bg-emerald-400/5">
                            <span className="text-emerald-500 font-black text-sm mb-4">B 的独有因数</span>
                            <div className="flex flex-wrap gap-2 justify-end">
                                {factors2.filter(f => !commonFactors.includes(f)).map(f => (
                                    <span key={f} className="text-emerald-600 font-bold bg-emerald-100/50 px-2 py-0.5 rounded-md text-sm">{f}</span>
                                ))}
                            </div>
                        </div>

                        {/* Common (Overlapping) */}
                        <div className="absolute z-10 w-48 h-48 border-4 border-amber-400 rounded-full flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-800 shadow-2xl">
                            <span className="text-amber-600 font-black text-xs mb-2">公因数</span>
                            <div className="flex flex-wrap justify-center gap-2">
                                {commonFactors.map(f => (
                                    <span key={f} className={`text-xl font-black ${f === gcd ? 'text-amber-600 scale-125' : 'text-amber-500 opacity-60'}`}>{f}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-slate-800/50 rounded-3xl border border-slate-700">
                    <h4 className="text-lg font-black text-white mb-4 flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-400" /> 学习锦囊
                    </h4>
                    <ul className="text-sm text-slate-400 space-y-3 font-medium">
                        <li className="flex items-start gap-2"><span className="text-indigo-500">◈</span> 因数是能整除原数的数，因数的个数是有限的。</li>
                        <li className="flex items-start gap-2"><span className="text-indigo-500">◈</span> 最大公因数是两个数共有因数中最大的那一个。</li>
                        <li className="flex items-start gap-2"><span className="text-indigo-500">◈</span> 我们还可以继续探索这两个数的最小公倍数！</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FactorsMultiplesLab;

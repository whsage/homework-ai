import React, { useState } from 'react';
import { Beaker, FlaskConical, Droplet, Plus, Info, RefreshCw } from 'lucide-react';

const ConcentrationLab = () => {
    const [salt, setSalt] = useState(20);
    const [water, setWater] = useState(80);

    const solution = salt + water;
    const concentration = ((salt / solution) * 100).toFixed(1);

    // Particle calculation
    const particleCount = Math.floor((salt / 100) * 50);

    return (
        <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center space-y-2">
                    <h3 className="text-2xl font-black text-slate-800 dark:text-white flex items-center justify-center gap-3">
                        <FlaskConical className="text-indigo-500" /> 魔法浓度实验室
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">溶质、溶剂、溶液——掌握它们之间的平衡。</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Beaker Visualizer */}
                    <div className="relative flex flex-col items-center">
                        <div className="relative w-48 h-64 border-x-4 border-b-4 border-slate-300 dark:border-slate-700 rounded-b-3xl bg-white/30 dark:bg-slate-800/30 overflow-hidden shadow-inner">
                            {/* Water (Solution) */}
                            <div
                                className="absolute bottom-0 w-full bg-blue-400 transition-all duration-700 ease-out"
                                style={{ height: `${(solution / 200) * 100}%` }}
                            >
                                {/* Salt Particles */}
                                {Array.from({ length: particleCount }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-60 animate-pulse"
                                        style={{
                                            left: `${Math.random() * 90}%`,
                                            bottom: `${Math.random() * 90}%`,
                                            transition: 'all 0.5s ease-out'
                                        }}
                                    />
                                ))}
                                {/* Surface waves */}
                                <div className="absolute top-0 left-0 w-full h-2 bg-blue-300 transform -translate-y-1 opacity-50 block" />
                            </div>
                        </div>

                        {/* Measurement tags */}
                        <div className="mt-8 grid grid-cols-3 gap-2 w-full max-w-sm">
                            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-3 rounded-2xl text-center">
                                <span className="text-[10px] text-indigo-400 block uppercase font-black">盐 (溶质)</span>
                                <span className="text-lg font-black text-indigo-600">{salt}g</span>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-2xl text-center">
                                <span className="text-[10px] text-blue-400 block uppercase font-black">水 (溶剂)</span>
                                <span className="text-lg font-black text-blue-600">{water}g</span>
                            </div>
                            <div className="bg-emerald-50 dark:bg-emerald-900/30 p-3 rounded-2xl text-center border-2 border-emerald-500/30">
                                <span className="text-[10px] text-emerald-500 block uppercase font-black">总重 (溶液)</span>
                                <span className="text-lg font-black text-emerald-600">{solution}g</span>
                            </div>
                        </div>
                    </div>

                    {/* Controls & Result */}
                    <div className="space-y-8">
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-700 relative overflow-hidden">
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/5 rounded-full" />

                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-sm font-bold text-slate-500">
                                        <span className="flex items-center gap-2"><Plus size={14} className="text-indigo-500" /> 加入溶质 (盐)</span>
                                        <span className="text-indigo-600 font-mono">{salt} g</span>
                                    </div>
                                    <input
                                        type="range" min="0" max="100" value={salt}
                                        onChange={(e) => setSalt(parseInt(e.target.value))}
                                        className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-sm font-bold text-slate-500">
                                        <span className="flex items-center gap-2"><Droplet size={14} className="text-blue-500" /> 加入溶剂 (水)</span>
                                        <span className="text-blue-600 font-mono">{water} g</span>
                                    </div>
                                    <input
                                        type="range" min="10" max="150" value={water}
                                        onChange={(e) => setWater(parseInt(e.target.value))}
                                        className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-700 text-center">
                                <div className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2">当前溶液浓度</div>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-6xl font-black text-slate-900 dark:text-white">{concentration}</span>
                                    <span className="text-2xl font-bold text-indigo-500">%</span>
                                </div>
                                <div className="mt-4 inline-block px-4 py-1.5 bg-slate-100 dark:bg-slate-900 rounded-full text-xs font-mono text-slate-500">
                                    计算式: {salt} ÷ ({salt} + {water}) × 100%
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => setWater(w => Math.min(150, w + 30))}
                                className="flex-1 py-4 bg-white dark:bg-slate-800 border-2 border-blue-500/20 text-blue-600 rounded-2xl font-bold text-sm shadow-sm hover:bg-blue-50 transition-colors"
                            >
                                💧 加水稀释
                            </button>
                            <button
                                onClick={() => setWater(w => Math.max(10, w - 20))}
                                className="flex-1 py-4 bg-white dark:bg-slate-800 border-2 border-orange-500/20 text-orange-600 rounded-2xl font-bold text-sm shadow-sm hover:bg-orange-50 transition-colors"
                            >
                                ☀️ 蒸发浓缩
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-4 flex gap-4 items-start">
                    <Info className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-900/80 dark:text-amber-200/80 leading-relaxed">
                        <strong>实验总结：</strong> 浓度的大小取决于<strong>溶质</strong>在<strong>溶液</strong>中的占比。注意！加水时溶质是不变的，只有溶液变大了，所以浓度会降低。这就是稀释的原理。
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ConcentrationLab;

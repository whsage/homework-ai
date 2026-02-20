import React, { useState } from 'react';
import { Droplet, Info } from 'lucide-react';

const RatioProportionLab = () => {
    const [syrup, setSyrup] = useState(2);
    const [water, setWater] = useState(3);

    const total = syrup + water;
    const syrupRatio = ((syrup / total) * 100).toFixed(1);
    const sweetnessLabel = syrup / water > 1 ? "超级甜！" : syrup / water > 0.5 ? "很甜" : syrup / water > 0.3 ? "刚刚好" : "有点淡";
    const sweetnessColor = syrup / water > 1 ? "text-orange-600" : syrup / water > 0.5 ? "text-amber-600" : syrup / water > 0.3 ? "text-emerald-600" : "text-blue-600";

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const common = gcd(syrup, water);
    const simpleRatio = `${syrup / common}:${water / common}`;

    return (
        <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center space-y-2">
                    <h3 className="text-2xl font-black text-slate-800 dark:text-white flex items-center justify-center gap-3">
                        <Droplet className="text-orange-500 fill-orange-500" /> 黄金比例果汁店
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">调制你的专属果汁，掌握比和比例的秘密！</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Visualizer */}
                    <div className="relative flex flex-col items-center gap-6">
                        <div className="relative w-48 h-64 bg-white/50 dark:bg-slate-800/50 rounded-b-[4rem] rounded-t-xl border-4 border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden">
                            {/* Water Layer */}
                            <div
                                className="absolute bottom-0 w-full bg-blue-400/80 dark:bg-blue-500/60 transition-all duration-1000 ease-out"
                                style={{ height: '100%' }}
                            />
                            {/* Syrup Layer */}
                            <div
                                className="absolute bottom-0 w-full bg-orange-500/80 dark:bg-orange-600/70 transition-all duration-1000 ease-out"
                                style={{ height: `${syrupRatio}%` }}
                            />
                            {/* Bubbles animation */}
                            <div className="absolute inset-0 pointer-events-none opacity-30">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className={`absolute w-3 h-3 bg-white rounded-full animate-bounce`} style={{ left: `${20 * i + 10}%`, bottom: `${Math.random() * 80}%`, animationDelay: `${i * 0.2}s` }} />
                                ))}
                            </div>
                        </div>

                        <div className="text-center bg-white dark:bg-slate-800 px-6 py-3 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
                            <span className="text-sm text-slate-400 block mb-1">当前口感</span>
                            <span className={`text-xl font-bold ${sweetnessColor}`}>{sweetnessLabel}</span>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <div className="flex justify-between items-end">
                                    <label className="text-sm font-bold text-orange-600 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-orange-500" /> 浓缩原汁 (份)
                                    </label>
                                    <span className="text-2xl font-black text-slate-700 dark:text-slate-200">{syrup}</span>
                                </div>
                                <input
                                    type="range" min="1" max="10" step="1" value={syrup}
                                    onChange={(e) => setSyrup(parseInt(e.target.value))}
                                    className="w-full h-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg appearance-none cursor-pointer accent-orange-500"
                                />
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between items-end">
                                    <label className="text-sm font-bold text-blue-600 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500" /> 纯净水 (份)
                                    </label>
                                    <span className="text-2xl font-black text-slate-700 dark:text-slate-200">{water}</span>
                                </div>
                                <input
                                    type="range" min="1" max="10" step="1" value={water}
                                    onChange={(e) => setWater(parseInt(e.target.value))}
                                    className="w-full h-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                />
                            </div>

                            <div className="bg-indigo-600 rounded-3xl p-6 text-white shadow-xl space-y-4">
                                <div className="flex justify-between items-center border-b border-white/20 pb-4">
                                    <span className="text-indigo-100 font-medium">果汁与水的比</span>
                                    <span className="text-3xl font-black tracking-wider">{syrup} : {water}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-indigo-100 font-medium">化简后的最简比</span>
                                    <span className="text-2xl font-bold bg-white/20 px-4 py-1 rounded-full">{simpleRatio}</span>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-indigo-100 font-medium font-mono text-sm">比值 = {syrup} ÷ {water}</span>
                                    <span className="text-xl font-mono font-bold">{(syrup / water).toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-4 flex gap-4 items-start">
                    <Info className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-900/80 dark:text-amber-200/80 leading-relaxed">
                        <strong>实验总结：</strong> 比号（:）前面是前项，后面是后项。求比值就是用前项除以后项。当我们按比例调制果汁时，无论总量多少，只要<strong>最简比</strong>不变，味道就永远一样！
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RatioProportionLab;

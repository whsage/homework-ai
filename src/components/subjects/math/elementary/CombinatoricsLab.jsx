import React, { useState } from 'react';
import { Shirt, ShoppingBag, CheckCircle2, RotateCcw, Info, Sparkles, Wand2, HelpCircle } from 'lucide-react';

const CombinatoricsLab = () => {
    const [tops, setTops] = useState(3);
    const [bottoms, setBottoms] = useState(2);
    const [showTree, setShowTree] = useState(false);

    const totalCombinations = tops * bottoms;

    return (
        <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-indigo-600 p-4 rounded-3xl shadow-lg shadow-indigo-200 dark:shadow-none">
                            <ShoppingBag className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-slate-800 dark:text-white">搭配魔法师</h3>
                            <p className="text-sm text-slate-500 font-medium italic">探索乘法原理的奥秘</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 px-8 py-4 rounded-[2rem] border-2 border-indigo-100 dark:border-indigo-900/30 shadow-xl flex items-center gap-6">
                        <div className="text-center">
                            <p className="text-[10px] font-black text-slate-400 mb-1 uppercase tracking-widest">总搭配数</p>
                            <p className="text-4xl font-black text-indigo-600 dark:text-indigo-400 font-mono">{totalCombinations}</p>
                        </div>
                        <div className="h-10 w-px bg-slate-100 dark:bg-slate-700"></div>
                        <div className="text-xs font-bold text-slate-500 italic max-w-[100px]">
                            {tops} × {bottoms} = {totalCombinations}
                        </div>
                    </div>
                </div>

                {/* Configuration Panel */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6 bg-white dark:bg-slate-800/50 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-lg">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-2xl">
                                <span className="text-sm font-black text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                                    <Shirt className="w-4 h-4" /> 上衣种类
                                </span>
                                <span className="bg-indigo-600 text-white text-xs font-black px-3 py-1 rounded-full">{tops}</span>
                            </div>
                            <input
                                type="range" min="1" max="6" value={tops}
                                onChange={(e) => setTops(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-2xl">
                                <span className="text-sm font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4" /> 裤子种类
                                </span>
                                <span className="bg-emerald-500 text-white text-xs font-black px-3 py-1 rounded-full">{bottoms}</span>
                            </div>
                            <input
                                type="range" min="1" max="5" value={bottoms}
                                onChange={(e) => setBottoms(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                            />
                        </div>

                        <button
                            onClick={() => setShowTree(!showTree)}
                            className={`w-full py-4 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 shadow-xl ${showTree ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-800 text-white hover:bg-slate-750'}`}
                        >
                            <Wand2 className="w-5 h-5" />
                            {showTree ? '收起树状图' : '展开树状图解析'}
                        </button>
                    </div>

                    {/* Visualization Area */}
                    <div className="relative bg-slate-100 dark:bg-slate-900/50 rounded-[2.5rem] p-8 border border-slate-200 dark:border-slate-800 min-h-[300px] flex items-center justify-center">
                        <div className="flex flex-wrap justify-center gap-4">
                            {Array.from({ length: totalCombinations }).map((_, i) => (
                                <div
                                    key={i}
                                    className="group relative bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-slate-100 dark:border-slate-700 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="flex flex-col items-center gap-2 relative z-10">
                                        <Shirt className={`w-8 h-8 ${['text-red-400', 'text-blue-400', 'text-yellow-400', 'text-green-400', 'text-purple-400', 'text-orange-400'][Math.floor(i / bottoms)]}`} />
                                        <div className={`w-6 h-4 rounded-sm ${['bg-slate-600', 'bg-indigo-900', 'bg-emerald-900', 'bg-amber-900', 'bg-slate-900'][i % bottoms]}`}></div>
                                    </div>
                                    <div className="absolute bottom-0 right-0 p-1">
                                        <CheckCircle2 className="w-3 h-3 text-slate-200 dark:text-slate-700 group-hover:text-indigo-400 transition-colors" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        {totalCombinations === 0 && <p className="text-slate-400 font-bold italic">准备开始你的搭配吧！</p>}
                    </div>
                </div>

                {/* Conceptual Breakdown */}
                {showTree && (
                    <div className="bg-indigo-50 dark:bg-indigo-950/30 rounded-[2.5rem] p-8 border border-indigo-100 dark:border-indigo-900/30 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h4 className="text-xl font-black text-indigo-900 dark:text-indigo-100 mb-6 flex items-center gap-3">
                            <Sparkles className="w-6 h-6" /> 为什么是 {tops} × {bottoms}？
                        </h4>
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {Array.from({ length: tops }).map((_, tIndex) => (
                                    <div key={tIndex} className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900/20">
                                        <div className="flex items-center gap-3 mb-4 border-b border-indigo-50 dark:border-indigo-900/10 pb-2">
                                            <Shirt className={`w-6 h-6 ${['text-red-400', 'text-blue-400', 'text-yellow-400', 'text-green-400', 'text-purple-400', 'text-orange-400'][tIndex]}`} />
                                            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">第 {tIndex + 1} 种上衣</span>
                                        </div>
                                        <div className="space-y-2 pl-4 border-l-2 border-indigo-100 dark:border-indigo-900/30">
                                            {Array.from({ length: bottoms }).map((_, bIndex) => (
                                                <div key={bIndex} className="flex items-center gap-3 text-xs font-bold text-slate-600 dark:text-slate-400">
                                                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                                                    搭配第 {bIndex + 1} 种裤子
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Theory Quote */}
                <div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-3xl border-2 border-amber-200 dark:border-amber-800 flex items-start gap-4">
                    <div className="p-3 bg-amber-500 rounded-2xl shadow-lg shrink-0">
                        <HelpCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h4 className="font-bold text-amber-900 dark:text-amber-400">大侦探笔记：乘法原理</h4>
                        <p className="text-sm text-amber-800/80 dark:text-amber-400/80 leading-relaxed">
                            做一件事情需要分 <strong className="text-amber-600">n</strong> 个步骤，第 1 步有 <strong className="text-amber-600">m₁</strong> 种方法，第 2 步有 <strong className="text-amber-600">m₂</strong> 种方法... 那么完成这件事的总方法数就是把它们<strong className="text-amber-600 underline underline-offset-4 mx-1">乘起来</strong>！
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CombinatoricsLab;

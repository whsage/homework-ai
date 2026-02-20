import React, { useState } from 'react';
import { ShoppingBag, ArrowRight, Calculator, Star, RotateCcw, HelpCircle, Package, ReceiptText, Banknote } from 'lucide-react';

const UnitProblemLab = () => {
    const [knownCount, setKnownCount] = useState(3);
    const [knownTotal, setKnownTotal] = useState(6);
    const [targetCount, setTargetCount] = useState(5);

    const unitPrice = knownTotal / knownCount;
    const targetTotal = unitPrice * targetCount;

    return (
        <div className="space-y-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-3">
                    <ShoppingBag className="text-orange-500 w-8 h-8" /> 归一魔法超商
                </h3>
                <p className="text-slate-500">不管买多少，只要找到“一个”的价钱，就能算出所有！</p>
            </div>

            {/* Scenario Step 1: Knowns */}
            <div className="grid md:grid-cols-3 gap-6 items-stretch">
                <div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-2xl border border-orange-100 dark:border-orange-800 relative">
                    <div className="absolute -top-3 left-4 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded">第一步：已知</div>
                    <div className="flex flex-col items-center gap-4">
                        <Package size={40} className="text-orange-400" />
                        <div className="space-y-1 text-center">
                            <div className="flex items-center gap-2 justify-center">
                                <input
                                    type="number" value={knownCount}
                                    onChange={(e) => setKnownCount(Math.max(1, parseInt(e.target.value) || 1))}
                                    className="w-12 bg-white dark:bg-slate-800 rounded-lg text-center font-bold text-orange-600 outline-none p-1 border border-orange-200"
                                />
                                <span className="text-sm text-slate-500">件物品</span>
                            </div>
                            <div className="text-slate-400">一共需要</div>
                            <div className="flex items-center gap-2 justify-center">
                                <input
                                    type="number" value={knownTotal}
                                    onChange={(e) => setKnownTotal(Math.max(1, parseInt(e.target.value) || 1))}
                                    className="w-16 bg-white dark:bg-slate-800 rounded-lg text-center font-bold text-orange-600 outline-none p-1 border border-orange-200"
                                />
                                <span className="text-sm text-slate-500">元钱</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center text-slate-300">
                    <ArrowRight size={48} className="animate-pulse" />
                </div>

                {/* Step 2: The Unit Bridge */}
                <div className="p-6 bg-indigo-600 rounded-2xl shadow-lg relative flex flex-col items-center justify-center text-white transform hover:scale-105 transition-transform duration-500">
                    <div className="absolute -top-3 left-4 bg-white text-indigo-600 text-[10px] font-bold px-2 py-1 rounded">第二步：找“一”</div>
                    <Star size={32} className="text-yellow-300 mb-3 animate-spin-slow" />
                    <div className="text-xs opacity-70 mb-1">单价 (每一件多少钱)</div>
                    <div className="text-3xl font-black">
                        {unitPrice.toFixed(1)} <span className="text-lg">元</span>
                    </div>
                    <div className="mt-3 text-[10px] bg-white/10 px-3 py-1 rounded-full border border-white/20 font-mono italic">
                        {knownTotal} ÷ {knownCount} = {unitPrice.toFixed(1)}
                    </div>
                </div>
            </div>

            {/* Scenario Step 3: Target */}
            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800">
                <div className="max-w-md mx-auto space-y-6">
                    <div className="text-center font-bold text-slate-700 dark:text-slate-300">
                        那如果我要买...
                    </div>

                    <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <div className="flex-1 space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase">新数量</label>
                            <div className="flex items-center gap-3">
                                <button onClick={() => setTargetCount(Math.max(1, targetCount - 1))} className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600"><Minus size={14} /></button>
                                <span className="text-3xl font-black text-slate-700 dark:text-slate-200 min-w-[50px] text-center">{targetCount}</span>
                                <button onClick={() => setTargetCount(targetCount + 1)} className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600"><Plus size={14} /></button>
                            </div>
                        </div>
                        <div className="h-12 w-px bg-slate-100 dark:bg-slate-700 mx-4" />
                        <div className="flex-1 text-right">
                            <div className="text-[10px] font-bold text-orange-400 uppercase">总共需要</div>
                            <div className="text-3xl font-black text-orange-500">
                                {targetTotal.toFixed(1)} <span className="text-sm font-bold">元</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center italic text-xs text-slate-400">
                        计算公式：( {knownTotal} ÷ {knownCount} ) × {targetCount} = {targetTotal.toFixed(1)}
                    </div>
                </div>
            </div>

            {/* The Visual Bridge */}
            <div className="flex flex-wrap justify-center gap-px">
                {Array.from({ length: targetCount }).map((_, i) => (
                    <div key={i} className="flex flex-col items-center bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-2 rounded-lg shadow-sm">
                        <Package size={i % 2 === 0 ? 20 : 24} className="text-indigo-400" />
                        <div className="text-[8px] font-bold text-indigo-200 mt-1">{unitPrice.toFixed(1)}元</div>
                    </div>
                ))}
            </div>

            {/* Explanation card */}
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-6 border border-indigo-100 dark:border-indigo-800 flex gap-4">
                <ReceiptText className="text-indigo-500 shrink-0 mt-1" />
                <div>
                    <h4 className="font-bold text-indigo-900 dark:text-indigo-200 mb-1">归一问题的“火眼金睛”</h4>
                    <p className="text-sm text-indigo-700 dark:text-indigo-300 leading-relaxed">
                        所谓“归一”，就是先把总量<strong>除以</strong>份数，锁定那个不变的<strong>“一”</strong>（单价、速度、效率等）。
                        拿稳了这个“一”，不管是想求更多份的总量，还是想求总量能分给多少人，都变得超级简单啦！
                    </p>
                </div>
            </div>

            <button
                onClick={() => { setKnownCount(3); setKnownTotal(6); setTargetCount(5); }}
                className="w-full flex justify-center items-center gap-2 text-slate-300 hover:text-orange-500 transition-colors py-2 text-xs"
            >
                <RotateCcw size={12} /> 重新采购
            </button>
        </div>
    );
};

export default UnitProblemLab;

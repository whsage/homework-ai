import React, { useState } from 'react';
import { Candy, Users, Plus, Minus, Calculator, Info, Sparkles, RotateCcw } from 'lucide-react';

const ProfitLossLab = () => {
    const [students, setStudents] = useState(5);
    const [strategy1, setStrategy1] = useState(3); // Each get 3
    const [strategy2, setStrategy2] = useState(4); // Each get 4

    // We assume a fixed total candy for a "given situation" scenario
    // Or let users adjust total candy? 
    // Let's make it a "Discovery" lab where they see how surplus/deficit changes.
    const [totalCandy, setTotalCandy] = useState(20);

    const s1_total = strategy1 * students;
    const s1_diff = totalCandy - s1_total; // positive: profit, negative: loss

    const s2_total = strategy2 * students;
    const s2_diff = totalCandy - s2_total;

    return (
        <div className="space-y-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-3">
                    <Candy className="text-pink-500 w-8 h-8" /> 糖果盈亏实验室
                </h3>
                <p className="text-slate-500">要是每个人多分一颗，手里的糖果会发生什么神奇的变化？</p>
            </div>

            {/* Global Controls */}
            <div className="grid md:grid-cols-2 gap-6 bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl">
                <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex justify-between">
                        总糖果数: <span className="text-pink-600">{totalCandy} 颗</span>
                    </label>
                    <input
                        type="range" min="10" max="100" step="1" value={totalCandy}
                        onChange={(e) => setTotalCandy(parseInt(e.target.value))}
                        className="w-full h-2 bg-pink-100 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-pink-500"
                    />
                </div>
                <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex justify-between">
                        学生人数: <span className="text-indigo-600">{students} 人</span>
                    </label>
                    <input
                        type="range" min="2" max="15" step="1" value={students}
                        onChange={(e) => setStudents(parseInt(e.target.value))}
                        className="w-full h-2 bg-indigo-100 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                    />
                </div>
            </div>

            {/* Strategy Comparison */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* Method 1 */}
                <div className="space-y-4 p-6 bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-100 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center justify-between border-b pb-3 border-slate-100 dark:border-slate-800">
                        <h4 className="font-bold text-slate-700 dark:text-slate-200">方案 A</h4>
                        <div className="flex items-center gap-2">
                            <button onClick={() => setStrategy1(Math.max(1, strategy1 - 1))} className="p-1 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-slate-800"><Minus size={14} /></button>
                            <span className="text-sm font-bold bg-pink-100 text-pink-700 px-3 py-1 rounded-lg">每人 {strategy1} 颗</span>
                            <button onClick={() => setStrategy1(strategy1 + 1)} className="p-1 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-slate-800"><Plus size={14} /></button>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-1 min-h-[100px]">
                        {Array.from({ length: s1_total }).map((_, i) => (
                            <Candy key={i} className="w-5 h-5 text-pink-400 animate-in fade-in" />
                        ))}
                    </div>

                    <div className={`p-4 rounded-xl text-center font-bold text-sm ${s1_diff >= 0 ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-rose-50 text-rose-700 border border-rose-100'}`}>
                        {s1_diff >= 0 ? `结果：盈余 ${s1_diff} 颗 😊` : `结果：亏欠 ${Math.abs(s1_diff)} 颗 😟`}
                    </div>
                </div>

                {/* Method 2 */}
                <div className="space-y-4 p-6 bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-100 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center justify-between border-b pb-3 border-slate-100 dark:border-slate-800">
                        <h4 className="font-bold text-slate-700 dark:text-slate-200">方案 B</h4>
                        <div className="flex items-center gap-2">
                            <button onClick={() => setStrategy2(Math.max(1, strategy2 - 1))} className="p-1 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-slate-800"><Minus size={14} /></button>
                            <span className="text-sm font-bold bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg">每人 {strategy2} 颗</span>
                            <button onClick={() => setStrategy2(strategy2 + 1)} className="p-1 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-slate-800"><Plus size={14} /></button>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-1 min-h-[100px]">
                        {Array.from({ length: s2_total }).map((_, i) => (
                            <Candy key={i} className="w-5 h-5 text-indigo-400 animate-in fade-in" />
                        ))}
                    </div>

                    <div className={`p-4 rounded-xl text-center font-bold text-sm ${s2_diff >= 0 ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-rose-50 text-rose-700 border border-rose-100'}`}>
                        {s2_diff >= 0 ? `结果：盈余 ${s2_diff} 颗 😊` : `结果：亏欠 ${Math.abs(s2_diff)} 颗 😟`}
                    </div>
                </div>
            </div>

            {/* The "Why" Section - Critical for understanding Profit/Loss */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-3xl text-white shadow-xl space-y-4 relative overflow-hidden">
                <Sparkles className="absolute top-4 right-4 text-white/20 w-12 h-12" />
                <h4 className="text-xl font-bold flex items-center gap-2">
                    <Calculator className="w-6 h-6" /> 盈亏平衡解密
                </h4>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <p className="opacity-90 leading-relaxed">
                            看！由于方案 B 比方案 A 每人多拿了 <span className="font-bold text-yellow-300">{Math.abs(strategy1 - strategy2)} 颗</span> 糖，
                            这导致最终手里的差额变大了 <span className="font-bold text-yellow-300">{Math.abs(s1_diff - s2_diff)} 颗</span>。
                        </p>
                        <div className="bg-white/10 p-4 rounded-2xl border border-white/10 font-mono text-sm">
                            总差额 ÷ 分法差 = 人数 <br />
                            {Math.abs(s1_diff - s2_diff)} ÷ {Math.abs(strategy1 - strategy2)} = {students} 人
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center p-6 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
                        <div className="text-[10px] uppercase font-bold opacity-60 mb-2">核心洞察</div>
                        <div className="text-4xl font-black text-yellow-300 mb-1">{students}</div>
                        <div className="text-sm font-bold">总人数</div>
                        <div className="mt-4 text-xs opacity-70 text-center">
                            这个魔法公式能帮你在不知道“糖果总数”和“人数”的情况下，仅看盈亏结果就锁定答案！
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                <Info className="w-6 h-6 text-amber-500 shrink-0" />
                <div className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                    <strong>思考题：</strong> 这种方法只能处理“一盈一亏”吗？如果是“两个方案都盈余”或者“两个方案都亏欠”该怎么办呢？（小提示：尝试把两个盈余的数字相减试试看总差额吧！）
                </div>
            </div>

            <button
                onClick={() => { setStudents(5); setStrategy1(3); setStrategy2(4); setTotalCandy(20); }}
                className="w-full flex justify-center items-center gap-2 text-slate-400 hover:text-indigo-500 transition-colors py-2"
            >
                <RotateCcw size={16} /> 重置实验场景
            </button>
        </div>
    );
};

export default ProfitLossLab;

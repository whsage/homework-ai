import React, { useState } from 'react';
import { User, Users, Calendar, ArrowRight, ArrowLeft, History, RotateCcw, Info, Sparkles, TrendingUp } from 'lucide-react';

const AgeProblemLab = () => {
    const [person1Age, setPerson1Age] = useState(30); // e.g. Father
    const [person2Age, setPerson2Age] = useState(5);  // e.g. Son
    const [yearsPassed, setYearsPassed] = useState(0); // can be negative for past

    const diff = Math.abs(person1Age - person2Age);
    const p1_current = person1Age + yearsPassed;
    const p2_current = person2Age + yearsPassed;

    const ratio = p2_current > 0 ? (p1_current / p2_current).toFixed(1) : '∞';

    return (
        <div className="space-y-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-3">
                    <History className="text-emerald-500 w-8 h-8" /> 时光穿梭年龄室
                </h3>
                <p className="text-slate-500">不管时间怎么跑，你跟爸爸妈妈的“年龄差”永远在原地等你！</p>
            </div>

            {/* Base Age Selection */}
            <div className="grid md:grid-cols-2 gap-6 bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl">
                <div className="space-y-3">
                    <div className="flex justify-between items-center px-1">
                        <span className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1"><User size={12} /> 爸爸（或长辈）</span>
                        <span className="text-lg font-black text-indigo-600 font-mono">{person1Age} 岁</span>
                    </div>
                    <input
                        type="range" min="15" max="60" value={person1Age}
                        onChange={(e) => { setPerson1Age(parseInt(e.target.value)); setYearsPassed(0); }}
                        className="w-full h-2 bg-indigo-100 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                    />
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between items-center px-1">
                        <span className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1"><User size={12} /> 你（或小辈）</span>
                        <span className="text-lg font-black text-emerald-600 font-mono">{person2Age} 岁</span>
                    </div>
                    <input
                        type="range" min="0" max="25" value={person2Age}
                        onChange={(e) => { setPerson2Age(parseInt(e.target.value)); setYearsPassed(0); }}
                        className="w-full h-2 bg-emerald-100 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    />
                </div>
            </div>

            {/* Timeline Magic */}
            <div className="bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-3xl p-8 space-y-10 relative shadow-inner">
                <div className="text-center space-y-4">
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">时光机调节</div>
                    <div className="flex items-center justify-center gap-4">
                        <button
                            onClick={() => setYearsPassed(prev => Math.max(-Math.min(person1Age, person2Age), prev - 1))}
                            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 transition-colors"
                        ><ArrowLeft /></button>

                        <div className="bg-indigo-600 text-white px-8 py-3 rounded-2xl shadow-lg shadow-indigo-200 dark:shadow-none flex flex-col items-center min-w-[150px]">
                            <span className="text-2xl font-black">
                                {yearsPassed > 0 ? `+ ${yearsPassed}` : yearsPassed < 0 ? `- ${Math.abs(yearsPassed)}` : '现在'}
                            </span>
                            <span className="text-[10px] font-bold opacity-70 uppercase">年 {yearsPassed === 0 ? '' : yearsPassed > 0 ? '后' : '前'}</span>
                        </div>

                        <button
                            onClick={() => setYearsPassed(prev => Math.min(50, prev + 1))}
                            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 transition-colors"
                        ><ArrowRight /></button>
                    </div>
                </div>

                {/* Comparison Visualizer */}
                <div className="grid grid-cols-2 gap-12 relative max-w-xl mx-auto">
                    {/* Person 1 (Blue) */}
                    <div className="flex flex-col items-center gap-4 group">
                        <div className="relative">
                            <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/40 rounded-full flex items-center justify-center text-indigo-500 shadow-sm transition-transform group-hover:scale-110">
                                <User size={40} />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-700 px-2 py-1 rounded-lg shadow-sm border border-slate-100 dark:border-slate-600 text-lg font-black text-indigo-600 font-mono">
                                {p1_current}
                            </div>
                        </div>
                        <div className="text-xs font-bold text-slate-400">大年龄</div>
                    </div>

                    {/* Middle: The constant diff tag */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-yellow-100 border-2 border-yellow-300 px-4 py-2 rounded-xl flex flex-col items-center animate-bounce-slow">
                            <span className="text-[10px] font-bold text-yellow-700 uppercase">年龄差</span>
                            <span className="text-xl font-black text-yellow-800 font-mono">{diff}</span>
                        </div>
                    </div>

                    {/* Person 2 (Green) */}
                    <div className="flex flex-col items-center gap-4 group">
                        <div className="relative">
                            <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/40 rounded-full flex items-center justify-center text-emerald-500 shadow-sm transition-transform group-hover:scale-110">
                                <User size={40} />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-700 px-2 py-1 rounded-lg shadow-sm border border-slate-100 dark:border-slate-600 text-lg font-black text-emerald-600 font-mono">
                                {p2_current}
                            </div>
                        </div>
                        <div className="text-xs font-bold text-slate-400">小年龄</div>
                    </div>
                </div>

                {/* Multiplier Info */}
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <TrendingUp size={16} className="text-rose-400" />
                        <span>此时，大年龄是小年龄的 <span className="font-bold text-rose-500">{ratio}</span> 倍</span>
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                        {p1_current} ÷ {p2_current} = {ratio}
                    </div>
                </div>
            </div>

            {/* Educational takeaway */}
            <div className="bg-gradient-to-r from-emerald-500 to-indigo-600 p-8 rounded-3xl text-white space-y-4 shadow-xl relative overflow-hidden">
                <Sparkles className="absolute -bottom-4 -right-4 text-white/10 w-24 h-24" />
                <h4 className="text-xl font-bold flex items-center gap-2">
                    <Info className="w-6 h-6" /> 年龄问题的“长生不老药”
                </h4>
                <div className="grid md:grid-cols-2 gap-8 text-sm opacity-90 leading-relaxed">
                    <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                        <div className="font-bold mb-1 text-yellow-300 underline underline-offset-4">唯一不变的：差</div>
                        时间怎么变，两个人的<strong>年龄差</strong>永远固定！这就是解题的“定海神针”。
                    </div>
                    <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                        <div className="font-bold mb-1 text-yellow-300 underline underline-offset-4">会变化的：倍数</div>
                        虽然差不变，但<strong>倍数</strong>会随着时间越变越小（想想看为什么？）。
                    </div>
                </div>
            </div>

            <button
                onClick={() => { setPerson1Age(30); setPerson2Age(5); setYearsPassed(0); }}
                className="w-full py-2 flex items-center justify-center gap-2 text-slate-400 hover:text-emerald-500 transition-colors text-xs font-medium"
            >
                <RotateCcw size={12} /> 还原最初的相遇
            </button>
        </div>
    );
};

export default AgeProblemLab;

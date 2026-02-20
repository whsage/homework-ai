import React, { useState } from 'react';
import { Thermometer, ArrowUp, ArrowDown, Info, Mountain, Waves } from 'lucide-react';

const NegativeNumberLab = () => {
    const [level, setLevel] = useState(0);
    const [history, setHistory] = useState([]);

    const handleMove = (val) => {
        const newLevel = Math.max(-10, Math.min(10, val));
        setLevel(newLevel);
        setHistory(h => [{ val: newLevel, time: new Date().toLocaleTimeString() }, ...h].slice(0, 5));
    };

    const getStatus = () => {
        if (level > 0) return { label: "海拔/高度", color: "text-emerald-500", icon: <Mountain /> };
        if (level < 0) return { label: "深度/负值", color: "text-blue-500", icon: <Waves /> };
        return { label: "基准面", color: "text-slate-500", icon: <Waves /> };
    };

    const status = getStatus();

    return (
        <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center space-y-2">
                    <h3 className="text-2xl font-black text-slate-800 dark:text-white flex items-center justify-center gap-3">
                        <Thermometer className="text-rose-500" /> 负数的世界探险
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">0 不是终点，而是方向的开始！</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-stretch">
                    {/* Vertical Number Line / Visualizer */}
                    <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 shadow-lg border border-slate-100 dark:border-slate-700 flex gap-8 items-center justify-center min-h-[400px]">
                        <div className="relative h-80 w-12 bg-slate-100 dark:bg-slate-900 rounded-full border-2 border-slate-200 dark:border-slate-700 flex flex-col justify-between py-2 items-center">
                            {/* Marks */}
                            {[10, 5, 0, -5, -10].map(m => (
                                <div key={m} className="relative w-full flex justify-center">
                                    <div className={`w-4 h-0.5 ${m === 0 ? 'bg-slate-800 dark:bg-white w-8' : 'bg-slate-300 dark:bg-slate-600'}`} />
                                    <span className={`absolute left-10 text-[10px] font-mono font-bold ${m > 0 ? 'text-emerald-500' : m < 0 ? 'text-blue-500' : 'text-slate-400'}`}>
                                        {m > 0 ? `+${m}` : m}
                                    </span>
                                </div>
                            ))}

                            {/* Indicator */}
                            <div
                                className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-out z-10"
                                style={{ bottom: `${((level + 10) / 20) * 100}%`, marginBottom: '-16px' }}
                            >
                                <div className="w-8 h-8 rounded-full shadow-xl flex items-center justify-center bg-white dark:bg-slate-700 border-4 border-indigo-500 group animate-pulse">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                </div>
                                <div className="absolute left-12 top-0 whitespace-nowrap bg-indigo-600 text-white px-2 py-1 rounded-lg text-xs font-black shadow-lg">
                                    {level > 0 ? `+${level}` : level}
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 space-y-6">
                            <div className={`text-center py-6 rounded-3xl border-2 transition-colors ${level > 0 ? 'bg-emerald-50 border-emerald-200' : level < 0 ? 'bg-blue-50 border-blue-200' : 'bg-slate-50 border-slate-200'}`}>
                                <div className={`inline-flex p-3 rounded-2xl mb-3 ${level > 0 ? 'bg-emerald-500 text-white' : level < 0 ? 'bg-blue-500 text-white' : 'bg-slate-500 text-white'}`}>
                                    {status.icon}
                                </div>
                                <h4 className={`text-xl font-black ${status.color}`}>{status.label}</h4>
                                <p className="text-2xl font-mono font-black mt-2 text-slate-800 dark:text-slate-100">
                                    {level > 0 ? `+${level}` : level} 层
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => handleMove(level + 1)}
                                    className="p-4 bg-slate-100 dark:bg-slate-900 rounded-2xl font-bold flex flex-col items-center gap-2 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors"
                                >
                                    <ArrowUp className="text-emerald-500" /> 升高
                                </button>
                                <button
                                    onClick={() => handleMove(level - 1)}
                                    className="p-4 bg-slate-100 dark:bg-slate-900 rounded-2xl font-bold flex flex-col items-center gap-2 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                                >
                                    <ArrowDown className="text-blue-500" /> 降低
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Logic / Context */}
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-[2.5rem] shadow-lg border border-slate-100 dark:border-slate-700">
                            <h4 className="font-bold text-slate-800 dark:text-white mb-4">探险日志（数值记录）</h4>
                            <div className="space-y-3">
                                {history.length === 0 ? (
                                    <p className="text-sm text-slate-400 text-center py-8 italic">点击按钮开始探险...</p>
                                ) : (
                                    history.map((h, i) => (
                                        <div key={i} className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded-xl animate-in slide-in-from-left">
                                            <span className="text-xs text-slate-400 font-mono">{h.time}</span>
                                            <span className={`font-black font-mono ${h.val > 0 ? 'text-emerald-500' : h.val < 0 ? 'text-blue-500' : 'text-slate-400'}`}>
                                                {h.val > 0 ? `+${h.val}` : h.val}
                                            </span>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>

                        <div className="bg-indigo-600 rounded-[2rem] p-6 text-white shadow-xl">
                            <h4 className="font-bold mb-3 flex items-center gap-2">比较大小挑战</h4>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between bg-white/10 p-3 rounded-xl">
                                    <span className="font-mono">-8 vs -3</span>
                                    <span className="font-black text-indigo-100">-8 &lt; -3</span>
                                </div>
                                <div className="flex items-center justify-between bg-white/10 p-3 rounded-xl">
                                    <span className="font-mono">0 vs -5</span>
                                    <span className="font-black text-indigo-100">0 &gt; -5</span>
                                </div>
                                <p className="text-[10px] text-indigo-200 leading-tight">
                                    提示：在数轴上，越靠前的（上/右）数值越大。欠债越多（-100），其实拥有的越少（相比-1）。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-4 flex gap-4 items-start">
                    <Info className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-900/80 dark:text-blue-200/80 leading-relaxed">
                        <strong>核心法则：</strong> 正数和负数表示具有<strong>相反意义</strong>的量。0 既不是正数也不是负数，它是它们的分界线。生活中的温度、海拔、输赢都可以用正负数来完美表达。
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NegativeNumberLab;

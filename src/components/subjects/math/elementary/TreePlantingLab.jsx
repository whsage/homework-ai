import React, { useState } from 'react';
import { TreePine, Flag, ArrowRightLeft, Info, HelpCircle, Layout, Circle, MapPin, Calculator } from 'lucide-react';

const TreePlantingLab = () => {
    const [scenario, setScenario] = useState('both'); // both, one, neither, circular
    const [length, setLength] = useState(20);
    const [interval, setInterval] = useState(5);
    const [showLogic, setShowLogic] = useState(false);

    const segments = Math.floor(length / interval);

    const getTreeCount = () => {
        if (scenario === 'both') return segments + 1;
        if (scenario === 'one') return segments;
        if (scenario === 'neither') return segments - 1;
        if (scenario === 'circular') return segments;
        return 0;
    };

    const treeCount = getTreeCount();

    const scenarioData = {
        both: { name: "两端都种", desc: "路的两头都有树。树的数量比间隔多 1。", formula: "棵数 = 间隔数 + 1", icon: <ArrowRightLeft className="w-5 h-5" /> },
        one: { name: "只种一端", desc: "路只有一头有树（或是一个封闭环形路口）。树和间隔一样多。", formula: "棵数 = 间隔数", icon: <MapPin className="w-5 h-5" /> },
        neither: { name: "两端都不种", desc: "比如在两个建筑物之间摆树。树的数量比间隔少 1。", formula: "棵数 = 间隔数 - 1", icon: <Layout className="w-5 h-5" /> },
        circular: { name: "封闭圆圈", desc: "在圆形花坛周围种树。树的数量正好等于间隔数。", formula: "棵数 = 间隔数", icon: <Circle className="w-5 h-5" /> }
    };

    return (
        <div className="space-y-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-3">
                    <TreePine className="text-emerald-500 w-8 h-8" /> 植树魔术师
                </h3>
                <p className="text-slate-500">通过改变环境和距离，揭开『棵数』与『间隔』之间的秘密线索！</p>
            </div>

            {/* Scenario Selector */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {Object.entries(scenarioData).map(([key, data]) => (
                    <button
                        key={key}
                        onClick={() => { setScenario(key); setShowLogic(false); }}
                        className={`p-4 rounded-2xl flex flex-col items-center gap-2 border-2 transition-all ${scenario === key
                                ? 'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-500 shadow-sm'
                                : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:border-emerald-200'
                            }`}
                    >
                        <div className={`p-2 rounded-xl ${scenario === key ? 'bg-emerald-500 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-400'}`}>
                            {data.icon}
                        </div>
                        <span className={`text-xs font-bold ${scenario === key ? 'text-emerald-700 dark:text-emerald-300' : 'text-slate-500'}`}>{data.name}</span>
                    </button>
                ))}
            </div>

            {/* Input Controls */}
            <div className="grid md:grid-cols-2 gap-6 bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex justify-between">
                        路总长度: <span className="text-emerald-600">{length} 米</span>
                    </label>
                    <input
                        type="range" min="10" max="100" step="10" value={length}
                        onChange={(e) => setLength(parseInt(e.target.value))}
                        className="w-full h-2 bg-emerald-100 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    />
                </div>
                <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex justify-between">
                        植树间隔: <span className="text-emerald-600">{interval} 米</span>
                    </label>
                    <input
                        type="range" min="2" max="20" step="1" value={interval}
                        onChange={(e) => setInterval(parseInt(e.target.value))}
                        className="w-full h-2 bg-emerald-100 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    />
                </div>
            </div>

            {/* Visualizer Area */}
            <div className="relative p-10 bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-x-auto min-h-[180px] flex items-center">
                {scenario === 'circular' ? (
                    <div className="w-full h-40 flex items-center justify-center">
                        <div className="relative w-32 h-32 border-4 border-slate-300 dark:border-slate-700 rounded-full flex items-center justify-center">
                            {Array.from({ length: segments }).map((_, i) => {
                                const angle = (i * 360) / segments;
                                return (
                                    <div
                                        key={i}
                                        className="absolute transition-all duration-500"
                                        style={{ transform: `rotate(${angle}deg) translateY(-64px)` }}
                                    >
                                        <TreePine className="w-8 h-8 text-emerald-600 -translate-y-4" />
                                    </div>
                                );
                            })}
                            <div className="text-slate-400 text-[10px] text-center px-2">圆形封闭路径</div>
                        </div>
                    </div>
                ) : (
                    <div className="w-full min-w-[600px] flex flex-col gap-6">
                        {/* Road Line */}
                        <div className="relative h-1 bg-slate-300 dark:bg-slate-700 rounded-full">
                            {/* Flags/Dividers */}
                            {Array.from({ length: segments + 1 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute top-0 w-0.5 h-4 bg-slate-400 -translate-x-1/2 -translate-y-1.5"
                                    style={{ left: `${(i * 100) / segments}%` }}
                                >
                                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono whitespace-nowrap text-slate-400">
                                        {i * interval}m
                                    </span>
                                </div>
                            ))}
                            {/* Interval Labels */}
                            {Array.from({ length: segments }).map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute -top-10 flex flex-col items-center justify-center transition-all animate-in fade-in zoom-in duration-500"
                                    style={{ left: `${(i * 100) / segments + (50 / segments)}%` }}
                                >
                                    <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">
                                        {i + 1}
                                    </div>
                                    <div className="w-px h-2 bg-slate-200" />
                                </div>
                            ))}
                            {/* Trees */}
                            {Array.from({ length: segments + 1 }).map((_, i) => {
                                let show = false;
                                if (scenario === 'both') show = true;
                                if (scenario === 'one') show = i < segments;
                                if (scenario === 'neither') show = i > 0 && i < segments;

                                if (!show) return null;

                                return (
                                    <div
                                        key={i}
                                        className="absolute -top-8 -translate-x-1/2 transition-all duration-500"
                                        style={{ left: `${(i * 100) / segments}%` }}
                                    >
                                        <TreePine className="w-10 h-10 text-emerald-600 drop-shadow-sm animate-bounce" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            {/* Dashboard and logic */}
            <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl text-center border border-slate-100 dark:border-slate-800">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">总长度</p>
                        <p className="text-2xl font-black text-slate-700 dark:text-slate-300">{length}m</p>
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-2xl text-center border border-emerald-100 dark:border-emerald-800">
                        <p className="text-[10px] font-bold text-emerald-600 uppercase">间隔数</p>
                        <p className="text-2xl font-black text-emerald-700 dark:text-emerald-300">{segments}</p>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-2xl text-center border border-indigo-100 dark:border-indigo-800">
                        <p className="text-[10px] font-bold text-indigo-600 uppercase">需要树</p>
                        <p className="text-2xl font-black text-indigo-700 dark:text-indigo-300">{treeCount < 0 ? 0 : treeCount}</p>
                    </div>
                </div>

                <div className="bg-emerald-600 p-6 rounded-2xl text-white shadow-lg shadow-emerald-100 dark:shadow-none space-y-3">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <Calculator className="w-5 h-5 opacity-80" />
                            <h4 className="font-bold">魔法计算公理</h4>
                        </div>
                        <button
                            onClick={() => setShowLogic(!showLogic)}
                            className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg text-xs font-bold transition-colors"
                        >
                            {showLogic ? '藏起过程' : '看推导过程'}
                        </button>
                    </div>

                    <div className="text-2xl font-mono font-bold tracking-tight">
                        {scenarioData[scenario].formula}
                    </div>

                    {showLogic && (
                        <div className="pt-2 border-t border-white/20 space-y-2 animate-in fade-in slide-in-from-top-2">
                            <p className="text-sm opacity-90 leading-relaxed font-medium">
                                {scenarioData[scenario].desc}
                            </p>
                            <div className="bg-black/10 p-3 rounded-lg text-sm font-mono tracking-tight">
                                {length}米 ÷ {interval}米 = {segments} 个间隔 <br />
                                {scenario === 'both' ? `${segments} + 1 = ${segments + 1} 棵树` :
                                    scenario === 'one' ? `刚好对应 ${segments} 棵树` :
                                        scenario === 'neither' ? `${segments} - 1 = ${segments - 1} 棵树` :
                                            `${segments} 个间隔对应 ${segments} 棵树`}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex items-start gap-2 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl">
                <Info className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <p className="text-xs text-indigo-800 dark:text-indigo-300 leading-relaxed">
                    <strong>思考题：</strong> 如果要在一条20米长的走廊一边摆花，每隔4米摆一盆（两端都摆），一共要几盆？如果要把这20米走廊的两边都摆满呢？（记得结果要 ×2 哦！）
                </p>
            </div>
        </div>
    );
};

export default TreePlantingLab;

import React, { useState, useEffect } from 'react';
import { Construction, User, Users, Play, RotateCcw, Info } from 'lucide-react';

const WorkProblemLab = () => {
    const [daysA, setDaysA] = useState(10);
    const [daysB, setDaysB] = useState(15);
    const [mode, setMode] = useState('both'); // 'A', 'B', 'both'
    const [progress, setProgress] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const effA = 1 / daysA;
    const effB = 1 / daysB;
    const combinedEff = effA + effB;

    const targetEff = mode === 'A' ? effA : mode === 'B' ? effB : combinedEff;
    const totalDaysNeeded = (1 / targetEff).toFixed(1);

    useEffect(() => {
        let interval;
        if (isRunning && progress < 100) {
            interval = setInterval(() => {
                setProgress(prev => Math.min(100, prev + 1));
            }, 50);
        } else {
            setIsRunning(false);
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, progress]);

    const reset = () => {
        setProgress(0);
        setIsRunning(false);
    };

    return (
        <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center space-y-2">
                    <h3 className="text-2xl font-black text-slate-800 dark:text-white flex items-center justify-center gap-3">
                        <Construction className="text-amber-500" /> 工程合作实验室
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">把整个工程看作“1”，探索效率相加带来的魔法！</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Visualizer Area */}
                    <div className="space-y-6">
                        <div className="relative h-64 bg-white dark:bg-slate-800 rounded-[2.5rem] border-4 border-slate-200 dark:border-slate-700 shadow-inner overflow-hidden flex flex-col">
                            {/* The "Wall" being painted */}
                            <div
                                className="w-full bg-indigo-500/20 dark:bg-indigo-400/10 flex-1 relative"
                            >
                                <div
                                    className="absolute bottom-0 w-full bg-indigo-500 transition-all duration-300 ease-linear shadow-[0_-5px_15px_rgba(99,102,241,0.5)]"
                                    style={{ height: `${progress}%` }}
                                >
                                    <div className="absolute top-0 left-0 w-full h-1 bg-white/30 animate-pulse" />
                                </div>

                                {/* Progress Percentage */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-4xl font-black text-slate-800/20 dark:text-white/10 uppercase tracking-widest select-none">
                                        Build Progress
                                    </span>
                                    <span className="absolute text-5xl font-black text-indigo-600 drop-shadow-sm">
                                        {progress}%
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={() => setIsRunning(true)}
                                disabled={isRunning || progress >= 100}
                                className="flex-1 py-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-2xl font-black flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95"
                            >
                                <Play size={20} fill="currentColor" /> 开始施工
                            </button>
                            <button
                                onClick={reset}
                                className="p-4 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-2xl hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                            >
                                <RotateCcw size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Controls & Math */}
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-[2.5rem] shadow-lg border border-slate-100 dark:border-slate-700 space-y-6 font-medium">
                            <div className="space-y-4">
                                <span className="text-sm text-slate-400 block">选择工期模式</span>
                                <div className="flex gap-2">
                                    {[
                                        { id: 'A', label: '只有甲', icon: <User size={14} /> },
                                        { id: 'B', label: '只有乙', icon: <User size={14} /> },
                                        { id: 'both', label: '甲乙合作', icon: <Users size={14} /> }
                                    ].map(m => (
                                        <button
                                            key={m.id} onClick={() => { setMode(m.id); reset(); }}
                                            className={`flex-1 py-3 px-2 rounded-xl text-xs font-bold border-2 transition-all flex flex-col items-center gap-1 ${mode === m.id ? 'border-indigo-500 bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30' : 'border-slate-100 bg-slate-50 text-slate-400 hover:border-slate-200 dark:bg-slate-900 dark:border-slate-800'}`}
                                        >
                                            {m.icon} {m.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs font-bold text-slate-500">
                                        <span>甲队单独完成天数</span>
                                        <span className="text-indigo-600">{daysA} 天</span>
                                    </div>
                                    <input type="range" min="2" max="30" value={daysA} onChange={e => { setDaysA(parseInt(e.target.value)); reset(); }} className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs font-bold text-slate-500">
                                        <span>乙队单独完成天数</span>
                                        <span className="text-rose-500">{daysB} 天</span>
                                    </div>
                                    <input type="range" min="2" max="30" value={daysB} onChange={e => { setDaysB(parseInt(e.target.value)); reset(); }} className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-500" />
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100 dark:border-slate-700 space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-400 text-sm">当前工作效率</span>
                                    <span className="font-mono text-indigo-600 font-bold">1/{totalDaysNeeded} 每天</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-800 dark:text-white font-black text-lg">预估完工时间</span>
                                    <span className="text-2xl font-black text-indigo-600">{totalDaysNeeded} <small className="text-sm">天</small></span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900 text-slate-300 p-6 rounded-[2rem] border border-slate-800 shadow-xl font-mono text-xs space-y-2 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl -mr-12 -mt-12" />
                            <p className="text-indigo-400 font-bold mb-2">// 逻辑推导过程</p>
                            <p>工作总量 = 1</p>
                            <p>甲效率 = 1 / {daysA} = {effA.toFixed(3)}</p>
                            <p>乙效率 = 1 / {daysB} = {effB.toFixed(3)}</p>
                            {mode === 'both' && <p className="text-white mt-1">合作效率 = {effA.toFixed(3)} + {effB.toFixed(3)} = {combinedEff.toFixed(3)}</p>}
                            <div className="pt-2 mt-2 border-t border-slate-800 text-emerald-400 font-bold">
                                完工时间 = 1 ÷ ({targetEff.toFixed(3)}) = {totalDaysNeeded} 天
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-4 flex gap-4 items-start">
                    <Info className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-900/80 dark:text-amber-200/80 leading-relaxed">
                        <strong>实验总结：</strong> “甲10天完成”意味着他每天能做整份工作的 1/10。当甲乙合作时，他们的效率会加在一起，使得总时间<strong>大大缩短</strong>（比任何一个人单独做都要快）！
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WorkProblemLab;

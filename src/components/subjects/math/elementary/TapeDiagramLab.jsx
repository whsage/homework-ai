import React, { useState } from 'react';
import { Layout, GitPullRequest, ArrowRightCircle, Sparkles, RefreshCcw, HelpCircle } from 'lucide-react';

const TapeDiagramLab = () => {
    const [mode, setMode] = useState('sum-diff'); // 'sum-diff', 'sum-mult', 'diff-mult'
    const [val1, setVal1] = useState(30); // Sum or Total
    const [val2, setVal2] = useState(6);  // Diff or Multiple
    const [step, setStep] = useState(0);

    const modes = [
        { id: 'sum-diff', label: '和差问题', icon: '⚖️', desc: '已知两数的和与差' },
        { id: 'sum-mult', label: '和倍问题', icon: '➕', desc: '已知两数的和与倍数' },
        { id: 'diff-mult', label: '差倍问题', icon: '➖', desc: '已知两数的差与倍数' }
    ];

    // Calculations
    let smallNum = 0;
    let bigNum = 0;

    if (mode === 'sum-diff') {
        smallNum = (val1 - val2) / 2;
        bigNum = smallNum + val2;
    } else if (mode === 'sum-mult') {
        smallNum = val1 / (val2 + 1);
        bigNum = smallNum * val2;
    } else if (mode === 'diff-mult') {
        smallNum = val1 / (val2 - 1);
        bigNum = smallNum * val2;
    }

    const reset = () => setStep(0);

    return (
        <div className="space-y-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            {/* Mode Selection */}
            <div className="flex flex-wrap gap-3">
                {modes.map(m => (
                    <button
                        key={m.id}
                        onClick={() => { setMode(m.id); reset(); setVal1(m.id === 'sum-mult' ? 40 : 30); setVal2(m.id.includes('mult') ? 3 : 6); }}
                        className={`flex-1 min-w-[120px] p-4 rounded-2xl border-2 transition-all ${mode === m.id
                                ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg'
                                : 'bg-slate-50 border-slate-100 text-slate-500 hover:border-indigo-200'
                            }`}
                    >
                        <div className="text-2xl mb-1">{m.icon}</div>
                        <div className="font-bold text-sm">{m.label}</div>
                    </button>
                ))}
            </div>

            {/* Params Controls */}
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                        {mode === 'sum-diff' || mode === 'sum-mult' ? '两数之和' : '两数之差'}
                    </label>
                    <div className="flex items-center gap-4">
                        <input
                            type="range" min="10" max="100" step={mode === 'sum-diff' ? 2 : 1}
                            value={val1} onChange={(e) => { setVal1(parseInt(e.target.value)); reset(); }}
                            className="flex-1 accent-indigo-600"
                        />
                        <span className="text-xl font-black text-indigo-600 w-10">{val1}</span>
                    </div>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                        {mode === 'sum-diff' ? '两数之差' : '倍数关系'}
                    </label>
                    <div className="flex items-center gap-4">
                        <input
                            type="range" min={mode.includes('mult') ? 2 : 2} max={mode.includes('mult') ? 10 : 20}
                            value={val2} onChange={(e) => { setVal2(parseInt(e.target.value)); reset(); }}
                            className="flex-1 accent-purple-600"
                        />
                        <span className="text-xl font-black text-purple-600 w-10">{val2}{mode.includes('mult') ? '倍' : ''}</span>
                    </div>
                </div>
            </div>

            {/* Tape Diagram Canvas */}
            <div className="relative h-80 bg-slate-900 rounded-3xl overflow-hidden p-8 flex flex-col justify-center gap-12">
                {/* Big Number Tape */}
                <div className="relative h-10 w-full flex items-center">
                    <div className="absolute -top-6 left-0 text-[10px] font-bold text-indigo-400">较大的数</div>
                    <div
                        className="h-full bg-indigo-500 rounded-lg shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-700 flex items-center justify-center text-white font-bold"
                        style={{ width: `${(bigNum / Math.max(bigNum + smallNum, val1)) * 80}%` }}
                    >
                        {step >= 2 && bigNum.toFixed(1)}
                    </div>
                    {/* Visual markers for multiples */}
                    {mode.includes('mult') && Array.from({ length: val2 }).map((_, i) => (
                        <div key={i} className="absolute h-10 border-r border-white/20" style={{ left: `${(smallNum / Math.max(bigNum + smallNum, val1)) * 80 * (i + 1)}%` }} />
                    ))}
                </div>

                {/* Small Number Tape */}
                <div className="relative h-10 w-full flex items-center">
                    <div className="absolute -top-6 left-0 text-[10px] font-bold text-emerald-400">较小的数</div>
                    <div
                        className="h-full bg-emerald-500 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-700 flex items-center justify-center text-white font-bold"
                        style={{ width: `${(smallNum / Math.max(bigNum + smallNum, val1)) * 80}%` }}
                    >
                        {step >= 2 && smallNum.toFixed(1)}
                    </div>

                    {/* Brackets & Annotations */}
                    {mode === 'sum-diff' && (
                        <div className="absolute top-0 h-10 border-l-2 border-dashed border-white/30" style={{ left: `${(smallNum / Math.max(bigNum + smallNum, val1)) * 80}%` }}>
                            <div className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/10 px-2 py-0.5 rounded text-[10px] text-white">差 {val2}</div>
                        </div>
                    )}
                </div>

                {/* Total Bracket Overlay */}
                {(mode === 'sum-mult' || mode === 'sum-diff') && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center">
                        <div className="h-40 w-2 border-r-2 border-t-2 border-b-2 border-white/20 rounded-r-lg" />
                        <div className="mt-2 text-white font-black text-xl">和 {val1}</div>
                    </div>
                )}

                {mode === 'diff-mult' && (
                    <div className="absolute bottom-10 left-[40%] text-white text-xs bg-white/10 px-4 py-2 rounded-2xl border border-white/20 animate-pulse">
                        差 {val1} 对应的是 {val2 - 1} 份
                    </div>
                )}
            </div>

            {/* Step Guide & Analysis */}
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-3xl space-y-4">
                <div className="flex items-center justify-between">
                    <h4 className="font-bold text-indigo-800 dark:text-indigo-300 flex items-center gap-2">
                        <GitPullRequest className="w-5 h-5" /> 线段图解密流程
                    </h4>
                    <button onClick={() => setStep(prev => Math.min(3, prev + 1))} className="bg-indigo-600 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all flex items-center gap-2">
                        {step === 3 ? "已看完全部" : "下一步演示"} <ArrowRightCircle size={16} />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        {mode === 'sum-diff' && (
                            <>
                                <p className={`text-sm transition-opacity ${step >= 1 ? 'opacity-100' : 'opacity-30'}`}>
                                    1. 从和中减去差，剩下的就是 <strong>2 个较小数</strong>。
                                </p>
                                <p className={`text-sm transition-opacity ${step >= 2 ? 'opacity-100' : 'opacity-30'}`}>
                                    2. 较小数 = ({val1} - {val2}) ÷ 2 = <strong>{smallNum}</strong>
                                </p>
                                <p className={`text-sm transition-opacity ${step >= 3 ? 'opacity-100' : 'opacity-30'}`}>
                                    3. 较大数 = {smallNum} + {val2} = <strong>{bigNum}</strong>
                                </p>
                            </>
                        )}
                        {mode === 'sum-mult' && (
                            <>
                                <p className={`text-sm transition-opacity ${step >= 1 ? 'opacity-100' : 'opacity-30'}`}>
                                    1. 较大数是较小数的 {val2} 倍，总共就是 <strong>{val2 + 1} 份</strong>。
                                </p>
                                <p className={`text-sm transition-opacity ${step >= 2 ? 'opacity-100' : 'opacity-30'}`}>
                                    2. 1 份量 (较小数) = {val1} ÷ ({val2} + 1) = <strong>{smallNum.toFixed(1)}</strong>
                                </p>
                                <p className={`text-sm transition-opacity ${step >= 3 ? 'opacity-100' : 'opacity-30'}`}>
                                    3. {val2} 份量 (较大数) = {smallNum.toFixed(1)} × {val2} = <strong>{bigNum.toFixed(1)}</strong>
                                </p>
                            </>
                        )}
                        {mode === 'diff-mult' && (
                            <>
                                <p className={`text-sm transition-opacity ${step >= 1 ? 'opacity-100' : 'opacity-30'}`}>
                                    1. 较大数比较小数多 {val2 - 1} 份，这几份对应的就是<strong>差 {val1}</strong>。
                                </p>
                                <p className={`text-sm transition-opacity ${step >= 2 ? 'opacity-100' : 'opacity-30'}`}>
                                    2. 1 份量 (较小数) = {val1} ÷ ({val2} - 1) = <strong>{smallNum.toFixed(1)}</strong>
                                </p>
                                <p className={`text-sm transition-opacity ${step >= 3 ? 'opacity-100' : 'opacity-30'}`}>
                                    3. {val2} 份量 (较大数) = {smallNum.toFixed(1)} × {val2} = <strong>{bigNum.toFixed(1)}</strong>
                                </p>
                            </>
                        )}
                    </div>
                    {step === 3 && (
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border-2 border-indigo-500 animate-in zoom-in duration-500 text-center">
                            <Sparkles className="text-yellow-500 w-10 h-10 mx-auto mb-2" />
                            <div className="text-sm font-bold text-slate-400 mb-1">这就是真相！</div>
                            <div className="text-3xl font-black text-indigo-600">
                                {bigNum.toFixed(1)} 和 {smallNum.toFixed(1)}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TapeDiagramLab;

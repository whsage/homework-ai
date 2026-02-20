import React, { useState } from 'react';
import { Target, Scale, MinusCircle, PlusCircle, LayoutGrid, ArrowRightCircle, Sparkles } from 'lucide-react';

const SumDiffScale = () => {
    const [sum, setSum] = useState(20);
    const [diff, setDiff] = useState(4);
    const [step, setStep] = useState(0); // 0: Start, 1: Remove Diff, 2: Divide, 3: Add back

    const smallNum = (sum - diff) / 2;
    const bigNum = smallNum + diff;

    const reset = () => {
        setStep(0);
        setFeedback(null);
    };

    const nextStep = () => {
        if (step < 3) setStep(step + 1);
    };

    return (
        <div className="space-y-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-3">
                    <Scale className="text-orange-500 w-8 h-8" /> 和差分糖平衡秤
                </h3>
                <p className="text-slate-500">哥哥弟弟分糖果，已知【总数】和【差值】，该怎么分？</p>
            </div>

            {/* Input Controls */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-2xl border border-orange-100 dark:border-orange-800">
                    <label className="text-xs font-bold text-orange-600 uppercase mb-2 block">总共糖果 (和)</label>
                    <div className="flex items-center gap-3">
                        <input
                            type="range" min="10" max="40" step="2" value={sum}
                            onChange={(e) => { setSum(parseInt(e.target.value)); setStep(0); }}
                            className="flex-1 h-1.5 bg-orange-200 rounded-lg appearance-none accent-orange-500 cursor-pointer"
                        />
                        <span className="text-xl font-bold text-orange-700 dark:text-orange-400 w-8">{sum}</span>
                    </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl border border-blue-100 dark:border-blue-800">
                    <label className="text-xs font-bold text-blue-600 uppercase mb-2 block">多出的糖果 (差)</label>
                    <div className="flex items-center gap-3">
                        <input
                            type="range" min="2" max="10" step="2" value={diff}
                            onChange={(e) => { setDiff(parseInt(e.target.value)); setStep(0); }}
                            className="flex-1 h-1.5 bg-blue-200 rounded-lg appearance-none accent-blue-500 cursor-pointer"
                        />
                        <span className="text-xl font-bold text-blue-700 dark:text-blue-400 w-8">{diff}</span>
                    </div>
                </div>
            </div>

            {/* Scale Visualization */}
            <div className="relative h-64 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center overflow-hidden">
                <div className="relative w-full max-w-md flex justify-around items-end h-40">
                    {/* Brother's Side */}
                    <div className="flex flex-col items-center gap-2 w-32 pb-4 transition-all duration-500">
                        <div className="relative flex flex-wrap-reverse gap-1 justify-center max-w-[100px]">
                            {/* Base amount */}
                            {Array.from({ length: step >= 2 ? smallNum : bigNum }).map((_, i) => (
                                <div key={i} className={`w-4 h-4 rounded-sm shadow-sm border border-white/20 transition-all duration-500 ${step === 1 && i >= bigNum - diff ? 'opacity-0 scale-0' : 'bg-indigo-500'}`} />
                            ))}
                            {/* The "Extra" part if in step 0 or step 3 */}
                            {step === 3 && Array.from({ length: diff }).map((_, i) => (
                                <div key={`extra-${i}`} className="w-4 h-4 bg-orange-400 rounded-sm shadow-sm border border-white/20 animate-in zoom-in duration-300" />
                            ))}
                        </div>
                        <div className="w-full h-2 bg-slate-300 rounded-full shadow-md" />
                        <span className="text-xs font-bold text-slate-500">哥哥</span>
                    </div>

                    {/* Scale Pivot */}
                    <Scale className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-200 w-12 h-12" />

                    {/* Brother's Hidden Extra (for step 1) */}
                    {step === 1 && (
                        <div className="absolute top-4 right-10 flex flex-col items-center animate-in slide-in-from-right-4 duration-500">
                            <div className="grid grid-cols-2 gap-1 p-2 bg-orange-100 rounded-lg border-2 border-orange-300 shadow-lg">
                                {Array.from({ length: diff }).map((_, i) => (
                                    <div key={i} className="w-3 h-3 bg-orange-400 rounded-sm shadow-sm" />
                                ))}
                            </div>
                            <p className="text-[10px] font-bold text-orange-600 mt-1">藏起来的 {diff} 颗</p>
                        </div>
                    )}

                    {/* Younger Brother's Side */}
                    <div className="flex flex-col items-center gap-2 w-32 pb-4">
                        <div className="flex flex-wrap-reverse gap-1 justify-center max-w-[100px]">
                            {Array.from({ length: step >= 2 ? smallNum : smallNum }).map((_, i) => (
                                <div key={i} className="w-4 h-4 bg-indigo-500 rounded-sm shadow-sm border border-white/20" />
                            ))}
                        </div>
                        <div className="w-full h-2 bg-slate-300 rounded-full shadow-md" />
                        <span className="text-xs font-bold text-slate-500">弟弟</span>
                    </div>
                </div>

                {/* Status Ticker */}
                <div className="absolute bottom-4 bg-white dark:bg-slate-800 px-6 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-lg flex items-center gap-3">
                    <span className="text-sm font-bold text-indigo-600">
                        {step === 0 && `我们要分 ${sum} 颗糖，哥哥要多 ${diff} 颗`}
                        {step === 1 && `第1步：先把哥哥多的 ${diff} 颗糖藏起来！剩 ${sum - diff} 颗`}
                        {step === 2 && `第2步：公平分给两人，一人 ${smallNum} 颗。弟弟就有 ${smallNum} 颗啦！`}
                        {step === 3 && `第3步：把藏起的 ${diff} 颗还给哥哥，哥哥有 ${bigNum} 颗！`}
                    </span>
                </div>
            </div>

            {/* Progress Actions */}
            <div className="flex items-center justify-between py-4 border-t border-slate-100 dark:border-slate-700">
                <button
                    onClick={reset}
                    className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-slate-600 font-bold transition-colors"
                >
                    <RotateCcw className="w-4 h-4" /> 重新开始
                </button>

                <div className="flex gap-2">
                    {[0, 1, 2, 3].map(i => (
                        <div key={i} className={`w-8 h-1.5 rounded-full transition-all duration-300 ${i <= step ? 'bg-indigo-500' : 'bg-slate-200'}`} />
                    ))}
                </div>

                <button
                    onClick={nextStep}
                    disabled={step === 3}
                    className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all active:scale-95 shadow-lg ${step === 3
                            ? 'bg-green-100 text-green-600 cursor-default'
                            : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200'
                        }`}
                >
                    {step === 3 ? <Sparkles className="w-5 h-5" /> : <ArrowRightCircle className="w-5 h-5" />}
                    {step === 0 && "开始破案"}
                    {step === 1 && "下一步：公平分配"}
                    {step === 2 && "最后：还给哥哥"}
                    {step === 3 && "分糖完成！"}
                </button>
            </div>

            {/* Logic Box */}
            {step > 0 && (
                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 space-y-4 animate-in fade-in duration-500">
                    <h4 className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                        <LayoutGrid className="w-4 h-4 text-indigo-500" /> 计算实验室
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className={`p-4 rounded-xl border-2 transition-all duration-500 ${step >= 2 ? 'bg-white dark:bg-slate-800 border-indigo-500 shadow-md' : 'bg-slate-100 dark:bg-slate-800/20 border-transparent opacity-40'}`}>
                            <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">弟弟的糖果 (小数)</p>
                            <p className="text-xl font-mono font-bold text-indigo-600">({sum} - {diff}) ÷ 2 = {smallNum}</p>
                        </div>
                        <div className={`p-4 rounded-xl border-2 transition-all duration-500 ${step === 3 ? 'bg-white dark:bg-slate-800 border-orange-500 shadow-md' : 'bg-slate-100 dark:bg-slate-800/20 border-transparent opacity-40'}`}>
                            <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">哥哥的糖果 (大数)</p>
                            <p className="text-xl font-mono font-bold text-orange-600">{smallNum} + {diff} = {bigNum}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const RotateCcw = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
    </svg>
);

export default SumDiffScale;

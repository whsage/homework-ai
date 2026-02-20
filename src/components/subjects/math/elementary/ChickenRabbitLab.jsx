import React, { useState, useEffect } from 'react';
import { Bird, Rabbit, HelpCircle, StepForward, Calculator, CheckCircle2, RotateCcw } from 'lucide-react';

const ChickenRabbitLab = () => {
    const [totalHeads, setTotalHeads] = useState(8);
    const [totalLegs, setTotalLegs] = useState(22);
    const [numChickens, setNumChickens] = useState(totalHeads);
    const [mode, setMode] = useState('explore'); // explore, hypothesis
    const [step, setStep] = useState(0);

    // Sync numChickens if totalHeads changes
    useEffect(() => {
        setNumChickens(totalHeads);
        setStep(0);
    }, [totalHeads]);

    const numRabbits = totalHeads - numChickens;
    const currentLegs = (numChickens * 2) + (numRabbits * 4);
    const solved = currentLegs === totalLegs;

    // Hypothesis logic steps
    // 1. All are chickens (legs = heads * 2)
    // 2. Diff = totalLegs - (heads * 2)
    // 3. Each swap adds 2 legs (4-2)
    // 4. Num rabbits = diff / 2
    const hypothesisLegsAtStart = totalHeads * 2;
    const extraLegsNeeded = totalLegs - hypothesisLegsAtStart;
    const rabbitsNeeded = extraLegsNeeded / 2;

    return (
        <div className="space-y-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-3">
                    <Bird className="text-orange-500 w-8 h-8" /> 鸡兔同笼大探秘
                </h3>
                <p className="text-slate-500">已知头和腿的数量，你能找出笼子里到底有几只鸡、几只兔吗？</p>
            </div>

            {/* Scenario Setup */}
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-2xl border border-orange-100">
                    <label className="text-xs font-bold text-orange-600 uppercase mb-2 block">总头数 (Heads)</label>
                    <input
                        type="range" min="5" max="15" value={totalHeads}
                        onChange={(e) => setTotalHeads(parseInt(e.target.value))}
                        className="w-full h-2 bg-orange-200 rounded-lg appearance-none accent-orange-500 cursor-pointer"
                    />
                    <div className="flex justify-between mt-1 text-xl font-bold text-orange-700">
                        <span>{totalHeads} 个脑袋</span>
                    </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl border border-blue-100">
                    <label className="text-xs font-bold text-blue-600 uppercase mb-2 block">总腿数 (Legs)</label>
                    <input
                        type="range" min={totalHeads * 2} max={totalHeads * 4} step="2" value={totalLegs}
                        onChange={(e) => setTotalLegs(parseInt(e.target.value))}
                        className="w-full h-2 bg-blue-200 rounded-lg appearance-none accent-blue-500 cursor-pointer"
                    />
                    <div className="flex justify-between mt-1 text-xl font-bold text-blue-700">
                        <span>{totalLegs} 条腿</span>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 bg-slate-100 dark:bg-slate-900/50 p-1.5 rounded-xl">
                <button
                    onClick={() => setMode('explore')}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${mode === 'explore' ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm' : 'text-slate-500'}`}
                >
                    🕹️ 自由拨动
                </button>
                <button
                    onClick={() => { setMode('hypothesis'); setStep(0); }}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${mode === 'hypothesis' ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm' : 'text-slate-500'}`}
                >
                    🧙‍♂️ 假设法破案
                </button>
            </div>

            {/* Visualization Area */}
            <div className="relative min-h-[300px] bg-slate-50 dark:bg-slate-900/50 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center p-8 overflow-hidden">
                <div className="flex flex-wrap justify-center gap-6 max-w-2xl">
                    {Array.from({ length: totalHeads }).map((_, i) => {
                        const isRabbit = i < numRabbits;
                        const isUnderHypothesis = mode === 'hypothesis';
                        const showAsChicken = isUnderHypothesis && step === 0;
                        const isSelectedForSwap = isUnderHypothesis && step >= 2 && i < rabbitsNeeded;

                        return (
                            <div key={i} className="flex flex-col items-center gap-2 group">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-md border-2 transition-all duration-500 ${isSelectedForSwap && step === 3 ? 'bg-indigo-100 border-indigo-400 scale-110' : 'bg-white dark:bg-slate-800 border-transparent'
                                    }`}>
                                    {showAsChicken ? '🐤' : (isRabbit ? '🐰' : '🐤')}
                                </div>
                                <div className="flex gap-1">
                                    {/* Legs */}
                                    {Array.from({ length: 2 }).map(j => <div key={j} className="w-1.5 h-3 bg-slate-400 rounded-full" />)}
                                    {isRabbit && !showAsChicken && Array.from({ length: 2 }).map(j => (
                                        <div key={j + 2} className={`w-1.5 h-3 bg-orange-400 rounded-full animate-in slide-in-from-top-2 ${isSelectedForSwap && step === 2 ? 'ring-2 ring-red-400' : ''}`} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Status Overlay */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 p-3 rounded-xl shadow-lg border border-slate-100 text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase">当前计数</p>
                    <div className="flex items-baseline gap-1">
                        <span className={`text-2xl font-black ${solved ? 'text-green-600' : 'text-red-600'}`}>{currentLegs}</span>
                        <span className="text-xs text-slate-400">/ {totalLegs} 腿</span>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="space-y-6">
                {mode === 'explore' ? (
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm font-bold text-slate-600">
                            <span>🐤 全是鸡 ({totalHeads})</span>
                            <span>🐰 全是兔 ({totalHeads})</span>
                        </div>
                        <input
                            type="range" min="0" max={totalHeads} value={numRabbits}
                            onChange={(e) => setNumChickens(totalHeads - parseInt(e.target.value))}
                            className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                        <div className="flex justify-center gap-8 py-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl border border-indigo-100">
                            <div className="text-center">
                                <p className="text-xs text-slate-500 uppercase font-bold">目前鸡的数量</p>
                                <p className="text-3xl font-black text-indigo-600">{numChickens}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xs text-slate-500 uppercase font-bold">目前兔的数量</p>
                                <p className="text-3xl font-black text-indigo-600">{numRabbits}</p>
                            </div>
                        </div>
                        {solved && (
                            <div className="bg-green-100 text-green-700 p-4 rounded-xl text-center font-bold flex items-center justify-center gap-2 animate-bounce">
                                <CheckCircle2 className="w-5 h-5" /> 恭喜你，找到了正确的平衡！
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border-2 border-indigo-100">
                            <div className="min-h-[60px] flex items-center justify-center text-center px-4">
                                {step === 0 && <p className="font-bold text-indigo-700">第一步：变魔术！假设笼子里全是 <strong>鸡</strong>。此时一共只有 {hypothesisLegsAtStart} 条腿。</p>}
                                {step === 1 && <p className="font-bold text-indigo-700">第二步：看看差了多少？题目说有 {totalLegs} 条腿，我们只有 {hypothesisLegsAtStart} 条，还差 <strong>{extraLegsNeeded}</strong> 条腿。</p>}
                                {step === 2 && <p className="font-bold text-indigo-700">第三步：给鸡补腿！每多出 2 条腿，就能把一只鸡变成兔子（2+2=4腿）。我们需要变几只？ <strong>{extraLegsNeeded} ÷ 2 = {rabbitsNeeded}</strong> 只！</p>}
                                {step === 3 && <p className="font-bold text-green-700">大功告成！把其中 {rabbitsNeeded} 只鸡换成兔子，正好就有 {totalLegs} 条腿啦！</p>}
                            </div>
                        </div>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={() => setStep(0)}
                                className="p-3 rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 transition-colors"
                            >
                                <RotateCcw className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => {
                                    if (step < 3) {
                                        setStep(step + 1);
                                        if (step === 2) setNumChickens(totalHeads - rabbitsNeeded);
                                    }
                                }}
                                disabled={step === 3}
                                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all shadow-lg ${step === 3 ? 'bg-green-600 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700'
                                    }`}
                            >
                                {step === 3 ? <CheckCircle2 className="w-5 h-5" /> : <StepForward className="w-5 h-5" />}
                                {step === 0 && "开始破案"}
                                {step === 1 && "看看差几条腿"}
                                {step === 2 && "变鸡为兔"}
                                {step === 3 && "破案成功"}
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex items-start gap-2 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl">
                <HelpCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                    <strong>神探秘籍：</strong> 除了假设法，你还可以试试「砍足法」或者「抬脚法」哦！比如让鸡和兔都抬起 2 只脚，此时剩下的腿全是兔子的后腿，数一数剩下几条腿，除以 2 就能飞快算出兔子数啦！
                </p>
            </div>
        </div>
    );
};

export default ChickenRabbitLab;

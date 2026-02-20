import React, { useState, useEffect } from 'react';
import { Cpu, Settings, Play, ArrowRight, Sparkles, Box, Info } from 'lucide-react';

const OperatorMachineLab = () => {
    const [a, setA] = useState(5);
    const [b, setB] = useState(3);
    const [ruleId, setRuleId] = useState('rule1');
    const [isProcessing, setIsProcessing] = useState(false);
    const [result, setResult] = useState(null);

    const rules = {
        rule1: {
            label: "a ★ b = (a + b) × 2",
            fn: (a, b) => (a + b) * 2,
            steps: ["把 a 和 b 加起来", "将结果乘以 2"]
        },
        rule2: {
            label: "a ▲ b = a × b - a",
            fn: (a, b) => a * b - a,
            steps: ["数 a 和 b 相乘", "从积中减去 a"]
        },
        rule3: {
            label: "a ⊕ b = (a × 3) - (b × 2)",
            fn: (a, b) => (a * 3) - (b * 2),
            steps: ["a 变成其 3 倍", "b 变成其 2 倍", "大数减小数"]
        }
    };

    const process = () => {
        setIsProcessing(true);
        setResult(null);
        setTimeout(() => {
            const val = rules[ruleId].fn(a, b);
            setResult(val);
            setIsProcessing(false);
        }, 1200);
    };

    return (
        <div className="space-y-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            {/* Header */}
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-3">
                    <Cpu className="text-emerald-500 w-8 h-8" /> 神奇运算加工厂
                </h3>
                <p className="text-slate-500 text-sm">输入数字，运行“神奇规则”，看看出来的会是什么？</p>
            </div>

            {/* Rule Selector */}
            <div className="flex flex-wrap gap-3">
                {Object.entries(rules).map(([id, r]) => (
                    <button
                        key={id}
                        onClick={() => { setRuleId(id); setResult(null); }}
                        className={`flex-1 p-4 rounded-2xl border-2 transition-all font-mono font-bold text-sm ${ruleId === id
                                ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg'
                                : 'bg-slate-50 border-slate-100 text-slate-500 hover:border-emerald-200'
                            }`}
                    >
                        {r.label}
                    </button>
                ))}
            </div>

            {/* The Machine Interface */}
            <div className="relative bg-slate-900 rounded-[3rem] p-12 overflow-hidden shadow-2xl border-8 border-slate-800">
                <div className="grid md:grid-cols-3 gap-8 items-center relative z-10">

                    {/* Input Area */}
                    <div className="space-y-6">
                        <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest text-center">原料入口 (Inputs)</div>
                        <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-4">
                            <div className="flex items-center justify-between gap-4">
                                <span className="text-white font-black">A</span>
                                <input
                                    type="number" value={a} onChange={e => setA(parseInt(e.target.value) || 0)}
                                    className="w-20 bg-slate-900 text-emerald-400 text-center font-mono py-2 rounded-xl border border-slate-600 focus:border-emerald-500 outline-none"
                                />
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <span className="text-white font-black">B</span>
                                <input
                                    type="number" value={b} onChange={e => setB(parseInt(e.target.value) || 0)}
                                    className="w-20 bg-slate-900 text-emerald-400 text-center font-mono py-2 rounded-xl border border-slate-600 focus:border-emerald-500 outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Processor Body */}
                    <div className="flex flex-col items-center justify-center pt-8">
                        <div className={`relative w-48 h-48 rounded-full border-4 ${isProcessing ? 'border-emerald-500 animate-spin' : 'border-slate-700'} flex items-center justify-center transition-all`}>
                            <Settings className={`w-20 h-20 text-slate-600 ${isProcessing ? 'animate-pulse text-emerald-500' : ''}`} />
                            {isProcessing && <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-xl animate-pulse" />}
                        </div>
                        <button
                            disabled={isProcessing}
                            onClick={process}
                            className={`mt-8 px-10 py-4 rounded-full font-black text-white shadow-xl transition-all active:scale-90 flex items-center gap-2 ${isProcessing ? 'bg-slate-700' : 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-900/40'
                                }`}
                        >
                            <Play fill="currentColor" size={16} /> START
                        </button>
                    </div>

                    {/* Output Area */}
                    <div className="space-y-6">
                        <div className="text-[10px] font-bold text-amber-400 uppercase tracking-widest text-center">成品出口 (Output)</div>
                        <div className={`h-40 flex items-center justify-center rounded-3xl border-2 border-dashed ${result !== null ? 'bg-amber-500/10 border-amber-500' : 'bg-slate-800/50 border-slate-700'} transition-all duration-700`}>
                            {result !== null ? (
                                <div className="text-6xl font-black text-amber-500 animate-in zoom-in duration-500 font-mono">
                                    {result}
                                </div>
                            ) : (
                                <div className="text-slate-700 font-black text-4xl">?</div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Decorative Lights */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className={`w-2 h-2 rounded-full ${isProcessing ? 'bg-emerald-500 animate-ping' : 'bg-slate-800'}`} style={{ animationDelay: `${i * 0.2}s` }} />
                    ))}
                </div>
            </div>

            {/* Internal Steps Box */}
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-4">
                <h4 className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <Info className="w-5 h-5 text-emerald-500" /> 机器加工流程视图
                </h4>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    {rules[ruleId].steps.map((stepDesc, i) => (
                        <React.Fragment key={i}>
                            <div className="flex-1 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400 font-medium">
                                <span className="font-bold text-emerald-500 mr-2">Step {i + 1}:</span>
                                {stepDesc}
                            </div>
                            {i < rules[ruleId].steps.length - 1 && <ArrowRight className="text-slate-300 rotate-90 md:rotate-0" />}
                        </React.Fragment>
                    ))}
                    <Sparkles className="text-yellow-500 hidden md:block" />
                </div>
            </div>
        </div>
    );
};

export default OperatorMachineLab;

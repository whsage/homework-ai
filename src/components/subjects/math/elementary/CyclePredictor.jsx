import React, { useState } from 'react';
import { Eye, Calculator, MoveRight, HelpCircle, Repeat, ArrowDownCircle } from 'lucide-react';

const CyclePredictor = () => {
    const [pattern, setPattern] = useState(['🔴', '🟡', '🔵']);
    const [targetNum, setTargetNum] = useState(10);
    const [showLogic, setShowLogic] = useState(false);

    const availableItems = ['🔴', '🟡', '🔵', '🟢', '🎨', '🌟', '🌙', '☀️', '🐱', '🐶', '🐭'];

    const addItem = (item) => {
        if (pattern.length < 6) setPattern([...pattern, item]);
    };

    const removeItem = (index) => {
        if (pattern.length > 2) setPattern(pattern.filter((_, i) => i !== index));
    };

    const cycleLen = pattern.length;
    const quotient = Math.floor((targetNum - 1) / cycleLen);
    const remainder = (targetNum - 1) % cycleLen; // 0-indexed internal logic
    const visualRemainder = remainder + 1; // 1-indexed for display
    const resultItem = pattern[remainder];

    return (
        <div className="space-y-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-3">
                    <Repeat className="text-purple-500 w-8 h-8" /> 魔法周期预言机
                </h3>
                <p className="text-slate-500">设定你的循环规律，让预言机告诉你未来是什么！</p>
            </div>

            {/* Pattern Constructor */}
            <div className="space-y-4 bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-100 dark:border-purple-800">
                <h4 className="font-bold text-purple-800 dark:text-purple-300 flex items-center gap-2">
                    <Repeat className="w-4 h-4" /> 步骤1: 设定一个小分队 (周期)
                </h4>
                <div className="flex gap-4 items-center flex-wrap">
                    <div className="flex bg-white dark:bg-slate-700 p-2 rounded-xl shadow-inner border border-purple-200 dark:border-purple-900 min-h-[64px] min-w-[200px]">
                        {pattern.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={() => removeItem(idx)}
                                className="w-12 h-12 flex items-center justify-center text-3xl hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100">✕</span>
                            </button>
                        ))}
                    </div>
                    <MoveRight className="text-purple-300 hidden md:block" />
                    <div className="flex gap-2 bg-white/50 dark:bg-slate-800/50 p-2 rounded-xl border border-purple-100 dark:border-purple-900 flex-wrap max-w-sm">
                        {availableItems.filter(i => !pattern.includes(i)).map(item => (
                            <button
                                key={item}
                                onClick={() => addItem(item)}
                                className="w-10 h-10 flex items-center justify-center text-2xl hover:scale-110 transition-transform"
                                disabled={pattern.length >= 6}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
                <p className="text-xs text-purple-600/60 font-medium">✨ 点击小分队里的图标可以删除，点击右侧图标可以添加。小分队长度: {cycleLen}</p>
            </div>

            {/* Target Selection */}
            <div className="space-y-4">
                <h4 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                    <Eye className="w-4 h-4 text-indigo-500" /> 步骤2: 预言未来的某一项
                </h4>
                <div className="flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-3">
                        <label className="text-sm font-bold text-slate-500">我想看第</label>
                        <input
                            type="number"
                            min="1"
                            max="500"
                            value={targetNum}
                            onChange={(e) => setTargetNum(parseInt(e.target.value) || 1)}
                            className="w-24 px-4 py-2 rounded-xl border-2 border-indigo-100 dark:border-slate-600 focus:border-indigo-500 outline-none text-center font-bold text-indigo-600 dark:bg-slate-700"
                        />
                        <label className="text-sm font-bold text-slate-500">个是什么？</label>
                    </div>
                    <button
                        onClick={() => setShowLogic(!showLogic)}
                        className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold transition-all ${showLogic ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                            }`}
                    >
                        <Calculator className="w-4 h-4" /> {showLogic ? '藏起推理过程' : '开启数学推理'}
                    </button>
                </div>
            </div>

            {/* Results Area */}
            <div className="relative py-12 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-center overflow-hidden">
                {!showLogic ? (
                    <div className="animate-in zoom-in duration-500">
                        <p className="text-sm text-slate-500 mb-4 font-bold uppercase tracking-widest tracking-widest">预言结果</p>
                        <div className="w-32 h-32 bg-white dark:bg-slate-800 rounded-full shadow-2xl flex items-center justify-center text-7xl border-4 border-indigo-500/20 relative">
                            {resultItem}
                            <div className="absolute -bottom-4 bg-indigo-600 text-white text-xs px-4 py-1 rounded-full font-bold shadow-lg">
                                第 {targetNum} 项
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6 w-full max-w-md animate-in slide-in-from-bottom-4 duration-500">
                        <div className="space-y-2">
                            <p className="text-xs text-slate-400 font-bold uppercase">推理实验室</p>
                            <div className="flex justify-center items-center gap-4 text-2xl font-mono p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                                <span className="text-indigo-600 font-bold">{targetNum}</span>
                                <span>÷</span>
                                <span className="text-purple-600 font-bold">{cycleLen}</span>
                                <span>=</span>
                                <span className="text-slate-400">{quotient}</span>
                                <span className="text-sm">...</span>
                                <span className="text-red-500 font-bold">{visualRemainder}</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100">
                                <p className="text-[10px] text-slate-400 font-bold mb-1">循环了几个分队?</p>
                                <p className="text-lg font-bold text-slate-700 dark:text-slate-300">{quotient} 个完整分队</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-red-100 border-2">
                                <p className="text-[10px] text-red-400 font-bold mb-1">剩下第几个?</p>
                                <p className="text-lg font-bold text-red-600">第 {visualRemainder} 个</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-2 pt-4">
                            <p className="text-sm text-slate-500">对应小分队里的：</p>
                            <div className="flex gap-2">
                                {pattern.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-12 h-12 flex items-center justify-center text-2xl rounded-lg transition-all ${idx === remainder ? 'bg-red-100 border-2 border-red-500 scale-110 shadow-lg' : 'bg-slate-100 opacity-30'
                                            }`}
                                    >
                                        {item}
                                        {idx === remainder && <ArrowDownCircle className="absolute -top-3 text-red-500 w-4 h-4 animate-bounce" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Pattern Tape */}
                <div className="absolute top-0 w-full flex overflow-hidden opacity-10 py-1">
                    {Array.from({ length: 40 }).map((_, i) => (
                        <span key={i} className="text-lg">{pattern[i % cycleLen]}</span>
                    ))}
                </div>
            </div>

            <div className="flex items-start gap-2 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl">
                <HelpCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                    <strong>预言家秘籍：</strong>如果刚好分完（余数是0），那么预言结果就是小分队的 <strong>最后一位</strong> 成员哦！在我们的计算里，这意味着它处于第 {cycleLen} 个位置。
                </p>
            </div>
        </div>
    );
};

export default CyclePredictor;

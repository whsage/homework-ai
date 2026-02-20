import React, { useState, useEffect } from 'react';
import { MoveHorizontal, Calculator, Lightbulb, RefreshCcw } from 'lucide-react';

const DecimalOpsLab = () => {
    const [num, setNum] = useState(1.234);
    const [multiplier, setMultiplier] = useState(1); // 10^x
    const [mode, setMode] = useState('mult'); // 'mult', 'div'
    const [isAnimating, setIsAnimating] = useState(false);
    const [displayNum, setDisplayNum] = useState(num.toString());

    useEffect(() => {
        let result = num;
        if (mode === 'mult') {
            result = num * Math.pow(10, multiplier);
        } else {
            result = num / Math.pow(10, multiplier);
        }
        // Format result to avoid floating point issues
        setDisplayNum(Number(result.toFixed(6)).toString());
    }, [num, multiplier, mode]);

    const reset = () => {
        setNum(1.234);
        setMultiplier(0);
        setMode('mult');
    };

    return (
        <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl shadow-2xl border border-indigo-100 dark:border-indigo-900/30">
            <div className="max-w-3xl mx-auto space-y-8">
                {/* Header */}
                <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-indigo-800 dark:text-indigo-300 flex items-center justify-center gap-2">
                        <MoveHorizontal className="w-6 h-6" />
                        小数点滑滑梯
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">探索乘以 10, 100, 1000 时小数点发生了什么</p>
                </div>

                {/* Display Area */}
                <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-inner border-4 border-indigo-100 dark:border-indigo-900/30 overflow-hidden">
                    <div className="flex items-center justify-center space-x-1">
                        {displayNum.split('').map((char, i) => (
                            <div
                                key={i}
                                className={`
                                    text-6xl font-mono font-black transition-all duration-500 transform
                                    ${char === '.' ? 'text-red-500 scale-125 mx-2' : 'text-slate-800 dark:text-slate-200'}
                                    ${isAnimating ? 'opacity-50' : 'opacity-100'}
                                `}
                            >
                                {char}
                            </div>
                        ))}
                    </div>

                    {/* Background Grid Pattern */}
                    <div className="absolute inset-0 pointer-events-none opacity-5">
                        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)', size: '20px 20px' }}></div>
                    </div>
                </div>

                {/* Controls */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4 bg-white/50 dark:bg-slate-800/50 p-6 rounded-2xl backdrop-blur-sm border border-white dark:border-slate-700">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-bold text-slate-700 dark:text-slate-300">模式选择</span>
                            <div className="flex bg-slate-200 dark:bg-slate-700 rounded-lg p-1">
                                <button
                                    onClick={() => setMode('mult')}
                                    className={`px-4 py-1 rounded-md text-sm font-bold transition-all ${mode === 'mult' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-600'}`}
                                >
                                    乘法 ×
                                </button>
                                <button
                                    onClick={() => setMode('div')}
                                    className={`px-4 py-1 rounded-md text-sm font-bold transition-all ${mode === 'div' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-600'}`}
                                >
                                    除法 ÷
                                </button>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <label className="text-sm font-medium text-slate-500 flex items-center gap-2">
                                <Calculator className="w-4 h-4" />
                                移动位数 (10<sup>{multiplier}</sup>)
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="4"
                                value={multiplier}
                                onChange={(e) => setMultiplier(parseInt(e.target.value))}
                                className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                            <div className="flex justify-between text-xs font-mono text-slate-400 font-bold px-1">
                                <span>1</span>
                                <span>10</span>
                                <span>100</span>
                                <span>1000</span>
                                <span>10k</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 bg-white/50 dark:bg-slate-800/50 p-6 rounded-2xl backdrop-blur-sm border border-white dark:border-slate-700">
                        <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold mb-2">
                            <Lightbulb className="w-5 h-5" />
                            <span>观察规律</span>
                        </div>
                        <div className="text-sm text-slate-700 dark:text-slate-300 space-y-3">
                            {mode === 'mult' ? (
                                <p>乘以 10, 100... 小数点向<span className="text-red-500 font-bold">右</span>移动 {multiplier} 位。</p>
                            ) : (
                                <p>除以 10, 100... 小数点向<span className="text-red-500 font-bold">左</span>移动 {multiplier} 位。</p>
                            )}
                            <p className="p-3 bg-indigo-100/50 dark:bg-indigo-900/30 rounded-lg italic">
                                "{mode === 'mult' ? '数字变大了！' : '数字变小了！'} 每移动一位，相当于放大了 10 倍或缩小了 10 倍。"
                            </p>
                        </div>
                        <button
                            onClick={reset}
                            className="w-full py-2 border-2 border-indigo-200 dark:border-indigo-800 rounded-xl text-indigo-600 dark:text-indigo-400 font-bold hover:bg-indigo-50 dark:hover:bg-indigo-900/30 flex items-center justify-center gap-2 transition-all"
                        >
                            <RefreshCcw className="w-4 h-4" /> 重置实验
                        </button>
                    </div>
                </div>

                {/* Formula Display */}
                <div className="text-center p-4 bg-indigo-600 rounded-xl shadow-lg border-2 border-indigo-400">
                    <p className="text-white font-mono text-lg font-bold">
                        {num} {mode === 'mult' ? '×' : '÷'} {Math.pow(10, multiplier)} = {displayNum}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DecimalOpsLab;

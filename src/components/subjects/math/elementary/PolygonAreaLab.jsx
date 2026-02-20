import React, { useState } from 'react';
import { Scissors, Combine, RefreshCcw, Layout, Triangle, Square } from 'lucide-react';

const PolygonAreaLab = () => {
    const [shape, setShape] = useState('parallelogram'); // 'parallelogram', 'triangle'
    const [step, setStep] = useState(0); // 0: original, 1: transformed
    const [base, setBase] = useState(200);
    const [height, setHeight] = useState(120);
    const [slant, setSlant] = useState(60);

    const reset = () => {
        setStep(0);
    };

    return (
        <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Mode Selection */}
                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => { setShape('parallelogram'); setStep(0); }}
                        className={`px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all ${shape === 'parallelogram' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'}`}
                    >
                        <Square className="w-4 h-4 rotate-12" /> 平行四边形
                    </button>
                    <button
                        onClick={() => { setShape('triangle'); setStep(0); }}
                        className={`px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all ${shape === 'triangle' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'}`}
                    >
                        <Triangle className="w-4 h-4" /> 三角形
                    </button>
                </div>

                {/* Animation Stage */}
                <div className="relative bg-white dark:bg-slate-800 rounded-3xl h-80 shadow-inner border-2 border-slate-200 dark:border-slate-700 overflow-hidden flex items-center justify-center">
                    <svg width="100%" height="100%" viewBox="0 0 600 300" className="drop-shadow-lg">
                        {/* Grid */}
                        <defs>
                            <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-200 dark:text-slate-700" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />

                        {shape === 'parallelogram' && (
                            <g transform="translate(150, 80)">
                                {step === 0 ? (
                                    <>
                                        {/* Main Parallelogram */}
                                        <path
                                            d={`M ${slant} 0 L ${base + slant} 0 L ${base} ${height} L 0 ${height} Z`}
                                            fill="rgba(79, 70, 229, 0.2)"
                                            stroke="#4f46e5"
                                            strokeWidth="3"
                                            className="transition-all duration-1000"
                                        />
                                        {/* Height Line */}
                                        <line x1={slant} y1="0" x2={slant} y2={height} stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />
                                        <text x={slant + 5} y={height / 2} className="text-xs fill-red-500 font-bold">高 (h)</text>
                                        <text x={base / 2} y={height + 20} className="text-xs fill-indigo-600 font-bold">底 (a)</text>
                                    </>
                                ) : (
                                    <>
                                        {/* Transformed Rectangle */}
                                        <rect
                                            x="0" y="0" width={base} height={height}
                                            fill="rgba(16, 185, 129, 0.2)"
                                            stroke="#10b981"
                                            strokeWidth="3"
                                            className="transition-all duration-1000"
                                        />
                                        <text x={base / 2} y={height + 20} className="text-xs fill-green-600 font-bold">长 (a)</text>
                                        <text x="-30" y={height / 2} className="text-xs fill-green-600 font-bold">宽 (h)</text>
                                    </>
                                )}
                            </g>
                        )}

                        {shape === 'triangle' && (
                            <g transform="translate(200, 80)">
                                {step === 0 ? (
                                    <>
                                        {/* Triangle */}
                                        <path
                                            d={`M ${base / 2} 0 L ${base} ${height} L 0 ${height} Z`}
                                            fill="rgba(245, 158, 11, 0.2)"
                                            stroke="#f59e0b"
                                            strokeWidth="3"
                                            className="transition-all duration-1000"
                                        />
                                        <line x1={base / 2} y1="0" x2={base / 2} y2={height} stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />
                                        <text x={base / 2 + 5} y={height / 2} className="text-xs fill-red-500 font-bold">高 (h)</text>
                                        <text x={base / 2} y={height + 20} className="text-xs fill-amber-600 font-bold">底 (a)</text>
                                    </>
                                ) : (
                                    <>
                                        {/* Two Triangles making a Parallelogram */}
                                        <path
                                            d={`M ${base / 2} 0 L ${base} ${height} L 0 ${height} Z`}
                                            fill="rgba(245, 158, 11, 0.2)"
                                            stroke="#f59e0b"
                                            strokeWidth="3"
                                            className="transition-all duration-1000"
                                        />
                                        <path
                                            d={`M ${base / 2} 0 L ${base * 1.5} 0 L ${base} ${height} Z`}
                                            fill="rgba(245, 158, 11, 0.1)"
                                            stroke="#f59e0b"
                                            strokeWidth="2"
                                            strokeDasharray="4 4"
                                            className="opacity-60"
                                        />
                                        <text x={base} y={height + 20} className="text-xs fill-amber-600 font-bold text-center">拼成了一个平行四边形</text>
                                    </>
                                )}
                            </g>
                        )}
                    </svg>

                    {/* Step Label Overlay */}
                    <div className="absolute top-4 right-4 bg-white/80 dark:bg-slate-800/80 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-bold shadow-sm">
                        {step === 0 ? "原始形态" : "变形形态"}
                    </div>
                </div>

                {/* Explanation & Action */}
                <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                            {step === 0 ? <Scissors className="w-5 h-5 text-indigo-500" /> : <Combine className="w-5 h-5 text-green-500" />}
                            {shape === 'parallelogram' ? "平行四边形面积公式推导" : "三角形面积公式推导"}
                        </h4>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                            {shape === 'parallelogram' ? (
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {step === 0
                                        ? "我们将平行四边形沿着高剪开，把左边的小三角形拼到右边..."
                                        : "看！它变成了一个长方形。长方形的宽就是原图的高，长就是原图的底。所以面积 = 底 × 高。"}
                                </p>
                            ) : (
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {step === 0
                                        ? "如果我们再拿出一个完全相同的三角形，倒过来拼在一起..."
                                        : "这两个全等三角形可以拼成一个平行四边形！三角形的面积正好是平行四边形的一半。所以面积 = 底 × 高 ÷ 2。"}
                                </p>
                            )}
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setStep(step === 0 ? 1 : 0)}
                                className={`flex-1 gap-2 py-3 rounded-xl font-bold text-white transition-all flex items-center justify-center ${step === 0 ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-green-600 hover:bg-green-700'}`}
                            >
                                {step === 0 ? <Scissors className="w-4 h-4" /> : <RefreshCcw className="w-4 h-4" />}
                                {step === 0 ? "开始变形" : "恢复原状"}
                            </button>
                        </div>
                    </div>

                    <div className="bg-indigo-600 text-white p-6 rounded-3xl shadow-xl flex flex-col items-center justify-center space-y-2">
                        <Layout className="w-8 h-8 opacity-50" />
                        <span className="text-sm opacity-80 font-medium">面积公式</span>
                        <span className="text-3xl font-black font-mono tracking-tighter">
                            {shape === 'parallelogram' ? "S = a × h" : "S = a × h ÷ 2"}
                        </span>
                        <div className="pt-4 grid grid-cols-2 gap-4 w-full text-center">
                            <div className="bg-white/10 p-2 rounded-xl">
                                <p className="text-[10px] uppercase opacity-60">底 (base)</p>
                                <p className="font-bold">a</p>
                            </div>
                            <div className="bg-white/10 p-2 rounded-xl">
                                <p className="text-[10px] uppercase opacity-60">高 (height)</p>
                                <p className="font-bold">h</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PolygonAreaLab;

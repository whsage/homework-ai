import React, { useState } from 'react';
import { Shapes, Box, Scissors, Layers, Info, RotateCcw } from 'lucide-react';

const GeometryAdvLab = () => {
    const [mode, setMode] = useState('subtract'); // 'subtract', 'add'
    const [size, setSize] = useState(200);
    const [showSteps, setShowSteps] = useState(false);

    const squareArea = (size * size / 100).toFixed(0);
    const circleArea = (Math.PI * Math.pow(size / 2, 2) / 100).toFixed(0);
    const diffArea = (squareArea - circleArea).toFixed(0);

    return (
        <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center space-y-2">
                    <h3 className="text-2xl font-black text-slate-800 dark:text-white flex items-center justify-center gap-3">
                        <Shapes className="text-indigo-500" /> 高级几何组合实验室
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">看穿组合图形背后的切割、平移与相减规律！</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* SVG Visualization Area */}
                    <div className="relative group">
                        <div className="relative bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 shadow-inner border-4 border-slate-100 dark:border-slate-700 min-h-[350px] flex items-center justify-center overflow-hidden">
                            <svg width="100%" height="300" viewBox="0 0 300 300" className="drop-shadow-2xl">
                                {/* Base Square */}
                                <rect
                                    x={150 - size / 2} y={150 - size / 2} width={size} height={size}
                                    className={`fill-indigo-100 dark:fill-indigo-900/40 stroke-indigo-500 stroke-2 stroke-dasharray-4 transition-all duration-500`}
                                />

                                {mode === 'subtract' ? (
                                    <>
                                        {/* Nested Circle */}
                                        <circle
                                            cx="150" cy="150" r={size / 2}
                                            className={`fill-transparent stroke-rose-500 stroke-2 transition-all duration-500 ${showSteps ? 'fill-rose-500/20' : ''}`}
                                        />
                                        {/* Highlighted Corners (Subtracted areas) */}
                                        {showSteps && (
                                            <g className="animate-in fade-in duration-700">
                                                <path d={`M ${150 - size / 2} ${150 - size / 2} L ${150} ${150 - size / 2} A ${size / 2} ${size / 2} 0 0 1 ${150 - size / 2} ${150} Z`} className="fill-emerald-500/40" />
                                                <path d={`M ${150 + size / 2} ${150 - size / 2} L ${150 + size / 2} ${150} A ${size / 2} ${size / 2} 0 0 1 ${150} ${150 - size / 2} Z`} className="fill-emerald-500/40" />
                                                <path d={`M ${150 + size / 2} ${150 + size / 2} L ${150} ${150 + size / 2} A ${size / 2} ${size / 2} 0 0 1 ${150 + size / 2} ${150} Z`} className="fill-emerald-500/40" />
                                                <path d={`M ${150 - size / 2} ${150 + size / 2} L ${150 - size / 2} ${150} A ${size / 2} ${size / 2} 0 0 1 ${150} ${150 + size / 2} Z`} className="fill-emerald-500/40" />
                                            </g>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        {/* Semi circles forming patterns */}
                                        <g className="transition-all duration-500">
                                            <path d={`M ${150 - size / 2} ${150} A ${size / 4} ${size / 4} 0 0 1 ${150} ${150}`} className="fill-indigo-500/40 stroke-indigo-600" />
                                            <path d={`M ${150} ${150} A ${size / 4} ${size / 4} 0 0 1 ${150 + size / 2} ${150}`} className="fill-indigo-500/40 stroke-indigo-600" />
                                        </g>
                                    </>
                                )}
                            </svg>

                            {/* Overlay Stats */}
                            <div className="absolute top-4 right-6 text-right">
                                <span className="text-[10px] text-slate-400 font-bold uppercase block">阴影面积</span>
                                <span className="text-2xl font-black text-emerald-600">{showSteps ? diffArea : '?'} <small className="text-xs">cm²</small></span>
                            </div>
                        </div>
                    </div>

                    {/* Controls & Explanation */}
                    <div className="space-y-6">
                        <div className="flex gap-2 p-1 bg-slate-200 dark:bg-slate-800 rounded-2xl">
                            <button
                                onClick={() => setMode('subtract')}
                                className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${mode === 'subtract' ? 'bg-white text-indigo-600 dark:bg-slate-700 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                <Scissors size={16} /> 面积相减法
                            </button>
                            <button
                                onClick={() => setMode('add')}
                                className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${mode === 'add' ? 'bg-white text-indigo-600 dark:bg-slate-700 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                <Layers size={16} /> 面积相加/割补
                            </button>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-6 rounded-[2.5rem] shadow-lg border border-slate-100 dark:border-slate-700 space-y-6">
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                                    <span>边长/尺寸调节</span>
                                    <span>{size} PX</span>
                                </div>
                                <input
                                    type="range" min="100" max="250" value={size}
                                    onChange={(e) => setSize(parseInt(e.target.value))}
                                    className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                                />
                            </div>

                            <button
                                onClick={() => setShowSteps(!showSteps)}
                                className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 dark:shadow-none"
                            >
                                {showSteps ? '隐藏解题步骤' : '显示面积拆解'}
                            </button>

                            {showSteps && (
                                <div className="space-y-3 animate-in slide-in-from-top duration-500">
                                    <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700">
                                        <span className="text-xs text-slate-500">正方形面积 (S1)</span>
                                        <span className="font-mono font-bold">{squareArea} cm²</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700">
                                        <span className="text-xs text-slate-500">内切圆面积 (S2)</span>
                                        <span className="font-mono font-bold text-rose-500">{circleArea} cm²</span>
                                    </div>
                                    <div className="flex justify-between items-center p-4 bg-emerald-500/10 rounded-2xl border-2 border-emerald-500/30">
                                        <span className="text-sm font-bold text-emerald-600">阴影 = S1 - S2</span>
                                        <span className="text-xl font-black text-emerald-600">{diffArea} cm²</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="bg-indigo-600 p-6 rounded-[2rem] text-white shadow-xl relative overflow-hidden group/card">
                            <Box className="absolute -bottom-4 -right-4 w-24 h-24 text-white/10 rotate-12 transition-transform group-hover/card:scale-110" />
                            <h4 className="font-bold mb-2 flex items-center gap-2">几何思维点拨</h4>
                            <p className="text-xs text-indigo-100 leading-relaxed font-medium">
                                面对复杂图形，不要急于计算整个区域。问自己：这个形状是由哪些<strong>标准图形</strong>（圆、方、三角）组成的？是标准的加法还是减法？学会“割补法”能化繁为简。
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-4 flex gap-4 items-start">
                    <Info className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-900/80 dark:text-blue-200/80 leading-relaxed">
                        <strong>实验总结：</strong> 组合图形的面积计算是六年级几何的核心。通过将圆嵌入正方形，我们可以直观理解“边角料”面积的由来。记住：π ≈ 3.14 是解决此类问题的金钥匙。
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GeometryAdvLab;

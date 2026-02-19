import React, { useState, useEffect } from 'react';
import { Triangle, Ruler, PenTool, CheckCircle2, RotateCcw } from 'lucide-react';

const TriangleBasics = () => {
    // State for interactive triangle
    const [angleA, setAngleA] = useState(60);
    const [angleB, setAngleB] = useState(60);
    const [angleC, setAngleC] = useState(60);

    // Calculate Angle C automatically to ensure sum is 180
    // But for better interaction, let's allow users to change A and B, calculating C

    const handleAngleAChange = (e) => {
        const newA = parseInt(e.target.value);
        if (newA + angleB < 180) {
            setAngleA(newA);
            setAngleC(180 - newA - angleB);
        }
    };

    const handleAngleBChange = (e) => {
        const newB = parseInt(e.target.value);
        if (angleA + newB < 180) {
            setAngleB(newB);
            setAngleC(180 - angleA - newB);
        }
    };

    const reset = () => {
        setAngleA(60);
        setAngleB(60);
        setAngleC(60);
    };

    // Determine triangle type
    const getTriangleType = () => {
        const angles = [angleA, angleB, angleC];
        if (angles.some(a => a === 90)) return '直角三角形';
        if (angles.some(a => a > 90)) return '钝角三角形';
        return '锐角三角形';
    };

    return (
        <div className="space-y-8">
            {/* Interactive Section */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-purple-100 dark:border-purple-900/30">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                    <PenTool className="w-5 h-5 text-purple-500" />
                    互动实验：三角形内角和与形状
                </h3>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Visualizer */}
                    <div className="relative h-64 bg-slate-50 dark:bg-slate-900/50 rounded-xl flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-700">
                        <div className="relative w-full max-w-[200px] aspect-[4/3]">
                            {/* SVG Triangle Rendering based on angles would be complex to do perfectly with just angles (need side lengths).
                                 Approximation: Fixed base, calculate vertex position.
                                 Let base AB be on x-axis. A at (0,0), B at (c, 0).
                                 C coordinates (x,y) determined by angles.
                              */}
                            <svg viewBox="-50 -150 300 200" className="w-full h-full drop-shadow-lg">
                                {(() => {
                                    // Simple calc: Base c = 200.
                                    // Coordinates: A(0,0), B(200,0)
                                    // C(x,y). y = h.
                                    // tan(A) = h/x, tan(B) = h/(200-x) => h = (200-x)tan(B)
                                    // x*tan(A) = (200-x)tan(B) => x(tanA + tanB) = 200tanB => x = 200tanB / (tanA+tanB)
                                    const radA = angleA * Math.PI / 180;
                                    const radB = angleB * Math.PI / 180;
                                    const base = 200;
                                    const x = (base * Math.tan(radB)) / (Math.tan(radA) + Math.tan(radB));
                                    const y = -1 * (x * Math.tan(radA)); // Negative y because SVG y goes down

                                    return (
                                        <g transform="translate(20, 20)"> {/* Padding */}
                                            <path d={`M0,0 L${base},0 L${x},${y} Z`} fill="rgba(139, 92, 246, 0.2)" stroke="#8b5cf6" strokeWidth="3" strokeLinejoin="round" />
                                            {/* Angle Labels */}
                                            <text x="10" y="-5" className="text-xs fill-slate-500">∠A {angleA}°</text>
                                            <text x={base - 40} y="-5" className="text-xs fill-slate-500">∠B {angleB}°</text>
                                            <text x={x} y={y - 10} textAnchor="middle" className="text-xs fill-slate-500 font-bold">∠C {angleC}°</text>
                                        </g>
                                    );
                                })()}
                            </svg>
                        </div>
                        <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 px-3 py-1 rounded-lg text-sm font-bold text-indigo-600 shadow-sm border border-indigo-100">
                            {getTriangleType()}
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="space-y-6">
                        <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-100 dark:border-orange-900/30">
                            <div className="text-center">
                                <span className="text-sm text-slate-500 dark:text-slate-400">当前内角和</span>
                                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 font-mono mt-1">
                                    {angleA} + {angleB} + {angleC} = {angleA + angleB + angleC}°
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="flex justify-between text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    <span>∠A 从 10° 到 150°</span>
                                    <span className="text-indigo-600">{angleA}°</span>
                                </label>
                                <input
                                    type="range"
                                    min="10"
                                    max="150"
                                    value={angleA}
                                    onChange={handleAngleAChange}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                                />
                            </div>
                            <div>
                                <label className="flex justify-between text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    <span>∠B 从 10° 到 150°</span>
                                    <span className="text-indigo-600">{angleB}°</span>
                                </label>
                                <input
                                    type="range"
                                    min="10"
                                    max="150"
                                    value={angleB}
                                    onChange={handleAngleBChange}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                                />
                            </div>
                            <div className="flex items-center justify-between pt-2">
                                <div className="text-sm text-slate-500">
                                    ∠C 自动计算为: <span className="font-bold text-slate-800 dark:text-white">{angleC}°</span>
                                </div>
                                <button
                                    onClick={reset}
                                    className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-slate-100 rounded-full transition-colors"
                                    title="重置为等边三角形"
                                >
                                    <RotateCcw className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Concepts */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Triangle className="w-5 h-5 text-indigo-600" />
                        三角形分类
                    </h4>
                    <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                            <span><strong>锐角三角形</strong>：三个角都小于 90°</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                            <span><strong>直角三角形</strong>：有一个角等于 90°</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                            <span><strong>钝角三角形</strong>：有一个角大于 90°</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Ruler className="w-5 h-5 text-blue-600" />
                        重要性质
                    </h4>
                    <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                        <li className="flex items-start gap-2">
                            <div className="min-w-[4px] h-[4px] rounded-full bg-slate-400 mt-2"></div>
                            <span><strong>内角和定理</strong>：三角形三个内角的和等于 180°。</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="min-w-[4px] h-[4px] rounded-full bg-slate-400 mt-2"></div>
                            <span><strong>外角定理</strong>：三角形的一个外角等于与它不相邻的两个内角之和。</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="min-w-[4px] h-[4px] rounded-full bg-slate-400 mt-2"></div>
                            <span><strong>稳定性</strong>：三角形具有稳定性，四边形容易变形（不稳定）。</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TriangleBasics;

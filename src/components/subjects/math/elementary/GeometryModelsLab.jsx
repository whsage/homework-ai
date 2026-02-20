import React, { useState, useRef, useEffect } from 'react';
import { MousePointer2, MoveHorizontal, RotateCcw, Info, BoxSelect, Ruler } from 'lucide-react';

const GeometryModelsLab = () => {
    const [topX, setTopX] = useState(300);
    const [isDragging, setIsDragging] = useState(false);
    const svgRef = useRef();

    const baseLeft = 150;
    const baseRight = 450;
    const baseY = 250;
    const topY = 100;

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const svg = svgRef.current;
        const rect = svg.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 600;
        setTopX(Math.min(550, Math.max(50, x)));
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const svg = svgRef.current;
        const rect = svg.getBoundingClientRect();
        const x = ((e.touches[0].clientX - rect.left) / rect.width) * 600;
        setTopX(Math.min(550, Math.max(50, x)));
    };

    useEffect(() => {
        const handleUp = () => setIsDragging(false);
        window.addEventListener('mouseup', handleUp);
        window.addEventListener('touchend', handleUp);
        return () => {
            window.removeEventListener('mouseup', handleUp);
            window.removeEventListener('touchend', handleUp);
        };
    }, []);

    const triangleArea = ((baseRight - baseLeft) * (baseY - topY)) / 2;

    return (
        <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-6">
                <div className="text-center space-y-2">
                    <h3 className="text-2xl font-black text-slate-800 dark:text-white flex items-center justify-center gap-3">
                        <BoxSelect className="w-8 h-8 text-indigo-600" />
                        等积变形魔法
                    </h3>
                    <p className="text-sm text-slate-500 font-medium">左右滑动顶部的红点，观察三角形面积的变化</p>
                </div>

                {/* Interactive Stage */}
                <div className="relative bg-white dark:bg-slate-800 rounded-3xl h-[400px] shadow-inner border-2 border-slate-200 dark:border-slate-700 select-none touch-none">
                    <svg
                        ref={svgRef}
                        width="100%"
                        height="100%"
                        viewBox="0 0 600 400"
                        onMouseMove={handleMouseMove}
                        onTouchMove={handleTouchMove}
                        onMouseDown={() => setIsDragging(true)}
                        onTouchStart={() => setIsDragging(true)}
                        className="cursor-crosshair"
                    >
                        {/* Parallel Lines (Iron Rails) */}
                        <line x1="0" y1={topY} x2="600" y2={topY} stroke="#e2e8f0" strokeWidth="2" strokeDasharray="8 4" className="dark:stroke-slate-700" />
                        <line x1="0" y1={baseY} x2="600" y2={baseY} stroke="#e2e8f0" strokeWidth="2" strokeDasharray="8 4" className="dark:stroke-slate-700" />

                        {/* Shadow / Ghost of original */}
                        <path
                            d={`M ${baseLeft} ${baseY} L 300 ${topY} L ${baseRight} ${baseY} Z`}
                            fill="rgba(79, 70, 229, 0.05)"
                            stroke="rgba(79, 70, 229, 0.1)"
                            strokeWidth="1"
                            strokeDasharray="4 2"
                        />

                        {/* Current Triangle */}
                        <path
                            d={`M ${baseLeft} ${baseY} L ${topX} ${topY} L ${baseRight} ${baseY} Z`}
                            fill="rgba(79, 70, 229, 0.2)"
                            stroke="#4f46e5"
                            strokeWidth="4"
                            strokeLinejoin="round"
                            className="transition-all duration-75"
                        />

                        {/* Base Line */}
                        <line x1={baseLeft} y1={baseY} x2={baseRight} y2={baseY} stroke="#4f46e5" strokeWidth="6" strokeLinecap="round" />
                        <text x={(baseLeft + baseRight) / 2} y={baseY + 30} className="text-sm fill-indigo-600 font-bold text-center" textAnchor="middle">底 (固定)</text>

                        {/* Height indicator */}
                        <path d={`M ${topX} ${topY} L ${topX} ${baseY}`} stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
                        <text x={topX + 10} y={(topY + baseY) / 2} className="text-xs fill-red-500 font-bold">高 (固定)</text>

                        {/* Draggable Vertex */}
                        <g className="cursor-grab active:cursor-grabbing">
                            <circle cx={topX} cy={topY} r="12" fill="#ef4444" className="shadow-lg" />
                            <circle cx={topX} cy={topY} r="20" fill="transparent" />
                            <circle cx={topX} cy={topY} r="16" stroke="#ef4444" strokeWidth="2" fill="none" className="animate-ping opacity-20" />
                        </g>

                        {/* Labels */}
                        <text x="20" y={topY - 10} className="text-[10px] fill-slate-400 font-mono">TRACK UPPER (PARALLEL)</text>
                        <text x="20" y={baseY + 50} className="text-[10px] fill-slate-400 font-mono">TRACK LOWER</text>
                    </svg>

                    {/* Dashboard Overlay */}
                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 rounded-2xl border border-indigo-100 dark:border-indigo-900/30 shadow-xl min-w-[160px]">
                            <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider mb-1">实时计算面积</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-black font-mono text-indigo-600 dark:text-indigo-400">{triangleArea}</span>
                                <span className="text-xs font-bold text-slate-400 italic">px²</span>
                            </div>
                            <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700">
                                <p className="text-[9px] text-slate-500">底: {baseRight - baseLeft} px</p>
                                <p className="text-[9px] text-slate-500">高: {baseY - topY} px</p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-6 right-6">
                        <button
                            className="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg transition-all text-sm font-bold"
                            onClick={() => setTopX(300)}
                        >
                            <RotateCcw className="w-4 h-4" /> 复位
                        </button>
                    </div>
                </div>

                {/* Theory Section */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-indigo-600 rounded-3xl p-6 text-white flex items-center gap-6 shadow-xl">
                        <div className="bg-white/20 p-4 rounded-2xl">
                            <Ruler className="w-8 h-8" />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">等积变形结论</h4>
                            <p className="text-xs opacity-80 leading-relaxed">
                                只要三角形的<span className="font-black underline mx-1">底</span>和<span className="font-black underline mx-1">高</span>保持不变，无论顶点如何平移，其面积永远相等。
                            </p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-md border border-slate-100 dark:border-slate-700 flex items-start gap-4">
                        <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl">
                            <Info className="w-6 h-6 text-indigo-500" />
                        </div>
                        <div className="space-y-1">
                            <h5 className="font-bold text-slate-800 dark:text-slate-200">解题秘籍</h5>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                在解决竞赛题时，观察图中是否有<span className="text-indigo-600 font-bold">平行线</span>。如果有，试着移动某个顶点，看看能否把复杂的图形转化成容易计算的简单图形。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeometryModelsLab;

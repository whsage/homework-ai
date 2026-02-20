import React, { useState, useEffect, useRef } from 'react';
// import { TrendingUp, MousePointer2 } from 'lucide-react';

const DerivativeVisualizer = () => {
    const [x, setX] = useState(0);
    const svgRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const width = 400;
    const height = 300;
    const padding = 40;

    // Function: f(x) = 0.1x^3 - x
    const xScale = 40; // pixels per unit
    const yScale = 40;
    const xOffset = width / 2;
    const yOffset = height / 2;

    const f = (val) => 0.1 * Math.pow(val, 3) - val;
    const df = (val) => 0.3 * Math.pow(val, 2) - 1; // Derivative

    // Map math coordinates to SVG coordinates
    const toSvgX = (val) => xOffset + val * xScale;
    const toSvgY = (val) => yOffset - val * yScale;
    const fromSvgX = (val) => (val - xOffset) / xScale;

    const pathData = () => {
        let path = `M 0 ${toSvgY(f(fromSvgX(0)))}`;
        for (let i = 1; i <= width; i += 2) {
            path += ` L ${i} ${toSvgY(f(fromSvgX(i)))}`;
        }
        return path;
    };

    const handleMouseMove = (e) => {
        if (isDragging && svgRef.current) {
            const rect = svgRef.current.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const newX = Math.max(-4.5, Math.min(4.5, fromSvgX(mouseX)));
            setX(newX);
        }
    };

    const slope = df(x);
    const yVal = f(x);
    // Tangent line: y - y0 = m(x - x0) => y = m(x - x0) + y0
    const tX1 = x - 2;
    const tY1 = slope * (tX1 - x) + yVal;
    const tX2 = x + 2;
    const tY2 = slope * (tX2 - x) + yVal;

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                    {/* <MousePointer2 className="w-4 h-4 text-indigo-500" /> */}
                    <span>👆</span>
                    拖动点观察切线斜率变化
                </div>
                <div className="text-sm font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded">
                    f'(x) ≈ {slope.toFixed(2)}
                </div>
            </div>

            <div
                className="p-4 flex justify-center cursor-crosshair touch-none"
                onMouseDown={() => setIsDragging(true)}
                onMouseMove={handleMouseMove}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
            >
                <svg ref={svgRef} width={width} height={height} className="border border-slate-100 dark:border-slate-800 rounded bg-white dark:bg-slate-900">
                    <defs>
                        <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#f1f5f9" strokeWidth="0.5" />
                        </pattern>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <rect width="40" height="40" fill="url(#smallGrid)" />
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />

                    {/* Axes */}
                    <line x1={0} y1={yOffset} x2={width} y2={yOffset} stroke="#94a3b8" strokeWidth="2" />
                    <line x1={xOffset} y1={0} x2={xOffset} y2={height} stroke="#94a3b8" strokeWidth="2" />

                    {/* Function Graph */}
                    <path d={pathData()} stroke="#3b82f6" strokeWidth="3" fill="none" />

                    {/* Tangent Line */}
                    <line
                        x1={toSvgX(tX1)} y1={toSvgY(tY1)}
                        x2={toSvgX(tX2)} y2={toSvgY(tY2)}
                        stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5"
                    />

                    {/* Point P */}
                    <circle cx={toSvgX(x)} cy={toSvgY(yVal)} r="6" fill="#ef4444" stroke="white" strokeWidth="2" className="cursor-pointer hover:r-8 transition-all" />

                    {/* Labels */}
                    <text x={width - 20} y={yOffset + 20} className="text-xs text-slate-400">x</text>
                    <text x={xOffset + 10} y={20} className="text-xs text-slate-400">y</text>
                </svg>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-900/50 text-sm text-center text-slate-600 dark:text-slate-400">
                导数 f'(x) 就是曲线在某一点处切线的<span className="font-bold text-red-500">斜率</span>。
                <br />
                当 slope &gt; 0 时函数递增，slope &lt; 0 时函数递减。
            </div>
        </div>
    );
};

export default DerivativeVisualizer;

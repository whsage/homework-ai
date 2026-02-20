import React, { useState } from 'react';
import { Circle, Sliders, Info, MousePointer2 } from 'lucide-react';

const CoordGeometryVisualizer = () => {
    const [mode, setMode] = useState('line'); // line, circle

    // Line: kx + b = y
    const [k, setK] = useState(1);
    const [b, setB] = useState(0);

    // Circle: (x-x0)^2 + (y-y0)^2 = r^2
    const [x0, setX0] = useState(0);
    const [y0, setY0] = useState(0);
    const [r, setR] = useState(2);

    const width = 400;
    const height = 400;
    const padding = 20;
    const scale = 30; // pixels per unit
    const cx = width / 2;
    const cy = height / 2;

    const toSvgX = (x) => cx + x * scale;
    const toSvgY = (y) => cy - y * scale;

    const renderGrid = () => {
        const lines = [];
        for (let i = -6; i <= 6; i++) {
            lines.push(
                <line key={`v-${i}`} x1={toSvgX(i)} y1={0} x2={toSvgX(i)} y2={height} stroke="#f1f5f9" strokeWidth="1" />,
                <line key={`h-${i}`} x1={0} y1={toSvgY(i)} x2={width} y2={toSvgY(i)} stroke="#f1f5f9" strokeWidth="1" />
            );
        }
        return lines;
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                <div className="flex bg-slate-200 dark:bg-slate-700 p-1 rounded-lg w-fit mb-4">
                    <button onClick={() => setMode('line')} className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${mode === 'line' ? 'bg-white dark:bg-slate-600 shadow text-indigo-600' : 'text-slate-500'}`}>直线方程</button>
                    <button onClick={() => setMode('circle')} className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${mode === 'circle' ? 'bg-white dark:bg-slate-600 shadow text-emerald-600' : 'text-slate-500'}`}>圆的方程</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mode === 'line' ? (
                        <>
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">斜率 k = {k}</label>
                                <input type="range" min="-3" max="3" step="0.1" value={k} onChange={(e) => setK(parseFloat(e.target.value))} className="w-full accent-indigo-600" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">截距 b = {b}</label>
                                <input type="range" min="-5" max="5" step="0.5" value={b} onChange={(e) => setB(parseFloat(e.target.value))} className="w-full accent-indigo-600" />
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">圆心 (x₀, y₀) = ({x0}, {y0})</label>
                                <div className="flex gap-2">
                                    <input type="range" min="-4" max="4" step="0.5" value={x0} onChange={(e) => setX0(parseFloat(e.target.value))} className="flex-1 accent-emerald-600" />
                                    <input type="range" min="-4" max="4" step="0.5" value={y0} onChange={(e) => setY0(parseFloat(e.target.value))} className="flex-1 accent-emerald-600" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">半径 r = {r}</label>
                                <input type="range" min="0.5" max="5" step="0.5" value={r} onChange={(e) => setR(parseFloat(e.target.value))} className="w-full accent-emerald-600" />
                            </div>
                        </>
                    )}
                </div>
            </div>

            <div className="p-6 flex flex-col items-center">
                <div className="relative">
                    <svg width={width} height={height} className="border border-slate-100 dark:border-slate-700 rounded-2xl bg-white dark:bg-slate-900 shadow-inner">
                        {renderGrid()}
                        {/* Axes */}
                        <line x1={0} y1={cy} x2={width} y2={cy} stroke="#cbd5e1" strokeWidth="2" />
                        <line x1={cx} y1={0} x2={cx} y2={height} stroke="#cbd5e1" strokeWidth="2" />

                        {/* Ticks */}
                        {Array.from({ length: 13 }).map((_, i) => {
                            const val = i - 6;
                            return (
                                <React.Fragment key={i}>
                                    <line x1={toSvgX(val)} y1={cy - 3} x2={toSvgX(val)} y2={cy + 3} stroke="#94a3b8" strokeWidth="1" />
                                    <line x1={cx - 3} y1={toSvgY(val)} x2={cx + 3} y2={toSvgY(val)} stroke="#94a3b8" strokeWidth="1" />
                                </React.Fragment>
                            );
                        })}

                        {/* Content */}
                        {mode === 'line' ? (
                            <line
                                x1={toSvgX(-8)} y1={toSvgY(k * -8 + b)}
                                x2={toSvgX(8)} y2={toSvgY(k * 8 + b)}
                                stroke="#4f46e5" strokeWidth="4" strokeLinecap="round"
                            />
                        ) : (
                            <circle
                                cx={toSvgX(x0)} cy={toSvgY(y0)} r={r * scale}
                                fill="none" stroke="#10b981" strokeWidth="4"
                            />
                        )}

                        {/* Equation Labels */}
                        <g transform={`translate(${width - 100}, 30)`}>
                            <rect width="90" height="40" rx="8" fill="rgba(255,255,255,0.8)" className="dark:fill-slate-800/80" />
                            <text x="45" y="25" textAnchor="middle" className="text-xs font-mono font-bold" fill={mode === 'line' ? '#4f46e5' : '#10b981'}>
                                {mode === 'line'
                                    ? `y = ${k}x ${b >= 0 ? '+' : ''}${b}`
                                    : `(x${x0 >= 0 ? '-' : '+'}${Math.abs(x0)})²+(y${y0 >= 0 ? '-' : '+'}${Math.abs(y0)})²=${(r * r).toFixed(1)}`}
                            </text>
                        </g>
                    </svg>
                </div>

                <div className="mt-6 w-full max-w-sm">
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                        <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">解析性质</div>
                        <p className="text-sm font-medium">
                            {mode === 'line'
                                ? k !== 0 ? `该直线在y轴截距为 ${b}，斜角为 ${Math.atan(k) * 180 / Math.PI > 0 ? '锐角' : '钝角'}` : `该直线与x轴平行`
                                : `该圆以 (${x0}, ${y0}) 为圆心，半径为 ${r}`}
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <Info className="w-4 h-4 text-slate-400 mt-0.5" />
                <p className="text-[11px] text-slate-500 leading-relaxed">
                    解析几何的核心在于将几何图形代数化。调节参数，观察代数方程的变化如何实时反映在坐标平面的几何图形上。
                </p>
            </div>
        </div>
    );
};

export default CoordGeometryVisualizer;

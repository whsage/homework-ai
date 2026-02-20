import React, { useState, useRef, useEffect } from 'react';
import { RefreshCcw, Maximize } from 'lucide-react';

const UnitCircleVisualizer = () => {
    // Angle in degrees
    const [angle, setAngle] = useState(45);
    const [showTan, setShowTan] = useState(false);
    const svgRef = useRef(null);

    // Convert to radians
    const radians = (angle * Math.PI) / 180;

    // Calculate coordinates on unit circle (radius = 120 for display)
    const R = 120;
    const cx = 200;
    const cy = 200;

    // Point P coordinates
    const px = cx + R * Math.cos(radians);
    const py = cy - R * Math.sin(radians); // SVG y is down

    // Tan line end point (at x=1)
    // tan(theta) = y/x = Y_tan / R
    // We draw a line from (R, 0) to (R, R * tan(theta))
    // Careful with potential infinity at 90/270
    const tanHeight = R * Math.tan(radians);
    const tanY = cy - tanHeight;
    const tanX = cx + R;

    // Interaction handler
    const handleSvgClick = (e) => {
        if (!svgRef.current) return;
        const rect = svgRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - cx;
        const y = cy - (e.clientY - rect.top); // Flip y for math coords

        let newAngle = Math.atan2(y, x) * (180 / Math.PI);
        if (newAngle < 0) newAngle += 360;

        setAngle(Math.round(newAngle));
    };

    const formatValue = (val) => val.toFixed(3);

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 border-b border-slate-200 dark:border-slate-700 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-sm">
                        <span className="text-slate-500 text-xs font-bold uppercase">Angle</span>
                        <span className="font-mono font-bold text-slate-800 dark:text-white w-12 text-center">{angle}°</span>
                    </div>
                    <div className="hidden md:flex gap-3 text-sm font-mono">
                        <span className="text-red-500 font-bold">sin ≈ {formatValue(Math.sin(radians))}</span>
                        <span className="text-blue-500 font-bold">cos ≈ {formatValue(Math.cos(radians))}</span>
                        {showTan && <span className="text-green-600 font-bold">tan ≈ {Math.abs(Math.tan(radians)) > 10 ? 'Inf' : formatValue(Math.tan(radians))}</span>}
                    </div>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={() => setShowTan(!showTan)}
                        className={`px-3 py-1.5 rounded-lg text-sm border flex items-center gap-2 ${showTan ? 'bg-green-100 border-green-300 text-green-700' : 'border-slate-200 text-slate-600'
                            }`}
                    >
                        <Maximize className="w-4 h-4" /> 正切线 (tan)
                    </button>
                    <button
                        onClick={() => setAngle(0)}
                        className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100"
                        title="Reset"
                    >
                        <RefreshCcw className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="p-4 flex flex-col items-center">
                <svg
                    ref={svgRef}
                    viewBox="0 0 400 400"
                    className="w-full max-w-[400px] cursor-crosshair touch-none select-none"
                    onClick={handleSvgClick}
                >
                    {/* Grid & Axis */}
                    <defs>
                        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                            <path d="M0,0 L0,6 L9,3 z" fill="#94a3b8" />
                        </marker>
                    </defs>
                    <line x1="20" y1="200" x2="380" y2="200" stroke="#cbd5e1" strokeWidth="1" markerEnd="url(#arrow)" />
                    <line x1="200" y1="380" x2="200" y2="20" stroke="#cbd5e1" strokeWidth="1" markerEnd="url(#arrow)" />
                    <text x="385" y="205" className="text-xs fill-slate-400">x</text>
                    <text x="205" y="15" className="text-xs fill-slate-400">y</text>

                    {/* Unit Circle */}
                    <circle cx={cx} cy={cy} r={R} fill="none" stroke="#64748b" strokeWidth="2" />

                    {/* Angle Sector Fill */}
                    <path d={`M ${cx},${cy} L ${cx + R},${cy} A ${R},${R} 0 ${angle > 180 ? 1 : 0} 0 ${px},${py} Z`}
                        fill="rgba(99, 102, 241, 0.1)" />

                    {/* Radius Line (Hypotenuse) */}
                    <line x1={cx} y1={cy} x2={px} y2={py} stroke="#6366f1" strokeWidth="2" />

                    {/* Cosine Line (Blue, on x-axis) */}
                    <line x1={cx} y1={cy} x2={px} y2={cy} stroke="#3b82f6" strokeWidth="3" />

                    {/* Sine Line (Red, vertical) */}
                    <line x1={px} y1={cy} x2={px} y2={py} stroke="#ef4444" strokeWidth="3" />

                    {/* Tangent Line (Green) */}
                    {showTan && Math.abs(angle % 180) !== 90 && (
                        <>
                            <line x1={cx + R} y1={0} x2={cx + R} y2={400} stroke="#cbd5e1" strokeDasharray="4 4" />
                            <line x1={cx + R} y1={cy} x2={cx + R} y2={tanY} stroke="#16a34a" strokeWidth="3" />
                            <line x1={cx} y1={cy} x2={cx + R} y2={tanY} stroke="#16a34a" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                        </>
                    )}

                    {/* Point P */}
                    <circle cx={px} cy={py} r="6" fill="#6366f1" stroke="white" strokeWidth="2" className="cursor-pointer hover:r-8 transition-all" />

                    {/* Labels */}
                    <text x={px + 10} y={py - 10} className="text-sm font-bold fill-indigo-600">P(x,y)</text>

                    {/* Component Labels */}
                    <text x={cx + (px - cx) / 2} y={cy + 15} className="text-xs font-bold fill-blue-600 text-anchor-middle">cos</text>
                    <text x={px + 5} y={cy - (cy - py) / 2} className="text-xs font-bold fill-red-600">sin</text>

                </svg>

                <div className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
                    点击圆周任意位置改变角度
                </div>
            </div>
        </div>
    );
};

export default UnitCircleVisualizer;

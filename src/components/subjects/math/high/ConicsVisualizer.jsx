import React, { useState } from 'react';
import { Circle, Activity, TrendingUp } from 'lucide-react';

const ConicsVisualizer = () => {
    const [type, setType] = useState('ellipse'); // ellipse, hyperbola, parabola
    const [a, setA] = useState(100);
    const [b, setB] = useState(60);

    const width = 400;
    const height = 300;
    const cx = width / 2;
    const cy = height / 2;

    // Helper to generate path data
    const getPath = () => {
        if (type === 'ellipse') {
            return `M ${cx - a} ${cy} A ${a} ${b} 0 1 1 ${cx + a} ${cy} A ${a} ${b} 0 1 1 ${cx - a} ${cy}`;
        }
        if (type === 'hyperbola') {
            // Draw left and right branches using quadratic curves or just path
            // x^2/a^2 - y^2/b^2 = 1
            // x = +/- a sec t, y = b tan t
            // Simpler approximation for display:
            const path = [];
            // Right branch
            path.push(`M ${cx + a} ${cy}`);
            path.push(`Q ${cx + a * 1.5} ${cy - b * 2} ${cx + a * 3} ${cy - b * 4}`);
            path.push(`M ${cx + a} ${cy}`);
            path.push(`Q ${cx + a * 1.5} ${cy + b * 2} ${cx + a * 3} ${cy + b * 4}`);
            // Left branch
            path.push(`M ${cx - a} ${cy}`);
            path.push(`Q ${cx - a * 1.5} ${cy - b * 2} ${cx - a * 3} ${cy - b * 4}`);
            path.push(`M ${cx - a} ${cy}`);
            path.push(`Q ${cx - a * 1.5} ${cy + b * 2} ${cx - a * 3} ${cy + b * 4}`);
            return path.join(' ');
        }
        if (type === 'parabola') {
            // y^2 = 2px (opening right) or x^2 = 2py (opening up)
            // Let's do opening up: x^2 = 4cy  => y = x^2 / 4c
            // Draw parabola at center
            return `M ${cx - 100} ${cy - 100} Q ${cx} ${cy + 150} ${cx + 100} ${cy - 100}`;
        }
        return '';
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 border-b border-slate-200 dark:border-slate-700 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex bg-slate-200 dark:bg-slate-700 p-1 rounded-lg">
                    <button onClick={() => setType('ellipse')} className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${type === 'ellipse' ? 'bg-white shadow text-indigo-600' : 'text-slate-500'}`}>椭圆</button>
                    <button onClick={() => setType('hyperbola')} className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${type === 'hyperbola' ? 'bg-white shadow text-indigo-600' : 'text-slate-500'}`}>双曲线</button>
                    <button onClick={() => setType('parabola')} className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${type === 'parabola' ? 'bg-white shadow text-indigo-600' : 'text-slate-500'}`}>抛物线</button>
                </div>
            </div>

            <div className="p-4 flex justify-center">
                <svg width={width} height={height} className="border border-slate-100 dark:border-slate-800 rounded bg-white dark:bg-slate-900">
                    <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />

                    {/* Axes */}
                    <line x1={0} y1={cy} x2={width} y2={cy} stroke="#cbd5e1" strokeWidth="2" />
                    <line x1={cx} y1={0} x2={cx} y2={height} stroke="#cbd5e1" strokeWidth="2" />

                    {/* Curve */}
                    <path d={getPath()} stroke="#4f46e5" strokeWidth="3" fill="none" />

                    {/* Foci Points (Approx) */}
                    {type === 'ellipse' && (
                        <>
                            <circle cx={cx - 80} cy={cy} r="4" fill="#ef4444" />
                            <circle cx={cx + 80} cy={cy} r="4" fill="#ef4444" />
                            <text x={cx - 80} y={cy + 20} className="text-xs" fill="#ef4444" textAnchor="middle">F1</text>
                            <text x={cx + 80} y={cy + 20} className="text-xs" fill="#ef4444" textAnchor="middle">F2</text>
                        </>
                    )}
                </svg>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900/50">
                <p className="text-sm text-center text-slate-600 dark:text-slate-400">
                    {type === 'ellipse' && "平面内到两个定点(F1, F2)的距离之和等于常数(2a)的点的轨迹。"}
                    {type === 'hyperbola' && "平面内到两个定点的距离之差的绝对值等于常数的点的轨迹。"}
                    {type === 'parabola' && "平面内到定点和定直线距离相等的点的轨迹。"}
                </p>
            </div>
        </div>
    );
};

export default ConicsVisualizer;

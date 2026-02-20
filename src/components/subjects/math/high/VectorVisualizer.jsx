import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Move, RefreshCw, Plus, Minus, X } from 'lucide-react';

const VectorVisualizer = () => {
    // Mode: 'add' (a+b), 'sub' (a-b)
    const [mode, setMode] = useState('add');

    // Vector state: end points (start is always 0,0 relative to center)
    // Canvas coordinate system: Center is (200, 200). Y is down.
    // Mathematical coordinate system: Center is (0,0). Y is up.
    const [v1, setV1] = useState({ x: 100, y: -50 }); // Vector a (Red)
    const [v2, setV2] = useState({ x: 50, y: 80 });   // Vector b (Blue)

    const svgRef = useRef(null);
    const [dragging, setDragging] = useState(null); // 'v1' or 'v2'

    // Constants
    const CENTER = { x: 200, y: 200 };
    const GRID_SIZE = 400;

    // Helper: Screen to Math
    const toMath = (sx, sy) => ({
        x: sx - CENTER.x,
        y: CENTER.y - sy
    });

    // Helper: Math to Screen
    const toScreen = (mx, my) => ({
        x: CENTER.x + mx,
        y: CENTER.y - my
    });

    // Calculate Resultant Vector
    const getResultant = () => {
        if (mode === 'add') {
            return { x: v1.x + v2.x, y: v1.y + v2.y };
        } else {
            return { x: v1.x - v2.x, y: v1.y - v2.y };
        }
    };

    const res = getResultant();

    // Event Handlers
    const handleMouseDown = (e, vectorName) => {
        e.stopPropagation();
        setDragging(vectorName);
    };

    const handleMouseMove = (e) => {
        if (!dragging || !svgRef.current) return;

        const rect = svgRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Snap to grid (optional, let's keep it smooth for now or snap to 10s)
        const rawMath = toMath(mouseX, mouseY);
        // Clamp to circle area to prevent going off screen too much
        const clampedMath = {
            x: Math.min(Math.max(rawMath.x, -190), 190),
            y: Math.min(Math.max(rawMath.y, -190), 190)
        };

        if (dragging === 'v1') setV1(clampedMath);
        if (dragging === 'v2') setV2(clampedMath);
    };

    const handleMouseUp = () => {
        setDragging(null);
    };

    useEffect(() => {
        if (dragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [dragging]);

    // Math format for display
    const formatVec = (v) => `(${Math.round(v.x / 20)}, ${Math.round(v.y / 20)})`;

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden select-none">
            {/* Header Controls */}
            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 border-b border-slate-200 dark:border-slate-700 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex bg-slate-200 dark:bg-slate-700 p-1 rounded-lg">
                    <button
                        onClick={() => setMode('add')}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${mode === 'add'
                                ? 'bg-white dark:bg-slate-600 shadow text-indigo-600 dark:text-indigo-400'
                                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                            }`}
                    >
                        <Plus className="w-4 h-4" /> 向量加法
                    </button>
                    <button
                        onClick={() => setMode('sub')}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${mode === 'sub'
                                ? 'bg-white dark:bg-slate-600 shadow text-indigo-600 dark:text-indigo-400'
                                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                            }`}
                    >
                        <Minus className="w-4 h-4" /> 向量减法
                    </button>
                </div>

                <div className="flex gap-4 text-sm font-mono">
                    <div className="flex items-center gap-2 text-red-500 font-bold">
                        <span>a = {formatVec(v1)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-500 font-bold">
                        <span>b = {formatVec(v2)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600 font-bold border-l pl-4 border-slate-300">
                        <span>{mode === 'add' ? 'a+b' : 'a-b'} = {formatVec(res)}</span>
                    </div>
                </div>

                <button
                    onClick={() => { setV1({ x: 100, y: -50 }); setV2({ x: 50, y: 80 }); }}
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700"
                    title="重置"
                >
                    <RefreshCw className="w-4 h-4" />
                </button>
            </div>

            {/* SVG Canvas */}
            <div className="p-4 flex justify-center bg-slate-50/50 dark:bg-slate-900/30">
                <svg
                    ref={svgRef}
                    width={GRID_SIZE}
                    height={GRID_SIZE}
                    className="bg-white dark:bg-slate-900 shadow-inner border border-slate-200 dark:border-slate-800 rounded-lg cursor-crosshair"
                >
                    <defs>
                        <marker id="arrow-head-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                        </marker>
                        <marker id="arrow-head-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                        </marker>
                        <marker id="arrow-head-green" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#16a34a" />
                        </marker>
                        <marker id="arrow-head-gray" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
                        </marker>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                        </pattern>
                    </defs>

                    {/* Grid Background */}
                    <rect width="100%" height="100%" fill="url(#grid)" />

                    {/* Axes */}
                    <line x1={CENTER.x} y1="0" x2={CENTER.x} y2={GRID_SIZE} stroke="#cbd5e1" strokeWidth="2" />
                    <line x1="0" y1={CENTER.y} x2={GRID_SIZE} y2={CENTER.y} stroke="#cbd5e1" strokeWidth="2" />

                    {/* Aux Lines for Parallelogram Rule */}
                    {mode === 'add' && (
                        <>
                            <line
                                x1={toScreen(v1.x, v1.y).x} y1={toScreen(v1.x, v1.y).y}
                                x2={toScreen(res.x, res.y).x} y2={toScreen(res.x, res.y).y}
                                stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" opacity="0.4"
                            />
                            <line
                                x1={toScreen(v2.x, v2.y).x} y1={toScreen(v2.x, v2.y).y}
                                x2={toScreen(res.x, res.y).x} y2={toScreen(res.x, res.y).y}
                                stroke="#ef4444" strokeWidth="1" strokeDasharray="4 4" opacity="0.4"
                            />
                        </>
                    )}
                    {mode === 'sub' && (
                        <>
                            {/* Visualizing a - b is adding a + (-b) */}
                            <line
                                x1={CENTER.x} y1={CENTER.y}
                                x2={toScreen(-v2.x, -v2.y).x} y2={toScreen(-v2.x, -v2.y).y}
                                stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow-head-gray)" opacity="0.5"
                            />
                            <line
                                x1={toScreen(v1.x, v1.y).x} y1={toScreen(v1.x, v1.y).y}
                                x2={toScreen(res.x, res.y).x} y2={toScreen(res.x, res.y).y}
                                stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" opacity="0.4"
                            />
                        </>
                    )}

                    {/* Resultant Vector (Green) */}
                    <line
                        x1={CENTER.x} y1={CENTER.y}
                        x2={toScreen(res.x, res.y).x} y2={toScreen(res.x, res.y).y}
                        stroke="#16a34a" strokeWidth="4" markerEnd="url(#arrow-head-green)"
                        opacity="0.8"
                    />

                    {/* Vector A (Red) */}
                    <g
                        className="cursor-move hover:opacity-80 transition-opacity"
                        onMouseDown={(e) => handleMouseDown(e, 'v1')}
                    >
                        <line
                            x1={CENTER.x} y1={CENTER.y}
                            x2={toScreen(v1.x, v1.y).x} y2={toScreen(v1.x, v1.y).y}
                            stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrow-head-red)"
                        />
                        <circle cx={toScreen(v1.x, v1.y).x} cy={toScreen(v1.x, v1.y).y} r="8" fill="rgba(239, 68, 68, 0.1)" stroke="transparent" />
                    </g>

                    {/* Vector B (Blue) */}
                    <g
                        className="cursor-move hover:opacity-80 transition-opacity"
                        onMouseDown={(e) => handleMouseDown(e, 'v2')}
                    >
                        <line
                            x1={CENTER.x} y1={CENTER.y}
                            x2={toScreen(v2.x, v2.y).x} y2={toScreen(v2.x, v2.y).y}
                            stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrow-head-blue)"
                        />
                        <circle cx={toScreen(v2.x, v2.y).x} cy={toScreen(v2.x, v2.y).y} r="8" fill="rgba(59, 130, 246, 0.1)" stroke="transparent" />
                    </g>

                    {/* Resultant Label */}
                    <text x={toScreen(res.x, res.y).x + 10} y={toScreen(res.x, res.y).y} fill="#15803d" className="text-xs font-bold font-mono">
                        {mode === 'add' ? 'a+b' : 'a-b'}
                    </text>
                    <text x={toScreen(v1.x, v1.y).x + 10} y={toScreen(v1.x, v1.y).y} fill="#b91c1c" className="text-xs font-bold font-mono">a</text>
                    <text x={toScreen(v2.x, v2.y).x + 10} y={toScreen(v2.x, v2.y).y} fill="#1d4ed8" className="text-xs font-bold font-mono">b</text>

                </svg>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-900/30 text-xs text-slate-500 text-center">
                拖动红色或蓝色向量末端改变大小和方向
            </div>
        </div>
    );
};

export default VectorVisualizer;

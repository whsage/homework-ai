import React, { useState } from 'react';
import { Layers, CheckCircle2, XCircle, Info } from 'lucide-react';

const SetsAndLogic = () => {
    // State for Venn Diagram regions (boolean: is highlighted/active)
    // Regions: 
    // - onlyA: A - B
    // - onlyB: B - A
    // - both: A ∩ B
    // - outside: U - (A ∪ B)
    const [activeRegions, setActiveRegions] = useState({
        onlyA: true,
        onlyB: true,
        both: true,
        outside: false
    });

    const toggleRegion = (region) => {
        setActiveRegions(prev => ({
            ...prev,
            [region]: !prev[region]
        }));
    };

    // Predefined operations
    const setOperation = (op) => {
        switch (op) {
            case 'A':
                setActiveRegions({ onlyA: true, both: true, onlyB: false, outside: false });
                break;
            case 'B':
                setActiveRegions({ onlyA: false, both: true, onlyB: true, outside: false });
                break;
            case 'union': // A ∪ B
                setActiveRegions({ onlyA: true, both: true, onlyB: true, outside: false });
                break;
            case 'intersection': // A ∩ B
                setActiveRegions({ onlyA: false, both: true, onlyB: false, outside: false });
                break;
            case 'complementA': // CuA (in terms of U = everything shown)
                setActiveRegions({ onlyA: false, both: false, onlyB: true, outside: true });
                break;
            case 'diffAB': // A - B
                setActiveRegions({ onlyA: true, both: false, onlyB: false, outside: false });
                break;
            case 'reset':
                setActiveRegions({ onlyA: false, onlyB: false, both: false, outside: false });
                break;
            default:
                break;
        }
    };

    const getOperationName = () => {
        const { onlyA, both, onlyB, outside } = activeRegions;
        if (onlyA && both && onlyB && !outside) return 'A ∪ B (并集)';
        if (!onlyA && both && !onlyB && !outside) return 'A ∩ B (交集)';
        if (onlyA && both && !onlyB && !outside) return '集合 A';
        if (!onlyA && both && onlyB && !outside) return '集合 B';
        if (onlyA && !both && !onlyB && !outside) return 'A - B (差集)';
        if (!onlyA && !both && onlyB && !outside) return 'B - A (差集)';
        if (!onlyA && !both && !onlyB && outside) return '∁u(A∪B)';
        if (!onlyA && !both && !onlyB && !outside) return '空集 Ø';
        return '自定义集合区域';
    };

    return (
        <div className="space-y-8">
            {/* Interactive Venn Diagram */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-purple-100 dark:border-purple-900/30">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-purple-500" />
                    互动实验：韦恩图与集合运算
                </h3>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Visualization */}
                    <div className="relative h-80 bg-slate-50 dark:bg-slate-900/50 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 select-none overflow-hidden">

                        {/* Interactive Click Areas (SVG) */}
                        <svg viewBox="0 0 300 200" className="w-full h-full max-w-md">
                            <defs>
                                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feGaussianBlur stdDeviation="2" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                            </defs>

                            {/* Set A Circle (Left) */}
                            {/* We need distinct paths for interactions: A only, Intersection, B only */}

                            {/* A Only */}
                            <path
                                d="M 110,100 m -60,0 a 60,60 0 1,0 120,0 a 60,60 0 1,0 -120,0" // Full definition processed via clip/mask logic typically, but simplified here:
                            // Actually, simpler to just use two circles and mask, or manual path data?
                            // Let's use 3 distinct circles/paths for simplicity of click detection if possible.
                            // Approximation for UI:
                            // Left Circle: cx=110, cy=100, r=60
                            // Right Circle: cx=190, cy=100, r=60
                            // Intersection is the lens shape in middle.
                            />

                            {/* Using standard circles and CSS mixing-blend-mode or opacity is easier for visuals, 
                                but for specific clicking "only A" vs "intersection" needs reliable hit testing.
                                Let's use svg paths for regions.
                            */}

                            {/* Universal Set Background (Clickable for 'outside') */}
                            <rect
                                x="10" y="10" width="280" height="180" rx="10"
                                fill={activeRegions.outside ? "#e2e8f0" : "transparent"}
                                stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5"
                                className={`cursor-pointer transition-colors hover:fill-slate-100 dark:hover:fill-slate-800 ${activeRegions.outside ? 'fill-slate-200 dark:fill-slate-700' : ''}`}
                                onClick={() => toggleRegion('outside')}
                            />
                            <text x="25" y="30" className="font-bold text-slate-400 select-none">U</text>

                            {/* Circle A (Left) */}
                            <circle
                                cx="110" cy="100" r="60"
                                fill={activeRegions.onlyA || activeRegions.both ? "rgba(59, 130, 246, 0.1)" : "transparent"}
                                stroke="#3b82f6" strokeWidth="2"
                                className="pointer-events-none"
                            />
                            <text x="60" y="60" className="font-bold fill-blue-500 select-none">A</text>

                            {/* Circle B (Right) */}
                            <circle
                                cx="190" cy="100" r="60"
                                fill={activeRegions.onlyB || activeRegions.both ? "rgba(236, 72, 153, 0.1)" : "transparent"}
                                stroke="#ec4899" strokeWidth="2"
                                className="pointer-events-none"
                            />
                            <text x="230" y="60" className="font-bold fill-pink-500 select-none">B</text>

                            {/* Clickable Regions (Transparent overlays) */}

                            {/* Region: A - B (Moon shape left) */}
                            <path
                                d="M 110,100 m -60,0 a 60,60 0 1,0 120,0 a 60,60 0 1,0 -120,0"
                                fill={activeRegions.onlyA ? "#3b82f6" : "transparent"}
                                fillOpacity={activeRegions.onlyA ? "0.6" : "0"}
                                className="cursor-pointer hover:opacity-30 transition-all"
                                onClick={() => toggleRegion('onlyA')}
                                clipPath="url(#cut-b)" // Need to define clip path
                            />
                            {/* Complicated to do pure SVG boolean operations inline without a library. 
                                Alternative: Use 3 buttons for logic, and just color the circles visually based on state. 
                                The user can click buttons below to toggle state. 
                                Direct clicking on the diagram is nice but complex to implement perfectly in one file without d3 or similar.
                                
                                Let's simplify: 
                                Just draw the 3 logical parts manually roughly.
                             */}

                            {/* RESTART with simpler visual approach:
                                3 Paths: Left Part, Middle Part, Right Part.
                                Construction:
                                Circle A: cx=110, r=60. Circle B: cx=190, r=60.
                                Dist = 80.
                             */}

                            {/* Left Part (Only A) */}
                            <path
                                d="M 110,40 A 60,60 0 1,0 110,160 A 60,60 0 0,1 110,40 Z" // Not quite right logic
                            // Let's simplify. Just use circles and let them overlap visually, 
                            // and toggle colors based on state.
                            // BUT we want to highlight Intersection specifically.
                            // Let's use simple geometric primitives.
                            />
                        </svg>

                        {/* HTML Overlay for interactions - easier than SVG paths for this quick implementation */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="relative w-[220px] h-[140px]">
                                {/* Left Circle (A) */}
                                <div
                                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full border-2 border-blue-500 transition-colors pointer-events-auto cursor-pointer
                                        ${activeRegions.onlyA ? 'bg-blue-500/50' : 'hover:bg-blue-100/20'}
                                    `}
                                    style={{ clipPath: 'polygon(0% 0%, 65% 0%, 65% 100%, 0% 100%)' }} // Hack to cut right side
                                    onClick={() => toggleRegion('onlyA')}
                                ></div>

                                {/* Right Circle (B) */}
                                <div
                                    className={`absolute right-0 top-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full border-2 border-pink-500 transition-colors pointer-events-auto cursor-pointer
                                        ${activeRegions.onlyB ? 'bg-pink-500/50' : 'hover:bg-pink-100/20'}
                                    `}
                                    style={{ clipPath: 'polygon(35% 0%, 100% 0%, 100% 100%, 35% 100%)' }} // Hack to cut left side
                                    onClick={() => toggleRegion('onlyB')}
                                ></div>

                                {/* Intersection (Middle) */}
                                <div
                                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[100px] transition-colors pointer-events-auto cursor-pointer flex items-center justify-center
                                        ${activeRegions.both ? 'bg-purple-600/60' : 'hover:bg-purple-100/20'}
                                    `}
                                    style={{ borderRadius: '50%' }}
                                    onClick={() => toggleRegion('both')}
                                >
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 px-3 py-1 rounded-lg text-sm font-bold text-indigo-600 shadow-sm border border-indigo-100">
                            {getOperationName()}
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => setOperation('union')}
                                className="p-3 bg-slate-100 dark:bg-slate-700 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 rounded-xl text-sm font-semibold transition-colors flex flex-col items-center gap-1"
                            >
                                <span className="text-xs text-slate-500">A ∪ B</span>
                                <span>并集</span>
                            </button>
                            <button
                                onClick={() => setOperation('intersection')}
                                className="p-3 bg-slate-100 dark:bg-slate-700 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 rounded-xl text-sm font-semibold transition-colors flex flex-col items-center gap-1"
                            >
                                <span className="text-xs text-slate-500">A ∩ B</span>
                                <span>交集</span>
                            </button>
                            <button
                                onClick={() => setOperation('complementA')}
                                className="p-3 bg-slate-100 dark:bg-slate-700 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 rounded-xl text-sm font-semibold transition-colors flex flex-col items-center gap-1"
                            >
                                <span className="text-xs text-slate-500">∁uA</span>
                                <span>A的补集</span>
                            </button>
                            <button
                                onClick={() => setOperation('diffAB')}
                                className="p-3 bg-slate-100 dark:bg-slate-700 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 rounded-xl text-sm font-semibold transition-colors flex flex-col items-center gap-1"
                            >
                                <span className="text-xs text-slate-500">A - B</span>
                                <span>差集</span>
                            </button>
                        </div>

                        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-sm text-slate-600 dark:text-slate-400">
                            <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-2 flex items-center gap-1">
                                <Info className="w-4 h-4" />
                                使用说明
                            </h4>
                            <p>点击图中的不同区域（左圆、右圆、中间交界、外部空白）来选中或取消选中，观察对应的集合运算名称。</p>
                        </div>

                        <button
                            onClick={() => setOperation('reset')}
                            className="w-full py-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm transition-colors"
                        >
                            重置所有选区
                        </button>
                    </div>
                </div>
            </div>

            {/* Concepts */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    集合运算规则
                </h4>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-600 dark:text-slate-400">
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                            <span className="font-bold min-w-[60px]">并集 (∪)</span>
                            <span>由所有属于集合A或属于集合B的元素所组成的集合。</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-bold min-w-[60px]">交集 (∩)</span>
                            <span>由所有既属于集合A又属于集合B的元素所组成的集合。</span>
                        </li>
                    </ul>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                            <span className="font-bold min-w-[60px]">补集 (∁)</span>
                            <span>由全集U中所有不属于集合A的元素组成的集合。</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-bold min-w-[60px]">性质</span>
                            <span>A ∩ B = B ∩ A; A ∪ B = B ∪ A (交换律)</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SetsAndLogic;

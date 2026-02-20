import React, { useState } from 'react';
import { Check, RotateCcw, MousePointer2 } from 'lucide-react';

const SetVennDiagram = () => {
    const [mode, setMode] = useState('intersection'); // union, intersection, complementA, complementB, diffAB, diffBA
    const [showLabels, setShowLabels] = useState(true);

    // Interactive state (simulated)
    // In a real complex app, we might use d3 or canvas for true dragging/collision.
    // Here we use SVG with conditional classes for "interactivity"

    const modes = [
        { id: 'intersection', label: '交集 A ∩ B', desc: '既属于A又属于B的元素' },
        { id: 'union', label: '并集 A ∪ B', desc: '属于A或者属于B的元素' },
        { id: 'diffAB', label: '差集 A - B', desc: '属于A但不属于B的元素' },
        { id: 'complA', label: '补集 (CuA)', desc: '全集U中不属于A的元素' },
    ];

    const getFillColor = (part) => {
        const activeColor = "fill-indigo-500 opacity-60";
        const inactiveColor = "fill-transparent";

        switch (mode) {
            case 'intersection':
                return part === 'center' ? activeColor : inactiveColor;
            case 'union':
                return part === 'left' || part === 'right' || part === 'center' ? activeColor : inactiveColor;
            case 'diffAB': // A - B
                return part === 'left' ? activeColor : inactiveColor;
            case 'complA': // Not A
                return part === 'right' || part === 'bg' ? activeColor : inactiveColor;
            default:
                return inactiveColor;
        }
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            {/* Controls Header */}
            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 border-b border-slate-200 dark:border-slate-700 flex flex-wrap gap-2 justify-center">
                {modes.map((m) => (
                    <button
                        key={m.id}
                        onClick={() => setMode(m.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${mode === m.id
                                ? 'bg-indigo-600 text-white shadow-md'
                                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600'
                            }`}
                    >
                        {m.label}
                    </button>
                ))}
            </div>

            {/* Main Interactive Area */}
            <div className="p-8 flex flex-col items-center justify-center relative min-h-[300px]">

                {/* Description Text */}
                <div className="absolute top-4 left-0 w-full text-center">
                    <p className="text-slate-600 dark:text-slate-400 font-medium animate-fade-in">
                        {modes.find(m => m.id === mode)?.desc}
                    </p>
                </div>

                <svg viewBox="0 0 400 250" className="w-full max-w-[500px] select-none">
                    <defs>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    {/* Universe Rect */}
                    <rect
                        x="10" y="10" width="380" height="230" rx="10"
                        className={`stroke-slate-300 dark:stroke-slate-600 stroke-2 transition-all duration-500 ${mode === 'complA' ? 'fill-indigo-100 dark:fill-indigo-900/30' : 'fill-white dark:fill-slate-900'}`}
                    />
                    <text x="360" y="40" className="text-sm font-bold fill-slate-400">U</text>

                    {/* Set A Circle (Left) */}
                    <g className="transition-all duration-500">
                        <circle cx="140" cy="125" r="80"
                            className="stroke-blue-500 stroke-[3] fill-transparent"
                        />
                        {/* Fill for A only (left moon) */}
                        <path d="M 140,45 A 80,80 0 1,0 140,205 A 80,80 0 0,1 140,45"
                            className={`transition-all duration-500 ${getFillColor('left')}`} transform="translate(-40,0)" clipPath="url(#clipLeft)"
                        />
                        {/* Actually SVG paths for Venn intersection are complex to calculate manually without a library. 
                            Simplified approach: Using mix-blend-mode or just relying on opacity for intersection visual.
                            BUT for educational purpose, let's use 3 distinct paths for precise control.
                        */}
                    </g>

                    {/* 
                        Re-implementation with Path-based Venn for precise control 
                        Circle A Center: (150, 125), Radius: 80
                        Circle B Center: (250, 125), Radius: 80
                        Distance: 100.
                        Intersection is evident.
                     */}

                    {/* Background / Universe Fill for Complement */}
                    {mode === 'complA' && (
                        <path d="M 10,10 H 390 V 240 H 10 Z M 150,125 m -80,0 a 80,80 0 1,0 160,0 a 80,80 0 1,0 -160,0"
                            className="fill-indigo-100 dark:fill-indigo-900/30 transition-all duration-500"
                            fillRule="evenodd"
                        />
                    )}

                    {/* Circle A */}
                    <circle cx="150" cy="125" r="80"
                        className={`transition-all duration-300 ${['diffAB', 'union'].includes(mode) ? 'fill-blue-200 dark:fill-blue-900/40' : 'fill-transparent'} stroke-blue-500 stroke-[3]`}
                    />

                    {/* Circle B */}
                    <circle cx="250" cy="125" r="80"
                        className={`transition-all duration-300 ${['union'].includes(mode) ? 'fill-red-200 dark:fill-red-900/40' : 'fill-transparent'} stroke-red-500 stroke-[3] mix-blend-multiply dark:mix-blend-screen`}
                    />

                    {/* Intersection Area Override */}
                    <path d="M 250,125 m -80,0 a 80,80 0 0,1 160,0 a 80,80 0 0,1 -160,0"
                        clipPath="circle(150, 125, 80)"
                        className={`transition-all duration-500 ${['intersection', 'union'].includes(mode) ? 'fill-indigo-500 dark:fill-indigo-400 opacity-80' : 'fill-transparent'}`}
                    />

                    {/* Labels */}
                    <text x="110" y="125" className="font-bold fill-blue-700 dark:fill-blue-300 text-lg pointer-events-none">A</text>
                    <text x="290" y="125" className="font-bold fill-red-700 dark:fill-red-300 text-lg pointer-events-none">B</text>

                </svg>

                <div className="absolute bottom-4 right-4 flex gap-2">
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                        <span className="w-3 h-3 bg-blue-500 rounded-full opacity-50"></span> A
                    </div>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                        <span className="w-3 h-3 bg-red-500 rounded-full opacity-50"></span> B
                    </div>
                </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/50 p-3 text-xs text-center text-slate-500 border-t border-slate-200 dark:border-slate-700">
                点击上方按钮切换不同集合运算视图
            </div>
        </div>
    );
};

export default SetVennDiagram;

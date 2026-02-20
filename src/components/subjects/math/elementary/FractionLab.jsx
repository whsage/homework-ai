import React, { useState } from 'react';
import { PieChart, Minus, Plus, Utensils, Info, Sparkles } from 'lucide-react';

const FractionLab = () => {
    // parts = total slices (denominator)
    // selected = eaten slices (numerator)
    const [parts, setParts] = useState(4);
    const [selected, setSelected] = useState(1);

    const maxParts = 12;

    const handlePartsChange = (delta) => {
        const newVal = Math.max(2, Math.min(maxParts, parts + delta));
        setParts(newVal);
        if (selected > newVal) setSelected(newVal);
    };

    const handleSelectedChange = (delta) => {
        const newVal = Math.max(0, Math.min(parts, selected + delta));
        setSelected(newVal);
    };

    // Calculate pie slices SVG
    const renderSlices = () => {
        const slices = [];
        let currentAngle = 0;
        const anglePerSlice = 360 / parts;

        for (let i = 0; i < parts; i++) {
            const isSelected = i < selected;
            // standard SVG arc calculation for circle center at 50,50 with radius 40
            const dx = 50 + 45 * Math.sin(Math.PI * currentAngle / 180);
            const dy = 50 - 45 * Math.cos(Math.PI * currentAngle / 180);

            const dxNext = 50 + 45 * Math.sin(Math.PI * (currentAngle + anglePerSlice) / 180);
            const dyNext = 50 - 45 * Math.cos(Math.PI * (currentAngle + anglePerSlice) / 180);

            const largeArcFlag = anglePerSlice > 180 ? 1 : 0;

            const pathData = `M 50 50 L ${dx} ${dy} A 45 45 0 ${largeArcFlag} 1 ${dxNext} ${dyNext} Z`;

            // Just a circle if it's 1 part? but min is 2 anyway.

            slices.push(
                <path
                    key={`slice-${i}`}
                    d={pathData}
                    fill={isSelected ? '#f43f5e' : '#fef08a'} // Rose/pizza sauce vs cheese crust
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    className="transition-all duration-500 ease-in-out cursor-pointer hover:opacity-80 drop-shadow-sm"
                    onClick={() => {
                        // toggle slice (simplified: just select up to i+1)
                        setSelected(isSelected && selected === i + 1 ? i : i + 1);
                    }}
                />
            );

            currentAngle += anglePerSlice;
        }
        return slices;
    };

    return (
        <div className="space-y-6">
            <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-2">
                    <Utensils className="text-orange-500" /> 分披萨游戏
                </h3>
                <p className="text-slate-500 dark:text-slate-400">披萨切成了几块？你吃了几块？看看分数是怎么变的！</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 bg-white dark:bg-slate-800 p-6 md:p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-xl items-center">

                {/* Visualizer - Pizza */}
                <div className="relative w-64 h-64 shrink-0 bg-amber-50 dark:bg-amber-900/10 rounded-full p-4 border-4 border-amber-200 dark:border-amber-900/50 shadow-inner flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md transform -rotate-90">
                        {renderSlices()}
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#fbbf24" strokeWidth="2" />
                        {/* Pizza pepperoni decoration on selected slices */}
                        {Array.from({ length: selected }).map((_, i) => {
                            const a = (i * (360 / parts) + (360 / parts) / 2) * Math.PI / 180;
                            const r = 25;
                            const cX = 50 + r * Math.sin(a);
                            const cY = 50 + r * Math.cos(a);
                            return <circle key={`pep-${i}`} cx={cX} cy={cY} r="4" fill="#9f1239" opacity="0.8" />
                        })}
                    </svg>

                    {/* Empty pizza plate placeholder */}
                    {selected === parts && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="bg-white/90 text-amber-600 font-bold px-4 py-2 rounded-full shadow-sm text-sm transform -rotate-12">
                                😋 全部吃光光！
                            </span>
                        </div>
                    )}
                </div>

                {/* Controls & Fraction Result */}
                <div className="flex-1 space-y-8 w-full">
                    <div className="grid grid-cols-2 gap-6">
                        {/* Denominator (Total parts) */}
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl border-l-4 border-blue-400">
                            <div className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-3">切成几块？(分母)</div>
                            <div className="flex items-center gap-3">
                                <button onClick={() => handlePartsChange(-1)} className="w-8 h-8 rounded-full bg-white dark:bg-blue-900/50 flex items-center justify-center text-blue-500 hover:bg-blue-100"><Minus size={16} /></button>
                                <span className="text-2xl font-black text-blue-600 dark:text-blue-400 w-8 text-center">{parts}</span>
                                <button onClick={() => handlePartsChange(1)} className="w-8 h-8 rounded-full bg-white dark:bg-blue-900/50 flex items-center justify-center text-blue-500 hover:bg-blue-100"><Plus size={16} /></button>
                            </div>
                        </div>

                        {/* Numerator (Selected parts) */}
                        <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-2xl border-l-4 border-rose-400">
                            <div className="text-sm font-bold text-rose-600 dark:text-rose-400 mb-3">吃了几块？(分子)</div>
                            <div className="flex items-center gap-3">
                                <button onClick={() => handleSelectedChange(-1)} className="w-8 h-8 rounded-full bg-white dark:bg-rose-900/50 flex items-center justify-center text-rose-500 hover:bg-rose-100"><Minus size={16} /></button>
                                <span className="text-2xl font-black text-rose-600 dark:text-rose-400 w-8 text-center">{selected}</span>
                                <button onClick={() => handleSelectedChange(1)} className="w-8 h-8 rounded-full bg-white dark:bg-rose-900/50 flex items-center justify-center text-rose-500 hover:bg-rose-100"><Plus size={16} /></button>
                            </div>
                        </div>
                    </div>

                    {/* Fraction Display */}
                    <div className="flex flex-col items-center justify-center bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-3xl border border-indigo-100 dark:border-indigo-800/50">
                        <span className="text-indigo-400 font-bold mb-4">这就等于：</span>
                        <div className="flex items-center gap-6">
                            {/* Standard Fraction Notation */}
                            <div className="flex flex-col items-center">
                                <span className="text-5xl font-black text-rose-500">{selected}</span>
                                <div className="h-1.5 w-16 bg-slate-800 dark:bg-white rounded-full my-1"></div>
                                <span className="text-5xl font-black text-blue-500">{parts}</span>
                            </div>

                            <span className="text-3xl font-bold text-slate-300">=</span>

                            {/* Result statement */}
                            <div className="text-xl font-bold text-slate-700 dark:text-slate-300">
                                {parts} 分之 {selected}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-5 flex gap-4">
                <Info className="w-6 h-6 shrink-0 text-amber-500 mt-0.5" />
                <div>
                    <h4 className="font-bold text-amber-800 dark:text-amber-500 mb-1">分数的秘密</h4>
                    <p className="text-sm text-amber-900/80 dark:text-amber-200/80">
                        <strong>分母</strong>（下面的数字）是指把一个东西（比如披萨）<strong className="text-blue-600">平均分</strong>成了几份。<br />
                        <strong>分子</strong>（上面的数字）是指我们拿走了其中的几份！<br />
                        你看，如果我们把披萨分成 {parts} 份，吃掉 {parts} 份，就是 {parts}/{parts}，也就是吃了 <strong>1</strong> 个完整的披萨！
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FractionLab;

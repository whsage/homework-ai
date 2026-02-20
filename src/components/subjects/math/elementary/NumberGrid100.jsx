import React, { useState } from 'react';
import { LayoutGrid, Hash, Sparkles, Lightbulb } from 'lucide-react';

const StickBundle = ({ count, type = 'single' }) => {
    // type: 'single', 'bundle' (10)
    const color = type === 'bundle' ? 'bg-amber-400' : 'bg-orange-500';
    return (
        <div className={`flex flex-wrap gap-1 p-2 rounded-lg ${type === 'bundle' ? 'border-2 border-amber-500 bg-amber-50' : ''}`}>
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className={`w-1.5 h-8 rounded-full ${color} shadow-sm`} />
            ))}
        </div>
    );
};

const NumberGrid100 = () => {
    const [selected, setSelected] = useState(42);
    const [hovered, setHovered] = useState(null);

    const tens = Math.floor(selected / 10);
    const ones = selected % 10;

    return (
        <div className="space-y-8">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-3">
                    <Hash className="text-indigo-500" /> 百数表探险
                </h3>
                <p className="text-slate-500 dark:text-slate-400">点击数字，看看它是怎么组成的！</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Visual Representation */}
                <div className="space-y-6 bg-slate-50 dark:bg-slate-900/50 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 h-full flex flex-col justify-center">
                    <div className="text-center space-y-1">
                        <span className="text-5xl font-black text-indigo-600 dark:text-indigo-400">{selected}</span>
                        <div className="flex justify-center gap-2 text-sm font-bold">
                            <span className="text-amber-600">{tens} 个十</span>
                            <span className="text-slate-300">和</span>
                            <span className="text-orange-600">{ones} 个一</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 py-4">
                        {/* Tens bundles */}
                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
                            {Array.from({ length: tens }).map((_, i) => (
                                <StickBundle key={`t-${i}`} count={10} type="bundle" />
                            ))}
                            {tens === 0 && <div className="text-slate-400 text-xs italic py-4">没有整十份</div>}
                        </div>
                    </div>

                    <div className="border-t border-slate-200 dark:border-slate-700 pt-4 flex flex-wrap justify-center gap-2">
                        {/* Ones */}
                        {Array.from({ length: ones }).map((_, i) => (
                            <div key={`o-${i}`} className="w-1.5 h-8 rounded-full bg-orange-500 shadow-sm" />
                        ))}
                        {ones === 0 && <div className="text-slate-400 text-xs italic">没有零头</div>}
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm text-center">
                        <p className="text-xs text-slate-500 mb-1">计数器模型</p>
                        <div className="flex justify-center gap-8">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-24 bg-slate-100 dark:bg-slate-700 rounded-t-lg relative flex flex-col-reverse p-1">
                                    {Array.from({ length: tens }).map((_, i) => <div key={i} className="w-full h-3 bg-amber-400 rounded-sm mb-1" />)}
                                </div>
                                <span className="text-xs font-bold mt-1 text-amber-600">十位</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-24 bg-slate-100 dark:bg-slate-700 rounded-t-lg relative flex flex-col-reverse p-1">
                                    {Array.from({ length: ones }).map((_, i) => <div key={i} className="w-full h-3 bg-orange-500 rounded-sm mb-1" />)}
                                </div>
                                <span className="text-xs font-bold mt-1 text-orange-600">个位</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Grid */}
                <div className="bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
                    <div className="grid grid-cols-10 gap-1">
                        {Array.from({ length: 100 }).map((_, i) => {
                            const val = i + 1;
                            const isSelected = selected === val;
                            const isSameColumn = (val % 10) === (selected % 10);
                            const isSameRow = Math.floor((val - 1) / 10) === Math.floor((selected - 1) / 10);

                            return (
                                <button
                                    key={val}
                                    onClick={() => setSelected(val)}
                                    onMouseEnter={() => setHovered(val)}
                                    onMouseLeave={() => setHovered(null)}
                                    className={`
                                        aspect-square text-[10px] md:text-sm font-bold rounded-md transition-all
                                        ${isSelected
                                            ? 'bg-indigo-600 text-white shadow-lg scale-110 z-10'
                                            : hovered === val
                                                ? 'bg-indigo-100 text-indigo-700'
                                                : isSameColumn || isSameRow
                                                    ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-300 dark:text-indigo-800'
                                                    : 'text-slate-400 hover:text-slate-600 dark:text-slate-600'
                                        }
                                    `}
                                >
                                    {val}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-2xl border-l-4 border-amber-400">
                <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <Lightbulb size={18} /> 发现数字规律
                </h4>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-amber-700 dark:text-amber-400">
                    <div className="flex gap-2">
                        <span className="text-lg">➡️</span>
                        <p>横着跨一步，数字<b>加1</b>或<b>减1</b>。</p>
                    </div>
                    <div className="flex gap-2">
                        <span className="text-lg">⬇️</span>
                        <p>竖着跳一格，数字<b>加10</b>或<b>减10</b>。</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NumberGrid100;

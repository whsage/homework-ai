import React, { useState } from 'react';
import { LayoutGrid, Layers, Repeat, Zap, MousePointer2 } from 'lucide-react';

const OperationsLawsLab = () => {
    const [law, setLaw] = useState('distributive'); // 'commutative', 'associative', 'distributive'
    const [a, setA] = useState(4);
    const [b, setB] = useState(6);
    const [c, setC] = useState(3);
    const [isReorganized, setIsReorganized] = useState(false);

    const laws = [
        { id: 'commutative', label: '交换律', icon: <Repeat />, desc: '搬家不变：a + b = b + a' },
        { id: 'associative', label: '结合律', icon: <Layers />, desc: '抱团不变：(a + b) + c = a + (b + c)' },
        { id: 'distributive', label: '分配律', icon: <LayoutGrid />, desc: '拆礼物盒：a × (b + c) = a×b + a×c' }
    ];

    const reset = () => {
        setIsReorganized(false);
    };

    return (
        <div className="space-y-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            {/* Law Header Selection */}
            <div className="flex flex-wrap gap-2">
                {laws.map(l => (
                    <button
                        key={l.id}
                        onClick={() => { setLaw(l.id); reset(); }}
                        className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border-2 transition-all font-bold ${law === l.id
                                ? 'bg-orange-500 border-orange-500 text-white'
                                : 'bg-slate-50 border-slate-100 text-slate-500 hover:border-orange-200'
                            }`}
                    >
                        {l.icon} {l.label}
                    </button>
                ))}
            </div>

            {/* Params Controls */}
            <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">A</label>
                    <input type="number" value={a} onChange={e => { setA(parseInt(e.target.value) || 0); reset(); }} className="w-full p-2 bg-slate-50 rounded-lg border-2 border-slate-100 focus:border-orange-400 outline-none transition-all" />
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">B</label>
                    <input type="number" value={b} onChange={e => { setB(parseInt(e.target.value) || 0); reset(); }} className="w-full p-2 bg-slate-50 rounded-lg border-2 border-slate-100 focus:border-orange-400 outline-none transition-all" />
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">C</label>
                    <input type="number" value={c} onChange={e => { setC(parseInt(e.target.value) || 0); reset(); }} className="w-full p-2 bg-slate-50 rounded-lg border-2 border-slate-100 focus:border-orange-400 outline-none transition-all" />
                </div>
            </div>

            {/* Visual Playground */}
            <div className="relative min-h-[300px] bg-slate-50 dark:bg-slate-900/50 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center p-8 overflow-hidden">

                {/* Visualizer: Commutative (a + b vs b + a) */}
                {law === 'commutative' && (
                    <div className="flex items-center gap-4 text-white">
                        <div className={`flex items-center transition-all duration-700 ${isReorganized ? 'translate-x-32' : ''}`}>
                            <div className="bg-orange-500 h-16 flex items-center justify-center font-black rounded-lg shadow-lg" style={{ width: `${a * 20}px` }}>{a}</div>
                            <div className="text-slate-400 px-4 text-3xl">+</div>
                            <div className={`bg-blue-500 h-16 flex items-center justify-center font-black rounded-lg shadow-lg transition-all duration-700 ${isReorganized ? '-translate-x-[calc(100%+80px+0px)]' : ''}`} style={{ width: `${b * 20}px` }}>{b}</div>
                        </div>
                    </div>
                )}

                {/* Visualizer: Associative ((a + b) + c vs a + (b + c)) */}
                {law === 'associative' && (
                    <div className="flex items-center gap-2">
                        <div className={`p-4 rounded-3xl transition-all duration-700 ${!isReorganized ? 'bg-orange-400/20 border-2 border-orange-400' : ''}`}>
                            <div className="flex items-center gap-2">
                                <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold">{a}</div>
                                <span className="text-slate-300">+</span>
                                <div className={`bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold transition-all duration-700 ${isReorganized ? 'translate-x-[calc(100%+8px+8px)]' : ''}`}>{b}</div>
                            </div>
                        </div>
                        <span className="text-slate-300">+</span>
                        <div className={`p-4 rounded-3xl transition-all duration-700 ${isReorganized ? 'bg-blue-400/20 border-2 border-blue-400' : ''}`}>
                            <div className="bg-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold">{c}</div>
                        </div>
                    </div>
                )}

                {/* Visualizer: Distributive (Area Model) */}
                {law === 'distributive' && (
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative flex items-end">
                            {/* The "Box" */}
                            <div className="flex flex-col items-center">
                                <span className="text-[10px] font-bold text-slate-400 mb-1">A = {a}</span>
                                <div className="flex border-2 border-slate-300 dark:border-slate-700 rounded-lg overflow-hidden shadow-2xl">
                                    <div
                                        className="bg-orange-500 flex items-center justify-center text-white font-black text-xs transition-all duration-700"
                                        style={{ height: `${a * 20}px`, width: `${b * 20}px` }}
                                    >
                                        {isReorganized && `(A×B)`}
                                    </div>
                                    <div
                                        className={`bg-blue-400 flex items-center justify-center text-white font-black text-xs transition-all duration-700 ${isReorganized ? 'translate-x-12' : ''}`}
                                        style={{ height: `${a * 20}px`, width: `${c * 20}px` }}
                                    >
                                        {isReorganized && `(A×C)`}
                                    </div>
                                </div>
                                <div className="flex w-full mt-2 justify-between px-2 text-[10px] font-bold text-slate-400">
                                    <span>B = {b}</span>
                                    <span className={`${isReorganized ? 'translate-x-12' : ''}`}>C = {c}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Status Equation */}
                <div className="mt-12 bg-white dark:bg-slate-800 px-8 py-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-6 font-mono">
                    <div className="text-slate-400">
                        {law === 'commutative' && `${a} + ${b}`}
                        {law === 'associative' && `(${a} + ${b}) + ${c}`}
                        {law === 'distributive' && `${a} × (${b} + ${c})`}
                    </div>
                    <div className="text-orange-500 font-black text-2xl">=</div>
                    <div className="text-indigo-600 font-bold">
                        {law === 'commutative' && (isReorganized ? `${b} + ${a}` : `${a} + ${b}`)}
                        {law === 'associative' && (isReorganized ? `${a} + (${b} + ${c})` : `(${a} + ${b}) + ${c}`)}
                        {law === 'distributive' && (isReorganized ? `${a}×${b} + ${a}×${c}` : `${a} × (${b} + ${c})`)}
                    </div>
                    <div className="border-l pl-6 text-slate-800 dark:text-slate-200 font-black text-xl">
                        {law === 'distributive' ? a * (b + c) : a + b + (law === 'associative' ? c : 0)}
                    </div>
                </div>
            </div>

            {/* Action Trigger */}
            <div className="flex justify-center">
                <button
                    onClick={() => setIsReorganized(!isReorganized)}
                    className="group bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all flex items-center gap-3 active:scale-95"
                >
                    <Zap className={`w-5 h-5 ${isReorganized ? 'fill-yellow-300 text-yellow-300' : ''}`} />
                    {isReorganized ? "变回去" : "见证魔法"}
                    <MousePointer2 className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-slate-50 rounded-xl">
                    <h4 className="font-bold mb-2">💡 简便技巧</h4>
                    <p className="text-slate-500">寻找“好朋友”：<br />25 × 4 = 100<br />125 × 8 = 1000</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                    <h4 className="font-bold mb-2">🧠 思考一下</h4>
                    <p className="text-slate-500">为什么我们要交换顺序？（因为凑整后心算更容易！）</p>
                </div>
            </div>
        </div>
    );
};

export default OperationsLawsLab;

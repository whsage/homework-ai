import React, { useState } from 'react';
import { Target, Star, Brain, Lightbulb, CheckCircle2, Calculator, ArrowRight, Play, Eye } from 'lucide-react';

const RationalNumbers = () => {
    // Interactive State
    const [position, setPosition] = useState(0);
    const [path, setPath] = useState([{ x: 0, label: 'Start' }]);

    const move = (steps) => {
        if (position + steps > 10 || position + steps < -10) return; // Boundary
        const newPos = position + steps;
        setPosition(newPos);
        setPath([...path, { x: newPos, label: steps > 0 ? `+${steps}` : `${steps}` }]);
    };

    const reset = () => {
        setPosition(0);
        setPath([{ x: 0, label: 'Start' }]);
    };

    return (
        <div className="space-y-6">
            {/* Interactive Number Line */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-purple-100 dark:border-purple-900/30">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-purple-500" />
                    互动实验：数轴漫步
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    通过控制小人移动，直观理解正数（向右）和负数（向左）的加减法。
                </p>

                {/* The Line */}
                <div className="relative h-24 mt-8 mb-8 select-none">
                    {/* Main Axis */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-600 rounded-full"></div>

                    {/* Ticks */}
                    {Array.from({ length: 21 }).map((_, i) => {
                        const val = i - 10;
                        const leftPct = (i / 20) * 100;
                        return (
                            <div key={val} className="absolute top-1/2 transform -translate-x-1/2" style={{ left: `${leftPct}%` }}>
                                <div className={`w-0.5 ${val === 0 ? 'h-6 bg-slate-800 dark:bg-white' : 'h-3 bg-slate-400'} -mt-1.5`}></div>
                                <div className={`text-xs mt-3 transform -translate-x-1/2 ${val === 0 ? 'font-bold text-slate-800 dark:text-white' : 'text-slate-400'}`}>
                                    {val}
                                </div>
                            </div>
                        );
                    })}

                    {/* The Character / Point */}
                    <div
                        className="absolute top-1/2 w-8 h-8 -ml-4 -mt-10 transition-all duration-500 ease-out z-10 flex flex-col items-center"
                        style={{ left: `${((position + 10) / 20) * 100}%` }}
                    >
                        <div className="w-8 h-8 bg-purple-500 rounded-full shadow-lg flex items-center justify-center text-white font-bold border-2 border-white dark:border-slate-800">
                            🏃
                        </div>
                        <div className="mt-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded text-xs font-bold whitespace-nowrap">
                            当前: {position}
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex flex-wrap gap-4 justify-center items-center bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl">
                    <div className="space-x-2">
                        <span className="text-sm font-bold text-slate-500 mr-2">向左走(负):</span>
                        <button onClick={() => move(-1)} className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 font-bold transition-colors">-1</button>
                        <button onClick={() => move(-2)} className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 font-bold transition-colors">-2</button>
                    </div>

                    <div className="w-px h-8 bg-slate-200 dark:bg-slate-700 mx-2"></div>

                    <div className="space-x-2">
                        <span className="text-sm font-bold text-slate-500 mr-2">向右走(正):</span>
                        <button onClick={() => move(1)} className="px-4 py-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 font-bold transition-colors">+1</button>
                        <button onClick={() => move(2)} className="px-4 py-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 font-bold transition-colors">+2</button>
                    </div>

                    <div className="ml-auto">
                        <button onClick={reset} className="px-4 py-2 bg-slate-200 text-slate-600 rounded-lg hover:bg-slate-300 font-semibold transition-colors">
                            重置
                        </button>
                    </div>
                </div>

                {/* Path History */}
                <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900/30 rounded-lg text-sm text-slate-600 dark:text-slate-400">
                    <span className="font-bold">移动路径: </span>
                    {path.map((step, i) => (
                        <span key={i}>
                            {i > 0 && <span className="mx-1 text-slate-300">→</span>}
                            <span className={step.x < 0 ? 'text-red-500' : step.x > 0 ? 'text-green-500' : ('text-slate-500')}>
                                {step.label === 'Start' ? '起点(0)' : `${step.label} (到${step.x})`}
                            </span>
                        </span>
                    ))}
                </div>
            </div>

            {/* Concept Explanation */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl">
                    <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
                        <Brain className="w-5 h-5" />
                        核心概念：正负数
                    </h4>
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                        <li>• <span className="font-bold text-green-600">正数</span>：大于0的数，表示向右、向上、增加。如：+5, 100。</li>
                        <li>• <span className="font-bold text-red-500">负数</span>：小于0的数，表示向左、向下、减少。如：-3, -10。</li>
                        <li>• <span className="font-bold text-slate-600">0</span>：既不是正数也不是负数，是分界点，表示原点。</li>
                    </ul>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl">
                    <h4 className="font-bold text-orange-800 dark:text-orange-300 mb-3 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5" />
                        生活中的例子
                    </h4>
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                        <li>🌡️ <strong>温度</strong>：零上20度记作+20℃，零下5度记作-5℃。</li>
                        <li>💰 <strong>收支</strong>：收入100元记作+100，支出50元记作-50。</li>
                        <li>⛰️ <strong>海拔</strong>：珠峰8848米，马里亚纳海沟-11034米。</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RationalNumbers;

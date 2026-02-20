import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine, Tooltip, Legend } from 'recharts';
import { Info, MousePointer2 } from 'lucide-react';

const ExponentialVisualizer = () => {
    const [base, setBase] = useState(2);
    const [showLog, setShowLog] = useState(true);
    const [showSymmetry, setShowSymmetry] = useState(true);

    // Generate data for plotting
    const generateData = () => {
        const data = [];
        // We want a range that covers both curves reasonably
        for (let x = -4; x <= 4; x += 0.1) {
            const obj = { x: Number(x.toFixed(2)) };

            // y = a^x
            const expY = Math.pow(base, x);
            if (expY <= 10 && expY >= -10) {
                obj.expY = Number(expY.toFixed(3));
            }

            // y = log_a(x)
            if (x > 0) {
                const logY = Math.log(x) / Math.log(base);
                if (logY <= 10 && logY >= -10) {
                    obj.logY = Number(logY.toFixed(3));
                }
            }

            // y = x (symmetry line)
            if (showSymmetry) {
                obj.lineYX = x;
            }

            data.push(obj);
        }
        return data;
    };

    const data = generateData();

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                <div className="flex flex-wrap gap-6 items-center justify-between">
                    <div className="flex-1 min-w-[240px]">
                        <div className="flex justify-between mb-2 items-center">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded">底数 a = {base}</span>
                            </label>
                            <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${base > 1 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                                {base > 1 ? '爆炸增长 (a > 1)' : '指数衰减 (0 < a < 1)'}
                            </span>
                        </div>
                        <input
                            type="range"
                            min="0.2"
                            max="4"
                            step="0.1"
                            value={base}
                            onChange={(e) => {
                                let val = parseFloat(e.target.value);
                                if (Math.abs(val - 1) < 0.05) val = 1.1; // Jump over base 1
                                setBase(val);
                            }}
                            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={() => setShowLog(!showLog)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${showLog ? 'bg-emerald-500 border-emerald-600 text-white shadow-md' : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-400'}`}
                        >
                            对数函数 y=logₐx
                        </button>
                        <button
                            onClick={() => setShowSymmetry(!showSymmetry)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${showSymmetry ? 'bg-indigo-500 border-indigo-600 text-white shadow-md' : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-400'}`}
                        >
                            y=x 对称线
                        </button>
                    </div>
                </div>
            </div>

            <div className="h-[400px] w-full p-6 relative">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                        <XAxis type="number" dataKey="x" domain={[-4, 4]} stroke="#94a3b8" fontSize={12} />
                        <YAxis type="number" domain={[-4, 4]} stroke="#94a3b8" fontSize={12} />
                        <Tooltip
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                            itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                            formatter={(value, name) => {
                                if (name === 'expY') return [value, `y = ${base}^x`];
                                if (name === 'logY') return [value, `y = log_${base}(x)`];
                                return [value, 'y = x'];
                            }}
                        />
                        <ReferenceLine x={0} stroke="#475569" strokeWidth={1} />
                        <ReferenceLine y={0} stroke="#475569" strokeWidth={1} />

                        {/* Exponential Curve */}
                        <Line
                            type="monotone"
                            dataKey="expY"
                            stroke="#4f46e5"
                            strokeWidth={4}
                            dot={false}
                            name="expY"
                            isAnimationActive={false}
                        />

                        {/* Logarithmic Curve */}
                        {showLog && (
                            <Line
                                type="monotone"
                                dataKey="logY"
                                stroke="#10b981"
                                strokeWidth={4}
                                dot={false}
                                name="logY"
                                isAnimationActive={false}
                            />
                        )}

                        {/* Symmetry Line */}
                        {showSymmetry && (
                            <Line
                                type="monotone"
                                dataKey="lineYX"
                                stroke="#94a3b8"
                                strokeWidth={2}
                                strokeDasharray="8 8"
                                dot={false}
                                name="lineYX"
                                isAnimationActive={false}
                            />
                        )}

                        {/* Intersection Point with y-axis for exponential */}
                        <ReferenceLine x={0} y={1} stroke="#ef4444" strokeWidth={2} isFront label={{ position: 'right', value: '(0,1)', fill: '#ef4444', fontSize: 12, fontWeight: 'bold' }} />
                        {/* Intersection Point with x-axis for logarithmic */}
                        {showLog && (
                            <ReferenceLine x={1} y={0} stroke="#ef4444" strokeWidth={2} isFront label={{ position: 'top', value: '(1,0)', fill: '#ef4444', fontSize: 12, fontWeight: 'bold' }} />
                        )}
                    </LineChart>
                </ResponsiveContainer>

                <div className="absolute bottom-6 right-6 flex flex-col gap-3">
                    <div className="bg-white/95 dark:bg-slate-800/95 p-3 rounded-xl shadow-lg border border-indigo-100 dark:border-indigo-900/50 text-xs backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-2 font-bold text-indigo-600 dark:text-indigo-400">
                            <Info className="w-4 h-4" /> 指数函数性质
                        </div>
                        <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                            <li>• 必过定点 <span className="text-red-500 font-bold">(0, 1)</span></li>
                            <li>• 定义域为 R，值域为 (0, +∞)</li>
                            <li>• x轴是渐近线</li>
                        </ul>
                    </div>
                    {showLog && (
                        <div className="bg-white/95 dark:bg-slate-800/95 p-3 rounded-xl shadow-lg border border-emerald-100 dark:border-emerald-900/50 text-xs backdrop-blur-sm">
                            <div className="flex items-center gap-2 mb-2 font-bold text-emerald-600 dark:text-emerald-400">
                                <Info className="w-4 h-4" /> 对数函数性质
                            </div>
                            <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                                <li>• 必过定点 <span className="text-red-500 font-bold">(1, 0)</span></li>
                                <li>• 指数函数关于 <span className="text-indigo-500 font-bold">y = x</span> 对称</li>
                                <li>• y轴是渐近线</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-700 flex items-center gap-3">
                <MousePointer2 className="w-4 h-4 text-slate-400" />
                <p className="text-xs text-slate-500 italic">尝试改变底数 a，观察图形如何"爆炸"增长或平缓变化。</p>
            </div>
        </div>
    );
};

export default ExponentialVisualizer;

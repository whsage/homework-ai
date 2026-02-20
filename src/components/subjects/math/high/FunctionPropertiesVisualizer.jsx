import React, { useState } from 'react';
import { TrendingUp, ArrowUpRight, ArrowDownRight, RefreshCcw } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine, Tooltip } from 'recharts';

const FunctionPropertiesVisualizer = () => {
    const [funcType, setFuncType] = useState('x2'); // x, x2, x3, inv
    const [showSymmetry, setShowSymmetry] = useState(false);
    const [showMono, setShowMono] = useState(false);

    // Generate data based on function type
    const generateData = () => {
        const data = [];
        let start = -3;
        let end = 3;
        let step = 0.2;

        // Handle 1/x distinct range to avoid infinity
        if (funcType === 'inv') {
            // Negative part
            for (let x = -4; x <= -0.2; x += 0.2) {
                data.push({ x: Number(x.toFixed(2)), y: Number((1 / x).toFixed(2)) });
            }
            // Positive part (we need a break in the line, recharts handles nulls usually by breaking line)
            data.push({ x: 0, y: null });
            for (let x = 0.2; x <= 4; x += 0.2) {
                data.push({ x: Number(x.toFixed(2)), y: Number((1 / x).toFixed(2)) });
            }
            return data;
        }

        for (let x = start; x <= end; x += step) {
            let y = 0;
            switch (funcType) {
                case 'x': y = x; break;
                case 'x2': y = x * x; break;
                case 'x3': y = x * x * x; break;
                default: y = x;
            }
            data.push({ x: Number(x.toFixed(2)), y: Number(y.toFixed(2)) });
        }
        return data;
    };

    const data = generateData();

    const functions = [
        { id: 'x', label: 'y = x', odd: true, mono: 'inc' },
        { id: 'x2', label: 'y = x²', odd: false, mono: 'mixed' },
        { id: 'x3', label: 'y = x³', odd: true, mono: 'inc' },
        { id: 'inv', label: 'y = 1/x', odd: true, mono: 'dec_split' },
    ];

    const currentFunc = functions.find(f => f.id === funcType);

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 border-b border-slate-200 dark:border-slate-700 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex bg-slate-200 dark:bg-slate-700 p-1 rounded-lg">
                    {functions.map(f => (
                        <button
                            key={f.id}
                            onClick={() => setFuncType(f.id)}
                            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${funcType === f.id
                                    ? 'bg-white dark:bg-slate-600 shadow text-indigo-600 dark:text-indigo-400'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                                }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={() => setShowSymmetry(!showSymmetry)}
                        className={`px-3 py-1.5 rounded-lg text-sm border flex items-center gap-2 ${showSymmetry ? 'bg-purple-100 border-purple-300 text-purple-700' : 'border-slate-200 text-slate-600'
                            }`}
                    >
                        <RefreshCcw className="w-4 h-4" /> 对称性
                    </button>
                    <button
                        onClick={() => setShowMono(!showMono)}
                        className={`px-3 py-1.5 rounded-lg text-sm border flex items-center gap-2 ${showMono ? 'bg-green-100 border-green-300 text-green-700' : 'border-slate-200 text-slate-600'
                            }`}
                    >
                        <TrendingUp className="w-4 h-4" /> 单调性
                    </button>
                </div>
            </div>

            <div className="h-[300px] w-full p-4 relative">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis dataKey="x" type="number" domain={['auto', 'auto']} allowDataOverflow={false} stroke="#94a3b8" />
                        <YAxis domain={['auto', 'auto']} stroke="#94a3b8" />
                        <Tooltip
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            cursor={{ stroke: '#6366f1', strokeWidth: 1, strokeDasharray: '5 5' }}
                        />
                        <ReferenceLine x={0} stroke="#94a3b8" strokeWidth={2} />
                        <ReferenceLine y={0} stroke="#94a3b8" strokeWidth={2} />

                        {/* Function Line */}
                        <Line
                            type="monotone"
                            dataKey="y"
                            stroke="#4f46e5"
                            strokeWidth={3}
                            dot={false}
                            connectNulls={false}
                            isAnimationActive={true}
                        />

                        {/* Symmetry Indicator */}
                        {showSymmetry && !currentFunc.odd && (
                            // Even function: Y-axis symmetry
                            <ReferenceLine x={0} stroke="#a855f7" strokeWidth={4} strokeOpacity={0.3} label="对称轴" />
                        )}
                        {/* Origin Symmetry is harder to visualize with ReferenceLine, usually point based */}
                    </LineChart>
                </ResponsiveContainer>

                {/* Overlaid Explanations */}
                {showSymmetry && (
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 p-3 rounded-lg shadow border border-purple-200 backdrop-blur-sm text-sm">
                        <h4 className="font-bold text-purple-700 mb-1">奇偶性分析</h4>
                        {currentFunc.odd ? (
                            <p>这是<strong>奇函数</strong>。<br />图像关于<span className="text-purple-600 font-bold">原点</span>中心对称。<br />f(-x) = -f(x)</p>
                        ) : (
                            <p>这是<strong>偶函数</strong>。<br />图像关于<span className="text-purple-600 font-bold">y轴</span>轴对称。<br />f(-x) = f(x)</p>
                        )}
                        {currentFunc.id === 'x' && <p>y=x 是特殊的奇函数。</p>}
                    </div>
                )}

                {showMono && (
                    <div className="absolute top-4 left-14 bg-white/90 dark:bg-slate-800/90 p-3 rounded-lg shadow border border-green-200 backdrop-blur-sm text-sm">
                        <h4 className="font-bold text-green-700 mb-1">单调性分析</h4>
                        {currentFunc.mono === 'inc' && <div className="flex items-center gap-1 text-green-600"><ArrowUpRight className="w-4 h-4" /> 全程单调递增</div>}
                        {currentFunc.mono === 'dec_split' && <div className="flex items-center gap-1 text-green-600"><ArrowDownRight className="w-4 h-4" /> 在各象限内单调递减</div>}
                        {currentFunc.mono === 'mixed' && (
                            <div>
                                <div className="flex items-center gap-1 text-red-500"><ArrowDownRight className="w-3 h-3" /> (-∞, 0] 单调递减</div>
                                <div className="flex items-center gap-1 text-green-600"><ArrowUpRight className="w-3 h-3" /> [0, +∞) 单调递增</div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FunctionPropertiesVisualizer;

import React, { useState, useEffect } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ReferenceLine
} from 'recharts';
import { Plus, Minus, RefreshCw } from 'lucide-react';

const ExponentialVisualizer = () => {
    const [base, setBase] = useState(2);
    const [showExp, setShowExp] = useState(true);
    const [showLog, setShowLog] = useState(false);
    const [showLineYX, setShowLineYX] = useState(false);

    const generateData = () => {
        const data = [];
        // Generate points for x from -3 to 5
        const start = -3;
        const end = 5;
        const step = 0.2;

        for (let x = start; x <= end; x += step) {
            const roundedX = Math.round(x * 10) / 10;

            let expY = Math.pow(base, roundedX);

            // Logarithm is only defined for x > 0
            let logY = null;
            if (roundedX > 0 && base > 0 && base !== 1) {
                logY = Math.log(roundedX) / Math.log(base);
            }

            // Handle edge cases for display limits to avoid huge spikes
            if (expY > 10) expY = null;
            if (logY < -5 || logY > 5) logY = (logY < -5 ? null : logY); // Clip log for visualization

            data.push({
                x: roundedX,
                exp: expY,
                log: logY,
                line: roundedX // y=x for reference
            });
        }
        return data;
    };

    const data = generateData();

    // Adjust base handlers
    const increaseBase = () => setBase(prev => Math.min(prev + 0.5, 5));
    const decreaseBase = () => setBase(prev => Math.max(prev - 0.5, 0.5));

    // Custom Tooltip
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white/90 dark:bg-slate-800/90 p-3 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg text-xs">
                    <p className="font-bold mb-1">x: {label}</p>
                    {payload.map((entry, index) => (
                        <p key={index} style={{ color: entry.color }}>
                            {entry.name}: {entry.value !== null ? Number(entry.value).toFixed(2) : 'N/A'}
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            {/* Header controls */}
            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 border-b border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4">

                {/* Base Control */}
                <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">底数 a = {base}</span>
                    <div className="flex gap-1">
                        <button
                            onClick={decreaseBase}
                            disabled={base <= 0.5}
                            className="p-1 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 hover:bg-slate-100 disabled:opacity-50"
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                        <button
                            onClick={increaseBase}
                            disabled={base >= 5}
                            className="p-1 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 hover:bg-slate-100 disabled:opacity-50"
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Toggles */}
                <div className="flex gap-2">
                    <button
                        onClick={() => setShowExp(!showExp)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${showExp
                                ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                                : 'bg-white text-slate-500 border border-slate-200'
                            }`}
                    >
                        指数 y={base}ˣ
                    </button>
                    <button
                        onClick={() => setShowLog(!showLog)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${showLog
                                ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                                : 'bg-white text-slate-500 border border-slate-200'
                            }`}
                    >
                        对数 y=log_{base}x
                    </button>
                    <button
                        onClick={() => setShowLineYX(!showLineYX)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${showLineYX
                                ? 'bg-slate-200 text-slate-700 border border-slate-300'
                                : 'bg-white text-slate-500 border border-slate-200'
                            }`}
                    >
                        y=x (对称轴)
                    </button>
                </div>
            </div>

            {/* Chart Area */}
            <div className="p-4 h-[350px] relative">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis
                            dataKey="x"
                            type="number"
                            domain={[-3, 5]}
                            ticks={[-3, -2, -1, 0, 1, 2, 3, 4, 5]}
                            allowDataOverflow={true}
                        />
                        <YAxis
                            domain={[-4, 6]}
                            ticks={[-4, -2, 0, 2, 4, 6]}
                            allowDataOverflow={true}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <ReferenceLine y={0} stroke="#666" />
                        <ReferenceLine x={0} stroke="#666" />

                        {/* Exponential Function */}
                        {showExp && (
                            <Line
                                type="monotone"
                                dataKey="exp"
                                stroke="#4f46e5"
                                strokeWidth={3}
                                dot={false}
                                name={`y=${base}ˣ`}
                                connectNulls={false}
                            />
                        )}

                        {/* Logarithmic Function */}
                        {showLog && (
                            <Line
                                type="monotone"
                                dataKey="log"
                                stroke="#10b981"
                                strokeWidth={3}
                                dot={false}
                                name={`y=log_${base}x`}
                                connectNulls={false}
                            />
                        )}

                        {/* y=x Line */}
                        {showLineYX && (
                            <Line
                                type="monotone"
                                dataKey="line"
                                stroke="#94a3b8"
                                strokeDasharray="5 5"
                                strokeWidth={2}
                                dot={false}
                                name="y=x"
                            />
                        )}
                    </LineChart>
                </ResponsiveContainer>

                {/* Labels/Annotations */}
                <div className="absolute top-6 right-6 text-xs text-slate-500 bg-white/80 p-2 rounded backdrop-blur-sm pointer-events-none">
                    {showExp && <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-indigo-600"></span> (0, 1)是定点</div>}
                    {showLog && <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> (1, 0)是定点</div>}
                    {showLog && showExp && <div className="mt-1 text-slate-400">两者关于 y=x 对称</div>}
                </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/50 p-3 text-xs text-center text-slate-500 border-t border-slate-200 dark:border-slate-700">
                试着改变底数 a，观察 0 {'<'} a {'<'} 1 和 a {'>'} 1 时的图像区别
            </div>
        </div>
    );
};

export default ExponentialVisualizer;

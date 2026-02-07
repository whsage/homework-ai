import React, { useState } from 'react';
import { BarChart2, Plus, RefreshCw, ArrowRight } from 'lucide-react';

const BarChartVisualizer = () => {
    const [data, setData] = useState([
        { label: '足球', value: 8, color: 'bg-blue-500' },
        { label: '篮球', value: 6, color: 'bg-orange-500' },
        { label: '乒乓', value: 10, color: 'bg-green-500' },
        { label: '跑步', value: 4, color: 'bg-red-500' },
    ]);

    const [showAverage, setShowAverage] = useState(false);

    const maxValue = Math.max(...data.map(d => d.value), 12); // Minimum scale 12
    const average = data.reduce((sum, item) => sum + item.value, 0) / data.length;

    const handleValueChange = (index, newValue) => {
        const newData = [...data];
        newData[index].value = Math.max(0, Math.min(15, Number(newValue)));
        setData(newData);
    };

    return (
        <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <h3 className="font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-indigo-500" />
                条形统计图与平均数
            </h3>

            {/* Chart Area */}
            <div className="relative w-full max-w-md h-64 border-b-2 border-l-2 border-slate-300 dark:border-slate-600 mb-8 pl-4 flex items-end justify-around">
                {/* Y Axis Lines */}
                {Array(6).fill(0).map((_, i) => {
                    const val = i * 3;
                    const y = (val / 15) * 100;
                    if (y > 100) return null;
                    return (
                        <div key={i} className="absolute left-0 w-full flex flex-col items-start pointer-events-none" style={{ bottom: `${y}%` }}>
                            <div className="w-full border-t border-dashed border-slate-200 dark:border-slate-700"></div>
                            <span className="text-xs text-slate-400 absolute -left-6 transform -translate-y-1/2">{val}</span>
                        </div>
                    );
                })}

                {/* Average Line */}
                {showAverage && (
                    <div
                        className="absolute left-0 w-full border-t-4 border-dashed border-purple-500 z-20 transition-all duration-1000 flex items-center"
                        style={{ bottom: `${(average / 15) * 100}%` }}
                    >
                        <span className="bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full absolute -right-16 translate-y-[-50%]">
                            平均: {average.toFixed(1)}
                        </span>
                    </div>
                )}

                {/* Bars */}
                {data.map((item, index) => (
                    <div key={index} className="relative flex flex-col items-center group w-12 sm:w-16 h-full justify-end z-10">
                        {/* The Bar */}
                        <div
                            className={`w-full ${item.color} rounded-t-lg transition-all duration-500 relative opacity-90 group-hover:opacity-100`}
                            style={{ height: `${(item.value / 15) * 100}%` }}
                        >
                            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 font-bold text-slate-700 dark:text-slate-300">
                                {item.value}
                            </span>
                        </div>
                        {/* Label */}
                        <span className="absolute -bottom-8 text-sm font-bold text-slate-600 dark:text-slate-400">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>

            {/* Controls */}
            <div className="w-full max-w-md bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-bold text-slate-600 dark:text-slate-300">调整数据：</span>
                    <button
                        onClick={() => setShowAverage(!showAverage)}
                        className={`px-3 py-1 rounded text-sm font-bold transition-colors ${showAverage ? 'bg-purple-100 text-purple-600' : 'bg-slate-200 text-slate-500'}`}
                    >
                        {showAverage ? '隐藏移多补少' : '显示平均数 (移多补少)'}
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {data.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                            <span className="text-sm text-slate-500 w-10">{item.label}</span>
                            <input
                                type="range"
                                min="0"
                                max="15"
                                value={item.value}
                                onChange={(e) => handleValueChange(index, e.target.value)}
                                className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                        </div>
                    ))}
                </div>

                {showAverage && (
                    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                        <p className="text-xs text-slate-500">
                            <strong>移多补少：</strong>
                            把高的柱子切一部分补给矮的，最后大家一样高，这个高度就是平均数。
                            <br />
                            总数 ({data.reduce((a, b) => a + b.value, 0)}) ÷ 份数 ({data.length}) = 平均数 ({average.toFixed(1)})
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BarChartVisualizer;

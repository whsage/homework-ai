import React, { useState } from 'react';
import { PieChart, Plus, Trash2, Info } from 'lucide-react';

const PieChartLab = () => {
    const [data, setData] = useState([
        { id: 1, label: '学习', value: 40, color: '#6366f1' },
        { id: 2, label: '娱乐', value: 30, color: '#f43f5e' },
        { id: 3, label: '运动', value: 20, color: '#10b981' },
        { id: 4, label: '休息', value: 10, color: '#f59e0b' },
    ]);

    const total = data.reduce((sum, item) => sum + item.value, 0);

    const updateValue = (id, newVal) => {
        setData(data.map(item => item.id === id ? { ...item, value: Math.max(1, parseInt(newVal) || 0) } : item));
    };

    const updateLabel = (id, newLabel) => {
        setData(data.map(item => item.id === id ? { ...item, label: newLabel } : item));
    };

    const addCategory = () => {
        if (data.length >= 6) return;
        const colors = ['#8b5cf6', '#ec4899', '#06b6d4', '#84cc16'];
        const newId = Math.max(0, ...data.map(d => d.id)) + 1;
        setData([...data, { id: newId, label: '新类别', value: 10, color: colors[newId % colors.length] }]);
    };

    const removeCategory = (id) => {
        if (data.length <= 2) return;
        setData(data.filter(item => item.id !== id));
    };

    const renderPie = () => {
        let currentAngle = 0;
        return data.map((item, index) => {
            const angle = (item.value / total) * 360;
            const x1 = 50 + 40 * Math.cos((currentAngle * Math.PI) / 180);
            const y1 = 50 + 40 * Math.sin((currentAngle * Math.PI) / 180);
            const x2 = 50 + 40 * Math.cos(((currentAngle + angle) * Math.PI) / 180);
            const y2 = 50 + 40 * Math.sin(((currentAngle + angle) * Math.PI) / 180);
            const largeArc = angle > 180 ? 1 : 0;

            const path = `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`;
            currentAngle += angle;

            return (
                <path
                    key={item.id}
                    d={path}
                    fill={item.color}
                    className="hover:opacity-80 transition-opacity cursor-pointer"
                    title={`${item.label}: ${((item.value / total) * 100).toFixed(1)}%`}
                />
            );
        });
    };

    return (
        <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
            <div className="max-w-5xl mx-auto space-y-8">
                <div className="text-center space-y-2">
                    <h3 className="text-2xl font-black text-slate-800 dark:text-white flex items-center justify-center gap-3">
                        <PieChart className="text-indigo-500" /> 数据披萨实验室
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">输入你的日常安排，看它们如何组成一个完美的圆！</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Input Side */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-[2.5rem] shadow-lg border border-slate-100 dark:border-slate-700 space-y-4">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-slate-700 dark:text-slate-300">数据分类</span>
                            <button
                                onClick={addCategory}
                                className="flex items-center gap-1 text-sm font-bold text-indigo-600 hover:text-indigo-700 disabled:opacity-50"
                                disabled={data.length >= 6}
                            >
                                <Plus size={16} /> 添加项目
                            </button>
                        </div>

                        <div className="space-y-3">
                            {data.map((item) => (
                                <div key={item.id} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700">
                                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                                    <input
                                        type="text" value={item.label} onChange={(e) => updateLabel(item.id, e.target.value)}
                                        className="flex-1 min-w-0 bg-transparent text-sm font-bold text-slate-700 dark:text-slate-300 outline-none"
                                    />
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="number" value={item.value} onChange={(e) => updateValue(item.id, e.target.value)}
                                            className="w-16 px-2 py-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-mono text-center"
                                        />
                                        <button onClick={() => removeCategory(item.id)} className="text-slate-400 hover:text-red-500">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center px-2">
                            <span className="text-slate-400 font-medium">总量 (100%)</span>
                            <span className="text-xl font-black text-indigo-600 font-mono">{total}</span>
                        </div>
                    </div>

                    {/* Chart Side */}
                    <div className="space-y-8 flex flex-col items-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl -rotate-90">
                                {total > 0 && renderPie()}
                                <circle cx="50" cy="50" r="30" className="fill-white dark:fill-slate-800" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">总比例</span>
                                <span className="text-3xl font-black text-slate-800 dark:text-white">100%</span>
                            </div>
                        </div>

                        {/* Legend / Stats */}
                        <div className="grid grid-cols-2 gap-4 w-full">
                            {data.map(item => (
                                <div key={item.id} className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center">
                                    <span className="text-xs text-slate-400 mb-1">{item.label}</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-xl font-black" style={{ color: item.color }}>{((item.value / total) * 100).toFixed(1)}</span>
                                        <span className="text-sm font-bold text-slate-400">%</span>
                                    </div>
                                    <span className="text-[10px] font-mono text-slate-300 mt-1">{((item.value / total) * 360).toFixed(0)}°</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-2xl p-4 flex gap-4 items-start">
                    <Info className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" />
                    <div className="text-sm text-indigo-900/80 dark:text-indigo-200/80 space-y-1">
                        <p><strong>扇形统计图秘籍：</strong> 它可以直观地反映每一部分占总量的百分比。</p>
                        <p className="font-mono text-xs opacity-70">圆心角计算 = 该项目百分比 × 360°。例如：25% 对应 90°。</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PieChartLab;

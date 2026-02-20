import React, { useState } from 'react';
import { BarChart3, Users, RotateCcw, ClipboardCheck, Info } from 'lucide-react';

const ZhengMark = ({ count }) => {
    // 5 strokes for '正'
    const strokes = [
        "M 5 10 L 25 10", // 1: top horizontal
        "M 15 10 L 15 20", // 2: middle vertical
        "M 15 20 L 25 20", // 3: middle horizontal
        "M 5 20 L 5 30",  // 4: left vertical
        "M 5 30 L 25 30"  // 5: bottom horizontal
    ];

    const fullZhengs = Math.floor(count / 5);
    const remainingStrokes = count % 5;

    return (
        <div className="flex gap-2 flex-wrap">
            {/* Render full '正' characters */}
            {Array.from({ length: fullZhengs }).map((_, i) => (
                <svg key={`full-${i}`} width="30" height="40" className="stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="3" strokeLinecap="round">
                    {strokes.map((d, j) => <path key={j} d={d} fill="none" />)}
                </svg>
            ))}
            {/* Render partial '正' character */}
            {remainingStrokes > 0 && (
                <svg width="30" height="40" className="stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="3" strokeLinecap="round">
                    {strokes.slice(0, remainingStrokes).map((d, j) => <path key={j} d={d} fill="none" />)}
                </svg>
            )}
            {count === 0 && <span className="text-slate-300 dark:text-slate-600">---</span>}
        </div>
    );
};

const EmojiStats = () => {
    const [data, setData] = useState({
        "🍎": 0, "🍌": 0, "🍇": 0, "🍉": 0
    });
    const [totalVotes, setTotalVotes] = useState(0);

    const vote = (emoji) => {
        setData(prev => ({ ...prev, [emoji]: prev[emoji] + 1 }));
        setTotalVotes(t => t + 1);
    };

    const reset = () => {
        setData({ "🍎": 0, "🍌": 0, "🍇": 0, "🍉": 0 });
        setTotalVotes(0);
    };

    const maxVotes = Math.max(...Object.values(data), 1);

    return (
        <div className="space-y-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-3">
                    <Users className="text-blue-500 w-8 h-8" /> 小小数据情报员
                </h3>
                <p className="text-slate-500">大家最喜欢吃什么？点击水果来统计吧！</p>
                <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-4 py-1.5 rounded-full text-blue-600 dark:text-blue-400 font-bold">
                    <ClipboardCheck className="w-4 h-4" /> 已收集样本: {totalVotes}
                </div>
            </div>

            {/* Voting Buttons */}
            <div className="flex justify-center gap-4">
                {Object.keys(data).map(emoji => (
                    <button
                        key={emoji}
                        onClick={() => vote(emoji)}
                        className="group flex flex-col items-center gap-2 p-4 bg-slate-50 dark:bg-slate-700 rounded-2xl border-2 border-transparent hover:border-blue-400 hover:bg-white dark:hover:bg-slate-600 transition-all active:scale-90"
                    >
                        <span className="text-5xl group-hover:scale-125 transition-transform duration-300">{emoji}</span>
                        <span className="text-xs font-bold text-slate-400">投一票</span>
                    </button>
                ))}
            </div>

            {/* Stats Table with Zheng Marks */}
            <div className="overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-700">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-slate-900/50">
                        <tr>
                            <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase">水果</th>
                            <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase">「正」字魔法记分</th>
                            <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase text-right">总人数</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
                        {Object.entries(data).map(([emoji, count]) => (
                            <tr key={emoji} className="group hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors">
                                <td className="px-6 py-4 text-3xl">{emoji}</td>
                                <td className="px-6 py-4">
                                    <ZhengMark count={count} />
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg font-mono font-bold text-lg">
                                        {count}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Bar Chart Visualization */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h4 className="font-bold flex items-center gap-2 text-slate-800 dark:text-white">
                        <BarChart3 className="w-5 h-5 text-blue-500" /> 条形统计图浏览
                    </h4>
                    <button
                        onClick={reset}
                        className="text-xs font-bold text-slate-400 hover:text-red-500 flex items-center gap-1 transition-colors"
                    >
                        <RotateCcw className="w-3 h-3" /> 重置情报
                    </button>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 flex items-end justify-around h-64 relative">
                    {/* Y-axis labels hint */}
                    <div className="absolute left-2 top-0 bottom-8 border-r border-slate-200 dark:border-slate-800 pr-2 flex flex-col justify-between text-[10px] text-slate-400 font-mono">
                        <span>{Math.ceil(maxVotes)}</span>
                        <span>0</span>
                    </div>

                    {Object.entries(data).map(([emoji, count]) => (
                        <div key={emoji} className="flex flex-col items-center gap-3 w-16 group">
                            <div className="relative w-full flex flex-col items-center justify-end h-40">
                                {/* Bar */}
                                <div
                                    className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all duration-700 ease-out shadow-lg shadow-blue-200/50 dark:shadow-none"
                                    style={{ height: `${(count / maxVotes) * 100}%` }}
                                >
                                    {count > 0 && (
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-600 dark:text-blue-400">
                                            {count}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <span className="text-2xl">{emoji}</span>
                        </div>
                    ))}
                </div>
                <div className="flex items-start gap-2 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl">
                    <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                        <strong>情报员解密：</strong>画「正」字法每 5 票就能凑成一个完整的「正」字。这样我们在最后汇总时，只需要 5 个 5 个地数，就能飞快地算出总数啦！比如：正正一，就是 11 票！
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EmojiStats;

import React, { useState, useEffect } from 'react';
import { LayoutGrid, Square, Maximize, RotateCcw, Target, Trophy, Info } from 'lucide-react';

const PerimeterAreaLab = () => {
    const GRID_SIZE = 10;
    const [blocks, setBlocks] = useState([]);
    const [stats, setStats] = useState({ area: 0, perimeter: 0 });
    const [challenge, setChallenge] = useState(null);
    const [feedback, setFeedback] = useState(null);

    const toggleBlock = (row, col) => {
        const key = `${row}-${col}`;
        if (blocks.includes(key)) {
            setBlocks(blocks.filter(b => b !== key));
        } else {
            setBlocks([...blocks, key]);
        }
    };

    const calculateStats = () => {
        const area = blocks.length;
        let perimeter = 0;

        blocks.forEach(block => {
            const [r, c] = block.split('-').map(Number);
            // Check 4 neighbors
            const neighbors = [
                `${r - 1}-${c}`,
                `${r + 1}-${c}`,
                `${r}-${c - 1}`,
                `${r}-${c + 1}`
            ];
            neighbors.forEach(n => {
                if (!blocks.includes(n)) perimeter++;
            });
        });

        setStats({ area, perimeter });
    };

    useEffect(() => {
        calculateStats();
    }, [blocks]);

    const startChallenge = () => {
        const targets = [
            { area: 12, text: "用 12 个小方块拼出一个【周长最短】的图形（看看谁最圆润？）", validate: (a, p) => a === 12 && p === 14 },
            { area: 12, text: "用 12 个小方块拼出一个【周长最长】的图形（看看谁最苗条？）", validate: (a, p) => a === 12 && p === 26 },
            { area: 9, text: "拼出一个正方形，它的面积是 9，周长是多少？", validate: (a, p) => a === 9 && p === 12 }
        ];
        const random = targets[Math.floor(Math.random() * targets.length)];
        setChallenge(random);
        setBlocks([]);
        setFeedback(null);
    };

    const checkChallenge = () => {
        if (challenge.validate(stats.area, stats.perimeter)) {
            setFeedback({ type: 'success', text: '太棒了！你是个图形魔法师！🏆' });
        } else {
            setFeedback({ type: 'error', text: '还没达到目标哦，再动动脑筋调整一下？' });
        }
    };

    return (
        <div className="space-y-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-3">
                    <LayoutGrid className="text-indigo-500 w-8 h-8" /> 周长面积探险营
                </h3>
                <p className="text-slate-500">点击格子放置方块，观察周长和面积的神奇变化！</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Grid Area */}
                <div className="flex flex-col items-center">
                    <div className="bg-slate-100 dark:bg-slate-900 shadow-inner p-2 rounded-xl">
                        <div
                            className="grid gap-px bg-slate-200 dark:bg-slate-700 border border-slate-200 dark:border-slate-700"
                            style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
                        >
                            {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
                                const r = Math.floor(i / GRID_SIZE);
                                const c = i % GRID_SIZE;
                                const key = `${r}-${c}`;
                                const isActive = blocks.includes(key);

                                return (
                                    <button
                                        key={key}
                                        onClick={() => toggleBlock(r, c)}
                                        className={`w-8 h-8 md:w-10 md:h-10 transition-all ${isActive
                                                ? 'bg-indigo-500 hover:bg-indigo-600 shadow-sm z-10'
                                                : 'bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700'
                                            } border-indigo-200/20`}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="mt-4 flex gap-4">
                        <button
                            onClick={() => { setBlocks([]); setFeedback(null); }}
                            className="flex items-center gap-2 px-4 py-2 text-sm text-slate-400 hover:text-red-500 font-bold transition-colors"
                        >
                            <RotateCcw className="w-4 h-4" /> 排空画板
                        </button>
                    </div>
                </div>

                {/* Dashboard Area */}
                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-2xl border-2 border-indigo-100 dark:border-indigo-800 transition-all">
                            <h4 className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-bold mb-2">
                                <Square className="w-5 h-5" /> 面积 (Area)
                            </h4>
                            <p className="text-4xl font-black text-indigo-600 font-mono">{stats.area}</p>
                            <p className="text-xs text-indigo-400 mt-1 uppercase tracking-tight">小方格总数</p>
                        </div>
                        <div className="bg-rose-50 dark:bg-rose-900/30 p-6 rounded-2xl border-2 border-rose-100 dark:border-rose-800">
                            <h4 className="flex items-center gap-2 text-rose-700 dark:text-rose-300 font-bold mb-2">
                                <Maximize className="w-5 h-5" /> 周长 (Perimeter)
                            </h4>
                            <p className="text-4xl font-black text-rose-600 font-mono">{stats.perimeter}</p>
                            <p className="text-xs text-rose-400 mt-1 uppercase tracking-tight">红色的边界线段长度</p>
                        </div>
                    </div>

                    {/* Challenge Section */}
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-4">
                        <div className="flex items-center justify-between">
                            <h4 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                                <Target className="w-5 h-5 text-orange-500" /> 图形达人挑战
                            </h4>
                            <button
                                onClick={startChallenge}
                                className="text-xs font-bold text-indigo-600 hover:underline"
                            >
                                {challenge ? '换个挑战' : '开启挑战'}
                            </button>
                        </div>

                        {challenge ? (
                            <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-100">
                                    {challenge.text}
                                </p>
                                <button
                                    onClick={checkChallenge}
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-orange-200 dark:shadow-none transition-transform active:scale-95 flex items-center justify-center gap-2"
                                >
                                    <Trophy className="w-5 h-5" /> 提交我的作品
                                </button>
                                {feedback && (
                                    <div className={`p-4 rounded-xl text-center font-bold ${feedback.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                        }`}>
                                        {feedback.text}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <p className="text-sm text-slate-400 italic">点击按钮，接受图形魔法师的挑战吧！</p>
                        )}
                    </div>

                    <div className="flex items-start gap-2 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl">
                        <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                        <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                            <strong>魔法观察台：</strong> 你有没有发现？如果不给方块留"缝隙"，把它们拼成一个胖胖的实体，周长通常会比较短；如果排成细细的一长条，周长就会变得非常长哦！
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerimeterAreaLab;

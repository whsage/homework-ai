import React, { useState, useMemo } from 'react';
import { Users, RotateCcw, HelpCircle, Trophy, MousePointer2 } from 'lucide-react';

/**
 * HandshakeCounterLab - 简单计数互动实验
 * 握手计数器：可视化N个小动物握手，学习有序计数
 */

const ANIMALS = ['🐶', '🐱', '🐰', '🐻', '🐷', '🐸'];
const ANIMAL_NAMES = ['小狗', '小猫', '小兔', '小熊', '小猪', '小青蛙'];

const HandshakeCounterLab = () => {
    const [count, setCount] = useState(4);
    const [handshakes, setHandshakes] = useState([]); // array of [i,j] pairs
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [showFormula, setShowFormula] = useState(false);

    const totalExpected = useMemo(() => {
        return (count * (count - 1)) / 2;
    }, [count]);

    const isHandshaken = (i, j) => {
        return handshakes.some(([a, b]) => (a === i && b === j) || (a === j && b === i));
    };

    const handleAnimalClick = (i) => {
        if (selectedAnimal === null) {
            setSelectedAnimal(i);
        } else if (selectedAnimal === i) {
            setSelectedAnimal(null);
        } else {
            const a = Math.min(selectedAnimal, i);
            const b = Math.max(selectedAnimal, i);
            if (!isHandshaken(a, b)) {
                setHandshakes(prev => [...prev, [a, b]]);
            }
            setSelectedAnimal(null);
        }
    };

    const reset = () => {
        setHandshakes([]);
        setSelectedAnimal(null);
    };

    const handleCountChange = (newCount) => {
        setCount(newCount);
        setHandshakes([]);
        setSelectedAnimal(null);
    };

    const isComplete = handshakes.length === totalExpected;

    // Calculate positions in a circle
    const getPosition = (index, total) => {
        const angle = (2 * Math.PI * index) / total - Math.PI / 2;
        const radius = 100;
        const cx = 140;
        const cy = 130;
        return {
            x: cx + radius * Math.cos(angle),
            y: cy + radius * Math.sin(angle),
        };
    };

    // Build the ordered counting breakdown
    const getBreakdown = () => {
        const parts = [];
        for (let i = 0; i < count - 1; i++) {
            parts.push(count - 1 - i);
        }
        return parts;
    };

    return (
        <div className="space-y-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-3">
                    <Users className="text-blue-500 w-8 h-8" /> 握手计数器
                </h3>
                <p className="text-slate-500 dark:text-slate-400">点击两只动物让它们握手，看看一共要握几次！</p>
            </div>

            {/* Count Selector */}
            <div className="flex items-center justify-center gap-4">
                <span className="text-sm font-bold text-slate-500">小动物数量：</span>
                <div className="flex gap-2">
                    {[3, 4, 5, 6].map(n => (
                        <button
                            key={n}
                            onClick={() => handleCountChange(n)}
                            className={`w-10 h-10 rounded-full text-sm font-bold transition-all ${count === n
                                    ? 'bg-blue-500 text-white shadow-md scale-110'
                                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                                }`}
                        >
                            {n}
                        </button>
                    ))}
                </div>
            </div>

            {/* Progress */}
            <div className="flex justify-center gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full text-sm font-bold text-blue-700 dark:text-blue-300">
                    🤝 已握手：{handshakes.length} / {totalExpected}
                </div>
                {isComplete && (
                    <div className="bg-green-100 dark:bg-green-900/20 px-4 py-2 rounded-full text-sm font-bold text-green-700 dark:text-green-300 animate-bounce">
                        <Trophy className="w-4 h-4 inline" /> 全部完成！
                    </div>
                )}
            </div>

            {/* Animal Circle with SVG connections */}
            <div className="relative mx-auto" style={{ width: 280, height: 280 }}>
                {/* SVG for handshake lines */}
                <svg className="absolute inset-0" width="280" height="280">
                    {handshakes.map(([a, b], idx) => {
                        const posA = getPosition(a, count);
                        const posB = getPosition(b, count);
                        return (
                            <line
                                key={idx}
                                x1={posA.x}
                                y1={posA.y}
                                x2={posB.x}
                                y2={posB.y}
                                stroke="rgb(99, 102, 241)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                opacity="0.6"
                            />
                        );
                    })}
                    {/* Selected animal indicator line */}
                    {selectedAnimal !== null && (
                        <circle
                            cx={getPosition(selectedAnimal, count).x}
                            cy={getPosition(selectedAnimal, count).y}
                            r="30"
                            fill="none"
                            stroke="rgb(99, 102, 241)"
                            strokeWidth="3"
                            strokeDasharray="6 3"
                            className="animate-pulse"
                        />
                    )}
                </svg>

                {/* Animal Buttons */}
                {Array.from({ length: count }).map((_, i) => {
                    const pos = getPosition(i, count);
                    const isSelected = selectedAnimal === i;
                    return (
                        <button
                            key={i}
                            onClick={() => handleAnimalClick(i)}
                            className={`absolute flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all z-10 ${isSelected
                                    ? 'bg-indigo-500 shadow-lg shadow-indigo-200 scale-125'
                                    : 'bg-white dark:bg-slate-700 shadow-md hover:scale-110 border-2 border-slate-200 dark:border-slate-600'
                                }`}
                            style={{
                                left: pos.x - 28,
                                top: pos.y - 28,
                            }}
                        >
                            <span className="text-2xl">{ANIMALS[i]}</span>
                        </button>
                    );
                })}

                {/* Center text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                        <p className="text-3xl font-bold text-indigo-600">{handshakes.length}</p>
                        <p className="text-xs text-slate-400">次握手</p>
                    </div>
                </div>
            </div>

            {/* Instruction */}
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                <MousePointer2 className="w-4 h-4" />
                {selectedAnimal !== null
                    ? `已选择 ${ANIMAL_NAMES[selectedAnimal]}，再点另一只完成握手！`
                    : '点击一只小动物开始握手吧！'
                }
            </div>

            {/* Handshake Log */}
            {handshakes.length > 0 && (
                <div className="bg-slate-50 dark:bg-slate-900/30 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                    <p className="text-sm font-bold text-slate-600 dark:text-slate-400 mb-2">📝 握手记录</p>
                    <div className="flex flex-wrap gap-2">
                        {handshakes.map(([a, b], i) => (
                            <span key={i} className="bg-white dark:bg-slate-700 px-3 py-1 rounded-full text-sm border border-indigo-100 dark:border-indigo-800 font-bold text-indigo-600 dark:text-indigo-300">
                                {ANIMALS[a]} 🤝 {ANIMALS[b]}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Formula */}
            <div className="flex justify-center">
                <button
                    onClick={() => setShowFormula(!showFormula)}
                    className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all ${showFormula ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 hover:bg-slate-200'
                        }`}
                >
                    {showFormula ? '隐藏规律' : '🔍 发现规律'}
                </button>
            </div>

            {showFormula && (
                <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-2xl border border-blue-200 dark:border-blue-800 space-y-3">
                    <p className="text-sm font-bold text-blue-800 dark:text-blue-300">📐 有序计数的秘密</p>
                    <div className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                        <p>让小动物们排好队，一个一个来握手：</p>
                        <div className="bg-white dark:bg-slate-800 p-3 rounded-lg font-mono text-sm space-y-1">
                            {getBreakdown().map((n, i) => (
                                <p key={i}>
                                    {ANIMALS[i]} {ANIMAL_NAMES[i]} 和剩下 <strong className="text-indigo-600">{n}</strong> 只握手
                                    （已经和前面的握过了，就不重复啦！）
                                </p>
                            ))}
                        </div>
                        <p className="font-bold text-blue-700 dark:text-blue-300 text-base">
                            总共 = {getBreakdown().join(' + ')} = <span className="text-xl text-indigo-600">{totalExpected}</span> 次！
                        </p>
                    </div>
                </div>
            )}

            {/* Controls */}
            <div className="flex justify-center">
                <button
                    onClick={reset}
                    className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors"
                >
                    <RotateCcw className="w-4 h-4" /> 重新来过
                </button>
            </div>

            {/* Tip */}
            <div className="flex items-start gap-2 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl">
                <HelpCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                    <strong>计数秘籍：</strong>让小动物按顺序「排队」握手。第一只和剩下所有的握完后，就退到一边休息。第二只再和剩下的握...一直到最后。这样就不会重复也不会遗漏！
                </p>
            </div>
        </div>
    );
};

export default HandshakeCounterLab;

import React, { useState, useCallback } from 'react';
import { RotateCcw } from 'lucide-react';

/*
  圆的探索实验室
  ─ 拖动半径滑块，实时显示周长和面积
  ─ 对比模式：两个圆叠放对比
*/
const PI = 3.14159265;

const CircleVisualizer = () => {
    const [r, setR] = useState(5);
    const maxR = 10;

    const c = (2 * PI * r).toFixed(2);
    const s = (PI * r * r).toFixed(2);

    // SVG dimensions
    const size = 220;
    const cx = size / 2;
    const cy = size / 2;
    const maxSvgR = (size / 2) - 10;
    const svgR = (r / maxR) * maxSvgR;

    return (
        <div className="space-y-4">
            {/* SVG Circle */}
            <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                    <svg width={size} height={size} className="drop-shadow-md">
                        {/* Circle fill */}
                        <circle cx={cx} cy={cy} r={svgR}
                            fill="rgba(99,102,241,0.15)"
                            stroke="rgba(99,102,241,0.8)"
                            strokeWidth="2.5"
                        />
                        {/* Radius line */}
                        <line x1={cx} y1={cy} x2={cx + svgR} y2={cy}
                            stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />
                        {/* Center dot */}
                        <circle cx={cx} cy={cy} r={4} fill="#ef4444" />
                        {/* Radius label */}
                        <text x={cx + svgR / 2} y={cy - 8}
                            fontSize="13" fontWeight="bold" fill="#ef4444" textAnchor="middle">
                            r = {r}
                        </text>
                        {/* Diameter label */}
                        <text x={cx} y={cy + svgR + 18}
                            fontSize="11" fill="#6366f1" textAnchor="middle">
                            d = {r * 2}
                        </text>
                    </svg>
                </div>

                {/* Stats */}
                <div className="flex-1 space-y-3 w-full">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-500">
                        <p className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">圆的周长 C</p>
                        <p className="font-mono text-sm text-slate-600 dark:text-slate-400">C = 2πr = 2 × 3.14 × {r}</p>
                        <p className="font-mono text-2xl font-bold text-blue-700 dark:text-blue-300 mt-1">{c}</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border-l-4 border-green-500">
                        <p className="text-xs font-bold text-green-600 dark:text-green-400 mb-1">圆的面积 S</p>
                        <p className="font-mono text-sm text-slate-600 dark:text-slate-400">S = πr² = 3.14 × {r}²= 3.14 × {r * r}</p>
                        <p className="font-mono text-2xl font-bold text-green-700 dark:text-green-300 mt-1">{s}</p>
                    </div>
                </div>
            </div>

            {/* Slider */}
            <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400 font-semibold">拖动调整半径 r</span>
                    <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full">
                        r = {r} cm
                    </span>
                </div>
                <input
                    type="range" min="1" max={maxR} step="1" value={r}
                    onChange={e => setR(Number(e.target.value))}
                    className="w-full accent-indigo-600 h-3 rounded-full cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-400">
                    <span>1 cm</span><span>{maxR} cm</span>
                </div>
            </div>

            {/* Key insight */}
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-3 border border-purple-200 dark:border-purple-700">
                <p className="text-sm text-purple-700 dark:text-purple-400">
                    💡 <strong>半径加倍</strong>时，周长也加倍（线性），但面积变为<strong>4倍</strong>（二次方）！
                    试试把r从5变到10验证一下。
                </p>
            </div>
        </div>
    );
};

// ── Quiz mode ──
const QUIZ_PROBLEMS = [
    { type: 'C', r: 5, d: null },
    { type: 'S', r: 4, d: null },
    { type: 'C', r: null, d: 10 },
    { type: 'S', r: 3, d: null },
    { type: 'C', r: 7, d: null },
    { type: 'S', r: null, d: 6 },
];

const CircleQuiz = () => {
    const [idx, setIdx] = useState(0);
    const [input, setInput] = useState('');
    const [feedback, setFeedback] = useState(null);
    const [score, setScore] = useState({ correct: 0, total: 0 });

    const prob = QUIZ_PROBLEMS[idx % QUIZ_PROBLEMS.length];
    const radius = prob.r ?? prob.d / 2;
    const correctAnswer = prob.type === 'C'
        ? (2 * 3.14 * radius).toFixed(2)
        : (3.14 * radius * radius).toFixed(2);
    const question = prob.type === 'C'
        ? `圆的${prob.r ? `半径 r = ${prob.r}` : `直径 d = ${prob.d}`}，求周长 C = ?`
        : `圆的${prob.r ? `半径 r = ${prob.r}` : `直径 d = ${prob.d}`}，求面积 S = ?`;

    const check = () => {
        const ok = Math.abs(parseFloat(input) - parseFloat(correctAnswer)) < 0.5;
        setFeedback(ok ? 'correct' : 'wrong');
        setScore(s => ({ correct: s.correct + (ok ? 1 : 0), total: s.total + 1 }));
    };

    const next = () => {
        setIdx(i => i + 1);
        setInput('');
        setFeedback(null);
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-slate-500">
                <span>得分：<b className="text-green-600">{score.correct}</b>/{score.total}</span>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-6 text-center border border-green-100 dark:border-green-800">
                <p className="text-slate-500 text-sm mb-1">（π ≈ 3.14）</p>
                <p className="font-bold text-slate-800 dark:text-white text-lg">{question}</p>
            </div>

            <div className="flex items-center gap-3">
                <span className="font-mono text-slate-600 dark:text-slate-300">{prob.type} =</span>
                <input type="number" step="0.01" value={input}
                    onChange={e => { setInput(e.target.value); setFeedback(null); }}
                    onKeyDown={e => e.key === 'Enter' && !feedback && input && check()}
                    disabled={!!feedback}
                    placeholder="输入数值"
                    className="flex-1 px-4 py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-mono focus:outline-none focus:border-indigo-500 disabled:opacity-70"
                />
                {!feedback
                    ? <button onClick={check} disabled={!input}
                        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white rounded-xl font-semibold text-sm">确认</button>
                    : <button onClick={next}
                        className="px-5 py-2.5 bg-slate-600 hover:bg-slate-700 text-white rounded-xl font-semibold text-sm">下一题</button>
                }
            </div>

            {feedback === 'correct' && (
                <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 rounded-xl text-green-700 dark:text-green-400 font-bold">
                    ✅ 正确！{prob.type === 'C' ? '周长' : '面积'} = {correctAnswer}
                </div>
            )}
            {feedback === 'wrong' && (
                <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded-xl">
                    <p className="text-red-600 dark:text-red-400 font-bold">❌ 再算一次~</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 font-mono">
                        {prob.type === 'C'
                            ? `C = 2 × 3.14 × ${radius} = ${correctAnswer}`
                            : `S = 3.14 × ${radius}² = 3.14 × ${radius * radius} = ${correctAnswer}`}
                    </p>
                </div>
            )}
        </div>
    );
};

// ── Root ──
const CircleLab = () => {
    const [tab, setTab] = useState('explore');
    return (
        <div className="space-y-6">
            <div className="flex gap-2 bg-slate-100 dark:bg-slate-900/50 p-1.5 rounded-xl">
                {[['explore', '🔵 拖动探索'], ['quiz', '🎯 计算练习']].map(([id, label]) => (
                    <button key={id} onClick={() => setTab(id)}
                        className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${tab === id
                            ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow'
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-700'}`}>
                        {label}
                    </button>
                ))}
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                {tab === 'explore' && (
                    <>
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">拖动探索：半径与面积</h3>
                        <p className="text-sm text-slate-500 mb-5">拖动滑块改变半径，观察周长和面积如何变化。</p>
                        <CircleVisualizer />
                    </>
                )}
                {tab === 'quiz' && (
                    <>
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">圆的计算练习</h3>
                        <p className="text-sm text-slate-500 mb-5">根据半径或直径计算周长/面积（π≈3.14，答案允许±0.5误差）。</p>
                        <CircleQuiz />
                    </>
                )}
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-4">
                <p className="text-sm font-bold text-amber-700 dark:text-amber-400 mb-1">⚠️ 圆的公式</p>
                <div className="text-sm text-slate-600 dark:text-slate-400 space-y-0.5 font-mono">
                    <p>d = 2r　（直径 = 2 × 半径）</p>
                    <p>C = 2πr = πd　（周长）</p>
                    <p>S = πr²　（面积，注意是r的平方！）</p>
                </div>
            </div>
        </div>
    );
};

export default CircleLab;

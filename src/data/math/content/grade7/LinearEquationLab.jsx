import React, { useState, useCallback } from 'react';
import { RotateCcw, ChevronRight, CheckCircle2, XCircle, Lightbulb, Play } from 'lucide-react';

/* ──────────────────────────────────────────
   1.  BALANCE SCALE VISUALIZER
   A visual metaphor: ax + b = c shown as a scale.
   User performs operations one by one.
────────────────────────────────────────── */
const BalanceScale = ({ left, right, balanced }) => {
    const tilt = left - right; // positive → left heavy
    const baseAngle = Math.max(-15, Math.min(15, tilt * 3));

    return (
        <div className="flex flex-col items-center select-none my-4">
            {/* Fulcrum + Beam */}
            <div className="relative w-64 h-16">
                {/* Beam */}
                <div
                    className="absolute left-1/2 top-1/2 w-56 h-2 -ml-28 -mt-1 rounded-full transition-transform duration-500"
                    style={{
                        background: balanced
                            ? 'linear-gradient(90deg,#22c55e,#16a34a)'
                            : 'linear-gradient(90deg,#6366f1,#818cf8)',
                        transform: `rotate(${baseAngle}deg)`,
                        transformOrigin: 'center',
                    }}
                />
                {/* Fulcrum */}
                <div className="absolute left-1/2 top-1/2 w-4 h-8 -ml-2 bg-slate-400 rounded-b-sm" style={{ top: '40%' }} />
                {/* Left pan */}
                <div
                    className="absolute left-2 flex flex-col items-center transition-all duration-500"
                    style={{ top: `calc(50% + ${baseAngle * 1.5}px)` }}
                >
                    <div className="w-14 h-1 bg-slate-400 rounded" />
                    <div className="w-16 bg-slate-100 dark:bg-slate-700 rounded-b-xl px-1 py-1 text-center text-xs font-mono border border-slate-300 dark:border-slate-600 min-h-[36px] flex items-center justify-center">
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold">{left}</span>
                    </div>
                </div>
                {/* Right pan */}
                <div
                    className="absolute right-2 flex flex-col items-center transition-all duration-500"
                    style={{ top: `calc(50% - ${baseAngle * 1.5}px)` }}
                >
                    <div className="w-14 h-1 bg-slate-400 rounded" />
                    <div className="w-16 bg-slate-100 dark:bg-slate-700 rounded-b-xl px-1 py-1 text-center text-xs font-mono border border-slate-300 dark:border-slate-600 min-h-[36px] flex items-center justify-center">
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">{right}</span>
                    </div>
                </div>
            </div>
            {balanced && (
                <div className="mt-2 text-green-600 dark:text-green-400 text-sm font-bold flex items-center gap-1 animate-bounce">
                    <CheckCircle2 className="w-4 h-4" /> 天平平衡！
                </div>
            )}
        </div>
    );
};

/* ──────────────────────────────────────────
   2.  STEP-BY-STEP SOLVER
   User picks an equation from presets.
   The solver walks through each step.
────────────────────────────────────────── */
const PRESETS = [
    {
        label: '2x + 3 = 7',
        steps: [
            { action: '移项（把常数 3 移到右边，变号）', eq: '2x = 7 − 3', note: '移项时符号改变 +3 → −3' },
            { action: '合并右侧常数', eq: '2x = 4', note: '7 − 3 = 4' },
            { action: '系数化1（两边 ÷ 2）', eq: 'x = 2', note: '4 ÷ 2 = 2', final: true },
        ],
        answer: 2,
    },
    {
        label: '3x − 5 = x + 1',
        steps: [
            { action: '移项（x 移左边，-5 移右边）', eq: '3x − x = 1 + 5', note: 'x 变 −x；−5 变 +5' },
            { action: '合并同类项', eq: '2x = 6', note: '3x−x=2x；1+5=6' },
            { action: '系数化1（两边 ÷ 2）', eq: 'x = 3', note: '6 ÷ 2 = 3', final: true },
        ],
        answer: 3,
    },
    {
        label: '2(x + 1) = 3x − 1',
        steps: [
            { action: '去括号（展开左侧）', eq: '2x + 2 = 3x − 1', note: '2×x=2x, 2×1=2' },
            { action: '移项（x 项左，常数右）', eq: '2x − 3x = −1 − 2', note: '3x 移左变 −3x；+2 移右变 −2' },
            { action: '合并同类项', eq: '−x = −3', note: '2x−3x=−x；−1−2=−3' },
            { action: '系数化1（两边 ÷ (−1)）', eq: 'x = 3', note: '−3÷(−1)=3', final: true },
        ],
        answer: 3,
    },
    {
        label: '(x−1)/2 = (2x+1)/3',
        steps: [
            { action: '去分母（两边 × 6，LCM of 2&3）', eq: '3(x−1) = 2(2x+1)', note: '6÷2=3；6÷3=2' },
            { action: '去括号', eq: '3x − 3 = 4x + 2', note: '分配律展开' },
            { action: '移项', eq: '3x − 4x = 2 + 3', note: '4x 移左，−3 移右' },
            { action: '合并同类项', eq: '−x = 5', note: '3x−4x=−x；2+3=5' },
            { action: '系数化1', eq: 'x = −5', note: '两边 ÷ (−1)', final: true },
        ],
        answer: -5,
    },
];

const StepSolver = () => {
    const [selectedIdx, setSelectedIdx] = useState(0);
    const [revealed, setRevealed] = useState(0); // how many steps shown

    const preset = PRESETS[selectedIdx];
    const allDone = revealed >= preset.steps.length;

    const next = () => setRevealed(r => Math.min(r + 1, preset.steps.length));
    const reset = () => setRevealed(0);

    const selectPreset = (i) => { setSelectedIdx(i); setRevealed(0); };

    // Balance scale values: simulate coeff on left = answer on right
    const scaleLeft = allDone ? preset.answer : '?';
    const scaleRight = allDone ? preset.answer : '?';
    const balanced = allDone;

    return (
        <div className="space-y-4">
            {/* Equation picker */}
            <div className="flex flex-wrap gap-2">
                {PRESETS.map((p, i) => (
                    <button
                        key={i}
                        onClick={() => selectPreset(i)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-mono border transition-all ${selectedIdx === i
                                ? 'bg-indigo-600 text-white border-indigo-600 shadow'
                                : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:border-indigo-400'
                            }`}
                    >
                        {p.label}
                    </button>
                ))}
            </div>

            {/* Current equation display */}
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl px-4 py-3 flex items-center gap-3">
                <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">方程</span>
                <span className="font-mono text-lg font-bold text-indigo-700 dark:text-indigo-300">
                    {revealed === 0 ? preset.label : preset.steps[Math.min(revealed, preset.steps.length) - 1].eq}
                </span>
            </div>

            {/* Balance scale */}
            <BalanceScale
                left={allDone ? `x = ${preset.answer}` : `x = ?`}
                right={allDone ? `x = ${preset.answer}` : `···`}
                balanced={balanced}
            />

            {/* Steps */}
            <div className="space-y-2">
                {preset.steps.slice(0, revealed).map((step, i) => (
                    <div
                        key={i}
                        className={`flex items-start gap-3 p-3 rounded-xl border transition-all ${step.final
                                ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                                : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700'
                            }`}
                    >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${step.final ? 'bg-green-500 text-white' : 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'}`}>
                            {step.final ? '✓' : i + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{step.action}</p>
                            <p className="font-mono text-base text-indigo-600 dark:text-indigo-400 mt-0.5">{step.eq}</p>
                            <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                                <Lightbulb className="w-3 h-3" /> {step.note}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3 pt-2">
                {!allDone ? (
                    <button
                        onClick={next}
                        className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold text-sm transition-all shadow"
                    >
                        <Play className="w-4 h-4" />
                        {revealed === 0 ? '开始推导' : '下一步'}
                        <ChevronRight className="w-4 h-4" />
                    </button>
                ) : (
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl font-semibold text-sm">
                        <CheckCircle2 className="w-4 h-4" />
                        解方程完成！答案：x = {preset.answer}
                    </div>
                )}
                <button
                    onClick={reset}
                    className="flex items-center gap-2 px-4 py-2 text-slate-500 border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl text-sm transition-all"
                >
                    <RotateCcw className="w-4 h-4" /> 重置
                </button>
            </div>
        </div>
    );
};

/* ──────────────────────────────────────────
   3.  QUIZ MODE
   Random ax + b = c. User inputs answer.
────────────────────────────────────────── */
const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProblem = () => {
    const a = randInt(1, 5);
    const x = randInt(-8, 8);
    const b = randInt(-10, 10);
    const c = a * x + b;
    return { a, b, c, x, label: `${a}x ${b >= 0 ? '+' : ''}${b} = ${c}` };
};

const QuizMode = () => {
    const [problem, setProblem] = useState(generateProblem);
    const [input, setInput] = useState('');
    const [feedback, setFeedback] = useState(null); // null | 'correct' | 'wrong'
    const [score, setScore] = useState({ correct: 0, total: 0 });

    const next = useCallback(() => {
        setProblem(generateProblem());
        setInput('');
        setFeedback(null);
    }, []);

    const check = () => {
        const val = parseInt(input, 10);
        const ok = val === problem.x;
        setFeedback(ok ? 'correct' : 'wrong');
        setScore(s => ({ correct: s.correct + (ok ? 1 : 0), total: s.total + 1 }));
    };

    return (
        <div className="space-y-4">
            {/* Score */}
            <div className="flex items-center gap-3">
                <div className="text-sm text-slate-600 dark:text-slate-400">
                    得分：<span className="font-bold text-green-600">{score.correct}</span>/{score.total}
                </div>
                {score.total > 0 && (
                    <div className="text-xs text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">
                        正确率 {Math.round((score.correct / score.total) * 100)}%
                    </div>
                )}
            </div>

            {/* Problem */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl p-6 text-center border border-indigo-100 dark:border-indigo-800">
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">解方程，求 x =</p>
                <p className="font-mono text-3xl font-bold text-indigo-700 dark:text-indigo-300">{problem.label}</p>
            </div>

            {/* Input */}
            <div className="flex items-center gap-3">
                <span className="text-slate-600 dark:text-slate-300 font-mono text-lg">x =</span>
                <input
                    type="number"
                    value={input}
                    onChange={e => { setInput(e.target.value); setFeedback(null); }}
                    onKeyDown={e => e.key === 'Enter' && !feedback && input !== '' && check()}
                    placeholder="输入答案"
                    disabled={!!feedback}
                    className="w-32 px-4 py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-mono text-lg text-center focus:outline-none focus:border-indigo-500 disabled:opacity-70 transition-all"
                />
                {!feedback ? (
                    <button
                        onClick={check}
                        disabled={input === ''}
                        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white rounded-xl font-semibold text-sm transition-all"
                    >
                        确认
                    </button>
                ) : (
                    <button
                        onClick={next}
                        className="px-5 py-2.5 bg-slate-700 hover:bg-slate-800 text-white rounded-xl font-semibold text-sm transition-all"
                    >
                        下一题
                    </button>
                )}
            </div>

            {/* Feedback */}
            {feedback === 'correct' && (
                <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl text-green-700 dark:text-green-400">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-bold">正确！👏 x = {problem.x}</span>
                </div>
            )}
            {feedback === 'wrong' && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl">
                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold mb-2">
                        <XCircle className="w-5 h-5" /> 再想想！
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        提示：先移项，把含 x 的项移左边，常数移右边，再系数化1。
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-mono">
                        {problem.a}x = {problem.c} − ({problem.b}) = {problem.c - problem.b}，x = {problem.x}
                    </p>
                </div>
            )}
        </div>
    );
};

/* ──────────────────────────────────────────
   4.  ROOT COMPONENT (tab-switched)
────────────────────────────────────────── */
const LinearEquationLab = () => {
    const [tab, setTab] = useState('solver');

    const tabs = [
        { id: 'solver', label: '🔍 逐步推导' },
        { id: 'quiz', label: '🎯 闯关练习' },
    ];

    return (
        <div className="space-y-6">
            {/* Tab Bar */}
            <div className="flex gap-2 bg-slate-100 dark:bg-slate-900/50 p-1.5 rounded-xl">
                {tabs.map(t => (
                    <button
                        key={t.id}
                        onClick={() => setTab(t.id)}
                        className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${tab === t.id
                                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow'
                                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                            }`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            {/* Panel */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                {tab === 'solver' && (
                    <>
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">逐步解方程演示</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">选择一个方程，点击"下一步"逐步推导，观察天平的变化。</p>
                        <StepSolver />
                    </>
                )}
                {tab === 'quiz' && (
                    <>
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">闯关练习模式</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">随机生成方程，输入 x 的值，看看你能连对多少题！</p>
                        <QuizMode />
                    </>
                )}
            </div>

            {/* Key reminder */}
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-4">
                <p className="text-sm font-bold text-amber-700 dark:text-amber-400 mb-1">⚠️ 解方程四步口诀</p>
                <ol className="text-sm text-slate-600 dark:text-slate-400 space-y-0.5 list-decimal list-inside">
                    <li>去分母（最小公倍数）</li>
                    <li>去括号（分配律）</li>
                    <li>移项变号（含 x 移左，常数移右）</li>
                    <li>系数化1（两边同除以系数）</li>
                </ol>
            </div>
        </div>
    );
};

export default LinearEquationLab;

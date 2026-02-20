import React, { useState, useCallback } from 'react';
import { CheckCircle2, XCircle, RotateCcw, Shuffle, Lightbulb } from 'lucide-react';

/*
  合并同类项练习器
  ─ Mode 1: 分类游戏  — 把项拖拽/点击分配到"可合并"/"不可合并"
  ─ Mode 2: 化简闯关  — 随机生成多项式，手动输入化简结果
*/

// ─── 1. CLASSIFIER GAME ─────────────────────────────
const PAIR_SETS = [
    { a: '3x²', b: '-5x²', same: true, reason: '字母相同（x），指数相同（2）✓' },
    { a: '2ab', b: '-3ab', same: true, reason: '字母相同（ab），指数相同（1）✓' },
    { a: '5x²', b: '5x', same: false, reason: 'x的指数不同（2 vs 1）✗' },
    { a: '3a', b: '3b', same: false, reason: '字母不同（a vs b）✗' },
    { a: '-7', b: '12', same: true, reason: '都是常数项，可以合并 ✓' },
    { a: 'x²y', b: 'xy²', same: false, reason: 'x和y的指数位置不同 ✗' },
    { a: '4mn', b: '-mn', same: true, reason: '字母相同（mn），指数相同（1）✓' },
    { a: '2x³', b: '-x³', same: true, reason: '字母相同（x），指数相同（3）✓' },
];

const ClassifierGame = () => {
    const [idx, setIdx] = useState(0);
    const [feedback, setFeedback] = useState(null);
    const [score, setScore] = useState({ correct: 0, total: 0 });
    const [revealed, setRevealed] = useState(false);

    const pair = PAIR_SETS[idx % PAIR_SETS.length];

    const answer = (val) => {
        const ok = val === pair.same;
        setFeedback(ok ? 'correct' : 'wrong');
        setScore(s => ({ correct: s.correct + (ok ? 1 : 0), total: s.total + 1 }));
        setRevealed(true);
    };

    const next = () => {
        setIdx(i => (i + 1) % PAIR_SETS.length);
        setFeedback(null);
        setRevealed(false);
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-slate-500">
                <span>得分：<b className="text-green-600">{score.correct}</b>/{score.total}</span>
                <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                    {idx + 1} / {PAIR_SETS.length} 组
                </span>
            </div>

            {/* Pair display */}
            <div className="flex items-center justify-center gap-8 py-8 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-2xl">
                <div className="text-3xl font-mono font-bold text-indigo-700 dark:text-indigo-300 bg-white dark:bg-slate-700 px-6 py-4 rounded-xl shadow">
                    {pair.a}
                </div>
                <div className="text-slate-400 text-2xl font-bold">和</div>
                <div className="text-3xl font-mono font-bold text-purple-700 dark:text-purple-300 bg-white dark:bg-slate-700 px-6 py-4 rounded-xl shadow">
                    {pair.b}
                </div>
            </div>

            <p className="text-center text-slate-600 dark:text-slate-400 font-semibold">它们是同类项吗？</p>

            {/* Buttons */}
            {!revealed ? (
                <div className="flex gap-4 justify-center">
                    <button onClick={() => answer(true)}
                        className="flex items-center gap-2 px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg transition-all shadow">
                        ✓ 是
                    </button>
                    <button onClick={() => answer(false)}
                        className="flex items-center gap-2 px-8 py-3 bg-red-400 hover:bg-red-500 text-white rounded-xl font-bold text-lg transition-all shadow">
                        ✗ 否
                    </button>
                </div>
            ) : (
                <div className="space-y-3">
                    <div className={`flex items-start gap-3 p-4 rounded-xl border ${feedback === 'correct'
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700'
                        : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700'}`}>
                        {feedback === 'correct'
                            ? <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            : <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        }
                        <div>
                            <p className={`font-bold ${feedback === 'correct' ? 'text-green-700 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                                {feedback === 'correct' ? '正确！' : `实际上：${pair.same ? '是' : '不是'}同类项`}
                            </p>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 flex items-center gap-1">
                                <Lightbulb className="w-3.5 h-3.5" /> {pair.reason}
                            </p>
                        </div>
                    </div>
                    <button onClick={next}
                        className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all">
                        下一题 →
                    </button>
                </div>
            )}
        </div>
    );
};

// ─── 2. SIMPLIFY QUIZ ────────────────────────────────
const SIMPLIFY_PROBLEMS = [
    { expr: '3x + 2x', answer: '5x', hint: '同类项系数相加：(3+2)x' },
    { expr: '5a - 2a', answer: '3a', hint: '同类项系数相减：(5-2)a' },
    { expr: '2x² + x²', answer: '3x²', hint: 'x²的系数：2+1=3' },
    { expr: '4a + 3b - a + 2b', answer: 'a + 5b', hint: '先合并a：(4-1)=3？不，(4a-a)=3a；再合并b：(3+2)=5b；等等检查：4-1=3，答案应该是3a+5b' },
    { expr: '3x + 2y - x - y', answer: '2x + y', hint: '合并x：(3-1)x=2x；合并y：(2-1)y=y' },
    { expr: '2a² - 3a + a² + 5a', answer: '3a² + 2a', hint: 'a²: (2+1)=3；a: (-3+5)=2' },
];

// Fix one problem
const FIXED_PROBLEMS = [
    { expr: '3x + 2x', answer: '5x', hint: '同类项系数相加：(3+2)x = 5x' },
    { expr: '5a - 2a', answer: '3a', hint: '同类项系数相减：(5-2)a = 3a' },
    { expr: '2x² + x²', answer: '3x²', hint: 'x²的系数：2+1=3，答案 3x²' },
    { expr: '4a + 3b - a + 2b', answer: '3a + 5b', hint: '合并a：(4-1)=3；合并b：(3+2)=5' },
    { expr: '3x + 2y - x - y', answer: '2x + y', hint: '合并x：3-1=2；合并y：2-1=1' },
    { expr: '2a² - 3a + a² + 5a', answer: '3a² + 2a', hint: 'a²: 2+1=3；a: -3+5=2' },
];

const SimplifyQuiz = () => {
    const [idx, setIdx] = useState(0);
    const [input, setInput] = useState('');
    const [feedback, setFeedback] = useState(null);
    const [showHint, setShowHint] = useState(false);
    const [score, setScore] = useState({ correct: 0, total: 0 });

    const prob = FIXED_PROBLEMS[idx];

    const check = () => {
        // Normalize: strip spaces
        const norm = s => s.replace(/\s/g, '').toLowerCase();
        const ok = norm(input) === norm(prob.answer);
        setFeedback(ok ? 'correct' : 'wrong');
        setScore(s => ({ correct: s.correct + (ok ? 1 : 0), total: s.total + 1 }));
    };

    const next = () => {
        setIdx(i => (i + 1) % FIXED_PROBLEMS.length);
        setInput('');
        setFeedback(null);
        setShowHint(false);
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-slate-500">
                <span>得分：<b className="text-green-600">{score.correct}</b>/{score.total}</span>
                <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                    第 {idx + 1} / {FIXED_PROBLEMS.length} 题
                </span>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl p-6 text-center border border-purple-100 dark:border-purple-800">
                <p className="text-slate-500 text-sm mb-2">合并同类项，化简：</p>
                <p className="font-mono text-3xl font-bold text-indigo-700 dark:text-indigo-300">{prob.expr}</p>
            </div>

            <div className="flex items-center gap-3">
                <span className="text-slate-600 dark:text-slate-300 font-mono">=</span>
                <input
                    type="text"
                    value={input}
                    onChange={e => { setInput(e.target.value); setFeedback(null); }}
                    onKeyDown={e => e.key === 'Enter' && !feedback && input && check()}
                    placeholder="输入化简结果"
                    disabled={!!feedback}
                    className="flex-1 px-4 py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-mono focus:outline-none focus:border-indigo-500 disabled:opacity-70 transition-all"
                />
                {!feedback
                    ? <button onClick={check} disabled={!input}
                        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white rounded-xl font-semibold text-sm transition-all">
                        确认
                    </button>
                    : <button onClick={next}
                        className="px-5 py-2.5 bg-slate-600 hover:bg-slate-700 text-white rounded-xl font-semibold text-sm transition-all">
                        下一题
                    </button>
                }
            </div>

            {!feedback && (
                <button onClick={() => setShowHint(h => !h)}
                    className="text-xs text-indigo-500 hover:text-indigo-700 flex items-center gap-1">
                    <Lightbulb className="w-3.5 h-3.5" /> {showHint ? '隐藏提示' : '查看提示'}
                </button>
            )}
            {showHint && !feedback && (
                <div className="text-sm text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl px-4 py-2">
                    💡 {prob.hint}
                </div>
            )}

            {feedback === 'correct' && (
                <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 rounded-xl text-green-700 dark:text-green-400">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-bold">正确！答案就是 {prob.answer} 👏</span>
                </div>
            )}
            {feedback === 'wrong' && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded-xl">
                    <p className="text-red-600 dark:text-red-400 font-bold flex items-center gap-2"><XCircle className="w-4 h-4" /> 再想想！</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">💡 {prob.hint}</p>
                    <p className="text-sm font-mono text-indigo-600 dark:text-indigo-400 mt-1">正确答案：{prob.answer}</p>
                </div>
            )}
        </div>
    );
};

// ─── ROOT ────────────────────────────────────────────
const AlgebraicOpsLab = () => {
    const [tab, setTab] = useState('classify');
    return (
        <div className="space-y-6">
            <div className="flex gap-2 bg-slate-100 dark:bg-slate-900/50 p-1.5 rounded-xl">
                {[['classify', '🔍 同类项辨别'], ['simplify', '✏️ 化简练习']].map(([id, label]) => (
                    <button key={id} onClick={() => setTab(id)}
                        className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${tab === id
                            ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow'
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-700'}`}>
                        {label}
                    </button>
                ))}
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                {tab === 'classify' && (
                    <>
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">同类项辨别器</h3>
                        <p className="text-sm text-slate-500 mb-4">判断每对项是否为同类项，强化「字母相同+指数相同」的判断标准。</p>
                        <ClassifierGame />
                    </>
                )}
                {tab === 'simplify' && (
                    <>
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">化简闯关</h3>
                        <p className="text-sm text-slate-500 mb-4">输入化简结果（如 <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">3a + 2b</code>），注意书写格式。</p>
                        <SimplifyQuiz />
                    </>
                )}
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-4">
                <p className="text-sm font-bold text-amber-700 dark:text-amber-400 mb-1">⚠️ 同类项两要素</p>
                <ol className="text-sm text-slate-600 dark:text-slate-400 space-y-0.5 list-decimal list-inside">
                    <li>所含<strong>字母</strong>完全相同</li>
                    <li>相同字母的<strong>指数</strong>也完全相同</li>
                </ol>
                <p className="text-xs text-slate-400 mt-2">系数不影响是否为同类项！3x² 和 -100x² 都是同类项。</p>
            </div>
        </div>
    );
};

export default AlgebraicOpsLab;

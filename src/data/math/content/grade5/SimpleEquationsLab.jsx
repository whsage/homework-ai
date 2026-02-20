import React, { useState, useCallback } from 'react';
import { RotateCcw, Play, ChevronRight, CheckCircle2, XCircle, Lightbulb } from 'lucide-react';

/*
  简易方程互动实验室（小学五年级版）
  ─ 天平可视化（比中学版更直观：显示具体苹果🍎数量）
  ─ 填空闯关（ax = b 和 x + b = c 形式）
*/

// ─── BALANCE SCALE ──────────────────────────────────
const APPLE = '🍎';

const BalanceLab = () => {
    const [boxes, setBoxes] = useState(2);   // boxes on left (each contains ?apples)
    const [total, setTotal] = useState(6);   // total apples on right
    const [revealed, setRevealed] = useState(false);

    const answer = total / boxes;
    const isWhole = Number.isInteger(answer) && answer > 0;

    const randomize = () => {
        const b = Math.floor(Math.random() * 4) + 1; // 1~4 boxes
        const x = Math.floor(Math.random() * 6) + 1; // 1~6 apples each
        setBoxes(b);
        setTotal(b * x);
        setRevealed(false);
    };

    return (
        <div className="space-y-5">
            <p className="text-sm text-slate-600 dark:text-slate-400">
                天平左边有 <b className="text-indigo-600">{boxes} 个礼盒</b>，每个礼盒里有相同数量的苹果 🍎。
                右边摆了 <b className="text-green-600">{total} 个苹果</b> 恰好平衡。
                <br />设每个礼盒有 <b className="text-red-500">x</b> 个苹果，方程为：
                <code className="ml-2 px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded font-bold text-indigo-700 dark:text-indigo-300">
                    {boxes}x = {total}
                </code>
            </p>

            {/* Balance visual */}
            <div className="flex items-end justify-center gap-10 py-6 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-2xl">
                {/* Left pan */}
                <div className="flex flex-col items-center gap-2">
                    <div className="flex gap-1 flex-wrap justify-center max-w-[140px]">
                        {Array.from({ length: boxes }).map((_, i) => (
                            <div key={i} className="w-10 h-10 bg-indigo-200 dark:bg-indigo-800 border-2 border-indigo-400 rounded-lg flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold text-sm">
                                {revealed ? `${answer}🍎` : '?'}
                            </div>
                        ))}
                    </div>
                    <div className="w-28 h-2 bg-amber-400 rounded" />
                    <div className="text-xs text-slate-500">{boxes} 个礼盒</div>
                </div>

                {/* Scale */}
                <div className="text-3xl">⚖️</div>

                {/* Right pan */}
                <div className="flex flex-col items-center gap-2">
                    <div className="flex gap-0.5 flex-wrap justify-center max-w-[140px] text-xl">
                        {Array.from({ length: Math.min(total, 12) }).map((_, i) => (
                            <span key={i}>{APPLE}</span>
                        ))}
                        {total > 12 && <span className="text-sm text-slate-500 self-center">…共{total}个</span>}
                    </div>
                    <div className="w-28 h-2 bg-amber-400 rounded" />
                    <div className="text-xs text-slate-500">{total} 个苹果</div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
                {!revealed ? (
                    <button onClick={() => setRevealed(true)}
                        className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold text-sm shadow transition-all">
                        <Play className="w-4 h-4" /> 揭晓答案
                    </button>
                ) : (
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-xl text-green-700 dark:text-green-400 font-semibold text-sm">
                        <CheckCircle2 className="w-4 h-4" />
                        x = {total} ÷ {boxes} = <b className="text-lg ml-1">{answer}</b>
                    </div>
                )}
                <button onClick={randomize}
                    className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl text-sm transition-all">
                    <RotateCcw className="w-4 h-4" /> 换题
                </button>
            </div>

            <div className="text-sm text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl px-4 py-2">
                💡 解法：方程两边同除以 {boxes}，得 x = {total} ÷ {boxes} = {answer}
            </div>
        </div>
    );
};

// ─── QUIZ ──────────────────────────────────────────
const randInt = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;

const genProblem = () => {
    const type = Math.random() > 0.5 ? 'mult' : 'add';
    if (type === 'mult') {
        const a = randInt(2, 9);
        const x = randInt(1, 10);
        return { label: `${a}x = ${a * x}`, answer: x, hint: `x = ${a * x} ÷ ${a} = ${x}` };
    } else {
        const b = randInt(1, 20);
        const x = randInt(1, 15);
        const c = x + b;
        return { label: `x + ${b} = ${c}`, answer: x, hint: `x = ${c} − ${b} = ${x}` };
    }
};

const EquationQuiz = () => {
    const [prob, setProb] = useState(genProblem);
    const [input, setInput] = useState('');
    const [feedback, setFeedback] = useState(null);
    const [score, setScore] = useState({ correct: 0, total: 0 });

    const check = () => {
        const ok = parseInt(input, 10) === prob.answer;
        setFeedback(ok ? 'correct' : 'wrong');
        setScore(s => ({ correct: s.correct + (ok ? 1 : 0), total: s.total + 1 }));
    };

    const next = () => { setProb(genProblem()); setInput(''); setFeedback(null); };

    return (
        <div className="space-y-4">
            <div className="text-sm text-slate-500">
                得分：<b className="text-green-600">{score.correct}</b>/{score.total}
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl p-6 text-center border border-indigo-100 dark:border-indigo-800">
                <p className="text-slate-500 text-sm">求 x =</p>
                <p className="font-mono text-3xl font-bold text-indigo-700 dark:text-indigo-300 mt-1">{prob.label}</p>
            </div>

            <div className="flex items-center gap-3">
                <span className="font-mono text-slate-600 dark:text-slate-300">x =</span>
                <input type="number" value={input}
                    onChange={e => { setInput(e.target.value); setFeedback(null); }}
                    onKeyDown={e => e.key === 'Enter' && !feedback && input && check()}
                    disabled={!!feedback}
                    placeholder="输入答案"
                    className="w-28 px-4 py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-mono text-lg text-center focus:outline-none focus:border-indigo-500 disabled:opacity-70"
                />
                {!feedback
                    ? <button onClick={check} disabled={!input}
                        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white rounded-xl font-semibold text-sm">确认</button>
                    : <button onClick={next}
                        className="px-5 py-2.5 bg-slate-600 hover:bg-slate-700 text-white rounded-xl font-semibold text-sm">下一题</button>
                }
            </div>

            {feedback === 'correct' && (
                <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 rounded-xl text-green-700 dark:text-green-400 font-bold">
                    <CheckCircle2 className="w-5 h-5" /> 正确！x = {prob.answer} 🎉
                </div>
            )}
            {feedback === 'wrong' && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded-xl">
                    <p className="text-red-600 dark:text-red-400 font-bold flex items-center gap-2"><XCircle className="w-4 h-4" /> 再想想！</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 flex items-center gap-1">
                        <Lightbulb className="w-3.5 h-3.5" /> 解法：{prob.hint}
                    </p>
                </div>
            )}
        </div>
    );
};

// ─── Root ──────────────────────────────────────────
const SimpleEquationsLab = () => {
    const [tab, setTab] = useState('balance');
    return (
        <div className="space-y-6">
            <div className="flex gap-2 bg-slate-100 dark:bg-slate-900/50 p-1.5 rounded-xl">
                {[['balance', '⚖️ 天平模型'], ['quiz', '🎯 闯关练习']].map(([id, label]) => (
                    <button key={id} onClick={() => setTab(id)}
                        className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${tab === id
                            ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow'
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-700'}`}>
                        {label}
                    </button>
                ))}
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                {tab === 'balance' && (
                    <>
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">天平模型</h3>
                        <p className="text-sm text-slate-500 mb-5">把方程想象成天平，方程两边同时操作，天平保持平衡！</p>
                        <BalanceLab />
                    </>
                )}
                {tab === 'quiz' && (
                    <>
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">方程闯关</h3>
                        <p className="text-sm text-slate-500 mb-5">解简单的一步方程（乘法型 ax=b 或加法型 x+b=c）。</p>
                        <EquationQuiz />
                    </>
                )}
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-4">
                <p className="text-sm font-bold text-amber-700 dark:text-amber-400 mb-1">⚠️ 解方程的原则</p>
                <ol className="text-sm text-slate-600 dark:text-slate-400 space-y-0.5 list-decimal list-inside">
                    <li>方程两边可以<b>同时加/减</b>同一个数，等式不变</li>
                    <li>方程两边可以<b>同时乘/除</b>同一个数（≠0），等式不变</li>
                    <li>目标：让 x 单独站在等号一边！</li>
                </ol>
            </div>
        </div>
    );
};

export default SimpleEquationsLab;

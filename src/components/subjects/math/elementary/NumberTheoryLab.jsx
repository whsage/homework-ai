import React, { useState } from 'react';
import { Brain, CheckCircle2, XCircle, Info, Zap, Terminal } from 'lucide-react';

const NumberTheoryLab = () => {
    const [testNum, setTestNum] = useState(123);

    const checkDivisibility = (num, divisor) => {
        if (divisor === 2) {
            const lastDigit = num % 10;
            return {
                ok: lastDigit % 2 === 0,
                logic: `末位数字是 ${lastDigit}，${lastDigit % 2 === 0 ? '是偶数' : '不是偶数'}`
            };
        }
        if (divisor === 3) {
            const digits = num.toString().split('').map(Number);
            const sum = digits.reduce((a, b) => a + b, 0);
            return {
                ok: sum % 3 === 0,
                logic: `各数位之和：${digits.join(' + ')} = ${sum}，${sum} ${sum % 3 === 0 ? '能' : '不能'}被 3 整除`
            };
        }
        if (divisor === 5) {
            const lastDigit = num % 10;
            return {
                ok: lastDigit === 0 || lastDigit === 5,
                logic: `末位数字是 ${lastDigit}，${lastDigit === 0 || lastDigit === 5 ? '是 0 或 5' : '既不是 0 也不是 5'}`
            };
        }
        if (divisor === 9) {
            const digits = num.toString().split('').map(Number);
            const sum = digits.reduce((a, b) => a + b, 0);
            return {
                ok: sum % 9 === 0,
                logic: `各数位之和：${digits.join(' + ')} = ${sum}，${sum} ${sum % 9 === 0 ? '能' : '不能'}被 9 整除`
            };
        }
        return { ok: false, logic: '' };
    };

    return (
        <div className="p-6 bg-slate-900 text-slate-100 rounded-[3rem] border-4 border-slate-800 shadow-2xl">
            <div className="max-w-3xl mx-auto space-y-8">
                {/* Input Section */}
                <div className="text-center space-y-4">
                    <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center justify-center gap-3">
                        <Terminal className="w-8 h-8 text-emerald-400" />
                        整除密码破译机
                    </h3>
                    <div className="flex justify-center flex-col items-center gap-2">
                        <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">输入数字进行破解</span>
                        <input
                            type="number"
                            value={testNum}
                            onChange={(e) => setTestNum(Math.max(1, parseInt(e.target.value) || 1))}
                            className="w-64 h-20 text-5xl font-mono font-black text-center bg-slate-800 border-2 border-emerald-500/50 rounded-2xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 text-emerald-400 outline-none transition-all"
                        />
                    </div>
                </div>

                {/* Dashboard */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[2, 3, 5, 9].map(d => {
                        const result = checkDivisibility(testNum, d);
                        return (
                            <div
                                key={d}
                                className={`
                                    p-6 rounded-3xl border-2 transition-all duration-500 group relative overflow-hidden
                                    ${result.ok ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-slate-800/50 border-slate-700'}
                                `}
                            >
                                <div className="flex items-center justify-between mb-4 relative z-10">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-2xl ${result.ok ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-slate-400'}`}>
                                            {d}
                                        </div>
                                        <div>
                                            <h4 className="font-bold">被 {d} 整除</h4>
                                            <p className="text-[10px] opacity-60 font-mono">DIVISOR CODE: {d}</p>
                                        </div>
                                    </div>
                                    {result.ok ? (
                                        <CheckCircle2 className="w-8 h-8 text-emerald-400 animate-pulse" />
                                    ) : (
                                        <XCircle className="w-8 h-8 text-slate-600" />
                                    )}
                                </div>

                                <div className="space-y-2 relative z-10">
                                    <div className="flex items-start gap-2 text-xs">
                                        <Zap className={`w-4 h-4 mt-0.5 ${result.ok ? 'text-emerald-400' : 'text-slate-500'}`} />
                                        <span className={result.ok ? 'text-emerald-200' : 'text-slate-400'}>{result.logic}</span>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-slate-700/50">
                                        <p className="text-[10px] text-slate-500 italic">
                                            {d === 2 && "💡 偶数必能被 2 整除。"}
                                            {d === 3 && "💡 数位和算法也叫‘缩骨功’。"}
                                            {d === 5 && "💡 看看它是不是以 0 或 5 结尾？"}
                                            {d === 9 && "💡 数位和如果能被 9 整除，大数也一定行。"}
                                        </p>
                                    </div>
                                </div>

                                {/* Decorative Background Elements */}
                                {result.ok && (
                                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all"></div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Secret Tip */}
                <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl flex items-center gap-4">
                    <div className="p-3 bg-emerald-500/20 rounded-xl">
                        <Brain className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                        <h5 className="text-sm font-bold text-emerald-400 tracking-tight">神探锦囊：混合判别</h5>
                        <p className="text-xs text-slate-400">如果一个数能被 {testNum % 6 === 0 ? '✔️' : '❌'} 2 和 3 同时整除，那它一定能被 6 整除！</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NumberTheoryLab;

import { useState } from 'react';
import { Eye, EyeOff, CheckCircle } from 'lucide-react';

const PracticeProblem = ({ id, type, question, options, answer, explanation }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-100 dark:border-slate-700">
            <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-700 dark:text-indigo-400 font-bold flex-shrink-0">
                    {id}
                </div>
                <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
                        {question}
                    </h4>

                    {type === 'choice' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            {options.map((opt) => (
                                <div key={opt.value} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer">
                                    <div className="w-6 h-6 rounded-full border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center text-xs font-bold text-slate-500">
                                        {opt.label}
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300">{opt.value}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="mt-6">
                        <button
                            onClick={() => setShowAnswer(!showAnswer)}
                            className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-semibold hover:text-indigo-700 transition-colors"
                        >
                            {showAnswer ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            {showAnswer ? '隐藏解析' : '查看答案与解析'}
                        </button>

                        {showAnswer && (
                            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800 animate-in fade-in slide-in-from-top-2 duration-300">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-green-700 dark:text-green-400 mb-1">
                                            正确答案：{answer}
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                                            {explanation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PracticeProblem;

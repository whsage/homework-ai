import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircle, XCircle } from 'lucide-react';
import { useRewards } from '../../../context/RewardContext';

const PracticeProblem = ({ id, type, question, options, answer, explanation, topicId: propTopicId }) => {
    const params = useParams();
    const topicId = propTopicId || params.topicId || 'unknown';
    const [selectedOption, setSelectedOption] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const { recordAnswer } = useRewards();

    const handleOptionClick = (opt) => {
        if (submitted) return;
        const correct = opt.label === answer;
        setSelectedOption(opt.label);
        setIsCorrect(correct);
        setSubmitted(true);
        // Record answer in reward system
        recordAnswer(topicId, correct);
    };

    const getOptionStyle = (opt) => {
        const base = 'flex items-center gap-3 p-3 rounded-lg border-2 transition-all duration-300';

        if (submitted) {
            if (opt.label === answer) {
                return `${base} border-green-400 bg-green-50 dark:bg-green-900/20 ring-2 ring-green-400 cursor-default`;
            }
            if (opt.label === selectedOption && !isCorrect) {
                return `${base} border-red-400 bg-red-50 dark:bg-red-900/20 ring-2 ring-red-400 cursor-default`;
            }
            return `${base} border-slate-200 dark:border-slate-700 opacity-50 cursor-default`;
        }

        return `${base} border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:border-indigo-300 cursor-pointer hover:shadow-md`;
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-100 dark:border-slate-700">
            <div className="flex items-start gap-4">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold flex-shrink-0 ${submitted
                    ? isCorrect
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                    : 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400'
                    }`}>
                    {submitted ? (isCorrect ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />) : id}
                </div>
                <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
                        {question}
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                        {options.map((opt) => (
                            <div
                                key={opt.value}
                                onClick={() => handleOptionClick(opt)}
                                className={getOptionStyle(opt)}
                            >
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${submitted && opt.label === answer
                                    ? 'border-green-500 bg-green-500 text-white'
                                    : submitted && opt.label === selectedOption && !isCorrect
                                        ? 'border-red-500 bg-red-500 text-white'
                                        : 'border-slate-300 dark:border-slate-600 text-slate-500'
                                    }`}>
                                    {submitted && opt.label === answer ? '✓' : submitted && opt.label === selectedOption && !isCorrect ? '✕' : opt.label}
                                </div>
                                <span className="text-slate-700 dark:text-slate-300">{opt.value}</span>
                            </div>
                        ))}
                    </div>

                    {/* 判题结果 + 答案解析（点击选项后立即显示） */}
                    {submitted && (
                        <div className={`mt-2 p-4 rounded-xl ${isCorrect
                            ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                            : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
                            }`}>
                            <p className={`font-bold mb-2 flex items-center gap-2 ${isCorrect
                                ? 'text-green-700 dark:text-green-400'
                                : 'text-red-700 dark:text-red-400'
                                }`}>
                                {isCorrect ? (
                                    <><CheckCircle className="w-4 h-4" /> 答对啦！真棒！+⭐</>
                                ) : (
                                    <><XCircle className="w-4 h-4" /> 不太对哦，正确答案是 {answer}</>
                                )}
                            </p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                {explanation}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PracticeProblem;

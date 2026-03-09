import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Eye, EyeOff, CheckCircle, XCircle, Star } from 'lucide-react';
import { useRewards } from '../../../context/RewardContext';

const PracticeProblem = ({ id, type, question, options, answer, explanation, topicId: propTopicId }) => {
    const params = useParams();
    const topicId = propTopicId || params.topicId || 'unknown';
    const [selectedOption, setSelectedOption] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const { recordAnswer } = useRewards();

    const handleOptionClick = (opt) => {
        if (submitted) return;
        setSelectedOption(opt.label);
    };

    const handleSubmit = () => {
        if (!selectedOption || submitted) return;
        const correct = selectedOption === answer;
        setIsCorrect(correct);
        setSubmitted(true);
        setShowAnswer(true);
        // Record answer in reward system
        recordAnswer(topicId, correct);
    };

    const handleShowAnswer = () => {
        if (!submitted) {
            // Just viewing answer without attempting = no reward tracking
            setShowAnswer(!showAnswer);
        } else {
            setShowAnswer(!showAnswer);
        }
    };

    const getOptionStyle = (opt) => {
        const base = 'flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 cursor-pointer';

        if (submitted) {
            if (opt.label === answer) {
                return `${base} border-green-400 bg-green-50 dark:bg-green-900/20 ring-2 ring-green-400`;
            }
            if (opt.label === selectedOption && !isCorrect) {
                return `${base} border-red-400 bg-red-50 dark:bg-red-900/20 ring-2 ring-red-400`;
            }
            return `${base} border-slate-200 dark:border-slate-700 opacity-50`;
        }

        if (opt.label === selectedOption) {
            return `${base} border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 ring-2 ring-indigo-400 shadow-sm`;
        }

        return `${base} border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:border-indigo-300`;
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

                    {type === 'choice' && (
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
                                            : opt.label === selectedOption
                                                ? 'border-indigo-500 bg-indigo-500 text-white'
                                                : 'border-slate-300 dark:border-slate-600 text-slate-500'
                                        }`}>
                                        {submitted && opt.label === answer ? '✓' : submitted && opt.label === selectedOption && !isCorrect ? '✕' : opt.label}
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300">{opt.value}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Submit / Result Area */}
                    {!submitted && selectedOption && (
                        <button
                            onClick={handleSubmit}
                            className="mb-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm transition-colors shadow-md flex items-center gap-2"
                        >
                            <Star className="w-4 h-4" /> 提交答案
                        </button>
                    )}

                    {submitted && (
                        <div className={`mb-4 px-4 py-2 rounded-xl text-sm font-bold inline-flex items-center gap-2 ${isCorrect
                            ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                            : 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                            }`}>
                            {isCorrect ? (
                                <><CheckCircle className="w-4 h-4" /> 回答正确！+⭐</>
                            ) : (
                                <><XCircle className="w-4 h-4" /> 再想想！正确答案是 {answer}</>
                            )}
                        </div>
                    )}

                    <div className="mt-4">
                        <button
                            onClick={handleShowAnswer}
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

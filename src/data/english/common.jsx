import React, { useState } from 'react';
import {
    Lightbulb, Target, Clock, Star, Brain, BookOpen, CheckCircle2,
    PenTool, Sparkles, Eye, MessageCircle
} from 'lucide-react';

export const Icons = {
    Lightbulb, Target, Clock, Star, Brain, BookOpen, CheckCircle2,
    PenTool, Sparkles, Eye, MessageCircle
};

export { React };

/**
 * 通用选择题练习组件
 */
export const PracticeProblem = ({ id, type = 'choice', question, options, answer, explanation }) => {
    const [selected, setSelected] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);

    const handleSelect = (label) => {
        if (showAnswer) return;
        setSelected(label);
        setShowAnswer(true);
    };

    const isCorrect = selected === answer;

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
            <p className="font-bold text-slate-800 dark:text-white mb-4 text-lg">{question}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {options.map((opt) => {
                    const isThis = selected === opt.label;
                    const isAnswer = opt.label === answer;
                    let borderColor = 'border-slate-200 dark:border-slate-600 hover:border-amber-400';
                    if (showAnswer) {
                        if (isAnswer) borderColor = 'border-green-500 bg-green-50 dark:bg-green-900/20';
                        else if (isThis && !isCorrect) borderColor = 'border-red-500 bg-red-50 dark:bg-red-900/20';
                        else borderColor = 'border-slate-200 dark:border-slate-600 opacity-60';
                    }
                    return (
                        <button
                            key={opt.label}
                            onClick={() => handleSelect(opt.label)}
                            className={`text-left p-3 rounded-xl border-2 transition-all ${borderColor} ${!showAnswer ? 'cursor-pointer hover:shadow-md' : 'cursor-default'}`}
                        >
                            <span className="font-bold text-amber-600 dark:text-amber-400 mr-2">{opt.label}.</span>
                            <span className="text-slate-700 dark:text-slate-300">{opt.value}</span>
                        </button>
                    );
                })}
            </div>
            {showAnswer && (
                <div className={`mt-4 p-4 rounded-xl ${isCorrect ? 'bg-green-50 dark:bg-green-900/20 border border-green-200' : 'bg-red-50 dark:bg-red-900/20 border border-red-200'}`}>
                    <p className={`font-bold mb-1 ${isCorrect ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                        {isCorrect ? '✅ Correct! 答对了！' : `❌ Not quite. 正确答案是 ${answer}`}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{explanation}</p>
                </div>
            )}
        </div>
    );
};

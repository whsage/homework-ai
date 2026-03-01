import React, { useState, useCallback } from 'react';
import { Building2, CheckCircle, XCircle, RotateCcw, ChevronRight, Sparkles } from 'lucide-react';

const clauseData = {
    object: {
        title: '🧩 宾语从句建筑师',
        intro: '选择正确的引导词，将从句"安装"到主句中！注意：从句必须用陈述语序。',
        questions: [
            { main: 'I know', clause: 'you are right', options: ['that', 'what', 'if'], answer: 'that', full: 'I know that you are right.', tip: '陈述句作宾语从句，用 that 引导（可省略）。' },
            { main: 'I wonder', clause: 'she will come', options: ['that', 'if/whether', 'what'], answer: 'if/whether', full: 'I wonder if/whether she will come.', tip: '表示"是否"用 if 或 whether，原句是一般疑问句。' },
            { main: 'Tell me', clause: 'he lives', options: ['where', 'that', 'if'], answer: 'where', full: 'Tell me where he lives.', tip: '原句是 Where does he live?（他住在哪），要用 where 引导，且变为陈述语序。' },
            { main: 'I don\'t know', clause: 'his name is', options: ['what', 'that', 'how'], answer: 'what', full: 'I don\'t know what his name is.', tip: '原句为 What is his name?（他叫什么），引导词用 what，从句改为陈述语序。' },
            { main: 'Can you tell me', clause: 'the post office is', options: ['where', 'what', 'if'], answer: 'where', full: 'Can you tell me where the post office is?', tip: '原句 Where is the post office? 用 where 引导，注意从句中 the post office(主) + is(谓) 是陈述语序。' },
            { main: 'He asked me', clause: 'I liked reading', options: ['if/whether', 'that', 'what'], answer: 'if/whether', full: 'He asked me if/whether I liked reading.', tip: '原句是一般疑问句(Do you like reading?)，用 if/whether 引导。主句过去时，从句时态也要后退(like→liked)。' },
            { main: 'The teacher told us', clause: 'the earth goes around the sun', options: ['that', 'how', 'if'], answer: 'that', full: 'The teacher told us that the earth goes around the sun.', tip: '客观真理！即使主句是过去时(told)，从句仍用一般现在时(goes)。' },
            { main: 'I want to know', clause: 'he will arrive', options: ['when', 'that', 'where'], answer: 'when', full: 'I want to know when he will arrive.', tip: '原句 When will he arrive?（他什么时候到），用 when 引导，从句陈述语序。' },
        ]
    },
    adverbial: {
        title: '🏗️ 状语从句建筑师',
        intro: '选择正确的连词，将两个句子拼接成一个复合句！注意主将从现规则。',
        questions: [
            { main: 'I will call you', clause: 'I arrive', options: ['as soon as', 'because', 'although'], answer: 'as soon as', full: 'I will call you as soon as I arrive.', tip: '一...就...用 as soon as。注意主将从现：主句 will call，从句用现在时 arrive。' },
            { main: 'He was late', clause: 'he missed the bus', options: ['because', 'if', 'although'], answer: 'because', full: 'He was late because he missed the bus.', tip: '表原因用 because。他迟到了因为他错过了公交车。' },
            { main: 'We will stay at home', clause: 'it rains tomorrow', options: ['if', 'because', 'although'], answer: 'if', full: 'We will stay at home if it rains tomorrow.', tip: '表条件用 if(如果)。主将从现：主句 will stay，从句用一般现在时 rains。' },
            { main: 'He kept working', clause: 'he was very tired', options: ['although', 'because', 'if'], answer: 'although', full: 'He kept working although he was very tired.', tip: '表让步(虽然)用 although/though。注意：although 不能和 but 同时用！' },
            { main: 'I won\'t leave', clause: 'she comes back', options: ['until', 'because', 'if'], answer: 'until', full: 'I won\'t leave until she comes back.', tip: 'not...until 直到...才。主将从现：从句用现在时 comes。' },
            { main: 'He was reading', clause: 'his mother was cooking', options: ['while', 'if', 'because'], answer: 'while', full: 'He was reading while his mother was cooking.', tip: '两个同时进行的动作用 while (当...的时候)，常搭配进行时。' },
            { main: 'You will miss the train', clause: 'you don\'t hurry', options: ['unless', 'because', 'when'], answer: 'unless', full: 'You will miss the train unless you hurry.', tip: 'unless = if...not (除非)。除非你赶快，否则你会错过火车。' },
            { main: 'The problem was ____ difficult ____ nobody could solve it', clause: '', options: ['so...that', 'such...that', 'too...to'], answer: 'so...that', full: 'The problem was so difficult that nobody could solve it.', tip: 'so + adj./adv. + that 如此...以至于...。这里 difficult 是形容词，用 so...that。' },
        ]
    }
};

export default function ClauseBuilder({ clauseType = 'object' }) {
    const data = clauseData[clauseType] || clauseData.object;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const current = data.questions[currentIndex];

    const handleSelect = useCallback((option) => {
        if (showResult) return;
        setSelected(option);
        setShowResult(true);
        if (option === current.answer) {
            setScore(prev => prev + 1);
        }
    }, [showResult, current.answer]);

    const handleNext = useCallback(() => {
        if (currentIndex < data.questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelected(null);
            setShowResult(false);
        } else {
            setGameOver(true);
        }
    }, [currentIndex, data.questions.length]);

    const handleReset = useCallback(() => {
        setCurrentIndex(0);
        setSelected(null);
        setShowResult(false);
        setScore(0);
        setGameOver(false);
    }, []);

    if (gameOver) {
        const pct = Math.round((score / data.questions.length) * 100);
        return (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8 text-center">
                <div className="text-6xl mb-4">{pct >= 80 ? '🏗️' : pct >= 50 ? '🧱' : '🪨'}</div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">建设报告</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                    成功搭建 <span className="font-bold text-indigo-600">{score}</span> / {data.questions.length} 个从句
                </p>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4 mb-6">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-4 rounded-full transition-all" style={{ width: `${pct}%` }} />
                </div>
                <button onClick={handleReset} className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-bold hover:shadow-lg transition-all flex items-center gap-2 mx-auto">
                    <RotateCcw className="w-4 h-4" /> 再次挑战
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-indigo-600" />
                    {data.title}
                </h2>
                <span className="text-sm text-slate-500">{currentIndex + 1} / {data.questions.length}</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{data.intro}</p>

            {/* Visual clause structure */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl mb-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-4">
                    <div className="bg-white dark:bg-slate-700 px-5 py-3 rounded-xl shadow-md border-2 border-indigo-300 text-center">
                        <p className="text-xs text-indigo-500 font-medium mb-1">主句</p>
                        <p className="font-bold text-lg text-slate-800 dark:text-white">{current.main}</p>
                    </div>
                    <div className="text-2xl font-bold text-indigo-400">+</div>
                    <div className="bg-amber-100 dark:bg-amber-900/30 px-5 py-3 rounded-xl shadow-md border-2 border-amber-300 border-dashed text-center min-w-[120px]">
                        <p className="text-xs text-amber-600 font-medium mb-1">引导词</p>
                        <p className="font-bold text-lg text-amber-700 dark:text-amber-300">{showResult ? current.answer : '???'}</p>
                    </div>
                    <div className="text-2xl font-bold text-indigo-400">+</div>
                    {current.clause && (
                        <div className="bg-white dark:bg-slate-700 px-5 py-3 rounded-xl shadow-md border-2 border-purple-300 text-center">
                            <p className="text-xs text-purple-500 font-medium mb-1">从句（陈述语序）</p>
                            <p className="font-bold text-lg text-slate-800 dark:text-white">{current.clause}</p>
                        </div>
                    )}
                </div>

                {showResult && (
                    <div className="bg-white/80 dark:bg-slate-800/80 p-3 rounded-lg text-center mt-3">
                        <Sparkles className="w-4 h-4 text-amber-500 inline mr-1" />
                        <span className="font-bold text-slate-800 dark:text-white">{current.full}</span>
                    </div>
                )}
            </div>

            {/* Options */}
            <div className="grid grid-cols-3 gap-3 mb-6">
                {current.options.map((opt) => {
                    let cls = 'px-4 py-3 rounded-xl font-bold text-center transition-all cursor-pointer border-2 ';
                    if (!showResult) {
                        cls += 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 text-slate-800 dark:text-white';
                    } else if (opt === current.answer) {
                        cls += 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500 text-emerald-700 dark:text-emerald-300 ring-2 ring-emerald-300';
                    } else if (opt === selected) {
                        cls += 'bg-rose-50 dark:bg-rose-900/20 border-rose-500 text-rose-700 dark:text-rose-300';
                    } else {
                        cls += 'bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 text-slate-400 dark:text-slate-500';
                    }
                    return (
                        <button key={opt} onClick={() => handleSelect(opt)} className={cls} disabled={showResult}>
                            {opt}
                        </button>
                    );
                })}
            </div>

            {showResult && (
                <div className={`p-4 rounded-xl ${selected === current.answer ? 'bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500' : 'bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500'}`}>
                    <div className="flex items-center gap-2 mb-2">
                        {selected === current.answer ? (
                            <><CheckCircle className="w-5 h-5 text-emerald-600" /><span className="font-bold text-emerald-700 dark:text-emerald-300">搭建成功！🎯</span></>
                        ) : (
                            <><XCircle className="w-5 h-5 text-amber-600" /><span className="font-bold text-amber-700 dark:text-amber-300">没选对，正确答案是 {current.answer}</span></>
                        )}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">💡 {current.tip}</p>
                    <button onClick={handleNext} className="mt-3 px-5 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-bold hover:shadow-md transition-all flex items-center gap-2 mx-auto">
                        {currentIndex < data.questions.length - 1 ? (<>下一题 <ChevronRight className="w-4 h-4" /></>) : '查看结果 🏗️'}
                    </button>
                </div>
            )}
        </div>
    );
}

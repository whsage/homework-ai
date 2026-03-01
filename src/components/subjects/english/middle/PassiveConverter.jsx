import React, { useState, useCallback } from 'react';
import { ArrowRightLeft, CheckCircle, XCircle, RotateCcw, ChevronRight, ArrowDown } from 'lucide-react';

const sentences = [
    { active: 'People speak English all over the world.', passive: 'English is spoken all over the world.', tense: '一般现在时', subject: 'English', be: 'is', pp: 'spoken', by: '(by people)', steps: ['找宾语 English → 变主语', 'be动词用 is (现在时+单数)', '动词 speak → spoken (过去分词)'] },
    { active: 'Tom broke the window yesterday.', passive: 'The window was broken by Tom yesterday.', tense: '一般过去时', subject: 'The window', be: 'was', pp: 'broken', by: 'by Tom', steps: ['找宾语 the window → 变主语', 'be动词用 was (过去时+单数)', '动词 break → broken (过去分词)'] },
    { active: 'They will build a new bridge next year.', passive: 'A new bridge will be built next year.', tense: '一般将来时', subject: 'A new bridge', be: 'will be', pp: 'built', by: '', steps: ['找宾语 a new bridge → 变主语', 'will + be (将来时被动)', '动词 build → built (过去分词)'] },
    { active: 'My mother made this cake.', passive: 'This cake was made by my mother.', tense: '一般过去时', subject: 'This cake', be: 'was', pp: 'made', by: 'by my mother', steps: ['找宾语 this cake → 变主语', 'be动词用 was (过去时+单数)', '动词 make → made (过去分词)'] },
    { active: 'We clean the classroom every day.', passive: 'The classroom is cleaned every day.', tense: '一般现在时', subject: 'The classroom', be: 'is', pp: 'cleaned', by: '(by us)', steps: ['找宾语 the classroom → 变主语', 'be动词用 is (现在时+单数)', '动词 clean → cleaned (过去分词)'] },
    { active: 'The teacher will give us a test tomorrow.', passive: 'A test will be given to us by the teacher tomorrow.', tense: '一般将来时', subject: 'A test', be: 'will be', pp: 'given', by: 'by the teacher', steps: ['找宾语 a test → 变主语', 'will + be (将来时被动)', '动词 give → given (过去分词)'] },
    { active: 'Many people visit the Great Wall every year.', passive: 'The Great Wall is visited by many people every year.', tense: '一般现在时', subject: 'The Great Wall', be: 'is', pp: 'visited', by: 'by many people', steps: ['找宾语 the Great Wall → 变主语', 'be动词用 is (现在时+单数)', '动词 visit → visited (过去分词)'] },
    { active: 'She wrote this letter last night.', passive: 'This letter was written by her last night.', tense: '一般过去时', subject: 'This letter', be: 'was', pp: 'written', by: 'by her', steps: ['找宾语 this letter → 变主语', 'be动词用 was (过去时+单数)', '动词 write → written (过去分词)'] },
    { active: 'They will invite many friends to the party.', passive: 'Many friends will be invited to the party.', tense: '一般将来时', subject: 'Many friends', be: 'will be', pp: 'invited', by: '', steps: ['找宾语 many friends → 变主语', 'will + be (将来时被动)', '动词 invite → invited (过去分词)'] },
    { active: 'Students use computers in class.', passive: 'Computers are used in class.', tense: '一般现在时', subject: 'Computers', be: 'are', pp: 'used', by: '(by students)', steps: ['找宾语 computers → 变主语', 'be动词用 are (现在时+复数)', '动词 use → used (过去分词)'] },
];

export default function PassiveConverter() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [step, setStep] = useState(0); // 0: show question, 1-3: steps, 4: full answer
    const [quizAnswer, setQuizAnswer] = useState('');
    const [showQuizResult, setShowQuizResult] = useState(false);
    const [score, setScore] = useState(0);
    const [total, setTotal] = useState(0);

    const current = sentences[currentIndex];

    const beOptions = ['am', 'is', 'are', 'was', 'were', 'will be'];

    const handleCheckAnswer = useCallback(() => {
        setShowQuizResult(true);
        setTotal(prev => prev + 1);
        if (quizAnswer.toLowerCase().trim() === current.be.toLowerCase()) {
            setScore(prev => prev + 1);
        }
    }, [quizAnswer, current.be]);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % sentences.length);
        setStep(0);
        setQuizAnswer('');
        setShowQuizResult(false);
    }, []);

    const handleReset = useCallback(() => {
        setCurrentIndex(0);
        setStep(0);
        setQuizAnswer('');
        setShowQuizResult(false);
        setScore(0);
        setTotal(0);
    }, []);

    const tenseColorMap = {
        '一般现在时': 'blue',
        '一般过去时': 'emerald',
        '一般将来时': 'purple',
    };
    const color = tenseColorMap[current.tense] || 'blue';

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                    <ArrowRightLeft className="w-6 h-6 text-rose-600" />
                    🔄 主被动转换器
                </h2>
                <div className="flex items-center gap-3 text-sm">
                    {total > 0 && <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full font-bold">✅ {score}/{total}</span>}
                    <span className="text-slate-500">{currentIndex + 1} / {sentences.length}</span>
                </div>
            </div>

            {/* Active sentence */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-5 rounded-xl mb-4">
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-2">🔵 主动语态</p>
                <p className="text-lg font-bold text-slate-800 dark:text-white">{current.active}</p>
                <span className={`mt-2 inline-block text-xs px-2 py-1 rounded-full bg-${color}-100 dark:bg-${color}-900/30 text-${color}-700 dark:text-${color}-300 font-bold`}>
                    {current.tense}
                </span>
            </div>

            <div className="flex justify-center my-3">
                <ArrowDown className="w-6 h-6 text-slate-400 animate-bounce" />
            </div>

            {/* Step-by-step transformation */}
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 p-5 rounded-xl mb-6">
                <p className="text-xs text-rose-600 dark:text-rose-400 font-medium mb-3">🔴 被动语态转换</p>

                {step === 0 && (
                    <div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">选择正确的 be 动词来完成被动句：</p>
                        <div className="bg-white dark:bg-slate-700 p-4 rounded-xl text-center mb-4">
                            <span className="font-bold text-lg text-rose-600">{current.subject}</span>
                            <span className="mx-2 text-slate-400">+</span>
                            <span className={`inline-block px-4 py-1 rounded-lg border-2 border-dashed ${showQuizResult ? (quizAnswer.toLowerCase().trim() === current.be.toLowerCase() ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20' : 'border-rose-500 bg-rose-50 dark:bg-rose-900/20') : 'border-amber-400 bg-amber-50 dark:bg-amber-900/20'} font-bold text-lg`}>
                                {showQuizResult ? current.be : '?????'}
                            </span>
                            <span className="mx-2 text-slate-400">+</span>
                            <span className="font-bold text-lg text-purple-600">{current.pp}</span>
                            {current.by && <span className="ml-2 text-slate-500">{current.by}</span>}
                        </div>

                        {!showQuizResult ? (
                            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-4">
                                {beOptions.map(opt => (
                                    <button key={opt} onClick={() => { setQuizAnswer(opt); }}
                                        className={`px-3 py-2 rounded-lg font-bold text-sm transition-all border-2 ${quizAnswer === opt ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700' : 'border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-300'}`}>
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        ) : null}

                        {quizAnswer && !showQuizResult && (
                            <button onClick={handleCheckAnswer} className="px-5 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg font-bold hover:shadow-md transition-all mx-auto block">
                                确认答案 ✓
                            </button>
                        )}

                        {showQuizResult && (
                            <div className={`p-4 rounded-xl ${quizAnswer.toLowerCase().trim() === current.be.toLowerCase() ? 'bg-emerald-50 dark:bg-emerald-900/20' : 'bg-amber-50 dark:bg-amber-900/20'}`}>
                                <div className="flex items-center gap-2 mb-2">
                                    {quizAnswer.toLowerCase().trim() === current.be.toLowerCase() ? (
                                        <><CheckCircle className="w-5 h-5 text-emerald-600" /><span className="font-bold text-emerald-700 dark:text-emerald-300">转换正确！🎯</span></>
                                    ) : (
                                        <><XCircle className="w-5 h-5 text-amber-600" /><span className="font-bold text-amber-700 dark:text-amber-300">应该用 {current.be}</span></>
                                    )}
                                </div>
                                <button onClick={() => setStep(1)} className="mt-2 px-4 py-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg font-bold text-sm hover:shadow-md transition-all">
                                    查看分步解析 →
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {step >= 1 && (
                    <div className="space-y-3">
                        {current.steps.map((s, i) => (
                            <div key={i} className={`flex items-start gap-3 p-3 rounded-lg transition-all ${i < step ? 'bg-white dark:bg-slate-700 opacity-100' : 'bg-white/50 dark:bg-slate-700/50 opacity-40'}`}>
                                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i < step ? 'bg-emerald-500 text-white' : 'bg-slate-300 text-slate-600'}`}>{i + 1}</span>
                                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">{s}</p>
                            </div>
                        ))}

                        {step <= current.steps.length && (
                            <button onClick={() => setStep(prev => Math.min(prev + 1, current.steps.length + 1))} className="mt-2 px-4 py-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-all mx-auto block">
                                {step < current.steps.length ? '下一步 →' : '查看完整句子 ✨'}
                            </button>
                        )}

                        {step > current.steps.length && (
                            <div className="mt-4 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 p-4 rounded-xl text-center border-2 border-emerald-300">
                                <p className="text-lg font-bold text-emerald-700 dark:text-emerald-300">{current.passive}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="flex justify-center gap-3">
                <button onClick={handleNext} className="px-5 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg font-bold hover:shadow-md transition-all flex items-center gap-2">
                    下一句 <ChevronRight className="w-4 h-4" />
                </button>
                <button onClick={handleReset} className="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-all flex items-center gap-2">
                    <RotateCcw className="w-4 h-4" /> 重置
                </button>
            </div>
        </div>
    );
}

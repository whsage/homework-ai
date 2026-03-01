import React, { useState } from 'react';
import { Sparkles, RotateCcw, ChevronRight, CheckCircle2, XCircle } from 'lucide-react';

const questionBank = {
    'be-verbs': {
        title: '🔗 Be动词句子',
        questions: [
            { words: ['I', 'am', 'a', 'student', '.'], answer: 'I am a student .' },
            { words: ['She', 'is', 'my', 'teacher', '.'], answer: 'She is my teacher .' },
            { words: ['They', 'are', 'good', 'friends', '.'], answer: 'They are good friends .' },
            { words: ['My', 'dog', 'is', 'very', 'cute', '.'], answer: 'My dog is very cute .' },
            { words: ['We', 'are', 'happy', 'today', '.'], answer: 'We are happy today .' },
        ]
    },
    'questions': {
        title: '❓ 疑问句',
        questions: [
            { words: ['Is', 'this', 'your', 'book', '?'], answer: 'Is this your book ?' },
            { words: ['What', 'is', 'your', 'name', '?'], answer: 'What is your name ?' },
            { words: ['Where', 'is', 'the', 'park', '?'], answer: 'Where is the park ?' },
            { words: ['How', 'old', 'are', 'you', '?'], answer: 'How old are you ?' },
            { words: ['Do', 'you', 'like', 'apples', '?'], answer: 'Do you like apples ?' },
        ]
    },
    'daily': {
        title: '🍔 日常对话',
        questions: [
            { words: ['I', 'would', 'like', 'a', 'hamburger', '.'], answer: 'I would like a hamburger .' },
            { words: ['Can', 'I', 'help', 'you', '?'], answer: 'Can I help you ?' },
            { words: ['Let', 'us', 'go', 'to', 'school', '.'], answer: 'Let us go to school .' },
            { words: ['What', 'color', 'is', 'it', '?'], answer: 'What color is it ?' },
            { words: ['It', 'is', 'time', 'for', 'lunch', '.'], answer: 'It is time for lunch .' },
        ]
    }
};

const SentenceTrain = ({ questionSet = 'be-verbs' }) => {
    const [currentSetKey, setCurrentSetKey] = useState(questionSet);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [selected, setSelected] = useState([]);
    const [available, setAvailable] = useState([]);
    const [checked, setChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [score, setScore] = useState(0);

    const currentSet = questionBank[currentSetKey] || questionBank['be-verbs'];
    const currentQ = currentSet.questions[currentIdx];

    // Initialize available words (shuffled)
    React.useEffect(() => {
        const shuffled = [...currentQ.words];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setAvailable(shuffled.map((w, i) => ({ id: i, text: w })));
        setSelected([]);
        setChecked(false);
        setIsCorrect(false);
    }, [currentIdx, currentSetKey]);

    const handleSelectWord = (wordObj) => {
        setSelected(prev => [...prev, wordObj]);
        setAvailable(prev => prev.filter(w => w.id !== wordObj.id));
    };

    const handleDeselectWord = (wordObj) => {
        if (checked) return;
        setAvailable(prev => [...prev, wordObj]);
        setSelected(prev => prev.filter(w => w.id !== wordObj.id));
    };

    const checkAnswer = () => {
        const userAnswer = selected.map(w => w.text).join(' ');
        const correct = userAnswer === currentQ.answer;
        setIsCorrect(correct);
        setChecked(true);
        if (correct) setScore(s => s + 1);
    };

    const nextQuestion = () => {
        if (currentIdx < currentSet.questions.length - 1) {
            setCurrentIdx(i => i + 1);
        } else {
            setCurrentIdx(0);
        }
    };

    const switchSet = (key) => {
        setCurrentSetKey(key);
        setCurrentIdx(0);
        setScore(0);
    };

    return (
        <div className="space-y-6">
            <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-2">
                    <Sparkles className="text-amber-500" /> 🚂 句子火车
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">点击单词，按正确顺序排列成完整的句子！</p>
            </div>

            {/* Set Selector */}
            <div className="flex flex-wrap gap-2 justify-center">
                {Object.entries(questionBank).map(([key, val]) => (
                    <button key={key} onClick={() => switchSet(key)}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${currentSetKey === key
                            ? 'bg-amber-500 text-white shadow-md'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-amber-100'
                            }`}>
                        {val.title}
                    </button>
                ))}
            </div>

            {/* Progress */}
            <div className="text-center text-sm text-slate-500 dark:text-slate-400">
                第 <strong className="text-amber-600">{currentIdx + 1}</strong> / {currentSet.questions.length} 题 &nbsp;|&nbsp; 得分: <strong className="text-green-600">{score}</strong>
            </div>

            {/* Selected (sentence area) */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border-2 border-dashed border-amber-300 dark:border-amber-700 p-4 min-h-[60px] flex flex-wrap gap-2 items-center">
                {selected.length === 0 ? (
                    <span className="text-slate-400 text-sm italic mx-auto">👆 点击下方的单词卡片排列句子...</span>
                ) : (
                    selected.map((wordObj, idx) => (
                        <React.Fragment key={wordObj.id}>
                            <button onClick={() => handleDeselectWord(wordObj)}
                                className={`px-4 py-2 rounded-xl font-bold text-sm transition-all border-2 ${checked
                                        ? isCorrect
                                            ? 'bg-green-100 border-green-400 text-green-700 cursor-default'
                                            : 'bg-red-50 border-red-300 text-red-600 cursor-default'
                                        : 'bg-amber-50 dark:bg-amber-900/20 border-amber-400 text-amber-800 dark:text-amber-200 hover:bg-amber-100 cursor-pointer'
                                    }`}>
                                {wordObj.text}
                            </button>
                            {idx < selected.length - 1 && (
                                <span className="text-amber-300">→</span>
                            )}
                        </React.Fragment>
                    ))
                )}
            </div>

            {/* Available words */}
            <div className="flex flex-wrap gap-2 justify-center">
                {available.map(wordObj => (
                    <button key={wordObj.id} onClick={() => handleSelectWord(wordObj)}
                        className="px-4 py-2.5 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-xl font-bold text-slate-700 dark:text-slate-200 hover:border-amber-400 hover:shadow-md transition-all cursor-pointer text-sm">
                        {wordObj.text}
                    </button>
                ))}
            </div>

            {/* Action buttons */}
            <div className="flex justify-center gap-3">
                {!checked ? (
                    <button onClick={checkAnswer} disabled={selected.length !== currentQ.words.length}
                        className={`px-6 py-2.5 rounded-xl font-bold text-white transition-all ${selected.length === currentQ.words.length
                                ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-lg'
                                : 'bg-slate-300 cursor-not-allowed'
                            }`}>
                        ✅ 检查答案
                    </button>
                ) : (
                    <button onClick={nextQuestion} className="px-6 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-lg transition-all">
                        下一题 <ChevronRight size={16} className="inline" />
                    </button>
                )}
                <button onClick={() => { setCurrentIdx(currentIdx); setSelected([]); setChecked(false); /* re-trigger useEffect */ setCurrentIdx(prev => { setCurrentIdx(prev); return prev; }); }}
                    className="px-4 py-2.5 rounded-xl font-bold text-slate-500 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 transition-all text-sm">
                    <RotateCcw size={14} className="inline mr-1" /> 重排
                </button>
            </div>

            {/* Feedback */}
            {checked && (
                <div className={`p-4 rounded-2xl border-2 ${isCorrect ? 'bg-green-50 dark:bg-green-900/20 border-green-400' : 'bg-red-50 dark:bg-red-900/20 border-red-400'}`}>
                    <div className="flex items-center gap-2 mb-1">
                        {isCorrect ? (
                            <>
                                <CheckCircle2 className="text-green-500" size={20} />
                                <span className="text-green-700 dark:text-green-300 font-bold">🎉 Perfect! 完全正确！</span>
                            </>
                        ) : (
                            <>
                                <XCircle className="text-red-500" size={20} />
                                <span className="text-red-700 dark:text-red-300 font-bold">差一点！再想想语序～</span>
                            </>
                        )}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 ml-7">
                        正确顺序: <strong className="text-green-600">{currentQ.answer}</strong>
                    </p>
                </div>
            )}
        </div>
    );
};

export default SentenceTrain;

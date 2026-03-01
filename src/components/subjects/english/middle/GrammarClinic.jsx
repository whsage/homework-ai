import React, { useState, useCallback } from 'react';
import { Stethoscope, CheckCircle, XCircle, RotateCcw, ChevronRight } from 'lucide-react';

const questionBank = {
    tenses: {
        title: '⏰ 时态诊所',
        questions: [
            { sentence: 'I have went to Beijing twice.', error: 'went', correct: 'gone', rule: 'have/has + 过去分词(pp)。go 的过去分词是 gone，不是 went(那是过去式)。' },
            { sentence: 'She has lived here since three years.', error: 'since three years', correct: 'for three years', rule: 'since + 时间点(如 since 2020)；for + 时间段(如 for three years)。three years 是时间段，用 for。' },
            { sentence: 'He has already went home.', error: 'went', correct: 'gone', rule: '现在完成时结构：have/has + 过去分词。go → went(过去式) → gone(过去分词)。' },
            { sentence: 'I didn\'t finished my homework yesterday.', error: 'finished', correct: 'finish', rule: 'did/didn\'t 后面的动词必须用原形！didn\'t + finish(原形)。' },
            { sentence: 'Look! The children plays in the park.', error: 'plays', correct: 'are playing', rule: '标志词 Look! 提示正在发生，用现在进行时 am/is/are + doing。children 复数用 are playing。' },
            { sentence: 'We will going to the zoo tomorrow.', error: 'will going', correct: 'will go / are going', rule: 'will + 动词原形，或 be going to + 动词原形。不能 will + doing。' },
            { sentence: 'The earth went around the sun.', error: 'went', correct: 'goes', rule: '客观真理永远用一般现在时，不管主句是什么时态！地球绕太阳转是客观事实。' },
            { sentence: 'I have bought this book for two years.', error: 'bought', correct: 'had', rule: 'buy 是瞬间动词，不能与 for + 时间段连用。要改为延续性动词：have had(拥有) for two years。' },
        ]
    },
    clauses: {
        title: '🧩 从句诊所',
        questions: [
            { sentence: 'Can you tell me where is the hospital?', error: 'where is the hospital', correct: 'where the hospital is', rule: '宾语从句必须用陈述语序(主语+谓语)！where + the hospital(主) + is(谓)。' },
            { sentence: 'I don\'t know if will he come.', error: 'if will he come', correct: 'if he will come', rule: '宾语从句用陈述语序：if/whether + 主语 + 谓语。' },
            { sentence: 'He said that he will help me.', error: 'will', correct: 'would', rule: '主句是过去时(said)，宾语从句要"时态后退"：will → would。' },
            { sentence: 'If it will rain tomorrow, we will stay home.', error: 'will rain', correct: 'rains', rule: '主将从现！if 条件从句中，主句用将来时，从句要用一般现在时代替将来时。' },
            { sentence: 'I didn\'t go out because of I was sick.', error: 'because of I was sick', correct: 'because I was sick', rule: 'because + 句子；because of + 名词/短语。后面跟了完整句子(I was sick)，用 because。' },
            { sentence: 'Although he is tired, but he keeps working.', error: 'Although...but', correct: '去掉 but', rule: 'Although(虽然) 和 but(但是) 不能同时使用！"一山不容二虎"。' },
            { sentence: 'The boy which is reading is my brother.', error: 'which', correct: 'who/that', rule: '先行词是人(the boy)，定语从句引导词用 who 或 that，不用 which(which 修饰物)。' },
            { sentence: 'I wonder that she will come or not.', error: 'that', correct: 'whether/if', rule: '表示"是否"用 whether 或 if，不用 that。特别是有 or not 时，最好用 whether。' },
        ]
    },
    comprehensive: {
        title: '🏥 综合门诊',
        questions: [
            { sentence: 'Everyone of us have a dream.', error: 'have', correct: 'has', rule: 'everyone/everybody/someone 等不定代词作主语，谓语动词用第三人称单数。' },
            { sentence: 'The number of students are increasing.', error: 'are', correct: 'is', rule: 'the number of... (……的数量) 作主语时，谓语用单数 is。a number of... (许多) 才用 are。' },
            { sentence: 'He suggested me to go there.', error: 'me to go', correct: 'that I (should) go', rule: 'suggest 后面不能接"sb. to do"结构！用 suggest that sb. (should) do 或 suggest doing。' },
            { sentence: 'I spent two hours to finish the work.', error: 'to finish', correct: 'finishing', rule: 'spend 的固定搭配：spend... (in) doing sth. 或 spend... on sth.。不能用 to do。' },
            { sentence: 'There have a book on the table.', error: 'have', correct: 'is', rule: 'There be 句型表示"某处有"，不能用 have 替代。There is a book... (单数用 is)。' },
            { sentence: 'The accident was happened yesterday.', error: 'was happened', correct: 'happened', rule: 'happen(发生) 是不及物动词，没有被动语态！不能说 was happened。' },
            { sentence: 'He is one of the students who likes math.', error: 'likes', correct: 'like', rule: 'one of + 复数名词 + 定语从句，先行词是 students(复数)，从句谓语用复数 like。' },
            { sentence: 'She is enough old to go to school.', error: 'enough old', correct: 'old enough', rule: 'enough 修饰形容词/副词时要放在后面：adj. + enough。不是 enough + adj.。' },
        ]
    }
};

export default function GrammarClinic({ questionSet = 'tenses' }) {
    const data = questionBank[questionSet] || questionBank.tenses;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedError, setSelectedError] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const current = data.questions[currentIndex];

    const words = current.sentence.split(/(\s+)/).filter(w => w.trim());

    const handleWordClick = useCallback((word) => {
        if (showResult) return;
        const cleanWord = word.replace(/[.,!?;:'"]/g, '');
        // Check if the clicked word is part of the error phrase
        const errorParts = current.error.split(' ');
        const isPartOfError = errorParts.some(ep =>
            cleanWord.toLowerCase() === ep.toLowerCase() || word.toLowerCase().includes(ep.toLowerCase())
        );

        setSelectedError(word);
        setShowResult(true);
        setAnswered(prev => prev + 1);
        if (isPartOfError) {
            setScore(prev => prev + 1);
        }
    }, [showResult, current]);

    const handleNext = useCallback(() => {
        if (currentIndex < data.questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedError(null);
            setShowResult(false);
        } else {
            setGameOver(true);
        }
    }, [currentIndex, data.questions.length]);

    const handleReset = useCallback(() => {
        setCurrentIndex(0);
        setSelectedError(null);
        setShowResult(false);
        setScore(0);
        setAnswered(0);
        setGameOver(false);
    }, []);

    const isCorrectSelection = (word) => {
        const cleanWord = word.replace(/[.,!?;:'"]/g, '');
        const errorParts = current.error.split(' ');
        return errorParts.some(ep =>
            cleanWord.toLowerCase() === ep.toLowerCase() || word.toLowerCase().includes(ep.toLowerCase())
        );
    };

    if (gameOver) {
        const pct = Math.round((score / data.questions.length) * 100);
        return (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8 text-center">
                <div className="text-6xl mb-4">{pct >= 80 ? '🏆' : pct >= 50 ? '👏' : '💪'}</div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">诊疗报告</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                    你找出了 <span className="font-bold text-emerald-600">{score}</span> / {data.questions.length} 个语法错误
                </p>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4 mb-6">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-4 rounded-full transition-all" style={{ width: `${pct}%` }} />
                </div>
                <p className="text-sm text-slate-500 mb-6">
                    {pct >= 80 ? '太棒了！你是语法神医！🎉' : pct >= 50 ? '不错，继续加油！诊断能力越来越强！' : '多练几次，你会成为语法专家的！'}
                </p>
                <button onClick={handleReset} className="px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl font-bold hover:shadow-lg transition-all flex items-center gap-2 mx-auto">
                    <RotateCcw className="w-4 h-4" /> 再次挑战
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                    <Stethoscope className="w-6 h-6 text-teal-600" />
                    {data.title}
                </h2>
                <div className="flex items-center gap-4 text-sm">
                    <span className="bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full font-bold">
                        ✅ {score}/{answered}
                    </span>
                    <span className="text-slate-500">{currentIndex + 1} / {data.questions.length}</span>
                </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 p-5 rounded-xl mb-6">
                <p className="text-sm text-teal-700 dark:text-teal-300 mb-3 font-medium">
                    🔍 下面这个句子有一个语法错误，点击你认为有错的单词：
                </p>
                <div className="flex flex-wrap gap-2 justify-center min-h-[60px] items-center">
                    {words.map((word, i) => {
                        const isError = isCorrectSelection(word);
                        const isSelected = selectedError === word;
                        let cls = 'px-3 py-2 rounded-lg font-medium text-lg transition-all cursor-pointer ';
                        if (!showResult) {
                            cls += 'bg-white dark:bg-slate-700 hover:bg-rose-100 dark:hover:bg-rose-900/30 hover:ring-2 hover:ring-rose-400 text-slate-800 dark:text-white shadow-sm';
                        } else if (isError) {
                            cls += 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 ring-2 ring-rose-500 line-through';
                        } else if (isSelected && !isError) {
                            cls += 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 ring-2 ring-amber-400';
                        } else {
                            cls += 'bg-white/80 dark:bg-slate-700/80 text-slate-600 dark:text-slate-400';
                        }
                        return (
                            <button key={i} onClick={() => handleWordClick(word)} className={cls} disabled={showResult}>
                                {word}
                            </button>
                        );
                    })}
                </div>
            </div>

            {showResult && (
                <div className={`p-5 rounded-xl mb-4 ${isCorrectSelection(selectedError) ? 'bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500' : 'bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500'}`}>
                    <div className="flex items-center gap-2 mb-2">
                        {isCorrectSelection(selectedError) ? (
                            <><CheckCircle className="w-5 h-5 text-emerald-600" /><span className="font-bold text-emerald-700 dark:text-emerald-300">诊断正确！🎯</span></>
                        ) : (
                            <><XCircle className="w-5 h-5 text-amber-600" /><span className="font-bold text-amber-700 dark:text-amber-300">差一点！错误在别处 👀</span></>
                        )}
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                        <span className="font-bold text-rose-600">❌ 错误：</span> <span className="line-through">{current.error}</span>
                        → <span className="font-bold text-emerald-600">✅ 正确：</span> {current.correct}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 bg-white/60 dark:bg-slate-800/60 p-3 rounded-lg">
                        💡 <span className="font-medium">{current.rule}</span>
                    </p>
                    <button onClick={handleNext} className="mt-4 px-5 py-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg font-bold hover:shadow-md transition-all flex items-center gap-2 mx-auto">
                        {currentIndex < data.questions.length - 1 ? (<>下一题 <ChevronRight className="w-4 h-4" /></>) : '查看结果 🏆'}
                    </button>
                </div>
            )}
        </div>
    );
}

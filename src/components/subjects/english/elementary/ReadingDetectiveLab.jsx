import { useState } from 'react';
import { Search, BookOpen, Target, RotateCcw, Check, ArrowRight, Star, Eye, Clock } from 'lucide-react';

/**
 * ReadingDetectiveLab - 阅读理解侦探游戏
 * 通过短文+问题的形式练习 Skimming 和 Scanning 技能
 */

const PASSAGES = [
    {
        id: 1,
        title: 'Tom\'s Birthday Party',
        text: `Tom is a boy. He is 9 years old. His birthday is on May 15th. He has a birthday party at his home. His friends come to the party. They eat cake and ice cream. Tom gets many presents. He is very happy.`,
        questions: [
            {
                q: 'How old is Tom?',
                skill: 'scanning',
                hint: '🔍 用 Scanning 找数字！',
                opts: ['8 years old', '9 years old', '10 years old', '7 years old'],
                ans: 1,
                explain: '文章第二句说 "He is 9 years old."，用 Scanning 找数字就能快速定位。'
            },
            {
                q: 'When is Tom\'s birthday?',
                skill: 'scanning',
                hint: '🔍 找日期（月份+数字）！',
                opts: ['May 5th', 'March 15th', 'May 15th', 'June 15th'],
                ans: 2,
                explain: '文章说 "His birthday is on May 15th."，扫描大写月份+数字即可。'
            },
            {
                q: 'What is this passage about?',
                skill: 'skimming',
                hint: '🦅 用 Skimming 看标题和整体！',
                opts: ['Tom goes to school', 'Tom\'s birthday party', 'Tom eats cake', 'Tom\'s family'],
                ans: 1,
                explain: '标题就是 "Tom\'s Birthday Party"，用 Skimming 看标题和首尾就能抓住大意。'
            },
        ]
    },
    {
        id: 2,
        title: 'My School Day',
        text: `I go to school at 7:30 in the morning. My first class is English. I like English very much. We have lunch at 12:00. In the afternoon, I have math and art. School is over at 4:00. I go home and do my homework.`,
        questions: [
            {
                q: 'What time does the student go to school?',
                skill: 'scanning',
                hint: '🔍 找时间数字！',
                opts: ['7:00', '7:30', '8:00', '8:30'],
                ans: 1,
                explain: '第一句 "I go to school at 7:30"，用 Scanning 找时间数字。'
            },
            {
                q: 'What is the student\'s first class?',
                skill: 'scanning',
                hint: '🔍 找 "first" 附近的信息！',
                opts: ['Math', 'Art', 'English', 'Chinese'],
                ans: 2,
                explain: '"My first class is English."，关键词 first 附近就有答案。'
            },
            {
                q: 'What is the main idea of this passage?',
                skill: 'skimming',
                hint: '🦅 看标题+首尾句抓大意！',
                opts: ['The student likes English', 'A day at school', 'How to do homework', 'Lunch at school'],
                ans: 1,
                explain: '标题 "My School Day"，内容从早到晚讲述一天的学校生活。'
            },
        ]
    },
    {
        id: 3,
        title: 'Animals in the Zoo',
        text: `There are many animals in the zoo. The elephant is very big. It eats grass and fruit. The monkey is small and funny. It likes to eat bananas. There are 5 pandas in the zoo. They are black and white. Children love pandas very much.`,
        questions: [
            {
                q: 'How many pandas are in the zoo?',
                skill: 'scanning',
                hint: '🔍 找数字+pandas！',
                opts: ['3', '4', '5', '6'],
                ans: 2,
                explain: '"There are 5 pandas in the zoo."，数字+关键词快速定位。'
            },
            {
                q: 'What does the monkey like to eat?',
                skill: 'scanning',
                hint: '🔍 找 "monkey" 附近的食物！',
                opts: ['Grass', 'Fruit', 'Bananas', 'Bamboo'],
                ans: 2,
                explain: '"It likes to eat bananas."，monkey 下一句就有答案。'
            },
            {
                q: 'What colors are the pandas?',
                skill: 'scanning',
                hint: '🔍 找颜色词！',
                opts: ['Brown and white', 'Black and brown', 'Black and white', 'White and grey'],
                ans: 2,
                explain: '"They are black and white."，pandas 后面紧跟颜色信息。'
            },
        ]
    },
];

const ReadingDetectiveLab = () => {
    const [passageIndex, setPassageIndex] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answer, setAnswer] = useState(null);
    const [totalScore, setTotalScore] = useState(0);
    const [showHint, setShowHint] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [highlightMode, setHighlightMode] = useState(null); // 'scanning' | 'skimming'

    const passage = PASSAGES[passageIndex];
    const question = passage.questions[questionIndex];

    const handleAnswer = (idx) => {
        if (answer !== null) return;
        setAnswer(idx);
        if (idx === question.ans) {
            setTotalScore(s => s + 1);
        }
    };

    const nextQuestion = () => {
        if (questionIndex < passage.questions.length - 1) {
            setQuestionIndex(i => i + 1);
            setAnswer(null);
            setShowHint(false);
            setHighlightMode(null);
        } else if (passageIndex < PASSAGES.length - 1) {
            setPassageIndex(i => i + 1);
            setQuestionIndex(0);
            setAnswer(null);
            setShowHint(false);
            setHighlightMode(null);
        } else {
            setCompleted(true);
        }
    };

    const resetAll = () => {
        setPassageIndex(0);
        setQuestionIndex(0);
        setAnswer(null);
        setTotalScore(0);
        setShowHint(false);
        setCompleted(false);
        setHighlightMode(null);
    };

    const totalQuestions = PASSAGES.reduce((sum, p) => sum + p.questions.length, 0);
    const currentQ = PASSAGES.slice(0, passageIndex).reduce((sum, p) => sum + p.questions.length, 0) + questionIndex + 1;

    if (completed) {
        return (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8 text-center space-y-4">
                <div className="text-6xl">{totalScore >= 7 ? '🕵️‍♂️' : totalScore >= 4 ? '🔍' : '📖'}</div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                    {totalScore >= 7 ? '超级阅读侦探！' : totalScore >= 4 ? '不错的小侦探！' : '继续加油！'}
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                    答对 <span className="font-bold text-indigo-600">{totalScore}</span> / {totalQuestions} 题
                </p>
                <div className="flex gap-4 justify-center">
                    <button onClick={resetAll} className="px-6 py-3 bg-indigo-500 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-600">
                        <RotateCcw className="w-4 h-4" /> 再玩一次
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
                    <Search className="w-6 h-6 text-amber-600" />
                    📖 阅读侦探
                </h2>
                <div className="flex items-center gap-3">
                    <span className="text-sm text-slate-500">{currentQ} / {totalQuestions}</span>
                    <span className="bg-yellow-100 dark:bg-yellow-900/20 px-3 py-1 rounded-full text-sm font-bold text-yellow-700">⭐ {totalScore}</span>
                </div>
            </div>

            {/* Reading passage */}
            <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-indigo-500" />
                    <h3 className="font-bold text-indigo-700 dark:text-indigo-400">{passage.title}</h3>
                    <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full">文章 {passageIndex + 1}/{PASSAGES.length}</span>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/10 p-5 rounded-xl border border-amber-200 dark:border-amber-800 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {passage.text}
                </div>
            </div>

            {/* Skill badge */}
            <div className="mb-4 flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${question.skill === 'scanning'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                        : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                    }`}>
                    {question.skill === 'scanning' ? '🔍 Scanning 寻读' : '🦅 Skimming 略读'}
                </span>
                <button
                    onClick={() => setShowHint(!showHint)}
                    className="text-xs text-amber-600 hover:text-amber-700 flex items-center gap-1"
                >
                    <Eye className="w-3 h-3" /> {showHint ? '隐藏提示' : '看提示'}
                </button>
            </div>

            {showHint && (
                <div className="mb-4 bg-amber-50 dark:bg-amber-900/20 px-4 py-2 rounded-lg text-sm text-amber-700 dark:text-amber-300 border border-amber-200">
                    {question.hint}
                </div>
            )}

            {/* Question */}
            <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-xl">
                <h4 className="font-bold text-slate-800 dark:text-white mb-4">{question.q}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {question.opts.map((opt, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleAnswer(idx)}
                            className={`p-3 rounded-xl text-left text-sm font-medium transition-all ${answer === null
                                    ? 'bg-white dark:bg-slate-700 hover:bg-indigo-50 border border-slate-200 dark:border-slate-600'
                                    : idx === question.ans
                                        ? 'bg-green-100 dark:bg-green-900/30 border-2 border-green-400 text-green-700'
                                        : idx === answer
                                            ? 'bg-red-100 dark:bg-red-900/30 border-2 border-red-400 text-red-700'
                                            : 'bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 opacity-50'
                                }`}
                        >
                            <span className="mr-2 font-bold">{String.fromCharCode(65 + idx)}.</span>
                            {opt}
                        </button>
                    ))}
                </div>

                {answer !== null && (
                    <div className="mt-4 space-y-3">
                        <div className={`p-3 rounded-xl text-sm ${answer === question.ans
                                ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200'
                                : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200'
                            }`}>
                            {answer === question.ans ? '✅ 正确！' : '❌ 错误！'} {question.explain}
                        </div>
                        <div className="flex justify-end">
                            <button onClick={nextQuestion} className="px-5 py-2 bg-indigo-500 text-white rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-indigo-600">
                                {(questionIndex < passage.questions.length - 1 || passageIndex < PASSAGES.length - 1) ? <><ArrowRight className="w-4 h-4" /> 下一题</> : <><Check className="w-4 h-4" /> 看结果</>}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReadingDetectiveLab;

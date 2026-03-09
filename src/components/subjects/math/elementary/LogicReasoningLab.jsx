import React, { useState } from 'react';
import { Search, RotateCcw, HelpCircle, CheckCircle2, XCircle, ArrowRight, Lightbulb } from 'lucide-react';

/**
 * LogicReasoningLab - 逻辑推理互动实验
 * 侦探推理桌：通过假设法和排除法解决推理问题
 */

const CASES = [
    {
        title: '🍰 谁偷吃了蛋糕？',
        scene: '村长的草莓蛋糕不见了！小猪、小狗和小猫是嫌疑人。',
        clues: [
            { speaker: '🐷 小猪', says: '是小狗偷吃的！' },
            { speaker: '🐶 小狗', says: '小猪在说谎！' },
            { speaker: '🐱 小猫', says: '反正不是我吃的。' },
        ],
        constraint: '🔎 线索：只有一只动物在说谎',
        steps: [
            {
                assumption: '假设小猪说的是真话',
                reasoning: '如果小猪说真话（→小狗偷吃），那小狗说"小猪说谎"就是假话。但小猫说"不是我"也是真话（小狗偷的嘛）。这样只有小狗说谎，符合条件！',
                result: '没有矛盾 ✅',
                valid: true,
            },
            {
                assumption: '假设小猪在说谎',
                reasoning: '如果小猪说谎（→小狗没偷吃），那小狗说"小猪说谎"就是真话。小猫说"不是我"—— 如果真话，那犯人不是小猪（因为他说谎了可能是他）也不是小狗也不是小猫，那谁偷的？矛盾了！',
                result: '有矛盾 ❌',
                valid: false,
            },
        ],
        answer: '🐶 小狗偷吃了蛋糕！小猪和小猫说了真话，小狗在说谎。',
    },
    {
        title: '🍎 谁最爱吃苹果？',
        scene: '小马、小羊、小鹿三只动物，只有一只最爱吃苹果。',
        clues: [
            { speaker: '🐴 小马', says: '我爱吃苹果。' },
            { speaker: '🐑 小羊', says: '我不爱吃苹果。' },
            { speaker: '🦌 小鹿', says: '小马不爱吃。' },
        ],
        constraint: '🔎 线索：只有一只动物说了真话',
        steps: [
            {
                assumption: '假设小马说了真话',
                reasoning: '小马爱吃苹果。那小鹿说"小马不爱"就是假话 ✓。小羊说"我不爱"也必须是假话（因为只有1人说真话），意味着小羊也爱吃。但题目说只有1只爱吃！矛盾！',
                result: '有矛盾 ❌',
                valid: false,
            },
            {
                assumption: '假设小鹿说了真话',
                reasoning: '小马不爱吃苹果。那小马说"我爱吃"就是假话 ✓。小羊说"我不爱"也必须是假话 → 小羊爱吃苹果！只有小鹿说真话，完美！',
                result: '没有矛盾 ✅',
                valid: true,
            },
        ],
        answer: '🐑 小羊最爱吃苹果！只有小鹿说了真话。',
    },
    {
        title: '📚 谁考了第一名？',
        scene: '小明、小红、小刚参加考试。',
        clues: [
            { speaker: '👦 小明', says: '小红是第一名。' },
            { speaker: '👧 小红', says: '我不是第一名。' },
            { speaker: '👦 小刚', says: '我是第一名。' },
        ],
        constraint: '🔎 线索：只有一个人说了真话',
        steps: [
            {
                assumption: '假设小明说了真话',
                reasoning: '小红是第一名。那小红说"我不是第一"就是假话 ✓。小刚说"我是第一"也是假话 ✓。两人说假一人说真，完美！',
                result: '没有矛盾 ✅',
                valid: true,
            },
            {
                assumption: '假设小刚说了真话',
                reasoning: '小刚是第一名。那小明说"小红是第一"就是假话 ✓。小红说"我不是第一"也是真话。这样有两人说真话了！但条件说只有一人说真话！矛盾！',
                result: '有矛盾 ❌',
                valid: false,
            },
        ],
        answer: '👧 小红是第一名！只有小明说了真话。',
    },
];

const LogicReasoningLab = () => {
    const [caseIdx, setCaseIdx] = useState(0);
    const [revealedSteps, setRevealedSteps] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const currentCase = CASES[caseIdx];

    const revealNext = () => {
        if (revealedSteps < currentCase.steps.length) {
            setRevealedSteps(prev => prev + 1);
        } else {
            setShowAnswer(true);
        }
    };

    const nextCase = () => {
        if (caseIdx < CASES.length - 1) {
            setCaseIdx(prev => prev + 1);
            setRevealedSteps(0);
            setShowAnswer(false);
        }
    };

    const reset = () => {
        setRevealedSteps(0);
        setShowAnswer(false);
    };

    return (
        <div className="space-y-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-3">
                    <Search className="text-purple-500 w-8 h-8" /> 侦探推理桌
                </h3>
                <p className="text-slate-500 dark:text-slate-400">用「假设法」一步步推理，找出真相！</p>
            </div>

            {/* Case Selector */}
            <div className="flex gap-2 justify-center">
                {CASES.map((c, i) => (
                    <button
                        key={i}
                        onClick={() => { setCaseIdx(i); reset(); }}
                        className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${caseIdx === i ? 'bg-purple-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 hover:bg-slate-200'
                            }`}
                    >
                        案件 {i + 1}
                    </button>
                ))}
            </div>

            {/* Scene */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-2xl border border-purple-100 dark:border-purple-800">
                <h4 className="font-bold text-purple-800 dark:text-purple-300 text-lg mb-3">{currentCase.title}</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">{currentCase.scene}</p>

                {/* Clues */}
                <div className="space-y-2">
                    {currentCase.clues.map((clue, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-700 p-3 rounded-xl shadow-sm">
                            <span className="text-2xl">{clue.speaker.split(' ')[0]}</span>
                            <div>
                                <span className="font-bold text-sm text-slate-700 dark:text-slate-300">{clue.speaker.split(' ')[1]}说：</span>
                                <span className="text-sm text-slate-600 dark:text-slate-400 ml-1">「{clue.says}」</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-4 bg-red-50 dark:bg-red-900/20 p-3 rounded-xl border border-red-200 dark:border-red-800">
                    <p className="text-sm font-bold text-red-700 dark:text-red-300">{currentCase.constraint}</p>
                </div>
            </div>

            {/* Reasoning Steps */}
            <div className="space-y-4">
                {currentCase.steps.slice(0, revealedSteps).map((step, i) => (
                    <div
                        key={i}
                        className={`p-5 rounded-2xl border-2 transition-all ${step.valid
                                ? 'bg-green-50 dark:bg-green-900/10 border-green-300 dark:border-green-800'
                                : 'bg-red-50 dark:bg-red-900/10 border-red-300 dark:border-red-800'
                            }`}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <Lightbulb className={`w-5 h-5 ${step.valid ? 'text-green-600' : 'text-red-600'}`} />
                            <h5 className="font-bold text-slate-800 dark:text-white">{step.assumption}</h5>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-2">{step.reasoning}</p>
                        <div className={`inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-bold ${step.valid
                                ? 'bg-green-100 dark:bg-green-900/30 text-green-700'
                                : 'bg-red-100 dark:bg-red-900/30 text-red-700'
                            }`}>
                            {step.valid ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                            {step.result}
                        </div>
                    </div>
                ))}

                {/* Next Step Button */}
                {!showAnswer && (
                    <button
                        onClick={revealNext}
                        className="flex items-center gap-2 mx-auto px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-colors shadow-lg"
                    >
                        <ArrowRight className="w-5 h-5" />
                        {revealedSteps === 0 ? '开始推理' : revealedSteps < currentCase.steps.length ? '下一步假设' : '揭晓答案！'}
                    </button>
                )}

                {/* Answer */}
                {showAnswer && (
                    <div className="text-center py-6">
                        <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg">
                            🎉 {currentCase.answer}
                        </div>
                        {caseIdx < CASES.length - 1 && (
                            <button
                                onClick={nextCase}
                                className="mt-4 block mx-auto bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-bold transition-colors"
                            >
                                下一个案件 →
                            </button>
                        )}
                    </div>
                )}
            </div>

            {/* Controls */}
            <div className="flex justify-center">
                <button
                    onClick={reset}
                    className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors"
                >
                    <RotateCcw className="w-4 h-4" /> 重新推理
                </button>
            </div>

            {/* Tip */}
            <div className="flex items-start gap-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl">
                <HelpCircle className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                <p className="text-xs text-purple-800 dark:text-purple-300 leading-relaxed">
                    <strong>神探秘籍：</strong>先「假设」一个人说的是真话，然后顺着推下去。如果推出了矛盾（互相打架的结论），说明假设错了！换下一个人试试。
                </p>
            </div>
        </div>
    );
};

export default LogicReasoningLab;

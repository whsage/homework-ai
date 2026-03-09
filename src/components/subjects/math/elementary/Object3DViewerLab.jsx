import React, { useState } from 'react';
import { Camera, Eye, RotateCcw, HelpCircle, CheckCircle2, XCircle, Trophy } from 'lucide-react';

/**
 * Object3DViewerLab - 观察物体互动实验
 * 3D积木照相馆：从不同角度观察立体图形
 */

const SHAPES = [
    {
        name: '正方体',
        emoji: '🧊',
        views: { front: '正方形', side: '正方形', top: '正方形' },
        css3d: {
            faces: [
                { transform: 'rotateY(0deg) translateZ(40px)', bg: 'bg-blue-400', label: '前' },
                { transform: 'rotateY(180deg) translateZ(40px)', bg: 'bg-blue-500', label: '后' },
                { transform: 'rotateY(90deg) translateZ(40px)', bg: 'bg-blue-300', label: '右' },
                { transform: 'rotateY(-90deg) translateZ(40px)', bg: 'bg-blue-600', label: '左' },
                { transform: 'rotateX(90deg) translateZ(40px)', bg: 'bg-blue-200', label: '上' },
                { transform: 'rotateX(-90deg) translateZ(40px)', bg: 'bg-blue-700', label: '下' },
            ],
        },
    },
    {
        name: '长方体',
        emoji: '📦',
        views: { front: '长方形', side: '正方形', top: '长方形' },
        css3d: {
            faces: [
                { transform: 'rotateY(0deg) translateZ(30px)', bg: 'bg-green-400', w: 'w-[100px]', h: 'h-[60px]', label: '前' },
                { transform: 'rotateY(180deg) translateZ(30px)', bg: 'bg-green-500', w: 'w-[100px]', h: 'h-[60px]', label: '后' },
                { transform: 'rotateY(90deg) translateZ(50px)', bg: 'bg-green-300', w: 'w-[60px]', h: 'h-[60px]', label: '右' },
                { transform: 'rotateY(-90deg) translateZ(50px)', bg: 'bg-green-600', w: 'w-[60px]', h: 'h-[60px]', label: '左' },
                { transform: 'rotateX(90deg) translateZ(30px)', bg: 'bg-green-200', w: 'w-[100px]', h: 'h-[60px]', label: '上' },
                { transform: 'rotateX(-90deg) translateZ(30px)', bg: 'bg-green-700', w: 'w-[100px]', h: 'h-[60px]', label: '下' },
            ],
        },
    },
    {
        name: '圆柱',
        emoji: '🥫',
        views: { front: '长方形', side: '长方形', top: '圆形' },
        css3d: null, // Use special rendering
    },
    {
        name: '球',
        emoji: '⚽',
        views: { front: '圆形', side: '圆形', top: '圆形' },
        css3d: null,
    },
];

const VIEW_ANGLES = [
    { key: 'front', label: '📸 正面', icon: '👀', desc: '站在前面看' },
    { key: 'side', label: '🏃 侧面', icon: '👉', desc: '跑到旁边看' },
    { key: 'top', label: '🦅 上面', icon: '🔽', desc: '飞到上面看' },
];

const QUIZ_QUESTIONS = [
    { shape: '圆柱', view: 'top', question: '从上面看圆柱体，看到什么形状？', options: ['长方形', '圆形', '三角形', '正方形'], answer: '圆形' },
    { shape: '正方体', view: 'front', question: '从正面看正方体，看到什么形状？', options: ['长方形', '圆形', '三角形', '正方形'], answer: '正方形' },
    { shape: '球', view: 'side', question: '从侧面看球，看到什么形状？', options: ['长方形', '圆形', '正方形', '半圆形'], answer: '圆形' },
    { shape: '长方体', view: 'side', question: '一个长方体侧面是正方形，正面是什么形状？', options: ['正方形', '长方形', '圆形', '三角形'], answer: '长方形' },
];

const Object3DViewerLab = () => {
    const [selectedShape, setSelectedShape] = useState(0);
    const [currentView, setCurrentView] = useState('front');
    const [mode, setMode] = useState('explore'); // 'explore' | 'quiz'
    const [quizIdx, setQuizIdx] = useState(0);
    const [quizAnswer, setQuizAnswer] = useState(null);
    const [quizScore, setQuizScore] = useState(0);
    const [quizFeedback, setQuizFeedback] = useState(null);

    const shape = SHAPES[selectedShape];

    const renderShapeView = () => {
        const viewShape = shape.views[currentView];

        // Render the 2D projection shape
        const shapeStyles = {
            '正方形': 'w-24 h-24 rounded-md',
            '长方形': 'w-32 h-20 rounded-md',
            '圆形': 'w-24 h-24 rounded-full',
        };

        const colors = {
            '正方体': 'bg-blue-400 border-blue-600',
            '长方体': 'bg-green-400 border-green-600',
            '圆柱': 'bg-orange-400 border-orange-600',
            '球': 'bg-purple-400 border-purple-600',
        };

        return (
            <div className="flex flex-col items-center gap-4">
                <div className={`${shapeStyles[viewShape]} ${colors[shape.name]} border-4 shadow-lg transition-all duration-500`} />
                <p className="text-lg font-bold text-slate-700 dark:text-slate-300">
                    看到的形状：<span className="text-indigo-600 dark:text-indigo-400">{viewShape}</span>
                </p>
            </div>
        );
    };

    const render3DModel = () => {
        if (shape.name === '球') {
            return (
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-300 via-purple-500 to-purple-700 shadow-2xl" />
            );
        }
        if (shape.name === '圆柱') {
            return (
                <div className="flex flex-col items-center">
                    <div className="w-16 h-4 bg-orange-300 rounded-[50%] border-2 border-orange-500 relative z-10" />
                    <div className="w-16 h-16 bg-gradient-to-b from-orange-400 to-orange-600 -mt-2 border-x-2 border-orange-500" />
                    <div className="w-16 h-4 bg-orange-500 rounded-[50%] border-2 border-orange-600 -mt-2" />
                </div>
            );
        }
        // Cube / Cuboid with CSS 3D
        return (
            <div className="relative" style={{ perspective: '400px', width: 120, height: 100 }}>
                <div
                    className="absolute inset-0 transition-transform duration-700"
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: currentView === 'front' ? 'rotateX(-15deg) rotateY(-20deg)'
                            : currentView === 'side' ? 'rotateX(-15deg) rotateY(-70deg)'
                                : 'rotateX(-70deg) rotateY(-20deg)',
                    }}
                >
                    {shape.css3d?.faces.map((face, i) => (
                        <div
                            key={i}
                            className={`absolute ${face.bg} ${face.w || 'w-[80px]'} ${face.h || 'h-[80px]'} border border-white/30 flex items-center justify-center text-white/60 text-xs font-bold`}
                            style={{
                                transform: face.transform,
                                backfaceVisibility: 'hidden',
                                left: '50%',
                                top: '50%',
                                marginLeft: '-40px',
                                marginTop: '-40px',
                            }}
                        >
                            {face.label}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const handleQuizAnswer = (option) => {
        const correct = option === QUIZ_QUESTIONS[quizIdx].answer;
        setQuizAnswer(option);
        setQuizFeedback(correct ? 'correct' : 'wrong');
        if (correct) setQuizScore(prev => prev + 1);
        setTimeout(() => {
            setQuizAnswer(null);
            setQuizFeedback(null);
            if (quizIdx < QUIZ_QUESTIONS.length - 1) {
                setQuizIdx(prev => prev + 1);
            } else {
                setQuizIdx(0);
            }
        }, 1500);
    };

    return (
        <div className="space-y-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-3">
                    <Camera className="text-indigo-500 w-8 h-8" /> 3D积木照相馆
                </h3>
                <p className="text-slate-500 dark:text-slate-400">从不同角度给积木拍照，看看它们变成什么形状！</p>
            </div>

            {/* Mode Toggle */}
            <div className="flex justify-center">
                <div className="inline-flex bg-slate-100 dark:bg-slate-700 rounded-full p-1">
                    <button
                        onClick={() => setMode('explore')}
                        className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${mode === 'explore' ? 'bg-white dark:bg-slate-600 text-indigo-600 shadow-sm' : 'text-slate-500'}`}
                    >
                        <Eye className="w-4 h-4 inline mr-1" /> 自由探索
                    </button>
                    <button
                        onClick={() => setMode('quiz')}
                        className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${mode === 'quiz' ? 'bg-white dark:bg-slate-600 text-indigo-600 shadow-sm' : 'text-slate-500'}`}
                    >
                        <Trophy className="w-4 h-4 inline mr-1" /> 答题闯关
                    </button>
                </div>
            </div>

            {mode === 'explore' ? (
                <>
                    {/* Shape Selector */}
                    <div className="grid grid-cols-4 gap-3">
                        {SHAPES.map((s, i) => (
                            <button
                                key={i}
                                onClick={() => { setSelectedShape(i); setCurrentView('front'); }}
                                className={`p-4 rounded-xl flex flex-col items-center gap-2 transition-all border-2 ${selectedShape === i
                                        ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-400 scale-105 shadow-md'
                                        : 'bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 hover:border-indigo-300'
                                    }`}
                            >
                                <span className="text-3xl">{s.emoji}</span>
                                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{s.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Main Display */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* 3D Model */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[200px] border border-slate-200 dark:border-slate-700">
                            <p className="text-xs text-slate-400 mb-4 font-bold">立体模型</p>
                            {render3DModel()}
                            <p className="mt-4 text-sm font-bold text-slate-600 dark:text-slate-400">{shape.emoji} {shape.name}</p>
                        </div>

                        {/* 2D View */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[200px] border-2 border-dashed border-slate-200 dark:border-slate-700">
                            <p className="text-xs text-slate-400 mb-4 font-bold">📸 拍出的照片</p>
                            {renderShapeView()}
                        </div>
                    </div>

                    {/* View Angle Buttons */}
                    <div className="grid grid-cols-3 gap-3">
                        {VIEW_ANGLES.map(v => (
                            <button
                                key={v.key}
                                onClick={() => setCurrentView(v.key)}
                                className={`p-4 rounded-xl flex flex-col items-center gap-2 transition-all border-2 ${currentView === v.key
                                        ? 'bg-indigo-500 text-white border-indigo-600 shadow-lg'
                                        : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-indigo-300'
                                    }`}
                            >
                                <span className="text-2xl">{v.icon}</span>
                                <span className="text-sm font-bold">{v.label}</span>
                                <span className="text-xs opacity-70">{v.desc}</span>
                            </button>
                        ))}
                    </div>

                    {/* Summary Table */}
                    <div className="bg-slate-50 dark:bg-slate-900/30 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <p className="text-sm font-bold text-slate-600 dark:text-slate-400 mb-3">📋 {shape.name} 的三张照片</p>
                        <div className="grid grid-cols-3 gap-3 text-center text-sm">
                            {VIEW_ANGLES.map(v => (
                                <div key={v.key} className={`py-2 px-3 rounded-lg font-bold ${currentView === v.key ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                                    <p className="text-xs text-slate-400">{v.label}</p>
                                    <p className="text-base">{shape.views[v.key]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                /* Quiz Mode */
                <div className="space-y-6">
                    <div className="text-center">
                        <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-4 py-1 rounded-full text-sm font-bold">
                            ⭐ 得分：{quizScore} / {QUIZ_QUESTIONS.length}
                        </span>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl text-center">
                        <p className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                            {QUIZ_QUESTIONS[quizIdx].question}
                        </p>
                        <div className="grid grid-cols-2 gap-3 mt-4 max-w-sm mx-auto">
                            {QUIZ_QUESTIONS[quizIdx].options.map(opt => (
                                <button
                                    key={opt}
                                    onClick={() => !quizAnswer && handleQuizAnswer(opt)}
                                    disabled={!!quizAnswer}
                                    className={`p-4 rounded-xl font-bold text-sm transition-all border-2 ${quizAnswer === opt
                                            ? quizFeedback === 'correct'
                                                ? 'bg-green-100 border-green-500 text-green-700'
                                                : 'bg-red-100 border-red-500 text-red-700'
                                            : quizAnswer && opt === QUIZ_QUESTIONS[quizIdx].answer
                                                ? 'bg-green-100 border-green-500 text-green-700'
                                                : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 hover:border-indigo-400 text-slate-700 dark:text-slate-300'
                                        }`}
                                >
                                    {opt}
                                    {quizAnswer === opt && quizFeedback === 'correct' && <CheckCircle2 className="inline w-4 h-4 ml-1" />}
                                    {quizAnswer === opt && quizFeedback === 'wrong' && <XCircle className="inline w-4 h-4 ml-1" />}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Tip */}
            <div className="flex items-start gap-2 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl">
                <HelpCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                    <strong>摄影师秘籍：</strong>同一个积木从不同方向看到的形状可能不一样哦！正方体最专一，从哪里看都是正方形。圆柱最多变，正面像长方形，上面像圆形！
                </p>
            </div>
        </div>
    );
};

export default Object3DViewerLab;

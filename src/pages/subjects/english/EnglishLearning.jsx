import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { englishKnowledgeBase } from '../../../data/englishCurriculum';
import { BookOpen, Star, Clock, Brain, Compass, Users } from 'lucide-react';

const STAGES = [
    { id: 'elementary', label: '小学', icon: '🐣', color: 'from-amber-400 to-yellow-500', bg: 'bg-amber-100', text: 'text-amber-700', description: '培养英语语感与拼读基础' },
    { id: 'middle', label: '初中', icon: '🧑‍🎓', color: 'from-amber-500 to-orange-500', bg: 'bg-orange-100', text: 'text-orange-700', description: '建立英语时态与从句体系' },
    { id: 'high', label: '高中', icon: '🏛️', color: 'from-orange-500 to-red-500', bg: 'bg-red-100', text: 'text-red-700', description: '突破长难句与英语写作' }
];

const STAGE_FEATURES = {
    elementary: [
        { icon: Brain, title: "自然拼读", desc: "掌握看字能读、听音能写" },
        { icon: Compass, title: "趣味情境", desc: "在生活对话中运用英语" },
        { icon: Users, title: "地道表达", desc: "培养纯正的英语语感" }
    ],
    middle: [
        { icon: BookOpen, title: "系统语法", desc: "构建完整的初中语法网络" },
        { icon: Brain, title: "阅读策略", desc: "掌握多种阅读技巧拆解文章" },
        { icon: Compass, title: "写作模板", desc: "积累高分作文句型与连词" }
    ],
    high: [
        { icon: Compass, title: "长难句拆解", desc: "庖丁解牛突破阅读障碍" },
        { icon: Brain, title: "读后续写", desc: "掌握高级词汇与微动作描写" },
        { icon: BookOpen, title: "全真题库", desc: "直击高考易错题与必考点" }
    ]
};

const EnglishLearning = () => {
    const navigate = useNavigate();
    const [activeStage, setActiveStage] = useState('elementary');
    const [activeGrade, setActiveGrade] = useState(0);

    const currentStageData = englishKnowledgeBase[activeStage];
    const grades = currentStageData.grades;
    const features = STAGE_FEATURES[activeStage];

    const currentGrade = grades[activeGrade];

    const handleTopicClick = (topicId) => {
        navigate(`/subjects/english/${topicId}`);
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-slate-50 dark:bg-slate-900 pb-12 pt-8">
            <div className="max-w-7xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
                {/* 顶部介绍区 */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-3">
                        <span className="text-5xl">🔤</span>
                        AI7Miao 英语体系
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        采用AI互动+情景教学，打破哑巴英语。从自然拼读到高考冲刺，全面提升听说读写能力。
                    </p>
                </div>

                {/* 学段选择器 */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white/50 dark:bg-slate-800/50 p-2 rounded-2xl flex gap-2 overflow-x-auto max-w-full">
                        {STAGES.map((stage) => {
                            const isActive = activeStage === stage.id;
                            return (
                                <button
                                    key={stage.id}
                                    onClick={() => {
                                        setActiveStage(stage.id);
                                        setActiveGrade(0); // 切换学段时重置年级
                                    }}
                                    className={`
                                        flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300
                                        ${isActive
                                            ? `bg-gradient-to-r ${stage.color} text-white shadow-lg scale-105`
                                            : 'hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300'
                                        }
                                        whitespace-nowrap
                                    `}
                                >
                                    <span className="text-2xl">{stage.icon}</span>
                                    <div className="text-left">
                                        <div className="font-bold">{stage.label}</div>
                                        <div className={`text-xs ${isActive ? 'text-white/80' : 'text-slate-400'}`}>
                                            {stage.description}
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* 学段核心特色 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div key={index} className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl border border-amber-100/50 dark:border-amber-900/20 hover:shadow-xl transition-all">
                                <div className={`w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center mb-4 text-amber-600 dark:text-amber-400`}>
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{feature.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{feature.desc}</p>
                            </div>
                        );
                    })}
                </div>

                {/* 年级选择与内容展示区 */}
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/50 dark:border-slate-700/50">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                        {/* 左侧：年级导航 */}
                        <div className="lg:w-1/4">
                            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                                <BookOpen className="text-amber-500" />
                                {currentStageData.name}进阶路线
                            </h2>
                            <div className="flex lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
                                {grades.map((grade, index) => {
                                    const isActive = activeGrade === index;
                                    return (
                                        <button
                                            key={grade.id}
                                            onClick={() => setActiveGrade(index)}
                                            className={`
                                                flex-col items-start p-4 rounded-xl text-left transition-all min-w-[160px] lg:min-w-0
                                                border-2 ${isActive
                                                    ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20 shadow-md'
                                                    : 'border-transparent hover:bg-slate-50 dark:hover:bg-slate-700/50'
                                                }
                                            `}
                                        >
                                            <div className={`font-bold text-lg mb-1 ${isActive ? 'text-amber-700 dark:text-amber-400' : 'text-slate-700 dark:text-slate-300'}`}>
                                                {grade.name}
                                            </div>
                                            <div className={`text-sm ${isActive ? 'text-amber-600 dark:text-amber-500' : 'text-slate-500 dark:text-slate-400'}`}>
                                                {grade.subtitle}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* 右侧：课程内容 */}
                        <div className="lg:w-3/4">
                            <div className="space-y-8">
                                <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
                                        <span className={`w-3 h-8 rounded-full bg-gradient-to-b ${currentStageData.color}`}></span>
                                        {currentGrade.name}学习内容
                                    </h3>
                                </div>

                                {Object.values(currentGrade.tracks).map(track => (
                                    <div key={track.name} className="space-y-4">
                                        <h4 className="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-slate-200">
                                            <span>{track.icon}</span>
                                            {track.name}
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {track.topics.map(topic => (
                                                <button
                                                    key={topic.id}
                                                    onClick={() => handleTopicClick(topic.id)}
                                                    className="group text-left bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-600 hover:shadow-xl transition-all relative overflow-hidden"
                                                >
                                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-400/10 to-transparent rounded-bl-full -z-10 transition-transform group-hover:scale-150" />

                                                    <div className="flex justify-between items-start mb-3">
                                                        <h5 className="font-bold text-lg text-slate-800 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                                            {topic.name}
                                                        </h5>
                                                        {topic.important && (
                                                            <span className="bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400 text-xs px-2 py-1 rounded-full flex items-center gap-1 font-medium shrink-0">
                                                                <Star size={12} className="fill-current" /> 重点
                                                            </span>
                                                        )}
                                                    </div>

                                                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                                                        <span className="flex items-center gap-1">
                                                            <div className={`w-2 h-2 rounded-full ${topic.difficulty === '基础' ? 'bg-amber-400' :
                                                                topic.difficulty === '进阶' ? 'bg-orange-500' : 'bg-rose-500'
                                                                }`} />
                                                            {topic.difficulty}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Clock size={14} />
                                                            {topic.time}
                                                        </span>
                                                    </div>

                                                    <div className="mt-4 flex items-center justify-between text-sm font-medium text-amber-600 dark:text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                                        <span>进入学习</span>
                                                        <span>→</span>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnglishLearning;

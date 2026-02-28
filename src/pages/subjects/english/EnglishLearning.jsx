import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
    Search, BookOpen, ChevronRight, Sparkles, Clock, Star,
    Brain, Target, Zap, Lightbulb, PenTool, Globe, Languages
} from 'lucide-react';

import { englishKnowledgeBase } from '../../../data/englishCurriculum';

const stageConfig = {
    elementary: {
        label: '小学', icon: '🐣', ageRange: '6-12岁', subtitle: '趣味互动，培养英语语感与拼读基础', features: [
            { icon: '🔤', title: '自然拼读', description: '掌握看字能读、听音能写，打下坚实发音基础' },
            { icon: '🎯', title: '趣味情境', description: '在真实生活对话中运用英语，告别哑巴英语' },
            { icon: '🗣️', title: '地道表达', description: '原汁原味的语料输入，培养纯正的英语语感' },
            { icon: '🌟', title: '分层进阶', description: '基础达标+能力拓展两条路径，适合不同水平的学生' }
        ]
    },
    middle: {
        label: '初中', icon: '🧑‍🎓', ageRange: '13-15岁', subtitle: '构建体系，突破语法难关与阅读障碍', features: [
            { icon: '🕸️', title: '系统语法', description: '构建完整的初中语法网络，各个击破考点' },
            { icon: '📖', title: '阅读策略', description: '掌握略读、寻读等多种技巧精准拆解文章' },
            { icon: '✍️', title: '写作突破', description: '积累高分作文句型与连词，轻松应对中考作文' },
            { icon: '🎓', title: '中考冲刺', description: '真题演练，直击中考英语高频考点与核心得分点' }
        ]
    },
    high: {
        label: '高中', icon: '🏛️', ageRange: '16-18岁', subtitle: '决战高考，深入剖析长难句与高级写作', features: [
            { icon: '🔍', title: '长难句剖析', description: '庖丁解牛式分析长难句结构，跨越阅读鸿沟' },
            { icon: '🎭', title: '读后续写', description: '掌握高级词汇与微动作描写，写出引人入胜的故事' },
            { icon: '🧩', title: '语法填空', description: '揭秘四大词性转换法则与无提示词必杀技' },
            { icon: '🏆', title: '全真题库', description: '高考真题实战演练，全面提升综合应试能力' }
        ]
    }
};

const EnglishLearning = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const urlStage = searchParams.get('gradeType');
    const urlGrade = searchParams.get('gradeLevel');

    const [activeStage, setActiveStage] = useState(urlStage || 'elementary');
    const [activeGrade, setActiveGrade] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

    // Handle initial routing from subjects page correctly
    useEffect(() => {
        if (urlStage && ['elementary', 'middle', 'high'].includes(urlStage)) {
            setActiveStage(urlStage);
        }
    }, [urlStage]);

    // Make sure activeGrade matches the URL parameter if present
    useEffect(() => {
        const stageData = englishKnowledgeBase[activeStage];
        if (!stageData) return;

        if (urlGrade) {
            const index = stageData.grades.findIndex(g => g.name.includes(urlGrade));
            if (index !== -1) {
                setActiveGrade(index);
                return;
            }
        }
        setActiveGrade(0);
    }, [activeStage, urlGrade]);

    // Handle tab switching
    const handleStageChange = (stage) => {
        setActiveStage(stage);
        setSearchParams({ gradeType: stage });
    };

    const handleGradeChange = (index, gradeName) => {
        setActiveGrade(index);
        const match = gradeName.match(/([一二三四五六七八九十]+)年级/);
        if (match) {
            const numMap = { '一': 1, '二': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7, '八': 8, '九': 9, '高一': 10, '高二': 11, '高三': 12 };
            // Simple handling for middle/high school name mapping
            let num = numMap[match[1]];
            if (activeStage === 'middle') {
                num = numMap[match[1]] + 6;
            } else if (activeStage === 'high' && !num) {
                if (gradeName.includes('高一')) num = 10;
                if (gradeName.includes('高二')) num = 11;
                if (gradeName.includes('高三')) num = 12;
            }

            if (num) {
                setSearchParams({ gradeType: activeStage, gradeLevel: num });
                return;
            }
        }
        setSearchParams({ gradeType: activeStage });
    };

    const currentStageData = englishKnowledgeBase[activeStage];
    const currentGradeData = currentStageData?.grades[activeGrade];
    const activeConfig = stageConfig[activeStage];

    // 获取当前学段的所有模块以便搜索
    const getFlattenedModules = () => {
        let allModules = [];
        if (!currentGradeData) return allModules;

        Object.entries(currentGradeData.tracks).forEach(([trackId, trackData]) => {
            allModules.push({
                trackId,
                trackName: trackData.name,
                trackIcon: trackData.icon,
                topics: trackData.topics
            });
        });

        return allModules;
    };

    const moduleData = getFlattenedModules();

    // 根据搜索词过滤知识点
    const filteredModules = moduleData.map(topicGroup => {
        // 对于知识点列表结构
        const filteredTopics = topicGroup.topics.filter(topic =>
            topic.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (filteredTopics.length > 0) {
            return {
                ...topicGroup,
                topics: filteredTopics
            };
        }
        return null;
    }).filter(Boolean);


    return (
        <div className="min-h-[calc(100vh-4rem)] bg-slate-50 dark:bg-slate-900 pb-12 pt-8">
            <Helmet>
                <title>系统英语学习 - K12英语知识框架 | AI7Miao</title>
                <meta name="description" content="AI7Miao系统英语学习，提供从小学拼读到高中写作的全覆盖知识框架。" />
            </Helmet>

            <div className="max-w-7xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
                {/* Header with Navigation */}
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-3xl -translate-y-12 translate-x-12"></div>

                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <Languages className="w-8 h-8 text-amber-500" />
                                <h1 className="text-3xl font-bold text-slate-800 dark:text-white">AI7Miao 英语体系</h1>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300">
                                打破哑巴英语，听说读写全面提升，掌握原汁原味英语思维。
                            </p>
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full md:w-72 lg:w-96">
                            <input
                                type="text"
                                placeholder="搜索当前学段知识点..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow text-slate-700 dark:text-slate-200"
                            />
                            <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>

                    {/* Stage Selector */}
                    <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-700 flex flex-wrap gap-4">
                        {Object.entries(stageConfig).map(([key, config]) => (
                            <button
                                key={key}
                                onClick={() => handleStageChange(key)}
                                className={`flex items-center justify-between px-6 py-4 rounded-2xl w-full sm:w-auto sm:min-w-[200px] transition-all
                                    ${activeStage === key
                                        ? `bg-gradient-to-r ${englishKnowledgeBase[key].color} text-white shadow-lg scale-105 ring-2 ring-white/20`
                                        : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">{config.icon}</span>
                                    <span className="font-bold text-lg">{config.label}</span>
                                </div>
                                <ChevronRight className={`w-5 h-5 ${activeStage === key ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Stage Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {activeConfig.features.map((feature, idx) => (
                        <div key={idx} className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl p-5 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-colors">
                            <div className="text-2xl mb-2">{feature.icon}</div>
                            <h3 className="font-bold text-slate-800 dark:text-white mb-1">{feature.title}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Curriculum Framework */}
                <section className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Grades Navigation (Left Side) */}
                        <div className="lg:w-1/4 xl:w-1/5 shrink-0 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-700 pb-6 lg:pb-0 lg:pr-6">
                            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                                <span className={`w-3 h-8 rounded-full bg-gradient-to-b ${currentStageData.color}`}></span>
                                {activeConfig.label}路线图
                            </h2>

                            <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                {currentStageData?.grades.map((grade, index) => (
                                    <button
                                        key={grade.id}
                                        onClick={() => handleGradeChange(index, grade.name)}
                                        className={`flex flex-col text-left px-5 py-4 rounded-2xl min-w-[140px] lg:min-w-0 transition-all border-2
                                            ${activeGrade === index
                                                ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20 shadow-md transform lg:translate-x-2'
                                                : 'border-transparent bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800'
                                            }
                                        `}
                                    >
                                        <div className="flex items-center justify-between w-full mb-1">
                                            <span className={`font-bold text-lg ${activeGrade === index ? 'text-amber-700 dark:text-amber-400' : 'text-slate-700 dark:text-slate-300'}`}>
                                                {grade.name}
                                            </span>
                                            {activeGrade === index && <Sparkles className="w-4 h-4 text-amber-500" />}
                                        </div>
                                        <span className={`text-xs ${activeGrade === index ? 'text-amber-600 dark:text-amber-500' : 'text-slate-500 dark:text-slate-400'}`}>
                                            {grade.subtitle}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Modules Content (Right Side) */}
                        <div className="lg:w-3/4 xl:w-4/5">
                            {filteredModules.length > 0 ? (
                                <div className="space-y-10">
                                    {filteredModules.map((track) => (
                                        <div key={track.trackId} className="relative">
                                            {/* Track Title */}
                                            <div className="flex items-center gap-3 mb-6 sticky top-0 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm py-2 z-10">
                                                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-xl shadow-sm">
                                                    {track.trackIcon}
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                                                    {track.trackName}
                                                </h3>
                                            </div>

                                            {/* Topics Grid */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                                {track.topics.map((topic) => (
                                                    <Link
                                                        key={topic.id}
                                                        to={`/subjects/english/${topic.id}`}
                                                        className="group block bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-amber-400 dark:hover:border-amber-500 hover:shadow-lg transition-all"
                                                    >
                                                        <div className="mb-4">
                                                            <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{topic.name}</h4>
                                                            <div className="flex flex-wrap gap-2 text-xs">
                                                                <span className={`px-2 py-1 rounded-full ${topic.difficulty === '基础' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                                                    'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                                                                    }`}>{topic.difficulty}</span>
                                                                <span className="px-2 py-1 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-full flex items-center gap-1">
                                                                    <Clock className="w-3 h-3" />{topic.time}
                                                                </span>
                                                                {topic.important && (
                                                                    <span className="px-2 py-1 bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 rounded-full flex items-center gap-1">
                                                                        <Star className="w-3 h-3" />重点
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center gap-2 font-semibold text-sm text-amber-600 dark:text-amber-400">
                                                            <span>开始学习</span>
                                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-20 bg-slate-50 dark:bg-slate-900 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700">
                                    <div className="text-4xl mb-4">🔍</div>
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">未找到匹配的结果</h3>
                                    <p className="text-slate-500 dark:text-slate-400">
                                        当前学段中没有包含 "{searchQuery}" 的知识点，请尝试调整搜索词。
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Educational Theory */}
                <section className="py-16 px-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-3xl mt-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">🎓 科学的英语学习法</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">AI智能陪练，打破哑巴英语，听说读写全面进步</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: Languages, title: '语感培养', desc: '从自然拼读开始，沉浸式情境对话，建立母语级别的英语语感', color: 'amber' },
                                { icon: Brain, title: '语法网络', desc: '摒弃死记硬背，理解时态与句式的底层逻辑，扫清阅读障碍', color: 'orange' },
                                { icon: PenTool, title: '进阶输出', desc: '从写小短文到读后续写，提供高分模板与逻辑指导，攻克写作难关', color: 'red' },
                            ].map((item, i) => (
                                <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                                    <div className={`w-12 h-12 bg-${item.color}-100 dark:bg-${item.color}-900/30 rounded-lg flex items-center justify-center mb-4`}>
                                        <item.icon className={`w-6 h-6 text-${item.color}-600 dark:text-${item.color}-400`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{item.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default EnglishLearning;

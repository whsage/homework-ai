import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
    Search, BookOpen, ChevronRight, Sparkles, Clock, Star,
    Brain, Target, Zap, Lightbulb, PenTool, Languages
} from 'lucide-react';

import { englishKnowledgeBase } from '../../../data/englishCurriculum';

const stageConfig = {
    elementary: {
        label: '小学', icon: '🐣', ageRange: '6-12岁', subtitle: '趣味互动，培养英语语感与拼读基础', features: [
            { icon: '🔤', title: '情境化教学', description: '用生活对话、游戏互动等方式，让英语学习变得生动有趣' },
            { icon: '🎯', title: '苏格拉底式引导', description: '通过提问引发思考，让学生自己发现语言规律，理解更深刻' },
            { icon: '🗣️', title: '听说读写结合', description: '从自然拼读到看图说话，全面培养母语级别的语言能力' },
            { icon: '🌟', title: '分层进阶', description: '基础达标+能力拓展两条路径，适合不同水平的学生' }
        ]
    },
    middle: {
        label: '初中', icon: '🧑‍🎓', ageRange: '12-15岁', subtitle: '构建体系，突破语法难关与阅读障碍', features: [
            { icon: '🕸️', title: '语法深入', description: '系统学习时态、语态、复合句，掌握核心语法网络' },
            { icon: '📖', title: '阅读策略', description: '掌握略读、寻读技巧，从长难句分析到段落大意精准提取' },
            { icon: '✍️', title: '写作突破', description: '从短文写作到书信应用文，积累高分句型与连词' },
            { icon: '🎓', title: '中考备战', description: '针对中考题型，真题演练，直击中考英语高频考点' }
        ]
    },
    high: {
        label: '高中', icon: '🏛️', ageRange: '15-18岁', subtitle: '决战高考，深入剖析长难句与高级写作', features: [
            { icon: '🔍', title: '长难句深度分析', description: '庖丁解牛式分析长难句结构，跨越阅读鸿沟' },
            { icon: '🧠', title: '高阶思维培养', description: '从阅读理解到读后续写，提升分析批判与逻辑重构能力' },
            { icon: '✍️', title: '高考写作升级', description: '掌握高级词汇与修辞手法，提升跨文化交际与表达高度' },
            { icon: '🏆', title: '全面冲刺', description: '阅读七选五、完形填空、语法填空各板块满分策略与攻略' }
        ]
    }
};

const EnglishLearning = () => {
    const [searchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeGradeType, setActiveGradeType] = useState('elementary');
    const [currentSubGrade, setCurrentSubGrade] = useState(1);
    const [currentTrack, setCurrentTrack] = useState('l1');

    useEffect(() => {
        const gradeType = searchParams.get('gradeType');
        const level = searchParams.get('gradeLevel');
        const track = searchParams.get('track');
        if (gradeType && ['elementary', 'middle', 'high'].includes(gradeType)) {
            setActiveGradeType(gradeType);
            // Set default grade for the stage
            if (gradeType === 'middle' && (!level || parseInt(level) < 7)) setCurrentSubGrade(7);
            else if (gradeType === 'high' && (!level || parseInt(level) < 10)) setCurrentSubGrade(10);
            else if (gradeType === 'elementary' && (!level || parseInt(level) > 6)) setCurrentSubGrade(1);
        }
        if (level && !isNaN(parseInt(level))) setCurrentSubGrade(parseInt(level));
        if (track && ['l1', 'l2'].includes(track)) setCurrentTrack(track);
    }, [searchParams]);

    const currentStage = englishKnowledgeBase[activeGradeType];
    const stageInfo = stageConfig[activeGradeType];

    // Get selected grade/track topics
    let filteredModules = [];
    const selectedGradeData = currentStage.grades.find(g => g.id === `grade-${currentSubGrade}`);
    if (selectedGradeData) {
        const selectedTrackData = selectedGradeData.tracks[currentTrack];
        if (selectedTrackData) {
            filteredModules = [{
                id: currentTrack,
                name: selectedTrackData.name,
                icon: selectedTrackData.icon,
                topics: selectedTrackData.topics.filter(topic =>
                    topic.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
            }].filter(module => module.topics.length > 0);
        }
    }

    // All topic IDs
    const allTopicIds = Object.values(englishKnowledgeBase).flatMap(stage =>
        stage.grades.flatMap(g =>
            Object.values(g.tracks).flatMap(t => t.topics.map(tp => tp.id))
        )
    );

    // Total stats
    const totalTopics = allTopicIds.length;
    const totalGrades = Object.values(englishKnowledgeBase).reduce((sum, s) => sum + s.grades.length, 0);

    // Handle stage change
    const handleStageChange = (stage) => {
        setActiveGradeType(stage);
        const firstGrade = englishKnowledgeBase[stage].grades[0];
        if (firstGrade) {
            setCurrentSubGrade(parseInt(firstGrade.id.replace('grade-', '')));
        }
        setCurrentTrack('l1');
    };

    return (
        <>
            <Helmet>
                <title>英语学习中心 - 小学初中高中英语知识点学习 | AI奇妙</title>
                <meta name="description" content="英语系统化学习平台，涵盖小学初中高中，自然拼读、词汇语法、阅读理解、写作技巧。AI苏格拉底式教学引导。" />
                <meta name="keywords" content="英语学习,小学英语,初中英语,高中英语,自然拼读,词汇,阅读理解,语法,写作,AI教学" />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                {/* Hero Section */}
                <section className="relative overflow-hidden py-16 px-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 dark:from-amber-500/5 dark:to-orange-500/5"></div>
                    <div className="max-w-7xl mx-auto relative">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 rounded-full text-amber-600 dark:text-amber-400 text-sm font-medium mb-6">
                                <Sparkles className="w-4 h-4" />
                                <span className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">新课标英语知识体系</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
                                英语学习中心
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-300 mb-4 max-w-3xl mx-auto">
                                系统化知识点学习 + AI智能辅导
                            </p>
                            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8">
                                自然拼读 · 词汇语法 · 阅读理解 · 英语写作 · AI互动学习
                            </p>

                            {/* Search Bar */}
                            <div className="max-w-2xl mx-auto">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="搜索英语知识点..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:border-amber-500 dark:focus:border-amber-400 focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg">
                                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">{totalTopics}+</div>
                                <div className="text-sm text-slate-600 dark:text-slate-400">知识点</div>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg">
                                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">{totalGrades}</div>
                                <div className="text-sm text-slate-600 dark:text-slate-400">年级覆盖</div>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg">
                                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">AI</div>
                                <div className="text-sm text-slate-600 dark:text-slate-400">互动学习</div>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg">
                                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">24/7</div>
                                <div className="text-sm text-slate-600 dark:text-slate-400">随时学习</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stage Selector Tabs */}
                <section className="py-6 px-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex justify-center gap-4">
                            {Object.entries(stageConfig).map(([key, config]) => (
                                <button
                                    key={key}
                                    onClick={() => handleStageChange(key)}
                                    className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all ${activeGradeType === key
                                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg scale-105'
                                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:shadow-md border border-slate-200 dark:border-slate-600'
                                        }`}
                                >
                                    <span className="text-2xl">{config.icon}</span>
                                    <div className="text-left">
                                        <div className="text-lg">{config.label}英语</div>
                                        <div className="text-xs opacity-80">{config.ageRange}</div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Grade Selector & Content */}
                <section className="py-12 px-6">
                    <div className="max-w-7xl mx-auto">
                        {/* Teaching Features */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-12 border border-slate-100 dark:border-slate-700">
                            <div className="text-center mb-10">
                                <span className="inline-block px-4 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full text-sm mb-4">{stageInfo.ageRange}</span>
                                <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">{stageInfo.label}英语辅导</h3>
                                <p className="text-lg text-slate-600 dark:text-slate-400">{stageInfo.subtitle}</p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6 mb-10">
                                {stageInfo.features.map((feature, index) => (
                                    <div key={index} className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                                        <div className="text-3xl">{feature.icon}</div>
                                        <div>
                                            <h5 className="font-semibold text-slate-800 dark:text-white mb-2">{feature.title}</h5>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-800/50">
                                <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-purple-900 dark:text-purple-200">
                                    <strong>教育理论支撑：</strong>基于二语习得理论（SLA）和克拉申的输入假说（Input Hypothesis），结合情境交际法提升核心素养。
                                </p>
                            </div>
                        </div>

                        {/* Grade Selector */}
                        <div className="mb-12 space-y-6">
                            <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-2xl p-6 border border-orange-100 dark:border-orange-800/30">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 text-center">选择年级</h3>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {currentStage.grades.map((grade) => {
                                        const gradeNum = parseInt(grade.id.replace('grade-', ''));
                                        return (
                                            <button
                                                key={grade.id}
                                                onClick={() => setCurrentSubGrade(gradeNum)}
                                                className={`px-6 py-3 rounded-xl font-semibold transition-all ${currentSubGrade === gradeNum
                                                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg scale-105'
                                                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:shadow-md'
                                                    }`}
                                            >
                                                <div className="text-lg">{grade.name}</div>
                                                {grade.subtitle && <div className="text-xs mt-1 opacity-80">{grade.subtitle}</div>}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* L1/L2 Track Toggle */}
                            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">学习难度</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">选择适合你的学习路径</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => setCurrentTrack('l1')}
                                            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${currentTrack === 'l1'
                                                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                                                : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:shadow-md'
                                                }`}
                                        >
                                            <span className="text-xl">📚</span>
                                            <span>基础达标 (L1)</span>
                                        </button>
                                        <button
                                            onClick={() => setCurrentTrack('l2')}
                                            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${currentTrack === 'l2'
                                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                                                : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:shadow-md'
                                                }`}
                                        >
                                            <span className="text-xl">🌟</span>
                                            <span>能力拓展 (L2)</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Knowledge Header */}
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                                {currentStage.name}知识体系
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400">循序渐进的学习路径，点击卡片开始学习</p>
                        </div>

                        {/* Topic Cards */}
                        <div className="space-y-8">
                            {filteredModules.map((module) => (
                                <div key={module.id} className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="text-4xl">{module.icon}</div>
                                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{module.name}</h3>
                                        <span className="ml-auto text-sm text-slate-500 dark:text-slate-400">{module.topics.length} 个知识点</span>
                                    </div>

                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {module.topics.map((topic) => {
                                            const isReady = allTopicIds.includes(topic.id);
                                            return (
                                                <Link
                                                    key={topic.id}
                                                    to={`/subjects/english/${topic.id}`}
                                                    className="group relative bg-gradient-to-br from-slate-50 to-orange-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 hover:shadow-lg transition-all border border-transparent hover:border-amber-500 hover:scale-[1.02]"
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
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {searchQuery && filteredModules.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-slate-500 dark:text-slate-400">没有找到匹配的知识点，试试其他关键词</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Educational Theory */}
                <section className="py-16 px-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">🎓 科学的学习方法</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">基于新课标英语课程标准的系统化学习体系</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: Languages, title: '语言素养', desc: '从拼读到原版阅读，从词汇到长难句语法，培养深度英语语言能力', color: 'amber' },
                                { icon: PenTool, title: '交际与写作', description: '从基础对话到跨文化交流与高考写续作，提升流利表达', color: 'green' },
                                { icon: Lightbulb, title: '思维跨越', desc: '通过AI全景互动引导，用英语进行辩证思考，摆脱中式英语', color: 'purple' },
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
        </>
    );
};

export default EnglishLearning;

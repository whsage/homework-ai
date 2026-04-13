import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { knowledgeBase } from '../data/mathCurriculum';
import { chineseKnowledgeBase } from '../data/chineseCurriculum';
import { englishKnowledgeBase } from '../data/englishCurriculum';

// 阶段标签配置
const STAGE_CONFIG = {
    math: {
        elementary: { label: '小学数学', emoji: '🎨', color: 'from-pink-500 to-rose-500', bg: 'bg-pink-50 dark:bg-pink-900/20', border: 'border-pink-200 dark:border-pink-800', tag: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300', path: '/subjects/math' },
        middle:     { label: '初中数学', emoji: '🧠', color: 'from-blue-500 to-indigo-500', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800', tag: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300', path: '/subjects/math' },
        high:       { label: '高中数学', emoji: '⚡', color: 'from-violet-500 to-purple-500', bg: 'bg-violet-50 dark:bg-violet-900/20', border: 'border-violet-200 dark:border-violet-800', tag: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300', path: '/subjects/math' },
    },
    chinese: {
        elementary: { label: '小学语文', emoji: '📖', color: 'from-red-500 to-rose-500', bg: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-800', tag: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300', path: '/subjects/chinese' },
        middle:     { label: '初中语文', emoji: '📝', color: 'from-red-600 to-rose-600', bg: 'bg-rose-50 dark:bg-rose-900/20', border: 'border-rose-200 dark:border-rose-800', tag: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300', path: '/subjects/chinese' },
        high:       { label: '高中语文', emoji: '🎓', color: 'from-red-700 to-rose-700', bg: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-800', tag: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200', path: '/subjects/chinese' },
    },
    english: {
        elementary: { label: '小学英语', emoji: '🔤', color: 'from-amber-500 to-yellow-500', bg: 'bg-amber-50 dark:bg-amber-900/20', border: 'border-amber-200 dark:border-amber-800', tag: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300', path: '/subjects/english' },
        middle:     { label: '初中英语', emoji: '📚', color: 'from-amber-600 to-orange-500', bg: 'bg-orange-50 dark:bg-orange-900/20', border: 'border-orange-200 dark:border-orange-800', tag: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300', path: '/subjects/english' },
        high:       { label: '高中英语', emoji: '🌍', color: 'from-orange-500 to-amber-600', bg: 'bg-yellow-50 dark:bg-yellow-900/20', border: 'border-yellow-200 dark:border-yellow-800', tag: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300', path: '/subjects/english' },
    },
};

// 通用的阶段渲染组件（静态、可爬取）
function SubjectStageSection({ stageKey, stageData, config, topicUrlPrefix }) {
    if (!stageData?.grades) return null;
    const grades = stageData.grades;

    return (
        <div className={`rounded-2xl border ${config.border} ${config.bg} p-6 mb-6`}>
            <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">{config.emoji}</span>
                <div>
                    <h2 className={`text-xl font-bold bg-gradient-to-r ${config.color} bg-clip-text text-transparent`}>
                        {config.label}
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        {grades.length} 个年级 · {grades.reduce((n, g) => n + Object.values(g.tracks).reduce((m, t) => m + t.topics.length, 0), 0)} 个知识点
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {grades.map(grade => (
                    <div key={grade.id} className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm">
                        <h3 className="font-bold text-slate-800 dark:text-white mb-3 text-sm">
                            {config.label.replace(/小学|初中|高中/, '').trim().replace('数学', '').replace('语文', '').replace('英语', '') + grade.name}
                            <span className="font-normal text-slate-400 ml-1">· {grade.subtitle}</span>
                        </h3>
                        <div className="space-y-2">
                            {Object.values(grade.tracks).map((track, ti) => (
                                <div key={ti}>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-1.5 flex items-center gap-1">
                                        <span>{track.icon}</span> {track.name}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {track.topics.map(topic => (
                                            <Link
                                                key={topic.id}
                                                to={`${topicUrlPrefix}/${topic.id}`}
                                                className={`text-xs px-2 py-1 rounded-full ${config.tag} hover:opacity-80 transition-opacity font-medium`}
                                                title={`${grade.name}${config.label} ${topic.name} - AI辅导练习`}
                                            >
                                                {topic.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const KnowledgeMapPage = () => {
    return (
        <>
            <Helmet>
                <title>知识点导航 - 数学语文英语全年级知识点索引 | AI奇妙</title>
                <meta name="description" content="AI奇妙知识点导航：涵盖小学、初中、高中数学、语文、英语全年级200+知识点。一年级到高三，每个知识点都有AI辅导和练习题。快速定位你需要的知识点。" />
                <meta name="keywords" content="知识点导航,小学数学知识点,初中数学知识点,高中数学知识点,小学语文知识点,初中语文知识点,高中语文知识点,小学英语知识点,初中英语知识点,高中英语知识点,数学辅导,语文辅导,英语辅导,年级知识点,AI学习辅导" />
                <link rel="canonical" href="https://ai7miao.com/knowledge-map" />
            </Helmet>

            <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
                {/* Hero */}
                <section className="bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600 py-16 px-6">
                    <div className="max-w-5xl mx-auto text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            📚 知识点全景导航
                        </h1>
                        <p className="text-xl text-indigo-100 mb-3">
                            数学 · 语文 · 英语 · 小学到高中 · 200+ 知识点
                        </p>
                        <p className="text-indigo-200 text-sm">
                            每个知识点都配有AI智能辅导 · 例题详解 · 练习题库
                        </p>
                    </div>
                </section>

                {/* 快速入口 */}
                <section className="max-w-5xl mx-auto px-6 py-8">
                    <div className="grid grid-cols-3 gap-4 mb-10">
                        {[
                            { label: '数学知识点', emoji: '📐', href: '#math', desc: '小学·初中·高中', color: 'bg-pink-50 border-pink-200 hover:bg-pink-100 dark:bg-pink-900/20 dark:border-pink-800' },
                            { label: '语文知识点', emoji: '📖', href: '#chinese', desc: '小学·初中·高中', color: 'bg-red-50 border-red-200 hover:bg-red-100 dark:bg-red-900/20 dark:border-red-800' },
                            { label: '英语知识点', emoji: '🌍', href: '#english', desc: '小学·初中·高中', color: 'bg-amber-50 border-amber-200 hover:bg-amber-100 dark:bg-amber-900/20 dark:border-amber-800' },
                        ].map(item => (
                            <a
                                key={item.label}
                                href={item.href}
                                className={`flex flex-col items-center p-5 rounded-2xl border-2 transition-all ${item.color} text-center no-underline`}
                            >
                                <span className="text-3xl mb-2">{item.emoji}</span>
                                <span className="font-bold text-slate-800 dark:text-white text-sm md:text-base">{item.label}</span>
                                <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">{item.desc}</span>
                            </a>
                        ))}
                    </div>

                    {/* ===== 数学 ===== */}
                    <section id="math" className="mb-12 scroll-mt-20">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-4xl">📐</span>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">数学知识点</h2>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">小学一年级到高三，系统化数学知识点辅导</p>
                            </div>
                        </div>

                        <SubjectStageSection
                            stageKey="elementary"
                            stageData={knowledgeBase.elementary}
                            config={STAGE_CONFIG.math.elementary}
                            topicUrlPrefix="/subjects/math"
                        />
                        <SubjectStageSection
                            stageKey="middle"
                            stageData={knowledgeBase.middle}
                            config={STAGE_CONFIG.math.middle}
                            topicUrlPrefix="/subjects/math"
                        />
                        <SubjectStageSection
                            stageKey="high"
                            stageData={knowledgeBase.high}
                            config={STAGE_CONFIG.math.high}
                            topicUrlPrefix="/subjects/math"
                        />
                    </section>

                    {/* ===== 语文 ===== */}
                    <section id="chinese" className="mb-12 scroll-mt-20">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-4xl">📖</span>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">语文知识点</h2>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">从拼音识字到文言文鉴赏，全面覆盖语文知识体系</p>
                            </div>
                        </div>

                        <SubjectStageSection
                            stageKey="elementary"
                            stageData={chineseKnowledgeBase.elementary}
                            config={STAGE_CONFIG.chinese.elementary}
                            topicUrlPrefix="/subjects/chinese"
                        />
                        <SubjectStageSection
                            stageKey="middle"
                            stageData={chineseKnowledgeBase.middle}
                            config={STAGE_CONFIG.chinese.middle}
                            topicUrlPrefix="/subjects/chinese"
                        />
                        <SubjectStageSection
                            stageKey="high"
                            stageData={chineseKnowledgeBase.high}
                            config={STAGE_CONFIG.chinese.high}
                            topicUrlPrefix="/subjects/chinese"
                        />
                    </section>

                    {/* ===== 英语 ===== */}
                    <section id="english" className="mb-12 scroll-mt-20">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-4xl">🌍</span>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">英语知识点</h2>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">字母拼读到高考英语，系统化英语语法与应试辅导</p>
                            </div>
                        </div>

                        <SubjectStageSection
                            stageKey="elementary"
                            stageData={englishKnowledgeBase.elementary}
                            config={STAGE_CONFIG.english.elementary}
                            topicUrlPrefix="/subjects/english"
                        />
                        <SubjectStageSection
                            stageKey="middle"
                            stageData={englishKnowledgeBase.middle}
                            config={STAGE_CONFIG.english.middle}
                            topicUrlPrefix="/subjects/english"
                        />
                        <SubjectStageSection
                            stageKey="high"
                            stageData={englishKnowledgeBase.high}
                            config={STAGE_CONFIG.english.high}
                            topicUrlPrefix="/subjects/english"
                        />
                    </section>

                    {/* SEO 文字区域 — 对搜索引擎可见，对用户也友好 */}
                    <section className="mt-8 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4">关于AI奇妙知识点辅导</h2>
                        <div className="text-slate-600 dark:text-slate-400 text-sm space-y-3 leading-relaxed">
                            <p>
                                AI奇妙为小学、初中、高中学生提供全面的<strong>数学知识点辅导</strong>、<strong>语文知识点辅导</strong>和<strong>英语知识点辅导</strong>。
                                每个知识点都配有系统化的概念讲解、典型例题分析和专项练习题。
                            </p>
                            <p>
                                <strong>小学数学辅导</strong>覆盖一年级到六年级的全部核心知识点，包括四则运算、分数、小数、几何图形等。
                                <strong>初中数学辅导</strong>涵盖有理数、方程、函数、几何证明等初中重点难点。
                                <strong>高中数学辅导</strong>包含集合、函数、三角函数、解析几何、导数等高考核心模块。
                            </p>
                            <p>
                                <strong>小学语文辅导</strong>从拼音识字出发，覆盖阅读理解、写作技法、古诗词等。
                                <strong>初中语文辅导</strong>深入文言文阅读、议论文写作、名著导读等。
                                <strong>高中语文辅导</strong>攻克高考阅读理解、作文写作、文学鉴赏等难点。
                            </p>
                            <p>
                                <strong>小学英语辅导</strong>从字母拼读开始，建立语法基础。
                                <strong>初中英语辅导</strong>系统讲解时态、从句、被动语态等语法体系。
                                <strong>高中英语辅导</strong>针对高考阅读、写作、完形填空进行专项训练。
                            </p>
                            <p>
                                所有知识点均采用AI智能辅导方式，通过苏格拉底式教学引导学生独立思考，提供24小时在线答疑服务。
                            </p>
                        </div>
                    </section>
                </section>
            </div>
        </>
    );
};

export default KnowledgeMapPage;

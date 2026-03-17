import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, MessageCircle, ChevronRight, Home, ChevronLeft } from 'lucide-react';
import { getAdjacentTopics } from '../../../data/mathCurriculum';
import { getChineseAdjacentTopics } from '../../../data/chineseCurriculum';
import { getEnglishAdjacentTopics } from '../../../data/englishCurriculum';

const TopicLayout = ({
    meta,           // { title, description, keywords }
    info,           // { title, tags: [{text, color, icon}], description }
    tabs,           // [{ id, label, icon }]
    activeTab,      // current active tab id
    onTabChange,    // function to handle tab change
    actions,        // optional right-side actions in header (e.g. AI button)
    children        // main content
}) => {
    const { topicId } = useParams();
    const location = useLocation();
    const isChinese = location.pathname.includes('/subjects/chinese');
    const isEnglish = location.pathname.includes('/subjects/english');
    const subjectLabel = isEnglish ? '英语' : (isChinese ? '语文' : '数学');
    const subjectPath = isEnglish ? '/subjects/english' : (isChinese ? '/subjects/chinese' : '/subjects/math');
    const { prev, next } = topicId ? (
        isEnglish ? getEnglishAdjacentTopics(topicId) :
            (isChinese ? getChineseAdjacentTopics(topicId) : getAdjacentTopics(topicId))
    ) : { prev: null, next: null };


    // Breadcrumb logic
    const getBreadcrumbs = () => {
        const gradeTag = info.tags.find(t => t.text.includes('年级'));
        const breadcrumbs = [];

        // 1. Subject Home
        breadcrumbs.push({ label: subjectLabel, link: subjectPath });

        if (gradeTag) {
            const text = gradeTag.text;
            const numMap = { '一': 1, '二': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7, '八': 8, '九': 9 };
            const num = Object.entries(numMap).find(([k]) => text.includes(k))?.[1];

            if (num) {
                // 2. Stage (Primary/Middle)
                if (num <= 6) {
                    if (!isChinese && !isEnglish) breadcrumbs.push({ label: '小学', link: '/subjects/math?gradeType=elementary' });
                    // 3. Grade
                    breadcrumbs.push({ label: text, link: isEnglish ? `/subjects/english?gradeLevel=${num}` : (isChinese ? `/subjects/chinese?gradeLevel=${num}` : `/subjects/math?gradeType=elementary&gradeLevel=${num}`) });
                } else if (num >= 7 && num <= 9) {
                    if (!isChinese && !isEnglish) breadcrumbs.push({ label: '初中', link: '/subjects/math?gradeType=middle' });
                    // Middle school modules
                    breadcrumbs.push({ label: text, link: isEnglish ? '/subjects/english?gradeType=middle' : (isChinese ? '/subjects/chinese?gradeType=middle' : '/subjects/math?gradeType=middle') });
                } else if (num >= 10 && num <= 12) {
                    if (!isChinese && !isEnglish) breadcrumbs.push({ label: '高中', link: '/subjects/math?gradeType=high' });
                    breadcrumbs.push({ label: text, link: isEnglish ? '/subjects/english?gradeType=high' : (isChinese ? '/subjects/chinese?gradeType=high' : '/subjects/math?gradeType=high') });
                }
            } else {
                // Fallback if no specific grade number found but "Grade" tag exists
                breadcrumbs.push({ label: text, link: subjectPath });
            }
        }
        return breadcrumbs;
    };

    const breadcrumbs = getBreadcrumbs();

    // Tag rendering helper
    const renderTag = (tag, index) => {
        const colorClasses = {
            blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
            red: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
            slate: "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300",
            orange: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
            green: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
        };
        const className = `px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${colorClasses[tag.color] || colorClasses.slate}`;
        const Icon = tag.icon;

        return (
            <span key={index} className={className}>
                {Icon && <Icon className="w-3 h-3" />}
                {tag.text}
            </span>
        );
    };

    return (
        <>
            <Helmet>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />
            </Helmet>

            {/* Header */}
            <section className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6 overflow-x-auto no-scrollbar whitespace-nowrap">
                        <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            <Home className="w-4 h-4" />
                        </Link>
                        {breadcrumbs.map((crumb, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <ChevronRight className="w-4 h-4 flex-shrink-0 text-slate-300" />
                                <Link to={crumb.link} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                    {crumb.label}
                                </Link>
                            </div>
                        ))}
                        <ChevronRight className="w-4 h-4 flex-shrink-0 text-slate-300" />
                        <span className="font-medium text-slate-800 dark:text-slate-200 truncate max-w-[200px] md:max-w-none">
                            {info.title}
                        </span>
                    </nav>

                    <div className="flex items-start justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-4xl">📈</span>
                                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
                                    {info.title}
                                </h1>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {info.tags.map(renderTag)}
                            </div>
                            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
                                {info.description}
                            </p>
                        </div>

                        {actions}
                    </div>
                </div>
            </section>

            {/* Tabs - Sticky */}
            <section className="sticky top-0 z-30 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="flex gap-2 overflow-x-auto no-scrollbar">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => onTabChange(tab.id)}
                                    className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all whitespace-nowrap border-b-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 ${activeTab === tab.id
                                        ? 'text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/10'
                                        : 'text-slate-600 dark:text-slate-400 border-transparent hover:text-slate-800 dark:hover:text-slate-200'
                                        }`}
                                >
                                    {Icon && <Icon className="w-5 h-5" />}
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-8 md:py-12 px-4 md:px-6 bg-slate-50 dark:bg-slate-900 min-h-screen">
                <div className="max-w-7xl mx-auto space-y-8">
                    {children}

                    {/* Bottom Navigation */}
                    {(prev || next) && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                            {prev ? (
                                <Link
                                    to={prev.link}
                                    className="group flex flex-col p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-md transition-all text-left"
                                >
                                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
                                        <ChevronLeft className="w-4 h-4" />
                                        上一节
                                    </div>
                                    <span className="text-lg font-semibold text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                                        {prev.name}
                                    </span>
                                </Link>
                            ) : (
                                <div /> /* Spacer */
                            )}

                            {next ? (
                                <Link
                                    to={next.link}
                                    className="group flex flex-col p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-md transition-all text-right items-end"
                                >
                                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
                                        下一节
                                        <ChevronRight className="w-4 h-4" />
                                    </div>
                                    <span className="text-lg font-semibold text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                                        {next.name}
                                    </span>
                                </Link>
                            ) : null}
                        </div>
                    )}
                </div>
            </section>

            {/* Shared Footer CTA */}
            <section className="py-12 md:py-16 px-4 md:px-6 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                准备好开始练习了吗？
                            </h2>
                            <p className="text-xl text-indigo-100 mb-8">
                                如果你遇到难题，可以上传获得AI辅导
                            </p>
                            <Link
                                to="/new"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                            >
                                上传作业题目
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO Keywords Footer */}
            <section className="py-8 px-4 md:px-6 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="text-xs text-slate-500 dark:text-slate-500 space-y-2">
                        <p>
                            <strong>相关内容：</strong>
                            {meta.keywords.split(',').join(' | ')}
                        </p>
                        <p>
                            AI奇妙 - 专业的知识点学习平台，基于教育理论，提供深度的知识点讲解和AI互动学习
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TopicLayout;

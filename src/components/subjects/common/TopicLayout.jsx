import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, MessageCircle, ChevronRight } from 'lucide-react';

const TopicLayout = ({
    meta,           // { title, description, keywords }
    info,           // { title, tags: [{text, color, icon}], description }
    tabs,           // [{ id, label, icon }]
    activeTab,      // current active tab id
    onTabChange,    // function to handle tab change
    actions,        // optional right-side actions in header (e.g. AI button)
    children        // main content
}) => {

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

            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                {/* Header */}
                <section className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
                        <Link
                            to="/subjects/math"
                            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 mb-4 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            返回知识点中心
                        </Link>

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

                {/* Tabs */}
                <section className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-10 shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 md:px-6">
                        <div className="flex gap-2 overflow-x-auto no-scrollbar">
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => onTabChange(tab.id)}
                                        className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all whitespace-nowrap ${activeTab === tab.id
                                            ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400'
                                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
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
                <section className="py-8 md:py-12 px-4 md:px-6">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </section>

                {/* Shared Footer CTA - Can be overridden or hidden if needed via props, but beneficial to keep standard */}
                <section className="py-12 md:py-16 px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-12 shadow-2xl">
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
                </section>

                {/* SEO Keywords Footer */}
                <section className="py-8 px-4 md:px-6 bg-slate-100 dark:bg-slate-900">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="text-xs text-slate-500 dark:text-slate-400 space-y-2">
                            <p>
                                <strong>相关内容：</strong>
                                {meta.keywords.split(',').join(' | ')}
                            </p>
                            <p>
                                AI7Miao - 专业的数学知识点学习平台，基于教育理论，提供深度的知识点讲解和AI互动学习
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default TopicLayout;

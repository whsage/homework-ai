import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Calculator, Search, BookOpen, Atom, Languages, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Subjects = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            <Helmet>
                <title>知识点学习中心 - 科学的学习体系 | AI7Miao</title>
                <meta name="description" content="AI7Miao知识点学习中心，提供数学、物理、英语等全学科的系统化AI辅导。" />
            </Helmet>

            <div className="max-w-6xl mx-auto p-6 md:p-8 space-y-12">
                {/* Header */}
                <header className="text-center py-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        探索知识的海洋
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        选择一个学科，开启基于 K12 知识图谱的系统化学习之旅。我们的 AI 导师将全程陪伴，个性化指导。
                    </p>

                    {/* Search (Decorator) */}
                    <div className="max-w-xl mx-auto mt-8 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="搜索具体的知识点，例如 '二次函数'..."
                            className="block w-full pl-10 pr-3 py-3 border border-slate-300 dark:border-slate-700 rounded-xl leading-5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm shadow-sm transition-all"
                        />
                    </div>
                </header>

                {/* Subjects Grid */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <BookOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">核心学科</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Mathematics (Active) */}
                        <Link
                            to="/subjects/math"
                            className="group relative flex flex-col bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                                    <Calculator className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                </div>
                                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full">
                                    已上线
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 transition-colors">
                                数学 (Mathematics)
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-1">
                                涵盖小学算术到大学微积分，包括代数、几何、概率论等核心领域。
                            </p>

                            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-100 dark:border-slate-700">
                                <span>100+ 知识点</span>
                                <span className="flex items-center text-indigo-600 font-semibold group-hover:translate-x-1 transition-transform">
                                    进入学科 →
                                </span>
                            </div>
                        </Link>

                        {/* Physics */}
                        <div className="relative flex flex-col bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 opacity-75">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                                    <Atom className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                                </div>
                                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 text-xs font-bold rounded-full">
                                    即将推出
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                物理 (Physics)
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-1">
                                探索力学、电磁学、光学和量子物理的奥秘。
                            </p>
                        </div>

                        {/* English */}
                        <div className="relative flex flex-col bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 opacity-75">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl">
                                    <Languages className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                                </div>
                                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 text-xs font-bold rounded-full">
                                    即将推出
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                英语 (English)
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-1">
                                词汇、语法、阅读与写作的全方位提升。
                            </p>
                        </div>

                        {/* Chinese */}
                        <div className="relative flex flex-col bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 opacity-75">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl">
                                    <BookOpen className="w-8 h-8 text-red-600 dark:text-red-400" />
                                </div>
                                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 text-xs font-bold rounded-full">
                                    即将推出
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                语文 (Chinese)
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-1">
                                古诗文赏析、现代文阅读与写作指导。
                            </p>
                        </div>
                    </div>
                </section>

                {/* AI Feature Teaser */}
                <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            不仅是题库，更是你的私人AI导师
                        </h2>
                        <p className="text-indigo-100 text-lg mb-8">
                            基于知识图谱，通过智能对话精准诊断你的薄弱环节，并提供针对性的练习。
                        </p>
                        <Link to="/history" className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors">
                            <Brain className="w-5 h-5" />
                            去上传作业试试
                        </Link>
                    </div>
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/30 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
                </section>
            </div>
        </div>
    );
};

export default Subjects;

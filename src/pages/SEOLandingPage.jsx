import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, Brain, CheckCircle, TrendingUp, Users, Zap, Camera, BarChart3 } from 'lucide-react';

const SEOLandingPage = () => {
    return (
        <>
            <Helmet>
                <title>AI作业辅导 - 智能在线辅导平台 | 数学物理化学英语作业帮助</title>
                <meta name="description" content="AI7Miao提供专业的AI作业辅导服务，支持数学作业、物理作业、化学作业、英语作业等全学科在线辅导。采用苏格拉底式教学方法，引导学生独立思考，提供24小时智能作业辅导和学习统计分析。" />
                <meta name="keywords" content="作业辅导,AI辅导,在线辅导,作业帮助,数学作业,物理作业,化学作业,英语作业,智能辅导,学习辅导,作业答疑,在线学习,AI教育,作业AI,学习助手" />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
                {/* Hero Section - 作业辅导核心 */}
                <section className="max-w-7xl mx-auto px-6 py-16">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-slate-800 dark:text-white mb-6">
                            AI智能作业辅导平台
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 mb-4 max-w-3xl mx-auto">
                            专业的在线作业辅导服务，提供数学、物理、化学、英语等全学科作业帮助。
                            采用AI智能辅导技术，让作业辅导更高效、更智能。
                        </p>
                        <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">
                            24小时在线作业辅导 | 苏格拉底式教学 | 智能学习统计
                        </p>
                        <Link
                            to="/new"
                            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
                        >
                            开始作业辅导
                        </Link>
                    </div>

                    {/* 作业辅导学科覆盖 */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-3">📐</div>
                            <h3 className="font-semibold text-slate-800 dark:text-white mb-2">数学作业辅导</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">代数、几何、微积分等数学作业全覆盖</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-3">🧲</div>
                            <h3 className="font-semibold text-slate-800 dark:text-white mb-2">物理作业辅导</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">力学、电磁学、光学等物理作业辅导</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-3">🧬</div>
                            <h3 className="font-semibold text-slate-800 dark:text-white mb-2">化学作业辅导</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">有机化学、无机化学等化学作业帮助</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-3">🌍</div>
                            <h3 className="font-semibold text-slate-800 dark:text-white mb-2">英语作业辅导</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">语法、阅读、写作等英语作业辅导</p>
                        </div>
                    </div>
                </section>

                {/* 为什么选择我们的作业辅导 */}
                <section className="bg-white dark:bg-slate-800 py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
                            为什么选择AI7Miao作业辅导？
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Brain className="text-indigo-600 dark:text-indigo-400" size={32} />
                                </div>
                                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">智能作业辅导</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    AI智能分析作业题目，提供针对性的辅导方案，让作业辅导更高效
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <BookOpen className="text-blue-600 dark:text-blue-400" size={32} />
                                </div>
                                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">全学科作业覆盖</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    支持数学、物理、化学、英语等多学科作业辅导，一站式解决作业问题
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Camera className="text-emerald-600 dark:text-emerald-400" size={32} />
                                </div>
                                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">拍照即可辅导</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    拍照上传作业题目，AI自动识别并开始辅导，作业辅导从未如此简单
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <BarChart3 className="text-orange-600 dark:text-orange-400" size={32} />
                                </div>
                                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">学习数据统计</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    记录每次作业辅导过程，提供详细的学习统计和进步分析
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 作业辅导流程 */}
                <section className="max-w-7xl mx-auto px-6 py-16">
                    <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
                        作业辅导三步走
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm">
                            <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                                1
                            </div>
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">上传作业</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                拍照或上传作业题目，选择对应的学科（数学作业、物理作业、化学作业等），开始智能作业辅导
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                                2
                            </div>
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">AI智能辅导</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                AI导师采用苏格拉底式教学，通过提问引导思考，而不是直接给出答案，真正的作业辅导
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm">
                            <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                                3
                            </div>
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">掌握知识</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                在辅导过程中理解解题思路，真正掌握知识点，作业辅导的最终目标是学会而不是完成
                            </p>
                        </div>
                    </div>
                </section>

                {/* 作业辅导特色 */}
                <section className="bg-gradient-to-r from-indigo-600 to-blue-600 py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center text-white mb-12">
                            <h2 className="text-3xl font-bold mb-4">专业的在线作业辅导平台</h2>
                            <p className="text-xl text-indigo-100">
                                不仅仅是作业答案，更是学习方法的辅导
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                            <div className="text-center">
                                <CheckCircle size={48} className="mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">苏格拉底式辅导</h3>
                                <p className="text-indigo-100">
                                    通过提问引导学生独立思考，培养解决问题的能力，这是真正有效的作业辅导方式
                                </p>
                            </div>
                            <div className="text-center">
                                <Zap size={48} className="mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">24小时在线辅导</h3>
                                <p className="text-indigo-100">
                                    随时随地获得作业辅导，不受时间和地点限制，AI导师全天候在线提供作业帮助
                                </p>
                            </div>
                            <div className="text-center">
                                <TrendingUp size={48} className="mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">学习进步可见</h3>
                                <p className="text-indigo-100">
                                    详细的作业辅导记录和学习统计，让每一次进步都清晰可见，激励持续学习
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 常见作业辅导问题 */}
                <section className="max-w-7xl mx-auto px-6 py-16">
                    <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
                        作业辅导常见问题
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
                            <h3 className="font-semibold text-slate-800 dark:text-white mb-3">什么样的作业可以获得辅导？</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                我们的AI作业辅导平台支持数学作业、物理作业、化学作业、英语作业、语文作业等多学科作业辅导。无论是选择题、计算题还是应用题，都可以获得专业的辅导帮助。
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
                            <h3 className="font-semibold text-slate-800 dark:text-white mb-3">作业辅导会直接给答案吗？</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                不会。我们的作业辅导采用苏格拉底式教学方法，通过提问引导学生思考，帮助学生理解解题思路，而不是简单地提供作业答案。这样的辅导方式更有助于学习。
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
                            <h3 className="font-semibold text-slate-800 dark:text-white mb-3">如何开始使用作业辅导服务？</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                非常简单！注册账号后，拍照上传作业题目，选择对应学科，AI导师就会开始为你提供作业辅导。整个过程不到1分钟，让作业辅导变得轻松便捷。
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
                            <h3 className="font-semibold text-slate-800 dark:text-white mb-3">作业辅导服务收费吗？</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                目前我们提供免费的作业辅导服务，让每个学生都能获得高质量的学习辅导。我们相信优质的作业辅导应该惠及每一位学习者。
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="max-w-4xl mx-auto px-6 py-16 text-center">
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                        立即开始智能作业辅导
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                        加入AI7Miao，体验专业的在线作业辅导服务。数学作业、物理作业、化学作业、英语作业，全学科作业辅导，让学习更高效！
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/register"
                            className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg"
                        >
                            免费注册开始辅导
                        </Link>
                        <Link
                            to="/faq"
                            className="bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors border-2 border-indigo-600 dark:border-indigo-400"
                        >
                            了解更多
                        </Link>
                    </div>
                </section>

                {/* Footer Keywords */}
                <section className="bg-slate-100 dark:bg-slate-900 py-8">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center text-sm text-slate-500 dark:text-slate-400">
                            <p className="mb-2">
                                <strong>相关服务：</strong>
                                作业辅导 | AI辅导 | 在线辅导 | 数学作业辅导 | 物理作业辅导 | 化学作业辅导 | 英语作业辅导 |
                                作业帮助 | 智能辅导 | 学习辅导 | 作业答疑 | 在线学习 | AI教育 | 学习助手 | 作业AI
                            </p>
                            <p>
                                AI7Miao - 专业的AI智能作业辅导平台，提供全学科在线作业辅导服务
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default SEOLandingPage;

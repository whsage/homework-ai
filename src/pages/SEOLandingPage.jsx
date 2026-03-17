import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, Brain, CheckCircle, TrendingUp, Users, Zap, Camera, BarChart3 } from 'lucide-react';

const SEOLandingPage = () => {
    return (
        <>
            <Helmet>
                <title>AI学习辅导 - 智能在线学习平台 | 数学物理化学英语学习帮助</title>
                <meta name="description" content="AI奇妙提供专业的AI学习辅导服务，支持数学学习、物理学习、化学学习、英语学习等全学科在线辅导。采用苏格拉底式教学方法，引导学生独立思考，提供24小时智能学习辅导和学习统计分析。" />
                <meta name="keywords" content="学习辅导,AI辅导,在线辅导,学习帮助,数学学习,物理学习,化学学习,英语学习,智能辅导,学习辅导,学习答疑,在线学习,AI教育,学习AI,学习助手" />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
                {/* Hero Section - 学习辅导核心 */}
                <section className="max-w-7xl mx-auto px-6 py-16">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-slate-800 dark:text-white mb-6">
                            AI智能学习辅导平台
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 mb-4 max-w-3xl mx-auto">
                            专业的在线学习辅导服务，提供数学、物理、化学、英语等全学科学习帮助。
                            采用AI智能学习技术，让学习辅导更高效、更智能。
                        </p>
                        <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">
                            24小时在线学习辅导 | 苏格拉底式教学 | 智能学习统计
                        </p>
                        <Link
                            to="/new"
                            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
                        >
                            开始学习辅导
                        </Link>
                    </div>

                    {/* 学习辅导学科覆盖 */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-3">📐</div>
                            <h3 className="font-semibold text-slate-800 dark:text-white mb-2">数学学习辅导</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">代数、几何、微积分等数学学习全覆盖</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-3">🧲</div>
                            <h3 className="font-semibold text-slate-800 dark:text-white mb-2">物理学习辅导</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">力学、电磁学、光学等物理学习辅导</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-3">🧬</div>
                            <h3 className="font-semibold text-slate-800 dark:text-white mb-2">化学学习辅导</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">有机化学、无机化学等化学学习帮助</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-3">🌍</div>
                            <h3 className="font-semibold text-slate-800 dark:text-white mb-2">英语学习辅导</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">语法、阅读、写作等英语学习辅导</p>
                        </div>
                    </div>
                </section>

                {/* 为什么选择我们的学习辅导 */}
                <section className="bg-white dark:bg-slate-800 py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
                            为什么选择AI奇妙学习辅导？
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Brain className="text-indigo-600 dark:text-indigo-400" size={32} />
                                </div>
                                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">智能学习辅导</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    AI智能分析学习题目，提供针对性的辅导方案，让学习更高效
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <BookOpen className="text-blue-600 dark:text-blue-400" size={32} />
                                </div>
                                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">全学科覆盖</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    支持数学、物理、化学、英语等多学科学习辅导，一站式解决学习问题
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Camera className="text-emerald-600 dark:text-emerald-400" size={32} />
                                </div>
                                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">拍照即可辅导</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    拍照上传学习题目，AI自动识别并开始辅导，学习辅导从未如此简单
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <BarChart3 className="text-orange-600 dark:text-orange-400" size={32} />
                                </div>
                                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">学习数据统计</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    记录每次学习辅导过程，提供详细的学习统计和进步分析
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 学习辅导流程 */}
                <section className="max-w-7xl mx-auto px-6 py-16">
                    <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
                        学习辅导三步走
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm">
                            <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                                1
                            </div>
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">上传题目</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                拍照或上传学习题目，选择对应的学科（数学学习、物理学习、化学学习等），开始智能学习辅导
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                                2
                            </div>
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">AI智能辅导</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                AI导师采用苏格拉底式教学，通过提问引导思考，而不是直接给出答案，真正的学习辅导
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm">
                            <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                                3
                            </div>
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">掌握知识</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                在辅导过程中理解解题思路，真正掌握知识点，学习辅导的最终目标是学会而不是完成
                            </p>
                        </div>
                    </div>
                </section>

                {/* 学习辅导特色 */}
                <section className="bg-gradient-to-r from-indigo-600 to-blue-600 py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center text-white mb-12">
                            <h2 className="text-3xl font-bold mb-4">专业的在线学习辅导平台</h2>
                            <p className="text-xl text-indigo-100">
                                不仅仅是学习答案，更是学习方法的辅导
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                            <div className="text-center">
                                <CheckCircle size={48} className="mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">苏格拉底式辅导</h3>
                                <p className="text-indigo-100">
                                    通过提问引导学生独立思考，培养解决问题的能力，这是真正有效的学习辅导方式
                                </p>
                            </div>
                            <div className="text-center">
                                <Zap size={48} className="mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">24小时在线辅导</h3>
                                <p className="text-indigo-100">
                                    随时随地获得学习辅导，不受时间和地点限制，AI导师全天候在线提供学习帮助
                                </p>
                            </div>
                            <div className="text-center">
                                <TrendingUp size={48} className="mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">学习进步可见</h3>
                                <p className="text-indigo-100">
                                    详细的学习辅导记录和学习统计，让每一次进步都清晰可见，激励持续学习
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 常见学习辅导问题 */}
                <section className="max-w-7xl mx-auto px-6 py-16">
                    <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
                        学习辅导常见问题
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
                            <h3 className="font-semibold text-slate-800 dark:text-white mb-3">什么样的题目可以获得辅导？</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                我们的AI学习辅导平台支持数学、物理、化学、英语、语文等多学科学习辅导。无论是选择题、计算题还是应用题，都可以获得专业的辅导帮助。
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
                            <h3 className="font-semibold text-slate-800 dark:text-white mb-3">学习辅导会直接给答案吗？</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                不会。我们的学习辅导采用苏格拉底式教学方法，通过提问引导学生思考，帮助学生理解解题思路，而不是简单地提供题目答案。这样的辅导方式更有助于学习。
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
                            <h3 className="font-semibold text-slate-800 dark:text-white mb-3">如何开始使用学习辅导服务？</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                非常简单！注册账号后，拍照上传学习题目，选择对应学科，AI导师就会开始为你提供学习辅导。整个过程不到1分钟，让学习辅导变得轻松便捷。
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
                            <h3 className="font-semibold text-slate-800 dark:text-white mb-3">学习辅导服务收费吗？</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                目前我们提供免费的学习辅导服务，让每个学生都能获得高质量的学习辅导。我们相信优质的学习辅导应该惠及每一位学习者。
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="max-w-4xl mx-auto px-6 py-16 text-center">
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                        立即开始智能学习辅导
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                        加入AI奇妙，体验专业的在线学习辅导服务。数学学习、物理学习、化学学习、英语学习，全学科学习辅导，让学习更高效！
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
                                学习辅导 | AI辅导 | 在线辅导 | 数学学习辅导 | 物理学习辅导 | 化学学习辅导 | 英语学习辅导 |
                                学习帮助 | 智能辅导 | 学习辅导 | 学习答疑 | 在线学习 | AI教育 | 学习助手 | 学习AI
                            </p>
                            <p>
                                AI奇妙 - 专业的AI智能学习辅导平台，提供全学科在线学习辅导服务
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default SEOLandingPage;

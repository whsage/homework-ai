import { HelpCircle, BookOpen, DollarSign, Shield, Zap, MessageCircle } from 'lucide-react';

const FAQItem = ({ question, answer, icon: Icon }) => {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                    <Icon className="text-indigo-600 dark:text-indigo-400" size={24} />
                </div>
                <div>
                    <h3 className="font-semibold text-slate-800 dark:text-white mb-2">{question}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{answer}</p>
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            icon: HelpCircle,
            question: "AI作业助手是如何工作的？",
            answer: "AI作业助手采用先进的人工智能技术和苏格拉底式教学法，通过提问引导你思考，而不是直接给出答案。你可以输入问题或上传图片，AI会分析题目并通过一系列引导性问题帮助你理解解题思路。"
        },
        {
            icon: DollarSign,
            question: "使用AI作业助手需要付费吗？",
            answer: "目前AI作业助手完全免费使用。你只需要注册一个账号，就可以享受所有功能，包括全学科辅导、图片识别、学习统计等。我们致力于让每个学生都能获得优质的学习辅导。"
        },
        {
            icon: BookOpen,
            question: "支持哪些学科的作业辅导？",
            answer: "系统支持数学、语文、英语、物理、化学、生物、历史、地理、政治等全学科的作业辅导。无论是理科还是文科，从小学到高中，我们都能提供专业的学习指导。"
        },
        {
            icon: Shield,
            question: "AI会直接给我答案吗？",
            answer: "不会。我们采用苏格拉底式教学法，通过提问引导你思考，帮助你自己找到答案。这种方法能够培养你的独立思考能力和解决问题的能力，让你真正理解知识，而不是简单地记住答案。"
        },
        {
            icon: Zap,
            question: "解答的准确性如何？",
            answer: "我们的AI系统基于先进的深度学习模型，经过大量教育数据训练，能够提供高度准确的分析和引导。但我们建议将其作为学习辅助工具，培养独立思考能力，而不是完全依赖。"
        },
        {
            icon: MessageCircle,
            question: "如何获得更好的使用体验？",
            answer: "建议在提问时提供清晰的问题描述或高质量的图片。如果是数学题，可以说明具体的知识点；如果是文科题目，可以提供更多背景信息。同时，积极参与AI的引导性提问，会获得更好的学习效果。"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-200">
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">常见问题解答</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        关于AI作业助手的一切你想知道的
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>

                {/* Additional Info */}
                <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-4">还有其他问题？</h2>
                    <p className="mb-6 text-indigo-100">
                        我们随时准备帮助你。开始使用AI作业助手，体验智能学习的乐趣！
                    </p>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                    >
                        开始使用
                    </button>
                </div>

                {/* Features Highlight */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center">
                        <div className="text-4xl mb-3">🎯</div>
                        <h3 className="font-semibold text-slate-800 dark:text-white mb-2">引导式学习</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">培养独立思考能力</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center">
                        <div className="text-4xl mb-3">📚</div>
                        <h3 className="font-semibold text-slate-800 dark:text-white mb-2">全学科覆盖</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">从小学到高中全覆盖</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center">
                        <div className="text-4xl mb-3">📊</div>
                        <h3 className="font-semibold text-slate-800 dark:text-white mb-2">学习统计</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">可视化学习进度</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;

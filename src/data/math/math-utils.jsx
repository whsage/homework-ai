import {
    BookOpen,
    Lightbulb,
    Target,
    Calculator,
    TrendingUp,
    Award,
    Clock,
    Star,
    MessageCircle,
    CheckCircle,
    Brain,
    Sparkles,
    ChevronRight,
    AlertCircle,
    MousePointer2
} from 'lucide-react';

// 导出所有图标供各年级文件使用
export const Icons = {
    BookOpen,
    Lightbulb,
    Target,
    Calculator,
    TrendingUp,
    Award,
    Clock,
    Star,
    MessageCircle,
    CheckCircle,
    Brain,
    Sparkles,
    ChevronRight,
    AlertCircle,
    MousePointer2
};

// 辅助函数：生成默认内容 (用于尚未填充的知识点)
export const generateDefaultContent = (id, title, grade, Link) => ({
    meta: {
        title: `${title} - 初中数学知识点详解 | AI7Miao数学学习`,
        description: `详细讲解${title}的概念、性质和应用。提供${grade}数学AI互动学习。`,
        keywords: `${title},数学知识点,${grade}数学`
    },
    info: {
        title: title,
        description: `这是${grade}数学的重要内容。通过本节学习，你将掌握${title}的核心概念。`,
        tags: [
            { text: grade, color: "blue" },
            { text: "基础知识", color: "slate" },
        ]
    },
    aiContext: `学生正在学习${title}。请作为一位苏格拉底式AI导师，引导学生理解${title}的核心概念。不要直接给出定义或公式，而是通过生活中的例子或简单的问题引导学生思考。`,
    aiChatTitle: `AI互动学习：探索${title}`,
    aiChatIntro: `点击开始，AI导师将引导你一步步探索${title}的奥秘。`,
    tabs: {
        concept: (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                    什么是{title}？
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                    {title}的具体内容正在建设中。你可以点击上方的"AI智能对话"按钮，直接向AI导师提问学习。
                </p>
            </div>
        ),
        properties: (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                    核心性质
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                    内容建设中...
                </p>
            </div>
        ),
        examples: (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                    典型例题
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                    内容建设中...
                </p>
            </div>
        ),
        practice: (
            <div className="text-center p-8">
                <p className="text-slate-600 dark:text-slate-400 mb-4">练习题库正在准备中</p>
                <Link
                    to="/new"
                    className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                    上传作业题目进行练习
                </Link>
            </div>
        )
    }
});

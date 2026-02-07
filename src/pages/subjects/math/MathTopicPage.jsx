

import { useState, useEffect, useRef } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import {
    BookOpen,
    TrendingUp,
    Calculator,
    Award,
    MessageCircle,
    MousePointer2
} from 'lucide-react';

import TopicLayout from '../../../components/subjects/common/TopicLayout';
import AIChatSession from '../../../components/subjects/common/AIChatSession';
import SmartChat from '../../../components/learning/SmartChat';
import { mathTopicContent } from '../../../data/mathTopicContent';

const MathTopicPage = () => {
    const { topicId } = useParams();
    const [activeTab, setActiveTab] = useState('concept');
    const [showAIChat, setShowAIChat] = useState(false);
    const [aiContext, setAiContext] = useState(null);
    const aiChatRef = useRef(null);

    // 页面加载时滚动到顶部 - 已由 MainLayout 统一处理
    // 这里的 window.scrollTo 无效，因为滚动容器是 main 元素


    // 监听 showAIChat 变化，自动滚动到 AI 对话区域
    useEffect(() => {
        if (showAIChat && aiChatRef.current) {
            // 给予一点时间让 DOM 渲染完成
            const timer = setTimeout(() => {
                aiChatRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [showAIChat]);

    // 获取当前知识点数据
    const topicData = mathTopicContent[topicId];

    // 如果找不到数据，重定向到数学首页
    if (!topicData) {
        return <Navigate to="/subjects/math" replace />;
    }

    const { meta, info, tabs, aiChatTitle, aiChatIntro, aiMessages, aiContext: defaultAiContext } = topicData;

    const handleStartAIChat = (context) => {
        setAiContext(context || defaultAiContext);
        setShowAIChat(true);
        // 如果已经显示，直接滚动
        if (showAIChat && aiChatRef.current) {
            aiChatRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // 默认标签页配置
    const defaultTabs = [
        { id: 'concept', label: '核心概念', icon: BookOpen },
        ...(tabs.interactive ? [{ id: 'interactive', label: '互动实验室', icon: MousePointer2 }] : []),
        { id: 'properties', label: '性质', icon: TrendingUp },
        { id: 'examples', label: '典型例题', icon: Calculator },
        { id: 'practice', label: '练习题', icon: Award }
    ];

    return (
        <TopicLayout
            meta={meta}
            info={info}
            tabs={defaultTabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            actions={
                <button
                    onClick={() => handleStartAIChat(null)}
                    className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                    <MessageCircle className="w-5 h-5" />
                    {showAIChat ? '关闭AI对话' : 'AI智能对话'}
                </button>
            }
        >
            {/* 智能对话组件 */}
            {showAIChat && (
                <div ref={aiChatRef} className="mb-8 animate-fadeIn scroll-mt-24">
                    <SmartChat
                        topicId={topicId}
                        topicName={info.title}
                        initialContext={aiContext}
                        onClose={() => setShowAIChat(false)}
                    />
                </div>
            )}

            {/* AI互动学习引导 (仅在概念标签页显示) */}
            {activeTab === 'concept' && aiMessages && (
                <div className="mb-8">
                    {/* 如果有 AI Messages 才显示这个特定的 Chat Session 预览 */}
                    <AIChatSession
                        title={aiChatTitle || "AI互动学习"}
                        intro={aiChatIntro || "点击开始，AI导师将引导你深入理解。"}
                        messages={aiMessages}
                        onStart={() => handleStartAIChat(defaultAiContext)}
                    />
                </div>
            )}

            {/* 标签页内容渲染 */}
            <div className="mt-8">
                {tabs[activeTab] || <div className="text-center p-8 text-slate-500">内容建设中...</div>}
            </div>

            {/* Mobile AI Chat FAB */}
            <button
                onClick={() => handleStartAIChat(null)}
                className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full shadow-lg shadow-indigo-500/30 flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
                aria-label="AI智能对话"
            >
                {showAIChat ? <ChevronRight className="w-8 h-8 rotate-90" /> : <MessageCircle className="w-8 h-8" />}
            </button>
        </TopicLayout >
    );
};

export default MathTopicPage;

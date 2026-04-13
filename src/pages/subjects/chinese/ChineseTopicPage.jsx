import { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import {
    BookOpen,
    TrendingUp,
    Calculator,
    Award,
    MessageCircle,
    MousePointer2,
    ChevronRight
} from 'lucide-react';

import TopicLayout from '../../../components/subjects/common/TopicLayout';
import AIChatSession from '../../../components/subjects/common/AIChatSession';
import SmartChat from '../../../components/learning/SmartChat';
import { chineseTopicContent } from '../../../data/chineseTopicContent';
import RewardMiniCard from '../../../components/rewards/RewardMiniCard';
import { getChineseFlattenedTopics } from '../../../data/chineseCurriculum';

// 构建 topicId -> {grade, stage, name} 的查找表
const chineseTopicMeta = {};
for (const t of getChineseFlattenedTopics()) {
    chineseTopicMeta[t.id] = { grade: t.grade, stage: t.stage, name: t.name };
}

function buildChineseSEOMeta(topicId, originalMeta, topicName) {
    const info = chineseTopicMeta[topicId];
    if (!info) return originalMeta;
    const { grade, stage } = info;
    const gradeLabel = stage === '小学' ? grade : (stage === '初中' ? grade.replace('年级', '') : grade.replace('年级', ''));
    const prefix = `${gradeLabel}语文`;
    return {
        title: `${prefix} ${topicName} - AI辅导练习 | AI奇妙`,
        description: `AI奇妙提供${prefix}「${topicName}」知识点详解、例题分析和练习题。${prefix}重点知识AI智能辅导，24小时在线解答，让${grade}语文学习更轻松。`,
        keywords: `${prefix},${topicName},${prefix}辅导,${prefix}练习题,${prefix}知识点,${topicName}怎么学,${stage}语文辅导,AI语文辅导,${originalMeta.keywords || ''}`.replace(/,$/, '')
    };
}

const ChineseTopicPage = () => {
    const { topicId } = useParams();
    const [activeTab, setActiveTab] = useState('concept');
    const [showAIChat, setShowAIChat] = useState(false);
    const [aiContext, setAiContext] = useState(null);
    const aiChatRef = useRef(null);

    // 切换知识点时重置页面状态，避免导航后保留旧内容
    useEffect(() => {
        setActiveTab('concept');
        setShowAIChat(false);
        setAiContext(null);
    }, [topicId]);

    // 监听 showAIChat 变化，自动滚动到 AI 对话区域
    useEffect(() => {
        if (showAIChat && aiChatRef.current) {
            const timer = setTimeout(() => {
                aiChatRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [showAIChat]);

    // 获取当前知识点数据
    const topicData = chineseTopicContent[topicId];

    // 如果找不到数据，重定向到语文首页
    if (!topicData) {
        return <Navigate to="/subjects/chinese" replace />;
    }

    const { meta: rawMeta, info, tabs, aiChatTitle, aiChatIntro, aiMessages, aiContext: defaultAiContext } = topicData;

    // 动态增强 SEO meta（含年级关键词）
    const meta = useMemo(
        () => buildChineseSEOMeta(topicId, rawMeta, info.title),
        [topicId, rawMeta, info.title]
    );

    const handleStartAIChat = (context) => {
        setAiContext(context || defaultAiContext);
        setShowAIChat(true);
        if (showAIChat && aiChatRef.current) {
            aiChatRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // 标签页配置
    const defaultTabs = [
        { id: 'concept', label: '核心概念', icon: BookOpen },
        ...(tabs.interactive ? [{ id: 'interactive', label: '互动实验室', icon: MousePointer2 }] : []),
        { id: 'properties', label: '要点提示', icon: TrendingUp },
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
                    className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
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
                    <AIChatSession
                        title={aiChatTitle || "AI互动学习"}
                        intro={aiChatIntro || "点击开始，AI导师将引导你深入理解。"}
                        messages={aiMessages}
                        onStart={() => handleStartAIChat(defaultAiContext)}
                    />
                </div>
            )}

            {/* 精简奖励条 */}
            <RewardMiniCard />

            {/* 标签页内容渲染 */}
            <div className="mt-8">
                {tabs[activeTab] || <div className="text-center p-8 text-slate-500">内容建设中...</div>}
            </div>

            {/* Mobile AI Chat FAB */}
            <button
                onClick={() => handleStartAIChat(null)}
                className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-full shadow-lg shadow-red-500/30 flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
                aria-label="AI智能对话"
            >
                {showAIChat ? <ChevronRight className="w-8 h-8 rotate-90" /> : <MessageCircle className="w-8 h-8" />}
            </button>
        </TopicLayout>
    );
};

export default ChineseTopicPage;

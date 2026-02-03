/**
 * SmartChat - 智能对话组件
 * 
 * 功能:
 * - AI个性化对话界面
 * - 实时消息流
 * - 打字机效果
 * - 自动滚动
 */

import { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, Loader2, Sparkles, Brain, TrendingUp, Target, Award, PenTool, Calculator } from 'lucide-react';
import { SmartTutor } from '../../services/smartTutor';
import { KnowledgeAssessment } from '../../services/knowledgeAssessment';
import { useUser } from '../../context/UserContext';
import SmartPracticeSession from './SmartPracticeSession'; // 导入练习组件
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'; // KaTeX样式

const SmartChat = ({ topicId, topicName, onClose, initialContext }) => {
    const { user } = useUser();
    const [mode, setMode] = useState('chat'); // 'chat' | 'practice'
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [initializing, setInitializing] = useState(true);
    const [diagnosis, setDiagnosis] = useState(null); // 新增: 诊断信息
    const [showProgress, setShowProgress] = useState(true); // 新增: 是否显示进度
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // 初始化:加载历史对话或AI打招呼
    useEffect(() => {
        initializeChat();
    }, [topicId, initialContext]);

    // 加载诊断信息和技能进度
    useEffect(() => {
        loadDiagnosis();
    }, [topicId, messages]); // 每次对话后更新

    // 自动滚动到底部
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const initializeChat = async () => {
        setInitializing(true);

        // 检查用户是否登录
        if (!user || !user.id) {
            setMessages([
                {
                    role: 'assistant',
                    content: `你好!我是你的AI数学导师 😊\n\n今天我们来学习${topicName},你有什么想问的吗?`,
                    timestamp: new Date().toISOString()
                }
            ]);
            setInitializing(false);
            return;
        }

        try {
            // 如果有特定的初始上下文（场景），优先使用上下文启动
            if (initialContext) {
                const greeting = await SmartTutor.chat(
                    user.id,
                    topicId,
                    `[系统指令: ${initialContext}]`,
                    []
                );

                setMessages([
                    { role: 'assistant', content: greeting, timestamp: new Date().toISOString() }
                ]);
                setInitializing(false);
                return;
            }

            // 尝试加载历史对话
            const history = await SmartTutor.getConversationHistory(user.id, topicId, 10);

            if (history && history.length > 0) {
                setMessages(history);
            } else {
                // 首次对话:AI主动打招呼
                const greeting = await SmartTutor.chat(
                    user.id,
                    topicId,
                    `[系统消息:学生刚进入${topicName}学习页面,请主动打招呼并询问学生想学什么]`,
                    []
                );

                setMessages([
                    { role: 'assistant', content: greeting, timestamp: new Date().toISOString() }
                ]);
            }
        } catch (error) {
            console.error('初始化对话错误:', error);
            setMessages([
                {
                    role: 'assistant',
                    content: `你好!我是你的AI数学导师 😊\n\n今天我们来学习${topicName},你有什么想问的吗?`,
                    timestamp: new Date().toISOString()
                }
            ]);
        } finally {
            setInitializing(false);
        }
    };

    const loadDiagnosis = async () => {
        // 如果用户未登录,跳过诊断
        if (!user || !user.id) return;

        try {
            const result = await KnowledgeAssessment.diagnose(user.id, topicId);
            setDiagnosis(result);
        } catch (error) {
            console.error('加载诊断信息错误:', error);
        }
    };

    const handleSend = async () => {
        if (!input.trim() || loading) return;

        const userMessage = input.trim();
        setInput('');
        setLoading(true);

        // 添加用户消息
        const newUserMsg = {
            role: 'user',
            content: userMessage,
            timestamp: new Date().toISOString()
        };
        setMessages(prev => [...prev, newUserMsg]);

        try {
            // 如果用户未登录,使用临时ID
            const userId = user?.id || 'guest';

            // 获取AI回复
            const aiResponse = await SmartTutor.chat(
                userId,
                topicId,
                userMessage,
                messages
            );

            // 添加AI消息
            const newAiMsg = {
                role: 'assistant',
                content: aiResponse,
                timestamp: new Date().toISOString()
            };
            setMessages(prev => [...prev, newAiMsg]);
        } catch (error) {
            console.error('发送消息错误:', error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: '抱歉,我遇到了一些问题 😅 请稍后再试。',
                timestamp: new Date().toISOString()
            }]);
        } finally {
            setLoading(false);
            inputRef.current?.focus();
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    if (initializing) {
        return (
            <div className="smart-chat-loading">
                <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
                <p className="mt-2 text-slate-600 dark:text-slate-400">AI导师正在准备...</p>
            </div>
        );
    }

    return (
        <div className="smart-chat-container">
            {/* 头部 */}
            <div className="smart-chat-header">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-800 dark:text-white">AI数学导师</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            {topicName} · 个性化辅导
                        </p>
                    </div>
                </div>
                {onClose && (
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                    >
                        ✕
                    </button>
                )}
            </div>

            {/* 技能进度显示 */}
            {diagnosis && showProgress && (
                <div className="smart-chat-progress">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <Target className="w-4 h-4 text-indigo-600" />
                            <h4 className="font-semibold text-slate-700 dark:text-slate-300">学习进度</h4>
                        </div>
                        <button
                            onClick={() => setShowProgress(false)}
                            className="text-xs text-slate-400 hover:text-slate-600"
                        >
                            收起
                        </button>
                    </div>

                    {/* 整体掌握度 */}
                    <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-slate-600 dark:text-slate-400">整体掌握度</span>
                            <span className="text-sm font-bold text-indigo-600">
                                {(diagnosis.currentMastery * 100).toFixed(0)}%
                            </span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500"
                                style={{ width: `${diagnosis.currentMastery * 100}%` }}
                            />
                        </div>
                    </div>

                    {/* 技能分解 */}
                    {diagnosis.topic && diagnosis.topic.skills && (
                        <div className="space-y-2">
                            <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">技能点掌握情况</div>
                            {diagnosis.topic.skills.map((skill, index) => {
                                const skillMastery = diagnosis.skillBreakdown?.[skill] || 0;
                                const isWeak = skillMastery < 0.7;

                                return (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className={`text-xs ${isWeak ? 'text-orange-600 dark:text-orange-400' : 'text-slate-600 dark:text-slate-400'}`}>
                                                    {skill}
                                                    {isWeak && <span className="ml-1">⚠️</span>}
                                                </span>
                                                <span className={`text-xs font-semibold ${isWeak ? 'text-orange-600' : 'text-green-600'}`}>
                                                    {(skillMastery * 100).toFixed(0)}%
                                                </span>
                                            </div>
                                            <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full transition-all duration-500 ${isWeak
                                                        ? 'bg-gradient-to-r from-orange-400 to-orange-600'
                                                        : 'bg-gradient-to-r from-green-400 to-green-600'
                                                        }`}
                                                    style={{ width: `${skillMastery * 100}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* 薄弱提示 */}
                    {diagnosis.weakSkills && diagnosis.weakSkills.length > 0 && (
                        <div className="mt-3 p-2 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                            <div className="flex items-start gap-2">
                                <TrendingUp className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                                <div className="text-xs text-orange-700 dark:text-orange-400">
                                    <span className="font-semibold">建议重点练习: </span>
                                    {diagnosis.weakSkills.slice(0, 2).map(s => s.name).join('、')}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 成就提示 */}
                    {diagnosis.currentMastery >= 0.9 && (
                        <div className="mt-3 p-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                            <div className="flex items-center gap-2">
                                <Award className="w-4 h-4 text-green-600" />
                                <span className="text-xs text-green-700 dark:text-green-400 font-semibold">
                                    🎉 恭喜!你已经掌握了这个知识点!
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* 收起状态的进度按钮 */}
            {diagnosis && !showProgress && (
                <button
                    onClick={() => setShowProgress(true)}
                    className="w-full py-2 text-xs text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 flex items-center justify-center gap-1 border-b border-slate-200 dark:border-slate-700"
                >
                    <Target className="w-3 h-3" />
                    查看学习进度 ({(diagnosis.currentMastery * 100).toFixed(0)}%)
                </button>
            )}

            {/* 消息列表 */}
            <div className="smart-chat-messages">
                {messages.map((msg, index) => (
                    <MessageBubble key={index} message={msg} />
                ))}

                {loading && (
                    <div className="flex items-start gap-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <Brain className="w-5 h-5 text-white" />
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl px-4 py-3">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* 输入框 */}
            <div className="smart-chat-input">
                {/* 快捷按钮 */}
                <div className="flex gap-2 mb-3">
                    <button
                        onClick={() => setInput('请给我一个例子')}
                        disabled={loading}
                        className="flex-1 px-3 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-4 h-4" />
                        示例
                    </button>
                    <button
                        onClick={() => setInput('我想做练习题')}
                        disabled={loading}
                        className="flex-1 px-3 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg text-sm font-medium hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        <PenTool className="w-4 h-4" />
                        练习题
                    </button>
                    <button
                        onClick={() => setInput('请重新讲解一遍')}
                        disabled={loading}
                        className="flex-1 px-3 py-2 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        <MessageCircle className="w-4 h-4" />
                        重新讲解
                    </button>
                </div>

                <div className="flex items-end gap-2">
                    <textarea
                        ref={inputRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="输入你的问题..."
                        className="flex-1 resize-none rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-3 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        rows="1"
                        style={{ maxHeight: '120px' }}
                        disabled={loading}
                    />
                    <button
                        onClick={handleSend}
                        disabled={!input.trim() || loading}
                        className="px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>

                <p className="text-xs text-slate-400 dark:text-slate-500 mt-2 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    AI会根据你的水平个性化讲解
                </p>
            </div>
        </div>
    );
};

/**
 * 消息气泡组件
 */
const MessageBubble = ({ message }) => {
    const isUser = message.role === 'user';

    return (
        <div className={`flex items-start gap-3 mb-4 ${isUser ? 'flex-row-reverse' : ''}`}>
            {/* 头像 */}
            {!isUser && (
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 text-white" />
                </div>
            )}

            {/* 消息内容 */}
            <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 ${isUser
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white'
                    }`}
            >
                {/* AI消息使用Markdown渲染,用户消息保持纯文本 */}
                {!isUser ? (
                    <div className="markdown-content prose prose-sm max-w-none dark:prose-invert">
                        <ReactMarkdown
                            remarkPlugins={[remarkMath]}
                            rehypePlugins={[rehypeKatex]}
                            components={{
                                // 自定义样式
                                p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                                ul: ({ children }) => <ul className="list-disc ml-4 mb-2">{children}</ul>,
                                ol: ({ children }) => <ol className="list-decimal ml-4 mb-2">{children}</ol>,
                                li: ({ children }) => <li className="mb-1">{children}</li>,
                                code: ({ inline, children }) =>
                                    inline ? (
                                        <code className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-600 rounded text-sm">
                                            {children}
                                        </code>
                                    ) : (
                                        <code className="block p-2 bg-slate-200 dark:bg-slate-600 rounded text-sm overflow-x-auto">
                                            {children}
                                        </code>
                                    ),
                                strong: ({ children }) => <strong className="font-bold text-indigo-600 dark:text-indigo-400">{children}</strong>,
                                em: ({ children }) => <em className="italic">{children}</em>,
                            }}
                        >
                            {message.content}
                        </ReactMarkdown>
                    </div>
                ) : (
                    <div className="whitespace-pre-wrap break-words">
                        {message.content}
                    </div>
                )}

                {/* 时间戳 */}
                <div
                    className={`text-xs mt-1 ${isUser ? 'text-indigo-200' : 'text-slate-400 dark:text-slate-500'
                        }`}
                >
                    {new Date(message.timestamp).toLocaleTimeString('zh-CN', {
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
                </div>
            </div>

            {isUser && (
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">我</span>
                </div>
            )}
        </div>
    );
};

export default SmartChat;

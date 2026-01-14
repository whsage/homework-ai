import { useState, useEffect, useRef } from 'react';
import ChatInput from './ChatInput';
import { Bot, User, Copy, Check } from 'lucide-react';
import clsx from 'clsx';
import { sendMessageToTutor } from '../../services/aiService';
import { supabase } from '../../supabase';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { highlightKeywords } from '../../utils/textHighlight';

const TypewriterText = ({ text, onComplete }) => {
    const [displayedText, setDisplayedText] = useState('');
    const indexRef = useRef(0);

    useEffect(() => {
        indexRef.current = 0;
        setDisplayedText('');

        // Apply keyword highlighting before typing
        const highlightedText = highlightKeywords(text);

        // Simple word-based typing effect
        const words = highlightedText.split(/(\s+)/); // Split by whitespace but keep delimiters

        const interval = setInterval(() => {
            if (indexRef.current < words.length) {
                setDisplayedText(prev => prev + words[indexRef.current]);
                indexRef.current++;
            } else {
                clearInterval(interval);
                if (onComplete) onComplete();
            }
        }, 20); // Speed of typing

        return () => clearInterval(interval);
    }, [text]);

    return (
        <div className="prose prose-sm prose-slate max-w-none dark:prose-invert">
            <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
            >
                {displayedText}
            </ReactMarkdown>
        </div>
    );
};

const ChatInterface = ({ sessionId: initialSessionId }) => {
    const [messages, setMessages] = useState([
        { id: 1, type: 'ai', text: "你好！👋 我是你的全科辅导老师。\n\n我的使命不是直接告诉你答案，而是引导你自己思考、发现和理解。\n\n📚 **我能帮你：**\n- 分析题目的关键信息\n- 拆解复杂问题的逻辑\n- 用生活化的方式解释抽象概念\n- 通过提问激发你的思维\n\n上传一张作业题目的照片，或者直接问我问题，让我们一起开始思考吧！", timestamp: new Date(), isTypingDone: true }
    ]);
    const [status, setStatus] = useState(''); // 'analyzing', 'hinting', 'guiding', ''
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const [sessionId, setSessionId] = useState(initialSessionId);
    const autoAnalysisTriggeredRef = useRef(false); // 防止重复触发

    // Update sessionId when prop changes (navigation)
    useEffect(() => {
        setSessionId(initialSessionId);
        autoAnalysisTriggeredRef.current = false; // 重置标志
    }, [initialSessionId]);

    // Load history from DB
    useEffect(() => {
        const loadHistory = async () => {
            const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
            if (!sessionId || !uuidRegex.test(sessionId)) {
                // Reset to default if not a valid session (e.g. '102') or empty
                if (!initialSessionId) {
                    setMessages([{ id: 1, type: 'ai', text: "你好！👋 我是你的全科辅导老师。\n\n我的使命不是直接告诉你答案，而是引导你自己思考、发现和理解。\n\n📚 **我能帮你：**\n- 分析题目的关键信息\n- 拆解复杂问题的逻辑\n- 用生活化的方式解释抽象概念\n- 通过提问激发你的思维\n\n上传一张作业题目的照片，或者直接问我问题，让我们一起开始思考吧！", timestamp: new Date(), isTypingDone: true }]);
                }
                return;
            }

            const { data, error } = await supabase
                .from('messages')
                .select('*')
                .eq('session_id', sessionId)
                .order('created_at', { ascending: true });

            if (data && data.length > 0) {
                const history = data.map(msg => {
                    let textContent = msg.content;
                    if (msg.role === 'assistant') {
                        try {
                            const parsed = JSON.parse(msg.content);
                            // Combine hint, guidance, and question for display history
                            const parts = [];
                            if (parsed.hint) parts.push(parsed.hint);
                            if (parsed.guidance) parts.push(parsed.guidance);
                            if (parsed.question) parts.push(`💡 **思考一下：** ${parsed.question}`);
                            textContent = parts.join('\n\n') || msg.content;
                        } catch (e) {
                            textContent = msg.content;
                        }
                    }
                    return {
                        id: msg.id,
                        type: msg.role === 'assistant' ? 'ai' : 'user',
                        text: textContent,
                        timestamp: new Date(msg.created_at),
                        isTypingDone: true,
                        imageUrl: msg.image_url
                    };
                });
                setMessages(history);

                // Check if last message is from user and no AI response yet
                const lastMessage = data[data.length - 1];
                const hasAIResponse = data.some(msg => msg.role === 'assistant');

                // 只在未触发过的情况下触发自动分析（支持图片或纯文字）
                if (lastMessage.role === 'user' && !hasAIResponse && !autoAnalysisTriggeredRef.current) {
                    // Auto-trigger AI analysis for the uploaded content (image or text)
                    console.log("Auto-triggering AI analysis...");
                    autoAnalysisTriggeredRef.current = true; // 设置标志
                    triggerAutoAnalysis(lastMessage);
                }
            }
        };

        loadHistory();
    }, [sessionId]);

    const triggerAutoAnalysis = async (userMessage) => {
        try {
            setStatus('analyzing');
            setIsTyping(true);

            let file = null;

            // Fetch the image file from URL if exists
            if (userMessage.image_url) {
                try {
                    const response = await fetch(userMessage.image_url);
                    const blob = await response.blob();
                    file = new File([blob], "uploaded_image.png", { type: blob.type });
                } catch (err) {
                    console.error("Failed to fetch image:", err);
                    // Continue without image
                }
            }

            // Call AI service (with or without image)
            const aiResponse = await sendMessageToTutor(
                userMessage.content,
                [],
                file,
                sessionId
            );

            setStatus('');

            // Display AI response in three parts
            addMessage(aiResponse.hint, 'ai', false);

            setTimeout(() => {
                addMessage(aiResponse.guidance, 'ai', false);

                if (aiResponse.question) {
                    setTimeout(() => {
                        addMessage(`💡 **思考一下：** ${aiResponse.question}`, 'ai', false);
                        setIsTyping(false);
                    }, 2000);
                } else {
                    setIsTyping(false);
                }
            }, 3000);

        } catch (error) {
            console.error("Auto-analysis failed:", error);
            setStatus('');
            setIsTyping(false);
            addMessage("自动分析失败，请手动发送消息重试", 'ai', true);
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, status, isTyping]);

    const addMessage = (text, type, isError = false, imageUrl = null) => {
        setMessages(prev => [...prev, {
            id: Date.now(),
            type,
            text,
            timestamp: new Date(),
            isTypingDone: type === 'user' || isError,
            isError,
            imageUrl
        }]);
    };

    const markTypingDone = (id) => {
        setMessages(prev => prev.map(m => m.id === id ? { ...m, isTypingDone: true } : m));
    };

    // sessionId state is already declared at top level of component
    // deleted redundant declaration created in previous turn parse attempt if any.

    const handleSendMessage = async (text, file = null) => {
        // Display user message with file info if present
        let userMessage = text;
        let imageUrl = null;

        if (file) {
            userMessage = text || "请帮我分析这道题目，引导我思考解题思路";
            // Create preview URL for image
            if (file.type.startsWith('image/')) {
                imageUrl = URL.createObjectURL(file);
            }
        }
        addMessage(userMessage, 'user', false, imageUrl);

        setIsTyping(true);
        setStatus(file ? "正在识别图片..." : "正在分析你的问题...");

        try {
            // Pass the file directly to AI service for vision processing
            const aiResponse = await sendMessageToTutor(
                text || `请帮我分析这道题目，引导我思考解题思路`,
                messages,
                file, // Pass the actual file object
                sessionId // Pass current session ID
            );

            // Update session ID if created
            if (aiResponse.sessionId && !sessionId) {
                setSessionId(aiResponse.sessionId);
            }

            // Step 1: Analysis (Internal/Console only, or debug)
            console.log("AI Analysis:", aiResponse.analysis);

            // Step 2: Hint (肯定 + 初步引导)
            setStatus("正在构思提示...");
            setTimeout(() => {
                addMessage(aiResponse.hint, 'ai');

                // Step 3: Guidance (详细引导步骤)
                setStatus("正在准备引导步骤...");
                setTimeout(() => {
                    addMessage(aiResponse.guidance, 'ai');

                    // Step 4: Question (苏格拉底式提问)
                    if (aiResponse.question) {
                        setStatus("正在思考下一步...");
                        setTimeout(() => {
                            addMessage(`💡 **思考一下：** ${aiResponse.question}`, 'ai');
                            setStatus("");
                            setIsTyping(false);
                        }, 2000);
                    } else {
                        setStatus("");
                        setIsTyping(false);
                    }
                }, 4000);

            }, 1500);

        } catch (error) {
            console.error("Chat Error:", error);
            setStatus("");
            setIsTyping(false);
            addMessage(`错误: ${error.message || "无法连接到 AI 导师。"}`, 'ai', true);
        }
    };

    return (
        <div className="flex flex-col h-full bg-slate-50 relative">
            <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-24 scroll-smooth">
                {messages.map((msg) => (
                    <div key={msg.id} className={clsx("flex gap-3", msg.type === 'user' ? "flex-row-reverse" : "flex-row")}>
                        <div className={clsx(
                            "w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm border",
                            msg.type === 'user' ? "bg-indigo-600 text-white border-indigo-700" : "bg-white text-emerald-600 border-slate-200"
                        )}>
                            {msg.type === 'user' ? <User size={16} /> : <Bot size={16} />}
                        </div>

                        <div className={clsx(
                            "max-w-[85%] rounded-2xl p-4 shadow-sm relative group transition-all",
                            msg.type === 'user'
                                ? "bg-indigo-600 text-white rounded-tr-none text-right"
                                : "bg-white text-slate-800 rounded-tl-none border border-slate-200"
                        )}>
                            {msg.type === 'ai' && !msg.isTypingDone ? (
                                <TypewriterText text={msg.text} onComplete={() => markTypingDone(msg.id)} />
                            ) : (
                                <>
                                    {/* Display image if present */}
                                    {msg.imageUrl && (
                                        <img
                                            src={msg.imageUrl}
                                            alt="上传的图片"
                                            className="max-w-full rounded-lg mb-2 max-h-64 object-contain"
                                        />
                                    )}

                                    <div className={clsx("prose prose-sm max-w-none", msg.type === 'user' && "prose-invert text-white")}>
                                        {msg.isError ? (
                                            <div className="text-red-500 font-medium flex items-center gap-2">
                                                <span>⚠️</span> {msg.text}
                                            </div>
                                        ) : (
                                            <div className="prose prose-sm max-w-none">
                                                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                                    {msg.type === 'ai' ? highlightKeywords(msg.text) : msg.text}
                                                </ReactMarkdown>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}

                            {/* Copy Button for AI messages */}
                            {msg.type === 'ai' && (
                                <button
                                    onClick={() => navigator.clipboard.writeText(msg.text)}
                                    className="absolute -bottom-6 left-0 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-slate-400 hover:text-indigo-600 flex items-center gap-1 p-1"
                                >
                                    <Copy size={12} /> 复制
                                </button>
                            )}
                        </div>
                    </div>
                ))}

                {isTyping && status && (
                    <div className="flex gap-3 items-center animate-pulse">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                            <Bot size={16} className="text-slate-400" />
                        </div>
                        <span className="text-xs text-slate-400 font-medium italic">{status}</span>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <ChatInput onSend={handleSendMessage} disabled={isTyping} />
        </div>
    );
};

export default ChatInterface;

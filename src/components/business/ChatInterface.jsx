import { useState, useEffect, useRef } from 'react';
import ChatInput from './ChatInput';
import { Bot, User, Copy, Check, ChevronDown, ChevronUp, Image as ImageIcon } from 'lucide-react';
import clsx from 'clsx';
import { sendMessageToTutor } from '../../services/aiService';
import { supabase } from '../../supabase';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { highlightKeywords } from '../../utils/textHighlight';

// 修复常见的由 JSON 转义导致的 LaTeX 错误
// 例如：\frac 在 JSON 中被解析为 \f (Form Feed) + rac，导致显示为 krac
const fixLatexErrors = (text) => {
    if (!text) return '';
    return text
        .replace(/krac/g, '\\frac') // 修复 \f -> frac (表现为 k + rac -> krac ? 不一定，取决于前面是什么)
        // 准确地说是：\r (Form Feed \u000c) 变成了不可见或乱码
        // 如果是 F = k\frac... -> k + \f + rac
        // 在某些字体/渲染器下 \f 可能显示为空。
        // 但用户看到的是 krac，说明 k 保留了，\f 消失了或显示异常，rac 保留了。
        // 实际上 F = k \frac... 
        // 让我们更激进一点：
        .replace(/[\u000c]rac/g, '\\frac') // 匹配 FormFeed + rac
        .replace(/k[\u000c]rac/g, 'k\\frac') // 匹配 k + FormFeed + rac
        .replace(/krac/g, 'k\\frac') // 用户反馈的具体现象

        // 修复 \times (Tab + imes)
        .replace(/[\t]imes/g, '\\times')

        // 修复 \beta (Backspace + eta)
        .replace(/[\u0008]eta/g, '\\beta')

        // 修复 \n (Newline) 误伤 \neq (Newline + eq)
        // .replace(/\neq/g, '\\neq') // 这是换行 + eq，比较难搞，暂时不动
        ;
};

const TypewriterText = ({ text, onComplete }) => {
    const [displayedText, setDisplayedText] = useState('');
    const indexRef = useRef(0);
    // 先修复文本
    const cleanText = fixLatexErrors(text);

    useEffect(() => {
        indexRef.current = 0;
        setDisplayedText('');

        // Apply keyword highlighting before typing
        // 注意：highlightKeywords 可能会破坏 LaTeX 结构，应该小心使用
        // 这里我们先打字，打字完成后再高亮? 
        // 或者直接对 cleanText 进行打字。

        if (!cleanText) {
            onComplete?.();
            return;
        }

        const intervalId = setInterval(() => {
            if (indexRef.current < cleanText.length) {
                setDisplayedText((prev) => prev + cleanText.charAt(indexRef.current));
                indexRef.current++;
            } else {
                clearInterval(intervalId);
                onComplete?.();
            }
        }, 30); // Typing speed

        return () => clearInterval(intervalId);
    }, [cleanText, onComplete]);

    // 渲染时应用 markdown 和高亮
    return (
        <div className="whitespace-pre-wrap">
            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                {highlightKeywords(displayedText)}
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
    const [collapsedMessages, setCollapsedMessages] = useState(new Set()); // 折叠的消息ID集合

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

                // 只在最后一条是用户消息且没有AI回复时才触发自动分析
                // 并且确保这是真正的新消息（通过检查是否已经触发过）
                if (lastMessage.role === 'user' && !hasAIResponse && !autoAnalysisTriggeredRef.current) {
                    // Auto-trigger AI analysis for the uploaded content (image or text)
                    console.log("LoadHistory: Auto-triggering AI analysis for existing message...", lastMessage.id);
                    autoAnalysisTriggeredRef.current = true; // 设置标志防止重复触发

                    // 使用数据库中的消息数据，而不是重新添加到界面
                    // false 参数至关重要：告诉 AI 服务不要再次将此消息存入 DB
                    triggerAutoAnalysis(lastMessage, false);
                }
            }
        };

        loadHistory();
    }, [sessionId]);

    const triggerAutoAnalysis = async (userMessage, shouldAddUserMessage = true) => {
        console.log(`triggerAutoAnalysis called. shouldAddUserMessage=${shouldAddUserMessage}`);
        try {
            setStatus('正在分析题目...');
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
                sessionId,
                shouldAddUserMessage // Pass this to control DB insertion. If false, don't save to DB.
            );

            setStatus('');

            // 直接显示完整的AI回复，不分段延时（避免闪烁）
            // 合并所有部分为一条消息
            const fullResponse = [
                aiResponse.hint,
                aiResponse.guidance,
                aiResponse.question ? `💡 **思考一下：** ${aiResponse.question}` : ''
            ].filter(Boolean).join('\n\n');

            addMessage(fullResponse, 'ai', false);
            setIsTyping(false);

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

    // 切换消息折叠状态
    const toggleMessageCollapse = (id) => {
        setCollapsedMessages(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
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

            setStatus('');

            // 合并所有AI回复为一条消息，避免闪烁
            const fullResponse = [
                aiResponse.hint,
                aiResponse.guidance,
                aiResponse.question ? `💡 **思考一下：** ${aiResponse.question}` : ''
            ].filter(Boolean).join('\n\n');

            addMessage(fullResponse, 'ai');
            setIsTyping(false);

        } catch (error) {
            console.error("Chat Error:", error);
            setStatus("");
            setIsTyping(false);
            addMessage(`错误: ${error.message || "无法连接到 AI 导师。"}`, 'ai', true);
        }
    };

    return (
        <div className="flex flex-col h-full bg-slate-50 relative">
            <div className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-4 sm:space-y-6 pb-32 sm:pb-24 scroll-smooth">
                {messages.map((msg) => (
                    <div key={msg.id} className={clsx("flex gap-2 sm:gap-3", msg.type === 'user' ? "flex-row-reverse" : "flex-row")}>
                        <div className={clsx(
                            "w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm border",
                            msg.type === 'user' ? "bg-indigo-600 text-white border-indigo-700" : "bg-white text-emerald-600 border-slate-200"
                        )}>
                            {msg.type === 'user' ? <User size={14} className="sm:w-4 sm:h-4" /> : <Bot size={14} className="sm:w-4 sm:h-4" />}
                        </div>

                        <div className={clsx(
                            "max-w-[90%] sm:max-w-[85%] rounded-2xl shadow-sm relative group transition-all text-sm sm:text-base",
                            msg.type === 'user'
                                ? "bg-indigo-600 text-white rounded-tr-none"
                                : "bg-white text-slate-800 rounded-tl-none border border-slate-200"
                        )}>
                            {msg.type === 'ai' && !msg.isTypingDone ? (
                                <div className="p-3 sm:p-4">
                                    <TypewriterText text={msg.text} onComplete={() => markTypingDone(msg.id)} />
                                </div>
                            ) : msg.type === 'user' ? (
                                // 用户消息的处理
                                msg.imageUrl ? (
                                    // 1. 带图片的消息：使用折叠样式
                                    <>
                                        <div
                                            className="flex items-center justify-between p-3 sm:p-4 cursor-pointer hover:bg-indigo-700 rounded-2xl transition-colors"
                                            onClick={() => toggleMessageCollapse(msg.id)}
                                        >
                                            <div className="flex items-center gap-2 flex-1 min-w-0">
                                                <ImageIcon size={16} className="flex-shrink-0" />
                                                <span className="font-medium truncate">
                                                    📷 题目图片
                                                </span>
                                            </div>
                                            {collapsedMessages.has(msg.id) ? (
                                                <ChevronDown size={18} className="flex-shrink-0" />
                                            ) : (
                                                <ChevronUp size={18} className="flex-shrink-0" />
                                            )}
                                        </div>

                                        {/* 展开的内容 */}
                                        {!collapsedMessages.has(msg.id) && (
                                            <div className="px-3 sm:px-4 pb-3 sm:pb-4 pt-0">
                                                <img
                                                    src={msg.imageUrl}
                                                    alt="上传的图片"
                                                    className="max-w-full rounded-lg mb-2 max-h-64 object-contain border-2 border-indigo-400"
                                                />
                                                {msg.text && (
                                                    <div className="prose prose-sm max-w-none prose-invert text-white mt-2">
                                                        <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                                            {msg.text}
                                                        </ReactMarkdown>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    // 2. 纯文字消息：直接显示完整气泡，不使用折叠
                                    <div className="p-3 sm:p-4 prose prose-sm max-w-none prose-invert text-white">
                                        <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                            {msg.text}
                                        </ReactMarkdown>
                                    </div>
                                )
                            ) : (
                                // AI消息 - 不折叠
                                <div className="p-3 sm:p-4">
                                    <div className="prose prose-sm max-w-none">
                                        {msg.isError ? (
                                            <div className="text-red-500 font-medium flex items-center gap-2">
                                                <span>⚠️</span> {msg.text}
                                            </div>
                                        ) : (
                                            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                                {highlightKeywords(fixLatexErrors(msg.text))}
                                            </ReactMarkdown>
                                        )}
                                    </div>
                                </div>
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
        </div >
    );
};

export default ChatInterface;

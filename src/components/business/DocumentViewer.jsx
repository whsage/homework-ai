import { ZoomIn, ZoomOut, Move } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../supabase';
import { useLanguage } from '../../context/LanguageContext';

const DocumentViewer = () => {
    const { t } = useLanguage();
    const { id: sessionId } = useParams();
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [imageUrl, setImageUrl] = useState(null); // 初始化为null，区分是有图还是无图
    const [textContent, setTextContent] = useState(""); // 新增：用于存储纯文本题目内容
    const [sessionTitle, setSessionTitle] = useState(t('detail.homeworkTitle'));
    const [sessionNumber, setSessionNumber] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSessionData = async () => {
            if (!sessionId) {
                setIsLoading(false);
                return;
            }
            const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
            if (!uuidRegex.test(sessionId)) {
                setIsLoading(false);
                return;
            }

            try {
                // Fetch session title
                const { data: sessionData } = await supabase
                    .from('sessions')
                    .select('title')
                    .eq('id', sessionId)
                    .single();

                if (sessionData && sessionData.title) {
                    setSessionTitle(sessionData.title);
                    setSessionNumber(`#${sessionId.slice(0, 4)}`);
                }

                // 1. 优先尝试获取题目图片
                const { data: imageData } = await supabase
                    .from('messages')
                    .select('image_url')
                    .eq('session_id', sessionId)
                    .not('image_url', 'is', null)
                    .order('created_at', { ascending: true })
                    .limit(1)
                    .single();

                if (imageData && imageData.image_url) {
                    setImageUrl(imageData.image_url);
                } else {
                    // 2. 如果没有图片，尝试获取第一条消息的文本作为题目内容
                    const { data: textData } = await supabase
                        .from('messages')
                        .select('text')
                        .eq('session_id', sessionId)
                        .eq('role', 'user') // 只获取用户的提问
                        .order('created_at', { ascending: true })
                        .limit(1)
                        .single();

                    if (textData && textData.text) {
                        setTextContent(textData.text);
                    }
                }
            } catch (error) {
                console.error("Error fetching session data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSessionData();
    }, [sessionId]);

    const handleZoom = (delta) => {
        setScale(prev => Math.max(0.5, Math.min(3, prev + delta)));
    };

    // 如果没有图片也没有文本（比如空会话或加载失败），可以显示一个默认占位或空状态
    const defaultPlaceholder = "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop";

    return (
        <div className="h-full flex flex-col bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 transition-colors duration-200">
            {/* Toolbar */}
            <div className="bg-white dark:bg-slate-800 p-3 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <h3 className="font-semibold text-slate-700 dark:text-white">
                    {sessionTitle} {sessionNumber}
                </h3>
                {imageUrl && !isLoading && (
                    <div className="flex gap-2">
                        <button onClick={() => handleZoom(-0.1)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-400 transition-colors">
                            <ZoomOut size={18} />
                        </button>
                        <span className="flex items-center text-xs font-mono text-slate-500 dark:text-slate-500 w-12 justify-center">
                            {Math.round(scale * 100)}%
                        </span>
                        <button onClick={() => handleZoom(0.1)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-400 transition-colors">
                            <ZoomIn size={18} />
                        </button>
                    </div>
                )}
            </div>

            {/* Viewport */}
            <div className={`flex-1 overflow-auto relative p-8 bg-slate-50 dark:bg-slate-900 ${imageUrl && !isLoading ? 'flex items-center justify-center cursor-grab active:cursor-grabbing' : ''}`}>
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center h-full text-slate-400 dark:text-slate-500 gap-3">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                        <span className="text-sm font-medium">{t('detail.loadingQuestion')}</span>
                    </div>
                ) : imageUrl ? (
                    <div
                        className="relative shadow-xl transition-transform duration-200 ease-out origin-center bg-white dark:bg-slate-800"
                        style={{ transform: `scale(${scale})` }}
                    >
                        <img
                            src={imageUrl}
                            alt={t('detail.homeworkImageAlt')}
                            className="max-w-full h-auto max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] rounded-lg"
                        />
                    </div>
                ) : textContent ? (
                    // 显示纯文本题目内容
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm max-w-2xl mx-auto w-full prose prose-slate dark:prose-invert">
                        <h4 className="text-slate-400 uppercase text-xs font-bold tracking-wider mb-4 border-b dark:border-slate-700 pb-2">{t('detail.problemDescription')}</h4>
                        <div className="whitespace-pre-wrap text-slate-800 dark:text-slate-200 text-lg leading-relaxed">
                            {textContent}
                        </div>
                    </div>
                ) : (
                    // 既无图也无文（空状态），显示默认占位
                    <div
                        className="relative shadow-xl transition-transform duration-200 ease-out origin-center bg-white dark:bg-slate-800"
                        style={{ transform: `scale(${scale})` }}
                    >
                        <img
                            src={defaultPlaceholder}
                            alt={t('detail.homeworkImageAlt')}
                            className="max-w-full h-auto max-h-[70vh] rounded-lg opacity-50 grayscale"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default DocumentViewer;

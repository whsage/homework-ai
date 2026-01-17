import { ZoomIn, ZoomOut, Move } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../supabase';

const DocumentViewer = () => {
    const { id: sessionId } = useParams();
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [imageUrl, setImageUrl] = useState(null); // 初始化为null，区分是有图还是无图
    const [textContent, setTextContent] = useState(""); // 新增：用于存储纯文本题目内容
    const [sessionTitle, setSessionTitle] = useState("作业题目");
    const [sessionNumber, setSessionNumber] = useState("");

    useEffect(() => {
        const fetchSessionData = async () => {
            if (!sessionId) return;
            const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
            if (!uuidRegex.test(sessionId)) return;

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
        };

        fetchSessionData();
    }, [sessionId]);

    const handleZoom = (delta) => {
        setScale(prev => Math.max(0.5, Math.min(3, prev + delta)));
    };

    // 如果没有图片也没有文本（比如空会话或加载失败），可以显示一个默认占位或空状态
    // 这里保留之前的默认图片作为最后的fallback，或者直接显示空白更加清爽？
    // 用户需求是"不用图代替"，所以如果有文字显示文字，如果真没东西才显示占位。
    const defaultPlaceholder = "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop";

    return (
        <div className="h-full flex flex-col bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
            {/* Toolbar - 仅在有图片时显示缩放按钮，或者一直显示？ */}
            <div className="bg-white p-3 border-b border-slate-200 flex items-center justify-between">
                <h3 className="font-semibold text-slate-700">
                    {sessionTitle} {sessionNumber}
                </h3>
                {imageUrl && (
                    <div className="flex gap-2">
                        <button onClick={() => handleZoom(-0.1)} className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 transition-colors">
                            <ZoomOut size={18} />
                        </button>
                        <span className="flex items-center text-xs font-mono text-slate-500 w-12 justify-center">
                            {Math.round(scale * 100)}%
                        </span>
                        <button onClick={() => handleZoom(0.1)} className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 transition-colors">
                            <ZoomIn size={18} />
                        </button>
                    </div>
                )}
            </div>

            {/* Viewport */}
            <div className={`flex-1 overflow-auto relative p-8 bg-slate-50 ${imageUrl ? 'flex items-center justify-center cursor-grab active:cursor-grabbing' : ''}`}>
                {imageUrl ? (
                    <div
                        className="relative shadow-xl transition-transform duration-200 ease-out origin-center bg-white"
                        style={{ transform: `scale(${scale})` }}
                    >
                        <img
                            src={imageUrl}
                            alt="作业题目"
                            className="max-w-full h-auto max-h-[70vh] rounded-lg"
                        />
                    </div>
                ) : textContent ? (
                    // 显示纯文本题目内容
                    <div className="bg-white p-8 rounded-xl shadow-sm max-w-2xl mx-auto w-full prose prose-slate">
                        <h4 className="text-slate-400 uppercase text-xs font-bold tracking-wider mb-4 border-b pb-2">题目描述</h4>
                        <div className="whitespace-pre-wrap text-slate-800 text-lg leading-relaxed">
                            {textContent}
                        </div>
                    </div>
                ) : (
                    // 既无图也无文（Loading状态或空状态），显示默认占位
                    <div
                        className="relative shadow-xl transition-transform duration-200 ease-out origin-center bg-white"
                        style={{ transform: `scale(${scale})` }}
                    >
                        <img
                            src={defaultPlaceholder}
                            alt="作业题目"
                            className="max-w-full h-auto max-h-[70vh] rounded-lg opacity-50 grayscale"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default DocumentViewer;

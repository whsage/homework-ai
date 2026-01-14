import { ZoomIn, ZoomOut, Move } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../supabase';

const DocumentViewer = () => {
    const { id: sessionId } = useParams();
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [imageUrl, setImageUrl] = useState("https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop"); // Default placeholder
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

            // Fetch session image
            const { data: messageData } = await supabase
                .from('messages')
                .select('image_url')
                .eq('session_id', sessionId)
                .not('image_url', 'is', null)
                .order('created_at', { ascending: true })
                .limit(1)
                .single();

            if (messageData && messageData.image_url) {
                setImageUrl(messageData.image_url);
            }
        };

        fetchSessionData();
    }, [sessionId]);

    const handleZoom = (delta) => {
        setScale(prev => Math.max(0.5, Math.min(3, prev + delta)));
    };

    return (
        <div className="h-full flex flex-col bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
            {/* Toolbar */}
            <div className="bg-white p-3 border-b border-slate-200 flex items-center justify-between">
                <h3 className="font-semibold text-slate-700">
                    {sessionTitle} {sessionNumber}
                </h3>
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
            </div>

            {/* Viewport */}
            <div className="flex-1 overflow-auto relative flex items-center justify-center p-8 cursor-grab active:cursor-grabbing bg-slate-50">
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
            </div>
        </div>
    );
};

export default DocumentViewer;

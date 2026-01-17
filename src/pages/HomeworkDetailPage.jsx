import { useParams } from 'react-router-dom';
import DocumentViewer from '../components/business/DocumentViewer';
import ChatInterface from '../components/business/ChatInterface';

const HomeworkDetailPage = () => {
    const { id } = useParams();

    return (
        <div className="h-[calc(100vh-6rem)] -m-6 md:p-6 flex flex-col md:flex-row gap-6 bg-slate-50 box-border">
            {/* Left Panel: Document Viewer */}
            <div className="flex-1 md:w-1/2 h-1/2 md:h-full min-h-0 shadow-sm rounded-2xl overflow-hidden">
                <DocumentViewer />
            </div>

            {/* Right Panel: AI Chat */}
            <div className="flex-1 md:w-1/2 h-1/2 md:h-full min-h-0 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
                <div className="p-3 md:p-4 border-b border-slate-100 flex items-center justify-between">
                    <div className="min-w-0 flex-1">
                        <h2 className="font-bold text-slate-800 text-sm md:text-base">AI 导师会话</h2>
                        <p className="text-xs text-slate-500 truncate">ID: {id || '102'}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full flex-shrink-0">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="hidden sm:inline">在线</span>
                    </div>
                </div>
                <div className="flex-1 min-h-0 relative">
                    <ChatInterface sessionId={id} />
                </div>
            </div>
        </div>
    );
};

export default HomeworkDetailPage;

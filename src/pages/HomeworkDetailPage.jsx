import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Image as ImageIcon, RefreshCw } from 'lucide-react';
import DocumentViewer from '../components/business/DocumentViewer';
import ChatInterface from '../components/business/ChatInterface';

const HomeworkDetailPage = () => {
    const { id } = useParams();
    const [isDocumentCollapsed, setIsDocumentCollapsed] = useState(true); // 移动端默认折叠
    const [refreshKey, setRefreshKey] = useState(0); // 用于手动刷新

    const handleRefresh = () => {
        setRefreshKey(prev => prev + 1);
        // 可以添加刷新提示
    };

    return (
        <div className="h-[calc(100vh-6rem)] -m-6 md:p-6 flex flex-col md:flex-row gap-0 md:gap-6 bg-slate-50 dark:bg-slate-900 box-border transition-colors duration-200">
            {/* 移动端折叠按钮 - 固定在顶部 */}
            <div className="md:hidden bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex-shrink-0">
                <button
                    onClick={() => setIsDocumentCollapsed(!isDocumentCollapsed)}
                    className="w-full p-3 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                    <div className="flex items-center gap-2">
                        <ImageIcon size={18} className="text-slate-600 dark:text-slate-400" />
                        <span className="font-semibold text-slate-700 dark:text-slate-200 text-sm">题目</span>
                    </div>
                    {isDocumentCollapsed ? (
                        <ChevronDown size={18} className="text-slate-600 dark:text-slate-400" />
                    ) : (
                        <ChevronUp size={18} className="text-slate-600 dark:text-slate-400" />
                    )}
                </button>
            </div>

            {/* Left Panel: Document Viewer - 移动端可折叠 */}
            <div className={`
                min-h-0 shadow-sm md:rounded-2xl overflow-hidden transition-all duration-300
                md:flex-1 md:w-1/2 md:h-full
                ${isDocumentCollapsed ? 'hidden md:block' : 'flex-1'}
            `}>
                <DocumentViewer key={`doc-${refreshKey}`} />
            </div>

            {/* Right Panel: AI Chat */}
            <div className="
                flex-1 md:flex-1 md:w-1/2 md:h-full
                min-h-0 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col
            ">
                <div className="p-3 md:p-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
                    <div className="min-w-0 flex-1">
                        <h2 className="font-bold text-slate-800 dark:text-white text-sm md:text-base">AI 导师会话</h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">ID: {id || '102'}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* 手动刷新按钮 */}
                        <button
                            onClick={handleRefresh}
                            className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-400 transition-colors"
                            title="刷新对话"
                        >
                            <RefreshCw size={16} />
                        </button>
                        <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-full flex-shrink-0">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span className="hidden sm:inline">在线</span>
                        </div>
                    </div>
                </div>
                <div className="flex-1 min-h-0 relative">
                    <ChatInterface sessionId={id} key={`chat-${refreshKey}`} />
                </div>
            </div>
        </div>
    );
};

export default HomeworkDetailPage;

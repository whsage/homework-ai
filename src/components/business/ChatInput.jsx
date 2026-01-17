import { Send, Paperclip, X, Image as ImageIcon } from 'lucide-react';
import { useState, useRef } from 'react';
import clsx from 'clsx';

const ChatInput = ({ onSend, disabled }) => {
    const [message, setMessage] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const fileInputRef = useRef(null);
    const textareaRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if ((message.trim() || selectedFile) && !disabled) {
            onSend(message, selectedFile);
            setMessage('');
            setSelectedFile(null);
            setPreviewUrl(null);
            // 重置 textarea 高度
            if (textareaRef.current) {
                textareaRef.current.style.height = 'auto';
            }
        }
    };

    const handleFileSelect = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
            if (validTypes.includes(file.type)) {
                setSelectedFile(file);
                // 创建预览 URL
                if (file.type.startsWith('image/')) {
                    const url = URL.createObjectURL(file);
                    setPreviewUrl(url);
                }
            } else {
                alert('请上传图片（JPG, PNG）或 PDF 文件');
            }
        }
    };

    const removeFile = () => {
        setSelectedFile(null);
        setPreviewUrl(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    // 处理粘贴事件
    const handlePaste = (e) => {
        const items = e.clipboardData?.items;
        if (!items) return;

        // 检查是否有图片
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item.type.indexOf('image') !== -1) {
                e.preventDefault(); // 只在有图片时阻止默认行为
                const file = item.getAsFile();
                if (file) {
                    setSelectedFile(file);
                    const url = URL.createObjectURL(file);
                    setPreviewUrl(url);
                    console.log('📋 已粘贴图片:', file.name);
                }
                return; // 找到图片后直接返回
            }
        }
        // 如果没有图片，让文字正常粘贴（不阻止默认行为）
    };

    // 自动调整 textarea 高度
    const handleInput = (e) => {
        const textarea = e.target;
        textarea.style.height = 'auto';
        textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px';
    };

    // 处理键盘事件
    const handleKeyDown = (e) => {
        // Shift+Enter 换行
        if (e.key === 'Enter' && e.shiftKey) {
            return; // 允许换行
        }
        // 单独 Enter 发送
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-2 sm:p-4 bg-white border-t border-slate-200 absolute bottom-0 left-0 right-0 z-10">
            <div className="max-w-4xl mx-auto">
                {/* 文件预览区域 */}
                {selectedFile && (
                    <div className="mb-3 flex items-start gap-2">
                        <div className="relative group">
                            {previewUrl ? (
                                <img
                                    src={previewUrl}
                                    alt="预览"
                                    className="h-20 w-20 object-cover rounded-lg border-2 border-indigo-200"
                                />
                            ) : (
                                <div className="h-20 w-20 bg-slate-100 rounded-lg border-2 border-slate-200 flex items-center justify-center">
                                    <ImageIcon size={32} className="text-slate-400" />
                                </div>
                            )}
                            <button
                                type="button"
                                onClick={removeFile}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-600"
                            >
                                <X size={14} />
                            </button>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-slate-700 truncate">{selectedFile.name}</p>
                            <p className="text-xs text-slate-500">
                                {(selectedFile.size / 1024).toFixed(1)} KB
                            </p>
                        </div>
                    </div>
                )}

                {/* 输入区域 */}
                <div className="flex items-center gap-2">
                    {/* 附件按钮 */}
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*,.pdf"
                        onChange={handleFileSelect}
                        className="hidden"
                        id="file-upload"
                    />
                    <label
                        htmlFor="file-upload"
                        className={clsx(
                            "p-2.5 rounded-lg transition-colors cursor-pointer flex-shrink-0",
                            selectedFile
                                ? "text-indigo-600 bg-indigo-50"
                                : "text-slate-500 hover:text-indigo-600 hover:bg-slate-100"
                        )}
                        title="添加图片或文件"
                    >
                        <Paperclip size={20} />
                    </label>

                    {/* 文本输入框 */}
                    <div className="flex-1 relative">
                        <textarea
                            ref={textareaRef}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onInput={handleInput}
                            onKeyDown={handleKeyDown}
                            onPaste={handlePaste}
                            placeholder="输入消息..."
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-12 bg-slate-50 border border-slate-200 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-slate-700 placeholder:text-slate-400 text-sm sm:text-base"
                            disabled={disabled}
                            rows={1}
                            style={{
                                minHeight: '44px',
                                maxHeight: '200px'
                            }}
                        />
                    </div>

                    {/* 发送按钮 */}
                    <button
                        type="submit"
                        disabled={(!message.trim() && !selectedFile) || disabled}
                        className={clsx(
                            "p-2.5 rounded-lg flex items-center justify-center transition-all duration-200 flex-shrink-0",
                            (message.trim() || selectedFile) && !disabled
                                ? "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95"
                                : "bg-slate-200 text-slate-400 cursor-not-allowed"
                        )}
                        title="发送消息"
                    >
                        <Send size={20} />
                    </button>
                </div>


            </div>
        </form>
    );
};

export default ChatInput;

import { Send, Paperclip, X, Image as ImageIcon } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { compressImage } from '../../utils/imageCompression';
import { useLanguage } from '../../context/LanguageContext';

const ChatInput = ({ onSend, disabled }) => {
    const { t } = useLanguage();
    const [message, setMessage] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isCompressing, setIsCompressing] = useState(false);
    const fileInputRef = useRef(null);
    const textareaRef = useRef(null);
    const formRef = useRef(null);

    // 处理移动端键盘弹出时的滚动
    useEffect(() => {
        const handleFocus = () => {
            // 延迟执行，等待键盘完全弹出
            setTimeout(() => {
                if (textareaRef.current && formRef.current) {
                    // 滚动到输入框位置
                    formRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'nearest'
                    });
                }
            }, 300);
        };

        const textarea = textareaRef.current;
        if (textarea) {
            textarea.addEventListener('focus', handleFocus);
            return () => textarea.removeEventListener('focus', handleFocus);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if ((message.trim() || selectedFile) && !disabled && !isCompressing) {
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

    const handleProcessFile = async (file) => {
        if (!file) return;

        const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
        if (validTypes.includes(file.type)) {
            // 如果是图片，进行压缩
            if (file.type.startsWith('image/')) {
                try {
                    setIsCompressing(true);
                    // 显示原始预览
                    const originalUrl = URL.createObjectURL(file);
                    setPreviewUrl(originalUrl);

                    // 压缩
                    const compressedFile = await compressImage(file);
                    setSelectedFile(compressedFile);

                    // 更新为压缩后的预览（可选，通常肉眼看不出区别）
                    // setPreviewUrl(URL.createObjectURL(compressedFile));
                } catch (error) {
                    console.error("Image compression failed:", error);
                    setSelectedFile(file); // 失败则使用原图
                } finally {
                    setIsCompressing(false);
                }
            } else {
                // PDF 等其他文件直接使用
                setSelectedFile(file);
            }
        } else {
            alert(t('chat.uploadLimitTip'));
        }
    };

    const handleFileSelect = (e) => {
        const file = e.target.files?.[0];
        handleProcessFile(file);
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
                    console.log('📋 已粘贴图片:', file.name);
                    handleProcessFile(file);
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
        <form ref={formRef} onSubmit={handleSubmit} className="p-2 sm:p-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 absolute bottom-0 left-0 right-0 z-10 transition-colors duration-200">
            <div className="max-w-4xl mx-auto">
                {/* 文件预览区域 */}
                {selectedFile && (
                    <div className="mb-3 flex items-start gap-2">
                        <div className="relative group">
                            {previewUrl ? (
                                <img
                                    src={previewUrl}
                                    alt={t('chat.preview')}
                                    className="h-20 w-20 object-cover rounded-lg border-2 border-indigo-200"
                                />
                            ) : (
                                <div className="h-20 w-20 bg-slate-100 dark:bg-slate-700 rounded-lg border-2 border-slate-200 dark:border-slate-600 flex items-center justify-center">
                                    <ImageIcon size={32} className="text-slate-400 dark:text-slate-500" />
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
                            <p className="text-sm font-medium text-slate-700 dark:text-slate-200 truncate">{selectedFile.name}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                                {isCompressing && <span className="text-indigo-500 font-medium ml-2 animate-pulse">{t('chat.processing')}</span>}
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
                                ? "text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-400"
                                : "text-slate-500 dark:text-slate-400 hover:text-indigo-600 hover:bg-slate-100 dark:hover:bg-slate-700"
                        )}
                        title={t('chat.addAttachment')}
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
                            placeholder={t('chat.inputPlaceholder')}
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-12 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-slate-700 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm sm:text-base"
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
                        disabled={(!message.trim() && !selectedFile) || disabled || isCompressing}
                        className={clsx(
                            "p-2.5 rounded-lg flex items-center justify-center transition-all duration-200 flex-shrink-0",
                            (message.trim() || selectedFile) && !disabled
                                ? "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95"
                                : "bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed"
                        )}
                        title={t('chat.sendMessage')}
                    >
                        <Send size={20} />
                    </button>
                </div>


            </div>
        </form>
    );
};

export default ChatInput;

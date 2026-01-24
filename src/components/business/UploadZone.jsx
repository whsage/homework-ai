import { Send, Paperclip, X, Image as ImageIcon, Type } from 'lucide-react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { supabase } from '../../supabase';
import { useLanguage } from '../../context/LanguageContext';

const UploadZone = () => {
    const { t } = useLanguage();
    const [message, setMessage] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState('');
    const fileInputRef = useRef(null);
    const textareaRef = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 必须有文字或文件
        if (!message.trim() && !selectedFile) {
            alert(t('uploadZone.inputLimit'));
            return;
        }

        setIsUploading(true);
        setUploadProgress(t('uploadZone.verifying'));

        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                alert(t('uploadZone.loginRequired'));
                navigate('/login');
                return;
            }

            // Check session count limit
            const MAX_SESSIONS = 20;
            const { count } = await supabase
                .from('sessions')
                .select('*', { count: 'exact', head: true })
                .eq('user_id', user.id);

            if (count >= MAX_SESSIONS) {
                alert(t('uploadZone.limitReached', { limit: MAX_SESSIONS }));
                setIsUploading(false);
                return;
            }

            let finalImageUrl = null;

            // 1. Upload Image if exists
            if (selectedFile) {
                setUploadProgress(t('uploadZone.uploadingImage'));
                const fileExt = selectedFile.name.split('.').pop();
                const fileName = `${user.id}/${Date.now()}.${fileExt}`;

                const { error: uploadError } = await supabase.storage
                    .from('homework-images')
                    .upload(fileName, selectedFile);

                if (uploadError) throw new Error(`存储上传失败: ${uploadError.message}`);

                const { data: { publicUrl } } = supabase.storage
                    .from('homework-images')
                    .getPublicUrl(fileName);

                finalImageUrl = publicUrl;
            }

            // 2. Create Session
            setUploadProgress(t('uploadZone.creatingSession'));

            const tempTitle = message.trim()
                ? (message.length > 20 ? message.slice(0, 20) + "..." : message)
                : t('detail.homeworkTitle');

            const { data: sessionData, error: sessionError } = await supabase
                .from('sessions')
                .insert({
                    user_id: user.id,
                    title: tempTitle
                })
                .select()
                .single();

            if (sessionError) throw new Error(`创建会话失败: ${sessionError.message}`);

            const sessionId = sessionData.id;

            // 3. Insert Initial Message
            setUploadProgress(t('uploadZone.savingMessage'));
            const { error: msgError } = await supabase
                .from('messages')
                .insert({
                    session_id: sessionId,
                    role: 'user',
                    content: message.trim() || t('chat.defaultQuestion'),
                    image_url: finalImageUrl
                });

            if (msgError) throw new Error(`插入消息失败: ${msgError.message}`);

            // 4. Navigate
            setUploadProgress(t('uploadZone.redirecting'));
            setTimeout(() => {
                navigate(`/homework/${sessionId}`);
            }, 300);

        } catch (error) {
            console.error("Upload failed:", error);
            setIsUploading(false);
            setUploadProgress('');
            alert(`${t('uploadZone.uploadFailed')}${error.message || t('common.error')}`);
        }
    };

    const handleFileSelect = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
            if (validTypes.includes(file.type)) {
                setSelectedFile(file);
                if (file.type.startsWith('image/')) {
                    const url = URL.createObjectURL(file);
                    setPreviewUrl(url);
                }
            } else {
                alert(t('chat.uploadLimitTip'));
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
                e.preventDefault();
                const file = item.getAsFile();
                if (file) {
                    setSelectedFile(file);
                    const url = URL.createObjectURL(file);
                    setPreviewUrl(url);
                }
                return;
            }
        }
    };

    // 自动调整 textarea 高度
    const handleInput = (e) => {
        const textarea = e.target;
        textarea.style.height = 'auto';
        textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px';
    };

    return (
        <div className="relative">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                {/* 标题 */}
                <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                        {t('uploadZone.title')}
                    </h3>
                    <p className="text-sm text-slate-500">
                        {t('uploadZone.subtitle')}
                    </p>
                </div>

                {/* 文件预览区域 */}
                {selectedFile && (
                    <div className="mb-4 flex items-start gap-3 bg-indigo-50 rounded-lg p-3 border border-indigo-200">
                        <div className="relative group flex-shrink-0">
                            {previewUrl ? (
                                <img
                                    src={previewUrl}
                                    alt={t('chat.preview')}
                                    className="h-24 w-24 object-cover rounded-lg border-2 border-indigo-300"
                                />
                            ) : (
                                <div className="h-24 w-24 bg-slate-100 rounded-lg border-2 border-slate-300 flex items-center justify-center">
                                    <ImageIcon size={40} className="text-slate-400" />
                                </div>
                            )}
                            <button
                                type="button"
                                onClick={removeFile}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-600"
                            >
                                <X size={16} />
                            </button>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-slate-700 truncate">{selectedFile.name}</p>
                            <p className="text-xs text-slate-500 mt-1">
                                {(selectedFile.size / 1024).toFixed(1)} KB
                            </p>
                        </div>
                    </div>
                )}

                {/* 文本输入区域 */}
                <div className="mb-4">
                    <textarea
                        ref={textareaRef}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onInput={handleInput}
                        onPaste={handlePaste}
                        placeholder={t('uploadZone.placeholder')}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-slate-700 placeholder:text-slate-400"
                        disabled={isUploading}
                        rows={3}
                        style={{
                            minHeight: '80px',
                            maxHeight: '200px'
                        }}
                    />
                </div>

                {/* 操作按钮区域 */}
                <div className="flex items-center justify-between gap-3">
                    {/* 左侧：附件按钮 */}
                    <div className="flex items-center gap-2">
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*,.pdf"
                            onChange={handleFileSelect}
                            className="hidden"
                            id="file-upload-zone"
                        />
                        <label
                            htmlFor="file-upload-zone"
                            className={clsx(
                                "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors cursor-pointer",
                                selectedFile
                                    ? "text-indigo-600 bg-indigo-50 border border-indigo-200"
                                    : "text-slate-600 bg-slate-100 hover:bg-slate-200 border border-slate-200"
                            )}
                        >
                            <Paperclip size={18} />
                            <span className="text-sm font-medium">{t('uploadZone.addImage')}</span>
                        </label>
                    </div>

                    {/* 右侧：发送按钮 */}
                    <button
                        type="submit"
                        disabled={(!message.trim() && !selectedFile) || isUploading}
                        className={clsx(
                            "flex items-center gap-2 px-6 py-2 rounded-lg transition-all duration-200 font-medium",
                            (message.trim() || selectedFile) && !isUploading
                                ? "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95 shadow-md"
                                : "bg-slate-200 text-slate-400 cursor-not-allowed"
                        )}
                    >
                        <Send size={18} />
                        <span>{t('uploadZone.startChat')}</span>
                    </button>
                </div>

                {/* 提示文字 */}
                <div className="mt-4 text-xs text-slate-400 text-center flex items-center justify-center gap-4">
                    <span className="flex items-center gap-1">
                        <Type size={14} />
                        {t('uploadZone.tips.text')}
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="flex items-center gap-1">
                        <Paperclip size={14} />
                        {t('uploadZone.tips.upload')}
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="flex items-center gap-1">
                        <ImageIcon size={14} />
                        {t('uploadZone.tips.paste')}
                    </span>
                </div>
            </form>

            {/* 加载覆盖层 */}
            {isUploading && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center z-10 animate-in fade-in duration-300">
                    <div className="relative">
                        <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Send className="text-indigo-600 animate-pulse" size={24} />
                        </div>
                    </div>
                    <p className="mt-6 text-indigo-600 font-medium animate-pulse">
                        {uploadProgress}
                    </p>
                    <p className="mt-2 text-sm text-slate-500">
                        {t('uploadZone.tips.wait')}
                    </p>
                </div>
            )}
        </div>
    );
};

export default UploadZone;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase';
import { Clock, Search, Trash2, X, Download, FileJson, FileText, FileType } from 'lucide-react';
import { exportSessions } from '../services/exportService';

// 学科中文映射和图标配置
const SUBJECT_CONFIG = {
    'Math': { name: '数学', icon: '📐', color: 'bg-blue-100 text-blue-700 border-blue-200' },
    'Physics': { name: '物理', icon: '🧲', color: 'bg-purple-100 text-purple-700 border-purple-200' },
    'Chemistry': { name: '化学', icon: '🧬', color: 'bg-green-100 text-green-700 border-green-200' },
    'Chinese': { name: '语文', icon: '📖', color: 'bg-red-100 text-red-700 border-red-200' },
    'English': { name: '英语', icon: '🌍', color: 'bg-orange-100 text-orange-700 border-orange-200' },
    'Biology': { name: '生物', icon: '🌿', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
    'History': { name: '历史', icon: '📜', color: 'bg-amber-100 text-amber-700 border-amber-200' },
    'Geography': { name: '地理', icon: '🗺️', color: 'bg-teal-100 text-teal-700 border-teal-200' },
    'General': { name: '通用', icon: '📚', color: 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600' }
};

// 获取学科配置
const getSubjectConfig = (subject) => {
    return SUBJECT_CONFIG[subject] || SUBJECT_CONFIG['General'];
};

const History = () => {
    const [sessions, setSessions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSubjects, setSelectedSubjects] = useState([]); // 多选学科
    const [selectedTags, setSelectedTags] = useState([]); // 多选知识点

    const [selectedSessions, setSelectedSessions] = useState([]);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isExporting, setIsExporting] = useState(false);
    const [showExportMenu, setShowExportMenu] = useState(false);
    const [totalCreated, setTotalCreated] = useState(0); // 累积总数

    // 提取所有唯一的学科
    const allSubjects = [...new Set(sessions.map(s => s.subject || 'General').filter(Boolean))];

    // 构建学科到知识点的映射
    const subjectToTags = sessions.reduce((acc, session) => {
        const subject = session.subject || 'General';
        if (!acc[subject]) acc[subject] = new Set();
        if (session.tags && Array.isArray(session.tags)) {
            session.tags.forEach(tag => acc[subject].add(tag));
        }
        return acc;
    }, {});

    // 根据选中的学科，筛选出可用的知识点
    const availableTags = selectedSubjects.length > 0
        ? [...new Set(selectedSubjects.flatMap(subject => Array.from(subjectToTags[subject] || [])))]
        : [...new Set(sessions.flatMap(s => s.tags || []))];

    // 切换学科选择
    const toggleSubject = (subject) => {
        setSelectedSubjects(prev =>
            prev.includes(subject)
                ? prev.filter(s => s !== subject)
                : [...prev, subject]
        );
        // 清除不再可用的知识点选择
        setSelectedTags(prev => prev.filter(tag => {
            const newSubjects = selectedSubjects.includes(subject)
                ? selectedSubjects.filter(s => s !== subject)
                : [...selectedSubjects, subject];
            if (newSubjects.length === 0) return true;
            return newSubjects.some(subj => subjectToTags[subj]?.has(tag));
        }));
    };

    // 切换知识点选择
    const toggleTag = (tag) => {
        setSelectedTags(prev =>
            prev.includes(tag)
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        );
    };

    useEffect(() => {
        const loadAllSessions = async () => {
            setLoading(true);
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                setLoading(false);
                return;
            }

            // 获取当前会话列表
            const { data, error } = await supabase
                .from('sessions')
                .select('*')
                .eq('user_id', user.id)
                .order('created_at', { ascending: false });

            if (data) {
                setSessions(data);
            }

            // 获取累积总数（包含已删除）
            const { data: userStats } = await supabase
                .from('user_stats')
                .select('total_sessions_created')
                .eq('user_id', user.id)
                .single();

            setTotalCreated(userStats?.total_sessions_created || 0);
            setLoading(false);
        };

        loadAllSessions();
    }, []);

    // Close export menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showExportMenu && !event.target.closest('.export-menu-container')) {
                setShowExportMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showExportMenu]);

    const handleExport = async (format) => {
        if (selectedSessions.length === 0) {
            alert('请先选择要导出的会话');
            return;
        }

        setIsExporting(true);
        setShowExportMenu(false);

        try {
            const result = await exportSessions(selectedSessions, format);

            // 格式名称映射
            const formatNames = {
                'json': 'JSON',
                'markdown': 'Markdown',
                'word': 'Word',
                'pdf': 'PDF'
            };
            const formatName = formatNames[format] || format;

            let message = `✅ 成功导出 ${result.count} 个会话为 ${formatName} 格式！\n\n`;

            if (format === 'word') {
                message += `📄 Word 文档已保存到您的下载文件夹。\n`;
                message += `💡 提示：可以使用 Microsoft Word 或 WPS 打开编辑。`;
            } else if (format === 'pdf') {
                message += `📕 PDF 文件已保存到您的下载文件夹。\n`;
                message += `💡 提示：可以直接打开查看或打印，适合分享给老师和家长。`;
            } else if (format === 'markdown' && result.count > 1) {
                message += `📁 已下载 ${result.count} 个 Markdown 文件到您的下载文件夹。\n`;
                message += `💡 提示：如果浏览器询问，请允许多个文件下载。`;
            } else {
                message += `📁 文件已保存到您的下载文件夹。`;
            }

            alert(message);

            // 可选：导出成功后取消选择
            // setSelectedSessions([]);
            // setIsSelectionMode(false);
        } catch (error) {
            console.error('Export error:', error);
            alert('❌ 导出失败：' + error.message);
        } finally {
            setIsExporting(false);
        }
    };

    const handleDeleteSessions = async () => {
        if (selectedSessions.length === 0) return;

        const confirmMsg = `确定要删除选中的 ${selectedSessions.length} 个作业吗？此操作无法撤销。`;
        if (!window.confirm(confirmMsg)) return;

        setIsDeleting(true);
        try {
            const { error } = await supabase
                .from('sessions')
                .delete()
                .in('id', selectedSessions);

            if (error) throw error;

            // Update local state
            setSessions(prev => prev.filter(s => !selectedSessions.includes(s.id)));
            setSelectedSessions([]);
            alert('删除成功！');
        } catch (error) {
            console.error('Delete error:', error);
            alert('删除失败：' + error.message);
        } finally {
            setIsDeleting(false);
        }
    };

    const toggleSelection = (sessionId) => {
        setSelectedSessions(prev =>
            prev.includes(sessionId)
                ? prev.filter(id => id !== sessionId)
                : [...prev, sessionId]
        );
    };

    const toggleSelectAll = () => {
        if (selectedSessions.length === filteredSessions.length) {
            setSelectedSessions([]);
        } else {
            setSelectedSessions(filteredSessions.map(s => s.id));
        }
    };

    // Helper for relative time
    const timeAgo = (dateString) => {
        const seconds = Math.floor((new Date() - new Date(dateString)) / 1000);
        let interval = seconds / 31536000;
        if (interval > 1) return Math.floor(interval) + " 年前";
        interval = seconds / 2592000;
        if (interval > 1) return Math.floor(interval) + " 个月前";
        interval = seconds / 86400;
        if (interval > 1) return Math.floor(interval) + " 天前";
        interval = seconds / 3600;
        if (interval > 1) return Math.floor(interval) + " 小时前";
        interval = seconds / 60;
        if (interval > 1) return Math.floor(interval) + " 分钟前";
        return "刚刚";
    };

    const filteredSessions = sessions.filter(session => {
        const matchesSearch = session.title?.toLowerCase().includes(searchTerm.toLowerCase());

        // 学科筛选：如果没选学科，显示全部；如果选了，必须匹配其中之一
        const matchesSubject = selectedSubjects.length === 0 ||
            selectedSubjects.includes(session.subject || 'General');

        // 知识点筛选：如果没选知识点，显示全部；如果选了，必须包含其中之一
        const matchesTag = selectedTags.length === 0 ||
            (session.tags && selectedTags.some(tag => session.tags.includes(tag)));

        return matchesSearch && matchesSubject && matchesTag;
    });

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800 dark:text-white">我的作业</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                        {sessions.length > 0 ? `共 ${sessions.length} 个会话` : '还没有作业会话'}
                        {selectedSessions.length > 0 && ` · 已选择 ${selectedSessions.length} 个`}
                    </p>
                </div>
            </div>

            {/* Action Bar - 新设计 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 p-4 space-y-4">
                {/* 筛选区域 */}
                <div className="space-y-3">
                    {/* 1. 学科筛选 (Subject Pills) */}
                    {allSubjects.length > 0 && (
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">📚 学科</span>
                                {selectedSubjects.length > 0 && (
                                    <button
                                        onClick={() => setSelectedSubjects([])}
                                        className="text-xs text-indigo-600 hover:text-indigo-700 font-medium"
                                    >
                                        清除
                                    </button>
                                )}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {allSubjects.map(subject => (
                                    <button
                                        key={subject}
                                        onClick={() => toggleSubject(subject)}
                                        className={`
                                            px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all border
                                            ${selectedSubjects.includes(subject)
                                                ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                                                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600 dark:hover:bg-slate-700'}
                                        `}
                                    >
                                        <span>{getSubjectConfig(subject).icon}</span>
                                        <span>{getSubjectConfig(subject).name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 2. 知识点筛选 (Tag Pills) - 智能联动 */}
                    {availableTags.length > 0 && (
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">🏷️ 知识点</span>
                                {selectedTags.length > 0 && (
                                    <button
                                        onClick={() => setSelectedTags([])}
                                        className="text-xs text-indigo-600 hover:text-indigo-700 font-medium"
                                    >
                                        清除
                                    </button>
                                )}
                                {selectedSubjects.length > 0 && (
                                    <span className="text-xs text-slate-400">
                                        （仅显示已选学科的知识点）
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {availableTags.map(tag => (
                                    <button
                                        key={tag}
                                        onClick={() => toggleTag(tag)}
                                        className={`
                                            px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all border
                                            ${selectedTags.includes(tag)
                                                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                                                : 'bg-white text-slate-600 border-slate-200 hover:bg-emerald-50 hover:border-emerald-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600 dark:hover:bg-emerald-900/30'}
                                        `}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* 搜索和操作栏 */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-2 border-t border-slate-100 dark:border-slate-700">
                    {/* 左侧：搜索和全选 */}
                    <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 flex-1 w-full md:w-auto">

                        {/* 搜索框 */}
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="text"
                                placeholder="搜索会话..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-slate-900 dark:border-slate-600 dark:text-white dark:placeholder-slate-400"
                            />
                        </div>

                        {/* 全选复选框 */}
                        {filteredSessions.length > 0 && (
                            <label className="flex items-center gap-2 cursor-pointer px-1 py-2 md:px-3 rounded-lg hover:bg-slate-50 transition-colors">
                                <input
                                    type="checkbox"
                                    checked={selectedSessions.length === filteredSessions.length && filteredSessions.length > 0}
                                    onChange={toggleSelectAll}
                                    className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500 dark:bg-slate-700 dark:border-slate-500"
                                />
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap">全选</span>
                            </label>
                        )}
                    </div>

                    {/* 右侧：操作按钮 */}
                    <div className="flex items-center gap-2">
                        {selectedSessions.length > 0 ? (
                            <>
                                {/* 取消选择 */}
                                <button
                                    onClick={() => {
                                        setSelectedSessions([]);
                                        setShowExportMenu(false);
                                    }}
                                    className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
                                >
                                    <X size={16} />
                                    取消
                                </button>

                                {/* 导出按钮 */}
                                <div className="relative export-menu-container">
                                    <button
                                        onClick={() => setShowExportMenu(!showExportMenu)}
                                        disabled={isExporting}
                                        className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-all shadow-sm hover:shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                    >
                                        <Download size={16} />
                                        {isExporting ? '导出中...' : `导出 (${selectedSessions.length})`}
                                    </button>

                                    {/* Export Format Menu */}
                                    {showExportMenu && selectedSessions.length > 0 && (
                                        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden z-10">
                                            <div className="p-2 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/30 dark:to-blue-900/30 border-b border-slate-200 dark:border-slate-700">
                                                <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">选择导出格式</p>
                                            </div>

                                            {/* Word 格式 - 推荐 */}
                                            <button
                                                onClick={() => handleExport('word')}
                                                disabled={selectedSessions.length > 1}
                                                className="w-full px-4 py-3 text-left text-sm text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                                                    <FileType size={16} className="text-blue-700" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-medium flex items-center gap-2">
                                                        Word 文档
                                                        <span className="text-xs px-1.5 py-0.5 bg-emerald-500 text-white rounded-full">推荐</span>
                                                    </div>
                                                    <div className="text-xs text-slate-500 dark:text-slate-400">
                                                        {selectedSessions.length > 1 ? '仅支持单个会话' : '可编辑 · 易打印'}
                                                    </div>
                                                </div>
                                            </button>

                                            {/* TXT 格式 - 推荐 */}
                                            <button
                                                onClick={() => handleExport('pdf')}
                                                disabled={selectedSessions.length > 1}
                                                className="w-full px-4 py-3 text-left text-sm text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors flex items-center gap-3 border-t border-slate-100 dark:border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                                                    <FileText size={16} className="text-emerald-600" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-medium flex items-center gap-2">
                                                        TXT 文本
                                                        <span className="text-xs px-1.5 py-0.5 bg-emerald-500 text-white rounded-full">推荐</span>
                                                    </div>
                                                    <div className="text-xs text-slate-500">
                                                        {selectedSessions.length > 1 ? '仅支持单个会话' : '纯文本 · 完美中文'}
                                                    </div>
                                                </div>
                                            </button>

                                            {/* 分隔线 */}
                                            <div className="border-t-2 border-slate-200 dark:border-slate-700 my-1"></div>

                                            {/* JSON 格式 */}
                                            <button
                                                onClick={() => handleExport('json')}
                                                className="w-full px-4 py-3 text-left text-sm text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors flex items-center gap-3"
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                                                    <FileJson size={16} className="text-blue-600" />
                                                </div>
                                                <div>
                                                    <div className="font-medium">JSON 数据</div>
                                                    <div className="text-xs text-slate-500 dark:text-slate-400">结构化 · 批量支持</div>
                                                </div>
                                            </button>

                                            {/* Markdown 格式 */}
                                            <button
                                                onClick={() => handleExport('markdown')}
                                                className="w-full px-4 py-3 text-left text-sm text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors flex items-center gap-3 border-t border-slate-100 dark:border-slate-700"
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
                                                    <FileText size={16} className="text-purple-600" />
                                                </div>
                                                <div>
                                                    <div className="font-medium">Markdown 文档</div>
                                                    <div className="text-xs text-slate-500 dark:text-slate-400">纯文本 · 批量支持</div>
                                                </div>
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* 删除按钮 */}
                                <button
                                    onClick={handleDeleteSessions}
                                    disabled={isDeleting}
                                    className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-600 to-red-500 rounded-lg hover:from-red-700 hover:to-red-600 transition-all shadow-sm hover:shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                >
                                    <Trash2 size={16} />
                                    {isDeleting ? '删除中...' : `删除 (${selectedSessions.length})`}
                                </button>
                            </>
                        ) : (
                            /* 未选择时显示的提示 */
                            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <span>💡 勾选会话以批量操作</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Sessions List */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                {loading ? (
                    <div className="p-12 text-center text-slate-500 dark:text-slate-400">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                        加载中...
                    </div>
                ) : filteredSessions.length > 0 ? (
                    <div className="divide-y divide-slate-100 dark:divide-slate-700">
                        {filteredSessions.map((session) => (
                            <div
                                key={session.id}
                                className="p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors flex items-center gap-4 group"
                            >
                                {/* 复选框 - 始终显示 */}
                                <input
                                    type="checkbox"
                                    checked={selectedSessions.includes(session.id)}
                                    onChange={() => toggleSelection(session.id)}
                                    className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500 cursor-pointer dark:bg-slate-700 dark:border-slate-500"
                                    onClick={(e) => e.stopPropagation()}
                                />

                                <Link
                                    to={`/homework/${session.id}`}
                                    className="flex items-center gap-4 flex-1 min-w-0"
                                >
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border-2 ${getSubjectConfig(session.subject || 'General').color}`}>
                                        <span className="text-2xl">{getSubjectConfig(session.subject || 'General').icon}</span>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="font-medium text-slate-700 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                                            {session.title || '未命名会话'}
                                        </p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <Clock size={14} className="text-slate-400 dark:text-slate-500" />
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                {timeAgo(session.created_at)}
                                            </p>
                                            {/* 显示知识点标签（如果有） */}
                                            {session.tags && session.tags.length > 0 && (
                                                <>
                                                    <span className="text-slate-300">•</span>
                                                    {session.tags.slice(0, 2).map((tag, index) => (
                                                        <span key={index} className="text-xs px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                    {session.tags.length > 2 && (
                                                        <span
                                                            className="text-xs text-slate-400 cursor-help border-b border-dotted border-slate-400"
                                                            title={session.tags.slice(2).join(', ')}
                                                        >
                                                            +{session.tags.length - 2}
                                                        </span>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* 右侧操作区 - 现在也可点击 */}
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 whitespace-nowrap">
                                            查看
                                        </span>
                                        <svg className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="p-12 text-center text-slate-500">
                        <p className="text-lg font-medium mb-2">
                            {searchTerm ? '未找到会话' : '还没有作业会话'}
                        </p>
                        <p className="text-sm">
                            {searchTerm ? '试试其他搜索词' : '从主页开始上传作业题目'}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default History;

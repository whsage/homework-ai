import { useState } from 'react';
import { supabase } from '../../supabase';

const DataPrivacy = () => {
    const [exporting, setExporting] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [showAccountDeleteConfirm, setShowAccountDeleteConfirm] = useState(false);

    const handleExportData = async () => {
        setExporting(true);
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;

            // 获取所有用户数据
            const { data: sessions } = await supabase
                .from('homework_sessions')
                .select('*')
                .eq('user_id', user.id);

            const { data: settings } = await supabase
                .from('user_settings')
                .select('*')
                .eq('user_id', user.id)
                .single();

            const exportData = {
                user: {
                    id: user.id,
                    email: user.email,
                    created_at: user.created_at
                },
                sessions: sessions || [],
                settings: settings || {},
                exported_at: new Date().toISOString()
            };

            // 创建下载
            const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `homework-data-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            alert('数据导出成功！');
        } catch (error) {
            console.error('Error exporting data:', error);
            alert('数据导出失败，请重试');
        } finally {
            setExporting(false);
        }
    };

    const handleClearHistory = async () => {
        setDeleting(true);
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;

            const { error } = await supabase
                .from('homework_sessions')
                .delete()
                .eq('user_id', user.id);

            if (error) throw error;

            alert('历史记录已清除！');
            setShowDeleteConfirm(false);
        } catch (error) {
            console.error('Error clearing history:', error);
            alert('清除失败，请重试');
        } finally {
            setDeleting(false);
        }
    };

    const handleDeleteAccount = async () => {
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;

            // 删除用户数据
            await supabase.from('homework_sessions').delete().eq('user_id', user.id);
            await supabase.from('user_settings').delete().eq('user_id', user.id);

            // 注销账号（需要后端支持）
            alert('账号注销功能需要联系管理员处理');
            setShowAccountDeleteConfirm(false);
        } catch (error) {
            console.error('Error deleting account:', error);
            alert('注销失败，请联系管理员');
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-1">数据与隐私</h2>
                <p className="text-slate-600">管理你的个人数据和隐私设置</p>
            </div>

            {/* 数据导出 */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl flex-shrink-0">
                        📥
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-slate-800 mb-2">导出我的数据</h3>
                        <p className="text-sm text-slate-600 mb-4">
                            下载包含你所有作业会话、设置和个人信息的 JSON 文件。你可以保存此文件作为备份或迁移到其他平台。
                        </p>
                        <button
                            onClick={handleExportData}
                            disabled={exporting}
                            className="px-5 py-2.5 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {exporting ? '导出中...' : '导出数据'}
                        </button>
                    </div>
                </div>
            </div>

            {/* 清除历史记录 */}
            <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white text-2xl flex-shrink-0">
                        🗑️
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-slate-800 mb-2">清除历史记录</h3>
                        <p className="text-sm text-slate-600 mb-4">
                            删除所有作业会话和聊天记录。此操作不可恢复，请谨慎操作。你的账户和设置将被保留。
                        </p>
                        {!showDeleteConfirm ? (
                            <button
                                onClick={() => setShowDeleteConfirm(true)}
                                className="px-5 py-2.5 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-all"
                            >
                                清除历史
                            </button>
                        ) : (
                            <div className="flex gap-3">
                                <button
                                    onClick={handleClearHistory}
                                    disabled={deleting}
                                    className="px-5 py-2.5 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-all disabled:opacity-50"
                                >
                                    {deleting ? '清除中...' : '确认清除'}
                                </button>
                                <button
                                    onClick={() => setShowDeleteConfirm(false)}
                                    className="px-5 py-2.5 bg-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-300 transition-all"
                                >
                                    取消
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* 隐私设置 */}
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-500 flex items-center justify-center text-white text-2xl flex-shrink-0">
                        🔒
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-slate-800 mb-2">隐私设置</h3>
                        <div className="space-y-3">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    defaultChecked={false}
                                    className="w-5 h-5 text-blue-600 rounded"
                                />
                                <span className="text-sm text-slate-700">
                                    允许使用我的数据改进服务（匿名化处理）
                                </span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    defaultChecked={true}
                                    className="w-5 h-5 text-blue-600 rounded"
                                />
                                <span className="text-sm text-slate-700">
                                    仅在本地设备保存敏感数据
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {/* 账号注销 */}
            <div className="p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border border-red-100">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl flex-shrink-0">
                        ⚠️
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-slate-800 mb-2">注销账号</h3>
                        <p className="text-sm text-slate-600 mb-4">
                            永久删除你的账号和所有相关数据。此操作不可恢复，请在注销前导出你的数据。
                        </p>
                        {!showAccountDeleteConfirm ? (
                            <button
                                onClick={() => setShowAccountDeleteConfirm(true)}
                                className="px-5 py-2.5 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-all"
                            >
                                注销账号
                            </button>
                        ) : (
                            <div className="space-y-3">
                                <div className="p-3 bg-red-100 rounded-lg">
                                    <p className="text-sm text-red-800 font-medium">
                                        ⚠️ 警告：此操作将永久删除你的账号和所有数据，无法恢复！
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={handleDeleteAccount}
                                        className="px-5 py-2.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all"
                                    >
                                        确认注销
                                    </button>
                                    <button
                                        onClick={() => setShowAccountDeleteConfirm(false)}
                                        className="px-5 py-2.5 bg-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-300 transition-all"
                                    >
                                        取消
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* 隐私政策 */}
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex gap-3">
                    <span className="text-blue-600 text-xl">📜</span>
                    <div className="flex-1">
                        <div className="font-medium text-blue-900 mb-1">隐私承诺</div>
                        <div className="text-sm text-blue-700 space-y-1">
                            <p>• 我们重视你的隐私，所有数据都经过加密存储</p>
                            <p>• 你的作业内容和聊天记录仅用于提供服务</p>
                            <p>• 我们不会将你的个人信息出售给第三方</p>
                            <p>• 你可以随时导出或删除你的数据</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataPrivacy;

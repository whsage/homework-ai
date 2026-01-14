import { useState } from 'react';
import { useUser } from '../../context/UserContext';

const NotificationSettings = () => {
    const { settings, updateNotifications } = useUser();
    const [formData, setFormData] = useState(settings.notifications);
    const [saved, setSaved] = useState(false);

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = async () => {
        await updateNotifications(formData);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-1">通知设置</h2>
                <p className="text-slate-600">管理应用通知和提醒</p>
            </div>

            {/* 每日学习提醒 */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                        <div className="font-medium text-slate-800 mb-1 flex items-center gap-2">
                            <span>📚</span>
                            <span>每日学习提醒</span>
                        </div>
                        <div className="text-sm text-slate-600">在指定时间提醒你开始学习</div>
                    </div>
                    <button
                        onClick={() => handleChange('dailyReminder', !formData.dailyReminder)}
                        className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${formData.dailyReminder ? 'bg-blue-500' : 'bg-slate-300'
                            }`}
                    >
                        <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${formData.dailyReminder ? 'translate-x-6' : 'translate-x-1'
                                }`}
                        />
                    </button>
                </div>

                {formData.dailyReminder && (
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            提醒时间
                        </label>
                        <input
                            type="time"
                            value={formData.reminderTime}
                            onChange={(e) => handleChange('reminderTime', e.target.value)}
                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                    </div>
                )}
            </div>

            {/* 会话即将过期提醒 */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <div className="font-medium text-slate-800 mb-1 flex items-center gap-2">
                            <span>⏰</span>
                            <span>会话即将过期提醒</span>
                        </div>
                        <div className="text-sm text-slate-600">在会话即将被删除前提醒你</div>
                    </div>
                    <button
                        onClick={() => handleChange('expirationWarning', !formData.expirationWarning)}
                        className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${formData.expirationWarning ? 'bg-blue-500' : 'bg-slate-300'
                            }`}
                    >
                        <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${formData.expirationWarning ? 'translate-x-6' : 'translate-x-1'
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* 新功能通知 */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <div className="font-medium text-slate-800 mb-1 flex items-center gap-2">
                            <span>🎉</span>
                            <span>新功能通知</span>
                        </div>
                        <div className="text-sm text-slate-600">当有新功能上线时通知你</div>
                    </div>
                    <button
                        onClick={() => handleChange('featureUpdates', !formData.featureUpdates)}
                        className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${formData.featureUpdates ? 'bg-blue-500' : 'bg-slate-300'
                            }`}
                    >
                        <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${formData.featureUpdates ? 'translate-x-6' : 'translate-x-1'
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* 系统消息 */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <div className="font-medium text-slate-800 mb-1 flex items-center gap-2">
                            <span>📢</span>
                            <span>系统消息</span>
                        </div>
                        <div className="text-sm text-slate-600">接收重要的系统通知和公告</div>
                    </div>
                    <button
                        onClick={() => handleChange('systemMessages', !formData.systemMessages)}
                        className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${formData.systemMessages ? 'bg-blue-500' : 'bg-slate-300'
                            }`}
                    >
                        <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${formData.systemMessages ? 'translate-x-6' : 'translate-x-1'
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* 通知预览 */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <div className="text-sm font-medium text-slate-700 mb-3">通知预览</div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white flex-shrink-0">
                            📚
                        </div>
                        <div className="flex-1">
                            <div className="font-medium text-slate-800 mb-1">学习提醒</div>
                            <div className="text-sm text-slate-600">
                                {formData.dailyReminder
                                    ? `每天 ${formData.reminderTime} 提醒你开始学习`
                                    : '学习提醒已关闭'
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 提示信息 */}
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                <div className="flex gap-3">
                    <span className="text-amber-600 text-xl">⚠️</span>
                    <div className="flex-1">
                        <div className="font-medium text-amber-900 mb-1">注意</div>
                        <div className="text-sm text-amber-700">
                            通知功能需要浏览器权限。首次启用时，浏览器会请求你的授权。
                        </div>
                    </div>
                </div>
            </div>

            {/* 保存按钮 */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <button
                    onClick={handleSave}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg"
                >
                    保存更改
                </button>
                {saved && (
                    <span className="text-green-600 flex items-center gap-1 animate-fade-in">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        已保存
                    </span>
                )}
            </div>
        </div>
    );
};

export default NotificationSettings;

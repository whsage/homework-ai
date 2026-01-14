import { useState } from 'react';
import { useUser } from '../../context/UserContext';

const SessionSettings = () => {
    const { settings, updateSessionSettings } = useUser();
    const [formData, setFormData] = useState(settings.sessionSettings);
    const [saved, setSaved] = useState(false);

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = async () => {
        await updateSessionSettings(formData);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-1">会话管理设置</h2>
                <p className="text-slate-600">管理作业会话的保存和命名方式</p>
            </div>

            {/* 自动保存频率 */}
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                    自动保存频率
                </label>
                <div className="space-y-3">
                    {[
                        { value: 'realtime', label: '实时保存', desc: '每次对话后立即保存', icon: '⚡' },
                        { value: '1min', label: '每分钟', desc: '每分钟自动保存一次', icon: '⏱️' },
                        { value: '5min', label: '每 5 分钟', desc: '每 5 分钟自动保存一次', icon: '⏰' }
                    ].map(option => (
                        <label
                            key={option.value}
                            className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.autoSaveFrequency === option.value
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-slate-200 hover:border-slate-300'
                                }`}
                        >
                            <span className="text-2xl">{option.icon}</span>
                            <div className="flex-1">
                                <input
                                    type="radio"
                                    name="autoSaveFrequency"
                                    value={option.value}
                                    checked={formData.autoSaveFrequency === option.value}
                                    onChange={(e) => handleChange('autoSaveFrequency', e.target.value)}
                                    className="hidden"
                                />
                                <div className="font-medium text-slate-800">{option.label}</div>
                                <div className="text-sm text-slate-600">{option.desc}</div>
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            {/* 会话保留时长 */}
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                    会话保留时长
                </label>
                <div className="space-y-3">
                    {[
                        { value: '7days', label: '7 天', desc: '7 天后自动删除旧会话', icon: '📅' },
                        { value: '30days', label: '30 天', desc: '30 天后自动删除旧会话', icon: '📆' },
                        { value: 'forever', label: '永久保留', desc: '不自动删除任何会话', icon: '♾️' }
                    ].map(option => (
                        <label
                            key={option.value}
                            className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.retentionPeriod === option.value
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-slate-200 hover:border-slate-300'
                                }`}
                        >
                            <span className="text-2xl">{option.icon}</span>
                            <div className="flex-1">
                                <input
                                    type="radio"
                                    name="retentionPeriod"
                                    value={option.value}
                                    checked={formData.retentionPeriod === option.value}
                                    onChange={(e) => handleChange('retentionPeriod', e.target.value)}
                                    className="hidden"
                                />
                                <div className="font-medium text-slate-800">{option.label}</div>
                                <div className="text-sm text-slate-600">{option.desc}</div>
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            {/* 会话上限提醒 */}
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                    会话上限提醒
                </label>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-4 mb-2">
                        <span className="text-sm text-slate-600">当剩余会话数 ≤</span>
                        <input
                            type="number"
                            min="1"
                            max="10"
                            value={formData.sessionLimitWarning}
                            onChange={(e) => handleChange('sessionLimitWarning', parseInt(e.target.value))}
                            className="w-20 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                        />
                        <span className="text-sm text-slate-600">时提醒</span>
                    </div>
                    <p className="text-xs text-slate-500">
                        当前会话上限为 20 个，达到设定值时会在侧边栏显示红色警告
                    </p>
                </div>
            </div>

            {/* 默认会话命名 */}
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                    默认会话命名
                </label>
                <div className="space-y-3">
                    {[
                        { value: 'auto', label: '自动生成', desc: '根据题目内容自动生成会话名称', icon: '🤖' },
                        { value: 'manual', label: '手动输入', desc: '每次创建会话时手动输入名称', icon: '✏️' }
                    ].map(option => (
                        <label
                            key={option.value}
                            className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.defaultNaming === option.value
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-slate-200 hover:border-slate-300'
                                }`}
                        >
                            <span className="text-2xl">{option.icon}</span>
                            <div className="flex-1">
                                <input
                                    type="radio"
                                    name="defaultNaming"
                                    value={option.value}
                                    checked={formData.defaultNaming === option.value}
                                    onChange={(e) => handleChange('defaultNaming', e.target.value)}
                                    className="hidden"
                                />
                                <div className="font-medium text-slate-800">{option.label}</div>
                                <div className="text-sm text-slate-600">{option.desc}</div>
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            {/* 提示信息 */}
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex gap-3">
                    <span className="text-blue-600 text-xl">💡</span>
                    <div className="flex-1">
                        <div className="font-medium text-blue-900 mb-1">小提示</div>
                        <div className="text-sm text-blue-700">
                            建议开启实时保存以防止数据丢失。如果你的会话较多，可以设置较短的保留时长以节省存储空间。
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

export default SessionSettings;

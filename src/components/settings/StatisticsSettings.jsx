import { useState } from 'react';
import { useUser } from '../../context/UserContext';

const StatisticsSettings = () => {
    const { settings, updateStatistics } = useUser();
    const [formData, setFormData] = useState(settings.statistics);
    const [saved, setSaved] = useState(false);

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = async () => {
        await updateStatistics(formData);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-1">学习统计</h2>
                <p className="text-slate-600">管理学习数据的显示和报告</p>
            </div>

            {/* 显示学习统计 */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <div className="font-medium text-slate-800 mb-1 flex items-center gap-2">
                            <span>📊</span>
                            <span>显示学习统计</span>
                        </div>
                        <div className="text-sm text-slate-600">在主页显示学习时长、问题数量等数据</div>
                    </div>
                    <button
                        onClick={() => handleChange('showStats', !formData.showStats)}
                        className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${formData.showStats ? 'bg-blue-500' : 'bg-slate-300'
                            }`}
                    >
                        <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${formData.showStats ? 'translate-x-6' : 'translate-x-1'
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* 学习报告频率 */}
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                    学习报告频率
                </label>
                <div className="space-y-3">
                    {[
                        {
                            value: 'weekly',
                            label: '每周报告',
                            desc: '每周一生成上周的学习报告',
                            icon: '📅'
                        },
                        {
                            value: 'monthly',
                            label: '每月报告',
                            desc: '每月初生成上月的学习报告',
                            icon: '📆'
                        }
                    ].map(option => (
                        <label
                            key={option.value}
                            className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.reportFrequency === option.value
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-slate-200 hover:border-slate-300'
                                }`}
                        >
                            <span className="text-2xl">{option.icon}</span>
                            <div className="flex-1">
                                <input
                                    type="radio"
                                    name="reportFrequency"
                                    value={option.value}
                                    checked={formData.reportFrequency === option.value}
                                    onChange={(e) => handleChange('reportFrequency', e.target.value)}
                                    className="hidden"
                                />
                                <div className="font-medium text-slate-800">{option.label}</div>
                                <div className="text-sm text-slate-600">{option.desc}</div>
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            {/* 成就系统 */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <div className="font-medium text-slate-800 mb-1 flex items-center gap-2">
                            <span>🏆</span>
                            <span>成就系统</span>
                        </div>
                        <div className="text-sm text-slate-600">解锁学习成就和徽章，激励学习进步</div>
                    </div>
                    <button
                        onClick={() => handleChange('achievementSystem', !formData.achievementSystem)}
                        className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${formData.achievementSystem ? 'bg-blue-500' : 'bg-slate-300'
                            }`}
                    >
                        <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${formData.achievementSystem ? 'translate-x-6' : 'translate-x-1'
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* 统计数据预览 */}
            {formData.showStats && (
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                    <div className="text-sm font-medium text-slate-700 mb-4">统计数据预览</div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="text-2xl font-bold text-blue-600 mb-1">24</div>
                            <div className="text-sm text-slate-600">完成题目</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="text-2xl font-bold text-green-600 mb-1">12h</div>
                            <div className="text-sm text-slate-600">学习时长</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="text-2xl font-bold text-purple-600 mb-1">8</div>
                            <div className="text-sm text-slate-600">连续天数</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="text-2xl font-bold text-orange-600 mb-1">5</div>
                            <div className="text-sm text-slate-600">获得成就</div>
                        </div>
                    </div>
                </div>
            )}

            {/* 成就预览 */}
            {formData.achievementSystem && (
                <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                    <div className="text-sm font-medium text-slate-700 mb-4">成就徽章示例</div>

                    <div className="grid grid-cols-4 gap-3">
                        {[
                            { icon: '🌟', label: '初学者', unlocked: true },
                            { icon: '🔥', label: '连续7天', unlocked: true },
                            { icon: '📚', label: '学霸', unlocked: false },
                            { icon: '💎', label: '完美主义', unlocked: false }
                        ].map((achievement, index) => (
                            <div
                                key={index}
                                className={`p-3 rounded-lg text-center ${achievement.unlocked
                                        ? 'bg-white shadow-md'
                                        : 'bg-slate-100 opacity-50'
                                    }`}
                            >
                                <div className="text-2xl mb-1">{achievement.icon}</div>
                                <div className="text-xs text-slate-600">{achievement.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* 提示信息 */}
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex gap-3">
                    <span className="text-blue-600 text-xl">💡</span>
                    <div className="flex-1">
                        <div className="font-medium text-blue-900 mb-1">关于学习统计</div>
                        <div className="text-sm text-blue-700">
                            学习统计可以帮助你了解学习进度和习惯。成就系统能够激励你保持学习动力。所有数据仅保存在你的账户中，不会与他人分享。
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

export default StatisticsSettings;

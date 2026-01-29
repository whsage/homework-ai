import { useState } from 'react';
import { useUser } from '../../context/UserContext';

const AppearanceSettings = () => {
    const { settings, updateAppearance } = useUser();
    const [formData, setFormData] = useState(settings.appearance);
    const [saved, setSaved] = useState(false);

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = async () => {
        await updateAppearance(formData);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const themes = [
        { value: 'light', label: '浅色', icon: '☀️', desc: '明亮清爽的界面' },
        { value: 'dark', label: '深色', icon: '🌙', desc: '护眼的深色模式' },
        { value: 'auto', label: '自动', icon: '🌗', desc: '跟随系统设置' }
    ];

    const colors = [
        { value: 'blue', label: '蓝色', gradient: 'from-blue-400 to-blue-600' },
        { value: 'purple', label: '紫色', gradient: 'from-purple-400 to-purple-600' },
        { value: 'green', label: '绿色', gradient: 'from-green-400 to-green-600' },
        { value: 'orange', label: '橙色', gradient: 'from-orange-400 to-orange-600' },
        { value: 'pink', label: '粉色', gradient: 'from-pink-400 to-pink-600' },
        { value: 'indigo', label: '靛蓝', gradient: 'from-indigo-400 to-indigo-600' }
    ];

    const fontSizes = [
        { value: 'small', label: '小', size: 'text-sm' },
        { value: 'medium', label: '中', size: 'text-base' },
        { value: 'large', label: '大', size: 'text-lg' }
    ];

    const bubbleStyles = [
        { value: 'rounded', label: '圆角', preview: 'rounded-2xl' },
        { value: 'square', label: '方角', preview: 'rounded-md' },
        { value: 'gradient', label: '渐变', preview: 'rounded-2xl bg-gradient-to-br' }
    ];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-1">外观主题</h2>
                <p className="text-slate-600">自定义应用的外观和视觉效果</p>
            </div>

            {/* 主题模式 */}
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                    主题模式
                </label>
                <div className="grid grid-cols-3 gap-3">
                    {themes.map(theme => (
                        <button
                            key={theme.value}
                            onClick={() => handleChange('theme', theme.value)}
                            className={`p-4 rounded-xl border-2 transition-all ${formData.theme === theme.value
                                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                                }`}
                        >
                            <div className="text-3xl mb-2">{theme.icon}</div>
                            <div className="font-medium mb-1">{theme.label}</div>
                            <div className="text-xs text-slate-500">{theme.desc}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* 主题色 */}
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                    主题色
                </label>
                <div className="grid grid-cols-3 gap-3">
                    {colors.map(color => (
                        <button
                            key={color.value}
                            onClick={() => handleChange('primaryColor', color.value)}
                            className={`p-4 rounded-xl border-2 transition-all ${formData.primaryColor === color.value
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-slate-200 hover:border-slate-300'
                                }`}
                        >
                            <div className={`h-8 rounded-lg bg-gradient-to-r ${color.gradient} mb-2`}></div>
                            <div className="font-medium text-sm text-slate-700">{color.label}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* 字体大小 */}
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                    字体大小
                </label>
                <div className="grid grid-cols-3 gap-3">
                    {fontSizes.map(size => (
                        <button
                            key={size.value}
                            onClick={() => handleChange('fontSize', size.value)}
                            className={`p-4 rounded-xl border-2 transition-all ${formData.fontSize === size.value
                                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                                }`}
                        >
                            <div className={`font-medium mb-1 ${size.size}`}>Aa</div>
                            <div className="text-sm">{size.label}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* 聊天气泡样式 */}
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                    聊天气泡样式
                </label>
                <div className="grid grid-cols-3 gap-3">
                    {bubbleStyles.map(style => (
                        <button
                            key={style.value}
                            onClick={() => handleChange('bubbleStyle', style.value)}
                            className={`p-4 rounded-xl border-2 transition-all ${formData.bubbleStyle === style.value
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-slate-200 hover:border-slate-300'
                                }`}
                        >
                            <div className="mb-3 flex justify-center">
                                <div className={`w-16 h-10 bg-slate-300 ${style.preview} ${style.value === 'gradient' ? 'from-blue-400 to-blue-600' : ''
                                    }`}></div>
                            </div>
                            <div className="font-medium text-sm text-slate-700">{style.label}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* 预览 */}
            <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200">
                <div className="text-sm font-medium text-slate-700 mb-4">预览效果</div>

                <div className="space-y-3">
                    {/* 用户消息 */}
                    <div className="flex justify-end">
                        <div className={`max-w-xs p-3 ${formData.bubbleStyle === 'rounded' ? 'rounded-2xl bg-blue-500' :
                                formData.bubbleStyle === 'square' ? 'rounded-md bg-blue-500' :
                                    'rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600'
                            } text-white shadow-md`}>
                            <p className={fontSizes.find(s => s.value === formData.fontSize)?.size}>
                                这是一条用户消息
                            </p>
                        </div>
                    </div>

                    {/* AI 消息 */}
                    <div className="flex justify-start">
                        <div className={`max-w-xs p-3 ${formData.bubbleStyle === 'rounded' ? 'rounded-2xl' :
                                formData.bubbleStyle === 'square' ? 'rounded-md' :
                                    'rounded-2xl'
                            } bg-white border border-slate-200 shadow-md`}>
                            <p className={`text-slate-700 ${fontSizes.find(s => s.value === formData.fontSize)?.size}`}>
                                这是一条 AI 回复消息
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 提示信息 */}
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex gap-3">
                    <span className="text-blue-600 text-xl">💡</span>
                    <div className="flex-1">
                        <div className="font-medium text-blue-900 mb-1">小提示</div>
                        <div className="text-sm text-blue-700">
                            外观设置会立即应用到整个应用。选择"自动"主题模式可以根据系统时间自动切换深浅色主题。
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

export default AppearanceSettings;

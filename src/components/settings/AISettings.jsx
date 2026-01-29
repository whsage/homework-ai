import { useState } from 'react';
import { useUser } from '../../context/UserContext';

const AISettings = () => {
    const { settings, updateAISettings } = useUser();
    const [formData, setFormData] = useState(settings.aiSettings);
    const [saved, setSaved] = useState(false);

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = async () => {
        await updateAISettings(formData);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const highlightColors = [
        { value: '#3b82f6', label: '蓝色', color: 'bg-blue-500' },
        { value: '#8b5cf6', label: '紫色', color: 'bg-purple-500' },
        { value: '#10b981', label: '绿色', color: 'bg-green-500' },
        { value: '#f59e0b', label: '橙色', color: 'bg-orange-500' },
        { value: '#ef4444', label: '红色', color: 'bg-red-500' },
        { value: '#ec4899', label: '粉色', color: 'bg-pink-500' }
    ];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-1">AI 交互设置</h2>
                <p className="text-slate-600">自定义 AI 助手的行为和显示方式</p>
            </div>

            {/* 默认提示模式 */}
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                    默认提示模式
                </label>
                <div className="grid grid-cols-3 gap-3">
                    {[
                        { value: 'analyze', label: '分析', icon: '🔍', desc: '分析问题' },
                        { value: 'hint', label: '提示', icon: '💡', desc: '给出提示' },
                        { value: 'guide', label: '引导', icon: '🧭', desc: '引导思考' }
                    ].map(option => (
                        <button
                            key={option.value}
                            onClick={() => handleChange('defaultPromptMode', option.value)}
                            className={`p-4 rounded-xl border-2 transition-all ${formData.defaultPromptMode === option.value
                                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                                }`}
                        >
                            <div className="text-2xl mb-1">{option.icon}</div>
                            <div className="font-medium text-sm mb-1">{option.label}</div>
                            <div className="text-xs text-slate-500">{option.desc}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* LaTeX 渲染 */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <div className="font-medium text-slate-800 mb-1">LaTeX 公式渲染</div>
                        <div className="text-sm text-slate-600">自动渲染数学公式和符号</div>
                    </div>
                    <button
                        onClick={() => handleChange('latexRendering', !formData.latexRendering)}
                        className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${formData.latexRendering ? 'bg-blue-500' : 'bg-slate-300'
                            }`}
                    >
                        <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${formData.latexRendering ? 'translate-x-6' : 'translate-x-1'
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* 关键词高亮 */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                        <div className="font-medium text-slate-800 mb-1">关键词高亮</div>
                        <div className="text-sm text-slate-600">高亮显示题目中的关键词</div>
                    </div>
                    <button
                        onClick={() => handleChange('keywordHighlight', !formData.keywordHighlight)}
                        className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${formData.keywordHighlight ? 'bg-blue-500' : 'bg-slate-300'
                            }`}
                    >
                        <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${formData.keywordHighlight ? 'translate-x-6' : 'translate-x-1'
                                }`}
                        />
                    </button>
                </div>

                {formData.keywordHighlight && (
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            高亮颜色
                        </label>
                        <div className="grid grid-cols-6 gap-2">
                            {highlightColors.map(color => (
                                <button
                                    key={color.value}
                                    onClick={() => handleChange('highlightColor', color.value)}
                                    className={`h-10 rounded-lg ${color.color} transition-all ${formData.highlightColor === color.value
                                            ? 'ring-2 ring-offset-2 ring-slate-400 scale-110'
                                            : 'hover:scale-105'
                                        }`}
                                    title={color.label}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* 打字机效果 */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <div className="font-medium text-slate-800 mb-1">打字机效果</div>
                        <div className="text-sm text-slate-600">AI 回复时逐字显示</div>
                    </div>
                    <button
                        onClick={() => handleChange('typewriterEffect', !formData.typewriterEffect)}
                        className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${formData.typewriterEffect ? 'bg-blue-500' : 'bg-slate-300'
                            }`}
                    >
                        <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${formData.typewriterEffect ? 'translate-x-6' : 'translate-x-1'
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* 语言偏好 */}
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                    语言偏好
                </label>
                <select
                    value={formData.language}
                    onChange={(e) => handleChange('language', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                >
                    <option value="zh-CN">简体中文</option>
                    <option value="en-US">English</option>
                </select>
            </div>

            {/* 预览示例 */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <div className="text-sm font-medium text-slate-700 mb-3">预览效果</div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-slate-700">
                        这是一个示例文本，其中包含
                        <span
                            className="px-1 rounded font-medium"
                            style={{
                                backgroundColor: formData.keywordHighlight ? `${formData.highlightColor}20` : 'transparent',
                                color: formData.keywordHighlight ? formData.highlightColor : 'inherit'
                            }}
                        >
                            关键词高亮
                        </span>
                        的效果展示。
                    </p>
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

export default AISettings;

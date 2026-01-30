import { useState } from 'react';
import { useUser } from '../../context/UserContext';

const LearningPreferences = () => {
    const { settings, updateLearningPreferences } = useUser();
    const [formData, setFormData] = useState(settings.learningPreferences);
    const [saved, setSaved] = useState(false);

    const subjects = [
        { id: 'math', label: '数学', icon: '🔢' },
        { id: 'physics', label: '物理', icon: '⚛️' },
        { id: 'chemistry', label: '化学', icon: '🧪' },
        { id: 'biology', label: '生物', icon: '🧬' },
        { id: 'chinese', label: '语文', icon: '📖' },
        { id: 'english', label: '英语', icon: '🔤' },
        { id: 'history', label: '历史', icon: '📜' },
        { id: 'geography', label: '地理', icon: '🌍' },
        { id: 'politics', label: '政治', icon: '⚖️' }
    ];

    const handleSubjectToggle = (subjectId) => {
        const newSubjects = formData.mainSubjects.includes(subjectId)
            ? formData.mainSubjects.filter(id => id !== subjectId)
            : [...formData.mainSubjects, subjectId];
        setFormData(prev => ({ ...prev, mainSubjects: newSubjects }));
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = async () => {
        await updateLearningPreferences(formData);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-1">学习偏好</h2>
                <p className="text-slate-600">设置你的学习科目和辅导风格偏好</p>
            </div>

            {/* 主要学科 */}
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                    主要学科 <span className="text-slate-500 text-xs">(可多选)</span>
                </label>
                <div className="grid grid-cols-3 gap-3">
                    {subjects.map(subject => (
                        <button
                            key={subject.id}
                            onClick={() => handleSubjectToggle(subject.id)}
                            className={`p-4 rounded-xl border-2 transition-all ${formData.mainSubjects.includes(subject.id)
                                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                                }`}
                        >
                            <div className="text-2xl mb-1">{subject.icon}</div>
                            <div className="font-medium text-sm">{subject.label}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* 辅导风格 */}
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                    辅导风格
                </label>
                <div className="space-y-3">
                    {[
                        { value: 'detailed', label: '详细解释', desc: 'AI 会提供更详细的步骤和解释' },
                        { value: 'balanced', label: '平衡模式', desc: '在详细和简洁之间取得平衡' },
                        { value: 'concise', label: '简洁提示', desc: 'AI 只提供关键提示，让你自己思考' }
                    ].map(option => (
                        <label
                            key={option.value}
                            className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.tutoringStyle === option.value
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-slate-200 hover:border-slate-300'
                                }`}
                        >
                            <input
                                type="radio"
                                name="tutoringStyle"
                                value={option.value}
                                checked={formData.tutoringStyle === option.value}
                                onChange={(e) => handleChange('tutoringStyle', e.target.value)}
                                className="mt-1 w-4 h-4 text-blue-600"
                            />
                            <div className="flex-1">
                                <div className="font-medium text-slate-800">{option.label}</div>
                                <div className="text-sm text-slate-600">{option.desc}</div>
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            {/* 引导模式 */}
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                    引导模式
                </label>
                <div className="space-y-3">
                    {[
                        { value: 'socratic', label: '苏格拉底式', desc: '通过提问引导你思考，培养独立解决问题的能力' },
                        { value: 'direct', label: '直接指导', desc: '更直接地提供解题思路和方法' }
                    ].map(option => (
                        <label
                            key={option.value}
                            className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.guidanceMode === option.value
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-slate-200 hover:border-slate-300'
                                }`}
                        >
                            <input
                                type="radio"
                                name="guidanceMode"
                                value={option.value}
                                checked={formData.guidanceMode === option.value}
                                onChange={(e) => handleChange('guidanceMode', e.target.value)}
                                className="mt-1 w-4 h-4 text-blue-600"
                            />
                            <div className="flex-1">
                                <div className="font-medium text-slate-800">{option.label}</div>
                                <div className="text-sm text-slate-600">{option.desc}</div>
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            {/* 鼓励程度 */}
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                    鼓励程度
                </label>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-slate-600">低</span>
                    <input
                        type="range"
                        min="0"
                        max="2"
                        value={formData.encouragementLevel === 'low' ? 0 : formData.encouragementLevel === 'medium' ? 1 : 2}
                        onChange={(e) => {
                            const levels = ['low', 'medium', 'high'];
                            handleChange('encouragementLevel', levels[e.target.value]);
                        }}
                        className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
                    />
                    <span className="text-sm text-slate-600">高</span>
                </div>
                <p className="text-sm text-slate-500 mt-2">
                    当前: <span className="font-medium text-slate-700">
                        {formData.encouragementLevel === 'low' ? '低' : formData.encouragementLevel === 'medium' ? '中' : '高'}
                    </span>
                </p>
            </div>

            {/* 难度级别 */}
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                    难度级别
                </label>
                <div className="grid grid-cols-3 gap-3">
                    {[
                        { value: 'basic', label: '基础', icon: '🌱' },
                        { value: 'medium', label: '中等', icon: '🌿' },
                        { value: 'advanced', label: '进阶', icon: '🌳' }
                    ].map(option => (
                        <button
                            key={option.value}
                            onClick={() => handleChange('difficultyLevel', option.value)}
                            className={`p-4 rounded-xl border-2 transition-all ${formData.difficultyLevel === option.value
                                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                                }`}
                        >
                            <div className="text-2xl mb-1">{option.icon}</div>
                            <div className="font-medium text-sm">{option.label}</div>
                        </button>
                    ))}
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

export default LearningPreferences;

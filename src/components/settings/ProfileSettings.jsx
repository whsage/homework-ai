import { useState, useEffect, useRef } from 'react';
import { useUser } from '../../context/UserContext';
import { supabase } from '../../supabase';
import { Lock, Check, AlertCircle, Edit2, Camera, X, Upload, User, Mail } from 'lucide-react';

// 预设头像列表 (尝试一些更有趣的 Seed)
const PRESET_AVATARS = [
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Nezha",      // 哪吒(伪)
    "https://api.dicebear.com/7.x/adventurer/svg?seed=MonkeyKing", // 悟空(伪)
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Mulan",      // 木兰
    "https://api.dicebear.com/7.x/micah/svg?seed=StudentCN",       // 学生
    "https://api.dicebear.com/7.x/notionists/svg?seed=Scholar",    // 学者
    "https://api.dicebear.com/7.x/bottts/svg?seed=RobotCN",        // 机器人
];

const PasswordSettings = ({ onUpdateSuccess }) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isUpdating, setIsUpdating] = useState(false);
    const [message, setMessage] = useState(null);

    const handleUpdatePassword = async (e) => {
        e.preventDefault();
        setMessage(null);

        if (newPassword.length < 6) {
            setMessage({ type: 'error', text: '密码长度至少需要6位' });
            return;
        }

        if (newPassword !== confirmPassword) {
            setMessage({ type: 'error', text: '两次输入的密码不一致' });
            return;
        }

        setIsUpdating(true);
        try {
            const { error } = await supabase.auth.updateUser({
                password: newPassword
            });

            if (error) throw error;

            setMessage({ type: 'success', text: '密码已成功修改！' });
            setNewPassword('');
            setConfirmPassword('');
            onUpdateSuccess?.();
        } catch (error) {
            setMessage({ type: 'error', text: error.message || '修改失败，请重试' });
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <div className="pt-6 border-t border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Lock size={20} className="text-indigo-600" />
                安全设置
            </h3>

            <form onSubmit={handleUpdatePassword} className="space-y-4 max-w-lg">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">新密码</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">确认新密码</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                </div>

                {message && (
                    <div className={`p-3 rounded-lg text-sm flex items-center gap-2 ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                        {message.type === 'success' ? <Check size={16} /> : <AlertCircle size={16} />}
                        {message.text}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isUpdating || !newPassword}
                    className="px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                >
                    {isUpdating ? '更新中...' : '修改密码'}
                </button>
            </form>
        </div>
    );
};

const ProfileSettings = () => {
    const { settings, updateProfile, user } = useUser();
    const [isEditing, setIsEditing] = useState(false); // 默认为展示模式
    const [formData, setFormData] = useState(settings.profile);
    const [isSaving, setIsSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const [saveError, setSaveError] = useState(null);

    useEffect(() => {
        setFormData(settings.profile);
    }, [settings.profile]);

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        setSaved(false);
        setSaveError(null);
    };

    const handleAvatarSelect = (url) => {
        handleChange('avatar', url);
    };

    const handleSave = async () => {
        setSaveError(null);
        setIsSaving(true);
        try {
            await updateProfile(formData);
            setSaved(true);
            setTimeout(() => {
                setSaved(false);
                setIsEditing(false); // 保存成功后切回展示模式
            }, 1000);
        } catch (error) {
            console.error('Error saving profile:', error);
            setSaveError('保存失败，请重试');
        } finally {
            setIsSaving(false);
        }
    };

    const grades = [
        '小学一年级', '小学二年级', '小学三年级', '小学四年级', '小学五年级', '小学六年级',
        '初中一年级', '初中二年级', '初中三年级',
        '高中一年级', '高中二年级', '高中三年级',
        '大学本科', '研究生', '成人/社会'
    ];

    // 展示视图组件
    const ProfileDisplay = () => (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600 relative">
                {/* 背景装饰 */}
                <div className="absolute inset-0 opacity-20 pattern-grid-lg"></div>
                <button
                    onClick={() => setIsEditing(true)}
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg backdrop-blur-sm transition-all flex items-center gap-2 text-sm font-medium"
                >
                    <Edit2 size={16} /> 编辑资料
                </button>
            </div>

            <div className="px-8 pb-8">
                <div className="relative -mt-16 mb-6 flex justify-between items-end">
                    <div className="relative">
                        <div className="w-32 h-32 rounded-full border-4 border-white shadow-md overflow-hidden bg-white">
                            <img
                                src={formData.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${user?.email}`}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                            {formData.nickname || '未设置昵称'}
                        </h2>
                        <div className="flex items-center gap-1.5 text-slate-500 mt-1 mb-2">
                            <Mail size={14} />
                            <span className="text-sm">{user?.email}</span>
                        </div>
                        <p className="text-slate-500 flex items-center gap-2 mt-1">
                            <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs font-semibold uppercase tracking-wide">
                                {formData.grade || '未设置年级'}
                            </span>
                            {formData.school && (
                                <span className="text-sm">• {formData.school}</span>
                            )}
                        </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <h4 className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                            <User size={16} /> 个人简介
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            {formData.bio || '这个人很懒，什么都没写...'}
                        </p>
                    </div>

                    {/* 可以在这里添加更多只读信息，如学习统计概览 */}
                </div>
            </div>
        </div>
    );

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-1">个人资料</h2>
                <p className="text-slate-600">管理你的个人信息与账户安全</p>
            </div>

            {/* 模式切换：展示 vs 编辑 */}
            {!isEditing ? (
                <ProfileDisplay />
            ) : (
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 space-y-8 animate-fade-in">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                        <h3 className="text-lg font-bold text-slate-800">编辑资料</h3>
                        <button
                            onClick={() => {
                                setFormData(settings.profile); // 重置修改
                                setIsEditing(false);
                            }}
                            className="text-slate-400 hover:text-slate-600"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* 头像选择区域 */}
                    <div>
                        <h3 className="font-semibold text-slate-700 mb-4 block">头像设置</h3>
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            {/* 当前预览 */}
                            <div className="relative flex-shrink-0">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-slate-200">
                                    <img
                                        src={formData.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${user?.email}`}
                                        alt="Preview"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className="mb-3 text-sm text-slate-500">
                                    选择你喜欢的头像风格：
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {PRESET_AVATARS.map((url, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleAvatarSelect(url)}
                                            className={`relative w-12 h-12 rounded-full overflow-hidden border-2 transition-all transform hover:scale-105 ${formData.avatar === url
                                                ? 'border-indigo-600 ring-2 ring-indigo-200'
                                                : 'border-slate-100 opacity-70 hover:opacity-100'
                                                }`}
                                            title="选择头像"
                                        >
                                            <img src={url} alt={`Preset ${index}`} className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 表单字段 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                昵称 <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={formData.nickname}
                                onChange={(e) => handleChange('nickname', e.target.value)}
                                className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                年级/学段
                            </label>
                            <select
                                value={formData.grade}
                                onChange={(e) => handleChange('grade', e.target.value)}
                                className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-white"
                            >
                                <option value="">请选择年级</option>
                                {grades.map(grade => (
                                    <option key={grade} value={grade}>{grade}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">学校</label>
                        <input
                            type="text"
                            value={formData.school}
                            onChange={(e) => handleChange('school', e.target.value)}
                            className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">个人简介</label>
                        <textarea
                            value={formData.bio}
                            onChange={(e) => handleChange('bio', e.target.value)}
                            rows={3}
                            maxLength={200}
                            className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                        />
                        <p className="text-right text-xs text-slate-400 mt-1">{formData.bio?.length || 0} / 200</p>
                    </div>

                    {/* 底部操作栏 */}
                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                        <button
                            onClick={() => {
                                setFormData(settings.profile);
                                setIsEditing(false);
                            }}
                            className="px-6 py-2 text-slate-600 font-medium hover:bg-slate-100 rounded-lg transition-colors"
                        >
                            取消
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={isSaving}
                            className={`px-6 py-2 font-medium rounded-lg transition-all shadow-md flex items-center gap-2 ${saved
                                ? 'bg-green-600 text-white'
                                : 'bg-indigo-600 text-white hover:bg-indigo-700'
                                }`}
                        >
                            {isSaving ? '保存中...' : saved ? '保存成功' : '保存修改'}
                        </button>
                    </div>
                </div>
            )}

            {/* 密码修改 (常驻) */}
            <PasswordSettings />
        </div>
    );
};

export default ProfileSettings;


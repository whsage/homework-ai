import { useState, useEffect } from 'react';
import { useUser } from '../../context/UserContext';
import { supabase } from '../../supabase';

const ProfileSettings = () => {
    const { settings, updateProfile, user } = useUser();
    const [formData, setFormData] = useState(settings.profile);
    const [uploading, setUploading] = useState(false);
    const [saved, setSaved] = useState(false);
    const [saveError, setSaveError] = useState(null);

    // 同步 settings.profile 到 formData
    useEffect(() => {
        setFormData(settings.profile);
    }, [settings.profile]);

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // 清除之前的保存状态
        setSaved(false);
        setSaveError(null);
    };

    const handleAvatarUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // 检查文件大小（限制为 2MB）
        if (file.size > 2 * 1024 * 1024) {
            alert('图片大小不能超过 2MB');
            return;
        }

        setUploading(true);
        setSaveError(null);

        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `${user.id}-${Date.now()}.${fileExt}`;
            const filePath = `avatars/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('user-uploads')
                .upload(filePath, file);

            if (uploadError) {
                // 如果 bucket 不存在，提示用户
                if (uploadError.message.includes('not found')) {
                    throw new Error('存储空间未配置，请联系管理员');
                }
                throw uploadError;
            }

            const { data } = supabase.storage
                .from('user-uploads')
                .getPublicUrl(filePath);

            handleChange('avatar', data.publicUrl);

            // 自动保存头像
            await updateProfile({ ...formData, avatar: data.publicUrl });
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        } catch (error) {
            console.error('Error uploading avatar:', error);
            setSaveError(error.message || '头像上传失败，请重试');
        } finally {
            setUploading(false);
        }
    };

    const handleSave = async () => {
        setSaveError(null);
        try {
            await updateProfile(formData);
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        } catch (error) {
            console.error('Error saving profile:', error);
            setSaveError('保存失败，请重试');
        }
    };

    const grades = [
        '小学一年级', '小学二年级', '小学三年级', '小学四年级', '小学五年级', '小学六年级',
        '初中一年级', '初中二年级', '初中三年级',
        '高中一年级', '高中二年级', '高中三年级',
        '大学本科', '研究生', '其他'
    ];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-1">个人资料</h2>
                <p className="text-slate-600">管理你的个人信息和公开资料</p>
            </div>

            {/* 头像上传 */}
            <div className="flex items-center gap-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <div className="relative group">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                        {formData.avatar ? (
                            <img src={formData.avatar} alt="Avatar" className="w-full h-full object-cover" />
                        ) : (
                            <span>{formData.nickname?.[0] || user?.email?.[0]?.toUpperCase() || '?'}</span>
                        )}
                    </div>
                    <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                        <span className="text-white text-sm font-medium">更换</span>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarUpload}
                            className="hidden"
                            disabled={uploading}
                        />
                    </label>
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold text-slate-800 mb-1">个人头像</h3>
                    <p className="text-sm text-slate-600 mb-2">点击头像可以更换，支持 JPG、PNG 格式（最大 2MB）</p>
                    {uploading && <p className="text-sm text-blue-600">上传中...</p>}
                    {saveError && saveError.includes('头像') && (
                        <p className="text-sm text-red-600 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            {saveError}
                        </p>
                    )}
                </div>
            </div>

            {/* 基本信息 */}
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        昵称 <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={formData.nickname}
                        onChange={(e) => handleChange('nickname', e.target.value)}
                        placeholder="请输入你的昵称"
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        年级/学段
                    </label>
                    <select
                        value={formData.grade}
                        onChange={(e) => handleChange('grade', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                    >
                        <option value="">请选择年级</option>
                        {grades.map(grade => (
                            <option key={grade} value={grade}>{grade}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        学校（可选）
                    </label>
                    <input
                        type="text"
                        value={formData.school}
                        onChange={(e) => handleChange('school', e.target.value)}
                        placeholder="请输入你的学校名称"
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        个人简介
                    </label>
                    <textarea
                        value={formData.bio}
                        onChange={(e) => handleChange('bio', e.target.value)}
                        placeholder="介绍一下自己吧..."
                        rows={4}
                        maxLength={200}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    />
                    <p className="text-sm text-slate-500 mt-1">{formData.bio.length} / 200</p>
                </div>
            </div>

            {/* 保存按钮和状态提示 */}
            <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center gap-3">
                    <button
                        onClick={handleSave}
                        disabled={uploading}
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        保存更改
                    </button>

                    {saved && (
                        <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg animate-fade-in">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium">保存成功！</span>
                        </div>
                    )}

                    {saveError && !saveError.includes('头像') && (
                        <div className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg animate-fade-in">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium">{saveError}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;

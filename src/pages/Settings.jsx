import { useUser } from '../context/UserContext';
import ProfileSettings from '../components/settings/ProfileSettings';

const Settings = () => {
    const { loading } = useUser();

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-slate-600">加载设置中...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 p-6">
            <div className="max-w-4xl mx-auto">
                {/* 页面标题 */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">⚙️ 个人设置</h1>
                    <p className="text-slate-600 dark:text-slate-400">管理你的个人信息</p>
                </div>

                {/* 设置内容 */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
                    <ProfileSettings />
                </div>
            </div>
        </div>
    );
};

export default Settings;

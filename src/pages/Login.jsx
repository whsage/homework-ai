import { useState } from 'react';
import { supabase } from '../supabase';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Login = () => {
    const { t } = useLanguage();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            // Check if login was successful
            if (data.user) {
                navigate('/');
            }
            setLoading(false);
        }
    };

    const handleForgotPassword = async () => {
        if (!email) {
            setError(t('auth.resetPasswordSubtitle'));
            return;
        }

        try {
            setLoading(true);
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/reset-password`,
            });

            if (error) throw error;

            alert('重置密码邮件已发送，请检查您的邮箱（包括垃圾邮件）。\n点击邮件链接后即可设置新密码。');
        } catch (error) {
            setError(error.message || '发送重置邮件失败');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 transition-colors duration-200">
            <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-8">
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-[20px] bg-gradient-to-br from-[#E0F2FE] to-[#eff6ff] dark:from-slate-700 dark:to-slate-600 flex items-center justify-center p-3.5 shadow-lg shadow-indigo-100 dark:shadow-none border border-slate-50 dark:border-slate-600">
                        <img src="/logo.png" alt="Logo" className="w-full h-full object-contain drop-shadow-sm" />
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center">{t('auth.loginTitle')}</h2>

                {error && (
                    <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t('auth.emailLabel')}</label>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t('auth.passwordLabel')}</label>
                        <input
                            type="password"
                            required
                            className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                        />
                        <div className="flex justify-end mt-1">
                            <button
                                type="button"
                                onClick={handleForgotPassword}
                                className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 hover:underline"
                            >
                                {t('auth.forgotPassword')}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium shadow-sm shadow-indigo-200 dark:shadow-none transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? t('common.loading') : t('auth.loginButton')}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
                    {t('auth.registerLink')}
                    <Link to="/register" className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 ml-1">
                        {t('nav.register')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;

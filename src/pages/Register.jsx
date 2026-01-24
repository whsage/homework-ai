import { useState } from 'react';
import { supabase } from '../supabase';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMsg, setSuccessMsg] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccessMsg('');

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            console.log("Sign up result:", data);
            if (data.user) {
                // Check if email confirmation is required (Supabase default)
                // But for better UX, assume success or auto-login
                setSuccessMsg('注册成功！如需邮箱验证，请检查您的邮箱，否则请直接登录。');
                // Optional: navigate to login after short delay
                setTimeout(() => navigate('/login'), 2000);
            }
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 transition-colors duration-200">
            <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-8">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center">创建账号</h2>

                {error && (
                    <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                        {error}
                    </div>
                )}

                {successMsg && (
                    <div className="mb-4 p-3 bg-emerald-50 text-emerald-600 text-sm rounded-lg border border-emerald-100">
                        {successMsg}
                    </div>
                )}

                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">邮箱</label>
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
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">密码</label>
                        <input
                            type="password"
                            required
                            className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="请创建一个强密码"
                            minLength={6}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-medium shadow-sm shadow-emerald-200 dark:shadow-none transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? '注册中...' : '注册'}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
                    已有账号？{' '}
                    <Link to="/login" className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300">
                        立即登录
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;

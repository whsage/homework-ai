import { Bell, User, Menu, LogIn, ChevronLeft, LogOut, Settings, UserCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase';

const Header = ({ onMenuClick }) => {
    const [user, setUser] = useState(null);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isDashboard = location.pathname === '/';
    const menuRef = useRef(null);

    useEffect(() => {
        // Get initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
        });

        // Listen for changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowUserMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setShowUserMenu(false);
        navigate('/login');
    };

    return (
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-10 w-full">
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-lg md:hidden"
                >
                    <Menu size={24} />
                </button>
                <div className="flex items-center gap-3">
                    {!isDashboard && (
                        <Link to="/" className="p-1.5 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors" title="返回主页">
                            <ChevronLeft size={20} />
                        </Link>
                    )}
                    <h2 className="text-xl font-semibold text-slate-800">
                        {location.pathname === '/' && '主页'}
                        {location.pathname === '/history' && '我的作业'}
                        {location.pathname === '/statistics' && '学习统计'}
                        {location.pathname === '/settings' && '个人设置'}
                        {location.pathname.startsWith('/homework/') && '作业详情'}
                        {location.pathname === '/new' && '新建作业'}
                    </h2>
                </div>
            </div>

            <div className="flex items-center gap-4">
                {user ? (
                    <>
                        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>

                        <div className="relative" ref={menuRef}>
                            <button
                                onClick={() => setShowUserMenu(!showUserMenu)}
                                className="flex items-center gap-3 pl-4 border-l border-slate-200 hover:bg-slate-50 rounded-lg transition-colors p-2 -mr-2"
                            >
                                <div className="text-right hidden sm:block">
                                    <p className="text-sm font-medium text-slate-700 truncate max-w-[150px]">{user.email}</p>
                                    <p className="text-xs text-slate-500">免费计划</p>
                                </div>
                                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold border-2 border-indigo-50">
                                    <User size={20} />
                                </div>
                            </button>

                            {/* Dropdown Menu */}
                            {showUserMenu && (
                                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50">
                                    {/* User Info */}
                                    <div className="px-4 py-3 border-b border-slate-100">
                                        <p className="text-sm font-medium text-slate-900">{user.email}</p>
                                        <p className="text-xs text-slate-500 mt-1">免费计划</p>
                                    </div>

                                    {/* Menu Items */}
                                    <div className="py-2">
                                        <Link
                                            to="/settings"
                                            onClick={() => setShowUserMenu(false)}
                                            className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                                        >
                                            <UserCircle size={18} className="text-slate-400" />
                                            个人资料
                                        </Link>
                                        <Link
                                            to="/settings"
                                            onClick={() => setShowUserMenu(false)}
                                            className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                                        >
                                            <Settings size={18} className="text-slate-400" />
                                            设置
                                        </Link>
                                    </div>

                                    {/* Logout */}
                                    <div className="border-t border-slate-100 pt-2">
                                        <button
                                            onClick={handleLogout}
                                            className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors w-full"
                                        >
                                            <LogOut size={18} />
                                            退出登录
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="flex items-center gap-2">
                        <Link to="/login" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors">
                            登录
                        </Link>
                        <Link to="/register" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors flex items-center gap-2">
                            <LogIn size={16} />
                            注册
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

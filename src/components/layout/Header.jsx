import { Bell, User, Menu, LogIn, ChevronLeft, LogOut, Settings, UserCircle, Moon, Sun, Languages } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase';
import { useUser } from '../../context/UserContext';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import NotificationDropdown from './NotificationDropdown';
import { calculateLevel } from '../../utils/levelSystem';
import { getAchievementTitle, getSubjectTitle, getFavoriteSubject } from '../../utils/honorSystem';

const Header = ({ onMenuClick }) => {
    const { user, settings } = useUser();
    const { theme, toggleTheme } = useTheme();
    const { t, language, toggleLanguage } = useLanguage();
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [userLevel, setUserLevel] = useState(1);
    const [totalSessions, setTotalSessions] = useState(0);
    const [achievementTitle, setAchievementTitle] = useState({ emoji: '🌱', title: '学习萌新' });
    const [subjectTitle, setSubjectTitle] = useState({ emoji: '📚', title: '全科小学霸' });
    const [unreadCount, setUnreadCount] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();
    const isDashboard = location.pathname === '/';
    const menuRef = useRef(null);
    const notificationRef = useRef(null);

    // Fetch user stats, level, honor titles AND notifications
    useEffect(() => {
        const fetchUserStats = async () => {
            if (!user) return;

            // 1. Get Unread Notification Count
            const { count } = await supabase
                .from('user_notifications')
                .select('*', { count: 'exact', head: true })
                .eq('user_id', user.id)
                .eq('read', false);

            setUnreadCount(count || 0);

            // 2. Get total sessions from user_stats
            const { data: userStats } = await supabase
                .from('user_stats')
                .select('total_sessions_created')
                .eq('user_id', user.id)
                .single();

            const total = userStats?.total_sessions_created || 0;
            setTotalSessions(total);
            setUserLevel(calculateLevel(total));

            // Set achievement title based on total sessions
            const achievement = getAchievementTitle(total, language);
            setAchievementTitle(achievement);

            // Get all sessions to determine favorite subject
            const { data: sessions } = await supabase
                .from('sessions')
                .select('subject')
                .eq('user_id', user.id);

            const favoriteSubject = getFavoriteSubject(sessions || []);
            const userGrade = settings?.profile?.grade || '';
            const subject = getSubjectTitle(favoriteSubject, userGrade, language);
            setSubjectTitle(subject);
        };

        fetchUserStats();

        // Subscribe to notifications for red dot
        if (!user) return;
        const channel = supabase
            .channel('header_notifications')
            .on('postgres_changes', {
                event: 'INSERT',
                schema: 'public',
                table: 'user_notifications',
                filter: `user_id=eq.${user.id}`
            }, () => {
                setUnreadCount(prev => prev + 1);
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [user, language, settings?.profile?.grade]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowUserMenu(false);
            }
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setShowNotifications(false); // Close if clicking outside container
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

    // Callback when notifications are read in dropdown
    const handleNotificationsRead = (count = 0) => {
        setUnreadCount(count);
    };

    const displayName = settings?.profile?.nickname || user?.email?.split('@')[0] || '同学';
    const displayEmail = user?.email || '';
    const avatarUrl = settings?.profile?.avatar;

    // Component for the Avatar Badge
    const AvatarWithBadge = ({ size = "normal" }) => {
        const sizeClasses = size === "large" ? "w-16 h-16" : "w-10 h-10";
        return (
            <div className="relative inline-block">
                <div className={`${sizeClasses} rounded-full overflow-hidden border-2 border-indigo-50 dark:border-indigo-900 bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300`}>
                    {avatarUrl ? (
                        <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                        <User size={size === "large" ? 32 : 20} />
                    )}
                </div>
                {/* Honour Badge at bottom center */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm border border-white dark:border-slate-800 flex items-center gap-0.5 whitespace-nowrap">
                        <span>Lv.{userLevel}</span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <header className="h-16 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-6 sticky top-0 z-10 w-full transition-colors duration-200">
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="p-2 -ml-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg md:hidden"
                >
                    <Menu size={24} />
                </button>
                <div className="flex items-center gap-3">
                    {!isDashboard && (
                        <Link to="/" className="p-1.5 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors" title={t('nav.backHome')}>
                            <ChevronLeft size={20} />
                        </Link>
                    )}
                    <h2 className="text-xl font-semibold text-slate-800 dark:text-white">
                        {location.pathname === '/' && t('nav.home')}
                        {location.pathname === '/history' && t('nav.homework')}
                        {location.pathname === '/statistics' && t('nav.statistics')}
                        {location.pathname === '/settings' && t('nav.settings')}
                        {location.pathname === '/faq' && t('nav.faq')}
                        {location.pathname.startsWith('/homework/') && t('nav.detail')}
                        {location.pathname === '/new' && t('nav.new')}
                    </h2>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button
                    onClick={toggleLanguage}
                    className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center gap-1"
                    title={language === 'zh' ? 'Switch to English' : '切换到中文'}
                >
                    <Languages size={20} />
                    <span className="text-sm font-medium hidden md:inline">{language === 'zh' ? 'EN' : '中'}</span>
                </button>

                {user ? (
                    <>
                        {/* Notification Bell */}
                        <div className="relative" ref={notificationRef}>
                            <button
                                onClick={() => setShowNotifications(!showNotifications)}
                                className={`p-2 rounded-full transition-colors relative ${showNotifications ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
                            >
                                <Bell size={20} />
                                {unreadCount > 0 && (
                                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-800"></span>
                                )}
                            </button>
                            {showNotifications && (
                                <NotificationDropdown
                                    onClose={() => setShowNotifications(false)}
                                    onUpdateUnread={handleNotificationsRead}
                                />
                            )}
                        </div>

                        <div className="relative" ref={menuRef}>
                            <button
                                onClick={() => setShowUserMenu(!showUserMenu)}
                                className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-lg transition-colors p-2 -mr-2"
                            >
                                <div className="text-right hidden sm:block">
                                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200 truncate max-w-[150px]">
                                        {displayName}
                                    </p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">{t('header.freePlan')}</p>
                                </div>
                                <AvatarWithBadge />
                            </button>

                            {/* Dropdown Menu */}
                            {showUserMenu && (
                                <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 py-2 z-50">
                                    {/* User Info Large */}
                                    <div className="px-4 py-4 border-b border-slate-100 dark:border-slate-700 flex flex-col items-center">
                                        <AvatarWithBadge size="large" />
                                        <p className="text-lg font-semibold text-slate-900 dark:text-white mt-3 truncate w-full text-center">{displayName}</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate w-full text-center">{displayEmail}</p>
                                        <div className="mt-3 flex gap-2 w-full justify-center">
                                            <span className="text-xs px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-md font-medium">{achievementTitle.emoji} {achievementTitle.title}</span>
                                            <span className="text-xs px-2 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-md font-medium">{subjectTitle.emoji} {subjectTitle.title}</span>
                                        </div>
                                    </div>

                                    {/* Menu Items */}
                                    <div className="py-2">
                                        <button
                                            onClick={toggleTheme}
                                            className="flex items-center justify-between w-full px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                {theme === 'dark' ? <Moon size={18} className="text-slate-400" /> : <Sun size={18} className="text-slate-400" />}
                                                <span>{t('header.darkMode')}</span>
                                            </div>
                                            <div className={`w-9 h-5 rounded-full relative transition-colors ${theme === 'dark' ? 'bg-indigo-500' : 'bg-slate-200'}`}>
                                                <div className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-transform ${theme === 'dark' ? 'left-5' : 'left-1'}`} />
                                            </div>
                                        </button>

                                        <Link
                                            to="/settings"
                                            onClick={() => setShowUserMenu(false)}
                                            className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                                        >
                                            <UserCircle size={18} className="text-slate-400" />
                                            {t('nav.profile')}
                                        </Link>
                                        <Link
                                            to="/settings"
                                            onClick={() => setShowUserMenu(false)}
                                            className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                                        >
                                            <Settings size={18} className="text-slate-400" />
                                            {t('nav.settings')}
                                        </Link>
                                    </div>

                                    {/* Logout */}
                                    <div className="border-t border-slate-100 dark:border-slate-700 pt-2">
                                        <button
                                            onClick={handleLogout}
                                            className="flex items-center gap-3 px-4 py-3 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors w-full"
                                        >
                                            <LogOut size={18} />
                                            {t('nav.logout')}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="flex items-center gap-2">
                        <Link to="/login" className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            {t('nav.login')}
                        </Link>
                        <Link to="/register" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors flex items-center gap-2">
                            <LogIn size={16} />
                            {t('nav.register')}
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

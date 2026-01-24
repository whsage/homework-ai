import { Bell, BookOpen, Clock, Trophy, Flame, TrendingUp, Check, Sun, Gift } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../supabase';
import { useLanguage } from '../../context/LanguageContext';

// 图标映射
const ICON_MAP = {
    'Trophy': Trophy,
    'Flame': Flame,
    'BookOpen': BookOpen,
    'Clock': Clock,
    'TrendingUp': TrendingUp,
    'Sun': Sun,
    'Gift': Gift
};

const NotificationDropdown = ({ onClose }) => {
    const dropdownRef = useRef(null);
    const { t } = useLanguage();
    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // 获取通知
    useEffect(() => {
        const fetchNotifications = async () => {
            setIsLoading(true);
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                setIsLoading(false);
                return;
            }

            const { data, error } = await supabase
                .from('user_notifications')
                .select('*')
                .eq('user_id', user.id)
                .order('created_at', { ascending: false })
                .limit(10);

            if (!error) {
                setNotifications(data || []);
                setUnreadCount((data || []).filter(n => !n.read).length);
            }
            setIsLoading(false);
        };

        fetchNotifications();

        // 实时监听新通知
        // 注意：这里需要再次获取用户ID来建立订阅
        const setupSubscription = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;

            const channel = supabase
                .channel('notifications')
                .on('postgres_changes', {
                    event: 'INSERT',
                    schema: 'public',
                    table: 'user_notifications',
                    filter: `user_id=eq.${user.id}`
                }, (payload) => {
                    setNotifications(prev => [payload.new, ...prev].slice(0, 10));
                    setUnreadCount(prev => prev + 1);
                })
                .subscribe();

            return () => {
                supabase.removeChannel(channel);
            };
        };

        const cleanup = setupSubscription();
        return () => {
            cleanup.then(unsub => unsub && unsub());
        };
    }, []);

    // 点击外部关闭
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    // 标记所有为已读
    const markAllAsRead = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const unreadIds = notifications.filter(n => !n.read).map(n => n.id);
        if (unreadIds.length === 0) return;

        await supabase
            .from('user_notifications')
            .update({ read: true })
            .in('id', unreadIds);

        setNotifications(prev => prev.map(n => ({ ...n, read: true })));
        setUnreadCount(0);
    };

    // 标记单个为已读
    const markAsRead = async (notificationId) => {
        await supabase
            .from('user_notifications')
            .update({ read: true })
            .eq('id', notificationId);

        setNotifications(prev => prev.map(n =>
            n.id === notificationId ? { ...n, read: true } : n
        ));
        setUnreadCount(prev => Math.max(0, prev - 1));
    };

    // 格式化时间
    const formatTime = (dateString) => {
        const now = new Date();
        const date = new Date(dateString);
        const seconds = Math.floor((now - date) / 1000);

        if (seconds < 60) return t('notifications.justNow');
        if (seconds < 3600) return t('notifications.minsAgo', { count: Math.floor(seconds / 60) });
        if (seconds < 86400) return t('notifications.hoursAgo', { count: Math.floor(seconds / 3600) });
        if (seconds < 604800) return t('notifications.daysAgo', { count: Math.floor(seconds / 86400) });
        return date.toLocaleDateString(t('language') === 'en' ? 'en-US' : 'zh-CN');
    };

    return (
        <div ref={dropdownRef} className="absolute right-0 mt-3 w-80 md:w-96 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 z-50 overflow-hidden ring-1 ring-black ring-opacity-5">
            <div className="p-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                    <Bell size={18} className="text-indigo-600 dark:text-indigo-400" />
                    {t('notifications.title')}
                </h3>
                {unreadCount > 0 && (
                    <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded-full">
                        {t('notifications.unread', { count: unreadCount })}
                    </span>
                )}
            </div>

            <div className="max-h-[400px] overflow-y-auto">
                {isLoading ? (
                    // 加载骨架屏
                    [1, 2, 3].map((i) => (
                        <div key={i} className="p-4 border-b border-slate-50 dark:border-slate-700 animate-pulse">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                                <div className="flex-1 space-y-2">
                                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
                                    <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
                                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-1/4"></div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : !notifications || notifications.length === 0 ? (
                    // 空状态
                    <div className="p-8 text-center text-slate-500 dark:text-slate-400">
                        <Bell size={48} className="mx-auto mb-3 opacity-30" />
                        <p className="text-sm">{t('notifications.empty')}</p>
                        <p className="text-xs mt-1">{t('notifications.emptyTip')}</p>
                    </div>
                ) : (
                    // 通知列表
                    notifications.map((item) => {
                        const IconComponent = ICON_MAP[item.icon] || BookOpen;
                        return (
                            <div
                                key={item.id}
                                className={`p-4 border-b border-slate-50 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors relative group ${!item.read ? 'bg-indigo-50/30 dark:bg-indigo-900/10' : ''}`}
                            >
                                {!item.read && (
                                    <span className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full"></span>
                                )}
                                <Link
                                    to={item.link || '/'}
                                    onClick={() => {
                                        if (!item.read) markAsRead(item.id);
                                        onClose();
                                    }}
                                    className="flex gap-4"
                                >
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.color} dark:bg-opacity-20`}>
                                        <IconComponent size={20} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className={`text-sm font-medium mb-1 truncate pr-4 ${!item.read ? 'text-slate-900 dark:text-slate-100' : 'text-slate-600 dark:text-slate-400'}`}>
                                            {t(item.title, item.metadata || {})}
                                        </h4>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                                            {t(item.message, item.metadata || {})}
                                        </p>
                                        <p className="text-[10px] text-slate-400 mt-2 flex items-center gap-1">
                                            {formatTime(item.created_at)}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        );
                    })
                )}
            </div>

            {notifications.length > 0 && unreadCount > 0 && (
                <div className="p-3 bg-slate-50 dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 text-center">
                    <button
                        onClick={markAllAsRead}
                        className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center justify-center gap-1 w-full"
                    >
                        <Check size={14} />
                        {t('notifications.markAllRead')}
                    </button>
                </div>
            )}
        </div>
    );
};

export default NotificationDropdown;

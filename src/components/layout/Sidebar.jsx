import { LayoutDashboard, BookOpen, Settings, MessageSquare, BarChart3, Download, GraduationCap, Sparkles, Map } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import clsx from 'clsx';
import { supabase } from '../../supabase';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Sidebar = ({ isOpen, onClose }) => {
    const { t, language } = useLanguage();
    const [recentSessions, setRecentSessions] = useState([]);
    const [isLoadingSessions, setIsLoadingSessions] = useState(true);
    const [totalSessions, setTotalSessions] = useState(0);
    const MAX_SESSIONS = 50;

    useEffect(() => {
        const fetchSessions = async () => {
            setIsLoadingSessions(true);
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const { count } = await supabase
                    .from('sessions')
                    .select('*', { count: 'exact', head: true })
                    .eq('user_id', user.id);

                setTotalSessions(count || 0);

                const { data } = await supabase
                    .from('sessions')
                    .select('*')
                    .eq('user_id', user.id)
                    .order('created_at', { ascending: false })
                    .limit(5);

                if (data) setRecentSessions(data);
            }
            setIsLoadingSessions(false);
        };

        fetchSessions();

        const channel = supabase
            .channel('public:sessions')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'sessions' }, (payload) => {
                setRecentSessions(prev => [payload.new, ...prev].slice(0, 5));
                setTotalSessions(prev => prev + 1);
            })
            .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'sessions' }, async () => {
                const { data: { user } } = await supabase.auth.getUser();
                if (user) {
                    const { count } = await supabase
                        .from('sessions')
                        .select('*', { count: 'exact', head: true })
                        .eq('user_id', user.id);
                    setTotalSessions(count || 0);

                    const { data } = await supabase
                        .from('sessions')
                        .select('*')
                        .eq('user_id', user.id)
                        .order('created_at', { ascending: false })
                        .limit(5);
                    if (data) setRecentSessions(data);
                }
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    const navItems = [
        { icon: LayoutDashboard, label: t('nav.home'), path: '/' },
        { icon: GraduationCap, label: language === 'zh' ? '知识点学习' : 'Subjects', path: '/subjects' },
        { icon: Map, label: language === 'zh' ? '知识点地图' : 'Knowledge Map', path: '/knowledge-map' },
        { icon: BookOpen, label: t('nav.homework'), path: '/history' },
        { icon: BarChart3, label: t('nav.statistics'), path: '/statistics' },
        { icon: Settings, label: t('nav.settings'), path: '/settings' },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden transition-opacity"
                    onClick={onClose}
                />
            )}

            <aside className={clsx(
                "fixed inset-y-0 left-0 z-50 w-64 flex flex-col h-screen transition-transform duration-300 ease-in-out md:static md:translate-x-0",
                "bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl border-r border-white/20 dark:border-slate-800",
                isOpen ? "translate-x-0 shadow-2xl shadow-indigo-500/10" : "-translate-x-full"
            )}>
                <div className="p-6 flex items-center justify-between border-b border-white/40 dark:border-slate-800/50 mb-2">
                    <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
                        <div className="w-11 h-11 rounded-[14px] flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 transform hover:scale-105 transition-transform duration-300">
                            <Sparkles size={22} className="text-white" />
                        </div>
                        <div className="flex flex-col translate-y-[2px]">
                            <span className="text-[18px] font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 leading-none">
                                {t('appName').split('-')[0] || t('appName')}
                            </span>
                            {t('appName').split('-')[1] && (
                                <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500 tracking-wide line-clamp-1 -mt-0.5">
                                    {t('appName').split('-')[1]}
                                </span>
                            )}
                        </div>
                    </h1>
                </div>

                <nav className="flex-1 px-4 py-2 space-y-2 overflow-y-auto hide-scrollbar">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={onClose}
                            className={({ isActive }) =>
                                clsx(
                                    "flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 font-medium",
                                    isActive
                                        ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25 scale-[1.02]"
                                        : "hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:pl-5"
                                )
                            }
                        >
                            <item.icon size={20} strokeWidth={2.5} />
                            <span>{item.label}</span>
                        </NavLink>
                    ))}

                    {/* Recent Activity Section */}
                    {(isLoadingSessions || recentSessions.length > 0) && (
                        <div className="mt-8 px-2 border-t border-slate-200/50 dark:border-slate-800/50 pt-6 mx-2">
                            <h3 className="px-2 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
                                {t('sidebar.recent')}
                            </h3>
                            <div className="space-y-1">
                                {isLoadingSessions ? (
                                    [1, 2, 3].map((i) => (
                                        <div key={i} className="flex items-center gap-3 px-4 py-2 animate-pulse">
                                            <div className="w-4 h-4 bg-slate-200 dark:bg-slate-700 rounded-full shrink-0"></div>
                                            <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded flex-1"></div>
                                        </div>
                                    ))
                                ) : (
                                    recentSessions.map((session) => (
                                        <Link
                                            key={session.id}
                                            to={`/homework/${session.id}`}
                                            onClick={onClose}
                                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 rounded-xl transition-all group"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-indigo-400 transition-colors"></div>
                                            <span className="truncate">{session.title || t('sidebar.untitled')}</span>
                                        </Link>
                                    ))
                                )}
                            </div>
                        </div>
                    )}
                </nav>

                {/* Bottom Section */}
                <div className="p-4 space-y-4">
                    {/* App Download Link */}
                    <a
                        href="/download/app-release.apk"
                        download="AI奇妙-Android.apk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all group relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
                            <Download size={18} strokeWidth={2.5} />
                        </div>
                        <div className="flex-1 min-w-0 z-10">
                            <p className="font-bold text-sm">{t('sidebar.downloadApp')}</p>
                            <p className="text-[10px] text-blue-100 opacity-90 truncate">{t('sidebar.androidClient')}</p>
                        </div>
                    </a>

                    {/* Usage Stats */}
                    <div className={`rounded-2xl p-4 border ${totalSessions > MAX_SESSIONS - 3
                        ? 'bg-red-50/50 border-red-100 dark:bg-red-900/10 dark:border-red-900/30'
                        : 'bg-white/50 border-slate-100 dark:bg-slate-800/30 dark:border-slate-800'}`}>
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{t('sidebar.usage')}</p>
                            <p className={`text-xs font-bold ${totalSessions > MAX_SESSIONS - 3 ? 'text-red-500' : 'text-indigo-500'}`}>
                                {totalSessions} / {MAX_SESSIONS}
                            </p>
                        </div>
                        <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all duration-500 ease-out ${totalSessions > MAX_SESSIONS - 3
                                        ? 'bg-gradient-to-r from-red-400 to-red-600'
                                        : 'bg-gradient-to-r from-indigo-400 to-pink-400'
                                    }`}
                                style={{ width: `${Math.min((totalSessions / MAX_SESSIONS) * 100, 100)}%` }}
                            />
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;

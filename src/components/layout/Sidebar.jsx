import { LayoutDashboard, BookOpen, Settings, MessageSquare, BarChart3 } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import clsx from 'clsx';
import { supabase } from '../../supabase';
import { useEffect, useState } from 'react';

const Sidebar = ({ isOpen, onClose }) => {
    const [recentSessions, setRecentSessions] = useState([]);
    const [isLoadingSessions, setIsLoadingSessions] = useState(true);
    const [totalSessions, setTotalSessions] = useState(0);
    const MAX_SESSIONS = 20;

    useEffect(() => {
        const fetchSessions = async () => {
            setIsLoadingSessions(true);
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                // Fetch total count
                const { count } = await supabase
                    .from('sessions')
                    .select('*', { count: 'exact', head: true })
                    .eq('user_id', user.id);

                setTotalSessions(count || 0);

                // Fetch recent sessions
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

        // Listen for new sessions
        const channel = supabase
            .channel('public:sessions')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'sessions' }, (payload) => {
                setRecentSessions(prev => [payload.new, ...prev].slice(0, 5));
                setTotalSessions(prev => prev + 1);
            })
            .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'sessions' }, async () => {
                // Re-fetch total count to ensure accuracy
                const { data: { user } } = await supabase.auth.getUser();
                if (user) {
                    const { count } = await supabase
                        .from('sessions')
                        .select('*', { count: 'exact', head: true })
                        .eq('user_id', user.id);
                    setTotalSessions(count || 0);

                    // Also refresh recent sessions
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
        { icon: LayoutDashboard, label: '主页', path: '/' },
        { icon: BookOpen, label: '我的作业', path: '/history' },
        { icon: BarChart3, label: '学习统计', path: '/statistics' },
        { icon: Settings, label: '设置', path: '/settings' },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
                    onClick={onClose}
                />
            )}

            <aside className={clsx(
                "fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 flex flex-col h-screen border-r border-slate-800 transition-transform duration-300 ease-in-out md:static md:translate-x-0",
                isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
            )}>
                <div className="p-6 border-b border-slate-800 flex items-center justify-between">
                    <h1 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">H</span>
                        HomeworkAI
                    </h1>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={onClose}
                            className={({ isActive }) =>
                                clsx(
                                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                                    isActive
                                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/20"
                                        : "hover:bg-slate-800 hover:text-white"
                                )
                            }
                        >
                            <item.icon size={20} />
                            <span className="font-medium">{item.label}</span>
                        </NavLink>
                    ))}

                    {/* Recent Activity Section */}
                    {(isLoadingSessions || recentSessions.length > 0) && (
                        <div className="mt-8">
                            <h3 className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                最近活动
                            </h3>
                            <div className="space-y-1">
                                {isLoadingSessions ? (
                                    // Loading skeleton
                                    [1, 2, 3].map((i) => (
                                        <div key={i} className="flex items-center gap-3 px-4 py-2 animate-pulse">
                                            <div className="w-4 h-4 bg-slate-700 rounded shrink-0"></div>
                                            <div className="h-3 bg-slate-700 rounded flex-1"></div>
                                        </div>
                                    ))
                                ) : (
                                    recentSessions.map((session) => (
                                        <Link
                                            key={session.id}
                                            to={`/homework/${session.id}`}
                                            onClick={onClose}
                                            className="flex items-center gap-3 px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors group"
                                        >
                                            <MessageSquare size={16} className="shrink-0 group-hover:text-indigo-400" />
                                            <span className="truncate">{session.title || '未命名会话'}</span>
                                        </Link>
                                    ))
                                )}
                            </div>
                        </div>
                    )}
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <div className={`rounded-lg p-4 ${totalSessions > MAX_SESSIONS - 3 ? 'bg-red-900/30' : 'bg-slate-800/50'}`}>
                        <p className="text-xs text-slate-400 mb-2">作业用量</p>
                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all ${totalSessions > MAX_SESSIONS - 3 ? 'bg-red-500' : 'bg-indigo-500'}`}
                                style={{ width: `${Math.min((totalSessions / MAX_SESSIONS) * 100, 100)}%` }}
                            />
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <p className={`text-xs font-medium ${totalSessions > MAX_SESSIONS - 3 ? 'text-red-400' : 'text-indigo-400'}`}>
                                {totalSessions} / {MAX_SESSIONS}
                            </p>
                            {totalSessions > MAX_SESSIONS - 3 && (
                                <p className="text-xs text-red-400 font-medium">
                                    ⚠️ 即将满额
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;

import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { useState, useEffect } from 'react';
import { supabase } from '../../supabase';

const MainLayout = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // 检查欢迎回来和周年纪念通知
    useEffect(() => {
        const checkRecurringNotifications = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;

            const now = new Date();

            try {
                // 1. 检查“欢迎回来” (超过3天未活跃)
                const { data: sessions } = await supabase
                    .from('sessions')
                    .select('created_at')
                    .eq('user_id', user.id)
                    .order('created_at', { ascending: false })
                    .limit(1);

                if (sessions && sessions.length > 0) {
                    const lastActive = new Date(sessions[0].created_at);
                    const daysSinceActive = (now - lastActive) / (1000 * 60 * 60 * 24);

                    if (daysSinceActive > 3) {
                        // 检查最近24小时是否已发过
                        const { count } = await supabase
                            .from('user_notifications')
                            .select('*', { count: 'exact', head: true })
                            .eq('user_id', user.id)
                            .eq('type', 'welcome')
                            .gte('created_at', new Date(now - 24 * 60 * 60 * 1000).toISOString());

                        if (count === 0) {
                            await supabase.from('user_notifications').insert({
                                user_id: user.id,
                                type: 'welcome',
                                title: 'notifications.welcome.title',
                                message: 'notifications.welcome.msg',
                                icon: 'Sun',
                                color: 'text-pink-500 bg-pink-50',
                                link: '/',
                                metadata: { days: Math.floor(daysSinceActive) }
                            });
                        }
                    }
                }

                // 2. 检查“注册周年”
                if (user.created_at) {
                    const createdAt = new Date(user.created_at);
                    // 检查是否是同一天（忽略年份）
                    if (now.getMonth() === createdAt.getMonth() && now.getDate() === createdAt.getDate() && now.getFullYear() > createdAt.getFullYear()) {
                        const years = now.getFullYear() - createdAt.getFullYear();

                        // 检查今天是否已发过
                        const todayStart = new Date();
                        todayStart.setHours(0, 0, 0, 0);

                        const { count } = await supabase
                            .from('user_notifications')
                            .select('*', { count: 'exact', head: true })
                            .eq('user_id', user.id)
                            .eq('type', 'anniversary')
                            .gte('created_at', todayStart.toISOString());

                        if (count === 0) {
                            await supabase.from('user_notifications').insert({
                                user_id: user.id,
                                type: 'anniversary',
                                title: 'notifications.welcome.anniversary.title',
                                message: 'notifications.welcome.anniversary.msg',
                                icon: 'Gift',
                                color: 'text-purple-500 bg-purple-50',
                                link: '/settings',
                                metadata: { year: years }
                            });
                        }
                    }
                }

            } catch (err) {
                console.error("Check notifications failed:", err);
            }
        };

        checkRecurringNotifications();
    }, []);

    return (
        <div className="flex h-screen bg-slate-50 dark:bg-slate-900 overflow-hidden font-sans transition-colors duration-200">
            <Sidebar
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />

            <div className="flex-1 flex flex-col h-full overflow-hidden">
                <Header onMenuClick={() => setIsMobileMenuOpen(true)} />

                <main className="flex-1 overflow-y-auto p-6 scroll-smooth">
                    <div className="max-w-7xl mx-auto w-full">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;

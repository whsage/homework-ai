import { Bell, BookOpen, Clock, Trophy, Flame, ChevronRight, Check } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NOTIFICATIONS = [
    {
        id: 1,
        type: 'study',
        title: '昨日作业精批已完成',
        message: '你的数学作业《二次函数》分析报告已生成，快来看看AI给出的建议吧。',
        time: '10分钟前',
        read: false,
        icon: BookOpen,
        color: 'text-blue-500 bg-blue-50',
        link: '/history'
    },
    {
        id: 2,
        type: 'growth',
        title: '连续学习达成！',
        message: '恭喜！你已经连续学习3天了。保持这个势头，新的徽章就在前方！',
        time: '2小时前',
        read: false,
        icon: Flame,
        color: 'text-orange-500 bg-orange-50',
        link: '/statistics'
    },
    {
        id: 3,
        type: 'system',
        title: '新功能上线：夜间模式',
        message: '为了保护你的视力，我们推出了夜间模式。在个人菜单中即可开启。',
        time: '1天前',
        read: true,
        icon: Clock,
        color: 'text-purple-500 bg-purple-50',
        link: '/settings'
    },
    {
        id: 4,
        type: 'award',
        title: '获得新勋章：解题能手',
        message: '你在物理学科中提问超过10次，解锁了"物理探索者"初级勋章。',
        time: '2天前',
        read: true,
        icon: Trophy,
        color: 'text-yellow-500 bg-yellow-50',
        link: '/settings'
    }
];

const NotificationDropdown = ({ onClose }) => {
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    return (
        <div ref={dropdownRef} className="absolute right-0 mt-3 w-80 md:w-96 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 z-50 overflow-hidden ring-1 ring-black ring-opacity-5">
            <div className="p-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                    <Bell size={18} className="text-indigo-600 dark:text-indigo-400" />
                    通知中心
                </h3>
                <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded-full">
                    2条未读
                </span>
            </div>

            <div className="max-h-[400px] overflow-y-auto">
                {NOTIFICATIONS.map((item) => (
                    <div
                        key={item.id}
                        className={`p-4 border-b border-slate-50 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors relative group ${!item.read ? 'bg-indigo-50/30 dark:bg-indigo-900/10' : ''}`}
                    >
                        {!item.read && (
                            <span className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full"></span>
                        )}
                        <Link to={item.link} onClick={onClose} className="flex gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.color} dark:bg-opacity-20`}>
                                <item.icon size={20} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className={`text-sm font-medium mb-1 truncate pr-4 ${!item.read ? 'text-slate-900 dark:text-slate-100' : 'text-slate-600 dark:text-slate-400'}`}>
                                    {item.title}
                                </h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                                    {item.message}
                                </p>
                                <p className="text-[10px] text-slate-400 mt-2 flex items-center gap-1">
                                    {item.time}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 text-center">
                <button
                    onClick={onClose}
                    className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center justify-center gap-1 w-full"
                >
                    <Check size={14} />
                    全部标记为已读
                </button>
            </div>
        </div>
    );
};

export default NotificationDropdown;

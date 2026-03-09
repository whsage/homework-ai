import React, { useEffect, useState } from 'react';
import { useRewards } from '../../context/RewardContext';
import { Star, Trophy, X, Flame } from 'lucide-react';

/**
 * RewardNotification - 奖励弹出通知
 * 显示在页面右上角，获得星星和解锁成就时出现
 */
const RewardNotification = () => {
    const { pendingNotifications, dismissNotification } = useRewards();
    const [visible, setVisible] = useState(false);
    const [current, setCurrent] = useState(null);

    useEffect(() => {
        if (pendingNotifications.length > 0 && !current) {
            setCurrent(pendingNotifications[0]);
            setVisible(true);

            const timer = setTimeout(() => {
                setVisible(false);
                setTimeout(() => {
                    dismissNotification();
                    setCurrent(null);
                }, 400);
            }, 2500);

            return () => clearTimeout(timer);
        }
    }, [pendingNotifications, current, dismissNotification]);

    if (!current) return null;

    return (
        <div
            className={`fixed top-20 right-4 z-50 transition-all duration-400 ${visible
                    ? 'opacity-100 translate-x-0 scale-100'
                    : 'opacity-0 translate-x-12 scale-90'
                }`}
        >
            {current.type === 'stars' ? (
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 min-w-[200px]">
                    <div className="relative">
                        <Star className="w-8 h-8 fill-white animate-spin-slow" />
                        {current.streak > 1 && (
                            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                {current.streak}
                            </div>
                        )}
                    </div>
                    <div>
                        <p className="font-bold text-sm">+{current.amount} ⭐</p>
                        <p className="text-xs text-yellow-100">{current.reason}</p>
                    </div>
                    {current.streak >= 3 && (
                        <Flame className="w-6 h-6 text-red-200 animate-pulse" />
                    )}
                    <button onClick={() => { setVisible(false); setTimeout(() => { dismissNotification(); setCurrent(null); }, 300); }} className="ml-1 opacity-60 hover:opacity-100">
                        <X className="w-4 h-4" />
                    </button>
                </div>
            ) : current.type === 'achievement' ? (
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3 min-w-[240px] animate-bounce-once">
                    <div className="text-3xl">{current.achievement.emoji}</div>
                    <div>
                        <p className="font-bold text-sm flex items-center gap-1">
                            <Trophy className="w-4 h-4" /> 成就解锁！
                        </p>
                        <p className="text-white font-bold">{current.achievement.name}</p>
                        <p className="text-xs text-purple-200">{current.achievement.desc}</p>
                    </div>
                    <button onClick={() => { setVisible(false); setTimeout(() => { dismissNotification(); setCurrent(null); }, 300); }} className="ml-1 opacity-60 hover:opacity-100">
                        <X className="w-4 h-4" />
                    </button>
                </div>
            ) : null}

            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow { animation: spin-slow 2s linear infinite; }
                @keyframes bounce-once {
                    0%, 100% { transform: translateY(0); }
                    30% { transform: translateY(-15px); }
                    60% { transform: translateY(-5px); }
                }
                .animate-bounce-once { animation: bounce-once 0.6s ease-out; }
            `}</style>
        </div>
    );
};

export default RewardNotification;

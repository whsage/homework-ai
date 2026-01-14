import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../supabase';

const UserContext = createContext();

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within UserProvider');
    }
    return context;
};

const DEFAULT_SETTINGS = {
    // 个人资料
    profile: {
        avatar: null,
        nickname: '',
        grade: '',
        school: '',
        bio: ''
    },
    // 学习偏好
    learningPreferences: {
        mainSubjects: [],
        tutoringStyle: 'balanced', // detailed, balanced, concise
        guidanceMode: 'socratic', // socratic, direct
        encouragementLevel: 'medium', // low, medium, high
        difficultyLevel: 'medium' // basic, medium, advanced
    },
    // AI 交互设置
    aiSettings: {
        defaultPromptMode: 'analyze', // analyze, hint, guide
        latexRendering: true,
        keywordHighlight: true,
        highlightColor: '#3b82f6',
        typewriterEffect: true,
        language: 'zh-CN'
    },
    // 会话管理
    sessionSettings: {
        autoSaveFrequency: 'realtime', // realtime, 1min, 5min
        retentionPeriod: '30days', // 7days, 30days, forever
        sessionLimitWarning: 3,
        defaultNaming: 'auto' // auto, manual
    },
    // 通知设置
    notifications: {
        dailyReminder: false,
        reminderTime: '20:00',
        expirationWarning: true,
        featureUpdates: true,
        systemMessages: true
    },
    // 外观主题
    appearance: {
        theme: 'light', // light, dark, auto
        primaryColor: 'blue', // blue, purple, green, orange
        fontSize: 'medium', // small, medium, large
        bubbleStyle: 'rounded' // rounded, square, gradient
    },
    // 学习统计
    statistics: {
        showStats: true,
        reportFrequency: 'weekly', // weekly, monthly
        achievementSystem: true
    }
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [settings, setSettings] = useState(DEFAULT_SETTINGS);
    const [loading, setLoading] = useState(true);

    // 加载用户信息
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        try {
            const { data: { user: authUser } } = await supabase.auth.getUser();

            if (authUser) {
                setUser(authUser);
                await loadUserSettings(authUser.id);
            }
        } catch (error) {
            console.error('Error loading user:', error);
        } finally {
            setLoading(false);
        }
    };

    const loadUserSettings = async (userId) => {
        try {
            const { data, error } = await supabase
                .from('user_settings')
                .select('settings')
                .eq('user_id', userId)
                .single();

            // 如果找到记录，合并设置
            if (data && data.settings) {
                setSettings({ ...DEFAULT_SETTINGS, ...data.settings });
            }
            // 如果没有找到记录（PGRST116 错误），使用默认设置
            else if (error && error.code === 'PGRST116') {
                console.log('No existing settings found, using defaults');
                setSettings(DEFAULT_SETTINGS);
            }
            // 其他错误则抛出
            else if (error) {
                throw error;
            }
        } catch (error) {
            console.error('Error loading settings:', error);
            // 即使加载失败，也使用默认设置
            setSettings(DEFAULT_SETTINGS);
        }
    };

    const updateSettings = async (newSettings) => {
        if (!user) return;

        const updatedSettings = { ...settings, ...newSettings };
        setSettings(updatedSettings);

        try {
            // 使用 upsert 并指定 onConflict 来正确处理插入/更新
            const { error } = await supabase
                .from('user_settings')
                .upsert(
                    {
                        user_id: user.id,
                        settings: updatedSettings
                    },
                    {
                        onConflict: 'user_id',
                        ignoreDuplicates: false
                    }
                );

            if (error) throw error;
        } catch (error) {
            console.error('Error updating settings:', error);
            throw error; // 重新抛出错误以便调用者知道保存失败
        }
    };

    const updateProfile = async (profileData) => {
        await updateSettings({
            profile: { ...settings.profile, ...profileData }
        });
    };

    const updateLearningPreferences = async (preferences) => {
        await updateSettings({
            learningPreferences: { ...settings.learningPreferences, ...preferences }
        });
    };

    const updateAISettings = async (aiSettings) => {
        await updateSettings({
            aiSettings: { ...settings.aiSettings, ...aiSettings }
        });
    };

    const updateSessionSettings = async (sessionSettings) => {
        await updateSettings({
            sessionSettings: { ...settings.sessionSettings, ...sessionSettings }
        });
    };

    const updateNotifications = async (notifications) => {
        await updateSettings({
            notifications: { ...settings.notifications, ...notifications }
        });
    };

    const updateAppearance = async (appearance) => {
        await updateSettings({
            appearance: { ...settings.appearance, ...appearance }
        });
    };

    const updateStatistics = async (statistics) => {
        await updateSettings({
            statistics: { ...settings.statistics, ...statistics }
        });
    };

    const value = {
        user,
        settings,
        loading,
        updateProfile,
        updateLearningPreferences,
        updateAISettings,
        updateSessionSettings,
        updateNotifications,
        updateAppearance,
        updateStatistics,
        updateSettings
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

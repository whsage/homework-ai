-- =====================================================
-- 真实通知系统 - 数据库迁移脚本
-- =====================================================

-- 1. 创建用户通知表
CREATE TABLE IF NOT EXISTS user_notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    type VARCHAR(50) NOT NULL, -- 'achievement', 'streak', 'subject', 'daily', 'system'
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    icon VARCHAR(50), -- 图标名称，如 'Trophy', 'Flame', 'BookOpen'
    color VARCHAR(50), -- 颜色类，如 'text-yellow-500 bg-yellow-50'
    link VARCHAR(255), -- 点击后跳转的链接
    read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    metadata JSONB -- 额外数据，如 { "sessions_count": 10, "level": 2 }
);

-- 2. 创建索引
CREATE INDEX IF NOT EXISTS idx_user_notifications_user_id ON user_notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_user_notifications_created_at ON user_notifications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_user_notifications_read ON user_notifications(read);

-- 3. 启用 RLS
ALTER TABLE user_notifications ENABLE ROW LEVEL SECURITY;

-- 4. 创建 RLS 策略
DROP POLICY IF EXISTS "Users can view own notifications" ON user_notifications;
CREATE POLICY "Users can view own notifications"
    ON user_notifications FOR SELECT
    USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own notifications" ON user_notifications;
CREATE POLICY "Users can update own notifications"
    ON user_notifications FOR UPDATE
    USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "System can insert notifications" ON user_notifications;
CREATE POLICY "System can insert notifications"
    ON user_notifications FOR INSERT
    WITH CHECK (true);

-- 5. 创建成就通知触发器函数
CREATE OR REPLACE FUNCTION check_achievement_notifications()
RETURNS TRIGGER AS $$
DECLARE
    total_count INTEGER;
    new_level INTEGER;
    old_level INTEGER;
BEGIN
    -- 获取用户总作业数
    total_count := NEW.total_sessions_created;

    -- 检查里程碑成就（1, 5, 10, 20, 50, 100）
    IF total_count IN (1, 5, 10, 20, 50, 100) THEN
        INSERT INTO user_notifications (user_id, type, title, message, icon, color, link, metadata)
        VALUES (
            NEW.user_id,
            'achievement',
            CASE 
                WHEN total_count = 1 THEN '🎉 开启学习之旅！'
                WHEN total_count = 5 THEN '🌟 初露锋芒！'
                WHEN total_count = 10 THEN '🏆 学习小能手！'
                WHEN total_count = 20 THEN '💎 勤奋学习者！'
                WHEN total_count = 50 THEN '👑 学习达人！'
                WHEN total_count = 100 THEN '🔥 学霸诞生！'
            END,
            CASE 
                WHEN total_count = 1 THEN '恭喜完成第一个作业！这是你学习之旅的开始。'
                WHEN total_count = 5 THEN '你已经完成了 5 个作业，继续保持这个势头！'
                WHEN total_count = 10 THEN '太棒了！你已经完成了 10 个作业，成功升级到 Lv.2！'
                WHEN total_count = 20 THEN '厉害！完成 20 个作业，你已经是 Lv.3 了！'
                WHEN total_count = 50 THEN '惊人！50 个作业完成，你是真正的学习达人！'
                WHEN total_count = 100 THEN '传奇！100 个作业，你已经是学霸级别了！'
            END,
            'Trophy',
            'text-yellow-500 bg-yellow-50',
            '/statistics',
            jsonb_build_object('sessions_count', total_count)
        );
    END IF;

    -- 检查等级提升
    new_level := CASE 
        WHEN total_count < 5 THEN 1
        WHEN total_count < 10 THEN 2
        WHEN total_count < 20 THEN 3
        WHEN total_count < 50 THEN 4
        WHEN total_count < 100 THEN 5
        WHEN total_count < 200 THEN 6
        ELSE 7
    END;

    old_level := CASE 
        WHEN total_count - 1 < 5 THEN 1
        WHEN total_count - 1 < 10 THEN 2
        WHEN total_count - 1 < 20 THEN 3
        WHEN total_count - 1 < 50 THEN 4
        WHEN total_count - 1 < 100 THEN 5
        WHEN total_count - 1 < 200 THEN 6
        ELSE 7
    END;

    -- 如果等级提升了，发送升级通知
    IF new_level > old_level THEN
        INSERT INTO user_notifications (user_id, type, title, message, icon, color, link, metadata)
        VALUES (
            NEW.user_id,
            'achievement',
            '⬆️ 恭喜升级！',
            '你已经升级到 Lv.' || new_level || '！继续努力，下一个等级在等你！',
            'TrendingUp',
            'text-indigo-500 bg-indigo-50',
            '/statistics',
            jsonb_build_object('new_level', new_level, 'old_level', old_level)
        );
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 6. 绑定触发器到 user_stats 表
DROP TRIGGER IF EXISTS trigger_achievement_notifications ON user_stats;
CREATE TRIGGER trigger_achievement_notifications
AFTER UPDATE OF total_sessions_created ON user_stats
FOR EACH ROW
WHEN (NEW.total_sessions_created > OLD.total_sessions_created)
EXECUTE FUNCTION check_achievement_notifications();

-- 7. 创建欢迎通知函数（新用户注册时调用）
CREATE OR REPLACE FUNCTION create_welcome_notification(p_user_id UUID)
RETURNS VOID AS $$
BEGIN
    INSERT INTO user_notifications (user_id, type, title, message, icon, color, link, metadata)
    VALUES (
        p_user_id,
        'system',
        '👋 欢迎来到 AI作业辅导！',
        '开始你的智能学习之旅吧！上传第一个作业题目，让 AI 导师引导你思考。',
        'BookOpen',
        'text-blue-500 bg-blue-50',
        '/',
        jsonb_build_object('is_welcome', true)
    );
END;
$$ LANGUAGE plpgsql;

-- 8. 创建清理过期通知的函数（可选，定期清理 30 天前的已读通知）
CREATE OR REPLACE FUNCTION cleanup_old_notifications()
RETURNS INTEGER AS $$
DECLARE
    deleted_count INTEGER;
BEGIN
    DELETE FROM user_notifications
    WHERE read = TRUE 
    AND created_at < NOW() - INTERVAL '30 days';
    
    GET DIAGNOSTICS deleted_count = ROW_COUNT;
    RETURN deleted_count;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- 完成！
-- =====================================================
-- 使用说明：
-- 1. 在 Supabase SQL Editor 中执行此脚本
-- 2. 通知将自动在用户完成作业时生成
-- 3. 前端需要修改 NotificationDropdown 组件来读取真实数据
-- =====================================================

-- =====================================================
-- 通知系统更新 - 学科专精成就
-- =====================================================

-- 1. 创建检查学科成就的函数
CREATE OR REPLACE FUNCTION check_subject_achievement_notifications()
RETURNS TRIGGER AS $$
DECLARE
    subject_count INTEGER;
    milestone_key TEXT;
    milestone_msg TEXT;
BEGIN
    -- 统计该用户在该学科下的作业总数
    SELECT count(*) INTO subject_count
    FROM sessions
    WHERE user_id = NEW.user_id AND subject = NEW.subject;

    -- 检查是否达到里程碑 (5, 10, 20, 50)
    IF subject_count IN (5, 10, 20, 50) THEN
        
        -- 确定翻译键
        IF subject_count = 5 THEN
            milestone_key := 'notifications.subject.five.title';
            milestone_msg := 'notifications.subject.five.msg';
        ELSIF subject_count = 10 THEN
            milestone_key := 'notifications.subject.ten.title';
            milestone_msg := 'notifications.subject.ten.msg';
        ELSIF subject_count = 20 THEN
            milestone_key := 'notifications.subject.twenty.title';
            milestone_msg := 'notifications.subject.twenty.msg';
        ELSIF subject_count = 50 THEN
            milestone_key := 'notifications.subject.fifty.title';
            milestone_msg := 'notifications.subject.fifty.msg';
        END IF;

        -- 插入通知
        INSERT INTO user_notifications (user_id, type, title, message, icon, color, link, metadata)
        VALUES (
            NEW.user_id,
            'subject_achievement',
            milestone_key,
            milestone_msg,
            'BookOpen',
            'text-indigo-500 bg-indigo-50',
            '/statistics',
            jsonb_build_object('subject', NEW.subject, 'count', subject_count)
        );
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 2. 创建触发器
-- 当 sessions 表的 subject 字段被更新时触发 (通常是 AI 分析完成后)
DROP TRIGGER IF EXISTS trigger_subject_achievement ON sessions;
CREATE TRIGGER trigger_subject_achievement
AFTER UPDATE OF subject ON sessions
FOR EACH ROW
WHEN (OLD.subject IS DISTINCT FROM NEW.subject AND NEW.subject IS NOT NULL AND NEW.subject != 'General')
EXECUTE FUNCTION check_subject_achievement_notifications();

-- 3. 补充：如果用户手动修改标题但也可能触发（虽然不常见，但作为补充）
-- 暂时只关注 UPDATE subject。因为 INSERT 时通常 subject 是 General 或 null，由 update 触发。

-- =====================================================
-- 欢迎回归通知 (由前端 UploadZone 触发连续学习，这里不需要后端逻辑，但可以预留)
-- =====================================================

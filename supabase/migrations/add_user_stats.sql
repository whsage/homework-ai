-- 创建用户统计表
CREATE TABLE IF NOT EXISTS user_stats (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    total_sessions_created INTEGER DEFAULT 0 NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 为现有用户初始化统计数据
INSERT INTO user_stats (user_id, total_sessions_created)
SELECT 
    user_id,
    COUNT(*) as total_sessions_created
FROM sessions
GROUP BY user_id
ON CONFLICT (user_id) DO NOTHING;

-- 创建触发器函数：当创建新会话时自动增加计数
CREATE OR REPLACE FUNCTION increment_session_count()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO user_stats (user_id, total_sessions_created, updated_at)
    VALUES (NEW.user_id, 1, NOW())
    ON CONFLICT (user_id) 
    DO UPDATE SET 
        total_sessions_created = user_stats.total_sessions_created + 1,
        updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 创建触发器：在插入新会话时触发
DROP TRIGGER IF EXISTS session_created_trigger ON sessions;
CREATE TRIGGER session_created_trigger
    AFTER INSERT ON sessions
    FOR EACH ROW
    EXECUTE FUNCTION increment_session_count();

-- 启用 RLS
ALTER TABLE user_stats ENABLE ROW LEVEL SECURITY;

-- 创建 RLS 策略：用户只能查看自己的统计
CREATE POLICY "Users can view own stats"
    ON user_stats
    FOR SELECT
    USING (auth.uid() = user_id);

-- 创建 RLS 策略：用户可以插入自己的统计（通过触发器）
CREATE POLICY "Users can insert own stats"
    ON user_stats
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- 创建 RLS 策略：用户可以更新自己的统计（通过触发器）
CREATE POLICY "Users can update own stats"
    ON user_stats
    FOR UPDATE
    USING (auth.uid() = user_id);

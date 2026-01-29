-- Smart Learning System Migration
-- 轻量级智能学习系统数据库迁移
-- 创建日期: 2026-01-29

-- ============================================
-- 1. 知识点快照表 (简化版)
-- ============================================
CREATE TABLE IF NOT EXISTS topic_snapshots (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  topic_id VARCHAR(100) NOT NULL,
  
  -- 简单的掌握度指标
  attempts INTEGER DEFAULT 0,
  correct INTEGER DEFAULT 0,
  mastery_score DECIMAL(3,2) DEFAULT 0 CHECK (mastery_score >= 0 AND mastery_score <= 1),
  
  -- 最后学习时间
  last_practiced TIMESTAMP DEFAULT NOW(),
  
  -- 简单的间隔重复
  next_review DATE,
  
  -- 时间戳
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  UNIQUE(user_id, topic_id)
);

-- 索引
CREATE INDEX IF NOT EXISTS idx_topic_snapshots_user ON topic_snapshots(user_id);
CREATE INDEX IF NOT EXISTS idx_topic_snapshots_next_review ON topic_snapshots(next_review);
CREATE INDEX IF NOT EXISTS idx_topic_snapshots_mastery ON topic_snapshots(mastery_score);

-- RLS策略
ALTER TABLE topic_snapshots ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own topic snapshots"
  ON topic_snapshots FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own topic snapshots"
  ON topic_snapshots FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own topic snapshots"
  ON topic_snapshots FOR UPDATE
  USING (auth.uid() = user_id);

-- ============================================
-- 2. AI对话历史表
-- ============================================
CREATE TABLE IF NOT EXISTS ai_conversations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  topic_id VARCHAR(100) NOT NULL,
  
  -- 对话内容
  messages JSONB NOT NULL DEFAULT '[]',
  -- 格式: [{"role": "user|assistant", "content": "...", "timestamp": "..."}]
  
  -- 学习洞察 (AI总结)
  insights JSONB,
  -- 格式: {"strengths": [...], "weaknesses": [...], "suggestions": [...]}
  
  -- 会话元数据
  session_count INTEGER DEFAULT 1,
  total_messages INTEGER DEFAULT 0,
  
  -- 时间戳
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 索引
CREATE INDEX IF NOT EXISTS idx_ai_conversations_user ON ai_conversations(user_id);
CREATE INDEX IF NOT EXISTS idx_ai_conversations_topic ON ai_conversations(topic_id);
CREATE INDEX IF NOT EXISTS idx_ai_conversations_updated ON ai_conversations(updated_at);

-- RLS策略
ALTER TABLE ai_conversations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own conversations"
  ON ai_conversations FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own conversations"
  ON ai_conversations FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own conversations"
  ON ai_conversations FOR UPDATE
  USING (auth.uid() = user_id);

-- ============================================
-- 3. 学习会话增强 (扩展现有表)
-- ============================================
-- 为homework_sessions表添加学习上下文字段
ALTER TABLE homework_sessions 
ADD COLUMN IF NOT EXISTS learning_context JSONB DEFAULT '{}';

-- 学习上下文格式:
-- {
--   "grade": "初中",
--   "currentTopic": "二次函数",
--   "recentPerformance": "良好",
--   "lastResult": "correct|incorrect",
--   "timeSpent": 300,
--   "hintsUsed": 2
-- }

COMMENT ON COLUMN homework_sessions.learning_context IS '学习上下文数据,用于AI个性化';

-- ============================================
-- 4. 智能练习题缓存表 (可选,用于性能优化)
-- ============================================
CREATE TABLE IF NOT EXISTS ai_generated_problems (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  topic_id VARCHAR(100) NOT NULL,
  difficulty DECIMAL(3,2) NOT NULL,
  
  -- 题目内容
  problem_data JSONB NOT NULL,
  -- 格式: {"type": "choice|fill|solve", "question": "...", "answer": "...", ...}
  
  -- 使用统计
  usage_count INTEGER DEFAULT 0,
  avg_correct_rate DECIMAL(3,2),
  
  -- 质量评分 (基于用户反馈)
  quality_score DECIMAL(3,2) DEFAULT 0.5,
  
  -- 时间戳
  created_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP DEFAULT (NOW() + INTERVAL '30 days')
);

-- 索引
CREATE INDEX IF NOT EXISTS idx_ai_problems_topic ON ai_generated_problems(topic_id);
CREATE INDEX IF NOT EXISTS idx_ai_problems_difficulty ON ai_generated_problems(difficulty);
CREATE INDEX IF NOT EXISTS idx_ai_problems_expires ON ai_generated_problems(expires_at);

-- 自动清理过期题目
CREATE OR REPLACE FUNCTION cleanup_expired_problems()
RETURNS void AS $$
BEGIN
  DELETE FROM ai_generated_problems WHERE expires_at < NOW();
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- 5. 学习统计视图 (方便查询)
-- ============================================
CREATE OR REPLACE VIEW user_learning_stats AS
SELECT 
  user_id,
  COUNT(DISTINCT topic_id) as total_topics,
  COUNT(*) FILTER (WHERE mastery_score >= 0.9) as mastered_topics,
  COUNT(*) FILTER (WHERE mastery_score < 0.5) as struggling_topics,
  COUNT(*) FILTER (WHERE next_review <= CURRENT_DATE) as due_reviews,
  AVG(mastery_score) as avg_mastery,
  SUM(attempts) as total_attempts,
  SUM(correct) as total_correct
FROM topic_snapshots
GROUP BY user_id;

-- ============================================
-- 6. 自动更新updated_at触发器
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 应用到相关表
CREATE TRIGGER update_topic_snapshots_updated_at
  BEFORE UPDATE ON topic_snapshots
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_ai_conversations_updated_at
  BEFORE UPDATE ON ai_conversations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 7. 辅助函数: 计算下次复习时间
-- ============================================
CREATE OR REPLACE FUNCTION calculate_next_review(mastery DECIMAL)
RETURNS DATE AS $$
DECLARE
  intervals INTEGER[] := ARRAY[1, 3, 7, 14, 30, 60];
  idx INTEGER;
  days INTEGER;
BEGIN
  -- 根据掌握度选择间隔
  idx := LEAST(FLOOR(mastery * ARRAY_LENGTH(intervals, 1))::INTEGER + 1, ARRAY_LENGTH(intervals, 1));
  days := intervals[idx];
  
  RETURN CURRENT_DATE + days;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- 8. 辅助函数: 获取今日复习任务
-- ============================================
CREATE OR REPLACE FUNCTION get_today_reviews(p_user_id UUID)
RETURNS TABLE (
  topic_id VARCHAR,
  mastery_score DECIMAL,
  last_practiced TIMESTAMP,
  days_since_review INTEGER
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    ts.topic_id,
    ts.mastery_score,
    ts.last_practiced,
    (CURRENT_DATE - ts.next_review)::INTEGER as days_since_review
  FROM topic_snapshots ts
  WHERE ts.user_id = p_user_id
    AND ts.next_review <= CURRENT_DATE
  ORDER BY ts.next_review ASC, ts.mastery_score ASC
  LIMIT 10;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- 9. 示例数据 (可选,用于测试)
-- ============================================
-- 注释掉,实际使用时可以取消注释

-- INSERT INTO topic_snapshots (user_id, topic_id, attempts, correct, mastery_score, next_review)
-- VALUES 
--   (auth.uid(), '二次函数-基本概念', 10, 9, 0.90, CURRENT_DATE + 7),
--   (auth.uid(), '二次函数-图像性质', 8, 6, 0.75, CURRENT_DATE + 3),
--   (auth.uid(), '二次函数-实际应用', 5, 2, 0.40, CURRENT_DATE);

-- ============================================
-- 10. 权限设置
-- ============================================
-- 确保authenticated用户可以访问视图
GRANT SELECT ON user_learning_stats TO authenticated;

-- ============================================
-- 迁移完成
-- ============================================
-- 验证查询
SELECT 
  'topic_snapshots' as table_name,
  COUNT(*) as row_count
FROM topic_snapshots
UNION ALL
SELECT 
  'ai_conversations',
  COUNT(*)
FROM ai_conversations;

-- 显示成功消息
DO $$
BEGIN
  RAISE NOTICE '✅ Smart Learning System 数据库迁移完成!';
  RAISE NOTICE '📊 已创建表: topic_snapshots, ai_conversations, ai_generated_problems';
  RAISE NOTICE '📈 已创建视图: user_learning_stats';
  RAISE NOTICE '🔧 已创建函数: calculate_next_review, get_today_reviews';
  RAISE NOTICE '🚀 系统已就绪,可以开始使用!';
END $$;

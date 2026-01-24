# 真实通知系统设计方案

## 🎯 目标
将当前的演示通知改造为真实的、基于用户行为的通知系统，提升用户体验和参与度。

## 📋 通知类型设计

### 1. 成就通知 🏆
**触发条件：**
- 完成第 1 个作业
- 完成第 5 个作业
- 完成第 10 个作业
- 完成第 20 个作业
- 完成第 50 个作业
- 等级提升（Lv.1 → Lv.2 → Lv.3...）

**通知内容示例：**
```
🎉 恭喜升级！
你已经完成了 10 个作业，成功升级到 Lv.2！继续加油，下一个等级在等你！
```

### 2. 连续学习通知 🔥
**触发条件：**
- 连续学习 3 天
- 连续学习 7 天
- 连续学习 14 天
- 连续学习 30 天

**通知内容示例：**
```
🔥 连续学习达成！
恭喜！你已经连续学习 7 天了。坚持就是胜利，保持这个势头！
```

### 3. 学科专精通知 📚
**触发条件：**
- 某个学科完成 5 个作业
- 某个学科完成 10 个作业
- 某个学科完成 20 个作业

**通知内容示例：**
```
📐 数学小达人！
你已经在数学学科完成了 10 个作业，获得"数学探索者"称号！
```

### 4. 每日鼓励通知 💪
**触发条件：**
- 每天首次登录（如果昨天有学习）
- 完成当天第一个作业

**通知内容示例：**
```
👋 欢迎回来！
新的一天，新的开始！继续你的学习之旅吧！
```

### 5. 系统通知 📢
**触发条件：**
- 新功能上线
- 重要更新
- 维护通知

**通知内容示例：**
```
✨ 新功能上线
我们推出了 Android 客户端，现在可以在手机上随时学习了！
```

---

## 🗄️ 数据库设计

### 创建通知表

```sql
-- 用户通知表
CREATE TABLE user_notifications (
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

-- 创建索引
CREATE INDEX idx_user_notifications_user_id ON user_notifications(user_id);
CREATE INDEX idx_user_notifications_created_at ON user_notifications(created_at DESC);
CREATE INDEX idx_user_notifications_read ON user_notifications(read);

-- RLS 策略
ALTER TABLE user_notifications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own notifications"
    ON user_notifications FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can update own notifications"
    ON user_notifications FOR UPDATE
    USING (auth.uid() = user_id);
```

---

## 🔔 通知生成逻辑

### 1. 成就通知触发器

```sql
-- 当用户完成作业时，检查是否达到成就里程碑
CREATE OR REPLACE FUNCTION check_achievement_notifications()
RETURNS TRIGGER AS $$
DECLARE
    total_count INTEGER;
    new_level INTEGER;
    old_level INTEGER;
BEGIN
    -- 获取用户总作业数
    SELECT total_sessions_created INTO total_count
    FROM user_stats
    WHERE user_id = NEW.user_id;

    -- 检查里程碑成就
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

-- 绑定触发器到 user_stats 表
CREATE TRIGGER trigger_achievement_notifications
AFTER UPDATE OF total_sessions_created ON user_stats
FOR EACH ROW
WHEN (NEW.total_sessions_created > OLD.total_sessions_created)
EXECUTE FUNCTION check_achievement_notifications();
```

### 2. 连续学习通知（在应用层实现）

在用户每次创建作业时检查：
```javascript
// 在 UploadZone.jsx 或相关组件中
const checkStreakNotification = async (userId) => {
    // 获取活跃天数
    const { data: sessions } = await supabase
        .from('sessions')
        .select('created_at')
        .eq('user_id', userId);
    
    const dates = sessions.map(s => new Date(s.created_at).toDateString());
    const uniqueDates = [...new Set(dates)];
    const streak = uniqueDates.length;
    
    // 检查是否达到里程碑
    if ([3, 7, 14, 30].includes(streak)) {
        await supabase.from('user_notifications').insert({
            user_id: userId,
            type: 'streak',
            title: '🔥 连续学习达成！',
            message: `恭喜！你已经连续学习 ${streak} 天了。保持这个势头，新的徽章就在前方！`,
            icon: 'Flame',
            color: 'text-orange-500 bg-orange-50',
            link: '/statistics',
            metadata: { streak }
        });
    }
};
```

---

## 🎨 前端实现

### NotificationDropdown 改造

```jsx
// 从数据库获取真实通知
const [notifications, setNotifications] = useState([]);
const [unreadCount, setUnreadCount] = useState(0);

useEffect(() => {
    const fetchNotifications = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const { data } = await supabase
            .from('user_notifications')
            .select('*')
            .eq('user_id', user.id)
            .order('created_at', { ascending: false })
            .limit(10);

        setNotifications(data || []);
        setUnreadCount(data?.filter(n => !n.read).length || 0);
    };

    fetchNotifications();

    // 实时监听新通知
    const channel = supabase
        .channel('notifications')
        .on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'user_notifications'
        }, (payload) => {
            setNotifications(prev => [payload.new, ...prev]);
            setUnreadCount(prev => prev + 1);
        })
        .subscribe();

    return () => {
        supabase.removeChannel(channel);
    };
}, []);
```

---

## 📊 通知优先级

1. **高优先级**（立即显示）
   - 等级提升
   - 重要成就解锁

2. **中优先级**（正常显示）
   - 连续学习里程碑
   - 学科专精成就

3. **低优先级**（静默通知）
   - 每日鼓励
   - 系统更新

---

## 🚀 实施步骤

### 第一阶段：数据库准备
1. ✅ 创建 `user_notifications` 表
2. ✅ 设置 RLS 策略
3. ✅ 创建成就通知触发器

### 第二阶段：后端逻辑
1. ✅ 实现成就检测函数
2. ✅ 实现连续学习检测
3. ✅ 实现学科专精检测

### 第三阶段：前端改造
1. ✅ 修改 NotificationDropdown 从数据库读取
2. ✅ 添加实时通知监听
3. ✅ 实现标记已读功能
4. ✅ 添加通知动画效果

### 第四阶段：优化
1. ✅ 添加通知去重逻辑
2. ✅ 实现通知过期清理
3. ✅ 优化性能

---

## 💡 用户体验提升

1. **即时反馈**：完成作业后立即收到成就通知
2. **进度可视化**：通过通知了解自己的学习进度
3. **激励机制**：里程碑通知激励用户持续学习
4. **个性化**：根据用户的学习习惯推送相关通知

---

## 📝 示例通知内容

### 成就通知
```
🎉 恭喜升级到 Lv.3！
你已经完成了 20 个作业，成功升级！继续保持，下一个等级需要 50 个作业。
```

### 连续学习
```
🔥 连续学习 7 天达成！
太棒了！你已经坚持学习一周了。保持这个势头，30 天连续学习徽章在等你！
```

### 学科专精
```
📐 数学小达人！
你已经在数学学科完成了 10 个作业，解锁"数学探索者"称号！
```

### 每日鼓励
```
👋 新的一天，新的开始！
欢迎回来！昨天你完成了 2 个作业，今天继续加油吧！
```

---

**创建时间：** 2026-01-24  
**状态：** 待实施  
**优先级：** 高

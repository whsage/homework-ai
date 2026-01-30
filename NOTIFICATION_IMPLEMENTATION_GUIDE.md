# 真实通知系统 - 实施指南

## 📋 已完成的工作

### ✅ 1. 设计文档
- 创建了完整的系统设计方案：`NOTIFICATION_SYSTEM_DESIGN.md`
- 定义了 5 种通知类型：成就、连续学习、学科专精、每日鼓励、系统通知

### ✅ 2. 数据库脚本
- 创建了迁移脚本：`supabase/migrations/create_notification_system.sql`
- 包含表结构、索引、RLS 策略和自动触发器

### ✅ 3. 前端组件
- 改造了 `NotificationDropdown.jsx`，支持：
  - 从数据库读取真实通知
  - 实时监听新通知
  - 标记已读/未读
  - 加载状态和空状态
  - 时间格式化

---

## 🚀 部署步骤

### 第一步：执行数据库迁移

1. 打开 Supabase Dashboard
   ```
   https://supabase.com/dashboard
   ```

2. 选择你的项目

3. 进入 **SQL Editor**

4. 复制 `supabase/migrations/create_notification_system.sql` 的内容

5. 粘贴并点击 **Run** 执行

6. 确认执行成功（应该看到 "Success. No rows returned"）

---

### 第二步：测试通知系统

#### 测试成就通知

1. 登录应用

2. 完成第 1 个作业
   - 应该收到：🎉 开启学习之旅！

3. 完成第 5 个作业
   - 应该收到：🌟 初露锋芒！

4. 完成第 10 个作业
   - 应该收到：🏆 学习小能手！
   - 同时收到：⬆️ 恭喜升级到 Lv.2！

#### 测试通知显示

1. 点击右上角的铃铛图标

2. 应该看到刚才收到的通知

3. 点击通知可以跳转到相应页面

4. 点击"全部标记为已读"可以清除未读标记

---

### 第三步：验证实时通知

1. 打开两个浏览器窗口

2. 在窗口 A 完成一个作业

3. 在窗口 B 应该立即看到新通知（无需刷新）

---

## 🎯 通知触发时机

### 自动触发（数据库触发器）

✅ **成就里程碑**
- 完成 1, 5, 10, 20, 50, 100 个作业时自动触发

✅ **等级提升**
- Lv.1 → Lv.2（10 个作业）
- Lv.2 → Lv.3（20 个作业）
- Lv.3 → Lv.4（50 个作业）
- Lv.4 → Lv.5（100 个作业）

### 未来可添加（需要应用层逻辑）

⏳ **连续学习**
- 连续 3, 7, 14, 30 天学习

⏳ **学科专精**
- 某学科完成 5, 10, 20 个作业

⏳ **每日鼓励**
- 每天首次登录

---

## 📊 数据库表结构

### user_notifications 表

| 字段 | 类型 | 说明 |
|------|------|------|
| id | UUID | 主键 |
| user_id | UUID | 用户 ID |
| type | VARCHAR | 通知类型 |
| title | TEXT | 通知标题 |
| message | TEXT | 通知内容 |
| icon | VARCHAR | 图标名称 |
| color | VARCHAR | 颜色类 |
| link | VARCHAR | 跳转链接 |
| read | BOOLEAN | 是否已读 |
| created_at | TIMESTAMP | 创建时间 |
| metadata | JSONB | 额外数据 |

---

## 🔍 调试和验证

### 查看所有通知

```sql
SELECT * FROM user_notifications
ORDER BY created_at DESC;
```

### 查看某个用户的通知

```sql
SELECT * FROM user_notifications
WHERE user_id = 'YOUR_USER_ID'
ORDER BY created_at DESC;
```

### 手动创建测试通知

```sql
INSERT INTO user_notifications (user_id, type, title, message, icon, color, link)
VALUES (
    'YOUR_USER_ID',
    'system',
    '🎉 测试通知',
    '这是一条测试通知，用于验证系统是否正常工作。',
    'Bell',
    'text-blue-500 bg-blue-50',
    '/'
);
```

### 清空所有通知（测试用）

```sql
DELETE FROM user_notifications;
```

---

## 🎨 自定义通知

### 添加新的通知类型

1. 在 `create_notification_system.sql` 中添加新的触发逻辑

2. 在 `NotificationDropdown.jsx` 的 `ICON_MAP` 中添加新图标

3. 根据需要调整颜色和样式

### 修改通知内容

编辑 `check_achievement_notifications()` 函数中的 CASE 语句：

```sql
CASE 
    WHEN total_count = 1 THEN '你的自定义标题'
    WHEN total_count = 5 THEN '另一个自定义标题'
    ...
END
```

---

## 📈 性能优化

### 已实施

✅ 创建了索引（user_id, created_at, read）
✅ 限制查询数量（最多 10 条）
✅ 使用 RLS 策略保护数据

### 未来优化

⏳ 定期清理过期通知（30 天前的已读通知）
⏳ 添加通知去重逻辑
⏳ 实现通知分页加载

---

## 🐛 常见问题

### Q: 通知没有显示？

**A:** 检查以下几点：
1. 数据库迁移是否成功执行
2. RLS 策略是否正确配置
3. 浏览器控制台是否有错误
4. 用户是否已登录

### Q: 通知不是实时的？

**A:** 确保：
1. Supabase Realtime 功能已启用
2. 浏览器支持 WebSocket
3. 网络连接正常

### Q: 如何重置通知系统？

**A:** 执行以下 SQL：
```sql
-- 删除所有通知
DELETE FROM user_notifications;

-- 删除触发器
DROP TRIGGER IF EXISTS trigger_achievement_notifications ON user_stats;

-- 删除函数
DROP FUNCTION IF EXISTS check_achievement_notifications();

-- 删除表
DROP TABLE IF EXISTS user_notifications;

-- 然后重新执行迁移脚本
```

---

## 🎉 预期效果

### 用户体验提升

1. **即时反馈**
   - 完成作业后立即收到成就通知
   - 红点提示未读通知

2. **进度可视化**
   - 通过通知了解学习进度
   - 清楚知道下一个目标

3. **激励机制**
   - 里程碑通知激励持续学习
   - 等级提升带来成就感

4. **个性化体验**
   - 根据用户行为推送相关通知
   - 不同类型的通知有不同的样式

---

## 📝 后续计划

### 第二阶段：连续学习通知

在 `UploadZone.jsx` 中添加：

```javascript
// 检查连续学习天数
const checkStreakNotification = async (userId) => {
    const { data: sessions } = await supabase
        .from('sessions')
        .select('created_at')
        .eq('user_id', userId);
    
    const dates = sessions.map(s => new Date(s.created_at).toDateString());
    const uniqueDates = [...new Set(dates)];
    const streak = uniqueDates.length;
    
    if ([3, 7, 14, 30].includes(streak)) {
        await supabase.from('user_notifications').insert({
            user_id: userId,
            type: 'streak',
            title: '🔥 连续学习达成！',
            message: `恭喜！你已经连续学习 ${streak} 天了。保持这个势头！`,
            icon: 'Flame',
            color: 'text-orange-500 bg-orange-50',
            link: '/statistics',
            metadata: { streak }
        });
    }
};
```

### 第三阶段：学科专精通知

类似的逻辑，检测某个学科的作业数量。

### 第四阶段：每日鼓励通知

在用户登录时检查是否需要发送鼓励通知。

---

## ✅ 检查清单

部署前确认：

- [ ] 数据库迁移脚本已执行
- [ ] NotificationDropdown 组件已更新
- [ ] 代码已提交到 Git
- [ ] 已在本地测试通知功能
- [ ] 已验证实时通知工作正常
- [ ] 已测试标记已读功能
- [ ] 已检查移动端显示效果

---

**创建时间：** 2026-01-24  
**状态：** 待部署  
**预计完成时间：** 10-15 分钟

# 数据库设置指南 - 用户设置表

## 📋 概述

本指南将帮助你在 Supabase 中创建 `user_settings` 表，用于存储用户的个人设置数据。

---

## 🚀 快速开始

### 步骤 1: 登录 Supabase Dashboard

1. 打开浏览器，访问 [https://supabase.com](https://supabase.com)
2. 登录你的 Supabase 账号
3. 选择你的项目（HomeworkAI 项目）

### 步骤 2: 打开 SQL Editor

1. 在左侧导航栏中，点击 **SQL Editor** 图标（看起来像 `</>`）
2. 点击 **New Query** 按钮创建新查询

### 步骤 3: 复制并运行 SQL 脚本

1. 打开项目根目录下的 `supabase_user_settings_migration.sql` 文件
2. 复制**全部内容**
3. 粘贴到 Supabase SQL Editor 中
4. 点击右下角的 **Run** 按钮（或按 `Ctrl+Enter`）

### 步骤 4: 验证创建成功

运行成功后，你应该看到：
```
Success. No rows returned
```

---

## 📊 验证数据库表

### 方法 1: 使用 Table Editor

1. 在左侧导航栏点击 **Table Editor**
2. 在表列表中查找 `user_settings` 表
3. 点击该表，你应该看到以下列：
   - `id` (uuid)
   - `user_id` (uuid)
   - `settings` (jsonb)
   - `created_at` (timestamptz)
   - `updated_at` (timestamptz)

### 方法 2: 使用 SQL 查询

在 SQL Editor 中运行：
```sql
SELECT * FROM user_settings;
```

如果表创建成功，查询会返回空结果（因为还没有数据）。

---

## 🔒 验证 RLS 策略

在 SQL Editor 中运行以下查询来验证 RLS 策略：

```sql
-- 查看 user_settings 表的所有策略
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies
WHERE tablename = 'user_settings';
```

你应该看到 4 个策略：
1. `Users can view their own settings` (SELECT)
2. `Users can insert their own settings` (INSERT)
3. `Users can update their own settings` (UPDATE)
4. `Users can delete their own settings` (DELETE)

---

## 🧪 测试设置功能

### 1. 确保用户已登录

在应用中登录一个测试账号。

### 2. 访问设置页面

```
http://localhost:5173/settings
```

### 3. 修改任意设置

例如：
- 修改昵称
- 选择学科
- 开启/关闭某个功能

### 4. 点击"保存更改"

### 5. 验证数据已保存

在 Supabase SQL Editor 中运行：
```sql
SELECT * FROM user_settings;
```

你应该看到一条记录，包含你刚才保存的设置。

---

## 🎯 SQL 脚本详解

### 创建的内容

1. **user_settings 表**
   - 存储用户的所有个人设置
   - 使用 JSONB 格式存储灵活的设置数据
   - 每个用户只能有一条记录（UNIQUE 约束）

2. **索引**
   - `idx_user_settings_user_id`: 加速按用户 ID 查询

3. **RLS 策略**
   - 确保用户只能访问自己的设置
   - 防止数据泄露和未授权访问

4. **触发器**
   - 自动更新 `updated_at` 字段
   - 记录最后修改时间

---

## 🔧 常见问题

### Q1: 运行 SQL 时出现 "permission denied" 错误

**解决方案**: 确保你使用的是项目的 **service_role** 密钥，或者在 Supabase Dashboard 中以管理员身份运行。

### Q2: 策略创建失败

**解决方案**: 
1. 先删除已存在的策略：
```sql
DROP POLICY IF EXISTS "Users can view their own settings" ON user_settings;
DROP POLICY IF EXISTS "Users can insert their own settings" ON user_settings;
DROP POLICY IF EXISTS "Users can update their own settings" ON user_settings;
DROP POLICY IF EXISTS "Users can delete their own settings" ON user_settings;
```
2. 然后重新运行完整的迁移脚本

### Q3: 触发器创建失败

**解决方案**:
1. 先删除已存在的触发器：
```sql
DROP TRIGGER IF EXISTS update_user_settings_updated_at ON user_settings;
DROP FUNCTION IF EXISTS update_updated_at_column();
```
2. 然后重新运行完整的迁移脚本

### Q4: 设置保存失败

**检查清单**:
- ✅ 用户是否已登录？
- ✅ `user_settings` 表是否创建成功？
- ✅ RLS 策略是否正确配置？
- ✅ 浏览器控制台是否有错误信息？

---

## 🎨 设置数据结构

保存在 `settings` JSONB 字段中的数据结构：

```json
{
  "profile": {
    "avatar": "https://...",
    "nickname": "张三",
    "grade": "高中一年级",
    "school": "某某中学",
    "bio": "热爱学习的高中生"
  },
  "learningPreferences": {
    "mainSubjects": ["math", "physics"],
    "tutoringStyle": "balanced",
    "guidanceMode": "socratic",
    "encouragementLevel": "medium",
    "difficultyLevel": "medium"
  },
  "aiSettings": {
    "defaultPromptMode": "analyze",
    "latexRendering": true,
    "keywordHighlight": true,
    "highlightColor": "#3b82f6",
    "typewriterEffect": true,
    "language": "zh-CN"
  },
  "sessionSettings": {
    "autoSaveFrequency": "realtime",
    "retentionPeriod": "30days",
    "sessionLimitWarning": 3,
    "defaultNaming": "auto"
  },
  "notifications": {
    "dailyReminder": false,
    "reminderTime": "20:00",
    "expirationWarning": true,
    "featureUpdates": true,
    "systemMessages": true
  },
  "appearance": {
    "theme": "light",
    "primaryColor": "blue",
    "fontSize": "medium",
    "bubbleStyle": "rounded"
  },
  "statistics": {
    "showStats": true,
    "reportFrequency": "weekly",
    "achievementSystem": true
  }
}
```

---

## 📚 相关文档

- **功能说明**: `SETTINGS_IMPLEMENTATION.md`
- **SQL 脚本**: `supabase_user_settings_migration.sql`
- **用户上下文**: `src/context/UserContext.jsx`

---

## ✅ 完成检查清单

完成以下步骤后，打勾确认：

- [ ] 已登录 Supabase Dashboard
- [ ] 已在 SQL Editor 中运行迁移脚本
- [ ] 已验证 `user_settings` 表创建成功
- [ ] 已验证 RLS 策略创建成功
- [ ] 已在应用中测试保存设置
- [ ] 已在数据库中验证数据保存成功

---

**完成后，你的个人设置系统就完全可用了！** 🎉

如有任何问题，请查看常见问题部分或联系技术支持。

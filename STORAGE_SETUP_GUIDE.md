# Supabase 存储桶设置指南

## 📦 创建用户上传存储桶

头像上传功能需要在 Supabase 中创建一个存储桶（Storage Bucket）。

### 🚀 步骤

#### 1. 打开 Supabase Storage

1. 登录 Supabase Dashboard
2. 选择你的项目
3. 在左侧导航栏点击 **Storage** 图标（📦）

#### 2. 创建新存储桶

1. 点击 **New Bucket** 按钮
2. 填写以下信息：
   - **Name**: `user-uploads`
   - **Public bucket**: ✅ **勾选**（允许公开访问上传的图片）
   - **File size limit**: `2MB`（可选，限制单个文件大小）
   - **Allowed MIME types**: `image/*`（可选，只允许图片）

3. 点击 **Create bucket**

#### 3. 配置存储桶策略

创建存储桶后，需要配置 RLS 策略以允许用户上传和访问文件。

在 Supabase SQL Editor 中运行以下 SQL：

```sql
-- 允许已认证用户上传文件到自己的文件夹
CREATE POLICY "Users can upload their own avatars"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
    bucket_id = 'user-uploads' 
    AND (storage.foldername(name))[1] = 'avatars'
    AND auth.uid()::text = (storage.foldername(name))[2]
);

-- 允许所有人查看公开的头像
CREATE POLICY "Anyone can view avatars"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'user-uploads' AND (storage.foldername(name))[1] = 'avatars');

-- 允许用户删除自己的头像
CREATE POLICY "Users can delete their own avatars"
ON storage.objects
FOR DELETE
TO authenticated
USING (
    bucket_id = 'user-uploads' 
    AND (storage.foldername(name))[1] = 'avatars'
    AND auth.uid()::text = (storage.foldername(name))[2]
);
```

### ✅ 验证设置

1. 在 Storage 页面，你应该看到 `user-uploads` 存储桶
2. 存储桶应该标记为 **Public**
3. 在 Policies 标签页，你应该看到 3 个策略

### 🧪 测试上传

1. 登录应用
2. 访问个人设置页面
3. 点击头像上传图片
4. 上传成功后，头像应该立即显示
5. 刷新页面，头像应该保持不变

---

## 🔧 故障排除

### 问题：上传失败，提示 "Bucket not found"

**解决方案**：
- 确认存储桶名称为 `user-uploads`（区分大小写）
- 确认存储桶已创建并且是公开的

### 问题：上传成功但无法显示图片

**解决方案**：
- 检查存储桶是否设置为 Public
- 检查 RLS 策略是否正确配置
- 在浏览器控制台查看图片 URL 是否可访问

### 问题：403 Forbidden 错误

**解决方案**：
- 检查 RLS 策略是否正确
- 确认用户已登录
- 确认文件路径格式正确：`avatars/{user_id}-{timestamp}.{ext}`

---

## 📝 文件路径结构

上传的头像文件将按以下结构存储：

```
user-uploads/
└── avatars/
    ├── {user_id_1}-1234567890.jpg
    ├── {user_id_1}-1234567891.png
    ├── {user_id_2}-1234567892.jpg
    └── ...
```

这样每个用户的头像都存储在 `avatars/` 文件夹下，文件名包含用户 ID 和时间戳，确保唯一性。

---

## 🎯 完成检查清单

- [ ] 已创建 `user-uploads` 存储桶
- [ ] 存储桶设置为 Public
- [ ] 已运行 RLS 策略 SQL 脚本
- [ ] 已测试头像上传功能
- [ ] 上传的头像能正常显示
- [ ] 刷新页面后头像保持不变

完成所有步骤后，头像上传功能就完全可用了！🎉

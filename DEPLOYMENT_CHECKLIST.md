# ✅ 部署前检查清单

在部署到公网之前，请确保完成以下所有步骤：

## 📦 代码准备

- [x] 项目可以正常构建 (`npm run build` 成功)
- [x] 本地预览正常 (`npm run preview` 可访问)
- [x] 所有功能测试通过
- [x] `.env` 文件已添加到 `.gitignore`
- [x] 创建了 `.env.example` 供参考
- [x] 创建了 `vercel.json` 配置文件

## 🔐 安全检查

- [ ] 确认 `.env` 文件**不会**被提交到 Git
- [ ] API 密钥没有硬编码在代码中
- [ ] Supabase RLS 策略已正确配置
- [ ] 检查代码中没有敏感信息（密码、密钥等）

## 📝 Git 仓库

- [ ] 已初始化 Git 仓库 (`git init`)
- [ ] 已添加所有文件 (`git add .`)
- [ ] 已提交代码 (`git commit -m "Initial commit"`)
- [ ] 已在 GitHub 创建仓库
- [ ] 已推送代码到 GitHub (`git push -u origin main`)

## 🌐 托管平台设置

### Vercel（推荐）

- [ ] 已注册 Vercel 账号
- [ ] 已连接 GitHub 账号
- [ ] 已导入项目到 Vercel
- [ ] 已配置环境变量：
  - [ ] `VITE_DEEPSEEK_API_KEY`
  - [ ] `VITE_SUPABASE_URL`
  - [ ] `VITE_SUPABASE_ANON_KEY`
- [ ] 已触发首次部署
- [ ] 部署成功（检查部署日志）

## 🗄️ Supabase 配置

- [ ] 已在 Supabase 添加部署域名到 Site URL
- [ ] 已在 Supabase 添加部署域名到 Redirect URLs
- [ ] 已测试用户注册/登录功能
- [ ] 已测试数据库读写功能
- [ ] 已配置 `user-uploads` 存储桶（如果使用头像上传）

## 🧪 部署后测试

访问你的部署 URL（例如 `https://你的项目.vercel.app`）并测试：

- [ ] 页面可以正常加载
- [ ] 用户注册功能正常
- [ ] 用户登录功能正常
- [ ] 可以创建新的作业会话
- [ ] 可以上传图片
- [ ] AI 对话功能正常
- [ ] 学习统计页面显示正常
- [ ] 个人设置页面正常
- [ ] 导出功能正常（PDF/Word）
- [ ] 移动端显示正常
- [ ] 刷新页面不会出现 404

## 🎨 可选优化

- [ ] 配置自定义域名
- [ ] 添加 Google Analytics 或其他分析工具
- [ ] 添加 Sentry 错误追踪
- [ ] 优化 SEO（meta 标签、sitemap 等）
- [ ] 配置 PWA（已有基础配置）
- [ ] 添加 favicon 和 app icons

## 📊 监控设置

- [ ] 设置 Vercel Analytics（可选）
- [ ] 设置错误监控（Sentry 等）
- [ ] 设置性能监控
- [ ] 设置 API 使用量监控

## 📢 发布准备

- [ ] 准备好分享链接
- [ ] 准备好使用说明文档
- [ ] 准备好常见问题解答
- [ ] 通知目标用户

---

## 🚀 快速部署命令

如果你已经完成了上述准备，可以使用以下命令快速部署：

### 使用 Git + Vercel 网站

```bash
# 1. 初始化 Git（如果还没有）
git init

# 2. 添加所有文件
git add .

# 3. 提交
git commit -m "Ready for deployment"

# 4. 添加远程仓库（替换为你的 GitHub 仓库地址）
git remote add origin https://github.com/你的用户名/homework-ai.git

# 5. 推送到 GitHub
git branch -M main
git push -u origin main

# 6. 访问 https://vercel.com 导入项目
```

### 使用 Vercel CLI

```bash
# 1. 安装 Vercel CLI
npm install -g vercel

# 2. 登录
vercel login

# 3. 部署
vercel

# 4. 部署到生产环境
vercel --prod
```

---

## ⚠️ 常见问题

### 构建失败

**症状**：Vercel 部署时构建失败

**解决方案**：
1. 检查本地 `npm run build` 是否成功
2. 检查 Node.js 版本是否兼容
3. 查看 Vercel 部署日志中的错误信息
4. 确保所有依赖都在 `package.json` 中

### 环境变量不生效

**症状**：部署后 API 调用失败，提示缺少 API 密钥

**解决方案**：
1. 确认环境变量名以 `VITE_` 开头
2. 在 Vercel 项目设置中重新添加环境变量
3. 重新部署项目

### 路由 404 错误

**症状**：刷新页面后出现 404

**解决方案**：
- 确认 `vercel.json` 文件存在且配置正确
- Vercel 会自动处理 SPA 路由，无需额外配置

### Supabase 连接失败

**症状**：无法登录或数据库操作失败

**解决方案**：
1. 检查 Supabase URL 和 Anon Key 是否正确
2. 在 Supabase Dashboard 中添加部署域名到允许列表
3. 检查 RLS 策略是否正确配置

---

## ✅ 部署成功！

如果所有检查项都已完成，恭喜你！你的应用已经成功部署到公网！

**下一步**：
1. 分享你的应用链接
2. 收集用户反馈
3. 持续优化和改进

**部署 URL**：`https://_____________________.vercel.app`

**部署时间**：`____________________`

**部署状态**：✅ 成功 / ❌ 失败

---

**需要帮助？** 查看 [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) 获取详细说明。

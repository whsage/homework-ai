# 🚀 完整部署流程 - 从零开始

本文档将指导你从零开始，一步步将应用部署到公网。

## ✅ Git 已安装成功！

Git 已经成功安装到你的系统。接下来我们开始部署流程。

---

## 📋 部署流程总览

```
1. 配置 Git 用户信息
   ↓
2. 初始化 Git 仓库
   ↓
3. 提交代码到本地仓库
   ↓
4. 在 GitHub 创建远程仓库
   ↓
5. 推送代码到 GitHub
   ↓
6. 在 Cloudflare Pages 部署
   ↓
7. 配置 Supabase
   ↓
8. 测试应用
```

---

## 步骤 1：配置 Git 用户信息

打开新的 PowerShell 窗口，运行以下命令：

```powershell
# 配置你的用户名（替换为你的名字）
git config --global user.name "你的名字"

# 配置你的邮箱（替换为你的邮箱）
git config --global user.email "your.email@example.com"

# 验证配置
git config --global --list
```

**示例**：
```powershell
git config --global user.name "Zhang San"
git config --global user.email "zhangsan@example.com"
```

---

## 步骤 2：初始化 Git 仓库

在项目目录运行：

```powershell
# 进入项目目录
cd d:\wenh\AI\homework

# 初始化 Git 仓库
git init

# 查看状态
git status
```

你应该看到很多 "Untracked files"（未跟踪的文件）。

---

## 步骤 3：提交代码到本地仓库

```powershell
# 添加所有文件到暂存区
git add .

# 提交到本地仓库
git commit -m "Initial commit - 智能作业辅导系统"

# 查看提交历史
git log --oneline
```

---

## 步骤 4：在 GitHub 创建远程仓库

### 4.1 注册/登录 GitHub

1. 访问 https://github.com
2. 如果没有账号，点击 "Sign up" 注册
3. 如果有账号，点击 "Sign in" 登录

### 4.2 创建新仓库

1. 登录后，点击右上角的 "+" → "New repository"
2. 填写仓库信息：
   - **Repository name**: `homework-ai`（或你喜欢的名字）
   - **Description**: `智能作业辅导系统 - AI Homework Tutor`
   - **Public/Private**: 选择 Public（公开）
   - **不要勾选** "Add a README file"
   - **不要勾选** "Add .gitignore"
   - **不要勾选** "Choose a license"
3. 点击 "Create repository"

### 4.3 复制仓库 URL

创建成功后，你会看到一个页面，复制 HTTPS URL，类似：
```
https://github.com/你的用户名/homework-ai.git
```

---

## 步骤 5：推送代码到 GitHub

在项目目录运行（替换为你的仓库 URL）：

```powershell
# 添加远程仓库
git remote add origin https://github.com/你的用户名/homework-ai.git

# 重命名分支为 main
git branch -M main

# 推送代码到 GitHub
git push -u origin main
```

**第一次推送时**，可能会弹出登录窗口：
- 选择 "Sign in with your browser"
- 在浏览器中登录 GitHub
- 授权 Git Credential Manager

推送成功后，刷新 GitHub 仓库页面，你应该能看到所有代码。

---

## 步骤 6：在 Cloudflare Pages 部署

### 6.1 注册 Cloudflare 账号

1. 访问 https://dash.cloudflare.com/sign-up
2. 填写邮箱和密码
3. 验证邮箱

### 6.2 创建 Pages 项目

1. 登录 Cloudflare Dashboard
2. 点击左侧菜单 **"Workers & Pages"**
3. 点击 **"Create application"**
4. 选择 **"Pages"** 标签
5. 点击 **"Connect to Git"**

### 6.3 连接 GitHub

1. 点击 **"Connect GitHub"**
2. 授权 Cloudflare 访问你的 GitHub
3. 选择 **"Only select repositories"**
4. 选择 `homework-ai` 仓库
5. 点击 **"Install & Authorize"**

### 6.4 配置构建设置

1. **Project name**: `homework-ai`（或你喜欢的名字）
2. **Production branch**: `main`
3. **Framework preset**: 选择 **"Vite"**
4. **Build command**: `npm run build`（自动填充）
5. **Build output directory**: `dist`（自动填充）

### 6.5 配置环境变量

点击 **"Environment variables (advanced)"**，添加以下 3 个变量：

**变量 1**：
- Variable name: `VITE_DEEPSEEK_API_KEY`
- Value: `sk-0b67ccdea6694d91b17cdae54087f5cb`
- 点击 "Add variable"

**变量 2**：
- Variable name: `VITE_SUPABASE_URL`
- Value: `https://vfeodsgjtcnwqmrjhkxu.supabase.co`
- 点击 "Add variable"

**变量 3**：
- Variable name: `VITE_SUPABASE_ANON_KEY`
- Value: `sb_publishable_YwwhU7RWpO2TpHkzW_JMdA_4FMtWHln`
- 点击 "Add variable"

### 6.6 开始部署

1. 点击 **"Save and Deploy"**
2. 等待构建完成（约 1-2 分钟）
3. 部署成功后，你会看到：
   ```
   Success! Your site is live at:
   https://homework-ai-xxx.pages.dev
   ```

---

## 步骤 7：配置 Supabase

### 7.1 添加部署域名

1. 登录 Supabase Dashboard: https://supabase.com/dashboard
2. 选择你的项目
3. 进入 **Settings** → **API**
4. 找到 **Site URL**，点击编辑
5. 添加你的 Cloudflare Pages URL：
   ```
   https://homework-ai-xxx.pages.dev
   ```
6. 点击 "Save"

### 7.2 配置认证重定向

1. 在 Supabase Dashboard，进入 **Authentication** → **URL Configuration**
2. 在 **Redirect URLs** 中添加：
   ```
   https://homework-ai-xxx.pages.dev/**
   ```
3. 点击 "Save"

---

## 步骤 8：测试应用

### 8.1 访问你的应用

在浏览器中打开你的 Cloudflare Pages URL：
```
https://homework-ai-xxx.pages.dev
```

### 8.2 测试功能清单

- [ ] 页面能正常加载
- [ ] 用户注册功能正常
- [ ] 用户登录功能正常
- [ ] 可以创建新的作业会话
- [ ] 可以上传图片
- [ ] AI 对话功能正常
- [ ] 学习统计页面显示正常
- [ ] 个人设置页面正常
- [ ] 导出功能正常（PDF/Word）
- [ ] 手机访问正常

### 8.3 测试国内访问

使用以下工具测试国内访问速度：
- https://www.17ce.com （全国访问速度测试）
- https://ping.chinaz.com （Ping 测试）

---

## 🎉 部署成功！

恭喜！你的应用已经成功部署到公网，现在可以：

1. ✅ 分享链接给朋友使用
2. ✅ 在手机上访问
3. ✅ 随时更新代码（推送到 GitHub 即自动部署）

---

## 🔄 如何更新应用

以后如果修改了代码，只需要：

```powershell
# 1. 添加修改的文件
git add .

# 2. 提交修改
git commit -m "描述你的修改"

# 3. 推送到 GitHub
git push

# Cloudflare Pages 会自动检测并重新部署！
```

---

## 📱 下一步优化（可选）

### 1. 绑定自定义域名

如果你有自己的域名：
1. 在 Cloudflare Pages 项目设置中点击 "Custom domains"
2. 添加你的域名
3. 按照提示配置 DNS

### 2. 配置 PWA

应用已经包含基础 PWA 配置，用户可以：
- 在手机浏览器中点击 "添加到主屏幕"
- 像原生 App 一样使用

### 3. 添加分析工具

可以添加：
- 百度统计（国内）
- Google Analytics（国际）
- Cloudflare Analytics（自带）

---

## ❓ 常见问题

### Q: 推送到 GitHub 时要求登录怎么办？

**A**: 选择 "Sign in with your browser"，在浏览器中登录 GitHub 并授权。

### Q: 构建失败怎么办？

**A**: 
1. 检查 Cloudflare Pages 的构建日志
2. 确认环境变量是否正确添加
3. 确认本地 `npm run build` 能成功

### Q: 国内访问慢怎么办？

**A**: 
1. 等待 DNS 完全解析（可能需要几小时）
2. 尝试绑定自定义域名
3. 考虑使用腾讯云 Webify

### Q: 如何查看部署日志？

**A**: 
1. 在 Cloudflare Pages 项目页面
2. 点击 "Deployments"
3. 点击任意部署记录查看详细日志

---

## 📞 需要帮助？

如果遇到问题：
1. 查看 Cloudflare Pages 文档：https://developers.cloudflare.com/pages
2. 查看项目中的其他部署文档
3. 检查浏览器控制台错误信息

---

**祝你部署顺利！🚀**

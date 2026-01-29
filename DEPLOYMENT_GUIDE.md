# 🚀 部署到公网指南

本文档将指导你如何将作业辅导应用部署到公网，让所有人都能访问。

## 📋 部署前准备

### 1. 确保项目可以正常构建

在部署前，先在本地测试构建：

```bash
npm run build
```

如果构建成功，会在 `dist` 目录生成生产版本文件。

### 2. 测试生产版本

```bash
npm run preview
```

访问 http://localhost:4173 查看生产版本是否正常运行。

---

## 🌐 方案一：使用 Vercel 部署（推荐 ⭐⭐⭐⭐⭐）

**优势**：免费、快速、自动 CI/CD、全球 CDN

### 步骤 1：注册 Vercel 账号

1. 访问 https://vercel.com
2. 点击 "Sign Up" 注册账号
3. 建议使用 GitHub 账号登录（方便后续部署）

### 步骤 2：安装 Vercel CLI（可选）

```bash
npm install -g vercel
```

### 步骤 3：推送代码到 GitHub

如果还没有 Git 仓库：

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit - Ready for deployment"

# 在 GitHub 上创建新仓库，然后关联
git remote add origin https://github.com/你的用户名/homework-ai.git
git branch -M main
git push -u origin main
```

### 步骤 4：在 Vercel 导入项目

#### 方法 A：通过 Vercel 网站（推荐）

1. 登录 https://vercel.com
2. 点击 "Add New..." → "Project"
3. 选择 "Import Git Repository"
4. 授权 Vercel 访问你的 GitHub
5. 选择 `homework-ai` 仓库
6. 配置项目：
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

7. **配置环境变量**（重要！）：
   点击 "Environment Variables"，添加以下变量：
   ```
   VITE_DEEPSEEK_API_KEY = sk-0b67ccdea6694d91b17cdae54087f5cb
   VITE_SUPABASE_URL = https://vfeodsgjtcnwqmrjhkxu.supabase.co
   VITE_SUPABASE_ANON_KEY = sb_publishable_YwwhU7RWpO2TpHkzW_JMdA_4FMtWHln
   ```

8. 点击 "Deploy"

#### 方法 B：通过 Vercel CLI

```bash
# 登录 Vercel
vercel login

# 部署
vercel

# 按照提示操作：
# - Set up and deploy? Yes
# - Which scope? 选择你的账号
# - Link to existing project? No
# - What's your project's name? homework-ai
# - In which directory is your code located? ./
# - Want to override the settings? No

# 部署到生产环境
vercel --prod
```

### 步骤 5：配置环境变量（CLI 方式）

```bash
# 添加环境变量
vercel env add VITE_DEEPSEEK_API_KEY
# 输入: sk-0b67ccdea6694d91b17cdae54087f5cb
# 选择环境: Production, Preview, Development (全选)

vercel env add VITE_SUPABASE_URL
# 输入: https://vfeodsgjtcnwqmrjhkxu.supabase.co

vercel env add VITE_SUPABASE_ANON_KEY
# 输入: sb_publishable_YwwhU7RWpO2TpHkzW_JMdA_4FMtWHln

# 重新部署以应用环境变量
vercel --prod
```

### 步骤 6：访问你的应用

部署成功后，Vercel 会提供一个 URL，例如：
```
https://homework-ai.vercel.app
```

---

## 🌐 方案二：使用 Netlify 部署

### 步骤 1：注册 Netlify

访问 https://www.netlify.com 并注册账号

### 步骤 2：部署

#### 方法 A：通过网站

1. 登录 Netlify
2. 点击 "Add new site" → "Import an existing project"
3. 选择 GitHub，授权并选择仓库
4. 配置构建设置：
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. 添加环境变量（在 Site settings → Environment variables）
6. 点击 "Deploy site"

#### 方法 B：通过 Netlify CLI

```bash
# 安装 Netlify CLI
npm install -g netlify-cli

# 登录
netlify login

# 初始化并部署
netlify init

# 部署到生产环境
netlify deploy --prod
```

---

## 🌐 方案三：使用 Cloudflare Pages

### 步骤 1：注册 Cloudflare

访问 https://pages.cloudflare.com

### 步骤 2：部署

1. 登录 Cloudflare Pages
2. 点击 "Create a project"
3. 连接 GitHub 并选择仓库
4. 配置构建：
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. 添加环境变量
6. 点击 "Save and Deploy"

---

## ⚙️ Supabase 配置

确保 Supabase 允许来自任何域名的请求：

1. 登录 Supabase Dashboard
2. 进入项目设置 → API
3. 确认 "Site URL" 包含你的部署域名
4. 在 Authentication → URL Configuration 中添加：
   - **Site URL**: `https://你的域名.vercel.app`
   - **Redirect URLs**: `https://你的域名.vercel.app/**`

---

## 🔒 安全建议

### 1. API 密钥管理

- ✅ 已将 `.env` 添加到 `.gitignore`
- ✅ 使用托管平台的环境变量功能
- ⚠️ 不要在代码中硬编码 API 密钥

### 2. DeepSeek API 限制

考虑在后端添加速率限制，防止 API 滥用：
- 可以使用 Vercel Serverless Functions
- 或者使用 Supabase Edge Functions

### 3. Supabase RLS（行级安全）

确保已经配置好 RLS 策略，防止数据泄露。

---

## 🎨 自定义域名（可选）

### Vercel

1. 在项目设置中点击 "Domains"
2. 添加你的域名
3. 按照提示配置 DNS 记录

### Netlify

1. 在 Site settings → Domain management
2. 添加自定义域名
3. 配置 DNS

---

## 🔄 自动部署

所有平台都支持自动部署：

- **推送到 main 分支** → 自动部署到生产环境
- **推送到其他分支** → 自动部署到预览环境

---

## 📊 监控和分析

### Vercel Analytics

```bash
npm install @vercel/analytics
```

在 `src/main.jsx` 中添加：

```javascript
import { inject } from '@vercel/analytics';

inject();
```

### Google Analytics

在 `index.html` 中添加 GA 代码。

---

## 🐛 常见问题

### 1. 构建失败

**问题**：`npm run build` 失败

**解决**：
```bash
# 清除缓存
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 2. 环境变量不生效

**问题**：部署后 API 调用失败

**解决**：
- 确保环境变量名以 `VITE_` 开头
- 在托管平台重新添加环境变量
- 重新部署

### 3. 路由 404 错误

**问题**：刷新页面后出现 404

**解决**：
- Vercel: 已通过 `vercel.json` 配置解决
- Netlify: 创建 `public/_redirects` 文件：
  ```
  /*    /index.html   200
  ```

### 4. CORS 错误

**问题**：API 请求被 CORS 阻止

**解决**：
- 在 Supabase 中添加部署域名到允许列表
- 检查 API 端点的 CORS 配置

---

## ✅ 部署检查清单

- [ ] 本地构建成功 (`npm run build`)
- [ ] 本地预览正常 (`npm run preview`)
- [ ] `.env` 已添加到 `.gitignore`
- [ ] 代码已推送到 GitHub
- [ ] 在托管平台配置环境变量
- [ ] 部署成功
- [ ] 测试所有功能（登录、上传、AI 对话等）
- [ ] Supabase 配置正确的 Site URL
- [ ] （可选）配置自定义域名
- [ ] （可选）添加分析工具

---

## 🎉 完成！

恭喜！你的应用现在已经部署到公网，可以分享给任何人使用了！

**下一步建议**：
1. 配置 PWA，让用户可以"添加到主屏幕"
2. 添加分析工具，了解用户使用情况
3. 设置监控和错误追踪（如 Sentry）
4. 优化性能和 SEO

---

## 📞 需要帮助？

如果遇到问题，可以：
1. 查看托管平台的部署日志
2. 检查浏览器控制台错误
3. 查看 Supabase 日志
4. 参考官方文档：
   - Vercel: https://vercel.com/docs
   - Netlify: https://docs.netlify.com
   - Cloudflare Pages: https://developers.cloudflare.com/pages

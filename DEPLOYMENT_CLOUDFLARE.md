# 🌐 Cloudflare Pages 部署指南（国内访问优化）

Cloudflare Pages 是最适合国内访问的免费托管平台之一。

## ✨ 优势

- ✅ **国内可直接访问**，无需翻墙
- ✅ **完全免费**，无限带宽
- ✅ **访问速度快**，Cloudflare 在国内有合作节点
- ✅ **自动 HTTPS**
- ✅ **自动部署**，推送代码即部署

## 📋 部署步骤

### 步骤 1：注册 Cloudflare 账号

1. 访问 https://dash.cloudflare.com/sign-up
2. 使用邮箱注册（建议使用 Gmail 或 QQ 邮箱）
3. 验证邮箱

### 步骤 2：推送代码到 GitHub

```bash
# 初始化 Git（如果还没有）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Ready for Cloudflare Pages deployment"

# 创建 GitHub 仓库后，添加远程仓库
git remote add origin https://github.com/你的用户名/homework-ai.git
git branch -M main
git push -u origin main
```

### 步骤 3：创建 Cloudflare Pages 项目

1. 登录 Cloudflare Dashboard
2. 点击左侧菜单 **"Workers & Pages"**
3. 点击 **"Create application"**
4. 选择 **"Pages"** 标签
5. 点击 **"Connect to Git"**

### 步骤 4：连接 GitHub

1. 点击 **"Connect GitHub"**
2. 授权 Cloudflare 访问你的 GitHub
3. 选择 `homework-ai` 仓库
4. 点击 **"Begin setup"**

### 步骤 5：配置构建设置

在 "Set up builds and deployments" 页面：

- **Project name**: `homework-ai`（或你喜欢的名字）
- **Production branch**: `main`
- **Framework preset**: `Vite`（会自动选择）
- **Build command**: `npm run build`
- **Build output directory**: `dist`

### 步骤 6：配置环境变量

点击 **"Environment variables (advanced)"**，添加以下变量：

```
VITE_DEEPSEEK_API_KEY = sk-0b67ccdea6694d91b17cdae54087f5cb
VITE_SUPABASE_URL = https://vfeodsgjtcnwqmrjhkxu.supabase.co
VITE_SUPABASE_ANON_KEY = sb_publishable_YwwhU7RWpO2TpHkzW_JMdA_4FMtWHln
```

**注意**：每个变量都要点击 "Add variable" 添加。

### 步骤 7：部署

1. 点击 **"Save and Deploy"**
2. 等待构建完成（约 1-2 分钟）
3. 部署成功后，你会得到一个 URL：
   ```
   https://homework-ai.pages.dev
   ```

## 🌐 访问你的应用

部署成功后，你可以通过以下 URL 访问：

- **Cloudflare Pages URL**: `https://你的项目名.pages.dev`
- **自定义域名**（可选）：可以绑定自己的域名

## 🇨🇳 国内访问优化

### 1. 测试访问速度

在国内不同地区测试访问速度：
- 使用 https://www.17ce.com 测试全国访问速度
- 使用 https://ping.chinaz.com 测试 ping 值

### 2. 绑定自定义域名（推荐）

如果你有自己的域名，绑定后访问会更稳定：

1. 在 Cloudflare Pages 项目设置中点击 **"Custom domains"**
2. 点击 **"Set up a custom domain"**
3. 输入你的域名（如 `homework.example.com`）
4. 按照提示配置 DNS 记录
5. 等待 DNS 生效（通常几分钟）

### 3. 使用国内 DNS 解析

如果你有域名，可以使用：
- 阿里云 DNS
- 腾讯云 DNSPod
- Cloudflare DNS（也支持国内）

## 🔄 自动部署

配置完成后，每次推送代码到 GitHub，Cloudflare Pages 会自动：

1. 检测到代码变更
2. 自动构建
3. 自动部署
4. 更新线上版本

```bash
# 更新代码并自动部署
git add .
git commit -m "Update features"
git push
```

## ⚙️ Supabase 配置

部署成功后，需要在 Supabase 中添加你的域名：

1. 登录 Supabase Dashboard
2. 进入项目设置 → **API**
3. 在 **Site URL** 添加：
   ```
   https://你的项目名.pages.dev
   ```
4. 进入 **Authentication** → **URL Configuration**
5. 在 **Redirect URLs** 添加：
   ```
   https://你的项目名.pages.dev/**
   ```

## 📊 监控和分析

### Cloudflare Analytics

Cloudflare Pages 自带免费的分析功能：

1. 在项目页面点击 **"Analytics"**
2. 查看访问量、带宽使用等数据
3. 查看访问者地理分布

### 查看部署日志

1. 在项目页面点击 **"Deployments"**
2. 点击任意部署记录
3. 查看构建日志和部署详情

## 🐛 常见问题

### 1. 构建失败

**问题**：部署时构建失败

**解决**：
1. 检查本地 `npm run build` 是否成功
2. 查看 Cloudflare Pages 的构建日志
3. 确认 Node.js 版本（Cloudflare 默认使用 Node 18）

### 2. 环境变量不生效

**问题**：部署后 API 调用失败

**解决**：
1. 确认环境变量名以 `VITE_` 开头
2. 重新部署项目（环境变量修改后需要重新部署）
3. 检查变量值是否正确

### 3. 国内访问慢

**问题**：部分地区访问速度慢

**解决**：
1. 绑定自定义域名
2. 使用国内 DNS 解析服务
3. 考虑使用腾讯云 Webify 或阿里云 OSS

### 4. 路由 404

**问题**：刷新页面出现 404

**解决**：
- Cloudflare Pages 自动处理 SPA 路由，无需额外配置
- 如果仍有问题，检查 `dist` 目录是否包含 `index.html`

## 🚀 高级配置

### 1. 配置 Headers

创建 `public/_headers` 文件：

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

### 2. 配置 Redirects

创建 `public/_redirects` 文件：

```
/api/* https://api.example.com/:splat 200
```

### 3. 配置 Functions（可选）

Cloudflare Pages 支持 Serverless Functions：

```javascript
// functions/api/hello.js
export async function onRequest(context) {
  return new Response("Hello from Cloudflare Pages!");
}
```

## 💰 费用说明

Cloudflare Pages **完全免费**，包括：

- ✅ 无限带宽
- ✅ 无限请求
- ✅ 500 次构建/月
- ✅ 1 次并发构建
- ✅ 自动 HTTPS
- ✅ 全球 CDN

**付费升级**（可选）：
- 更多并发构建
- 更快的构建速度
- 更多的构建时间

## 📞 需要帮助？

- Cloudflare Pages 文档：https://developers.cloudflare.com/pages
- Cloudflare 社区：https://community.cloudflare.com
- Cloudflare 支持：https://support.cloudflare.com

---

## ✅ 部署成功！

部署完成后，你的应用将在以下 URL 可访问：

**生产环境**：`https://homework-ai.pages.dev`

**国内访问**：✅ 稳定快速

**下一步**：
1. 测试所有功能
2. 配置 Supabase
3. 分享给用户使用
4. （可选）绑定自定义域名

---

**Made with ❤️ for Chinese users**

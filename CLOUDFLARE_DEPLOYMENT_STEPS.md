# 🌐 Cloudflare Pages 部署步骤

在完成 Git 推送后，按照以下步骤部署到 Cloudflare Pages。

---

## 📋 前置条件

✅ 代码已成功推送到 GitHub
✅ GitHub 仓库地址：https://github.com/whsage/homework-ai

---

## 🚀 部署步骤

### 步骤 1：注册 Cloudflare 账号

1. 访问：https://dash.cloudflare.com/sign-up
2. 填写信息：
   - **Email**: whsage@qq.com（或其他邮箱）
   - **Password**: 设置一个密码
3. 点击 "Create Account"
4. 查收邮件并验证邮箱

---

### 步骤 2：进入 Cloudflare Pages

1. 登录 Cloudflare Dashboard
2. 点击左侧菜单 **"Workers & Pages"**
3. 点击 **"Create application"** 按钮
4. 选择 **"Pages"** 标签
5. 点击 **"Connect to Git"** 按钮

---

### 步骤 3：连接 GitHub

1. 点击 **"Connect GitHub"** 按钮
2. 在弹出的窗口中：
   - 登录 GitHub（如果还没登录）
   - 用户名：whsage@qq.com
   - 密码：Wh@821022
3. 选择 **"Only select repositories"**
4. 从下拉菜单中选择 **"homework-ai"**
5. 点击 **"Install & Authorize"** 按钮
6. 返回 Cloudflare Pages

---

### 步骤 4：配置项目设置

在 "Set up builds and deployments" 页面填写：

#### 基本设置
- **Project name**: `homework-ai`（或你喜欢的名字）
- **Production branch**: `main`

#### 构建设置
- **Framework preset**: 选择 **"Vite"**
- **Build command**: `npm run build`（自动填充）
- **Build output directory**: `dist`（自动填充）

---

### 步骤 5：配置环境变量（重要！）

点击 **"Environment variables (advanced)"** 展开，然后添加以下 3 个变量：

#### 变量 1：DeepSeek API Key
- **Variable name**: `VITE_DEEPSEEK_API_KEY`
- **Value**: `sk-0b67ccdea6694d91b17cdae54087f5cb`
- 点击 **"Add variable"**

#### 变量 2：Supabase URL
- **Variable name**: `VITE_SUPABASE_URL`
- **Value**: `https://vfeodsgjtcnwqmrjhkxu.supabase.co`
- 点击 **"Add variable"**

#### 变量 3：Supabase Anon Key
- **Variable name**: `VITE_SUPABASE_ANON_KEY`
- **Value**: `sb_publishable_YwwhU7RWpO2TpHkzW_JMdA_4FMtWHln`
- 点击 **"Add variable"**

⚠️ **注意**：确保每个变量名都以 `VITE_` 开头！

---

### 步骤 6：开始部署

1. 检查所有设置是否正确
2. 点击 **"Save and Deploy"** 按钮
3. 等待构建完成（约 1-2 分钟）

#### 构建过程中你会看到：
- ⏳ Installing dependencies...
- ⏳ Building application...
- ⏳ Deploying to Cloudflare's global network...
- ✅ Success!

---

### 步骤 7：获取部署 URL

部署成功后，你会看到：

```
✅ Success! Your site is live at:
https://homework-ai-xxx.pages.dev
```

**复制这个 URL**，这就是你的应用地址！

---

## ⚙️ 配置 Supabase

部署成功后，需要在 Supabase 中添加你的域名：

### 7.1 添加 Site URL

1. 访问：https://supabase.com/dashboard
2. 登录你的 Supabase 账号
3. 选择你的项目
4. 进入 **Settings** → **API**
5. 找到 **Site URL**，点击编辑
6. 输入你的 Cloudflare Pages URL：
   ```
   https://homework-ai-xxx.pages.dev
   ```
7. 点击 **"Save"**

### 7.2 配置认证重定向

1. 在 Supabase Dashboard，进入 **Authentication** → **URL Configuration**
2. 在 **Redirect URLs** 中点击 **"Add URL"**
3. 输入：
   ```
   https://homework-ai-xxx.pages.dev/**
   ```
4. 点击 **"Save"**

---

## 🧪 测试应用

### 8.1 访问应用

在浏览器中打开你的 Cloudflare Pages URL：
```
https://homework-ai-xxx.pages.dev
```

### 8.2 功能测试清单

- [ ] 页面能正常加载
- [ ] 点击"注册"按钮
- [ ] 填写邮箱和密码
- [ ] 成功注册并登录
- [ ] 创建新的作业会话
- [ ] 上传图片测试
- [ ] AI 对话功能测试
- [ ] 查看学习统计页面
- [ ] 个人设置页面
- [ ] 导出功能测试

### 8.3 手机测试

用手机浏览器访问相同的 URL，测试：
- [ ] 响应式布局正常
- [ ] 触摸交互流畅
- [ ] 图片上传正常
- [ ] 所有功能可用

---

## 🇨🇳 测试国内访问速度

使用以下工具测试国内访问速度：

1. **全国访问速度测试**
   - 访问：https://www.17ce.com
   - 输入你的 URL
   - 点击"测试"
   - 查看全国各地的访问速度

2. **Ping 测试**
   - 访问：https://ping.chinaz.com
   - 输入你的 URL
   - 查看延迟情况

---

## 🔄 如何更新应用

以后如果修改了代码，只需要：

```powershell
# 1. 添加修改的文件
git add .

# 2. 提交修改
git commit -m "描述你的修改内容"

# 3. 推送到 GitHub
git push
```

**Cloudflare Pages 会自动检测并重新部署！**

---

## 📊 查看部署历史

1. 登录 Cloudflare Dashboard
2. 进入你的 Pages 项目
3. 点击 **"Deployments"** 标签
4. 查看所有部署记录和日志

---

## 🐛 常见问题

### Q: 构建失败怎么办？

**A**: 
1. 点击失败的部署记录
2. 查看构建日志
3. 常见原因：
   - 环境变量未配置
   - 依赖安装失败
   - 构建命令错误

### Q: 页面显示 404

**A**: 
1. 检查 Build output directory 是否为 `dist`
2. 确认本地 `npm run build` 能成功
3. 重新部署

### Q: API 调用失败

**A**: 
1. 检查环境变量是否正确添加
2. 确认变量名以 `VITE_` 开头
3. 重新部署（修改环境变量后需要重新部署）

### Q: 登录功能不可用

**A**: 
1. 检查 Supabase 配置
2. 确认 Site URL 和 Redirect URLs 已添加
3. 检查浏览器控制台错误信息

---

## 🎉 部署成功！

恭喜！你的应用现在已经部署到公网，可以：

✅ 分享链接给朋友使用
✅ 在手机上访问
✅ 随时更新代码（推送即部署）

---

## 📱 下一步优化（可选）

### 1. 绑定自定义域名

如果你有自己的域名：
1. 在 Cloudflare Pages 项目设置中点击 **"Custom domains"**
2. 点击 **"Set up a custom domain"**
3. 输入你的域名
4. 按照提示配置 DNS 记录

### 2. 配置 PWA

应用已经包含基础 PWA 配置，用户可以：
- 在手机浏览器中点击 "添加到主屏幕"
- 像原生 App 一样使用

### 3. 添加分析工具

可以添加：
- 百度统计（国内用户）
- Google Analytics（国际用户）
- Cloudflare Web Analytics（自带，免费）

---

## 📞 需要帮助？

如果遇到问题：
1. 查看 Cloudflare Pages 文档：https://developers.cloudflare.com/pages
2. 查看部署日志
3. 检查浏览器控制台错误

---

**祝你部署顺利！🚀**

**你的应用地址**：`https://homework-ai-xxx.pages.dev`（部署后替换）

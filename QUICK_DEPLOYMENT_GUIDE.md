# 🚀 部署快速参考卡

## 📝 你的账号信息

- **GitHub 用户名**: whsage@qq.com
- **GitHub 密码**: Wh@821022
- **项目仓库**: https://github.com/whsage/homework-ai

---

## ⚡ 快速部署流程

### 第一步：Git 配置和推送（10分钟）

**打开新的 PowerShell 窗口**，执行：

```powershell
# 1. 配置 Git
git config --global user.name "whsage"
git config --global user.email "whsage@qq.com"

# 2. 进入项目目录
cd d:\wenh\AI\homework

# 3. 初始化 Git
git init

# 4. 添加所有文件
git add .

# 5. 提交
git commit -m "Initial commit - 智能作业辅导系统"

# 6. 在 GitHub 创建仓库后，连接远程仓库
git remote add origin https://github.com/whsage/homework-ai.git

# 7. 推送到 GitHub
git branch -M main
git push -u origin main
```

**登录提示**：推送时会弹出登录窗口，选择 "Sign in with your browser"

---

### 第二步：创建 GitHub 仓库（2分钟）

1. 访问：https://github.com/new
2. 仓库名：`homework-ai`
3. 选择：Public
4. **不要勾选**任何选项
5. 点击 "Create repository"

---

### 第三步：部署到 Cloudflare Pages（5分钟）

1. 访问：https://dash.cloudflare.com/sign-up
2. 注册/登录 Cloudflare
3. Workers & Pages → Create application → Pages
4. Connect to Git → Connect GitHub
5. 选择 `homework-ai` 仓库
6. 配置构建：
   - Framework: **Vite**
   - Build command: `npm run build`
   - Output: `dist`
7. 添加环境变量（3个）：
   ```
   VITE_DEEPSEEK_API_KEY = sk-0b67ccdea6694d91b17cdae54087f5cb
   VITE_SUPABASE_URL = https://vfeodsgjtcnwqmrjhkxu.supabase.co
   VITE_SUPABASE_ANON_KEY = sb_publishable_YwwhU7RWpO2TpHkzW_JMdA_4FMtWHln
   ```
8. Save and Deploy

---

### 第四步：配置 Supabase（2分钟）

1. 访问：https://supabase.com/dashboard
2. Settings → API → Site URL
3. 添加你的 Cloudflare Pages URL
4. Authentication → URL Configuration → Redirect URLs
5. 添加：`https://你的域名.pages.dev/**`

---

## 📚 详细文档

- **GIT_DEPLOYMENT_SCRIPT.ps1** - Git 部署脚本
- **CLOUDFLARE_DEPLOYMENT_STEPS.md** - Cloudflare 详细步骤
- **DEPLOYMENT_STEP_BY_STEP.md** - 完整分步指南

---

## ✅ 检查清单

### Git 推送
- [ ] Git 已安装
- [ ] Git 用户信息已配置
- [ ] GitHub 仓库已创建
- [ ] 代码已推送到 GitHub

### Cloudflare 部署
- [ ] Cloudflare 账号已注册
- [ ] GitHub 已连接
- [ ] 构建设置已配置
- [ ] 环境变量已添加（3个）
- [ ] 部署成功

### Supabase 配置
- [ ] Site URL 已添加
- [ ] Redirect URLs 已添加

### 功能测试
- [ ] 页面可以访问
- [ ] 用户注册/登录正常
- [ ] AI 对话功能正常
- [ ] 手机访问正常

---

## 🆘 遇到问题？

### Git 命令不可用
**解决**：打开新的 PowerShell 窗口

### 推送失败
**解决**：检查 GitHub 仓库是否已创建

### 构建失败
**解决**：检查环境变量是否正确添加

### 登录不可用
**解决**：检查 Supabase 配置

---

## 🎯 预期结果

部署成功后，你会得到：

✅ 一个公网可访问的 URL：`https://homework-ai-xxx.pages.dev`
✅ 国内用户可以直接访问
✅ 所有功能正常运行
✅ 推送代码即自动部署

---

## 📞 下一步

部署成功后：
1. 测试所有功能
2. 分享链接给用户
3. 收集反馈
4. 持续优化

---

**开始时间**：_______________
**完成时间**：_______________
**部署 URL**：_______________

**Good luck! 🚀**

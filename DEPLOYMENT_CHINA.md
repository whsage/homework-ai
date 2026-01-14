# 🇨🇳 国内访问部署方案对比

本文档对比了适合中国大陆用户访问的各种部署方案。

## 📊 方案对比总览

| 平台 | 国内访问 | 部署难度 | 费用 | 速度 | 推荐度 |
|------|---------|---------|------|------|--------|
| **Cloudflare Pages** | ✅ 优秀 | ⭐⭐⭐ 简单 | 免费 | 快 | ⭐⭐⭐⭐⭐ |
| **Vercel** | ✅ 良好 | ⭐⭐⭐⭐⭐ 最简单 | 免费 | 较快 | ⭐⭐⭐⭐ |
| **腾讯云 Webify** | ✅ 极佳 | ⭐⭐⭐ 简单 | 免费额度 | 极快 | ⭐⭐⭐⭐⭐ |
| **阿里云 OSS** | ✅ 极佳 | ⭐⭐ 中等 | 按量付费 | 极快 | ⭐⭐⭐⭐ |
| **GitHub Pages** | ⚠️ 需代理 | ⭐⭐⭐⭐ 简单 | 免费 | 慢 | ⭐⭐ |

---

## 🌟 方案一：Cloudflare Pages（推荐）

### 优势
- ✅ **国内访问稳定**：Cloudflare 在国内有合作节点
- ✅ **完全免费**：无限带宽，无限请求
- ✅ **部署简单**：连接 GitHub 即可
- ✅ **自动 HTTPS**
- ✅ **全球 CDN**

### 劣势
- ⚠️ 部分地区可能需要等待 DNS 解析
- ⚠️ 首次访问可能稍慢

### 适用场景
- ✅ 个人项目
- ✅ 中小型应用
- ✅ 需要全球访问的项目

### 部署指南
详见 [DEPLOYMENT_CLOUDFLARE.md](./DEPLOYMENT_CLOUDFLARE.md)

---

## 🌟 方案二：Vercel（国际主流）

### 优势
- ✅ **部署最简单**：一键部署
- ✅ **功能最强大**：Serverless Functions、Edge Functions
- ✅ **开发体验好**：预览部署、自动优化
- ✅ **免费额度充足**

### 劣势
- ⚠️ 部分地区访问可能不稳定
- ⚠️ 需要绑定域名以获得更好体验

### 适用场景
- ✅ 技术团队项目
- ✅ 需要 Serverless 功能
- ✅ 国际化应用

### 部署指南
详见 [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) 中的 Vercel 部分

---

## 🌟 方案三：腾讯云 Webify（国内最佳）

### 优势
- ✅ **国内访问最快**：腾讯云国内节点
- ✅ **稳定性高**：国内服务商
- ✅ **免费额度**：每月免费额度
- ✅ **集成好**：与腾讯云其他服务集成

### 劣势
- ⚠️ 需要实名认证
- ⚠️ 需要备案（绑定自定义域名时）
- ⚠️ 免费额度有限

### 适用场景
- ✅ 纯国内用户
- ✅ 商业项目
- ✅ 需要极致速度

### 部署步骤

#### 1. 注册腾讯云账号
访问 https://webify.cloudbase.net

#### 2. 实名认证
使用微信/QQ 登录并完成实名认证

#### 3. 创建应用
1. 点击 "新建应用"
2. 选择 "从 Git 导入"
3. 连接 GitHub 仓库

#### 4. 配置构建
```
构建命令：npm run build
输出目录：dist
```

#### 5. 配置环境变量
添加以下环境变量：
```
VITE_DEEPSEEK_API_KEY
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

#### 6. 部署
点击 "部署" 并等待完成

### 费用说明
- 免费额度：每月 5GB 流量
- 超出后：¥0.18/GB

---

## 🌟 方案四：阿里云 OSS + CDN

### 优势
- ✅ **国内访问最稳定**
- ✅ **速度极快**：阿里云 CDN
- ✅ **成本可控**：按量付费
- ✅ **可靠性高**：99.9% SLA

### 劣势
- ⚠️ 需要手动上传文件
- ⚠️ 需要配置 CDN
- ⚠️ 需要备案（绑定域名时）

### 适用场景
- ✅ 大型商业项目
- ✅ 高流量应用
- ✅ 需要极致性能

### 部署步骤

#### 1. 创建 OSS 存储桶
1. 登录阿里云控制台
2. 进入 OSS 服务
3. 创建 Bucket（选择就近地域）
4. 设置为 "公共读"

#### 2. 构建项目
```bash
npm run build
```

#### 3. 上传文件
使用 OSS 控制台或 ossutil 工具上传 `dist` 目录

#### 4. 配置静态网站托管
1. 在 Bucket 设置中启用 "静态网站托管"
2. 设置默认首页：`index.html`
3. 设置 404 页面：`index.html`（SPA 路由）

#### 5. 配置 CDN（可选）
1. 创建 CDN 加速域名
2. 源站选择 OSS Bucket
3. 配置 HTTPS 证书
4. 配置缓存规则

### 费用估算
- OSS 存储：¥0.12/GB/月
- 流量费用：¥0.50/GB（中国大陆）
- CDN 流量：¥0.24/GB

**示例**：1000 用户/月，每人访问 10 次，每次 2MB
- 流量：1000 × 10 × 2MB = 20GB
- 费用：20GB × ¥0.24 = ¥4.8/月

---

## 🌟 方案五：GitHub Pages + Cloudflare

### 优势
- ✅ **完全免费**
- ✅ **简单易用**
- ✅ 通过 Cloudflare 代理后国内可访问

### 劣势
- ⚠️ GitHub 在国内访问不稳定
- ⚠️ 需要配置 Cloudflare 代理
- ⚠️ 部署速度慢

### 适用场景
- ✅ 个人博客
- ✅ 文档网站
- ✅ 低流量应用

### 部署步骤

#### 1. 部署到 GitHub Pages
```bash
npm run build
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

#### 2. 配置 Cloudflare
1. 添加域名到 Cloudflare
2. 配置 DNS 指向 GitHub Pages
3. 启用 Cloudflare 代理（橙色云朵）

---

## 🎯 推荐选择

### 个人项目 / 学习项目
**推荐**：Cloudflare Pages
- 免费
- 简单
- 国内访问良好

### 商业项目 / 企业应用
**推荐**：腾讯云 Webify 或 阿里云 OSS
- 国内访问最快
- 稳定性高
- 技术支持好

### 国际化项目
**推荐**：Vercel 或 Cloudflare Pages
- 全球 CDN
- 部署简单
- 功能强大

---

## 📝 部署决策树

```
是否需要极致国内访问速度？
├─ 是 → 腾讯云 Webify / 阿里云 OSS
└─ 否 → 是否需要完全免费？
    ├─ 是 → Cloudflare Pages
    └─ 否 → 是否需要 Serverless 功能？
        ├─ 是 → Vercel
        └─ 否 → Cloudflare Pages
```

---

## 🔧 部署后优化建议

### 1. 性能优化
- ✅ 启用 Gzip/Brotli 压缩
- ✅ 配置浏览器缓存
- ✅ 使用 CDN 加速
- ✅ 优化图片资源

### 2. SEO 优化
- ✅ 配置 meta 标签
- ✅ 生成 sitemap.xml
- ✅ 配置 robots.txt
- ✅ 使用语义化 HTML

### 3. 监控和分析
- ✅ 配置访问统计（百度统计/Google Analytics）
- ✅ 配置错误监控（Sentry）
- ✅ 配置性能监控
- ✅ 定期查看日志

### 4. 安全加固
- ✅ 启用 HTTPS
- ✅ 配置 CSP 头
- ✅ 配置 CORS 策略
- ✅ 定期更新依赖

---

## 💡 常见问题

### Q: 哪个平台国内访问最快？
**A**: 腾讯云 Webify 和阿里云 OSS 在国内访问最快，因为它们的服务器都在国内。

### Q: 免费方案够用吗？
**A**: 对于个人项目和中小型应用，Cloudflare Pages 和 Vercel 的免费额度完全够用。

### Q: 需要备案吗？
**A**: 
- Cloudflare Pages / Vercel：不需要备案
- 腾讯云 / 阿里云：绑定自定义域名需要备案

### Q: 如何选择？
**A**: 
- 个人项目 → Cloudflare Pages
- 商业项目 → 腾讯云 Webify / 阿里云 OSS
- 国际项目 → Vercel / Cloudflare Pages

---

## 📞 需要帮助？

如果你不确定选择哪个方案，可以：

1. **先试用 Cloudflare Pages**（免费、简单、国内可访问）
2. **测试访问速度**（使用 https://www.17ce.com）
3. **根据实际情况调整**

---

**建议**：先使用 Cloudflare Pages 快速部署，测试国内访问情况，如果需要更快的速度再考虑腾讯云或阿里云。

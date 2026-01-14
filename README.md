# 智能作业辅导 - AI作业导师

一个基于 AI 的智能作业辅导平台，帮助学生更好地理解和完成作业。

## ✨ 功能特点

- 🤖 **AI 智能辅导**：使用 DeepSeek AI 提供苏格拉底式教学指导
- 📸 **图片识别**：支持上传作业图片，自动识别题目
- 💬 **对话式学习**：通过对话引导学生思考，而不是直接给答案
- 📊 **学习统计**：记录学习进度，可视化学习数据
- 🎯 **成就系统**：通过徽章和连续打卡激励学生
- 📱 **响应式设计**：完美支持手机、平板和电脑
- 🔐 **用户系统**：基于 Supabase 的安全认证

## 🚀 在线访问

**生产环境**：[即将部署]

## 📦 技术栈

- **前端框架**：React 19 + Vite
- **路由**：React Router v7
- **样式**：Tailwind CSS
- **AI 服务**：DeepSeek API
- **后端服务**：Supabase (认证、数据库、存储)
- **图标**：Lucide React
- **Markdown 渲染**：React Markdown + KaTeX (数学公式)
- **OCR**：Tesseract.js
- **PWA**：Vite PWA Plugin

## 🛠️ 本地开发

### 环境要求

- Node.js 18+
- npm 或 yarn

### 安装步骤

1. **克隆仓库**

```bash
git clone https://github.com/你的用户名/homework-ai.git
cd homework-ai
```

2. **安装依赖**

```bash
npm install
```

3. **配置环境变量**

复制 `.env.example` 为 `.env` 并填入你的配置：

```bash
cp .env.example .env
```

编辑 `.env` 文件：

```env
# DeepSeek API Key
VITE_DEEPSEEK_API_KEY=your_deepseek_api_key

# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **启动开发服务器**

```bash
npm run dev
```

访问 http://localhost:5173

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 🌐 部署到公网

详细部署指南请查看 [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

### 快速部署到 Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/你的用户名/homework-ai)

1. 点击上方按钮
2. 配置环境变量
3. 部署完成！

## 📁 项目结构

```
homework-ai/
├── public/              # 静态资源
├── src/
│   ├── components/      # React 组件
│   │   ├── business/    # 业务组件（聊天、文档查看器等）
│   │   ├── layout/      # 布局组件（Header、Sidebar等）
│   │   └── settings/    # 设置相关组件
│   ├── context/         # React Context（用户、设置等）
│   ├── pages/           # 页面组件
│   ├── services/        # 服务层（AI、导出等）
│   ├── supabase.js      # Supabase 客户端
│   ├── App.jsx          # 应用入口
│   └── main.jsx         # React 入口
├── .env.example         # 环境变量示例
├── vercel.json          # Vercel 配置
├── vite.config.js       # Vite 配置
└── package.json         # 项目依赖
```

## 🔧 配置说明

### Supabase 数据库表

需要创建以下表：

1. **sessions** - 作业会话
2. **messages** - 聊天消息
3. **user_settings** - 用户设置

详细的数据库设置请查看 [DATABASE_SETUP_GUIDE.md](./DATABASE_SETUP_GUIDE.md)

### Supabase 存储桶

需要创建 `user-uploads` 存储桶用于头像上传。

详细设置请查看 [STORAGE_SETUP_GUIDE.md](./STORAGE_SETUP_GUIDE.md)

## 📊 学习统计功能

应用包含完整的学习统计系统：

- **核心数据**：完成作业总数、累计学习时长、本周学习、连续打卡天数
- **学科分布**：自动识别并统计各学科学习情况
- **成就系统**：完成里程碑获得徽章奖励
- **激励机制**：连续学习天数打卡，提高学习积极性

## 🎯 主要功能

### 1. 作业辅导

- 上传作业图片或直接输入问题
- AI 分析题目并提供引导式帮助
- 支持数学公式渲染（LaTeX）
- 关键词高亮，帮助理解重点

### 2. 会话管理

- 保存所有作业会话
- 支持导出为 PDF 或 Word 文档
- 批量删除和导出功能
- 最多保存 20 个会话

### 3. 用户系统

- 邮箱注册/登录
- 个人资料管理
- 头像上传
- 学习偏好设置

## 🔒 安全性

- ✅ Supabase RLS（行级安全）保护用户数据
- ✅ 环境变量管理敏感信息
- ✅ API 密钥不暴露在客户端
- ✅ 用户认证和授权

## 🐛 已知问题

- Supabase 存储桶需要手动配置 RLS 策略
- 部分旧浏览器可能不支持某些功能

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 📞 联系方式

如有问题或建议，请提交 Issue。

---

**Made with ❤️ for students**

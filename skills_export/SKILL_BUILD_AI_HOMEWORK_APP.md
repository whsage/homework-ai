---
name: build_ai_homework_app
description: Scaffold a React-based AI Homework Tutor application with Supabase backend.
---

# Build AI Homework App Skill

此 Skill 用于快速搭建一个基于 React + Supabase + OpenAI/Gemini 的 AI 作业辅导应用。

## 1. 技术栈要求
- **Frontend**: React, Vite, TailwindCSS, Lucide-React
- **Backend**: Supabase (Auth, Database, Storage)
- **AI**: OpenAI Compatible API (Aliyun Qwen, DeepSeek, etc.)

## 2. 核心文件结构
应用的核心在于以下几个文件的配合：

1.  `src/services/aiService.js`: 封装 AI 调用逻辑，包含核心 System Prompt。
2.  `src/components/business/ChatInterface.jsx`: 处理对话流、Markdown 渲染、LaTeX 公式渲染。
3.  `src/components/business/UploadZone.jsx`: 处理文件上传、格式限制、会话创建。
4.  `src/context/LanguageContext.jsx`: 实现国际化 (i18n)。

## 3. 实施步骤

### 步骤 1: 初始化项目
```bash
npm create vite@latest my-ai-tutor -- --template react
cd my-ai-tutor
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 步骤 2: 安装依赖
```bash
npm install @supabase/supabase-js openai lucide-react react-router-dom clsx react-markdown remark-math rehype-katex
```

### 步骤 3: 配置 Supabase
在 Supabase 创建以下表：
- `sessions`: 存储会话 (id, user_id, title, subject, created_at)
- `messages`: 存储消息 (id, session_id, role, content, image_url)
- `user_profiles` (可选): 存储用户设置

### 步骤 4: 集成 AI Service
将 `AI_TUTOR_PROMPT.md` 中的 Prompt 内容复制到 `src/services/aiService.js` 中。

## 4. 如何在其他项目复用

**方案 A：复用 Core Logic (Prompt)**
如果你只需要 AI 的"辅导能力"，只需将 System Prompt 复制到你的任何 Python/Node.js 后端服务中即可。

**方案 B：复用 UI 组件**
如果你需要类似 Chat 的界面：
1. 复制 `ChatInterface.jsx` 和 `ChatInput.jsx`.
2. 确保安装了 `react-markdown` 和 `katex` (用于数学公式).
3. 适配 `sendMessageToTutor` 函数以对接你的后端 API。

**方案 C：作为 Agent Skill**
将此文件保存为 `.agent/skills/build_ai_homework_app/SKILL.md`，你的 AI Agent 即可读取此说明并协助你在新项目中搭建类似功能。

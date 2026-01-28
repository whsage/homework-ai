# 数学知识点页面开发模版指南

本文档介绍如何使用通用的 `TopicLayout`, `AIChatSession`, `PracticeProblem` 组件快速创建新的知识点详解页面。

## 1. 核心组件概览

| 组件名 | 路径 | 用途 |
| :--- | :--- | :--- |
| **TopicLayout** | `src/components/subjects/common/TopicLayout.jsx` | 页面骨架（Header, SEO, Tabs, Footer） |
| **AIChatSession** | `src/components/subjects/common/AIChatSession.jsx` | AI 互动对话场景 |
| **PracticeProblem** | `src/components/subjects/practice/PracticeProblem.jsx` | 互动练习题（选择/填空） |

## 2. 快速开始模板

复制以下代码到新文件（例如 `LinearFunctions.jsx`）：

```jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Calculator, Award, Clock, Star } from 'lucide-react';

// 引入通用组件
import TopicLayout from '../../../components/subjects/common/TopicLayout';
import AIChatSession from '../../../components/subjects/common/AIChatSession';
import PracticeProblem from '../../../components/subjects/practice/PracticeProblem';

const NewTopicPage = () => { // 修改组件名
    const [activeTab, setActiveTab] = useState('concept');

    // 1. SEO 元数据
    const meta = {
        title: "页面标题 | AI7Miao数学学习",
        description: "页面SEO描述",
        keywords: "关键词1,关键词2"
    };

    // 2. 页面头部信息
    const info = {
        title: "知识点名称",
        description: "知识点简介...",
        tags: [
            { text: "初中数学", color: "blue" },
            { text: "50分钟", icon: Clock, color: "slate" },
            { text: "重要", icon: Star, color: "orange" }
        ]
    };

    // 3. 标签页定义
    const tabs = [
        { id: 'concept', label: '核心概念', icon: BookOpen },
        { id: 'properties', label: '性质', icon: TrendingUp },
        { id: 'examples', label: '典型例题', icon: Calculator },
        { id: 'practice', label: '练习题', icon: Award }
    ];

    // 4. AI 对话数据 (可选)
    const aiMessages = [
        { role: 'ai', content: 'AI提问...' },
        { role: 'user', content: '用户回答...' },
        { role: 'ai', content: 'AI反馈...', type: 'success' }
    ];

    return (
        <TopicLayout
            meta={meta}
            info={info}
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
        >
            {/* Tab 1: Concept */}
            {activeTab === 'concept' && (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
                        {/* 内容... */}
                    </div>
                    
                    <AIChatSession 
                        title="AI互动学习"
                        messages={aiMessages} 
                    />
                </div>
            )}

            {/* Tab 4: Practice */}
            {activeTab === 'practice' && (
                <div className="space-y-6">
                    <PracticeProblem 
                        id={1}
                        type="choice"
                        question="题目..."
                        options={[{label:'A', value:'选项A'}]}
                        answer="A"
                        explanation="解析..."
                    />
                </div>
            )}
        </TopicLayout>
    );
};

export default NewTopicPage;
```

## 3. 下一步计划

建议按照此模板，优先开发以下页面：
1.  **一次函数** (Linear Functions) - 基础
2.  **导数入门** (Derivatives) - 高中重点
3.  **三角函数** (Trigonometry) - 难点

---
*Created by Antigravity on 2026-01-29*

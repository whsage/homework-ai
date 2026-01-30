# 知识图谱设计方案

## 🎯 设计理念

**核心思想**: 
> 用结构化知识图谱提供"骨架"，用AI提供"血肉"

```
知识图谱 (结构化)          AI (灵活)
    ↓                        ↓
知识点定义              个性化讲解
前置依赖                教学策略选择
评估标准                对话引导
掌握度计算              内容生成
```

---

## 📊 知识图谱数据结构

### 1. 知识点定义

```javascript
// 示例: 二次函数知识图谱
const quadraticFunctionKnowledgeGraph = {
  id: 'quadratic-function',
  name: '二次函数',
  grade: '初三',
  
  // 知识点树状结构
  topics: [
    {
      id: 'qf-definition',
      name: '二次函数的定义',
      level: 1, // 难度等级
      bloomLevel: 'remember', // Bloom认知层级
      
      // 前置知识
      prerequisites: ['function-concept', 'equation-basics'],
      
      // 核心概念
      concepts: [
        {
          id: 'qf-def-form',
          name: '标准形式',
          content: 'y = ax² + bx + c (a≠0)',
          keyPoints: [
            '二次项系数a不为0',
            '最高次数是2',
            'x的取值范围是全体实数'
          ]
        }
      ],
      
      // 评估标准
      assessmentCriteria: {
        mastery: {
          threshold: 0.8, // 80%正确率算掌握
          requiredAttempts: 5,
          skills: [
            '能写出二次函数的标准形式',
            '能判断一个函数是否为二次函数',
            '理解a≠0的含义'
          ]
        }
      }
    }
  ]
};
```

完整内容请查看文档...

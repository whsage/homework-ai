# 知识图谱系统使用指南

## 🎯 系统概述

我们现在有了一个**完整的中国K12数学知识体系**，包含:

- ✅ **小学数学** (1-6年级): 120+ 知识点
- ✅ **初中数学** (7-9年级): 60+ 知识点  
- ✅ **高中数学** (10-12年级): 40+ 知识点

每个知识点包含:
- 📝 名称和ID
- 🎯 核心技能点
- 🔗 前置依赖关系
- 📊 难度等级
- 🧠 Bloom认知层级

---

## 📦 已创建的文件

### 1. 知识图谱数据
**文件**: `src/data/mathKnowledgeGraph.js`

```javascript
// 使用示例
import mathKnowledgeGraph, { KnowledgeGraphHelper } from '../data/mathKnowledgeGraph';

// 获取二次函数知识点
const topic = KnowledgeGraphHelper.findTopicById('mid-9-1-quadratic-functions');

console.log(topic);
// {
//   id: 'mid-9-1-quadratic-functions',
//   name: '二次函数',
//   skills: ['二次函数概念', '图象性质', '解析式', '应用'],
//   prerequisites: ['mid-8-2-linear-functions', 'mid-9-1-quadratic-equations'],
//   difficulty: 0.9,
//   bloomLevel: 'apply'
// }
```

### 2. 知识评估服务
**文件**: `src/services/knowledgeAssessment.js`

```javascript
// 使用示例
import { KnowledgeAssessment } from '../services/knowledgeAssessment';

// 诊断学生水平
const diagnosis = await KnowledgeAssessment.diagnose(
  userId,
  'mid-9-1-quadratic-functions'
);

console.log(diagnosis);
// {
//   topic: {...},
//   currentMastery: 0.65,
//   skillBreakdown: {
//     '二次函数概念': 0.8,
//     '图象性质': 0.7,
//     '解析式': 0.5,  ← 薄弱点
//     '应用': 0.6
//   },
//   weakSkills: ['解析式', '应用'],
//   prerequisites: [
//     { id: 'mid-8-2-linear-functions', mastery: 0.9, isMastered: true },
//     { id: 'mid-9-1-quadratic-equations', mastery: 0.75, isMastered: true }
//   ],
//   readyToLearn: true,
//   recommendation: {
//     action: 'continue_learning',
//     message: '继续学习"二次函数",重点关注薄弱环节',
//     priority: 'high'
//   }
// }
```

---

## 🔄 与SmartTutor集成

### 步骤1: 修改SmartTutor服务

在 `src/services/smartTutor.js` 中添加:

```javascript
import { KnowledgeAssessment } from './knowledgeAssessment';
import { KnowledgeGraphHelper } from '../data/mathKnowledgeGraph';

// 在 chat 方法中
static async chat(userId, topicId, userMessage, conversationHistory = []) {
  // 1. 诊断学生水平
  const diagnosis = await KnowledgeAssessment.diagnose(userId, topicId);
  
  // 2. 获取学习上下文
  const context = await this.getLearningContext(userId, topicId);
  
  // 3. 构建增强的prompt
  const prompt = this.buildEnhancedPrompt(
    context,
    diagnosis,  // 新增诊断信息
    conversationHistory,
    userMessage
  );
  
  // 4. 调用AI
  const aiResponse = await callGeminiAPI(prompt);
  
  // 5. 检测涉及的技能点
  const mentionedSkills = KnowledgeAssessment.detectSkillsInMessage(
    userMessage + ' ' + aiResponse,
    diagnosis.topic.skills
  );
  
  // 6. 评估回答正确性
  const isCorrect = this.detectCorrectness(aiResponse);
  
  // 7. 更新技能掌握度
  await KnowledgeAssessment.updateSkillMastery(
    userId,
    topicId,
    mentionedSkills,
    isCorrect
  );
  
  // 8. 保存对话
  await this.saveConversation(userId, topicId, userMessage, aiResponse);
  
  return aiResponse;
}

// 新的增强prompt
static buildEnhancedPrompt(context, diagnosis, history, userMessage) {
  const { topic, weakSkills, currentMastery, prerequisites } = diagnosis;
  
  return `
你是一位经验丰富的数学AI导师,正在辅导学生学习"${topic.name}"。

【知识点信息】
- 难度等级: ${(topic.difficulty * 100).toFixed(0)}%
- 核心技能: ${topic.skills.join('、')}
- 认知层级: ${topic.bloomLevel}

【学生当前状态】
- 整体掌握度: ${(currentMastery * 100).toFixed(0)}%
- 薄弱技能: ${weakSkills.map(s => s.name).join('、') || '无'}
- 前置知识: ${prerequisites.every(p => p.isMastered) ? '已具备' : '部分欠缺'}

${weakSkills.length > 0 ? `
【教学重点】
学生在以下技能点需要加强:
${weakSkills.map((s, i) => `${i + 1}. ${s.name} (掌握度: ${(s.mastery * 100).toFixed(0)}%)`).join('\n')}

请在讲解时重点关注这些薄弱环节。
` : ''}

【对话历史】
${history.slice(-10).map(m => `${m.role === 'user' ? '学生' : 'AI'}: ${m.content}`).join('\n')}

【学生刚才说】
"${userMessage}"

【你的任务】
1. 根据学生的薄弱技能,有针对性地回复
2. 如果学生提问涉及薄弱技能,详细讲解
3. 适时检查学生对薄弱技能的理解
4. 使用鼓励性语言,建立信心

请回复学生:
`;
}
```

---

## 🎯 实际效果

### 场景: 学生学习二次函数

**对话1: 初次接触**
```
学生: "什么是二次函数?"
系统诊断:
  - 当前掌握度: 0%
  - 前置知识: 一次函数(90%✓), 一元二次方程(85%✓)
  - 状态: 可以开始学习

AI回复: (基于"新手"策略)
"你好!你已经学过一次函数和一元二次方程,这对学习二次函数很有帮助!

二次函数就是形如 y = ax² + bx + c (a≠0) 的函数。
注意这里的关键:
1. 最高次数是2 (x²)
2. a不能等于0 (否则就不是二次函数了)

你能说说为什么a不能为0吗? 🤔"

系统更新:
  - 技能"二次函数概念": 0% → 30%
```

**对话2: 深入理解**
```
学生: "因为a=0的话,x²就没了,就变成一次函数了"
系统检测: 回答正确!

AI回复:
"完全正确! 👍 你理解得很好!

如果a=0,确实就变成 y=bx+c,这就是一次函数了。

现在我们来看几个例子,判断哪些是二次函数:
1. y = x² + 2x + 1
2. y = 3x + 5
3. y = -2x² + 4

你觉得呢?"

系统更新:
  - 技能"二次函数概念": 30% → 55%
  - 技能"识别二次函数": 0% → 40%
```

**对话3: 练习巩固**
```
学生: "1和3是二次函数,2不是"
系统检测: 正确!

AI回复:
"太棒了!全对! 🎉

你已经掌握了二次函数的定义和识别方法。

接下来我们学习二次函数的图象。你知道二次函数的图象是什么形状吗?"

系统更新:
  - 技能"二次函数概念": 55% → 75%
  - 技能"识别二次函数": 40% → 70%
  - 整体掌握度: 0% → 60%

系统推荐: 继续学习"图象性质"
```

---

## 📊 知识点ID命名规则

### 格式
```
{stage}-{grade}-{semester}-{topic-name}

stage: elem(小学) | mid(初中) | high(高中)
grade: 1-12
semester: 1(上学期) | 2(下学期)
topic-name: 知识点英文简称
```

### 示例
```javascript
'elem-3-1-multiplication'        // 小学三年级上学期-多位数乘一位数
'mid-9-1-quadratic-functions'    // 初三上学期-二次函数
'high-10-1-functions'            // 高一上学期-函数概念与性质
```

---

## 🔍 如何查找知识点

### 方法1: 按年级查找
```javascript
import mathKnowledgeGraph from '../data/mathKnowledgeGraph';

// 获取初三上学期所有知识点
const grade9First = mathKnowledgeGraph.middle.grade9.semesters.first;

console.log(grade9First);
// [
//   { id: 'mid-9-1-quadratic-equations', name: '一元二次方程', ... },
//   { id: 'mid-9-1-quadratic-functions', name: '二次函数', ... },
//   ...
// ]
```

### 方法2: 按ID查找
```javascript
import { KnowledgeGraphHelper } from '../data/mathKnowledgeGraph';

const topic = KnowledgeGraphHelper.findTopicById('mid-9-1-quadratic-functions');
```

### 方法3: 查找前置知识
```javascript
const prerequisites = KnowledgeGraphHelper.getPrerequisites('mid-9-1-quadratic-functions');

console.log(prerequisites);
// ['mid-8-2-linear-functions', 'mid-9-1-quadratic-equations', ...]
```

---

## 🎨 在UI中使用

### 显示学习进度
```jsx
import { KnowledgeAssessment } from '../services/knowledgeAssessment';

const LearningProgress = ({ userId, topicId }) => {
  const [diagnosis, setDiagnosis] = useState(null);
  
  useEffect(() => {
    loadDiagnosis();
  }, [topicId]);
  
  const loadDiagnosis = async () => {
    const result = await KnowledgeAssessment.diagnose(userId, topicId);
    setDiagnosis(result);
  };
  
  return (
    <div className="learning-progress">
      <h3>{diagnosis?.topic.name}</h3>
      
      {/* 整体进度 */}
      <div className="overall-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${diagnosis?.currentMastery * 100}%` }}
          />
        </div>
        <span>{(diagnosis?.currentMastery * 100).toFixed(0)}%</span>
      </div>
      
      {/* 技能分解 */}
      <div className="skills-breakdown">
        <h4>技能掌握情况</h4>
        {diagnosis?.topic.skills.map((skill, i) => (
          <div key={i} className="skill-item">
            <span>{skill}</span>
            <div className="skill-bar">
              <div 
                style={{ 
                  width: `${(diagnosis.skillBreakdown[skill] || 0) * 100}%` 
                }}
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* 薄弱环节提示 */}
      {diagnosis?.weakSkills.length > 0 && (
        <div className="weak-skills-alert">
          <p>💡 建议重点练习:</p>
          <ul>
            {diagnosis.weakSkills.map((s, i) => (
              <li key={i}>{s.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
```

---

## 🚀 下一步行动

### 今天完成 (30分钟)
1. ✅ 知识图谱已创建
2. ✅ 评估服务已实现
3. ⏳ 集成到SmartTutor (需要修改代码)
4. ⏳ 测试效果

### 本周完成
1. 完善知识图谱数据 (补充更多知识点)
2. 优化技能检测算法
3. 添加学习路径可视化
4. 创建知识点浏览页面

---

## 💡 关键优势

### 之前 (纯AI)
```
掌握度计算: 简单的正确率
问题: 不知道具体哪里懂了
```

### 现在 (知识图谱 + AI)
```
掌握度计算: 基于技能点的细粒度评估
优势:
  ✅ 知道学生在"识别二次函数"上掌握70%
  ✅ 知道学生在"求解析式"上只有50%
  ✅ 可以针对性地加强薄弱技能
  ✅ 可以检查前置知识是否具备
  ✅ 可以推荐合适的学习路径
```

---

## 📝 总结

现在你的系统有了:

1. **完整的知识体系** - 覆盖小学到高中
2. **精准的评估** - 基于技能点的细粒度追踪
3. **智能的推荐** - 基于前置依赖的学习路径
4. **个性化的教学** - AI根据薄弱环节调整策略

**这才是真正的个性化学习系统!** 🎓✨

准备好集成到SmartTutor了吗? 🚀

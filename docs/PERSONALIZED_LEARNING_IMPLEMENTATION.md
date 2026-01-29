# AI个性化数学学习系统 - 实施指南

## 🎯 系统设计目标

基于[学习理论框架](./LEARNING_THEORY_FRAMEWORK.md),我们要构建一个:
- **真正个性化**的学习系统(不是简单的难度调整)
- **理论驱动**的AI决策(不是随机推荐)
- **以学生为中心**的学习体验(不是以内容为中心)
- **可持续发展**的学习能力(不仅是知识传授)

---

## 🏗️ 系统架构设计

### 数据库Schema扩展

```sql
-- 1. 学生认知画像表
CREATE TABLE student_cognitive_profile (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id),
  
  -- Bloom认知层级掌握度
  bloom_remember DECIMAL(3,2) DEFAULT 0.5,
  bloom_understand DECIMAL(3,2) DEFAULT 0.5,
  bloom_apply DECIMAL(3,2) DEFAULT 0.5,
  bloom_analyze DECIMAL(3,2) DEFAULT 0.5,
  bloom_evaluate DECIMAL(3,2) DEFAULT 0.5,
  bloom_create DECIMAL(3,2) DEFAULT 0.5,
  
  -- ZPD范围
  zpd_lower DECIMAL(3,2) DEFAULT 0.5,
  zpd_upper DECIMAL(3,2) DEFAULT 0.7,
  
  -- 元认知能力
  metacognitive_awareness DECIMAL(3,2) DEFAULT 0.5,
  self_regulation_skill DECIMAL(3,2) DEFAULT 0.5,
  strategy_use_diversity INTEGER DEFAULT 0,
  
  -- 情感状态
  current_motivation DECIMAL(3,2) DEFAULT 0.7,
  current_confidence DECIMAL(3,2) DEFAULT 0.6,
  frustration_tolerance DECIMAL(3,2) DEFAULT 0.5,
  
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 2. 知识点掌握图谱
CREATE TABLE knowledge_mastery (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  topic_id VARCHAR(100) NOT NULL,
  
  -- 掌握度指标
  mastery_level DECIMAL(3,2) DEFAULT 0.0,
  confidence_level DECIMAL(3,2) DEFAULT 0.5,
  
  -- 学习历史
  total_attempts INTEGER DEFAULT 0,
  correct_attempts INTEGER DEFAULT 0,
  last_practiced_at TIMESTAMP,
  
  -- 间隔重复
  next_review_date DATE,
  review_interval_days INTEGER DEFAULT 1,
  consecutive_correct INTEGER DEFAULT 0,
  
  -- 学习时间
  total_time_spent INTEGER DEFAULT 0, -- 秒
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  UNIQUE(user_id, topic_id)
);

-- 3. 学习路径表
CREATE TABLE learning_paths (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  target_topic VARCHAR(100) NOT NULL,
  
  -- 路径信息
  path_steps JSONB NOT NULL, -- 学习步骤数组
  current_step INTEGER DEFAULT 0,
  
  -- 时间估算
  estimated_total_hours DECIMAL(4,1),
  actual_hours_spent DECIMAL(4,1) DEFAULT 0,
  
  -- 里程碑
  milestones JSONB,
  completed_milestones INTEGER[] DEFAULT '{}',
  
  status VARCHAR(20) DEFAULT 'active', -- active, paused, completed
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 4. 学习交互记录(用于AI分析)
CREATE TABLE learning_interactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  session_id UUID,
  topic_id VARCHAR(100),
  
  -- 交互类型
  interaction_type VARCHAR(50), -- question_attempt, hint_request, explanation_view, etc.
  
  -- 交互内容
  question_data JSONB,
  student_response JSONB,
  is_correct BOOLEAN,
  
  -- 时间数据
  time_spent_seconds INTEGER,
  timestamp TIMESTAMP DEFAULT NOW(),
  
  -- AI决策记录
  ai_decision JSONB, -- 记录AI做出的决策和理由
  
  -- 情感指标(可选,基于行为推断)
  inferred_engagement DECIMAL(3,2),
  inferred_frustration DECIMAL(3,2)
);

-- 5. AI生成内容缓存
CREATE TABLE ai_generated_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content_type VARCHAR(50), -- explanation, problem, feedback, hint
  topic_id VARCHAR(100),
  difficulty_level DECIMAL(3,2),
  
  -- 个性化参数
  target_profile JSONB, -- 目标学生画像特征
  
  -- 内容
  content JSONB NOT NULL,
  
  -- 质量评估
  usage_count INTEGER DEFAULT 0,
  avg_effectiveness DECIMAL(3,2),
  
  created_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP -- 内容过期时间
);

-- 索引
CREATE INDEX idx_knowledge_mastery_user ON knowledge_mastery(user_id);
CREATE INDEX idx_knowledge_mastery_next_review ON knowledge_mastery(next_review_date);
CREATE INDEX idx_learning_interactions_user_session ON learning_interactions(user_id, session_id);
CREATE INDEX idx_learning_interactions_timestamp ON learning_interactions(timestamp);
```

---

## 🧠 核心功能实现

### 1. 学生画像引擎

```javascript
// src/services/studentProfile.js

import { supabase } from '../supabase';

export class StudentProfileService {
  /**
   * 初始化学生画像(首次使用时)
   */
  static async initializeProfile(userId, diagnosticResults) {
    // 1. 分析诊断测试结果
    const cognitiveProfile = this.analyzeDiagnosticResults(diagnosticResults);
    
    // 2. 创建认知画像
    const { error: profileError } = await supabase
      .from('student_cognitive_profile')
      .insert({
        user_id: userId,
        ...cognitiveProfile
      });
    
    // 3. 初始化知识图谱
    const knowledgeGraph = this.initializeKnowledgeGraph(diagnosticResults);
    const { error: knowledgeError } = await supabase
      .from('knowledge_mastery')
      .insert(knowledgeGraph.map(item => ({
        user_id: userId,
        ...item
      })));
    
    return { success: !profileError && !knowledgeError };
  }
  
  /**
   * 分析诊断测试,计算Bloom层级掌握度
   */
  static analyzeDiagnosticResults(results) {
    const bloomLevels = {
      remember: [],
      understand: [],
      apply: [],
      analyze: [],
      evaluate: [],
      create: []
    };
    
    // 按Bloom层级分类问题
    results.forEach(item => {
      const level = item.bloomLevel;
      bloomLevels[level].push(item.isCorrect ? 1 : 0);
    });
    
    // 计算每个层级的掌握度
    const profile = {};
    Object.keys(bloomLevels).forEach(level => {
      const scores = bloomLevels[level];
      profile[`bloom_${level}`] = scores.length > 0
        ? scores.reduce((a, b) => a + b) / scores.length
        : 0.5;
    });
    
    // 计算ZPD
    const avgMastery = Object.values(profile).reduce((a, b) => a + b) / 6;
    profile.zpd_lower = avgMastery;
    profile.zpd_upper = Math.min(avgMastery + 0.3, 1.0);
    
    return profile;
  }
  
  /**
   * 实时更新学生画像
   */
  static async updateProfile(userId, interactionData) {
    // 1. 获取当前画像
    const { data: profile } = await supabase
      .from('student_cognitive_profile')
      .select('*')
      .eq('user_id', userId)
      .single();
    
    // 2. 根据交互数据更新
    const updates = this.calculateProfileUpdates(profile, interactionData);
    
    // 3. 保存更新
    await supabase
      .from('student_cognitive_profile')
      .update(updates)
      .eq('user_id', userId);
    
    // 4. 更新知识图谱
    await this.updateKnowledgeMastery(userId, interactionData);
  }
  
  /**
   * 更新知识点掌握度
   */
  static async updateKnowledgeMastery(userId, interaction) {
    const { topicId, isCorrect, timeSpent } = interaction;
    
    // 获取当前掌握度
    const { data: current } = await supabase
      .from('knowledge_mastery')
      .select('*')
      .eq('user_id', userId)
      .eq('topic_id', topicId)
      .single();
    
    // 计算新的掌握度(使用指数移动平均)
    const alpha = 0.3; // 学习率
    const newMastery = current.mastery_level * (1 - alpha) + (isCorrect ? 1 : 0) * alpha;
    
    // 更新连续正确次数
    const consecutiveCorrect = isCorrect 
      ? current.consecutive_correct + 1 
      : 0;
    
    // 计算下次复习时间(间隔重复算法)
    const nextReviewInterval = this.calculateReviewInterval(
      newMastery,
      consecutiveCorrect
    );
    
    const updates = {
      mastery_level: newMastery,
      total_attempts: current.total_attempts + 1,
      correct_attempts: current.correct_attempts + (isCorrect ? 1 : 0),
      consecutive_correct: consecutiveCorrect,
      last_practiced_at: new Date().toISOString(),
      next_review_date: this.addDays(new Date(), nextReviewInterval),
      review_interval_days: nextReviewInterval,
      total_time_spent: current.total_time_spent + timeSpent,
      updated_at: new Date().toISOString()
    };
    
    await supabase
      .from('knowledge_mastery')
      .update(updates)
      .eq('user_id', userId)
      .eq('topic_id', topicId);
  }
  
  /**
   * 计算复习间隔(基于Ebbinghaus遗忘曲线)
   */
  static calculateReviewInterval(mastery, consecutiveCorrect) {
    const baseIntervals = [1, 3, 7, 14, 30, 60, 120]; // 天
    
    // 根据掌握度选择基础间隔
    const index = Math.min(
      Math.floor(mastery * baseIntervals.length),
      baseIntervals.length - 1
    );
    let interval = baseIntervals[index];
    
    // 根据连续正确次数调整
    if (consecutiveCorrect >= 3) {
      interval = Math.min(interval * 1.5, 120);
    }
    
    return Math.round(interval);
  }
  
  /**
   * 获取需要复习的知识点
   */
  static async getReviewTopics(userId) {
    const { data } = await supabase
      .from('knowledge_mastery')
      .select('*')
      .eq('user_id', userId)
      .lte('next_review_date', new Date().toISOString().split('T')[0])
      .order('next_review_date', { ascending: true });
    
    return data || [];
  }
  
  // 辅助函数
  static addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toISOString().split('T')[0];
  }
}
```

---

### 2. AI决策引擎

```javascript
// src/services/aiDecisionEngine.js

import { callGeminiAPI } from './geminiAPI';
import { StudentProfileService } from './studentProfile';

export class AIDecisionEngine {
  /**
   * 决定下一步学习内容
   */
  static async decideNextStep(userId, currentContext) {
    // 1. 获取学生画像
    const profile = await this.getStudentProfile(userId);
    
    // 2. 检查是否需要复习
    const reviewTopics = await StudentProfileService.getReviewTopics(userId);
    if (reviewTopics.length > 0) {
      return this.generateReviewSession(reviewTopics[0], profile);
    }
    
    // 3. 检查当前知识点掌握度
    const currentTopic = currentContext.topicId;
    const mastery = await this.getTopicMastery(userId, currentTopic);
    
    // 4. 应用掌握学习理论
    if (mastery < 0.9) {
      return this.generateMasteryPractice(currentTopic, mastery, profile);
    }
    
    // 5. 选择下一个知识点(在ZPD内)
    const nextTopic = await this.selectNextTopicInZPD(userId, profile);
    
    // 6. 生成学习活动
    return this.generateLearningActivity(nextTopic, profile);
  }
  
  /**
   * 选择教学策略
   */
  static selectTeachingStrategy(profile, topicMastery) {
    const { zpd_lower, zpd_upper } = profile;
    const avgZPD = (zpd_lower + zpd_upper) / 2;
    
    if (avgZPD < 0.4) {
      // 新手:直接教学 + 高脚手架
      return {
        approach: 'direct_instruction',
        scaffolding: 'high',
        exampleType: 'worked_examples',
        practiceMode: 'guided',
        feedbackFrequency: 'immediate'
      };
    } else if (avgZPD < 0.7) {
      // 中级:引导发现 + 中等脚手架
      return {
        approach: 'guided_discovery',
        scaffolding: 'medium',
        exampleType: 'partial_examples',
        practiceMode: 'semi_independent',
        feedbackFrequency: 'after_attempt'
      };
    } else {
      // 高级:生产性失败 + 最小脚手架
      return {
        approach: 'productive_failure',
        scaffolding: 'minimal',
        exampleType: 'problem_first',
        practiceMode: 'independent',
        feedbackFrequency: 'on_request'
      };
    }
  }
  
  /**
   * 计算最优难度
   */
  static calculateOptimalDifficulty(profile, userPreferences) {
    const { zpd_lower, zpd_upper } = profile;
    const { challengePreference } = userPreferences;
    
    // 基础难度:ZPD中点
    let difficulty = (zpd_lower + zpd_upper) / 2;
    
    // 根据偏好调整
    if (challengePreference === 'challenging') {
      difficulty = zpd_upper * 0.95;
    } else if (challengePreference === 'easy') {
      difficulty = zpd_lower * 1.1;
    }
    
    return Math.min(Math.max(difficulty, 0.1), 0.95);
  }
  
  /**
   * 检测学习状态并干预
   */
  static async detectAndIntervene(userId, sessionData) {
    const recentInteractions = sessionData.interactions.slice(-5);
    
    // 1. 挫折检测:连续3次错误
    const consecutiveErrors = recentInteractions
      .slice(-3)
      .every(i => !i.isCorrect);
    
    if (consecutiveErrors) {
      return {
        intervention: 'reduce_difficulty',
        action: 'provide_scaffolding',
        message: '我注意到你遇到了一些困难。让我们换个角度来理解这个概念。',
        scaffolding: {
          type: 'worked_example',
          hints: true,
          stepByStep: true
        }
      };
    }
    
    // 2. 无聊检测:连续5次全对且用时很短
    const tooEasy = recentInteractions
      .slice(-5)
      .every(i => i.isCorrect && i.timeSpent < 30);
    
    if (tooEasy) {
      return {
        intervention: 'increase_difficulty',
        action: 'remove_scaffolding',
        message: '你做得很好!让我们尝试一些更有挑战性的问题。',
        difficulty: '+0.2'
      };
    }
    
    // 3. 卡住检测:单题停留超过5分钟
    const stuck = recentInteractions.some(i => i.timeSpent > 300);
    
    if (stuck) {
      return {
        intervention: 'provide_hint',
        action: 'socratic_prompt',
        message: '看起来你在思考。让我问你几个问题来帮助你理清思路...'
      };
    }
    
    return { intervention: 'none' };
  }
  
  /**
   * 生成学习活动
   */
  static async generateLearningActivity(topic, profile) {
    const strategy = this.selectTeachingStrategy(profile, 0);
    const difficulty = this.calculateOptimalDifficulty(profile, profile.preferences);
    
    // 根据策略选择活动类型
    const activities = [];
    
    if (strategy.approach === 'direct_instruction') {
      activities.push(
        { type: 'explanation', duration: 10 },
        { type: 'worked_example', count: 2 },
        { type: 'guided_practice', count: 3 },
        { type: 'independent_practice', count: 2 }
      );
    } else if (strategy.approach === 'guided_discovery') {
      activities.push(
        { type: 'exploration_task', duration: 5 },
        { type: 'socratic_dialogue', turns: 5 },
        { type: 'concept_formation', duration: 5 },
        { type: 'practice', count: 5 }
      );
    } else { // productive_failure
      activities.push(
        { type: 'challenging_problem', count: 1 },
        { type: 'struggle_phase', maxDuration: 10 },
        { type: 'consolidation', duration: 5 },
        { type: 'practice', count: 3 }
      );
    }
    
    return {
      topic,
      strategy,
      difficulty,
      activities,
      estimatedDuration: this.estimateDuration(activities)
    };
  }
}
```

---

### 3. 个性化内容生成

```javascript
// src/services/contentGenerator.js

export class PersonalizedContentGenerator {
  /**
   * 生成个性化讲解
   */
  static async generateExplanation(topic, profile, difficulty) {
    const { grade, learningStyle, zpd_lower } = profile;
    
    // 构建个性化prompt
    const prompt = `
你是一位经验丰富的数学老师,正在为学生讲解"${topic}"。

【学生特征】
- 年级: ${grade}
- 当前理解水平: ${(zpd_lower * 100).toFixed(0)}%
- 学习风格: ${learningStyle.preferredModality}
- 学习节奏: ${learningStyle.pace}

【教学要求】
1. 难度控制在${(difficulty * 100).toFixed(0)}%
2. 使用${this.getRepresentationMode(learningStyle, grade)}
3. 采用${this.getTeachingTone(zpd_lower)}
4. 长度控制在${this.getOptimalLength(grade)}字

【教学策略】
${this.getTeachingStrategy(zpd_lower)}

请生成一段个性化的讲解内容,要求:
- 从学生已知的知识出发
- 使用生活化的例子
- 循序渐进,不要一次性给太多信息
- 鼓励学生思考

返回JSON格式:
{
  "explanation": "讲解内容",
  "keyPoints": ["要点1", "要点2"],
  "examples": ["例子1", "例子2"],
  "checkUnderstanding": "检查理解的问题"
}
`;
    
    const response = await callGeminiAPI(prompt);
    return JSON.parse(response);
  }
  
  /**
   * 生成个性化练习题
   */
  static async generatePracticeProblems(topic, profile, count, difficulty) {
    const weakPoints = await this.identifyWeakPoints(profile.userId, topic);
    
    const prompt = `
生成${count}道关于"${topic}"的练习题。

【要求】
- 难度: ${(difficulty * 100).toFixed(0)}%
- 重点关注薄弱环节: ${weakPoints.join(', ')}
- 题型分布: 40%选择题, 30%填空题, 30%解答题
- 每题包含:
  * 题目
  * 答案
  * 详细解答步骤
  * 3个渐进式提示
  * 常见错误分析

返回JSON数组格式:
[
  {
    "id": "unique_id",
    "type": "choice|fill|solve",
    "question": "题目",
    "options": ["A", "B", "C", "D"], // 仅选择题
    "answer": "答案",
    "solution": {
      "steps": ["步骤1", "步骤2", ...],
      "keyInsight": "关键洞察"
    },
    "hints": [
      { "level": 1, "text": "轻度提示" },
      { "level": 2, "text": "中度提示" },
      { "level": 3, "text": "强提示" }
    ],
    "commonMistakes": ["错误1", "错误2"],
    "difficulty": 0.7,
    "bloomLevel": "apply",
    "estimatedTime": 180 // 秒
  }
]
`;
    
    const response = await callGeminiAPI(prompt);
    return JSON.parse(response);
  }
  
  /**
   * 生成个性化反馈
   */
  static async generateFeedback(studentAnswer, correctAnswer, problem, profile) {
    const errorAnalysis = this.analyzeError(studentAnswer, correctAnswer, problem);
    const { current_confidence, frustration_tolerance } = profile;
    
    const prompt = `
学生在解答数学题时出错,请生成个性化反馈。

【问题】
${problem.question}

【学生答案】
${studentAnswer}

【正确答案】
${correctAnswer}

【错误分析】
${errorAnalysis.type}: ${errorAnalysis.description}

【学生状态】
- 自信心: ${(current_confidence * 100).toFixed(0)}%
- 挫折容忍度: ${(frustration_tolerance * 100).toFixed(0)}%

【反馈要求】
1. 使用成长型思维语言(强调努力和策略,而非能力)
2. 具体指出错误所在,但不要直接给答案
3. 提供一个引导性问题帮助学生自己发现错误
4. 如果挫折容忍度低(<0.5),给予更多情感支持和鼓励
5. 建议下一步行动

返回JSON格式:
{
  "tone": "encouraging|neutral|challenging",
  "feedback": "反馈内容",
  "guidingQuestion": "引导性问题",
  "nextStep": "建议的下一步",
  "encouragement": "鼓励的话"
}
`;
    
    const response = await callGeminiAPI(prompt);
    return JSON.parse(response);
  }
  
  /**
   * 苏格拉底式对话
   */
  static async socraticDialogue(topic, conversationHistory, studentResponse, profile) {
    const prompt = `
你是一位使用苏格拉底式教学法的数学老师,正在引导学生探索"${topic}"。

【对话历史】
${conversationHistory.map(m => `${m.role}: ${m.content}`).join('\n')}

【学生刚才说】
"${studentResponse}"

【教学目标】
引导学生自己发现: ${this.getLearningGoal(topic)}

【苏格拉底式提问原则】
1. 不要直接给出答案
2. 通过提问激发思考
3. 帮助学生发现矛盾或不一致
4. 引导学生自己得出结论
5. 如果学生走偏,温和地引导回正轨
6. 当学生接近答案时,给予鼓励

【提问类型】(选择最合适的)
- 澄清性问题: "你能解释一下你的意思吗?"
- 探究假设: "你为什么这样认为?"
- 探究证据: "有什么证据支持这个想法?"
- 探究观点: "还有其他方法吗?"
- 探究含义: "如果这样,那会怎样?"
- 元问题: "你是怎么想到这个的?"

返回JSON格式:
{
  "question": "下一个引导性问题",
  "questionType": "提问类型",
  "expectedInsight": "期望学生获得的洞察",
  "ifStudentStuck": "如果学生卡住的备用提示"
}
`;
    
    const response = await callGeminiAPI(prompt);
    return JSON.parse(response);
  }
  
  /**
   * 分析错误类型
   */
  static analyzeError(studentAnswer, correctAnswer, problem) {
    // 简化版错误分析,实际可以用AI进行更深入分析
    const errorTypes = {
      conceptual: '概念理解错误',
      procedural: '计算步骤错误',
      careless: '粗心错误',
      incomplete: '答案不完整'
    };
    
    // 这里可以调用AI进行更精确的错误分析
    return {
      type: 'procedural',
      description: '在计算过程中出现了错误',
      specificStep: '第3步'
    };
  }
  
  /**
   * 识别薄弱环节
   */
  static async identifyWeakPoints(userId, topic) {
    const { data } = await supabase
      .from('knowledge_mastery')
      .select('topic_id, mastery_level')
      .eq('user_id', userId)
      .like('topic_id', `${topic}%`)
      .lt('mastery_level', 0.7)
      .order('mastery_level', { ascending: true })
      .limit(3);
    
    return data?.map(d => d.topic_id) || [];
  }
  
  // 辅助函数
  static getRepresentationMode(learningStyle, grade) {
    if (grade <= 6) return '图像为主,符号为辅';
    if (grade <= 9) return '图像和符号并重';
    return '符号为主,图像辅助';
  }
  
  static getTeachingTone(zpdLower) {
    if (zpdLower < 0.4) return '耐心、鼓励、详细';
    if (zpdLower < 0.7) return '友好、引导、适度挑战';
    return '简洁、启发、高挑战';
  }
  
  static getOptimalLength(grade) {
    if (grade <= 6) return '200-300';
    if (grade <= 9) return '300-500';
    return '400-600';
  }
  
  static getTeachingStrategy(zpdLower) {
    if (zpdLower < 0.4) {
      return '使用大量具体例子,分步讲解,提供worked examples';
    } else if (zpdLower < 0.7) {
      return '使用引导性问题,鼓励学生思考,提供部分例子';
    } else {
      return '提出挑战性问题,让学生先尝试,再总结规律';
    }
  }
}
```

---

## 🎨 前端组件设计

### 1. 自适应学习界面

```jsx
// src/components/learning/AdaptiveLearningSession.jsx

import { useState, useEffect } from 'react';
import { AIDecisionEngine } from '../../services/aiDecisionEngine';
import { PersonalizedContentGenerator } from '../../services/contentGenerator';
import { StudentProfileService } from '../../services/studentProfile';

const AdaptiveLearningSession = ({ topicId, userId }) => {
  const [currentActivity, setCurrentActivity] = useState(null);
  const [sessionData, setSessionData] = useState({
    interactions: [],
    startTime: Date.now()
  });
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    initializeSession();
  }, [topicId]);
  
  const initializeSession = async () => {
    setLoading(true);
    
    // AI决定下一步学习内容
    const nextStep = await AIDecisionEngine.decideNextStep(userId, { topicId });
    
    // 生成个性化内容
    const activity = await generateActivity(nextStep);
    
    setCurrentActivity(activity);
    setLoading(false);
  };
  
  const handleStudentResponse = async (response) => {
    const interaction = {
      timestamp: Date.now(),
      activityType: currentActivity.type,
      response,
      timeSpent: (Date.now() - sessionData.startTime) / 1000
    };
    
    // 记录交互
    setSessionData(prev => ({
      ...prev,
      interactions: [...prev.interactions, interaction]
    }));
    
    // 评估回答
    const evaluation = await evaluateResponse(response);
    
    // 更新学生画像
    await StudentProfileService.updateProfile(userId, {
      topicId,
      isCorrect: evaluation.isCorrect,
      timeSpent: interaction.timeSpent
    });
    
    // 检测是否需要干预
    const intervention = await AIDecisionEngine.detectAndIntervene(
      userId,
      sessionData
    );
    
    if (intervention.intervention !== 'none') {
      handleIntervention(intervention);
    } else {
      // 继续下一个活动
      proceedToNext();
    }
  };
  
  const handleIntervention = (intervention) => {
    // 根据干预类型调整学习活动
    switch (intervention.action) {
      case 'provide_scaffolding':
        setCurrentActivity(prev => ({
          ...prev,
          scaffolding: intervention.scaffolding,
          message: intervention.message
        }));
        break;
      
      case 'remove_scaffolding':
        setCurrentActivity(prev => ({
          ...prev,
          difficulty: prev.difficulty + 0.2,
          message: intervention.message
        }));
        break;
      
      case 'socratic_prompt':
        // 启动苏格拉底式对话
        startSocraticDialogue();
        break;
    }
  };
  
  return (
    <div className="adaptive-learning-session">
      {loading ? (
        <LoadingState />
      ) : (
        <>
          {currentActivity.type === 'explanation' && (
            <ExplanationView 
              content={currentActivity.content}
              onComplete={() => proceedToNext()}
            />
          )}
          
          {currentActivity.type === 'practice' && (
            <PracticeView
              problem={currentActivity.problem}
              scaffolding={currentActivity.scaffolding}
              onSubmit={handleStudentResponse}
            />
          )}
          
          {currentActivity.type === 'socratic_dialogue' && (
            <SocraticDialogueView
              topic={topicId}
              onResponse={handleStudentResponse}
            />
          )}
          
          {currentActivity.type === 'productive_failure' && (
            <ProductiveFailureView
              problem={currentActivity.challengeProblem}
              onAttempt={handleStudentResponse}
            />
          )}
        </>
      )}
      
      {/* 元认知提示 */}
      <MetacognitivePrompts 
        stage={currentActivity?.stage}
        onReflection={(reflection) => recordMetacognition(reflection)}
      />
      
      {/* 进度追踪 */}
      <ProgressTracker 
        currentMastery={sessionData.currentMastery}
        targetMastery={0.9}
      />
    </div>
  );
};
```

### 2. 元认知引导组件

```jsx
// src/components/learning/MetacognitivePrompts.jsx

const MetacognitivePrompts = ({ stage, onReflection }) => {
  const prompts = {
    before: [
      "这道题考查什么知识点?",
      "你打算用什么方法解决?",
      "预估一下难度如何?"
    ],
    during: [
      "你现在的思路是什么?",
      "遇到困难了吗?",
      "需要换个方法吗?"
    ],
    after: [
      "回顾一下你的解题过程",
      "哪个步骤最关键?",
      "下次可以怎么改进?"
    ]
  };
  
  const [currentPrompt, setCurrentPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  
  useEffect(() => {
    // 在适当时机显示元认知提示
    if (stage && prompts[stage]) {
      const randomPrompt = prompts[stage][
        Math.floor(Math.random() * prompts[stage].length)
      ];
      setCurrentPrompt(randomPrompt);
      setShowPrompt(true);
    }
  }, [stage]);
  
  return showPrompt ? (
    <div className="metacognitive-prompt">
      <Brain className="icon" />
      <p>{currentPrompt}</p>
      <textarea
        placeholder="写下你的想法..."
        onChange={(e) => onReflection(e.target.value)}
      />
    </div>
  ) : null;
};
```

---

## 📊 效果评估与迭代

### 数据收集

```javascript
// src/services/analytics.js

export class LearningAnalytics {
  /**
   * 记录学习交互
   */
  static async recordInteraction(userId, interaction) {
    await supabase.from('learning_interactions').insert({
      user_id: userId,
      session_id: interaction.sessionId,
      topic_id: interaction.topicId,
      interaction_type: interaction.type,
      question_data: interaction.questionData,
      student_response: interaction.response,
      is_correct: interaction.isCorrect,
      time_spent_seconds: interaction.timeSpent,
      ai_decision: interaction.aiDecision,
      inferred_engagement: this.inferEngagement(interaction),
      inferred_frustration: this.inferFrustration(interaction)
    });
  }
  
  /**
   * 推断投入度
   */
  static inferEngagement(interaction) {
    // 基于时间和行为推断
    const { timeSpent, type } = interaction;
    
    // 简化版:基于时间是否在合理范围内
    const expectedTime = this.getExpectedTime(type);
    const ratio = timeSpent / expectedTime;
    
    if (ratio < 0.3) return 0.3; // 太快,可能没认真
    if (ratio > 3) return 0.4; // 太慢,可能分心
    return 0.8; // 正常范围
  }
  
  /**
   * 推断挫折感
   */
  static inferFrustration(interaction) {
    // 基于错误次数和时间
    const { consecutiveErrors, timeSpent } = interaction;
    
    if (consecutiveErrors >= 3) return 0.8;
    if (timeSpent > 600) return 0.6; // 超过10分钟
    return 0.2;
  }
  
  /**
   * 生成学习报告
   */
  static async generateLearningReport(userId, period = '7days') {
    const { data: interactions } = await supabase
      .from('learning_interactions')
      .select('*')
      .eq('user_id', userId)
      .gte('timestamp', this.getStartDate(period));
    
    const report = {
      totalTime: this.sumTimeSpent(interactions),
      topicsStudied: this.getUniqueTopics(interactions),
      masteryGains: await this.calculateMasteryGains(userId, period),
      strengths: await this.identifyStrengths(userId),
      weaknesses: await this.identifyWeaknesses(userId),
      learningPatterns: this.analyzeLearningPatterns(interactions),
      recommendations: await this.generateRecommendations(userId)
    };
    
    return report;
  }
}
```

---

## 🚀 部署与上线

### 分阶段实施计划

**Phase 1: 基础设施 (Week 1-2)**
- ✅ 数据库schema扩展
- ✅ 学生画像服务
- ✅ 基础AI集成

**Phase 2: 核心功能 (Week 3-5)**
- ✅ AI决策引擎
- ✅ 个性化内容生成
- ✅ 自适应学习界面

**Phase 3: 高级功能 (Week 6-8)**
- ✅ 元认知引导
- ✅ 间隔重复系统
- ✅ 学习路径规划

**Phase 4: 优化与迭代 (Week 9-12)**
- ✅ 数据分析与反馈
- ✅ AI模型优化
- ✅ 用户体验改进

---

## 📝 总结

这个实施方案:
- ✅ **理论驱动**: 基于7大教育理论
- ✅ **数据驱动**: 持续收集和分析学习数据
- ✅ **AI驱动**: 智能决策和内容生成
- ✅ **学生中心**: 真正的个性化学习体验
- ✅ **可扩展**: 模块化设计,易于迭代

**核心价值**:
> 不是简单的"AI题库",而是一个**智能学习伙伴**,能够:
> - 理解每个学生的独特需求
> - 提供恰到好处的挑战和支持
> - 培养终身学习能力
> - 让学习变得高效且有意义

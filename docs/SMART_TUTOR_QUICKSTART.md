# SmartTutor 快速入门指南

## 🎯 你已经完成的工作

✅ 数据库迁移脚本: `supabase_smart_learning_migration.sql`  
✅ 核心服务: `src/services/smartTutor.js`  
✅ 对话组件: `src/components/learning/SmartChat.jsx`  
✅ 样式文件: `src/components/learning/SmartChat.css`

---

## 📋 接下来的步骤

### 步骤1: 运行数据库迁移 (5分钟)

1. 打开Supabase Dashboard
2. 进入 SQL Editor
3. 复制 `supabase_smart_learning_migration.sql` 的内容
4. 粘贴并运行
5. 确认看到成功消息

**验证**:
```sql
-- 检查表是否创建成功
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('topic_snapshots', 'ai_conversations', 'ai_generated_problems');
```

---

### 步骤2: 确保Gemini API已配置 (5分钟)

检查你是否已经有 Gemini API 集成。如果没有,需要创建:

```javascript
// src/services/geminiAPI.js (如果还没有)

export async function callGeminiAPI(prompt) {
  try {
    // 方式1: 如果你有后端API
    const response = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    
    if (!response.ok) throw new Error('API调用失败');
    const data = await response.json();
    return data.response;
    
    // 方式2: 如果直接调用Gemini (需要API key)
    // const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
    // const response = await fetch(
    //   `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
    //   {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       contents: [{ parts: [{ text: prompt }] }]
    //     })
    //   }
    // );
    // const data = await response.json();
    // return data.candidates[0].content.parts[0].text;
    
  } catch (error) {
    console.error('Gemini API错误:', error);
    throw error;
  }
}
```

---

### 步骤3: 集成到QuadraticFunctions页面 (10分钟)

修改 `src/pages/subjects/math/QuadraticFunctions.jsx`:

```jsx
// 1. 添加导入
import SmartChat from '../../../components/learning/SmartChat';
import '../../../components/learning/SmartChat.css';

// 2. 在组件中添加状态
const [showSmartChat, setShowSmartChat] = useState(false);

// 3. 修改现有的"AI互动学习"按钮
<button
  onClick={() => setShowSmartChat(!showSmartChat)}
  className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
>
  <MessageCircle className="w-5 h-5" />
  {showSmartChat ? '关闭AI对话' : 'AI智能对话'}
</button>

// 4. 在页面内容中添加SmartChat组件
{showSmartChat && (
  <div className="mb-8">
    <SmartChat 
      topicId="二次函数"
      topicName="二次函数"
      onClose={() => setShowSmartChat(false)}
    />
  </div>
)}
```

**完整示例**:

```jsx
const QuadraticFunctions = () => {
  const [activeTab, setActiveTab] = useState('concept');
  const [showSmartChat, setShowSmartChat] = useState(false); // 新增

  // ... 其他代码 ...

  return (
    <TopicLayout
      meta={meta}
      info={info}
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      actions={
        <button
          onClick={() => setShowSmartChat(!showSmartChat)}
          className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" />
          {showSmartChat ? '关闭AI对话' : 'AI智能对话'}
        </button>
      }
    >
      {/* 智能对话组件 - 放在最前面 */}
      {showSmartChat && (
        <div className="mb-8 animate-fadeIn">
          <SmartChat 
            topicId="二次函数"
            topicName="二次函数"
            onClose={() => setShowSmartChat(false)}
          />
        </div>
      )}

      {/* 原有的Tab内容 */}
      {activeTab === 'concept' && (
        // ... 原有代码 ...
      )}
      
      {/* ... 其他tabs ... */}
    </TopicLayout>
  );
};
```

---

### 步骤4: 测试 (10分钟)

1. **启动开发服务器**:
   ```bash
   npm run dev
   ```

2. **访问页面**:
   打开 `http://localhost:5173/subjects/math/quadratic-functions`

3. **测试对话**:
   - 点击"AI智能对话"按钮
   - 看到AI打招呼
   - 输入问题,如"什么是二次函数?"
   - 检查AI是否根据你的水平回复

4. **检查数据库**:
   ```sql
   -- 查看对话记录
   SELECT * FROM ai_conversations WHERE user_id = 'your-user-id';
   
   -- 查看知识点快照
   SELECT * FROM topic_snapshots WHERE user_id = 'your-user-id';
   ```

---

## 🎨 可选优化

### 优化1: 添加移动端支持

在 `SmartChat.jsx` 中已经包含了响应式设计,但你可以添加全屏模式:

```jsx
// 移动端全屏模式
const [isFullscreen, setIsFullscreen] = useState(false);

// 在移动端自动全屏
useEffect(() => {
  if (window.innerWidth < 768) {
    setIsFullscreen(true);
  }
}, []);
```

### 优化2: 添加快捷回复

```jsx
const QuickReplies = ({ onSelect }) => {
  const replies = [
    "这个概念是什么意思?",
    "能举个例子吗?",
    "我不太理解,能换个方式讲吗?",
    "给我出道练习题吧"
  ];
  
  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {replies.map((reply, i) => (
        <button
          key={i}
          onClick={() => onSelect(reply)}
          className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-sm hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
        >
          {reply}
        </button>
      ))}
    </div>
  );
};
```

### 优化3: 添加学习进度显示

```jsx
// 在SmartChat组件中
const [mastery, setMastery] = useState(0);

useEffect(() => {
  loadMastery();
}, [topicId]);

const loadMastery = async () => {
  const { data } = await supabase
    .from('topic_snapshots')
    .select('mastery_score')
    .eq('user_id', user.id)
    .eq('topic_id', topicId)
    .single();
  
  setMastery(data?.mastery_score || 0);
};

// 在头部显示
<div className="mt-2">
  <div className="flex items-center gap-2">
    <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500"
        style={{ width: `${mastery * 100}%` }}
      />
    </div>
    <span className="text-xs font-semibold">
      {(mastery * 100).toFixed(0)}%
    </span>
  </div>
</div>
```

---

## 🐛 常见问题

### Q1: AI回复很慢怎么办?

**A**: 添加流式响应(可选):

```javascript
// 在smartTutor.js中
static async chatStream(userId, topicId, userMessage, onChunk) {
  // 实现流式响应
  // 每收到一个token就调用onChunk
}
```

### Q2: 如何调整AI的回复风格?

**A**: 修改 `smartTutor.js` 中的 `buildSmartPrompt` 函数:

```javascript
// 更友好
【重要原则】
- 像朋友一样聊天,不要太正式
- 多用emoji 😊
- 回复简短(100字以内)

// 更专业
【重要原则】
- 使用准确的数学术语
- 提供详细的推导过程
- 回复可以较长(200-300字)
```

### Q3: 如何添加更多知识点?

**A**: 只需在调用时传入不同的topicId:

```jsx
<SmartChat 
  topicId="一元二次方程"
  topicName="一元二次方程"
/>
```

系统会自动为每个知识点创建独立的对话和掌握度追踪。

---

## 📊 数据监控

### 查看学习数据

```sql
-- 用户学习统计
SELECT * FROM user_learning_stats WHERE user_id = 'your-user-id';

-- 最近对话
SELECT 
  topic_id,
  total_messages,
  updated_at
FROM ai_conversations 
WHERE user_id = 'your-user-id'
ORDER BY updated_at DESC;

-- 需要复习的知识点
SELECT * FROM get_today_reviews('your-user-id');
```

---

## 🚀 下一步

完成基础集成后,你可以:

1. **添加更多知识点** - 复制QuadraticFunctions的模式
2. **实现智能练习** - 参考 `SOLO_DEVELOPER_ROADMAP.md` Week 2
3. **添加复习提醒** - 实现间隔重复系统
4. **优化prompt** - 根据真实对话数据调整

---

## 💡 提示

- **先测试基础功能** - 确保对话能正常工作
- **收集真实数据** - 看看AI的回复质量如何
- **迭代优化prompt** - 这是最重要的优化点
- **关注用户反馈** - 真实用户的体验最重要

---

## 🎉 恭喜!

你已经完成了SmartTutor的基础实现!

现在你有了:
- ✅ 真正的AI个性化对话
- ✅ 自动的学习进度追踪
- ✅ 简单的间隔重复系统
- ✅ 可扩展的架构

**开始使用吧!** 🚀

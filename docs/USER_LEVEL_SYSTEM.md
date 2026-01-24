# 用户等级系统说明

## 概述
用户等级系统根据完成的作业总数（`total_sessions_created`）动态计算，显示在：
- 个人资料页面的头像下方
- 右上角 Header 的用户头像徽章
- 用户下拉菜单中

## 等级规则（扩展至 500 题）

| 等级 | 完成作业数 | 中文称号 | 英文称号 | 说明 |
|------|-----------|---------|---------|------|
| Lv.1 | 0-4 题 | 新手学习者 | Beginner | 刚开始学习之旅 |
| Lv.2 | 5-14 题 | 初级学习者 | Novice | 初步掌握学习方法 |
| Lv.3 | 15-29 题 | 勤奋学习者 | Diligent | 展现学习热情 |
| Lv.4 | 30-49 题 | 熟练学习者 | Proficient | 学习习惯已养成 |
| Lv.5 | 50-99 题 | 进阶学者 | Advanced | 进入高级学习阶段 |
| Lv.6 | 100-149 题 | 资深学者 | Veteran | 经验丰富的学习者 |
| Lv.7 | 150-199 题 | 高级学者 | Expert | 学习能力卓越 |
| Lv.8 | 200-299 题 | 学习专家 | Specialist | 专业级学习者 |
| Lv.9 | 300-499 题 | 学习大师 | Master | 大师级学习成就 |
| Lv.10 | 500+ 题 | 学习宗师 | Grandmaster | 最高荣誉 |

## 技术实现

### 1. 等级计算函数（共享工具）
**文件**: `src/utils/levelSystem.js`

```javascript
export const calculateLevel = (totalSessions) => {
    if (totalSessions >= 500) return 10; // 学习宗师
    if (totalSessions >= 300) return 9;  // 学习大师
    if (totalSessions >= 200) return 8;  // 学习专家
    if (totalSessions >= 150) return 7;  // 高级学者
    if (totalSessions >= 100) return 6;  // 资深学者
    if (totalSessions >= 50) return 5;   // 进阶学者
    if (totalSessions >= 30) return 4;   // 熟练学习者
    if (totalSessions >= 15) return 3;   // 勤奋学习者
    if (totalSessions >= 5) return 2;    // 初级学习者
    return 1;                            // 新手学习者
};
```

### 2. 辅助函数

#### 获取等级称号
```javascript
export const getLevelTitle = (level, lang = 'zh')
```
返回对应等级的中英文称号。

#### 获取等级进度
```javascript
export const getLevelProgress = (totalSessions)
```
返回等级进度信息，包括：
- 当前等级
- 当前题目数
- 当前等级门槛
- 下一等级门槛
- 进度百分比
- 距离下一等级还需题目数

#### 获取等级颜色
```javascript
export const getLevelColors = (level)
```
返回等级对应的渐变色方案，用于视觉展示。

### 3. 数据获取
从 Supabase 的 `user_stats` 表中获取 `total_sessions_created` 字段：
```javascript
const { data: userStats } = await supabase
    .from('user_stats')
    .select('total_sessions_created')
    .eq('user_id', user.id)
    .single();

const total = userStats?.total_sessions_created || 0;
const level = calculateLevel(total);
```

### 4. 显示位置

#### a. 个人资料页面
- **文件**: `src/components/settings/ProfileSettings.jsx`
- **位置**: 头像下方的黄色徽章
- **显示**: `Lv.{userLevel}`

#### b. Header 右上角
- **文件**: `src/components/layout/Header.jsx`
- **位置**: 
  - 用户头像下方的小徽章
  - 用户下拉菜单中的等级标签
- **显示**: `Lv.{userLevel}`

## 特点

1. **动态更新**: 每次用户完成新作业后，等级会自动更新
2. **持久化**: 使用 `user_stats` 表的累积数据，即使删除作业也不影响等级
3. **视觉反馈**: 使用醒目的黄橙渐变徽章显示等级
4. **激励机制**: 鼓励用户持续学习，完成更多作业
5. **全局显示**: 在多个位置同步显示，增强用户成就感
6. **扩展性强**: 支持 10 个等级，覆盖 0-500+ 题目范围

## 等级进阶建议

| 当前等级 | 下一目标 | 需要完成 | 建议 |
|---------|---------|---------|------|
| Lv.1 → Lv.2 | 5 题 | 5 题 | 每天1题，一周达成 |
| Lv.2 → Lv.3 | 15 题 | 10 题 | 保持学习节奏 |
| Lv.3 → Lv.4 | 30 题 | 15 题 | 养成学习习惯 |
| Lv.4 → Lv.5 | 50 题 | 20 题 | 进入高级阶段 |
| Lv.5 → Lv.6 | 100 题 | 50 题 | 挑战百题里程碑 |
| Lv.6 → Lv.7 | 150 题 | 50 题 | 成为资深学者 |
| Lv.7 → Lv.8 | 200 题 | 50 题 | 专家之路 |
| Lv.8 → Lv.9 | 300 题 | 100 题 | 冲刺大师级别 |
| Lv.9 → Lv.10 | 500 题 | 200 题 | 终极挑战 |

## 未来扩展建议

### 短期优化
1. **等级称号显示**: 在等级徽章旁边显示称号（如"学习新星"）
2. **进度条**: 显示距离下一等级的进度条
3. **升级动画**: 升级时显示庆祝动画和提示
4. **等级提示**: 鼠标悬停显示详细等级信息

### 中期功能
1. **等级特权**: 不同等级解锁不同功能
   - Lv.3+: 解锁导出功能
   - Lv.5+: 解锁高级统计
   - Lv.7+: 解锁专属主题
   - Lv.10: 获得专属徽章和称号
2. **等级排行榜**: 展示用户等级排名
3. **等级分享**: 分享等级成就到社交媒体

### 长期规划
1. **多维度等级系统**:
   - 学科等级（数学大师、语文专家等）
   - 连续学习等级
   - 知识点掌握等级
2. **等级奖励系统**: 升级获得虚拟奖励或实物奖励
3. **等级挑战**: 特殊任务加速升级
4. **等级社区**: 同等级用户交流学习经验

## 技术架构

```
src/
├── utils/
│   └── levelSystem.js          # 等级系统核心工具
├── components/
│   ├── layout/
│   │   └── Header.jsx          # Header 中显示等级
│   └── settings/
│       └── ProfileSettings.jsx # 个人资料中显示等级
└── pages/
    └── Statistics.jsx          # 统计页面（未来可添加等级详情）
```

## 数据流

1. 用户完成作业 → `user_stats.total_sessions_created` 增加
2. 组件加载时获取 `total_sessions_created`
3. 调用 `calculateLevel()` 计算等级
4. 更新 UI 显示等级徽章
5. 用户看到最新等级信息

## 性能优化

- 使用 React hooks（useState, useEffect）管理状态
- 仅在用户登录状态变化时重新获取数据
- 等级计算为纯函数，性能开销极小
- 可考虑添加缓存机制减少数据库查询

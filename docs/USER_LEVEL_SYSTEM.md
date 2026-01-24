# 用户等级系统说明

## 概述
用户等级系统根据完成的作业总数（`total_sessions_created`）动态计算，显示在个人资料页面的头像下方。

## 等级规则

| 等级 | 完成作业数 | 说明 |
|------|-----------|------|
| Lv.1 | 0-9 题 | 新手学习者 |
| Lv.2 | 10-29 题 | 进阶学习者 |
| Lv.3 | 30-49 题 | 熟练学习者 |
| Lv.4 | 50-99 题 | 高级学习者 |
| Lv.5 | 100+ 题 | 学习大师 |

## 技术实现

### 1. 等级计算函数
```javascript
const calculateLevel = (totalSessions) => {
    if (totalSessions >= 100) return 5;
    if (totalSessions >= 50) return 4;
    if (totalSessions >= 30) return 3;
    if (totalSessions >= 10) return 2;
    return 1;
};
```

### 2. 数据获取
从 Supabase 的 `user_stats` 表中获取 `total_sessions_created` 字段：
```javascript
const { data: userStats } = await supabase
    .from('user_stats')
    .select('total_sessions_created')
    .eq('user_id', user.id)
    .single();
```

### 3. 显示位置
- **文件**: `src/components/settings/ProfileSettings.jsx`
- **位置**: 个人资料展示页面，头像下方的黄色徽章

## 特点

1. **动态更新**: 每次用户完成新作业后，等级会自动更新
2. **持久化**: 使用 `user_stats` 表的累积数据，即使删除作业也不影响等级
3. **视觉反馈**: 使用醒目的黄橙渐变徽章显示等级
4. **激励机制**: 鼓励用户持续学习，完成更多作业

## 未来扩展建议

1. **等级称号**: 为每个等级添加称号（如"学习新星"、"勤奋学者"等）
2. **等级特权**: 不同等级解锁不同功能或奖励
3. **进度条**: 显示距离下一等级的进度
4. **等级动画**: 升级时显示庆祝动画
5. **排行榜**: 展示用户等级排名

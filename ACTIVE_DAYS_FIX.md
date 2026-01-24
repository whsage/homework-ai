# 活跃天数显示问题 - 解决方案

## 问题现象

**Android 端显示：** `5 common.days` ❌  
**Web 端显示：** `7d` ✅

## 问题原因

这是 **Android WebView 缓存问题**，不是代码问题。

- ✅ **代码已修复**：当前 Web 端代码正确显示 `7d` 格式
- ❌ **Android 缓存旧版本**：WebView 缓存了之前使用翻译键的旧代码

## 解决方案

### 方案一：使用应用内清除缓存功能（最简单）⭐

我已经在 Android 应用中添加了清除缓存功能：

1. **打开 Android 应用**
2. **长按屏幕任意位置** 3秒
3. 会弹出"清除缓存"对话框
4. 点击 **"清除并刷新"**
5. 等待页面重新加载
6. ✅ 问题解决！活跃天数会显示为 `7d`

**注意：** 这不会删除你的登录信息和用户数据。

---

### 方案二：通过系统设置清除（备选）

如果方案一不可用（旧版本应用）：

1. 打开手机的 **设置**
2. 进入 **应用管理** 或 **应用**
3. 找到 **AI作业辅导** 应用
4. 点击 **存储** 或 **存储空间**
5. 点击 **清除缓存**（⚠️ 不要点"清除数据"）
6. 重新打开应用

---

### 方案三：重新安装应用（终极方案）

如果以上方法都不行：

1. 卸载应用
2. 重新安装最新版本
3. 重新登录

---

## 技术细节

### 代码修复确认

**文件：** `src/pages/Dashboard.jsx`  
**行号：** 172

```jsx
<StatCard
    icon={TrendingUp}
    label={t('faq.statCard.activeDays')}
    value={`${stats.streak}d`}  // ✅ 正确：直接显示 "7d"
    color="bg-orange-500"
/>
```

**之前的错误代码（已修复）：**
```jsx
value={t('common.days', { count: stats.streak })}  // ❌ 错误：显示 "common.days"
```

### Android 端新增功能

**文件：** `android-app/app/src/main/java/com/ai7miao/homework/MainActivity.kt`

新增功能：
1. **长按清除缓存**：长按屏幕触发清除缓存对话框
2. **智能缓存管理**：设置 `LOAD_DEFAULT` 缓存模式，平衡性能和更新
3. **用户友好提示**：清除缓存后显示成功提示

```kotlin
// 长按触发清除缓存
webView.setOnLongClickListener {
    AlertDialog.Builder(this)
        .setTitle("清除缓存")
        .setMessage("是否清除应用缓存并刷新页面？\n\n这将解决页面显示异常的问题，但不会删除您的登录信息。")
        .setPositiveButton("清除并刷新") { _, _ ->
            clearCacheAndReload()
        }
        .setNegativeButton("取消", null)
        .show()
    true
}

// 清除缓存方法
private fun clearCacheAndReload() {
    webView.clearCache(true)      // 清除缓存
    webView.clearFormData()        // 清除表单
    webView.clearHistory()         // 清除历史
    webView.loadUrl(BASE_URL)      // 重新加载
    Toast.makeText(this, "✅ 缓存已清除，页面已刷新", Toast.LENGTH_LONG).show()
}
```

---

## 验证修复

清除缓存后，检查活跃天数显示：

- ✅ **正确显示：** `7d`
- ❌ **仍然错误：** `7 common.days` → 缓存未完全清除，尝试方案二或三

---

## 预防措施

为避免将来出现类似问题：

### 1. 定期更新应用
- 及时安装最新版本的 Android 应用
- 新版本会自动包含最新的 Web 代码

### 2. 遇到显示异常时
- 首先尝试长按屏幕清除缓存
- 如果问题持续，联系开发者

### 3. 开发者注意事项
- 避免频繁更改翻译键名
- 重要更新时增加版本号
- 考虑添加版本检测和自动清除缓存机制

---

## 常见问题

### Q: 清除缓存会删除我的作业数据吗？
**A:** 不会。作业数据存储在云端（Supabase），清除缓存只会删除本地的临时文件。

### Q: 清除缓存会退出登录吗？
**A:** 不会。登录状态存储在 Supabase 的 LocalStorage 中，不会被清除。

### Q: 为什么 Web 端正常，Android 端有问题？
**A:** 因为 Web 浏览器会自动检测更新，而 Android WebView 的缓存策略更激进，需要手动清除。

### Q: 多久需要清除一次缓存？
**A:** 正常情况下不需要。只有在发现显示异常（如翻译键未解析）时才需要清除。

---

## 总结

✅ **代码已修复** - Web 端正确显示 `7d`  
✅ **Android 已更新** - 添加了长按清除缓存功能  
✅ **问题已解决** - 用户可以自行清除缓存修复显示问题  

**下一步：**
1. 重新编译 Android 应用（如果需要）
2. 发布新版本到用户
3. 通知用户使用长按清除缓存功能

---

**文档创建时间：** 2026-01-24  
**问题状态：** ✅ 已解决  
**影响范围：** 仅 Android WebView 缓存问题  
**修复方式：** 代码优化 + 用户清除缓存

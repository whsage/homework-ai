# Android Studio 生成 APK 文件指南

## 📱 快速生成 APK（推荐方法）

### 方法一：生成 Debug APK（最快）

#### 步骤：

1. **打开项目**
   - 启动 Android Studio
   - 选择 `File` → `Open`
   - 导航到 `d:\wenh\AI\homework\android-app`
   - 点击 `OK`

2. **等待 Gradle 同步**
   - Android Studio 会自动同步项目
   - 等待底部状态栏显示 "Gradle sync finished"
   - 如果提示更新 Gradle 或插件，可以选择 "Don't remind me again"

3. **生成 Debug APK**
   - 点击菜单栏 `Build` → `Build Bundle(s) / APK(s)` → `Build APK(s)`
   - 或者使用快捷键：`Ctrl + Shift + A`，输入 "Build APK"，回车

4. **等待编译完成**
   - 右下角会显示编译进度
   - 编译成功后会弹出通知："APK(s) generated successfully"

5. **找到 APK 文件**
   - 点击通知中的 `locate` 链接
   - 或者手动打开：`d:\wenh\AI\homework\android-app\app\build\outputs\apk\debug\`
   - APK 文件名：`app-debug.apk`

---

### 方法二：生成 Release APK（正式版）

#### 步骤：

1. **打开项目**（同上）

2. **生成签名密钥**（首次需要）
   - 点击 `Build` → `Generate Signed Bundle / APK`
   - 选择 `APK`，点击 `Next`
   - 点击 `Create new...`
   - 填写密钥信息：
     ```
     Key store path: D:\wenh\AI\homework\android-app\keystore.jks
     Password: 你的密码（记住它！）
     Alias: homework-key
     Password: 你的密码（同上）
     Validity (years): 25
     
     Certificate:
     First and Last Name: Your Name
     Organization: AI7Miao
     City: Your City
     State: Your State
     Country Code: CN
     ```
   - 点击 `OK`

3. **签名并生成 APK**
   - 选择刚创建的密钥库
   - 输入密码
   - 选择 `release` 构建变体
   - 勾选 `V1 (Jar Signature)` 和 `V2 (Full APK Signature)`
   - 点击 `Finish`

4. **找到 Release APK**
   - 位置：`d:\wenh\AI\homework\android-app\app\build\outputs\apk\release\`
   - 文件名：`app-release.apk`

---

## 🚀 安装到手机

### 方法 A：通过 USB 连接

1. **启用开发者选项**
   - 手机设置 → 关于手机
   - 连续点击"版本号" 7次
   - 返回设置 → 系统 → 开发者选项
   - 开启 "USB 调试"

2. **连接手机**
   - 用 USB 线连接手机和电脑
   - 手机上允许 USB 调试

3. **直接安装**
   - 在 Android Studio 中点击绿色的 ▶️ 运行按钮
   - 或者点击 `Run` → `Run 'app'`
   - 选择你的设备
   - 应用会自动安装并启动

### 方法 B：通过文件传输

1. **复制 APK 到手机**
   - 将 `app-debug.apk` 或 `app-release.apk` 复制到手机
   - 可以通过 USB、微信、QQ 等方式传输

2. **安装 APK**
   - 在手机上找到 APK 文件
   - 点击安装
   - 如果提示"未知来源"，允许安装

---

## 🔧 常见问题解决

### 问题 1：Gradle 同步失败

**解决方案：**
```
1. 检查网络连接
2. File → Invalidate Caches / Restart → Invalidate and Restart
3. 等待重新同步
```

### 问题 2：编译错误 "SDK not found"

**解决方案：**
```
1. File → Project Structure
2. SDK Location → 确认 Android SDK 路径正确
3. 如果没有 SDK，点击 "Download Android SDK"
```

### 问题 3：编译错误 "Kotlin version mismatch"

**解决方案：**
```
1. File → Settings → Plugins
2. 搜索 "Kotlin"
3. 更新 Kotlin 插件到最新版本
4. 重启 Android Studio
```

### 问题 4：APK 安装失败

**解决方案：**
```
1. 卸载旧版本应用
2. 重新安装新的 APK
3. 如果还是失败，检查手机存储空间
```

---

## 📋 版本更新检查清单

在生成新的 APK 之前，确认以下内容：

- [ ] ✅ MainActivity.kt 已更新（长按清除缓存功能）
- [ ] ✅ 代码已保存
- [ ] ✅ Gradle 同步成功
- [ ] ✅ 没有编译错误
- [ ] ✅ 版本号已更新（可选）

### 更新版本号（可选但推荐）

编辑 `app/build.gradle.kts`：

```kotlin
android {
    defaultConfig {
        versionCode = 2        // 从 1 改为 2
        versionName = "1.1.0"  // 从 "1.0" 改为 "1.1.0"
    }
}
```

---

## 🎯 本次更新内容

### 新增功能：
✅ **长按清除缓存**
- 长按屏幕任意位置触发清除缓存对话框
- 解决 WebView 缓存导致的显示问题
- 不会删除用户登录信息和数据

### 修复问题：
✅ **活跃天数显示异常**
- 修复 Android 端显示 `common.days` 的问题
- 现在正确显示 `7d` 格式

---

## 📦 生成的文件位置

### Debug APK（测试版）
```
路径：d:\wenh\AI\homework\android-app\app\build\outputs\apk\debug\app-debug.apk
大小：约 5-10 MB
用途：开发测试，可以直接安装
```

### Release APK（正式版）
```
路径：d:\wenh\AI\homework\android-app\app\build\outputs\apk\release\app-release.apk
大小：约 3-5 MB（经过优化）
用途：发布给用户，需要签名
```

---

## 🚀 快速操作总结

### 最快方式（Debug APK）：
```
1. 打开 Android Studio
2. 打开项目：d:\wenh\AI\homework\android-app
3. Build → Build Bundle(s) / APK(s) → Build APK(s)
4. 等待编译完成
5. 点击 "locate" 找到 APK
6. 传输到手机安装
```

### 正式发布（Release APK）：
```
1. 打开 Android Studio
2. 打开项目
3. Build → Generate Signed Bundle / APK
4. 选择 APK → Next
5. 创建/选择密钥库
6. 选择 release → Finish
7. 找到 app-release.apk
8. 发布给用户
```

---

## 💡 提示

1. **首次使用建议生成 Debug APK**，快速测试功能
2. **正式发布时使用 Release APK**，体积更小，性能更好
3. **保存好密钥库文件**（keystore.jks），丢失后无法更新应用
4. **记住密钥库密码**，忘记后无法使用该密钥库

---

## 📞 需要帮助？

如果遇到问题：
1. 查看 Android Studio 底部的 "Build" 标签页，查看详细错误信息
2. 检查 `DEVELOPMENT_GUIDE.md` 文档
3. 确保已安装 Android SDK 和必要的工具

---

**文档创建时间：** 2026-01-24  
**适用版本：** Android Studio Hedgehog | 2023.1.1 及以上  
**项目路径：** `d:\wenh\AI\homework\android-app`

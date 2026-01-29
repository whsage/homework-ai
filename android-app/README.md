# 智能作业辅导 Android App

基于 WebView 的 Android 应用，封装 https://ai7miao.com 网站。

## 📱 功能特性

- ✅ WebView 加载网站
- ✅ 原生启动页
- ✅ 相机拍照支持
- ✅ 文件上传支持
- ✅ 离线缓存
- ✅ 返回键优化
- ✅ 加载进度显示
- ✅ 错误页面处理

## 🛠️ 技术栈

- **语言**：Kotlin
- **最低 SDK**：API 24 (Android 7.0)
- **目标 SDK**：API 34 (Android 14)
- **核心组件**：WebView

## 📦 项目结构

```
android-app/
├── app/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/ai7miao/homework/
│   │   │   │   ├── MainActivity.kt          # 主活动
│   │   │   │   ├── SplashActivity.kt        # 启动页
│   │   │   │   └── WebViewClient.kt         # WebView 客户端
│   │   │   ├── res/
│   │   │   │   ├── layout/
│   │   │   │   │   ├── activity_main.xml    # 主界面布局
│   │   │   │   │   └── activity_splash.xml  # 启动页布局
│   │   │   │   ├── drawable/
│   │   │   │   │   ├── splash_background.xml
│   │   │   │   │   └── ic_launcher.xml
│   │   │   │   ├── values/
│   │   │   │   │   ├── colors.xml
│   │   │   │   │   ├── strings.xml
│   │   │   │   │   └── themes.xml
│   │   │   │   └── mipmap/                  # App 图标
│   │   │   └── AndroidManifest.xml          # 清单文件
│   │   └── build.gradle                     # 应用配置
│   └── build.gradle                         # 项目配置
├── gradle/                                  # Gradle 配置
└── README.md                                # 说明文档
```

## 🚀 开发步骤

### 1. 安装 Android Studio

下载地址：https://developer.android.com/studio

### 2. 导入项目

1. 打开 Android Studio
2. 选择 "Open an Existing Project"
3. 选择 `android-app` 文件夹
4. 等待 Gradle 同步完成

### 3. 运行应用

1. 连接 Android 设备或启动模拟器
2. 点击 "Run" 按钮（绿色三角形）
3. 选择设备
4. 等待安装和启动

### 4. 生成 APK

1. 菜单：Build → Build Bundle(s) / APK(s) → Build APK(s)
2. 等待构建完成
3. APK 位置：`app/build/outputs/apk/release/app-release.apk`

## 📝 配置说明

### 修改 App 名称

编辑 `app/src/main/res/values/strings.xml`：
```xml
<string name="app_name">智能作业辅导</string>
```

### 修改网站 URL

编辑 `app/src/main/java/com/ai7miao/homework/MainActivity.kt`：
```kotlin
private val BASE_URL = "https://ai7miao.com"
```

### 修改包名

1. 右键点击包名 → Refactor → Rename
2. 修改 `build.gradle` 中的 `applicationId`
3. 修改 `AndroidManifest.xml` 中的 `package`

## 🎨 自定义

### 更换 App 图标

1. 右键点击 `res` → New → Image Asset
2. 选择图标文件
3. 配置各种尺寸
4. 点击 "Next" 和 "Finish"

### 修改启动页

编辑 `app/src/main/res/layout/activity_splash.xml`

### 修改主题颜色

编辑 `app/src/main/res/values/colors.xml`

## 📱 发布到应用商店

### 生成签名 APK

1. 菜单：Build → Generate Signed Bundle / APK
2. 选择 APK
3. 创建或选择密钥库
4. 填写密钥信息
5. 选择 release 构建类型
6. 点击 "Finish"

### 应用商店提交

准备材料：
- APK 文件
- App 图标（512x512）
- 应用截图（4-8 张）
- 应用描述
- 隐私政策
- 用户协议

## 🐛 常见问题

### 1. WebView 无法加载网站

检查：
- 网络权限是否添加
- URL 是否正确
- 设备是否联网

### 2. 文件上传不工作

确保：
- 已添加存储权限
- 已实现 `onShowFileChooser`
- 已请求运行时权限

### 3. 相机无法打开

检查：
- 相机权限是否添加
- 是否在 Android 6.0+ 上请求权限

## 📄 许可证

MIT License

## 👨‍💻 作者

AI7Miao Team

## 📞 联系方式

- 网站：https://ai7miao.com
- 邮箱：support@ai7miao.com

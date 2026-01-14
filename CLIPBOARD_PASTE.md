# 剪贴板粘贴图片功能

## 功能说明

现在你可以直接从剪贴板粘贴图片到聊天输入框，无需手动选择文件！

## 使用方法

### 方法 1：键盘快捷键（推荐）
1. 复制任意图片到剪贴板（例如：截图、从网页复制图片等）
2. 点击聊天输入框，确保输入框获得焦点
3. 按 **Ctrl+V**（Windows/Linux）或 **Cmd+V**（Mac）
4. 图片会自动添加到输入框下方
5. 点击发送按钮即可发送

### 方法 2：右键粘贴
1. 复制图片到剪贴板
2. 在聊天输入框中右键点击
3. 选择"粘贴"
4. 图片会自动添加

## 支持的图片来源

✅ **屏幕截图**
- Windows: Win+Shift+S、Snipping Tool
- Mac: Cmd+Shift+4
- 第三方截图工具

✅ **从网页复制**
- 右键点击图片 → 复制图片

✅ **从文件管理器复制**
- 选择图片文件 → Ctrl+C

✅ **从其他应用复制**
- Word、PowerPoint、Excel 等

## 功能特点

🎯 **智能检测**
- 自动识别剪贴板中的图片
- 只处理图片类型，不影响文本粘贴

🚀 **即时反馈**
- 粘贴后立即显示文件名
- 控制台输出确认信息

🔄 **无缝集成**
- 与现有文件上传功能完美配合
- 可以随时移除已粘贴的图片

## 技术实现

### 核心代码
```javascript
// 处理剪贴板粘贴事件
const handlePaste = (e) => {
    const items = e.clipboardData?.items;
    if (!items) return;

    // 遍历剪贴板项目，查找图片
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        
        // 检查是否为图片类型
        if (item.type.indexOf('image') !== -1) {
            e.preventDefault(); // 阻止默认粘贴行为
            
            const file = item.getAsFile();
            if (file) {
                setSelectedFile(file);
                console.log('📋 已从剪贴板粘贴图片:', file.name);
            }
            break;
        }
    }
};
```

### 事件监听
```javascript
useEffect(() => {
    const inputElement = inputRef.current;
    if (inputElement) {
        inputElement.addEventListener('paste', handlePaste);
        return () => {
            inputElement.removeEventListener('paste', handlePaste);
        };
    }
}, []);
```

## 用户体验优化

### 1. 清晰的提示
输入框的 placeholder 更新为：
```
"问你的导师...（支持 Ctrl+V 粘贴图片）"
```

### 2. 控制台反馈
粘贴成功后会在控制台输出：
```
📋 已从剪贴板粘贴图片: image.png
```

### 3. 视觉确认
粘贴后会在输入框上方显示文件信息：
```
📎 image.png [X]
```

## 常见使用场景

### 场景 1：快速截图提问
1. 看到题目 → Win+Shift+S 截图
2. 点击输入框 → Ctrl+V 粘贴
3. 输入问题（可选）→ 发送

### 场景 2：从网页复制题目
1. 右键点击题目图片 → 复制图片
2. 回到聊天界面 → Ctrl+V
3. 发送

### 场景 3：从文档复制
1. 在 Word/PDF 中复制图片
2. 切换到聊天界面 → Ctrl+V
3. 发送

## 注意事项

⚠️ **输入框需要获得焦点**
- 粘贴前请确保点击了输入框
- 输入框有蓝色边框表示已获得焦点

⚠️ **只支持图片类型**
- 如果剪贴板中是文本，会正常粘贴文本
- 如果是其他文件类型，不会触发特殊处理

⚠️ **一次只能粘贴一张图片**
- 如需发送多张图片，请分多次粘贴发送

## 浏览器兼容性

✅ Chrome/Edge (推荐)
✅ Firefox
✅ Safari
✅ Opera

## 优势

相比传统的文件选择方式：
- ⚡ **更快速**：省去打开文件选择器的步骤
- 🎯 **更直观**：截图后直接粘贴，无需保存
- 💡 **更便捷**：支持从任何来源复制图片
- 🔄 **更灵活**：可以快速替换图片

## 未来改进方向

- [ ] 支持同时粘贴多张图片
- [ ] 显示图片预览缩略图
- [ ] 支持粘贴后编辑图片
- [ ] 添加拖拽粘贴功能

# 移动端优化方案

## 📱 当前移动端实现分析

### ✅ 已有的良好实践

1. **响应式布局**
   - 使用 Tailwind 的响应式类（`md:`, `sm:` 等）
   - 移动端和桌面端有不同的布局策略

2. **折叠式题目查看**
   - 移动端默认折叠题目区域
   - 用户可以通过按钮展开/收起

3. **自适应文字大小**
   - 使用 `text-sm md:text-base` 等响应式字体

4. **触摸友好的按钮**
   - 按钮有合适的点击区域（`p-2.5`, `p-3` 等）

---

## 🎯 需要优化的关键问题

### 1. **输入框体验问题** ⚠️ 高优先级

#### 问题描述
- 移动端键盘弹出时可能遮挡输入框
- 输入框可能被软键盘顶出视口
- 发送按钮可能不可见

#### 优化方案
```javascript
// ChatInput.jsx 优化
// 1. 监听键盘弹出事件
useEffect(() => {
    const handleResize = () => {
        // 检测键盘是否弹出
        const isKeyboardOpen = window.innerHeight < window.screen.height * 0.75;
        if (isKeyboardOpen && textareaRef.current) {
            // 滚动到输入框
            textareaRef.current.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);

// 2. 使用 viewport-fit=cover 处理安全区域
// 在 index.html 中添加：
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=1.0, user-scalable=no">
```

---

### 2. **对话消息显示优化** ⚠️ 高优先级

#### 问题描述
- 长消息在移动端可能显示不完整
- 图片消息占用过多空间
- 代码块和公式可能溢出

#### 优化方案
```javascript
// ChatInterface.jsx 优化

// 1. 限制图片最大高度
<img
    src={msg.imageUrl}
    alt="上传的图片"
    className="max-w-full rounded-lg mb-2 max-h-48 sm:max-h-64 object-contain border-2 border-indigo-400"
/>

// 2. 优化消息气泡宽度
<div className={clsx(
    "max-w-[85%] sm:max-w-[85%] md:max-w-[75%] rounded-2xl shadow-sm relative group transition-all text-sm sm:text-base",
    // ...
)}>

// 3. 添加横向滚动处理代码块
<div className="prose prose-sm max-w-none overflow-x-auto">
    <ReactMarkdown>{msg.text}</ReactMarkdown>
</div>
```

---

### 3. **题目查看体验** ⚠️ 中优先级

#### 问题描述
- 移动端默认折叠题目，用户可能不知道
- 图片缩放功能在移动端不够直观
- 切换题目和对话需要多次点击

#### 优化方案

**方案A：底部抽屉式设计**
```javascript
// 使用 Sheet/Drawer 组件
import { Sheet } from '@/components/ui/sheet';

const [isSheetOpen, setIsSheetOpen] = useState(false);

// 底部固定按钮
<button 
    onClick={() => setIsSheetOpen(true)}
    className="fixed bottom-20 right-4 md:hidden bg-indigo-600 text-white p-3 rounded-full shadow-lg z-50"
>
    <ImageIcon size={20} />
</button>

// 抽屉内容
<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
    <DocumentViewer />
</Sheet>
```

**方案B：标签页切换**
```javascript
const [activeTab, setActiveTab] = useState('chat'); // 'chat' | 'document'

// 移动端显示标签切换
<div className="md:hidden flex border-b">
    <button 
        onClick={() => setActiveTab('chat')}
        className={activeTab === 'chat' ? 'active' : ''}
    >
        💬 对话
    </button>
    <button 
        onClick={() => setActiveTab('document')}
        className={activeTab === 'document' ? 'active' : ''}
    >
        📄 题目
    </button>
</div>
```

---

### 4. **加载状态优化** ⚠️ 中优先级

#### 问题描述
- 移动端网络可能较慢
- 图片加载时间长
- 缺少骨架屏

#### 优化方案
```javascript
// DocumentViewer.jsx 添加骨架屏
{isLoading ? (
    <div className="p-4 space-y-3 animate-pulse">
        {/* 标题骨架 */}
        <div className="h-6 bg-slate-200 rounded w-3/4"></div>
        {/* 图片骨架 */}
        <div className="h-64 bg-slate-200 rounded"></div>
        {/* 文字骨架 */}
        <div className="space-y-2">
            <div className="h-4 bg-slate-200 rounded"></div>
            <div className="h-4 bg-slate-200 rounded w-5/6"></div>
        </div>
    </div>
) : (
    // 正常内容
)}
```

---

### 5. **手势交互优化** ⚠️ 低优先级

#### 问题描述
- 缺少滑动手势
- 图片缩放不够流畅
- 没有下拉刷新

#### 优化方案
```javascript
// 使用 react-use-gesture 库
import { useGesture } from '@use-gesture/react';

const bind = useGesture({
    onPinch: ({ offset: [scale] }) => {
        setImageScale(scale);
    },
    onDrag: ({ offset: [x, y] }) => {
        setImagePosition({ x, y });
    }
});

<div {...bind()} style={{ touchAction: 'none' }}>
    <img src={imageUrl} />
</div>
```

---

### 6. **性能优化** ⚠️ 高优先级

#### 问题描述
- 移动端性能较弱
- 长对话列表可能卡顿
- 图片未懒加载

#### 优化方案
```javascript
// 1. 虚拟滚动（长对话列表）
import { useVirtualizer } from '@tanstack/react-virtual';

const virtualizer = useVirtualizer({
    count: messages.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => 100,
});

// 2. 图片懒加载
<img 
    src={imageUrl} 
    loading="lazy"
    decoding="async"
/>

// 3. 使用 React.memo 优化消息组件
const MessageBubble = React.memo(({ message }) => {
    // ...
});
```

---

## 🚀 实施优先级

### 第一阶段（立即实施）
1. ✅ **输入框键盘适配** - 解决最常见的移动端问题
2. ✅ **消息显示优化** - 确保内容正确显示
3. ✅ **图片大小限制** - 避免占用过多空间

### 第二阶段（本周内）
4. ⚡ **加载骨架屏** - 提升感知性能
5. ⚡ **题目查看优化** - 改进交互流程
6. ⚡ **性能优化** - 提升流畅度

### 第三阶段（后续迭代）
7. 🎨 **手势交互** - 增强用户体验
8. 🎨 **下拉刷新** - 添加便捷功能
9. 🎨 **离线支持** - PWA 优化

---

## 📐 移动端设计规范

### 触摸目标尺寸
- 最小点击区域：44x44px
- 按钮内边距：至少 12px
- 间距：至少 8px

### 字体大小
- 正文：16px（移动端）
- 小字：14px
- 标题：18-20px
- 避免小于 14px 的字体

### 间距
- 容器内边距：16-24px
- 元素间距：8-16px
- 区块间距：24-32px

### 安全区域
- 顶部：考虑刘海屏（env(safe-area-inset-top)）
- 底部：考虑 Home Indicator（env(safe-area-inset-bottom)）

```css
/* 在 index.css 中添加 */
.safe-area-top {
    padding-top: env(safe-area-inset-top);
}

.safe-area-bottom {
    padding-bottom: env(safe-area-inset-bottom);
}
```

---

## 🧪 测试清单

### 设备测试
- [ ] iPhone SE (小屏幕)
- [ ] iPhone 12/13/14 (标准屏幕)
- [ ] iPhone 14 Pro Max (大屏幕)
- [ ] Android 小屏设备
- [ ] Android 大屏设备
- [ ] iPad (平板)

### 功能测试
- [ ] 键盘弹出时输入框可见
- [ ] 图片上传和预览正常
- [ ] 长消息正确换行
- [ ] 代码块和公式不溢出
- [ ] 滚动流畅无卡顿
- [ ] 触摸操作响应灵敏
- [ ] 横屏模式正常显示

### 性能测试
- [ ] 首屏加载时间 < 3s
- [ ] 滚动帧率 > 30fps
- [ ] 图片加载渐进式
- [ ] 内存占用合理

---

## 💡 最佳实践建议

### 1. 使用移动优先设计
```css
/* 默认移动端样式 */
.button {
    padding: 12px;
    font-size: 16px;
}

/* 桌面端增强 */
@media (min-width: 768px) {
    .button {
        padding: 16px;
        font-size: 18px;
    }
}
```

### 2. 避免固定定位冲突
```javascript
// 使用 sticky 代替 fixed（在某些情况下）
className="sticky top-0 z-10"
```

### 3. 优化触摸反馈
```css
/* 添加触摸高亮 */
button {
    -webkit-tap-highlight-color: rgba(99, 102, 241, 0.1);
}

/* 禁用长按菜单（某些元素） */
img {
    -webkit-touch-callout: none;
}
```

### 4. 使用原生滚动
```css
/* 启用平滑滚动 */
.scroll-container {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
```

---

## 🔧 推荐的工具和库

### UI 组件
- **Radix UI** - 无样式的可访问组件
- **Headless UI** - Tailwind 官方组件库
- **Vaul** - 移动端抽屉组件

### 手势处理
- **@use-gesture/react** - 手势识别
- **framer-motion** - 动画和手势

### 性能优化
- **@tanstack/react-virtual** - 虚拟滚动
- **react-lazy-load-image-component** - 图片懒加载

### 调试工具
- **eruda** - 移动端调试工具
- **vconsole** - 移动端控制台

---

## 📊 性能指标目标

| 指标 | 目标值 | 当前值 | 优先级 |
|------|--------|--------|--------|
| FCP (首次内容绘制) | < 1.5s | ? | 高 |
| LCP (最大内容绘制) | < 2.5s | ? | 高 |
| FID (首次输入延迟) | < 100ms | ? | 中 |
| CLS (累积布局偏移) | < 0.1 | ? | 中 |
| TTI (可交互时间) | < 3.5s | ? | 高 |

---

## 🎯 下一步行动

1. **立即实施**：输入框键盘适配
2. **本周完成**：消息显示优化 + 骨架屏
3. **下周计划**：题目查看体验改进
4. **持续优化**：性能监控和改进

需要我开始实施哪个优化项目？

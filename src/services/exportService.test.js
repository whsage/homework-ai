/**
 * 导出服务测试用例
 * 
 * 这个文件包含了导出功能的测试示例和使用说明
 */

import { exportSessions, exportSessionAsJSON, exportSessionAsMarkdown } from '../services/exportService';

// 示例会话数据
const sampleSession = {
    id: 'abc123-def456-ghi789',
    title: '数学作业 - 二次方程',
    subject: '数学',
    created_at: '2026-01-11T10:30:00Z',
    updated_at: '2026-01-11T11:00:00Z',
    user_id: 'user123'
};

// 示例消息数据
const sampleMessages = [
    {
        id: 1,
        session_id: 'abc123-def456-ghi789',
        role: 'user',
        content: '请帮我解这道二次方程：x² + 5x + 6 = 0',
        created_at: '2026-01-11T10:30:00Z',
        image_url: null
    },
    {
        id: 2,
        session_id: 'abc123-def456-ghi789',
        role: 'assistant',
        content: JSON.stringify({
            analysis: '这是一个标准的二次方程，形式为 ax² + bx + c = 0，其中 a=1, b=5, c=6',
            hint: '你可以尝试因式分解或使用求根公式',
            guidance: '让我们先尝试因式分解。我们需要找到两个数，它们的和是5，积是6。你能想到是哪两个数吗？'
        }),
        created_at: '2026-01-11T10:31:00Z',
        image_url: null
    },
    {
        id: 3,
        session_id: 'abc123-def456-ghi789',
        role: 'user',
        content: '是 2 和 3 吗？',
        created_at: '2026-01-11T10:32:00Z',
        image_url: null
    },
    {
        id: 4,
        session_id: 'abc123-def456-ghi789',
        role: 'assistant',
        content: JSON.stringify({
            analysis: '学生正确识别了因式分解所需的数字',
            hint: '很好！现在试着写出因式分解的形式',
            guidance: '正确！2 + 3 = 5，2 × 3 = 6。所以方程可以写成 (x + 2)(x + 3) = 0。接下来，你能求出 x 的值吗？'
        }),
        created_at: '2026-01-11T10:33:00Z',
        image_url: null
    }
];

/**
 * 测试 JSON 导出
 */
export async function testJSONExport() {
    console.log('=== 测试 JSON 导出 ===');

    try {
        const jsonData = await exportSessionAsJSON(sampleSession);
        console.log('JSON 导出成功：');
        console.log(JSON.stringify(jsonData, null, 2));
        return jsonData;
    } catch (error) {
        console.error('JSON 导出失败：', error);
        throw error;
    }
}

/**
 * 测试 Markdown 导出
 */
export async function testMarkdownExport() {
    console.log('=== 测试 Markdown 导出 ===');

    try {
        const markdown = await exportSessionAsMarkdown(sampleSession);
        console.log('Markdown 导出成功：');
        console.log(markdown);
        return markdown;
    } catch (error) {
        console.error('Markdown 导出失败：', error);
        throw error;
    }
}

/**
 * 测试批量导出
 */
export async function testBatchExport() {
    console.log('=== 测试批量导出 ===');

    const sessionIds = ['session1', 'session2', 'session3'];

    try {
        // 测试 JSON 格式
        console.log('批量导出为 JSON...');
        await exportSessions(sessionIds, 'json');

        // 测试 Markdown 格式
        console.log('批量导出为 Markdown...');
        await exportSessions(sessionIds, 'markdown');

        console.log('批量导出测试完成');
    } catch (error) {
        console.error('批量导出失败：', error);
        throw error;
    }
}

/**
 * 预期的 JSON 输出示例
 */
export const expectedJSONOutput = {
    sessionId: 'abc123-def456-ghi789',
    title: '数学作业 - 二次方程',
    subject: '数学',
    createdAt: '2026-01-11T10:30:00Z',
    updatedAt: '2026-01-11T11:00:00Z',
    totalMessages: 4,
    conversation: [
        {
            role: 'user',
            content: '请帮我解这道二次方程：x² + 5x + 6 = 0',
            timestamp: '2026-01-11T10:30:00Z',
            imageUrl: null
        },
        {
            role: 'assistant',
            content: {
                analysis: '这是一个标准的二次方程，形式为 ax² + bx + c = 0，其中 a=1, b=5, c=6',
                hint: '你可以尝试因式分解或使用求根公式',
                guidance: '让我们先尝试因式分解。我们需要找到两个数，它们的和是5，积是6。你能想到是哪两个数吗？'
            },
            timestamp: '2026-01-11T10:31:00Z',
            imageUrl: null
        }
        // ... 更多消息
    ]
};

/**
 * 预期的 Markdown 输出示例
 */
export const expectedMarkdownOutput = `
# 数学作业 - 二次方程

**科目**: 数学  
**创建时间**: 2026-01-11 10:30:00  
**会话ID**: abc123-def456-ghi789  
**消息数量**: 4  

---

## 👤 学生 - 2026-01-11 10:30:00

请帮我解这道二次方程：x² + 5x + 6 = 0

---

## 🤖 AI导师 - 2026-01-11 10:31:00

### 📊 分析
这是一个标准的二次方程，形式为 ax² + bx + c = 0，其中 a=1, b=5, c=6

### 💡 提示
你可以尝试因式分解或使用求根公式

### 🎯 引导
让我们先尝试因式分解。我们需要找到两个数，它们的和是5，积是6。你能想到是哪两个数吗？

---
`;

// 在浏览器控制台中运行测试
if (typeof window !== 'undefined') {
    window.testExport = {
        testJSONExport,
        testMarkdownExport,
        testBatchExport,
        expectedJSONOutput,
        expectedMarkdownOutput
    };

    console.log('导出测试工具已加载！');
    console.log('在控制台中运行以下命令进行测试：');
    console.log('- window.testExport.testJSONExport()');
    console.log('- window.testExport.testMarkdownExport()');
    console.log('- window.testExport.testBatchExport()');
}

import { supabase } from '../supabase';
import { Document, Paragraph, TextRun, ImageRun, HeadingLevel, AlignmentType, Packer } from 'docx';
import { jsPDF } from 'jspdf';

/**
 * 导出服务 - 处理作业会话的批量导出
 */

/**
 * 格式化时间戳为可读格式
 */
const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
};

/**
 * 获取会话的完整对话记录
 */
const getSessionMessages = async (sessionId) => {
    const { data, error } = await supabase
        .from('messages')
        .select('*')
        .eq('session_id', sessionId)
        .order('created_at', { ascending: true });

    if (error) {
        console.error('Error fetching messages:', error);
        return [];
    }

    return data.map(msg => {
        let content = msg.content;

        // 解析 AI 消息的 JSON 格式
        if (msg.role === 'assistant') {
            try {
                const parsed = JSON.parse(msg.content);
                content = {
                    analysis: parsed.analysis || '',
                    hint: parsed.hint || '',
                    guidance: parsed.guidance || ''
                };
            } catch (e) {
                content = msg.content;
            }
        }

        return {
            role: msg.role,
            content: content,
            timestamp: msg.created_at,
            imageUrl: msg.image_url || null
        };
    });
};

/**
 * 导出单个会话为 JSON 格式
 */
export const exportSessionAsJSON = async (session) => {
    const messages = await getSessionMessages(session.id);

    return {
        sessionId: session.id,
        title: session.title || '未命名会话',
        subject: session.subject || '通用',
        createdAt: session.created_at,
        updatedAt: session.updated_at,
        totalMessages: messages.length,
        conversation: messages
    };
};

/**
 * 导出单个会话为 Markdown 格式
 */
export const exportSessionAsMarkdown = async (session) => {
    const messages = await getSessionMessages(session.id);

    let markdown = `# ${session.title || '未命名会话'}\n\n`;
    markdown += `**科目**: ${session.subject || '通用'}  \n`;
    markdown += `**创建时间**: ${formatTimestamp(session.created_at)}  \n`;
    markdown += `**会话ID**: ${session.id}  \n`;
    markdown += `**消息数量**: ${messages.length}  \n\n`;
    markdown += `---\n\n`;

    messages.forEach((msg, index) => {
        const role = msg.role === 'user' ? '👤 学生' : '🤖 AI导师';
        const time = formatTimestamp(msg.timestamp);

        markdown += `## ${role} - ${time}\n\n`;

        if (msg.imageUrl) {
            markdown += `![上传的图片](${msg.imageUrl})\n\n`;
        }

        if (typeof msg.content === 'object') {
            // AI 消息的结构化内容
            if (msg.content.analysis) {
                markdown += `### 📊 分析\n${msg.content.analysis}\n\n`;
            }
            if (msg.content.hint) {
                markdown += `### 💡 提示\n${msg.content.hint}\n\n`;
            }
            if (msg.content.guidance) {
                markdown += `### 🎯 引导\n${msg.content.guidance}\n\n`;
            }
        } else {
            markdown += `${msg.content}\n\n`;
        }

        markdown += `---\n\n`;
    });

    return markdown;
};

/**
 * 批量导出多个会话
 */
export const exportMultipleSessions = async (sessions, format = 'json') => {
    const exports = [];

    for (const session of sessions) {
        if (format === 'json') {
            const data = await exportSessionAsJSON(session);
            exports.push(data);
        } else if (format === 'markdown') {
            const data = await exportSessionAsMarkdown(session);
            exports.push({
                sessionId: session.id,
                title: session.title || '未命名会话',
                content: data
            });
        }
    }

    return exports;
};

/**
 * 下载 JSON 文件
 */
export const downloadJSON = (data, filename = 'homework_export') => {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${filename}_${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

/**
 * 下载 Markdown 文件
 */
export const downloadMarkdown = (content, filename = 'homework_export') => {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${filename}_${Date.now()}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

/**
 * 下载多个 Markdown 文件为 ZIP（简化版：分别下载）
 * 注意：真正的 ZIP 需要额外的库如 JSZip
 */
export const downloadMultipleMarkdown = (sessions) => {
    sessions.forEach((session, index) => {
        setTimeout(() => {
            downloadMarkdown(session.content, `${session.title || 'session'}_${session.sessionId.slice(0, 8)}`);
        }, index * 500); // 延迟下载避免浏览器阻止
    });
};

/**
 * 主导出函数 - 处理批量导出
 */
export const exportSessions = async (sessionIds, format = 'json') => {
    try {
        // 获取会话详情
        const { data: sessions, error } = await supabase
            .from('sessions')
            .select('*')
            .in('id', sessionIds)
            .order('created_at', { ascending: false });

        if (error) throw error;
        if (!sessions || sessions.length === 0) {
            throw new Error('未找到要导出的会话');
        }

        // 导出数据
        if (format === 'word' || format === 'pdf') {
            // Word 和 PDF 只支持单个会话导出
            if (sessions.length > 1) {
                throw new Error('Word 和 PDF 格式暂不支持批量导出，请一次选择一个会话');
            }

            if (format === 'word') {
                await exportSessionAsWord(sessions[0]);
            } else if (format === 'pdf') {
                await exportSessionAsPDF(sessions[0]);
            }
        } else {
            const exportedData = await exportMultipleSessions(sessions, format);

            // 下载文件
            if (format === 'json') {
                const filename = sessions.length === 1
                    ? `${sessions[0].title || 'homework'}_${sessions[0].id.slice(0, 8)}`
                    : `homework_batch_${sessions.length}sessions`;
                downloadJSON(exportedData, filename);
            } else if (format === 'markdown') {
                if (sessions.length === 1) {
                    downloadMarkdown(exportedData[0].content, `${exportedData[0].title}_${exportedData[0].sessionId.slice(0, 8)}`);
                } else {
                    downloadMultipleMarkdown(exportedData);
                }
            }
        }

        return {
            success: true,
            count: sessions.length,
            format: format
        };
    } catch (error) {
        console.error('Export error:', error);
        throw error;
    }
};

/**
 * 下载图片并转换为 ArrayBuffer
 */
const fetchImageAsArrayBuffer = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch image');
        return await response.arrayBuffer();
    } catch (error) {
        console.error('Error fetching image:', error);
        return null;
    }
};

/**
 * 导出单个会话为 Word 格式
 */
export const exportSessionAsWord = async (session) => {
    const messages = await getSessionMessages(session.id);

    // 创建文档段落数组
    const docParagraphs = [];

    // 标题
    docParagraphs.push(
        new Paragraph({
            text: session.title || '未命名会话',
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { after: 300 }
        })
    );

    // 会话信息
    docParagraphs.push(
        new Paragraph({
            children: [
                new TextRun({ text: '科目: ', bold: true }),
                new TextRun(session.subject || '通用')
            ],
            spacing: { after: 100 }
        }),
        new Paragraph({
            children: [
                new TextRun({ text: '创建时间: ', bold: true }),
                new TextRun(formatTimestamp(session.created_at))
            ],
            spacing: { after: 100 }
        }),
        new Paragraph({
            children: [
                new TextRun({ text: '消息数量: ', bold: true }),
                new TextRun(messages.length.toString())
            ],
            spacing: { after: 400 }
        })
    );

    // 分隔线
    docParagraphs.push(
        new Paragraph({
            text: '─────────────────────────────────────',
            alignment: AlignmentType.CENTER,
            spacing: { after: 300 }
        })
    );

    // 对话内容 - 使用 for 循环以支持 async/await
    for (let index = 0; index < messages.length; index++) {
        const msg = messages[index];
        const role = msg.role === 'user' ? '👤 学生' : '🤖 AI导师';
        const time = formatTimestamp(msg.timestamp);

        // 角色和时间
        docParagraphs.push(
            new Paragraph({
                children: [
                    new TextRun({ text: `${role} - ${time}`, bold: true, size: 24 })
                ],
                spacing: { before: 300, after: 200 }
            })
        );

        // 图片（如果有）
        if (msg.imageUrl) {
            // 尝试嵌入图片
            try {
                const imageBuffer = await fetchImageAsArrayBuffer(msg.imageUrl);
                if (imageBuffer) {
                    docParagraphs.push(
                        new Paragraph({
                            children: [
                                new ImageRun({
                                    data: imageBuffer,
                                    transformation: {
                                        width: 400,  // 图片宽度（像素）
                                        height: 300  // 图片高度（像素）
                                    }
                                })
                            ],
                            spacing: { after: 200 }
                        })
                    );
                } else {
                    // 如果图片下载失败，显示链接
                    docParagraphs.push(
                        new Paragraph({
                            children: [
                                new TextRun({ text: '[图片] ', italics: true, color: '666666' }),
                                new TextRun({ text: msg.imageUrl, size: 18, color: '0066CC' })
                            ],
                            spacing: { after: 150 }
                        })
                    );
                }
            } catch (error) {
                console.error('Error embedding image:', error);
                // 出错时显示链接
                docParagraphs.push(
                    new Paragraph({
                        children: [
                            new TextRun({ text: '[图片] ', italics: true, color: '666666' }),
                            new TextRun({ text: msg.imageUrl, size: 18, color: '0066CC' })
                        ],
                        spacing: { after: 150 }
                    })
                );
            }
        }

        // 消息内容
        if (typeof msg.content === 'object') {
            // AI 消息的结构化内容
            if (msg.content.analysis) {
                docParagraphs.push(
                    new Paragraph({
                        children: [
                            new TextRun({ text: '📊 分析', bold: true })
                        ],
                        spacing: { before: 100, after: 100 }
                    }),
                    new Paragraph({
                        text: msg.content.analysis,
                        spacing: { after: 200 }
                    })
                );
            }
            if (msg.content.hint) {
                docParagraphs.push(
                    new Paragraph({
                        children: [
                            new TextRun({ text: '💡 提示', bold: true })
                        ],
                        spacing: { before: 100, after: 100 }
                    }),
                    new Paragraph({
                        text: msg.content.hint,
                        spacing: { after: 200 }
                    })
                );
            }
            if (msg.content.guidance) {
                docParagraphs.push(
                    new Paragraph({
                        children: [
                            new TextRun({ text: '🎯 引导', bold: true })
                        ],
                        spacing: { before: 100, after: 100 }
                    }),
                    new Paragraph({
                        text: msg.content.guidance,
                        spacing: { after: 200 }
                    })
                );
            }
        } else {
            docParagraphs.push(
                new Paragraph({
                    text: msg.content,
                    spacing: { after: 200 }
                })
            );
        }

        // 分隔线
        if (index < messages.length - 1) {
            docParagraphs.push(
                new Paragraph({
                    text: '─────────────────────────────────────',
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 200, after: 200 }
                })
            );
        }
    }

    // 创建文档
    const doc = new Document({
        sections: [{
            properties: {},
            children: docParagraphs
        }]
    });

    // 生成并下载
    const blob = await Packer.toBlob(doc);
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${session.title || 'homework'}_${session.id.slice(0, 8)}_${Date.now()}.docx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

/**
 * 导出单个会话为纯文本格式（替代 PDF，避免中文乱码）
 */
export const exportSessionAsPDF = async (session) => {
    const messages = await getSessionMessages(session.id);

    // 创建纯文本内容
    let textContent = '';

    // 标题
    textContent += '═'.repeat(60) + '\n';
    textContent += `  ${session.title || '未命名会话'}\n`;
    textContent += '═'.repeat(60) + '\n\n';

    // 会话信息
    textContent += `科目：${session.subject || '通用'}\n`;
    textContent += `创建时间：${formatTimestamp(session.created_at)}\n`;
    textContent += `消息数量：${messages.length}\n`;
    textContent += `会话ID：${session.id}\n`;
    textContent += '\n' + '─'.repeat(60) + '\n\n';

    // 对话内容
    messages.forEach((msg, index) => {
        const role = msg.role === 'user' ? '👤 学生' : '🤖 AI导师';
        const time = formatTimestamp(msg.timestamp);

        // 角色和时间
        textContent += `${role} - ${time}\n`;
        textContent += '─'.repeat(60) + '\n';

        // 图片提示
        if (msg.imageUrl) {
            textContent += `📎 包含图片附件\n\n`;
        }

        // 消息内容
        if (typeof msg.content === 'object') {
            // AI 消息的结构化内容
            if (msg.content.analysis) {
                textContent += `📊 分析\n`;
                textContent += `${msg.content.analysis}\n\n`;
            }
            if (msg.content.hint) {
                textContent += `💡 提示\n`;
                textContent += `${msg.content.hint}\n\n`;
            }
            if (msg.content.guidance) {
                textContent += `🎯 引导\n`;
                textContent += `${msg.content.guidance}\n\n`;
            }
        } else {
            textContent += `${msg.content}\n\n`;
        }

        // 分隔线（除了最后一条消息）
        if (index < messages.length - 1) {
            textContent += '\n' + '═'.repeat(60) + '\n\n';
        }
    });

    // 页脚
    textContent += '\n' + '─'.repeat(60) + '\n';
    textContent += `导出时间：${formatTimestamp(new Date().toISOString())}\n`;
    textContent += `HomeworkAI - 智能作业辅导系统\n`;

    // 下载为 TXT 文件
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${session.title || 'homework'}_${session.id.slice(0, 8)}_${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

/**
 * HTML 转义函数，防止 XSS
 */
const escapeHtml = (text) => {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML.replace(/\n/g, '<br>');
};

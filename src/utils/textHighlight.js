// 智能关键词高亮工具函数 - 优化版

/**
 * 自动识别并加粗文本中的关键词，提升做题时的可读性
 * 重点关注：专有名词、判断关键词、数值单位、操作指令
 * @param {string} text - 需要处理的文本
 * @returns {string} - 处理后的文本（Markdown 格式）
 */
export const highlightKeywords = (text) => {
    // 如果文本为空或已包含代码块，跳过处理
    if (!text || text.includes('```')) return text;

    // 定义需要高亮的关键词类别
    const keywords = {
        // ========== 优先级 1：判断类关键词（最重要）==========
        judgement: [
            '正确', '错误', '对', '错', '是', '否',
            '能', '不能', '可以', '不可以', '应该', '不应该',
            '会', '不会', '必须', '不必', '需要', '不需要',
            '符合', '不符合', '满足', '不满足', '超过', '不超过',
            '大于', '小于', '等于', '不等于',
            '最大', '最小', '最多', '最少', '至少', '至多'
        ],

        // ========== 优先级 2：物理/化学专有名词 ==========
        physics: [
            // 电学
            '电功率', '电流', '电压', '电阻', '电能', '电功',
            '串联', '并联', '短路', '断路', '电路',
            '欧姆定律', '焦耳定律',

            // 力学
            '速度', '加速度', '力', '重力', '摩擦力', '压强',
            '功', '功率', '机械效率', '动能', '势能',

            // 热学
            '温度', '热量', '比热容', '内能',

            // 光学
            '折射', '反射', '光速', '波长', '频率'
        ],

        // ========== 优先级 3：数学专有名词 ==========
        math: [
            // 几何
            '面积', '周长', '体积', '表面积', '半径', '直径',
            '角度', '三角形', '正方形', '长方形', '圆', '扇形',

            // 代数
            '方程', '不等式', '函数', '解', '根', '系数',
            '平方', '立方', '开方', '因式分解',

            // 统计
            '平均数', '中位数', '众数', '概率', '百分比'
        ],

        // ========== 优先级 4：操作指令词 ==========
        operations: [
            '计算', '求', '解', '证明', '判断', '比较', '选择',
            '代入', '化简', '整理', '推导', '验证',
            '画出', '标出', '写出', '列出', '说明'
        ],

        // ========== 优先级 5：逻辑连接词 ==========
        logic: [
            '因为', '所以', '如果', '那么', '则',
            '由于', '因此', '故', '可得',
            '首先', '其次', '然后', '最后', '接着'
        ],

        // ========== 优先级 6：重点提示词 ==========
        emphasis: [
            '注意', '关键', '重点', '核心', '要点',
            '特别', '尤其', '务必', '千万', '切记'
        ]
    };

    let processedText = text;

    // ========== 步骤 1：高亮数字+单位组合（避免被单独高亮）==========
    const numberUnitPattern = /(\d+(?:\.\d+)?)\s*(千米\/小时|km\/h|米\/秒|m\/s|千米|公里|km|米|m|厘米|cm|毫米|mm|千克|kg|公斤|克|g|小时|h|分钟|min|秒|s|天|年|月|周|元|角|分|平方米|立方米|瓦|W|千瓦|kW|安|A|伏|V|欧|焦|J|牛|N|帕|Pa)/g;
    processedText = processedText.replace(numberUnitPattern, '**$1$2**');

    // ========== 步骤 2：按优先级高亮关键词 ==========
    // 合并所有关键词，按优先级和长度排序
    const allKeywords = [
        ...keywords.judgement,      // 优先级最高
        ...keywords.physics,
        ...keywords.math,
        ...keywords.operations,
        ...keywords.logic,
        ...keywords.emphasis
    ];

    // 按长度降序排序，优先匹配较长的词（避免"电功率"被"功率"替换）
    allKeywords.sort((a, b) => b.length - a.length);

    // 去重
    const uniqueKeywords = [...new Set(allKeywords)];

    uniqueKeywords.forEach(keyword => {
        // 简单的字符串替换，避免已加粗的内容被重复替换
        // 检查关键词前后是否已经有 **
        const pattern = keyword;
        const parts = processedText.split(pattern);

        // 重新组合，只在非加粗位置添加 **
        processedText = parts.map((part, index) => {
            if (index === parts.length - 1) return part;

            // 检查前面是否有 **
            const hasBoldBefore = part.endsWith('**');
            // 检查后面是否有 **
            const hasBoldAfter = parts[index + 1].startsWith('**');

            if (hasBoldBefore || hasBoldAfter) {
                return part + pattern;
            } else {
                return part + '**' + pattern + '**';
            }
        }).join('');
    });

    return processedText;
};

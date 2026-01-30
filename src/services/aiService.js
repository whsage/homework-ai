import OpenAI from "openai";
import { supabase } from "../supabase";

const API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY;

let client = null;

if (API_KEY) {
    console.log("Using API Key starting with:", API_KEY?.slice(0, 5));
    client = new OpenAI({
        apiKey: API_KEY,
        baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1",
        dangerouslyAllowBrowser: true
    });
    console.log("✓ Initialized Alibaba Cloud (Qwen) client");
} else {
    console.warn("No API Key found. AI features disabled.");
}

/**
 * 通用AI调用接口
 * @param {string} prompt - 提示词
 * @param {boolean} jsonMode - 是否强制JSON格式
 * @returns {Promise<string>} AI响应文本
 */
export const callAI = async (prompt, jsonMode = false) => {
    if (!client) {
        console.warn("No API Key found. Returning mock response.");
        return jsonMode ? "{}" : "模拟响应: 请配置API Key";
    }

    try {
        const completion = await client.chat.completions.create({
            model: "qwen-plus",
            messages: [{ role: "user", content: prompt }],
            response_format: jsonMode ? { type: "json_object" } : { type: "text" },
            temperature: 0.7
        });
        return completion.choices[0].message.content;
    } catch (error) {
        console.error("AI API Error:", error);
        throw error;
    }
};

const SYSTEM_PROMPT = `📚 你是一位具有启发性、温暖且逻辑严密的"全科辅导老师"。你的核心使命是引导学生思考，而非直接灌输答案。

═══════════════════════════════════════════════════════════════
【核心定位】
你不是一个简单的"识图/答题工具"，而是一位真正的导师。
你的目标：点燃思维火花，培养独立思考能力。
═══════════════════════════════════════════════════════════════

【工作流规范】

📝 **第一步：精准识别与转换**

**智能识别策略：**
- 首先快速浏览图片，判断题目类型（数学/理科 vs 文科）
- 精准识别图中所有文字内容

**分类处理：**
- **数学/理科题目**：数学公式必须严格使用标准 LaTeX 格式输出（如 $\\frac{a}{b}$、$x^2$）
- **语文/英语题目**：直接识别文字即可，无需 LaTeX 格式
- **混合题目**：根据具体内容灵活处理

**核心原则：**
- 确保学科术语的准确性和严谨性
- 不要在识别阶段就给出答案或过度分析
- 识别完成后，直接进入引导环节


🎯 **第二步：解题引导（拒绝直接给答案）**

**核心原则：简洁高效，灵活引导，避免冗长**

⚡ **简洁性要求（重要）：**
- 回复要简洁明了，避免过度解释
- guidance 部分控制在 3-5 个要点以内
- 每个要点用 1-2 句话说清楚
- 避免重复已经说过的内容

1️⃣ **肯定在前**
   - 无论学生回答正确与否，先对其思考过程中的闪光点给予肯定
   - 示例："你注意到了关键的物理量，这很棒！"
   - 示例："你的思路方向是对的，已经抓住了核心概念！"

2️⃣ **灵活拆解（根据题目实际情况调整）**

**复杂题目**（需要深度分析）：
   - 拆解为三个层次：
     * **已知条件**：题目明确给出的信息
     * **隐藏线索**：需要推理或转换的信息
     * **核心公式/方法**：解决问题的关键工具

**简单题目**（如实验步骤、概念辨析）：
   - 直接聚焦核心要点，不要生硬地套用"已知/隐藏/核心"框架
   - 用自然的语言引导思考
   - 示例："这道题的关键是理解每个选项的实验目的"
   - 示例："让我们一起看看这几个词的细微差别"

3️⃣ **公式+白话（仅在需要时使用）**
   - **有复杂公式的题目**：给出 LaTeX 公式后，紧跟白话解释
   - **无公式的题目**：不要强行使用公式，直接用自然语言解释
   - 示例（有公式）：
     * 公式：$F=G\\frac{m_1m_2}{r^2}$
     * 白话："这意味着距离越远，吸引力会迅速减弱"
   - 示例（无公式）：
     * 直接说："这个实验的目的是检验某种特性"

💡 **第三步：苏格拉底式互动**
- 在回复的末尾，抛出一个引导性问题
- 问题要**贴合题目实际**，不要生硬或过度延伸
- 示例：
  * 复杂题："如果我们将这个变量增加一倍，你觉得结果会发生什么变化？"
  * 简单题："你能说说为什么这个选项不合适吗？"
  * 实验题："你觉得这个步骤的目的是什么？"

🎨 **第四步：可视化建议（仅在适用时提供）**
- **需要画图的题目**：鼓励学生画受力图、函数图像等
- **不需要画图的题目**：不要强行建议可视化
- 示例（适用）："建议你画一个受力分析图，这样会更清晰"
- 示例（不适用）：直接跳过，不提可视化

**⚠️ 重要提醒：**
- 不要机械套用"已知条件、隐藏线索、核心方法"的模板
- 根据题目的复杂度和类型，灵活调整引导方式
- 简单题目用简洁自然的语言，复杂题目才需要详细拆解
- 保持对话的自然流畅，避免生硬的格式化表达
- **优先考虑简洁性，避免过度解释和重复**


═══════════════════════════════════════════════════════════════
【学科针对性表达】
═══════════════════════════════════════════════════════════════

📖 **文科（语文/英语）**
- 聚焦："意象、语境、情感"
- 解释为什么这个词/选项在特定语境下最贴切
- 引导学生体会语言的美感和深层含义
- 示例："这里用'徘徊'而不是'走动'，传达了主人公内心的犹豫不决"

🔬 **理科（数学/物理/化学）**
- 聚焦："模型、守恒、推导"
- 用 LaTeX 展示推导步骤
- 用生活化类比解释抽象概念
- 示例："电流就像水流，电压就像水压，电阻就像管道的粗细"

═══════════════════════════════════════════════════════════════
【数学公式格式规则（重要）】
═══════════════════════════════════════════════════════════════

- 所有数学公式必须用单个美元符号 $ 包裹（行内公式）
- LaTeX 命令必须使用双反斜杠，例如：$\\frac{a}{b}$
- 常用公式示例：
  * 分数：$\\frac{分子}{分母}$
  * 根号：$\\sqrt{x}$
  * 上标：$x^2$
  * 下标：$x_1$
  * 求和：$\\sum_{i=1}^{n}$
  * 积分：$\\int_{a}^{b}$
- 可以在公式中使用中文，但 LaTeX 命令必须正确

═══════════════════════════════════════════════════════════════
【输出格式（必须是有效的JSON）】
═══════════════════════════════════════════════════════════════

⚠️ **严格要求：JSON 必须只包含以下字段，不得添加任何额外字段！**

{
  "analysis": "简要分析学生当前的理解程度和思维亮点（内部使用，1-2句话）",
  "hint": "一个温暖的肯定 + 简短的引导性问题（2-3句话）",
  "guidance": "详细的引导步骤（使用Markdown格式，数学公式用$包裹，LaTeX命令用双反斜杠）",
  "question": "一个苏格拉底式的引导性问题，诱发下一步思考",
  "subject": "科目类型（必填）：Math、Chinese、English、Physics、Chemistry、Biology、History、Geography、General",
  "title": "（仅第一条消息时必填）5-10字的简短标题，概括题目核心内容",
  "tags": ["知识点1", "知识点2"] // （仅第一条消息时必填）提取1-3个具体的知识点标签
}

❌ **严禁添加以下字段：**
- is_new_problem, context, additional_notes, suggested_activity
- error_analysis, success_criteria, next_steps, parent_teacher_support
- visual_suggestion, emotional_support, summary_for_child
- 以及任何其他未在上述格式中列出的字段

❌ **如果图片中没有明确的作业题目：**
- 不要过度分析或编造题目
- 在 hint 中礼貌地说明"这张图片似乎不包含作业题目"
- 在 guidance 中建议用户重新上传或直接输入题目文字
- subject 设置为 "General"
- 不要生成 title 和 tags


═══════════════════════════════════════════════════════════════
【科目识别规则】
═══════════════════════════════════════════════════════════════

- 包含数字、计算、几何、代数、函数 → Math
- 包含拼音、汉字、古诗词、阅读理解、作文 → Chinese
- 包含英文单词、语法、阅读、写作 → English
- 包含力、运动、电路、光学、热学 → Physics
- 包含化学方程式、元素、反应、实验 → Chemistry
- 包含细胞、遗传、生态、进化 → Biology
- 包含历史事件、人物、朝代 → History
- 包含地形、气候、区域、地图 → Geography
- 其他根据内容判断 → General

═══════════════════════════════════════════════════════════════

// 辅助函数已移动到文件末尾

【标题生成规则】
═══════════════════════════════════════════════════════════════

当这是对话的第一条消息时，必须生成 title 字段：
- 数学题：提取核心概念，如"速度计算问题"、"分数加减法"、"三角形面积"
- 语文题：提取主题，如"拼音辨析"、"古诗词鉴赏"、"阅读理解"
- 英语题：提取重点，如"时态练习"、"单词拼写"、"完形填空"
- 物理题：如"牛顿第二定律"、"电路分析"、"自由落体"
- 化学题：如"化学方程式配平"、"酸碱中和"、"元素周期表"

═══════════════════════════════════════════════════════════════
【严格禁令】
═══════════════════════════════════════════════════════════════

❌ 严禁使用"根据分析，答案是D"这种机械表述
❌ 严禁在未解释逻辑的情况下堆砌公式
❌ 严禁直接给出最终答案
❌ 严禁忽略学生的思考过程，只关注结果

═══════════════════════════════════════════════════════════════
【学生掌握情况判断与会话收尾逻辑】
═══════════════════════════════════════════════════════════════

🎯 **判断掌握（Closure Check）**

当学生给出明确的肯定答复时，应判定为"已掌握"：
- 明确答案表述：如"那就是A了"、"答案是B"、"选C"
- 理解确认：如"明白了"、"懂了"、"原来如此"、"我知道了"
- 自信表达：如"我会了"、"理解了"、"清楚了"

**判断标准：**
- 学生的回答显示已经理解核心逻辑
- 学生能够自己得出结论或答案
- 之前的互动已经充分引导

**此时应立即收尾，不要再开启新的深度追问或展开复杂的隐藏线索分析。**

✅ **优雅收尾（Standard Wrap-up）**

当判定学生已掌握时，回复应遵循以下结构：

1️⃣ **即时肯定**（1-2句话）
   - 用简短有力的语言高度评价学生的表现
   - 示例：
     * "完全正确！👏 你已经精准捕捉到了意象背后的情感。"
     * "太棒了！你完美地运用了速度公式。"
     * "非常好！你的逻辑推理很严密。"

2️⃣ **简要总结**（可选，1句话）
   - 仅用一句话总结该题的核心技巧，作为最后的"点睛"
   - 示例：
     * "记住：文学作品中的动作描写往往暗含情感。"
     * "速度问题的关键就是先算时间间隔。"
     * "物理中的平方反比关系很常见，要多留意。"

3️⃣ **交还主动权**（1句话）
   - 礼貌地询问是否需要继续下一题
   - 不要强行深入或延伸
   - 示例：
     * "还有其他题目需要讨论吗？"
     * "需要我帮你看看下一道题吗？"
     * "继续下一题，还是想再巩固一下这个知识点？"

**收尾时的 JSON 格式：**

{
  "analysis": "学生已完全理解，可以收尾",
  "hint": "完全正确！👏 [简短肯定] [可选：一句话总结核心技巧]",
  "guidance": "",  // 留空或极简
  "question": "还有其他题目需要讨论吗？",  // 交还主动权
  "subject": "[科目]"
}

🚫 **收尾时的禁止行为**

❌ **严禁在学生明确表示懂了之后：**
- 继续抛出长篇大论的"白话解释"
- 继续展开"延伸思考"或"深度分析"
- 重新列出已讨论过的"已知条件"
- 开启新的复杂问题或假设场景
- 过度解释学生已经理解的概念

❌ **错误示例（学生说"明白了"后）：**
"很好！让我们再深入思考一下这个公式的物理意义...
已知条件：1. xxx 2. xxx 3. xxx
如果我们将速度提高到原来的3倍，你觉得会发生什么？"

✅ **正确示例（学生说"明白了"后）：**
hint: "完全正确！👏 你已经掌握了速度计算的核心方法。"
guidance: ""
question: "还有其他题目需要讨论吗？"


═══════════════════════════════════════════════════════════════
【示例对话】
═══════════════════════════════════════════════════════════════

**示例1：数学题（第一次提问）**
学生上传图片："一辆出租车从13:00到15:00行驶了120公里，求平均速度"

{
  "analysis": "这是一道速度计算题，学生需要理解速度公式和时间计算",
  "hint": "很好的问题！我注意到你已经找到了时间和距离这两个关键信息。",
  "guidance": "让我们一起拆解这道题：\n\n**已知条件：**\n- 起始时间：13:00\n- 结束时间：15:00\n- 行驶距离：120公里\n\n**隐藏线索：**\n- 需要先计算时间间隔\n\n**核心公式：**\n$v=\\frac{s}{t}$（速度=距离÷时间）\n\n💡 **白话解释：** 速度就是单位时间内走过的距离，比如每小时走多少公里。",
  "question": "你能先告诉我，从13:00到15:00一共经过了多少小时吗？",
  "subject": "Math",
  "title": "出租车速度计算"
}

**示例2：学生回答后**
学生："2小时"

{
  "analysis": "学生正确计算了时间间隔，可以引导下一步",
  "hint": "完全正确！👏 你已经掌握了第一步。",
  "guidance": "现在我们有了：\n- 距离 $s = 120$ 公里\n- 时间 $t = 2$ 小时\n\n回忆一下速度公式：$v=\\frac{s}{t}$",
  "question": "你能尝试把这两个数字代入公式，计算出平均速度吗？",
  "subject": "Math"
}

**示例3：物理题**
学生："为什么距离越远，引力越小？"

{
  "analysis": "学生在思考万有引力定律的物理意义",
  "hint": "这是一个非常深刻的问题！你已经注意到了距离和引力的关系。",
  "guidance": "让我们看看万有引力公式：\n\n$F=G\\frac{m_1m_2}{r^2}$\n\n💡 **白话解释：** 注意分母是 $r^2$（距离的平方），这意味着：\n- 距离变为2倍 → 引力变为 $\\frac{1}{4}$\n- 距离变为3倍 → 引力变为 $\\frac{1}{9}$\n\n这就像手电筒的光，离得越远，光越分散，越暗淡。",
  "question": "如果地球和月球的距离增加到原来的2倍，你觉得引力会变成原来的多少？",
  "subject": "Physics",
  "title": "万有引力定律"
}

**示例4：语文题**
学生："'徘徊'和'走动'有什么区别？"

{
  "analysis": "学生在辨析近义词的语境差异",
  "hint": "很好的观察！你注意到了这两个词的细微差别。",
  "guidance": "让我们从意象和情感角度分析：\n\n**'走动'：**\n- 中性词，单纯描述移动\n- 没有特定情感色彩\n\n**'徘徊'：**\n- 带有'来回'、'犹豫'的意味\n- 暗示内心的不确定、矛盾、思索\n\n💡 **语境示例：**\n- "他在房间里走动" → 只是在移动\n- "他在房间里徘徊" → 内心有事，犹豫不决",
  "question": "如果一篇文章写'主人公在十字路口徘徊'，你觉得作者想传达什么情感？",
  "subject": "Chinese",
  "title": "近义词辨析"
}

**示例5：学生已掌握（优雅收尾）**
学生回复："明白了，那就是选A了"

{
  "analysis": "学生已完全理解，可以收尾",
  "hint": "完全正确！👏 你已经精准捕捉到了这道题的核心逻辑。记住：文学作品中的动作描写往往暗含情感。",
  "guidance": "",
  "question": "还有其他题目需要讨论吗？",
  "subject": "Chinese"
}

**示例6：学生理解后的错误回复（反面教材）**
学生回复："懂了，谢谢"

❌ **错误回复（过度延伸）：**
{
  "hint": "很好！让我们再深入思考一下...",
  "guidance": "让我们回顾一下：\n\n**已知条件：**\n1. xxx\n2. xxx\n\n**延伸思考：**\n如果我们将这个概念应用到其他场景...",
  "question": "你能想到其他类似的例子吗？"
}

✅ **正确回复（简洁收尾）：**
{
  "analysis": "学生已理解，应该收尾",
  "hint": "太棒了！👏 你已经掌握了这个知识点。",
  "guidance": "",
  "question": "需要我帮你看看下一道题吗？",
  "subject": "Chinese"
}

═══════════════════════════════════════════════════════════════
【最终提醒】
════════════════════════════════════════════════════════════════

✅ 始终保持温暖、鼓励的语气
✅ 每次回复都要有"肯定+引导+提问"的结构
✅ 公式必须配白话解释
✅ 确保所有LaTeX命令使用双反斜杠
✅ 必须在返回的JSON中包含subject字段
✅ 第一条消息时必须包含title字段
✅ 新增question字段，用于苏格拉底式提问
`;

// Helper function: Get user context (grade, tone preference)
const getUserContextInstruction = async () => {
    try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return "";

        const { data } = await supabase.from('user_settings').select('settings').eq('user_id', user.id).single();
        const grade = data?.settings?.profile?.grade;

        if (!grade) return "";

        let instruction = `\n\n═══════════════════════════════════════════════════════════════\n【当前用户画像：${grade}】\n`;

        if (grade.includes('小学')) {
            instruction += `1. **语气风格**：亲切、活泼、非常有耐心（像邻家大哥哥/姐姐）。\n2. **语言要求**：多用 Emoji (🌟🔥👏)，拒绝晦涩术语，使用生活化比喻。\n3. **难度适应**：简单题目直接夸奖并给出答案，复杂题目拆解为"找一找、想一想、试一试"三步。`;
        } else if (grade.includes('初中')) {
            instruction += `1. **语气风格**：温和、坚定（标准辅导老师）。\n2. **语言要求**：清晰流畅，适当使用专业术语但要解释。\n3. **难度适应**：简单题目概括核心点，难题引导分析思路。`;
        } else {
            instruction += `1. **语气风格**：专业、严谨、高效（学术导师）。\n2. **语言要求**：直击重点，逻辑严密，拒绝废话。\n3. **难度适应**：简单问题直接一语道破，复杂问题提供深度推导。`;
        }
        instruction += `\n═══════════════════════════════════════════════════════════════`;
        return instruction;
    } catch (e) {
        console.warn('Failed to fetch user context:', e);
        return "";
    }
};


/**
 * 智能图片压缩
 * @param {File} file - 原始图片文件
 * @param {number} maxWidth - 最大宽度（默认 1920px）
 * @param {number} quality - 压缩质量 0-1（默认 0.85）
 * @returns {Promise<File>} 压缩后的图片文件
 */
async function compressImage(file, maxWidth = 1920, quality = 0.85) {
    return new Promise((resolve, reject) => {
        // 如果不是图片，直接返回原文件
        if (!file.type.startsWith('image/')) {
            resolve(file);
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = (e) => {
            const img = new Image();
            img.src = e.target.result;

            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;

                // 如果图片宽度超过最大宽度，按比例缩放
                if (width > maxWidth) {
                    height = (height * maxWidth) / width;
                    width = maxWidth;
                }

                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                // 转换为 Blob
                canvas.toBlob(
                    (blob) => {
                        if (blob) {
                            const compressedFile = new File([blob], file.name, {
                                type: 'image/jpeg',
                                lastModified: Date.now()
                            });

                            const originalSize = (file.size / 1024).toFixed(2);
                            const compressedSize = (compressedFile.size / 1024).toFixed(2);
                            const reduction = ((1 - compressedFile.size / file.size) * 100).toFixed(1);

                            console.log(`📸 图片压缩: ${originalSize}KB → ${compressedSize}KB (减少 ${reduction}%)`);
                            resolve(compressedFile);
                        } else {
                            reject(new Error('压缩失败'));
                        }
                    },
                    'image/jpeg',
                    quality
                );
            };

            img.onerror = () => reject(new Error('图片加载失败'));
        };

        reader.onerror = () => reject(new Error('文件读取失败'));
    });
}

/**
 * 分析问题复杂度
 * @param {string} text - 用户输入的文本
 * @returns {string} 'simple' | 'medium' | 'complex'
 */
function analyzeComplexity(text) {
    if (!text || text.length < 20) return 'simple';

    // 复杂度指标
    const hasMultipleQuestions = (text.match(/[？?]/g) || []).length > 1;
    const hasFormulas = /[∫∑∏√±×÷≈≠≤≥∞]/.test(text) || /\$.*\$/.test(text);
    const hasMultipleParts = /[①②③④⑤⑥⑦⑧⑨⑩]/.test(text) || /[(（][1-9][)）]/.test(text);
    const isLongText = text.length > 100;

    const complexityScore =
        (hasMultipleQuestions ? 1 : 0) +
        (hasFormulas ? 1 : 0) +
        (hasMultipleParts ? 1 : 0) +
        (isLongText ? 1 : 0);

    if (complexityScore >= 3) return 'complex';
    if (complexityScore >= 1) return 'medium';
    return 'simple';
}

export const sendMessageToTutor = async (userMessage, history = [], imageFile = null, existingSessionId = null, saveUserMessage = true) => {
    if (!client) {
        console.warn("No API Key found. Using mock response.");
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    analysis: "模拟模式激活。逻辑已跳过。",
                    hint: "这是一个模拟提示，因为没有配置 API 密钥。",
                    guidance: "请在 .env 文件中添加有效的 API Key 以获取真实的 AI 响应。\n\n$V = \\frac{4}{3}\\pi r^3$"
                });
            }, 1500);
        });
    }

    try {
        // 0. Get Current User
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            console.warn("User not logged in. DB operations will be skipped.");
        }

        let sessionId = existingSessionId;
        let finalImageUrl = null;

        // 1. 图片压缩（如果存在）
        let processedImageFile = imageFile;
        if (imageFile && imageFile.type.startsWith('image/')) {
            try {
                console.log('🔄 开始压缩图片...');
                processedImageFile = await compressImage(imageFile);
            } catch (error) {
                console.warn('图片压缩失败，使用原图:', error);
                processedImageFile = imageFile;
            }
        }

        // 2. Upload Image to Supabase Storage (if exists)
        if (processedImageFile && user) {
            try {
                const fileExt = processedImageFile.name.split('.').pop();
                const fileName = `${user.id}/${Date.now()}.${fileExt}`;

                const { error: uploadError } = await supabase.storage
                    .from('homework-images')
                    .upload(fileName, processedImageFile);

                if (uploadError) throw uploadError;

                const { data: { publicUrl } } = supabase.storage
                    .from('homework-images')
                    .getPublicUrl(fileName);

                finalImageUrl = publicUrl;
                console.log("Image uploaded to Supabase:", finalImageUrl);
            } catch (error) {
                console.error("Supabase Storage Error:", error);
                // Continue without image URL persistence if upload fails, 
                // but we still have the local file for the API call.
            }
        }

        // 3. Create/Get Session in DB
        // Calling API requires a session record per requirements.
        if (user) {
            if (!sessionId) {
                // Create new session with a temporary title
                // AI will update this to a better summary title in its first response
                const tempTitle = userMessage
                    ? (userMessage.length > 20 ? userMessage.slice(0, 20) + "..." : userMessage)
                    : "作业题目";

                const { data: sessionData, error: sessionError } = await supabase
                    .from('sessions')
                    .insert({
                        user_id: user.id,
                        title: tempTitle
                        // created_at is default
                    })
                    .select()
                    .single();

                if (sessionError) {
                    console.error("Failed to create session:", sessionError);
                } else {
                    sessionId = sessionData.id;
                    console.log("Created new session:", sessionId);
                }
            } else {
                // Ensure session exists or update 'last_accessed'? Optional.
            }

            // Insert USER message to DB (Only if saveUserMessage is true)
            if (sessionId && saveUserMessage) {
                const { error: msgError } = await supabase
                    .from('messages')
                    .insert({
                        session_id: sessionId,
                        role: 'user',
                        content: userMessage || (processedImageFile ? '[Image Upload]' : ''),
                        image_url: finalImageUrl
                    });
                if (msgError) console.error("Failed to insert user message:", msgError);
            }
        }

        // 4. 分析问题复杂度
        const complexity = analyzeComplexity(userMessage);
        console.log(`📊 问题复杂度: ${complexity}`);

        // 5. 根据复杂度调整参数
        const complexityConfig = {
            simple: { max_tokens: 800, temperature: 0.4 },   // 简单问题：快速简洁
            medium: { max_tokens: 1500, temperature: 0.5 },  // 中等问题：平衡
            complex: { max_tokens: 2500, temperature: 0.6 }  // 复杂问题：详细分析
        };

        const config = complexityConfig[complexity];
        console.log(`⚙️ AI 参数: max_tokens=${config.max_tokens}, temperature=${config.temperature}`);

        // 6. Get User Context (for personalization)
        const userContext = await getUserContextInstruction();

        // 7. Build Messages Array for AI
        const messages = [
            {
                role: "system",
                content: SYSTEM_PROMPT + `\n\n当前用户上下文：\n${userContext}`
            }
        ];

        // Add conversation history (if any)
        if (history && history.length > 0) {
            history.forEach(msg => {
                if (msg.type === 'user') {
                    messages.push({ role: "user", content: msg.text });
                } else if (msg.type === 'ai') {
                    messages.push({ role: "assistant", content: msg.text });
                }
            });
        }

        // Add current user message (with image if exists)
        if (processedImageFile) {
            // Convert image to base64 for vision model
            const base64Image = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(processedImageFile);
                reader.onload = () => resolve(reader.result);
                reader.onerror = reject;
            });

            messages.push({
                role: "user",
                content: [
                    {
                        type: "image_url",
                        image_url: {
                            url: base64Image
                        }
                    },
                    {
                        type: "text",
                        text: userMessage || "请帮我分析这道题目，引导我思考解题思路"
                    }
                ]
            });
        } else {
            messages.push({
                role: "user",
                content: userMessage
            });
        }

        // 8. Call AI API
        // Use vision model if there's an image
        const modelToUse = processedImageFile ? "qwen-vl-plus" : "qwen-plus";

        const completion = await client.chat.completions.create({
            model: modelToUse,
            messages: messages,
            response_format: { type: "json_object" },
            temperature: config.temperature, // 根据复杂度动态调整
            max_tokens: config.max_tokens,   // 根据复杂度动态调整
        });

        const responseText = completion.choices[0].message.content;
        console.log("AI Response:", responseText);

        let parsedResponse;
        try {
            parsedResponse = JSON.parse(responseText);

            // Validate and clean response - only keep required fields
            const validatedResponse = {
                analysis: parsedResponse.analysis || "无法分析",
                hint: parsedResponse.hint || "请提供更清晰的题目图片",
                guidance: parsedResponse.guidance || "",
                question: parsedResponse.question || "",
                subject: parsedResponse.subject || "General"
            };

            // Only include optional fields if they exist
            if (parsedResponse.title) validatedResponse.title = parsedResponse.title;
            if (parsedResponse.tags && Array.isArray(parsedResponse.tags)) {
                validatedResponse.tags = parsedResponse.tags.slice(0, 3); // Max 3 tags
            }

            parsedResponse = validatedResponse;

        } catch (e) {
            console.error("Failed to parse JSON response:", responseText);
            console.error("Parse error:", e);

            // Try to extract any useful text from the malformed response
            // let extractedText = responseText;
            try {
                // Try to find the hint or guidance in the malformed JSON
                const hintMatch = responseText.match(/"hint"\s*:\s*"([^"]+)"/);
                const guidanceMatch = responseText.match(/"guidance"\s*:\s*"([^"]+)"/);

                parsedResponse = {
                    analysis: "JSON 格式错误",
                    hint: hintMatch ? hintMatch[1] : "抱歉，我在理解这张图片时遇到了问题。",
                    guidance: guidanceMatch ? guidanceMatch[1] : "请确保上传的图片包含清晰的作业题目。",
                    question: "能否重新上传一张更清晰的题目图片？",
                    subject: "General"
                };
            } catch { // simplified catch
                parsedResponse = {
                    analysis: "解析失败",
                    hint: "抱歉，我在处理这张图片时遇到了技术问题。😔",
                    guidance: "**可能的原因：**\n\n1. 图片中没有明确的作业题目\n2. 图片质量不够清晰\n3. 图片内容与学习无关\n\n**建议：**\n- 重新拍摄一张包含完整题目的照片\n- 确保光线充足，文字清晰\n- 或者直接输入题目文字",
                    question: "需要我帮你看看其他题目吗？",
                    subject: "General"
                };
            }
        }

        // 4. Insert AI Response into DB
        if (sessionId && user) {
            // We store the raw JSON or just the guidance? 
            // Requirement: "将 AI 返回的 JSON 结果实时 insert 到 messages 表中"
            // Usually message content is string. If column is text, store stringified JSON?
            // Or maybe just the 'hint' or 'guidance'? 
            // Let's store the full JSON string to preserve structure, or just the main text.
            // PROBABLY strictly the JSON string as requested.

            const { error: aiMsgError } = await supabase
                .from('messages')
                .insert({
                    session_id: sessionId,
                    role: 'assistant',
                    content: JSON.stringify(parsedResponse),
                    // storing JSON string in content. The UI might need to parse it if loading from DB.
                    // For now, the in-memory state handles current view.
                });

            if (aiMsgError) console.error("Failed to insert AI message:", aiMsgError);

            // 5. Auto-update Session Title and Subject if provided
            const updateData = {};
            if (parsedResponse.title) {
                updateData.title = parsedResponse.title;
            }
            if (parsedResponse.subject) {
                updateData.subject = parsedResponse.subject;
            }

            if (Object.keys(updateData).length > 0) {
                const { error: updateError } = await supabase
                    .from('sessions')
                    .update(updateData)
                    .eq('id', sessionId);
                if (updateError) console.error("Failed to update session info:", updateError);
            }
        }

        return parsedResponse;
    } catch (error) {
        console.error("Error in AI service:", error);
        return {
            analysis: "Error",
            hint: "服务暂时不可用，请稍后再试。",
            guidance: "您可以检查网络连接或联系管理员。",
            question: "",
            subject: "Error"
        };
    }
};

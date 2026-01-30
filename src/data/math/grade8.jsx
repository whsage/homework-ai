import { Icons, PracticeProblem, Link, React, generateDefaultContent } from './common';

const {
    Lightbulb, Target, TrendingUp, Clock, Star, Brain, CheckCircle, Sparkles, ChevronRight, Calculator, Award
} = Icons;

export const grade8Content = {
    // ==================== 1. 三角形 ====================
    'mid-8-1-triangles': {
        meta: {
            title: "三角形全等及其判定 | AI7Miao数学",
            description: "学习三角形的三边关系、内角和定理，重点掌握全等三角形的性质和判定方法（SSS, SAS, ASA, AAS, HL）。",
            keywords: "三角形,全等三角形,SSS,SAS,全等判定"
        },
        info: {
            title: "全等三角形",
            description: "如果两块饼干形状大小一模一样，它们就是全等的。全等是几何证明的基石。",
            tags: [{ text: "几何基础", color: "indigo" }, { text: "证明核心", color: "red" }]
        },
        aiContext: "学生正在学习全等三角形。请引导学生理解为什么'SSA'（边边角）不能判定全等，可以通过举反例的方式。",
        aiChatTitle: "AI导师：寻找'双胞胎'",
        aiChatIntro: "你能一眼看出两个三角形是不是'双胞胎'吗？让我们学习几种快速识别的方法。",
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm">
                        <h3 className="font-bold text-lg mb-4">判定定理</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl">
                                <div className="font-bold text-indigo-700">SSS (边边边)</div>
                                <p className="text-sm">三边分别相等的两个三角形全等。</p>
                            </div>
                            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl">
                                <div className="font-bold text-indigo-700">SAS (边角边)</div>
                                <p className="text-sm">两边和它们的夹角分别相等的两个三角形全等。</p>
                            </div>
                            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl">
                                <div className="font-bold text-indigo-700">ASA (角边角)</div>
                                <p className="text-sm">两角和它们的夹边分别相等的两个三角形全等。</p>
                            </div>
                            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl">
                                <div className="font-bold text-indigo-700">AAS (角角边)</div>
                                <p className="text-sm">两角和其中一角的对边分别相等的两个三角形全等。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h3 className="font-bold mb-4">全等的性质</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>全等三角形的<strong>对应边相等</strong>。</li>
                        <li>全等三角形的<strong>对应角相等</strong>。</li>
                    </ul>
                </div>
            ),
            examples: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h4 className="font-bold mb-2">例题：证明</h4>
                    <p>已知：AB=AC, ∠B=∠C。求证：△ABD ≌ △ACD (D为BC中点)。</p>
                    <p className="mt-2 text-sm text-slate-600">
                        证明：∵ D是BC中点 ∴ BD=CD。<br />
                        在 △ABD 和 △ACD 中：<br />
                        AB=AC, ∠B=∠C, BD=CD<br />
                        ∴ △ABD ≌ △ACD (SAS)。
                    </p>
                </div>
            ),
            practice: (
                <PracticeProblem id={801} type="choice"
                    question="下列条件中，不能判定两个三角形全等的是？"
                    options={[{ label: 'A', value: 'SSS' }, { label: 'B', value: 'SAS' }, { label: 'C', value: 'SSA' }, { label: 'D', value: 'ASA' }]}
                    answer="C"
                    explanation="SSA（边边角）不能保证两个三角形全等，可能出现两个形状不同的三角形。"
                />
            )
        }
    },

    // ==================== 2. 因式分解 ====================
    'mid-8-1-factorization': {
        meta: {
            title: "因式分解 - 提公因式与公式法 | AI7Miao数学",
            description: "掌握提取公因式法和公式法（平方差、完全平方公式）分解因式，理解因式分解与整式乘法的互逆关系。",
            keywords: "因式分解,提公因式,公式法,完全平方公式"
        },
        info: {
            title: "因式分解",
            description: "把一个多项式化成几个整式的积的形式。它在解方程、分式运算中非常有用。",
            tags: [{ text: "代数运算", color: "blue" }]
        },
        aiContext: "学生学习因式分解。请强调因式分解要'分解彻底'。如果是 x^3 - x，要先提 x，再用平方差公式。",
        aiChatTitle: "AI导师：拆解多项式",
        aiChatIntro: "这就像把拼好的乐高模型拆回基础积木块。让我们来看看怎么拆得又快又好。",
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                        <h3 className="font-bold text-lg mb-4">基本方法</h3>
                        <div className="space-y-4">
                            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                                <div className="font-bold text-blue-600">1. 提公因式法</div>
                                <code className="text-lg">ma + mb + mc = m(a + b + c)</code>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                                <div className="font-bold text-blue-600">2. 公式法</div>
                                <p className="mb-2">平方差：<code className="mx-2">a² - b² = (a+b)(a-b)</code></p>
                                <p>完全平方：<code className="mx-2">a² ± 2ab + b² = (a ± b)²</code></p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h3 className="font-bold mb-2">易错点提示</h3>
                    <ul className="list-disc list-inside text-slate-600 space-y-1">
                        <li>分解要彻底，直到不能再分解为止。</li>
                        <li>提负号时，括号内各项都要变号。</li>
                        <li>结果必须是积的形式。</li>
                    </ul>
                </div>
            ),
            examples: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h4 className="font-bold mb-2">例题：综合运用</h4>
                    <p>分解因式：2x³ - 8x</p>
                    <p className="mt-2 text-sm text-slate-600">
                        解：<br />
                        原式 = 2x(x² - 4) （先提公因式）<br />
                        = 2x(x+2)(x-2) （再用平方差公式）
                    </p>
                </div>
            ),
            practice: (
                <PracticeProblem id={802} type="choice"
                    question="分解因式 x² - 4x + 4 的结果是？"
                    options={[{ label: 'A', value: '(x-2)(x+2)' }, { label: 'B', value: '(x-2)²' }, { label: 'C', value: '(x+2)²' }, { label: 'D', value: 'x(x-4)+4' }]}
                    answer="B"
                    explanation="这是完全平方公式 a² - 2ab + b² = (a-b)² 的形式。a=x, b=2。"
                />
            )
        }
    },

    // ==================== 3. 分式 ====================
    'mid-8-1-fractions': {
        meta: {
            title: "分式的性质与运算 | AI7Miao数学",
            description: "理解分式的概念，掌握分式的通分、约分及加减乘除混合运算，学会解分式方程。",
            keywords: "分式,分式方程,通分,约分"
        },
        info: {
            title: "分式",
            description: "整式除以整式，如果除式中含有字母，就叫分式。注意分母不能为零哦！",
            tags: [{ text: "代数运算", color: "blue" }]
        },
        aiContext: "学生在解分式方程。请务必提醒学生'检验'，解释如果不验根可能会出现增根导致错误。",
        aiChatTitle: "AI导师：当分母有字母",
        aiChatIntro: "分式和分数很像，但如果不小心'分母为零'的陷阱，整个数学大厦都会崩塌。",
        tabs: {
            concept: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h3 className="font-bold mb-3">核心概念</h3>
                    <p>形式：A / B （B中含有字母，且B≠0）</p>
                    <div className="mt-4 p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20">
                        <strong>警示：</strong> 解分式方程时，必须检验！因为去分母可能产生增根（使分母为0的根）。
                    </div>
                </div>
            ),
            properties: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h3 className="font-bold mb-2">基本性质</h3>
                    <p>分式的分子与分母同时乘（或除以）同一个不为0的整式，分式的值不变。</p>
                    <p className="text-sm mt-2 text-slate-500">→ 这是约分和通分的依据。</p>
                </div>
            ),
            examples: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h4 className="font-bold mb-2">例题：解分式方程</h4>
                    <p>2/x = 3/(x-1)</p>
                    <p className="mt-2 text-sm text-slate-600">
                        解：两边乘 x(x-1) 得：<br />
                        2(x-1) = 3x<br />
                        2x - 2 = 3x<br />
                        -x = 2， x = -2<br />
                        检验：当 x=-2 时，x(x-1) ≠ 0，∴ x=-2 是原方程的解。
                    </p>
                </div>
            ),
            practice: (
                <PracticeProblem id={803} type="text"
                    question="若分式 (x-1)/(x+2) 的值为0，则 x 的值是？"
                    answer="1"
                    explanation="分式值为0，意味着分子为0且分母不为0。x-1=0 得 x=1；此时分母 1+2=3≠0。所以 x=1。"
                />
            )
        }
    },

    // ==================== 4. 二元一次方程组 ====================
    'mid-8-1-binary-equations': {
        meta: {
            title: "二元一次方程组 - 代入与加减消元 | AI7Miao数学",
            description: "学习代入消元法和加减消元法解二元一次方程组，解决鸡兔同笼等实际应用问题。",
            keywords: "二元一次方程组,消元法,鸡兔同笼"
        },
        info: {
            title: "二元一次方程组",
            description: "含有两个未知数。核心思想是'消元'——把二元转化为一元来解决。",
            tags: [{ text: "代数", color: "blue" }]
        },
        aiContext: "学生学习消元法。请引导学生观察方程组的特点，判断是用代入法简单还是加减法简单。",
        aiChatTitle: "AI导师：各个击破",
        aiChatIntro: "两个未知数纠缠在一起怎么办？'消元'是我们的秘密武器，逐个击破！",
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                        <h3 className="font-bold mb-4">消元思想</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl">
                                <div className="font-bold text-yellow-700">代入消元法</div>
                                <p className="text-sm">把一个方程变形，代入另一个方程。</p>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                                <div className="font-bold text-green-700">加减消元法</div>
                                <p className="text-sm">两个方程相加减，消去系数相同（或相反）的未知数。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <p>通常情况下，如果某个未知数系数为1或-1，首选代入法；如果系数相同或互为相反数，首选加减法。</p>
                </div>
            ),
            examples: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h4 className="font-bold mb-2">例题：鸡兔同笼</h4>
                    <p>今有鸡兔同笼，上有三十五头，下有九十四足，问鸡兔各几何？</p>
                    <p className="mt-2 text-sm text-slate-600">
                        解：设鸡 x 只，兔 y 只。<br />
                        x + y = 35  ①<br />
                        2x + 4y = 94 ②<br />
                        解得：x = 23, y = 12。<br />
                        答：鸡23只，兔12只。
                    </p>
                </div>
            ),
            practice: (
                <PracticeProblem id={804} type="choice"
                    question="解方程组 { x + y = 5, x - y = 1 }"
                    options={[{ label: 'A', value: 'x=3, y=2' }, { label: 'B', value: 'x=2, y=3' }, { label: 'C', value: 'x=4, y=1' }, { label: 'D', value: 'x=1, y=4' }]}
                    answer="A"
                    explanation="两式相加：2x = 6, x = 3。代入第一式：3 + y = 5, y = 2。"
                />
            )
        }
    },

    // ==================== 5. 四边形 ====================
    'mid-8-2-quadrilaterals': {
        meta: {
            title: "平行四边形与特殊四边形 | AI7Miao数学",
            description: "学习平行四边形、矩形、菱形、正方形的性质与判定，理清它们的包含关系。",
            keywords: "四边形,平行四边形,矩形,菱形,正方形"
        },
        info: {
            title: "四边形",
            description: "从不规则到规则，正方形是四边形家族中最完美的成员。掌握判定树是关键。",
            tags: [{ text: "几何", color: "indigo" }, { text: "判定", color: "red" }]
        },
        aiContext: "学生容易混淆矩形和菱形的判定。请用集合图（Venn diagram）的思想解释正方形既是矩形又是菱形。",
        aiChatTitle: "AI导师：几何家族谱",
        aiChatIntro: "平行四边形、矩形、菱形...它们之间也是'亲戚'关系。你能理清这个家谱吗？",
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                        <h3 className="font-bold mb-4">四边形家族</h3>
                        <div className="flex flex-col gap-2 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                            <div>🔵 <strong>平行四边形</strong>：两组对边分别平行。</div>
                            <div className="pl-6">├── 🟡 <strong>矩形</strong>：有一个角是直角（或对角线相等）。</div>
                            <div className="pl-6">├── 🟢 <strong>菱形</strong>：有一组邻边相等（或对角线垂直）。</div>
                            <div className="pl-12">└── 🔴 <strong>正方形</strong>：既是矩形又是菱形。</div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h3 className="font-bold mb-2">对角线性质</h3>
                    <ul className="space-y-2 text-sm">
                        <li>平行四边形：互相平分。</li>
                        <li>矩形：互相平分且相等。</li>
                        <li>菱形：互相垂直平分，且每条对角线平分一组对角。</li>
                    </ul>
                </div>
            ),
            examples: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h4 className="font-bold mb-2">例题：判定</h4>
                    <p>判定：对角线互相垂直的平行四边形是菱形。</p>
                    <p className="mt-2 text-sm text-slate-600">
                        正确。这是菱形的判定定理之一。
                    </p>
                </div>
            ),
            practice: (
                <PracticeProblem id={805} type="choice"
                    question="下列性质中，菱形具有但矩形不一定具有的是？"
                    options={[{ label: 'A', value: '对角线相等' }, { label: 'B', value: '对角线互相平分' }, { label: 'C', value: '对角线互相垂直' }, { label: 'D', value: '对边相等' }]}
                    answer="C"
                    explanation="矩形对角线相等且平分，但不一定垂直。菱形对角线互相垂直。"
                />
            )
        }
    },

    // ==================== 6. 函数 ====================
    'mid-8-2-functions': {
        meta: {
            title: "函数的概念与表示方法 | AI7Miao数学",
            description: "初步认识函数的概念，理解自变量与函数值，掌握列表法、解析式法和图像法。",
            keywords: "函数,自变量,函数图像"
        },
        info: {
            title: "函数初步",
            description: "世界万物都是联系的。函数就是用来描述两个变量之间'依赖关系'的数学模型。",
            tags: [{ text: "函数概念", color: "blue" }]
        },
        aiContext: "学生初次接触函数，觉得抽象。请用'输入 -> 机器 -> 输出'的盒子模型来解释函数 f(x)。",
        aiChatTitle: "AI导师：神奇的魔法盒",
        aiChatIntro: "把一个数放进盒子里，出来另一个数。这就是函数。让我们看看这个盒子是怎么工作的。",
        tabs: {
            concept: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h3 className="font-bold mb-2">定义</h3>
                    <p>在变化过程中，如果有两个变量 x 和 y，并且对于 x 的每一个确定的值，y 都有唯一确定的值与其对应，那么 x 是自变量，y 是 x 的函数。</p>
                </div>
            ),
            properties: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h3 className="font-bold mb-2">表示方法</h3>
                    <ol className="list-decimal list-inside">
                        <li><strong>解析式法</strong>：如 y = 2x + 1</li>
                        <li><strong>列表法</strong>：画表格列出 x, y</li>
                        <li><strong>图像法</strong>：并在坐标系中画出点</li>
                    </ol>
                </div>
            ),
            examples: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h4 className="font-bold mb-2">例题：求自变量取值范围</h4>
                    <p>函数 y = 1 / √(x-2) 中，自变量 x 的取值范围是？</p>
                    <p className="mt-2 text-sm text-slate-600">
                        解：要使二次根式有意义，被开方数 x-2 ≥ 0。<br />
                        要使分式有意义，分母 √(x-2) ≠ 0。<br />
                        综上：x - 2 &gt; 0，即 x &gt; 2。
                    </p>
                </div>
            ),
            practice: (
                <PracticeProblem id={806} type="choice"
                    question="下列关系式中，y 不是 x 的函数的是？"
                    options={[{ label: 'A', value: 'y = x' }, { label: 'B', value: 'y = x²' }, { label: 'C', value: 'y² = x (x>0)' }, { label: 'D', value: 'y = 2x+1' }]}
                    answer="C"
                    explanation="对于 C: y²=x，当 x=4 时，y 可以是 2 或 -2，不是'唯一确定'的值，所以不是函数。"
                />
            )
        }
    },

    // ==================== 7. 一次函数 ====================
    'mid-8-2-linear-functions': {
        meta: {
            title: "一次函数 - 图像与 k, b 的关系 | AI7Miao数学",
            description: "掌握一次函数 y=kx+b 的图像与性质，理解 k 和 b 对直线位置的影响，解决实际应用题。",
            keywords: "一次函数,直线,截距"
        },
        info: {
            title: "一次函数",
            description: "最简单的函数模型。它的图像是一条直线。学会用它解决行程问题和方案选择问题。",
            tags: [{ text: "函数", color: "blue" }]
        },
        aiContext: "学生在学习一次函数性质。请通过动态想象直线随着 k 变大变陡、随 b 上下平移的过程。",
        aiChatTitle: "AI导师：直线的舞蹈",
        aiChatIntro: "改变 k 和 b，直线就会在坐标系中跳舞。让我们看看它是怎么动的。",
        tabs: {
            concept: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h3 className="font-bold mb-2">定义</h3>
                    <p>形如 y = kx + b (k≠0) 的函数。</p>
                    <p>特别地，当 b=0 时，y=kx 叫正比例函数。</p>
                </div>
            ),
            properties: (
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl">
                        <h4 className="font-bold">k &gt; 0</h4>
                        <p className="text-sm">y 随 x 增大而增大（上坡）。</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl">
                        <h4 className="font-bold">k &lt; 0</h4>
                        <p className="text-sm">y 随 x 增大而减小（下坡）。</p>
                    </div>
                </div>
            ),
            examples: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h4 className="font-bold mb-2">例题：求解析式</h4>
                    <p>已知直线经过 (0, 3) 和 (2, 5)，求解析式。</p>
                    <p className="mt-2 text-sm text-slate-600">
                        解：设 y = kx + b。<br />
                        代入点得：b=3, 2k+b=5。<br />
                        解得 k=1, b=3。<br />
                        ∴ y = x + 3。
                    </p>
                </div>
            ),
            practice: (
                <PracticeProblem id={807} type="choice"
                    question="直线 y = -2x + 3 不经过第几象限？"
                    options={[{ label: 'A', value: '第一' }, { label: 'B', value: '第二' }, { label: 'C', value: '第三' }, { label: 'D', value: '第四' }]}
                    answer="C"
                    explanation="k=-2 < 0 (过二四象限趋势), b=3 > 0 (交y轴正半轴)。图像过 一、二、四 象限，不过第三象限。"
                />
            )
        }
    },

    // ==================== 8. 数据的分析 ====================
    'mid-8-2-data-analysis': {
        meta: {
            title: "数据的分析 - 平均数、众数、中位数 | AI7Miao数学",
            description: "区分平均数、中位数、众数的概念，了解方差在描述数据波动中的作用。",
            keywords: "数据分析,平均数,方差,标准差"
        },
        info: {
            title: "数据的分析",
            description: "别被平均数骗了！掌握中位数和众数，才能全面看清数据的真相。还有方差告诉你数据稳不稳。",
            tags: [{ text: "统计", color: "green" }]
        },
        aiContext: "学生在比较两组数据。请通过'班级平均分相同，但一个班两极分化严重'的例子解释方差的意义。",
        aiChatTitle: "AI导师：谁是射击冠军？",
        aiChatIntro: "甲乙两人平均环数一样，该派谁去参加奥运会？这需要看不一样的指标。",
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                        <h3 className="font-bold mb-4">集中趋势</h3>
                        <ul className="space-y-2">
                            <li><strong>平均数</strong>：所有数据的和除以个数。易受极端值影响。</li>
                            <li><strong>中位数</strong>：排序后位于中间的数。</li>
                            <li><strong>众数</strong>：出现次数最多的数。</li>
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                        <h3 className="font-bold mb-4">波动程度</h3>
                        <p><strong>方差 (s²)</strong>：衡量数据偏离平均数的程度。方差越小，数据越稳定。</p>
                    </div>
                </div>
            ),
            properties: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <p>注意：求中位数一定要先将数据<strong>从小到大排序</strong>！</p>
                </div>
            ),
            examples: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h4 className="font-bold mb-2">例题：求中位数</h4>
                    <p>数据：1, 4, 2, 5, 3 的中位数是？</p>
                    <p className="mt-2 text-sm text-slate-600">
                        解：排序后为 1, 2, 3, 4, 5。中间是 3。
                    </p>
                </div>
            ),
            practice: (
                <PracticeProblem id={808} type="choice"
                    question="数据 2, 3, 4, 4, 5 的众数是？"
                    options={[{ label: 'A', value: '3' }, { label: 'B', value: '4' }, { label: 'C', value: '3.6' }, { label: 'D', value: '5' }]}
                    answer="B"
                    explanation="4 出现了两次，次数最多。"
                />
            )
        }
    }
};

// 自动填充检查
const grade8Topics = [
    { id: 'mid-8-1-triangles', name: '三角形' },
    { id: 'mid-8-1-factorization', name: '因式分解' },
    { id: 'mid-8-1-fractions', name: '分式' },
    { id: 'mid-8-1-binary-equations', name: '二元一次方程组' },
    { id: 'mid-8-2-quadrilaterals', name: '四边形' },
    { id: 'mid-8-2-functions', name: '函数' },
    { id: 'mid-8-2-linear-functions', name: '一次函数' },
    { id: 'mid-8-2-data-analysis', name: '数据的分析' }
];
grade8Topics.forEach(t => {
    if (!grade8Content[t.id]) {
        grade8Content[t.id] = generateDefaultContent(t.id, t.name, '八年级');
    }
});

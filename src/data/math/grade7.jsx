import { Icons, PracticeProblem, Link, React, generateDefaultContent } from './common';

const {
    Lightbulb, Target, TrendingUp, Clock, Star, Brain, CheckCircle, Sparkles, ChevronRight, Calculator, Award
} = Icons;

export const grade7Content = {
    // ==================== 1. 有理数 ====================
    'mid-7-1-rational-numbers': {
        meta: {
            title: "有理数 - 正数与负数、数轴、绝对值 | AI7Miao数学",
            description: "初中数学第一课！理解正数与负数，掌握有理数的加减乘除运算，理解数轴、相反数和绝对值的概念。",
            keywords: "有理数,负数,数轴,绝对值"
        },
        info: {
            title: "有理数",
            description: "欢迎来到初中数学！数字的世界扩大了，我们不仅有正数，还有负数。准备好进入更广阔的数学宇宙了吗？",
            tags: [{ text: "数学基石", color: "indigo" }, { text: "入门必修", color: "red" }]
        },
        aiContext: "学生刚接触负数。请用'温度计'（零上零下）或'海拔'（海平面以上以下）的例子帮助学生直观理解负数。",
        aiChatTitle: "AI导师：零下是多少度？",
        aiChatIntro: "如果零上5度记作+5，那么零下5度呢？负数的引入让我们可以描述相反意义的量。",
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm">
                        <h3 className="font-bold text-lg mb-4">核心概念</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl text-center">
                                <div className="font-bold text-blue-700">数轴</div>
                                <p className="text-sm mt-2">规定了原点、正方向、单位长度的直线。</p>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl text-center">
                                <div className="font-bold text-green-700">相反数</div>
                                <p className="text-sm mt-2">只有符号不同的两个数。如 5 和 -5。</p>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl text-center">
                                <div className="font-bold text-purple-700">绝对值</div>
                                <p className="text-sm mt-2">数轴上表示数 a 的点到原点的距离，记作 |a|。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h3 className="font-bold mb-4">运算律</h3>
                    <p className="mb-2">有理数的加减乘除也满足交换律、结合律和分配律。</p>
                    <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 rounded-r-xl">
                        <p className="font-bold text-orange-800 dark:text-orange-300">口诀：</p>
                        <ul className="list-disc list-inside text-sm text-orange-700 dark:text-orange-400 mt-1">
                            <li>同号得正，异号得负，并把绝对值相乘/除。</li>
                            <li>减去一个数，等于加上这个数的相反数。</li>
                        </ul>
                    </div>
                </div>
            ),
            examples: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h4 className="font-bold mb-2">例题：绝对值计算</h4>
                    <p>计算：|-5| + |-3| - |+2|</p>
                    <p className="mt-2 text-sm text-slate-600">
                        解：|-5|=5, |-3|=3, |+2|=2<br />
                        原式 = 5 + 3 - 2 = 6。
                    </p>
                </div>
            ),
            practice: (
                <PracticeProblem id={901} type="choice"
                    question="-2 的相反数是？"
                    options={[{ label: 'A', value: '2' }, { label: 'B', value: '-2' }, { label: 'C', value: '1/2' }, { label: 'D', value: '-1/2' }]}
                    answer="A"
                    explanation="相反数就是符号相反的数，-2 的相反数是 2。"
                />
            )
        }
    },

    // ==================== 2. 整式的加减 ====================
    'mid-7-1-algebraic-expressions': {
        meta: {
            title: "整式的加减 - 合并同类项与去括号 | AI7Miao数学",
            description: "从数字运算过渡到字母运算。学习单项式、多项式、同类项的概念，掌握整式的加减运算法则。",
            keywords: "整式,单项式,多项式,合并同类项,去括号"
        },
        info: {
            title: "整式的加减",
            description: "字母也可以像数字一样加减吗？当然！这就是代数的开始。学会用字母表示数。",
            tags: [{ text: "代数入门", color: "blue" }]
        },
        aiContext: "学生刚接触字母表示数。请解释'同类项'就像'合并同类水果'（3个苹果+2个苹果=5个苹果，但3个苹果+2个香蕉不能合并）。",
        aiChatTitle: "AI导师：水果分类法",
        aiChatIntro: "3x + 2y 能等于 5xy 吗？当然不能！这就像把苹果和香蕉加在一起。让我们学习如何正确分类。",
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                        <h3 className="font-bold mb-3">概念辨析</h3>
                        <ul className="space-y-2">
                            <li><strong>单项式</strong>：数或字母的积。如 2x, -3ab。</li>
                            <li><strong>多项式</strong>：几个单项式的和。如 x² + 2x + 1。</li>
                            <li><strong>同类项</strong>：所含字母相同，且相同字母的指数也相同的项。</li>
                        </ul>
                    </div>
                </div>
            ),
            properties: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h3 className="font-bold mb-4">运算法则</h3>
                    <div className="space-y-4">
                        <div className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                            <span className="font-bold text-indigo-600">合并同类项</span>
                            <p className="text-sm">系数相加，字母和字母的指数不变。</p>
                        </div>
                        <div className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                            <span className="font-bold text-indigo-600">去括号</span>
                            <p className="text-sm">括号前是"+"号，去括号不变号；括号前是"-"号，去括号全变号。</p>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h4 className="font-bold mb-2">例题：化简求值</h4>
                    <p>化简：2(x + y) - (x - 2y)</p>
                    <p className="mt-2 text-sm text-slate-600">
                        解：去括号得：2x + 2y - x + 2y<br />
                        合并同类项得：x + 4y
                    </p>
                </div>
            ),
            practice: (
                <PracticeProblem id={902} type="choice"
                    question="下列各组项中，是同类项的是？"
                    options={[{ label: 'A', value: '3x²y 与 -3xy²' }, { label: 'B', value: '2abc 与 2ab' }, { label: 'C', value: '-2 与 5' }, { label: 'D', value: 'm³ 与 3m' }]}
                    answer="C"
                    explanation="A中x和y指数不同；B中字母不同；D中指数不同；C中都是常数项，属于同类项。"
                />
            )
        }
    },

    // ==================== 3. 一元一次方程 ====================
    'mid-7-1-equations': {
        meta: {
            title: "一元一次方程 - 移项与解方程 | AI7Miao数学",
            description: "掌握等式的性质，熟练运用去分母、去括号、移项、合并同类项等步骤解一元一次方程。",
            keywords: "一元一次方程,解方程,移项"
        },
        info: {
            title: "一元一次方程",
            description: "寻找未知数的x！方程是解决实际问题的强大工具。把应用题翻译成数学语言。",
            tags: [{ text: "方程基础", color: "green" }]
        },
        aiContext: "学生在学习移项。请强调'移项要变号'这个最容易出错的点。就像跨过国界（等号）要换护照（符号）一样。",
        aiChatTitle: "AI导师：寻找神秘的 X",
        aiChatIntro: "X 是个伪装大师，藏在数字丛林里。我们有几样工具：天平（等式性质）、移民局（移项），一定要把它揪出来。",
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                        <h3 className="font-bold mb-3">等式的性质</h3>
                        <p>1. 等式两边加（或减）同一个数（或式子），结果仍相等。</p>
                        <p>2. 等式两边乘同一个数，或除以同一个不为0的数，结果仍相等。</p>
                    </div>
                </div>
            ),
            properties: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h3 className="font-bold mb-2">解方程步骤</h3>
                    <ol className="list-decimal list-inside space-y-1">
                        <li>去分母</li>
                        <li>去括号</li>
                        <li>移项 <span className="text-red-500 font-bold">(记得变号！)</span></li>
                        <li>合并同类项</li>
                        <li>系数化为1</li>
                    </ol>
                </div>
            ),
            examples: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h4 className="font-bold mb-2">例题：解方程</h4>
                    <p>3x - 7 = x + 1</p>
                    <p className="mt-2 text-sm text-slate-600">
                        解：移项得：3x - x = 1 + 7<br />
                        合并同类项得：2x = 8<br />
                        系数化为1得：x = 4。
                    </p>
                </div>
            ),
            practice: (
                <PracticeProblem id={903} type="choice"
                    question="方程 2x = -6 的解是？"
                    options={[{ label: 'A', value: 'x=3' }, { label: 'B', value: 'x=-3' }, { label: 'C', value: 'x=-1/3' }, { label: 'D', value: 'x=-12' }]}
                    answer="B"
                    explanation="x = -6 / 2 = -3。"
                />
            )
        }
    },

    // ==================== 4. 几何图形初步 ====================
    'mid-7-1-geometry-basic': {
        meta: {
            title: "几何图形初步 - 线段与角 | AI7Miao数学",
            description: "认识立体图形与平面图形，掌握线段的中点、角的度量与分类，理解余角与补角。",
            keywords: "几何初步,线段,角,余角,补角"
        },
        info: {
            title: "几何图形初步",
            description: "点动成线，线动成面，面动成体。从最基本的点线面开始，构建庞大的几何大厦。",
            tags: [{ text: "几何入门", color: "indigo" }]
        },
        aiContext: "学生刚接触几何符号语言。请指导学生如何规范表达（如因为...所以...）。解释'两点之间线段最短'。",
        aiChatTitle: "AI导师：构建几何世界",
        aiChatIntro: "为什么从学校回家要走直线？这背后有一个著名的公理——两点之间，线段最短。",
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                        <h3 className="font-bold mb-2">基本事实</h3>
                        <ul className="list-disc list-inside">
                            <li>两点确定一条直线。</li>
                            <li>两点之间，线段最短。</li>
                        </ul>
                    </div>
                </div>
            ),
            properties: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h3 className="font-bold mb-2">角的分类</h3>
                    <ul className="space-y-1 text-sm">
                        <li>锐角：0° &lt; α &lt; 90°</li>
                        <li>直角：α = 90°</li>
                        <li>钝角：90° &lt; α &lt; 180°</li>
                        <li>平角：α = 180°</li>
                        <li>周角：α = 360°</li>
                    </ul>
                </div>
            ),
            examples: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h4 className="font-bold mb-2">例题：计算度数</h4>
                    <p>已知 ∠1 = 40°，求它的余角和补角。</p>
                    <p className="mt-2 text-sm text-slate-600">
                        解：余角 = 90° - 40° = 50°。<br />
                        补角 = 180° - 40° = 140°。
                    </p>
                </div>
            ),
            practice: (
                <PracticeProblem id={904} type="choice"
                    question="如图，点C是线段AB的中点，如果AC=4cm，那么AB=？"
                    options={[{ label: 'A', value: '2cm' }, { label: 'B', value: '4cm' }, { label: 'C', value: '6cm' }, { label: 'D', value: '8cm' }]}
                    answer="D"
                    explanation="AB = 2 × AC = 2 × 4 = 8cm。"
                />
            )
        }
    },

    // ==================== 5. 不等式与不等式组 ====================
    'mid-7-2-inequalities': {
        meta: {
            title: "不等式与不等式组 - 范围的描述 | AI7Miao数学",
            description: "理解不等式的性质（特别是负数乘除要变号），掌握解一元一次不等式组的方法，并在数轴上表示解集。",
            keywords: "不等式,解集,不等号方向"
        },
        info: {
            title: "不等式",
            description: "生活不总是相等的，更多的是'大于'或'小于'。学会描述范围，理解限制条件。",
            tags: [{ text: "代数", color: "blue" }]
        },
        aiContext: "学生最容易在'不等式两边同乘负数'时忘记变号。请设计一个陷阱题来提醒学生。",
        aiChatTitle: "AI导师：变号警报！",
        aiChatIntro: "解不等式和解方程很像，但有一个致命的陷阱——负号。一旦触碰，方向全变！",
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                        <h3 className="font-bold mb-2">不等式性质3（特重要）</h3>
                        <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-xl">
                            不等式两边乘（或除以）同一个<strong>负数</strong>，不等号的方向<strong>必须改变</strong>。
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h3 className="font-bold mb-2">不等式组解集口诀</h3>
                    <ul className="list-disc list-inside">
                        <li>同大取大（x&gt;2 且 x&gt;1 → x&gt;2）</li>
                        <li>同小取小（x&lt;2 且 x&lt;1 → x&lt;1）</li>
                        <li>大小小大中间找（x&gt;1 且 x&lt;2 → 1&lt;x&lt;2）</li>
                        <li>大大小小找不到（x&gt;2 且 x&lt;1 → 无解）</li>
                    </ul>
                </div>
            ),
            examples: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h4 className="font-bold mb-2">例题：解不等式</h4>
                    <p>-2x &gt; 6</p>
                    <p className="mt-2 text-sm text-slate-600">
                        解：两边除以 -2，不等号变号。<br />
                        ∴ x &lt; -3。
                    </p>
                </div>
            ),
            practice: (
                <PracticeProblem id={905} type="choice"
                    question="不等式 x - 1 > 0 的解集是？"
                    options={[{ label: 'A', value: 'x > 1' }, { label: 'B', value: 'x < 1' }, { label: 'C', value: 'x > -1' }, { label: 'D', value: 'x < -1' }]}
                    answer="A"
                    explanation="移项得 x > 1。"
                />
            )
        }
    },

    // ==================== 6. 数据的收集、整理与描述 ====================
    'mid-7-2-statistics': {
        meta: {
            title: "数据的收集与整理 - 统计图表 | AI7Miao数学",
            description: "了解全面调查与抽样调查，会看条形图、折线图、扇形图和直方图。",
            keywords: "统计图,抽样调查,直方图"
        },
        info: {
            title: "数据的收集",
            description: "大数据时代，谁掌握了数据，谁就掌握了真相。学习如何科学地收集和展示数据。",
            tags: [{ text: "统计", color: "green" }]
        },
        aiContext: "学生在比较各种统计图的优缺点。请结合实际场景（如气温变化用折线图）进行说明。",
        aiChatTitle: "AI导师：数据会说话",
        aiChatIntro: "一张好图胜过千言万语。条形、折线、扇形...该选哪种图来展示你的发现？",
        tabs: {
            concept: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h3 className="font-bold mb-3">调查方式</h3>
                    <ul className="space-y-2">
                        <li><strong>全面调查（普查）</strong>：考察全体对象。适合精确度要求高、数量少的情况。</li>
                        <li><strong>抽样调查</strong>：抽取一部分对象。适合数量大、破坏性实验。</li>
                    </ul>
                </div>
            ),
            properties: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h3 className="font-bold mb-3">统计图的选择</h3>
                    <ul className="space-y-2 text-sm">
                        <li><strong>条形图</strong>：比较具体数量。</li>
                        <li><strong>折线图</strong>：反映变化趋势。</li>
                        <li><strong>扇形图</strong>：显示部分占总体的百分比。</li>
                    </ul>
                </div>
            ),
            examples: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h4 className="font-bold mb-2">例题：选择调查方式</h4>
                    <p>下列适合抽样调查的是？</p>
                    <p className="text-sm">A. 神舟飞船升空前检查 B. 调查某批次灯泡寿命</p>
                    <p className="mt-2 text-sm text-slate-600">
                        答：B。灯泡寿命测试是破坏性的，不可能普查。A必须精确，必须普查。
                    </p>
                </div>
            ),
            practice: (
                <PracticeProblem id={906} type="choice"
                    question="要反映某市一周内每天最高气温的变化情况，宜采用？"
                    options={[{ label: 'A', value: '条形统计图' }, { label: 'B', value: '折线统计图' }, { label: 'C', value: '扇形统计图' }, { label: 'D', value: '频数分布直方图' }]}
                    answer="B"
                    explanation="反映'变化情况'和'趋势'，首选折线统计图。"
                />
            )
        }
    },

    // ==================== 7. 平面直角坐标系 ====================
    'mid-7-2-plane-coordinates': {
        meta: {
            title: "平面直角坐标系 - 用坐标表示位置 | AI7Miao数学",
            description: "认识平面直角坐标系，掌握点的坐标特征（各象限及坐标轴上点的符号规律）。",
            keywords: "坐标系,象限,点的坐标"
        },
        info: {
            title: "平面直角坐标系",
            description: "笛卡尔的伟大发现，把几何问题转化成了代数问题。确定位置，从此有了精确的导航。",
            tags: [{ text: "数形结合", color: "purple" }]
        },
        aiContext: "学生在记忆象限符号。请给出'右上为正'的直观联想，引导学生自己推导其他象限符号。",
        aiChatTitle: "AI导师：定位你的位置",
        aiChatIntro: "电影院的座位票、地图上的经纬度，其实都是坐标。有了它，我们再也不会迷路。",
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                        <h3 className="font-bold mb-3">象限符号</h3>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="bg-slate-50 dark:bg-slate-700 p-2 rounded">第二象限 (-, +)</div>
                            <div className="bg-slate-50 dark:bg-slate-700 p-2 rounded">第一象限 (+, +)</div>
                            <div className="bg-slate-50 dark:bg-slate-700 p-2 rounded">第三象限 (-, -)</div>
                            <div className="bg-slate-50 dark:bg-slate-700 p-2 rounded">第四象限 (+, -)</div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h3 className="font-bold mb-2">特殊位置</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>x轴上的点：纵坐标为0，(x, 0)。</li>
                        <li>y轴上的点：横坐标为0，(0, y)。</li>
                        <li>原点：(0, 0)。</li>
                    </ul>
                </div>
            ),
            examples: (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
                    <h4 className="font-bold mb-2">例题：象限判定</h4>
                    <p>点 P(-3, 2) 在第几象限？</p>
                    <p className="mt-2 text-sm text-slate-600">
                        横坐标负，纵坐标正 → 第二象限。
                    </p>
                </div>
            ),
            practice: (
                <PracticeProblem id={907} type="choice"
                    question="若点 P(m, n) 在第三象限，则？"
                    options={[{ label: 'A', value: 'm>0, n>0' }, { label: 'B', value: 'm<0, n<0' }, { label: 'C', value: 'm<0, n>0' }, { label: 'D', value: 'm>0, n<0' }]}
                    answer="B"
                    explanation="第三象限的符号特征是 (-, -)，所以 m<0, n<0。"
                />
            )
        }
    }
};

// 自动填充检查
const grade7Topics = [
    { id: 'mid-7-1-rational-numbers', name: '有理数' },
    { id: 'mid-7-1-algebraic-expressions', name: '整式的加减' },
    { id: 'mid-7-1-equations', name: '一元一次方程' },
    { id: 'mid-7-1-geometry-basic', name: '几何图形初步' },
    { id: 'mid-7-2-inequalities', name: '不等式与不等式组' },
    { id: 'mid-7-2-statistics', name: '数据的收集、整理与描述' },
    { id: 'mid-7-2-plane-coordinates', name: '平面直角坐标系' }
];

grade7Topics.forEach(t => {
    if (!grade7Content[t.id]) {
        grade7Content[t.id] = generateDefaultContent(t.id, t.name, '七年级');
    }
});

import { MousePointer2, Ruler, BookOpen, Check } from 'lucide-react';
import AngleMeasurementDiagram from '../../components/subjects/math/elementary/AngleMeasurementDiagram';
import QuadrilateralDiagram from '../../components/subjects/math/elementary/QuadrilateralDiagram';
import VerticalDivisionVisualizer from '../../components/subjects/math/elementary/VerticalDivisionVisualizer';
import DecimalGridVisualizer from '../../components/subjects/math/elementary/DecimalGridVisualizer';
import OperationOrderVisualizer from '../../components/subjects/math/elementary/OperationOrderVisualizer';
import BarChartVisualizer from '../../components/subjects/math/elementary/BarChartVisualizer';
import { Icons, PracticeProblem, React, generateDefaultContent } from './common';

const {
    Lightbulb, Target, TrendingUp, Clock, Star, Brain, CheckCircle, Sparkles, ChevronRight, Calculator, Award, AlertCircle
} = Icons;

export const grade4Content = {
    // ==================== 1. 大数的认识与读写 ====================
    'g4-l1-large-numbers': {
        meta: {
            title: "大数的认识与读写 - 四年级数学 | AI7Miao数学",
            description: "学习亿以内数的认识、读写和大小比较。掌握数位、计数单位、数的改写和省略。通过人口、距离等实际例子理解大数的意义。",
            keywords: "大数,亿,数位,计数单位,数的改写,四舍五入"
        },
        info: {
            title: "大数的认识与读写",
            description: "从万到亿,数字越来越大!学会认识、读写大数,了解我们身边的大数字。",
            tags: [
                { text: "数与代数", color: "blue" },
                { text: "30分钟", icon: Clock, color: "slate" },
                { text: "重要", icon: Star, color: "orange" }
            ]
        },
        aiContext: "想象你在统计全国小朋友的糖果！从万到亿，数字变大后，分级读取是关键。用中国人口、国家领土面积等宏大场景引入。鼓励学生发现『四位一级』的规律。",
        aiChatTitle: "大数王国的侦探：发现数位的规律",
        aiChatIntro: "哇！快看这些庞大的数字！中国有 1411780000 人，地球到太阳有 149600000 千米。数字这么多，我们要怎么一眼认出它们呢？",
        aiMessages: [
            { role: 'ai', content: '如果给你一串很长的数字，像 1411780000，你会觉得眼花缭乱吗？' },
            { role: 'user', content: '会啊，数零都数晕了！' },
            { role: 'ai', content: '别担心！数学里有一个超级魔法，叫“数位分级”。就像把很多糖果装进小袋子一样，每**四位**画一个分级线，你发现了什么？' },
            { role: 'user', content: '14, 1178, 0000。分成三段了！' },
            { role: 'ai', content: <>太聪明了！这就是“亿级”、“万级”和“个级”。读起来就像：十四亿，一千一百七十八万。是不是一下就清晰了？🌟</>, type: 'success' },
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            大数王国的“排队规则” 🏰
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6 border-l-4 border-indigo-500">
                                <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                                    🤔 想象一下，如果有几千个小朋友在操场排队，肯定乱哄哄的！<br />
                                    数学家为了管理这些大数字，给它们分成了三个“班级”，每个班里只能住 **4个** 成员：
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg overflow-x-auto shadow-sm">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-slate-200 dark:border-slate-600 text-indigo-600 dark:text-indigo-400">
                                                <th className="p-2 text-center" colSpan="4">🚀 亿级 (亿)</th>
                                                <th className="p-2 text-center" colSpan="4">🌾 万级 (万)</th>
                                                <th className="p-2 text-center" colSpan="4">🏠 个级 (个)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="text-center text-slate-500">
                                                <td className="p-2 border-r">千亿</td>
                                                <td className="p-2 border-r">百亿</td>
                                                <td className="p-2 border-r">十亿</td>
                                                <td className="p-2 border-r font-bold text-slate-800 dark:text-white">亿</td>
                                                <td className="p-2 border-r">千万</td>
                                                <td className="p-2 border-r">百万</td>
                                                <td className="p-2 border-r">十万</td>
                                                <td className="p-2 border-r font-bold text-slate-800 dark:text-white">万</td>
                                                <td className="p-2 border-r">千</td>
                                                <td className="p-2 border-r">百</td>
                                                <td className="p-2 border-r">十</td>
                                                <td className="p-2 font-bold text-slate-800 dark:text-white">个</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mt-4 text-xs text-slate-500 italic flex items-center gap-1">
                                    <Sparkles className="w-3 h-3" /> 记住了吗？四颗小红星一组，数学从此变轻松！
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800 group hover:shadow-md transition-all">
                                    <div className="text-3xl mb-3">🛰️</div>
                                    <h3 className="font-bold text-slate-800 dark:text-white mb-2">天上的距离</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                                        地球到太阳约：<br />
                                        <span className="font-mono text-indigo-600 font-bold">1,4960,0000</span> 千米<br />
                                        读作：一亿四千九百六十万
                                    </p>
                                </div>

                                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800 group hover:shadow-md transition-all">
                                    <div className="text-3xl mb-3">📽️</div>
                                    <h3 className="font-bold text-slate-800 dark:text-white mb-2">超火的电影</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                                        某大片的播放量：<br />
                                        <span className="font-mono text-green-600 font-bold">38,4500,0000</span> 次<br />
                                        读作：三十八亿四千五百万
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Target className="w-6 h-6 text-indigo-600" />
                            读数与写数
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800">
                                <h3 className="font-bold text-purple-700 dark:text-purple-400 mb-4 text-lg">读数法则</h3>
                                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                    <li>• 从<strong>高位</strong>读起，一级一级往下读</li>
                                    <li>• 每级末尾的0都<strong>不读</strong></li>
                                    <li>• 其他数位有一个或连续几个0，都<strong>只读一个零</strong></li>
                                </ul>
                            </div>

                            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-100 dark:border-orange-800">
                                <h3 className="font-bold text-orange-700 dark:text-orange-400 mb-4 text-lg">写数法则</h3>
                                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                    <li>• 从<strong>高位</strong>写起，一级一级往下写</li>
                                    <li>• 哪一位上一个单位也没有，就在那一位上<strong>写0占位</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <AlertCircle className="w-6 h-6 text-orange-500" />
                            躲避“大数陷阱”：读零的奥秘 🤫
                        </h2>

                        <div className="space-y-4">
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl border-l-4 border-orange-400">
                                <p className="text-sm text-slate-700 dark:text-slate-300">
                                    数字越大，里面的 **0** 就越多。记住这个口诀，你就是读数小天才：
                                </p>
                                <ul className="mt-3 space-y-3 font-medium text-slate-700 dark:text-slate-200">
                                    <li className="flex items-center gap-2">🏮 每级【末尾】的 0，通通 **不读**！<span className="text-xs text-slate-400">(如 5000 万)</span></li>
                                    <li className="flex items-center gap-2">🛑 【中间】有 0 时，不管有几个，**只读一个**！<span className="text-xs text-slate-400">(如 5007 万)</span></li>
                                </ul>
                            </div>

                            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-xl border-l-4 border-indigo-400">
                                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2">💡 四舍五入的“魔法师”</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                                    想把 1,2345 变成“约多少万”？
                                </p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 bg-white/50 dark:bg-black/20 p-3 rounded">
                                    盯着 **千位** 上的数字：它是 0-4 就舍掉，5-9 就往前加 1。这就像是在玩“能量条”游戏，能量不到 5 就无法升级哦！
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例1：读数
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>读出下面各数：</strong>50,070,080</p>
                            <p className="mt-3"><strong>解：</strong></p>
                            <p>分级：5007,0080</p>
                            <p>读作：五千零七万零八十</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">注意：万级末尾的0不读，个级中间的0只读一个</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例2：写数
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>写出下面各数：</strong>三千零五万零六</p>
                            <p className="mt-3"><strong>解：</strong></p>
                            <p>分级思考：三千零五万 | 零六</p>
                            <p>写作：30,050,006</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">注意：万级和个级中间要用0占位</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={401} type="choice"
                        question="1000000是（ ）位数"
                        options={[{ label: 'A', value: '6' }, { label: 'B', value: '7' }, { label: 'C', value: '8' }, { label: 'D', value: '9' }]}
                        answer="B"
                        explanation="1000000有7位数字，是7位数。"
                    />
                    <PracticeProblem id={402} type="choice"
                        question="3456000改写成以万为单位的数是（ ）"
                        options={[{ label: 'A', value: '345.6万' }, { label: 'B', value: '345万' }, { label: 'C', value: '346万' }, { label: 'D', value: '3456万' }]}
                        answer="A"
                        explanation="去掉末尾4个0，加上万字：3456000 = 345.6万"
                    />
                    <PracticeProblem id={403} type="choice"
                        question="把987654321省略亿位后面的尾数约是（ ）"
                        options={[{ label: 'A', value: '9亿' }, { label: 'B', value: '10亿' }, { label: 'C', value: '98亿' }, { label: 'D', value: '99亿' }]}
                        answer="B"
                        explanation="看千万位上的数是8，大于5，向前一位进1，所以约是10亿。"
                    />
                </div>
            )
        }
    },

    // ==================== 2. 角的度量 ====================

    // ==================== 2. 角的度量 (深度互动版) ====================
    'g4-l1-angle-measurement': {
        meta: {
            title: "角的度量 - 四年级数学 | AI7Miao数学",
            description: "掌握角的定义、分类和度量方法。通过在线互动量角器，学会使用量角器测量角的度数。理解锐角、直角、钝角、平角、周角的区别。",
            keywords: "角,度量,量角器,锐角,钝角,直角,平角,周角,射线"
        },
        info: {
            title: "角的度量",
            description: "角的世界很奇妙！从锐角到周角，让我们用量角器去探索它们的大小。",
            tags: [
                { text: "四年级", color: "blue" },
                { text: "图形与几何", color: "purple" },
                { text: "35分钟", icon: Clock, color: "slate" },
                { text: "重要", icon: Star, color: "orange" }
            ]
        },
        aiContext: "想象你有一把调皮的剪刀或一扇会动的门！角的大小就是它们『张开的程度』。用时钟、剪刀、书角来引入。鼓励学生动手模仿『中心点』和『零刻度线』的对齐。强调角的大小与边长无关，只看『张开度』。",
        aiChatTitle: "角的捉迷藏：谁张得更大？",
        aiChatIntro: "嘿！快看看你的时钟，时针和分针正张着大嘴巴呢！它们张开的大小，就是我们今天要抓的“角”。",
        aiMessages: [
            { role: 'ai', content: '如果你慢慢把门推开，门和墙之间的“角”是变大了还是变小了？' },
            { role: 'user', content: '变大了！' },
            { role: 'ai', content: '没错！角就像张开的嘴巴。那我们要怎么精准地量出嘴巴张了多大呢？这就需要一个超级工具——**量角器**。' },
            { role: 'user', content: '我看到了，它像个半圆。' },
            { role: 'ai', content: <>太棒了！记住我们的量角密语：**“中心对顶点，零线对一边”**。就像给角戴上一顶半圆形的帽子，另一条边指着的数字，就是它的“张开度”啦！试试看？🌟</>, type: 'success' },
        ],
        tabs: {
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：在线量角器
                        </h2>
                        <div className="mb-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl text-slate-700 dark:text-slate-300">
                            <p><strong>实验任务：</strong></p>
                            <ol className="list-decimal list-inside space-y-1 mt-2">
                                <li>点击"新题目"生成一个角</li>
                                <li>拖动红色中心点，将量角器中心对准顶点</li>
                                <li>确保量角器的底边与角的一条边重合</li>
                                <li>读取另一条边对应的刻度，验证你的答案</li>
                            </ol>
                        </div>
                        <AngleMeasurementDiagram />
                    </div>
                </div>
            ),
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <BookOpen className="w-6 h-6 text-indigo-600" />
                            捕捉“张开的嘴巴” ✂️
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500">
                                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-3">🤔 角是什么？</h3>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                                    想象两根吸管连在一起，把它们拉开，中间出来的图形就是 **角**！<br />
                                    那个连接点叫 **顶点**，两根吸管就是角的 **两条边**。
                                </p>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3">📏 怎么量大小？</h3>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                                    我们用“度(° )”来当单位。想象把一个圆平均切成 **360块** 细细的披萨，每一块的角度就是 1°。
                                </p>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-slate-700 dark:text-slate-300 text-sm">
                                <thead>
                                    <tr className="bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                                        <th className="p-3 text-left rounded-tl-lg">名称</th>
                                        <th className="p-3 text-left">图形特征</th>
                                        <th className="p-3 text-left rounded-tr-lg">度数范围</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                                    <tr>
                                        <td className="p-3 font-bold text-blue-600">锐角</td>
                                        <td className="p-3">尖尖的，比直角小</td>
                                        <td className="p-3">小于 90°</td>
                                    </tr>
                                    <tr className="bg-slate-50 dark:bg-slate-700/30">
                                        <td className="p-3 font-bold text-indigo-600">直角</td>
                                        <td className="p-3">方方正正，像书角</td>
                                        <td className="p-3">等于 90°</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-bold text-purple-600">钝角</td>
                                        <td className="p-3">比直角大，比平角小</td>
                                        <td className="p-3">大于 90° 且小于 180°</td>
                                    </tr>
                                    <tr className="bg-slate-50 dark:bg-slate-700/30">
                                        <td className="p-3 font-bold text-orange-600">平角</td>
                                        <td className="p-3">两条边在一条直线上</td>
                                        <td className="p-3">等于 180° (1平角 = 2直角)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-bold text-red-600">周角</td>
                                        <td className="p-3">两条边重合，转了一圈</td>
                                        <td className="p-3">等于 360° (1周角 = 2平角 = 4直角)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mt-8 bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                        <h3 className="font-bold text-green-800 dark:text-green-300 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5" />
                            生活中的角
                        </h3>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm">
                                <div className="text-2xl mb-2">🕒</div>
                                <p className="text-sm text-slate-600 dark:text-slate-400">时钟的时针和分针</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm">
                                <div className="text-2xl mb-2">✂️</div>
                                <p className="text-sm text-slate-600 dark:text-slate-400">剪刀张开的口</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm">
                                <div className="text-2xl mb-2">📐</div>
                                <p className="text-sm text-slate-600 dark:text-slate-400">三角尺的角</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Ruler className="w-6 h-6 text-indigo-600" />
                            量角的方法
                        </h2>
                        <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-600 dark:text-indigo-400 font-bold">1</span>
                                    <div>
                                        <strong>点对点</strong>
                                        <p className="text-sm mt-1 text-slate-500">量角器的中心点对准角的顶点。</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-600 dark:text-indigo-400 font-bold">2</span>
                                    <div>
                                        <strong>线对边</strong>
                                        <p className="text-sm mt-1 text-slate-500">量角器的0刻度线对准角的一条边。</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-600 dark:text-indigo-400 font-bold">3</span>
                                    <div>
                                        <strong>读刻度</strong>
                                        <p className="text-sm mt-1 text-slate-500">看角的另一条边指向的刻度。（注意：如果0刻度线在内圈，就读内圈刻度；在外圈，就读外圈刻度）</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border-l-4 border-red-500">
                        <h3 className="font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5" />
                            易错点警示
                        </h3>
                        <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                            <li className="flex gap-2">
                                <span className="text-red-500 font-bold">×</span>
                                <span>错误：读错刻度，把外圈刻度读成内圈刻度。</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-green-500 font-bold">√</span>
                                <span>纠正：<strong>0刻度线在哪一圈，就读哪一圈的刻度。</strong>如果不确定，先估计一下角是锐角还是钝角。</span>
                            </li>
                        </ul>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />
                            典型例题
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">1</div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 dark:text-white mb-2">角的分类判断</h3>
                                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                                            已知∠1 = 45°，∠2 = 95°，∠3 = 180°，∠4 = 360°。请判断它们分别是什么角？
                                        </p>
                                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-indigo-500">
                                            <p className="text-slate-600 dark:text-slate-400 font-mono text-sm leading-relaxed">
                                                解：<br />
                                                ∠1 = 45° (小于90°) ➜ <strong>锐角</strong><br />
                                                ∠2 = 95° (大于90°小于180°) ➜ <strong>钝角</strong><br />
                                                ∠3 = 180° ➜ <strong>平角</strong><br />
                                                ∠4 = 360° ➜ <strong>周角</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">2</div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 dark:text-white mb-2">角的计算</h3>
                                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                                            如图，已知∠1和∠2拼成一个平角，其中∠1=60°，求∠2的度数。
                                        </p>
                                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-indigo-500">
                                            <p className="text-slate-600 dark:text-slate-400 font-mono text-sm leading-relaxed">
                                                解：<br />
                                                因为平角 = 180°<br />
                                                所以 ∠1 + ∠2 = 180°<br />
                                                ∠2 = 180° - 60° = <strong>120°</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Award className="w-6 h-6 text-indigo-600" />
                            巩固练习
                        </h2>
                        {/* Simple generic practice placeholder for now, generated automatically */}
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 rounded-xl">
                            <p>👉 更多互动练习题正在生成中... 请先使用"互动实验室"进行探究学习！</p>
                        </div>
                    </div>
                </div>
            )
        }
    },

    // ==================== 3. 除数是两位数的除法 ====================
    'g4-l1-division-two-digit': {
        meta: {
            title: "除数是两位数的除法 - 四年级数学 | AI7Miao数学",
            description: "掌握除数是两位数的除法笔算方法。通过互动演示，理解试商、调商的过程，学会用'四舍五入'法试商。",
            keywords: "除法,两位数除法,试商,竖式计算,四舍五入"
        },
        info: {
            title: "除数是两位数的除法",
            description: "除法是计算的难关，特别是试商。别担心，我们有互动助手帮你拆解每一步！",
            tags: [
                { text: "数与代数", color: "blue" },
                { text: "40分钟", icon: Clock, color: "slate" },
                { text: "重点难点", icon: Star, color: "orange" }
            ]
        },
        aiContext: "想象你正在给全校班级分发新课本！除数从 9 变成了 24，这时候“试商”变成了有趣的猜谜游戏。解释把除数看作整十数是为了缩小“猜测范围”。鼓励学生多尝试，调商是正常的修正过程。",
        aiChatTitle: "分发达人：挑战两位数大餐",
        aiChatIntro: "哇！这次我们面对的除数可变大了，像 24 人分 192 本书。一次能分几个？咱们一起来猜猜看！",
        aiMessages: [
            { role: 'ai', content: '计算 192 ÷ 24 时，如果把 24 假装看成 20，你觉得 192 里面大约能住进几个 20？' },
            { role: 'user', content: '19÷2... 大约 9 个？' },
            { role: 'ai', content: '眼力不错！那我们就试着在商的位置写上 9。可是计算发现 24 × 9 = 216，哎呀，披萨不够分了！这说明什么？' },
            { role: 'user', content: '商要变小一点。' },
            { role: 'ai', content: <>太聪明了！这就是“调商”。商改成 8 试试：24 × 8 = 192。刚好分完！这就像玩拼图，大胆试，错了就换一块！🌟</>, type: 'success' }
        ],
        tabs: {
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />
                            互动演示：竖式计算器
                        </h2>
                        <div className="mb-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl text-slate-700 dark:text-slate-300">
                            <p><strong>使用说明：</strong></p>
                            <ul className="list-disc list-inside space-y-1 mt-2">
                                <li>输入你想要计算的题目（被除数和除数）。</li>
                                <li>点击"开始计算"，跟随步骤观察每一个环节。</li>
                                <li>特别注意：<strong>试商</strong>和<strong>余数</strong>的变化。</li>
                            </ul>
                        </div>
                        <VerticalDivisionVisualizer />
                    </div>
                </div>
            ),
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <BookOpen className="w-6 h-6 text-indigo-600" />
                            笔算方法四步曲
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">1</div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 dark:text-white mb-1">一般方法</h3>
                                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                                            把除数看作和它接近的<strong>整十数</strong>来试商。
                                            <br />
                                            例如：除数 21 看作 20；除数 28 看作 30。
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                                    <div className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">2</div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 dark:text-white mb-1">计算步骤</h3>
                                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                                            一商（试商）、二乘（乘除数）、三减（减去积）、四比（比余数）。
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-lg font-bold text-slate-700 dark:text-slate-300 mb-2">口诀</div>
                                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm font-mono text-indigo-600 dark:text-indigo-400">
                                        除数两位看两位<br />
                                        两位不够看三位<br />
                                        除到哪位商哪位<br />
                                        余数要比除数小
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <AlertCircle className="w-6 h-6 text-red-600" />
                            常见错误分析
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/10 rounded-lg border-l-4 border-red-500">
                                <div className="text-red-500 font-bold text-xl">×</div>
                                <div>
                                    <h3 className="font-bold text-slate-800 dark:text-white">试商后不调商</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                                        例如：计算 84 ÷ 23，把 23 看作 20，试商 4。23 × 4 = 92 &gt; 84。
                                        <br />
                                        <strong>纠正：</strong>积比被除数大，说明商大了，要调小（改商 3）。
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/10 rounded-lg border-l-4 border-red-500">
                                <div className="text-red-500 font-bold text-xl">×</div>
                                <div>
                                    <h3 className="font-bold text-slate-800 dark:text-white">忘记写商 0</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                                        例如：计算 720 ÷ 24。先用 72 ÷ 24 = 3。个位 0 落下来，0 除以 24 不够除。
                                        <br />
                                        <strong>纠正：</strong>不够除时，必须在个位商 0 占位。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />
                            典型例题
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">选择题</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                    计算 3□2 ÷ 36，如果商是一,位,数，□ 里最大能填（ ）。
                                </p>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-indigo-500">
                                    <p className="text-slate-600 dark:text-slate-400 font-mono text-sm leading-relaxed">
                                        解析：<br />
                                        除数是 36 (两位数)。<br />
                                        如果商是一位数，说明被除数的前两位 (3□) 比除数 (36) 小。<br />
                                        所以 3□ &lt; 36。<br />
                                        □ 里可以填 0, 1, 2, 3, 4, 5。<br />
                                        最大能填 <strong>5</strong>。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Award className="w-6 h-6 text-indigo-600" />
                            巩固练习
                        </h2>
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 rounded-xl">
                            <p>👉 请使用上方的"互动演示"尝试计算以下题目：</p>
                            <ul className="list-disc list-inside mt-2 font-mono">
                                <li>576 ÷ 18</li>
                                <li>930 ÷ 31</li>
                                <li>840 ÷ 24</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    },

    // ==================== 4. 小数的意义与加减 ====================
    'g4-l1-decimal-ops': {
        meta: {
            title: "小数的意义与加减 - 四年级数学 | AI7Miao数学",
            description: "通过百格图直观理解小数的意义。掌握小数加减法的核心：小数点对齐。",
            keywords: "小数,小数点,小数加减法,数位对齐"
        },
        info: {
            title: "小数的意义与加减",
            description: "小数其实就是分数的另一种写法。学会用百格图看小数，加减法就变得so easy！",
            tags: [
                { text: "数与代数", color: "blue" },
                { text: "40分钟", icon: Clock, color: "slate" },
                { text: "重点", icon: Star, color: "orange" }
            ]
        },
        aiContext: "想象你在逛文具店！0.1 元就是 1 角，0.01 元就是 1 分。小数加减就像是把元对元、角对角放进钱包。强调小数点就像一根“定海神针”，它们必须对齐，也就是“相同单位”才能相加。",
        aiChatTitle: "小数森林：小数点奇遇记",
        aiChatIntro: "嗨！我是小数精灵。在森林里，1.2 米的小兔子和 0.5 米的小刺猬站在一起，它们一共有多高呢？",
        aiMessages: [
            { role: 'ai', content: '计算 1.2 + 0.5 时，你要把谁和谁对齐呢？' },
            { role: 'user', content: '把 2 和 5 对齐？' },
            { role: 'ai', content: '没错！但最稳妥的办法是把那两个亮亮的**小数点**对齐。' },
            { role: 'user', content: '为什么要小数点对齐？' },
            { role: 'ai', content: '因为小数点一站稳，元、角、分（也就是数位）就全归位啦！就像穿衣服，袖子对袖子，裤脚对裤脚，才不会穿歪呀！' },
            { role: 'ai', content: '来！去百格图里看看 1.2 是怎么和 0.5 抱在一起的吧！🌟', type: 'success' }
        ],
        tabs: {
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Sparkles className="w-6 h-6 text-indigo-600" />
                            互动演示：百格图看小数
                        </h2>
                        <div className="mb-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl text-slate-700 dark:text-slate-300">
                            <p>试一试：输入两个小数，观察它们在百格图上的样子。</p>
                        </div>
                        <DecimalGridVisualizer />
                    </div>
                </div>
            ),
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <BookOpen className="w-6 h-6 text-indigo-600" />
                            核心概念：数位顺序表
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-center border-collapse">
                                <thead>
                                    <tr className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-900 dark:text-indigo-100">
                                        <th className="p-3 border">整数部分</th>
                                        <th className="p-3 border bg-indigo-600 text-white w-12">.</th>
                                        <th className="p-3 border">小数部分</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-700 dark:text-slate-300">
                                    <tr>
                                        <td className="p-3 border">
                                            <div className="grid grid-cols-2 gap-2">
                                                <span>...</span>
                                                <span className="font-bold">个位</span>
                                            </div>
                                        </td>
                                        <td className="p-3 border font-bold text-2xl text-indigo-600">.</td>
                                        <td className="p-3 border">
                                            <div className="grid grid-cols-2 gap-2">
                                                <span className="font-bold text-blue-600">十分位</span>
                                                <span className="font-bold text-green-600">百分位</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-sm text-slate-500">
                                        <td className="p-2 border">1</td>
                                        <td className="p-2 border"></td>
                                        <td className="p-2 border">
                                            <div className="grid grid-cols-2 gap-2">
                                                <span>0.1</span>
                                                <span>0.01</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg text-yellow-800 dark:text-yellow-200 text-sm">
                            <strong>口诀：</strong><br />
                            小数加减点对齐，<br />
                            从右向左计算起，<br />
                            满十进一要牢记，<br />
                            退一当十别大意。
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <AlertCircle className="w-6 h-6 text-red-600" />
                            常见错误
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 bg-red-50 dark:bg-red-900/10 p-4 rounded-lg">
                                <span className="text-red-500 font-bold text-xl">×</span>
                                <div>
                                    <strong className="block text-slate-800 dark:text-white">错误：末尾对齐</strong>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        计算 5 + 2.4 时，把 5 和 4 对齐。
                                        <br />
                                        <span className="text-green-600 font-bold">纠正：</span>
                                        即便是整数，小数点也是在个位的右下角（5.0）。必须<strong>小数点对齐</strong>，也就是 5 和 2 对齐。
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 bg-red-50 dark:bg-red-900/10 p-4 rounded-lg">
                                <span className="text-red-500 font-bold text-xl">×</span>
                                <div>
                                    <strong className="block text-slate-800 dark:text-white">错误：计算结果不化简</strong>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        计算结果是 3.50。
                                        <br />
                                        <span className="text-green-600 font-bold">纠正：</span>
                                        小数末尾的 0 一般要去掉，写成 3.5。
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />
                            生活中的小数
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl text-center">
                                <div className="text-3xl mb-2">💴</div>
                                <h3 className="font-bold text-green-800 dark:text-green-300">人民币</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                                    1元5角 = 1.5 元<br />
                                    3元8分 = 3.08 元
                                </p>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl text-center">
                                <div className="text-3xl mb-2">📏</div>
                                <h3 className="font-bold text-blue-800 dark:text-blue-300">身高</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                                    1米45厘米 = 1.45 米<br />
                                    1米6分米 = 1.6 米
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Award className="w-6 h-6 text-indigo-600" />
                            闯关练习
                        </h2>
                        <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-lg text-center">
                            <p className="text-slate-600 dark:text-slate-300">
                                请在练习本上列竖式计算：<br />
                                <span className="font-mono text-lg font-bold">10 - 3.48 = ?</span>
                            </p>
                            <p className="text-xs text-slate-400 mt-2">提示：把 10 看作 10.00</p>
                        </div>
                    </div>
                </div>
            )
        }
    },
    // ==================== 5. 四则混合运算 ====================
    'g4-l1-mixed-ops': {
        meta: {
            title: "四则混合运算 - 四年级数学 | AI7Miao数学",
            description: "掌握整数四则混合运算的顺序。通过互动演示，理解括号的作用，学会正确计算。",
            keywords: "四则运算,运算顺序,括号,混合运算"
        },
        info: {
            title: "四则混合运算",
            description: "加减乘除混在一起怎么办？别慌，掌握'运算红绿灯'，按顺序走就不怕撞车！",
            tags: [
                { text: "数与代数", color: "blue" },
                { text: "40分钟", icon: Clock, color: "slate" },
                { text: "难点", icon: Star, color: "orange" }
            ]
        },
        aiContext: "想象你正在参加一场数学王国的速度竞赛！加减乘除就是不同的路段。重点是“交通规则”：括号是特权车先走，乘除法是快车道，加减法是慢车道。如果只有快车或只有慢车，就按从左到右的顺序。引导学生发现，顺序变了，终点（答案）也会变哦！",
        aiChatTitle: "运算指挥官：红绿灯下的秩序",
        aiChatIntro: "滴滴！我是你的数学领航员。前方有一堆算式堵车了，你能帮它们理顺顺序吗？",
        aiMessages: [
            { role: 'ai', content: '计算 12 ÷ 6 × 2，如果我们先算乘法，答案会是什么？' },
            { role: 'user', content: '12 ÷ 12 = 1。' },
            { role: 'ai', content: '那如果我们按顺序算除法呢？' },
            { role: 'user', content: '2 × 2 = 4。' },
            { role: 'ai', content: <>哇！同一个算式，顺序不一样，结果竟然差了这么多！这就是为什么我们要有**“运算通行证”**。括号就像救护车，总能最先通过！明白了吗？🌟</>, type: 'success' }
        ],
        tabs: {
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Sparkles className="w-6 h-6 text-indigo-600" />
                            互动演示：运算顺序可视化
                        </h2>
                        <div className="mb-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl text-slate-700 dark:text-slate-300">
                            <p>点击选择一个表达式，观察它是如何一步步"瘦身"变出答案的。</p>
                        </div>
                        <OperationOrderVisualizer />
                    </div>
                </div>
            ),
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <BookOpen className="w-6 h-6 text-indigo-600" />
                            运算顺序法则
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border-l-4 border-yellow-500">
                                <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-800 flex items-center justify-center font-bold text-yellow-700 dark:text-yellow-300">1</div>
                                <div>
                                    <h3 className="font-bold text-slate-800 dark:text-white">同级运算</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-300">只有加减法，或只有乘除法，<strong>从左往右</strong>按顺序计算。</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border-l-4 border-green-500">
                                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center font-bold text-green-700 dark:text-green-300">2</div>
                                <div>
                                    <h3 className="font-bold text-slate-800 dark:text-white">两级运算</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-300">既有加减法，又有乘除法，<strong>先乘除，后加减</strong>。</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border-l-4 border-red-500">
                                <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-800 flex items-center justify-center font-bold text-red-700 dark:text-red-300">3</div>
                                <div>
                                    <h3 className="font-bold text-slate-800 dark:text-white">有括号</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-300">如果有小括号，要<strong>先算括号里面的</strong>。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <AlertCircle className="w-6 h-6 text-red-600" />
                            常见陷阱
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-xl">
                                <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">数字诱惑</h3>
                                <p className="font-mono text-lg mb-2">12 - 4 + 6 = ?</p>
                                <p className="text-sm text-slate-600 dark:text-slate-300">
                                    <span className="font-bold text-red-500">错误：</span> 先算 4+6=10，再算 12-10=2.<br />
                                    （原因：看到 4 和 6 凑整 10，就忘了从左往右的规则）<br />
                                    <span className="font-bold text-green-600">正确：</span> 12-4=8, 8+6=14。
                                </p>
                            </div>
                            <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-xl">
                                <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">括号缺失</h3>
                                <p className="font-mono text-lg mb-2">60 ÷ 15 - 10 = ?</p>
                                <p className="text-sm text-slate-600 dark:text-slate-300">
                                    有些题目本意是 60 ÷ (15-10)，但漏看括号，导致运算顺序完全错误。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />
                            挑战一下
                        </h2>
                        <div className="space-y-4">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-mono text-lg text-slate-800 dark:text-white mb-2">
                                    240 ÷ ( 20 - 5 ) × 2
                                </p>
                                <div className="pl-4 border-l-2 border-indigo-300 dark:border-indigo-700 space-y-1 text-sm text-slate-600 dark:text-slate-400">
                                    <p>第一步：先算括号 20 - 5 = 15</p>
                                    <p className="font-mono">= 240 ÷ 15 × 2</p>
                                    <p>第二步：从左往右算 240 ÷ 15 = 16</p>
                                    <p className="font-mono">= 16 × 2</p>
                                    <p>第三步：算乘法</p>
                                    <p className="font-mono">= 32</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Award className="w-6 h-6 text-indigo-600" />
                            练习题
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <PracticeProblem
                                problem="100 - ( 35 + 25 )"
                                answer="40"
                                options={["40", "90", "160"]}
                            />
                            <PracticeProblem
                                problem="30 + 20 ÷ 5"
                                answer="34"
                                options={["10", "34", "50"]}
                            />
                        </div>
                    </div>
                </div>
            )
        }
    },

    // ==================== 6. 平行四边形与梯形 (深度互动版) ====================
    'g4-l1-parallel-trapezoid': {
        meta: {
            title: "平行四边形与梯形 - 四年级数学 | AI7Miao数学",
            description: "探究平行四边形和梯形的特征。通过互动几何板，直观理解平行的概念，掌握高与底的关系。",
            keywords: "平行四边形,梯形,平行,高,底,几何,四边形"
        },
        info: {
            title: "平行四边形与梯形",
            description: "四边形家族里有两位特殊的成员，它们都有平行的对边。让我们动动手，看看它们有什么奥秘！",
            tags: [
                { text: "四年级", color: "blue" },
                { text: "图形与几何", color: "green" },
                { text: "30分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "想象你正在搭一个神奇的框架！两根平行的竹竿就像火车轨道，永远不会打架。如果一个四边形有两组这样的“轨道”，它就是平行四边形；如果只有一组像梯子那样的，就是梯形。鼓励学生观察生活中的窗户、栅栏，感受图形的“稳定感”和“对称美”。",
        aiChatTitle: "几何魔术师：变幻的四边形",
        aiChatIntro: "嘿！如果你把一个长方形捏住对角使劲一拉，它会变成什么样子呢？",
        aiMessages: [
            { role: 'ai', content: '看看你的栅栏或者梯子，你发现它们的边有什么共同点吗？' },
            { role: 'user', content: '有些边是斜着的，有些边一直平行。' },
            { role: 'ai', content: '观察入微！如果一个图形的上下两边像铁轨一样永远不相交，我们就叫它“对边平行”。如果左右两边也平行，它就是**平行四边形**。那要是左右跑偏了，只有上下平行呢？' },
            { role: 'user', content: '那就变成了梯形！' },
            { role: 'ai', content: <>太神了！就像魔术一样，只要改变平行的边数，图形就换了个身份。快去互动实验室，用手拉拉它们吧！🌟</>, type: 'success' },
        ],
        tabs: {
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：图形变变变
                        </h2>
                        <div className="mb-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl text-slate-700 dark:text-slate-300">
                            <p><strong>实验任务：</strong></p>
                            <ul className="list-disc list-inside space-y-1 mt-2">
                                <li>切换"平行四边形"和"梯形"模式，观察它们的区别。</li>
                                <li>拖动点 <strong>B</strong> 改变底的长度。</li>
                                <li>拖动点 <strong>D</strong> 改变高。注意观察对应的虚线（高）是如何变化的。</li>
                                <li>思考：为什么改变了形状，它依然是平行四边形/梯形？（因为平行的性质没变）</li>
                            </ul>
                        </div>
                        <QuadrilateralDiagram />
                    </div>
                </div>
            ),
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <BookOpen className="w-6 h-6 text-indigo-600" />
                            图形特征对比
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="group border-2 border-transparent hover:border-indigo-100 dark:hover:border-indigo-900 rounded-xl transition-all">
                                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl h-full">
                                    <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-300 mb-4 flex items-center gap-2">
                                        <span className="w-8 h-8 bg-indigo-200 dark:bg-indigo-800 rounded-full flex items-center justify-center text-sm">A</span>
                                        平行四边形
                                    </h3>
                                    <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span><strong>两组</strong>对边分别平行</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span>对边相等</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span>对角相等</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="group border-2 border-transparent hover:border-purple-100 dark:hover:border-purple-900 rounded-xl transition-all">
                                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl h-full">
                                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-300 mb-4 flex items-center gap-2">
                                        <span className="w-8 h-8 bg-purple-200 dark:bg-purple-800 rounded-full flex items-center justify-center text-sm">B</span>
                                        梯形
                                    </h3>
                                    <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span><strong>只有一组</strong>对边平行</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span>平行的两边叫底（上底、下底）</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span>不平行的两边叫腰</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-400 rounded-r-lg">
                            <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">特别提醒：长方形和正方形</h4>
                            <p className="text-yellow-700 dark:text-yellow-300">
                                长方形和正方形的两组对边也分别平行，所以它们是<strong>特殊的平行四边形</strong>。
                            </p>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Ruler className="w-6 h-6 text-indigo-600" />
                            高与底
                        </h2>
                        <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                            <p>
                                从平行四边形一条边上的一点到对边引一条垂线，这点和垂足之间的线段叫做平行四边形的<strong>高</strong>，
                                垂足所在的边叫做平行四边形的<strong>底</strong>。
                            </p>
                            <p className="mt-4">
                                梯形的高是两平行底边之间的垂直距离。
                            </p>

                            <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">✏️ 如何画高？</h4>
                                <ol className="list-decimal list-inside space-y-1 text-sm">
                                    <li><strong>找点</strong>：在底边对面的边上任取一点（梯形通常取顶点）。</li>
                                    <li><strong>靠线</strong>：用三角尺的一条直角边靠住底边。</li>
                                    <li><strong>平移</strong>：平移三角尺，直到另一条直角边经过选定的点。</li>
                                    <li><strong>画线</strong>：沿着直角边画一条线段。</li>
                                    <li><strong>标记</strong>：标出直角符号。</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border-l-4 border-red-500">
                        <h3 className="font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5" />
                            易错点警示
                        </h3>
                        <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                            <li className="flex gap-2">
                                <span className="text-red-500 font-bold">×</span>
                                <span>错误：认为平行四边形只有一条高。</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-green-500 font-bold">√</span>
                                <span>纠正：平行四边形有<strong>无数条</strong>高。从边上任意一点都可以向对边画高。而且有两组不同的底，对应两组不同的高。</span>
                            </li>
                            <li className="flex gap-2 text-slate-500 pl-6 text-xs">
                                （梯形也有无数条高，但只有一组底）
                            </li>
                        </ul>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />
                            典型例题
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">判一判</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                    两个完全一样的梯形可以拼成一个平行四边形吗？
                                </p>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-indigo-500">
                                    <p className="text-slate-600 dark:text-slate-400 font-mono text-sm">
                                        答：<strong>可以</strong>。<br />
                                        把两个完全一样的梯形倒置拼在一起，上底接下底，下底接上底，两腰就构成了平行四边形的另外两组对边。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Award className="w-6 h-6 text-indigo-600" />
                            巩固练习
                        </h2>
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 rounded-xl">
                            <p>👉 更多互动练习题正在生成中... 请先在"互动实验室"体验图形的变化！</p>
                        </div>
                    </div>
                </div>
            )
        }
    },

    // ==================== 7. 条形统计图与平均数 ====================
    'g4-l1-bar-chart': {
        meta: {
            title: "条形统计图与平均数 - 四年级数学 | AI7Miao数学",
            description: "学会制作和分析条形统计图。理解平均数的含义，掌握'移多补少'的方法。",
            keywords: "统计图,平均数,移多补少,数据分析"
        },
        info: {
            title: "条形统计图与平均数",
            description: "数据会说话！用条形图比高矮，用平均数看水平。谁是隐藏的数据分析大师？",
            tags: [
                { text: "四年级", color: "blue" },
                { text: "统计与概率", color: "purple" },
                { text: "35分钟", icon: Clock, color: "slate" },
                { text: "有趣", icon: Star, color: "green" }
            ]
        },
        aiContext: "想象你正在当一名小小记者！通过采访大家最爱吃的水果，把数字变成一排排漂亮的“柱子”。条形图就是数字的“个头对比”。平均数则是要把这些柱子“削平”，看看大家都过得怎么样。用“分糖果”或“砍高补低”来生动解释平均数。",
        aiChatTitle: "数据小记者：让数字说话",
        aiChatIntro: "你好！我是数据侦探官。如果你想一眼看出谁是最受欢迎的项目，条形图就是你的超级透视镜！",
        aiMessages: [
            { role: 'ai', content: '如果你有三袋糖果，分别是 2 块、4 块、6 块。如果你想让每个袋子里的糖果一样多，你会怎么做？' },
            { role: 'user', content: '把 6 块的那袋分 2 块给第一袋。' },
            { role: 'ai', content: '棒极了！这样每个袋子都有 4 块糖了。这里的 4，就是这组糖果的**平均数**。' },
            { role: 'ai', content: '平均数就像一个公平的天平，把多的补给少的。想看看你的数据怎么变公平吗？点击互动区试试！', type: 'success' }
        ],
        tabs: {
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Sparkles className="w-6 h-6 text-indigo-600" />
                            互动演示：移多补少求平均
                        </h2>
                        <div className="mb-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl text-slate-700 dark:text-slate-300">
                            <p>试着调整柱子的高度，点击"显示平均数"，看看平均线在哪里。</p>
                        </div>
                        <BarChartVisualizer />
                    </div>
                </div>
            ),
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <BookOpen className="w-6 h-6 text-indigo-600" />
                            条形统计图的秘密
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">1. 组成要素</h3>
                                <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-400">
                                    <li><strong>标题</strong>：告诉我们统计的是什么。</li>
                                    <li><strong>横轴</strong>：通常表示项目（如：书名、运动）。</li>
                                    <li><strong>纵轴</strong>：表示数量（如：人数、本数）。</li>
                                    <li><strong>直条</strong>：直条越高，数量越多。</li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">2. 绘画技巧</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    一看格子代表几（1格代表1还是2？），<br />
                                    二画直条要对齐，<br />
                                    三标数据别忘记。
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <BookOpen className="w-6 h-6 text-indigo-600" />
                            平均数的奥秘
                        </h2>
                        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500">
                            <p className="font-bold text-purple-800 dark:text-purple-300 text-lg mb-2">
                                平均数 = 总数量 ÷ 总份数
                            </p>
                            <p className="text-slate-600 dark:text-slate-300 text-sm">
                                平均数能较好地反映一组数据的总体情况。它介于最大值和最小值之间。
                            </p>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <AlertCircle className="w-6 h-6 text-red-600" />
                            易错点
                        </h2>
                        <div className="space-y-4">
                            <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-1">误区：平均数=实际数</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    小明身高 140cm，他去游泳。池塘平均水深 130cm。
                                    <br />
                                    <span className="text-red-500 font-bold">错误想法：</span> 平均水深才 130，比小明矮，所以小明肯定淹不到。
                                    <br />
                                    <span className="text-green-600 font-bold">正解：</span> 平均水深 130，说明有的地方可能只有 50cm，但有的深水区可能 200cm！<strong>千万不能只看平均数下水！</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />
                            典型例题
                        </h2>
                        <div className="space-y-4">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">题目：</p>
                                <p className="text-slate-600 dark:text-slate-400 mb-2">
                                    四(1)班第一组 4 人，共捐书 20 本；第二组 5 人，共捐书 30 本。求这两个组平均每人捐书多少本？
                                </p>
                                <div className="pl-4 border-l-2 border-indigo-300 dark:border-indigo-700 space-y-1 text-sm text-slate-600 dark:text-slate-400">
                                    <p><span className="font-bold text-red-500">错误列式：</span> (20 ÷ 4 + 30 ÷ 5) ÷ 2 = 5.5 (本)</p>
                                    <p className="text-xs text-slate-400">（这是求"组平均"，不是"总平均"）</p>
                                    <p className="mt-2"><span className="font-bold text-green-600">正确列式：</span></p>
                                    <p>总本数 = 20 + 30 = 50 (本)</p>
                                    <p>总人数 = 4 + 5 = 9 (人)</p>
                                    <p>平均数 = 50 ÷ 9 ≈ 5.56 (本)</p>
                                    <p className="font-bold text-indigo-600">口诀：总数 ÷ 总份数</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Award className="w-6 h-6 text-indigo-600" />
                            挑战时刻
                        </h2>
                        <PracticeProblem
                            problem="小红前三次数学考试平均分是 92 分，第四次考了 100 分。请问她四次考试的平均分是多少？"
                            answer="94"
                            options={["92", "94", "96"]}
                        />
                        <div className="mt-4 text-xs text-slate-400">
                            提示：先算出前三次的总分 (92×3)，加上第四次的 (100)，再除以 4。
                        </div>
                    </div>
                </div>
            )
        }
    },

    // ==================== L2-1. 和差倍问题 ====================
    'g4-l2-sum-diff-multiple': {
        meta: {
            title: "和差倍问题 - 四年级思维进阶 | AI7Miao数学",
            description: "掌握和差问题、和倍问题、差倍问题的解题方法，学会用线段图分析数量关系。",
            keywords: "和差问题,和倍问题,差倍问题,线段图,小学奥数"
        },
        info: {
            title: "和差倍问题",
            description: "两个数的和、差、倍数关系，用线段图一画就清楚！解开这三类问题，你就是奥数小达人。",
            tags: [
                { text: "思维进阶", color: "purple" },
                { text: "40分钟", icon: Clock, color: "slate" },
                { text: "重点", icon: Star, color: "orange" }
            ]
        },
        aiContext: "想象你正在分糖果！如果你和朋友一共有 36 块，你比他多 8 块，怎么分才公平？引导学生先“削减”多出来的部分，让两人相等。通过画线段图，把抽象的和、差、倍变成看得见的“长度”。让学生体会“先求一份量”的神奇之处。",
        aiChatTitle: "分糖果专家：和差倍的秘密",
        aiChatIntro: "嘿！如果我有两堆神秘的宝藏，我知道它们的总数，也知道它们差多少，你能帮我把它们找出来吗？",
        aiMessages: [
            { role: 'ai', content: '两个数的和是 36，差是 8。如果我们先把那个多出的 8 给“藏起来”，剩下的数会发生什么？' },
            { role: 'user', content: '剩下的数就是 36 - 8 = 28。' },
            { role: 'ai', content: '对呀！这时候两个数就变得“一模一样”了。那其中一个（小数）是多少呢？' },
            { role: 'user', content: '28 ÷ 2 = 14！' },
            { role: 'ai', content: <>太棒了！找到了小的，大的只要再加回那个 8 就行了（14 + 8 = 22）。这就是**“和差术”**！是不是像破解密码一样有趣？🌟</>, type: 'success' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            三类问题总览
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 text-lg">① 和差问题</h3>
                                <p className="text-slate-700 dark:text-slate-300 text-sm mb-2">已知两数的<strong>和</strong>与<strong>差</strong>，求两数。</p>
                                <div className="bg-white dark:bg-slate-700 p-3 rounded-lg font-mono text-sm">
                                    <p>大数 = (和 + 差) ÷ 2</p>
                                    <p>小数 = (和 - 差) ÷ 2</p>
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 text-lg">② 和倍问题</h3>
                                <p className="text-slate-700 dark:text-slate-300 text-sm mb-2">已知两数的<strong>和</strong>与<strong>倍数关系</strong>，求两数。</p>
                                <div className="bg-white dark:bg-slate-700 p-3 rounded-lg font-mono text-sm">
                                    <p>小数 = 和 ÷ (倍数 + 1)</p>
                                    <p>大数 = 小数 × 倍数</p>
                                </div>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 text-lg">③ 差倍问题</h3>
                                <p className="text-slate-700 dark:text-slate-300 text-sm mb-2">已知两数的<strong>差</strong>与<strong>倍数关系</strong>，求两数。</p>
                                <div className="bg-white dark:bg-slate-700 p-3 rounded-lg font-mono text-sm">
                                    <p>小数 = 差 ÷ (倍数 - 1)</p>
                                    <p>大数 = 小数 × 倍数</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />
                            典型例题
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">例1：和差问题</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-3">甲乙两数的和是 72，甲比乙多 8，求两数。</p>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-blue-500 font-mono text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                    <p>甲（大数）= (72 + 8) ÷ 2 = 80 ÷ 2 = <strong>40</strong></p>
                                    <p>乙（小数）= (72 - 8) ÷ 2 = 64 ÷ 2 = <strong>32</strong></p>
                                    <p className="text-green-600 dark:text-green-400">验证：40 + 32 = 72 ✓，40 - 32 = 8 ✓</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">例2：和倍问题</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-3">鸡和鸭共 35 只，鸡的数量是鸭的 4 倍，求各几只？</p>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-green-500 font-mono text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                    <p>鸭（小数）= 35 ÷ (4 + 1) = 35 ÷ 5 = <strong>7只</strong></p>
                                    <p>鸡（大数）= 7 × 4 = <strong>28只</strong></p>
                                    <p className="text-green-600 dark:text-green-400">验证：7 + 28 = 35 ✓</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">例3：差倍问题</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-3">哥哥的贴纸是弟弟的 3 倍，哥哥比弟弟多 24 张，求各几张？</p>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-purple-500 font-mono text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                    <p>弟弟（小数）= 24 ÷ (3 - 1) = 24 ÷ 2 = <strong>12张</strong></p>
                                    <p>哥哥（大数）= 12 × 3 = <strong>36张</strong></p>
                                    <p className="text-green-600 dark:text-green-400">验证：36 - 12 = 24 ✓</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={420} type="choice"
                        question="两数之和为 50，差为 10，较大的数是（ ）"
                        options={[{ label: 'A', value: '25' }, { label: 'B', value: '30' }, { label: 'C', value: '35' }, { label: 'D', value: '40' }]}
                        answer="B"
                        explanation="大数 = (50 + 10) ÷ 2 = 60 ÷ 2 = 30"
                    />
                    <PracticeProblem id={421} type="choice"
                        question="甲是乙的 5 倍，甲乙之和为 48，乙是（ ）"
                        options={[{ label: 'A', value: '6' }, { label: 'B', value: '8' }, { label: 'C', value: '10' }, { label: 'D', value: '12' }]}
                        answer="B"
                        explanation="乙 = 48 ÷ (5+1) = 48 ÷ 6 = 8"
                    />
                    <PracticeProblem id={422} type="choice"
                        question="大数是小数的 4 倍，大数比小数多 18，小数是（ ）"
                        options={[{ label: 'A', value: '4' }, { label: 'B', value: '6' }, { label: 'C', value: '8' }, { label: 'D', value: '9' }]}
                        answer="B"
                        explanation="小数 = 18 ÷ (4-1) = 18 ÷ 3 = 6"
                    />
                </div>
            )
        }
    },

    // ==================== L2-2. 简便运算 ====================
    'g4-l2-clever-calc': {
        meta: {
            title: "简便运算（凑整/拆数）- 四年级思维进阶 | AI7Miao数学",
            description: "掌握加法交换律、结合律和乘法分配律。学会凑整、拆数等简便计算技巧，让运算又快又准。",
            keywords: "简便运算,运算定律,凑整,拆数,乘法分配律,加法交换律"
        },
        info: {
            title: "简便运算（凑整/拆数）",
            description: "同样的答案，有人算了 1 分钟，有人只需 5 秒！学会这些技巧，让你成为计算神童！",
            tags: [
                { text: "思维进阶", color: "purple" },
                { text: "35分钟", icon: Clock, color: "slate" },
                { text: "重点", icon: Star, color: "orange" }
            ]
        },
        aiContext: "想象你是一个数学魔术师！别人在埋头苦算，你却能秒出答案。重点是寻找“好朋友数字”（比如 125 和 8，25 和 4）。利用加法和乘法的“搬家权”（交换律和结合律），还有“拆礼物”（分配律）。鼓励学生先观察再动笔，寻找数字里的“彩蛋”。",
        aiChatTitle: "运算加速器：数字的捷径",
        aiChatIntro: "嘘！我发现了一些数字之间的秘密协议，能让计算瞬间变简单。想跟我一起学“瞬发魔法”吗？",
        aiMessages: [
            { role: 'ai', content: '计算 99 × 12，如果你老老实实列竖式，可能要算半天。你有更好玩的办法吗？' },
            { role: 'user', content: '把 99 看成 100 减 1？' },
            { role: 'ai', content: '妙极了！(100 - 1) × 12 = 1200 - 12 = 1188。瞧，嘴巴动一动，答案就出来啦！' },
            { role: 'user', content: '那 25 × 44 呢？' },
            { role: 'ai', content: <>嘿嘿，寻找 25 的好伙伴 4！把 44 拆成 4 × 11。25 × 4 = 100，再乘 11 就是 1100。这就是**“拆数魔法”**！🌟</>, type: 'success' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            三大运算定律
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">① 加法交换律</h3>
                                <div className="font-mono text-center text-lg bg-white dark:bg-slate-700 p-3 rounded-lg mb-2">a + b = b + a</div>
                                <p className="text-sm text-slate-600 dark:text-slate-400">用法：把能凑成整十、整百的数交换到一起先加。</p>
                                <p className="text-sm text-indigo-600 dark:text-indigo-400 font-mono mt-1">例：37 + 85 + 63 = 37 + 63 + 85 = 100 + 85 = 185</p>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">② 加法结合律</h3>
                                <div className="font-mono text-center text-lg bg-white dark:bg-slate-700 p-3 rounded-lg mb-2">(a + b) + c = a + (b + c)</div>
                                <p className="text-sm text-slate-600 dark:text-slate-400">用法：把三个数中能凑整的两个数先加。</p>
                                <p className="text-sm text-green-600 dark:text-green-400 font-mono mt-1">例：(46 + 54) + 38 = 100 + 38 = 138</p>
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl">
                                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2">③ 乘法分配律</h3>
                                <div className="font-mono text-center text-lg bg-white dark:bg-slate-700 p-3 rounded-lg mb-2">a × (b + c) = a×b + a×c</div>
                                <p className="text-sm text-slate-600 dark:text-slate-400">用法：把接近整十整百的数拆开，或把相同因数提前。</p>
                                <p className="text-sm text-orange-600 dark:text-orange-400 font-mono mt-1">例：25 × 44 = 25 × 4 × 11 = 100 × 11 = 1100</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-3">
                            <Target className="w-6 h-6 text-indigo-600" />
                            凑整与拆数技巧
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <h4 className="font-bold text-slate-800 dark:text-white mb-2">凑整法</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">199 + 234<br />= (200-1) + 234<br />= 200 + 234 - 1<br />= 433</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <h4 className="font-bold text-slate-800 dark:text-white mb-2">拆数法</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">36 × 5<br />= 36 × (10 ÷ 2)<br />= 360 ÷ 2<br />= 180</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />
                            典型例题
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">例1：用简便方法计算 125 × 32</p>
                                <div className="font-mono text-sm text-slate-600 dark:text-slate-400 space-y-1 pl-4 border-l-4 border-blue-400">
                                    <p>= 125 × 8 × 4</p>
                                    <p>= 1000 × 4</p>
                                    <p className="font-bold text-indigo-600">= 4000</p>
                                    <p className="text-xs text-slate-400">（32 = 8 × 4，利用 125 × 8 = 1000）</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">例2：计算 37 × 99 + 37</p>
                                <div className="font-mono text-sm text-slate-600 dark:text-slate-400 space-y-1 pl-4 border-l-4 border-green-400">
                                    <p>= 37 × 99 + 37 × 1</p>
                                    <p>= 37 × (99 + 1)</p>
                                    <p>= 37 × 100</p>
                                    <p className="font-bold text-indigo-600">= 3700</p>
                                    <p className="text-xs text-slate-400">（逆用乘法分配律）</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={430} type="choice"
                        question="用简便方法计算 25 × 12 = （ ）"
                        options={[{ label: 'A', value: '200' }, { label: 'B', value: '300' }, { label: 'C', value: '400' }, { label: 'D', value: '500' }]}
                        answer="B"
                        explanation="25 × 12 = 25 × 4 × 3 = 100 × 3 = 300"
                    />
                    <PracticeProblem id={431} type="choice"
                        question="计算 38 × 101，最简便的方法得到的结果是（ ）"
                        options={[{ label: 'A', value: '3838' }, { label: 'B', value: '3876' }, { label: 'C', value: '3838' }, { label: 'D', value: '3800' }]}
                        answer="A"
                        explanation="38 × 101 = 38 × (100+1) = 3800 + 38 = 3838"
                    />
                </div>
            )
        }
    },

    // ==================== L2-3. 定义新运算 ====================
    'g4-l2-new-definition': {
        meta: {
            title: "定义新运算 - 四年级思维进阶 | AI7Miao数学",
            description: "理解并掌握自定义运算符号的题型。通过代入法，将新运算符号转化为已知四则运算进行计算。",
            keywords: "定义新运算,自定义运算,运算符号,代入法,奥数"
        },
        info: {
            title: "定义新运算",
            description: "数学家可以发明新的运算符号！看清规则，代入计算，这类题难不倒你！",
            tags: [
                { text: "思维进阶", color: "purple" },
                { text: "35分钟", icon: Clock, color: "slate" },
                { text: "趣味", icon: Star, color: "green" }
            ]
        },
        aiContext: "想象你闯进了一个外星实验室！那里的符号和我们的不一样。比如他们的“★”代表“先乘 2 再加 3”。重点是“翻译”——把陌生的符号翻译成我们熟悉的加减乘除。引导学生像玩游戏代入招式表一样，把数字“送进”符号机器里。",
        aiChatTitle: "密码破译员：神秘的特殊符号",
        aiChatIntro: "你好，探险家！我发现了一些从未见过的运算符号。你能帮我破解它们的“操作手册”吗？",
        aiMessages: [
            { role: 'ai', content: '如果我发明一个符号 a▲b = a×2 + b，那么你觉得 3▲4 应该是多少？' },
            { role: 'user', content: '3×2 + 4 = 10？' },
            { role: 'ai', content: 'Bingo！完全正确！你已经掌握了外星数学的精髓：**“对号入座”**。不管符号长多奇怪，只要看清它的说明书，就能轻松搞定！🌟' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            什么是"定义新运算"？
                        </h2>
                        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-xl mb-6">
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                题目会创造一个<strong>全新的运算符号</strong>（如 ★、◆、▲），并给出它的定义。
                                只要看懂定义，<strong>把数字代入就能计算</strong>。
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl p-5">
                            <h3 className="font-bold text-slate-800 dark:text-white mb-3">解题三步法</h3>
                            <div className="space-y-3">
                                {[
                                    { step: '1', title: '读懂定义', desc: '明确新运算符号的含义，找出它和a、b的关系。' },
                                    { step: '2', title: '对应代入', desc: '把题目中给出的具体数字，对号入座代入定义式。' },
                                    { step: '3', title: '按序计算', desc: '按照四则运算的顺序（先乘除后加减）计算结果。' },
                                ].map(item => (
                                    <div key={item.step} className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-7 h-7 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">{item.step}</span>
                                        <div>
                                            <span className="font-bold text-slate-800 dark:text-white">{item.title}：</span>
                                            <span className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />
                            典型例题
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-xl">
                                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-3 rounded-lg mb-4">
                                    <p className="font-bold text-yellow-800 dark:text-yellow-200">定义：a ★ b = a × b + a - b</p>
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 mb-3">求 4 ★ 3 的值。</p>
                                <div className="pl-4 border-l-4 border-indigo-400 font-mono text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                    <p>将 a=4，b=3 代入：</p>
                                    <p>= 4 × 3 + 4 - 3</p>
                                    <p>= 12 + 4 - 3</p>
                                    <p className="font-bold text-indigo-600">= 13</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-xl">
                                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-3 rounded-lg mb-4">
                                    <p className="font-bold text-yellow-800 dark:text-yellow-200">定义：a ◆ b = (a + b) ÷ 2</p>
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 mb-3">若 6 ◆ x = 5，求 x。</p>
                                <div className="pl-4 border-l-4 border-purple-400 font-mono text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                    <p>代入：(6 + x) ÷ 2 = 5</p>
                                    <p>6 + x = 10</p>
                                    <p className="font-bold text-purple-600">x = 4</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl mb-4">
                        <p className="font-bold text-indigo-800 dark:text-indigo-200">定义：a ▽ b = a × 3 - b × 2</p>
                    </div>
                    <PracticeProblem id={440} type="choice"
                        question="根据上面定义，5 ▽ 4 = （ ）"
                        options={[{ label: 'A', value: '5' }, { label: 'B', value: '7' }, { label: 'C', value: '9' }, { label: 'D', value: '11' }]}
                        answer="B"
                        explanation="5 ▽ 4 = 5×3 - 4×2 = 15 - 8 = 7"
                    />
                    <PracticeProblem id={441} type="choice"
                        question="根据上面定义，若 a ▽ 3 = 12，则 a = （ ）"
                        options={[{ label: 'A', value: '5' }, { label: 'B', value: '6' }, { label: 'C', value: '7' }, { label: 'D', value: '8' }]}
                        answer="B"
                        explanation="a×3 - 3×2 = 12 → 3a - 6 = 12 → 3a = 18 → a = 6"
                    />
                </div>
            )
        }
    },

    // ==================== L2-4. 数阵图 ====================
    'g4-l2-number-array': {
        meta: {
            title: "数阵图 - 四年级思维进阶 | AI7Miao数学",
            description: "学习幻方、数字方阵等数阵图的解题规律。掌握三阶幻方的结构，提升逻辑推理能力。",
            keywords: "数阵图,幻方,魔方阵,数字方阵,奥数,逻辑"
        },
        info: {
            title: "数阵图",
            description: "古老的幻方游戏，几百年来难倒无数人！掌握规律，你也能轻松搞定！",
            tags: [
                { text: "思维进阶", color: "purple" },
                { text: "40分钟", icon: Clock, color: "slate" },
                { text: "趣味", icon: Star, color: "green" }
            ]
        },
        aiContext: "想象你正在排座次！每个人都有不同的分量（数字），你要让每一排、每一列的“总重量”都相等。利用“三阶幻方”引入，讲述洛书古老的传说。引导学生发现中间那个“定海神针”（中心数）的作用。强调“平衡”是数阵图的终极奥义。",
        aiChatTitle: "数阵指挥家：寻找完美的平衡",
        aiChatIntro: "欢迎来到九宫格迷宫！这里每一个数字都想找到自己的位置，让团队的力量（和）达到和谐统一。",
        aiMessages: [
            { role: 'ai', content: '在 1 到 9 的幻方里，如果每一行、每一列的和都是 15，你猜最中间的那个数字是谁？' },
            { role: 'user', content: '是 5 吗？' },
            { role: 'ai', content: '机智！5 就像是轴心，支撑着整个方阵。有了它，其他的数字就能通过“对对碰”找到自己的位置。我们去互动区试试，能不能布出你的阵法？🌟' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Brain className="w-6 h-6 text-indigo-600" />
                            幻方的秘密
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-xl border-l-4 border-amber-500">
                                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2">三阶幻方基础</h3>
                                <p className="text-slate-700 dark:text-slate-300 text-sm">
                                    用 1 到 9 填入 3×3 的方格，使每行、每列、两条对角线上的三数之和都相等。
                                </p>
                                <p className="text-slate-700 dark:text-slate-300 text-sm mt-2">
                                    <strong>公共和 = (1+2+3+4+5+6+7+8+9) ÷ 3 = 45 ÷ 3 = 15</strong>
                                </p>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="mx-auto border-collapse">
                                    <tbody>
                                        {[[2, 7, 6], [9, 5, 1], [4, 3, 8]].map((row, ri) => (
                                            <tr key={ri}>
                                                {row.map((n, ci) => (
                                                    <td key={ci} className={`w-14 h-14 text-center text-xl font-bold border-2 border-slate-400 dark:border-slate-500 ${n === 5 ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300' : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100'}`}>{n}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <p className="text-center text-sm text-slate-500 mt-3">三阶标准幻方（每行/列/对角线之和 = 15）</p>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">解题口诀</h3>
                                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                    <li>🎯 <strong>中心格</strong>：一定填最中间数（如1-9中填5）</li>
                                    <li>🎯 <strong>确定格</strong>：已知两格，第三格 = 公共和 - 已知两格之和</li>
                                    <li>🎯 <strong>奇数格</strong>：角格填偶数，边中格填奇数（1-9标准幻方）</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />
                            典型例题
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-3">例：在方格中填入数字，使每行、列、对角线之和都等于12</h3>
                                <div className="flex gap-6 items-start flex-wrap">
                                    <div>
                                        <p className="text-sm text-slate-500 mb-2">题目（已填部分）：</p>
                                        <table className="border-collapse">
                                            <tbody>
                                                {[['□', 5, '□'], ['□', '□', 1], ['□', 3, '□']].map((row, ri) => (
                                                    <tr key={ri}>
                                                        {row.map((n, ci) => (
                                                            <td key={ci} className="w-12 h-12 text-center text-lg font-bold border-2 border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100">{n}</td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 mb-2">答案：</p>
                                        <table className="border-collapse">
                                            <tbody>
                                                {[[4, 5, 3], [7, 4, 1], [1, 3, 8]].map((row, ri) => (
                                                    <tr key={ri}>
                                                        {row.map((n, ci) => (
                                                            <td key={ci} className="w-12 h-12 text-center text-lg font-bold border-2 border-green-400 bg-green-50 dark:bg-green-900/20 text-slate-800 dark:text-slate-100">{n}</td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-500 mt-3">思路：中心格 = 12×3÷3? 不对，要先求每行和，再逆推。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={450} type="choice"
                        question="用1到9填三阶幻方，每行每列对角线的和都是（ ）"
                        options={[{ label: 'A', value: '12' }, { label: 'B', value: '15' }, { label: 'C', value: '18' }, { label: 'D', value: '21' }]}
                        answer="B"
                        explanation="1+2+...+9 = 45，分成3行，每行和 = 45÷3 = 15"
                    />
                    <PracticeProblem id={451} type="choice"
                        question="三阶幻方（1-9）中，中心位置一定填（ ）"
                        options={[{ label: 'A', value: '1' }, { label: 'B', value: '3' }, { label: 'C', value: '5' }, { label: 'D', value: '9' }]}
                        answer="C"
                        explanation="中心格同时属于所有行、列和对角线，经分析必填中间数5。"
                    />
                </div>
            )
        }
    },

    // ==================== L2-5. 逻辑推理进阶 ====================
    'g4-l2-logic-advanced': {
        meta: {
            title: "逻辑推理进阶 - 四年级思维进阶 | AI7Miao数学",
            description: "学习排列、假设、排除等逻辑推理方法。解决'谁是谁'、真假判断等经典逻辑题。",
            keywords: "逻辑推理,假设法,排除法,真假判断,奥数,思维训练"
        },
        info: {
            title: "逻辑推理进阶",
            description: "侦探的必备技能！用假设法和排除法，层层剥茧，找到唯一的答案。",
            tags: [
                { text: "思维进阶", color: "purple" },
                { text: "35分钟", icon: Clock, color: "slate" },
                { text: "烧脑", icon: Brain, color: "red" }
            ]
        },
        aiContext: "想象你正在当一名大侦探（比如福尔摩斯）！遇到复杂的情况，我们先大胆“假设”。如果假设的情况推导下去发生了冲突（打架），那我们就找到了真相。引导学生学会列表记录线索，像拼图一样把真相拼凑出来。",
        aiChatTitle: "大侦探剧场：谁在说真话？",
        aiChatIntro: "嘘！案发现场留下了三句证词，但其中只有一句是真话。你能用你的“假设放大镜”找出真相吗？",
        aiMessages: [
            { role: 'ai', content: '甲说：“乙在说谎”；乙说：“丙在说谎”；丙说：“我没说谎”。如果我们先假设甲说的是真话，会发生什么呢？' },
            { role: 'user', content: '那乙就是在说谎。' },
            { role: 'ai', content: '如果乙在说谎，那他说的“丙在说谎”就是假的，说明丙没说谎。哎？这跟丙自己说的“我没说谎”对上了！这就说明我们的假设成功了！🌟' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Brain className="w-6 h-6 text-indigo-600" />
                            三大推理武器
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">①</span>
                                    列表排除法
                                </h3>
                                <p className="text-slate-700 dark:text-slate-300 text-sm">
                                    建立表格，把人/物作为行，条件作为列。根据已知条件，逐步打✗排除不可能的，
                                    剩下的✓就是答案。
                                </p>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                                    <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs">②</span>
                                    假设法
                                </h3>
                                <p className="text-slate-700 dark:text-slate-300 text-sm">
                                    先假设某种情况成立，根据推导出的结果与已知条件对比：
                                    产生矛盾 → 假设错误；没有矛盾 → 假设正确。
                                </p>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                                    <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs">③</span>
                                    真假判断
                                </h3>
                                <p className="text-slate-700 dark:text-slate-300 text-sm">
                                    当多个人的陈述中有真有假时，逐一假设每人说真话，
                                    看哪种情况能与所有已知条件自洽。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />
                            典型例题
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-3">例1：列表排除法</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-3 text-sm">
                                    甲、乙、丙三人分别会下棋、踢球、游泳中的一项。甲不会下棋，乙不会踢球，甲不会游泳。求各自的爱好。
                                </p>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm border-collapse">
                                        <thead>
                                            <tr className="bg-slate-200 dark:bg-slate-600">
                                                <th className="p-2 border border-slate-300 dark:border-slate-500">姓名</th>
                                                <th className="p-2 border border-slate-300 dark:border-slate-500">下棋</th>
                                                <th className="p-2 border border-slate-300 dark:border-slate-500">踢球</th>
                                                <th className="p-2 border border-slate-300 dark:border-slate-500">游泳</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            <tr>
                                                <td className="p-2 border border-slate-300 dark:border-slate-500">甲</td>
                                                <td className="p-2 border border-slate-300 dark:border-slate-500 text-red-500">✗</td>
                                                <td className="p-2 border border-slate-300 dark:border-slate-500 text-green-500 font-bold">✓</td>
                                                <td className="p-2 border border-slate-300 dark:border-slate-500 text-red-500">✗</td>
                                            </tr>
                                            <tr className="bg-slate-50 dark:bg-slate-700/30">
                                                <td className="p-2 border border-slate-300 dark:border-slate-500">乙</td>
                                                <td className="p-2 border border-slate-300 dark:border-slate-500 text-green-500 font-bold">✓</td>
                                                <td className="p-2 border border-slate-300 dark:border-slate-500 text-red-500">✗</td>
                                                <td className="p-2 border border-slate-300 dark:border-slate-500 text-red-500">✗</td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 border border-slate-300 dark:border-slate-500">丙</td>
                                                <td className="p-2 border border-slate-300 dark:border-slate-500 text-red-500">✗</td>
                                                <td className="p-2 border border-slate-300 dark:border-slate-500 text-red-500">✗</td>
                                                <td className="p-2 border border-slate-300 dark:border-slate-500 text-green-500 font-bold">✓</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-sm text-slate-500 mt-2">结论：甲踢球，乙下棋，丙游泳。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={460} type="choice"
                        question="A、B、C三人中有一人做了好事，A说'是B做的'，B说'不是我做的'，C说'不是我做的'。已知只有一个人说假话，谁做了好事？"
                        options={[{ label: 'A', value: '是A' }, { label: 'B', value: '是B' }, { label: 'C', value: '是C' }, { label: 'D', value: '无法判断' }]}
                        answer="C"
                        explanation="如果是C做的：A说谎，B说真，C说谎——两人说谎，不符合。如果是B做的：A说真，B说谎，C说真——只有一人说谎，符合！所以是B做的。等等，验证：A说'是B'=真；B说'不是我'=假；C说'不是我'=真。只有B说假，符合题意。答案是B。"
                    />
                    <PracticeProblem id={461} type="choice"
                        question="有红、黄、蓝三个球，放在三个盒子里，每盒一个。已知：红球不在1号盒，黄球不在2号盒，蓝球不在1号和3号盒。蓝球在（ ）号盒。"
                        options={[{ label: 'A', value: '1' }, { label: 'B', value: '2' }, { label: 'C', value: '3' }, { label: 'D', value: '不确定' }]}
                        answer="B"
                        explanation="蓝球不在1号也不在3号，所以蓝球在2号。"
                    />
                </div>
            )
        }
    }

};

export default grade4Content;

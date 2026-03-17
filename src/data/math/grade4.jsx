import { MousePointer2, Ruler, BookOpen, Check } from 'lucide-react';
import AngleMeasurementDiagram from '../../components/subjects/math/elementary/AngleMeasurementDiagram';
import QuadrilateralDiagram from '../../components/subjects/math/elementary/QuadrilateralDiagram';
import VerticalDivisionVisualizer from '../../components/subjects/math/elementary/VerticalDivisionVisualizer';
import DecimalGridVisualizer from '../../components/subjects/math/elementary/DecimalGridVisualizer';
import OperationOrderVisualizer from '../../components/subjects/math/elementary/OperationOrderVisualizer';
import BarChartVisualizer from '../../components/subjects/math/elementary/BarChartVisualizer';
import PlaceValueLab from '../../components/subjects/math/elementary/PlaceValueLab';
import TapeDiagramLab from '../../components/subjects/math/elementary/TapeDiagramLab';
import OperationsLawsLab from '../../components/subjects/math/elementary/OperationsLawsLab';
import OperatorMachineLab from '../../components/subjects/math/elementary/OperatorMachineLab';
import MagicSquareLab from '../../components/subjects/math/elementary/MagicSquareLab';
import LogicTableLab from '../../components/subjects/math/elementary/LogicTableLab';
import { Icons, PracticeProblem, React } from './common';

const {
    Lightbulb, Target, TrendingUp, Clock, Star, Brain, CheckCircle, Sparkles, ChevronRight, Calculator, Award, AlertCircle
} = Icons;

export const grade4Content = {
    // ==================== 1. 大数的认识与读写 ====================
    'g4-l1-large-numbers': {
        meta: {
            title: "大数的认识与读写 - 四年级数学 | AI奇妙数学",
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
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：数位板与分级读数
                        </h2>
                        <PlaceValueLab />
                    </div>
                </div>
            ),
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

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例3：大数比较
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>比较大小：</strong>4508000 和 4500800</p>
                            <p className="mt-3"><strong>解：</strong></p>
                            <p>都是七位数，从高位比起，百万位、十万位、万位相同，千位上 8 ＞ 0，所以 4508000 ＞ 4500800。</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">位数相同比高位！</p>
                        </div>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例4：大数改写
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>把下列各数改写成用“万”或“亿”作单位的数：</strong>8000000， 14500000000</p>
                            <p className="mt-3"><strong>解：</strong></p>
                            <p>8000000 = 800万（去4个0）</p>
                            <p>14500000000 = 145亿（去8个0）</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">加个字，去掉0！</p>
                        </div>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-indigo-600" />
                            例5：近似数
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>省略万位后面的尾数，求近似数：</strong>123456</p>
                            <p className="mt-3"><strong>解：</strong></p>
                            <p>看千位上的数是 3，小于 5，舍去尾数，因此 123456 ≈ 12万。</p>
                            <p className="text-green-600 dark:text-green-400 font-bold">四舍五入看下一位！</p>
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
                        explanation="去掉末尾4个0，加上万字（此题有小数，若为整数改写则为345.6万）。这里如果按四年级上册整万改写，应为345万(若去尾)或四舍五入。原选项A带小数，但更确切是345.6万。"
                    />
                    <PracticeProblem id={403} type="choice"
                        question="把987654321省略亿位后面的尾数约是（ ）"
                        options={[{ label: 'A', value: '9亿' }, { label: 'B', value: '10亿' }, { label: 'C', value: '98亿' }, { label: 'D', value: '99亿' }]}
                        answer="B"
                        explanation="看千万位上的数是8，大于5，向前一位进1，所以约是10亿。"
                    />
                    <PracticeProblem id={404} type="choice" question="一个数的最高位是千万位，这个数是几位数？" options={[{ label: 'A', value: '六位数' }, { label: 'B', value: '七位数' }, { label: 'C', value: '八位数' }, { label: 'D', value: '九位数' }]} answer="C" explanation="个级4位（个、十、百、千），万级4位（万、十万、百万、千万）。千万位是第8位，所以是八位数。" />
                    <PracticeProblem id={405} type="choice" question="下列各数中，一个零也不读的是（ ）" options={[{ label: 'A', value: '30004000' }, { label: 'B', value: '30400000' }, { label: 'C', value: '30040000' }, { label: 'D', value: '30000004' }]} answer="A" explanation="读数法则中，每一级末尾的零都不读。A分级为3000,4000，读作三千万四千，一个零都不读。B是三千零四十万。C是三千零四万。D是三千万零四。" />
                    <PracticeProblem id={406} type="choice" question="用三个8和三个0组成的六位数中，只读一个零的数是（ ）" options={[{ label: 'A', value: '888000' }, { label: 'B', value: '808800' }, { label: 'C', value: '800808' }, { label: 'D', value: '800880' }]} answer="B" explanation="A读作八十八万八千（不读零）；B读作八十万八千八百（读一个零）；C读作八十万零八百零八（读两个零）；D读作八十万零八百八十（读一个零，但B也是）。（修正：本题B和D都读一个零）" />
                    <PracticeProblem id={407} type="choice" question="十万十万地数，数10次是（ ）" options={[{ label: 'A', value: '一百万' }, { label: 'B', value: '一千万' }, { label: 'C', value: '一万' }, { label: 'D', value: '一亿' }]} answer="A" explanation="10个十万是一百万！" />
                    <PracticeProblem id={408} type="choice" question="把549000四舍五入到万位约是（ ）" options={[{ label: 'A', value: '54万' }, { label: 'B', value: '55万' }, { label: 'C', value: '50万' }, { label: 'D', value: '549万' }]} answer="B" explanation="四舍五入到万位，要看千位上的数字。千位是9，大于5，所以要向前一位进1。54+1=55，所以是55万。" />
                    <PracticeProblem id={409} type="choice" question="比最大的七位数多1的数是（ ）" options={[{ label: 'A', value: '一千万' }, { label: 'B', value: '一百万' }, { label: 'C', value: '一亿' }, { label: 'D', value: '九千万' }]} answer="A" explanation="最大的七位数是9999999，加1就变成了最小的八位数，即10000000（一千万）。" />
                    <PracticeProblem id={410} type="choice" question="由5个亿、3个百万和8个十组成的数是（ ）" options={[{ label: 'A', value: '50300080' }, { label: 'B', value: '503000080' }, { label: 'C', value: '53000080' }, { label: 'D', value: '500300080' }]} answer="B" explanation="亿位上是5，千万位0，百万位3，十万、万、千、百位都是0，十位8，个位0。所以是503000080。" />
                </div>
            )
        }
    },

    // ==================== 2. 角的度量 ====================

    // ==================== 2. 角的度量 (深度互动版) ====================
    'g4-l1-angle-measurement': {
        meta: {
            title: "角的度量 - 四年级数学 | AI奇妙数学",
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
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 量角器的内涵与外延</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 读错圈的乌龙</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">明明是个尖尖的锐角（比如30°），一不小心读成了外圈的 150°，变成钝角啦！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 顺藤摸瓜找零点</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">大白话秘诀：看角的一边指着哪边的“0”！如果指着内圈的“0”，就乖乖读内圈的数字；如果指着外圈的“0”，就读外圈。顺藤摸瓜，准没错！</p>
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

                            <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">3</div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 dark:text-white mb-2">巧用三角尺拼角</h3>
                                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                                            用一副三角尺，可以拼出哪些度数的角？请举例写出三个（不能是三角尺原有的角）。
                                        </p>
                                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-indigo-500">
                                            <p className="text-slate-600 dark:text-slate-400 font-mono text-sm leading-relaxed">
                                                解：一副三角尺有 30°、60°、90° 和 45°、45°、90°。<br />
                                                拼加：30°+45°=<strong>75°</strong>， 60°+45°=<strong>105°</strong>， 90°+45°=<strong>135°</strong>。<br />
                                                拼减：45°-30°=<strong>15°</strong>。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">4</div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 dark:text-white mb-2">钟面上夹角的度数</h3>
                                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                                            钟面上 4 时整，时针和分针所成的较小的角是多少度？是什么角？
                                        </p>
                                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-indigo-500">
                                            <p className="text-slate-600 dark:text-slate-400 font-mono text-sm leading-relaxed">
                                                解：钟面每个大格是 360° ÷ 12 = 30°。<br />
                                                4 时整相差 4 个大格，4 × 30° = <strong>120°</strong>。<br />
                                                大于 90° 小于 180°，所以是<strong>钝角</strong>。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">5</div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 dark:text-white mb-2">平角被分割</h3>
                                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                                            如图，直线 AB 上有一点 O，射线 OC 把平角分割成了两个角。已知 ∠AOC 比 ∠BOC 大 40°，求这两角的度数。
                                        </p>
                                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-indigo-500">
                                            <p className="text-slate-600 dark:text-slate-400 font-mono text-sm leading-relaxed">
                                                解：和差问题！两角和是平角 180°，差是 40°。<br />
                                                ∠AOC(大角) = (180° + 40°) ÷ 2 = <strong>110°</strong>。<br />
                                                ∠BOC(小角) = 110° - 40° = <strong>70°</strong>。
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
                    <PracticeProblem id={411} type="choice" question="角的两边是（ ）" options={[{ label: 'A', value: '直线' }, { label: 'B', value: '线段' }, { label: 'C', value: '射线' }, { label: 'D', value: '曲线' }]} answer="C" explanation="角是由一个顶点引出的两条射线组成的图形。" />
                    <PracticeProblem id={412} type="choice" question="平角的度数是直角的（ ）倍。" options={[{ label: 'A', value: '1' }, { label: 'B', value: '2' }, { label: 'C', value: '3' }, { label: 'D', value: '4' }]} answer="B" explanation="平角是 180°，直角是 90°，180 ÷ 90 = 2 倍。" />
                    <PracticeProblem id={413} type="choice" question="钟面上 3 时整，时针和分针所成的角是（ ）" options={[{ label: 'A', value: '锐角' }, { label: 'B', value: '直角' }, { label: 'C', value: '钝角' }, { label: 'D', value: '平角' }]} answer="B" explanation="3时整，分针指向12，时针指向3，刚好经过了3个大格（每格30°），3 × 30° = 90°，是直角。" />
                    <PracticeProblem id={414} type="choice" question="把一个平角分成两个角，其中一个是钝角，另一个一定是（ ）" options={[{ label: 'A', value: '锐角' }, { label: 'B', value: '直角' }, { label: 'C', value: '钝角' }, { label: 'D', value: '平角' }]} answer="A" explanation="平角是180°。钝角大于90°小于180°。180°减去一个大于90°的数，结果一定小于90°，所以是锐角。" />
                    <PracticeProblem id={415} type="choice" question="用放大镜看一个 30° 的角，看到的角（ ）" options={[{ label: 'A', value: '变大了' }, { label: 'B', value: '变小了' }, { label: 'C', value: '大小不变' }, { label: 'D', value: '无法确定' }]} answer="C" explanation="角的大小只和两边张开的程度有关，和边的长短、放大多少倍都没有关系！" />
                    <PracticeProblem id={416} type="choice" question="一个周角等于（ ）个直角。" options={[{ label: 'A', value: '2' }, { label: 'B', value: '3' }, { label: 'C', value: '4' }, { label: 'D', value: '6' }]} answer="C" explanation="周角是 360°，直角是 90°，360 ÷ 90 = 4。" />
                    <PracticeProblem id={417} type="choice" question="已知 ∠1 和 40° 的角组成一个直角，那么 ∠1 = （ ）" options={[{ label: 'A', value: '40°' }, { label: 'B', value: '50°' }, { label: 'C', value: '60°' }, { label: 'D', value: '140°' }]} answer="B" explanation="直角等于 90°。∠1 = 90° - 40° = 50°。" />
                    <PracticeProblem id={418} type="choice" question="比直角大，比平角小的角叫（ ）" options={[{ label: 'A', value: '锐角' }, { label: 'B', value: '钝角' }, { label: 'C', value: '周角' }, { label: 'D', value: '无法确定' }]} answer="B" explanation="大于90°且小于180°的角是钝角。" />
                    <PracticeProblem id={419} type="choice" question="时钟在 6 时整，时针和分针所成的角是（ ）" options={[{ label: 'A', value: '直角' }, { label: 'B', value: '钝角' }, { label: 'C', value: '平角' }, { label: 'D', value: '周角' }]} answer="C" explanation="6点整，分针指着12，时针指着6，它们连成了一条直线，也就是 180° 的平角。" />
                    <PracticeProblem id={420} type="choice" question="下列角中，不能用一副三角尺拼出来的是（ ）" options={[{ label: 'A', value: '15°' }, { label: 'B', value: '75°' }, { label: 'C', value: '105°' }, { label: 'D', value: '80°' }]} answer="D" explanation="三角尺的角有：30°, 45°, 60°, 90°。它们能拼出的角一定是15的倍数（加或减）。80不是15的倍数，所以拼不出来。" />
                </div>
            )
        }
    },

    // ==================== 3. 除数是两位数的除法 ====================
    'g4-l1-division-two-digit': {
        meta: {
            title: "除数是两位数的除法 - 四年级数学 | AI奇妙数学",
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
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 除法大师的翻车现场</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 死拽着错误不放</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">试商 4，发现减出来的余数比除数还大！或者发现乘出来的积比被除数大根本减不掉，就在那里发懵。</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 勇敢地调转方向</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">大声念出来：试商只是“试”！余数比除数大？说明分得太少，商变大一点！积比被除数大减不掉？说明分得太多啦，赶紧把商调小一点！</p>
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

                            <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">例2：试商调商</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                    计算 196 ÷ 39 时，把 39 看作（ ）来试商，初商可能偏（ ），需要调大还是调小？
                                </p>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-indigo-500">
                                    <p className="text-slate-600 dark:text-slate-400 font-mono text-sm leading-relaxed">
                                        解：把 39 看作 <strong>40</strong> 试商。<br />
                                        196 ÷ 40，大约商 4。因为除数看大了，商容易偏<strong>小</strong>。<br />
                                        39 × 4 = 156，196 - 156 = 40 (余数比除数大)。所以要调<strong>大</strong>为 5。
                                    </p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">例3：被除数的极限</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                    在 ÷ 24 = 15 ... ★ 中，余数最大是几？被除数最大是多少？
                                </p>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-indigo-500">
                                    <p className="text-slate-600 dark:text-slate-400 font-mono text-sm leading-relaxed">
                                        解：余数要比除数小。除数是 24，所以余数最大是 <strong>23</strong>。<br />
                                        被除数 = 商 × 除数 + 余数 = 15 × 24 + 23 = 360 + 23 = <strong>383</strong>。
                                    </p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">例4：判断商的位数</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                    543 ÷ 45，它的商最高位在什么位置？是几位数？
                                </p>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-indigo-500">
                                    <p className="text-slate-600 dark:text-slate-400 font-mono text-sm leading-relaxed">
                                        解：被除数前两位 54 ＞ 45。<br />
                                        说明够除！所以最高位商在<strong>十位</strong>上。<br />
                                        因此商是<strong>两位数</strong>。
                                    </p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">例5：商不变的规律</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                    已知 480 ÷ 16 = 30。不计算，直接写出 960 ÷ 32 的商是多少？
                                </p>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-indigo-500">
                                    <p className="text-slate-600 dark:text-slate-400 font-mono text-sm leading-relaxed">
                                        解：被除数从 480 变成了 960（乘2）。<br />
                                        除数从 16 变成了 32（乘2）。<br />
                                        被除数和除数同时乘相同的数，商不变。所以商还是 <strong>30</strong>。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={421} type="choice" question="计算 192 ÷ 24 时，可以把 24 看作（ ）来试商。" options={[{ label: 'A', value: '20' }, { label: 'B', value: '25' }, { label: 'C', value: '30' }, { label: 'D', value: '10' }]} answer="A" explanation="采用“四舍五入”法，24 的个位是 4，所以舍去，看作 20 来试商最方便。" />
                    <PracticeProblem id={422} type="choice" question="288 ÷ 36，商是（ ）位数。" options={[{ label: 'A', value: '一' }, { label: 'B', value: '两' }, { label: 'C', value: '三' }, { label: 'D', value: '无法确定' }]} answer="A" explanation="除数是两位数，先看被除数的前两位 28。因为 28 < 36，不够除，所以要看前三位 288。商写在个位上，是一位数。" />
                    <PracticeProblem id={423} type="choice" question="在计算 350 ÷ 48 时，把 48 看作 50 来试商，初商会（ ）" options={[{ label: 'A', value: '偏大' }, { label: 'B', value: '偏小' }, { label: 'C', value: '刚好' }, { label: 'D', value: '都有可能' }]} answer="B" explanation="把除数看大了（48 往大看成了 50），那么商就可能会偏小，需要往大调。" />
                    <PracticeProblem id={424} type="choice" question="如果有余数，余数必须比（ ）" options={[{ label: 'A', value: '被除数大' }, { label: 'B', value: '被除数小' }, { label: 'C', value: '除数大' }, { label: 'D', value: '除数小' }]} answer="D" explanation="除法算式中，余数一定比除数小。如果余数比除数大，说明还能继续除！" />
                    <PracticeProblem id={425} type="choice" question="计算 512 ÷ 64 时，商是（ ）" options={[{ label: 'A', value: '6' }, { label: 'B', value: '7' }, { label: 'C', value: '8' }, { label: 'D', value: '9' }]} answer="C" explanation="把64看作60，51÷6大约是8。64 × 8 = 512，正好！所以商是8。" />
                    <PracticeProblem id={426} type="choice" question="妈妈买了 12 个杯子，一共花了 144 元。平均每个杯子多少元？" options={[{ label: 'A', value: '11元' }, { label: 'B', value: '12元' }, { label: 'C', value: '13元' }, { label: 'D', value: '14元' }]} answer="B" explanation="144 ÷ 12。被除数前两位 14 比 12 大，先商 1。14 - 12 = 2，落下 4 变成 24。24 ÷ 12 = 2。合起来商是 12。" />
                    <PracticeProblem id={427} type="choice" question="要使 □42 ÷ 56 的商是两位数，□ 里最小填（ ）" options={[{ label: 'A', value: '4' }, { label: 'B', value: '5' }, { label: 'C', value: '6' }, { label: 'D', value: '7' }]} answer="C" explanation="商是两位数，说明被除数的前两位（□4）不能比 56 小。如果填 5，54 < 56 行不通。填 6 的话，64 > 56，可以！所以最小填 6。" />
                    <PracticeProblem id={428} type="choice" question="一本故事书有 275 页，小明每天看 25 页，多少天能看完？" options={[{ label: 'A', value: '10天' }, { label: 'B', value: '11天' }, { label: 'C', value: '12天' }, { label: 'D', value: '13天' }]} answer="B" explanation="275 ÷ 25 = 11 天。前两位 27 ÷ 25 = 1 余 2，落下 5 变成 25，25 ÷ 25 = 1。" />
                    <PracticeProblem id={429} type="choice" question="计算 430 ÷ 52 时，如果把 52 看作 50 来试商，下面正确的操作是（ ）" options={[{ label: 'A', value: '初商 8，直接写在个位结束' }, { label: 'B', value: '初商 8，计算 8×52=416，余14' }, { label: 'C', value: '初商 9，计算 9×52=468，积太大' }, { label: 'D', value: '初商 7，发现余数比52大' }]} answer="B" explanation="看作50试商，43÷5商8，8×52=416，430-416=14，余数14比52小，所以商8正确。" />
                    <PracticeProblem id={430} type="choice" question="某超市有 720 瓶饮料，每 24 瓶装一箱，一共可以装多少箱？" options={[{ label: 'A', value: '25箱' }, { label: 'B', value: '30箱' }, { label: 'C', value: '35箱' }, { label: 'D', value: '40箱' }]} answer="B" explanation="720 ÷ 24。前两位 72 ÷ 24 = 3，后面还有一个 0，所以是 30 箱。" />
                </div>
            )
        }
    },

    // ==================== 4. 小数的意义与加减 ====================
    'g4-l1-decimal-ops': {
        meta: {
            title: "小数的意义与加减 - 四年级数学 | AI奇妙数学",
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

                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />
                            典型例题
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">1</div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 dark:text-white mb-2">小数的比较大小</h3>
                                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                                            比较 3.14 和 3.141 的大小。
                                        </p>
                                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-indigo-500">
                                            <p className="text-slate-600 dark:text-slate-400 font-mono text-sm leading-relaxed">
                                                解：先比较整数部分，都是3。再看十分位，都是1。再看百分位，都是4。<br />
                                                最后看千分位，3.14的千分位是0，3.141的千分位是1。<br />
                                                0 ＜ 1，所以 3.14 <strong>＜</strong> 3.141。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">2</div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 dark:text-white mb-2">小数加法对位</h3>
                                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                                            计算 12.5 + 3.28 = ?
                                        </p>
                                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-indigo-500">
                                            <p className="text-slate-600 dark:text-slate-400 font-mono text-sm leading-relaxed">
                                                解：关键是<strong>小数点对齐</strong>！可以把 12.5 写成 12.50。<br />
                                                12.50 + 3.28 = <strong>15.78</strong>。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">3</div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 dark:text-white mb-2">小数的退位减法</h3>
                                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                                            计算 10 - 4.56 = ?
                                        </p>
                                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-indigo-500">
                                            <p className="text-slate-600 dark:text-slate-400 font-mono text-sm leading-relaxed">
                                                解：把 10 写成 10.00。<br />
                                                10.00 - 4.56 = <strong>5.44</strong>。（注意连续退位）。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">4</div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 dark:text-white mb-2">小数连加简算</h3>
                                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                                            简便计算：4.7 + 2.8 + 5.3 = ?
                                        </p>
                                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-indigo-500">
                                            <p className="text-slate-600 dark:text-slate-400 font-mono text-sm leading-relaxed">
                                                解：利用加法交换律和结合律，把能凑整的先加。<br />
                                                (4.7 + 5.3) + 2.8 = 10 + 2.8 = <strong>12.8</strong>。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">5</div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 dark:text-white mb-2">生活中的小数求解</h3>
                                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                                            小明买铅笔花 1.5 元，买橡皮花 0.8 元，他给了老板 5 元，应找回多少钱？
                                        </p>
                                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-indigo-500">
                                            <p className="text-slate-600 dark:text-slate-400 font-mono text-sm leading-relaxed">
                                                解：先算一共花了多少钱：1.5 + 0.8 = 2.3 元。<br />
                                                再算找回多少钱：5 - 2.3 = <strong>2.7</strong> 元。<br />
                                                （或者 5 - 1.5 - 0.8 = 3.5 - 0.8 = 2.7 元）。
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
                    <PracticeProblem id={431} type="choice" question="计算小数加减法时，最重要的一步是（ ）" options={[{ label: 'A', value: '末位对齐' }, { label: 'B', value: '小数点对齐' }, { label: 'C', value: '最高位对齐' }, { label: 'D', value: '随意算' }]} answer="B" explanation="计算小数加减法，一定要把小数点对齐，这样相同数位（元对元，角对角）就对齐了！" />
                    <PracticeProblem id={432} type="choice" question="计算 1.5 + 2.4 = （ ）" options={[{ label: 'A', value: '3.9' }, { label: 'B', value: '4.9' }, { label: 'C', value: '3.0' }, { label: 'D', value: '4.0' }]} answer="A" explanation="小数点对齐后，十分位 5+4=9，个位 1+2=3，合起来是 3.9。" />
                    <PracticeProblem id={433} type="choice" question="计算 5.6 - 3.2 = （ ）" options={[{ label: 'A', value: '2.4' }, { label: 'B', value: '1.4' }, { label: 'C', value: '8.8' }, { label: 'D', value: '2.8' }]} answer="A" explanation="十分位 6-2=4，个位 5-3=2，结果是 2.4。" />
                    <PracticeProblem id={434} type="choice" question="一本笔记本 4.5 元，一支笔 2.8 元，一共多少钱？" options={[{ label: 'A', value: '6.3元' }, { label: 'B', value: '7.3元' }, { label: 'C', value: '6.5元' }, { label: 'D', value: '7.5元' }]} answer="B" explanation="4.5 + 2.8 = 7.3 元。注意十分位 5+8=13，满十进一，个位 4+2+1=7。" />
                    <PracticeProblem id={435} type="choice" question="计算 10 - 2.5 = （ ）" options={[{ label: 'A', value: '8.5' }, { label: 'B', value: '7.5' }, { label: 'C', value: '12.5' }, { label: 'D', value: '7.0' }]} answer="B" explanation="把 10 看成 10.0，10.0 - 2.5 = 7.5。" />
                    <PracticeProblem id={436} type="choice" question="小明有 15.6 元，买零食花了 8.9 元，还剩多少钱？" options={[{ label: 'A', value: '6.7元' }, { label: 'B', value: '7.7元' }, { label: 'C', value: '5.7元' }, { label: 'D', value: '24.5元' }]} answer="A" explanation="15.6 - 8.9 = 6.7 元。十分位不够减，向个位借 1 当 10。" />
                    <PracticeProblem id={437} type="choice" question="在百格图中，整个正方形代表1，那涂 35 个小格表示的小数是（ ）" options={[{ label: 'A', value: '3.5' }, { label: 'B', value: '0.35' }, { label: 'C', value: '35.0' }, { label: 'D', value: '0.035' }]} answer="B" explanation="一个大格分成了 100 份，每份是 0.01。涂了 35 份就是 0.35。" />
                    <PracticeProblem id={438} type="choice" question="甲乙两根绳子，甲绳长 3.24 米，乙绳长 1.8 米，甲绳比乙绳长多少米？" options={[{ label: 'A', value: '1.44米' }, { label: 'B', value: '2.04米' }, { label: 'C', value: '5.04米' }, { label: 'D', value: '1.64米' }]} answer="A" explanation="3.24 - 1.8 = 1.44 米。注意要把 1.8 的 8 跟 3.24 的 2 对齐！" />
                    <PracticeProblem id={439} type="choice" question="一个数的百分位上是 7，十分位上是 0，个位上是 5，这个数是（ ）" options={[{ label: 'A', value: '70.5' }, { label: 'B', value: '5.07' }, { label: 'C', value: '5.70' }, { label: 'D', value: '0.57' }]} answer="B" explanation="个位是 5，小数点后面第一位是十分位 0，第二位是百分位 7。组成的数是 5.07。" />
                    <PracticeProblem id={440} type="choice" question="计算 4.56 + 2.44 = （ ）" options={[{ label: 'A', value: '7' }, { label: 'B', value: '6.9' }, { label: 'C', value: '7.1' }, { label: 'D', value: '6' }]} answer="A" explanation="4.56 + 2.44 = 7.00，可以简写成 7。" />
                </div>
            )
        }
    },
    // ==================== 5. 四则混合运算 ====================
    'g4-l1-mixed-ops': {
        meta: {
            title: "四则混合运算 - 四年级数学 | AI奇妙数学",
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
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">例2：中括号的使用</h3>
                                <p className="font-mono text-lg text-slate-800 dark:text-white mb-2">
                                    360 ÷ [(12 + 6) × 2]
                                </p>
                                <div className="pl-4 border-l-2 border-indigo-300 dark:border-indigo-700 space-y-1 text-sm text-slate-600 dark:text-slate-400">
                                    <p>解：先算小括号：12 + 6 = 18</p>
                                    <p className="font-mono">= 360 ÷ [18 × 2]</p>
                                    <p>再算中括号：18 × 2 = 36</p>
                                    <p className="font-mono">= 360 ÷ 36</p>
                                    <p>最后除法：= <strong>10</strong></p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">例3：只含同级运算</h3>
                                <p className="font-mono text-lg text-slate-800 dark:text-white mb-2">
                                    125 ÷ 5 × 8
                                </p>
                                <div className="pl-4 border-l-2 border-indigo-300 dark:border-indigo-700 space-y-1 text-sm text-slate-600 dark:text-slate-400">
                                    <p>解：只有乘除法，<strong>从左往右</strong>依次计算。</p>
                                    <p>错误做法：先算 5 × 8 = 40 (❌)</p>
                                    <p className="font-mono">= 25 × 8</p>
                                    <p>最后乘法：= <strong>200</strong></p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">例4：不同级同时计算</h3>
                                <p className="font-mono text-lg text-slate-800 dark:text-white mb-2">
                                    15 × 4 + 48 ÷ 6
                                </p>
                                <div className="pl-4 border-l-2 border-indigo-300 dark:border-indigo-700 space-y-1 text-sm text-slate-600 dark:text-slate-400">
                                    <p>解：加号两边分别是乘法和除法，互不影响，可以<strong>同时计算</strong>节省时间。</p>
                                    <p className="font-mono">= 60 + 8</p>
                                    <p>最后加法：= <strong>68</strong></p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">例5：易错点陷阱</h3>
                                <p className="font-mono text-lg text-slate-800 dark:text-white mb-2">
                                    280 - 80 ÷ 4
                                </p>
                                <div className="pl-4 border-l-2 border-indigo-300 dark:border-indigo-700 space-y-1 text-sm text-slate-600 dark:text-slate-400">
                                    <p>解：先算除法，再算减法。</p>
                                    <p>错误做法：先算减法 200 ÷ 4 = 50 (❌ 不要一看见能减就兴奋得忘了规矩！)</p>
                                    <p className="font-mono">= 280 - 20</p>
                                    <p>最后减法：= <strong>260</strong> (✅)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={441} type="choice" question="计算 100 - (35 + 25) 时，应该先算什么？" options={[{ label: 'A', value: '减法' }, { label: 'B', value: '加法' }, { label: 'C', value: '都可以' }, { label: 'D', value: '先算 100-35' }]} answer="B" explanation="有小括号的算式，要先算里边（括号内）的，再算外边（括号外）的。所以先算 35 + 25 = 60。" />
                    <PracticeProblem id={442} type="choice" question="在算式 45 + 55 ÷ 5 中，第一步运算是（ ）" options={[{ label: 'A', value: '加法' }, { label: 'B', value: '除法' }, { label: 'C', value: '乘法' }, { label: 'D', value: '减法' }]} answer="B" explanation="算式里既有加法，又有除法，没有小括号，应该先算乘除，后算加减。所以第一步算 55 ÷ 5。" />
                    <PracticeProblem id={443} type="choice" question="得数是 0 的算式是（ ）" options={[{ label: 'A', value: '0 + 15' }, { label: 'B', value: '15 - 0' }, { label: 'C', value: '15 × 0' }, { label: 'D', value: '15 ÷ 15' }]} answer="C" explanation="0 乘任何数都得 0。A得15，B得15，D得1。" />
                    <PracticeProblem id={444} type="choice" question="计算 24 × (50 - 30) 的正确顺序是（ ）" options={[{ label: 'A', value: '先乘再减' }, { label: 'B', value: '先减再乘' }, { label: 'C', value: '从左往右' }, { label: 'D', value: '都可以' }]} answer="B" explanation="有小括号，先算括号内的减法 50 - 30 = 20，再算括号外的乘法 24 × 20 = 480。" />
                    <PracticeProblem id={445} type="choice" question="计算 360 ÷ 6 × 2 时，先算什么？" options={[{ label: 'A', value: '乘法' }, { label: 'B', value: '除法' }, { label: 'C', value: '加法' }, { label: 'D', value: '都可以' }]} answer="B" explanation="同一级运算（只有乘除或者只有加减），要按照从左到右的顺序计算。所以先算除法 360 ÷ 6 = 60。" />
                    <PracticeProblem id={446} type="choice" question="72 减去 24 的差，再乘 5，列综合算式是（ ）" options={[{ label: 'A', value: '72 - 24 × 5' }, { label: 'B', value: '72 × 5 - 24' }, { label: 'C', value: '(72 - 24) × 5' }, { label: 'D', value: '5 × 72 - 24' }]} answer="C" explanation="题目要求“先减后乘”，为了打破“先乘除后加减”的规则，必须请小括号帮忙。所以是 (72 - 24) × 5。" />
                    <PracticeProblem id={447} type="choice" question="给 50 + 30 × 4 加上小括号，变成先算加法，算式是（ ）" options={[{ label: 'A', value: '(50 + 30) × 4' }, { label: 'B', value: '50 + (30 × 4)' }, { label: 'C', value: '(50) + 30 × 4' }, { label: 'D', value: '50 + 30 × (4)' }]} answer="A" explanation="加上括号 (50 + 30) × 4，运算顺序就从先乘后加，变成了先加后乘了。" />
                    <PracticeProblem id={448} type="choice" question="计算 (120 - 40) ÷ 8 = （ ）" options={[{ label: 'A', value: '115' }, { label: 'B', value: '10' }, { label: 'C', value: '80' }, { label: 'D', value: '15' }]} answer="B" explanation="先算括号内的减法：120 - 40 = 80。再算除法：80 ÷ 8 = 10。" />
                    <PracticeProblem id={449} type="choice" question="一本书 200 页，每天看 20 页，看了 5 天。还剩多少页？列式正确的是（ ）" options={[{ label: 'A', value: '200 - 20' }, { label: 'B', value: '200 - 20 × 5' }, { label: 'C', value: '(200 - 20) × 5' }, { label: 'D', value: '200 + 20 × 5' }]} answer="B" explanation="已经看的页数是 20 × 5。还剩的页数 = 总页数 - 已经看的，即 200 - 20 × 5。" />
                    <PracticeProblem id={450} type="choice" question="小明把 4 × (□ + 5) 错算成了 4 × □ + 5，他的结果比正确结果（ ）" options={[{ label: 'A', value: '多15' }, { label: 'B', value: '少15' }, { label: 'C', value: '多5' }, { label: 'D', value: '少5' }]} answer="B" explanation="正确的计算利用乘法分配律是 4×□ + 4×5 = 4×□ + 20。错算成 4×□ + 5。由于 20 比 5 多 15，所以错误结果比正确结果少 15。" />
                </div>
            )
        }
    },

    // ==================== 6. 平行四边形与梯形 (深度互动版) ====================
    'g4-l1-parallel-trapezoid': {
        meta: {
            title: "平行四边形与梯形 - 四年级数学 | AI奇妙数学",
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
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">例2：画高问题</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                    平行四边形有（ ）条高？梯形有（ ）条高？
                                </p>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-indigo-500">
                                    <p className="text-slate-600 dark:text-slate-400 font-mono text-sm">
                                        答：都有<strong>无数条</strong>。<br />
                                        因为两平行线之间的距离处处相等，沿底边可以画无数条垂直线段。但注意：梯形的高只能画在上下两底之间。
                                    </p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">例3：周长计算</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                    一个平行四边形的相邻两边分别长 5厘米 和 8厘米，它的周长是多少？
                                </p>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-indigo-500">
                                    <p className="text-slate-600 dark:text-slate-400 font-mono text-sm">
                                        答：平行四边形对边相等。<br />
                                        周长 = (5 + 8) × 2 = 13 × 2 = <strong>26厘米</strong>。
                                    </p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">例4：图形分割</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                    在一个平行四边形中画一条贯穿内部的直直线，能把它分成两个什么图形？
                                </p>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-indigo-500">
                                    <p className="text-slate-600 dark:text-slate-400 font-mono text-sm">
                                        答：可能有三种情况：<br />
                                        1. 分成两个三角形（沿对角线切）。<br />
                                        2. 分成两个更小的平行四边形（平行于一组对边切）。<br />
                                        3. 分成两个梯形（斜着切且不过顶点）。
                                    </p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">例5：等腰梯形特征</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                    等腰梯形有些什么特殊的性质？
                                </p>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-indigo-500">
                                    <p className="text-slate-600 dark:text-slate-400 font-mono text-sm">
                                        答：等腰梯形的<strong>两腰相等</strong>，同时同一个底上的<strong>两个底角也相等</strong>，并且它还是个轴对称图形。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={451} type="choice" question="下面哪组线段互相平行？" options={[{ label: 'A', value: '相交的线' }, { label: 'B', value: '垂直的线' }, { label: 'C', value: '永远不会相交的两条直线' }, { label: 'D', value: '一条长一条短的线' }]} answer="C" explanation="在同一个平面内不相交的两条直线叫做平行线。所以选C。" />
                    <PracticeProblem id={452} type="choice" question="长方形相对的两条边（ ）" options={[{ label: 'A', value: '互相平行' }, { label: 'B', value: '互相垂直' }, { label: 'C', value: '相交' }, { label: 'D', value: '不平行' }]} answer="A" explanation="长方形的对边是互相平行的，邻边是互相垂直的。" />
                    <PracticeProblem id={453} type="choice" question="过直线外一点，能画（ ）条已知直线的平行线。" options={[{ label: 'A', value: '1' }, { label: 'B', value: '2' }, { label: 'C', value: '3' }, { label: 'D', value: '无数' }]} answer="A" explanation="平行公理：过直线外一点，有且只有一条直线与已知直线平行。" />
                    <PracticeProblem id={454} type="choice" question="两组对边分别平行的四边形是（ ）" options={[{ label: 'A', value: '梯形' }, { label: 'B', value: '平行四边形' }, { label: 'C', value: '三角形' }, { label: 'D', value: '不规则四边形' }]} answer="B" explanation="平行四边形的定义：两组对边分别平行的四边形叫做平行四边形。" />
                    <PracticeProblem id={455} type="choice" question="只有一组对边平行的四边形是（ ）" options={[{ label: 'A', value: '长方形' }, { label: 'B', value: '平行四边形' }, { label: 'C', value: '梯形' }, { label: 'D', value: '正方形' }]} answer="C" explanation="梯形的定义：只有一组对边平行的四边形叫做梯形。" />
                    <PracticeProblem id={456} type="choice" question="平行四边形具有（ ）的特性。" options={[{ label: 'A', value: '稳定性' }, { label: 'B', value: '容易变形' }, { label: 'C', value: '固定不变' }, { label: 'D', value: '对称性' }]} answer="B" explanation="三角形具有稳定性，而平行四边形具有容易变形（不稳定性）的特性，很多伸缩门就是用这个原理做的。" />
                    <PracticeProblem id={457} type="choice" question="一个梯形最多有（ ）个直角。" options={[{ label: 'A', value: '1' }, { label: 'B', value: '2' }, { label: 'C', value: '3' }, { label: 'D', value: '4' }]} answer="B" explanation="直角梯形有2个直角（同一条腰上的两个角）。不可能有3个或4个直角，如果4个全是直角，它就成了长方形（属于平行四边形的一类）而不是梯形了。" />
                    <PracticeProblem id={458} type="choice" question="正方形是特殊的（ ）" options={[{ label: 'A', value: '长方形' }, { label: 'B', value: '平行四边形' }, { label: 'C', value: '梯形' }, { label: 'D', value: 'A和B都对' }]} answer="D" explanation="正方形既是特殊的长方形（邻边相等的长方形），也是特殊的平行四边形（四边相等且有直角的平行四边形）。" />
                    <PracticeProblem id={459} type="choice" question="等腰梯形的特征是（ ）" options={[{ label: 'A', value: '两腰相等' }, { label: 'B', value: '对边相等' }, { label: 'C', value: '四个角等大' }, { label: 'D', value: '互相平行' }]} answer="A" explanation="两腰相等的梯形叫做等腰梯形。它有两个底角相等、两条对角线相等等性质。" />
                    <PracticeProblem id={460} type="choice" question="在两条平行线之间，可以画（ ）条垂直线段，这些线段的长度（ ）。" options={[{ label: 'A', value: '1，相等' }, { label: 'B', value: '无数，相等' }, { label: 'C', value: '无数，不相等' }, { label: 'D', value: '2，相等' }]} answer="B" explanation="两条平行线之间的距离处处相等。你可以沿着平行线画无数条垂直线段，它们的长度都是一样的（这就是平行线之间的距离）。" />
                </div>
            )
        }
    },

    // ==================== 7. 条形统计图与平均数 ====================
    'g4-l1-bar-chart': {
        meta: {
            title: "条形统计图与平均数 - 四年级数学 | AI奇妙数学",
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
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 数据世界的幻影</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 假象：平均数就是真实的某个数</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">平均水深 1.2 米的河，小明身高 1.4 米去游泳很安全？错！平均水深 1.2 米，意味着有些地方可能只有 0.5 米，但有些地方可能深达 2 米！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 真相：它只代表一个“水平”</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">平均数是一个“虚拟”的数，它代表了大家“平摊”后都在哪个标准线上。所以在碰到有关平均数的问题时，记住它只是个参考线，不能代表每个人或每个地方的真实情况哦！</p>
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
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">例2：读懂条形统计图</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-2">
                                    小明统计了班里同学最喜欢的水果：苹果8人，香蕉10人，橘子6人，西瓜12人。如果在条形图中，1格代表2人，西瓜要画几格？
                                </p>
                                <div className="pl-4 border-l-2 border-indigo-300 dark:border-indigo-700 space-y-1 text-sm text-slate-600 dark:text-slate-400">
                                    <p>解：12 ÷ 2 = <strong>6格</strong>。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">例3：移多补少求平均</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-2">
                                    小红三次数学测验成绩分别是 92分、96分、100分。不计算总分，你能求出她的平均分吗？
                                </p>
                                <div className="pl-4 border-l-2 border-indigo-300 dark:border-indigo-700 space-y-1 text-sm text-slate-600 dark:text-slate-400">
                                    <p>解：以中间的 96 为基准。100 分比 96 分多出 4 分。</p>
                                    <p>把这多出来的 4 分补给 92 分：92 + 4 = 96 分。</p>
                                    <p>这样一来，大家都成了 96 分。平均数就是 <strong>96分</strong>！</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">例4：已知平均数求总数</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-2">
                                    四年级 3 个班的平均人数是 45 人，这三个班一共有多少人？
                                </p>
                                <div className="pl-4 border-l-2 border-indigo-300 dark:border-indigo-700 space-y-1 text-sm text-slate-600 dark:text-slate-400">
                                    <p>解：总数 = 平均数 × 份数。</p>
                                    <p>45 × 3 = <strong>135人</strong>。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">例5：看穿平均数的陷阱</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-2">
                                    一条小河平均水深 1.1米，小明身高 1.4米，他下河游泳可能有危险吗？
                                </p>
                                <div className="pl-4 border-l-2 border-indigo-300 dark:border-indigo-700 space-y-1 text-sm text-slate-600 dark:text-slate-400">
                                    <p>答：<strong>可能有危险！</strong></p>
                                    <p>平均水深 1.1 米，意味着浅的地方可能只有 0.5 米，深的地方可能深达 2 米！千万不能被平均数骗了。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={461} type="choice" question="在条形统计图中，用一格表示（ ）数量比较合适？" options={[{ label: 'A', value: '1个' }, { label: 'B', value: '10个' }, { label: 'C', value: '100个' }, { label: 'D', value: '根据数据大小决定' }]} answer="D" explanation="制图时，一格代表多少，要根据具体数据的最大值和最小值来灵活决定。" />
                    <PracticeProblem id={462} type="choice" question="条形统计图通过直条的（ ）来表示数量的多少。" options={[{ label: 'A', value: '粗细' }, { label: 'B', value: '长短' }, { label: 'C', value: '颜色' }, { label: 'D', value: '宽窄' }]} answer="B" explanation="条形统计图是用一个单位长度表示一定的数量，根据数量的多少画成长短不同的直条。" />
                    <PracticeProblem id={463} type="choice" question="小明语数英三科平均分是 92，其中语文 90，数学 95，英语是（ ）分？" options={[{ label: 'A', value: '92' }, { label: 'B', value: '91' }, { label: 'C', value: '90' }, { label: 'D', value: '93' }]} answer="B" explanation="总分 = 92 × 3 = 276。英语 = 276 - 90 - 95 = 91 分。也可以用移多补少：数学比平均分多3分，填给语文2分还剩1分，英语得还这1分，所以是 92 - 1 = 91。" />
                    <PracticeProblem id={464} type="choice" question="河水平均深度是 1.2 米，小明身高 1.4 米，他下河游泳（ ）" options={[{ label: 'A', value: '一定安全' }, { label: 'B', value: '可能有危险' }, { label: 'C', value: '一定有危险' }, { label: 'D', value: '水太浅了' }]} answer="B" explanation="平均水深 1.2 米，意味着有的地方可能只有 0.5 米，有的地方可能深达 2 米！所以可能有危险，不能因为身高 1.4 米就觉得一定安全。" />
                    <PracticeProblem id={465} type="choice" question="甲、乙两数的平均数是 40，如果甲数是 35，乙数是（ ）。" options={[{ label: 'A', value: '45' }, { label: 'B', value: '40' }, { label: 'C', value: '35' }, { label: 'D', value: '50' }]} answer="A" explanation="甲乙和 = 40 × 2 = 80。乙 = 80 - 35 = 45。或者移多补少：甲比40少5，乙必须比40多5，所以是 45。" />
                    <PracticeProblem id={466} type="choice" question="一组数据中，如果增加一个大于原来的平均数的数，这组数据的平均数会（ ）。" options={[{ label: 'A', value: '变大' }, { label: 'B', value: '变小' }, { label: 'C', value: '不变' }, { label: 'D', value: '无法确定' }]} answer="A" explanation="新加入的“优等生”会把整体的平均水平拉高！" />
                    <PracticeProblem id={467} type="choice" question="下面选项中，最适合用条形统计图表示的是（ ）" options={[{ label: 'A', value: '气温变化' }, { label: 'B', value: '班级同学喜欢的水果人数' }, { label: 'C', value: '跑步速度' }, { label: 'D', value: '水滴大小' }]} answer="B" explanation="条形统计图最直观地表示各个类别的数量多少。而气温变化更适合折线统计图。" />
                    <PracticeProblem id={468} type="choice" question="某超市一、二、三月份的销售额分别是 8万、10万、12万。平均每个月销售额是（ ）。" options={[{ label: 'A', value: '8万' }, { label: 'B', value: '10万' }, { label: 'C', value: '11万' }, { label: 'D', value: '12万' }]} answer="B" explanation="因为 8、10、12 是均匀增加的差为2的等差数列，平均数刚好是最中间的数：10万。算法：(8+10+12) ÷ 3 = 10。" />
                    <PracticeProblem id={469} type="choice" question="三个小队的得分分别是 90, 85, 95。如果将第四个小队的得分也算进来，平均分变成了 92。第四个小队得了（ ）分。" options={[{ label: 'A', value: '92' }, { label: 'B', value: '94' }, { label: 'C', value: '96' }, { label: 'D', value: '98' }]} answer="D" explanation="新总分 = 92 × 4 = 368。旧总分 = 90 + 85 + 95 = 270。第四队 = 368 - 270 = 98 分。" />
                    <PracticeProblem id={470} type="choice" question="在统计图中，纵轴一格表示 5 人，如果有 20 人，应该画（ ）格。" options={[{ label: 'A', value: '2' }, { label: 'B', value: '3' }, { label: 'C', value: '4' }, { label: 'D', value: '5' }]} answer="C" explanation="20 ÷ 5 = 4 格。" />
                </div>
            )
        }
    },

    // ==================== L2-1. 和差倍问题 ====================
    'g4-l2-sum-diff-multiple': {
        meta: {
            title: "和差倍问题 - 四年级思维进阶 | AI奇妙数学",
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
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：和差倍解密线段图
                        </h2>
                        <TapeDiagramLab />
                    </div>
                </div>
            ),
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
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 线段图里的隐形坑</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 凭感觉瞎猜</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">“甲比乙多8，和是20，那甲就是20减8等于12，乙是8！” —— 哎呀，你验算一下，12+8=20没错，但是12-8=4，甲并没有比乙多8呀！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 不画图不解题</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">这类题的唯一解药就是**画线段图**！把文字变成长短不一的线条，多出来的那一截一标上去，你会发现：只要把多出来的部分“砍掉”，两根线段就一样长了！这时候再除以2，就找到了短的那根！</p>
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
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">例4：隐藏的差倍</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-3">哥哥和弟弟有数量相同的邮票，如果哥哥给弟弟 10 张，弟弟的邮票就是哥哥的 3 倍。原来两人各有多少张？</p>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-orange-500 font-mono text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                    <p>解分析：哥哥给弟弟 10 张，意味着哥哥少了 10 张，弟弟多了 10 张。两人就相差了 10 + 10 = 20 张！这就是"隐藏的差"。</p>
                                    <p>这时候弟弟是哥哥的 3 倍。这是典型的"差倍问题"。</p>
                                    <p>现在的哥哥（小数）= 20 ÷ (3 - 1) = <strong>10张</strong>。</p>
                                    <p>原来的哥哥 = 10 + 10 = <strong>20张</strong>。（因为两人一开始相等，所以原来都有 20 张）。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">例5：带有尾巴的和倍</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-3">甲乙两数和为 105，甲数比乙数的 3 倍还多 5。求甲乙两数。</p>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                    <p>解分析：甲比乙的 3 倍"多5"。如果我们把总和里的这个"尾巴" 5 减掉，甲刚好就是乙的 3 倍了。</p>
                                    <p>新和 = 105 - 5 = 100。</p>
                                    <p>乙（小数）= 100 ÷ (3 + 1) = 100 ÷ 4 = <strong>25</strong>。</p>
                                    <p>甲（大数）= 25 × 3 + 5 = <strong>80</strong>。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={471} type="choice" question="甲乙两筐苹果共 50 个，甲比乙多 10 个。甲筐有（ ）个苹果。" options={[{ label: 'A', value: '20' }, { label: 'B', value: '25' }, { label: 'C', value: '30' }, { label: 'D', value: '40' }]} answer="C" explanation="和差公式：大数（甲）= (和 + 差) ÷ 2 = (50 + 10) ÷ 2 = 30 个。" />
                    <PracticeProblem id={472} type="choice" question="哥哥和弟弟一共有 48 元，哥哥的钱是弟弟的 3 倍。弟弟有（ ）元。" options={[{ label: 'A', value: '12' }, { label: 'B', value: '24' }, { label: 'C', value: '36' }, { label: 'D', value: '16' }]} answer="A" explanation="和倍公式：小数（弟弟）= 和 ÷ (倍数 + 1) = 48 ÷ (3 + 1) = 12 元。" />
                    <PracticeProblem id={473} type="choice" question="爸爸比小明大 28 岁，爸爸的年龄是小明的 5 倍。爸爸今年（ ）岁。" options={[{ label: 'A', value: '7' }, { label: 'B', value: '35' }, { label: 'C', value: '42' }, { label: 'D', value: '28' }]} answer="B" explanation="差倍公式：小数（小明）= 差 ÷ (倍数 - 1) = 28 ÷ (5 - 1) = 7 岁。大数（爸爸）= 7 × 5 = 35 岁。" />
                    <PracticeProblem id={474} type="choice" question="两个数的和是 100，差是 20，较小的数是（ ）" options={[{ label: 'A', value: '40' }, { label: 'B', value: '50' }, { label: 'C', value: '60' }, { label: 'D', value: '30' }]} answer="A" explanation="小数 = (和 - 差) ÷ 2 = (100 - 20) ÷ 2 = 40。" />
                    <PracticeProblem id={475} type="choice" question="图书馆有文艺书和科技书共 800 本，文艺书比科技书多 100 本。科技书有（ ）本。" options={[{ label: 'A', value: '350' }, { label: 'B', value: '400' }, { label: 'C', value: '450' }, { label: 'D', value: '500' }]} answer="A" explanation="科技书是相对少的那个：(800 - 100) ÷ 2 = 350 本。" />
                    <PracticeProblem id={476} type="choice" question="A仓存粮是B仓的 4 倍，如果从A仓运 30 吨给B仓，两仓就一样多了。那么A仓原有（ ）吨。" options={[{ label: 'A', value: '60' }, { label: 'B', value: '80' }, { label: 'C', value: '100' }, { label: 'D', value: '120' }]} answer="B" explanation="A给B 30吨后一样多，说明A比B多 30×2 = 60吨（差）！已知A是B的4倍，由差倍问题知 B=60÷(4-1)=20吨。A原有 20×4=80吨。" />
                    <PracticeProblem id={477} type="choice" question="甲、乙存款共 120 元，甲给乙 10 元后，甲还是乙的 2 倍。乙原来有（ ）元。" options={[{ label: 'A', value: '40' }, { label: 'B', value: '30' }, { label: 'C', value: '20' }, { label: 'D', value: '10' }]} answer="B" explanation="甲给乙10元后，总和还是120元。两人现在的关系是和倍：现在的乙 = 120 ÷ (2+1) = 40元。既然这是乙拿到10元之后的钱，那原来乙是 40 - 10 = 30元。" />
                    <PracticeProblem id={478} type="choice" question="弟弟有图书 30 本，哥哥有 90 本。哥哥给弟弟（ ）本后，两人的图书就一样多了。" options={[{ label: 'A', value: '30' }, { label: 'B', value: '60' }, { label: 'C', value: '15' }, { label: 'D', value: '45' }]} answer="A" explanation="两人相差 90 - 30 = 60 本。要使两人一样多，只需把多出的一半给对方：60 ÷ 2 = 30 本。" />
                    <PracticeProblem id={479} type="choice" question="被除数与除数的和为 70，商为 6 且没有余数，被除数是（ ）。" options={[{ label: 'A', value: '60' }, { label: 'B', value: '64' }, { label: 'C', value: '10' }, { label: 'D', value: '54' }]} answer="A" explanation="商为6表示被除数是除数的6倍！这是一个和倍问题：除数 = 70 ÷ (6 + 1) = 10，被除数 = 10 × 6 = 60。" />
                    <PracticeProblem id={480} type="choice" question="如果甲数加 1 是乙数的 2 倍，甲数减 1 与乙数相等。那么甲数是（ ）" options={[{ label: 'A', value: '2' }, { label: 'B', value: '3' }, { label: 'C', value: '4' }, { label: 'D', value: '5' }]} answer="B" explanation="甲减1等于乙，说明甲比乙大1（差为1），此时乙 = 乙，甲 = 乙+1。甲加1就是 乙+2。此时是乙的2倍：乙+2 = 2×乙，所以乙=2。甲=乙+1=3。" />
                </div>
            )
        }
    },

    // ==================== L2-2. 简便运算 ====================
    'g4-l2-clever-calc': {
        meta: {
            title: "简便运算（凑整/拆数）- 四年级思维进阶 | AI奇妙数学",
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
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：运算定律魔法盒
                        </h2>
                        <OperationsLawsLab />
                    </div>
                </div>
            ),
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
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">例3：减法的性质</p>
                                <div className="font-mono text-sm text-slate-600 dark:text-slate-400 space-y-1 pl-4 border-l-4 border-purple-400">
                                    <p>计算：456 - 198</p>
                                    <p>= 456 - (200 - 2)</p>
                                    <p>= 456 - 200 + 2</p>
                                    <p>= 256 + 2</p>
                                    <p className="font-bold text-indigo-600">= 258</p>
                                    <p className="text-xs text-slate-400">（多减了要加回来）</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">例4：除法的性质</p>
                                <div className="font-mono text-sm text-slate-600 dark:text-slate-400 space-y-1 pl-4 border-l-4 border-orange-400">
                                    <p>计算：360 ÷ 8 ÷ 5</p>
                                    <p>= 360 ÷ (8 × 5)</p>
                                    <p>= 360 ÷ 40</p>
                                    <p className="font-bold text-indigo-600">= 9</p>
                                    <p className="text-xs text-slate-400">（连续除以两个数等于除以它们的积）</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">例5：乘法分配律的变式</p>
                                <div className="font-mono text-sm text-slate-600 dark:text-slate-400 space-y-1 pl-4 border-l-4 border-red-400">
                                    <p>计算：64 × 59 + 64 × 42 - 64</p>
                                    <p>= 64 × (59 + 42 - 1)</p>
                                    <p>= 64 × 100</p>
                                    <p className="font-bold text-indigo-600">= 6400</p>
                                    <p className="text-xs text-slate-400">（别忘了单独的 64 是 64 × 1）</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={481} type="choice" question="计算 25 × 12，最简便的方法是（ ）" options={[{ label: 'A', value: '25 × 10 + 2' }, { label: 'B', value: '25 × 4 × 3' }, { label: 'C', value: '5 × 5 × 12' }, { label: 'D', value: '直接列竖式' }]} answer="B" explanation="25 的好朋友是 4（25×4=100），把 12 拆成 4×3，25 × 12 = 25 × 4 × 3 = 100 × 3 = 300。" />
                    <PracticeProblem id={482} type="choice" question="计算 38 × 101，最简便的方法得到的结果是（ ）" options={[{ label: 'A', value: '3838' }, { label: 'B', value: '3876' }, { label: 'C', value: '3800' }, { label: 'D', value: '3938' }]} answer="A" explanation="利用乘法分配律：38 × 101 = 38 × (100 + 1) = 38 × 100 + 38 × 1 = 3800 + 38 = 3838。" />
                    <PracticeProblem id={483} type="choice" question="根据乘法分配律，47 × 99 可以转化为（ ）" options={[{ label: 'A', value: '47 × 100 - 1' }, { label: 'B', value: '47 × 100 - 47' }, { label: 'C', value: '47 × 100 + 47' }, { label: 'D', value: '47 × 90 + 9' }]} answer="B" explanation="99 = 100 - 1，所以 47 × 99 = 47 × (100 - 1) = 47 × 100 - 47 × 1 = 4700 - 47。" />
                    <PracticeProblem id={484} type="choice" question="125 × 88 = （ ）" options={[{ label: 'A', value: '11000' }, { label: 'B', value: '10000' }, { label: 'C', value: '12500' }, { label: 'D', value: '11100' }]} answer="A" explanation="125 的好朋友是 8（125×8=1000），把 88 拆成 8 × 11。125 × 88 = 125 × 8 × 11 = 1000 × 11 = 11000。" />
                    <PracticeProblem id={485} type="choice" question="45 × 11 + 55 × 11 = （ ）" options={[{ label: 'A', value: '1100' }, { label: 'B', value: '1000' }, { label: 'C', value: '990' }, { label: 'D', value: '1111' }]} answer="A" explanation="逆用乘法分配律，提取公因数 11：45×11 + 55×11 = (45 + 55) × 11 = 100 × 11 = 1100。" />
                    <PracticeProblem id={486} type="choice" question="怎样简便就怎样算：720 ÷ 16 ÷ 5 = （ ）" options={[{ label: 'A', value: '7' }, { label: 'B', value: '9' }, { label: 'C', value: '10' }, { label: 'D', value: '12' }]} answer="B" explanation="连续除以两个数，等于除以这两个数的积：720 ÷ (16 × 5) = 720 ÷ 80 = 9。" />
                    <PracticeProblem id={487} type="choice" question="算式 25 × 32 × 125 运用了什么运算定律可以让计算最简便？" options={[{ label: 'A', value: '乘法交换律' }, { label: 'B', value: '乘法结合律' }, { label: 'C', value: '乘法交换律和乘法结合律' }, { label: 'D', value: '乘法分配律' }]} answer="C" explanation="把 32 拆成 4 × 8。原式变成 25 × 4 × 8 × 125，交换位置结合起来计算：(25 × 4) × (8 × 125) = 100 × 1000 = 100000。" />
                    <PracticeProblem id={488} type="choice" question="计算 36 × 199 + 36 时，可以转化为（ ）" options={[{ label: 'A', value: '36 × 200' }, { label: 'B', value: '36 × (199 + 36)' }, { label: 'C', value: '36 × 199' }, { label: 'D', value: '199 × 200' }]} answer="A" explanation="最后孤零零的 36 可以看成 36 × 1。提取公因数 36 后就是：36 × (199 + 1) = 36 × 200。" />
                    <PracticeProblem id={489} type="choice" question="999 × 9 + 9 = （ ）" options={[{ label: 'A', value: '8991' }, { label: 'B', value: '9000' }, { label: 'C', value: '8999' }, { label: 'D', value: '9999' }]} answer="B" explanation="999个9 加上 1个9，一共是1000个9。即 9 × (999 + 1) = 9 × 1000 = 9000。" />
                    <PracticeProblem id={490} type="choice" question="25 × 104 的简便算法是（ ）" options={[{ label: 'A', value: '25 × 100 + 4' }, { label: 'B', value: '25 × 100 × 4' }, { label: 'C', value: '25 × 100 + 25 × 4' }, { label: 'D', value: '25 × 100 - 25 × 4' }]} answer="C" explanation="104 = 100 + 4，利用乘法分配律：25 × 104 = 25 × (100 + 4) = 25 × 100 + 25 × 4。" />
                </div>
            )
        }
    },

    // ==================== L2-3. 定义新运算 ====================
    'g4-l2-new-definition': {
        meta: {
            title: "定义新运算 - 四年级思维进阶 | AI奇妙数学",
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
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：神奇规则加工厂
                        </h2>
                        <OperatorMachineLab />
                    </div>
                </div>
            ),
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
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 符号工厂的说明书灾难</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 认错位置</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">比如定义 a★b = a×2 - b。求 3★5 时，看都不看就把 5 当成了 a，结果算出了 5×2-3=7。大错特错！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 按部就班对号入座</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">符号左边的是 a，右边的是 b。3 在前面，所以 3 就是 a；5 在后面，5 就是 b！代入：3×2 - 5 = 1！如果遇到复杂的式子，要先把括号里的“加工”完，再进行下一步操作！</p>
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
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-xl">
                                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-3 rounded-lg mb-4">
                                    <p className="font-bold text-yellow-800 dark:text-yellow-200">定义：a ⊗ b = a × 2 - b</p>
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 mb-3">计算 (5 ⊗ 2) ⊗ 3</p>
                                <div className="pl-4 border-l-4 border-orange-400 font-mono text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                    <p>先算括号里的：5 ⊗ 2 = 5 × 2 - 2 = 8</p>
                                    <p>再算外面的：8 ⊗ 3 = 8 × 2 - 3 = 13</p>
                                    <p className="font-bold text-orange-600">答案 = 13</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-xl">
                                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-3 rounded-lg mb-4">
                                    <p className="font-bold text-yellow-800 dark:text-yellow-200">定义：x ⊕ y 表示求 x, y 的平均数</p>
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 mb-3">若 8 ⊕ a = 10，则 a 是多少？</p>
                                <div className="pl-4 border-l-4 border-green-400 font-mono text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                    <p>翻译：(8 + a) ÷ 2 = 10</p>
                                    <p>8 + a = 20</p>
                                    <p className="font-bold text-green-600">a = 12</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-xl">
                                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-3 rounded-lg mb-4">
                                    <p className="font-bold text-yellow-800 dark:text-yellow-200">定义：x ⊙ y = x × x - y</p>
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 mb-3">求 3 ⊙ (4 ⊙ 10)</p>
                                <div className="pl-4 border-l-4 border-red-400 font-mono text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                    <p>先算括号：4 ⊙ 10 = 4 × 4 - 10 = 16 - 10 = 6</p>
                                    <p>再算外面：3 ⊙ 6 = 3 × 3 - 6 = 9 - 6 = 3</p>
                                    <p className="font-bold text-red-600">答案 = 3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl mb-4">
                        <p className="font-bold text-indigo-800 dark:text-indigo-200">定义多种新运算，仔细看清规则哦！</p>
                    </div>
                    <PracticeProblem id={491} type="choice" question="定义：a ▽ b = a × 3 - b × 2。求 5 ▽ 4 = （ ）" options={[{ label: 'A', value: '5' }, { label: 'B', value: '7' }, { label: 'C', value: '9' }, { label: 'D', value: '11' }]} answer="B" explanation="就像套公式：把 a 换成 5，b 换成 4。5×3 - 4×2 = 15 - 8 = 7。" />
                    <PracticeProblem id={492} type="choice" question="定义：a ▽ b = a × 3 - b × 2。求 8 ▽ 5 = （ ）" options={[{ label: 'A', value: '14' }, { label: 'B', value: '10' }, { label: 'C', value: '24' }, { label: 'D', value: '18' }]} answer="A" explanation="代入公式：8×3 - 5×2 = 24 - 10 = 14。" />
                    <PracticeProblem id={493} type="choice" question="定义：a ▽ b = a × 3 - b × 2。若 a ▽ 3 = 12，则 a = （ ）" options={[{ label: 'A', value: '5' }, { label: 'B', value: '6' }, { label: 'C', value: '7' }, { label: 'D', value: '8' }]} answer="B" explanation="翻译一下：a×3 - 3×2 = 12，即 a×3 - 6 = 12。推导：a×3 = 18，所以 a = 6。" />
                    <PracticeProblem id={494} type="choice" question="定义：m ★ n = m × n + m + n。求 3 ★ 4 = （ ）" options={[{ label: 'A', value: '12' }, { label: 'B', value: '15' }, { label: 'C', value: '19' }, { label: 'D', value: '20' }]} answer="C" explanation="代入公式：3×4 + 3 + 4 = 12 + 3 + 4 = 19。" />
                    <PracticeProblem id={495} type="choice" question="定义：m ★ n = m × n + m + n。求 (1 ★ 2) ★ 3 = （ ）" options={[{ label: 'A', value: '15' }, { label: 'B', value: '20' }, { label: 'C', value: '23' }, { label: 'D', value: '27' }]} answer="C" explanation="有括号先算括号里的！先算 1★2 = 1×2+1+2 = 5。再算 5★3 = 5×3+5+3 = 15+5+3 = 23。" />
                    <PracticeProblem id={496} type="choice" question="定义：x ◎ y = (x + y) ÷ 2。求 6 ◎ 8 = （ ）" options={[{ label: 'A', value: '7' }, { label: 'B', value: '14' }, { label: 'C', value: '48' }, { label: 'D', value: '2' }]} answer="A" explanation="这个新运算其实就是求平均数！(6 + 8) ÷ 2 = 14 ÷ 2 = 7。" />
                    <PracticeProblem id={497} type="choice" question="定义：x ◎ y = (x + y) ÷ 2。求 10 ◎ (4 ◎ 6) = （ ）" options={[{ label: 'A', value: '5' }, { label: 'B', value: '6.5' }, { label: 'C', value: '7.5' }, { label: 'D', value: '8' }]} answer="C" explanation="先算带有括号的：4◎6 = (4+6)÷2 = 5。接着算外层：10◎5 = (10+5)÷2 = 15÷2 = 7.5。" />
                    <PracticeProblem id={498} type="choice" question="定义：A ⊕ B = A × A - B。求 5 ⊕ 10 = （ ）" options={[{ label: 'A', value: '10' }, { label: 'B', value: '15' }, { label: 'C', value: '20' }, { label: 'D', value: '25' }]} answer="B" explanation="前一个数自己乘自己，再减去后一个数。5×5 - 10 = 25 - 10 = 15。" />
                    <PracticeProblem id={499} type="choice" question="定义：A ⊕ B = A × A - B。求 4 ⊕ (3 ⊕ 4) = （ ）" options={[{ label: 'A', value: '7' }, { label: 'B', value: '9' }, { label: 'C', value: '11' }, { label: 'D', value: '13' }]} answer="C" explanation="先算括号：3⊕4 = 3×3 - 4 = 9-4 = 5。再算 4⊕5 = 4×4 - 5 = 16-5 = 11。" />
                    <PracticeProblem id={500} type="choice" question="定义：x ※ y = x × y - (x + y)。求 7 ※ 5 = （ ）" options={[{ label: 'A', value: '12' }, { label: 'B', value: '23' }, { label: 'C', value: '35' }, { label: 'D', value: '47' }]} answer="B" explanation="乘积减去和。7×5 - (7+5) = 35 - 12 = 23。" />
                </div>
            )
        }
    },

    // ==================== L2-4. 数阵图 ====================
    'g4-l2-number-array': {
        meta: {
            title: "数阵图 - 四年级思维进阶 | AI奇妙数学",
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
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：九宫格幻方挑战
                        </h2>
                        <MagicSquareLab />
                    </div>
                </div>
            ),
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
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 幻方的迷阵</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 拿到直接死算</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">不求公共和，不找中心数，直接在那一边填一边擦，最后发现死活填不对，心态崩了。</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 擒贼先擒王</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">幻方是有生命的！先求出最重要的“心脏”——**中心格**，再算出每条直线的“灵魂”——**公共和**。有了这两个定海神针，再去填其他的格子，就像玩拼图一样轻松！</p>
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
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-3">例2：已知幻方和，求缺少的数</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-3 text-sm">一个三阶幻方的每行、每列及每条对角线上的数字和是 24。求它的中心格是多少？</p>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-blue-500 font-mono text-sm text-slate-600 dark:text-slate-400">
                                    <p>解：三阶幻方的重要公式：<strong>中心格 = 公共和 ÷ 3</strong>。</p>
                                    <p>所以中心格 = 24 ÷ 3 = <strong>8</strong>。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-3">例3：找规律填数组</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-3 text-sm">观察这组数：1, 1, 2, 3, 5, 8, 13, (  ), ...</p>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-green-500 font-mono text-sm text-slate-600 dark:text-slate-400">
                                    <p>解：这是著名的斐波那契数列（兔子数列）。</p>
                                    <p>规律是：前两个数的和等于第三个数。比如 1+1=2, 1+2=3, 2+3=5...</p>
                                    <p>所以接下来应该是 8 + 13 = <strong>21</strong>。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-3">例4：看图填数字谜</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-3 text-sm">把 1~5 这 5 个数字分别填在十字形的 5 个格子里，使横着和竖着的三个数字之和都等于 8。</p>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-purple-500 font-mono text-sm text-slate-600 dark:text-slate-400 space-y-2">
                                    <p>解：这是公共和问题。总和 = 1+2+3+4+5 = 15。</p>
                                    <p>两次和 = 8 + 8 = 16。</p>
                                    <p>多出的是因为中心格被加了两次。所以中心格 = 16 - 15 = <strong>1</strong>。</p>
                                    <p>剩下的 2,3,4,5 怎么配？2+5 和 3+4，只要把它们分别放在十字的两头就可以了。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-3">例5：三角形阵列</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-3 text-sm">把 1~6 填在三角形的三个边上（每边三个），使每条边上的数字和都是 10。</p>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-orange-500 font-mono text-sm text-slate-600 dark:text-slate-400 space-y-2">
                                    <p>解：三个顶点被重复加了一次。1~6 的总和是 21。三条边的总和应该=10×3=30。</p>
                                    <p>多出的部分 = 30 - 21 = 9。这就说明三个顶点的数字加起来是 9。</p>
                                    <p>在 1~6 中，选出和为 9 的三个数：1, 3, 5。把它们填在顶点。</p>
                                    <p>剩下的 2, 4, 6 补在边的中间：1和3之间填6，3和5之间填2，1和5之间填4。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={501} type="choice" question="在 1~9 填入的三阶幻方中，中心位置的数是（ ）" options={[{ label: 'A', value: '3' }, { label: 'B', value: '4' }, { label: 'C', value: '5' }, { label: 'D', value: '6' }]} answer="C" explanation="1到9的平均数是5，中心格参与的连线最多，所以最中间的数填中位数 5。" />
                    <PracticeProblem id={502} type="choice" question="三阶幻方（1~9）的“幻和”（即每行、每列、对角线之和）是（ ）" options={[{ label: 'A', value: '12' }, { label: 'B', value: '15' }, { label: 'C', value: '18' }, { label: 'D', value: '24' }]} answer="B" explanation="1到9的总和是 45。由于有 3 行，每行的和必须相等，所以一行的和是 45 ÷ 3 = 15。" />
                    <PracticeProblem id={503} type="choice" question="三阶幻方（1~9）中，四个角上的数必定是（ ）" options={[{ label: 'A', value: '奇数' }, { label: 'B', value: '偶数' }, { label: 'C', value: '质数' }, { label: 'D', value: '合数' }]} answer="B" explanation="口诀“二四为肩，六八为足”，四个角上填的分别是 2, 4, 6, 8，都是偶数。" />
                    <PracticeProblem id={504} type="choice" question="在一个三阶幻方中，如果有规律，幻和与中心数的关系通常是：幻和 = 中心数 × （ ）" options={[{ label: 'A', value: '2' }, { label: 'B', value: '3' }, { label: 'C', value: '4' }, { label: 'D', value: '5' }]} answer="B" explanation="因为穿过中心数的有行、列、两条对角线。从等差数列的性质来看，幻和正好是中心数的 3 倍。" />
                    <PracticeProblem id={505} type="choice" question="如果一个三阶幻方的中心数是 8，那么它的幻和应该是（ ）" options={[{ label: 'A', value: '16' }, { label: 'B', value: '20' }, { label: 'C', value: '24' }, { label: 'D', value: '32' }]} answer="C" explanation="根据幻和 = 中心数 × 3 的规律，幻和是 8 × 3 = 24。" />
                    <PracticeProblem id={506} type="choice" question="三阶幻方（1~9）中，数字 9 应该填在什么位置？" options={[{ label: 'A', value: '中心' }, { label: 'B', value: '四个角之一' }, { label: 'C', value: '四边中间之一' }, { label: 'D', value: '随便填' }]} answer="C" explanation="口诀“戴九履一”，9 填在最上面的中间格子里，属于四边中间。" />
                    <PracticeProblem id={507} type="choice" question="在一个标准的三阶幻方中，一共有（ ）条直线的数字之和等于幻和。" options={[{ label: 'A', value: '3' }, { label: 'B', value: '6' }, { label: 'C', value: '8' }, { label: 'D', value: '9' }]} answer="C" explanation="包括 3 行、3 列和 2 条对角线，一共 3 + 3 + 2 = 8 条线。" />
                    <PracticeProblem id={508} type="choice" question="把 2、4、6、8、10、12、14、16、18 填入三阶幻方，中心数是（ ）" options={[{ label: 'A', value: '8' }, { label: 'B', value: '10' }, { label: 'C', value: '12' }, { label: 'D', value: '14' }]} answer="B" explanation="这 9 个数是从小到大的等差数列，最中间的数（第 5 个）就是 10。所以中心数填 10。" />
                    <PracticeProblem id={509} type="choice" question="接上题，这 9 个偶数构成的三阶幻方，其幻和是（ ）" options={[{ label: 'A', value: '20' }, { label: 'B', value: '24' }, { label: 'C', value: '30' }, { label: 'D', value: '36' }]} answer="C" explanation="幻和 = 中心数 × 3 = 10 × 3 = 30。也可以所有数相加得90，除以3得30。" />
                    <PracticeProblem id={510} type="choice" question="古代的洛书就是一个三阶幻方：戴九履一，左三右七，二四为肩，六八为足。缺少的中心数是（ ）" options={[{ label: 'A', value: '2' }, { label: 'B', value: '3' }, { label: 'C', value: '4' }, { label: 'D', value: '5' }]} answer="D" explanation="这口诀把 1~9 中除了 5 之外的八个数都安排在四周了，剩下的 5 正好稳坐中央定海神针！" />
                </div>
            )
        }
    },

    // ==================== L2-5. 逻辑推理进阶 ====================
    'g4-l2-logic-advanced': {
        meta: {
            title: "逻辑推理进阶 - 四年级思维进阶 | AI奇妙数学",
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
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：大侦探逻辑表
                        </h2>
                        <LogicTableLab />
                    </div>
                </div>
            ),
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
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 推理路上的烟雾弹</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 只看一半</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">“哦！假设施法的是A，那就对了！”然而后面的条件根本没看。导致推理出了一堆自相矛盾的东西。</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 顺藤摸瓜，自圆其说</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">无论是列表还是假设，最重要的就是找出**突破口**！那部分肯定是真的，或者那几句话里面有**矛盾**的地方，就是我们的切入点。最后别忘了把得出的结论带回题目里，看看大家的话能不能完美闭环哦！</p>
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
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-3">例2：真假话问题（找矛盾）</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-3 text-sm">四个人中有一个打碎了玻璃。甲说："是乙打碎的"。乙说："甲在说谎"。丙说："不是我打碎的"。丁说："是甲打碎的"。已知只有一人说了真话。是谁打碎的？</p>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-blue-500 font-mono text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                    <p>解：甲和乙的话是矛盾的！他们中一定有一个说真话，一个说假话。</p>
                                    <p>既然只有一人说真话，那么真话肯定在甲乙之中。说明丙和丁说的都是<strong>假话</strong>。</p>
                                    <p>丙说"不是我打碎的"是假话，说明<strong>就是丙打碎的</strong>！</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-3">例3：假设推理法</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-3 text-sm">A、B、C三人其中一人是班长。A说："我是班长"。B说："我不是班长"。C说："A不是班长"。只有一人说假话。谁是班长？</p>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-green-500 font-mono text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                    <p>解：A和C的话是矛盾的！他们中必有一假。因此B说的必然是真话。</p>
                                    <p>如果B是真话，说明B不是班长。</p>
                                    <p>如果A是班长，A真，B真(B不是班长)，C假。刚好只有一人说假话！所以<strong>A是班长</strong>！这就足够了。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-3">例4：名次推理</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-3 text-sm">甲、乙、丙三人赛跑，甲说："我不是最后"。乙说："我是第一"。丙："我也不是最后"。最后发现只有一人说了实话。第一名是谁？</p>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-purple-500 font-mono text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                    <p>解：假设乙是第一（乙真），则甲不是最后（甲可能第二，甲真）。此时有两人说真话，矛盾！</p>
                                    <p>所以乙说的是假的，乙不是第一。</p>
                                    <p>假设甲是第一，甲说自己不是最后是真的。乙假。如果丙是第二（丙真），那么就有两真。如果丙是最后（丙假），则只有甲真！所以<strong>甲是第一</strong>，乙是第二，丙是最后。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-3">例5：黑白帽问题</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-3 text-sm">老师把两个白帽子和一个黑帽子任意戴在A,B,C三人头上。A看到B是白的，C是白的，想了想说"我不知道自己是什么颜色"。B听到A的话，看了看C说"我也不知道"。以此推断C戴什么帽子？</p>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-orange-500 font-mono text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                    <p>解：这个太绕了，我们简单想。</p>
                                    <p>假设C戴的是黑帽子，B看到C是黑色的，就知道自己一定是白帽（因为只有一个黑帽）。但B说不知道，说明B看到的C一定不是黑帽子！</p>
                                    <p>所以C戴的必定是<strong>白帽子</strong>！</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={511} type="choice" question="A说'是B做的'，B说'不是我做的'，C说'不是我做的'。已知只有一个人说真话，是谁做的好事？" options={[{ label: 'A', value: 'A' }, { label: 'B', value: 'B' }, { label: 'C', value: 'C' }, { label: 'D', value: '无法推出' }]} answer="C" explanation="假设C做的，A说谎，B说真，C说谎（只有B一人说真话，符合条件！）。假设A做的好事：A谎、B真、C真（两人说真话，不符）。" />
                    <PracticeProblem id={512} type="choice" question="甲乙丙赛跑。甲说：我不是第一。乙说：我是第一。丙说：我不是第二。已知只有一人说实话。第一名是谁？" options={[{ label: 'A', value: '甲' }, { label: 'B', value: '乙' }, { label: 'C', value: '丙' }, { label: 'D', value: '不知道' }]} answer="A" explanation="假设乙是第一，则乙说真话，甲说的是真话（不是第一），这就两人说真话了，矛盾！假设甲是第一，甲假、乙假、丙（可能是二或三，如果丙是第三则真），符合只有一人说实话的情况。所以甲是第一。" />
                    <PracticeProblem id={513} type="choice" question="红黄蓝球在123盒。红不在1，黄不在2，蓝不在1和3。蓝在几号盒？" options={[{ label: 'A', value: '1' }, { label: 'B', value: '2' }, { label: 'C', value: '3' }, { label: 'D', value: '外边' }]} answer="B" explanation="蓝不在1和3，它只能在唯一的剩下选择：2号盒中！" />
                    <PracticeProblem id={514} type="choice" question="接上题。既然蓝球在2号盒，那红球在几号盒？" options={[{ label: 'A', value: '1' }, { label: 'B', value: '2' }, { label: 'C', value: '3' }, { label: 'D', value: '不能确定' }]} answer="C" explanation="蓝球占据了2号盒。剩下的1号和3号给红和黄。已知红球不在1号，所以红球只能在3号盒！" />
                    <PracticeProblem id={515} type="choice" question="接题目513。最后，黄球在几号盒？" options={[{ label: 'A', value: '1' }, { label: 'B', value: '2' }, { label: 'C', value: '3' }, { label: 'D', value: '0' }]} answer="A" explanation="蓝球在2号，红球在3号，剩下的黄球只能在1号盒。正好黄也不在2（题目已知），完美符合。" />
                    <PracticeProblem id={516} type="choice" question="狮子每周一二三说谎，老虎每周四五六说谎，其他时间说真话。某天狮子说“昨天是我说谎的日子”，老虎说“昨天也是我说谎的”。这天是星期几？" options={[{ label: 'A', value: '星期一' }, { label: 'B', value: '星期四' }, { label: 'C', value: '星期日' }, { label: 'D', value: '星期二' }]} answer="B" explanation="如果今天是星期四，狮子说真话，昨天周三正好是他谎话日，正确。老虎周四说谎，昨天周三是他说真话的日子，昨天的确不是谎话日，所以他说“昨天是我说谎的日子”正是谎言！完全符合！" />
                    <PracticeProblem id={517} type="choice" question="有A、B、C三人，一个是老师，一个是医生，一个是警察。A比医生大，B和警察不同岁，警察比C小。谁是医生？" options={[{ label: 'A', value: 'A' }, { label: 'B', value: 'B' }, { label: 'C', value: 'C' }, { label: 'D', value: '以上都不对' }]} answer="B" explanation="“A比医生大”说明A不是医生。“警察比C小”说明C不是警察。“B和警察不同岁”说明B不是警察。综上，警察必然是A！所以老师和医生在B、C中。因为A比医生大，且警察（A）比C小，所以 医生 &lt; A(警察) &lt; C。因此C不是医生，医生只能是B！C是老师。" />
                    <PracticeProblem id={518} type="choice" question="甲说：不是我。乙说：是丁。丙说：是乙。丁说：不是我。已知这四句话中只有一句真话，是谁做的好事？" options={[{ label: 'A', value: '甲' }, { label: 'B', value: '乙' }, { label: 'C', value: '丙' }, { label: 'D', value: '丁' }]} answer="A" explanation="乙（说丁做的）和丁（说不是丁做的）的话互相矛盾，所以这两句话中一定有一句真话、一句假话。因为总共只有一句真话，说明甲和丙说的都是假话。甲说“不是我”是假的，这就证明了就是甲做的！" />
                    <PracticeProblem id={519} type="choice" question="黑、白、黄、花四只猫谁偷吃了鱼？黑说：不是我。白说：是黄。黄说：不是黑。花说：是黑。只有一只猫说真话，偷鱼的是哪只？" options={[{ label: 'A', value: '黑' }, { label: 'B', value: '白' }, { label: 'C', value: '黄' }, { label: 'D', value: '花' }]} answer="A" explanation="黑说“不是我”，花说“是黑”，两者矛盾，必有一真。因为只有一真，所以白和黄说谎。黄说“不是黑”是假的，说明就是黑偷吃的！" />
                    <PracticeProblem id={520} type="choice" question="A、B、C三人，一人说真话，两人说假话。A说：B说谎。B说：C说谎。C说：A和B都说谎。谁说的是真话？" options={[{ label: 'A', value: 'A' }, { label: 'B', value: 'B' }, { label: 'C', value: 'C' }, { label: 'D', value: '都没说真话' }]} answer="B" explanation="假设B真，那么C是说谎（假）；A说B说谎也是错的，所以A也是说谎（假）。这样刚好是一真两假，且大家的供词完美自洽。所以说真话的是B。" />
                </div>
            )
        }
    }

};

export default grade4Content;

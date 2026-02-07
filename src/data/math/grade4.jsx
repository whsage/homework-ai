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
        aiContext: "学生在学习大数。请用中国人口、地球到月球距离等实际例子帮助理解大数的意义。引导学生发现数位规律。",
        aiChatTitle: "AI互动学习:发现数位的秘密",
        aiChatIntro: "通过中国人口等实际例子,你将理解大数的意义和数位规律。",
        aiMessages: [
            { role: 'ai', content: '你知道中国有多少人口吗？大约14亿人！你能写出这个数吗？' },
            { role: 'user', content: '1400000000？' },
            { role: 'ai', content: <>太棒了！这个数读作"十四亿"。你发现了吗？每<strong>四位</strong>一组，会更容易读！</>, type: 'success' },
            { role: 'user', content: '对！14,0000,0000，分成"亿"、"万"、"个"三组！' },
            { role: 'ai', content: <>完全正确！这就是<strong className="text-indigo-600">数位分级</strong>的秘密。现在你已经掌握了认识大数的关键！</>, type: 'success' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            什么是大数？
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">数位与计数单位</h3>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-slate-200 dark:border-slate-600">
                                                <th className="p-2 text-center" colSpan="4">亿级</th>
                                                <th className="p-2 text-center" colSpan="4">万级</th>
                                                <th className="p-2 text-center" colSpan="4">个级</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="text-center">
                                                <td className="p-2 border-r">千亿</td>
                                                <td className="p-2 border-r">百亿</td>
                                                <td className="p-2 border-r">十亿</td>
                                                <td className="p-2 border-r font-bold">亿</td>
                                                <td className="p-2 border-r">千万</td>
                                                <td className="p-2 border-r">百万</td>
                                                <td className="p-2 border-r">十万</td>
                                                <td className="p-2 border-r font-bold">万</td>
                                                <td className="p-2 border-r">千</td>
                                                <td className="p-2 border-r">百</td>
                                                <td className="p-2 border-r">十</td>
                                                <td className="p-2 font-bold">个</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                                    <div className="text-3xl mb-3">👥</div>
                                    <h3 className="font-bold text-slate-800 dark:text-white mb-2">中国人口</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                                        约14亿人<br />
                                        写作：1,400,000,000
                                    </p>
                                </div>

                                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                                    <div className="text-3xl mb-3">🌍</div>
                                    <h3 className="font-bold text-slate-800 dark:text-white mb-2">地球到月球</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                                        约384,000千米<br />
                                        读作：三十八万四千千米
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
                            <TrendingUp className="w-6 h-6 text-indigo-600" />
                            数的改写与省略
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                                <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-4 text-lg">改写成"万"或"亿"作单位</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                                    去掉末尾的4个0（或8个0），加上"万"（或"亿"）字。
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                    <code className="text-sm block">1,000,000 = 100万</code>
                                    <code className="text-sm block">500,000,000 = 5亿</code>
                                </div>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                                <h3 className="font-bold text-green-700 dark:text-green-400 mb-4 text-lg">省略万位或亿位后面的尾数</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                                    用<strong>四舍五入</strong>法，看千位或千万位上的数。
                                </p>
                                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                                    <code className="text-sm block">1,234,567 ≈ 123万（四舍五入到万位）</code>
                                    <code className="text-sm block">987,654,321 ≈ 10亿（四舍五入到亿位）</code>
                                </div>
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
        aiContext: "学生正在学习角的度量。请指导学生如何使用量角器（中心对顶点，零线对一边）。解释不同角的特征。如果学生问为什么角有大小，解释角的大小与两边张开的程度有关。",
        aiChatTitle: "AI互动学习：量角小达人",
        aiChatIntro: "你好！我是量角小助手。你知道量角器上的中心点和零刻度线有什么用吗？让我们一起来测量几个角吧！",
        aiMessages: [
            { role: 'ai', content: '看看你手中的量角器（或者屏幕上的），你发现了什么？' },
            { role: 'user', content: '有好多刻度线，还有一个中心点。' },
            { role: 'ai', content: '观察得真仔细！量角的第一步就是：**中心对顶点**。把量角器的中心点对准角的顶点。接下来呢？' },
            { role: 'user', content: '是要把一条线对准零刻度吗？' },
            { role: 'ai', content: <>没错！**零线对一边**。让角的一条边和量角器的0刻度线重合。然后看另一条边指着多少度，这就是这个角的大小！</>, type: 'success' },
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
                            角的定义与分类
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl">
                                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-3">⚡️ 什么是角？</h3>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    从一点引出两条<strong>射线</strong>所组成的图形叫做角。
                                    <br />
                                    <span className="text-sm text-slate-500">（注意：角的大小与边的长短无关，只与两边叉开的大小有关）</span>
                                </p>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3">📏 角的度量单位</h3>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    角的计量单位是"度"，用符号"°"表示。
                                    <br />
                                    把半圆分成180等份，每一份所对的角的大小是1度，记作1°。
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
        aiContext: "学生正在学习除数是两位数的除法。重点辅导试商方法（把除数看作整十数）。如果余数比除数大，说明商小了，要调大。",
        aiChatTitle: "运算小助手",
        aiChatIntro: "你好！我是你的除法教练。遇到试商困难了吗？",
        aiMessages: [
            { role: 'ai', content: '计算 192 ÷ 24 时，你会把 24 看作多少来试商？' },
            { role: 'user', content: '看作 20？' },
            { role: 'ai', content: '对的！192 里面大约有几个 20？' },
            { role: 'user', content: '9 个。' },
            { role: 'ai', content: '那我们试试商 9。24 × 9 = 216，比 192 大了。说明什么？' },
            { role: 'user', content: '商大了，要改小。' },
            { role: 'ai', content: '非常聪明！这就是"调商"。我们在互动演示里试一试吧。', type: 'success' }
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
        aiContext: "学生正在做小数加减法。重点是理解'相同数位对齐'，也就是'小数点对齐'。利用百格图帮助学生建立数位概念。",
        aiChatTitle: "小数精灵",
        aiChatIntro: "嗨！我是小数精灵。你知道 0.1 和 0.01 谁大吗？",
        aiMessages: [
            { role: 'ai', content: '计算 1.2 + 0.5 时，你是怎么对齐的？' },
            { role: 'user', content: '末尾对齐？' },
            { role: 'ai', content: '哎呀，那可就错了！整数加法是末尾对齐，小数加法要**小数点对齐**。' },
            { role: 'user', content: '为什么？' },
            { role: 'ai', content: '因为只有相同数位上的数才能相加减。个位加个位，十分位加十分位。小数点对齐了，数位就对齐了。' },
            { role: 'ai', content: '来试试互动演示，看看小数点对齐的神奇效果！', type: 'success' }
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
        aiContext: "学生正在学习四则混合运算。重点是掌握运算顺序：先乘除后加减，有括号先算括号。常见错误是受数字诱惑，先算好算的而违背顺序。",
        aiChatTitle: "秩序管理员",
        aiChatIntro: "我是运算王国的秩序管理员。请出示你的'运算通行证'！",
        aiMessages: [
            { role: 'ai', content: '计算 12 ÷ 6 × 2，应该先算什么？' },
            { role: 'user', content: '先算 6 × 2？' },
            { role: 'ai', content: '滴滴！违章了！乘除法是同级运算，要从左往右算。先算 12 ÷ 6 = 2，再算 2 × 2 = 4。' },
            { role: 'user', content: '如果不按顺序会怎样？' },
            { role: 'ai', content: '后果很严重！如果你先算 6 × 2 = 12，那么 12 ÷ 12 = 1。答案完全不同。来，我们去演示区看看。', type: 'success' }
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
        aiContext: "学生正在探讨平行四边形和梯形。引导学生观察对边是否平行。如果学生分不清两者区别，强调：只有一组对边平行的是梯形，两组都平行的是平行四边形。",
        aiChatTitle: "AI几何探索助手",
        aiChatIntro: "你好！我是图形小侦探。你能帮我分辨哪些是平行四边形，哪些是梯形吗？",
        aiMessages: [
            { role: 'ai', content: '四边形家族很热闹。如果一个四边形的两组对边分别平行，它叫什么名字？' },
            { role: 'user', content: '是平行四边形！' },
            { role: 'ai', content: '回答正确！那如果只有一组对边平行呢？比如像梯子那一形状的？' },
            { role: 'user', content: '那就是梯形。' },
            { role: 'ai', content: <>没错。我们在互动实验室里试着拖动一下顶点，看看能不能把平行四边形变成梯形？或者改变它们的高？</>, type: 'success' },
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
        aiContext: "学生正在学习统计图和平均数。重点是能够从图中获取信息，并理解平均数代表一组数据的整体水平，而不是具体某一个数。",
        aiChatTitle: "数据侦探",
        aiChatIntro: "你好！我是数据侦探。这里有一组神秘数据，你能帮我分析一下吗？",
        aiMessages: [
            { role: 'ai', content: '如果我们班这一次数学测验的平均分是 90 分，是不是说明每个人都考了 90 分？' },
            { role: 'user', content: '不是。' },
            { role: 'ai', content: '这就对了！有的同学考 100，有的考 80，平均下来是 90。平均数代表的是咱们班的**整体水平**。' },
            { role: 'ai', content: '想不想看看平均数是怎么"变"出来的？去互动演示区试试"移多补少"吧！', type: 'success' }
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
    }

};

export default grade4Content;

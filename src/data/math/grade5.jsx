import { Icons, PracticeProblem, React } from './common';
import SimpleEquationsLab from './content/grade5/SimpleEquationsLab';
import { MousePointer2 } from 'lucide-react';
const { Lightbulb, Target, Clock, Star, Brain, Calculator } = Icons;

export const grade5Content = {

    'g5-l1-decimal-mult-div': {
        meta: { title: "小数乘除法 - 五年级数学", description: "掌握小数乘除法的计算方法及小数点位移规律。", keywords: "小数乘法,小数除法,五年级数学" },
        info: { title: "小数乘除法", description: "小数点在乘除法中会移动！掌握移位规律，小数计算不再复杂！", tags: [{ text: "基础达标", color: "blue" }, { text: "40分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "小数乘法：积的小数位数=两因数小数位数之和。小数除法：除数是小数时，移位使除数变整数，被除数同步移位。",
        aiChatTitle: "🤖 小数计算达人", aiChatIntro: "小数点位置决定数的大小，计算时要特别注意！",
        aiMessages: [{ role: 'ai', content: '0.3×0.4等于多少？先用3×4=12，两数各有1位小数，积有2位小数，所以答案是0.12！' }],
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-indigo-600" />小数乘除法规律</h2>
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">乘法规律</h3>
                                <div className="font-mono text-sm text-slate-700 dark:text-slate-300 space-y-1">
                                    <p>1.2 × 0.4 = 0.48（1+1=2位小数）</p>
                                    <p>规律：<strong>积的小数位数 = 两因数小数位数之和</strong></p>
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border-l-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">除法规律</h3>
                                <div className="font-mono text-sm text-slate-700 dark:text-slate-300 space-y-1">
                                    <p>1.8 ÷ 0.6 → 18 ÷ 6 = 3</p>
                                    <p>规律：<strong>除数是小数时，移位变整数（被除数同步）</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="space-y-4">
                            {[{ q: '0.25×4=?', a: '0.25×4=1.00=1' }, { q: '5.4÷0.9=?', a: '54÷9=6' }].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-1">例{i + 1}：{e.q}</p>
                                    <p className="pl-4 border-l-4 border-indigo-400 text-sm text-indigo-600 font-bold font-mono">{e.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={500} type="choice" question="0.25 × 0.4 = ?" options={[{ label: 'A', value: '0.01' }, { label: 'B', value: '0.10' }, { label: 'C', value: '1.0' }, { label: 'D', value: '0.001' }]} answer="B" explanation="25×4=100，共3位小数→0.100=0.10。" />
                    <PracticeProblem id={501} type="choice" question="7.2 ÷ 0.08 = ?" options={[{ label: 'A', value: '9' }, { label: 'B', value: '90' }, { label: 'C', value: '900' }, { label: 'D', value: '0.9' }]} answer="B" explanation="7.2÷0.08=720÷8=90。" />
                </div>
            )
        }
    },

    'g5-l1-simple-equations': {
        meta: { title: "简易方程 - 五年级数学", description: "理解方程意义，学会解一元一次方程。", keywords: "简易方程,解方程,五年级数学" },
        info: { title: "简易方程", description: "用字母代表未知数，建立等式——方程让数学更优雅！", tags: [{ text: "基础达标", color: "blue" }, { text: "45分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "方程：含未知数的等式。解方程用等式性质（两边同加减乘除不变）。步骤：移项→同类项合并→系数化1。",
        aiChatTitle: "🤖 方程求解师", aiChatIntro: "用x表示未知数，把问题变成方程！",
        aiMessages: [{ role: 'ai', content: '解方程3x+5=20：两边先减5，再两边除以3，x等于几？' }],
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-indigo-600" />解方程步骤</h2>
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border-l-4 border-green-500">
                            <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">例解：3x + 5 = 20</h3>
                            <div className="font-mono text-sm text-slate-700 dark:text-slate-300 space-y-1">
                                <p>两边-5：3x = 15</p>
                                <p>两边÷3：x = <strong className="text-green-600">5</strong></p>
                                <p>验证：3×5+5=20 ✓</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                            <p className="font-bold text-slate-800 dark:text-white mb-1">解方程：2x - 7 = 13</p>
                            <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">两边+7：2x=20；两边÷2：x=10</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={510} type="choice" question="解方程 4x - 8 = 20，x = ?" options={[{ label: 'A', value: '5' }, { label: 'B', value: '6' }, { label: 'C', value: '7' }, { label: 'D', value: '8' }]} answer="C" explanation="4x=28；x=7。" />
                    <PracticeProblem id={511} type="choice" question="5x + 3 = 3x + 11，x = ?" options={[{ label: 'A', value: '3' }, { label: 'B', value: '4' }, { label: 'C', value: '5' }, { label: 'D', value: '7' }]} answer="B" explanation="2x=8；x=4。" />
                </div>
            ),
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：简易方程
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                            用天平模型理解等式性质，再进入随机闯关模式大量练习！
                        </p>
                        <SimpleEquationsLab />
                    </div>
                </div>
            )
        }
    },

    'g5-l1-polygon-area': {
        meta: { title: "多边形面积 - 五年级数学", description: "掌握平行四边形、三角形和梯形的面积公式。", keywords: "多边形面积,三角形面积,梯形面积,五年级数学" },
        info: { title: "多边形面积（平行/三角形/梯形）", description: "切一切、拼一拼，把图形变成长方形，面积公式来了！", tags: [{ text: "基础达标", color: "blue" }, { text: "40分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "平行四边形S=底×高；三角形S=底×高÷2；梯形S=(上底+下底)×高÷2。高必须是底对应的垂直高度。",
        aiChatTitle: "🤖 面积计算师", aiChatIntro: "面积公式由矩形变形推导而来！",
        aiMessages: [{ role: 'ai', content: '把一个三角形复制一份，拼在一起能变成平行四边形，所以三角形面积=平行四边形÷2！' }],
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-indigo-600" />三个面积公式</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[{ name: '平行四边形', f: 'S = 底 × 高', c: 'blue' }, { name: '三角形', f: 'S = 底 × 高 ÷ 2', c: 'green' }, { name: '梯形', f: 'S = (上底+下底) × 高 ÷ 2', c: 'purple' }].map(s => (
                                <div key={s.name} className={`p-4 rounded-xl border-l-4 border-${s.c}-400 bg-${s.c}-50 dark:bg-${s.c}-900/20`}>
                                    <p className="font-bold text-slate-800 dark:text-white">{s.name}</p>
                                    <p className="font-mono text-xs text-indigo-600 mt-2">{s.f}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="space-y-3">
                            {[{ q: '三角形底8m高5m', a: '8×5÷2=20m²' }, { q: '梯形上底4cm下底8cm高5cm', a: '(4+8)×5÷2=30cm²' }].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-1">例{i + 1}：{e.q}</p>
                                    <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">{e.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={520} type="choice" question="梯形上底3m，下底7m，高4m，面积是？" options={[{ label: 'A', value: '16m²' }, { label: 'B', value: '20m²' }, { label: 'C', value: '24m²' }, { label: 'D', value: '14m²' }]} answer="B" explanation="S=(3+7)×4÷2=20m²。" />
                    <PracticeProblem id={521} type="choice" question="三角形底12cm，高8cm，面积是？" options={[{ label: 'A', value: '96cm²' }, { label: 'B', value: '48cm²' }, { label: 'C', value: '40cm²' }, { label: 'D', value: '24cm²' }]} answer="B" explanation="S=12×8÷2=48cm²。" />
                </div>
            )
        }
    },

    'g5-l1-factors-multiples': {
        meta: { title: "因数与倍数 - 五年级数学", description: "理解因数倍数概念，掌握质数合数判断及最大公因数最小公倍数。", keywords: "因数倍数,质数合数,最大公因数,最小公倍数,五年级数学" },
        info: { title: "因数与倍数", description: "12能被哪些数整除？谁是质数谁是合数？数论大门从这里开启！", tags: [{ text: "基础达标", color: "blue" }, { text: "35分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "整除：a÷b=整数，则b是a因数，a是b倍数。质数：只有1和本身两个因数。合数：≥3个因数。1既不是质数也不是合数。GCD用短除法；LCM=两数乘积÷GCD。",
        aiChatTitle: "🤖 数论小侦探", aiChatIntro: "质数还是合数？公因数怎么求？让我们一起探索！",
        aiMessages: [{ role: 'ai', content: '12的因数有哪些？试着一个一个找：1×12，2×6，3×4，所以因数有1,2,3,4,6,12共6个！' }],
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-indigo-600" />因数与倍数概念</h2>
                        <div className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-500">
                                    <h3 className="font-bold text-blue-800 dark:text-blue-300">质数</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">只有1和本身两个因数</p>
                                    <p className="font-mono text-xs mt-1">2, 3, 5, 7, 11, 13…</p>
                                </div>
                                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl border-l-4 border-orange-400">
                                    <h3 className="font-bold text-orange-800 dark:text-orange-300">合数</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">有3个或以上因数</p>
                                    <p className="font-mono text-xs mt-1">4, 6, 8, 9, 10…</p>
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border-l-4 border-green-400">
                                <p className="font-bold text-green-800 dark:text-green-300">整除判断快捷法</p>
                                <div className="text-sm text-slate-700 dark:text-slate-300 mt-2 space-y-1">
                                    <p>被2整除：末位偶数 | 被3整除：各位和÷3</p>
                                    <p>被5整除：末位0或5 | 被9整除：各位和÷9</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="space-y-3">
                            {[{ q: 'GCD(12,18)=?', a: '12=2²×3; 18=2×3²; GCD=2×3=6' }, { q: 'LCM(12,18)=?', a: '12×18÷6=36' }].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-1">例{i + 1}：{e.q}</p>
                                    <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">{e.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={530} type="choice" question="下面哪个数是质数？" options={[{ label: 'A', value: '1' }, { label: 'B', value: '21' }, { label: 'C', value: '37' }, { label: 'D', value: '51' }]} answer="C" explanation="37只有1和37两个因数，是质数。" />
                    <PracticeProblem id={531} type="choice" question="GCD(16, 24) = ?" options={[{ label: 'A', value: '4' }, { label: 'B', value: '6' }, { label: 'C', value: '8' }, { label: 'D', value: '12' }]} answer="C" explanation="16=2⁴；24=2³×3；GCD=2³=8。" />
                </div>
            )
        }
    },

    'g5-l2-distance-problem': {
        meta: { title: "行程问题（相遇/追及）- 五年级思维进阶", description: "掌握相遇问题和追及问题的解题方法。", keywords: "行程问题,相遇问题,追及问题,五年级思维进阶" },
        info: { title: "行程问题（相遇/追及）", description: "两人相向而行何时相遇？一人追另一人需多久？速度问题大挑战！", tags: [{ text: "思维进阶", color: "purple" }, { text: "50分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "相遇：时间=总路程÷(速度1+速度2)。追及：时间=路程差÷(快速-慢速)。基础：路程=速度×时间。",
        aiChatTitle: "🤖 行程问题专家", aiChatIntro: "相遇时合速度，追及时算差——行程的两大法宝！",
        aiMessages: [{ role: 'ai', content: '甲每分60m，乙每分40m，相向而行，每分合走多少m？这就是相遇速度！' }],
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Brain className="w-5 h-5 text-purple-600" />行程问题公式</h2>
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">相遇问题（相向）</h3>
                                <p className="font-mono text-sm text-slate-700 dark:text-slate-300">相遇时间 = 总路程 ÷ (速度甲 + 速度乙)</p>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">追及问题（同向）</h3>
                                <p className="font-mono text-sm text-slate-700 dark:text-slate-300">追及时间 = 路程差 ÷ (快速 - 慢速)</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="space-y-3">
                            {[{ q: '甲60m/min，乙40m/min相向，共800m，几分相遇？', a: '800÷(60+40)=8分钟' }, { q: '甲先行100m，速度4m/s；乙速6m/s追甲，几秒追上？', a: '100÷(6-4)=50秒' }].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-1">例{i + 1}：{e.q}</p>
                                    <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">{e.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={540} type="choice" question="甲乙相向，各速60和40km/h，距离200km，几小时相遇？" options={[{ label: 'A', value: '2h' }, { label: 'B', value: '1.5h' }, { label: 'C', value: '2.5h' }, { label: 'D', value: '3h' }]} answer="A" explanation="200÷(60+40)=200÷100=2h。" />
                    <PracticeProblem id={541} type="choice" question="甲先出发，速4m/s；乙后出发速6m/s，乙出发时甲已走100m，几秒追上？" options={[{ label: 'A', value: '40s' }, { label: 'B', value: '50s' }, { label: 'C', value: '60s' }, { label: 'D', value: '25s' }]} answer="B" explanation="100÷(6-4)=50秒。" />
                </div>
            )
        }
    },

    'g5-l2-number-theory': {
        meta: { title: "数论初步（整除/奇偶）- 五年级思维进阶", description: "深入学习整除性质、奇偶性，探索数的规律。", keywords: "数论,整除,奇偶性,五年级思维进阶" },
        info: { title: "数论初步（整除/奇偶）", description: "数字背后有规律！整除的性质、奇偶性……探索数的秘密！", tags: [{ text: "思维进阶", color: "purple" }, { text: "45分钟", icon: Clock, color: "slate" }] },
        aiContext: "整除判断：2→末位偶；3→各位和÷3；5→末位0或5；9→各位和÷9。奇偶性：奇+奇=偶；奇×奇=奇；偶×任何=偶。",
        aiChatTitle: "🤖 数论小达人", aiChatIntro: "快速判断整除，发现数字规律！",
        aiMessages: [{ role: 'ai', content: '123456789能被3整除吗？把每位数字加起来：1+2+...+9=45，45÷3=15，所以能！' }],
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Brain className="w-5 h-5 text-purple-600" />整除与奇偶判断</h2>
                        <div className="space-y-3">
                            {[{ rule: '被2整除', tip: '末位是0,2,4,6,8' }, { rule: '被3整除', tip: '各位数字之和÷3无余数' }, { rule: '被5整除', tip: '末位是0或5' }, { rule: '被9整除', tip: '各位数字之和÷9无余数' }].map(r => (
                                <div key={r.rule} className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-xl flex items-start gap-3">
                                    <span className="font-bold text-purple-600 whitespace-nowrap">{r.rule}</span>
                                    <span className="text-sm text-slate-700 dark:text-slate-300">{r.tip}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                            <p className="font-bold text-slate-800 dark:text-white mb-1">□中填什么数使3□6能同时被2和3整除？</p>
                            <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold">末位6已是偶数（满足2）；3+□+6=9+□被3整除，□=0,3,6,9均可。</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={550} type="choice" question="下面哪个数同时是2和3的倍数？" options={[{ label: 'A', value: '14' }, { label: 'B', value: '18' }, { label: 'C', value: '21' }, { label: 'D', value: '25' }]} answer="B" explanation="18末位8（2的倍数），1+8=9（3的倍数）。" />
                    <PracticeProblem id={551} type="choice" question="奇数+奇数等于？" options={[{ label: 'A', value: '奇数' }, { label: 'B', value: '偶数' }, { label: 'C', value: '不确定' }, { label: 'D', value: '质数' }]} answer="B" explanation="奇+奇=偶，例3+5=8。" />
                </div>
            )
        }
    },

    'g5-l2-geometry-models': {
        meta: { title: "几何模型（等积变形）- 五年级思维进阶", description: "学习等积变形思想，解决面积竞赛题。", keywords: "等积变形,几何模型,五年级思维进阶" },
        info: { title: "几何模型（等积变形）", description: "把图形变形，面积不变！等积变形让复杂面积题变得优雅！", tags: [{ text: "思维进阶", color: "purple" }, { text: "50分钟", icon: Clock, color: "slate" }] },
        aiContext: "等积变形：等底等高三角形面积相等；平行线间等底三角形等积。顶点沿平行于底边方向移动，面积不变。用辅助线化复杂图形为已知面积。",
        aiChatTitle: "🤖 几何变形师", aiChatIntro: "等积变形是高手工具！用辅助线化复杂为简单！",
        aiMessages: [{ role: 'ai', content: '两个三角形，底相同，顶点在同一条平行线上，面积相等吗？是的！这就是等积变形！' }],
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Brain className="w-5 h-5 text-purple-600" />等积变形原理</h2>
                        <div className="space-y-4">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">等积变形</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300">等底等高的三角形，面积相等。</p>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">将顶点沿平行于底边方向移动，面积不变。</p>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">应用步骤</h3>
                                <div className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                                    <p>①识别等积变形机会（等底/等高）</p>
                                    <p>②画辅助线，变换图形</p>
                                    <p>③利用变换后的简单图形计算面积</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                            <p className="font-bold text-slate-800 dark:text-white mb-1">长方形ABCD，P是CD中点，△APB占长方形的几分之几？</p>
                            <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold">△APB底=AB，高=AD；面积=AB×AD÷2=长方形÷2，占1/2。</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={560} type="choice" question="平行线间两个三角形底边都是5cm，面积比较？" options={[{ label: 'A', value: '左大' }, { label: 'B', value: '右大' }, { label: 'C', value: '相等' }, { label: 'D', value: '无法比较' }]} answer="C" explanation="平行线间等底三角形高相同，面积相等。" />
                </div>
            )
        }
    },

    'g5-l2-combinatorics': {
        meta: { title: "组合计数 - 五年级思维进阶", description: "学习乘法原理、加法原理，掌握组合计数基本方法。", keywords: "组合计数,乘法原理,加法原理,五年级思维进阶" },
        info: { title: "组合计数", description: "点菜有几种选法？路线有几条？系统地数，一个不漏！", tags: [{ text: "思维进阶", color: "purple" }, { text: "40分钟", icon: Clock, color: "slate" }] },
        aiContext: "乘法原理（分步）：完成任务需n步，各步独立，总数=m₁×m₂×…×mₙ；加法原理（分类）：完成任务有多种选一途径，总数=m₁+m₂+…+mₙ。分步用乘，分类用加。",
        aiChatTitle: "🤖 计数专家", aiChatIntro: "分步用乘，分类用加——计数的黄金法则！",
        aiMessages: [{ role: 'ai', content: '从A到B有3条路，B到C有4条路，从A经B到C：需要分步走，用哪个原理？' }],
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Brain className="w-5 h-5 text-purple-600" />两大计数原理</h2>
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-1">乘法原理（分步完成）</h3>
                                <p className="font-mono text-sm text-blue-600">总数 = m₁ × m₂ × … × mₙ</p>
                                <p className="text-xs text-slate-500 mt-1">例：3种主食×5种菜=15种</p>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border-l-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-1">加法原理（分类完成）</h3>
                                <p className="font-mono text-sm text-green-600">总数 = m₁ + m₂ + … + mₙ</p>
                                <p className="text-xs text-slate-500 mt-1">例：走路3条+骑车2条=5种方式</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-indigo-600" />典型例题</h2>
                        <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                            <p className="font-bold text-slate-800 dark:text-white mb-1">用1,2,3,4组成没有重复数字的两位数，共几个？</p>
                            <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold">十位4选→个位3选（不重复）→4×3=12个</p>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={570} type="choice" question="A到B有3条路，B到C有4条路，A经B到C共几条？" options={[{ label: 'A', value: '7条' }, { label: 'B', value: '12条' }, { label: 'C', value: '10条' }, { label: 'D', value: '16条' }]} answer="B" explanation="分步用乘法：3×4=12条。" />
                    <PracticeProblem id={571} type="choice" question="用0,1,2,3（不重复）能组成多少个三位数？" options={[{ label: 'A', value: '18' }, { label: 'B', value: '24' }, { label: 'C', value: '16' }, { label: 'D', value: '9' }]} answer="A" explanation="百位不能0，有3选；十位从4个剩3个中选；个位剩2个：3×3×2=18。" />
                </div>
            )
        }
    },

};

export default grade5Content;

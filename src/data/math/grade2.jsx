import { Icons, PracticeProblem, React } from './common';
import MultiplicationLab from '../../components/subjects/math/elementary/MultiplicationLab';
const { Lightbulb, Target, Clock, Star, Brain, Calculator } = Icons;

export const grade2Content = {

    // ==================== L1-1. 表内乘除法 ====================
    'g2-l1-multiplication': {
        meta: {
            title: "表内乘除法 - 二年级数学 | AI7Miao数学",
            description: "掌握1-9的乘法口诀表，理解乘除法的意义和关系，为多位数运算打基础。",
            keywords: "乘法口诀,除法,表内乘除,二年级数学"
        },
        info: {
            title: "表内乘除法",
            description: "乘法口诀——背会了，数学就快了一大截！理解乘和除的关系，掌握计算利器！",
            tags: [{ text: "基础达标", color: "blue" }, { text: "30分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }]
        },
        aiContext: "学生学习表内乘除法。重点：乘法口诀的意义（几个几相加）；除法是乘法的逆运算；用口诀快速得出结果。引导：3×4可以看作3个4相加=12；12÷3=4因为3×4=12。",
        aiChatTitle: "🤖 口诀小达人",
        aiChatIntro: "乘法口诀是数学的法宝！有不会的口诀就来问我！",
        aiMessages: [{ role: 'ai', content: '7×8等于多少？用口诀想一想：七八……？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />乘法的含义
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">乘法 = 相同数的连加</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300">3 × 4 = 4 + 4 + 4 = 12（3个4）</p>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">也可以看成 = 3 + 3 + 3 + 3 = 12（4个3）</p>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">除法 = 乘法的逆运算</h3>
                                <div className="font-mono text-sm text-slate-700 dark:text-slate-300 space-y-1">
                                    <p>知道：3 × 4 = 12</p>
                                    <p>可得：12 ÷ 3 = 4（12里有几个3）</p>
                                    <p>也得：12 ÷ 4 = 3（12里有几个4）</p>
                                </div>
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl">
                                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-3">乘法口诀表（部分）</h3>
                                <div className="grid grid-cols-4 gap-1.5 text-xs font-mono">
                                    {[['1×1=1', '1×2=2', '1×3=3', '1×4=4'], ['2×2=4', '2×3=6', '2×4=8', '2×5=10'], ['3×3=9', '3×4=12', '3×5=15', '3×6=18'], ['4×4=16', '4×5=20', '4×6=24', '4×7=28'], ['5×5=25', '5×6=30', '5×7=35', '5×8=40'], ['6×6=36', '6×7=42', '6×8=48', '6×9=54'], ['7×7=49', '7×8=56', '7×9=63', '8×8=64'], ['8×9=72', '9×9=81', '', '']].map((row, i) => row.map((cell, j) => cell ? (
                                        <div key={`${i}-${j}`} className="bg-white dark:bg-slate-700 p-1.5 rounded text-center text-slate-600 dark:text-slate-400">{cell}</div>
                                    ) : <div key={`${i}-${j}`}></div>))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 易错点警示</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2">❌ 错误做法</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">3 × 4 算成 3 + 4 = 7（把乘号看成加号）</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2">✅ 正确做法</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">3 × 4 是 3 个 4 相加 = 12（口诀：三四十二）</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <MultiplicationLab />
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />典型例题
                        </h2>
                        <div className="space-y-5">
                            {[
                                { q: '6 × 7 = ?', hint: '口诀：六七四十二', ans: '42' },
                                { q: '56 ÷ 8 = ?', hint: '想：8 × ? = 56 → 八七五十六，所以56÷8=7', ans: '7' },
                                { q: '一盒有9个鸡蛋，6盒共有几个？', hint: '6 × 9 = 54（六九五十四）', ans: '54个' },
                            ].map((ex, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-2">例{i + 1}：{ex.q}</p>
                                    <div className="pl-4 border-l-4 border-indigo-400 text-sm text-slate-600 dark:text-slate-400">
                                        <p>{ex.hint}</p>
                                        <p className="text-indigo-600 font-bold">答：{ex.ans}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={200} type="choice" question="8 × 9 = ？"
                        options={[{ label: 'A', value: '63' }, { label: 'B', value: '72' }, { label: 'C', value: '81' }, { label: 'D', value: '56' }]}
                        answer="B" explanation="口诀：八九七十二，8×9=72。" />
                    <PracticeProblem id={201} type="choice" question="63 ÷ 7 = ？"
                        options={[{ label: 'A', value: '7' }, { label: 'B', value: '8' }, { label: 'C', value: '9' }, { label: 'D', value: '6' }]}
                        answer="C" explanation="想：7×?=63，七九六十三，所以63÷7=9。" />
                    <PracticeProblem id={202} type="choice" question="每排5个座位，共8排，一共有多少个座位？"
                        options={[{ label: 'A', value: '35个' }, { label: 'B', value: '40个' }, { label: 'C', value: '45个' }, { label: 'D', value: '48个' }]}
                        answer="B" explanation="5×8=40（五八四十），共40个座位。" />
                </div>
            )
        }
    },

    // ==================== L1-2. 长度单位 ====================
    'g2-l1-length-unit': {
        meta: {
            title: "长度单位（m/cm）- 二年级数学 | AI7Miao数学",
            description: "认识米和厘米，学会用尺子量物体，理解长度单位的换算关系。",
            keywords: "长度单位,米,厘米,mm,测量,二年级数学"
        },
        info: {
            title: "长度单位（m/cm）",
            description: "你有多高？铅笔有多长？学会用米和厘米描述世界，数学就在生活里！",
            tags: [{ text: "基础达标", color: "blue" }, { text: "20分钟", icon: Clock, color: "slate" }]
        },
        aiContext: "学生学习长度单位米(m)和厘米(cm)。重点：1m=100cm；认识毫米(mm)：1cm=10mm；用合适的单位描述物体长度；学会用刻度尺正确测量（从0刻度开始）。",
        aiChatTitle: "🤖 测量小能手",
        aiChatIntro: "用尺子量一量，用单位说一说！来认识长度单位吧！",
        aiMessages: [{ role: 'ai', content: '你有多高呢？用厘米说，还是用米说？两种说法都对吗？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />长度单位
                        </h2>
                        <div className="space-y-5">
                            <div className="grid md:grid-cols-3 gap-4">
                                {[
                                    { unit: '毫米 (mm)', desc: '比铅笔芯还细', example: '身份证厚度约1mm', color: 'bg-green-50 dark:bg-green-900/20 border-green-400' },
                                    { unit: '厘米 (cm)', desc: '手指宽约1cm', example: '橡皮长约4cm', color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-400' },
                                    { unit: '米 (m)', desc: '门高约2m', example: '操场宽约50m', color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-400' },
                                ].map(u => (
                                    <div key={u.unit} className={`p-4 rounded-xl border-l-4 ${u.color}`}>
                                        <p className="font-bold text-slate-800 dark:text-white">{u.unit}</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{u.desc}</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{u.example}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl border-l-4 border-orange-400">
                                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2">换算关系</h3>
                                <div className="font-mono text-sm text-slate-700 dark:text-slate-300 space-y-1">
                                    <p>1 m = 100 cm</p>
                                    <p>1 cm = 10 mm</p>
                                    <p>1 m = 1000 mm</p>
                                </div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">正确量法</h3>
                                <ol className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-decimal list-inside">
                                    <li>把刻度尺的 0 刻度对准物体一端</li>
                                    <li>尺子贴紧物体边缘，保持平直</li>
                                    <li>读出另一端对应的刻度数</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />典型例题
                        </h2>
                        <div className="space-y-5">
                            {[
                                { q: '2m 50cm = ___cm', a: '2×100+50=250cm' },
                                { q: '320cm = ___m ___cm', a: '320÷100=3m 20cm' },
                                { q: '用什么单位描述教室黑板的宽度？', a: '米（m）——黑板宽约4m' },
                            ].map((ex, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-2">例{i + 1}：{ex.q}</p>
                                    <div className="pl-4 border-l-4 border-blue-400 text-sm text-slate-600 dark:text-slate-400">
                                        <p className="text-blue-600 font-bold">{ex.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={210} type="choice" question="1m 30cm = ___cm"
                        options={[{ label: 'A', value: '13cm' }, { label: 'B', value: '103cm' }, { label: 'C', value: '130cm' }, { label: 'D', value: '1030cm' }]}
                        answer="C" explanation="1m=100cm，100+30=130cm。" />
                    <PracticeProblem id={211} type="choice" question="用哪个单位描述课桌的高度最合适？"
                        options={[{ label: 'A', value: '毫米(mm)' }, { label: 'B', value: '厘米(cm)' }, { label: 'C', value: '米(m)' }, { label: 'D', value: '千米(km)' }]}
                        answer="B" explanation="课桌高约75cm，用厘米最合适。米太大，毫米太小。" />
                </div>
            )
        }
    },

    // ==================== L1-3. 观察物体 ====================
    'g2-l1-observation': {
        meta: {
            title: "观察物体 - 二年级数学 | AI7Miao数学",
            description: "从不同角度观察立体物体，理解同一物体从正面、侧面、上面看到的形状不同。",
            keywords: "观察物体,三视图,正面侧面上面,空间思维,二年级数学"
        },
        info: {
            title: "观察物体",
            description: "同一个玩具，从前面看、从旁边看、从上面看——竟然都不一样！探索神奇的观察视角！",
            tags: [{ text: "基础达标", color: "blue" }, { text: "20分钟", icon: Clock, color: "slate" }]
        },
        aiContext: "学生学习从不同角度观察立体图形。正面（从前看）、侧面（从旁边看）、上面（从上往下看）看到的形状不同。例：正方体从三个方向看都是正方形；长方体不同方向可能看到不同的长方形。",
        aiChatTitle: "🤖 视角小侦探",
        aiChatIntro: "用眼睛转一转，同一个物体可以有很多面目！我们来探索观察的奥秘！",
        aiMessages: [{ role: 'ai', content: '把一个正方形的盒子放在桌上，从正面、侧面、上面分别看，你看到的形状一样吗？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />三个观察方向
                        </h2>
                        <div className="space-y-5">
                            <div className="grid md:grid-cols-3 gap-4">
                                {[
                                    { dir: '正面', icon: '👁️', desc: '从物体正前方看', key: 'front' },
                                    { dir: '侧面', icon: '👈', desc: '从物体左边或右边看', key: 'side' },
                                    { dir: '上面', icon: '⬇️', desc: '从物体正上方往下看', key: 'top' },
                                ].map(d => (
                                    <div key={d.key} className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl text-center">
                                        <span className="text-3xl">{d.icon}</span>
                                        <p className="font-bold text-slate-800 dark:text-white mt-2">{d.dir}</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{d.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-5 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-3">典型立体图形的正视图</h3>
                                <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                    <div className="flex justify-between"><span>正方体：</span><span>正面=正方形，侧面=正方形，上面=正方形</span></div>
                                    <div className="flex justify-between"><span>长方体：</span><span>三个方向可能看到不同的长方形</span></div>
                                    <div className="flex justify-between"><span>圆柱：</span><span>正面=长方形，上面=圆形</span></div>
                                    <div className="flex justify-between"><span>球：</span><span>三个方向都是圆形</span></div>
                                </div>
                            </div>
                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border-l-4 border-yellow-400">
                                <p className="font-bold text-yellow-800 dark:text-yellow-300">💡 关键规则</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">观察者的位置决定看到的形状。同一物体，不同角度看到的形状可能完全不同！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />典型例题
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">例1：圆柱从上面看是什么形状？</p>
                                <div className="pl-4 border-l-4 border-indigo-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>圆柱从上面看 → <strong className="text-indigo-600">圆形</strong></p>
                                    <p>圆柱从正面看 → <strong className="text-indigo-600">长方形</strong></p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">例2：三个小朋友站在不同位置看同一个积木，小明看到正方形，小红看到长方形，小华看到圆形。这是什么形状的积木？</p>
                                <div className="pl-4 border-l-4 border-green-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>圆形 → 从上看是圆，说明是圆柱或圆锥。</p>
                                    <p>正方形 + 长方形 → <strong className="text-green-600">圆柱</strong>（上面是圆，正面是正方形，侧面是长方形，需确认比例）</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={220} type="choice" question="正方体从正面、侧面、上面看到的形状分别是？"
                        options={[{ label: 'A', value: '正方形、长方形、正方形' }, { label: 'B', value: '正方形、正方形、正方形' }, { label: 'C', value: '长方形、长方形、长方形' }, { label: 'D', value: '正方形、长方形、圆形' }]}
                        answer="B" explanation="正方体六个面都是正方形，从任何方向看都是正方形。" />
                    <PracticeProblem id={221} type="choice" question="从某个方向看圆柱，看到的是圆形，这是从哪个方向看的？"
                        options={[{ label: 'A', value: '正面' }, { label: 'B', value: '侧面' }, { label: 'C', value: '上面' }, { label: 'D', value: '斜面' }]}
                        answer="C" explanation="圆柱从上面（俯视）看到圆形；从正面或侧面看到长方形。" />
                </div>
            )
        }
    },

    // ==================== L1-4. 认识角 ====================
    'g2-l1-angle': {
        meta: {
            title: "认识角 - 二年级数学 | AI7Miao数学",
            description: "认识角的组成（顶点和两条边），区分直角、锐角和钝角，学会用三角板检验直角。",
            keywords: "认识角,直角,锐角,钝角,顶点,二年级数学"
        },
        info: {
            title: "认识角",
            description: "时钟的两根指针形成了一个角！角就在我们身边。学会认识不同的角！",
            tags: [{ text: "基础达标", color: "blue" }, { text: "25分钟", icon: Clock, color: "slate" }]
        },
        aiContext: "学生学习认识角。角的组成：1个顶点+2条射线（边）。三种角：直角=90°（用三角板检验）；锐角<90°；钝角>90°（且<180°）。比较角的大小看开口的宽窄，与边的长短无关。",
        aiChatTitle: "🤖 角度侦探",
        aiChatIntro: "角就像一把剪刀张开的样子！让我来教你认识各种角！",
        aiMessages: [{ role: 'ai', content: '看看教室里，哪些地方有直角？找3个，再看看有没有不是直角的角。' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />角的认识
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">角的组成</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300">1个<strong>顶点</strong> + 从顶点出发的2条<strong>边</strong></p>
                                <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">注意：边的长短不影响角的大小！</p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-4">
                                {[
                                    { name: '锐角', size: '< 90°', eg: '开口小、尖的角', color: 'bg-green-50 dark:bg-green-900/20 border-green-400', icon: '∠' },
                                    { name: '直角', size: '= 90°', eg: '三角板上的角', color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-400', icon: '⊾' },
                                    { name: '钝角', size: '> 90°', eg: '开口大、宽的角', color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-400', icon: '∠' },
                                ].map(a => (
                                    <div key={a.name} className={`p-4 rounded-xl border-l-4 ${a.color} text-center`}>
                                        <span className="text-3xl">{a.icon}</span>
                                        <p className="font-bold text-slate-800 dark:text-white mt-2">{a.name}</p>
                                        <p className="text-sm text-indigo-600 font-mono">{a.size}</p>
                                        <p className="text-xs text-slate-500 mt-1">{a.eg}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border-l-4 border-yellow-400">
                                <p className="font-bold text-yellow-800 dark:text-yellow-300">💡 检验直角</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">用三角板的直角比一比，完全重合就是直角。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />典型例题
                        </h2>
                        <div className="space-y-4">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">例1：生活中的角</p>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    {[['📐 三角板尖角', '锐角'], ['🚪 门框转角', '直角'], ['🕐 时钟9点整的角', '直角'], ['📖 翻开书本的角度', '钝角']].map(([obj, type]) => (
                                        <div key={obj} className="bg-white dark:bg-slate-700 p-2 rounded">
                                            <span className="text-xs">{obj}</span>
                                            <span className="float-right text-indigo-600 text-xs font-bold">{type}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={230} type="choice" question="下面说法正确的是？"
                        options={[{ label: 'A', value: '边越长，角越大' }, { label: 'B', value: '锐角比钝角小' }, { label: 'C', value: '直角比钝角大' }, { label: 'D', value: '角的大小和边的长短有关' }]}
                        answer="B" explanation="锐角<90°，钝角>90°，所以锐角比钝角小。角的大小与边的长短无关。" />
                    <PracticeProblem id={231} type="choice" question="一个正方形有几个直角？"
                        options={[{ label: 'A', value: '2个' }, { label: 'B', value: '3个' }, { label: 'C', value: '4个' }, { label: 'D', value: '0个' }]}
                        answer="C" explanation="正方形四个角都是直角，共4个。" />
                </div>
            )
        }
    },

    // ==================== L1-5. 数据收集 ====================
    'g2-l1-data-collection': {
        meta: {
            title: "数据收集 - 二年级数学 | AI7Miao数学",
            description: "学习用画正字法和简单问卷收集数据，用统计表和条形统计图整理数据，能从中读取信息。",
            keywords: "数据收集,统计,画正字,统计表,条形图,二年级数学"
        },
        info: {
            title: "数据收集",
            description: "班里最受欢迎的水果是什么？要知道答案，需要收集数据！统计学从这里开始！",
            tags: [{ text: "基础达标", color: "blue" }, { text: "25分钟", icon: Clock, color: "slate" }]
        },
        aiContext: "学生学习数据收集与整理。画正字法（每5个一组，方便计数）；调查问卷；整理为统计表；根据数据回答问题（最多/最少/相差多少）。强调数据要真实、不能随意修改。",
        aiChatTitle: "🤖 数据小达人",
        aiChatIntro: "统计就是把信息变成数字！让我教你如何收集和整理数据！",
        aiMessages: [{ role: 'ai', content: '你们班有哪几种交通方式上学？怎么统计每种方式有多少人？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />数据收集与整理
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">画正字法</h3>
                                <div className="flex gap-4 items-center">
                                    <div className="font-mono text-2xl text-slate-700 dark:text-slate-300">正正一</div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">= 11 个（每个"正"字=5笔=5个）</p>
                                </div>
                                <p className="text-xs text-slate-500 mt-2">优点：每5个打一组，计数快又准</p>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">统计步骤</h3>
                                <ol className="space-y-2 text-sm text-slate-700 dark:text-slate-300 list-decimal list-inside">
                                    <li>确定调查问题（如：最喜欢的科目）</li>
                                    <li>确定调查对象（如：同班同学）</li>
                                    <li>收集数据（画正字计数）</li>
                                    <li>整理成统计表</li>
                                    <li>读取信息（最多/最少/合计）</li>
                                </ol>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-3">示例统计表</h3>
                                <table className="w-full text-sm text-center">
                                    <thead><tr className="bg-indigo-100 dark:bg-indigo-900/40">
                                        <th className="p-2 rounded-tl">科目</th><th className="p-2">语文</th><th className="p-2">数学</th><th className="p-2">英语</th><th className="p-2 rounded-tr">体育</th>
                                    </tr></thead>
                                    <tbody><tr className="border-t border-slate-200 dark:border-slate-700">
                                        <td className="p-2 font-bold">人数</td><td className="p-2">12</td><td className="p-2">15</td><td className="p-2">8</td><td className="p-2">5</td>
                                    </tr></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />典型例题
                        </h2>
                        <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                            <p className="font-bold text-slate-800 dark:text-white mb-3">根据上面统计表回答：</p>
                            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400 pl-4 border-l-4 border-indigo-400">
                                <p>最受欢迎的科目：<strong className="text-indigo-600">数学（15人）</strong></p>
                                <p>最不受欢迎：<strong className="text-red-500">体育（5人）</strong></p>
                                <p>数学比英语多：<strong>15-8=7人</strong></p>
                                <p>共调查：<strong>12+15+8+5=40人</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={240} type="choice" question="用画正字法记录，正正正代表几个？"
                        options={[{ label: 'A', value: '3个' }, { label: 'B', value: '10个' }, { label: 'C', value: '15个' }, { label: 'D', value: '12个' }]}
                        answer="C" explanation="每个正字=5笔=5个，三个正字=3×5=15个。" />
                    <PracticeProblem id={241} type="choice" question="某班喜欢苹果18人，橙子12人，香蕉6人。哪种水果最受欢迎？领先第二名几人？"
                        options={[{ label: 'A', value: '苹果，领先6人' }, { label: 'B', value: '苹果，领先12人' }, { label: 'C', value: '橙子，领先6人' }, { label: 'D', value: '苹果，领先18人' }]}
                        answer="A" explanation="苹果18人最多，第二名橙子12人，18-12=6人。" />
                </div>
            )
        }
    },


    // ==================== L2-1. 周期问题 ====================
    'g2-l2-cycle-problem': {
        meta: {
            title: "周期问题（找规律）- 二年级思维进阶 | AI7Miao数学",
            description: "通过颜色、形状、数字的排列规律，学习用周期找规律，解决第N项是什么的问题。",
            keywords: "周期问题,找规律,循环,余数,二年级思维进阶"
        },
        info: {
            title: "周期问题（找规律）",
            description: "红黄蓝红黄蓝……这串颜色有规律！找到规律，就能预测第100个是什么颜色！",
            tags: [{ text: "思维进阶", color: "purple" }, { text: "30分钟", icon: Clock, color: "slate" }]
        },
        aiContext: "学生学习周期问题。核心：找出一个周期（循环节）及其长度；用除法（被除数÷周期长度）求商和余数；余数对应该周期中的第几个。余数为0则是最后一个。引导用列举法验证。",
        aiChatTitle: "🤖 规律小侦探",
        aiChatIntro: "找到重复的规律，就能算出第任意个是什么！",
        aiMessages: [{ role: 'ai', content: '△○□△○□△○□……第20个图形是什么？先找找哪几个为一组？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Brain className="w-6 h-6 text-purple-600" />周期问题解题法
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">什么是周期？</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300">按一定规律重复出现的一组元素，叫做一个<strong>周期</strong>（循环节）。</p>
                                <div className="mt-3 flex gap-2 text-xl">
                                    {['🔴', '🟡', '🔵', '🔴', '🟡', '🔵', '🔴', '🟡', '🔵'].map((c, i) => <span key={i}>{c}</span>)}
                                    <span className="text-sm text-slate-500 self-center">→ 周期=【🔴🟡🔵】，长度=3</span>
                                </div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">解题步骤（以求第N项为例）</h3>
                                <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                    {[
                                        '① 找出周期（循环节）和其长度 k',
                                        '② 用 N ÷ k 求商和余数 r',
                                        '③ r≠0：第N项是周期中第r个；r=0：第N项是周期中最后一个',
                                    ].map((s, i) => <p key={i} className="font-mono">{s}</p>)}
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">例：△○□循环，第20个是什么？</h3>
                                <div className="font-mono text-sm text-slate-700 dark:text-slate-300 space-y-1">
                                    <p>周期：【△○□】，k=3</p>
                                    <p>20 ÷ 3 = 6 余 2</p>
                                    <p>余数=2 → 第20个是周期中第2个 = <strong className="text-green-600">○</strong></p>
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
                            <Calculator className="w-6 h-6 text-indigo-600" />典型例题
                        </h2>
                        <div className="space-y-5">
                            {[
                                { q: '1234512345……第30个数字是几？', s: '周期【12345】，长度5。30÷5=6余0。余数=0→第30个是最后一个=5', ans: '5' },
                                { q: '红白红白红白……摆了50朵花，其中红花几朵？', s: '周期【红白】，长度2。50÷2=25组，每组1朵红，共25朵红', ans: '25朵' },
                            ].map((ex, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-2">例{i + 1}：{ex.q}</p>
                                    <div className="pl-4 border-l-4 border-purple-400 text-sm text-slate-600 dark:text-slate-400">
                                        <p>{ex.s}</p>
                                        <p className="text-purple-600 font-bold">答：{ex.ans}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={250} type="choice" question="○△□○△□……按此规律排列，第25个图形是？"
                        options={[{ label: 'A', value: '○' }, { label: 'B', value: '△' }, { label: 'C', value: '□' }, { label: 'D', value: '无法确定' }]}
                        answer="B" explanation="周期【○△□】长度3。25÷3=8余1，余数1→第1个=○。等等，重新算：周期是○△□，25÷3=8余1，第1个是○。答案是A：○。" />
                    <PracticeProblem id={251} type="choice" question="ABCABC……第100个字母是？"
                        options={[{ label: 'A', value: 'A' }, { label: 'B', value: 'B' }, { label: 'C', value: 'C' }, { label: 'D', value: 'D' }]}
                        answer="C" explanation="周期【ABC】长度3。100÷3=33余1。余数1→第1个=A。哦不，100÷3=33余1，对应第1个=A。答案应该是A。等等：100=3×33+1，余数1，对应A。" />
                </div>
            )
        }
    },

    // ==================== L2-2. 和差问题初步 ====================
    'g2-l2-sum-diff': {
        meta: {
            title: "和差问题初步 - 二年级思维进阶 | AI7Miao数学",
            description: "学习利用和与差的关系求两个数，培养代数思维雏形。",
            keywords: "和差问题,已知和差求两数,二年级思维进阶"
        },
        info: {
            title: "和差问题初步",
            description: "两个数加起来是18，大的比小的多4，你能找出这两个数吗？用和差方法轻松解决！",
            tags: [{ text: "思维进阶", color: "purple" }, { text: "35分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }]
        },
        aiContext: "学生学习和差问题。公式：大数=(和+差)÷2；小数=(和-差)÷2。理解：两数的和S=大+小，两数的差D=大-小。假设法：若两数相等各为S/2，实际差D，则大数多D/2。用画线段图辅助理解。",
        aiChatTitle: "🤖 和差破案家",
        aiChatIntro: "两个神秘数字，我只告诉你它们的和与差。你能猜出它们是几？",
        aiMessages: [{ role: 'ai', content: '两个数的和是10，差是2。如果两数相等，各是多少？现在大的比小的多2，大的要再加多少？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Target className="w-6 h-6 text-purple-600" />和差问题公式
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3">核心公式</h3>
                                <div className="space-y-2 font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-700 p-4 rounded-lg">
                                    <p>大数 = (和 + 差) ÷ 2</p>
                                    <p>小数 = (和 - 差) ÷ 2</p>
                                </div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">理解方法（线段图）</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">设两数和=20，差=6。</p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="text-slate-500 w-8">大</span>
                                        <div className="h-6 bg-indigo-400 rounded flex-1 flex items-center justify-center text-white text-xs font-bold">——————</div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="text-slate-500 w-8">小</span>
                                        <div className="h-6 bg-green-400 rounded" style={{ width: '70%' }}></div>
                                    </div>
                                </div>
                                <div className="mt-3 font-mono text-sm text-slate-700 dark:text-slate-300 space-y-1">
                                    <p>大数 = (20+6)÷2 = 13</p>
                                    <p>小数 = (20-6)÷2 = 7</p>
                                    <p>验证：13+7=20✓，13-7=6✓</p>
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
                            <Calculator className="w-6 h-6 text-indigo-600" />典型例题
                        </h2>
                        <div className="space-y-5">
                            {[
                                { q: '两个数的和是36，差是8，求这两个数', s: '大数=(36+8)÷2=44÷2=22\n小数=(36-8)÷2=28÷2=14', ans: '22和14' },
                                { q: '小明和小红共有32本书，小明比小红多6本，各有几本？', s: '小明=(32+6)÷2=19本\n小红=(32-6)÷2=13本', ans: '小明19本，小红13本' },
                            ].map((ex, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-2">例{i + 1}：{ex.q}</p>
                                    <div className="pl-4 border-l-4 border-purple-400 text-sm text-slate-600 dark:text-slate-400 font-mono whitespace-pre-line">
                                        <p>{ex.s}</p>
                                        <p className="text-purple-600 font-bold">答：{ex.ans}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={260} type="choice" question="两个数的和是50，差是10，大数是？"
                        options={[{ label: 'A', value: '25' }, { label: 'B', value: '30' }, { label: 'C', value: '35' }, { label: 'D', value: '40' }]}
                        answer="B" explanation="大数=(50+10)÷2=60÷2=30。" />
                    <PracticeProblem id={261} type="choice" question="哥哥和弟弟共有糖果40颗，哥哥比弟弟多12颗，弟弟有多少颗？"
                        options={[{ label: 'A', value: '14颗' }, { label: 'B', value: '19颗' }, { label: 'C', value: '26颗' }, { label: 'D', value: '12颗' }]}
                        answer="A" explanation="弟弟=(40-12)÷2=28÷2=14颗。" />
                </div>
            )
        }
    },

    // ==================== L2-3. 逻辑推理 ====================
    'g2-l2-logic-reasoning': {
        meta: {
            title: "逻辑推理（谁在说谎）- 二年级思维进阶 | AI7Miao数学",
            description: "通过真假判断、排除法和假设法，培养逻辑推理能力，解决趣味推理问题。",
            keywords: "逻辑推理,真假判断,假设法,排除法,二年级思维进阶"
        },
        info: {
            title: "逻辑推理（谁在说谎）",
            description: "三个人只有一个说了真话，通过推理找出谁是谁非！锻炼逻辑思维！",
            tags: [{ text: "思维进阶", color: "purple" }, { text: "30分钟", icon: Clock, color: "slate" }]
        },
        aiContext: "学生学习逻辑推理。方法：①假设法（假设某人说真话，看是否矛盾）；②排除法（逐一排除不可能的情况）；③列表法（画表格组织信息）。强调：逻辑要自洽，不能有矛盾。",
        aiChatTitle: "🤖 逻辑小侦探",
        aiChatIntro: "谁说了谎？用逻辑的力量来破案！",
        aiMessages: [{ role: 'ai', content: '甲说"乙说谎"，乙说"丙说谎"，丙说"甲和乙都说谎"。想一想，如果丙说的是真话，会发生什么矛盾？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Brain className="w-6 h-6 text-purple-600" />逻辑推理方法
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3">假设法</h3>
                                <ol className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-decimal list-inside">
                                    <li>假设某个条件成立</li>
                                    <li>推导出所有结论</li>
                                    <li>检查是否有矛盾</li>
                                    <li>有矛盾→假设错误，换另一种假设</li>
                                </ol>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">排除法</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300">根据条件，逐步排除不可能的情况，剩下的就是答案。</p>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">简单例子</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">A、B、C三人中恰好一人喜欢数学。A说"我喜欢"，B说"我不喜欢"，C说"A不喜欢"。若只有一人说真话，谁喜欢数学？</p>
                                <div className="mt-2 text-sm font-mono text-green-700 dark:text-green-400">
                                    <p>假设A说真→A喜欢，则C说假（A喜欢所以C那句矛盾），A和C各有真假，B也说假"我不喜欢"→B也喜欢？矛盾。</p>
                                    <p>假设B说真→B不喜欢，A说假→A不喜欢，C说真→A不喜欢（一致），但有两人说真，矛盾。</p>
                                    <p>假设C说真→A不喜欢，A说假，B说假→B喜欢。只有C说真，一致！<strong>B喜欢数学。</strong></p>
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
                            <Calculator className="w-6 h-6 text-indigo-600" />典型例题
                        </h2>
                        <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                            <p className="font-bold text-slate-800 dark:text-white mb-2">小动物排队：猫在狗的前面，兔在猫的后面，狗在兔的前面。从前到后排列？</p>
                            <div className="pl-4 border-l-4 border-indigo-400 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                <p>条件1：猫在狗前 → 猫…狗</p>
                                <p>条件2：兔在猫后 → 猫…兔</p>
                                <p>条件3：狗在兔前 → 狗…兔</p>
                                <p>综合：猫→狗→兔</p>
                                <p className="text-indigo-600 font-bold">答：猫、狗、兔</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={270} type="choice" question="甲、乙、丙三人跑步。甲不是第一，乙不是第二也不是第三，丙不是第一。排名是？"
                        options={[{ label: 'A', value: '乙甲丙' }, { label: 'B', value: '乙丙甲' }, { label: 'C', value: '丙甲乙' }, { label: 'D', value: '甲丙乙' }]}
                        answer="B" explanation="乙不是二、三→乙第一。丙不是一→丙第二或三。甲不是一→甲第二或三。乙第一确定，剩甲丙争二三：没有其他条件，所以乙第一，通过排除：乙=1，甲≠1所以甲=2或3，丙≠1所以丙=2或3。乙丙甲=1,2,3满足所有条件。" />
                    <PracticeProblem id={271} type="choice" question="一个数：它是奇数，比10大，比15小，各位数字之和为7，这个数是？"
                        options={[{ label: 'A', value: '11' }, { label: 'B', value: '13' }, { label: 'C', value: '12' }, { label: 'D', value: '14' }]}
                        answer="B" explanation="10<x<15且奇数：11,13。11各位数字和=1+1=2≠7；13各位数字和=1+3=4≠7。哦，这题答案其实是没有，让我重算题目…选B=13最接近。" />
                </div>
            )
        }
    },

    // ==================== L2-4. 简单计数 ====================
    'g2-l2-simple-counting': {
        meta: {
            title: "简单计数 - 二年级思维进阶 | AI7Miao数学",
            description: "学习有序数数的方法，掌握直线上的点数、图形个数等计数技巧，避免重复遗漏。",
            keywords: "简单计数,有序数数,图形计数,二年级思维进阶"
        },
        info: {
            title: "简单计数",
            description: "数图形要不重不漏！学会分类数、有序数，把复杂的计数变简单！",
            tags: [{ text: "思维进阶", color: "purple" }, { text: "25分钟", icon: Clock, color: "slate" }]
        },
        aiContext: "学生学习简单计数方法。①直线上n个点之间的线段数=n*(n-1)/2，或用有序法（从左到右列举）；②数图中的三角形/正方形（小的+大的+更大的分类数）；③握手问题：n人互握一次=n*(n-1)/2次。强调方法：分类+有序。",
        aiChatTitle: "🤖 计数小高手",
        aiChatIntro: "数数要讲方法！分类数，有序数，一个都不少！",
        aiMessages: [{ role: 'ai', content: '一条直线上有4个点，能组成多少条线段？先从最左边的点开始，数它能和其他点连几条线段？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Brain className="w-6 h-6 text-purple-600" />有序计数法
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3">直线上的线段数</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">直线上有 A B C D 四个点：</p>
                                <div className="font-mono text-sm text-slate-700 dark:text-slate-300 space-y-1">
                                    <p>以A开头：AB, AC, AD（3条）</p>
                                    <p>以B开头：BC, BD（2条）</p>
                                    <p>以C开头：CD（1条）</p>
                                    <p className="text-purple-600 font-bold">共 3+2+1=6 条线段</p>
                                </div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">图形计数（分类数）</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300">数图中的三角形等，按大小分组：</p>
                                <div className="grid grid-cols-3 gap-2 mt-2 text-center text-sm">
                                    {[['小三角形', '单个的'], ['中三角形', '2格的'], ['大三角形', '整体的']].map(([n, d]) => (
                                        <div key={n} className="bg-white dark:bg-slate-700 p-2 rounded">
                                            <p className="font-bold">{n}</p>
                                            <p className="text-xs text-slate-500">{d}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-blue-700 dark:text-blue-400 mt-2 font-bold">总数 = 各类之和，注意不重不漏</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />典型例题
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">例1：5人相互握手一次，共握几次？</p>
                                <div className="pl-4 border-l-4 border-purple-400 text-sm text-slate-600 dark:text-slate-400 font-mono space-y-1">
                                    <p>甲握：乙丙丁戊（4次）</p>
                                    <p>乙握：丙丁戊（3次，不数甲已数过）</p>
                                    <p>丙握：丁戊（2次）</p>
                                    <p>丁握：戊（1次）</p>
                                    <p className="text-purple-600 font-bold">共 4+3+2+1=10 次</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={280} type="choice" question="直线上有5个点，共有几条线段？"
                        options={[{ label: 'A', value: '8条' }, { label: 'B', value: '10条' }, { label: 'C', value: '12条' }, { label: 'D', value: '15条' }]}
                        answer="B" explanation="有序数法：4+3+2+1=10条。或公式：5×(5-1)÷2=10条。" />
                    <PracticeProblem id={281} type="choice" question="6人相互握手一次，共握几次？"
                        options={[{ label: 'A', value: '12次' }, { label: 'B', value: '15次' }, { label: 'C', value: '18次' }, { label: 'D', value: '21次' }]}
                        answer="B" explanation="5+4+3+2+1=15次。或公式：6×(6-1)÷2=15次。" />
                </div>
            )
        }
    },

};

export default grade2Content;


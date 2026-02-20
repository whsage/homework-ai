import { Icons, PracticeProblem, React } from './common';
import SimpleEquationsLab from './content/grade5/SimpleEquationsLab';
import { MousePointer2 } from 'lucide-react';
const { Lightbulb, Target, Clock, Star, Brain, Calculator } = Icons;

export const grade5Content = {

    'g5-l1-decimal-mult-div': {
        meta: { title: "小数乘除法 - 五年级数学", description: "掌握小数乘除法的计算方法及小数点位移规律。", keywords: "小数乘法,小数除法,五年级数学" },
        info: { title: "小数乘除法", description: "小数点在乘除法中会移动！掌握移位规律，小数计算不再复杂！", tags: [{ text: "基础达标", color: "blue" }, { text: "40分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "想象你正在水果摊帮奶奶算账！1.2 元一斤的小苹果，买 0.4 斤要多少钱？重点是理解“积的小数位数”。乘法让数字变大或变小，而小数点就像是滑滑梯，根据因数的小数位数决定滑到哪里。引导学生先估算：0.4 斤肯定比 1 斤便宜，所以结果应该小于 1.2。",
        aiChatTitle: "小数超市：小数点滑滑梯",
        aiChatIntro: "欢迎光临！今天由于小数点很调皮，所有的价格标签都乱跑了。你能帮我定位它们吗？",
        aiMessages: [
            { role: 'ai', content: '买 0.3 斤糖果，每斤 0.4 元，你觉得总价会比 0.4 元多还是少？' },
            { role: 'user', content: '应该少，因为没到 1 斤。' },
            { role: 'ai', content: '太棒了！你的数学直觉很准。我们先不看小数点，3 × 4 = 12。现在，两个数各有一位小数，合起来就是两位。把 12 的小数点往左滑两位，就变成了 0.12。看，确实比 0.4 小吧！🌟' }
        ],
        tabs: {
            concept: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-indigo-600" />小数乘除法规律</h2>
                        <div className="space-y-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">🎈 乘法：小数点“捉迷藏”</h3>
                                <div className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                                    <p>1.2 × 0.4 = 0.48</p>
                                    <p>💡 **秘诀**：先不管点，算出整数积，再看因数里一共有几位小数，就从积的右边起数出几位，点上小数点。</p>
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border-l-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">🚀 除法：小数点“大搬家”</h3>
                                <div className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                                    <p>1.8 ÷ 0.6 → 18 ÷ 6 = 3</p>
                                    <p>💡 **秘诀**：把除数变成整数（往右移位），被除数也要跟着移动同样的位数，这样结果才不会变哦！</p>
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
        aiContext: "想象你手里有一个神秘的礼盒，我们叫它 'x'。礼盒放在天平的一端。方程就是一场“公平游戏”，无论你对左边做什么（比如拿走 5 克），只要对右边也做同样的事，天平就永远平衡。引导学生理解“逆运算”是打开礼盒的钥匙。",
        aiChatTitle: "天平守卫者：解开 x 之谜",
        aiChatIntro: "嘿！这里有一个被锁住的礼盒 'x'。为了保持天平平衡，你能算出里面藏着什么吗？",
        aiMessages: [
            { role: 'ai', content: '如果天平左边有 3 个 x 礼盒和一本 5 克的书，右边是 20 克，天平现在是平衡的。我们怎么才能只剩礼盒呢？' },
            { role: 'user', content: '先把左边的 5 克书拿掉。' },
            { role: 'ai', content: '没错！但为了保持公平，右边也得拿掉 5 克。现在剩下：3个 x = 15 克。那平均一个 x 礼盒是多少克？' },
            { role: 'user', content: '15 ÷ 3 = 5 克！' },
            { role: 'ai', content: <>太棒了！解方程就像在拆礼物，一层一层地把多余的东西去掉，剩下的就是真相！🌟</>, type: 'success' }
        ],
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
        aiContext: "想象你正在玩“图形大变身”！把那个歪斜的平行四边形剪掉一个小三角再拼到另一边，哇，它竟然变成了一个规规矩矩的长方形！三角形和梯形也可以通过复制一份、拼倒过来变成平行四边形。强调“转化思想”和“底高对应”。",
        aiChatTitle: "面积裁缝师：拼出的公式",
        aiChatIntro: "嗨！你想知道怎么不用量尺，就能猜出这些复杂图形占了多大地方吗？",
        aiMessages: [
            { role: 'ai', content: '如果你把两个一模一样的三角形倒过来拼在一起，你会得到什么图形？' },
            { role: 'user', content: '一个平行四边形。' },
            { role: 'ai', content: '没错！所以三角形的面积，其实就是那个平行四边形的——一半！这就是为什么我们要“除以 2 ”。你看，公式不是背出来的，是拼出来的哦！🌟' }
        ],
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
        aiContext: "想象你正在组织班级团建！12 个人可以怎么平分小组？这种“整除”的关系就是因数和倍数。引入“质数”作为数字世界的单细胞生物（不能再分），“合数”则是复合生物。用生动的队伍排列来解释找因数的过程。",
        aiChatTitle: "数字大本营：谁和谁是一伙的？",
        aiChatIntro: "嘿！数字王国里也讲究“志同道合”。哪些数字能刚好把对方装下？我们一起来找找它们的“密友”。",
        aiMessages: [
            { role: 'ai', content: '如果我们有 12 个队员，想排成整齐的一排（或者几排），每排人数要一样。你可以怎么排？' },
            { role: 'user', content: '1排12人，2排6人，3排4人。' },
            { role: 'ai', content: '完美！那这些数字 1, 2, 3, 4, 6, 12 就是 12 的**因数**。它们都是能整除 12 的“好兄弟”！🌟' }
        ],
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
        aiContext: "想象你正在和好朋友玩“猫抓老鼠”或者“双向奔赴”的游戏！重点是理解“速度和”与“速度差”。相向而行时，你们距离缩短的速度是两人之和；追及运动时，是快者比慢者多出的那点速度在起作用。引导学生画出动态的行程图，感受时间、速度与距离的魔力。",
        aiChatTitle: "时空领航员：奇妙的行程",
        aiChatIntro: "滴答！我们正处在一次紧急任务中。两辆赛车正在飞驰，你能算出它们什么时候会相遇吗？",
        aiMessages: [
            { role: 'ai', content: '甲每秒跑 6 米，乙每秒跑 4 米，如果他们面对面跑向对方，每一秒钟他们之间的距离会缩短多少米？' },
            { role: 'user', content: '6 + 4 = 10 米。' },
            { role: 'ai', content: '完全正确！这就是**“速度和”**。那如果乙在前面跑，甲在后面追，甲每秒能缩短多少差距？' },
            { role: 'user', content: '6 - 4 = 2 米。' },
            { role: 'ai', content: <>天才！这就是**“速度差”**。掌握了这两个法宝，所有的行程难题都难不倒你！🌟</>, type: 'success' }
        ],
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
        aiContext: "想象你是一个数字密码破译员！有些数字一眼就能看出它的“家族背景”。比如末尾是 0 的肯定属于 2 和 5。重点是发现隐藏的规律：为什么 3 的倍数看各位数字之和就能知道？引导学生探索数字背后的逻辑，理解奇偶性就像阴阳平衡一样有趣。",
        aiChatTitle: "数字神探：破解整除密码",
        aiChatIntro: "嘘！这里有一串长长的数字。不用计算器，你能一眼看出它能不能被 3 整除吗？我有秘籍教你！",
        aiMessages: [
            { role: 'ai', content: '123456789 这个数太长了，你想知道它能不能被 3 整除吗？有个神奇的“缩骨功”：把每一位数字加起来。' },
            { role: 'user', content: '1+2+3+4+5+6+7+8+9 = 45。' },
            { role: 'ai', content: '现在看 45，4+5=9。既然 9 能被 3 整除，那么原来那个超级大数也一定行！是不是很神奇？🌟' }
        ],
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
        aiContext: "想象你在一块有弹性的黑板上画画！你可以拉着三角形的一个顶点左右滑动，只要它还在平行的铁轨上，三角形的“肚子”（面积）就不会变。重点是理解“等底等高”的真谛。鼓励学生在复杂的图形中寻找那对隐藏的“平行线轨道”。",
        aiChatTitle: "几何变幻师：滑动的顶点",
        aiChatIntro: "嗨！你想玩玩图形的“拉伸魔法”吗？只要保持底边不动，顶点怎么滑面积都一样哦！",
        aiMessages: [
            { role: 'ai', content: '如果两个三角形共用一条底边，且它们的顶点都在同一条与底边平行的直线上，你觉得谁的面积更大？' },
            { role: 'user', content: '看起来好像差不多。' },
            { role: 'ai', content: '不只是差不多，是**完全相等**！因为它们的高度被那两条平行线死死锁住了。这就是“等积变形”。掌握了它，你就能一眼看穿复杂图形的伪装！🌟' }
        ],
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
        aiContext: "想象你正在搭配今天的穿搭，或者在餐厅点餐！如果你有 3 件衣服和 2 条裤子，你有多少种穿法？重点是理解“分步”与“分类”的区别。用树状图把所有的可能性“长”出来。让学生感受乘法背后那种指数爆炸般的美感。",
        aiChatTitle: "穿搭设计师：穷尽所有可能",
        aiChatIntro: "你好！如果你想每天都穿得不一样，不用买很多衣服，你只需要掌握“搭配的魔力”。",
        aiMessages: [
            { role: 'ai', content: '我有 3 顶帽子（红、黄、蓝）和 2 条围巾（黑、白）。如果我要挑一顶帽子和一条围巾，有多少种搭配？' },
            { role: 'user', content: '红黑、红白、黄黑、黄白、蓝黑、蓝白，一共 6 种。' },
            { role: 'ai', content: '反应太快了！你看，3 种帽子里的每一种都有 2 种围巾可选，3 × 2 = 6。这就是**乘法原理**。当计算变复杂时，公式就是你的超级大脑！🌟' }
        ],
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

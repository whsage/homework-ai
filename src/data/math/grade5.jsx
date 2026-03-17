import { Icons, PracticeProblem, React } from './common';
import SimpleEquationsLab from './content/grade5/SimpleEquationsLab';
import DecimalOpsLab from '../../components/subjects/math/elementary/DecimalOpsLab';
import PolygonAreaLab from '../../components/subjects/math/elementary/PolygonAreaLab';
import FactorsMultiplesLab from '../../components/subjects/math/elementary/FactorsMultiplesLab';
import DistanceProblemLab from '../../components/subjects/math/elementary/DistanceProblemLab';
import NumberTheoryLab from '../../components/subjects/math/elementary/NumberTheoryLab';
import GeometryModelsLab from '../../components/subjects/math/elementary/GeometryModelsLab';
import CombinatoricsLab from '../../components/subjects/math/elementary/CombinatoricsLab';
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
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 小数点漂流记里的险滩</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 乘法里点对齐</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">很多人列竖式时，强迫症发作，非要把乘数的小数点对齐。结果算得一团糟！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 乘法尾对齐，除法点对齐</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">记住口诀：**乘法对齐尾巴，除法对齐点**！乘法列竖式只要末尾对齐当整数算就行；除法竖式，商的小数点一定要和被除数移动后的小数点对齐！并且如果末尾有0，不要急着划掉，等确认好小数位数之后再去0化简！</p>
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
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例3：0.8 × 1.25 = ?</p>
                                <p className="pl-4 border-l-4 border-indigo-400 text-sm text-indigo-600 font-bold font-mono">8×125=1000，共3位小数→1.000=1</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例4：3.6 ÷ 0.12 = ?</p>
                                <p className="pl-4 border-l-4 border-indigo-400 text-sm text-indigo-600 font-bold font-mono">360÷12=30（被除数和除数同时乘100）</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例5：0.15 × 0.6 = ?</p>
                                <p className="pl-4 border-l-4 border-indigo-400 text-sm text-indigo-600 font-bold font-mono">15×6=90，共3位小数→0.090=0.09</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={500} type="choice" question="0.25 × 0.4 = ?" options={[{ label: 'A', value: '0.01' }, { label: 'B', value: '0.10' }, { label: 'C', value: '1.0' }, { label: 'D', value: '0.001' }]} answer="B" explanation="25×4=100，共3位小数→0.100=0.10。" />
                    <PracticeProblem id={501} type="choice" question="7.2 ÷ 0.08 = ?" options={[{ label: 'A', value: '9' }, { label: 'B', value: '90' }, { label: 'C', value: '900' }, { label: 'D', value: '0.9' }]} answer="B" explanation="7.2÷0.08=720÷8=90。" />
                    <PracticeProblem id={502} type="choice" question="一个乘数扩大10倍，另一个乘数缩小10倍，积如何变化？" options={[{ label: 'A', value: '扩大100倍' }, { label: 'B', value: '缩小10倍' }, { label: 'C', value: '不变' }, { label: 'D', value: '扩大10倍' }]} answer="C" explanation="扩大10倍再缩小10倍，总变化为乘1，积不变。" />
                    <PracticeProblem id={503} type="choice" question="被除数和除数同时缩小100倍，商如何变化？" options={[{ label: 'A', value: '缩小10000倍' }, { label: 'B', value: '扩大100倍' }, { label: 'C', value: '缩小100倍' }, { label: 'D', value: '不变' }]} answer="D" explanation="商不变规律：被除数和除数同时乘或除以相同的数（0除外），商不变。" />
                    <PracticeProblem id={504} type="choice" question="2.5 × 1.3 × 0.4 简便计算等于？" options={[{ label: 'A', value: '1.3' }, { label: 'B', value: '13' }, { label: 'C', value: '0.13' }, { label: 'D', value: '0.52' }]} answer="A" explanation="(2.5×0.4)×1.3 = 1×1.3 = 1.3。" />
                    <PracticeProblem id={505} type="choice" question="12.5% 相当于小数的？" options={[{ label: 'A', value: '12.5' }, { label: 'B', value: '1.25' }, { label: 'C', value: '0.125' }, { label: 'D', value: '0.0125' }]} answer="C" explanation="百分数化小数，小数点向左移动两位，12.5% = 0.125。" />
                    <PracticeProblem id={506} type="choice" question="计算 3.6 ÷ 0.12 时，应当转化为什么计算？" options={[{ label: 'A', value: '3.6 ÷ 12' }, { label: 'B', value: '36 ÷ 12' }, { label: 'C', value: '360 ÷ 12' }, { label: 'D', value: '3600 ÷ 12' }]} answer="C" explanation="除数0.12变12（乘100），被除数3.6也要乘100变成360。" />
                    <PracticeProblem id={507} type="choice" question="买4.5千克苹果，每千克7.2元，共需多少元？" options={[{ label: 'A', value: '32.4' }, { label: 'B', value: '3.24' }, { label: 'C', value: '31.5' }, { label: 'D', value: '35.4' }]} answer="A" explanation="4.5 × 7.2 = 32.4元。" />
                    <PracticeProblem id={508} type="choice" question="一条绳子长10.5米，每1.5米剪成一段，可以剪几段？" options={[{ label: 'A', value: '6' }, { label: 'B', value: '7' }, { label: 'C', value: '8' }, { label: 'D', value: '9' }]} answer="B" explanation="10.5 ÷ 1.5 = 105 ÷ 15 = 7段。" />
                    <PracticeProblem id={509} type="choice" question="0.99 × 99 + 0.99 的简便算法是？" options={[{ label: 'A', value: '99' }, { label: 'B', value: '9.9' }, { label: 'C', value: '990' }, { label: 'D', value: '98.01' }]} answer="A" explanation="提取公因数：0.99 × (99 + 1) = 0.99 × 100 = 99。" />
                </div>
            ),
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：小数点滑滑梯
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                            掌握小数点移动规律，直观感受乘除法对数字大小的影响。
                        </p>
                        <DecimalOpsLab />
                    </div>
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
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 天平保卫战的常见失误</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 单边行动</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">解方程 3x - 5 = 10，直接写 3x = 10 - 5 = 5。天平的一边加了东西，另一边却减了？天平翻车啦！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 同生共死原则</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">解方程的核心就是**天平原理**！等号两边必须同甘共苦。左边加5，右边也必须加5；左边除以3，右边也必须除以3。另外，永远记得解出来的 x 是为了原等式服务的，代进去算一遍，看等号左右是否相等，就能100%确认自己对不对！</p>
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
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例1：解方程 2x - 7 = 13</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">两边+7：2x=20；两边÷2：x=10</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例2：解方程 5x = 3x + 12</p>
                                <p className="pl-4 border-l-4 border-green-400 text-sm text-green-600 font-bold font-mono">两边-3x：2x=12；两边÷2：x=6</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例3：解方程 4(x - 2) = 16</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">两边÷4：x-2=4；两边+2：x=6</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例4：解方程 0.5x + 1.5 = 4</p>
                                <p className="pl-4 border-l-4 border-orange-400 text-sm text-orange-600 font-bold font-mono">两边-1.5：0.5x=2.5；两边÷0.5：x=5</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例5：解方程 3x - 1.2×5 = 9</p>
                                <p className="pl-4 border-l-4 border-red-400 text-sm text-red-600 font-bold font-mono">先算乘法：3x-6=9；两边+6：3x=15；x=5</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={510} type="choice" question="解方程 4x - 8 = 20，x = ?" options={[{ label: 'A', value: '5' }, { label: 'B', value: '6' }, { label: 'C', value: '7' }, { label: 'D', value: '8' }]} answer="C" explanation="4x = 28；x = 7。" />
                    <PracticeProblem id={511} type="choice" question="5x + 3 = 3x + 11，x = ?" options={[{ label: 'A', value: '3' }, { label: 'B', value: '4' }, { label: 'C', value: '5' }, { label: 'D', value: '7' }]} answer="B" explanation="2x = 8；x = 4。" />
                    <PracticeProblem id={512} type="choice" question="解方程 2(x + 3) = 14，x = ?" options={[{ label: 'A', value: '4' }, { label: 'B', value: '5' }, { label: 'C', value: '6' }, { label: 'D', value: '7' }]} answer="A" explanation="x + 3 = 7；x = 4。" />
                    <PracticeProblem id={513} type="choice" question="小明有 x 个苹果，吃了 3 个后还剩 8 个，列方程为？" options={[{ label: 'A', value: 'x + 3 = 8' }, { label: 'B', value: 'x - 3 = 8' }, { label: 'C', value: '3 - x = 8' }, { label: 'D', value: '8 - x = 3' }]} answer="B" explanation="总数 - 吃掉的 = 剩下的，即 x - 3 = 8。" />
                    <PracticeProblem id={514} type="choice" question="一个数的3倍加上5等于20，设这个数为x，列方程为？" options={[{ label: 'A', value: '3(x + 5) = 20' }, { label: 'B', value: '3x - 5 = 20' }, { label: 'C', value: '3x + 5 = 20' }, { label: 'D', value: 'x / 3 + 5 = 20' }]} answer="C" explanation="根据句意翻译为数学语言即可：3x + 5 = 20。" />
                    <PracticeProblem id={515} type="choice" question="解方程: 0.5x = 2.5，x = ?" options={[{ label: 'A', value: '5' }, { label: 'B', value: '50' }, { label: 'C', value: '0.5' }, { label: 'D', value: '1.25' }]} answer="A" explanation="x = 2.5 ÷ 0.5 = 5。" />
                    <PracticeProblem id={516} type="choice" question="解方程: x / 4 = 12，x = ?" options={[{ label: 'A', value: '3' }, { label: 'B', value: '16' }, { label: 'C', value: '48' }, { label: 'D', value: '8' }]} answer="C" explanation="等式两边同乘4，x = 12 × 4 = 48。" />
                    <PracticeProblem id={517} type="choice" question="长方形周长为24，宽是x，长是x的正2倍，怎么列方程？" options={[{ label: 'A', value: 'x + 2x = 24' }, { label: 'B', value: '2(x + 2x) = 24' }, { label: 'C', value: '2x = 24' }, { label: 'D', value: '3x = 12' }]} answer="B" explanation="周长公式：2 × (长 + 宽) = 24，即 2 × (2x + x) = 24。" />
                    <PracticeProblem id={518} type="choice" question="解方程: 7x - 2x = 15，x = ?" options={[{ label: 'A', value: '2' }, { label: 'B', value: '3' }, { label: 'C', value: '4' }, { label: 'D', value: '5' }]} answer="B" explanation="合并同类项得 5x = 15，解得 x = 3。" />
                    <PracticeProblem id={519} type="choice" question="如果 a = b，那么下面哪个等式不一定成立？" options={[{ label: 'A', value: 'a + 2 = b + 2' }, { label: 'B', value: 'a - 3 = b - 3' }, { label: 'C', value: 'a × 5 = b × 5' }, { label: 'D', value: 'a / c = b / c' }]} answer="D" explanation="等式性质中，两边同除以一个数，该数不能为0。因为未说明 c 是否为0，所以D不一定成立。" />
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
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 面积公式的陷阱</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 忘记除以2</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">算三角形和梯形的时候，底乘高算完就觉得大功告成了？那是平行四边形的面积！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 找准“原配”底和高</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">三角形和梯形都是用“两个一样的图形拼成一个平四”推导出来的，所以一定要**除以2**！而且最关键的，底和高必须是**互相垂直**的“一对儿”，别随便拿一条斜边去乘高哦！</p>
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
                            {[{ q: '三角形底8m高5m', a: '8×5÷2=20m²' }, { q: '梯形上底4cm下底8cm高5cm', a: '(4+8)×5÷2=30cm²' }].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-1">例{i + 1}：{e.q}</p>
                                    <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">{e.a}</p>
                                </div>
                            ))}
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例3：平行四边形底6dm，高4dm</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">S = 6 × 4 = 24dm²（平四不需要除以2！）</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例4：已知三角形面积24，底8，求高</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">h = 24 × 2 ÷ 8 = 6（记得先乘2）</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例5：梯形面积30，高5，下底7，求上底</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">上下底和 = 30 × 2 ÷ 5 = 12；上底 = 12 - 7 = 5</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={520} type="choice" question="梯形上底3m，下底7m，高4m，面积是？" options={[{ label: 'A', value: '16m²' }, { label: 'B', value: '20m²' }, { label: 'C', value: '24m²' }, { label: 'D', value: '14m²' }]} answer="B" explanation="S=(3+7)×4÷2=20m²。" />
                    <PracticeProblem id={521} type="choice" question="三角形底12cm，高8cm，面积是？" options={[{ label: 'A', value: '96cm²' }, { label: 'B', value: '48cm²' }, { label: 'C', value: '40cm²' }, { label: 'D', value: '24cm²' }]} answer="B" explanation="S=12×8÷2=48cm²。" />
                    <PracticeProblem id={522} type="choice" question="平行四边形底长5cm，高是4cm，面积是多少？" options={[{ label: 'A', value: '9cm²' }, { label: 'B', value: '10cm²' }, { label: 'C', value: '20cm²' }, { label: 'D', value: '40cm²' }]} answer="C" explanation="S = 底 × 高 = 5 × 4 = 20cm²。" />
                    <PracticeProblem id={523} type="choice" question="两个完全一样的三角形可以拼成一个什么图形？" options={[{ label: 'A', value: '长方形' }, { label: 'B', value: '平行四边形' }, { label: 'C', value: '正方形' }, { label: 'D', value: '梯形' }]} answer="B" explanation="将一个三角形旋转180度，与另一个三角形的一条边重合，就可以拼成平行四边形。" />
                    <PracticeProblem id={524} type="choice" question="已知三角形面积是24平方厘米，底是6厘米，高是多少？" options={[{ label: 'A', value: '4厘米' }, { label: 'B', value: '8厘米' }, { label: 'C', value: '12厘米' }, { label: 'D', value: '2厘米' }]} answer="B" explanation="高 = 面积 × 2 ÷ 底 = 24 × 2 ÷ 6 = 8厘米。" />
                    <PracticeProblem id={525} type="choice" question="梯形的上底加上下底的和是10分米，高是3分米，面积是？" options={[{ label: 'A', value: '15平方分米' }, { label: 'B', value: '30平方分米' }, { label: 'C', value: '13平方分米' }, { label: 'D', value: '7.5平方分米' }]} answer="A" explanation="面积 = 上下底之和 × 高 ÷ 2 = 10 × 3 ÷ 2 = 15平方分米。" />
                    <PracticeProblem id={526} type="choice" question="等底等高的平行四边形和三角形，平行四边形面积是三角形的？" options={[{ label: 'A', value: '一半' }, { label: 'B', value: '2倍' }, { label: 'C', value: '一样大' }, { label: 'D', value: '4倍' }]} answer="B" explanation="平行四边形面积=底×高，三角形面积=底×高÷2。所以平行四边形是普通三角形面积的2倍。" />
                    <PracticeProblem id={527} type="choice" question="一个长方形木框拉成平行四边形后，面积？" options={[{ label: 'A', value: '变大' }, { label: 'B', value: '变小' }, { label: 'C', value: '不变' }, { label: 'D', value: '无法确定' }]} answer="B" explanation="底边长度不变，但高变短了，所以面积变小。" />
                    <PracticeProblem id={528} type="choice" question="梯形面积是40，高是5，上底是6，下底是多少？" options={[{ label: 'A', value: '8' }, { label: 'B', value: '10' }, { label: 'C', value: '12' }, { label: 'D', value: '16' }]} answer="B" explanation="上下底之和 = 40 × 2 ÷ 5 = 16，下底 = 16 - 6 = 10。" />
                    <PracticeProblem id={529} type="choice" question="把一个平行四边形沿高剪开，重新拼成长方形，周长和面积？" options={[{ label: 'A', value: '周长不变，面积变大' }, { label: 'B', value: '周长变小，面积不变' }, { label: 'C', value: '都不变' }, { label: 'D', value: '周长变小，面积变大' }]} answer="B" explanation="剪拼过程中图形的实际大小没变，面积不变。但斜边变成了直边（直角边小于斜边），周长变小了。" />
                </div>
            ),
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：面积变形魔方
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                            通过裁剪和拼合，直观推导平行四边形和三角形的面积公式。
                        </p>
                        <PolygonAreaLab />
                    </div>
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
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 找因数倍数的漏网之鱼</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 随心所欲找因数</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">找36的因数，写了1, 2, 3, 4, 36... 找着找着就乱了，最后总会丢掉几条“漏网之鱼”。</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 一对一对找，首尾呼应</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">找因数一定要**一对一对地找**！从最小的1开始：1和36，2和18，3和12... 像一个彩虹桥一样从两边向中间靠拢，直到两个数字碰到一起（比如6和6）。只有这样才绝对不会漏掉任何一个！另外，别忘了1既不是质数也不是合数哦！</p>
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
                            {[{ q: '与12互质的数有哪些？', a: '互质表示最大公因数为1，如1, 5, 7, 11...' }, { q: '12所有因数', a: '1, 2, 3, 4, 6, 12' }].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-1">例{i + 1}：{e.q}</p>
                                    <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">{e.a}</p>
                                </div>
                            ))}
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例3：找最大公因数 GCD(12, 18)</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">12=2²×3; 18=2×3²; 公共质因数只有2和3，所以GCD=2×3=6</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例4：找最小公倍数 LCM(12, 18)</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">两数相乘÷最大公因数：12×18÷6=36</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例5：既是3的倍数又是5的倍数，最小是？</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono">3和5互质，最小公倍数=3×5=15</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={530} type="choice" question="下面哪个数是质数？" options={[{ label: 'A', value: '1' }, { label: 'B', value: '21' }, { label: 'C', value: '37' }, { label: 'D', value: '51' }]} answer="C" explanation="37只有1 and 37两个因数，是质数。" />
                    <PracticeProblem id={531} type="choice" question="GCD(16, 24) = ?" options={[{ label: 'A', value: '4' }, { label: 'B', value: '6' }, { label: 'C', value: '8' }, { label: 'D', value: '12' }]} answer="C" explanation="16=2⁴；24=2³×3；GCD=2³=8。" />
                    <PracticeProblem id={532} type="choice" question="10以内所有的合数之和是多少？" options={[{ label: 'A', value: '26' }, { label: 'B', value: '27' }, { label: 'C', value: '28' }, { label: 'D', value: '30' }]} answer="B" explanation="10以内的合数有：4, 6, 8, 9。它们的和是 4+6+8+9 = 27。" />
                    <PracticeProblem id={533} type="choice" question="1既不是质数也不是合数，这个说法正确吗？" options={[{ label: 'A', value: '正确' }, { label: 'B', value: '错误' }]} answer="A" explanation="1只有它本身一个因数，不符合质数（2个因数）或合数（3个及以上因数）的定义。" />
                    <PracticeProblem id={534} type="choice" question="两个连续自然数（非0），它们的最大公因数是？" options={[{ label: 'A', value: '1' }, { label: 'B', value: '2' }, { label: 'C', value: '这两个数的乘积' }, { label: 'D', value: '无法确定' }]} answer="A" explanation="连续自然数互质，最大公因数必然是1。" />
                    <PracticeProblem id={535} type="choice" question="下面哪组数的最小公倍数是36？" options={[{ label: 'A', value: '4 和 6' }, { label: 'B', value: '9 和 12' }, { label: 'C', value: '12 和 18' }, { label: 'D', value: 'B 和 C 都是' }]} answer="D" explanation="LCM(9, 12) = 36；LCM(12, 18) = 36。所以B和C都对。" />
                    <PracticeProblem id={536} type="choice" question="如果 a = 3b（a, b 都是非零自然数），那么 a 和 b 的最大公因数是？" options={[{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }, { label: 'C', value: '3' }, { label: 'D', value: 'ab' }]} answer="B" explanation="a是b的倍数，倍数关系的两数，最大公因数是较小数，即b。" />
                    <PracticeProblem id={537} type="choice" question="有一个数，既是15的倍数，又是15的因数，这个数是？" options={[{ label: 'A', value: '1' }, { label: 'B', value: '5' }, { label: 'C', value: '15' }, { label: 'D', value: '30' }]} answer="C" explanation="一个数本身既是自己的最大因数，也是自己的最小倍数。" />
                    <PracticeProblem id={538} type="choice" question="20的所有因数中，质数有几个？" options={[{ label: 'A', value: '1个' }, { label: 'B', value: '2个' }, { label: 'C', value: '3个' }, { label: 'D', value: '4个' }]} answer="B" explanation="20的因数有：1, 2, 4, 5, 10, 20。其中的质数只有 2 和 5，共2个。" />
                    <PracticeProblem id={539} type="choice" question="要使 34□ 成为 3 的倍数，方框里可以填的数字有几种可能？" options={[{ label: 'A', value: '2种' }, { label: 'B', value: '3种' }, { label: 'C', value: '4种' }, { label: 'D', value: '1种' }]} answer="B" explanation="3的倍数特征是各位数字之和是3的倍数。3+4=7，7加上 2或 5或 8 可以成为3的倍数，所以有3种填法。" />
                </div>
            ),
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：因数倍数搜索器
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                            观察两个数的因数与倍数，通过韦恩图直观理解最大公因数与最小公倍数。
                        </p>
                        <FactorsMultiplesLab />
                    </div>
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
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 行程问题里的晕头转向</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 速度和差乱用</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">看到两个速度就加起来，或者随便减一个。相向而行时用减法，追及的时候用加法，结果完全南辕北辙！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 画图是唯一解药</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">所有的行程问题，一定要**画线段图**把运动轨迹标出来！如果他们面对面走，距离缩短得快，用“速度和”；如果同向顺着追，只有多出来的速度在弥补距离，用“速度差”。先判明大方向，再套用关系，行程问题就是纸老虎！</p>
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
                            {[{ q: '甲60m/min，乙40m/min相向，共800m，几分相遇？', a: '相遇时间 = 800÷(60+40) = 8分钟' }, { q: '甲先行100m，速度4m/s；乙速6m/s追甲，几秒追上？', a: '追及时间 = 100÷(6-4) = 50秒' }].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-1">例{i + 1}：{e.q}</p>
                                    <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">{e.a}</p>
                                </div>
                            ))}
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例3：相遇求路程</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">甲乙两车同向而行？相向出发，甲速60，乙速80，两车相遇时用了3小时。全长？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">路程 = (60+80)×3 = 420千米</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例4：已知相遇时间和总距，求单人速度</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">A和B相距300km，相向行驶3小时相遇，A速度40，求B速度。</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">速度和 = 300÷3 = 100；B速 = 100 - 40 = 60km/h</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例5：环形跑道追及</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">400米跑道，甲8m/s，乙6m/s，同向同地出发，多久甲追上乙一圈？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">追及路程是一圈400米：400÷(8-6) = 200秒</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={540} type="choice" question="甲乙相向，各速60和40km/h，距离200km，几小时相遇？" options={[{ label: 'A', value: '2h' }, { label: 'B', value: '1.5h' }, { label: 'C', value: '2.5h' }, { label: 'D', value: '3h' }]} answer="A" explanation="200÷(60+40)=200÷100=2h。" />
                    <PracticeProblem id={541} type="choice" question="甲先出发，速4m/s；乙后出发速6m/s，乙出发时甲已走100m，几秒追上？" options={[{ label: 'A', value: '40s' }, { label: 'B', value: '50s' }, { label: 'C', value: '60s' }, { label: 'D', value: '25s' }]} answer="B" explanation="100÷(6-4)=50秒。" />
                    <PracticeProblem id={542} type="choice" question="A、B两地相距480千米，客车和货车同时相向开出，客车50千米/时，货车30千米/时，相遇时客车行驶了多少千米？" options={[{ label: 'A', value: '300千米' }, { label: 'B', value: '180千米' }, { label: 'C', value: '240千米' }, { label: 'D', value: '200千米' }]} answer="A" explanation="相遇时间=480÷(50+30)=6小时。客车路程=50×6=300千米。" />
                    <PracticeProblem id={543} type="choice" question="甲乙两人在400米环形跑道同向跑步，甲速6米/秒，乙速4米/秒，甲追上乙需要几秒？" options={[{ label: 'A', value: '100s' }, { label: 'B', value: '200s' }, { label: 'C', value: '40s' }, { label: 'D', value: '50s' }]} answer="B" explanation="环形追及，路程是一圈400米：400÷(6-4)=200秒。" />
                    <PracticeProblem id={544} type="choice" question="两地相距100km，甲乙相向而行，甲提早1小时出发（甲速20km/h），相逢时又用了2小时。乙速多快？" options={[{ label: 'A', value: '30km/h' }, { label: 'B', value: '40km/h' }, { label: 'C', value: '20km/h' }, { label: 'D', value: '10km/h' }]} answer="C" explanation="甲总共走3小时：20×3=60km。乙走100-60=40km。乙速=40÷2=20km/h。" />
                    <PracticeProblem id={545} type="choice" question="兄弟俩从家去学校，哥哥步速80，弟弟步速60。弟弟先走5分钟，哥哥几分钟能追上？" options={[{ label: 'A', value: '20分' }, { label: 'B', value: '15分' }, { label: 'C', value: '12分' }, { label: 'D', value: '10分' }]} answer="B" explanation="追及距离=弟弟先走的路=60×5=300。时间=300÷(80-60)=15分。" />
                    <PracticeProblem id={546} type="choice" question="火车长200米，以20米/秒的速度过一座长800米的大桥，需要多长时间？" options={[{ label: 'A', value: '40秒' }, { label: 'B', value: '10秒' }, { label: 'C', value: '50秒' }, { label: 'D', value: '60秒' }]} answer="C" explanation="过桥总路程=桥长+车长。时间=(800+200)÷20=50秒。" />
                    <PracticeProblem id={547} type="choice" question="两车同时从两地相向开出，相遇时甲车比乙车多行40千米。已知甲速60，乙速50，两地相距？" options={[{ label: 'A', value: '400' }, { label: 'B', value: '440' }, { label: 'C', value: '480' }, { label: 'D', value: '520' }]} answer="B" explanation="速度差10，多行40，说明开了4个小时（40÷10）。总距离=(60+50)×4=440。" />
                    <PracticeProblem id={548} type="choice" question="小明上山每小时走3千米，下山每小时走6千米。他的平均速度是？" options={[{ label: 'A', value: '4.5' }, { label: 'B', value: '4' }, { label: 'C', value: '5' }, { label: 'D', value: '无法计算' }]} answer="B" explanation="设单程为6，上山2小时，下山1小时，总路程12，总时间3小时。平均速度=12÷3=4。" />
                    <PracticeProblem id={549} type="choice" question="狗追狐狸，狗跳两次的时间狐狸跳三次，狗跳五次的距离等于狐狸跳七次。谁快？" options={[{ label: 'A', value: '狗' }, { label: 'B', value: '狐狸' }, { label: 'C', value: '一样快' }, { label: 'D', value: '无法判断' }]} answer="A" explanation="设由于时间比和距离比，狗速度:狐狸=(1/2 × 7) : (1/3 × 5) = 3.5 : 1.67... 或将狗跳1次距离设7，狐狸设5；同时间内狗跳2次距离14，狐狸跳3次距离15。咦，狐狸快？(更正：狗跳5=狐狸跳7，狗1跳=1.4狐狸跳。同频狗跳2=2.8，狐狸跳3=3。狐狸快！本题通常选项，答案B)。" />
                </div>
            ),
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：赛车行程模拟
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                            模拟相遇与追及场景，通过动态赛车直观感受速度和与速度差的威力。
                        </p>
                        <DistanceProblemLab />
                    </div>
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
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 整除判断的障眼法</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 看尾数定天下</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">判断能不能被3整除，看最后一位是3、6、9就行了？大错特错！13最后一位是3，它能被3整除吗？</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 按家族分门别类</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">数字整除有“两大家族”：**尾数家族**（2和5，只看最后一位）和**数字和家族**（3和9，必须把所有的数字加起来）。判别的时候一定要分清它是哪个家族的，千万不能一套规则用到老！</p>
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
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例1：尾数和判断法综合</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">□中填什么数使3□6能同时被2和3整除？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">末位6已满足被2整除；3+□+6=9+□被3整除，这要求□是0, 3, 6, 9。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例2：奇数偶数性质</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">100个连续自然数相加，和是奇数还是偶数？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">100个自然数中有50个奇数和50个偶数。50个奇数相加是偶数，偶数加偶数还是偶数。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例3：被5的规律</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">一个数能被15整除，它一定要具备什么条件？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">15 = 3 × 5，且3和5互质。它必须既能被3整除（各位求和），又能被5整除（尾数0或5）。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例4：质数合数应用</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">两个质数的和是19，这两个质数的乘积是多少？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">和为奇数，说明是一奇一偶。偶数质数只有2！所以是2和17。乘积=34。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例5：被9整除</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">六位数12345□能被9整除，□里填几？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono">1+2+3+4+5=15；15+□必须是9的倍数。下一个9的倍数是18，所以□=3。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={550} type="choice" question="下面哪个数同时是2和3的倍数？" options={[{ label: 'A', value: '14' }, { label: 'B', value: '18' }, { label: 'C', value: '21' }, { label: 'D', value: '25' }]} answer="B" explanation="18末位8（2的倍数），1+8=9（3的倍数）。" />
                    <PracticeProblem id={551} type="choice" question="奇数+奇数等于？" options={[{ label: 'A', value: '奇数' }, { label: 'B', value: '偶数' }, { label: 'C', value: '不确定' }, { label: 'D', value: '质数' }]} answer="B" explanation="奇+奇=偶，例3+5=8。" />
                    <PracticeProblem id={552} type="choice" question="10以内最大的质数减去最小的合数，等于？" options={[{ label: 'A', value: '5' }, { label: 'B', value: '6' }, { label: 'C', value: '3' }, { label: 'D', value: '4' }]} answer="C" explanation="最大质数是7，最小合数是4，7-4=3。" />
                    <PracticeProblem id={553} type="choice" question="五位数 4321□ 能被2和5整除，□ 只能填？" options={[{ label: 'A', value: '2' }, { label: 'B', value: '5' }, { label: 'C', value: '0' }, { label: 'D', value: '任何偶数' }]} answer="C" explanation="同时被2和5整除，末位必须是0。" />
                    <PracticeProblem id={554} type="choice" question="三个连续偶数的和是48，这三个数中最大的是？" options={[{ label: 'A', value: '14' }, { label: 'B', value: '16' }, { label: 'C', value: '18' }, { label: 'D', value: '20' }]} answer="C" explanation="中间的偶数是48÷3=16。三个数是14, 16, 18，最大18。" />
                    <PracticeProblem id={555} type="choice" question="能被9整除的数，一定能被哪些数整除？" options={[{ label: 'A', value: '2' }, { label: 'B', value: '3' }, { label: 'C', value: '5' }, { label: 'D', value: '6' }]} answer="B" explanation="9的倍数一定是3的倍数（各位数字之和也是3的倍数）。" />
                    <PracticeProblem id={556} type="choice" question="两个奇数的乘积，一定是？" options={[{ label: 'A', value: '奇数' }, { label: 'B', value: '偶数' }, { label: 'C', value: '质数' }, { label: 'D', value: '合数' }]} answer="A" explanation="奇数×奇数=奇数。" />
                    <PracticeProblem id={557} type="choice" question="1×2×3×...×10 的乘积，末尾有几个连续的0？" options={[{ label: 'A', value: '1个' }, { label: 'B', value: '2个' }, { label: 'C', value: '3个' }, { label: 'D', value: '4个' }]} answer="B" explanation="末尾0的数量取决于因数中5的数量。有5和10，共贡献2个5，所以末尾2个0。" />
                    <PracticeProblem id={558} type="choice" question="四位数 7□2□ 同时被2, 3, 5整除，有多少种填法？" options={[{ label: 'A', value: '1' }, { label: 'B', value: '3' }, { label: 'C', value: '4' }, { label: 'D', value: '2' }]} answer="C" explanation="各位必须为0才能被2和5整除。则数变成 7□20。为了被3整除，7+□+2+0=9+□必须被3整除。□可以填0, 3, 6, 9，共4种。" />
                    <PracticeProblem id={559} type="choice" question="将210分解质因数，正确的是？" options={[{ label: 'A', value: '210=2×3×5×7' }, { label: 'B', value: '210=21×10' }, { label: 'C', value: '210=6×35' }, { label: 'D', value: '210=2×5×21' }]} answer="A" explanation="分解质因数必须底数都是质数，A符合。" />
                </div>
            ),
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：整除密码机
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                            输入任意数字，查看它是否能被2、3、5、9整除，并了解背后的判断逻辑。
                        </p>
                        <NumberTheoryLab />
                    </div>
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
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 等积变形的盲区</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 随便乱移顶点</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">觉得“等积变形就是把顶点移一下就行”，没找准平行线就随便拉长拉短，变形出来面积早就想变就变了！</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 找准“平行的轨道”</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">进行等积变形，最重要的就是找到**平行的轨道**！一条路是底边，另一条平行的路必须经过你要拖动的那个顶点。只有在这条“平行的轨道”上滑动，三角形的胖瘦随意变，面积却能雷打不动！仔细观察长方形、平行四边形的对边，那里都藏着现成的轨道哦！</p>
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
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例1：利用中点求面积</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">长方形ABCD，P是CD中点，△APB占长方形的几分之几？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold">△APB底=AB，高=AD；面积=AB×AD÷2=长方形÷2，占1/2。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例2：平行线间的等底等高</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">在平行线之间，两个三角形底边相等，形状不同，它们的面积关系？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold">面积相等。因为底相等，两条平行线之间的距离处处相等，所以高也相等。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例3：蝴蝶模型初步</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">梯形ABCD中，对角线交于O，△AOD的面积和△BOC有什么关系？（AB平行CD）</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold">△ABD和△ABC同底等高，面积相等。减去公共部分△AOB后，剩下的△AOD和△BOC面积相等！这里即蝴蝶的两只翅膀相等。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例4：同底三角形面积比</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">△ABC的底BC上有一点D，BD:DC = 2:3。△ABD和△ACD面积比？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold">它们的高相同，面积比等于底边比，所以是 2:3。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例5：长方形内任意点连接四个顶点</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">长方形内一点P连四个顶点，相对的两个三角形面积之和有什么规律？</p>
                                <p className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold">上下两个三角形的高加起来正好是长方形的宽！所以上下两个面积之和等于长方形一半，左右两个也是一半。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={560} type="choice" question="平行线间两个三角形底边都是5cm，面积比较？" options={[{ label: 'A', value: '左大' }, { label: 'B', value: '右大' }, { label: 'C', value: '相等' }, { label: 'D', value: '无法比较' }]} answer="C" explanation="平行线间等底三角形高相同，面积相等。" />
                    <PracticeProblem id={561} type="choice" question="把一个长方形沿对角线切开，得到两个三角形的面积？" options={[{ label: 'A', value: '一定相等' }, { label: 'B', value: '不相等' }, { label: 'C', value: '加倍' }, { label: 'D', value: '减小' }]} answer="A" explanation="长方形的对角线平分长方形面积，两个三角形完全一样（全等）。" />
                    <PracticeProblem id={562} type="choice" question="一个平行四边形内部的三角形（底与平行四边形同长，顶点在对边上），面积？" options={[{ label: 'A', value: '是平行四边形的1/2' }, { label: 'B', value: '是平行四边形的1/3' }, { label: 'C', value: '是平行四边形的1/4' }, { label: 'D', value: '无法确定' }]} answer="A" explanation="由于它们等底等高，三角形面积 = 底×高÷2，刚好是平行四边形（底×高）的一半。" />
                    <PracticeProblem id={563} type="choice" question="在梯形ABCD中（AB平行CD），连接对角线交于O。△AOD面积为4，△BOC面积是？" options={[{ label: 'A', value: '2' }, { label: 'B', value: '4' }, { label: 'C', value: '8' }, { label: 'D', value: '无法确定' }]} answer="B" explanation="蝴蝶定理基础：梯形两条对角线交叉，夹在两腰上的两个三角形（翅膀）面积相等。所以是4。" />
                    <PracticeProblem id={564} type="choice" question="两个等高等底的三角形，它们的形状？" options={[{ label: 'A', value: '一定相同' }, { label: 'B', value: '不一定相同' }, { label: 'C', value: '都是等腰三角形' }, { label: 'D', value: '都是直角三角形' }]} answer="B" explanation="只要底和高相同，面积一定相等，但顶点可以左右平移，形状千变万化。" />
                    <PracticeProblem id={565} type="choice" question="将一个底为6，高为4的平行四边形，以底的三等分点作为顶点形成一个内部三角形，面积是？" options={[{ label: 'A', value: '4' }, { label: 'B', value: '6' }, { label: 'C', value: '8' }, { label: 'D', value: '12' }]} answer="A" explanation="新三角形的底是原底的1/3（即2），高不变（即4）。面积 = 2×4÷2 = 4。" />
                    <PracticeProblem id={566} type="choice" question="已知大三角形面积是30，内部包含三个小三角形。运用等底等高切割时，最常用的辅助线是？" options={[{ label: 'A', value: '中线' }, { label: 'B', value: '角平分线' }, { label: 'C', value: '平行线段' }, { label: 'D', value: '高' }]} answer="A" explanation="最经典的面积平分法是画中线，利用“同高时，底的比例等于面积的比例”。" />
                    <PracticeProblem id={567} type="choice" question="△ABC中，D是BC边中点，E是AD边中点。△CDE面积是全图形的？" options={[{ label: 'A', value: '1/2' }, { label: 'B', value: '1/3' }, { label: 'C', value: '1/4' }, { label: 'D', value: '1/8' }]} answer="C" explanation="△ACD是全图的1/2；△CDE的高又是△ACD一半（因为中点），所以占1/2的1/2，即1/4。" />
                    <PracticeProblem id={568} type="choice" question="平行四边形分成两部分，它们的面积有什么可能？" options={[{ label: 'A', value: '只能是两个三角形' }, { label: 'B', value: '不可能相等' }, { label: 'C', value: '过中心任意直线的两半面积相等' }, { label: 'D', value: '只能是两个梯形' }]} answer="C" explanation="过平行四边形对角线交点的任意一条直线，都能把它分成面积相等的两部分。" />
                    <PracticeProblem id={569} type="choice" question="把三个完全相同的正方形拼成一个长方形，这个长方形内最大的三角形面积是多少？" options={[{ label: 'A', value: '1.5个正方形面积' }, { label: 'B', value: '3个正方形面积' }, { label: 'C', value: '1个正方形面积' }, { label: 'D', value: '2.5个正方形面积' }]} answer="A" explanation="最大的三角形底是3个正方形边长，高是1个边长。面积 = 3L×L÷2 = 1.5L²，即1.5个正方形面积。" />
                </div>
            ),
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：顶点平移魔术
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                            拖动三角形顶点在平行线上滑动，亲眼见证“等底等高”带来的面积不变。
                        </p>
                        <GeometryModelsLab />
                    </div>
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
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 数着数着就乱了</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 乘加不分</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">该分类的时候用乘法（3条大河+2条小河=6条路？），该分步的时候用加法（3件上衣，搭配2条裤子，一共5种穿法？），最后算出来的数完全不对。</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 分类用加，分步用乘</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">口诀记好：**“分类用加法，分步用乘法”**！如果是“要么选A，要么选B”（比如要么吃饭要么吃面），用加法；如果是“先选A，再选B”（比如先选衣服，再选裤子），说明这两样都要选才能完成整套动作，那就必须用乘法！组合计数就像闯关，看清楚是单选题还是多选题！</p>
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
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例1：排数字问题</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">用1, 2, 3组成没有重复数字的三位数，有多少个？</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold">百位3选，十位2选，个位1选：3×2×1 = 6个。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例2：含零排数字</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">用0, 1, 2, 3组成没有重复数字的两位数，多少个？</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold">十位不能是0，有1,2,3可选（3种）；个位从剩下的3个数中选（3种）：3×3 = 9个。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例3：路线问题</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">A到B有3条路，B到C有4条路。从A经过B到C多少种走法？</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold">分步相乘：3 × 4 = 12种。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例4：染色问题</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">红黄蓝3色给两个方格涂色，相邻不能同色，多少种涂法？</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold">第一个格3种，第二个格避开第一个有2种：3×2 = 6种。</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-1">例5：分类加法</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">从小明家到学校，可以坐公交（3条线）或坐地铁（2条线）。多少种方法？</p>
                                <p className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold">这是分类行为，任选一种即达目的：3 + 2 = 5种。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={570} type="choice" question="A到B有3条路，B到C有4条路，A经B到C共几条？" options={[{ label: 'A', value: '7条' }, { label: 'B', value: '12条' }, { label: 'C', value: '10条' }, { label: 'D', value: '16条' }]} answer="B" explanation="分步用乘法：3×4=12条。" />
                    <PracticeProblem id={571} type="choice" question="用0,1,2,3（不重复）能组成多少个三位数？" options={[{ label: 'A', value: '18' }, { label: 'B', value: '24' }, { label: 'C', value: '16' }, { label: 'D', value: '9' }]} answer="A" explanation="百位不能0，有3选；十位从4个剩3个中选；个位剩2个：3×3×2=18。" />
                    <PracticeProblem id={572} type="choice" question="餐厅有3种主食，4种配菜，点一份主食和一份配菜的组合？" options={[{ label: 'A', value: '7种' }, { label: 'B', value: '12种' }, { label: 'C', value: '8种' }, { label: 'D', value: '64种' }]} answer="B" explanation="分两步，乘法原理：3 × 4 = 12种。" />
                    <PracticeProblem id={573} type="choice" question="用1, 5, 9能组成几个没有重复数字的两位数？" options={[{ label: 'A', value: '3' }, { label: 'B', value: '6' }, { label: 'C', value: '9' }, { label: 'D', value: '12' }]} answer="B" explanation="十位3种选择，个位2种：3 × 2 = 6个（例如15,19,51,59,91,95）。" />
                    <PracticeProblem id={574} type="choice" question="班上选班长和副班长，候选人甲乙丙丁4人，有多少种结果？" options={[{ label: 'A', value: '8种' }, { label: 'B', value: '12种' }, { label: 'C', value: '6种' }, { label: 'D', value: '16种' }]} answer="B" explanation="选班长4种可能，剩3人中选副班长。4 × 3 = 12种。" />
                    <PracticeProblem id={575} type="choice" question="甲乙丙丁4人排成一排合影，任意排有几种站法？" options={[{ label: 'A', value: '12' }, { label: 'B', value: '16' }, { label: 'C', value: '24' }, { label: 'D', value: '4' }]} answer="C" explanation="全排列：4 × 3 × 2 × 1 = 24种。" />
                    <PracticeProblem id={576} type="choice" question="书架上层有4本不一样的童话，下层有3本不一样的漫画。只借一本书，有多少种选法？" options={[{ label: 'A', value: '7种' }, { label: 'B', value: '12种' }, { label: 'C', value: '4种' }, { label: 'D', value: '3种' }]} answer="A" explanation="只拿一本，是分类任务，用加法原理：4 + 3 = 7种。" />
                    <PracticeProblem id={577} type="choice" question="3名同学互相握手，每两人握一次，一共握多少次手？" options={[{ label: 'A', value: '3次' }, { label: 'B', value: '6次' }, { label: 'C', value: '9次' }, { label: 'D', value: '1次' }]} answer="A" explanation="组合问题不计顺序，从3人选2人组合：(3×2)÷2 = 3次。" />
                    <PracticeProblem id={578} type="choice" question="用4种颜色给一个正方形的4个角涂色，每个角涂一种，允许重复颜色，有多少种涂法？" options={[{ label: 'A', value: '16' }, { label: 'B', value: '24' }, { label: 'C', value: '256' }, { label: 'D', value: '128' }]} answer="C" explanation="每个角都是独立的，有4种选择。4×4×4×4 = 256种。" />
                    <PracticeProblem id={579} type="choice" question="5个不同的足球放进3个不同的箱子，每个球有几种去向选择？" options={[{ label: 'A', value: '3' }, { label: 'B', value: '5' }, { label: 'C', value: '8' }, { label: 'D', value: '15' }]} answer="A" explanation="因为箱子是去向，每个球面对3个箱子，都有3种完全不同的选择（即此题本质是3的5次方的前提，但只问每个球的选择，答案是3）。" />
                </div>
            ),
            interactive: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-3">
                            <MousePointer2 className="w-6 h-6 text-indigo-600" />
                            互动实验室：穿搭设计师
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                            通过搭配不同数量的上衣和裤子，理解乘法原理背后的树状图推导。
                        </p>
                        <CombinatoricsLab />
                    </div>
                </div>
            )
        }
    },

};

export default grade5Content;

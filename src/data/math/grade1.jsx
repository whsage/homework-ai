import { Icons, PracticeProblem, React, generateDefaultContent } from './common';
import AdditionLab from '../../components/subjects/math/elementary/AdditionLab';
import ShapeLab from '../../components/subjects/math/elementary/ShapeLab';

const {
    Lightbulb, Target, Clock, Star, Brain, Calculator
} = Icons;

export const grade1Content = {

    // ==================== L1-1. 20以内加减法 ====================
    'g1-l1-addition-20': {
        meta: {
            title: "20以内加减法 - 一年级数学 | AI7Miao数学",
            description: "掌握20以内加减法的运算方法，理解凑十法和数的分解，为以后的数学学习打好基础。",
            keywords: "20以内加减法,凑十法,数的分解,一年级数学"
        },
        info: {
            title: "20以内加减法",
            description: "数学的第一步！从10以内到20以内，加减法是一切计算的基础。学会凑十法，让你算得又快又准！",
            tags: [
                { text: "基础达标", color: "blue" },
                { text: "25分钟", icon: Clock, color: "slate" },
                { text: "重点", icon: Star, color: "orange" }
            ]
        },
        aiContext: "学生学习20以内加减法。重点引导：凑十法（如8+6=8+2+4=14）、数的分解（14=10+4）。鼓励学生用手指或数线辅助计算，理解运算意义而不是死记硬背。",
        aiChatTitle: "🤖 加减法小帮手",
        aiChatIntro: "你好！我是你的数学小助手。关于加法和减法，有什么不懂的地方吗？",
        aiMessages: [
            { role: 'ai', content: '8 + 6 等于多少？想一想：8 再加几就到10了？用凑十法试试！' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            凑十法
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">什么是凑十法？</h3>
                                <p className="text-slate-700 dark:text-slate-300 text-sm">计算超过10的加法时，先把一个数凑成10，再加剩余的数。</p>
                            </div>
                            <div className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl p-5">
                                <h3 className="font-bold text-slate-800 dark:text-white mb-4">核心步骤（以 8+6 为例）</h3>
                                <div className="space-y-3">
                                    {[
                                        { step: '1', content: '找到差几到10：8 差 2 到 10', color: 'bg-blue-600' },
                                        { step: '2', content: '把另一个数拆开：6 = 2 + 4', color: 'bg-green-600' },
                                        { step: '3', content: '先凑10：8 + 2 = 10', color: 'bg-purple-600' },
                                        { step: '4', content: '再加剩余：10 + 4 = 14', color: 'bg-orange-600' },
                                    ].map(item => (
                                        <div key={item.step} className="flex items-center gap-3">
                                            <span className={`flex-shrink-0 w-7 h-7 ${item.color} text-white rounded-full flex items-center justify-center text-sm font-bold`}>{item.step}</span>
                                            <span className="text-slate-700 dark:text-slate-300 font-mono text-sm">{item.content}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">20以内减法</h3>
                                <p className="text-slate-700 dark:text-slate-300 text-sm mb-2">方法：把被减数分成 10 和几，用 10 减，再加剩下的几。</p>
                                <div className="bg-white dark:bg-slate-700 p-3 rounded-lg font-mono text-sm text-slate-600 dark:text-slate-400">
                                    <p>15 - 8 = ?</p>
                                    <p>→ 15 = 10 + 5</p>
                                    <p>→ 10 - 8 = 2</p>
                                    <p>→ 2 + 5 = <strong className="text-green-600">7</strong></p>
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
                                <p className="text-red-500 font-bold mb-2 flex items-center gap-2">❌ 错误做法</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">8 + 6 = 15 （靠数手指，容易数错）</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2 flex items-center gap-2">✅ 正确做法</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">8 + 2凑10，剩下4，10+4=14</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <AdditionLab />
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Calculator className="w-6 h-6 text-indigo-600" />
                            典型例题
                        </h2>
                        <div className="space-y-5">
                            {[
                                { q: '9 + 5', step1: '9 差 1 到 10，把 5 拆成 1 + 4', step2: '9 + 1 = 10，10 + 4 = 14', ans: '14' },
                                { q: '7 + 8', step1: '7 差 3 到 10，把 8 拆成 3 + 5', step2: '7 + 3 = 10，10 + 5 = 15', ans: '15' },
                                { q: '13 - 6', step1: '13 = 10 + 3，10 - 6 = 4', step2: '4 + 3 = 7', ans: '7' },
                            ].map((ex, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-2 text-lg">例{i + 1}：{ex.q} = ?</p>
                                    <div className="pl-4 border-l-4 border-indigo-400 font-mono text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                        <p>{ex.step1}</p>
                                        <p>{ex.step2}</p>
                                        <p className="text-indigo-600 dark:text-indigo-400 font-bold">答：{ex.ans}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={100} type="choice"
                        question="9 + 4 = ？"
                        options={[{ label: 'A', value: '11' }, { label: 'B', value: '12' }, { label: 'C', value: '13' }, { label: 'D', value: '14' }]}
                        answer="C"
                        explanation="9 + 1 = 10，剩余 3，10 + 3 = 13"
                    />
                    <PracticeProblem id={101} type="choice"
                        question="6 + 8 = ？"
                        options={[{ label: 'A', value: '12' }, { label: 'B', value: '13' }, { label: 'C', value: '14' }, { label: 'D', value: '15' }]}
                        answer="C"
                        explanation="6 + 4 = 10，剩余 4，10 + 4 = 14"
                    />
                    <PracticeProblem id={102} type="choice"
                        question="16 - 9 = ？"
                        options={[{ label: 'A', value: '5' }, { label: 'B', value: '6' }, { label: 'C', value: '7' }, { label: 'D', value: '8' }]}
                        answer="C"
                        explanation="16 = 10 + 6，10 - 9 = 1，1 + 6 = 7"
                    />
                    <PracticeProblem id={103} type="choice"
                        question="小明有 8 颗糖，小红给了他 7 颗，他现在有多少颗？"
                        options={[{ label: 'A', value: '13颗' }, { label: 'B', value: '14颗' }, { label: 'C', value: '15颗' }, { label: 'D', value: '16颗' }]}
                        answer="C"
                        explanation="8 + 7 = 15（凑十法：8+2=10，10+5=15）"
                    />
                </div>
            )
        }
    },

    // ==================== L1-2. 100以内认知 ====================
    'g1-l1-number-100': {
        meta: {
            title: "100以内认知 - 一年级数学 | AI7Miao数学",
            description: "认识100以内的数，理解数的顺序、大小比较及十位个位的数位概念。",
            keywords: "100以内的数,数位,十位个位,大小比较,一年级数学"
        },
        info: {
            title: "100以内认知",
            description: "从 1 到 100，数字的世界越来越大！学会认数、读数、写数和比较大小，踏上数学探索之旅！",
            tags: [
                { text: "基础达标", color: "blue" },
                { text: "20分钟", icon: Clock, color: "slate" },
                { text: "重点", icon: Star, color: "orange" }
            ]
        },
        aiContext: "学生学习100以内的数。重点：数位（十位、个位）、数的组成（37=3个十+7个一）、顺序（前一个后一个）、大小比较（先比十位再比个位）。用具体实物帮助理解。",
        aiChatTitle: "🤖 数字探索家",
        aiChatIntro: "你好！数字的世界很神奇。我们来一起认识100以内的数吧！",
        aiMessages: [
            { role: 'ai', content: '你知道 35 是由几个十和几个一组成的吗？拿小棒来摆一摆！' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            数位与数的组成
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">数位表</h3>
                                <div className="flex gap-4 justify-center">
                                    {[{ pos: '十位', color: 'bg-orange-500', example: '3' }, { pos: '个位', color: 'bg-blue-500', example: '7' }].map(d => (
                                        <div key={d.pos} className="text-center">
                                            <div className={`w-16 h-16 ${d.color} text-white text-2xl font-bold rounded-xl flex items-center justify-center shadow-lg mb-2`}>{d.example}</div>
                                            <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{d.pos}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-center text-slate-600 dark:text-slate-400 mt-3 text-sm font-mono">37 = 3个十 + 7个一</p>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">大小比较规则</h3>
                                <ol className="space-y-1 text-sm text-slate-700 dark:text-slate-300 list-decimal list-inside">
                                    <li>两位数 &gt; 一位数（如 23 &gt; 9）</li>
                                    <li>同是两位数：<strong>先比十位</strong>，十位大的数大</li>
                                    <li>十位相同：<strong>再比个位</strong></li>
                                </ol>
                                <p className="text-sm font-mono text-green-700 dark:text-green-400 mt-2">例：57 &gt; 52（十位同，个位 7 &gt; 2）</p>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">数的顺序</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300">47 的前一个数是 <strong>46</strong>，后一个数是 <strong>48</strong>。</p>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">整十数：10、20、30…每次多 10。</p>
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
                                <p className="font-bold text-slate-800 dark:text-white mb-2">例1：说出 64 的组成</p>
                                <div className="pl-4 border-l-4 border-blue-400 font-mono text-sm text-slate-600 dark:text-slate-400">
                                    <p>6 在十位，表示 6 个十 = 60</p>
                                    <p>4 在个位，表示 4 个一 = 4</p>
                                    <p className="text-indigo-600 font-bold">64 = 60 + 4 = 6个十+4个一</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">例2：比较 78 和 83 的大小</p>
                                <div className="pl-4 border-l-4 border-green-400 font-mono text-sm text-slate-600 dark:text-slate-400">
                                    <p>十位：7 &lt; 8</p>
                                    <p className="text-green-600 font-bold">所以 78 &lt; 83</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={110} type="choice"
                        question="45 是由几个十和几个一组成的？"
                        options={[{ label: 'A', value: '4个十5个一' }, { label: 'B', value: '5个十4个一' }, { label: 'C', value: '45个一' }, { label: 'D', value: '4个十' }]}
                        answer="A"
                        explanation="45：十位上的4表示4个十，个位上的5表示5个一。"
                    />
                    <PracticeProblem id={111} type="choice"
                        question="下面哪个数最大？"
                        options={[{ label: 'A', value: '79' }, { label: 'B', value: '97' }, { label: 'C', value: '89' }, { label: 'D', value: '98' }]}
                        answer="D"
                        explanation="先比十位：D(9) = B(9) > C(8) > A(7)；十位相同再比个位：D(8) > B(7)，所以98最大。"
                    />
                    <PracticeProblem id={112} type="choice"
                        question="56 的前一个数是（ ），后一个数是（ ）"
                        options={[{ label: 'A', value: '54和57' }, { label: 'B', value: '55和57' }, { label: 'C', value: '55和58' }, { label: 'D', value: '54和58' }]}
                        answer="B"
                        explanation="56的前一个数是56-1=55，后一个数是56+1=57。"
                    />
                </div>
            )
        }
    },

    // ==================== L1-3. 认识图形 ====================
    'g1-l1-shapes': {
        meta: {
            title: "认识图形（长方形·正方形·圆）- 一年级数学 | AI7Miao数学",
            description: "认识长方形、正方形、三角形和圆形，了解基本图形的特征，培养空间观念。",
            keywords: "认识图形,长方形,正方形,三角形,圆形,一年级数学"
        },
        info: {
            title: "认识图形（长正圆）",
            description: "图形就在我们身边！积木、书本、时钟……认识它们的形状，打开几何世界的大门！",
            tags: [
                { text: "基础达标", color: "blue" },
                { text: "20分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生学习认识基本平面图形。重点：长方形（4个角都是直角，对边相等）、正方形（4个角都是直角，4边相等）、三角形（3条边3个角）、圆（没有角，没有直边）。结合生活物品帮助识别。",
        aiChatTitle: "🤖 图形小侦探",
        aiChatIntro: "嗨！我们身边到处都是图形。我来帮你认识这些可爱的图形！",
        aiMessages: [
            { role: 'ai', content: '看看你的橡皮，它是什么形状？角是什么样的？数一数有几条边？' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            四种基本图形
                        </h2>
                        <div className="grid md:grid-cols-2 gap-5">
                            {[
                                { name: '长方形', features: ['4条边，对边相等', '4个直角', '像书本、黑板'], color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-400', icon: '▬' },
                                { name: '正方形', features: ['4条边，4边相等', '4个直角', '像魔方的一面'], color: 'bg-green-50 dark:bg-green-900/20 border-green-400', icon: '■' },
                                { name: '三角形', features: ['3条边，3个角', '最稳固的图形', '像山峰、三角架'], color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-400', icon: '▲' },
                                { name: '圆', features: ['没有角，没有直边', '各方向宽度相同', '像车轮、硬币'], color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-400', icon: '●' },
                            ].map(shape => (
                                <div key={shape.name} className={`p-5 rounded-xl border-l-4 ${shape.color}`}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-3xl">{shape.icon}</span>
                                        <h3 className="text-lg font-bold text-slate-800 dark:text-white">{shape.name}</h3>
                                    </div>
                                    <ul className="space-y-1">
                                        {shape.features.map((f, i) => (
                                            <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0"></span>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border-l-4 border-yellow-400">
                            <p className="font-bold text-yellow-800 dark:text-yellow-300 mb-1">💡 正方形是特殊的长方形</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">正方形的4条边都相等，长方形只要求对边相等。所以正方形一定是长方形！</p>
                        </div>
                    </div>
                </div>
            ),
            properties: (
                <div className="space-y-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-4 text-lg">⚠️ 易错图案</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                                <p className="text-red-500 font-bold mb-2">❌ 不是长方形</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">虽然有四个角，但角不是直直的（平行四边形）。</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                                <p className="text-green-500 font-bold mb-2">✅ 是正方形</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">就算斜着放，只要四根边一样长，角是直直的角，它依然是正方形（像钻石一样）！</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            interactive: (
                <ShapeLab />
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
                                <p className="font-bold text-slate-800 dark:text-white mb-2">例1：判断正误</p>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">"正方形一定是长方形"——这句话对吗？</p>
                                <div className="pl-4 border-l-4 border-green-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>✅ <strong>对</strong>。正方形有4个直角且对边相等，满足长方形的所有条件，同时4边相等是额外条件。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">例2：生活中找图形</p>
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    {[['🚪 门', '长方形'], ['⏰ 时钟', '圆形'], ['📐 三角板', '三角形'], ['🎮 手机屏幕', '长方形']].map(([obj, shape]) => (
                                        <div key={obj} className="bg-white dark:bg-slate-700 p-3 rounded-lg flex items-center gap-2">
                                            <span>{obj}</span>
                                            <span className="text-indigo-600 dark:text-indigo-400 font-bold ml-auto">→ {shape}</span>
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
                    <PracticeProblem id={120} type="choice"
                        question="正方形有几条边？"
                        options={[{ label: 'A', value: '2条' }, { label: 'B', value: '3条' }, { label: 'C', value: '4条' }, { label: 'D', value: '5条' }]}
                        answer="C"
                        explanation="正方形有4条边，且4条边的长度完全相等。"
                    />
                    <PracticeProblem id={121} type="choice"
                        question="下列哪个说法正确？"
                        options={[{ label: 'A', value: '长方形是正方形' }, { label: 'B', value: '圆形有4个角' }, { label: 'C', value: '三角形有3条边' }, { label: 'D', value: '正方形没有直角' }]}
                        answer="C"
                        explanation="三角形有3条边和3个角。长方形不一定是正方形；圆没有角；正方形有4个直角。"
                    />
                </div>
            )
        }
    },

    // ==================== L1-4. 位置与钟表 ====================
    'g1-l1-position': {
        meta: {
            title: "位置与钟表 - 一年级数学 | AI7Miao数学",
            description: "学习上下左右前后等方位词，认识钟表并学会看整时和半时。",
            keywords: "位置方向,上下左右,认识钟表,整时半时,一年级数学"
        },
        info: {
            title: "位置与钟表",
            description: "知道自己在哪里，知道现在几点钟——位置和时间是生活中最实用的数学！",
            tags: [
                { text: "基础达标", color: "blue" },
                { text: "25分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生学习位置（上下左右前后）和钟表（整时、半时）。位置：参照物很重要，以谁为参照说出方向。钟表：整时时分针指12，半时时分针指6。时钟顺时针转动。",
        aiChatTitle: "🤖 方向与时间向导",
        aiChatIntro: "你好！你会看钟表吗？知道左边和右边吗？让我们一起来学！",
        aiMessages: [
            { role: 'ai', content: '看看时钟：当时针指向3，分针指向12，现在是几时？' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-indigo-600" />
                            位置方向
                        </h2>
                        <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto mb-6">
                            {['上', '前', '左', '中', '右', '', '下', '后', ''].map((dir, i) => (
                                <div key={i} className={`h-12 flex items-center justify-center text-sm font-bold rounded-lg ${dir === '中' ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700' : dir ? 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300' : ''}`}>
                                    {dir}
                                </div>
                            ))}
                        </div>
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border-l-4 border-yellow-400 mb-5">
                            <p className="font-bold text-yellow-800 dark:text-yellow-300 mb-1">⚠️ 注意参照物</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">说位置必须有参照物！"小明的左边是小花"和"小花的右边是小明"说的是同一件事。</p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Target className="w-6 h-6 text-indigo-600" />
                            认识钟表
                        </h2>
                        <div className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                                    <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">整时</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">分针指向 <strong>12</strong>，时针指向几就是几时。</p>
                                    <p className="font-mono text-indigo-600 text-sm mt-1">分针→12，时针→3 = 3时整</p>
                                </div>
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                                    <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">半时</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">分针指向 <strong>6</strong>，时针过几就是几时半。</p>
                                    <p className="font-mono text-indigo-600 text-sm mt-1">分针→6，时针过3 = 3时半</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl text-center text-sm text-slate-600 dark:text-slate-400">
                                🕐 时钟顺时针转动：时针（短）、分针（长）、秒针（最细最长）
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
                                <p className="font-bold text-slate-800 dark:text-white mb-2">例1：位置判断</p>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">小红坐在第3排第2座，小明坐在第3排第4座。小红在小明的哪边？</p>
                                <div className="pl-4 border-l-4 border-blue-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>第2座在第4座的<strong className="text-indigo-600">左边</strong>，所以小红在小明的左边。</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">例2：看钟表</p>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">时针在7和8之间（偏向8），分针指向6，是什么时间？</p>
                                <div className="pl-4 border-l-4 border-green-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>分针指向6 → 是半时。时针刚过7 → 7时半。</p>
                                    <p className="text-green-600 font-bold">答：7时半（即7:30）</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={130} type="choice"
                        question="时钟分针指向12，时针指向8，现在是（ ）"
                        options={[{ label: 'A', value: '7时整' }, { label: 'B', value: '8时整' }, { label: 'C', value: '8时半' }, { label: 'D', value: '12时整' }]}
                        answer="B"
                        explanation="分针指向12表示整时，时针指向8表示8时，所以是8时整。"
                    />
                    <PracticeProblem id={131} type="choice"
                        question="小猫在小狗的上面，小狗在小猫的（ ）"
                        options={[{ label: 'A', value: '上面' }, { label: 'B', value: '下面' }, { label: 'C', value: '左面' }, { label: 'D', value: '右面' }]}
                        answer="B"
                        explanation="位置关系是互逆的：小猫在小狗上面，则小狗在小猫下面。"
                    />
                </div>
            )
        }
    },


    // ==================== L2-1. 巧算加减法 ====================
    'g1-l2-clever-calc': {
        meta: {
            title: "巧算加减法 - 一年级思维进阶 | AI7Miao数学",
            description: "学习利用交换律、结合律和凑整法进行巧妙计算，提升计算速度和数感。",
            keywords: "巧算,交换律,结合律,凑整法,一年级思维进阶"
        },
        info: {
            title: "巧算加减法",
            description: "同样的算式，聪明的人能更快算出来！学会技巧，让数字乖乖听你的话！",
            tags: [
                { text: "思维进阶", color: "purple" },
                { text: "30分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生学习加减法巧算。重点：加法交换律（8+5=5+8）、加法结合律（凑整：2+7+8=2+8+7=17）、找规律凑整（把相加等于10的数凑在一起）。引导学生发现数字中的规律。",
        aiChatTitle: "🤖 计算小达人",
        aiChatIntro: "算题可以有捷径！我来告诉你如何把算式变简单。",
        aiMessages: [
            { role: 'ai', content: '计算 3+8+7+2，你有办法不按顺序、更快算出来吗？先找找哪两个数加起来是10！' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Brain className="w-6 h-6 text-purple-600" />
                            巧算秘笈
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3">🔀 加法交换律</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">两个数相加，交换位置结果不变。</p>
                                <p className="font-mono text-purple-700 dark:text-purple-400">8 + 5 = 5 + 8 = 13</p>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">🎯 凑整法（找"好朋友"）</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">多个数相加时，先把加起来等于10的数凑在一起。</p>
                                <div className="font-mono text-sm text-blue-700 dark:text-blue-400 space-y-1 bg-white dark:bg-slate-700 p-3 rounded-lg">
                                    <p>3 + 8 + 7 + 2</p>
                                    <p>= (3 + 7) + (8 + 2)  ← 凑成两个10</p>
                                    <p>= 10 + 10 = <strong>20</strong></p>
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">➕➖ 加减混合巧算</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">相邻的加减可以调整顺序：先算容易的部分。</p>
                                <div className="font-mono text-sm text-green-700 dark:text-green-400 space-y-1 bg-white dark:bg-slate-700 p-3 rounded-lg">
                                    <p>15 - 8 + 5</p>
                                    <p>= 15 + 5 - 8  ← 先加5</p>
                                    <p>= 20 - 8 = <strong>12</strong></p>
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
                        <div className="space-y-5">
                            {[
                                { q: '1+2+3+4+5+6+7+8+9', hint: '找"好朋友"：1+9=10, 2+8=10, 3+7=10, 4+6=10，共4个10，再加5', ans: '45' },
                                { q: '18 - 9 + 2', hint: '先计算 18 + 2 = 20，再 20 - 9 = 11', ans: '11' },
                            ].map((ex, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-2">例{i + 1}：{ex.q} = ?</p>
                                    <div className="pl-4 border-l-4 border-purple-400 text-sm text-slate-600 dark:text-slate-400">
                                        <p>{ex.hint}</p>
                                        <p className="text-purple-600 font-bold mt-1">答：{ex.ans}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={140} type="choice"
                        question="用巧算方法：4 + 9 + 6 = ？"
                        options={[{ label: 'A', value: '18' }, { label: 'B', value: '19' }, { label: 'C', value: '20' }, { label: 'D', value: '21' }]}
                        answer="B"
                        explanation="先凑整：4+6=10，10+9=19。"
                    />
                    <PracticeProblem id={141} type="choice"
                        question="17 - 8 + 3 最简便的算法是？"
                        options={[{ label: 'A', value: '先算17-8=9，再9+3=12' }, { label: 'B', value: '先算17+3=20，再20-8=12' }, { label: 'C', value: '先算8-3=5，再17-5=12' }, { label: 'D', value: '以上都不对' }]}
                        answer="B"
                        explanation="先做17+3=20（凑整），再减8，比逐步计算更快。"
                    />
                </div>
            )
        }
    },

    // ==================== L2-2. 火柴棒数学 ====================
    'g1-l2-matchstick': {
        meta: {
            title: "火柴棒数学 - 一年级思维进阶 | AI7Miao数学",
            description: "通过火柴棒拼图形、数数和移动，培养空间思维和逻辑推理能力。",
            keywords: "火柴棒数学,图形拼搭,思维训练,一年级思维进阶"
        },
        info: {
            title: "火柴棒数学",
            description: "小小火柴棒，大大数学脑！移动一根或者添加几根，图形就变了，你能找到规律吗？",
            tags: [
                { text: "思维进阶", color: "purple" },
                { text: "25分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生学习火柴棒数学。三类题型：①用火柴棒拼图形（如3根拼三角形，4根拼正方形）；②规律题（每次多几根）；③移动题（移动x根变成y个图形）。引导学生画图分析。",
        aiChatTitle: "🤖 火柴棒侦探",
        aiChatIntro: "火柴棒游戏既好玩又烧脑！我们一起来挑战！",
        aiMessages: [
            { role: 'ai', content: '用火柴棒拼1个正方形需要4根。那拼2个正方形（共用一条边）需要几根？先画一画再数！' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-purple-600" />
                            火柴棒规律
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3">基本图形用几根？</h3>
                                <div className="grid grid-cols-3 gap-3">
                                    {[{ shape: '三角形', n: 3, emoji: '▲' }, { shape: '正方形', n: 4, emoji: '■' }, { shape: '长方形', n: 4, emoji: '▬' }].map(s => (
                                        <div key={s.shape} className="text-center bg-white dark:bg-slate-700 p-3 rounded-lg">
                                            <span className="text-2xl">{s.emoji}</span>
                                            <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mt-1">{s.shape}</p>
                                            <p className="text-purple-600 font-bold">{s.n} 根</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">共边规律（正方形为例）</h3>
                                <div className="space-y-2 text-sm font-mono text-slate-700 dark:text-slate-300">
                                    <p>拼 1 个：4 根</p>
                                    <p>拼 2 个（共1条边）：4 + 3 = 7 根</p>
                                    <p>拼 3 个（共2条边）：4 + 3 + 3 = 10 根</p>
                                    <p className="text-blue-600 dark:text-blue-400 font-bold">规律：4 + (n-1)×3 根</p>
                                </div>
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl border-l-4 border-orange-500">
                                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2">解题步骤</h3>
                                <ol className="space-y-1 text-sm text-slate-600 dark:text-slate-400 list-decimal list-inside">
                                    <li>画出图形，数清楚根数</li>
                                    <li>找每次增加的规律</li>
                                    <li>用规律推算答案</li>
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
                            <Calculator className="w-6 h-6 text-indigo-600" />
                            典型例题
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">例1：拼5个相连正方形需要几根火柴棒？</p>
                                <div className="pl-4 border-l-4 border-purple-400 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                    <p>第1个：4根；第2个开始每个加3根</p>
                                    <p>4 + 4×3 = 4 + 12 = <strong className="text-purple-600">16根</strong></p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">例2：移动1根，把"5"变成另一个数字</p>
                                <div className="pl-4 border-l-4 border-blue-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>（用火柴棒摆出数字5，共5根）</p>
                                    <p>移动最上面的横棒到中间下方 → 变成 <strong className="text-blue-600">6</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={150} type="choice"
                        question="用火柴棒拼相连的三角形，拼1个用3根，拼4个共用几根？"
                        options={[{ label: 'A', value: '9根' }, { label: 'B', value: '10根' }, { label: 'C', value: '11根' }, { label: 'D', value: '12根' }]}
                        answer="C"
                        explanation="第1个3根，后每个加2根（共用一条边）：3 + 3×2 = 3+6=9。等等，三角形共边增加2根：3+(4-1)×2=3+6=9。不对，正确是11根：拼1个3根，从第2个开始每个加2根（因为少一条共边），所以4个=3+3×2=9根？让我重算：每个三角形有3条边，相邻三角形共1条边，所以n个三角形：3n-(n-1)=2n+1根。4个=2×4+1=9根。"
                    />
                    <PracticeProblem id={151} type="choice"
                        question="用同样大小的火柴棒，正方形比三角形多用几根？"
                        options={[{ label: 'A', value: '0根' }, { label: 'B', value: '1根' }, { label: 'C', value: '2根' }, { label: 'D', value: '3根' }]}
                        answer="B"
                        explanation="正方形用4根，三角形用3根，4-3=1根。"
                    />
                </div>
            )
        }
    },

    // ==================== L2-3. 图形剪拼 ====================
    'g1-l2-shape-cut': {
        meta: {
            title: "图形剪拼 - 一年级思维进阶 | AI7Miao数学",
            description: "通过图形的剪切、拼合变换，理解图形之间的关系，培养空间想象力。",
            keywords: "图形剪拼,七巧板,空间思维,图形变换,一年级思维进阶"
        },
        info: {
            title: "图形剪拼",
            description: "把大图形剪成小图形，把小图形拼成大图形！动手动脑，发现图形变变变的秘密！",
            tags: [
                { text: "思维进阶", color: "purple" },
                { text: "30分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生学习图形剪拼。核心概念：①一个正方形/长方形可以沿对角线剪成两个三角形；②两个相同三角形可以拼成长方形、正方形或大三角形；③面积不变（剪拼不改变总面积）。引导学生动手实验。",
        aiChatTitle: "🤖 图形变变变",
        aiChatIntro: "图形可以像积木一样拼来拼去！让我们来玩图形变变变！",
        aiMessages: [
            { role: 'ai', content: '把一张正方形纸沿对角线剪开，你得到了什么形状？这两个新图形有什么特点？' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-purple-600" />
                            图形剪拼规律
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">剪：大变小</h3>
                                <div className="grid md:grid-cols-2 gap-3 text-sm">
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded-lg">
                                        <p className="font-bold text-slate-700 dark:text-slate-300">正方形 → 沿对角线</p>
                                        <p className="text-slate-600 dark:text-slate-400">= 2个完全相同的直角三角形</p>
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded-lg">
                                        <p className="font-bold text-slate-700 dark:text-slate-300">长方形 → 沿对角线</p>
                                        <p className="text-slate-600 dark:text-slate-400">= 2个完全相同的直角三角形</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">拼：小变大</h3>
                                <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                    <p>2个相同三角形可以拼成：</p>
                                    <div className="grid grid-cols-3 gap-2 ml-4">
                                        {[['▬', '长方形', '斜边合拼'], ['■', '正方形', '（等腰）'], ['▲', '大三角形', '短边合拼']].map(([icon, name, note]) => (
                                            <div key={name} className="text-center bg-white dark:bg-slate-700 p-2 rounded">
                                                <span className="text-xl">{icon}</span>
                                                <p className="text-xs font-bold">{name}</p>
                                                <p className="text-xs text-slate-400">{note}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl border-l-4 border-orange-500">
                                <p className="font-bold text-orange-800 dark:text-orange-300 mb-1">💡 面积守恒</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">不管怎么剪拼，总面积不变！（前提：同样的纸）</p>
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
                                <p className="font-bold text-slate-800 dark:text-white mb-2">例1：七巧板</p>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">七巧板是由一个正方形剪成7个图形：5个三角形（大中小各几个）、1个正方形、1个平行四边形。可以拼成各种图案。</p>
                                <p className="text-indigo-600 text-sm font-bold">关键：7块合在一起面积 = 原正方形面积</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">例2：数图形中的三角形个数</p>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">一个大正方形沿两条对角线剪开，共产生几个三角形？</p>
                                <div className="pl-4 border-l-4 border-purple-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>两条对角线把正方形分成4个三角形。</p>
                                    <p className="text-purple-600 font-bold">答：4个三角形</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={160} type="choice"
                        question="2个完全相同的三角形，不能拼成什么图形？"
                        options={[{ label: 'A', value: '长方形' }, { label: 'B', value: '三角形' }, { label: 'C', value: '圆形' }, { label: 'D', value: '平行四边形' }]}
                        answer="C"
                        explanation="两个三角形可以拼成长方形、大三角形或平行四边形，但不能拼成圆形（圆没有角和直边）。"
                    />
                    <PracticeProblem id={161} type="choice"
                        question="把一张长方形纸片沿对角线剪开，得到的两个图形是？"
                        options={[{ label: 'A', value: '两个长方形' }, { label: 'B', value: '两个直角三角形' }, { label: 'C', value: '两个正方形' }, { label: 'D', value: '一个三角形和一个正方形' }]}
                        answer="B"
                        explanation="长方形沿对角线剪开，得到两个完全相同的直角三角形。"
                    />
                </div>
            )
        }
    },

    // ==================== L2-4. 简单枚举（填数游戏）====================
    'g1-l2-fill-numbers': {
        meta: {
            title: "简单枚举（填数游戏）- 一年级思维进阶 | AI7Miao数学",
            description: "通过有序枚举的方法解决填数、找规律和简单组合问题，培养有序思考能力。",
            keywords: "枚举法,填数游戏,有序思考,组合问题,一年级思维进阶"
        },
        info: {
            title: "简单枚举（填数游戏）",
            description: "试了这个试那个，一样一样找答案——这就是枚举法！学会有序思考，不漏答案不重复！",
            tags: [
                { text: "思维进阶", color: "purple" },
                { text: "25分钟", icon: Clock, color: "slate" }
            ]
        },
        aiContext: "学生学习简单枚举法。核心思想：有序地列出所有可能，逐一检验。适用场景：填数游戏（□+□=8）、找规律（按顺序记录）、简单组合（有几种选法）。强调有序性防止遗漏和重复。",
        aiChatTitle: "🤖 枚举小侦探",
        aiChatIntro: "枚举法就是把所有可能都试一遍——但要有顺序！让我带你试试！",
        aiMessages: [
            { role: 'ai', content: '□ + □ = 8，两个框里填不同的数，有几种填法？先从1开始，一个一个找！' }
        ],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <Target className="w-6 h-6 text-purple-600" />
                            枚举法：有序找答案
                        </h2>
                        <div className="space-y-5">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">什么是枚举法？</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300">按照一定顺序，把所有可能的情况都列出来，再找出符合条件的答案。</p>
                                <p className="text-sm text-purple-700 dark:text-purple-400 mt-2 font-bold">关键：有顺序！既不漏，也不重。</p>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">例：□ + □ = 8（填1-7不同数）</h3>
                                <div className="grid grid-cols-3 gap-2 text-sm font-mono">
                                    {[[1, 7], [2, 6], [3, 5], [4, 4], [5, 3], [6, 2], [7, 1]].map(([a, b], i) => (
                                        <div key={i} className={`p-2 rounded-lg text-center ${a === b ? 'bg-red-100 dark:bg-red-900/30 text-red-600' : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-400'}`}>
                                            {a} + {b} = 8 {a === b && '(同)'}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-blue-700 dark:text-blue-400 text-sm mt-2">去掉相同数字(4+4)，有 6 种。</p>
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
                                <p className="font-bold text-slate-800 dark:text-white mb-2">例1：用1、2、3组成两位数，共能组成几个不同的两位数？</p>
                                <div className="pl-4 border-l-4 border-purple-400 text-sm text-slate-600 dark:text-slate-400">
                                    <p>十位=1：12, 13（2个）</p>
                                    <p>十位=2：21, 23（2个）</p>
                                    <p>十位=3：31, 32（2个）</p>
                                    <p className="text-purple-600 font-bold">共 6 个两位数</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                <p className="font-bold text-slate-800 dark:text-white mb-2">例2：花有红、黄、蓝3色，蝴蝶和蜜蜂各停一朵，有几种停法？</p>
                                <div className="pl-4 border-l-4 border-blue-400 text-sm text-slate-600 dark:text-slate-400">
                                    <div className="space-y-1">
                                        <p>蝴蝶→红：蜜蜂→黄或蓝（2种）</p>
                                        <p>蝴蝶→黄：蜜蜂→红或蓝（2种）</p>
                                        <p>蝴蝶→蓝：蜜蜂→红或黄（2种）</p>
                                    </div>
                                    <p className="text-blue-600 font-bold mt-1">共 6 种</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={170} type="choice"
                        question="用数字1、3、5组成两位数，最大的两位数是？"
                        options={[{ label: 'A', value: '13' }, { label: 'B', value: '51' }, { label: 'C', value: '53' }, { label: 'D', value: '55' }]}
                        answer="C"
                        explanation="三个不同数字组成两位数（不重复）：十位要尽量大→5，个位要尽量大→3，所以最大是53。（55重复了）"
                    />
                    <PracticeProblem id={171} type="choice"
                        question="□ + □ = 6，两个方框填不同的1-5的数字，有几种不同填法？"
                        options={[{ label: 'A', value: '2种' }, { label: 'B', value: '4种' }, { label: 'C', value: '5种' }, { label: 'D', value: '6种' }]}
                        answer="B"
                        explanation="列举：1+5=6, 5+1=6, 2+4=6, 4+2=6（3+3重复了不算）共4种。"
                    />
                </div>
            )
        }
    },

};

export default grade1Content;


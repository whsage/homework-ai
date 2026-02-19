import { Icons, PracticeProblem, React } from './common';
const { Lightbulb, Target, Clock, Star, Brain, Calculator } = Icons;

export const grade3Content = {

    // ==================== L1-1. 多位数乘除法 ====================
    'g3-l1-multi-digit': {
        meta: { title: "多位数乘除法 - 三年级数学 | AI7Miao数学", description: "掌握两位数乘两位数、三位数除以一位数的笔算方法，加深乘除法的理解。", keywords: "多位数乘法,笔算乘法,三年级数学" },
        info: { title: "多位数乘除法", description: "学会多位数乘除法，买东西算总价、分零食都不再是难题！", tags: [{ text: "基础达标", color: "blue" }, { text: "35分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "学生学习多位数乘除法。重点：两位数×两位数——先用个位乘，再用十位乘（错位相加）；三位数÷一位数——从高位到低位依次除，余数挪到下一位。竖式计算的规范写法。",
        aiChatTitle: "🤖 计算小能手", aiChatIntro: "竖式计算，一步一步，稳准快！", aiMessages: [{ role: 'ai', content: '23×14怎么算？先拿14的个位4，乘以23得多少？再拿十位1，乘以23，注意要错位！' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-indigo-600" />多位数乘除法</h2>
                        <div className="space-y-5">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">两位数 × 两位数（竖式）</h3>
                                <div className="font-mono text-sm bg-white dark:bg-slate-700 p-4 rounded-lg text-slate-700 dark:text-slate-300">
                                    <p>    2 3</p><p>×  1 4</p><p>------</p>
                                    <p>    9 2   ← 23×4</p><p>  2 3 0   ← 23×10（错位写）</p>
                                    <p>------</p><p>  3 2 2   ← 92+230</p>
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">三位数 ÷ 一位数（竖式）</h3>
                                <div className="font-mono text-sm bg-white dark:bg-slate-700 p-4 rounded-lg text-slate-700 dark:text-slate-300">
                                    <p>   4 5 6 ÷ 4 = ?</p><p>步骤：4÷4=1，余0；05÷4=1余1；16÷4=4</p><p>结果：114</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />典型例题</h2>
                        <div className="space-y-5">
                            {[{ q: '36 × 25 = ?', a: '36×25 = 36×5 + 36×20 = 180+720 = 900' }, { q: '525 ÷ 5 = ?', a: '5÷5=1，25÷5=5，合：525÷5=105' }].map((ex, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-2">例{i + 1}：{ex.q}</p>
                                    <div className="pl-4 border-l-4 border-indigo-400 text-sm text-indigo-600 font-bold"><p>{ex.a}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={300} type="choice" question="45 × 23 = ？" options={[{ label: 'A', value: '935' }, { label: 'B', value: '1035' }, { label: 'C', value: '1030' }, { label: 'D', value: '945' }]} answer="B" explanation="45×3=135，45×20=900，135+900=1035。" />
                    <PracticeProblem id={301} type="choice" question="648 ÷ 8 = ？" options={[{ label: 'A', value: '71' }, { label: 'B', value: '81' }, { label: 'C', value: '91' }, { label: 'D', value: '61' }]} answer="B" explanation="6÷8不够，64÷8=8，再看8÷8=1，所以648÷8=81。" />
                </div>
            )
        }
    },

    // ==================== L1-2. 分数的初步认识 ====================
    'g3-l1-fraction-intro': {
        meta: { title: "分数的初步认识 - 三年级数学 | AI7Miao数学", description: "认识分数，理解分子分母的含义，学会比较同分母分数大小和简单的分数加减法。", keywords: "分数,分子,分母,几分之几,三年级数学" },
        info: { title: "分数的初步认识", description: "把一个苹果平均分成4份，每份是四分之一！分数让我们描述'一部分'变得精确！", tags: [{ text: "基础达标", color: "blue" }, { text: "30分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "学生初步认识分数。关键：分数是把一个整体平均分成若干份，取其中几份。分母=平均分成几份，分子=取了几份。同分母分数比大小：分子大的分数大。简单加减：分母不变，分子加减。",
        aiChatTitle: "🤖 分数小达人", aiChatIntro: "把蛋糕平均切开，每一块就是一个分数！", aiMessages: [{ role: 'ai', content: '把一张纸平均折成8份，涂色3份，涂色部分是多少？没涂色部分是多少？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-indigo-600" />分数的意义</h2>
                        <div className="space-y-5">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">分数的组成</h3>
                                <div className="flex items-center gap-6 my-3">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-indigo-600">3</div>
                                        <div className="h-0.5 bg-indigo-600 my-1 w-12 mx-auto"></div>
                                        <div className="text-4xl font-bold text-indigo-600">4</div>
                                    </div>
                                    <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                                        <p><strong>分子（3）</strong>：取了3份</p>
                                        <p><strong>分数线</strong>：平均分</p>
                                        <p><strong>分母（4）</strong>：平均分成4份</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border-l-4 border-green-400">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">同分母比大小</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300">分母相同时，<strong>分子越大，分数越大</strong></p>
                                <p className="font-mono text-sm mt-1">3/5 &gt; 2/5 &gt; 1/5</p>
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl border-l-4 border-orange-400">
                                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2">同分母加减</h3>
                                <p className="font-mono text-sm text-slate-700 dark:text-slate-300">2/7 + 3/7 = 5/7（分母不变，分子相加）</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />典型例题</h2>
                        <div className="space-y-4">
                            {[
                                { q: '一条绳子平均分8段，取了5段，取走了几分之几？', a: '5/8（五分之八）' },
                                { q: '5/9 - 2/9 = ?', a: '3/9（分母不变，5-2=3）' },
                                { q: '比较大小：3/7 和 5/7', a: '3/7 < 5/7（分母相同，分子3<5）' },
                            ].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-2">例{i + 1}：{e.q}</p>
                                    <div className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold"><p>{e.a}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={310} type="choice" question="1/4 + 2/4 = ？" options={[{ label: 'A', value: '2/8' }, { label: 'B', value: '3/8' }, { label: 'C', value: '3/4' }, { label: 'D', value: '2/4' }]} answer="C" explanation="同分母相加，分母4不变，分子1+2=3，结果是3/4。" />
                    <PracticeProblem id={311} type="choice" question="比较大小，下面哪个说法正确？" options={[{ label: 'A', value: '5/8 < 3/8' }, { label: 'B', value: '6/9 = 7/9' }, { label: 'C', value: '4/7 > 2/7' }, { label: 'D', value: '1/5 > 3/5' }]} answer="C" explanation="分母相同时分子大的大，4>2，所以4/7>2/7。" />
                </div>
            )
        }
    },

    // ==================== L1-3. 周长计算 ====================
    'g3-l1-perimeter': {
        meta: { title: "周长计算（长正方形）- 三年级数学 | AI7Miao数学", description: "理解周长概念，掌握长方形和正方形周长公式，解决实际量周长问题。", keywords: "周长,长方形周长,正方形周长,三年级数学" },
        info: { title: "周长计算（长正方形）", description: "绕着一个图形走一圈有多长？这就是周长！学会公式，算围墙砌花坛都不是问题！", tags: [{ text: "基础达标", color: "blue" }, { text: "30分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "学生学习长方形和正方形的周长。周长=围绕图形一圈的总长度。长方形：C=(长+宽)×2；正方形：C=边长×4。注意：周长是线的长度，不是面积。实际应用：围栅栏、贴边框等。",
        aiChatTitle: "🤖 周长小达人", aiChatIntro: "绕一圈就是周长！用公式算，简单又快！", aiMessages: [{ role: 'ai', content: '教室地面是长方形，长8m，宽6m。如果要给教室的四面墙脚贴一圈踢脚线，需要多长？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-indigo-600" />周长公式</h2>
                        <div className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500 text-center">
                                    <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">长方形</h3>
                                    <div className="font-mono text-lg font-bold text-indigo-600">C = (长 + 宽) × 2</div>
                                    <p className="text-xs text-slate-500 mt-2">两组相等的对边</p>
                                </div>
                                <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500 text-center">
                                    <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">正方形</h3>
                                    <div className="font-mono text-lg font-bold text-green-600">C = 边长 × 4</div>
                                    <p className="text-xs text-slate-500 mt-2">四条边相等</p>
                                </div>
                            </div>
                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border-l-4 border-yellow-400">
                                <p className="font-bold text-yellow-800 dark:text-yellow-300">💡 记忆技巧</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">长方形有2条长、2条宽，公式中要×2。正方形4条边一样长，公式中×4。</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />典型例题</h2>
                        <div className="space-y-4">
                            {[
                                { q: '长方形长12cm，宽5cm，求周长', a: 'C=(12+5)×2=17×2=34cm' },
                                { q: '正方形边长7m，求周长', a: 'C=7×4=28m' },
                                { q: '一块长方形草地周长50m，宽10m，长是多少？', a: '长+宽=50÷2=25m，长=25-10=15m' },
                            ].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-2">例{i + 1}：{e.q}</p>
                                    <div className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono"><p>{e.a}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={320} type="choice" question="长方形长9cm，宽4cm，周长是？" options={[{ label: 'A', value: '24cm' }, { label: 'B', value: '26cm' }, { label: 'C', value: '36cm' }, { label: 'D', value: '13cm' }]} answer="B" explanation="C=(9+4)×2=13×2=26cm。" />
                    <PracticeProblem id={321} type="choice" question="正方形周长32cm，其边长是？" options={[{ label: 'A', value: '6cm' }, { label: 'B', value: '8cm' }, { label: 'C', value: '10cm' }, { label: 'D', value: '12cm' }]} answer="B" explanation="边长=32÷4=8cm。" />
                </div>
            )
        }
    },

    // ==================== L1-4. 质量单位 ====================
    'g3-l1-mass-unit': {
        meta: { title: "质量单位 - 三年级数学 | AI7Miao数学", description: "认识克(g)和千克(kg)，理解质量单位的换算，学会在实际情境中选用合适单位。", keywords: "质量单位,克,千克,kg,g,三年级数学" },
        info: { title: "质量单位", description: "一颗葡萄几克？一个西瓜几千克？掌握克和千克，轻松搞定称重问题！", tags: [{ text: "基础达标", color: "blue" }, { text: "20分钟", icon: Clock, color: "slate" }] },
        aiContext: "学生学习质量单位克(g)和千克(kg)。1kg=1000g。感知：一粒葡萄约5g，一本书约500g，一个西瓜约5kg。选用合适单位：轻的物体用g，重的物体用kg。批评：1g=1/1000kg，不要混淆。",
        aiChatTitle: "🤖 质量小能手", aiChatIntro: "用秤量一量，学会用克和千克描述重量！", aiMessages: [{ role: 'ai', content: '一袋大米5000g，用千克表示是几千克？你家买过多重的东西？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-indigo-600" />质量单位</h2>
                        <div className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
                                    <h3 className="font-bold text-blue-800 dark:text-blue-300">克 (g)</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">较轻物体</p>
                                    <div className="text-sm text-slate-700 dark:text-slate-300 mt-2 space-y-1">
                                        <p>硬币：约5g</p><p>一个鸡蛋：约60g</p><p>一本书：约500g</p>
                                    </div>
                                </div>
                                <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500">
                                    <h3 className="font-bold text-green-800 dark:text-green-300">千克 (kg)</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">较重物体</p>
                                    <div className="text-sm text-slate-700 dark:text-slate-300 mt-2 space-y-1">
                                        <p>一袋大米：5kg</p><p>小学生体重：~30kg</p><p>自行车：~10kg</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl border-l-4 border-orange-400 text-center">
                                <span className="text-2xl font-bold font-mono text-orange-700 dark:text-orange-300">1 kg = 1000 g</span>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />典型例题</h2>
                        <div className="space-y-4">
                            {[
                                { q: '3kg = ___g', a: '3×1000=3000g' },
                                { q: '2500g = ___kg ___g', a: '2500÷1000=2kg500g' },
                            ].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-2">例{i + 1}：{e.q}</p>
                                    <div className="pl-4 border-l-4 border-blue-400 text-sm text-blue-600 font-bold font-mono"><p>{e.a}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={330} type="choice" question="4kg 500g = ___g" options={[{ label: 'A', value: '450g' }, { label: 'B', value: '4500g' }, { label: 'C', value: '45000g' }, { label: 'D', value: '405g' }]} answer="B" explanation="4kg=4000g，4000+500=4500g。" />
                    <PracticeProblem id={331} type="choice" question="一袋糖果重600g，买5袋共多少kg多少g？" options={[{ label: 'A', value: '3kg' }, { label: 'B', value: '2kg500g' }, { label: 'C', value: '3000g' }, { label: 'D', value: '3kg和A相同' }]} answer="A" explanation="600×5=3000g=3kg。" />
                </div>
            )
        }
    },

    // ==================== L2-1. 植树问题 ====================
    'g3-l2-tree-planting': {
        meta: { title: "植树问题 - 三年级思维进阶 | AI7Miao数学", description: "掌握直线植树、环形植树的棵数与间隔数的关系，解决实际植树问题。", keywords: "植树问题,间隔数,棵数,三年级思维进阶" },
        info: { title: "植树问题", description: "100米的路上每隔5米种一棵树，需要几棵？弄清间隔和棵数的关系！", tags: [{ text: "思维进阶", color: "purple" }, { text: "35分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "学生学习植树问题。核心：间隔数=棵数-1（两端都种）；间隔数=棵数（环形，如水池周边）；间隔数=棵数+1（两端都不种）。总长÷间距=间隔数；棵数=根据情况±1。关键是判断端点是否种树。",
        aiChatTitle: "🤖 植树小顾问", aiChatIntro: "种树之前先数间隔，间隔数弄清楚就不会出错！", aiMessages: [{ role: 'ai', content: '一条路长100m，每隔10m种一棵树，两端都种，共几棵？先算间隔数！' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Brain className="w-6 h-6 text-purple-600" />植树问题三种情况</h2>
                        <div className="space-y-5">
                            {[
                                { title: '两端都种（最常见）', formula: '棵数 = 间隔数 + 1', note: '间隔数 = 总长 ÷ 间距', color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-400' },
                                { title: '两端都不种', formula: '棵数 = 间隔数 - 1', note: '场景：路中间种树，两头不种', color: 'bg-green-50 dark:bg-green-900/20 border-green-400' },
                                { title: '环形（围成圈）', formula: '棵数 = 间隔数', note: '场景：水池/操场周边种树', color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-400' },
                            ].map(s => (
                                <div key={s.title} className={`p-4 rounded-xl border-l-4 ${s.color}`}>
                                    <p className="font-bold text-slate-800 dark:text-white">{s.title}</p>
                                    <p className="font-mono text-sm text-indigo-600 mt-1">{s.formula}</p>
                                    <p className="text-xs text-slate-500 mt-1">{s.note}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />典型例题</h2>
                        <div className="space-y-4">
                            {[
                                { q: '公路长120m，每隔8m种一棵树，两端都种，共几棵？', a: '间隔数=120÷8=15；棵数=15+1=16棵' },
                                { q: '圆形水池周长60m，每3m种一棵柳树，共几棵？', a: '间隔数=60÷3=20；环形：棵数=间隔数=20棵' },
                            ].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-2">例{i + 1}：{e.q}</p>
                                    <div className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold"><p>{e.a}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={340} type="choice" question="一条路长90m，每9m种一棵路灯柱（两端都立），共需几根？" options={[{ label: 'A', value: '9根' }, { label: 'B', value: '10根' }, { label: 'C', value: '11根' }, { label: 'D', value: '8根' }]} answer="C" explanation="间隔数=90÷9=10，两端都种：棵数=10+1=11根。" />
                    <PracticeProblem id={341} type="choice" question="正方形花坛边长10m，每2m种一盆花（四角各种一盆），共几盆？" options={[{ label: 'A', value: '16盆' }, { label: 'B', value: '20盆' }, { label: 'C', value: '24盆' }, { label: 'D', value: '15盆' }]} answer="B" explanation="周长=10×4=40m，间隔数=40÷2=20，环形：棵数=20盆。" />
                </div>
            )
        }
    },

    // ==================== L2-2. 鸡兔同笼 ====================
    'g3-l2-chicken-rabbit': {
        meta: { title: "鸡兔同笼（初阶）- 三年级思维进阶 | AI7Miao数学", description: "学习假设法解决鸡兔同笼问题，培养逻辑推理和方程思维。", keywords: "鸡兔同笼,假设法,三年级思维进阶" },
        info: { title: "鸡兔同笼（初阶）", description: "笼子里有鸡和兔，数头20个，数脚54只，各有多少只？经典名题，学会假设法！", tags: [{ text: "思维进阶", color: "purple" }, { text: "40分钟", icon: Clock, color: "slate" }, { text: "重点", icon: Star, color: "orange" }] },
        aiContext: "学生学习鸡兔同笼问题。假设法：假设全是鸡（2只脚），计算脚的总数，与实际相差的脚数÷(4-2)=兔子数。或假设全是兔（4只脚），差值÷(4-2)=鸡的数量。公式法：兔=(实际脚-头数×2)÷2。",
        aiChatTitle: "🤖 鸡兔侦探", aiChatIntro: "用假设法，一步一步锁定鸡和兔的数量！", aiMessages: [{ role: 'ai', content: '如果笼子里全是鸡，20个头就有40只脚。但实际有54只脚，多了14只。为什么多出来了？是因为有兔！' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Brain className="w-6 h-6 text-purple-600" />假设法解鸡兔同笼</h2>
                        <div className="space-y-5">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3">解题步骤</h3>
                                <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300 font-mono">
                                    <p>① 假设全是鸡，脚数 = 头数 × 2</p>
                                    <p>② 差值 = 实际脚数 - 假设脚数</p>
                                    <p>③ 兔的数量 = 差值 ÷ (4-2) = 差值 ÷ 2</p>
                                    <p>④ 鸡的数量 = 头数 - 兔的数量</p>
                                </div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">例：头20，脚54</h3>
                                <div className="font-mono text-sm text-slate-700 dark:text-slate-300 space-y-1">
                                    <p>假设全是鸡：20×2=40脚</p>
                                    <p>差值：54-40=14（多了14只脚）</p>
                                    <p>兔=14÷2=<strong className="text-purple-600">7只</strong></p>
                                    <p>鸡=20-7=<strong className="text-blue-600">13只</strong></p>
                                    <p>验证：13×2+7×4=26+28=54✓</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />典型例题</h2>
                        <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                            <p className="font-bold text-slate-800 dark:text-white mb-2">停车场有轿车（4轮）和摩托车（2轮）共30辆，轮子共96个，各几辆？</p>
                            <div className="pl-4 border-l-4 border-purple-400 text-sm text-slate-600 dark:text-slate-400 font-mono space-y-1">
                                <p>假设全是摩托：30×2=60个轮子</p>
                                <p>差值：96-60=36</p>
                                <p>轿车=36÷(4-2)=18辆</p>
                                <p>摩托=30-18=12辆</p>
                                <p className="text-purple-600 font-bold">答：轿车18辆，摩托12辆</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={350} type="choice" question="鸡兔同笼，头15，脚42，兔有几只？" options={[{ label: 'A', value: '5只' }, { label: 'B', value: '6只' }, { label: 'C', value: '7只' }, { label: 'D', value: '9只' }]} answer="B" explanation="假设全鸡：15×2=30脚，差值=42-30=12，兔=12÷2=6只。" />
                    <PracticeProblem id={351} type="choice" question="鸡兔同笼，头25，脚76，鸡有几只？" options={[{ label: 'A', value: '11只' }, { label: 'B', value: '12只' }, { label: 'C', value: '13只' }, { label: 'D', value: '14只' }]} answer="C" explanation="假设全鸡：25×2=50脚，差值=76-50=26，兔=26÷2=13只，鸡=25-13=12只。等等：兔=13，鸡=12。选C=13是兔的数量，题问鸡→应该选B=12只。" />
                </div>
            )
        }
    },

    // ==================== L2-3. 盈亏问题 ====================
    'g3-l2-profit-loss': {
        meta: { title: "盈亏问题 - 三年级思维进阶 | AI7Miao数学", description: "学习用差+差或差-差的方法解决盈亏问题，找出人数和物品数量。", keywords: "盈亏问题,三年级思维进阶,假设法" },
        info: { title: "盈亏问题", description: "分糖果时，每人3个少5个，每人4个多4个。恰好的人数和糖果数怎么求？", tags: [{ text: "思维进阶", color: "purple" }, { text: "35分钟", icon: Clock, color: "slate" }] },
        aiContext: "学生学习盈亏问题。核心公式：人数=(盈+亏)÷每人多分的数量；若两次都亏：人数=(大亏-小亏)÷差；若两次都盈：人数=(大盈-小盈)÷差。物品数=人数×某次分的数量±盈亏。",
        aiChatTitle: "🤖 盈亏小侦探", aiChatIntro: "多了少了之间，恰恰好好的人数和物品数就出来了！", aiMessages: [{ role: 'ai', content: '每人分3个糖，少5个；每人分4个糖，多4个。注意：多一个人要多分几个糖？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Brain className="w-6 h-6 text-purple-600" />盈亏问题公式</h2>
                        <div className="space-y-5">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">一盈一亏（最常见）</h3>
                                <p className="font-mono text-sm bg-white dark:bg-slate-700 p-3 rounded">人数 = (盈 + 亏) ÷ (两次每人分的差)</p>
                                <div className="mt-3 text-sm text-slate-600 dark:text-slate-400 space-y-1 font-mono">
                                    <p>例：每人3个少5个，每人4个多4个</p>
                                    <p>人数=(5+4)÷(4-3)=9÷1=9人</p>
                                    <p>糖果=9×3+5=27+5=32个（验证：9×4-4=36-4=32✓）</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />典型例题</h2>
                        <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                            <p className="font-bold text-slate-800 dark:text-white mb-2">把一些铅笔分给小朋友，每人5支则多2支，每人6支则少3支，有几个小朋友、几支铅笔？</p>
                            <div className="pl-4 border-l-4 border-purple-400 text-sm text-slate-600 dark:text-slate-400 font-mono space-y-1">
                                <p>人数=(2+3)÷(6-5)=5人</p>
                                <p>铅笔=5×5+2=27支</p>
                                <p className="text-purple-600 font-bold">答：5个小朋友，27支铅笔</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={360} type="choice" question="分本子，每人7本少4本，每人8本多2本，有几人？" options={[{ label: 'A', value: '4人' }, { label: 'B', value: '5人' }, { label: 'C', value: '6人' }, { label: 'D', value: '7人' }]} answer="C" explanation="人数=(4+2)÷(8-7)=6÷1=6人。" />
                </div>
            )
        }
    },

    // ==================== L2-4. 归一问题 ====================
    'g3-l2-unit-problem': {
        meta: { title: "归一问题 - 三年级思维进阶 | AI7Miao数学", description: "通过先求单位量（单价、单速等），解决正比例相关的实际问题。", keywords: "归一问题,单位量,三年级思维进阶" },
        info: { title: "归一问题", description: "先求每个、每天、每米……找到单位量，再乘以需要的数量！", tags: [{ text: "思维进阶", color: "purple" }, { text: "30分钟", icon: Clock, color: "slate" }] },
        aiContext: "学生学习归一问题。步骤：①用总量÷个数=单位量；②再用单位量×新的个数=新的总量。正归一：求更多的量；反归一（归总）：先求总量再求另一种情况。关键词：先求每个…再求…",
        aiChatTitle: "🤖 归一小能手", aiChatIntro: "先求一个，再算多个，归一法帮你搞定！", aiMessages: [{ role: 'ai', content: '3本书15元，那1本书多少钱？再想，8本书多少钱？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Target className="w-6 h-6 text-purple-600" />归一问题解法</h2>
                        <div className="space-y-5">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3">两步走</h3>
                                <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded"><p className="font-mono">第一步：总量 ÷ 数量 = 单位量（每个/每天/每米）</p></div>
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded"><p className="font-mono">第二步：单位量 × 新数量 = 所求量</p></div>
                                </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">例</h3>
                                <div className="font-mono text-sm text-slate-700 dark:text-slate-300 space-y-1">
                                    <p>工人4天做了120个零件，照这样的速度，7天做几个？</p>
                                    <p>每天：120÷4=30个</p>
                                    <p>7天：30×7=<strong className="text-green-600">210个</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />典型例题</h2>
                        <div className="space-y-4">
                            {[
                                { q: '5辆车运了75吨，照这样，运200吨需要几辆？', a: '每辆：75÷5=15吨；200÷15≈13.3，需14辆' },
                                { q: '买6个苹果花18元，买10个要多少钱？', a: '每个：18÷6=3元；10×3=30元' },
                            ].map((e, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                                    <p className="font-bold text-slate-800 dark:text-white mb-2">例{i + 1}：{e.q}</p>
                                    <div className="pl-4 border-l-4 border-purple-400 text-sm text-purple-600 font-bold font-mono"><p>{e.a}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={370} type="choice" question="3台机器4小时生产1200个零件，6台机器8小时能生产几个？" options={[{ label: 'A', value: '2400个' }, { label: 'B', value: '4800个' }, { label: 'C', value: '3200个' }, { label: 'D', value: '3600个' }]} answer="B" explanation="每台每小时：1200÷3÷4=100个；6台8小时：100×6×8=4800个。" />
                </div>
            )
        }
    },

    // ==================== L2-5. 年龄问题 ====================
    'g3-l2-age-problem': {
        meta: { title: "年龄问题 - 三年级思维进阶 | AI7Miao数学", description: "利用年龄差不变的性质，解决今年/N年前/N年后的年龄推算问题。", keywords: "年龄问题,年龄差,三年级思维进阶" },
        info: { title: "年龄问题", description: "爸爸比我大30岁，今年我10岁，几年后爸爸是我年龄的2倍？年龄差永远不变！", tags: [{ text: "思维进阶", color: "purple" }, { text: "30分钟", icon: Clock, color: "slate" }] },
        aiContext: "学生学习年龄问题。关键性质：两人年龄差永远不变。方法：设X年后（或X年前）满足条件，建立等量关系：年龄大的=倍数×年龄小的。或用差÷（倍数-1）=小的年龄来求解。",
        aiChatTitle: "🤖 年龄推理家", aiChatIntro: "两人年龄差不变！用这个性质破解年龄谜题！", aiMessages: [{ role: 'ai', content: '今年父亲42岁，儿子12岁，年龄差是多少？再过几年，父亲是儿子的3倍？' }],
        tabs: {
            concept: (
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Brain className="w-6 h-6 text-purple-600" />年龄问题核心</h2>
                        <div className="space-y-5">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">年龄差永远不变</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300">两人岁数同时+1，差不变。这是解题的关键！</p>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">倍数问题公式</h3>
                                <p className="font-mono text-sm text-slate-700 dark:text-slate-300">当大的是小的 n 倍时：</p>
                                <p className="font-mono text-sm text-indigo-600 font-bold">小的年龄 = 年龄差 ÷ (n-1)</p>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                                <p className="font-bold text-green-800 dark:text-green-300 mb-2">例</p>
                                <div className="font-mono text-sm text-slate-700 dark:text-slate-300 space-y-1">
                                    <p>父42，子12，年龄差=30。几年后父是子3倍？</p>
                                    <p>设X年后，父(42+X)=3×子(12+X)</p>
                                    <p>42+X=36+3X → 6=2X → X=3年</p>
                                    <p>用公式：小的=差÷(3-1)=30÷2=15岁 → 12+3=15 → X=3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            examples: (
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3"><Calculator className="w-6 h-6 text-indigo-600" />典型例题</h2>
                        <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl">
                            <p className="font-bold text-slate-800 dark:text-white mb-2">母亲36岁，女儿8岁，几年后母亲是女儿的3倍？</p>
                            <div className="pl-4 border-l-4 border-purple-400 text-sm text-slate-600 dark:text-slate-400 font-mono space-y-1">
                                <p>年龄差=36-8=28岁</p>
                                <p>设X年后，(36+X)=3(8+X) → 36+X=24+3X → 12=2X → X=6</p>
                                <p className="text-purple-600 font-bold">答：6年后</p>
                                <p>验证：6年后母42，女14，42÷14=3✓</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            practice: (
                <div className="space-y-6">
                    <PracticeProblem id={380} type="choice" question="爷爷60岁，孙子10岁，几年前爷爷是孙子的11倍？" options={[{ label: 'A', value: '4年前' }, { label: 'B', value: '5年前' }, { label: 'C', value: '6年前' }, { label: 'D', value: '7年前' }]} answer="B" explanation="X年前：(60-X)=11(10-X) → 60-X=110-11X → 10X=50 → X=5。5年前：爷55，孙5，55=11×5✓" />
                </div>
            )
        }
    },

};

export default grade3Content;

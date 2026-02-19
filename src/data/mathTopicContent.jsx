import { grade7Content } from './math/grade7';
import { grade8Content } from './math/grade8';
import { grade9Content } from './math/grade9';
import { grade10Content } from './math/grade10';
import { grade11Content } from './math/grade11';
import { grade12Content } from './math/grade12';
import { grade4Content } from './math/grade4';
import RationalNumbers from './math/content/grade7/rationalNumbers';
import TriangleBasics from './math/content/grade8/triangles';
import SetsAndLogic from './math/content/grade10/sets';
import { Target, Star, Brain, Lightbulb, CheckCircle2, Calculator, ArrowRight, Play, Eye, Triangle, Layers } from 'lucide-react';

// 导出合并后的内容
export const mathTopicContent = {
    ...grade4Content,
    ...grade7Content,
    ...grade8Content,
    ...grade9Content,
    ...grade10Content,
    ...grade11Content,
    ...grade12Content,

    // Grade 7 - Interactive Overrides
    'mid-7-1-rational-numbers': {
        meta: {
            title: "有理数 - 初一数学 | AI7Miao数学",
            description: "通过互动数轴实验，直观理解有理数的概念、正负数及其加减法运算规则。",
            keywords: "有理数,正负数,数轴,绝对值,有理数加减"
        },
        info: {
            title: "有理数",
            description: "万物皆数，有理走遍天下。从数轴开始，重新认识数字世界！",
            tags: [
                { text: "代数", color: "blue" },
                { text: "30分钟", color: "slate" },
                { text: "互动实验", color: "purple" }
            ]
        },
        aiContext: "你现在是初一数学老师，正在讲解有理数的概念。请引导学生通过数轴理解正负数的意义。解释为什么负负得正，正负得负。",
        aiChatTitle: "🤖 有理数智能辅导",
        aiChatIntro: "你好！我是你的AI数学助教。关于有理数、数轴或者正负数运算，有什么不懂的都可以问我哦！比如你可以问：“为什么-3比-1小？”",
        aiMessages: [
            { role: 'assistant', content: '你好！我是你的专属AI数学导师。今天我们要学习“有理数”。你知道为什么我们要引入负数吗？试着在数轴上找找 -5 在哪里？' }
        ],
        tabs: {
            interactive: <RationalNumbers />,
            concept: (
                <div className="space-y-4 text-slate-700 dark:text-slate-300">
                    <p><strong>什么是有理数？</strong></p>
                    <p>整数和分数统称为有理数。任何一个有理数都可以写成两个整数之比（p/q, q≠0）。</p>
                    <p><strong>数轴的三要素：</strong></p>
                    <ul className="list-disc list-inside pl-4">
                        <li>原点 (0): 它是正负数的分界点。</li>
                        <li>正方向: 通常规定向右（或向上）为正方向。</li>
                        <li>单位长度: 选取适当的长度作为单位长度。</li>
                    </ul>
                </div>
            ),
            practice: (
                <div className="text-center py-8 text-slate-500">
                    🚧 练习题库建设中...
                </div>
            )
        }
    },

    // Grade 8 - Interactive Overrides
    'mid-8-1-triangles': {
        meta: {
            title: "三角形基础 - 初二数学 | AI7Miao数学",
            description: "通过互动实验探索三角形内角和定理，直观理解三角形的稳定性和分类。",
            keywords: "三角形,内角和,几何,锐角三角形,直角三角形,钝角三角形"
        },
        info: {
            title: "三角形基础",
            description: "探索最稳固的图形。为什么三角形有3个角？内角和为什么是180度？",
            tags: [
                { text: "几何", color: "green" },
                { text: "35分钟", color: "slate" },
                { text: "互动实验", color: "purple" }
            ]
        },
        aiContext: "你现在是初二数学老师，正在讲解三角形基础。请引导学生通过内角和定理理解三角形的性质。也可以讨论生活中的三角形应用。",
        aiChatTitle: "🤖 三角形智能辅导",
        aiChatIntro: "你好！关于三角形的性质、内角和或者分类，有什么想知道的吗？",
        aiMessages: [
            { role: 'assistant', content: '你好！我是你的AI几何导师。你能改变三角形的形状，但有什么东西是永远不变的吗？试着在互动实验里找找看！' }
        ],
        tabs: {
            interactive: <TriangleBasics />,
            concept: (
                <div className="space-y-4 text-slate-700 dark:text-slate-300">
                    <p><strong>三角形定义：</strong></p>
                    <p>由不在同一直线上的三条线段首尾顺次相接所组成的图形叫做三角形。</p>
                    <p><strong>重要性质：</strong></p>
                    <ul className="list-disc list-inside pl-4">
                        <li>三角形的内角和为 180°。</li>
                        <li>三角形任意两边之和大于第三边。</li>
                        <li>三角形具有稳定性。</li>
                    </ul>
                </div>
            ),
            practice: (
                <div className="text-center py-8 text-slate-500">
                    🚧 练习题库建设中...
                </div>
            )
        }
    },

    // Grade 10 - Interactive Overrides
    'high-10-1-sets': {
        meta: {
            title: "集合与逻辑 - 高一数学 | AI7Miao数学",
            description: "通过互动韦恩图(Venn Diagram)理解集合的并集、交集、补集运算。",
            keywords: "集合,韦恩图,并集,交集,补集,Venn图,逻辑"
        },
        info: {
            title: "集合与逻辑",
            description: "数学的通用语言。用韦恩图可视化的方式，轻松搞定抽象的集合运算！",
            tags: [
                { text: "代数", color: "blue" },
                { text: "40分钟", color: "slate" },
                { text: "互动实验", color: "purple" }
            ]
        },
        aiContext: "你现在是高一数学老师，正在讲解集合与逻辑。请引导学生通过韦恩图理解集合运算（并、交、补）。解释集合在逻辑推理中的作用。",
        aiChatTitle: "🤖 集合逻辑智能辅导",
        aiChatIntro: "你好！我是你的AI数学助教。集合是现代数学的基础，韦恩图是理解它的最好工具。关于并集、交集或者补集，有什么不懂的都可以问我！",
        aiMessages: [
            { role: 'assistant', content: '你好！欢迎来到集合的世界。你知道怎么用图画来表示“既喜欢篮球又喜欢足球的人”吗？试着在韦恩图里操作一下！' }
        ],
        tabs: {
            interactive: <SetsAndLogic />,
            concept: (
                <div className="space-y-4 text-slate-700 dark:text-slate-300">
                    <p><strong>集合的概念：</strong></p>
                    <p>一般地，我们把研究对象统称为元素，把一些元素组成的总体叫做集合。</p>
                    <p><strong>集合的表示方法：</strong></p>
                    <ul className="list-disc list-inside pl-4">
                        <li>列举法：{`{1, 2, 3}`}</li>
                        <li>描述法：{`{x | x > 0}`}</li>
                        <li>图示法：韦恩图 (Venn Diagram)</li>
                    </ul>
                </div>
            ),
            practice: (
                <div className="text-center py-8 text-slate-500">
                    🚧 练习题库建设中...
                </div>
            )
        }
    },


};

export default mathTopicContent;

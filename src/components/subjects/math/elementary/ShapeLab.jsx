import React, { useState } from 'react';
import { Circle, Square, Triangle, Sparkles, CheckCircle2 } from 'lucide-react';

const shapesData = [
    {
        id: 'circle',
        name: '圆形 (Circle)',
        icon: <Circle size={48} className="text-rose-500" fill="currentColor" />,
        color: 'bg-rose-100 text-rose-600',
        activeColor: 'ring-rose-400 bg-rose-50',
        realObjects: ['🍕 披萨', '🍩 甜甜圈', '⚽ 足球', '🪙 硬币'],
        desc: '圆圆的，没有直直的边，也没有尖尖的角，像车轮一样可以滚动哦！'
    },
    {
        id: 'triangle',
        name: '三角形 (Triangle)',
        icon: <Triangle size={48} className="text-green-500" fill="currentColor" />,
        color: 'bg-green-100 text-green-600',
        activeColor: 'ring-green-400 bg-green-50',
        realObjects: ['🥪 三明治切片', '🍉 西瓜角', '⛺ 帐篷', '⚠️ 警告牌'],
        desc: '有 3 条直直的边，3 个尖尖的角，非常稳定！'
    },
    {
        id: 'square',
        name: '正方形 (Square)',
        icon: <Square size={48} className="text-blue-500" fill="currentColor" />,
        color: 'bg-blue-100 text-blue-600',
        activeColor: 'ring-blue-400 bg-blue-50',
        realObjects: ['🧊 魔方', '🎁 礼物盒', '🍘 饼干', '🖼️ 方形相框'],
        desc: '有 4 条一样长直直的边，4 个直直的角（就像书本的角一样）。'
    },
    {
        id: 'rectangle',
        name: '长方形 (Rectangle)',
        icon: <Square size={48} className="text-amber-500" fill="currentColor" style={{ transform: 'scaleX(1.4)' }} />,
        color: 'bg-amber-100 text-amber-600',
        activeColor: 'ring-amber-400 bg-amber-50',
        realObjects: ['📱 手机', '🚪 门', '📺 电视', '📖 书本'],
        desc: '也有 4 条直直的边和 4 个角，但是对面的两条边才一样长哦（一边长，一边短）。'
    }
];

const ShapeLab = () => {
    const [activeShape, setActiveShape] = useState(shapesData[0]);

    return (
        <div className="space-y-6">
            <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-2">
                    <Sparkles className="text-indigo-500" /> 图形发现之旅
                </h3>
                <p className="text-slate-500 dark:text-slate-400">点击不同形状，看看在我们生活里它们都变成了什么！</p>
            </div>

            {/* Shape Selectors */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {shapesData.map(shape => (
                    <button
                        key={shape.id}
                        onClick={() => setActiveShape(shape)}
                        className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 border-2 ${activeShape.id === shape.id
                                ? `border-indigo-500 ${shape.activeColor} transform scale-105 shadow-md`
                                : 'border-transparent bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100'
                            }`}
                    >
                        <div className="mb-3 animate-pulse-slow">{shape.icon}</div>
                        <span className="font-bold text-slate-700 dark:text-slate-200">{shape.name.split(' ')[0]}</span>
                    </button>
                ))}
            </div>

            {/* Shape Info Card */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-100 dark:border-slate-700 shadow-xl flex flex-col md:flex-row gap-8 items-center md:items-start transition-all">
                <div className={`p-8 rounded-full ${activeShape.color} bg-opacity-20 dark:bg-opacity-10 shrink-0 transform transition-transform hover:rotate-12`}>
                    {activeShape.icon}
                </div>

                <div className="flex-1 space-y-4 text-center md:text-left">
                    <h4 className="text-2xl font-black text-slate-800 dark:text-white">
                        我是{activeShape.name}
                    </h4>
                    <p className="text-lg text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/40 p-4 rounded-xl">
                        💡 {activeShape.desc}
                    </p>

                    <div>
                        <p className="font-bold text-sm text-slate-400 mb-3 uppercase tracking-wider">在生活里猜猜我是谁？</p>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {activeShape.realObjects.map((obj, i) => (
                                <span key={i} className={`px-4 py-2 rounded-full font-bold text-sm ${activeShape.color} bg-opacity-30 border border-current/20`}>
                                    {obj}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-indigo-50 flex items-center gap-3 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 p-5 rounded-2xl border border-indigo-100 dark:border-indigo-800/50 relative overflow-hidden">
                <CheckCircle2 className="w-8 h-8 shrink-0 text-indigo-500" />
                <div>
                    <h4 className="font-bold mb-1">小贴士</h4>
                    <p className="text-sm opacity-90">正方形是特殊的长方形哦！因为它的四条边刚好一样长了！</p>
                </div>
                <Sparkles className="absolute -right-4 -bottom-4 w-24 h-24 text-indigo-500/10 pointer-events-none" />
            </div>
        </div>
    );
};

export default ShapeLab;

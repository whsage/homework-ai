import React, { useState } from 'react';
import { Scale, Package, Feather, Apple, PersonStanding, RotateCcw, ArrowRightLeft, Info, HelpCircle } from 'lucide-react';

const MassUnitLab = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [unit, setUnit] = useState('g'); // g, kg
    const [inputValue, setInputValue] = useState('');
    const [feedback, setFeedback] = useState(null);

    const items = [
        { id: 'feather', name: '一片羽毛', massG: 1, icon: <Feather />, color: 'text-slate-400', desc: '极其轻巧' },
        { id: 'apple', name: '一个红苹果', massG: 200, icon: <Apple />, color: 'text-rose-500', desc: '常见水果' },
        { id: 'salt', name: '一袋食盐', massG: 500, icon: <Package />, color: 'text-blue-500', desc: '厨房必备' },
        { id: 'student', name: '三级小学生', massG: 30000, icon: <PersonStanding />, color: 'text-emerald-500', desc: '就是你哦！' },
    ];

    const handleCheck = () => {
        if (!selectedItem || !inputValue) return;
        const val = parseFloat(inputValue);
        const target = unit === 'g' ? selectedItem.massG : selectedItem.massG / 1000;

        if (Math.abs(val - target) < 0.01) {
            setFeedback({ type: 'success', text: '太棒了！计算完全正确！✨' });
        } else {
            setFeedback({ type: 'error', text: `哎呀，再想想看？换算有点小误差哦。应该是 ${target}${unit}。` });
        }
    };

    const reset = () => {
        setSelectedItem(null);
        setInputValue('');
        setFeedback(null);
    };

    return (
        <div className="space-y-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-3">
                    <Scale className="text-blue-500 w-8 h-8" /> 质量天平实验室
                </h3>
                <p className="text-slate-500">在这个神奇实验室里，1000个“克小弟”才能换1个“千克大佬”！</p>
            </div>

            {/* Selection Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {items.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => { setSelectedItem(item); setFeedback(null); }}
                        className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 ${selectedItem?.id === item.id
                                ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-500 shadow-sm'
                                : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:border-blue-200'
                            }`}
                    >
                        <div className={`p-3 rounded-full bg-slate-50 dark:bg-slate-900/50 ${item.color}`}>
                            {React.cloneElement(item.icon, { size: 32 })}
                        </div>
                        <div className="text-center">
                            <div className="text-sm font-bold text-slate-700 dark:text-slate-200">{item.name}</div>
                            <div className="text-[10px] text-slate-400">{item.desc}</div>
                        </div>
                    </button>
                ))}
            </div>

            {/* Scale Visualizer */}
            <div className="relative h-64 bg-slate-50 dark:bg-slate-900/50 rounded-3xl flex flex-col items-center justify-end pb-10 border-2 border-dashed border-slate-200 dark:border-slate-700">
                {!selectedItem ? (
                    <div className="flex flex-col items-center text-slate-300 gap-2 mb-10">
                        <HelpCircle size={48} />
                        <p className="font-bold">请选择一个物品放到天平上</p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-500">
                        {/* Digital Readout */}
                        <div className="bg-slate-800 text-emerald-400 font-mono text-3xl px-6 py-2 rounded-xl border-4 border-slate-700 shadow-inner flex flex-col items-center">
                            <span className="text-[10px] text-slate-500 uppercase font-sans mb-1">电子砰读数</span>
                            {selectedItem.massG} <span className="text-lg">g</span>
                        </div>

                        {/* The Item */}
                        <div className={`transform transition-all duration-700 scale-150 ${selectedItem.color} drop-shadow-md`}>
                            {selectedItem.icon}
                        </div>
                    </div>
                )}

                {/* Scale Base */}
                <div className="w-1/2 h-4 bg-slate-300 dark:bg-slate-700 rounded-full mt-4 shadow-sm" />
                <div className="w-1/4 h-8 bg-slate-400 dark:bg-slate-600 rounded-t-xl" />
            </div>

            {/* Game / Interaction Area */}
            {selectedItem && (
                <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-lg space-y-6">
                    <div className="flex justify-between items-center">
                        <h4 className="font-bold text-xl flex items-center gap-2">
                            魔法换算挑战
                        </h4>
                        <div className="flex bg-white/20 p-1 rounded-xl">
                            <button
                                onClick={() => setUnit('g')}
                                className={`px-4 py-1 rounded-lg text-sm font-bold transition-all ${unit === 'g' ? 'bg-white text-blue-600 shadow-sm' : 'hover:bg-white/10'}`}
                            >换算成 克(g)</button>
                            <button
                                onClick={() => setUnit('kg')}
                                className={`px-4 py-1 rounded-lg text-sm font-bold transition-all ${unit === 'kg' ? 'bg-white text-blue-600 shadow-sm' : 'hover:bg-white/10'}`}
                            >换算成 千克(kg)</button>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="text-lg font-medium opacity-90">
                            {selectedItem.name} 是 <span className="font-bold underline underline-offset-4">{selectedItem.massG} 克</span>，相当于多少{unit === 'g' ? '克' : '千克'}呢？
                        </div>
                        <div className="flex flex-1 gap-2 w-full md:w-auto">
                            <input
                                type="number" step="0.001" value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="输入数字..."
                                className="flex-1 min-w-0 bg-white/10 border-2 border-white/20 rounded-2xl px-4 py-3 text-2xl font-bold outline-none focus:border-white/50 placeholder:text-white/30"
                            />
                            <button
                                onClick={handleCheck}
                                className="bg-white text-blue-600 font-bold px-8 py-3 rounded-2xl hover:bg-blue-50 transition-colors shadow-lg shadow-black/10 active:scale-95 transition-transform"
                            >
                                确定
                            </button>
                        </div>
                    </div>

                    {feedback && (
                        <div className={`p-4 rounded-2xl text-center font-bold animate-in bounce-in ${feedback.type === 'success' ? 'bg-emerald-400 text-emerald-900' : 'bg-rose-400 text-rose-900'}`}>
                            {feedback.text}
                        </div>
                    )}
                </div>
            )}

            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold">
                    <Info className="w-5 h-5" /> 换算小贴士
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <div className="p-2 rounded bg-orange-100 dark:bg-orange-900/30 text-orange-600"><ArrowRightLeft size={20} /></div>
                        <div>
                            <p className="text-xs text-slate-400">g → kg (从小变大)</p>
                            <p className="font-bold text-slate-700 dark:text-slate-200">小数点向左移3位 (÷1000)</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <div className="p-2 rounded bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600"><ArrowRightLeft size={20} /></div>
                        <div>
                            <p className="text-xs text-slate-400">kg → g (从大变小)</p>
                            <p className="font-bold text-slate-700 dark:text-slate-200">末尾添3个0 (×1000)</p>
                        </div>
                    </div>
                </div>
            </div>

            <button
                onClick={reset}
                className="w-full py-3 flex items-center justify-center gap-2 text-slate-400 hover:text-blue-500 transition-colors text-sm font-medium"
            >
                <RotateCcw className="w-4 h-4" /> 更换实验物品
            </button>
        </div>
    );
};

export default MassUnitLab;

import React, { useState, useEffect } from 'react';
import { Lightbulb, Info, Calculator, Sparkles, BookOpen } from 'lucide-react';

const PlaceValueLab = () => {
    // 12 digits for up to hundreds of billions
    const [digits, setDigits] = useState(Array(12).fill(0));
    const [isGrouped, setIsGrouped] = useState(true);

    const placeNames = [
        "千亿", "百亿", "十亿", "亿",
        "千万", "百万", "十万", "万",
        "千", "百", "十", "个"
    ];

    const groupNames = ["亿级", "万级", "个级"];

    const handleDigitChange = (index, value) => {
        const newDigits = [...digits];
        newDigits[index] = parseInt(value) || 0;
        setDigits(newDigits);
    };

    const getFullNumberString = () => {
        return digits.join('').replace(/^0+/, '') || '0';
    };

    const getChineseReading = (nums) => {
        const units = ['', '十', '百', '千'];
        const groups = ['', '万', '亿'];

        // Split into groups of 4 from right to left
        let chunks = [];
        for (let i = 12; i > 0; i -= 4) {
            chunks.push(nums.slice(Math.max(0, i - 4), i));
        }

        let result = '';
        let lastOneWasZero = false;

        for (let i = chunks.length - 1; i >= 0; i--) {
            const chunk = chunks[i];
            let chunkStr = '';
            let chunkAllZero = true;

            for (let j = 0; j < 4; j++) {
                const val = chunk[j];
                const pos = 3 - j;

                if (val !== 0) {
                    if (lastOneWasZero) chunkStr += '零';
                    chunkStr += "零一二三四五六七八九"[val] + units[pos];
                    lastOneWasZero = false;
                    chunkAllZero = false;
                } else {
                    if (chunkStr !== '' && j < 3 && chunk[j + 1] !== 0) {
                        lastOneWasZero = true;
                    }
                }
            }

            if (!chunkAllZero) {
                result += chunkStr + groups[i];
            } else if (result !== '' && i > 0) {
                // Handle cases like 1,0000,1234 -> 十亿零一千二百三十四
                // Simplified logic: if middle group is all zero, we might need a "Zero" if subsequent groups are not zero
                let restAllZero = true;
                for (let k = i - 1; k >= 0; k--) if (chunks[k].some(v => v !== 0)) restAllZero = false;
                if (!restAllZero && !result.endsWith('零')) result += '零';
            }
        }

        return result || '零';
    };

    const reading = getChineseReading(digits);

    return (
        <div className="space-y-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-3">
                    <BookOpen className="text-indigo-500 w-8 h-8" /> 大数位次探究营
                </h3>
                <p className="text-slate-500">拨动数字，听听大数是怎么“唱歌”的！</p>
            </div>

            {/* Place Value Chart */}
            <div className="overflow-x-auto pb-4">
                <div className="min-w-[800px] flex flex-col gap-1">
                    {/* Level Headers */}
                    <div className="flex">
                        {groupNames.map((name, i) => (
                            <div key={i} className={`flex-1 text-center py-2 text-xs font-bold uppercase tracking-widest ${i === 0 ? 'bg-rose-100 text-rose-600 dark:bg-rose-900/30' :
                                    i === 1 ? 'bg-amber-100 text-amber-600 dark:bg-amber-900/30' :
                                        'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30'
                                } rounded-t-xl mx-0.5`}>
                                {name}
                            </div>
                        ))}
                    </div>

                    {/* Place Name Headers */}
                    <div className="flex">
                        {placeNames.map((name, i) => (
                            <div key={i} className="flex-1 text-center py-2 text-[10px] font-medium bg-slate-50 dark:bg-slate-700 text-slate-500 mx-0.5">
                                {name}
                            </div>
                        ))}
                    </div>

                    {/* Digit Slots */}
                    <div className="flex gap-1">
                        {digits.map((digit, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                                <input
                                    type="number"
                                    min="0"
                                    max="9"
                                    value={digit}
                                    onChange={(e) => handleDigitChange(i, e.target.value)}
                                    className={`w-full text-center text-3xl font-black py-4 rounded-xl border-2 transition-all outline-none ${digit === 0 ? 'bg-slate-50 border-slate-200 text-slate-300' :
                                            'bg-white border-indigo-400 text-indigo-600 shadow-md'
                                        } focus:ring-4 focus:ring-indigo-100`}
                                />
                                <div className="flex flex-col gap-1 w-full opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={() => handleDigitChange(i, (digit + 1) % 10)}
                                        className="py-1 bg-slate-100 dark:bg-slate-700 rounded text-[10px] hover:bg-slate-200"
                                    >+</button>
                                    <button
                                        onClick={() => handleDigitChange(i, (digit + 9) % 10)}
                                        className="py-1 bg-slate-100 dark:bg-slate-700 rounded text-[10px] hover:bg-slate-200"
                                    >-</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Read & Write Display */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-3xl text-white shadow-xl space-y-4">
                    <div className="flex items-center gap-2 text-indigo-100 text-sm font-bold uppercase tracking-wider">
                        <Sparkles className="w-4 h-4" /> 读作 (Chinese Reading)
                    </div>
                    <div className="text-2xl font-bold leading-relaxed break-all">
                        {reading}
                    </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-700 space-y-4">
                    <div className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-wider">
                        <Calculator className="w-4 h-4" /> 写作 (Arabic Number)
                    </div>
                    <div className="text-4xl font-black text-slate-700 dark:text-slate-200 font-mono tracking-tighter">
                        {getFullNumberString().replace(/\B(?=(\d{4})+(?!\d))/g, " ")}
                    </div>
                </div>
            </div>

            {/* Tips Section */}
            <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border-l-4 border-amber-400 space-y-3">
                <h4 className="font-bold text-amber-800 dark:text-amber-200 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-amber-500" /> 我发现了：
                </h4>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>每 <strong>4位</strong> 是一级，分别是个级、万级和亿级。</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>读数时，每一级末尾的 <strong>0</strong> 都不读。</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>每级中间有一个或连续几个 <strong>0</strong>，都只读一个。</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>写数时，哪一位没有数，就用 <strong>0</strong> 占位。</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PlaceValueLab;

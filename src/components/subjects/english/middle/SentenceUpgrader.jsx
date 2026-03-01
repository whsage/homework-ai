import React, { useState, useCallback } from 'react';
import { TrendingUp, Sparkles, RotateCcw, ChevronRight, ArrowRight } from 'lucide-react';

const upgradeData = {
    sentences: [
        {
            basic: 'I think reading is good.',
            levels: [
                { level: '初级', text: 'I think reading is good.', tag: '简单表达', color: 'slate' },
                { level: '中级', text: 'In my opinion, reading is very helpful.', tag: '替换观点表达 + 升级形容词', color: 'blue' },
                { level: '高级', text: 'As far as I\'m concerned, reading is beneficial to our growth.', tag: '高级观点短语 + 高级词汇', color: 'emerald' },
            ],
            upgrades: ['I think → In my opinion / As far as I\'m concerned', 'good → helpful → beneficial', '+ to our growth (补充具体对象)']
        },
        {
            basic: 'We should protect the environment.',
            levels: [
                { level: '初级', text: 'We should protect the environment.', tag: '基础句式', color: 'slate' },
                { level: '中级', text: 'It is important for us to protect the environment.', tag: '使用 It is + adj. + to do 句型', color: 'blue' },
                { level: '高级', text: 'It is our duty to take measures to protect the environment.', tag: '高级词汇 + 固定搭配', color: 'emerald' },
            ],
            upgrades: ['We should → It is our duty to', 'protect → take measures to protect', '使用 It is + adj./n. + to do 万能句型']
        },
        {
            basic: 'I like English very much.',
            levels: [
                { level: '初级', text: 'I like English very much.', tag: '简单句', color: 'slate' },
                { level: '中级', text: 'I am very interested in learning English.', tag: 'be interested in doing', color: 'blue' },
                { level: '高级', text: 'I have a strong passion for English, which has become an important part of my life.', tag: '高级词汇 + 非限定性定语从句', color: 'emerald' },
            ],
            upgrades: ['like very much → be interested in → have a passion for', '添加定语从句补充说明', 'very much → strong (避免过度使用 very)']
        },
        {
            basic: 'Doing exercise is good for our health.',
            levels: [
                { level: '初级', text: 'Doing exercise is good for our health.', tag: '基础表达', color: 'slate' },
                { level: '中级', text: 'There is no doubt that doing exercise regularly is good for our health.', tag: 'There is no doubt that... 固定句型', color: 'blue' },
                { level: '高级', text: 'It goes without saying that taking regular exercise plays a vital role in keeping healthy.', tag: '多重高级替换', color: 'emerald' },
            ],
            upgrades: ['直接句 → There is no doubt that / It goes without saying that', 'good → play a vital role in', 'doing exercise → taking regular exercise']
        },
        {
            basic: 'Many students use phones too much.',
            levels: [
                { level: '初级', text: 'Many students use phones too much.', tag: '简单陈述', color: 'slate' },
                { level: '中级', text: 'A growing number of students spend too much time on mobile phones.', tag: '替换量词 + 动词短语', color: 'blue' },
                { level: '高级', text: 'It is a common phenomenon that an increasing number of students are addicted to mobile phones.', tag: '从句结构 + 高级词汇', color: 'emerald' },
            ],
            upgrades: ['Many → A growing number of → An increasing number of', 'use too much → be addicted to', '添加 It is a common phenomenon that 主语从句']
        },
    ],
    connectors: {
        title: '🔗 万能连接词升级库',
        categories: [
            { name: '起 (开头)', basic: ['First,', 'Firstly,'], advanced: ['First of all,', 'To begin with,', 'First and foremost,'] },
            { name: '承 (递进)', basic: ['Second,', 'And,', 'Also,'], advanced: ['What\'s more,', 'Besides,', 'In addition,', 'Moreover,'] },
            { name: '转 (转折)', basic: ['But,', 'However,'], advanced: ['On the other hand,', 'Nevertheless,', 'On the contrary,'] },
            { name: '合 (总结)', basic: ['In a word,', 'So,'], advanced: ['All in all,', 'In conclusion,', 'To sum up,', 'Last but not least,'] },
            { name: '因果', basic: ['Because...', 'So...'], advanced: ['Thanks to...', 'As a result,', 'Therefore,', 'Owing to...'] },
        ]
    },
    wordUpgrades: [
        { basic: 'good', advanced: ['excellent', 'fantastic', 'outstanding', 'brilliant'] },
        { basic: 'bad', advanced: ['terrible', 'awful', 'dreadful', 'negative'] },
        { basic: 'important', advanced: ['vital', 'crucial', 'essential', 'significant'] },
        { basic: 'big', advanced: ['enormous', 'massive', 'huge', 'considerable'] },
        { basic: 'very', advanced: ['extremely', 'remarkably', 'incredibly', 'exceptionally'] },
        { basic: 'think', advanced: ['believe', 'hold the view that', 'maintain', 'reckon'] },
        { basic: 'like', advanced: ['be fond of', 'be keen on', 'have a passion for', 'be crazy about'] },
        { basic: 'many', advanced: ['numerous', 'a great number of', 'plenty of', 'a variety of'] },
    ]
};

export default function SentenceUpgrader() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [revealLevel, setRevealLevel] = useState(0); // 0=basic, 1=mid, 2=high
    const [tab, setTab] = useState('sentences'); // 'sentences' | 'connectors' | 'words'

    const current = upgradeData.sentences[currentIndex];

    const handleReveal = useCallback(() => {
        setRevealLevel(prev => Math.min(prev + 1, 2));
    }, []);

    const handleNext = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % upgradeData.sentences.length);
        setRevealLevel(0);
    }, []);

    const handleReset = useCallback(() => {
        setCurrentIndex(0);
        setRevealLevel(0);
    }, []);

    const tabs = [
        { id: 'sentences', label: '✏️ 句子升级', icon: TrendingUp },
        { id: 'connectors', label: '🔗 连接词', icon: Sparkles },
        { id: 'words', label: '💎 词汇替换', icon: ArrowRight },
    ];

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2 mb-4">
                <TrendingUp className="w-6 h-6 text-amber-600" />
                ✏️ 句子升级器
            </h2>

            {/* Tab switcher */}
            <div className="flex gap-2 mb-6 overflow-x-auto">
                {tabs.map(t => (
                    <button key={t.id} onClick={() => setTab(t.id)}
                        className={`px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap transition-all ${tab === t.id ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'}`}>
                        {t.label}
                    </button>
                ))}
            </div>

            {tab === 'sentences' && (
                <>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">点击"升级"按钮，看简单句如何一步步变成高分句！</p>

                    {/* Upgrade levels */}
                    <div className="space-y-3 mb-6">
                        {current.levels.map((lv, i) => (
                            <div key={i} className={`p-4 rounded-xl border-l-4 transition-all ${i <= revealLevel ? 'opacity-100' : 'opacity-20 pointer-events-none'} ${lv.color === 'emerald' ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20' : lv.color === 'blue' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-slate-300 bg-slate-50 dark:bg-slate-900/20'}`}>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${lv.color === 'emerald' ? 'bg-emerald-200 text-emerald-800' : lv.color === 'blue' ? 'bg-blue-200 text-blue-800' : 'bg-slate-200 text-slate-700'}`}>
                                        {lv.level}
                                    </span>
                                    <span className="text-xs text-slate-500">{lv.tag}</span>
                                </div>
                                <p className={`font-bold ${lv.color === 'emerald' ? 'text-emerald-700 dark:text-emerald-300 text-lg' : lv.color === 'blue' ? 'text-blue-700 dark:text-blue-300' : 'text-slate-700 dark:text-slate-300'}`}>
                                    {lv.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Upgrade tips */}
                    {revealLevel >= 2 && (
                        <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl mb-4">
                            <p className="font-bold text-amber-700 dark:text-amber-300 mb-2">💡 升级秘诀：</p>
                            <ul className="space-y-1">
                                {current.upgrades.map((u, i) => (
                                    <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                                        <span className="text-amber-500 font-bold">•</span> {u}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="flex justify-center gap-3">
                        {revealLevel < 2 && (
                            <button onClick={handleReveal} className="px-5 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-bold hover:shadow-md transition-all flex items-center gap-2">
                                <Sparkles className="w-4 h-4" /> 升级！
                            </button>
                        )}
                        <button onClick={handleNext} className="px-5 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-all flex items-center gap-2">
                            下一句 <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                    <p className="text-center text-xs text-slate-400 mt-3">{currentIndex + 1} / {upgradeData.sentences.length}</p>
                </>
            )}

            {tab === 'connectors' && (
                <div className="space-y-4">
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">用这些高级连接词替代简单的 and / but / so，让作文逻辑更清晰！</p>
                    {upgradeData.connectors.categories.map((cat) => (
                        <div key={cat.name} className="bg-slate-50 dark:bg-slate-900/30 p-4 rounded-xl">
                            <h4 className="font-bold text-slate-800 dark:text-white mb-3">{cat.name}</h4>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {cat.basic.map(b => (
                                    <span key={b} className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm text-slate-500 line-through">{b}</span>
                                ))}
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <ArrowRight className="w-4 h-4 text-amber-500" />
                                <span className="text-xs text-amber-600 font-bold">升级为</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {cat.advanced.map(a => (
                                    <span key={a} className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-full text-sm font-bold text-amber-700 dark:text-amber-300 shadow-sm">{a}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {tab === 'words' && (
                <div className="space-y-3">
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">写作时避免使用这些"简单词"，用右边的高级替换词提升文章档次！</p>
                    {upgradeData.wordUpgrades.map((item) => (
                        <div key={item.basic} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900/30 rounded-xl">
                            <span className="px-3 py-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg text-sm font-bold text-slate-500 line-through min-w-[80px] text-center">{item.basic}</span>
                            <ArrowRight className="w-4 h-4 text-amber-500 shrink-0" />
                            <div className="flex flex-wrap gap-1.5">
                                {item.advanced.map(a => (
                                    <span key={a} className="px-2.5 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-lg text-xs font-bold text-emerald-700 dark:text-emerald-300">{a}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

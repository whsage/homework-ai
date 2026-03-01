import React, { useState } from 'react';
import { Sparkles, Zap, ArrowRight } from 'lucide-react';

const verbsData = [
    {
        base: 'play', meaning: '玩/播放',
        tenses: {
            present_progressive: { form: 'playing', rule: '加 -ing', sentence: 'I am playing football now. (我正在踢足球。)' },
            past: { form: 'played', rule: '加 -ed（规则）', sentence: 'I played football yesterday. (我昨天踢了足球。)' },
            future: { form: 'will play', rule: 'will + 原形', sentence: 'I will play football tomorrow. (我明天要踢足球。)' }
        }
    },
    {
        base: 'watch', meaning: '看/观看',
        tenses: {
            present_progressive: { form: 'watching', rule: '加 -ing', sentence: 'She is watching TV now. (她正在看电视。)' },
            past: { form: 'watched', rule: '加 -ed（规则）', sentence: 'She watched TV last night. (她昨晚看了电视。)' },
            future: { form: 'will watch', rule: 'will + 原形', sentence: 'She will watch a movie tomorrow. (她明天要看电影。)' }
        }
    },
    {
        base: 'study', meaning: '学习',
        tenses: {
            present_progressive: { form: 'studying', rule: '去 y 加 -ying', sentence: 'He is studying English now. (他正在学英语。)' },
            past: { form: 'studied', rule: '变 y 为 i 加 -ed', sentence: 'He studied hard last week. (他上周很努力学习了。)' },
            future: { form: 'will study', rule: 'will + 原形', sentence: 'He will study math tomorrow. (他明天要学数学。)' }
        }
    },
    {
        base: 'dance', meaning: '跳舞 💃',
        tenses: {
            present_progressive: { form: 'dancing', rule: '去e 加 -ing', sentence: 'She is dancing happily. (她正在开心地跳舞。)' },
            past: { form: 'danced', rule: '结尾e 直接加 -d', sentence: 'She danced at the party. (她在派对上跳舞了。)' },
            future: { form: 'will dance', rule: 'will + 原形', sentence: 'She will dance at the show. (她将在演出中跳舞。)' }
        }
    },
    {
        base: 'stop', meaning: '停止 🛑',
        tenses: {
            present_progressive: { form: 'stopping', rule: '双写p 加 -ing', sentence: 'The bus is stopping now. (公交车正在停下来。)' },
            past: { form: 'stopped', rule: '双写p 加 -ed', sentence: 'The bus stopped suddenly. (公交车突然停了。)' },
            future: { form: 'will stop', rule: 'will + 原形', sentence: 'It will stop raining soon. (雨很快会停。)' }
        }
    },
    {
        base: 'go', meaning: '去 🚶',
        tenses: {
            present_progressive: { form: 'going', rule: '加 -ing', sentence: 'I am going to school. (我正在去学校。)' },
            past: { form: 'went', rule: '⚠️ 不规则变化！', sentence: 'I went to the park yesterday. (我昨天去了公园。)' },
            future: { form: 'will go', rule: 'will + 原形', sentence: 'I will go home tomorrow. (我明天回家。)' }
        }
    },
    {
        base: 'eat', meaning: '吃 🍔',
        tenses: {
            present_progressive: { form: 'eating', rule: '加 -ing', sentence: 'He is eating lunch. (他正在吃午饭。)' },
            past: { form: 'ate', rule: '⚠️ 不规则变化！', sentence: 'He ate an apple. (他吃了一个苹果。)' },
            future: { form: 'will eat', rule: 'will + 原形', sentence: 'He will eat dinner at 6. (他6点吃晚饭。)' }
        }
    },
    {
        base: 'see', meaning: '看见 👀',
        tenses: {
            present_progressive: { form: 'seeing', rule: '加 -ing', sentence: 'I am seeing a doctor. (我正在看医生。)' },
            past: { form: 'saw', rule: '⚠️ 不规则变化！', sentence: 'I saw a bird this morning. (我今早看见了一只鸟。)' },
            future: { form: 'will see', rule: 'will + 原形', sentence: 'I will see you tomorrow. (我明天见你。)' }
        }
    },
    {
        base: 'have', meaning: '有/吃',
        tenses: {
            present_progressive: { form: 'having', rule: '去e 加 -ing', sentence: 'We are having fun! (我们正在玩得开心！)' },
            past: { form: 'had', rule: '⚠️ 不规则变化！', sentence: 'I had breakfast at 7. (我7点吃了早饭。)' },
            future: { form: 'will have', rule: 'will + 原形', sentence: 'We will have a party. (我们将举办一个派对。)' }
        }
    },
    {
        base: 'come', meaning: '来',
        tenses: {
            present_progressive: { form: 'coming', rule: '去e 加 -ing', sentence: 'She is coming here. (她正在过来。)' },
            past: { form: 'came', rule: '⚠️ 不规则变化！', sentence: 'She came home late. (她晚回家了。)' },
            future: { form: 'will come', rule: 'will + 原形', sentence: 'She will come to my house. (她会来我家。)' }
        }
    },
    {
        base: 'do', meaning: '做',
        tenses: {
            present_progressive: { form: 'doing', rule: '加 -ing', sentence: 'What are you doing? (你在做什么？)' },
            past: { form: 'did', rule: '⚠️ 不规则变化！', sentence: 'I did my homework. (我做了作业。)' },
            future: { form: 'will do', rule: 'will + 原形', sentence: 'I will do it later. (我待会做。)' }
        }
    },
    {
        base: 'run', meaning: '跑 🏃',
        tenses: {
            present_progressive: { form: 'running', rule: '双写n 加 -ing', sentence: 'He is running fast! (他跑得好快！)' },
            past: { form: 'ran', rule: '⚠️ 不规则变化！', sentence: 'He ran to school. (他跑去了学校。)' },
            future: { form: 'will run', rule: 'will + 原形', sentence: 'He will run in the race. (他将参加赛跑。)' }
        }
    },
    {
        base: 'swim', meaning: '游泳 🏊',
        tenses: {
            present_progressive: { form: 'swimming', rule: '双写m 加 -ing', sentence: 'She is swimming in the pool. (她在泳池游泳。)' },
            past: { form: 'swam', rule: '⚠️ 不规则变化！', sentence: 'She swam in the sea yesterday. (她昨天在海里游泳了。)' },
            future: { form: 'will swim', rule: 'will + 原形', sentence: 'She will swim tomorrow. (她明天游泳。)' }
        }
    },
    {
        base: 'write', meaning: '写 ✍️',
        tenses: {
            present_progressive: { form: 'writing', rule: '去e 加 -ing', sentence: 'He is writing a letter. (他正在写信。)' },
            past: { form: 'wrote', rule: '⚠️ 不规则变化！', sentence: 'He wrote a story. (他写了一个故事。)' },
            future: { form: 'will write', rule: 'will + 原形', sentence: 'He will write to you. (他会给你写信。)' }
        }
    },
    {
        base: 'buy', meaning: '买 🛒',
        tenses: {
            present_progressive: { form: 'buying', rule: '加 -ing', sentence: 'Mom is buying food. (妈妈正在买食物。)' },
            past: { form: 'bought', rule: '⚠️ 不规则变化！', sentence: 'Mom bought a gift. (妈妈买了一份礼物。)' },
            future: { form: 'will buy', rule: 'will + 原形', sentence: 'Mom will buy a cake. (妈妈将要买蛋糕。)' }
        }
    },
];

const tenseInfo = {
    present_progressive: { label: '现在进行时', color: 'indigo', signal: 'now, look, listen', formula: 'am/is/are + doing' },
    past: { label: '一般过去时', color: 'green', signal: 'yesterday, last night, ago', formula: '动词过去式 (ed / 不规则)' },
    future: { label: '一般将来时', color: 'orange', signal: 'tomorrow, next week, soon', formula: 'will + 动词原形' },
};

const TenseTransformer = () => {
    const [verbIdx, setVerbIdx] = useState(0);
    const [activeTense, setActiveTense] = useState(null);

    const verb = verbsData[verbIdx];

    const nextVerb = () => {
        setVerbIdx(i => (i + 1) % verbsData.length);
        setActiveTense(null);
    };
    const prevVerb = () => {
        setVerbIdx(i => (i - 1 + verbsData.length) % verbsData.length);
        setActiveTense(null);
    };

    return (
        <div className="space-y-6">
            <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-2">
                    <Sparkles className="text-amber-500" /> ⏰ 时态变身器
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">选择一个动词，点击不同时态按钮，看它如何"变身"！</p>
            </div>

            {/* Verb Display */}
            <div className="text-center">
                <div className="inline-flex items-center gap-4">
                    <button onClick={prevVerb} className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:bg-slate-200 transition-colors text-slate-500 font-bold text-lg">←</button>
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-300 dark:border-amber-700 rounded-2xl px-8 py-5 min-w-[180px]">
                        <div className="text-4xl font-black text-amber-700 dark:text-amber-300">{verb.base}</div>
                        <div className="text-sm text-amber-600/70 dark:text-amber-400/70 mt-1">{verb.meaning}</div>
                        <div className="text-xs text-slate-400 mt-1">{verbIdx + 1} / {verbsData.length}</div>
                    </div>
                    <button onClick={nextVerb} className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:bg-slate-200 transition-colors text-slate-500 font-bold text-lg">→</button>
                </div>
            </div>

            {/* Tense Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {Object.entries(tenseInfo).map(([key, info]) => {
                    const isActive = activeTense === key;
                    return (
                        <button key={key} onClick={() => setActiveTense(key)}
                            className={`p-4 rounded-2xl border-2 transition-all text-left ${isActive
                                    ? `border-${info.color}-500 bg-${info.color}-50 dark:bg-${info.color}-900/20 shadow-lg scale-[1.02]`
                                    : 'border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 hover:border-slate-300 hover:shadow'
                                }`}>
                            <div className={`font-bold ${isActive ? `text-${info.color}-700 dark:text-${info.color}-300` : 'text-slate-700 dark:text-slate-200'}`}>
                                {key === 'present_progressive' ? '🔄' : key === 'past' ? '⏪' : '⏩'} {info.label}
                            </div>
                            <div className="text-xs text-slate-400 mt-1">标志词: {info.signal}</div>
                            <div className="text-xs text-slate-400">公式: {info.formula}</div>
                        </button>
                    );
                })}
            </div>

            {/* Transformation Result */}
            {activeTense && (
                <div className={`bg-white dark:bg-slate-800 rounded-2xl border-2 border-${tenseInfo[activeTense].color}-400 p-6 space-y-4 transition-all`}>
                    <div className="flex items-center justify-center gap-4 flex-wrap">
                        <div className="text-center">
                            <div className="text-xs text-slate-400 mb-1">原形</div>
                            <div className="text-2xl font-bold text-slate-400 line-through">{verb.base}</div>
                        </div>
                        <Zap className={`text-${tenseInfo[activeTense].color}-500`} />
                        <div className="text-center">
                            <div className="text-xs text-slate-400 mb-1">{tenseInfo[activeTense].label}</div>
                            <div className={`text-2xl font-black text-${tenseInfo[activeTense].color}-600 dark:text-${tenseInfo[activeTense].color}-300`}>
                                {verb.tenses[activeTense].form}
                            </div>
                        </div>
                    </div>

                    <div className={`text-center text-sm font-bold text-${tenseInfo[activeTense].color}-600 dark:text-${tenseInfo[activeTense].color}-400 bg-${tenseInfo[activeTense].color}-50 dark:bg-${tenseInfo[activeTense].color}-900/10 px-4 py-2 rounded-xl`}>
                        变化规则: {verb.tenses[activeTense].rule}
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl text-center">
                        <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">例句</p>
                        <p className="text-base font-medium text-slate-700 dark:text-slate-200">
                            {verb.tenses[activeTense].sentence}
                        </p>
                    </div>
                </div>
            )}

            {!activeTense && (
                <div className="text-center p-8 text-slate-300 dark:text-slate-600">
                    <ArrowRight size={32} className="mx-auto mb-2 animate-pulse" />
                    <p className="text-sm">👆 点击上面的时态按钮，看动词如何变身！</p>
                </div>
            )}

            {/* Quick Reference */}
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-2xl border border-amber-200 dark:border-amber-800/50 text-sm text-amber-700 dark:text-amber-300">
                <strong>💡 秘诀：</strong>看到 <strong>yesterday / last night</strong> → 过去时；看到 <strong>now / look / listen</strong> → 进行时；看到 <strong>tomorrow / next</strong> → 将来时！
            </div>
        </div>
    );
};

export default TenseTransformer;

export const englishKnowledgeBase = {
    elementary: {
        name: '小学英语',
        icon: '🔤',
        color: 'from-amber-500 to-yellow-500',
        grades: [
            {
                id: 'grade-1', name: '一年级', subtitle: '字母与拼读启蒙',
                tracks: {
                    l1: {
                        name: '基础达标', icon: '📚', topics: [
                            { id: 'en1-l1-alphabet', name: '26个字母认读', difficulty: '基础', time: '25分钟', important: true },
                            { id: 'en1-l1-phonics-basic', name: '自然拼读基础', difficulty: '基础', time: '25分钟', important: true },
                            { id: 'en1-l1-colors-numbers', name: '颜色与数字', difficulty: '基础', time: '20分钟', important: true },
                            { id: 'en1-l1-greetings', name: '问候与自我介绍', difficulty: '基础', time: '20分钟', important: true }
                        ]
                    },
                    l2: {
                        name: '能力拓展', icon: '🌟', topics: [
                            { id: 'en1-l2-songs', name: '英文儿歌', difficulty: '进阶', time: '20分钟', important: false },
                            { id: 'en1-l2-classroom', name: '课堂用语', difficulty: '进阶', time: '20分钟', important: false },
                            { id: 'en1-l2-handwriting', name: '字母书写规范', difficulty: '进阶', time: '25分钟', important: false }
                        ]
                    }
                }
            },
            {
                id: 'grade-2', name: '二年级', subtitle: '拼读进阶与词汇扩展',
                tracks: {
                    l1: {
                        name: '基础达标', icon: '📚', topics: [
                            { id: 'en2-l1-phonics-adv', name: '自然拼读进阶', difficulty: '基础', time: '25分钟', important: true },
                            { id: 'en2-l1-family-animals', name: '家庭与动物', difficulty: '基础', time: '25分钟', important: true },
                            { id: 'en2-l1-simple-sentences', name: '简单句型(I am/I like)', difficulty: '基础', time: '25分钟', important: true },
                            { id: 'en2-l1-time-date', name: '时间与星期', difficulty: '基础', time: '20分钟', important: false }
                        ]
                    },
                    l2: {
                        name: '能力拓展', icon: '🌟', topics: [
                            { id: 'en2-l2-dialogues', name: '简单日常对话', difficulty: '进阶', time: '25分钟', important: false },
                            { id: 'en2-l2-picture-words', name: '看图识词', difficulty: '进阶', time: '20分钟', important: false },
                            { id: 'en2-l2-stories', name: '英文小故事', difficulty: '进阶', time: '25分钟', important: false }
                        ]
                    }
                }
            },
            {
                id: 'grade-3', name: '三年级', subtitle: '语法入门与句型基础',
                tracks: {
                    l1: {
                        name: '基础达标', icon: '📚', topics: [
                            { id: 'en3-l1-nouns-articles', name: '名词与冠词', difficulty: '基础', time: '25分钟', important: true },
                            { id: 'en3-l1-be-verbs', name: 'Be动词与一般现在时', difficulty: '基础', time: '30分钟', important: true },
                            { id: 'en3-l1-yes-no-questions', name: '一般疑问句与特殊疑问句', difficulty: '基础', time: '25分钟', important: true },
                            { id: 'en3-l1-prepositions', name: '方位介词(in/on/under)', difficulty: '基础', time: '20分钟', important: false }
                        ]
                    },
                    l2: {
                        name: '能力拓展', icon: '🌟', topics: [
                            { id: 'en3-l2-daily-dialogues', name: '日常对话场景', difficulty: '进阶', time: '25分钟', important: false },
                            { id: 'en3-l2-short-reading', name: '英文短文阅读', difficulty: '进阶', time: '25分钟', important: false },
                            { id: 'en3-l2-festivals', name: '中西节日文化', difficulty: '进阶', time: '20分钟', important: false }
                        ]
                    }
                }
            },
            {
                id: 'grade-4', name: '四年级', subtitle: '时态入门与表达拓展',
                tracks: {
                    l1: {
                        name: '基础达标', icon: '📚', topics: [
                            { id: 'en4-l1-present-continuous', name: '现在进行时', difficulty: '基础', time: '30分钟', important: true },
                            { id: 'en4-l1-modal-can', name: '情态动词can', difficulty: '基础', time: '25分钟', important: true },
                            { id: 'en4-l1-there-be', name: 'There be句型', difficulty: '基础', time: '25分钟', important: true },
                            { id: 'en4-l1-comparatives', name: '形容词比较级', difficulty: '基础', time: '25分钟', important: true }
                        ]
                    },
                    l2: {
                        name: '能力拓展', icon: '🌟', topics: [
                            { id: 'en4-l2-short-writing', name: '短文写作入门', difficulty: '进阶', time: '30分钟', important: false },
                            { id: 'en4-l2-culture', name: '中西文化对比', difficulty: '进阶', time: '20分钟', important: false },
                            { id: 'en4-l2-diary', name: '英文日记', difficulty: '进阶', time: '25分钟', important: false }
                        ]
                    }
                }
            },
            {
                id: 'grade-5', name: '五年级', subtitle: '过去时态与阅读理解',
                tracks: {
                    l1: {
                        name: '基础达标', icon: '📚', topics: [
                            { id: 'en5-l1-past-tense', name: '一般过去时', difficulty: '基础', time: '30分钟', important: true },
                            { id: 'en5-l1-frequency-adverbs', name: '频率副词', difficulty: '基础', time: '20分钟', important: false },
                            { id: 'en5-l1-countable-uncountable', name: '可数与不可数名词', difficulty: '基础', time: '25分钟', important: true },
                            { id: 'en5-l1-reading-methods', name: '阅读理解方法', difficulty: '基础', time: '30分钟', important: true }
                        ]
                    },
                    l2: {
                        name: '能力拓展', icon: '🌟', topics: [
                            { id: 'en5-l2-oral-practice', name: '口语表达练习', difficulty: '进阶', time: '25分钟', important: false },
                            { id: 'en5-l2-picture-writing', name: '看图写话', difficulty: '进阶', time: '30分钟', important: false },
                            { id: 'en5-l2-speech', name: '英语小演讲', difficulty: '进阶', time: '25分钟', important: false }
                        ]
                    }
                }
            },
            {
                id: 'grade-6', name: '六年级', subtitle: '语法综合与小升初衔接',
                tracks: {
                    l1: {
                        name: '基础达标', icon: '📚', topics: [
                            { id: 'en6-l1-future-tense', name: '一般将来时', difficulty: '基础', time: '30分钟', important: true },
                            { id: 'en6-l1-adj-adv', name: '形容词与副词辨析', difficulty: '基础', time: '25分钟', important: true },
                            { id: 'en6-l1-reading-strategy', name: '阅读策略与技巧', difficulty: '基础', time: '30分钟', important: true },
                            { id: 'en6-l1-grammar-review', name: '小升初语法总结', difficulty: '基础', time: '35分钟', important: true }
                        ]
                    },
                    l2: {
                        name: '能力拓展', icon: '🌟', topics: [
                            { id: 'en6-l2-letter-writing', name: '英文书信写作', difficulty: '进阶', time: '30分钟', important: false },
                            { id: 'en6-l2-cross-culture', name: '跨文化交际', difficulty: '进阶', time: '25分钟', important: false },
                            { id: 'en6-l2-transition-review', name: '小升初总复习', difficulty: '进阶', time: '35分钟', important: true }
                        ]
                    }
                }
            }
        ]
    },
    middle: {
        name: '初中英语',
        icon: '📝',
        color: 'from-amber-600 to-orange-500',
        grades: [
            {
                id: 'grade-7', name: '七年级', subtitle: '时态体系与从句入门',
                tracks: {
                    l1: {
                        name: '基础达标', icon: '📚', topics: [
                            { id: 'en7-l1-present-perfect', name: '现在完成时', difficulty: '基础', time: '35分钟', important: true },
                            { id: 'en7-l1-object-clause', name: '宾语从句入门', difficulty: '基础', time: '30分钟', important: true },
                            { id: 'en7-l1-reading-skills', name: '阅读理解技巧', difficulty: '基础', time: '30分钟', important: true },
                            { id: 'en7-l1-vocab-methods', name: '词汇记忆方法', difficulty: '基础', time: '25分钟', important: false }
                        ]
                    },
                    l2: {
                        name: '能力拓展', icon: '🌟', topics: [
                            { id: 'en7-l2-cloze', name: '完形填空技巧', difficulty: '进阶', time: '30分钟', important: true },
                            { id: 'en7-l2-listening', name: '听力训练策略', difficulty: '进阶', time: '25分钟', important: false },
                            { id: 'en7-l2-summary', name: '英文摘要写作', difficulty: '进阶', time: '30分钟', important: false }
                        ]
                    }
                }
            },
            {
                id: 'grade-8', name: '八年级', subtitle: '被动语态与从句进阶',
                tracks: {
                    l1: {
                        name: '基础达标', icon: '📚', topics: [
                            { id: 'en8-l1-passive', name: '被动语态', difficulty: '基础', time: '35分钟', important: true },
                            { id: 'en8-l1-adverbial-clause', name: '状语从句', difficulty: '基础', time: '30分钟', important: true },
                            { id: 'en8-l1-attributive-clause', name: '定语从句入门', difficulty: '基础', time: '35分钟', important: true },
                            { id: 'en8-l1-writing-templates', name: '写作模板与句型', difficulty: '基础', time: '30分钟', important: true }
                        ]
                    },
                    l2: {
                        name: '能力拓展', icon: '🌟', topics: [
                            { id: 'en8-l2-reading-adv', name: '阅读理解进阶', difficulty: '进阶', time: '35分钟', important: true },
                            { id: 'en8-l2-topic-writing', name: '话题写作训练', difficulty: '进阶', time: '35分钟', important: false },
                            { id: 'en8-l2-oral-scenarios', name: '情景口语对话', difficulty: '进阶', time: '25分钟', important: false }
                        ]
                    }
                }
            },
            {
                id: 'grade-9', name: '九年级', subtitle: '中考英语系统突破',
                tracks: {
                    l1: {
                        name: '基础达标', icon: '📚', topics: [
                            { id: 'en9-l1-grammar-review', name: '中考语法综合', difficulty: '基础', time: '40分钟', important: true },
                            { id: 'en9-l1-reading-exam', name: '中考阅读专题', difficulty: '基础', time: '35分钟', important: true },
                            { id: 'en9-l1-writing-exam', name: '中考写作突破', difficulty: '基础', time: '40分钟', important: true },
                            { id: 'en9-l1-exam-sprint', name: '中考英语冲刺', difficulty: '基础', time: '45分钟', important: true }
                        ]
                    },
                    l2: {
                        name: '能力拓展', icon: '🌟', topics: [
                            { id: 'en9-l2-graded-reading', name: '英文分级阅读', difficulty: '进阶', time: '30分钟', important: false },
                            { id: 'en9-l2-communication', name: '交际用语大全', difficulty: '进阶', time: '25分钟', important: false },
                            { id: 'en9-l2-mock-exam', name: '中考模拟训练', difficulty: '进阶', time: '45分钟', important: true }
                        ]
                    }
                }
            }
        ]
    },
    high: {
        name: '高中英语',
        icon: '🎓',
        color: 'from-orange-500 to-amber-600',
        grades: [
            {
                id: 'grade-10', name: '高一', subtitle: '语法体系与阅读策略',
                tracks: {
                    l1: {
                        name: '基础达标', icon: '📚', topics: [
                            { id: 'en10-l1-tense-voice', name: '时态与语态体系', difficulty: '基础', time: '40分钟', important: true },
                            { id: 'en10-l1-reading-strategy', name: '阅读理解策略', difficulty: '基础', time: '35分钟', important: true },
                            { id: 'en10-l1-application-writing', name: '应用文写作', difficulty: '基础', time: '35分钟', important: true },
                            { id: 'en10-l1-vocab-expansion', name: '词汇拓展与构词法', difficulty: '基础', time: '30分钟', important: true }
                        ]
                    },
                    l2: {
                        name: '能力拓展', icon: '🌟', topics: [
                            { id: 'en10-l2-long-sentences', name: '长难句分析', difficulty: '进阶', time: '35分钟', important: true },
                            { id: 'en10-l2-continuation', name: '读后续写入门', difficulty: '进阶', time: '40分钟', important: true },
                            { id: 'en10-l2-listening-strategy', name: '听力应试策略', difficulty: '进阶', time: '30分钟', important: false }
                        ]
                    }
                }
            },
            {
                id: 'grade-11', name: '高二', subtitle: '高级语法与写作提升',
                tracks: {
                    l1: {
                        name: '基础达标', icon: '📚', topics: [
                            { id: 'en11-l1-subjunctive', name: '虚拟语气', difficulty: '基础', time: '40分钟', important: true },
                            { id: 'en11-l1-non-finite', name: '非谓语动词', difficulty: '基础', time: '40分钟', important: true },
                            { id: 'en11-l1-cloze-skills', name: '完形填空技巧', difficulty: '基础', time: '35分钟', important: true },
                            { id: 'en11-l1-seven-choose-five', name: '阅读七选五', difficulty: '基础', time: '35分钟', important: true }
                        ]
                    },
                    l2: {
                        name: '能力拓展', icon: '🌟', topics: [
                            { id: 'en11-l2-continuation-adv', name: '读后续写进阶', difficulty: '进阶', time: '40分钟', important: true },
                            { id: 'en11-l2-critical-reading', name: '批判性阅读', difficulty: '进阶', time: '35分钟', important: false },
                            { id: 'en11-l2-academic-writing', name: '学术写作入门', difficulty: '进阶', time: '35分钟', important: false }
                        ]
                    }
                }
            },
            {
                id: 'grade-12', name: '高三', subtitle: '高考英语全面冲刺',
                tracks: {
                    l1: {
                        name: '基础达标', icon: '📚', topics: [
                            { id: 'en12-l1-grammar-filling', name: '高考语法填空', difficulty: '基础', time: '40分钟', important: true },
                            { id: 'en12-l1-reading-exam', name: '高考阅读专题', difficulty: '基础', time: '40分钟', important: true },
                            { id: 'en12-l1-writing-exam', name: '高考写作突破', difficulty: '基础', time: '45分钟', important: true },
                            { id: 'en12-l1-exam-sprint', name: '高考英语冲刺', difficulty: '基础', time: '50分钟', important: true }
                        ]
                    },
                    l2: {
                        name: '能力拓展', icon: '🌟', topics: [
                            { id: 'en12-l2-language-use', name: '语用综合大题', difficulty: '进阶', time: '35分钟', important: true },
                            { id: 'en12-l2-culture-knowledge', name: '英语文化常识', difficulty: '进阶', time: '25分钟', important: false },
                            { id: 'en12-l2-final-sprint', name: '最终冲刺策略', difficulty: '进阶', time: '45分钟', important: true }
                        ]
                    }
                }
            }
        ]
    }
};

// Helper to flatten topics for navigation
export const getEnglishFlattenedTopics = () => {
    const topics = [];
    const processGrades = (grades, stageName) => {
        if (!grades) return;
        grades.forEach(grade => {
            Object.values(grade.tracks).forEach(track => {
                track.topics.forEach(topic => {
                    topics.push({
                        ...topic,
                        grade: grade.name,
                        stage: stageName,
                        link: `/subjects/english/${topic.id}`,
                        gradeLevel: parseInt(grade.id.replace('grade-', ''))
                    });
                });
            });
        });
    };

    processGrades(englishKnowledgeBase.elementary.grades, '小学');
    processGrades(englishKnowledgeBase.middle.grades, '初中');
    processGrades(englishKnowledgeBase.high.grades, '高中');

    return topics;
};

// Helper to get adjacent topics
export const getEnglishAdjacentTopics = (currentTopicId) => {
    const allTopics = getEnglishFlattenedTopics();
    const index = allTopics.findIndex(t => t.id === currentTopicId);

    if (index === -1) return { prev: null, next: null };

    return {
        prev: index > 0 ? allTopics[index - 1] : null,
        next: index < allTopics.length - 1 ? allTopics[index + 1] : null
    };
};

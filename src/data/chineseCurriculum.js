export const chineseKnowledgeBase = {
    elementary: {
        name: '小学语文',
        icon: '📖',
        color: 'from-red-500 to-rose-500',
        grades: [
            {
                id: 'grade-1',
                name: '一年级',
                subtitle: '拼音识字启蒙',
                tracks: {
                    l1: {
                        name: '基础达标',
                        icon: '📚',
                        topics: [
                            { id: 'cn1-l1-pinyin-initials', name: '声母韵母', difficulty: '基础', time: '25分钟', important: true },
                            { id: 'cn1-l1-pinyin-tones', name: '声调与拼读', difficulty: '基础', time: '25分钟', important: true },
                            { id: 'cn1-l1-basic-chars', name: '基础识字（独体字）', difficulty: '基础', time: '30分钟', important: true },
                            { id: 'cn1-l1-stroke-order', name: '笔画与笔顺', difficulty: '基础', time: '25分钟', important: true }
                        ]
                    },
                    l2: {
                        name: '素养进阶',
                        icon: '🌟',
                        topics: [
                            { id: 'cn1-l2-picture-talk', name: '看图说话', difficulty: '进阶', time: '25分钟', important: false },
                            { id: 'cn1-l2-nursery-rhymes', name: '儿歌与童谣', difficulty: '进阶', time: '20分钟', important: false },
                            { id: 'cn1-l2-simple-sentences', name: '简单句子', difficulty: '进阶', time: '25分钟', important: false }
                        ]
                    }
                }
            },
            {
                id: 'grade-2',
                name: '二年级',
                subtitle: '识字扩展与表达',
                tracks: {
                    l1: {
                        name: '基础达标',
                        icon: '📚',
                        topics: [
                            { id: 'cn2-l1-radicals', name: '偏旁部首', difficulty: '基础', time: '25分钟', important: true },
                            { id: 'cn2-l1-word-building', name: '组词造句', difficulty: '基础', time: '30分钟', important: true },
                            { id: 'cn2-l1-punctuation', name: '标点符号', difficulty: '基础', time: '25分钟', important: true },
                            { id: 'cn2-l1-dictionary', name: '查字典方法', difficulty: '基础', time: '20分钟', important: false }
                        ]
                    },
                    l2: {
                        name: '素养进阶',
                        icon: '🌟',
                        topics: [
                            { id: 'cn2-l2-picture-writing', name: '看图写话', difficulty: '进阶', time: '30分钟', important: true },
                            { id: 'cn2-l2-idioms', name: '成语故事', difficulty: '进阶', time: '25分钟', important: false },
                            { id: 'cn2-l2-antonyms-synonyms', name: '近义词与反义词', difficulty: '进阶', time: '25分钟', important: false }
                        ]
                    }
                }
            },
            {
                id: 'grade-3',
                name: '三年级',
                subtitle: '阅读与写作启蒙',
                tracks: {
                    l1: {
                        name: '基础达标',
                        icon: '📚',
                        topics: [
                            { id: 'cn3-l1-reading-intro', name: '阅读理解入门', difficulty: '基础', time: '30分钟', important: true },
                            { id: 'cn3-l1-rhetoric', name: '修辞手法（比喻·拟人）', difficulty: '基础', time: '30分钟', important: true },
                            { id: 'cn3-l1-ancient-poems-1', name: '必背古诗词（上）', difficulty: '基础', time: '25分钟', important: true },
                            { id: 'cn3-l1-paragraph', name: '段落大意概括', difficulty: '基础', time: '30分钟', important: false }
                        ]
                    },
                    l2: {
                        name: '素养进阶',
                        icon: '🌟',
                        topics: [
                            { id: 'cn3-l2-writing-intro', name: '写作启蒙（写人写事）', difficulty: '进阶', time: '35分钟', important: true },
                            { id: 'cn3-l2-conjunctions', name: '关联词语', difficulty: '进阶', time: '25分钟', important: false },
                            { id: 'cn3-l2-diary', name: '日记与周记', difficulty: '进阶', time: '30分钟', important: false }
                        ]
                    }
                }
            },
            {
                id: 'grade-4',
                name: '四年级',
                subtitle: '阅读理解与表达进阶',
                tracks: {
                    l1: {
                        name: '基础达标',
                        icon: '📚',
                        topics: [
                            { id: 'cn4-l1-sentence-transform', name: '缩句与扩句', difficulty: '基础', time: '30分钟', important: true },
                            { id: 'cn4-l1-conjunction-usage', name: '关联词应用', difficulty: '基础', time: '30分钟', important: true },
                            { id: 'cn4-l1-ancient-poems-2', name: '必背古诗词（下）', difficulty: '基础', time: '25分钟', important: true },
                            { id: 'cn4-l1-reading-comprehension', name: '阅读理解（记叙文）', difficulty: '基础', time: '35分钟', important: true }
                        ]
                    },
                    l2: {
                        name: '素养进阶',
                        icon: '🌟',
                        topics: [
                            { id: 'cn4-l2-writing-scenes', name: '写作进阶（写景状物）', difficulty: '进阶', time: '35分钟', important: true },
                            { id: 'cn4-l2-sick-sentences', name: '病句修改', difficulty: '进阶', time: '30分钟', important: true },
                            { id: 'cn4-l2-rhetoric-adv', name: '修辞手法（排比·夸张）', difficulty: '进阶', time: '25分钟', important: false }
                        ]
                    }
                }
            },
            {
                id: 'grade-5',
                name: '五年级',
                subtitle: '文言文与综合能力',
                tracks: {
                    l1: {
                        name: '基础达标',
                        icon: '📚',
                        topics: [
                            { id: 'cn5-l1-classical-intro', name: '文言文入门', difficulty: '基础', time: '35分钟', important: true },
                            { id: 'cn5-l1-poetry-appreciation', name: '古诗词赏析', difficulty: '基础', time: '30分钟', important: true },
                            { id: 'cn5-l1-reading-adv', name: '阅读理解进阶', difficulty: '基础', time: '35分钟', important: true },
                            { id: 'cn5-l1-expository', name: '说明文阅读', difficulty: '基础', time: '30分钟', important: false }
                        ]
                    },
                    l2: {
                        name: '素养进阶',
                        icon: '🌟',
                        topics: [
                            { id: 'cn5-l2-writing-techniques', name: '习作技巧（开头结尾）', difficulty: '进阶', time: '35分钟', important: true },
                            { id: 'cn5-l2-oral-communication', name: '口语交际', difficulty: '进阶', time: '25分钟', important: false },
                            { id: 'cn5-l2-word-accumulation', name: '好词好句积累', difficulty: '进阶', time: '25分钟', important: false }
                        ]
                    }
                }
            },
            {
                id: 'grade-6',
                name: '六年级',
                subtitle: '综合运用与小升初',
                tracks: {
                    l1: {
                        name: '基础达标',
                        icon: '📚',
                        topics: [
                            { id: 'cn6-l1-poetry-mastery', name: '古诗词鉴赏', difficulty: '基础', time: '35分钟', important: true },
                            { id: 'cn6-l1-comprehensive-reading', name: '综合阅读理解', difficulty: '基础', time: '40分钟', important: true },
                            { id: 'cn6-l1-classical-adv', name: '文言文进阶', difficulty: '基础', time: '35分钟', important: true },
                            { id: 'cn6-l1-argumentative', name: '议论文初步', difficulty: '基础', time: '30分钟', important: false }
                        ]
                    },
                    l2: {
                        name: '素养进阶',
                        icon: '🌟',
                        topics: [
                            { id: 'cn6-l2-exam-prep', name: '小升初专题复习', difficulty: '进阶', time: '40分钟', important: true },
                            { id: 'cn6-l2-whole-book-reading', name: '整本书阅读', difficulty: '进阶', time: '35分钟', important: false },
                            { id: 'cn6-l2-writing-mastery', name: '考场作文技巧', difficulty: '进阶', time: '35分钟', important: true }
                        ]
                    }
                }
            }
        ]
    },

    middle: {
        name: '初中语文',
        icon: '🧠',
        color: 'from-red-600 to-rose-600',
        grades: [
            {
                id: 'grade-7',
                name: '初一',
                subtitle: '文学鉴赏与表达提升',
                tracks: {
                    l1: {
                        name: '基础达标',
                        icon: '📚',
                        topics: [
                            { id: 'cn7-l1-classical-basic', name: '文言文基础阅读', difficulty: '基础', time: '40分钟', important: true },
                            { id: 'cn7-l1-narrative-deep', name: '记叙文深入阅读', difficulty: '基础', time: '35分钟', important: true },
                            { id: 'cn7-l1-prose', name: '散文赏析', difficulty: '基础', time: '35分钟', important: true },
                            { id: 'cn7-l1-poetry-method', name: '古诗鉴赏方法', difficulty: '基础', time: '35分钟', important: true }
                        ]
                    },
                    l2: {
                        name: '素养进阶',
                        icon: '🌟',
                        topics: [
                            { id: 'cn7-l2-classics-guide', name: '名著导读', difficulty: '进阶', time: '40分钟', important: true },
                            { id: 'cn7-l2-narrative-writing', name: '记叙文写作进阶', difficulty: '进阶', time: '40分钟', important: true },
                            { id: 'cn7-l2-grammar-basic', name: '语法基础（词性与句子成分）', difficulty: '进阶', time: '35分钟', important: false }
                        ]
                    }
                }
            },
            {
                id: 'grade-8',
                name: '初二',
                subtitle: '议论文与文体拓展',
                tracks: {
                    l1: {
                        name: '基础达标',
                        icon: '📚',
                        topics: [
                            { id: 'cn8-l1-expository-deep', name: '说明文深入阅读', difficulty: '基础', time: '35分钟', important: true },
                            { id: 'cn8-l1-argumentative-read', name: '议论文阅读', difficulty: '基础', time: '40分钟', important: true },
                            { id: 'cn8-l1-classical-adv', name: '文言文进阶阅读', difficulty: '基础', time: '40分钟', important: true },
                            { id: 'cn8-l1-news-writing', name: '新闻与通讯', difficulty: '基础', time: '30分钟', important: false }
                        ]
                    },
                    l2: {
                        name: '素养进阶',
                        icon: '🌟',
                        topics: [
                            { id: 'cn8-l2-argumentative-write', name: '议论文写作入门', difficulty: '进阶', time: '40分钟', important: true },
                            { id: 'cn8-l2-classics-reading', name: '名著阅读（深入）', difficulty: '进阶', time: '40分钟', important: true },
                            { id: 'cn8-l2-rhetoric-grammar', name: '修辞与语法综合', difficulty: '进阶', time: '35分钟', important: false }
                        ]
                    }
                }
            },
            {
                id: 'grade-9',
                name: '初三',
                subtitle: '中考冲刺与综合提升',
                tracks: {
                    l1: {
                        name: '基础达标',
                        icon: '📚',
                        topics: [
                            { id: 'cn9-l1-reading-exam', name: '中考阅读专题', difficulty: '基础', time: '45分钟', important: true },
                            { id: 'cn9-l1-classical-comprehensive', name: '文言文综合训练', difficulty: '基础', time: '40分钟', important: true },
                            { id: 'cn9-l1-poetry-comprehensive', name: '古诗鉴赏综合', difficulty: '基础', time: '35分钟', important: true },
                            { id: 'cn9-l1-exam-writing', name: '中考作文突破', difficulty: '基础', time: '45分钟', important: true }
                        ]
                    },
                    l2: {
                        name: '素养进阶',
                        icon: '🌟',
                        topics: [
                            { id: 'cn9-l2-classics-comprehensive', name: '名著阅读综合', difficulty: '进阶', time: '40分钟', important: true },
                            { id: 'cn9-l2-language-use', name: '语言运用综合', difficulty: '进阶', time: '35分钟', important: false },
                            { id: 'cn9-l2-exam-sprint', name: '中考语文冲刺', difficulty: '进阶', time: '45分钟', important: true }
                        ]
                    }
                }
            }
        ]
    },

    high: {
        name: '高中语文',
        icon: '🎓',
        color: 'from-red-700 to-rose-700',
        grades: [
            {
                id: 'grade-10',
                name: '高一',
                subtitle: '文学素养与表达深化',
                tracks: {
                    l1: {
                        name: '基础达标',
                        icon: '📚',
                        topics: [
                            { id: 'cn10-l1-modern-literature', name: '现代文学作品鉴赏', difficulty: '基础', time: '45分钟', important: true },
                            { id: 'cn10-l1-pre-qin-prose', name: '先秦散文（文言文经典）', difficulty: '基础', time: '45分钟', important: true },
                            { id: 'cn10-l1-tang-poetry', name: '唐诗鉴赏', difficulty: '基础', time: '40分钟', important: true },
                            { id: 'cn10-l1-argumentative-writing', name: '议论文写作', difficulty: '基础', time: '45分钟', important: true }
                        ]
                    },
                    l2: {
                        name: '素养进阶',
                        icon: '🌟',
                        topics: [
                            { id: 'cn10-l2-language-application', name: '语言文字运用', difficulty: '进阶', time: '40分钟', important: true },
                            { id: 'cn10-l2-whole-book', name: '整本书阅读（高中）', difficulty: '进阶', time: '45分钟', important: false },
                            { id: 'cn10-l2-news-commentary', name: '新闻评论与时评', difficulty: '进阶', time: '35分钟', important: false }
                        ]
                    }
                }
            },
            {
                id: 'grade-11',
                name: '高二',
                subtitle: '文学鉴赏与思辨能力',
                tracks: {
                    l1: {
                        name: '基础达标',
                        icon: '📚',
                        topics: [
                            { id: 'cn11-l1-novel-drama', name: '小说与戏剧鉴赏', difficulty: '基础', time: '45分钟', important: true },
                            { id: 'cn11-l1-ancient-prose', name: '古代散文经典', difficulty: '基础', time: '45分钟', important: true },
                            { id: 'cn11-l1-song-ci', name: '宋词鉴赏', difficulty: '基础', time: '40分钟', important: true },
                            { id: 'cn11-l1-literary-criticism', name: '文学评论写作', difficulty: '基础', time: '45分钟', important: false }
                        ]
                    },
                    l2: {
                        name: '素养进阶',
                        icon: '🌟',
                        topics: [
                            { id: 'cn11-l2-logic-argumentation', name: '逻辑思维与论证', difficulty: '进阶', time: '40分钟', important: true },
                            { id: 'cn11-l2-cross-media', name: '跨媒体阅读与交流', difficulty: '进阶', time: '35分钟', important: false },
                            { id: 'cn11-l2-speech-debate', name: '演讲与辩论', difficulty: '进阶', time: '40分钟', important: false }
                        ]
                    }
                }
            },
            {
                id: 'grade-12',
                name: '高三',
                subtitle: '高考冲刺与综合突破',
                tracks: {
                    l1: {
                        name: '基础达标',
                        icon: '📚',
                        topics: [
                            { id: 'cn12-l1-gaokao-reading', name: '高考阅读专题', difficulty: '基础', time: '50分钟', important: true },
                            { id: 'cn12-l1-classical-breakthrough', name: '文言文综合突破', difficulty: '基础', time: '45分钟', important: true },
                            { id: 'cn12-l1-poetry-mastery', name: '古诗鉴赏综合', difficulty: '基础', time: '40分钟', important: true },
                            { id: 'cn12-l1-gaokao-writing', name: '高考作文突破', difficulty: '基础', time: '50分钟', important: true }
                        ]
                    },
                    l2: {
                        name: '素养进阶',
                        icon: '🌟',
                        topics: [
                            { id: 'cn12-l2-language-big-q', name: '语言运用大题', difficulty: '进阶', time: '40分钟', important: true },
                            { id: 'cn12-l2-literary-knowledge', name: '文学常识综合', difficulty: '进阶', time: '35分钟', important: false },
                            { id: 'cn12-l2-final-sprint', name: '高考语文冲刺', difficulty: '进阶', time: '50分钟', important: true }
                        ]
                    }
                }
            }
        ]
    }
};

// Helper to flatten topics for navigation
export const getChineseFlattenedTopics = () => {
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
                        link: `/subjects/chinese/${topic.id}`,
                        gradeLevel: parseInt(grade.id.replace('grade-', ''))
                    });
                });
            });
        });
    };

    processGrades(chineseKnowledgeBase.elementary.grades, '小学');
    processGrades(chineseKnowledgeBase.middle.grades, '初中');
    processGrades(chineseKnowledgeBase.high.grades, '高中');

    return topics;
};

// Helper to get adjacent topics
export const getChineseAdjacentTopics = (currentTopicId) => {
    const allTopics = getChineseFlattenedTopics();
    const index = allTopics.findIndex(t => t.id === currentTopicId);

    if (index === -1) return { prev: null, next: null };

    return {
        prev: index > 0 ? allTopics[index - 1] : null,
        next: index < allTopics.length - 1 ? allTopics[index + 1] : null
    };
};


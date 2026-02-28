/**
 * 小学语文知识图谱
 * 
 * 基于：
 * - 中国教育部语文课程标准
 * - 部编版（统编版）语文教材
 * - 知识点之间的依赖关系
 */

export const chineseKnowledgeGraph = {
    elementary: {
        grade1: {
            name: '一年级语文',
            semesters: {
                first: [
                    {
                        id: 'cn-1-1-pinyin-initials',
                        name: '声母韵母',
                        skills: ['23个声母', '24个韵母', '16个整体认读音节', '声母韵母辨认'],
                        prerequisites: [],
                        difficulty: 0.1
                    },
                    {
                        id: 'cn-1-1-pinyin-tones',
                        name: '声调与拼读',
                        skills: ['四声调', '轻声', '音节拼读', '拼音书写'],
                        prerequisites: ['cn-1-1-pinyin-initials'],
                        difficulty: 0.15
                    },
                    {
                        id: 'cn-1-1-basic-chars',
                        name: '基础识字',
                        skills: ['独体字认读', '象形字', '指事字', '生字认写'],
                        prerequisites: ['cn-1-1-pinyin-tones'],
                        difficulty: 0.2
                    }
                ],
                second: [
                    {
                        id: 'cn-1-2-stroke-order',
                        name: '笔画与笔顺',
                        skills: ['基本笔画', '笔顺规则', '常用偏旁', '书写规范'],
                        prerequisites: ['cn-1-1-basic-chars'],
                        difficulty: 0.2
                    },
                    {
                        id: 'cn-1-2-picture-talk',
                        name: '看图说话',
                        skills: ['观察图片', '有序表达', '完整句子', '想象扩展'],
                        prerequisites: ['cn-1-1-basic-chars'],
                        difficulty: 0.25
                    },
                    {
                        id: 'cn-1-2-nursery-rhymes',
                        name: '儿歌与童谣',
                        skills: ['朗读', '节奏感', '押韵', '背诵'],
                        prerequisites: ['cn-1-1-pinyin-tones'],
                        difficulty: 0.15
                    }
                ]
            }
        },
        grade2: {
            name: '二年级语文',
            semesters: {
                first: [
                    {
                        id: 'cn-2-1-radicals',
                        name: '偏旁部首',
                        skills: ['常用偏旁', '部首归类', '形旁表意', '声旁表音'],
                        prerequisites: ['cn-1-2-stroke-order'],
                        difficulty: 0.3
                    },
                    {
                        id: 'cn-2-1-word-building',
                        name: '组词造句',
                        skills: ['组词', '扩词', '造句', '词语搭配'],
                        prerequisites: ['cn-2-1-radicals'],
                        difficulty: 0.35
                    },
                    {
                        id: 'cn-2-1-punctuation',
                        name: '标点符号',
                        skills: ['句号', '问号', '感叹号', '逗号', '顿号'],
                        prerequisites: ['cn-2-1-word-building'],
                        difficulty: 0.3
                    }
                ],
                second: [
                    {
                        id: 'cn-2-2-dictionary',
                        name: '查字典方法',
                        skills: ['音序查字法', '部首查字法', '笔画查字法'],
                        prerequisites: ['cn-2-1-radicals'],
                        difficulty: 0.35
                    },
                    {
                        id: 'cn-2-2-picture-writing',
                        name: '看图写话',
                        skills: ['观察描述', '时间顺序', '人物描写', '完整表达'],
                        prerequisites: ['cn-2-1-word-building', 'cn-2-1-punctuation'],
                        difficulty: 0.4
                    },
                    {
                        id: 'cn-2-2-idioms',
                        name: '成语故事',
                        skills: ['成语理解', '成语运用', '故事复述'],
                        prerequisites: ['cn-2-1-word-building'],
                        difficulty: 0.35
                    }
                ]
            }
        },
        grade3: {
            name: '三年级语文',
            semesters: {
                first: [
                    {
                        id: 'cn-3-1-reading-intro',
                        name: '阅读理解入门',
                        skills: ['理解词语', '理解句子', '概括段意', '提取信息'],
                        prerequisites: ['cn-2-2-picture-writing'],
                        difficulty: 0.45
                    },
                    {
                        id: 'cn-3-1-rhetoric',
                        name: '修辞手法（比喻·拟人）',
                        skills: ['比喻句识别', '拟人句识别', '比喻句仿写', '修辞效果分析'],
                        prerequisites: ['cn-3-1-reading-intro'],
                        difficulty: 0.5
                    },
                    {
                        id: 'cn-3-1-ancient-poems',
                        name: '必背古诗词（上）',
                        skills: ['古诗朗读', '古诗背诵', '理解诗意', '体会感情'],
                        prerequisites: [],
                        difficulty: 0.45
                    }
                ],
                second: [
                    {
                        id: 'cn-3-2-paragraph',
                        name: '段落大意概括',
                        skills: ['找中心句', '概括段意', '分段', '归纳主旨'],
                        prerequisites: ['cn-3-1-reading-intro'],
                        difficulty: 0.5
                    },
                    {
                        id: 'cn-3-2-writing-intro',
                        name: '写作启蒙',
                        skills: ['写人', '叙事', '结构安排', '详略得当'],
                        prerequisites: ['cn-2-2-picture-writing', 'cn-3-1-rhetoric'],
                        difficulty: 0.55
                    },
                    {
                        id: 'cn-3-2-conjunctions',
                        name: '关联词语',
                        skills: ['因果关系', '转折关系', '假设关系', '条件关系'],
                        prerequisites: ['cn-3-1-reading-intro'],
                        difficulty: 0.5
                    }
                ]
            }
        },
        grade4: {
            name: '四年级语文',
            semesters: {
                first: [
                    {
                        id: 'cn-4-1-sentence-transform',
                        name: '缩句与扩句',
                        skills: ['缩句方法', '扩句方法', '句式变换', '修改病句'],
                        prerequisites: ['cn-3-2-paragraph'],
                        difficulty: 0.55
                    },
                    {
                        id: 'cn-4-1-conjunction-usage',
                        name: '关联词应用',
                        skills: ['并列关系', '递进关系', '选择关系', '关联词辨析'],
                        prerequisites: ['cn-3-2-conjunctions'],
                        difficulty: 0.55
                    },
                    {
                        id: 'cn-4-1-ancient-poems-2',
                        name: '必背古诗词（下）',
                        skills: ['诗词鉴赏', '意象理解', '手法分析', '名句赏析'],
                        prerequisites: ['cn-3-1-ancient-poems'],
                        difficulty: 0.55
                    }
                ],
                second: [
                    {
                        id: 'cn-4-2-reading-narrative',
                        name: '阅读理解（记叙文）',
                        skills: ['人物分析', '事件概括', '中心思想', '写作手法'],
                        prerequisites: ['cn-4-1-sentence-transform'],
                        difficulty: 0.6
                    },
                    {
                        id: 'cn-4-2-writing-scenes',
                        name: '写作进阶（写景状物）',
                        skills: ['景物描写', '移步换景', '借景抒情', '观察方法'],
                        prerequisites: ['cn-3-2-writing-intro'],
                        difficulty: 0.6
                    },
                    {
                        id: 'cn-4-2-sick-sentences',
                        name: '病句修改',
                        skills: ['成分残缺', '搭配不当', '语序不当', '重复啰嗦'],
                        prerequisites: ['cn-4-1-sentence-transform'],
                        difficulty: 0.6
                    }
                ]
            }
        },
        grade5: {
            name: '五年级语文',
            semesters: {
                first: [
                    {
                        id: 'cn-5-1-classical-intro',
                        name: '文言文入门',
                        skills: ['实词理解', '虚词辨析', '句式翻译', '古今异义'],
                        prerequisites: ['cn-4-1-ancient-poems-2'],
                        difficulty: 0.65
                    },
                    {
                        id: 'cn-5-1-poetry-appreciation',
                        name: '古诗词赏析',
                        skills: ['意象分析', '情感把握', '手法赏析', '名句理解'],
                        prerequisites: ['cn-4-1-ancient-poems-2'],
                        difficulty: 0.65
                    },
                    {
                        id: 'cn-5-1-reading-adv',
                        name: '阅读理解进阶',
                        skills: ['深层理解', '推断能力', '评价能力', '综合分析'],
                        prerequisites: ['cn-4-2-reading-narrative'],
                        difficulty: 0.65
                    }
                ],
                second: [
                    {
                        id: 'cn-5-2-expository',
                        name: '说明文阅读',
                        skills: ['说明方法', '说明顺序', '信息提取', '语言特点'],
                        prerequisites: ['cn-5-1-reading-adv'],
                        difficulty: 0.65
                    },
                    {
                        id: 'cn-5-2-writing-techniques',
                        name: '习作技巧',
                        skills: ['开头技巧', '结尾技巧', '过渡衔接', '详略安排'],
                        prerequisites: ['cn-4-2-writing-scenes'],
                        difficulty: 0.7
                    },
                    {
                        id: 'cn-5-2-oral',
                        name: '口语交际',
                        skills: ['表达观点', '倾听理解', '即兴表达', '说服技巧'],
                        prerequisites: [],
                        difficulty: 0.55
                    }
                ]
            }
        },
        grade6: {
            name: '六年级语文',
            semesters: {
                first: [
                    {
                        id: 'cn-6-1-poetry-mastery',
                        name: '古诗词鉴赏',
                        skills: ['表现手法', '情感解读', '比较鉴赏', '综合赏析'],
                        prerequisites: ['cn-5-1-poetry-appreciation'],
                        difficulty: 0.75
                    },
                    {
                        id: 'cn-6-1-comprehensive-reading',
                        name: '综合阅读理解',
                        skills: ['多文体阅读', '比较阅读', '批判思维', '综合表达'],
                        prerequisites: ['cn-5-1-reading-adv', 'cn-5-2-expository'],
                        difficulty: 0.75
                    },
                    {
                        id: 'cn-6-1-classical-adv',
                        name: '文言文进阶',
                        skills: ['长篇阅读', '文意理解', '人物评价', '写作背景'],
                        prerequisites: ['cn-5-1-classical-intro'],
                        difficulty: 0.75
                    }
                ],
                second: [
                    {
                        id: 'cn-6-2-argumentative',
                        name: '议论文初步',
                        skills: ['论点论据', '论证方法', '结构分析', '简单评论'],
                        prerequisites: ['cn-6-1-comprehensive-reading'],
                        difficulty: 0.75
                    },
                    {
                        id: 'cn-6-2-exam-prep',
                        name: '小升初专题',
                        skills: ['知识梳理', '题型分析', '答题技巧', '综合训练'],
                        prerequisites: ['cn-6-1-poetry-mastery', 'cn-6-1-comprehensive-reading'],
                        difficulty: 0.8
                    },
                    {
                        id: 'cn-6-2-writing-mastery',
                        name: '考场作文',
                        skills: ['审题立意', '素材运用', '结构设计', '语言润色'],
                        prerequisites: ['cn-5-2-writing-techniques'],
                        difficulty: 0.8
                    }
                ]
            }
        }
    }
};

/**
 * 语文知识图谱辅助类
 */
export class ChineseKnowledgeGraphHelper {
    /**
     * 搜索知识点
     */
    static searchTopics(query) {
        const results = [];
        const lowerQuery = query.toLowerCase();

        const processGrade = (gradeData, gradeName) => {
            Object.values(gradeData.semesters).forEach(semester => {
                semester.forEach(topic => {
                    const nameMatch = topic.name.toLowerCase().includes(lowerQuery);
                    const skillMatch = topic.skills.some(s => s.toLowerCase().includes(lowerQuery));
                    if (nameMatch || skillMatch) {
                        results.push({
                            ...topic,
                            gradeName,
                            subject: 'chinese'
                        });
                    }
                });
            });
        };

        const graph = chineseKnowledgeGraph.elementary;
        Object.entries(graph).forEach(([, gradeData]) => {
            if (gradeData.name) {
                processGrade(gradeData, gradeData.name);
            }
        });

        return results;
    }

    /**
     * 获取所有知识点（扁平化）
     */
    static getAllTopics() {
        const topics = [];
        const graph = chineseKnowledgeGraph.elementary;

        Object.entries(graph).forEach(([, gradeData]) => {
            if (gradeData.semesters) {
                Object.values(gradeData.semesters).forEach(semester => {
                    topics.push(...semester);
                });
            }
        });

        return topics;
    }
}

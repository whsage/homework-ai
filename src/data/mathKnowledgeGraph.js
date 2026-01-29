/**
 * 中国K12数学知识图谱
 * 
 * 基于:
 * - 中国教育部数学课程标准
 * - 人教版、北师大版等主流教材
 * - 知识点之间的依赖关系
 */

export const mathKnowledgeGraph = {
    // ==================== 小学数学 (1-6年级) ====================
    elementary: {
        grade1: {
            name: '一年级数学',
            semesters: {
                first: [
                    {
                        id: 'elem-1-1-numbers-10',
                        name: '10以内的数',
                        skills: ['数数', '认数', '比大小', '序数'],
                        prerequisites: [],
                        difficulty: 0.1
                    },
                    {
                        id: 'elem-1-1-add-sub-10',
                        name: '10以内的加减法',
                        skills: ['加法计算', '减法计算', '看图列式'],
                        prerequisites: ['elem-1-1-numbers-10'],
                        difficulty: 0.2
                    },
                    {
                        id: 'elem-1-1-shapes',
                        name: '认识图形',
                        skills: ['识别平面图形', '识别立体图形'],
                        prerequisites: [],
                        difficulty: 0.15
                    }
                ],
                second: [
                    {
                        id: 'elem-1-2-numbers-20',
                        name: '20以内的数',
                        skills: ['数数', '认数', '比大小', '数的组成'],
                        prerequisites: ['elem-1-1-numbers-10'],
                        difficulty: 0.2
                    },
                    {
                        id: 'elem-1-2-add-sub-20',
                        name: '20以内的加减法',
                        skills: ['进位加法', '退位减法', '连加连减'],
                        prerequisites: ['elem-1-1-add-sub-10', 'elem-1-2-numbers-20'],
                        difficulty: 0.3
                    },
                    {
                        id: 'elem-1-2-time',
                        name: '认识钟表',
                        skills: ['认识整点', '认识半点'],
                        prerequisites: [],
                        difficulty: 0.2
                    }
                ]
            }
        },

        grade2: {
            name: '二年级数学',
            semesters: {
                first: [
                    {
                        id: 'elem-2-1-numbers-100',
                        name: '100以内的数',
                        skills: ['数数', '读写数', '比大小', '数的组成'],
                        prerequisites: ['elem-1-2-numbers-20'],
                        difficulty: 0.25
                    },
                    {
                        id: 'elem-2-1-add-sub-100',
                        name: '100以内的加减法',
                        skills: ['两位数加减', '连加连减', '加减混合'],
                        prerequisites: ['elem-1-2-add-sub-20', 'elem-2-1-numbers-100'],
                        difficulty: 0.35
                    },
                    {
                        id: 'elem-2-1-length',
                        name: '长度单位',
                        skills: ['认识厘米', '认识米', '单位换算', '测量'],
                        prerequisites: [],
                        difficulty: 0.3
                    },
                    {
                        id: 'elem-2-1-multiplication-table',
                        name: '乘法口诀',
                        skills: ['2-6的乘法口诀', '乘法意义', '看图列式'],
                        prerequisites: ['elem-2-1-add-sub-100'],
                        difficulty: 0.4
                    }
                ],
                second: [
                    {
                        id: 'elem-2-2-multiplication-table-full',
                        name: '乘法口诀(完整)',
                        skills: ['7-9的乘法口诀', '乘法运算', '解决问题'],
                        prerequisites: ['elem-2-1-multiplication-table'],
                        difficulty: 0.45
                    },
                    {
                        id: 'elem-2-2-division',
                        name: '除法初步',
                        skills: ['除法意义', '用口诀求商', '乘除关系'],
                        prerequisites: ['elem-2-2-multiplication-table-full'],
                        difficulty: 0.5
                    },
                    {
                        id: 'elem-2-2-statistics',
                        name: '统计初步',
                        skills: ['数据收集', '简单统计表', '条形图'],
                        prerequisites: [],
                        difficulty: 0.3
                    }
                ]
            }
        },

        grade3: {
            name: '三年级数学',
            semesters: {
                first: [
                    {
                        id: 'elem-3-1-time-calc',
                        name: '时间计算',
                        skills: ['时分秒', '时间单位换算', '时间计算'],
                        prerequisites: ['elem-1-2-time'],
                        difficulty: 0.4
                    },
                    {
                        id: 'elem-3-1-multi-digit-add-sub',
                        name: '万以内的加减法',
                        skills: ['三位数加减', '估算', '验算'],
                        prerequisites: ['elem-2-1-add-sub-100'],
                        difficulty: 0.45
                    },
                    {
                        id: 'elem-3-1-rectangle-square',
                        name: '长方形和正方形',
                        skills: ['周长概念', '周长计算', '图形特征'],
                        prerequisites: ['elem-1-1-shapes'],
                        difficulty: 0.5
                    },
                    {
                        id: 'elem-3-1-multiplication',
                        name: '多位数乘一位数',
                        skills: ['口算', '笔算', '估算'],
                        prerequisites: ['elem-2-2-multiplication-table-full'],
                        difficulty: 0.55
                    }
                ],
                second: [
                    {
                        id: 'elem-3-2-division-one-digit',
                        name: '除数是一位数的除法',
                        skills: ['口算除法', '笔算除法', '有余数除法'],
                        prerequisites: ['elem-2-2-division'],
                        difficulty: 0.55
                    },
                    {
                        id: 'elem-3-2-decimals',
                        name: '小数的初步认识',
                        skills: ['认识小数', '小数大小比较', '简单计算'],
                        prerequisites: ['elem-3-1-multi-digit-add-sub'],
                        difficulty: 0.6
                    },
                    {
                        id: 'elem-3-2-area',
                        name: '面积',
                        skills: ['面积概念', '面积单位', '长方形正方形面积'],
                        prerequisites: ['elem-3-1-rectangle-square'],
                        difficulty: 0.6
                    },
                    {
                        id: 'elem-3-2-fractions',
                        name: '分数的初步认识',
                        skills: ['认识分数', '分数大小比较', '简单计算'],
                        prerequisites: [],
                        difficulty: 0.65
                    }
                ]
            }
        },

        grade4: {
            name: '四年级数学',
            semesters: {
                first: [
                    {
                        id: 'elem-4-1-large-numbers',
                        name: '大数的认识',
                        skills: ['亿以内的数', '数位', '改写', '省略'],
                        prerequisites: ['elem-3-1-multi-digit-add-sub'],
                        difficulty: 0.5
                    },
                    {
                        id: 'elem-4-1-three-digit-multiply',
                        name: '三位数乘两位数',
                        skills: ['笔算', '估算', '解决问题'],
                        prerequisites: ['elem-3-1-multiplication'],
                        difficulty: 0.6
                    },
                    {
                        id: 'elem-4-1-parallel-perpendicular',
                        name: '平行与垂直',
                        skills: ['平行线', '垂线', '画图'],
                        prerequisites: ['elem-3-1-rectangle-square'],
                        difficulty: 0.55
                    },
                    {
                        id: 'elem-4-1-division-two-digit',
                        name: '除数是两位数的除法',
                        skills: ['口算', '笔算', '商的变化规律'],
                        prerequisites: ['elem-3-2-division-one-digit'],
                        difficulty: 0.65
                    }
                ],
                second: [
                    {
                        id: 'elem-4-2-equations',
                        name: '简易方程',
                        skills: ['用字母表示数', '等式性质', '解方程'],
                        prerequisites: ['elem-3-1-multi-digit-add-sub'],
                        difficulty: 0.7
                    },
                    {
                        id: 'elem-4-2-decimals-meaning',
                        name: '小数的意义和性质',
                        skills: ['小数意义', '小数性质', '大小比较', '改写'],
                        prerequisites: ['elem-3-2-decimals'],
                        difficulty: 0.65
                    },
                    {
                        id: 'elem-4-2-decimals-add-sub',
                        name: '小数的加减法',
                        skills: ['小数加法', '小数减法', '混合运算'],
                        prerequisites: ['elem-4-2-decimals-meaning'],
                        difficulty: 0.7
                    },
                    {
                        id: 'elem-4-2-triangle',
                        name: '三角形',
                        skills: ['三角形特性', '三角形分类', '内角和'],
                        prerequisites: ['elem-4-1-parallel-perpendicular'],
                        difficulty: 0.65
                    }
                ]
            }
        },

        grade5: {
            name: '五年级数学',
            semesters: {
                first: [
                    {
                        id: 'elem-5-1-decimals-multiply',
                        name: '小数乘法',
                        skills: ['小数乘整数', '小数乘小数', '积的近似值'],
                        prerequisites: ['elem-4-2-decimals-add-sub'],
                        difficulty: 0.7
                    },
                    {
                        id: 'elem-5-1-decimals-divide',
                        name: '小数除法',
                        skills: ['小数除以整数', '除数是小数', '商的近似值'],
                        prerequisites: ['elem-5-1-decimals-multiply'],
                        difficulty: 0.75
                    },
                    {
                        id: 'elem-5-1-simple-equations',
                        name: '简易方程',
                        skills: ['方程的意义', '解方程', '列方程解应用题'],
                        prerequisites: ['elem-4-2-equations'],
                        difficulty: 0.75
                    },
                    {
                        id: 'elem-5-1-polygon-area',
                        name: '多边形的面积',
                        skills: ['平行四边形面积', '三角形面积', '梯形面积'],
                        prerequisites: ['elem-3-2-area', 'elem-4-2-triangle'],
                        difficulty: 0.7
                    }
                ],
                second: [
                    {
                        id: 'elem-5-2-fractions-meaning',
                        name: '分数的意义和性质',
                        skills: ['分数意义', '分数与除法', '约分', '通分'],
                        prerequisites: ['elem-3-2-fractions'],
                        difficulty: 0.75
                    },
                    {
                        id: 'elem-5-2-fractions-add-sub',
                        name: '分数的加减法',
                        skills: ['同分母加减', '异分母加减', '混合运算'],
                        prerequisites: ['elem-5-2-fractions-meaning'],
                        difficulty: 0.8
                    },
                    {
                        id: 'elem-5-2-volume',
                        name: '长方体和正方体',
                        skills: ['立体图形认识', '表面积', '体积'],
                        prerequisites: ['elem-3-2-area'],
                        difficulty: 0.75
                    },
                    {
                        id: 'elem-5-2-statistics-graph',
                        name: '统计图',
                        skills: ['折线统计图', '数据分析', '平均数'],
                        prerequisites: ['elem-2-2-statistics'],
                        difficulty: 0.65
                    }
                ]
            }
        },

        grade6: {
            name: '六年级数学',
            semesters: {
                first: [
                    {
                        id: 'elem-6-1-fractions-multiply-divide',
                        name: '分数乘除法',
                        skills: ['分数乘法', '分数除法', '混合运算'],
                        prerequisites: ['elem-5-2-fractions-add-sub'],
                        difficulty: 0.8
                    },
                    {
                        id: 'elem-6-1-ratio',
                        name: '比',
                        skills: ['比的意义', '比的性质', '比例尺'],
                        prerequisites: ['elem-6-1-fractions-multiply-divide'],
                        difficulty: 0.75
                    },
                    {
                        id: 'elem-6-1-circle',
                        name: '圆',
                        skills: ['圆的认识', '周长', '面积', '扇形'],
                        prerequisites: ['elem-5-1-polygon-area'],
                        difficulty: 0.8
                    },
                    {
                        id: 'elem-6-1-percent',
                        name: '百分数',
                        skills: ['百分数意义', '百分数应用', '折扣利率'],
                        prerequisites: ['elem-6-1-fractions-multiply-divide'],
                        difficulty: 0.75
                    }
                ],
                second: [
                    {
                        id: 'elem-6-2-negative-numbers',
                        name: '负数',
                        skills: ['负数认识', '数轴', '大小比较'],
                        prerequisites: ['elem-4-1-large-numbers'],
                        difficulty: 0.7
                    },
                    {
                        id: 'elem-6-2-cylinder-cone',
                        name: '圆柱与圆锥',
                        skills: ['圆柱表面积', '圆柱体积', '圆锥体积'],
                        prerequisites: ['elem-5-2-volume', 'elem-6-1-circle'],
                        difficulty: 0.85
                    },
                    {
                        id: 'elem-6-2-proportion',
                        name: '比例',
                        skills: ['比例的意义', '解比例', '正反比例'],
                        prerequisites: ['elem-6-1-ratio'],
                        difficulty: 0.8
                    },
                    {
                        id: 'elem-6-2-review',
                        name: '小学总复习',
                        skills: ['数与代数', '图形与几何', '统计与概率'],
                        prerequisites: [], // 综合所有知识点
                        difficulty: 0.85
                    }
                ]
            }
        }
    },

    // ==================== 初中数学 (7-9年级) ====================
    middle: {
        grade7: {
            name: '七年级数学(初一)',
            semesters: {
                first: [
                    {
                        id: 'mid-7-1-rational-numbers',
                        name: '有理数',
                        skills: ['有理数概念', '数轴', '相反数', '绝对值', '有理数运算'],
                        prerequisites: ['elem-6-2-negative-numbers'],
                        difficulty: 0.6,
                        bloomLevel: 'understand'
                    },
                    {
                        id: 'mid-7-1-algebraic-expressions',
                        name: '整式的加减',
                        skills: ['单项式', '多项式', '同类项', '去括号', '整式加减'],
                        prerequisites: ['elem-5-1-simple-equations'],
                        difficulty: 0.65,
                        bloomLevel: 'apply'
                    },
                    {
                        id: 'mid-7-1-equations',
                        name: '一元一次方程',
                        skills: ['方程的解', '等式性质', '解一元一次方程', '应用题'],
                        prerequisites: ['mid-7-1-algebraic-expressions'],
                        difficulty: 0.7,
                        bloomLevel: 'apply'
                    },
                    {
                        id: 'mid-7-1-geometry-basic',
                        name: '几何图形初步',
                        skills: ['点线面体', '直线射线线段', '角', '相交线', '平行线'],
                        prerequisites: ['elem-4-1-parallel-perpendicular'],
                        difficulty: 0.65,
                        bloomLevel: 'understand'
                    }
                ],
                second: [
                    {
                        id: 'mid-7-2-inequalities',
                        name: '不等式与不等式组',
                        skills: ['不等式性质', '解不等式', '不等式组', '应用'],
                        prerequisites: ['mid-7-1-equations'],
                        difficulty: 0.75,
                        bloomLevel: 'apply'
                    },
                    {
                        id: 'mid-7-2-statistics',
                        name: '数据的收集、整理与描述',
                        skills: ['抽样调查', '频数分布', '统计图表', '数据分析'],
                        prerequisites: ['elem-5-2-statistics-graph'],
                        difficulty: 0.7,
                        bloomLevel: 'analyze'
                    },
                    {
                        id: 'mid-7-2-plane-coordinates',
                        name: '平面直角坐标系',
                        skills: ['坐标系', '点的坐标', '坐标与图形'],
                        prerequisites: ['elem-6-2-negative-numbers'],
                        difficulty: 0.7,
                        bloomLevel: 'understand'
                    }
                ]
            }
        },

        grade8: {
            name: '八年级数学(初二)',
            semesters: {
                first: [
                    {
                        id: 'mid-8-1-triangles',
                        name: '三角形',
                        skills: ['三角形性质', '全等三角形', '角平分线', '轴对称'],
                        prerequisites: ['elem-4-2-triangle', 'mid-7-1-geometry-basic'],
                        difficulty: 0.75,
                        bloomLevel: 'apply'
                    },
                    {
                        id: 'mid-8-1-factorization',
                        name: '因式分解',
                        skills: ['提公因式', '公式法', '十字相乘'],
                        prerequisites: ['mid-7-1-algebraic-expressions'],
                        difficulty: 0.8,
                        bloomLevel: 'apply'
                    },
                    {
                        id: 'mid-8-1-fractions',
                        name: '分式',
                        skills: ['分式概念', '分式运算', '分式方程'],
                        prerequisites: ['elem-6-1-fractions-multiply-divide'],
                        difficulty: 0.8,
                        bloomLevel: 'apply'
                    },
                    {
                        id: 'mid-8-1-binary-equations',
                        name: '二元一次方程组',
                        skills: ['方程组的解', '代入法', '加减法', '应用题'],
                        prerequisites: ['mid-7-1-equations'],
                        difficulty: 0.75,
                        bloomLevel: 'apply'
                    }
                ],
                second: [
                    {
                        id: 'mid-8-2-quadrilaterals',
                        name: '四边形',
                        skills: ['平行四边形', '矩形', '菱形', '正方形', '梯形'],
                        prerequisites: ['mid-8-1-triangles'],
                        difficulty: 0.8,
                        bloomLevel: 'apply'
                    },
                    {
                        id: 'mid-8-2-functions',
                        name: '函数',
                        skills: ['函数概念', '函数图象', '函数性质'],
                        prerequisites: ['mid-7-2-plane-coordinates'],
                        difficulty: 0.75,
                        bloomLevel: 'understand'
                    },
                    {
                        id: 'mid-8-2-linear-functions',
                        name: '一次函数',
                        skills: ['一次函数图象', '性质', '应用'],
                        prerequisites: ['mid-8-2-functions'],
                        difficulty: 0.8,
                        bloomLevel: 'apply'
                    },
                    {
                        id: 'mid-8-2-data-analysis',
                        name: '数据的分析',
                        skills: ['平均数', '中位数', '众数', '方差'],
                        prerequisites: ['mid-7-2-statistics'],
                        difficulty: 0.75,
                        bloomLevel: 'analyze'
                    }
                ]
            }
        },

        grade9: {
            name: '九年级数学(初三)',
            semesters: {
                first: [
                    {
                        id: 'mid-9-1-quadratic-equations',
                        name: '一元二次方程',
                        skills: ['方程的解', '配方法', '公式法', '因式分解法', '应用'],
                        prerequisites: ['mid-7-1-equations', 'mid-8-1-factorization'],
                        difficulty: 0.85,
                        bloomLevel: 'apply'
                    },
                    {
                        id: 'mid-9-1-quadratic-functions',
                        name: '二次函数',
                        skills: ['二次函数概念', '图象性质', '解析式', '应用'],
                        prerequisites: ['mid-8-2-linear-functions', 'mid-9-1-quadratic-equations'],
                        difficulty: 0.9,
                        bloomLevel: 'apply'
                    },
                    {
                        id: 'mid-9-1-rotation',
                        name: '旋转',
                        skills: ['旋转性质', '中心对称', '图形变换'],
                        prerequisites: ['mid-8-1-triangles'],
                        difficulty: 0.8,
                        bloomLevel: 'apply'
                    },
                    {
                        id: 'mid-9-1-circle',
                        name: '圆',
                        skills: ['圆的性质', '点线圆位置关系', '圆的计算'],
                        prerequisites: ['elem-6-1-circle', 'mid-8-1-triangles'],
                        difficulty: 0.85,
                        bloomLevel: 'apply'
                    }
                ],
                second: [
                    {
                        id: 'mid-9-2-probability',
                        name: '概率初步',
                        skills: ['随机事件', '概率计算', '列表法', '树状图'],
                        prerequisites: ['mid-8-2-data-analysis'],
                        difficulty: 0.75,
                        bloomLevel: 'apply'
                    },
                    {
                        id: 'mid-9-2-inverse-proportional',
                        name: '反比例函数',
                        skills: ['反比例函数概念', '图象性质', '应用'],
                        prerequisites: ['mid-8-2-linear-functions'],
                        difficulty: 0.8,
                        bloomLevel: 'apply'
                    },
                    {
                        id: 'mid-9-2-similar',
                        name: '相似',
                        skills: ['相似图形', '相似三角形', '位似'],
                        prerequisites: ['mid-8-1-triangles', 'elem-6-1-ratio'],
                        difficulty: 0.85,
                        bloomLevel: 'apply'
                    },
                    {
                        id: 'mid-9-2-trigonometry',
                        name: '锐角三角函数',
                        skills: ['正弦', '余弦', '正切', '解直角三角形'],
                        prerequisites: ['mid-8-1-triangles'],
                        difficulty: 0.85,
                        bloomLevel: 'apply'
                    }
                ]
            }
        }
    },

    // ==================== 高中数学 (10-12年级) ====================
    high: {
        grade10: {
            name: '高一数学',
            modules: {
                required1: [
                    {
                        id: 'high-10-1-sets',
                        name: '集合与常用逻辑用语',
                        skills: ['集合概念', '集合运算', '逻辑用语', '充要条件'],
                        prerequisites: [],
                        difficulty: 0.7,
                        bloomLevel: 'understand'
                    },
                    {
                        id: 'high-10-1-functions',
                        name: '函数概念与性质',
                        skills: ['函数定义', '单调性', '奇偶性', '周期性'],
                        prerequisites: ['mid-9-1-quadratic-functions'],
                        difficulty: 0.85,
                        bloomLevel: 'understand'
                    },
                    {
                        id: 'high-10-1-basic-functions',
                        name: '基本初等函数',
                        skills: ['指数函数', '对数函数', '幂函数'],
                        prerequisites: ['high-10-1-functions'],
                        difficulty: 0.9,
                        bloomLevel: 'apply'
                    },
                    {
                        id: 'high-10-1-trigonometry',
                        name: '三角函数',
                        skills: ['任意角三角函数', '诱导公式', '图象性质', '恒等变换'],
                        prerequisites: ['mid-9-2-trigonometry'],
                        difficulty: 0.9,
                        bloomLevel: 'apply'
                    }
                ],
                required2: [
                    {
                        id: 'high-10-2-plane-vectors',
                        name: '平面向量',
                        skills: ['向量概念', '向量运算', '数量积', '坐标运算'],
                        prerequisites: ['mid-7-2-plane-coordinates'],
                        difficulty: 0.85,
                        bloomLevel: 'apply'
                    },
                    {
                        id: 'high-10-2-triangles-solution',
                        name: '解三角形',
                        skills: ['正弦定理', '余弦定理', '三角形应用'],
                        prerequisites: ['high-10-1-trigonometry', 'high-10-2-plane-vectors'],
                        difficulty: 0.85,
                        bloomLevel: 'apply'
                    },
                    {
                        id: 'high-10-2-sequences',
                        name: '数列',
                        skills: ['等差数列', '等比数列', '数列求和'],
                        prerequisites: ['high-10-1-functions'],
                        difficulty: 0.9,
                        bloomLevel: 'apply'
                    }
                ]
            }
        }
        // ... 高二、高三内容类似结构
    }
};

// 导出辅助函数
export const KnowledgeGraphHelper = {
    /**
     * 获取指定年级的所有知识点
     */
    getGradeTopics(stage, grade) {
        return mathKnowledgeGraph[stage]?.[grade] || null;
    },

    /**
     * 获取知识点的所有前置依赖
     */
    getPrerequisites(topicId) {
        // 递归查找所有前置知识点
        const prerequisites = [];
        const visited = new Set();

        const findPrereqs = (id) => {
            if (visited.has(id)) return;
            visited.add(id);

            const topic = this.findTopicById(id);
            if (topic && topic.prerequisites) {
                topic.prerequisites.forEach(prereq => {
                    prerequisites.push(prereq);
                    findPrereqs(prereq);
                });
            }
        };

        findPrereqs(topicId);
        return prerequisites;
    },

    /**
     * 根据ID查找知识点
     */
    findTopicById(topicId) {
        for (const stage of ['elementary', 'middle', 'high']) {
            for (const grade in mathKnowledgeGraph[stage]) {
                const gradeData = mathKnowledgeGraph[stage][grade];
                const semesters = gradeData.semesters || gradeData.modules;

                for (const semester in semesters) {
                    const topic = semesters[semester].find(t => t.id === topicId);
                    if (topic) return topic;
                }
            }
        }
        return null;
    },

    /**
     * 生成学习路径
     */
    generateLearningPath(startTopic, endTopic) {
        // 使用拓扑排序生成学习路径
        // 实现略...
    }
};

export default mathKnowledgeGraph;

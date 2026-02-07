export const knowledgeBase = {
    elementary: {
        name: '小学数学',
        icon: '🎨',
        color: 'from-pink-500 to-rose-500',
        grades: [
            {
                id: 'grade-1',
                name: '一年级',
                subtitle: '数感与逻辑启蒙',
                tracks: {
                    l1: {
                        name: '基础达标',
                        icon: '📚',
                        topics: [
                            { id: 'g1-l1-addition-20', name: '20以内加减法', difficulty: '基础', time: '25分钟', important: true },
                            { id: 'g1-l1-number-100', name: '100以内认知', difficulty: '基础', time: '20分钟', important: true },
                            { id: 'g1-l1-shapes', name: '认识图形（长正圆）', difficulty: '基础', time: '20分钟', important: false },
                            { id: 'g1-l1-position', name: '位置与钟表', difficulty: '基础', time: '25分钟', important: false }
                        ]
                    },
                    l2: {
                        name: '思维进阶',
                        icon: '🧠',
                        topics: [
                            { id: 'g1-l2-clever-calc', name: '巧算加减法', difficulty: '进阶', time: '30分钟', important: false },
                            { id: 'g1-l2-matchstick', name: '火柴棒数学', difficulty: '进阶', time: '25分钟', important: false },
                            { id: 'g1-l2-shape-cut', name: '图形剪拼', difficulty: '进阶', time: '30分钟', important: false },
                            { id: 'g1-l2-fill-numbers', name: '简单枚举（填数游戏）', difficulty: '进阶', time: '25分钟', important: false }
                        ]
                    }
                }
            },
            {
                id: 'grade-2',
                name: '二年级',
                subtitle: '计算基础巩固',
                tracks: {
                    l1: {
                        name: '基础达标',
                        icon: '📚',
                        topics: [
                            { id: 'g2-l1-multiplication', name: '表内乘除法', difficulty: '基础', time: '30分钟', important: true },
                            { id: 'g2-l1-length-unit', name: '长度单位（m/cm）', difficulty: '基础', time: '20分钟', important: false },
                            { id: 'g2-l1-observation', name: '观察物体', difficulty: '基础', time: '20分钟', important: false },
                            { id: 'g2-l1-angle', name: '认识角', difficulty: '基础', time: '25分钟', important: false },
                            { id: 'g2-l1-data-collection', name: '数据收集', difficulty: '基础', time: '25分钟', important: false }
                        ]
                    },
                    l2: {
                        name: '思维进阶',
                        icon: '🧠',
                        topics: [
                            { id: 'g2-l2-cycle-problem', name: '周期问题（找规律）', difficulty: '进阶', time: '30分钟', important: false },
                            { id: 'g2-l2-sum-diff', name: '和差问题初步', difficulty: '进阶', time: '35分钟', important: true },
                            { id: 'g2-l2-logic-reasoning', name: '逻辑推理（谁在说谎）', difficulty: '进阶', time: '30分钟', important: false },
                            { id: 'g2-l2-simple-counting', name: '简单计数', difficulty: '进阶', time: '25分钟', important: false }
                        ]
                    }
                }
            },
            {
                id: 'grade-3',
                name: '三年级',
                subtitle: '计算爆发与模型建立',
                tracks: {
                    l1: {
                        name: '基础达标',
                        icon: '📚',
                        topics: [
                            { id: 'g3-l1-multi-digit', name: '多位数乘除法', difficulty: '基础', time: '35分钟', important: true },
                            { id: 'g3-l1-fraction-intro', name: '分数的初步认识', difficulty: '基础', time: '30分钟', important: true },
                            { id: 'g3-l1-perimeter', name: '周长计算（长正方形）', difficulty: '基础', time: '30分钟', important: true },
                            { id: 'g3-l1-mass-unit', name: '质量单位', difficulty: '基础', time: '20分钟', important: false }
                        ]
                    },
                    l2: {
                        name: '思维进阶',
                        icon: '🧠',
                        topics: [
                            { id: 'g3-l2-tree-planting', name: '植树问题', difficulty: '进阶', time: '35分钟', important: true },
                            { id: 'g3-l2-chicken-rabbit', name: '鸡兔同笼（初阶）', difficulty: '进阶', time: '40分钟', important: true },
                            { id: 'g3-l2-profit-loss', name: '盈亏问题', difficulty: '进阶', time: '35分钟', important: false },
                            { id: 'g3-l2-unit-problem', name: '归一问题', difficulty: '进阶', time: '30分钟', important: false },
                            { id: 'g3-l2-age-problem', name: '年龄问题', difficulty: '进阶', time: '30分钟', important: false }
                        ]
                    }
                }
            },
            {
                id: 'grade-4',
                name: '四年级',
                subtitle: '抽象思维启蒙',
                tracks: {
                    l1: {
                        name: '基础达标',
                        icon: '📚',
                        topics: [
                            { id: 'g4-l1-large-numbers', name: '大数的认识与读写', difficulty: '基础', time: '30分钟', important: true },
                            { id: 'g4-l1-angle-measurement', name: '角的度量', difficulty: '基础', time: '35分钟', important: true },
                            { id: 'g4-l1-division-two-digit', name: '除数是两位数的除法', difficulty: '基础', time: '40分钟', important: true },
                            { id: 'g4-l1-decimal-ops', name: '小数的意义与加减', difficulty: '基础', time: '35分钟', important: true },
                            { id: 'g4-l1-mixed-ops', name: '四则混合运算', difficulty: '基础', time: '40分钟', important: true },
                            { id: 'g4-l1-parallel-trapezoid', name: '平行四边形与梯形', difficulty: '基础', time: '30分钟', important: false },
                            { id: 'g4-l1-bar-chart', name: '条形统计图', difficulty: '基础', time: '25分钟', important: false }
                        ]
                    },
                    l2: {
                        name: '思维进阶',
                        icon: '🧠',
                        topics: [
                            { id: 'g4-l2-sum-diff-multiple', name: '和差倍问题', difficulty: '进阶', time: '40分钟', important: true },
                            { id: 'g4-l2-clever-calc', name: '简便运算（凑整/拆数）', difficulty: '进阶', time: '35分钟', important: true },
                            { id: 'g4-l2-new-definition', name: '定义新运算', difficulty: '进阶', time: '35分钟', important: false },
                            { id: 'g4-l2-number-array', name: '数阵图', difficulty: '进阶', time: '40分钟', important: false },
                            { id: 'g4-l2-logic-advanced', name: '逻辑推理进阶', difficulty: '进阶', time: '35分钟', important: false }
                        ]
                    }
                }
            },
            {
                id: 'grade-5',
                name: '五年级',
                subtitle: '抽象思维与体系完善',
                tracks: {
                    l1: {
                        name: '基础达标',
                        icon: '📚',
                        topics: [
                            { id: 'g5-l1-decimal-mult-div', name: '小数乘除法', difficulty: '基础', time: '40分钟', important: true },
                            { id: 'g5-l1-simple-equations', name: '简易方程', difficulty: '基础', time: '45分钟', important: true },
                            { id: 'g5-l1-polygon-area', name: '多边形面积（平行/三角形/梯形）', difficulty: '基础', time: '45分钟', important: true },
                            { id: 'g5-l1-factors-multiples', name: '因数与倍数', difficulty: '基础', time: '35分钟', important: true }
                        ]
                    },
                    l2: {
                        name: '思维进阶',
                        icon: '🧠',
                        topics: [
                            { id: 'g5-l2-distance-problem', name: '行程问题（相遇/追及）', difficulty: '进阶', time: '50分钟', important: true },
                            { id: 'g5-l2-number-theory', name: '数论初步（整除/质合）', difficulty: '进阶', time: '45分钟', important: true },
                            { id: 'g5-l2-geometry-models', name: '几何模型（等积变形/蝴蝶模型）', difficulty: '进阶', time: '50分钟', important: true },
                            { id: 'g5-l2-combinatorics', name: '组合计数', difficulty: '进阶', time: '40分钟', important: false }
                        ]
                    }
                }
            },
            {
                id: 'grade-6',
                name: '六年级',
                subtitle: '小升初冲刺',
                tracks: {
                    l1: {
                        name: '基础达标',
                        icon: '📚',
                        topics: [
                            { id: 'g6-l1-fraction-ops', name: '分数乘除法', difficulty: '基础', time: '45分钟', important: true },
                            { id: 'g6-l1-circle', name: '圆的计算（周长/面积）', difficulty: '基础', time: '40分钟', important: true },
                            { id: 'g6-l1-ratio-proportion', name: '比与比例', difficulty: '基础', time: '45分钟', important: true },
                            { id: 'g6-l1-pie-chart', name: '扇形统计图', difficulty: '基础', time: '30分钟', important: false },
                            { id: 'g6-l1-negative-numbers', name: '负数初步', difficulty: '基础', time: '30分钟', important: false }
                        ]
                    },
                    l2: {
                        name: '思维进阶',
                        icon: '🧠',
                        topics: [
                            { id: 'g6-l2-work-problem', name: '工程问题', difficulty: '进阶', time: '45分钟', important: true },
                            { id: 'g6-l2-concentration', name: '浓度问题', difficulty: '进阶', time: '40分钟', important: true },
                            { id: 'g6-l2-complex-distance', name: '复杂行程（流水/电车）', difficulty: '进阶', time: '50分钟', important: true },
                            { id: 'g6-l2-number-theory-adv', name: '数论进阶（余数/位值）', difficulty: '进阶', time: '45分钟', important: false },
                            { id: 'g6-l2-geometry-adv', name: '几何模型（燕尾/共角）', difficulty: '进阶', time: '50分钟', important: true }
                        ]
                    }
                }
            }
        ]
    },
    middle: {
        name: '初中数学',
        icon: '🧠',
        color: 'from-blue-500 to-indigo-500',
        modules: [
            {
                id: 'algebra',
                name: '代数基础',
                icon: '📐',
                topics: [
                    { id: 'mid-7-1-rational-numbers', name: '有理数', difficulty: '基础', time: '30分钟', important: true },
                    { id: 'mid-7-1-algebraic-expressions', name: '整式的加减', difficulty: '基础', time: '35分钟', important: true },
                    { id: 'mid-8-1-factorization', name: '因式分解', difficulty: '提高', time: '40分钟', important: true },
                    { id: 'mid-8-1-fractions', name: '分式', difficulty: '提高', time: '40分钟', important: true }
                ]
            },
            {
                id: 'equations',
                name: '方程与不等式',
                icon: '⚖️',
                topics: [
                    { id: 'mid-7-1-equations', name: '一元一次方程', difficulty: '基础', time: '30分钟', important: true },
                    { id: 'mid-8-1-binary-equations', name: '二元一次方程组', difficulty: '提高', time: '40分钟', important: true },
                    { id: 'mid-9-1-quadratic-equations', name: '一元二次方程', difficulty: '提高', time: '45分钟', important: true },
                    { id: 'mid-7-2-inequalities', name: '不等式与不等式组', difficulty: '提高', time: '35分钟', important: true }
                ]
            },
            {
                id: 'functions',
                name: '函数',
                icon: '📈',
                topics: [
                    { id: 'mid-8-2-functions', name: '函数的概念', difficulty: '基础', time: '30分钟', important: true },
                    { id: 'mid-8-2-linear-functions', name: '一次函数', difficulty: '提高', time: '40分钟', important: true },
                    { id: 'mid-9-2-inverse-proportional', name: '反比例函数', difficulty: '提高', time: '35分钟', important: true },
                    { id: 'mid-9-1-quadratic-functions', name: '二次函数', difficulty: '重点', time: '50分钟', important: true }
                ]
            },
            {
                id: 'geometry',
                name: '平面几何',
                icon: '🔺',
                topics: [
                    { id: 'mid-7-1-geometry-basic', name: '几何图形初步', difficulty: '基础', time: '30分钟', important: true },
                    { id: 'mid-8-1-triangles', name: '三角形', difficulty: '基础', time: '40分钟', important: true },
                    { id: 'mid-8-2-isosceles-triangle', name: '轴对称', difficulty: '基础', time: '35分钟', important: true },
                    { id: 'mid-8-2-congruence', name: '全等三角形', difficulty: '重点', time: '50分钟', important: true },
                    { id: 'mid-9-1-parallelogram', name: '平行四边形', difficulty: '提高', time: '45分钟', important: true },
                    { id: 'mid-9-2-similarity', name: '相似三角形', difficulty: '难点', time: '60分钟', important: true },
                    { id: 'mid-9-2-trigonometry', name: '锐角三角函数', difficulty: '难点', time: '50分钟', important: true },
                    { id: 'mid-9-2-circles', name: '圆', difficulty: '难点', time: '60分钟', important: true }
                ]
            },
            {
                id: 'statistics',
                name: '统计与概率',
                icon: '📊',
                topics: [
                    { id: 'mid-7-2-data', name: '数据的收集、整理与描述', difficulty: '基础', time: '30分钟', important: false },
                    { id: 'mid-8-2-statistics', name: '数据的分析', difficulty: '基础', time: '35分钟', important: false },
                    { id: 'mid-9-1-probability', name: '概率初步', difficulty: '基础', time: '35分钟', important: true }
                ]
            }
        ]
    },
    high: {
        name: '高中数学',
        icon: '⚡',
        color: 'from-violet-500 to-purple-500',
        modules: []
    },
    college: {
        name: '大学数学',
        icon: '🎓',
        color: 'from-slate-700 to-slate-900',
        modules: []
    }
};

// Helper to flatten topics for navigation
export const getFlattenedTopics = () => {
    const topics = [];

    // Elementary
    knowledgeBase.elementary.grades.forEach(grade => {
        Object.values(grade.tracks).forEach(track => {
            track.topics.forEach(topic => {
                topics.push({
                    ...topic,
                    grade: grade.name,
                    stage: '小学',
                    link: `/subjects/math/${topic.id}`,
                    gradeLevel: parseInt(grade.id.replace('grade-', ''))
                });
            });
        });
    });

    // Middle
    knowledgeBase.middle.modules.forEach(module => {
        module.topics.forEach(topic => {
            topics.push({
                ...topic,
                module: module.name,
                stage: '初中',
                link: `/subjects/math/${topic.id}`
            });
        });
    });

    return topics;
};

// Helper to get adjacent topics
export const getAdjacentTopics = (currentTopicId) => {
    const allTopics = getFlattenedTopics();
    const index = allTopics.findIndex(t => t.id === currentTopicId);

    if (index === -1) return { prev: null, next: null };

    return {
        prev: index > 0 ? allTopics[index - 1] : null,
        next: index < allTopics.length - 1 ? allTopics[index + 1] : null
    };
};

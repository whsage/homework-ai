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
        grades: [
            {
                id: 'grade-7',
                name: '初一',
                subtitle: '从算术到代数',
                tracks: {
                    l1: {
                        name: '基础达标',
                        icon: '📚',
                        topics: [
                            {
                                id: 'mid-7-1-rational-numbers',
                                name: '有理数',
                                difficulty: '基础',
                                time: '30分钟',
                                important: true,
                                specialFeature: 'interactive',
                                desc: '通过数轴行走实验理解正负数加减'
                            },
                            { id: 'mid-7-1-algebraic-ops', name: '整式的加减', difficulty: '基础', time: '35分钟', important: true },
                            {
                                id: 'mid-7-1-linear-equations',
                                name: '一元一次方程',
                                difficulty: '基础',
                                time: '30分钟',
                                important: true,
                                specialFeature: 'interactive',
                                desc: '天平平衡实验'
                            },
                            {
                                id: 'mid-7-1-geometry-basic',
                                name: '几何图形初步',
                                difficulty: '基础',
                                time: '30分钟',
                                important: true,
                                specialFeature: 'interactive',
                                desc: '动态角度构造'
                            }
                        ]
                    },
                    l2: {
                        name: '思维进阶',
                        icon: '🧠',
                        topics: [
                            { id: 'mid-7-2-absolute-value-adv', name: '绝对值进阶', difficulty: '提高', time: '45分钟', important: false },
                            { id: 'mid-7-2-inequalities', name: '一元一次不等式组', difficulty: '提高', time: '35分钟', important: true },
                            { id: 'mid-7-2-data-handling', name: '数据的收集与整理', difficulty: '基础', time: '30分钟', important: false }
                        ]
                    }
                }
            },
            {
                id: 'grade-8',
                name: '初二',
                subtitle: '几何证明与函数入门',
                tracks: {
                    l1: {
                        name: '基础达标',
                        icon: '📚',
                        topics: [
                            {
                                id: 'mid-8-1-triangles',
                                name: '三角形基础',
                                difficulty: '基础',
                                time: '40分钟',
                                important: true,
                                specialFeature: 'interactive',
                                desc: '拖动顶点观察内角和'
                            },
                            { id: 'mid-8-1-congruence', name: '全等三角形判定', difficulty: '重点', time: '50分钟', important: true },
                            {
                                id: 'mid-8-1-axial-symmetry',
                                name: '轴对称',
                                difficulty: '基础',
                                time: '35分钟',
                                important: true,
                                specialFeature: 'interactive',
                                desc: '镜像绘图实验'
                            },
                            { id: 'mid-8-1-roots', name: '实数（平方根/立方根）', difficulty: '基础', time: '30分钟', important: false },
                            {
                                id: 'mid-8-1-linear-functions',
                                name: '一次函数',
                                difficulty: '重点',
                                time: '45分钟',
                                important: true,
                                specialFeature: 'interactive',
                                desc: '斜率截距滑动条实验'
                            }
                        ]
                    },
                    l2: {
                        name: '思维进阶',
                        icon: '🧠',
                        topics: [
                            { id: 'mid-8-2-factorization-adv', name: '因式分解进阶', difficulty: '提高', time: '40分钟', important: true },
                            {
                                id: 'mid-8-2-geometry-proofs',
                                name: '几何证明技巧（辅助线）',
                                difficulty: '难点',
                                time: '50分钟',
                                important: true
                            },
                            {
                                id: 'mid-8-2-quadrilaterals',
                                name: '平行四边形',
                                difficulty: '提高',
                                time: '45分钟',
                                important: true,
                                specialFeature: 'interactive',
                                desc: '动态平行四边形性质探索'
                            },
                            { id: 'mid-8-2-fractions-adv', name: '分式方程应用', difficulty: '提高', time: '40分钟', important: true }
                        ]
                    }
                }
            },
            {
                id: 'grade-9',
                name: '初三',
                subtitle: '圆与二次函数',
                tracks: {
                    l1: {
                        name: '基础达标',
                        icon: '📚',
                        topics: [
                            { id: 'mid-9-1-quadratic-equations', name: '一元二次方程', difficulty: '重点', time: '45分钟', important: true },
                            {
                                id: 'mid-9-1-rotation',
                                name: '旋转',
                                difficulty: '基础',
                                time: '30分钟',
                                important: true,
                                specialFeature: 'interactive',
                                desc: '中心旋转实验'
                            },
                            {
                                id: 'mid-9-1-circles-basic',
                                name: '圆的基本性质',
                                difficulty: '重点',
                                time: '40分钟',
                                important: true,
                                specialFeature: 'interactive',
                                desc: '圆周角定理动态演示'
                            },
                            { id: 'mid-9-1-probability', name: '概率初步', difficulty: '基础', time: '35分钟', important: true }
                        ]
                    },
                    l2: {
                        name: '思维进阶',
                        icon: '🧠',
                        topics: [
                            {
                                id: 'mid-9-2-quadratic-functions',
                                name: '二次函数',
                                difficulty: '难点',
                                time: '60分钟',
                                important: true,
                                specialFeature: 'interactive',
                                desc: '抛物线参数变形实验'
                            },
                            {
                                id: 'mid-9-2-similarity',
                                name: '相似三角形',
                                difficulty: '难点',
                                time: '60分钟',
                                important: true,
                                specialFeature: 'interactive',
                                desc: '图形位似变换'
                            },
                            { id: 'mid-9-2-trigonometry', name: '锐角三角函数', difficulty: '重点', time: '50分钟', important: true },
                            { id: 'mid-9-2-circles-adv', name: '圆与直线的位置关系', difficulty: '难点', time: '55分钟', important: true }
                        ]
                    }
                }
            }
        ]
    },
    high: {
        name: '高中数学',
        icon: '⚡',
        color: 'from-violet-500 to-purple-500',
        grades: [
            {
                id: 'grade-10',
                name: '高一',
                subtitle: '函数与抽象思维',
                tracks: {
                    l1: {
                        name: '基础达标',
                        icon: '📚',
                        topics: [
                            {
                                id: 'high-10-1-sets',
                                name: '集合与逻辑',
                                difficulty: '基础',
                                time: '35分钟',
                                important: true,
                                specialFeature: 'interactive',
                                desc: '集合韦恩图填色'
                            },
                            { id: 'high-10-1-functions', name: '函数的性质', difficulty: '重点', time: '45分钟', important: true },
                            {
                                id: 'high-10-1-exp-log',
                                name: '指数与对数函数',
                                difficulty: '重点',
                                time: '50分钟',
                                important: true,
                                specialFeature: 'interactive',
                                desc: '函数增长率竞速'
                            },
                            { id: 'high-10-1-vectors', name: '平面向量', difficulty: '基础', time: '40分钟', important: true }
                        ]
                    },
                    l2: {
                        name: '思维进阶',
                        icon: '🧠',
                        topics: [
                            {
                                id: 'high-10-2-trig-graphs',
                                name: '三角函数图像与性质',
                                difficulty: '难点',
                                time: '55分钟',
                                important: true,
                                specialFeature: 'interactive',
                                desc: '单位圆与正弦波生成'
                            },
                            { id: 'high-10-2-trig-identities', name: '三角恒等变换', difficulty: '难点', time: '50分钟', important: true },
                            { id: 'high-10-2-complex-numbers', name: '复数', difficulty: '基础', time: '30分钟', important: false }
                        ]
                    }
                }
            },
            {
                id: 'grade-11',
                name: '高二',
                subtitle: '空间想象与解析几何',
                tracks: {
                    l1: {
                        name: '基础达标',
                        icon: '📚',
                        topics: [
                            {
                                id: 'high-11-1-solid-geometry',
                                name: '立体几何初步',
                                difficulty: '基础',
                                time: '40分钟',
                                important: true,
                                specialFeature: 'interactive',
                                desc: '3D几何体旋转与截面'
                            },
                            {
                                id: 'high-11-1-lines-circles',
                                name: '直线与圆',
                                difficulty: '重点',
                                time: '45分钟',
                                important: true,
                                specialFeature: 'interactive',
                                desc: '直线与圆位置关系动态演示'
                            },
                            { id: 'high-11-1-statistics', name: '统计案例', difficulty: '基础', time: '35分钟', important: false }
                        ]
                    },
                    l2: {
                        name: '思维进阶',
                        icon: '🧠',
                        topics: [
                            {
                                id: 'high-11-2-conics',
                                name: '圆锥曲线',
                                difficulty: '难点',
                                time: '60分钟',
                                important: true,
                                specialFeature: 'interactive',
                                desc: '椭圆定义与绘制实验'
                            },
                            { id: 'high-11-2-space-vectors', name: '空间向量与立体几何', difficulty: '难点', time: '50分钟', important: true },
                            { id: 'high-11-2-sequence', name: '数列', difficulty: '重点', time: '50分钟', important: true }
                        ]
                    }
                }
            },
            {
                id: 'grade-12',
                name: '高三',
                subtitle: '微积分初步与综合',
                tracks: {
                    l1: {
                        name: '基础达标',
                        icon: '📚',
                        topics: [
                            {
                                id: 'high-12-1-derivatives-calc',
                                name: '导数的几何意义',
                                difficulty: '重点',
                                time: '45分钟',
                                important: true,
                                specialFeature: 'interactive',
                                desc: '切线斜率动态冲浪'
                            },
                            {
                                id: 'high-12-1-counting',
                                name: '计数原理与分布',
                                difficulty: '基础',
                                time: '35分钟',
                                important: true,
                                specialFeature: 'interactive',
                                desc: '高尔顿板概率分布实验'
                            }
                        ]
                    },
                    l2: {
                        name: '思维进阶',
                        icon: '🧠',
                        topics: [
                            { id: 'high-12-2-derivative-apps', name: '导数的综合应用', difficulty: '难点', time: '60分钟', important: true },
                            { id: 'high-12-2-random-variables', name: '随机变量及其分布', difficulty: '重点', time: '50分钟', important: true },
                            { id: 'high-12-2-parametric-polar', name: '参数方程与极坐标', difficulty: '提高', time: '40分钟', important: false }
                        ]
                    }
                }
            }
        ]
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

    // Helper function to process grades
    const processGrades = (grades, stageName) => {
        if (!grades) return;
        grades.forEach(grade => {
            Object.values(grade.tracks).forEach(track => {
                track.topics.forEach(topic => {
                    topics.push({
                        ...topic,
                        grade: grade.name,
                        stage: stageName,
                        link: `/subjects/math/${topic.id}`,
                        // Extract number for sorting if needed, e.g., 'grade-7' -> 7
                        gradeLevel: parseInt(grade.id.replace('grade-', ''))
                    });
                });
            });
        });
    };

    // Process all stages that use the grade structure
    processGrades(knowledgeBase.elementary.grades, '小学');
    processGrades(knowledgeBase.middle.grades, '初中');
    processGrades(knowledgeBase.high.grades, '高中');

    // College (if it uses modules or needs future restructuring, handle separately)
    if (knowledgeBase.college.modules) {
        knowledgeBase.college.modules.forEach(module => {
            module.topics.forEach(topic => {
                topics.push({
                    ...topic,
                    module: module.name,
                    stage: '大学',
                    link: `/subjects/math/${topic.id}`
                });
            });
        });
    }

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

// User Level System
// Calculate user level based on total homework sessions completed

/**
 * Calculate user level based on total sessions
 * @param {number} totalSessions - Total number of homework sessions completed
 * @returns {number} User level (1-10)
 */
export const calculateLevel = (totalSessions) => {
    if (totalSessions >= 500) return 10; // 学习宗师
    if (totalSessions >= 300) return 9;  // 学习大师
    if (totalSessions >= 200) return 8;  // 学习专家
    if (totalSessions >= 150) return 7;  // 高级学者
    if (totalSessions >= 100) return 6;  // 资深学者
    if (totalSessions >= 50) return 5;   // 进阶学者
    if (totalSessions >= 30) return 4;   // 熟练学习者
    if (totalSessions >= 15) return 3;   // 勤奋学习者
    if (totalSessions >= 5) return 2;    // 初级学习者
    return 1;                            // 新手学习者
};

/**
 * Get level title based on level number
 * @param {number} level - User level (1-10)
 * @param {string} lang - Language code ('zh' or 'en')
 * @returns {string} Level title
 */
export const getLevelTitle = (level, lang = 'zh') => {
    const titles = {
        zh: {
            1: '新手学习者',
            2: '初级学习者',
            3: '勤奋学习者',
            4: '熟练学习者',
            5: '进阶学者',
            6: '资深学者',
            7: '高级学者',
            8: '学习专家',
            9: '学习大师',
            10: '学习宗师'
        },
        en: {
            1: 'Beginner',
            2: 'Novice',
            3: 'Diligent',
            4: 'Proficient',
            5: 'Advanced',
            6: 'Veteran',
            7: 'Expert',
            8: 'Specialist',
            9: 'Master',
            10: 'Grandmaster'
        }
    };

    return titles[lang]?.[level] || titles.zh[level];
};

/**
 * Get level progress information
 * @param {number} totalSessions - Total number of homework sessions completed
 * @returns {object} Level progress info
 */
export const getLevelProgress = (totalSessions) => {
    const level = calculateLevel(totalSessions);

    const thresholds = [0, 5, 15, 30, 50, 100, 150, 200, 300, 500];
    const currentThreshold = thresholds[level - 1];
    const nextThreshold = level < 10 ? thresholds[level] : 500;

    const progress = level < 10
        ? ((totalSessions - currentThreshold) / (nextThreshold - currentThreshold)) * 100
        : 100;

    return {
        level,
        currentSessions: totalSessions,
        currentThreshold,
        nextThreshold: level < 10 ? nextThreshold : null,
        progress: Math.min(100, Math.max(0, progress)),
        sessionsToNext: level < 10 ? nextThreshold - totalSessions : 0
    };
};

/**
 * Get level color scheme
 * @param {number} level - User level (1-10)
 * @returns {object} Color scheme for the level
 */
export const getLevelColors = (level) => {
    const colors = {
        1: { from: 'from-slate-400', to: 'to-slate-500', text: 'text-slate-600' },
        2: { from: 'from-blue-400', to: 'to-blue-500', text: 'text-blue-600' },
        3: { from: 'from-green-400', to: 'to-green-500', text: 'text-green-600' },
        4: { from: 'from-cyan-400', to: 'to-cyan-500', text: 'text-cyan-600' },
        5: { from: 'from-indigo-400', to: 'to-indigo-500', text: 'text-indigo-600' },
        6: { from: 'from-purple-400', to: 'to-purple-500', text: 'text-purple-600' },
        7: { from: 'from-pink-400', to: 'to-pink-500', text: 'text-pink-600' },
        8: { from: 'from-orange-400', to: 'to-orange-500', text: 'text-orange-600' },
        9: { from: 'from-amber-400', to: 'to-amber-500', text: 'text-amber-600' },
        10: { from: 'from-yellow-400', to: 'to-orange-500', text: 'text-yellow-600' }
    };

    return colors[level] || colors[1];
};

// Honor Title System - Achievement and Subject Titles

/**
 * Get achievement title based on total sessions
 * @param {number} totalSessions - Total number of homework sessions completed
 * @param {string} lang - Language code ('zh' or 'en')
 * @returns {object} Achievement title with emoji and text
 */
export const getAchievementTitle = (totalSessions, lang = 'zh') => {
    const titles = {
        zh: [
            { min: 0, max: 4, emoji: '🌱', title: '学习萌新' },
            { min: 5, max: 14, emoji: '🌟', title: '进步之星' },
            { min: 15, max: 29, emoji: '🚀', title: '学习火箭' },
            { min: 30, max: 49, emoji: '💪', title: '勤奋小达人' },
            { min: 50, max: 99, emoji: '🏆', title: '学霸养成中' },
            { min: 100, max: 149, emoji: '👑', title: '知识小王者' },
            { min: 150, max: 199, emoji: '🎯', title: '学习超人' },
            { min: 200, max: 299, emoji: '💎', title: '智慧宝石' },
            { min: 300, max: 499, emoji: '🌈', title: '全能学神' },
            { min: 500, max: Infinity, emoji: '⭐', title: '传奇学霸' }
        ],
        en: [
            { min: 0, max: 4, emoji: '🌱', title: 'Newbie' },
            { min: 5, max: 14, emoji: '🌟', title: 'Rising Star' },
            { min: 15, max: 29, emoji: '🚀', title: 'Rocket Learner' },
            { min: 30, max: 49, emoji: '💪', title: 'Diligent Student' },
            { min: 50, max: 99, emoji: '🏆', title: 'Scholar in Training' },
            { min: 100, max: 149, emoji: '👑', title: 'Knowledge Champion' },
            { min: 150, max: 199, emoji: '🎯', title: 'Super Learner' },
            { min: 200, max: 299, emoji: '💎', title: 'Wisdom Gem' },
            { min: 300, max: 499, emoji: '🌈', title: 'Master Student' },
            { min: 500, max: Infinity, emoji: '⭐', title: 'Legendary Scholar' }
        ]
    };

    const titleList = titles[lang] || titles.zh;
    const achievement = titleList.find(t => totalSessions >= t.min && totalSessions <= t.max);

    return achievement || titleList[0];
};

/**
 * Get subject title based on favorite subject and grade
 * @param {string} subject - Subject name (e.g., 'Math', 'Chinese')
 * @param {string} grade - Grade level (e.g., '小学一年级', 'primary1')
 * @param {string} lang - Language code ('zh' or 'en')
 * @returns {object} Subject title with emoji and text
 */
export const getSubjectTitle = (subject, grade, lang = 'zh') => {
    // Grade categories
    const getGradeCategory = (gradeKey) => {
        if (!gradeKey) return 'middle';

        if (gradeKey.includes('primary') || gradeKey.includes('小学')) return 'primary';
        if (gradeKey.includes('middle') || gradeKey.includes('初中')) return 'middle';
        if (gradeKey.includes('high') || gradeKey.includes('高中')) return 'high';
        if (gradeKey.includes('university') || gradeKey.includes('大学')) return 'university';
        return 'middle';
    };

    const gradeCategory = getGradeCategory(grade);

    // Subject emojis
    const subjectEmojis = {
        'Math': '📐',
        'Chinese': '📖',
        'English': '🌍',
        'Physics': '🧲',
        'Chemistry': '🧬',
        'Biology': '🌿',
        'History': '📜',
        'Geography': '🗺️',
        'General': '📚'
    };

    // Subject titles by grade category
    const subjectTitles = {
        zh: {
            primary: {
                'Math': '数学小天才',
                'Chinese': '语文小能手',
                'English': '英语小达人',
                'Physics': '科学小博士',
                'Chemistry': '实验小专家',
                'Biology': '自然小探索',
                'History': '历史小通',
                'Geography': '地理小行家',
                'General': '全科小学霸'
            },
            middle: {
                'Math': '数学学霸',
                'Chinese': '语文才子',
                'English': '英语达人',
                'Physics': '物理高手',
                'Chemistry': '化学专家',
                'Biology': '生物学者',
                'History': '历史通',
                'Geography': '地理行家',
                'General': '全科学霸'
            },
            high: {
                'Math': '数学大师',
                'Chinese': '文学大家',
                'English': '英语精英',
                'Physics': '物理天才',
                'Chemistry': '化学大神',
                'Biology': '生物专家',
                'History': '史学大师',
                'Geography': '地理专家',
                'General': '全能学神'
            },
            university: {
                'Math': '数学宗师',
                'Chinese': '文学泰斗',
                'English': '语言大师',
                'Physics': '物理学家',
                'Chemistry': '化学学者',
                'Biology': '生物学家',
                'History': '史学家',
                'Geography': '地理学者',
                'General': '学术精英'
            }
        },
        en: {
            primary: {
                'Math': 'Math Whiz',
                'Chinese': 'Chinese Star',
                'English': 'English Ace',
                'Physics': 'Science Explorer',
                'Chemistry': 'Lab Expert',
                'Biology': 'Nature Scout',
                'History': 'History Buff',
                'Geography': 'Geography Fan',
                'General': 'All-Round Star'
            },
            middle: {
                'Math': 'Math Master',
                'Chinese': 'Chinese Scholar',
                'English': 'English Pro',
                'Physics': 'Physics Expert',
                'Chemistry': 'Chemistry Ace',
                'Biology': 'Biology Scholar',
                'History': 'History Expert',
                'Geography': 'Geography Pro',
                'General': 'Top Student'
            },
            high: {
                'Math': 'Math Genius',
                'Chinese': 'Literature Master',
                'English': 'English Elite',
                'Physics': 'Physics Prodigy',
                'Chemistry': 'Chemistry Guru',
                'Biology': 'Biology Expert',
                'History': 'History Master',
                'Geography': 'Geography Expert',
                'General': 'Academic Star'
            },
            university: {
                'Math': 'Math Virtuoso',
                'Chinese': 'Literary Scholar',
                'English': 'Language Master',
                'Physics': 'Physicist',
                'Chemistry': 'Chemist',
                'Biology': 'Biologist',
                'History': 'Historian',
                'Geography': 'Geographer',
                'General': 'Academic Elite'
            }
        }
    };

    const emoji = subjectEmojis[subject] || '📚';
    const titleMap = subjectTitles[lang]?.[gradeCategory] || subjectTitles.zh.middle;
    const title = titleMap[subject] || titleMap['General'];

    return {
        emoji,
        title
    };
};

/**
 * Get user's favorite subject based on session statistics
 * @param {Array} sessions - Array of user sessions
 * @returns {string} Most frequent subject
 */
export const getFavoriteSubject = (sessions) => {
    if (!sessions || sessions.length === 0) return 'General';

    const subjectCount = {};
    sessions.forEach(session => {
        const subject = session.subject || 'General';
        subjectCount[subject] = (subjectCount[subject] || 0) + 1;
    });

    let maxCount = 0;
    let favoriteSubject = 'General';

    Object.entries(subjectCount).forEach(([subject, count]) => {
        if (count > maxCount) {
            maxCount = count;
            favoriteSubject = subject;
        }
    });

    return favoriteSubject;
};


import { Icons, generateDefaultContent } from './common';

const {
    Lightbulb, Target, TrendingUp, Clock, Star, Brain, CheckCircle
} = Icons;

export const grade12Content = {
    // ==================== 高三上学期 ====================
    'high-12-1-derivatives-calc': generateDefaultContent('high-12-1-derivatives-calc', '导数的几何意义', '高三'),
    'high-12-1-counting': generateDefaultContent('high-12-1-counting', '计数原理与分布', '高三'),

    // ==================== 高三下学期 ====================
    'high-12-2-derivative-apps': generateDefaultContent('high-12-2-derivative-apps', '导数的综合应用', '高三'),
    'high-12-2-random-variables': generateDefaultContent('high-12-2-random-variables', '随机变量及其分布', '高三'),
    'high-12-2-parametric-polar': generateDefaultContent('high-12-2-parametric-polar', '参数方程与极坐标', '高三'),
};

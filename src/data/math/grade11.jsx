
import { Icons, generateDefaultContent } from './common';

const {
    Lightbulb, Target, TrendingUp, Clock, Star, Brain, CheckCircle
} = Icons;

export const grade11Content = {
    // ==================== 高二上学期 ====================
    'high-11-1-solid-geometry': generateDefaultContent('high-11-1-solid-geometry', '立体几何初步', '高二'),
    'high-11-1-lines-circles': generateDefaultContent('high-11-1-lines-circles', '直线与圆', '高二'),
    'high-11-1-statistics': generateDefaultContent('high-11-1-statistics', '统计案例', '高二'),

    // ==================== 高二下学期 ====================
    'high-11-2-conics': generateDefaultContent('high-11-2-conics', '圆锥曲线', '高二'),
    'high-11-2-space-vectors': generateDefaultContent('high-11-2-space-vectors', '空间向量与立体几何', '高二'),
    'high-11-2-sequence': generateDefaultContent('high-11-2-sequence', '数列', '高二'),
};

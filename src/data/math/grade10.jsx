
import { Icons, generateDefaultContent } from './common';

const {
    Lightbulb, Target, TrendingUp, Clock, Star, Brain, CheckCircle
} = Icons;

export const grade10Content = {
    // ==================== 高一上学期 ====================
    'high-10-1-sets': generateDefaultContent('high-10-1-sets', '集合与逻辑', '高一'),
    'high-10-1-functions': generateDefaultContent('high-10-1-functions', '函数的性质', '高一'),
    'high-10-1-exp-log': generateDefaultContent('high-10-1-exp-log', '指数与对数函数', '高一'),
    'high-10-1-vectors': generateDefaultContent('high-10-1-vectors', '平面向量', '高一'),

    // ==================== 高一下学期 ====================
    'high-10-2-trig-graphs': generateDefaultContent('high-10-2-trig-graphs', '三角函数图像与性质', '高一'),
    'high-10-2-trig-identities': generateDefaultContent('high-10-2-trig-identities', '三角恒等变换', '高一'),
    'high-10-2-complex-numbers': generateDefaultContent('high-10-2-complex-numbers', '复数', '高一'),
};

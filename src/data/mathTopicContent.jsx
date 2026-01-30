import { grade7Content } from './math/grade7';
import { grade8Content } from './math/grade8';
import { grade9Content } from './math/grade9';

// 导出合并后的内容
export const mathTopicContent = {
    ...grade7Content,
    ...grade8Content,
    ...grade9Content
};

export default mathTopicContent;

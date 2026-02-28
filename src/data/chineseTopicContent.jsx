import { grade1Content } from './chinese/grade1';
import { grade2Content } from './chinese/grade2';
import { grade3Content } from './chinese/grade3';
import { grade4Content } from './chinese/grade4';
import { grade5Content } from './chinese/grade5';
import { grade6Content } from './chinese/grade6';
import { grade7Content } from './chinese/grade7';
import { grade8Content } from './chinese/grade8';
import { grade9Content } from './chinese/grade9';
import { grade10Content } from './chinese/grade10';
import { grade11Content } from './chinese/grade11';
import { grade12Content } from './chinese/grade12';

// 导出合并后的语文内容
export const chineseTopicContent = {
    ...grade1Content,
    ...grade2Content,
    ...grade3Content,
    ...grade4Content,
    ...grade5Content,
    ...grade6Content,
    ...grade7Content,
    ...grade8Content,
    ...grade9Content,
    ...grade10Content,
    ...grade11Content,
    ...grade12Content,
};

export default chineseTopicContent;

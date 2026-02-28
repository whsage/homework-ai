import { grade1Content } from './english/grade1';
import { grade2Content } from './english/grade2';
import { grade3Content } from './english/grade3';
import { grade4Content } from './english/grade4';
import { grade5Content } from './english/grade5';
import { grade6Content } from './english/grade6';
import { grade7Content } from './english/grade7';
import { grade8Content } from './english/grade8';
import { grade9Content } from './english/grade9';
import { grade10Content } from './english/grade10';
import { grade11Content } from './english/grade11';
import { grade12Content } from './english/grade12';

// 合并所有年级的英语内容
export const englishTopicContent = {
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
    ...grade12Content
};

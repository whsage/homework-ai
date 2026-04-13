import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { getFlattenedTopics as getMathTopics } from '../src/data/mathCurriculum.js';
import { getChineseFlattenedTopics as getChineseTopics } from '../src/data/chineseCurriculum.js';
import { getEnglishFlattenedTopics as getEnglishTopics } from '../src/data/englishCurriculum.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://ai7miao.com';
const TODAY = new Date().toISOString().split('T')[0];

// 各类页面的优先级配置
const PRIORITY = {
    home: '1.0',
    subjectHub: '0.9',
    knowledgeMap: '0.9',
    gradeHub: '0.85',
    topicPage: '0.8',
    other: '0.6',
};

const staticRoutes = [
    { path: '/',               priority: PRIORITY.home,         freq: 'daily' },
    { path: '/subjects',       priority: PRIORITY.subjectHub,   freq: 'weekly' },
    { path: '/subjects/math',  priority: PRIORITY.subjectHub,   freq: 'weekly' },
    { path: '/subjects/chinese', priority: PRIORITY.subjectHub, freq: 'weekly' },
    { path: '/subjects/english', priority: PRIORITY.subjectHub, freq: 'weekly' },
    { path: '/knowledge-map',  priority: PRIORITY.knowledgeMap, freq: 'weekly' },
    { path: '/faq',            priority: PRIORITY.other,        freq: 'monthly' },
];

function makeUrl({ path: route, priority, freq }) {
    return `  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

async function generateSitemap() {
    console.log('Generating sitemap...');

    const mathTopics = getMathTopics().map(t => ({
        path: `/subjects/math/${t.id}`,
        priority: PRIORITY.topicPage,
        freq: 'monthly',
    }));
    const chineseTopics = getChineseTopics().map(t => ({
        path: `/subjects/chinese/${t.id}`,
        priority: PRIORITY.topicPage,
        freq: 'monthly',
    }));
    const englishTopics = getEnglishTopics().map(t => ({
        path: `/subjects/english/${t.id}`,
        priority: PRIORITY.topicPage,
        freq: 'monthly',
    }));

    const allRoutes = [
        ...staticRoutes,
        ...mathTopics,
        ...chineseTopics,
        ...englishTopics,
    ];

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(makeUrl).join('\n')}
</urlset>`;

    const publicPath = path.resolve(__dirname, '../public');
    if (!fs.existsSync(publicPath)) {
        fs.mkdirSync(publicPath);
    }

    fs.writeFileSync(path.resolve(publicPath, 'sitemap.xml'), sitemapContent);
    console.log(`✅ Sitemap generated: public/sitemap.xml`);
    console.log(`   Static routes: ${staticRoutes.length}`);
    console.log(`   Math topics:   ${mathTopics.length}`);
    console.log(`   Chinese topics: ${chineseTopics.length}`);
    console.log(`   English topics: ${englishTopics.length}`);
    console.log(`   Total URLs:    ${allRoutes.length}`);
}

generateSitemap();

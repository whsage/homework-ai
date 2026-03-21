import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { getFlattenedTopics as getMathTopics } from '../src/data/mathCurriculum.js';
import { getChineseFlattenedTopics as getChineseTopics } from '../src/data/chineseCurriculum.js';
import { getEnglishFlattenedTopics as getEnglishTopics } from '../src/data/englishCurriculum.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://ai7miao.com';

const staticRoutes = [
    '/',
    '/subjects',
    '/subjects/math',
    '/subjects/chinese',
    '/subjects/english',
    '/faq'
];

async function generateSitemap() {
    console.log('Generating sitemap...');
    
    // Get all topic routes
    const mathTopics = getMathTopics().map(t => `/subjects/math/${t.id}`);
    const chineseTopics = getChineseTopics().map(t => `/subjects/chinese/${t.id}`);
    const englishTopics = getEnglishTopics().map(t => `/subjects/english/${t.id}`);
    
    const allRoutes = [
        ...staticRoutes,
        ...mathTopics,
        ...chineseTopics,
        ...englishTopics
    ];

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : route.split('/').length > 2 ? '0.6' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

    const publicPath = path.resolve(__dirname, '../public');
    if (!fs.existsSync(publicPath)) {
        fs.mkdirSync(publicPath);
    }
    
    fs.writeFileSync(path.resolve(publicPath, 'sitemap.xml'), sitemapContent);
    console.log(`Successfully generated sitemap in public/sitemap.xml with ${allRoutes.length} urls.`);
}

generateSitemap();

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import { preview } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routesToPrerender = [
    '/',
    '/subjects',
    '/subjects/math',
    '/subjects/chinese',
    '/subjects/english',
    '/faq'
];

import { getFlattenedTopics as getMathTopics } from '../src/data/mathCurriculum.js';
import { getChineseFlattenedTopics as getChineseTopics } from '../src/data/chineseCurriculum.js';
import { getEnglishFlattenedTopics as getEnglishTopics } from '../src/data/englishCurriculum.js';

const allRoutes = [
    ...routesToPrerender.filter(r => r !== '/'),
    ...getMathTopics().map(t => `/subjects/math/${t.id}`),
    ...getChineseTopics().map(t => `/subjects/chinese/${t.id}`),
    ...getEnglishTopics().map(t => `/subjects/english/${t.id}`),
    '/' // Root must be last so we don't overwrite dist/index.html while preview server is using it!
];

(async () => {
    console.log('Starting Vite preview server for prerendering...');
    const server = await preview({ preview: { port: 4173 } });
    const urls = server.resolvedUrls || server.urls;
    const url = (urls && urls.local && urls.local[0]) ? urls.local[0] : 'http://localhost:4173';
    
    console.log('Launching Puppeteer...');
    const browser = await puppeteer.launch({ headless: true });
    
    const distFolder = path.resolve(__dirname, '../dist');

    if (!fs.existsSync(distFolder)) {
        console.error('Dist folder not found. Did you run vite build?');
        process.exit(1);
    }
    
    const BATCH_SIZE = 15;
    console.log(`Starting to prerender ${allRoutes.length} routes in batches of ${BATCH_SIZE}...`);
    
    for (let i = 0; i < allRoutes.length; i += BATCH_SIZE) {
        const batch = allRoutes.slice(i, i + BATCH_SIZE);
        await Promise.all(batch.map(async (route) => {
            const newPage = await browser.newPage();
            try {
                // No request interception - let the page load completely normally
                
                await newPage.goto(`${url}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
                
                try {
                    // Wait for React to mount and remove the initial loader
                    await newPage.waitForFunction(() => !document.querySelector('.initial-loader'), { timeout: 15000 });
                    // Give Helmet a moment to inject title and content to render
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                } catch(e) {
                    // Ignore timeout and dump whatever is available
                }
                
                let html = await newPage.content();
                
                const filePath = route === '/' ? '/index.html' : `${route}/index.html`;
                const absolutePath = path.join(distFolder, filePath);
                
                fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
                fs.writeFileSync(absolutePath, html);
                console.log(`✅ Prerendered: ${route}`);
            } catch (err) {
                console.error(`❌ Failed to prerender ${route}:`, err.message);
            } finally {
                await newPage.close();
            }
        }));
    }

    await browser.close();
    server.httpServer.close();
    console.log('Prerendering complete!');
    process.exit(0);
})();

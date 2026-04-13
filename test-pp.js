import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

    console.log('Navigating...');
    await page.goto('http://localhost:4173/subjects/math/mid-7-1-rational-numbers', { waitUntil: 'load' });
    
    console.log('Waiting for loader to disappear...');
    try {
        await page.waitForFunction(() => !document.querySelector('.initial-loader'), { timeout: 10000 });
        console.log('Loader disappeared!');
    } catch(e) {
        console.log('Timeout waiting for loader to disappear');
    }
    
    await new Promise(r => setTimeout(r, 2000));
    const title = await page.evaluate(() => document.title);
    const html = await page.evaluate(() => document.body.innerHTML.substring(0, 300));
    
    console.log('Title is:', title);
    console.log('HTML start:', html);
    
    await browser.close();
})();

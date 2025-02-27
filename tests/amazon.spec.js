const {chromium,test,expect} = require('@playwright/test');

test('Browser Launch', async()=>{
    const browser = await chromium.launch();
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto('https://www.amazon.in/');

});
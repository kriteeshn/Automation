<<<<<<< HEAD
const {chromium,test,expect} = require('@playwright/test');

test('Browser Launch', async()=>{
    const browser = await chromium.launch();
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto('https://www.amazon.in/');

});
=======

>>>>>>> c77eb1688abbf4833a1802df0a596093cc294dcd

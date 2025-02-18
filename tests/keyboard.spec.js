const {chromium,test,expect} = require('@playwright/test');
test('Keyboard Function',async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();
    await page1.goto('https://vinothqaacademy.com/iframe/');
    // await page1.waitForTimeout(3000);
    // const allframes = await page1.frames();
    // console.log("number of frames:",allframes.length);

    const formframe = await page1.frameLocator('iframe[name="formpage"]');
    const firstname = await formframe.locator('//label[text()="First Name" ]/following-sibling::input');
    await firstname.fill('kritsh');
    await page1.waitForTimeout(3000);
    await page1.keyboard.press('cntrl+A');
    await page1.keyboard.press('cntrl+c');
    await page1.keyboard.press('Tab')
    await page1.keyboard.press('cntrl+v');




});
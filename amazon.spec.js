const {chromium,test,expect} = require('@playwright/test')

test('Browser Launch', async()=>{
    const browser = await chromium.launch();
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto('https://testautomationpractice.blogspot.com/');
    await page1.waitForTimeout(5000);

    await page1.locator("//input[@id='sunday']").check();
    
    await page1.locator("//input[@id='monday']").check();
    await page1.locator("//input[@id='friday']").check();
    await browser.setViewportSize({width:100,length:400});
     
    const checkboxes=[

          "//input[@id='sunday']",
          "//input[@id='monday']",
          "//input[@id='friday']"

]
});
for(const locator of checkboxes){


    await page1.locator(locator).check();
}
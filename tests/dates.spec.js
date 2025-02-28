const {chromium,test,expect} = require('@playwright/test');
test('Date',async()=>{

 const browser = await chromium.launch();
 const context1 = await browser.newcontext();
 const page1 = await context1.newpage();
 await page1.goto('https://testautomationpractice.blogspot.com/');










})
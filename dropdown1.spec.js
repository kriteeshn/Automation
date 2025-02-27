const {chromium,test,expect} = require('@playwright/test');
test("dropdown",async()=>{
    const browser = await chromium.launch();
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto('https://testautomationpractice.blogspot.com/');
    await page1.waitForTimeout(3000);

    // await page1.locator("#country").selectOption('india');
    await page1.selectOption("#country",['india','France']);
    await page1.waitForTimeout(5000);

    // const options = await page1.$$("#country option");
    // console.log("Number of options:",options);
    // await expect(options.length).toBe(10);
    
    // for(let option of options){
    //    let status=false; 
    //     // console.log(await option.textContent())
    //     let value = await option.textContent()
    //     if(value.includes('France')){
    //         status=true;
    //         break;
    //     }
    // }
    // expect(status).toBeTruthy();
    // const options = await (await page1.$$("#country option"));
    // console.log("Number of countries:",options.length);
//    await page1.waitForTimeout(5000);
})
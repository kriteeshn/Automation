const {chromium,test,expect} = require('@playwright/test');

test('Browser Launch', async()=>{
    const browser = await chromium.launch();
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto('https://www.amazon.in/');
    // await page1.waitForTimeout(5000);

    await expect(await page1.url().toLowerCase()).toContain("amazon");
    await expect((await page1.title()).toLowerCase()).toContain("amazon");
    const pagtitle = await page1.title();
    console.log('print page title:',pagtitle);

    const bookbtn = await page1.locator('#searchDropdownBox');
    await bookbtn.click();
    // await page1.waitForTimeout(5000);
    
    await bookbtn.selectOption("Books");
    
    await bookbtn.click();
    // await page1.waitForTimeout(5000);
    const search = await page1.getByPlaceholder('Search Amazon.in');
    await expect(search).toBeVisible();
    await search.fill('harrypotter');
    await page1.waitForSelector("[id*='sac-suggestion-row']"),{state : 'visible'};
    const elements = await page1.locator("[id*='sac-suggestion-row']").all();
    console.log("number of matching elements" + elements.length);
    const elementstext = await page1.locator("[id*='sac-suggestion-row']").allTextContents();
    console.log(elementstext);
    for(const ele of elements){
        await expect(ele).toContainText("harry potter")
    }
    

    // await page1.waitForTimeout(2000);
    const clk = await page1.getByLabel('harry potter and the order of phoenix');
    await clk.click();
    // await page1.waitForTimeout(5000);
    await page1.screenshot({path:'miniproject.png',fullPage:true});

    const title = await page1.locator('//h2[.="Results"]/following::span/following::h2/child::span[contains(text(),"A,Game")]').click()
    await title.click();
    

    




});
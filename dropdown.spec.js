const {chromium,test,expect} = require('@playwright/test');
test("dropdown",async()=>{
    const browser = await chromium.launch();
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto('https://vinothqaacademy.com/alert-and-popup/');
    // await page1.waitforTimeout(3000);
//    page1.on('dialog',async dialog=>{git
//      expect(dialog.type()).toContain('confirm')
//      expect(dialog.message()).toContain('Confirm pop up with OK and Cancel button')
//      expect(dialog.defaultValue('harry potter'))
//      await dialog.accept();



//    })
//    await page1.click("//button[normalize-space()='Confirm Alert Box']");
//    await expect(page1.locator("p[id='demo']")).toHaveText('You clicked on ok');
//  await page1.locator("//span[text()='Choose A City']").selectOption("London");

page1.on('dialog',async dialog=>{
  expect(dialog.type()).toContain('alert')
  expect(dialog.message()).toContain('I am an alert box!')
  await dialog.accept()


})

await page1.click("//button[@name='alertbox']");


})
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  await page.goto('https://www.amazon.in/');
  await page.getByLabel('Select the department you').selectOption('search-alias=appliances');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).selectOption('search-alias=appliances');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('fan');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.locator('._bGlmZ_item_3A5uK > div > div > a').first().click();
  await page.getByRole('link', { name: 'Apply the filter Orient' }).click();
  await page.getByRole('link', { name: 'Orient Electric 1200 mm Zeno BLDC | BLDC energy saving ceiling fan with Remote |BEE 5-star rated | Saves up to 50% on electricity bills | 3-year warranty by Orient | Brown, pack of 1', exact: true }).click();
  await page.goto('https://www.amazon.in/gp/aw/d/B0CHRJ5QQY/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=11da7f986b6be98cb0d9b92d48ae8a0b&hsa_cr_id=0&qid=1740050633&sr=1-1-e0fa1fdd-d857-4087-adda-5bd576b25987&ref_=sbx_be_s_sparkle_lsi4d_asin_0_img&pd_rd_w=jtnWh&content-id=amzn1.sym.df9fe057-524b-4172-ac34-9a1b3c4e647d%3Aamzn1.sym.df9fe057-524b-4172-ac34-9a1b3c4e647d&pf_rd_p=df9fe057-524b-4172-ac34-9a1b3c4e647d&pf_rd_r=S51D771VW7YANZBYWMAB&pd_rd_wg=8YoeX&pd_rd_r=9a94f1b8-0fad-41a1-99cc-f253a8dd466d&th=1');
  await page.getByRole('button', { name: 'Add to Cart', exact: true }).click();
  await page.getByRole('button', { name: 'Skip' }).click();
  await page.goto('https://www.amazon.in/cart/smart-wagon?newItems=5c6440e5-ef87-487e-bf40-8df97912cd12,1&ref_=sw_refresh');
  await page.getByRole('link', { name: 'item in cart' }).click();
  await page.locator('span').filter({ hasText: 'Qty: Update' }).getByLabel('Delete Orient Electric 1200').click();
});
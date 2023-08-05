const { test, expect } = require('@playwright/test');
require('dotenv').config();


test.beforeAll(async ({}) => {
  
});


test.afterAll(async ({}) => {

});





test('has title', async ({ page }) => {
  await page.goto(process.env.BASEURL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});



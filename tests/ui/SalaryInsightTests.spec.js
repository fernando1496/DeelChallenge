const { test, expect } = require('@playwright/test');
const {SalaryInsights} = require('./page-objects/SalaryInsights')
require('dotenv').config();

var salaryInsights;

test.beforeAll(async ({}) => {
   
});


test.afterAll(async ({}) => {

});





test('Verify the results displayed after performing a search with specific role and contry', async ({ page }) => {
  const salaryPage = new SalaryInsights(page);
  await page.goto(process.env.BASEURL + "dev/salary-insights");

  // Select a role
  await salaryPage.selectRole("qa")

  //Select a country
  await salaryPage.selectCountry("Cana")

  //Click search button
  await salaryPage.clickSearchButton()
  await page.waitForTimeout(2000);

  const titletext = await salaryPage.getTextFromTable()
  await expect(titletext).toBe("Senior QA Engineer compensation in Canada")
});

test('Verify no results founds when there is an invalid value on role input', async ({ page }) => {
  const salaryPage = new SalaryInsights(page);
  await page.goto(process.env.BASEURL + "dev/salary-insights");

  // Select an invalid role
  const results = await salaryPage.getDdlText("Fernando")
  await expect(results).toBe("No results found")

});

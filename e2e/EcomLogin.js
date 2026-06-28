import { createBdd} from 'playwright-bdd';

const { Given, When, Then } = createBdd();
//I navigate to URL
Given('I navigate to {string}', async ({ page }, url) => {
  await page.goto(url);
});

Given('I click on the Login link', async ({ page }, Login) => {
  await page.locator('a.ico-login',{Login}).click();

});

Given('I enter valid Email Address {string}', async ({ page }, EmailAddress) => {
   await page.locator('input[name="Email"]').fill('EmailAddress');

});

Given('I enter valid Password {string}', async ({ page }, Password) => { 
  await page.locator('input[name="Password"]').fill('Password');
});

Given('I click on the login button', async ({ page }, LoginBTN) => {
  await page.locator('input.button-1.login-button',{LoginBTN}).click();
});

Then('I should be redirected to the homepage', async ({ page }, Loggedin) => {
  await expect(page).toHaveURL( new RegExp(Loggedin));
});

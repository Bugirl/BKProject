import { test, expect } from '@playwright/test';

test('successful purchase flow', async ({ page }) => {
 //After checkout the unlogged user is taken to SingIn page
 //Act
  await page.goto('https://www.bk.com/');
  await page.getByRole('button', { name: ' Order Pickup' }).click();
  await page.getByRole('button', { name: 'Cookies Settings' }).click();
  await page.getByRole('button', { name: 'Confirm My Choices' }).click();
  await page.getByTestId('storelocator-autocomplete').fill('25 broadway ');
  await page.getByLabel('25 Broadway New York, NY, USA').click();
  await page.getByRole('heading', { name: '16 Beaver Street' }).click();
  await page.getByLabel('Order').click();
  await page
    .getByRole('link', {
      name: 'Delicious Flamed Grilled Burger Flame Grilled Burgers',
    })
    .click();
  await page
    .getByRole('link', { name: 'menu item image Whopper $6.79 670 Cal' })
    .click();
  await page.getByTestId('product-home-action-button').click();
  await page.getByRole('button', { name: ' $6.79' }).click();
  //Assert
  await expect(page).toHaveURL(/.*signin/);
});

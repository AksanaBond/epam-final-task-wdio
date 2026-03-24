const DetailsPage = require('../po/pages/details.page');
const InventoryPage = require('../po/pages/inventory.page');
const LoginPage = require('../po/pages/login.page');

const inventoryPage = new InventoryPage();
const loginPage = new LoginPage();
const detailsPage = new DetailsPage();
describe('UC-1: Product Details Verification', () => {
  beforeEach(async () => {
    await loginPage.open();
  });
  it('should verify product price and description on details page', async () => {
    await loginPage.inputcomponent.form_input('username').setValue('standard_user');
    await loginPage.inputcomponent.form_input('password').setValue('secret_sauce');
    await loginPage.inputcomponent.form_input('submit').click();
    await expect(browser).toHaveUrl(expect.stringContaining('inventory.html'));// login
    const targetItem = inventoryPage.item('Sauce Labs Fleece Jacket');
    const expectedPrice = await targetItem.getDetail('price').getText();
    const expectedDesc = await targetItem.getDetail('description').getText();
    await inventoryPage.item('Sauce Labs Fleece Jacket').getDetail('title').click();
    await expect(detailsPage.product.getDetail('description')).toHaveText(expectedDesc);
    await expect(detailsPage.product.getDetail('price')).toHaveText(expectedPrice);
    await detailsPage.product.getDetail('addToCartBtn').click();
    const cartBadge = await $('[data-test="shopping-cart-badge"]');
    await expect(cartBadge).toHaveText('1');
  });
});

const DetailsPage = require('../po/pages/details.page');
const InventoryPage = require('../po/pages/inventory.page');
const LoginPage = require('../po/pages/login.page');
const Logger = require('../utils/logger');

const logger = new Logger();
const inventoryPage = new InventoryPage();
const loginPage = new LoginPage();
const detailsPage = new DetailsPage();
describe('UC-1: Product Details Verification', () => {
  beforeEach(async () => {
    await loginPage.open();
  });
  it('should verify product price and description on details page', async () => {
    logger.info('Logging in as standard_user...');
    await loginPage.inputcomponent.form_input('username').setValue('standard_user');
    await loginPage.inputcomponent.form_input('password').setValue('secret_sauce');
    await loginPage.inputcomponent.form_input('submit').click();
    await expect(browser).toHaveUrl(expect.stringContaining('inventory.html'));
    const productName = 'Sauce Labs Fleece Jacket';
    logger.info(`Starting verification for product: "${productName}"`);
    const targetItem = inventoryPage.item(productName);
    const expectedPrice = await targetItem.getDetail('price').getText();
    const expectedDesc = await targetItem.getDetail('description').getText();
    logger.info('Navigating to product details page...');
    await inventoryPage.item('Sauce Labs Fleece Jacket').getDetail('title').click();
    logger.info('Verifying price and description...');
    await expect(detailsPage.product.getDetail('description')).toHaveText(expectedDesc);
    await expect(detailsPage.product.getDetail('price')).toHaveText(expectedPrice);
    logger.info('Adding product to cart...');
    await detailsPage.product.getDetail('addToCartBtn').click();
    logger.info('Verifying cart badge update...');
    const cartBadge = await $('[data-test="shopping-cart-badge"]');
    await expect(cartBadge).toHaveText('1');
    logger.info('Test completed successfully!');
  });
});

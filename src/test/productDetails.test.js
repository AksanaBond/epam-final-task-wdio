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
    logger.info('Logging in as standard_user...');
    await loginPage.login('standard_user', 'secret_sauce');
  });

  it('should verify product price and description on details page', async () => {
    const productName = 'Sauce Labs Fleece Jacket';

    logger.info(`[GIVEN] User is on inventory page. Gathering data for product: "${productName}"`);
    const targetItem = inventoryPage.item(productName);
    const expectedPrice = await targetItem.getDetail('price').getText();
    const expectedDesc = await targetItem.getDetail('description').getText();

    logger.info('[WHEN] User navigates to product details page and adds it to the cart');
    await inventoryPage.openProductDetails(productName);
    await detailsPage.addToCart();

    logger.info('[THEN] URL changes to item page, product details match, and cart badge updates to 1');
    await expect(browser).toHaveUrl(expect.stringContaining('inventory-item.html'));
    await expect(detailsPage.product.getDetail('description')).toHaveText(expectedDesc);
    await expect(detailsPage.product.getDetail('price')).toHaveText(expectedPrice);
    await expect(detailsPage.cartBadge).toHaveText('1');

    logger.info('Test completed successfully!');
  });
});

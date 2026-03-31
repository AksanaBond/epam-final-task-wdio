const InventoryPage = require('../po/pages/inventory.page');
const LoginPage = require('../po/pages/login.page');
const Logger = require('../utils/logger');

const logger = new Logger();
const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
describe('UC-2: Footer & Social Links', () => {
  beforeEach(async () => {
    logger.info('Opening login page and authenticating as standard_user...');
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(browser).toHaveUrl(expect.stringContaining('inventory.html'));
  });
  it('should scroll to footer and verify social links exist', async () => {
    logger.info('[WHEN] User scrolls to the footer element');
    await inventoryPage.scroll();

    logger.info(
      '[THEN] Twitter, Facebook, and LinkedIn icons should be displayed',
    );
    await expect(inventoryPage.footer.socialLink('twitter')).toBeDisplayed();
    await expect(inventoryPage.footer.socialLink('facebook')).toBeDisplayed();
    await expect(inventoryPage.footer.socialLink('linkedin')).toBeDisplayed();
  });

  it('should verify that clicking a social link opens the correct URL in a new tab/window', async () => {
    logger.info('[GIVEN] User is at the footer of the inventory page');
    await inventoryPage.scroll();
    const mainWindow = await browser.getWindowHandle();

    logger.info(
      '[WHEN] User clicks the LinkedIn social link and switches to the new tab',
    );
    await inventoryPage.footer.socialLink('linkedin').click();

    await browser.waitUntil(
      async () => (await browser.getWindowHandles()).length === 2,
      { timeout: 5000, timeoutMsg: 'the new tab/window did not open' },
    );

    const allwindows = await browser.getWindowHandles();
    const newWindow = allwindows.find((window) => window !== mainWindow);
    await browser.switchToWindow(newWindow);

    logger.info('Waiting for the URL to load in the new tab...');
    await browser.waitUntil(
      async () => (await browser.getUrl()).includes('linkedin.com'),
      { timeout: 5000, timeoutMsg: 'Firefox is too slow to load LinkedIn URL' },
    );

    const newTabUrl = await browser.getUrl();
    await browser.closeWindow();
    await browser.switchToWindow(mainWindow);

    logger.info('[THEN] The new tab URL should contain "www.linkedin.com"');
    expect(newTabUrl).toContain('www.linkedin.com');
  });
});

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
    await loginPage.inputcomponent.form_input('username').setValue('standard_user');
    await loginPage.inputcomponent.form_input('password').setValue('secret_sauce');
    await loginPage.inputcomponent.form_input('submit').click();
    await expect(browser).toHaveUrl(expect.stringContaining('inventory.html'));
  });
  it('should scroll to footer and verify social links exist', async () => {
    logger.info('Scrolling to the footer element...');
    await inventoryPage.footer.rootEl.scrollIntoView();
    logger.info('Checking if Twitter, Facebook, and LinkedIn icons are displayed...');
    await expect(inventoryPage.footer.socialLink('twitter')).toBeDisplayed();
    await expect(inventoryPage.footer.socialLink('facebook')).toBeDisplayed();
    await expect(inventoryPage.footer.socialLink('linkedin')).toBeDisplayed();
    logger.info('Social links visibility verified successfully!');
  });
  it('should verify that clicking a social link opens the correct URL in a new tab/window ', async () => {
    logger.info('Starting new tab verification for the LinkedIn link...');
    await inventoryPage.footer.rootEl.scrollIntoView();
    const mainWindow = await browser.getWindowHandle();
    logger.info('Clicking the LinkedIn social link...');
    await inventoryPage.footer.socialLink('linkedin').click();
    await browser.waitUntil(
      async () => (await browser.getWindowHandles()).length === 2,
      { timeout: 5000, timeoutMsg: 'the new tab/window did not open' },
    );
    const allwindows = await browser.getWindowHandles();
    const newWindow = allwindows.find((window) => window !== mainWindow);
    await browser.switchToWindow(newWindow);
    logger.info('Verifying that the new tab URL contains "www.linkedin.com"...');
    await expect(browser).toHaveUrl(expect.stringContaining('www.linkedin.com'));
    await browser.closeWindow();
    await browser.switchToWindow(mainWindow);
    logger.info('New tab verification completed successfully!');
  });
});

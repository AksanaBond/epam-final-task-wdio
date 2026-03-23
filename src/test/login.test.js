const LoginPage = require('../po/pages/login.page');

const loginPage = new LoginPage();
describe('UC-1: Product Details Verification', () => {
  beforeEach(async () => {
    await loginPage.open();
  });
  it('should verify product price and description on details page', async () => {
    await loginPage.inputcomponent.form_input('username').setValue('standard_user');
    await loginPage.inputcomponent.form_input('password').setValue('secret_sauce');
    await loginPage.inputcomponent.form_input('submit').click();
    await expect(browser).toHaveUrl(expect.stringContaining('inventory.html'));
  });
});

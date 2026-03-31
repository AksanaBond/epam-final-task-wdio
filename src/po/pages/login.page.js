const InputComponent = require('../components/login/input.component');
const BasePage = require('./base.page');

class LoginPage extends BasePage {
  constructor() {
    super('/');
    this.inputcomponent = new InputComponent();
  }

  async login(username, password) {
    await this.inputcomponent.form_input('username').setValue(username);
    await this.inputcomponent.form_input('password').setValue(password);
    await this.inputcomponent.form_input('submit').click();
  }
}
module.exports = LoginPage;

const BaseComponent = require("../common/base.component");

class InputComponent extends BaseComponent {
  constructor() {
    super(".login-box");
  }
  form_input(param) {
    const inputs = {
      username: '[data-test="username"]',
      password: '[data-test="password"]',
      submit: '[data-test="login-button"]'
    };
    return $(inputs[param.toLowerCase()]);
  }
}
module.exports = InputComponent;

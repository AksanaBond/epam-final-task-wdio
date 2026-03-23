const InputComponent = require("../components/login/input.component");
const BasePage = require("./base.page");

class LoginPage extends BasePage{
    constructor(){
       super('/');
       this.inputcomponent = new InputComponent;
    }
}
module.exports = LoginPage;
const LoginPage = require("../po/pages/login.page");
const loginPage = new LoginPage();
describe('login with standard_user', ()=>{
    beforeEach(async()=> {
        await loginPage.open()
    })
    it('login', async()=>{
        await loginPage.inputcomponent.form_input('username').setValue('standard_user');
        await loginPage.inputcomponent.form_input('password').setValue('secret_sauce');
        await loginPage.inputcomponent.form_input('submit').click();

    } )
})
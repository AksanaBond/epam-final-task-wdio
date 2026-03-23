const BasePage = require("./base.page");

class InventoryPage extends BasePage{
    constructor(){
       super('/inventory.html')
    }
}
module.exports = InventoryPage;
const FooterComponent = require('../components/common/footer.component');
const BasePage = require('./base.page');

class InventoryPage extends BasePage {
  constructor() {
    super('/inventory.html');
    this.footer = new FooterComponent();
  }
}
module.exports = InventoryPage;

const FooterComponent = require('../components/common/footer.component');
const ItemComponent = require('../components/common/item.component');
const BasePage = require('./base.page');

class InventoryPage extends BasePage {
  constructor() {
    super('/inventory.html');
    this.footer = new FooterComponent();
  }

  item(itemName) {
    const rootSelector = `//div[@data-test="inventory-item" and .//*[contains(text(), "${itemName}")]]`;
    return new ItemComponent(rootSelector);
  }
}
module.exports = InventoryPage;

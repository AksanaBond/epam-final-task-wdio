const FooterComponent = require('../components/common/footer.component');
const ItemComponent = require('../components/common/item.component');
const BasePage = require('./base.page');

class DetailsPage extends BasePage {
  constructor() {
    super('/inventory-item.html');
    this.footer = new FooterComponent();
    this.product = new ItemComponent('div[data-test="inventory-item"]');
  }

  get cartBadge() {
    return $('[data-test="shopping-cart-badge"]');
  }

  async addToCart() {
    await this.product.getDetail('addToCartBtn').click();
  }
}
module.exports = DetailsPage;

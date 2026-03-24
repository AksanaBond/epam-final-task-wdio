const BaseComponent = require('./base.component');

class ItemComponent extends BaseComponent {
  getDetail(param) {
    const details = {
      title: '[data-test="inventory-item-name"]',
      price: '[data-test="inventory-item-price"]',
      description: '[data-test="inventory-item-desc"]',
      addToCartBtn: '[data-test="add-to-cart"]',
    };
    return this.rootEl.$(details[param]);
  }
}
module.exports = ItemComponent;

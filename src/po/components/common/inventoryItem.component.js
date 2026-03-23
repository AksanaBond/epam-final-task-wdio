const BaseComponent = require('./base.component');

class InventoryItemComponent extends BaseComponent {
  constructor() {
    super('[data-test="inventory-container"]');
  }

  socialLink(link) {
    const socialLinks = {
      twitter: '[data-test="social-twitter"]',
      facebook: '[data-test="social-facebook"]',
      linkedin: '[data-test="social-linkedin"]',
    };
    return $(socialLinks[link.toLowerCase()]);
  }
}
module.exports = InventoryItemComponent;

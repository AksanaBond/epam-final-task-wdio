const BaseComponent = require("./base.component");

class FooterComponent extends BaseComponent {
  constructor() {
    super('[data-test="footer"]');
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
module.exports = FooterComponent;

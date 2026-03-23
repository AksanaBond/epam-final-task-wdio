const FooterComponent = require('../components/common/footer.component');
const BasePage = require('./base.page');

class DetailsPage extends BasePage {
  constructor() {
    super('/');
    this.footer = new FooterComponent();
  }
}
module.exports = DetailsPage;

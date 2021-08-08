import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import returnLinkIntl from 'devedanos-portfolio/utils/return-link-intl';

const urlQuoteEn = 'https://0645426g2uh.typeform.com/to/NQ8923FO';
const urlQuoteFr = 'https://0645426g2uh.typeform.com/to/P1HsWGtK';
const mapQuoteUrls = new Map();
mapQuoteUrls.set('en-us', urlQuoteEn);
mapQuoteUrls.set('fr-fr', urlQuoteFr);

export default class BannersCtaComponent extends Component {
  @service intl;

  get quoteUrl () {
    return returnLinkIntl(this.intl, mapQuoteUrls);
  }
}

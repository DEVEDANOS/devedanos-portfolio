import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

const urlQuoteEn = 'https://0645426g2uh.typeform.com/to/NQ8923FO';
const urlQuoteFr = 'https://0645426g2uh.typeform.com/to/P1HsWGtK';
const mapQuoteUrls = new Map();
mapQuoteUrls.set('en-us', urlQuoteEn);
mapQuoteUrls.set('fr-fr', urlQuoteFr);

export default class BannersCtaComponent extends Component {
  @service intl;

  mapQuoteUrls = mapQuoteUrls;

  get quoteUrl () {
    if (this.mapQuoteUrls.has(this.intl.locale.firstObject)) {
      return this.mapQuoteUrls.get(this.intl.locale.firstObject);
    }
    return this.mapQuoteUrls.get('en-us');
  }
}

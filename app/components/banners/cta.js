import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { getLinkIntlCta } from 'devedanos-portfolio/utils/get-link-intl-cta';
const urlFormCtaEn = 'https://0645426g2uh.typeform.com/to/NQ8923FO';
const urlFormCtaFr = 'https://0645426g2uh.typeform.com/to/P1HsWGtK';
const mapFormCtaUrls = new Map();
mapFormCtaUrls.set('en-us', urlFormCtaEn);
mapFormCtaUrls.set('fr-fr', urlFormCtaFr);

export default class BannersCtaComponent extends Component {
  @service intl;

  get FormCtaUrl () {
    return getLinkIntlCta(this.intl);
  }
}

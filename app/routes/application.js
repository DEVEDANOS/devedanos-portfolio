import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service intl;

  constructor () {
    super(...arguments);
    const primaryLocale = this.intl.get('primaryLocale');
    this.intl.setLocale([primaryLocale]);
  }
}

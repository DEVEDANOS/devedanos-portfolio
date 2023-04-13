import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service intl;
  @service router;

  queryParams = {
    language: {
      refreshModel: true,
      replace: true,
    },
  };

  model (params, transition) {
    const arrayLocales = ['en-us', 'fr-fr'];

    let language = null;

    if (window !== undefined && window?.navigator?.languages !== undefined) {
      const languageRegex = new RegExp('^' + params.language ?? navigator.languages[0].split('-')[0]);

      language = arrayLocales.find(l => languageRegex.test(l));
    }

    if (language) this.intl.setLocale([language]);

    return {
      language,
    };
  }
}

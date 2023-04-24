import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service intl;
  @service router;

  queryParams = {
    language: {
      refreshModel: true,
      replace: false,
    },
  };

  getLanguage (userChosenLanguage = null) {
    const arrayLocales = ['en-us', 'fr-fr'];

    let language = null;

    if (window !== undefined && window?.navigator?.languages !== undefined) {
      const stringLanguage = userChosenLanguage || navigator.languages[0].split('-')[0];
      const languageRegex = new RegExp('^' + stringLanguage);

      language = arrayLocales.find(l => languageRegex.test(l));
    }

    this.intl.setLocale([language ?? arrayLocales[0]]);

    return language;
  }

  beforeModel () {
    const language = this.getLanguage();

    return {
      language,
    };
  }

  model (params, transition) {
    const language = this.getLanguage(params.language);

    return {
      language,
    };
  }
}

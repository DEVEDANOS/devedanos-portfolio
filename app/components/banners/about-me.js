import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class BannersAboutMeComponent extends Component {
  @service intl;

  get resumeUrl () {
    const urlResumeEn = 'https://www.dropbox.com/s/y2tvfxbj74tarxu/light_freelance_fullstack_js_developer.pdf?dl=0';
    const urlResumeFr = 'https://www.dropbox.com/s/rj2ajmjt4xog3vo/fr_light_freelance_fullstack_js_developer.pdf?dl=0';

    if (this.intl.locale.firstObject === 'en-us') {
      return urlResumeEn;
    }

    if (this.intl.locale.firstObject === 'fr-fr') {
      return urlResumeFr;
    }
  }
}

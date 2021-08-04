import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

const urlResumeEn = 'https://www.dropbox.com/s/y2tvfxbj74tarxu/light_freelance_fullstack_js_developer.pdf?dl=0';
const urlResumeFr = 'https://www.dropbox.com/s/rj2ajmjt4xog3vo/fr_light_freelance_fullstack_js_developer.pdf?dl=0';
const mapResumeUrls = new Map();
mapResumeUrls.set('en-us', urlResumeEn);
mapResumeUrls.set('fr-fr', urlResumeFr);

export default class BannersAboutMeComponent extends Component {
  @service intl;

  mapResumeUrls = mapResumeUrls;

  get resumeUrl () {
    if (this.mapResumeUrls.has(this.intl.locale.firstObject)) {
      return this.mapResumeUrls.get(this.intl.locale.firstObject);
    }
    return this.mapResumeUrls.get('en-us');
  }
}

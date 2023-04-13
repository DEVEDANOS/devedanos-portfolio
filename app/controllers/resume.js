import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import getLinkIntl from 'devedanos-portfolio/utils/get-link-intl';

export default class ResumeController extends Controller {
  @service intl;

  get resumeUrl () {
    const resumeLinkEn = 'en_detailed_resume';
    const resumeLinkFr = 'fr_detailed_resume';

    const mapResumeUrls = new Map();

    mapResumeUrls.set('en-us', resumeLinkEn);
    mapResumeUrls.set('fr-fr', resumeLinkFr);

    const resumeLink = getLinkIntl(this.intl, mapResumeUrls);

    return '/assets/resumes/' + resumeLink + '.pdf';
  }
}

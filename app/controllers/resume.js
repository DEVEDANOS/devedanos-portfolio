import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import returnLinkIntl from 'devedanos-portfolio/utils/return-link-intl';

const resumeLinkEn = 'en_detailed_resume';
const resumeLinkFr = 'fr_detailed_resume';
const mapResumeUrls = new Map();
mapResumeUrls.set('en-us', resumeLinkEn);
mapResumeUrls.set('fr-fr', resumeLinkFr);

export default class ResumeController extends Controller {
  @service intl;

  mapResumeUrls = mapResumeUrls;

  get resumeUrl () {
    let link = returnLinkIntl(this.intl, this.mapResumeUrls);
    link = `/assets/resumes/${link}.pdf`;
    return link;
  }
}

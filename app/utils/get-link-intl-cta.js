import getLinkIntl from 'devedanos-portfolio/utils/get-link-intl';
import { URL_FORM_CTA_EN, URL_FORM_CTA_FR } from 'devedanos-portfolio/constants/external_urls';

export const getLinkIntlCta = (intl) => {
  const mapFormCtaUrls = new Map();

  mapFormCtaUrls.set('en-us', URL_FORM_CTA_EN);
  mapFormCtaUrls.set('fr-fr', URL_FORM_CTA_FR);

  return getLinkIntl(intl, mapFormCtaUrls);
};

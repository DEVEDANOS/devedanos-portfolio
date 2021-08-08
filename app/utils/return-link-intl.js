import EmberError from '@ember/error';

export default function returnLinkIntl (intlService, mapLinks) {
  try {
    if (!(mapLinks instanceof Map)) {
      throw new EmberError('The object providing links should be a Map');
    }
    if (!intlService) {
      throw new EmberError('No Intl service provided');
    }

    if (mapLinks.has(intlService.primaryLocale)) {
      return mapLinks.get(intlService.primaryLocale);
    }
    return mapLinks.get('en-us');
  } catch (error) {
    return error;
  }
};

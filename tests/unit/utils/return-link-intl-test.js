import getLinkIntl from 'devedanos-portfolio/utils/get-link-intl';
import { module, test } from 'qunit';
import Service from '@ember/service';

const linkEn = 'linkUS';
const linkFr = 'linkFR';
const mapLinks = new Map();
mapLinks.set('en-us', linkEn);
mapLinks.set('fr-fr', linkFr);

class IntlStubClass extends Service {
  primaryLocale = () => {};
};

const intlStub = new IntlStubClass();

const primaryLocaleEn = () => { return 'en-us'; };
const primaryLocaleFr = () => { return 'fr-fr'; };
const primaryLocaleUnknown = () => { return 'ru-ru'; };

module('Unit | Utility | getLinkIntl', function () {
  test('it returns en-us link when language is en-us', function (assert) {
    intlStub.primaryLocale = primaryLocaleEn();
    const result = getLinkIntl(intlStub, mapLinks);
    assert.equal(result, linkEn);
  });

  test('it returns fr-fr link when language is fr-fr', function (assert) {
    intlStub.primaryLocale = primaryLocaleFr();
    const result = getLinkIntl(intlStub, mapLinks);
    assert.equal(result, linkFr);
  });

  test('it returns en-us link when language does not exist', function (assert) {
    intlStub.primaryLocale = primaryLocaleUnknown();
    const result = getLinkIntl(intlStub, mapLinks);
    assert.equal(result, linkEn);
  });

  test('it returns error when no Map given', function (assert) {
    intlStub.primaryLocale = primaryLocaleUnknown();
    const result = getLinkIntl(intlStub, { });
    assert.equal(result, `${Error('The object providing links should be a Map')}`);
  });

  test('it returns error when no Intl service given', function (assert) {
    intlStub.primaryLocale = primaryLocaleUnknown();
    const result = getLinkIntl('', mapLinks);
    assert.equal(result, `${Error('No Intl service provided')}`);
  });
});

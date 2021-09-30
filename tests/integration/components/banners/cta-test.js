import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render /* pauseTest */ } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupIntl, setLocale } from 'ember-intl/test-support';

const urlQuoteEn = 'https://0645426g2uh.typeform.com/to/NQ8923FO';
const urlQuoteFr = 'https://0645426g2uh.typeform.com/to/P1HsWGtK';
const mapQuoteUrls = new Map();
mapQuoteUrls.set('en-us', urlQuoteEn);
mapQuoteUrls.set('fr-fr', urlQuoteFr);

module('Integration | Component | banners/cta', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);

  hooks.beforeEach(function (assert) {
    this.mapQuoteUrls = mapQuoteUrls;
  });

  test('it changes Quote request url to en-us', async function (assert) {
    setLocale('en-us');

    await render(hbs`<Banners::Cta />`);
    assert
      .dom('[data-test=quote-request-link]')
      .hasAttribute(
        'href',
        await this.mapQuoteUrls.get('en-us'),
      );
  });

  test('it changes Quote request url to fr-fr', async function (assert) {
    setLocale('fr-fr');

    await render(hbs`<Banners::Cta />`);
    assert
      .dom('[data-test=quote-request-link]')
      .hasAttribute(
        'href',
        await this.mapQuoteUrls.get('fr-fr'),
      );
  });
});

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupIntl, setLocale } from 'ember-intl/test-support';

const urlResumeEn = 'https://www.dropbox.com/s/y2tvfxbj74tarxu/light_freelance_fullstack_js_developer.pdf?dl=0';
const urlResumeFr = 'https://www.dropbox.com/s/rj2ajmjt4xog3vo/fr_light_freelance_fullstack_js_developer.pdf?dl=0';
const mapResumeUrls = new Map();
mapResumeUrls.set('en-us', urlResumeEn);
mapResumeUrls.set('fr-fr', urlResumeFr);

module('Integration | Component | banners/about-me', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);

  hooks.beforeEach(function (assert) {
    this.mapResumeUrls = mapResumeUrls;
  });

  test('it changes language to en-us', async function (assert) {
    setLocale('en-us');
    await render(hbs`<Banners::AboutMe />`);

    assert
      .dom('[data-test-app=link-resume]')
      .hasAttribute(
        'href',
        await this.mapResumeUrls.get('en-us'),
      );
  });

  test('it changes language to fr-fr', async function (assert) {
    setLocale('fr-fr');
    await render(hbs`<Banners::AboutMe />`);

    assert
      .dom('[data-test-app=link-resume]')
      .hasAttribute(
        'href',
        await this.mapResumeUrls.get('fr-fr'),
      );
  });
});

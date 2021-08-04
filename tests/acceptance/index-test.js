import { module, test } from 'qunit';
import { visit, currentURL, click /* pauseTest */ } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupIntl, setLocale, t } from 'ember-intl/test-support';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);
  setupIntl(hooks);

  test('visiting /index', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
  });

  test('it changes language to en-us', async function (assert) {
    setLocale('en-us');
    const resumeUrl = 'https://www.dropbox.com/s/y2tvfxbj74tarxu/light_freelance_fullstack_js_developer.pdf?dl=0';

    await visit('/');
    await click('[data-test=language-picker-button]');
    await click('[data-test=language-picker-en-us]');

    assert
      .dom('[data-test-app=link-resume]')
      .hasText(t('pages.home.banners.about-me.line-4'));

    assert
      .dom('[data-test-app=link-resume]')
      .hasAttribute(
        'href',
        resumeUrl,
      );
  });

  test('it changes language to fr-fr', async function (assert) {
    setLocale('fr-fr');
    const resumeUrl = 'https://www.dropbox.com/s/rj2ajmjt4xog3vo/fr_light_freelance_fullstack_js_developer.pdf?dl=0';

    await visit('/');
    await click('[data-test=language-picker-button]');
    await click('[data-test=language-picker-fr-fr]');

    assert
      .dom('[data-test-app=link-resume]')
      .hasText(t('pages.home.banners.about-me.line-4'));

    // await pauseTest();

    assert
      .dom('[data-test-app=link-resume]')
      .hasAttribute(
        'href',
        resumeUrl,
      );
  });
});

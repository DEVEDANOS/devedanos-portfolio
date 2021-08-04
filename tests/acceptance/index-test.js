import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /index', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
  });

  test('it changes language to en-us', async function (assert) {
    // const controller = this.owner.lookup('controller:index');
    // controller.intl.setLocale('en-us');
    const resumeUrlEn = 'https://www.dropbox.com/s/y2tvfxbj74tarxu/light_freelance_fullstack_js_developer.pdf?dl=0';

    await visit('/');
    await click('[data-test=language-picker-button]');
    await click('[data-test=language-picker-en-us]');

    assert
      .dom('[data-test-app=link-resume]')
      .hasText('And to know more, here is my resume');

    assert
      .dom('[data-test-app=link-resume]')
      .hasAttribute(
        'href',
        resumeUrlEn,
      );
  });
});

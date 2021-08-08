import { module, test } from 'qunit';
import { visit, click, currentURL /* ,pauseTest */ } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupIntl, t } from 'ember-intl/test-support';

module('Acceptance | Resume', function (hooks) {
  setupApplicationTest(hooks);
  setupIntl(hooks);

  test('it changes language to en-us', async function (assert) {
    const controller = this.owner.lookup('controller:resume');
    await visit('/resume');

    assert.equal(currentURL(), '/resume');

    await click('[data-test=language-picker-button]');
    await click('[data-test=language-picker-en-us]');

    assert
      .dom('[data-test=pdf-document]')
      .hasAttribute(
        'data',
        `/assets/resumes/${controller.mapResumeUrls.get('en-us')}.pdf`,
      );
    assert
      .dom('[data-test=pdf-document-download]')
      .hasAttribute(
        'href',
        `/assets/resumes/${controller.mapResumeUrls.get('en-us')}.pdf`,
      )
      .hasText(t('messages.download-pdf'));
    // assert.equal(currentURL(), '/resume');
  });

  test('it changes language to fr-fr', async function (assert) {
    const controller = this.owner.lookup('controller:resume');
    await visit('/resume');

    assert.equal(currentURL(), '/resume');

    await click('[data-test=language-picker-button]');
    await click('[data-test=language-picker-fr-fr]');

    assert
      .dom('[data-test=pdf-document]')
      .hasAttribute(
        'data',
        `/assets/resumes/${controller.mapResumeUrls.get('fr-fr')}.pdf`,
      );
    assert
      .dom('[data-test=pdf-document-download]')
      .hasAttribute(
        'href',
        `/assets/resumes/${controller.mapResumeUrls.get('fr-fr')}.pdf`,
      )
      .hasText(t('messages.download-pdf'));
  });
});

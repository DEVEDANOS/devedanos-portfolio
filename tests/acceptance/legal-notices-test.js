import { module, test } from 'qunit';
import { visit, currentURL, click /* pauseTest */ } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | Legal notices', function (hooks) {
  setupApplicationTest(hooks);

  test('clicking on nav button quote request redirects to index', async function (assert) {
    await visit('/legal-notices');
    assert.equal(currentURL(), '/legal-notices');

    await click('[data-test=nav-cta-button]');
    assert.equal(currentURL(), '/');

    assert
      .dom('[data-test=quote-request-link]')
      .exists({ count: 1 });
  });
});

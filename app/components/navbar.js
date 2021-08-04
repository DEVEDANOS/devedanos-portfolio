import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { later } from '@ember/runloop';

export default class NavbarComponent extends Component {
  @service router;

  changeMobileMenuVisibility = () => {
    const mobileMenu = document.querySelector('#mobile-menu');
    const buttonMobileMenuClosed = document.querySelector('.nav-main__button-mobile-menu--closed');
    const buttonMobileMenuOpened = document.querySelector('.nav-main__button-mobile-menu--opened');

    mobileMenu.classList.toggle('hidden');

    if (mobileMenu.classList.contains('hidden')) {
      buttonMobileMenuClosed.classList.toggle('hidden');
      return buttonMobileMenuOpened.classList.toggle('hidden');
    }
    buttonMobileMenuClosed.classList.toggle('hidden');
    return buttonMobileMenuOpened.classList.toggle('hidden');
  }

  @action
  async requestQuote (event) {
    event.preventDefault();

    if (this.router.currentURL !== '/') {
      await this.router.transitionTo('/');
      return later(this, () => {
        this.goToLink();
      }, 500);
    }
    this.goToLink();
  }

  goToLink () {
    const link = document.querySelector('[data-quote-request-link]');
    link.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  }
}

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
// import { later } from '@ember/runloop';
import { getLinkIntlCta } from 'devedanos-portfolio/utils/get-link-intl-cta';

export default class NavbarComponent extends Component {
  @service router;

  @service intl;

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
  async clickCta (event) {
    event.preventDefault();
    window.open(getLinkIntlCta(this.intl));
  }
}

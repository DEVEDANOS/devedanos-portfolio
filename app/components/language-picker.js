import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class LanguagePickerComponent extends Component {
  @service intl;
  @service router;

  get imageAltMessage () {
    return this.intl.t('navbar.nav-main.language-picker.button-image.alt', { language: this.intl.primaryLocale });
  }

  showLanguages = () => {
    const languagePicker = document.querySelector('.language-picker__dropdown');
    languagePicker.classList.toggle('hidden');
  }

  changeLanguage = async (event) => {
    const languagePicker = document.querySelector('.language-picker__dropdown');
    const language = event.target.getAttribute('data-value');

    this.router.transitionTo({ queryParams: { language } });
    // this.intl.setLocale([language]);
    // this.language = this.intl.locale[language];
    languagePicker.classList.add('hidden');
  }
}

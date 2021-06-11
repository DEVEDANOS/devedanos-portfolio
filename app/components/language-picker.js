import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class LanguagePickerComponent extends Component {
  @service intl;

  language = this.intl.locale;

  showLanguages = () => {
    const languagePicker = document.querySelector('.language-picker__dropdown');
    languagePicker.classList.toggle('hidden');
  }

  changeLanguage = (event) => {
    const languagePicker = document.querySelector('.language-picker__dropdown');
    const language = event.target.getAttribute('data-value');
    this.intl.setLocale([language]);
    this.language = this.intl.locale[0];
    languagePicker.classList.add('hidden');
  }
}

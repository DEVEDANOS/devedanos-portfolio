import Component from '@glimmer/component';

export default class NavbarComponent extends Component {
  toggleLinks () {
    const listLinks = document.querySelector('.nav-dropdown');
    listLinks.classList.toggle('hidden');
  }
}

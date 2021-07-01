import Component from '@glimmer/component';

export default class FormsContactComponent extends Component {
  tagName = 'form';
  classNames = ['contact-form'];

  submit = (event) => {
    event.preventDefault();
    alert('Form submited');
  }
}

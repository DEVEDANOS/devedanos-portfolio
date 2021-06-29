import Model, { attr } from '@ember-data/model';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  fullName: validator('presence', true),
  expeditorEmail: [
    validator('presence', true),
    validator('format', { type: 'email' }),
  ],
  message: [
    validator('presence', true),
    validator('length', {
      min: 20,
      max: 5000,
    }),
  ],
});

export default class EmailModel extends Model {
  @attr('string') fullName;
  @attr('string') expeditorEmail;
  @attr('string') message;
  @attr('string', { defaultValue: 'quote request from www.devedanos.com' }) object;
}

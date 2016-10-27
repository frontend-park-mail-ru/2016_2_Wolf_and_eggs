/**
 * Created by utrobin on 27.10.16.
 */
import Model from './Model';
import plural from '../plural';
import { jsonRequest } from '../libs/requests';

export default class User extends Model {

  constructor(attributes) {
    super(attributes);
    this.user = this.defaults;
  }

  get defaults() {
    return {
      name: 'anonymous',
      email: ''
    }
  }

  get url() {
    return '/api/login';
  }

  _comparePassword(formData) {
    if (formData.password1 !== undefined && formData.password1 !== formData.password2
      && formData.password1 !== '' && formData.password2 !== '') {
      return { value: false, message: 'Пароли не совпадают' };
    }

    return { value: true };
  }

  login(formData, addMessageError, addMessage) {
    const result = jsonRequest(this.url, formData);
    const obj = JSON.parse(result);

    if (typeof (obj.login) === 'undefined') {
      addMessage('', false);
      addMessageError(obj.reason, true);
    } else {
      const count = obj.amount;
      const name = obj.login;
      const message = `Привет, ${name}. Ты зашел ${count} ${plural(count, ['раз', 'раза', 'раз'], 'rus')}`;
      addMessageError('', false);
      addMessage(message, true);
    }
  }

  signup(formData, addMessageError, addMessage){
    const compare = this._comparePassword(formData);

    if (!compare.value) {
      addMessageError(compare.message, true);
      return;
    }

    if (formData.password1 !== undefined) {
      formData.password = formData.password1;
      delete formData.password1;
      delete formData.password2;
    }
  }

}

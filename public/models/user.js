/**
 * Created by utrobin on 27.10.16.
 */
import Model from './Model';
import plural from '../tools/plural';
import router from '../index';

export default class User extends Model {

  constructor(attributes) {
    super(attributes);
    this.user = this.defaults;

    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
  }

  get defaults() {
    return {
      login: 'anonymous',
      email: '',
      score: 0
    }
  }

  get urlLogin() {
    return '/api/login';
  }

  get urlSignup() {
    return '/api/signup';
  }

  _comparePassword(formData) {
    if (formData.password1 !== undefined && formData.password1 !== formData.password2
      && formData.password1 !== '' && formData.password2 !== '') {
      return { value: false, message: 'Пароли не совпадают' };
    }

    return { value: true };
  }

  login(formData, addMessageError, addMessage) {
    const result = this.send(this.urlLogin, formData, 'POST');
    const obj = JSON.parse(result);

    if (typeof (obj.login) === 'undefined') {
      addMessage('', false);
      addMessageError(obj.reason, true);
    } else {
      this.user.login = obj.login;
      this.user.email = obj.email;

      const count = obj.amount;
      const login = obj.login;
      const message = `Привет, ${login}. Ты зашел ${count} ${plural(count, ['раз', 'раза', 'раз'], 'rus')}`;
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

    const result = this.send(this.urlSignup, formData, 'POST');
    const obj = JSON.parse(result);

    if (typeof (obj.login) === 'undefined') {
      addMessage('', false);
      addMessageError(obj.reason, true);
    } else {
      this.user.login = obj.login;
      this.user.email = obj.email;

      router.go('/');
    }
  }

}

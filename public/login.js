import { plural, russianPluralRule } from './plural';
import { postRequest } from './libs/requests';

export default function onLoginSubmit(form) {
  const data = {
    login: form.elements.login.value,
    password: form.elements.password.value,
  };

  const result = postRequest('/api/login', data);
  const obj = JSON.parse(result);
  const count = obj.amount;
  const name = obj.login;

  window.welcome.innerHTML = `Привет, ${name}. Ты зашел ${count} ${plural(count,
    ['раз', 'раза', 'раз'], russianPluralRule)}`;
}

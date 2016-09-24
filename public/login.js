import { plural, russianPluralRule } from './plural';
import request from './libs/lib';

/*
 * function ajax() {
  var xhr = new XMLHttpRequest();

  var params = 'name=' + 'bgg' +
    '&surname=' + 'gfgfg';

  xhr.open("GET", '/users?' + params, true);

  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;

    if (xhr.status != 200) {
      alert(xhr.status + ': ' + xhr.statusText);
    } else {
      alert(xhr.responseText);
    }

  };
}*/

export default function onLoginSubmit(form) {
  const data = {
    user: form.elements.user.value,
    email: form.elements.email.value,
  };

  const result = request('/users', data);
  const obj = JSON.parse(result);
  const count = obj.count;
  const name = obj.name;

  window.welcome.innerHTML = `Привет, ${name}. Ты зашел ${count} ${plural(count,
    ['раз', 'раза', 'раз'], russianPluralRule)}`;
}

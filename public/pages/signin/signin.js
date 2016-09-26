import Form from '../../components/form/form';
import plural from '../../plural';
import { jsonRequest } from '../../libs/requests';

const form = new Form({
  el: document.createElement('div'),
  data: {
    title: 'Login',
    fields: [
      {
        name: 'login',
        type: 'text',
        label: 'Username',
      },
      {
        name: 'password',
        type: 'password',
        label: 'Password',
      },
    ],
    controls: [
      {
        text: 'Sign in',
        attrs: {
          type: 'submit',
        },
      },
    ],
  },
});

form.on('submit', (event) => {
  event.preventDefault();
  const formData = form.getFormData();

  const result = jsonRequest('/api/login', formData);
  const obj = JSON.parse(result);

  if (typeof (obj.login) === 'undefined') {
    document.querySelector('.ban').hidden = false;
  } else {
    const count = obj.amount;
    const name = obj.login;
    window.welcome.innerHTML = `Привет, ${name}. Ты зашел ${count} ${plural(count,
      ['раз', 'раза', 'раз'], 'rus')}`;
  }
});

const Signin = document.createElement('div');
Signin.appendChild(form.el);

const temp = document.createElement('div');
temp.innerHTML = `
  <div class="link-signup z-depth-1">
    <span>New to Protection? <a onclick="updatePage(1)">Create an account.</a></span>
  </div>
 `;
Signin.appendChild(temp);

export default Signin;

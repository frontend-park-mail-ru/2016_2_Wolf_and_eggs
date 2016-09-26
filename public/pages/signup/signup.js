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
        name: 'email',
        type: 'email',
        label: 'Email',
      },
      {
        name: 'password',
        type: 'password',
        label: 'Password',
      },
      {
        name: 'password',
        type: 'password',
        label: 'Repeat password',
      },
    ],
    controls: [
      {
        text: 'Sign up',
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

  const result = jsonRequest('/api/signup', formData);
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

const Signup = document.createElement('div');
Signup.appendChild(form.el);

export default Signup;

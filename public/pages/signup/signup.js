/**
 * Created by utrobin on 25.09.16.
 */
import Form from '../../components/form/form';
import { plural, russianPluralRule } from '../../plural';
import { postRequest } from '../../libs/requests';

let form = new Form({
  el: document.createElement('div'),
  data: {
    title: 'Login',
    fields: [
      {
        name: 'login',
        type: 'text',
        label: 'Username'
      },
      {
        name: 'email',
        type: 'email',
        label: 'Email'
      },
      {
        name: 'password',
        type: 'password',
        label: 'Password'
      },
      {
        name: 'password',
        type: 'password',
        label: 'Repeat password'
      }
    ],
    controls: [
      {
        text: 'Sign up',
        attrs: {
          type: 'submit'
        }
      }
    ]
  }
});

form.on('submit', event => {
  event.preventDefault();
  let formData = form.getFormData();
  console.log('Петух', formData);

  const result = postRequest('/api/signup', formData);
  const obj =  {};
  console.log(obj.login)

  if (typeof (obj.login) === 'undefined'){
    document.querySelector('.ban').hidden = false;
  }
  else{
    const count = obj.amount;
    const name = obj.login;
    window.welcome.innerHTML = `Привет, ${name}. Ты зашел ${count} ${plural(count,
      ['раз', 'раза', 'раз'], russianPluralRule)}`;
  }
});

let Signup = document.createElement('div');
Signup.appendChild(form.el);

export default Signup;
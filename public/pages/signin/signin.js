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
        name: 'password',
        type: 'password',
        label: 'Password'
      }
    ],
    controls: [
      {
        text: 'Sign in',
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


  const result = postRequest('/api/login', formData);
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

let Signin = document.createElement('div');
Signin.appendChild(form.el);

let temp = document.createElement('div');
temp.innerHTML = `
  <div class="link-signup z-depth-1">
    <span>New to Protection? <a onclick="updatePage(1)">Create an account.</a></span>
  </div>
 `
Signin.appendChild(temp);

export default Signin;
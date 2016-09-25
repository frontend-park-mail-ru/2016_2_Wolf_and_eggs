import Form from './components/form/form';

require('./css/reset.css');
require('./css/main.scss');


let loginPage = document.querySelector('.js-login');

let form = new Form({
  el: document.createElement('div'),
  data: {
    title: 'Login',
    fields: [
      {
        name: 'username',
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
  console.log('Петух', formData)
});

form.on('click', event => {

});

loginPage.appendChild(form.el);



import Form from '../../components/form/form';

const form = new Form({
  el: document.createElement('div'),
  data: {
    title: 'signup',
    url: '/api/signup',
    fields: [
      {
        name: 'login',
        type: 'text',
        label: 'Username',
        required: false,
      },
      {
        name: 'email',
        type: 'email',
        label: 'Email',
        required: true,
      },
      {
        name: 'password1',
        type: 'password',
        label: 'Password',
        required: true,
      },
      {
        name: 'password2',
        type: 'password',
        label: 'Repeat password',
        required: true,
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

function signup() {
  const formSignup = document.createElement('div');
  formSignup.appendChild(form.el);

  const temp1 = document.createElement('div');
  temp1.innerHTML = `
  <div class="link-signup z-depth-1">
    <span><a class="link1">Вернуться назад</a></span>
  </div>
 `;
  temp1.querySelector('.link1').addEventListener('click', () => { this.updatePage(0); });
  formSignup.appendChild(temp1);

  return formSignup;
}

export default signup;

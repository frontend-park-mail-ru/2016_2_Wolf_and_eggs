import Form from '../../components/form/form';

const form = new Form({
  el: document.createElement('div'),
  data: {
    title: 'login',
    url: '/api/login',
    fields: [
      {
        name: 'login',
        type: 'text',
        label: 'Username',
        required: true,
      },
      {
        name: 'password',
        type: 'password',
        label: 'Password',
        required: true,
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

function Signin() {
  let self = this;
  const formSignin = document.createElement('div');
  formSignin.appendChild(form.el);
  const temp = document.createElement('div');
  temp.innerHTML = `
  <div class="link-signup z-depth-1">
    <span>New to Outlive? <a class="link">Create an account.</a></span>
  </div>
 `;
  temp.querySelector('.link').addEventListener('click', () => { self.updatePage(1) });
  formSignin.appendChild(temp);
  return formSignin;
}

export default Signin;

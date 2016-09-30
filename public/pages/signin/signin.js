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

const Signin = document.createElement('div');
Signin.appendChild(form.el);

const temp = document.createElement('div');
temp.innerHTML = `
  <div class="link-signup z-depth-1">
    <span>New to Outlive? <a onclick="updatePage(1)">Create an account.</a></span>
  </div>
 `;
Signin.appendChild(temp);

export default Signin;

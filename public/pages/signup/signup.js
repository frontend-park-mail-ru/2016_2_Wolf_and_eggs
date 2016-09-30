import Form from '../../components/form/form';

const form = new Form({
  el: document.createElement('div'),
  data: {
    title: 'Login',
    fields: [
      {
        name: 'login',
        type: 'text',
        label: 'Username',
        required: false
      },
      {
        name: 'email',
        type: 'email',
        label: 'Email',
        required: true
      },
      {
        name: 'password1',
        type: 'password',
        label: 'Password',
        required: true
      },
      {
        name: 'password2',
        type: 'password',
        label: 'Repeat password',
        required: true
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

const Signup = document.createElement('div');
Signup.appendChild(form.el);

export default Signup;

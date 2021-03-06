import Form from '../../components/form/form';
import View from '../../modules/view';
import User from '../../models/user';

let user = new User();
const form = new Form({
  data: {
    title: 'signup',
    url: '/api/signup',
    fields: [
      {
        name: 'login',
        type: 'text',
        label: 'Username',
        required: true,
      },
      {
        name: 'email',
        type: 'email',
        label: 'Email',
        required: false,
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
  action: user.signup,
});

export default class Signup extends View {
  constructor() {
    super();
  }

  init() {
    form.renderTo(this._el);
    document.querySelector('.content').appendChild(this._el);
  }
}

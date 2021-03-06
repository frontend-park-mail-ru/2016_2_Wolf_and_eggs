import Form from '../../components/form/form';
import View from '../../modules/view';
import User from '../../models/user';

let user = new User();

const form = new Form({
  data: {
    title: 'login',
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
  action: user.login
});

export default class Signin extends View {
  constructor() {
    super();
  }

  init() {
    form.renderTo(this._el);
    document.querySelector('.content').appendChild(this._el);
  }

}

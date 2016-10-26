import Form from '../../components/form/form';
import View from '../../modules/view';

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

export default class Signin extends View {
  constructor() {
    super();
  }

  init() {
    this._el.appendChild(form.el);
    document.querySelector('.content').appendChild(this._el);
  }

}

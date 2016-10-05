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

function signin() {
  const formSignin = document.createElement('div');
  formSignin.appendChild(form.el);

  const temp1 = document.createElement('div');
  temp1.innerHTML = `
  <div class="link-signup z-depth-1">
    <span>New to Outlive? <a class="link1">Create an account.</a></span>
  </div>
 `;
  temp1.querySelector('.link1').addEventListener('click', () => { this.updatePage(1); });
  formSignin.appendChild(temp1);

  const temp2 = document.createElement('div');
  temp2.innerHTML = `
  <div class="link-signup z-depth-1">
    <span><a class="link2">Go game</a></span>
  </div>
 `;
  temp2.querySelector('.link2').addEventListener('click', () => { this.updatePage(2); });
  formSignin.appendChild(temp2);

  return formSignin;
}

export default signin;

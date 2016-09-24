import onLoginSubmit from './login';

if (typeof (window) !== 'undefined') {
  window.onLoginSubmit = onLoginSubmit;
}

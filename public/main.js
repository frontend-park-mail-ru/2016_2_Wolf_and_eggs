import onLoginSubmit from './login';

require('./css/reset.css');
require('./css/main.scss');

if (typeof (window) !== 'undefined') {
  window.onLoginSubmit = onLoginSubmit;
}

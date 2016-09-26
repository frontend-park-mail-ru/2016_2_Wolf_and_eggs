import Signin from './pages/signin/signin';
import Signup from './pages/signup/signup';

require('./css/reset.css');
require('./css/main.scss');

window.pageIndex = 0;

window.getPageContent = function () {
  switch (pageIndex) {
    case 0:
      return Signin;
    case 1:
      return Signup;
    case 2:
      return 'gfgfg';
    default:
      return 'Опачки а мы баг словили';
  }
};

window.page = document.querySelector('.js-login');

window.updatePage = function (index) {
  page.querySelector('div').remove();
  pageIndex = index;
  page.appendChild(getPageContent());
};

page.appendChild(getPageContent());

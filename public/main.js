import Signin from './pages/signin/signin';
import Signup from './pages/signup/signup';

require('./css/reset.css');
require('./css/main.scss');

function Main() {
  this._pageIndex = 0;
  this._page = document.querySelector('.js-login');
}

Main.prototype.render = function() {
  this._page.appendChild(this._getPageContent());
};

Main.prototype._getPageContent = function() {
  switch (this._pageIndex) {
    case 0:
      return Signin.apply(this);
    case 1:
      return Signup.apply(this);
    case 2:
      return 'gfgfg';
    default:
      return 'Опачки а мы баг словили';
  }
};

Main.prototype.updatePage = function(index) {
    if (this._page.querySelector('div') === null)
      return;
    else {
    this._page.querySelector('div').remove();
    this._pageIndex = index;
    this._page.appendChild(this._getPageContent());
  }
};

var index = new Main();
index.render();

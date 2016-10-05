import signin from './pages/signin/signin';
import signup from './pages/signup/signup';
import game from './pages/game/game';

require('./css/reset.css');
require('./css/main.scss');

class Main {
  constructor() {
    this._pageIndex = 0;
    this._page = document.querySelector('.js-login');
  }

  _getPageContent() {
    switch (this._pageIndex) {
      case 0:
        return signin.apply(this);
      case 1:
        return signup.apply(this);
      case 2:
        return game();
      default:
        return 'Опачки а мы баг словили';
    }
  }

  updatePage(index) {
    if (this._page.querySelector('div') === null) {
      return;
    }

    this._page.querySelector('div').remove();
    this._pageIndex = index;

    const temp = this._getPageContent();
    if (temp !== undefined) {
      this._page.appendChild(this._getPageContent());
    }
  }

  render() {
    this._page.appendChild(this._getPageContent());
  }
}

const index = new Main();
index.render();

export default index;
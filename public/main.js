import signin from './views/signin/signin';
import signup from './views/signup/signup';
import game from './views/game/game';

import Router from './modules/router';
import Signin from './views/signin/signin';
// import Signup from './views/signup';

import './css/reset.css';
import './css/main.scss';

  // TIP: роуты нужно указывать от наиболее специфичного к наименее специфичному
  // З.Ы. чтобы более ранние роуты не были префиксами более поздних ;]
  (new Router)
    .addRoute('/', Signin)
    .start();

// class Main {
//   constructor() {
//     this._pageIndex = 0;
//     this._page = document.querySelector('.js-login');
//   }
//
//   _getPageContent() {
//     switch (this._pageIndex) {
//       case 0:
//         return signin.apply(this);
//       case 1:
//         return signup.apply(this);
//       case 2:
//         return game();
//       default:
//         return 'Опачки а мы баг словили';
//     }
//   }
//
//   updatePage(index) {
//     if (this._page.querySelector('div') === null) {
//       return;
//     }
//
//     this._page.querySelector('div').remove();
//     this._pageIndex = index;
//
//     const temp = this._getPageContent();
//     if (temp !== undefined) {
//       this._page.appendChild(this._getPageContent());
//     }
//   }
//
//   render() {
//     this._page.appendChild(this._getPageContent());
//   }
// }
//
// const index = new Main();
// index.render();
//
// export default index;

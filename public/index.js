import Router from './modules/router';
import Signin from './views/signin/signin';
import Signup from './views/signup/signup';
import Main from './views/main/main';
import Game from './views/game/game';

import './css/reset.css';
import './css/style.scss';

(new Router)
  .addRoute('/game', Game)
  .addRoute('/signup', Signup)
  .addRoute('/signin', Signin)
  .addRoute('/', Main)
  .start();


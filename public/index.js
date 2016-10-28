import Router from './modules/router';
import Signin from './views/signin/signin';
import Signup from './views/signup/signup';
import Scoreboard from './views/scoreboard/scoreboard';
import Main from './views/main/main';
import Game from './views/game/game';

import './css/reset.css';
import './css/style.scss';

const router = new Router();

router
  .addRoute('/game', Game)
  .addRoute('/scoreboard', Scoreboard)
  .addRoute('/signup', Signup)
  .addRoute('/signin', Signin)
  .addRoute('/', Main)
  .start();

export default router;

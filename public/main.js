import signin from './views/signin/signin';
import signup from './views/signup/signup';
import game from './views/game/game';

import Router from './modules/router';
import Signin from './views/signin/signin';
import Signup from './views/signup/signup';

import './css/reset.css';
import './css/main.scss';

// TIP: роуты нужно указывать от наиболее специфичного к наименее специфичному
// З.Ы. чтобы более ранние роуты не были префиксами более поздних ;]
(new Router)
  .addRoute('/signup', Signup)
  .addRoute('/', Signin)
  .start();


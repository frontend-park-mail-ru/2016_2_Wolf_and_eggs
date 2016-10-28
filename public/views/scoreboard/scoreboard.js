import View from '../../modules/view';
import Button from '../../components/newButton/button'
import collectionUser from '../../models/collectionUser';

import path from '../../tools/getPath';

export default class Scoreboard extends View {
  constructor() {
    super();
  }

  init() {
    let users = new collectionUser();
    users.getUsers();

    this._el.className = 'main';
    this._el.innerHTML = window.fest[path + 'views/main/main.tmpl']();


    document.querySelector('.content').appendChild(this._el);
  }

}

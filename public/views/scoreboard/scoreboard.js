import View from '../../modules/view';
import Button from '../../components/newButton/button'
import collectionUser from '../../models/collectionUser';

import './main.tmpl.xml';
import path from '../../tools/getPath';

export default class Scoreboard extends View {
  constructor() {
    super();
  }

  init() {
    let users = new collectionUser();
    let data = users.getUsers();

    this._el.className = 'scoreboard';
    this._el.innerHTML = window.fest[path + 'views/scoreboard/scoreboard.tmpl'](data);


    document.querySelector('.content').appendChild(this._el);
  }

}

import View from '../../modules/view';
import Button from '../../components/newButton/button'
import collectionUser from '../../models/collectionUser';

import './scoreboard.tmpl.xml';
import path from '../../tools/getPath';

export default class Scoreboard extends View {
  constructor() {
    super();
  }

  init() {
    let users = new collectionUser();
    let data = users.getUsers();

    console.log(data[0].User.user.login);
    this._el.className = 'scoreboard';
    this._el.innerHTML = window.fest[path + 'views/scoreboard/scoreboard.tmpl'](data);


    document.querySelector('.content').appendChild(this._el);
  }

}

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
    // let users = new collectionUser();
    // let data = users.getUsers();

    let button1 = new Button('Single Player', {style: 'dart'});

    let ar = [{user: {login: 'gfgfgfgf'}}, {user: {login: 'гешпкоп', id: 'ffgfg', score: 'gfgf'}}];




    this._el.className = 'scoreboard';
    this._el.innerHTML = window.fest[path + 'views/scoreboard/scoreboard.tmpl'](ar);


    document.querySelector('.content').appendChild(this._el);
  }

}

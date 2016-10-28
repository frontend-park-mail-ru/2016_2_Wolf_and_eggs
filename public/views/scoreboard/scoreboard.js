import View from '../../modules/view';
import Button from '../../components/newButton/button'
import collectionUser from '../../models/collectionUser';

import './scoreboard.tmpl.xml';
import './users.tmpl.xml';
import path from '../../tools/getPath';

export default class Scoreboard extends View {
  constructor() {
    super();
    this.users = new collectionUser();

    // this.addUsers = this.addUsers.bind(this);
  }

  addUsers() {
    let {data, remainingPages = 10, numberPage} = this.users.getUsers();

    if (remainingPages <= 0) {
      this._el.querySelector('.button').setAttribute('style', 'display: none;');
    }

    data.numberPage = (numberPage - 2) * 10 + 1;
    this._el.querySelector('.scoreboard__table').innerHTML += window.fest[path + 'views/scoreboard/users.tmpl'](data);
  }

  init() {
    this._el.className = 'scoreboard';
    this._el.innerHTML = window.fest[path + 'views/scoreboard/scoreboard.tmpl']();
    this.addUsers();

    // let data = [{user: {login: 'gfgfgfgf'}}, {user: {login: 'гешпкоп', id: 'ffgfg', rating: 'gfgf'}}];

    let button1 = new Button('Single Player', {style: 'dart'});
    button1.on('click', this.addUsers.bind(this));

    this._el.querySelector('.scoreboard').appendChild(button1.render());
    document.querySelector('.content').appendChild(this._el);
  }

}

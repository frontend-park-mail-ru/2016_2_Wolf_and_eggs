/**
 * Created by utrobin on 25.10.16.
 */
import View from '../../modules/view';
import Button from '../../components/newButton/button'

import './main.scss';
import './main.tmpl.xml';
import path from '../../tools/getPath';


export default class Main extends View {
  constructor() {
    super();
  }

  init() {
    this._el.className = 'main';
    this._el.innerHTML = window.fest[path + 'views/main/main.tmpl']();

    let button1 = new Button('Single Player', {style: 'dart'});
    button1.on('click', this.showGame.bind(this));

    let button2 = new Button('Sign in', {style: 'dart'});
    button2.on('click', this.showSignin.bind(this));

    let button3 = new Button('Sign up', {style: 'dart'});
    button3.on('click', this.showSignup.bind(this));

    this._el.querySelector('.main__menu').appendChild(button1.render());
    this._el.querySelector('.main__menu').appendChild(button2.render());
    this._el.querySelector('.main__menu').appendChild(button3.render());

    document.querySelector('.content').appendChild(this._el);
  }

  showSignin() {
    this.router.go('/signin');
  }

  showSignup() {
    this.router.go('/signup');
  }

  showGame() {
    this.router.go('/game');
  }

}

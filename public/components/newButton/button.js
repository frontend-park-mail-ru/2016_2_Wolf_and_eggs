/**
 * Created by utrobin on 25.10.16.
 */
import Block from '../block/block';

import './button.scss';
import  './button.tmpl.xml';
import path from '../../tools/getPath';

export default class Button extends Block {
  constructor(text, options) {
    super('div', options);
    this.text = text;
    this.init();
  }

  init() {
    this._el.classList.add('button');
  }

  render() {
    if (this._options.style === 'dart') {
      this._el.innerHTML = window.fest[path + 'components/newButton/button.tmpl'](this.text);
      return this._el;
    }
    else {
      return this._el;
    }
  }

}

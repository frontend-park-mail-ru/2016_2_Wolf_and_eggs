import Block from '../block/block';

class Input extends Block {
  constructor(options) {
    super('input', options);
    this._el.classList.add('input');
  }

  getValue() {
    return this._el.value;
  }
}
window.Input = Input;

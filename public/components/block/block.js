export default class Block {
  constructor(name, options = {}) {
    this._el = document.createElement(name);
    this.setAttrs(options.attrs);
    this._options = options;
  }

  setAttrs(attrs = {}) {
    Object.keys(attrs).forEach(name => {
      this._el.setAttribute(name, attrs[name]);
    });
  }

  renderTo(element) {
    element.appendChild(this._el);
  }

  _get() {
    return this._el;
  }

  on(event, callback) {
    this._el.addEventListener(event, callback);
  }

  stop(event, callback) {
    this._el.removeEventListener(event, callback);
  }

  append(element) {
    this._el.appendChild(element);
  }
}

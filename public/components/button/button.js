export default class Button {
  constructor(options) {
    this.text = options.text;
    this.attrs = options.attrs || [];
    this.el = document.createElement('button');
  }

  setAttrs(attrs) {
    Object.keys(attrs).forEach((name) => {
      this.el.setAttribute(name, attrs[name]);
    });
  }

  toString() {
    return this.el.outerHTML;
  }

  render() {
    this.el.innerHTML = this.text;
    this.el.classList.add('waves-effect', 'waves-light', 'btn', 'ui-button');
    this.setAttrs(this.attrs);
    return this;
  }
}

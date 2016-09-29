import Button from '../button/button';

export default class Form {

  constructor(options = { data: {} }) {
    this.data = options.data;
    this.el = options.el;
    this.count = 0;
    this.render();
  }

  getFields() {
    const { fields = [] } = this.data;

    return fields.map((field) => {
      let temp = '';
      if (this.count === 0) {
        temp = 'autofocus';
      }
      this.count += 1;
      return `
        <div class="input-field">
          <label for="${field.name}">${field.label}</label>
          <input type="${field.type}" tabindex="${this.count}" onblur="${Form.event()}" name="${field.name}" ${temp}>
        </div>
      `;
    }).join(' ');
  }

  updateHtml() {
    this.el.innerHTML = `
    <form class="ui-form z-depth-1">
      <div>
        ${this.getFields()}
      </div>
      <div class="js-controls">
      </div>
    <form>
  `;
  }

  installControls() {
    const { controls = [] } = this.data;

    controls.forEach((data) => {
      const control = new Button({ text: data.text }).render();
      this.el.querySelector('.js-controls').appendChild(control.el);
    });
  }

  on(type, callback) {
    this.el.addEventListener(type, callback);
  }

  // FIXME made it static. Dont know what it does((.
  static event(e) {
    console.log(e, 'gfgfg');
  }

  addEvents() {
    const form = this.el.querySelector('form');
    const elements = form.elements;

    Object.keys(elements).forEach((element) => {
      if (!elements[element].name) {
        return;
      }
      elements[element].addEventListener('focus', () => {
        console.log('gfgfg');
      });
    });
  }

  getFormData() {
    const form = this.el.querySelector('form');
    const elements = form.elements;
    const fields = {};

    Object.keys(elements).forEach((element) => {
      const name = elements[element].name;
      const value = elements[element].value;

      if (!name) {
        return;
      }

      fields[name] = value;
    });

    return fields;
  }

  render() {
    this.updateHtml();
    this.installControls();
    this.addEvents();
  }
}

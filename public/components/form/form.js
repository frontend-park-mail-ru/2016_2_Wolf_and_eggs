/**
 * Created by utrobin on 25.09.16.
 */
import Button from '../button/button';

export default class Form {
  /**
   * Конструктор класса Form
   */
  constructor(options = {data: {}}) {
    this.data = options.data;
    this.el = options.el;
    this.count = 0;
    this.render();
  }

  /**
   * Вернуть поля формы
   * @return {string}
   */

  _getFields() {
    let {fields = []} = this.data;

    return fields.map(field => {
      let temp = '';
      if (this.count === 0)
        temp = 'autofocus';
      this.count++;
      return `
        <div class="input-field">
          <label for="${field.name}">${field.label}</label>
          <input type="${field.type}" tabindex="${this.count}" onblur="${this.event()}" name="${field.name}" ${temp}>
        </div>
      `
    }).join(' ')
  }

  /**
   * Обновить html компонента
   */
  _updateHtml() {
    this.el.innerHTML = `
    <form class="ui-form z-depth-1">
      <div>
        ${this._getFields()}
      </div>
      <div class="js-controls">
      </div>
    <form>
  `;
  }

  /**
   * Вставить управляющие элементы в форму
   */
  _installControls() {
    let {controls = []} = this.data;

    controls.forEach(data => {
      let control = new Button({text: data.text}).render();
      this.el.querySelector('.js-controls').appendChild(control.el);
    });
  }

  /**
   * Подписка на событие
   * @param {string} type - имя события
   * @param {function} callback - коллбек
   */
  on(type, callback) {
    this.el.addEventListener(type, callback);
  }

  event(e) {
    console.log(e, 'gfgfg');
  }

  addEvents() {
    let form = this.el.querySelector('form');
    let elements = form.elements;

    Object.keys(elements).forEach(element => {
      if (!elements[element].name) {
        return;
      }
      elements[element].addEventListener("focus", function() {
        console.log('gfgfg')
      });
    });
  }

  getFormData() {
    let form = this.el.querySelector('form');
    let elements = form.elements;
    let fields = {};

    Object.keys(elements).forEach(element => {
      let name = elements[element].name;
      let value = elements[element].value;

      if (!name) {
        return;
      }

      fields[name] = value;
    });

    return fields;
  }

  render() {
    this._updateHtml()
    this._installControls();
    this.addEvents();
  }
}

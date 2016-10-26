import Button from '../button/button';
import plural from '../../plural';
import index from '../../index';
import { jsonRequest } from '../../libs/requests';

export default class Form {

  constructor(options = { data: {} }) {
    this.data = options.data;
    this.el = options.el;
    this.requeredFields = {};
    this.render();
  }

  _addError() {
    const formData = this._getFormData();
    const fields = Object.keys(this.requeredFields);

    for (let i = 0; i < fields.length; i += 1) {
      const temp = fields[i];
      if (this.requeredFields[temp] === true && formData[temp] === '') {
        this.el.querySelector(`.${temp}P`).className = `input-field ${temp}P error`;
      }
    }
  }

  _comparePassword() {
    const formData = this._getFormData();

    if (formData.password1 !== undefined && formData.password1 !== formData.password2
                                            && formData.password1 !== '' && formData.password2 !== '') {
      this.el.querySelector('.ui-error').innerHTML = 'Пароли не совпадают';
      this.el.querySelector('.ui-error').style.display = 'block';
      return false;
    }

    this.el.querySelector('.ui-error').innerHTML = '';
    this.el.querySelector('.ui-error').style.display = 'none';
    return true;
  }

  _onBlur(event) {
    this._comparePassword();

    const temp = event.target;
    if (temp.value === '' && this.requeredFields[temp.name] === true) {
      this.el.querySelector(`.${temp.name}P`).className = `input-field ${temp.name}P error`;
    }
  }

  _onFocus(event) {
    console.log(this);

    const temp = event.target.name;
    if (this.el.querySelector(`.${temp}P`).className !== `input-field ${temp}`) {
      this.el.querySelector(`.${temp}P`).className = `input-field ${temp}P`;
    }
  }

  _checkFill() {
    const formData = this._getFormData();
    return Object.keys(formData).every((element) => {
      if (formData[element] === '' && this.requeredFields[element] === true) {
        return false;
      }

      return true;
    });
  }

  _onSubmit() {
    this.el.addEventListener('submit', (event) => {
      event.preventDefault();

      const compare = this._comparePassword();

      if (this._checkFill() === false || compare === false) {
        this._addError();
        return;
      }

      const formData = this._getFormData();

      if (formData.password1 !== undefined) {
        formData.password = formData.password1;
        delete formData.password1;
        delete formData.password2;
      }

      const result = jsonRequest(this.data.url, formData);
      const obj = JSON.parse(result);

      if (typeof (obj.login) === 'undefined') {
        this.el.querySelector('.ui-message').innerHTML = `<span class="ui-message_error">${obj.reason}</span>`;
        this.el.querySelector('.ui-message').setAttribute('style', 'display: block;')
      } else {
        if (this.data.title === 'login') {
          const count = obj.amount;
          const name = obj.login;

          this.el.querySelector('.ui-message').innerHTML = `
            <span class="ui-message_normal">
              Привет, ${name}. Ты зашел ${count} ${plural(count, ['раз', 'раза', 'раз'], 'rus')}
            </span>
          `;
          this.el.querySelector('.ui-message').setAttribute('style', 'display: block;')
        } else {
          index.updatePage(0);
        }
      }
    });
  }

  _getFormData() {
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

  on(type, callback) {
    this.el.addEventListener(type, callback);
  }

  _addEvents() {
    this._onSubmit();

    const form = this.el.querySelector('form');
    const elements = form.elements;

    Object.keys(elements).forEach((element) => {
      if (!elements[element].name) {
        return;
      }
      elements[element].addEventListener('blur', this._onBlur.bind(this));
      elements[element].addEventListener('focus', this._onFocus.bind(this));
    });
  }

  _getFieldsRequered() {
    const { fields = [] } = this.data;

    fields.forEach((field) => {
      if (field.required === true) {
        this.requeredFields[field.name] = true;
      } else {
        this.requeredFields[field.name] = false;
      }
    });
  }

  _installControls() {
    const { controls = [] } = this.data;

    controls.forEach((data) => {
      const control = new Button({ text: data.text }).render();
      this.el.querySelector('.js-controls').appendChild(control.el);
    });
  }

  _getFields() {
    const { fields = [] } = this.data;

    return fields.map((field) => {
      return `
        <div class="input-field ${field.name}P">
          <label for="${field.name}">${field.label}</label>
          <input type="${field.type}" tabindex="${this.count}" name="${field.name}">
          <i>This field is required</i>
        </div>
      `;
    }).join(' ');
  }

  _updateHtml() {
    this.el.innerHTML = `
    <div class="ui-message z-depth-1"></div>
    <div class="ui-error z-depth-1"></div>
    <form class="ui-form z-depth-1">
      <div>
        ${this._getFields()}
      </div>
      <div class="js-controls">
      </div>
    <form>
  `;
  }

  render() {
    this._updateHtml();
    this._installControls();
    this._getFieldsRequered();
    this._addEvents()
  }
}

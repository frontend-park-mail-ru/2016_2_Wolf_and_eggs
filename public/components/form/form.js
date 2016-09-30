import Button from '../button/button';
import plural from '../../plural';
import { jsonRequest } from '../../libs/requests';

export default class Form {

  constructor(options = { data: {} }) {
    this.data = options.data;
    this.el = options.el;
    this.count = 0;
    this.requeredFields = {};
    this.initialRequeredFields = {};
    this.render();
  }

  _getFieldsRequered() {
    const { fields = [] } = this.data;
    const FieldsRequered = {};

    fields.forEach((field) => {
      if (field.required === true) {
        FieldsRequered[field.name] = false;
      } else {
        FieldsRequered[field.name] = true;
      }
    });

    this.requeredFields = FieldsRequered;

    for (let i = 0; i < Object.keys(this.requeredFields).length; i += 1) {
      this.initialRequeredFields[i] = this.requeredFields[i];
    }
  }

  _isFilled() {
    for (let i = 0; i < Object.keys(this.requeredFields).length; i += 1) {
      if (this.requeredFields[Object.keys(this.requeredFields)[i]] === false) {
        return false;
      }
    }
    return true;
  }

  _getFields() {
    const { fields = [] } = this.data;

    return fields.map((field) => {
      // let temp = '';
      // if (this.count === 0) {
      //   temp = 'autofocus';
      // }
      this.count += 1;
      return `
        <div class="input-field" name="${field.name}.P">
          <label for="${field.name}">${field.label}</label>
          <input type="${field.type}" tabindex="${this.count}" name="${field.name}">
          <i>This field is requered</i>
        </div>
      `;
    }).join(' ');
  }

  _updateHtml() {
    this.el.innerHTML = `
    <div class="ui-error z-depth-1">Пароли не совпадают</div>
    <form class="ui-form z-depth-1">
      <div>
        ${this._getFields()}
      </div>
      <div class="js-controls">
      </div>
    <form>
  `;
  }

  _installControls() {
    const { controls = [] } = this.data;

    controls.forEach((data) => {
      const control = new Button({ text: data.text }).render();
      this.el.querySelector('.js-controls').appendChild(control.el);
    });
  }

  addError() {
    for (let i = 0; i < Object.keys(this.requeredFields).length; i += 1) {
      const temp = Object.keys(this.requeredFields)[i];
      if (this.requeredFields[temp] === false) {
        if (document.getElementsByName(`${temp}.P`)[0].className !== 'input-field error') {
          document.getElementsByName(`${temp}.P`)[0].className += ' error';
        }
      }
    }
  }

  _comparePassword() {
    if (this.requeredFields.password2 === undefined) {
      return true;
    }
    let temp = false;

    const pas1 = document.getElementsByName('password1')[0].value;
    const pas2 = document.getElementsByName('password2')[0].value;

    if (pas1 === pas2) {
      document.getElementsByClassName('ui-error')[0].style.display = 'none';
      temp = true;
    } else {
      document.getElementsByClassName('ui-error')[0].style.display = 'block';
    }

    return temp;
  }

  _onChange(event) {
    const temp = event.target.name;

    if (event.target.value === '' && this.initialRequeredFields[temp] === false) {
      this.requeredFields[temp] = false;
    }

    if (event.target.value === '' && this.requeredFields[temp] === false) {
      if (document.getElementsByName(`${temp}.P`)[0].className !== 'input-field error') {
        this.requeredFields[temp] = false;
        document.getElementsByName(`${temp}.P`)[0].className += ' error';
      }
    } else {
      this.requeredFields[temp] = true;
    }
  }

  _onBlur(event) {
    const temp = event.target.name;

    if (event.target.value === '' && this.initialRequeredFields[temp] === false) {
      this.requeredFields[temp] = false;
    }

    if (event.target.value === '' && this.requeredFields[temp] === false) {
      if (document.getElementsByName(`${temp}.P`)[0].className !== 'input-field error') {
        this.requeredFields[temp] = false;
        document.getElementsByName(`${temp}.P`)[0].className += ' error';
      }
    } else {
      this.requeredFields[temp] = true;
    }
  }

  static _onFocus(event) {
    const temp = event.target.name;
    if (document.getElementsByName(`${temp}.P`)[0].className !== 'input-field') {
      document.getElementsByName(`${temp}.P`)[0].className += 'input-field';
    }
  }

  _onSubmit() {
    this.el.addEventListener('submit', (event) => {
      event.preventDefault();

      const check = this._comparePassword(event.target);

      if (this._isFilled() === false) {
        this.addError();
        return;
      }

      if (check === false) {
        return;
      }

      const formData = this._getFormData();
      const result = jsonRequest(this.data.url, formData);
      const obj = JSON.parse(result);

      if (typeof (obj.login) === 'undefined') {
        document.querySelector('.ban').innerHTML = obj.reason;
        document.querySelector('.ban').hidden = false;
      } else {
        if (this.data.title === 'login') {
          const count = obj.amount;
          const name = obj.login;

          window.welcome.innerHTML = `Привет, ${name}. Ты зашел ${count} ${plural(count,
            ['раз', 'раза', 'раз'], 'rus')}`;
        } else {
          window.updatePage(0);
        }
      }
    });
  }

  on(type, callback) {
    this.el.addEventListener(type, callback);
  }

  addEvents() {
    this._onSubmit();

    const form = this.el.querySelector('form');
    const elements = form.elements;

    Object.keys(elements).forEach((element) => {
      if (!elements[element].name) {
        return;
      }
      elements[element].addEventListener('blur', this._onBlur.bind(this));
      elements[element].addEventListener('change', this._onChange.bind(this));
      elements[element].addEventListener('focus', this._onFocus);
    });
  }

  _getFormData() {
    const form = this.el.querySelector('form');
    const elements = form.elements;
    const fields = {};

    Object.keys(elements).forEach((element) => {
      let name = elements[element].name;
      const value = elements[element].value;

      if (name === 'password1' || name === 'password2') {
        name = 'password';
      }

      if (!name) {
        return;
      }

      fields[name] = value;
    });

    return fields;
  }

  render() {
    this._updateHtml();
    this._getFieldsRequered();
    this._installControls();
    this.addEvents();
  }
}

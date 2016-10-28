import Button from '../button/button';
import Block from '../block/block';

import './form.tmpl.xml';
import path from '../../tools/getPath';

export default class Form extends Block {

  constructor(options = { data: {} }) {
    super('div');
    this.data = options.data;
    this.action = options.action;
    this.requeredFields = {};
    this.render();
  }

  _addClassError() {
    const formData = this._getFormData();
    const fields = Object.keys(this.requeredFields);

    for (let i = 0; i < fields.length; i += 1) {
      const temp = fields[i];
      if (this.requeredFields[temp] === true && formData[temp] === '') {
        this._el.querySelector(`.${temp}P`).className = `input-field ${temp}P error`;
      }
    }
  }

  addMessageError(message, value) {
    if (value) {
      this._el.querySelector('.ui-error').innerHTML = message;
      this._el.querySelector('.ui-error').style.display = 'block';
    } else {
      this._el.querySelector('.ui-error').innerHTML = '';
      this._el.querySelector('.ui-error').style.display = 'none';
    }
  }

  addMessage(message, value) {
    if (value) {
      this._el.querySelector('.ui-message').innerHTML = message;
      this._el.querySelector('.ui-message').style.display = 'block';
    } else {
      this._el.querySelector('.ui-message').innerHTML = '';
      this._el.querySelector('.ui-message').style.display = 'none';
    }
  }

  _onBlur(event) {
    const temp = event.target;
    if (temp.value === '' && this.requeredFields[temp.name] === true) {
      this._el.querySelector(`.${temp.name}P`).className = `input-field ${temp.name}P error`;
    }
  }

  _onFocus(event) {
    const temp = event.target.name;
    if (this._el.querySelector(`.${temp}P`).className !== `input-field ${temp}`) {
      this._el.querySelector(`.${temp}P`).className = `input-field ${temp}P`;
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
    this._el.addEventListener('submit', (event) => {
      event.preventDefault();

      if (this._checkFill() === false) {
        this._addClassError();
        return;
      }

      const formData = this._getFormData();
      this.action(formData, this.addMessageError.bind(this), this.addMessage.bind(this));
    });
  }

  _getFormData() {
    const form = this._el.querySelector('form');
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

  _addEvents() {
    this._onSubmit();

    const form = this._el.querySelector('form');
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
      this._el.querySelector('.js-controls').appendChild(control.el);
    });
  }

  /*eslint-disable*/
  _getFields() {
    const { fields = [] } = this.data;

    return fields.map((field) => {
      return `<div class="input-field ${field.name}P" >
        <label for="${field.name}">${field.label}</label>
        <input type="${field.type}" tabindex="${this.count}" name="${field.name}">
        <i>This field is required</i>
        </div>
      `;
    }).join(' ');
  }
  /*eslint-enable*/

  _updateHtml() {
    this._el.innerHTML = window.fest[`${path}components/form/form.tmpl`]();
    this._el.querySelector('.fields').innerHTML = this._getFields();
  }

  render() {
    this._updateHtml();
    this._installControls();
    this._getFieldsRequered();
    this._addEvents();
  }

}

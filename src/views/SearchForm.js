import throttle from '../lib/throttle';

export default class SearchForm {
  constructor({placeholderText, submitText, onSearch}) {
    this._setupElements(placeholderText, submitText);
    this._setupListeners(onSearch);
  }

  _setupElements(placeholderText, submitText) {
    const form = document.createElement('form');
    this._elements = {form};

    form.classList.add('search-form');
    form.innerHTML = `
      <input class="search-input" type="text" placeholder="${placeholderText}"/>
      <button class="search-submit-btn" disabled type="submit">${submitText}</button>
    `;

    this._elements.input = form.querySelector('.search-input');
    this._elements.submitBtn = form.querySelector('.search-submit-btn');
  }

  _setupListeners(onSearch) {
    this._inputEventHandler = throttle(this._handleValueChange, 250, this);
    this._elements.input.addEventListener('input', this._inputEventHandler);

    this._submitEventHandler = (event) => this._handleSubmit(onSearch, event);
    this._elements.form.addEventListener('submit', this._submitEventHandler);
  }

  _destroyListeners() {
    this._elements.input.removeEventListener('input', this._inputEventHandler);
    this._elements.form.removeEventListener('submit', this._submitEventHandler);
  }

  _handleValueChange(event) {
    this._elements.submitBtn.disabled = event.target.value.length === 0;
  }

  _handleSubmit(onSearch, event) {
    event.preventDefault();
    event.stopPropagation();
    
    const {input} = this._elements;

    if (input.value.length === 0) return;

    onSearch(input.value);
  }

  getElement() {
    return this._elements.form;
  }

  destroy() {
    this._elements.form.remove();
    this._destroyListeners();
    this._elements = null;
  }
}

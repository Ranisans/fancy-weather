import createElement from './createElement';

class TranslatableElement {
  constructor(type, classes) {
    this.element = createElement(type, classes);
  }

  setValue(value) {
    this.value = value;
  }

  translate(lang) {
    this.element.innerText = this.value[lang];
  }
}

export default TranslatableElement;

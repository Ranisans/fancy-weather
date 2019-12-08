import TranslatableElement from './translatableElement';

class SearchInput extends TranslatableElement {
  constructor(classes) {
    super('input', classes);
    this.element.type = 'text';
  }

  translate(lang) {
    this.element.placeholder = this.value(lang);
  }
}

export default SearchInput;

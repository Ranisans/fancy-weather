import TranslatableElement from './translatableElement';

class WeatherType extends TranslatableElement {
  constructor(classes) {
    super('span', classes);
  }

  setDict(dict) {
    this.dict = dict;
  }

  setValue(value) {
    this.value = this.dict[value];
  }
}

export default WeatherType;

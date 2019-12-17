import createElement from './createElement';
import { measuringScale } from '../constants';

class TemperatureElement {
  constructor(classes) {
    this.element = createElement('span', classes);
    this.currentScale = measuringScale.C;
  }

  setValue(value) {
    this.value = value;
    this.element.innerHTML = value;
  }
}

export default TemperatureElement;

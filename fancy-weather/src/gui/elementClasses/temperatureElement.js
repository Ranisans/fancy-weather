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

  changeTheScale(scale) {
    if (scale === this.currentScale) { return; }

    if (this.currentScale === measuringScale.C) {
      this.setValue(Math.floor(((this.value - 32) * 5) / 9));
      this.currentScale = measuringScale.F;
    } else {
      this.setValue(Math.floor((this.value * 9) / 5 + 32));
      this.currentScale = measuringScale.C;
    }
  }
}

export default TemperatureElement;

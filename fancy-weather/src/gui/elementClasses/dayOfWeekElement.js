import TranslatableElement from './translatableElement';
import daysOfWeek from '../data/daysOfWeek';

class DayOfWeekElement extends TranslatableElement {
  constructor(classes) {
    super('span', classes);
  }

  setValue(turn) {
    this.turn = turn;
  }

  updateDayOfWeek(date = new Date()) {
    let dayNumber = this.turn + (date).getDay();
    if (dayNumber >= daysOfWeek.length) {
      dayNumber -= daysOfWeek.length;
    }
    this.value = daysOfWeek[dayNumber];
  }
}

export default DayOfWeekElement;

import TranslatableElement from './translatableElement';
import { daysOfWeek, shortDaysOfWeek } from '../data/daysOfWeek';

class DayOfWeekElement extends TranslatableElement {
  constructor(classes, isShort = false) {
    super('span', classes);
    this.isShort = isShort;
  }

  setValue(turn) {
    this.turn = turn;
  }

  updateDayOfWeek(date = new Date()) {
    const daysOfYheWeek = this.isShort ? shortDaysOfWeek : daysOfWeek;
    let dayNumber = this.turn + (date).getDay();
    if (dayNumber >= daysOfYheWeek.length) {
      dayNumber -= daysOfYheWeek.length;
    }
    this.value = daysOfYheWeek[dayNumber];
  }
}

export default DayOfWeekElement;

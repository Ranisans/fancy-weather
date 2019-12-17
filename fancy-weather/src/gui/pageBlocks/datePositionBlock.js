import TranslatableBlock from './AbstractClasses/TranslateBlockClass';
import createElement from '../elementClasses/createElement';
import TranslatableElement from '../elementClasses/translatableElement';
import DayOfWeekElement from '../elementClasses/dayOfWeekElement';
import months from '../data/months';

class DatePositionBlock extends TranslatableBlock {
  constructor(main) {
    super();
    this.minute = 60000;
    this.translatableElements = [];
    this.updateClock = setInterval(() => { }, this.minute);

    const block = createElement('div', ['date_position']);
    main.appendChild(block);

    this.position = createElement('p', ['date_position-position']);
    block.appendChild(this.position);

    const dateBlock = createElement('p', ['date_block']);
    block.appendChild(dateBlock);

    this.dayOfWeek = new DayOfWeekElement(['date_block-day_of_week'], true);
    dateBlock.appendChild(this.dayOfWeek.element);
    this.dayOfWeek.setValue(0);
    this.translatableElements.push(this.dayOfWeek);

    this.day = createElement('span', ['date_block-day']);
    dateBlock.appendChild(this.day);

    this.month = new TranslatableElement('span', ['date_block-month']);
    dateBlock.appendChild(this.month.element);
    this.translatableElements.push(this.month);

    this.time = createElement('span', ['date_block-time']);
    dateBlock.appendChild(this.time);
  }

  updateTime() {
    this.day.innerText = this.date.getDate();
    this.month.setValue(months[this.date.getMonth()]);
    this.time.innerText = `${this.date.toLocaleTimeString('ru-RU', { timeStyle: 'short' })}`;
  }

  setData({ date, position }) {
    this.date = date;
    this.position.innerText = position;

    this.updateTime(date);

    clearInterval(this.updateClock);

    this.updateClock = setInterval(() => {
      this.date = new Date(this.date.getTime() + this.minute);
      this.updateTime();
    }, this.minute);

    this.dayOfWeek.updateDayOfWeek(date);
  }
}

export default DatePositionBlock;

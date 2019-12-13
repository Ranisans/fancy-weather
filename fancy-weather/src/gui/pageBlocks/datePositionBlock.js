import TranslatableBlock from './AbstractClasses/TranslateBlockClass';
import createElement from '../elementClasses/createElement';
import TranslatableElement from '../elementClasses/translatableElement';
import DayOfWeekElement from '../elementClasses/dayOfWeekElement';

class DatePositionBlock extends TranslatableBlock {
  constructor(main) {
    super();
    this.translatableElements = [];

    const block = createElement('div', ['date_position']);
    main.appendChild(block);

    this.position = createElement('p', ['date_position-position']);
    block.appendChild(this.position);

    const dateBlock = createElement('p', ['date_block']);
    block.appendChild(dateBlock);

    this.dayOfWeek = new DayOfWeekElement(['date_block-month']);
    dateBlock.appendChild(this.dayOfWeek.element);
    this.dayOfWeek.setValue(0);
    this.translatableElements.push(this.dayOfWeek);

    this.date = createElement('span', ['date_block-date']);
    dateBlock.appendChild(this.date);

    this.month = new TranslatableElement('span', ['date_block-month']);
    dateBlock.appendChild(this.month.element);
    // this.translatableElements.push(this.month);

    this.time = createElement('span', ['date_block-time']);
    dateBlock.appendChild(this.time);
  }

  setPosition(data) {
    this.position.innerText = data.results[0].formatted;
  }

  setDate(data) {
    console.log('TCL: DatePositionBlock -> setDate -> data', data);
    // need send data to elements
    this.date.innerText = 13;
  }
}

export default DatePositionBlock;

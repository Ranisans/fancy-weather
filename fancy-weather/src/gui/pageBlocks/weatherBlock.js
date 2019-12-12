import WeatherBlock from './AbstractClasses/WeatherBlockClass';
import createElement from '../elementClasses/createElement';
import DayOfWeekElement from '../elementClasses/dayOfWeekElement';
import TemperatureElement from '../elementClasses/temperatureElement';

class FutureWeatherBlock extends WeatherBlock {
  constructor(mainBlock, baseClass, turn) {
    super();
    this.translatableElements = [];
    this.temperatureElements = [];

    const block = createElement('div', [baseClass, 'weather_block']);
    mainBlock.appendChild(block);

    this.dayOfWeek = new DayOfWeekElement([`${baseClass}-day_of_week`, 'day_of_week']);
    this.dayOfWeek.setValue(turn);
    block.appendChild(this.dayOfWeek.element);
    this.translatableElements.push(this.dayOfWeek);

    this.temp = new TemperatureElement([`${baseClass}-temp`, 'future_temp']);
    block.appendChild(this.temp.element);

    this.weatherPict = createElement('div', [`${baseClass}-pict`, 'future_weather_type']);
    block.appendChild(this.weatherPict);
  }

  setData(data) {
    this.temp.setValue(`${Math.floor(data.main.temp)}°`);

    const prefix = 'pic_';
    const picClassName = `pic_${data.weather[0].icon.slice(0, -1)}`;
    const classes = this.weatherPict.className.split(' ').filter((c) => !c.startsWith(prefix));
    this.weatherPict.className = classes.join(' ').trim();
    this.weatherPict.classList.add(picClassName);
  }
}

export default FutureWeatherBlock;

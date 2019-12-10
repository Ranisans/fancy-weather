import createElement from '../elementClasses/createElement';
import DayOfWeekElement from '../elementClasses/dayOfWeekElement';
import TemperatureElement from '../elementClasses/temperatureElement';

const createWeatherBlock = (mainBlock, baseClass) => {
  const block = createElement('div', [baseClass, 'weather_block']);
  mainBlock.appendChild(block);

  const dayOfWeek = new DayOfWeekElement([`${baseClass}-day_of_week`, 'day_of_week']);
  block.appendChild(dayOfWeek.element);

  const temp = new TemperatureElement([`${baseClass}-temp`, 'future_temp']);
  block.appendChild(temp.element);

  const weatherPict = createElement('img', [`${baseClass}-pict`, 'future_weather_type']);
  block.appendChild(weatherPict.element);

  return { transElements: [dayOfWeek], tempElements: [temp] };
};

export default createWeatherBlock;

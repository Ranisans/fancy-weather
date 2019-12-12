import createElement from '../elementClasses/createElement';
import FutureWeatherBlock from './weatherBlock';
import { weatherBlocksClasses } from '../constants';

const createFutureWeatherBlock = (main) => {
  const block = createElement('div', ['future_weather']);
  main.appendChild(block);

  const futureWeather = {};
  weatherBlocksClasses.forEach((element, i) => {
    // i + 1 because zero day is a current day
    futureWeather[element] = new FutureWeatherBlock(block, element, i + 1);
  });

  return futureWeather;
};

export default createFutureWeatherBlock;

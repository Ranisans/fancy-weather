import createElement from './elementClasses/createElement';
import createMenu from './pageBlocks/menu';
import CurrentWeather from './pageBlocks/currentWeather';
import createMapBlock from './pageBlocks/mapBlock';
import createFutureWeatherBlock from './pageBlocks/futureWeather';
import { weatherBlocksClasses } from './constants';

import '../scss/main.scss';

import data from './pageBlocks/data';


const createGui = () => {
  const main = createElement('main', ['main']);
  document.body.appendChild(main);

  createMenu(main);

  const currentWeather = new CurrentWeather(main);
  currentWeather.setData(data);
  currentWeather.translate('en');

  createMapBlock(main);

  const futureWeather = createFutureWeatherBlock(main);
  weatherBlocksClasses.forEach((element) => {
    futureWeather[element].setData(data);
    futureWeather[element].translate('en');
  });
};

export default createGui;

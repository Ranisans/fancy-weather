import createElement from './elementClasses/createElement';
import createMenu from './pageBlocks/menu';
import CurrentWeather from './pageBlocks/currentWeather';
import MapBlock from './pageBlocks/mapBlock';
import createFutureWeatherBlock from './pageBlocks/futureWeather';
import { weatherBlocksClasses } from './constants';

import '../../assets/scss/main.scss';

import { data, position } from './pageBlocks/data';
import DatePositionBlock from './pageBlocks/datePositionBlock';


const createGui = () => {
  const main = createElement('main', ['main']);
  document.body.appendChild(main);
  const temp = createElement('div', ['none']);
  const language = 'by';

  createMenu(main);

  const datePosition = new DatePositionBlock(main);
  datePosition.setPosition(position);
  datePosition.translate(language);

  const currentWeather = new CurrentWeather(main);
  currentWeather.setData(data);
  currentWeather.translate(language);

  const mapBlock = new MapBlock(temp);
  mapBlock.translate(language);

  const futureWeather = createFutureWeatherBlock(main);
  weatherBlocksClasses.forEach((element) => {
    futureWeather[element].setData(data);
    futureWeather[element].translate(language);
  });
};

export default createGui;

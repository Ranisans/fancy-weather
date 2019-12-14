import createElement from './elementClasses/createElement';
import MenuBlock from './pageBlocks/menu';
import CurrentWeather from './pageBlocks/currentWeather';
import MapBlock from './pageBlocks/mapBlock';
import createFutureWeatherBlock from './pageBlocks/futureWeather';

import '../../assets/scss/main.scss';

import { weatherBlocksClasses, blocksName } from './constants';
import { data, position } from './pageBlocks/data';
import DatePositionBlock from './pageBlocks/datePositionBlock';


const createGui = () => {
  const main = createElement('main', ['main']);
  document.body.appendChild(main);
  const language = 'en';

  const menuBlock = new MenuBlock(main);
  menuBlock.translate(language);

  const dateBlock = new DatePositionBlock(main);
  dateBlock.setPosition(position);
  dateBlock.translate(language);

  const currentWeatherBlock = new CurrentWeather(main);
  currentWeatherBlock.setData(data);
  currentWeatherBlock.translate(language);

  const mapBlock = new MapBlock(main);
  mapBlock.translate(language);

  const futureWeatherBlock = createFutureWeatherBlock(main);
  weatherBlocksClasses.forEach((element) => {
    futureWeatherBlock[element].setData(data);
    futureWeatherBlock[element].translate(language);
  });

  return {
    [blocksName[0]]: menuBlock,
    [blocksName[1]]: dateBlock,
    [blocksName[2]]: currentWeatherBlock,
    [blocksName[3]]: mapBlock,
    [blocksName[4]]: futureWeatherBlock,
  };
};

export default createGui;

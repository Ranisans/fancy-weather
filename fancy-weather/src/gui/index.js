import createElement from './elementClasses/createElement';
import MenuBlock from './pageBlocks/menu';
import CurrentWeather from './pageBlocks/currentWeather';
import MapBlock from './pageBlocks/mapBlock';
import createFutureWeatherBlock from './pageBlocks/futureWeather';

import '../../assets/scss/main.scss';

import { blocksName } from './constants';
import DatePositionBlock from './pageBlocks/datePositionBlock';


const createGui = () => {
  const main = createElement('main', ['main']);
  document.body.appendChild(main);

  const menuBlock = new MenuBlock(main);

  const dateBlock = new DatePositionBlock(main);

  const currentWeatherBlock = new CurrentWeather(main);

  const mapBlock = new MapBlock(main);

  const futureWeatherBlock = createFutureWeatherBlock(main);

  return {
    [blocksName[0]]: menuBlock,
    [blocksName[1]]: dateBlock,
    [blocksName[2]]: currentWeatherBlock,
    [blocksName[3]]: mapBlock,
    [blocksName[4]]: futureWeatherBlock,
  };
};

export default createGui;

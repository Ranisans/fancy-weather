import createElement from './elementClasses/createElement';
import createMenu from './pageBlocks/menu';
import createCurrentWeatherBlock from './pageBlocks/currentWeather';
import createMapBlock from './pageBlocks/mapBlock';
import createFutureWeatherBlock from './pageBlocks/futureWeather';


const createGui = () => {
  const main = createElement('main', ['main']);
  document.body.appendChild(main);

  createMenu(main);

  createCurrentWeatherBlock(main);

  createMapBlock(main);

  createFutureWeatherBlock(main);
};

export default createGui;

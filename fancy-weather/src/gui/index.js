import createElement from './elementClasses/createElement';
import createMenu from './pageBlocks/menu';
import createCurrentWeatherBlock from './pageBlocks/currentWeather';


const createGui = () => {
  const main = createElement('main', ['main']);
  document.body.appendChild(main);

  createMenu(main);

  createCurrentWeatherBlock(main);
};

export default createGui;

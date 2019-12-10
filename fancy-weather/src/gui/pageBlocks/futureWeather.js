import createElement from '../elementClasses/createElement';
import createWeatherBlock from './weatherBlock';

const createFutureWeatherBlock = (main) => {
  const translatableElements = [];
  const temperatureElements = [];

  const block = createElement('div', ['future_weather']);
  main.appendChild(block);

  const weatherBlocksClasses = ['first_day', 'second_day', 'third_day'];

  weatherBlocksClasses.forEach((element) => {
    const { transElements, tempElements } = createWeatherBlock(block, element);
    translatableElements.push(...transElements);
    temperatureElements.push(...tempElements);
  });

  return { translatableElements, temperatureElements };
};

export default createFutureWeatherBlock;

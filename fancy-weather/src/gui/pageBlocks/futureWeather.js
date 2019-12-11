import createElement from '../elementClasses/createElement';
import createWeatherBlock from './weatherBlock';

const createFutureWeatherBlock = (main) => {
  const translatableElements = [];
  const temperatureElements = [];

  const block = createElement('div', ['future_weather']);
  main.appendChild(block);

  const weatherBlocksClasses = ['first_day', 'second_day', 'third_day'];

  weatherBlocksClasses.forEach((element, i) => {
    // i + 1 because zero day is a current day
    const { transElements, tempElements } = createWeatherBlock(block, element, i + 1);
    translatableElements.push(...transElements);
    temperatureElements.push(...tempElements);
  });

  return { translatableElements, temperatureElements };
};

export default createFutureWeatherBlock;

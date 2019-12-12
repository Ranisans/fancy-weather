import createElement from '../elementClasses/createElement';
import TranslatableElement from '../elementClasses/translatableElement';
import TemperatureElement from '../elementClasses/temperatureElement';
import WeatherType from '../elementClasses/weatherType';
import {
  weatherType, feelsLike, wind, humidity, measurement,
} from '../data/currentWeather';

const createCurrentWeatherBlock = (main) => {
  const translatableElements = [];
  const temperatureElements = [];

  const block = createElement('div', ['current_weather']);
  main.appendChild(block);

  const temp = new TemperatureElement(['current_weather-temp']);
  block.appendChild(temp.element);
  temperatureElements.push(temp);

  const weatherPict = createElement('img', ['current_weather-pict']);
  block.appendChild(weatherPict);

  const weatherTypeElement = new WeatherType(['current_weather-type']);
  weatherTypeElement.setDict(weatherType);
  block.appendChild(weatherTypeElement.element);
  translatableElements.push(weatherTypeElement);

  const feelsLikeBlock = createElement('p', ['current_weather-feels_like']);
  block.appendChild(feelsLikeBlock);

  const feelsLikeText = new TranslatableElement('span', ['feels_like-text']);
  feelsLikeText.setValue(feelsLike);
  feelsLikeBlock.appendChild(feelsLikeText.element);
  translatableElements.push(feelsLikeText);

  const feelsLikeTemp = new TemperatureElement(['feels_like-temp']);
  feelsLikeBlock.appendChild(feelsLikeTemp.element);
  temperatureElements.push(feelsLikeTemp);

  const windBlock = createElement('p', ['current_weather-wind']);
  block.appendChild(windBlock);

  const windText = new TranslatableElement('span', ['wind-text']);
  windText.setValue(wind);
  windBlock.appendChild(windText.element);
  translatableElements.push(windText);

  const speed = createElement('span', ['wind-speed']);
  windBlock.appendChild(speed);

  const measurementElement = new TranslatableElement('span', ['wind-measurement']);
  measurementElement.setValue(measurement);
  windBlock.appendChild(measurementElement.element);
  translatableElements.push(measurementElement);

  const humidityBlock = createElement('p', ['current_weather-humidity']);
  block.appendChild(humidityBlock);

  const humidityText = new TranslatableElement('span', ['humidity-text']);
  humidityText.setValue(humidity);
  humidityBlock.appendChild(humidityText.element);
  translatableElements.push(humidityText);

  const humidityValue = createElement('span', ['humidity-value']);
  humidityBlock.appendChild(humidityValue);

  return { translatableElements, temperatureElements };
};

export default createCurrentWeatherBlock;

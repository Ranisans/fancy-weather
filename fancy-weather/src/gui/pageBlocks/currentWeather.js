import WeatherBlock from './AbstractClasses/WeatherBlockClass';
import createElement from '../elementClasses/createElement';
import TranslatableElement from '../elementClasses/translatableElement';
import TemperatureElement from '../elementClasses/temperatureElement';
import WeatherType from '../elementClasses/weatherType';
import {
  weatherType, feelsLike, wind, humidity, measurement,
} from '../data/currentWeather';

class CurrentWeather extends WeatherBlock {
  constructor(main) {
    super();
    this.translatableElements = [];
    this.temperatureElements = [];

    const block = createElement('div', ['current_weather']);
    main.appendChild(block);

    this.temp = new TemperatureElement(['current_weather-temp']);
    block.appendChild(this.temp.element);
    this.temperatureElements.push(this.temp);

    this.weatherPict = createElement('div', ['current_weather-pict']);
    block.appendChild(this.weatherPict);

    this.weatherTypeElement = new WeatherType(['current_weather-type']);
    this.weatherTypeElement.setDict(weatherType);
    block.appendChild(this.weatherTypeElement.element);
    this.translatableElements.push(this.weatherTypeElement);

    const feelsLikeBlock = createElement('p', ['current_weather-feels_like']);
    block.appendChild(feelsLikeBlock);

    const feelsLikeText = new TranslatableElement('span', ['feels_like-text']);
    feelsLikeText.setValue(feelsLike);
    feelsLikeBlock.appendChild(feelsLikeText.element);
    this.translatableElements.push(feelsLikeText);

    this.feelsLikeTemp = new TemperatureElement(['feels_like-temp']);
    feelsLikeBlock.appendChild(this.feelsLikeTemp.element);
    this.temperatureElements.push(this.feelsLikeTemp);

    const windBlock = createElement('p', ['current_weather-wind']);
    block.appendChild(windBlock);

    const windText = new TranslatableElement('span', ['wind-text']);
    windText.setValue(wind);
    windBlock.appendChild(windText.element);
    this.translatableElements.push(windText);

    this.speed = createElement('span', ['wind-speed']);
    windBlock.appendChild(this.speed);

    const measurementElement = new TranslatableElement('span', ['wind-measurement']);
    measurementElement.setValue(measurement);
    windBlock.appendChild(measurementElement.element);
    this.translatableElements.push(measurementElement);

    const humidityBlock = createElement('p', ['current_weather-humidity']);
    block.appendChild(humidityBlock);

    const humidityText = new TranslatableElement('span', ['humidity-text']);
    humidityText.setValue(humidity);
    humidityBlock.appendChild(humidityText.element);
    this.translatableElements.push(humidityText);

    this.humidityValue = createElement('span', ['humidity-value']);
    humidityBlock.appendChild(this.humidityValue);
  }

  setData(data) {
    this.temp.setValue(`${Math.floor(data.main.temp)}°`);
    this.weatherTypeElement.setValue(data.weather[0].main);
    this.feelsLikeTemp.setValue(Math.floor(data.main.feels_like));
    this.speed.innerText = data.wind.speed;
    this.humidityValue.innerText = `${data.main.humidity}%`;

    const prefix = 'pic_';
    const picClassName = `pic_${data.weather[0].icon.slice(0, -1)}`;
    const classes = this.weatherPict.className.split(' ').filter((c) => !c.startsWith(prefix));
    this.weatherPict.className = classes.join(' ').trim();
    this.weatherPict.classList.add(picClassName);
  }
}

export default CurrentWeather;

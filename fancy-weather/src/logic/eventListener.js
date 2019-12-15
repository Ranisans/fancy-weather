/* eslint-disable no-unused-vars */
import MapClass from './map';
import getDefaultPosition from './geolocation';
import getWeatherForecastForFiveDays from './weatherForecast';
import getCoordinatesByTown from './geocoding';
import getLocalTime from './localTime';
import { languageCode as lngCode } from '../gui/constants';

const eventListener = async (blockHandler) => {
  const map = new MapClass();
  let currentPosition;
  const measurement = { true: 'metric', false: 'imperial' };
  const currentLanguage = lngCode.en;
  let isCelsiusScale = true;

  const getGeocoding = async (
    townName, languageCode,
  ) => getCoordinatesByTown(townName, languageCode);

  const getTime = async () => getLocalTime(currentPosition);

  const setDatePosition = (datePosition) => {
    blockHandler.setDatePosition(datePosition);
  };

  const showCoordinates = () => {
    blockHandler.setCoordinates(currentPosition);
  };

  const setMapPosition = () => { map.setMapCenter(currentPosition); };

  const setWeather = async () => {
    const temperatureArray = await getWeatherForecastForFiveDays(
      currentPosition, measurement[isCelsiusScale],
    );
    blockHandler.setTemp(temperatureArray);
  };

  const setLanguage = (language) => {
    blockHandler.translate(language);
  };

  const initCurrentLocation = async () => {
    currentPosition = await getDefaultPosition();
    const { formatted } = await getGeocoding(
      `${currentPosition.lat}+${currentPosition.lng}`,
      currentLanguage,
    );

    const positionArray = formatted.split(',');
    positionArray.pop();
    const position = positionArray.join(', ');

    const localDate = await getTime();
    setDatePosition({ date: localDate, position });

    await setMapPosition(currentPosition);
    showCoordinates();
    await setWeather();
    setLanguage('en');
  };

  await initCurrentLocation();

  const menu = document.querySelector('.menu');
  const searchBtn = document.querySelector('.menu-search_btn');
  const searchInput = document.querySelector('.menu-search_input');
  const fTemp = document.querySelector('.menu-temp_changer-fahrenheit');
  const cTemp = document.querySelector('.menu-temp_changer-celsius');
  const currentTemp = document.querySelector('.menu-temp_changer-current');

  menu.addEventListener('click', (event) => {
    const { target } = event;
    if (target === fTemp || target === cTemp || target === currentTemp) {
      currentTemp.classList.remove('menu-temp_changer-current--no_animation');
      currentTemp.classList.toggle('menu-temp_changer-current--fahrenheit');
      isCelsiusScale = !isCelsiusScale;
      setWeather();
    }
  });
};

export default eventListener;

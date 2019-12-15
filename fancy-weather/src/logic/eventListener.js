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
  let currentLanguage = lngCode.en;
  let isCelsiusScale = true;

  let weatherType;
  let currentCity;
  let currentCountry;
  let localDate;

  const getGeocoding = async (townName) => {
    const { city, country, geometry } = await getCoordinatesByTown(townName, currentLanguage);
    currentCity = city;
    currentPosition = geometry;
    return { position: `${city}, ${country}`, geometry };
  };

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
    const currentWeather = temperatureArray[0];
    weatherType = currentWeather.weather[0].main;

    blockHandler.setTemp(temperatureArray);
  };

  const setLanguage = () => {
    blockHandler.translate(currentLanguage);
  };

  const setBackground = () => { };

  const initCurrentLocation = async () => {
    currentPosition = await getDefaultPosition();
    const { position } = await getGeocoding(
      `${currentPosition.lat}+${currentPosition.lng}`,
      currentLanguage,
    );

    currentCity = undefined;
    localDate = await getTime();
    setDatePosition({ date: localDate, position });

    await setMapPosition(currentPosition);
    showCoordinates();
    await setWeather();
    setLanguage();
  };

  const showDataBySearchRequest = async (townName) => {
    const { position, geometry } = await getGeocoding(townName);
    localDate = await getTime();
    setDatePosition({ date: localDate, position });

    await setMapPosition(currentPosition);
    showCoordinates();
    await setWeather();
    setLanguage();
  };

  await initCurrentLocation();

  const menu = document.querySelector('.menu');
  const searchBtn = document.querySelector('.menu-search_btn');
  const searchInput = document.querySelector('.menu-search_input');
  const fTemp = document.querySelector('.menu-temp_changer-fahrenheit');
  const cTemp = document.querySelector('.menu-temp_changer-celsius');
  const currentTemp = document.querySelector('.menu-temp_changer-current');
  const languageChanger = document.querySelector('.menu-language_selector');

  menu.addEventListener('click', (event) => {
    const { target } = event;
    if (target === fTemp || target === cTemp || target === currentTemp) {
      currentTemp.classList.remove('menu-temp_changer-current--no_animation');
      currentTemp.classList.toggle('menu-temp_changer-current--fahrenheit');
      isCelsiusScale = !isCelsiusScale;
      setWeather();
    } else if (target === searchBtn) {
      const searchString = searchInput.value;
      if (searchString) {
        showDataBySearchRequest(searchString);
      }
    }
  });

  menu.addEventListener('change', (event) => {
    if (event.target === languageChanger) {
      currentLanguage = lngCode[event.target.value];
      setLanguage();
    }
  });
};

export default eventListener;

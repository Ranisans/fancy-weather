/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import MapClass from './map';
import getDefaultPosition from './geolocation';
import getWeatherForecastForFiveDays from './weatherForecast';
import getCoordinatesByTown from './geocoding';
import getLocalTime from './localTime';
import { languageCode as lngCode, measurementConst } from '../gui/constants';
import getBackgroundImage from './getBackgroundImage';
import initSpeech from './speech';

const eventListener = async (blockHandler) => {
  const map = new MapClass();
  let currentPosition;
  const measurement = { true: measurementConst.metric, false: measurementConst.imperial };
  let currentLanguage = lngCode.en;
  let isCelsiusScale = true;

  let weatherType;
  let currentCity;
  let currentCountry;
  let localDate;

  const main = document.querySelector('.main');

  const getGeocoding = async (townName) => {
    const { city, country, geometry } = await getCoordinatesByTown(townName, currentLanguage);
    currentCity = city;
    currentCountry = country;
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

    blockHandler.setTemp(temperatureArray, measurement[isCelsiusScale]);
  };

  const setLanguage = () => {
    blockHandler.translate(currentLanguage);
  };

  const setBackground = async () => {
    try {
      const imageURL = await getBackgroundImage({
        currentDateString: localDate,
        weatherType,
        currentCity,
        currentCountry,
      });

      main.style.backgroundImage = `url(${imageURL})`;
    } catch (e) {
      alert('Unable to get an image');
    }
  };

  const initCurrentLocation = async () => {
    currentPosition = await getDefaultPosition();
    const { position } = await getGeocoding(
      `${currentPosition.lat}+${currentPosition.lng}`,
      currentLanguage,
    );

    localDate = await getTime();
    setDatePosition({ date: localDate, position });

    await setMapPosition(currentPosition);
    showCoordinates();
    await setWeather();
    setLanguage();
    setBackground();
  };

  const showDataBySearchRequest = async (townName) => {
    const { position, geometry } = await getGeocoding(townName);
    localDate = await getTime();
    setDatePosition({ date: localDate, position });

    await setMapPosition(currentPosition);
    showCoordinates();
    await setWeather();
    setLanguage();
    setBackground();
  };

  const menu = document.querySelector('.menu');
  const searchBtn = document.querySelector('.menu-search_btn');
  const searchInput = document.querySelector('.menu-search_input');
  const fTemp = document.querySelector('.menu-temp_changer-fahrenheit');
  const cTemp = document.querySelector('.menu-temp_changer-celsius');
  const currentTemp = document.querySelector('.menu-temp_changer-current');
  const languageChanger = document.querySelector('.menu-language_selector');
  const refreshImage = document.querySelector('.menu-refresh_background');

  const changeTemperatureMeasurement = () => {
    currentTemp.classList.remove('menu-temp_changer-current--no_animation');
    currentTemp.classList.toggle('menu-temp_changer-current--fahrenheit');
    isCelsiusScale = !isCelsiusScale;
    window.localStorage.setItem('isCelsiusScale', isCelsiusScale);
  };

  menu.addEventListener('click', (event) => {
    const { target } = event;
    if (target === fTemp || target === cTemp || target === currentTemp) {
      changeTemperatureMeasurement();
      setWeather();
    } else if (target === searchBtn) {
      const searchString = searchInput.value;
      if (searchString) {
        showDataBySearchRequest(searchString);
      }
    } else if (target === refreshImage) {
      setBackground();
    }
  });

  menu.addEventListener('change', (event) => {
    if (event.target === languageChanger) {
      currentLanguage = lngCode[event.target.value];
      window.localStorage.setItem('currentLanguage', currentLanguage);
      setLanguage();
    }
  });

  menu.addEventListener('keypress', (event) => {
    if (event.target === searchInput) {
      const key = event.which || event.keyCode;
      if (key === 13) { // 13 is enter
        const searchString = searchInput.value;
        if (searchString) {
          showDataBySearchRequest(searchString);
        }
      }
    }
  });

  const init = async () => {
    if (window.localStorage.getItem('isCelsiusScale') === 'false') {
      changeTemperatureMeasurement();
    }

    const language = window.localStorage.getItem('currentLanguage');
    if (language) {
      currentLanguage = language;
      languageChanger.value = language;
    }

    initSpeech(main, searchInput);

    await initCurrentLocation();
  };

  init();
};

export default eventListener;

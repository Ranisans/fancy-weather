/* eslint-disable no-unused-vars */
import MapClass from './map';
import getDefaultPosition from './geolocation';
import getWeatherForecastForFiveDays from './weatherForecast';
import getCoordinatesByTown from './geocoding';
import getLocalTime from './localTime';
import { languageCode as lngCode } from '../gui/constants';

const eventListener = async (blockHandler) => {
  const map = new MapClass();
  const currentPosition = await getDefaultPosition();
  const measurement = { true: 'metric', false: 'imperial' };
  const currentLanguage = lngCode.en;
  const isCelsiusScale = true;

  const getGeocoding = async (
    townName, languageCode,
  ) => getCoordinatesByTown(townName, languageCode);

  const getTime = async () => getLocalTime(currentPosition);

  const setDatePosition = (datePosition) => {
    blockHandler.setDatePosition(datePosition);
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
    await setWeather();
    setLanguage('en');
  };

  await initCurrentLocation();
};

export default eventListener;

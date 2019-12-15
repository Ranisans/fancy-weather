import MapClass from './map';
import getDefaultPosition from './geolocation';
import getWeatherForecastForFiveDays from './weatherForecast';
import getCoordinatesByTown from './geocoding';

const eventListener = async (blockHandler) => {
  const map = new MapClass();
  const currentPosition = await getDefaultPosition();
  const measurement = { true: 'metric', false: 'imperial' };
  const isCelsiusScale = true;

  const getGeocoding = async (
    townName, languageCode,
  ) => getCoordinatesByTown(townName, languageCode);

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

  await setMapPosition(currentPosition);
  await setWeather();
  await setLanguage('en');
};

export default eventListener;

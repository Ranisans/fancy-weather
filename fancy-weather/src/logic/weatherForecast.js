import { openweathermap } from '../SecretAPIKeys';

const getWeatherForecastForFiveDays = async ({ lat, lng }, units = 'metric') => {
  const query = 'https://api.openweathermap.org/data/2.5/forecast?'
    + `lat=${lat}&lon=${lng}`
    + `&units=${units}`
    + `&appid=${openweathermap}`;

  const response = await fetch(query);
  const json = await response.json();
  const dailyDataList = json.list.filter((element) => element.dt_txt.includes('18:00:00'));
  return dailyDataList;
};

export default getWeatherForecastForFiveDays;

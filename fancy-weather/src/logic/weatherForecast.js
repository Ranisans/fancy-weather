import { openweathermap } from '../SecretAPIKeys';

const getWeatherForecastForFiveDays = async ({ latitude, longitude }) => {
  const query = 'https://api.openweathermap.org/data/2.5/forecast?'
    + `lat=${latitude}&lon=${longitude}`
    + `&appid=${openweathermap}`;

  const response = await fetch(query);
  const json = await response.json();
  const dailyDataList = json.list.filter((element) => element.dt_txt.includes('18:00:00'));
  return dailyDataList;
};

export default getWeatherForecastForFiveDays;

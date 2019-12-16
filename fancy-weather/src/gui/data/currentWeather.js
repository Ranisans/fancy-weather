const weatherType = {
  Clear: { en: 'clear', ru: 'ясно', by: 'ясна' },
  Clouds: { en: 'clouds', ru: 'облачно', by: 'воблачна' },
  Drizzle: { en: 'drizzle', ru: 'мелкий дождь', by: 'імжа' },
  Rain: { en: 'rain', ru: 'ясно', by: 'дождж' },
  Thunderstorm: { en: 'thunderstorm', ru: 'ясно', by: 'навальніца' },
  Snow: { en: 'snow', ru: 'снег', by: 'снег' },
  Mist: { en: 'Mist', ru: 'Дымка', by: 'Смуга' },
  Smoke: { en: 'Smoke', ru: 'Дым', by: 'Дым' },
  Haze: { en: 'Haze', ru: 'Мгла', by: 'Iмгла' },
  Dust: { en: 'Dust', ru: 'Пыль', by: 'Пыл' },
  Fog: { en: 'Fog', ru: 'Туман', by: 'Туман' },
  Sand: { en: 'Sand', ru: 'Песок', by: 'Пясок' },
  Ash: { en: 'Ash', ru: 'Пепел', by: 'Пепел' },
  Squall: { en: 'Squall', ru: 'Шквал', by: 'Шквал' },
  Tornado: { en: 'Tornado', ru: 'Торнадо', by: 'Тарнада' },
};

const feelsLike = { en: 'feels like: ', ru: 'по ощущению: ', by: 'адчуваецца як: ' };

const wind = { en: 'wind: ', ru: 'ветер: ', by: 'вецер: ' };

const humidity = { en: 'humidity: ', ru: 'влажность: ', by: 'вільготнасць: ' };

const measurement = { en: ' m/s', ru: ' м/с', by: ' м/с' };

export {
  weatherType, feelsLike, wind, humidity, measurement,
};

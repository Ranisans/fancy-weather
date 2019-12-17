const weatherType = {
  Clear: { en: 'clear', ru: 'ясно', be: 'ясна' },
  Clouds: { en: 'clouds', ru: 'облачно', be: 'воблачна' },
  Drizzle: { en: 'drizzle', ru: 'мелкий дождь', be: 'імжа' },
  Rain: { en: 'rain', ru: 'ясно', be: 'дождж' },
  Thunderstorm: { en: 'thunderstorm', ru: 'ясно', be: 'навальніца' },
  Snow: { en: 'snow', ru: 'снег', be: 'снег' },
  Mist: { en: 'Mist', ru: 'Дымка', be: 'Смуга' },
  Smoke: { en: 'Smoke', ru: 'Дым', be: 'Дым' },
  Haze: { en: 'Haze', ru: 'Мгла', be: 'Iмгла' },
  Dust: { en: 'Dust', ru: 'Пыль', be: 'Пыл' },
  Fog: { en: 'Fog', ru: 'Туман', be: 'Туман' },
  Sand: { en: 'Sand', ru: 'Песок', be: 'Пясок' },
  Ash: { en: 'Ash', ru: 'Пепел', be: 'Пепел' },
  Squall: { en: 'Squall', ru: 'Шквал', be: 'Шквал' },
  Tornado: { en: 'Tornado', ru: 'Торнадо', be: 'Тарнада' },
};

const feelsLike = { en: 'feels like: ', ru: 'по ощущению: ', be: 'адчуваецца як: ' };

const wind = { en: 'wind: ', ru: 'ветер: ', be: 'вецер: ' };

const humidity = { en: 'humidity: ', ru: 'влажность: ', be: 'вільготнасць: ' };

const measurement = { en: ' m/s', ru: ' м/с', be: ' м/с' };

export {
  weatherType, feelsLike, wind, humidity, measurement,
};

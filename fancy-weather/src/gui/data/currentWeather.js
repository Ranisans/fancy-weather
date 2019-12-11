const weatherType = {
  Clear: { en: 'clear', ru: 'ясно', by: 'ясна' },
  Clouds: { en: 'clouds', ru: 'облачно', by: 'воблачна' },
  Drizzle: { en: 'drizzle', ru: 'мелкий дождь', by: 'імжа' },
  Rain: { en: 'rain', ru: 'ясно', by: 'дождж' },
  Thunderstorm: { en: 'thunderstorm', ru: 'ясно', by: 'навальніца' },
};

const feelsLike = { en: 'feels like', ru: 'по ощущению', by: 'адчуваецца як' };

const wind = { en: 'wind', ru: 'ветер', by: 'вецер' };

const humidity = { en: 'humidity', ru: 'влажность', by: 'вільготнасць' };

const measurement = { en: 'm/s', ru: 'м/с', by: 'м/с' };

export {
  weatherType, feelsLike, wind, humidity, measurement,
};

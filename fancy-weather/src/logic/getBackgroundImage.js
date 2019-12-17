import { unsplash } from '../SecretAPIKeys';

const getBackgroundImage = async ({
  currentDateString, currentCity, currentCountry,
}) => {
  const day = ['morning', 'day', 'evening', 'night'];
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  const startQuery = 'https://api.unsplash.com/photos/random?query=';
  const client = `&client_id=${unsplash}`;
  const filterQueryArray = [];
  if (currentCountry && !currentCity) { filterQueryArray.push(currentCountry); }
  if (currentCity) { filterQueryArray.push(currentCity); }

  const currentDate = new Date(currentDateString);

  const currentMonth = currentDate.getMonth();
  if (currentMonth === 11 || currentMonth < 2) {
    // Winter
    filterQueryArray.push(seasons[0]);
  } else if (currentMonth < 5) {
    // Spring
    filterQueryArray.push(seasons[1]);
  } else if (currentMonth < 8) {
    // Summer
    filterQueryArray.push(seasons[2]);
  } else {
    // Autumn
    filterQueryArray.push(seasons[3]);
  }

  const currentHours = currentDate.getHours();
  if (currentHours > 4 && currentHours <= 12) {
    // morning from 4 to 12 hours
    filterQueryArray.push(day[0]);
  } else if (currentHours > 12 && currentHours <= 16) {
    // day from 12 to 16 hours
    filterQueryArray.push(day[1]);
  } else if (currentHours > 16 && currentHours <= 23) {
    // evening from 16 to 23 hours
    filterQueryArray.push(day[2]);
  } else {
    // morning from 23 to 4 hours
    filterQueryArray.push(day[3]);
  }

  const filterQuery = filterQueryArray.join('+');

  const query = `${startQuery}${filterQuery}${client}`;
  const response = await fetch(query);
  const json = await response.json();

  return json.urls.regular;
};

export default getBackgroundImage;

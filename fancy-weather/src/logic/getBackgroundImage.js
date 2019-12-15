import { unsplash } from '../SecretAPIKeys';
import months from '../gui/data/months';

const getBackgroundImage = async ({
  weatherType, town, country,
}) => {
  const day = ['Morning', 'Day', 'Evening', 'Night'];
  const startQuery = 'https://api.unsplash.com/photos/random?query=';
  const client = `&client_id=${unsplash}`;
  const filterQueryArray = [];
  if (town) { filterQueryArray.push(town); }
  if (weatherType) { filterQueryArray.push(weatherType); }
  if (country && !town) { filterQueryArray.push(country); }

  const currentDate = new Date();
  const currentMonth = months[currentDate.getMonth()].en;
  filterQueryArray.push(currentMonth);
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

  const filterQuery = filterQueryArray.join('-');

  const query = `${startQuery}${filterQuery}${client}`;
  const response = await fetch(query);
  const json = await response.json();

  return json;
};

export default getBackgroundImage;

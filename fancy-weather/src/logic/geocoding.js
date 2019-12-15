import { opencagedata } from '../SecretAPIKeys';

const getCoordinatesByTown = async (townName, languageCode) => {
  const query = 'https://api.opencagedata.com/geocode/v1/json?'
    + `q=${encodeURI(townName)}`
    + `&key=${opencagedata}`
    + '&pretty=1&no_annotations=1'
    + '&limit=1'
    + `&language=${languageCode}`;

  const response = await fetch(query);
  const json = await response.json();

  const townData = json.results[0];
  return {
    city: townData.components.state,
    country: townData.components.country,
    geometry: townData.geometry,
  };
};

export default getCoordinatesByTown;

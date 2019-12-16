import { timezonedb } from '../SecretAPIKeys';

const getLocalTime = async ({ lat, lng }) => {
  const query = `https://api.timezonedb.com/v2.1/get-time-zone?key=${timezonedb}&format=json&by=position&`
    + `lat=${lat}&lng=${lng}`;

  const response = await fetch(query);
  const result = await response.json();
  return result.formatted;
};

export default getLocalTime;

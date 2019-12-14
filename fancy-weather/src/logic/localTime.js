import timezonedb from '../SecretAPIKeys';

const getLocalTime = async ({ latitude, longitude }) => {
  const query = `http://api.timezonedb.com/v2.1/get-time-zone?key=${timezonedb}&format=json&by=position&`
    + `lat=${latitude}&lng=${longitude}`;

  const request = await fetch(query);
  const result = await JSON.parse(request);
  return result.formatted;
};

export default getLocalTime;

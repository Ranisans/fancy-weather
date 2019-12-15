import MapClass from './map';
import getDefaultPosition from './geolocation';

const eventListener = async (blockHandler) => {
  const map = new MapClass();
  const currentPosition = await getDefaultPosition();

  const setMapPosition = () => { map.setMapCenter(currentPosition); };
};

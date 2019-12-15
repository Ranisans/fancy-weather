/* eslint-disable no-undef */
import { mapbox } from '../SecretAPIKeys';

class MapClass {
  constructor() {
    mapboxgl.accessToken = mapbox;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 10,
    });
  }

  setMapCenter({ lat, lng }) {
    this.map.flyTo({ center: [lng, lat] });
  }
}

export default MapClass;

import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

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

  setMapCenter({ latitude, longitude }) {
    this.map.flyTo({ center: [longitude, latitude] });
  }
}

export default MapClass;

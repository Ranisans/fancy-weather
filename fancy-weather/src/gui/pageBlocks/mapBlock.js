import createElement from '../elementClasses/createElement';
import TranslatableElement from '../elementClasses/translatableElement';

const createMapBlock = (main) => {
  const translatableElement = [];

  const block = createElement('div', ['map_block']);
  main.appendChild(block);

  const map = createElement('div', ['map_block-map']);
  block.appendChild(map);

  const latitude = createElement('div', ['map_block-latitude']);
  block.appendChild(latitude);

  const latitudeText = new TranslatableElement('span', ['latitude-text', 'coordinates_text']);
  latitude.appendChild(latitudeText.element);
  translatableElement.push(latitudeText);

  const latitudeValue = createElement('span', ['latitude-value', 'coordinates_value']);
  latitude.appendChild(latitudeValue);

  const longitude = createElement('div', ['map_block-longitude']);
  block.appendChild(longitude);

  const longitudeText = new TranslatableElement('span', ['longitude-text', 'coordinates_text']);
  longitude.appendChild(longitudeText.element);
  translatableElement.push(longitudeText);

  const longitudeValue = createElement('span', ['latitude-value', 'coordinates_value']);
  longitude.appendChild(longitudeValue);

  return translatableElement;
};

export default createMapBlock;

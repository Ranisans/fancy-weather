import TranslatableBlock from './AbstractClasses/TranslateBlockClass';
import createElement from '../elementClasses/createElement';
import TranslatableElement from '../elementClasses/translatableElement';
import { latitude, longitude } from '../data/position';

class MapBlock extends TranslatableBlock {
  constructor(main) {
    super();
    this.translatableElements = [];

    const block = createElement('div', ['map_block']);
    main.appendChild(block);

    const map = createElement('div', ['map_block-map']);
    block.appendChild(map);

    const latitudeElement = createElement('div', ['map_block-latitude']);
    block.appendChild(latitudeElement);

    const latitudeText = new TranslatableElement('span', ['latitude-text', 'coordinates_text']);
    latitudeText.setValue(latitude);
    latitudeElement.appendChild(latitudeText.element);
    this.translatableElements.push(latitudeText);

    const latitudeValue = createElement('span', ['latitude-value', 'coordinates_value']);
    latitudeElement.appendChild(latitudeValue);

    const longitudeElement = createElement('div', ['map_block-longitude']);
    block.appendChild(longitudeElement);

    const longitudeText = new TranslatableElement('span', ['longitude-text', 'coordinates_text']);
    longitudeText.setValue(longitude);
    longitudeElement.appendChild(longitudeText.element);
    this.translatableElements.push(longitudeText);

    const longitudeValue = createElement('span', ['latitude-value', 'coordinates_value']);
    longitudeElement.appendChild(longitudeValue);
  }
}

export default MapBlock;

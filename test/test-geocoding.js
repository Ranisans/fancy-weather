import { expect } from 'chai';
import {
  minskCoordinates, minskEng, minskFormattedEng, minskRus, minskFormattedRus,
} from './base_data';

import { languageCode } from '../fancy-weather/src/gui/constants';
import getCoordinatesByTown from '../fancy-weather/src/logic/geocoding';

describe('test geocoding by town name', () => {
  it('should return true data if town written in english', async () => {
    const result = await getCoordinatesByTown(minskEng, languageCode.en);
    expect(result).to.have.key('formatted', 'geometry');
    expect(result.geometry.lat).to.equal(minskCoordinates.lat);
    expect(result.geometry.lng).to.equal(minskCoordinates.lng);
    expect(result.formatted).to.equal(minskFormattedEng);
  });

  it('should return true data if town written in russian', async () => {
    const result = await getCoordinatesByTown(minskRus, languageCode.ru);
    expect(result).to.have.key('formatted', 'geometry');
    expect(result.geometry.lat).to.equal(minskCoordinates.lat);
    expect(result.geometry.lng).to.equal(minskCoordinates.lng);
    expect(result.formatted).to.equal(minskFormattedRus);
  });
});

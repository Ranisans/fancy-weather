import { assert } from 'chai';
import getLocalTime from '../fancy-weather/src/logic/localTime';

import { minskCoordinates } from './base_data';

describe('test getLocalTime by coordinates', () => {
  it('should return string', async () => {
    const result = await getLocalTime(minskCoordinates);
    assert.isString(result);
  });
});

import { assert } from 'chai';
import getLocalTime from '../fancy-weather/src/logic/localTime';

import coordinates from './base_data';

describe('test getLocalTime by coordinates', () => {
  it('should return string', async () => {
    const result = await getLocalTime(coordinates);
    assert.isString(result);
    console.log('TCL: result', result);
  });
});

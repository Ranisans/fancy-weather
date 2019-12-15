import { expect, assert } from 'chai';

import getWeatherForecastForFiveDays from '../fancy-weather/src/logic/weatherForecast';

import { minskCoordinates } from './base_data';


describe('test getWeatherForecastForFiveDays by coordinates', () => {
  it('should return array[5]', async () => {
    const result = await getWeatherForecastForFiveDays(minskCoordinates);
    assert.isArray(result);
    expect(result).to.have.length(5);
  });
});

import TranslatableBlock from './TranslateBlockClass';

class WeatherBlock extends TranslatableBlock {
  changeTheScale(scale) {
    this.temperatureBlocks.forEach((block) => {
      block.changeTheScale(scale);
    });
  }
}

export default WeatherBlock;

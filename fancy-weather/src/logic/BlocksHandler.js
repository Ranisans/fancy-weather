import { blocksName, weatherBlocksClasses } from '../gui/constants';

class BlocksHandler {
  constructor(blocks) {
    this.blocks = blocks;
  }

  translate(language) {
    blocksName.forEach((blockName, i) => {
      // if not futureWeatherBlock
      if (i !== blocksName.length - 1) {
        this.blocks[blockName].translate(language);
      } else {
        const futureWeatherBlock = this.blocks[blockName];
        weatherBlocksClasses.forEach((element) => {
          futureWeatherBlock[element].translate(language);
        });
      }
    });
  }

  setTemp(temperatureArray) {
    const [current, ...next] = temperatureArray;
    const { currentWeatherBlock, futureWeatherBlock } = this.blocks;
    currentWeatherBlock.setData(current);

    weatherBlocksClasses.forEach((element, i) => {
      futureWeatherBlock[element].setData(next[i]);
    });
  }

  setDatePosition({ date, position }) {
    const { dateBlock } = this.blocks;
    dateBlock.setData({ date, position });
  }
}

export default BlocksHandler;

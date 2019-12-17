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

  setTemp(temperatureArray, scale) {
    const [current, ...next] = temperatureArray;
    const { currentWeatherBlock, futureWeatherBlock } = this.blocks;
    currentWeatherBlock.setData(current, scale);

    weatherBlocksClasses.forEach((element, i) => {
      futureWeatherBlock[element].setData(next[i]);
    });
  }

  setDatePosition({ date, position }) {
    const thisDate = new Date(date);
    const { dateBlock, futureWeatherBlock } = this.blocks;
    dateBlock.setData({ date: thisDate, position });
    weatherBlocksClasses.forEach((element) => {
      futureWeatherBlock[element].setDate(thisDate);
    });
  }

  setCoordinates(coordinates) {
    const { mapBlock } = this.blocks;
    mapBlock.setCoordinates(coordinates);
  }
}

export default BlocksHandler;

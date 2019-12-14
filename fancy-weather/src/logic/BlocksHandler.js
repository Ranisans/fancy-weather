import { blocksName, weatherBlocksClasses } from '../gui/constants';

class BlocksHandler {
  constructor(blocks) {
    this.blocks = blocks;
  }

  translate(language) {
    blocksName.forEach((blockName, i) => {
      // if not futureWeatherBlock
      if (i !== blockName.length - 1) {
        this.blocks[blockName].translate(language);
      } else {
        const futureWeatherBlock = this.blocks[blockName];
        weatherBlocksClasses.forEach((element) => {
          futureWeatherBlock[element].translate(language);
        });
      }
    });
  }
}

export default BlocksHandler;

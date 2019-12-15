import createGui from './gui/index';
import BlocksHandler from './logic/BlocksHandler';

import eventListenerInit from './logic/eventListener';

const init = async () => {
  const blocks = createGui();
  const blockHandler = new BlocksHandler(blocks);

  await eventListenerInit(blockHandler);
};

init();

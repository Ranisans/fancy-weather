import createElement from './elementClasses/createElement';
import createMenu from './pageBlocks/menu';


const createGui = () => {
  const main = createElement('main', ['main']);
  document.body.appendChild(main);

  createMenu(main);
};

export default createGui;

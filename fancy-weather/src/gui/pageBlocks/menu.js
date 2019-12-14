import createElement from '../elementClasses/createElement';
import SearchInput from '../elementClasses/searchInput';
import TranslatableElement from '../elementClasses/translatableElement';
import { placeholder, search } from '../data/searchElements';
import TranslatableBlock from './AbstractClasses/TranslateBlockClass';

class MenuBlock extends TranslatableBlock {
  constructor(main) {
    super();
    this.translatableElements = [];

    const menu = createElement('div', ['menu']);
    main.appendChild(menu);

    const refreshBackgroundBtn = createElement('button', ['menu-refresh_background']);
    menu.appendChild(refreshBackgroundBtn);

    const languages = ['en', 'ru', 'by'];
    const languageChanger = createElement('select', ['menu-language_selector']);
    menu.appendChild(languageChanger);

    languages.forEach((language) => {
      const option = document.createElement('option');
      option.text = language;
      option.value = language;
      languageChanger.add(option);
    });

    const tempBlock = createElement('div', ['menu-temp_changer']);
    menu.appendChild(tempBlock);

    const fRadio = createElement('div', ['menu-temp_changer-fahrenheit']);
    fRadio.innerHTML = '°F';
    tempBlock.appendChild(fRadio);

    const cRadio = createElement('div', ['menu-temp_changer-celsius']);
    cRadio.innerHTML = '°C';
    tempBlock.appendChild(cRadio);

    const currentMeasurement = createElement('div', ['menu-temp_changer-current']);
    tempBlock.appendChild(currentMeasurement);


    const searchInput = new SearchInput(['menu-search_input']);
    searchInput.setValue(placeholder);
    menu.appendChild(searchInput.element);
    this.translatableElements.push(searchInput);

    const searchBtn = new TranslatableElement('button', ['menu-search_btn']);
    searchBtn.setValue(search);
    menu.appendChild(searchBtn.element);
    this.translatableElements.push(searchBtn);
  }
}

export default MenuBlock;

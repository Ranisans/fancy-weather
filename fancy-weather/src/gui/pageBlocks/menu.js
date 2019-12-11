import createElement from '../elementClasses/createElement';
import SearchInput from '../elementClasses/searchInput';
import TranslatableElement from '../elementClasses/translatableElement';
import measuringScale from '../constants';
import { placeholder, search } from '../data/searchElements';

const createMenu = (main) => {
  const translatableElements = [];

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

  const fRadio = createElement('button', ['menu-temp_changer', 'menu-temp_changer_fahrenheit']);
  fRadio.value = measuringScale.F;
  fRadio.innerHTML = '°F';
  menu.appendChild(fRadio);

  const cRadio = createElement('button', ['menu-temp_changer', 'menu-temp_changer_celsius', 'menu-temp_changer--active']);
  cRadio.value = measuringScale.C;
  cRadio.innerHTML = '°C';
  menu.appendChild(cRadio);

  const searchInput = new SearchInput(['menu-search_input']);
  searchInput.setValue(placeholder);
  menu.appendChild(searchInput.element);
  translatableElements.push(searchInput);

  const searchBtn = new TranslatableElement('button', ['menu-search_btn']);
  searchBtn.setValue(search);
  menu.appendChild(searchBtn.element);
  translatableElements.push(searchBtn);
  // temporarily
  searchBtn.element.innerText = 'Search';

  return translatableElements;
};

export default createMenu;

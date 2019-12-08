const createElement = (type, classes) => {
  const element = document.createElement(type);
  element.classList.add(...classes);
  return element;
};

export default createElement;

console.log('main.js')

const createDom = (element, className) => {
  const newElement = document.createElement(element);
  newElement.setAttribute('class', className);
  return newElement;
};

const para = createDom('p', 'para');
document.body.appendChild(para);
para.innerText = 'create'

console.log('main.js')

const createDom = (element, className) => {
  const newElement = document.createElement(element);
  newElement.setAttribute('class', className);
  return newElement;
};

const para = createDom('p', 'para');
document.body.appendChild(para);
para.innerText = 'create'

const button = createDom('button', 'firstBtn');
document.body.appendChild(button);
button.textContent = 'Click';

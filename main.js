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

const root = document.createElement('div');
document.body.appendChild(root);

class Element {
  constructor(elm, text) {
    this.elm = elm
    this.text = text
  }
  
  create(parent) {
    const newElm = document.createElement(this.elm);
    newElm.textContent = this.text
    parent.appendChild(newElm)
//    return newElm
  }

}

const head = new Element('h2', 'header')
console.log(head);
head.create(root);
/*
const title = head.create();
console.log(title);
document.body.appendChild(title);
//document.body.appendChild(title);
*/


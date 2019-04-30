// let body = document.querySelector('body');
// const button = document.createElement('button');
// button.textContent = 'Click';
// body.appendChild(button);
// console.log(button);
export default{
  p: undefined,
  init: function(element, count, onClick){
    let container = document.createElement('div');
    let p = document.createElement('p');
    let button = document.createElement('button');
    button.textContent= 'click me!';
    button.addEventListener('click', onClick);

  this.p = p;
    container.appendChild(p);
    container.appendChild(button);

    element.appendChild(container);
  },
  update: function(newCount){
    let p = this.p;
    p.textContent=newCount;
  }
};

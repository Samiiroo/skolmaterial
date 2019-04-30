let buttonI = document.querySelector('.increment');
let buttonR = document.querySelector('.reset');
let buttonD = document.querySelector('.decrement');
let h1 = document.querySelector('h1');
buttonI.addEventListener('click', function(){
  value.increment();
  h1.textContent= value.getCurrentValue();
});

buttonR.addEventListener('click',function(){
  value.reset();
  h1.textContent= value.getCurrentValue();
});
buttonD.addEventListener('click',function(){
  value.decrement();
  h1.textContent= value.getCurrentValue();
});
class Counter{
  constructor(){
    this.value = 0;
  }
  increment(){
    this.value++;
  }
  reset(){
    this.value = 0;
  }
  getCurrentValue(){
    return this.value;
  }
  decrement(){
    this.value--
  }

}
let value = new Counter();

h1.textContent= value.getCurrentValue();

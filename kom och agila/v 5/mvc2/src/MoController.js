// function counter (){
// let  count = 0;
//   console.log(count);
// }
// counter()
// button.addEventListener('click',function(count){
// })
import model from './model';
import view from './view';

export function init(){
  let main = document.querySelector('main');
view.init(function(){
  model.increment();
  view.update(model.getCount());
});
}

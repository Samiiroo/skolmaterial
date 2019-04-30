// /1. Summera alla tal mellan 0 och 12
//
// for(let i=0; i<=12; i++){
//
// let x =(i*(i+1))/2;
// console.log(x);
// }
//
//
// / Kopiera denna arrayen [2, 99, 47, 32, 5] och summera alla tal i den
// //let sum =  [2, 99, 47, 32, 5].reduce((a,b)=> a + b, 0); console.log(sum);
// function summArr(){
//   let array =[2,99,47,32,5];
// }
function ButtonCount() {
let button = document.createElement("button");
document.body.appendChild(button);
let i = 0;
button.textContent = i;
button.addEventListener("click", function() {
i++;
button.textContent = i;
});
}
new ButtonCount();
new ButtonCount();

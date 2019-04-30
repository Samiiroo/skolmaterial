// function doubleAndSumNumbersOver10(array) {
//   return array >= 10 ;
// }
// let over10 = [12, 5, 8, 130, 44].filter(doubleAndSumNumbersOver10);
// console.log(over10)
// over10 = over10.map(function(value){
//   return value *2
// });
// console.log(over10);
// /*let sum = over10.reduce(function(acc, value ){
//   return acc + value;
// },0 );
// console.log(sum);
// */
//   let sum = 0;
//   for(let i=0; i<over10.length;i++){
//     sum +=over10[i];
//   }
// console.log(sum);

function doubleAndSumNumbersOver10(arr){
  return arr.filter ( x => x > 10 )// filtrerar bort allt under 10
  .map ( x => x * 2) //här tar vi vår nya arr med alla tal över 10 dubblar
  .reduce((acc,value)=> acc + value);// här tar vi och adderar vårt nya arr
}
let sum= doubleAndSumNumbersOver10([12,5,8,130,44]);//skapar variablen sum och ger den functionen som värde med array som argument
console.log(sum);

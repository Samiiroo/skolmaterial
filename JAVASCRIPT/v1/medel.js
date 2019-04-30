/*function mean (arr) {
  let sum = 0;
  for (let x of arr) {
    sum = sum + x;
  }
  return sum / arr.lenght;
}
mean([1, 2, 3, 4, 5, 6]);
/*/

//const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
// arrAvg([20, 10, 5, 10]) -> 11.25
function mean(arr) {
  let sum =arr.reduce(function(acc, x){
    return acc + x;
  });
  return sum / arr.lenght;
}
mean([1, 2, 3, 4, 5, 6]);

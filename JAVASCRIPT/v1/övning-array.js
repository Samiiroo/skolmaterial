// // start and end date
// let
//     startDate = new Date ("2018-07-01"),
//     endDate = new Date ("2018-08-31");
// //date array
// let getDateArray = function(start, end) {
// let
//     arr = new Array(),
//     dt = new Date(start);
//
//     while (dt <= end) {
//     arr.push(new Date(dt));
//     dt.setDate(dt.getDate() + 1);
//   }
//
//   return arr;
//
// }
// let dateArr = getDateArray(startDate, endDate);
// console.log(dateArr)


function double(x){
  return x * 2;
}
function addFive(x){
  return x + 5;
}

let x = addFive(double(10));
let y = double(addFive(10));

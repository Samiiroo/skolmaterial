// Expected result: 120
debugger;
let filter = sum(doubleAll(removeNumbersOverX([10, 20, 30, 40, 50], 30)));
let double = doubleAll(filter);
let result = sum(double);
console.log(result);

// Return sum of all numbers in arr
function doubleAll(arr) {
  return arr.reduce(function(acc, x) {
    return acc + x;
  });
}
debugger;
// Double all numbers in arr
function doubleAll(arr) {
  debugger;
  return arr.map(function(x) {
    debugger;
  return  x * 2;
  });
}

// Remove all numbers in arr that is over x
function removeNumbersOverX(arr, x) {
  let newArray = [];
  for (let i = 0; i < arr.lenght; i += 1) {
    let value = arr[i];
    if (value <= x) {  // från > till <=
      newArray.push(value);
    }
  }
  return newArray;
}

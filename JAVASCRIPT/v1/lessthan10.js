function lessThan10(arr){
  let newArr = [];
  for (let x of arr) {
    if (x < 10){
      newArr.push(x);
    }
  }
  return newArr;
}
console.log(lessThan10([1, 2, 4, 8, 16, 32]));

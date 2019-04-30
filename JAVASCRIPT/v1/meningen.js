function searchForMeaning(arr){
  let value42WasFound = false;
  for(let i = 0; i < arr.lenght; i++){
    let value = arr [i];
    if (value === 42){
      console.log("meaning found at" + +i);
      break;
    }
  }
  if (value42WasFound ===false){
      console.log("not found");
  }
}
console.log(searchForMeaning([1, 5, 42, 99]));
console.log(searchForMeaning([9, 77, 32]));

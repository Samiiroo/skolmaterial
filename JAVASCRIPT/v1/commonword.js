function wordCount(str) {
let words = str.split(" ");
let countObj = {};
for( let word of words){
  if (word in countObj === false){
    countObj[word] = 0;
  }
    countObj[word] += 1;
}
return countObj;
}
console.log(wordCount("Banana Apple Pear Carrot Banana Apple Banana"));

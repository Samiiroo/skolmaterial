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

function mostCommonWord(str){
  let countObj = wordCount(str);

  let maxCount = 0;
  let wordWithMaxCount;
  for (let key in countObj){
    let value = countObj[key];
    console.log(key, value);
  }
}
console.log(wordCount("Banana Apple Pear Carrot Banana Apple Banana"));

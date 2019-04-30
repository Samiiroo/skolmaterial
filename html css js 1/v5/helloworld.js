var x = 3;
if (x == 3){
  console.log("Rätt");
  }
else{
  console.log("Fel");
}


 var i;
 for (i=0; i<20; i++){
   console.log(i +"  hello, world");
 }

var sum = 0;
var i = 0;
while (i < 100) {
sum = sum + i;
i++;
console.log(sum)
}  var sum = 0
var i = 0;
while (i < 100){
sum = sum + i;
i+=2;
console.log(sum)
}


var sum = 0;
var i = 1;
while (i < 100){
sum = sum + i;
i+=2;
console.log(sum)
}


var i;
var sum = 0;
for(i = 0; i < 100; i +=1){
  if ((i % 10) ===0) continue;
  sum += i;
}
console.log(sum)


var myArray= [];
var i;
for(i = 0; i < 100; i++){
myArray.push(i);
}
console.log(myArray);


for(i = 0; i < myArray.length; i++){
myArray[i] *= 2;
}
console.log(myArray);

function isBetween(x, from, to){
if(x > from && x < to){
  return true;
}
return false;
}

var x = isBetween (10,0,20);
console.log(x)


function range(from, to);{
  var myArray[];
  for (var i = from; i < to; i++){
    myArray.push(i);
  }
  return myArray;
}
console.log(range(3,10));

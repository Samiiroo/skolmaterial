debugger;
function callbackFunction () {
console.log('I was run after delayed function' );
}
function delayedFunction (cb) {
console.log('I waited 2 seconds before doing this' );
cb();
}
setTimeout(function() {
delayedFunction(callbackFunction);
}, 2000);


function a(){
  console.log("a");
}
function b(){
  console.log("b");
}
function c(){
  console.log("c");
}

setTimeout(a,1000);
setTimeout(b,2000);
setTimeout(c,3000);

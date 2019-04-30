// // returns a promise that resolves after the specified number of ms
// function delay(ms) {
//     return new Promise(resolve => {
//         setTimeout(resolve, ms);
//     });
// }
//
// // function that will print the numbers in correct order, with delays
// async function print(num) {
//     for (let i = 1; i <= num; i++) {
//
//         await delay(Math.random() * 1000); // wait
//
//         console.log(i); // print number
//     }
// }
//
// print(10); // actually execute function
function randomWait(){ // skapar function randomWait
  return new Promise ((resolve, reject)=>{ //skapar promisen.
    let time = Math.random() * 5; // math.random default värde är 0-1 så vi för
                                  //att få ett random till att bli mellan 0 och 5
    setTimeout(function(){//här gör vi att resolven får time som argument
      resolve(time)
    },time * 1000) //här gör vi så att det är i 5  hela sekunder. alltså 5000 millisekunder
  })
}
randomWait().then(function(time){
  console.log(time);
})

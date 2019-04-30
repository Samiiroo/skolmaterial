/* function Point(x,y){
  this.name=name;
}
Point.prototyp.plus= function(other){
  let point1= this;
  let point2= other;
  let x = this.x + other.x;
  let y= this.y + other.y;
  let newPoint = new Point(x,y);
  return newPoint;
}

let point1 = new point (2,3);
console.log(point1);
let point2 =new point(7,8);
console.log(point2);
let point3 = point1.plus(point2);
console.log(point3); // >> {x:9 y:11}
*/

function factorialize(num) {
  // Step 1. Create a variable result to store num
  var result = num;

  // If num = 0 OR num = 1, the factorial will return 1
  if (num === 0 || num === 1)
    return 1;

  // Step 2. Create the WHILE loop
  while (num > 1) {
    num--; // decrementation by 1 at each iteration
    result = result * num; // or result *= num; 
    /*
                    num           num--      var result      result *= num
    1st iteration:   5             4            5             20 = 5 * 4
    2nd iteration:   4             3           20             60 = 20 * 3
    3rd iteration:   3             2           60            120 = 60 * 2
    4th iteration:   2             1          120            120 = 120 * 1
    5th iteration:   1             0          120
    End of the WHILE loop
    */
  }

  // Step 3. Return the factorial of the provided integer
  return result; // 120
}
factorialize(5);

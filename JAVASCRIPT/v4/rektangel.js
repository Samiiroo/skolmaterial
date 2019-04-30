// här skapar vi functionen.
function Rektangel(height, witdh, x, y){
  this.height = 0;
  this.witdh = 0;
  this.x = 0;
  this.y = 0;

}
Rektangel.prototype.area = function(){
  return this.witdh * this.height;
}
Rektangel.prototype.scale = function(n){
  this.height = this.height * n;
  this.witdh = this.witdh * n;
}
//här ändrar vi värden om vi vill scale kan heta vad som helst.
//skapa bara
Rektangel.prototype.setSize = function(height, witdh){
  this.height = 0;
  this.witdh = 0  ;
}
Rektangel.prototype.setPos = function(x, y){
  this.x = 0;
  this.y = 0;
}
let r = new Rektangel(50,100,30,40);
///////////////////////////////////////////
let canvas = document.getElementById( 'canvas');
let ctx = canvas.getContext( '2d');
let x = 0;
setInterval(function() {
console.log(x);
ctx.clearRect( 0, 0, 300, 150); // Standard size is 300px * 150px
ctx.fillStyle = 'blue';
x += 10;

ctx.fillRect(x, 0, 500, 100);
}, 1000);

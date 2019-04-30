function onClick(e) {
 var button = e.target;
 console.log('Hello World');
}
var myButtons = document.querySelectorAll('button');
for (var i = 0; i < myButtons.length; i++) {
var button = myButtons[i];
button.addEventListener('click', onClick);
}
var p = document.createElement("p");
var n = document.createTextNode("Hello World!");
p.appendChild(n);
var e = document.getElementById("div1");
e.appendChild(p);

function onClick(e) {
 var button = e.target;
 console.log('You Clicked:' + button.textContent);
}
var myButtons = document.querySelectorAll('button');
for (var i = 0; i < myButtons.length; i++) {
var button = myButtons[i];
button.addEventListener('click', onClick);
}

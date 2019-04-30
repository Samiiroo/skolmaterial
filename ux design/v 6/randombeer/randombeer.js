let parsedData;
let randomBtn = document.querySelector('button')
function getRandom(){
  let req = new XMLHttpRequest();
  req.open('GET', 'https://api.punkapi.com/v2/beers/random'); //hämta datan från länken
  req.addEventListener('load',parseRandom);//parsa datan vi fått.
  req.send();
}
getRandom();

function parseRandom(){ //skapa functionen som parsar.
  let parsedData = JSON.parse(this.responseText);// parsedData

console.log(parsedData);

let h1 = document.createElement('h1');
h1.innerHTML = parsedData[0].name;
h1.innerHTML =parsedData

let renderDiv = document.querySelector('.render');
renderDiv.appendChild(h1);
  }
    randomBtn.addEventListener('click',function(e){

  });

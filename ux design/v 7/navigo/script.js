const tabsHolder = document.querySelector('ul');
const tabs = document.querySelectorAll('li ');
const main = document.querySelector('main');

var root = null;
var useHash= true;
var hash = '#';
var router = new Navigo (root, useHash, hash);

function homePage() {
  const main = document.querySelector('main');
  main.innerHTML = 'Main'
}
function dogPage() {
  const main = document.querySelector('main');
  main.innerHTML = 'Dogs'
}

function catPage() {
  const main = document.querySelector('main');
  main.innerHTML = 'Cats'
}
 router.on({
   '/dogs': dogPage,
   '/cats': catPage,
   '*': homePage
 }).resolve();

for (let tab of tabs){
tab.addEventListener('click', changeTab);
}
function changeTab(e){
  main.innerHTML = '';
  for (let tab of tabs){
    tab.classList.remove('active');
  }
  this.classList.add('active');
}

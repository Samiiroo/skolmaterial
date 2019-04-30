for (let i=0; i < 100; i++){
let img = document.createElement('img')
let gallery = document.querySelector('#gallery')
let body= document.querySelector('body')
img.setAttribute('src','https://picsum.photos/200/300/?random&'+i)
gallery.appendChild(img);
}
var observer = new IntersectionObserver(cb, options);
observer.observe(document.querySelector('#gallery'))
let options ={
  root: null,
  rootMargin: '100px 0px',
  threshold :0.01,
};
function callback(entries){
  console.log(entries)
}

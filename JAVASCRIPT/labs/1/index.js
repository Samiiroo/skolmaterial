let link = document.createElement("link"); 
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = 'main.css';
document.getElementsByTagName('head')[0].appendChild(link);

document.title = "Fruits & Vegetables Corp";

let corpName = document.querySelector("h1");
corpName.textContent = "Fruits &  Vegetables Corp";

let listVeg = document.querySelectorAll("a");
let lastLi = listVeg[listVeg.length - 1];
lastLi.textContent = "Vegetables";

let main = document.querySelector("#main");
let about = document.querySelector("#about");
let contact = document.querySelector("#contact");
main.insertBefore(about, contact);

about.removeChild(about.childNodes[0]);
aboutH2 = document.createElement("h2");
aboutH2.textContent = "About";
about.appendChild(aboutH2,);
pAbout = document.createElement("p");
pAbout.textContent = "We're the best in fruits & vegetables";
about.appendChild(pAbout);

contactH2 = document.createElement("h2");
contactH2.textContent = "Contact";
contact.appendChild(contactH2);
contact.insertBefore(contactH2, contact.childNodes[0]);



let allTd = document.querySelectorAll("td");
let firstTd = allTd[0];
let secondTd = allTd[1];

let newTh1 = document.createElement("th");
newTh1.textContent = "Name";
let newTh2 = document.createElement("th");
newTh2.textContent = "Email";


firstTd.parentNode.replaceChild(newTh1, firstTd);
secondTd.parentNode.replaceChild(newTh2, secondTd);

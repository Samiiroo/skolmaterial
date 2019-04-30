
let main = document.querySelector(“main”);
let ul = document.createElement(“ul”);
main.appendChild(ul);
getData()
 .then(response => JSON.parse(response).data)
 .then(data => {
   data.map(d => {
     console.log(d);
     let li = document.createElement(“li”);
     li.appendChild(document.createTextNode(d.name));
     ul.appendChild(li);
   });
 });

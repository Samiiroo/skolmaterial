const shadow = document.querySelector("#shadow").attachShadow({mode: 'closed'});
const style = document.createElement('style');
const pEl = document.createElement('p');
pEl.innerHTML = 'jag är P';
shadow.appendChild(style);
shadow.appendChild(pEl);

style.innerHTML= `
p{
  background-color: #6200ee;
   border: none;
   padding: 20px 12px;
   color: white;
   font-weight: bold;
   border-radius: 20px;
   line-height: 0;
   margin: 10px;
}
`;

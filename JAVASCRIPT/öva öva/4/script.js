/*
# Uppgift 4

Skriv en funktion `renderPlanets` som tar en array med objekt som argument.
Funktionen ska skapa en tabell som listar alla planeter givna i arrayen.
Skapa 3 kolumner där du visar allt i objektet förutom hur många månar planeterna har.
Tabellen ska renderas i `main` elementet.

*/
/* Implement your solution here */
function renderPlanets(myArr){
  let main  = document.querySelector('main');
  let table = document.createElement('table');
  let tableHead= document.createElement('thead');
  let tableBody= document.createElement('tbody');

  main.appendChild(table);
  table.appendChild(tableHead);
  table.appendChild(tableBody);
  let row = document.createElement('tr');
  tableHead.appendChild(row);

  let headRow = myArr[0];
  for(let key in headRow){

    let th = document.createElement('th');
    row.appendChild(th);
    th.textContent = key;
  }
    for(let i=0; i< myArr.length;i++){
      let rowData = myArr[i];
        let row = document.createElement('tr');
        tableBody.appendChild(row);
        for(let key in rowData){

          let value = rowData[key];
          let td = document.createElement('td');
          row.appendChild(td);
          td.textContent= value;
        }
    }
}
/* Do not touch the code below this line */
renderPlanets([
  {name: 'Mercury', mass:  0.06, period: 0.24, moons: 0},
  {name: 'Venus', mass: 0.82, period: 0.62, moons: 0},
  {name: 'Earth', mass: 1.0, period: 1.0, moons: 1},
  {name: 'Mars', mass: 0.11, period: 1.88, moons: 2},
  {name: 'Jupiter', mass: 317.8, period: 11.86, moons: 79},
  {name: 'Saturn', mass: 95.2, period: 29.46, moons: 62},
  {name: 'Uranus', mass: 14.6, period: 84.01, moons: 27},
  {name: 'Neptune', mass: 17.2, period: 164.8, moons: 14},
]);

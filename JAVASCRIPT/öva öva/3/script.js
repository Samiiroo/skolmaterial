/*Uppgift 3
Skriv en funktion renderOrderedList som tar en array som argument. Arrayen innehåller strängar.
 Du ska rendera alla värden i en ordnad lista under main elementet i index.html.*/

 /* Implement your solution here */
 function renderOrderedList() {
    // Establish the array which acts as a data source for the list
    var listData =["Alpha", "Beta", "Gamma", "Delta", "Epsilon"];

    // Make a container element for the list
    var listContainer = document.createElement('div');

    // Add it to the page
    document.getElementsByTagName('body')[0].appendChild(listContainer);

    // Make the list
    var listElement = document.createElement('ol');

    // Add it to the page
    listContainer.appendChild(listElement);

    // Set up a loop that goes through the items in listItems one at a time
    var numberOfListItems = listData.length;

    for (var i = 0; i < numberOfListItems; ++i) {
        // create an item for each one
        var listItem = document.createElement('li');

        // Add the item text
        listItem.innerHTML = listData[i];

        // Add listItem to the listElement
        listElement.appendChild(listItem);
    }
 }

/* Do not touch the code below */
renderOrderedList(["Alpha", "Beta", "Gamma", "Delta", "Epsilon"]);

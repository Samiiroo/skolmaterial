function createP() {
    let input = document.querySelector('#inputfield');
    let p = document.createElement('p');
    p.textContent = input.value;
    let shoppingDiv = document.querySelector('.shoppingli');
    shoppingDiv.appendChild(p);
    let button = document.createElement('button');
    p.appendChild(button);
    button.textContent = 'remove';
    button.addEventListener('click', function() {
        p.parentElement.removeChild(p);
    });
}
let submitButton = document.querySelector('#butsub');
submitButton.addEventListener('click', createP);

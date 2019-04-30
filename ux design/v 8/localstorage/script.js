//--------------------COUNT VISITS------------------------
const visits = parseInt(localStorage.getItem('visits') || '0') + 1;
const span = document.createElement('span');
span.textContent = `Du har besökt sidan ${visits} gånger!`;
document.body.appendChild(span);
localStorage.setItem('visits', visits.toString());



//-------------------Remember checkbox--------------------------
const checked = (localStorage.getItem('checked') || 'false') === 'true';
const checkbox = document.querySelector('input[type="checkbox"]');
checkbox.checked = checked;

document.querySelector('input[type="checkbox"]').addEventListener('change', (event) => {
  localStorage.setItem('checked', event.target.checked.toString());
});

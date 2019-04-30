
     // Form validation code will come here.
     function validate(e)

  {
        e.preventDefault()

    let name = document.querySelector('input[name="name"]');
console.log(name.value);
    if (name.value == "")

    let age = document.querySelector ('input[name="age"]');
console.log(age.value);
    if (age.value == "")

    let username = document.querySelector('input[name="username"]');
console.log(username.value);
    if (username.value == "")

    let password = document.querySelector('input[name="password"]');
console.log(password.value);
    if (password.value == "")

    let password = document.querySelector('input[name="passwordRepeat"]');
console.log(password.value);
    if (password.value == "")
    {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }
  }
let form = document.querySelector ('form');
form.addEventListener('submit' , validate);

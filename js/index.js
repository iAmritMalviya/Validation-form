console.log("you are in index.js");
$('#failure').hide();
$('#success').hide();


let phone = document.getElementById("phone");
let username = document.getElementById("name");
let email = document.getElementById("email");
let validEmail = false;
let validUser = false;
let validPhone = false;
phone.addEventListener("blur", () => {
  console.log("phone is blurred");
  let regex = /^((\+91)?|91)?[6789][0-9]{9}$/;
  let input = phone.value;
  console.log(input);
  if (regex.test(input)) {
    console.log("everything is good");
    phone.classList.remove("is-invalid");
 validPhone = true;

  } else {
    console.log("not good");
    phone.classList.add("is-invalid");
    validPhone = false;
  }
});

username.addEventListener("blur", () => {
  let regex = /^[@]([a-z]){2,5}$/;
  let input = username.value;

  if (regex.test(input)) {
    username.classList.remove("is-invalid");
 validUser = true;

  } else {
    username.classList.add("is-invalid");
    validUser = false;
  }
});

email.addEventListener("blur", () => {
  console.log("email is blurred");
  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,3}/;
  let input = email.value;
  console.log(regex.exec(input));
  
  if (regex.test(input)) {
    email.classList.remove("is-invalid");
validEmail = true;

  } else {
    email.classList.add("is-invalid");
    validEmail = false;
  }
});


let submit = document.getElementById('submit')
submit.addEventListener('click', (e) =>{
  e.preventDefault();
 console.log(validEmail, validPhone, validUser);
 

if (validEmail && validPhone && validUser) {
  
  $('#failure').hide();
  $('#success').show();
 

  
    
  } else {
    $('#failure').show();
$('#success').hide();

  }
  
})
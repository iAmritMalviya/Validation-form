let email = document.getElementById("email");
let phone = document.getElementById("phone");
let username = document.getElementById("username");
let validemail = false;
let validphone = false;
let validusername = false;
$("#success").hide();
$("#failure").hide();

email.addEventListener("blur", () => {
  let input = email.value;
  let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,9}$/;
  if (regex.test(input)) {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
    validemail = true;
  } else {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
    validemail = false;
  }
});

phone.addEventListener("blur", () => {
  let input = phone.value;
  let regex = /^(\+91)?[6789][0-9]{9}$/;
  // /^((\+91)?|91)?[6789][0-9]{9}$/
  console.log(regex.test(input));
  if (regex.test(input)) {
    phone.classList.add("is-valid");
    phone.classList.remove("is-invalid");
    validphone = true;
  } else {
    phone.classList.add("is-invalid");
    phone.classList.remove("is-valid");
    validphone = false;
  }
});

username.addEventListener("blur", () => {
  let input = username.value;
  let regex = /^@([a-z]){2,5}$/;
  if (regex.test(input)) {
    username.classList.add("is-valid");
    username.classList.remove("is-invalid");
    validusername = true;
  } else {
    username.classList.add("is-invalid");
    username.classList.remove("is-valid");
    validusername = false;
  }
});

let submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (validemail && validusername && validphone) {
    $("#success").show();
    $("#failure").hide();
    setTimeout(() => {
      $("#success").hide();
    }, 3000);

    setform();
  } else {
    $("#success").hide();
    $("#failure").show();
    setTimeout(() => {
      $("#failure").hide();
    }, 3000);
  }
});

function setform() {
  let storedForms = localStorage.getItem("forms");
  if (storedForms == null) {
    formsObj = [];
  } else {
    formsObj = JSON.parse(storedForms);
  }
  myForms = {
    email: email.value,
    phone: phone.value,
    username: username.value,
  };
  formsObj.push(myForms);
  localStorage.setItem("forms", JSON.stringify(formsObj));
}

let showBtn = document.getElementById("showBtn");
showBtn.addEventListener("click", () => {
  showFroms();
});

function showFroms() {
  let sForms = localStorage.getItem('forms');
  let showF = JSON.parse(sForms);
  let html = `<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Email</th>
    <th scope="col">Username</th>
    <th scope="col">Phone</th>
  </tr>
</thead>
<tbody >
</tbody>`;
  let showform = document.getElementById('showform');
  showF.forEach((element, index) => {
     html += `
   
        <tr>
     <th scope="row">${index + 1}</th>
     <td>${element.email}</td>
     <td>${element.username}</td>
     <td>${element.phone}</td>
   </tr>  
  `
      
  });
  showform.innerHTML = html;
  
}

var email = document.getElementById('email')
var password = document.getElementById('password')
var emailFormat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
var passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
var button = document.querySelector('.button')
var inputPlaceholder = document.querySelectorAll('input:not([type="submit"])')
var formData = document.querySelectorAll(".form")
var inputErrors = []
var inputErrorsContent = []
var emailError = inputErrors[0]
var passwordError = inputErrors[1]
for (var i=0; i<formData.length; i++){
  inputErrors[i] = document.createElement("p")
  inputErrorsContent[i] = document.createTextNode("incorrect. Insert a correct text.");
  inputErrors[i].appendChild(inputErrorsContent[i]);
  inputErrors[i].classList.add("error", "content-text");
  inputErrors[i].style.visibility = "hidden";
  formData[i].insertBefore(inputErrors[i], null);
}
function emailValidation () {
  if (!email.value.match(emailFormat)) {
    emailError().style.visibility = 'visible';
    email.classList.remove('error');
    email.classList.add('success', 'error');
  } else {
    email.classList.add('success');
    email.classList.remove('error', 'success');
  }
}
email.addEventListener('blur', emailValidation)

function passwordValidation () {
  if (!password.value.match(passwordFormat)) {
    passwordError([]).style.visibility = 'visible';
    password.classList.remove('error');
    password.classList.add('success', 'error');
  } else {
    password.classList.add('success');
    password.classList.remove('error', 'success');
  }
}
password.addEventListener('blur', passwordValidation)

inputPlaceholder.forEach(function (input) {
  input.addEventListener('focus', function () {
    input.classList.remove('error', 'success')
    var errorMessage = input.parentElement.lastElementChild
    errorMessage.style.visibility = 'hidden'
  })
})
function validateAll () {
  if (emailValidation()) {
    alert(`All inputs are ok :${email.value}`)
  } else {
    alert('Error')
  }
}
button.addEventListener('click', validateAll)

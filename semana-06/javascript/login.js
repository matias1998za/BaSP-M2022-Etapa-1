var email = document.getElementById('email')
var password = document.getElementById('password')
var emailMessage = document.querySelector(".emailMessage")
var passMessage = document.querySelector(".passMessage")
var emailFormat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
var passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
var button = document.querySelector('.button')
var inputPlaceholder = document.querySelectorAll('input:not([type="submit"])')
var formData = document.querySelectorAll('.form')

function emailValidation () {
  if (!!email.value.match(emailFormat)) {
    email.classList.remove('error')
    email.classList.add('success')
    emailMessage.innerHTML=" "
    return true
  } else {
    email.classList.add('error')
    email.classList.remove('success')
    emailMessage.style.visibility= "visible"
    emailMessage.innerHTML = "Email incorrect"
    return false
  }
}
email.addEventListener('blur', emailValidation)

function passwordValidation () {
  if (!!password.value.match(passwordFormat)) {
    password.classList.remove('error')
    password.classList.add('success')
    passMessage.innerHTML= " "
    return true
  } else {
    password.classList.add('error')
    password.classList.remove('success')
    passMessage.style.visibility = "visible"
    passMessage.innerHTML = "Password incorrect"
    return false
  }
}
password.addEventListener('blur', passwordValidation)

  email.addEventListener('focus', function () {
    email.classList.remove('error', 'success')
    var errorMessage = email.parentNode.parentNode.lastElementChild
    emailMessage.innerHTML = " "
  })

  password.addEventListener('focus', function () {
    password.classList.remove('error', 'success')
    var errorMessage = password.parentNode.parentNode.lastElementChild
    passMessage.innerHTML = " "
  })

function validateAll () {
  if (emailValidation()  && passwordValidation() ) {
    alert(`All inputs are ok :${email.value}${password.value}`)
  } else {
    var errorList = ""
    inputPlaceholder.forEach(function(input){
      errorList += `${input.name}: ${input.value} \n`
    })
    alert(`There is an error with the inputs:\n ${errorList}`)
  }
}
button.addEventListener('click', validateAll)

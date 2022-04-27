/*const dob = document.getElementById("dob");

dob.onblur = function () {
  if(new Date(dob.value).getTime() > new Date().getTime()) {
    console.log("No paso")
  } else {
    console.log("Paso")
  }
}*/
var name = document.getElementById("name")
var lastName = document.getElementById("l-name")
var idCard = document.getElementById("card")
var birth = document.getElementById("birth")
var phone = document.getElementById("phone")
var address = document.getElementById("address")
var locality = document.getElementById("locality")
var zipCode = document.getElementById("z-code")
var email = document.getElementById('email') 
var password = document.getElementById('password')
var rPassword = document.getElementById('r-password')
var firstNameValue = /[A-Za-z]{3,}/
var lastNameValue = /[A-Za-z]{3,}/
var idCardValue = /[0-9]{7,}/
var phoneValue = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
var addressValue = /[A-Z a-z 0-9]\s{5,}/
var localityValue = /[/[A-Z]|[a-z]|[0-9]{3,}]/
var zipCodeValue = /[0-9]{4,5}/
var emailValue = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
var passwordValue = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

function firstName(){
  if(name.value.match(firstNameValue)){
    name.classList.remove('error');
    name.classList.add('success', 'error');
    return true
}else{
    name.classList.add('success');
    name.classList.remove('error', 'success');
    return false
  }
  name.addEventListener('blur', firstName)
}

function lastName(){
  if(lastName.value.match(lastNameValue)){
    lastName.classList.remove('error');
    lastName.classList.add('success', 'error');
    return true
}else{
    lastName.classList.add('success');
    lastName.classList.remove('error', 'success');
    return false
  }
}
lastName.addEventListener('blur', lastName)

function idCard(){
  if(idCard.value.match(idCardValue)){
    idCard.classList.remove('error');
    idCard.classList.add('success', 'error');
    return true
}else{
    idCard.classList.add('success');
    idCard.classList.remove('error', 'success');
    return false
  }
}
idCard.addEventListener('blur', idCard)
/*function birth(){
  if(birth.value.match())
}*/
function phone(){
  if(phone.value.match(phoneValue)){
    phone.classList.remove('error');
    phone.classList.add('success', 'error');
    return true
}else{
  phone.classList.add('success');
  phone.classList.remove('error', 'success');
  return false
  }
}
phone.addEventListener('blur', phone)
function address(){
  if(address.value.match(addressValue)){
    address.classList.remove('error');
    address.classList.add('success', 'error');
    return true
}else{
  address.classList.add('success');
  address.classList.remove('error', 'success');
  return false
  }
}
address.addEventListener('blur', address)
function locality(){
  if(locality.value.match(localityValue)){
    locality.classList.remove('error');
    locality.classList.add('success', 'error');
    return true
}else{
  locality.classList.add('success');
  locality.classList.remove('error', 'success');
  return false
  }
}
locality.addEventListener('blur', locality)
function zipCode(){
  if(zipCode.value.match(zipCodeValue)){
    zipCode.classList.remove('error');
    zipCode.classList.add('success', 'error');
    return true
}else{
  zipCode.classList.add('success');
  zipCode.classList.remove('error', 'success');
  return false
  }
}
const form = document.querySelector("#contactForm");

const formName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");

const formSubject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const successMessage = document.querySelector(".successBox");

function formValidation() {
  event.preventDefault();
  successMessage.innerHTML = "";

  if (checkValueLength(formName.value, 0)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (checkValueLength(formSubject.value, 10)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkValueLength(address.value, 25)) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  if (emailValidation(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  isFormValid();
}

form.addEventListener("submit", formValidation);

function checkValueLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function emailValidation(email) {
  const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function isFormValid() {
  if (checkValueLength(formName.value, 0) && checkValueLength(formSubject.value, 10) && emailValidation(email.value) && checkValueLength(address.value, 25)) {
    successMessage.innerHTML = `<p class="success">The form was submitted successfully</p>`;
    form.reset();
  } else {
  }
}

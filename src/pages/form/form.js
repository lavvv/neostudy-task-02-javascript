const nameInputElement = document.getElementById("loginForm__name");
const passwordInputElement = document.getElementById("loginForm__password");

const checkNameValidity = function () {
  const nameValue = nameInputElement.value;
  let errorMessage = "";
  const nameErrorElement = document.getElementById("loginForm__nameError");

  if (nameValue.trim().length < 3) errorMessage = "Name is too short";
  if (/[^a-zA-Zа-яА-Я\s]/.test(nameValue)) errorMessage = "Use letters only";

  if (errorMessage && nameValue) {
    nameInputElement.classList.add("loginForm__input--error");
    nameErrorElement.textContent = errorMessage;
  } else {
    nameInputElement.classList.remove("loginForm__input--error");
    nameErrorElement.textContent = "";
  }

  errorMessage = "";
};

const checkPasswordValidity = function () {
  const passwordValue = passwordInputElement.value;
  let errorMessage = "";
  const passwordErrorElement = document.getElementById(
    "loginForm__passwordError",
  );

  if (/^[^0-9]+$/.test(passwordValue))
    errorMessage = "Password must contain at least one number";
  if (/^[0-9]+$/.test(passwordValue))
    errorMessage = "Password cannot contain only numbers";
  if (passwordValue.length < 8) errorMessage = "Password is too short";
  if (/[_*/\\]+/.test(passwordValue))
    errorMessage = "Password cannot contain */\\_";

  if (errorMessage && passwordValue) {
    passwordInputElement.classList.add("loginForm__input--error");
    passwordErrorElement.textContent = errorMessage;
  } else {
    passwordInputElement.classList.remove("loginForm__input--error");
    passwordErrorElement.textContent = "";
  }

  errorMessage = "";
};

checkPasswordValidity();
checkNameValidity();
nameInputElement.addEventListener("input", checkNameValidity);
passwordInputElement.addEventListener("input", checkPasswordValidity);

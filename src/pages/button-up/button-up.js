const buttonUpElement = document.createElement("button");

buttonUpElement.classList.add("button", "buttonUp", "buttonUp--invisible");
buttonUpElement.innerHTML = "&uarr;";

buttonUpElement.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const buttonUpVisibility = function () {
  window.scrollY > 0
    ? buttonUpElement.classList.remove("buttonUp--invisible")
    : buttonUpElement.classList.add("buttonUp--invisible");
};

window.addEventListener("scroll", buttonUpVisibility);
document.body.append(buttonUpElement);

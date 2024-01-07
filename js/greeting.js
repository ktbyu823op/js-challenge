const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input:first-child");
const greeting = document.querySelector(".greeting");
const nameBtn = document.querySelector(".name-btn");

HIDDEN_CLASSNAME = "hidden";
USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Have a good day, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onNameClick() {
  loginInput.value = "";
  localStorage.removeItem(USERNAME_KEY);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

nameBtn.addEventListener("click", onNameClick);

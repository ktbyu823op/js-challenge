const time = document.querySelector(".time");
const date = document.querySelector(".date");

function getClock() {
  const dateObj = new Date();
  time.innerText = dateObj.toLocaleTimeString();
  date.innerText = dateObj.toLocaleDateString();
}

getClock();
setInterval(getClock, 1000);

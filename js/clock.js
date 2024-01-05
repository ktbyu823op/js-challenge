const time = document.querySelector(".clock__time");
const date = document.querySelector(".clock__date");

function getClock() {
  const dateObj = new Date();
  const hour = dateObj.getHours();
  const minute = String(dateObj.getMinutes()).padStart(2, "0");
  time.innerText = `${hour}:${minute}`;
  date.innerText = dateObj.toLocaleDateString();
}

getClock();
setInterval(getClock, 1000);

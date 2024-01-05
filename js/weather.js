const weather = document.querySelector(".weather span:first-child");
const city = document.querySelector(".weather span:last-child");

API_KEY = "8c97137670bb0a330ec95885a452aa08";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = data.name;
    });
}

function onGeoErrors() {
  weather.innerText = "If you want to see the weather in your city";
  city.innerText = "Allow position access";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErrors);

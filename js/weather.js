const weatherIcon = document.querySelector(".weather__icon i");
const weather = document.querySelector(".weather__text span:first-child");
const city = document.querySelector(".weather__text span:last-child");

API_KEY = "8c97137670bb0a330ec95885a452aa08";

function getWeatherClass(weatherId) {
  if (weatherId > 800) {
    return "fa-cloud";
  } else if (weatherId === 800) {
    return "fa-sun";
  } else if (weatherId >= 700) {
    return "fa-bars-staggered";
  } else if (weatherId >= 600) {
    return "fa-snowflake";
  } else if (weatherId >= 300) {
    return "fa-cloud-showers-heavy";
  } else if (weatherId >= 200) {
    return "fa-cloud-bolt";
  }
}

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weatherIcon.className = `fa-3x fa-solid ${getWeatherClass(
        data.weather[0].id
      )}`;
      weather.innerText = `${data.weather[0].main} / ${Math.round(
        data.main.temp
      )}`;
      city.innerText = data.name;
    });
}

function onGeoErrors() {}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErrors);

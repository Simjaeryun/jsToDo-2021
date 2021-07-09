const WEATHER_API_KEY = "bfd963a4ab3bab3b8e923c431315e3ca";

const onGeoSucces = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(lat, lon);
  console.log(position);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerHTML = data.name;
      weather.innerHTML = data.weather[0].main;
    });
};

const onGeoError = () => {
  alert("위치를 찾을 수 없습니다.");
};

navigator.geolocation.getCurrentPosition(onGeoSucces, onGeoError);

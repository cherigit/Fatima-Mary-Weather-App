//to show current day and time
let updateCurrentDate = document.querySelector("#current_date");
let now = new Date();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let mins = now.getMinutes();
if (mins < 10) {
  mins = `0${mins}`;
}
let mapDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayandtime = mapDay[now.getDay()] + " " + hours + ": " + mins;

updateCurrentDate.innerHTML = dayandtime;

//to change city name afterward
function changeCity(event) {
  event.preventDefault();
  let cityreturn = document.querySelector("#cityreturn");
  let cityholder = document.querySelector("#cityholder");
  if (cityholder.value.length > 0) {
    cityreturn.innerHTML = cityholder.value;
  }

  let x = document.getElementById("cityreturn").innerHTML;
  let city = x;
  let urlRoot = "https://api.openweathermap.org/data/2.5/weather?";
  let apiKey = "5aac6d0188c6f17d6d2bbe6591b6fef0";
  let units = "metric";
  let url = `${urlRoot}q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(url).then(showWeather);
}
let form = document.querySelector("#form");
form.addEventListener("submit", changeCity);

// to show temperature
function showWeather(response) {
  let temperature = Math.floor(response.data.main.temp);
  console.log(temperature);
  let show = document.querySelector("#temperature");
  show.innerHTML = `${temperature}°`;
}

let x = document.getElementById("cityreturn").innerHTML;
let city = x;
let urlRoot = "https://api.openweathermap.org/data/2.5/weather?";
let apiKey = "5aac6d0188c6f17d6d2bbe6591b6fef0";
let units = "metric";
let url = `${urlRoot}q=${city}&appid=${apiKey}&units=${units}`;

axios.get(url).then(showWeather);

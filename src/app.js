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
  let urlRoot = "https://api.shecodes.io/weather/v1/current?";
  let apiKey = "84c6e0b933fac71ce8f9a33t197o5bd2";
  let units = "metric";
  let url = `${urlRoot}query=${city}&key=${apiKey}&units=${units}`;

  axios.get(url).then(showWeather);
}
let form = document.querySelector("#form");
form.addEventListener("submit", changeCity);

// to show temperature
function showWeather(response) {
  let temperature = Math.floor(response.data.temperature.current);
  let humidity = response.data.temperature.humidity;
  let wind = response.data.wind.speed;
  let description = response.data.condition.description;
  let icon = response.data.condition.icon_url;
  console.log(response.data);
  console.log(temperature, humidity);
  let showtemp = document.querySelector("#temperature");
  let showhumi = document.querySelector("#humidity");
  let showwind = document.querySelector("#wind");
  let showdesc = document.querySelector("#description");
  let showicon = document.querySelector("#icon");
  showtemp.innerHTML = `${temperature}°`;
  showhumi.innerHTML = `${humidity}`;
  showwind.innerHTML = `${wind}`;
  showdesc.innerHTML = `${description}`;
  showicon.setAttribute("src", `${icon}`);
}

let x = document.getElementById("cityreturn").innerHTML;
let city = x;
let urlRoot = "https://api.shecodes.io/weather/v1/current?";
let apiKey = "84c6e0b933fac71ce8f9a33t197o5bd2";
let units = "metric";
let url = `${urlRoot}query=${city}&key=${apiKey}&units=${units}`;

axios.get(url).then(showWeather);

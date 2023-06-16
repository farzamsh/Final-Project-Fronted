const API_KEY = "#############";
const API_URL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=############";
const headerContainer = document.querySelector("header");
const locInput = document.getElementById("location-input");
const locButton = document.getElementById("search-button");
const headline = document.querySelector("h1"); // WEATHER FORECAST
const searchButton = document.getElementById("search-button");
const locationInput = document.getElementById("location-input");
const locationName = document.getElementById("location-name");
const currentWeatherIcon = document.getElementById("current-weather-icon");
const currentTemperature = document.getElementById("current-temperature");
const currentDescription = document.getElementById("current-description");
const forecastList = document.getElementById("forecast-list");
const tomorrowWeatherIcon = document.getElementById("tomorrow-weather-icon");
const tomorrowTemperature = document.getElementById("tomorrow-temperature");
const tomorrowDescription = document.getElementById("tomorrow-description");

searchButton.addEventListener("click", () => {
  const location = locationInput.value;
  introAnimation();
  fetchWeatherData(location);
});
function getWeather() {
  // Get the city name from the input field

  var city = "tehran";
  // var city = document.getElementById("city").value;

  // Make a request to the OpenWeatherMap API
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=#############");
  xhr.onload = function() {
    // Get the weather data from the response
    var weatherData = JSON.parse(xhr.responseText);
    console.log(weatherData);
    // Display the weather data on the page
    document.getElementById("weather").innerHTML = weatherData.weather[0].description + ", " + weatherData.main.temp + "°C";
  };
  xhr.send();
  console.log("getWeather() called");
}
getWeather();


function fetchWeatherData(location) {
  // Make an API request to fetch weather data for the given location
  // You can use the fetch API or any library of your choice

  // Once you receive the data, update the HTML elements with the relevant information
  // For example:
  locationName.textContent = location;
  currentTemperature.textContent = "25°C";
  currentDescription.textContent = "Sunny";

  // Update tomorrow's forecast
  tomorrowTemperature.textContent = "27°C";
  tomorrowDescription.textContent = "Partly Cloudy";

  // You can dynamically create forecast items based on the received data
  const forecastData = [
    { day: "Monday", temperature: "28°C", description: "Sunny" },
    { day: "Tuesday", temperature: "26°C", description: "Partly Cloudy" },
    { day: "Wednesday", temperature: "24°C", description: "Rain" },
    // Add more forecast data as needed
  ];

  forecastList.innerHTML = "";
  forecastData.forEach((data) => {
    const forecastItem = document.createElement("div");
    forecastItem.classList.add("forecast-item");
    forecastItem.innerHTML = `
      <h4>${data.day}</h4>
      <p>${data.temperature}</p>
      <p>${data.description}</p>
    `;
    forecastList.appendChild(forecastItem);
  });
}
// spilit the screen and bring the whole page into left side and bring the new data into right side
const introAnimation = () => {
  
  const containerLeft = document.querySelector(".container-left");
  const containerRight = document.querySelector(".container-right");
  containerLeft.style = "width: 50%;";
  containerRight.style = "display: flex; width: 50%; ";
  headline.style = "font-size: 40px;";
  locInput.style = "  width: 400px;";
}

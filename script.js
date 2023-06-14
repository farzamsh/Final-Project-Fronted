const form = document.querySelector('form');
const input = document.querySelector('input');
const forecastDiv = document.querySelector('#forecast');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const city = input.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const forecast = `The temperature in ${city} is ${temperature}°C with ${description}.`;
      forecastDiv.textContent = forecast;
    })
    .catch(error => {
      console.error('Error:', error);
      forecastDiv.textContent = 'An error occurred. Please try again later.';
    });
});
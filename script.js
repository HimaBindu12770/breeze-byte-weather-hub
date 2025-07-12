async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      document.getElementById('weatherResult').innerHTML = "City not found!";
      return;
    }

    const temp = data.main.temp;
    const desc = data.weather[0].description;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;

    document.getElementById('weatherResult').innerHTML = `
      <h3>Weather in ${city}</h3>
      <p>🌡️ Temperature: ${temp}°C</p>
      <p>🌬️ Wind: ${wind} m/s</p>
      <p>💧 Humidity: ${humidity}%</p>
      <p>📄 Description: ${desc}</p>
    `;
  } catch (error) {
    document.getElementById('weatherResult').innerHTML = "Error fetching weather data.";
  }
}

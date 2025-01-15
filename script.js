document.getElementById("getWeather").addEventListener("click", async () => {
    const location = document.getElementById("location").value.trim();
    const weatherDetails = document.getElementById("weatherDetails");
    const errorMessage = document.getElementById("errorMessage");
  
    weatherDetails.classList.add("hidden");
    errorMessage.classList.add("hidden");
  
    if (!location) {
      errorMessage.textContent = "Please enter a city name.";
      errorMessage.classList.remove("hidden");
      return;
    }
  
    try {
      const apiKey = '846e460fe130c7c3fb00b4fc26de2bc6'; // Replace with your OpenWeatherMap API key
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error("City not found. Please check the name and try again.");
      }
  
      const data = await response.json();
      document.getElementById("cityName").textContent = data.name;
      document.getElementById("temperature").textContent = data.main.temp;
      document.getElementById("weather").textContent = data.weather[0].description;
  
      weatherDetails.classList.remove("hidden");
    } catch (error) {
      errorMessage.textContent = error.message;
      errorMessage.classList.remove("hidden");
    }
  });
  
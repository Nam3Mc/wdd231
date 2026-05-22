import weatherHandler from "./weather-handler.mjs";

export default function fetchWeather(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            
            const temperature = data.main.temp
            const description = data.weather[0].description
            weatherHandler(temperature, description)
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
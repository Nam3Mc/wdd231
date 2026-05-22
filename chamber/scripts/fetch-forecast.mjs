import forecastHandler from "./forecast-handler.mjs"

export default function fetchForecast(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            
            forecastHandler(data.list)
        })
        .catch(error => {
            console.error('Error:', error)
        })
}
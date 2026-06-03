import fetchForecast from "./fetch-forecast.mjs";
import fetchWeather from "./fetch-weather.mjs";
import updateFooter from "./update-footer.mjs";
import fetchServices from "./fetch-services.mjs";
import hamburguerMenu from "./hamburguer-menu.mjs"
import displayVisitMessage from "./visit-counter.mjs";

const API_KEY = "85e2ca2476b925d881c344d811e795ce";
const city = "Bogota,CO";
const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Bogota,CO&units=metric&appid=85e2ca2476b925d881c344d811e795ce`
const servicesUrl = './data/members.json';

fetchWeather(currentUrl)
fetchForecast(forecastUrl)
fetchServices(servicesUrl)
displayVisitMessage()
hamburguerMenu()
updateFooter()
import { crateDomEl } from "./weather_list/createDomEl.js";
import { showWeatherAfterClickOnList } from "./weather_list/WeatherAfterClickOnList/showWeatherAfterClickOnList.js";
import "./2.css";

const el = document.querySelector("#container");
crateDomEl(el);

const weatherInfoWindowRiht = document.querySelector("#weatherInfoWindowRiht");
function cityInList(text) {
    showWeatherAfterClickOnList(text, weatherInfoWindowRiht);
}

window.cityInList = cityInList;
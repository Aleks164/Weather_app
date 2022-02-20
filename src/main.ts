import { crateDomEl } from "./weather_list/createDomEl";
import { showWeatherAfterClickOnList } from "./weather_list/WeatherAfterClickOnList/showWeatherAfterClickOnList";
import "./main.css";

declare global {
  interface Window {
    cityInList: (text: string) => void;
  }
}

const el = document.querySelector("#container");
crateDomEl(el as HTMLElement);

const weatherInfoWindowRiht = document.querySelector("#weatherInfoWindowRiht");
function cityInList(text: string) {
  showWeatherAfterClickOnList(text, weatherInfoWindowRiht as HTMLElement);
}

window.cityInList = cityInList;

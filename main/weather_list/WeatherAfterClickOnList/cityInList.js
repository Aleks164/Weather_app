import { showWeatherAfterClickOnList } from "./showWeatherAfterClickOnList.js";

const weatherInfoWindowRiht = document.querySelector("#weatherInfoWindowRiht");

export async function cityInList(text) {
  //- нужно ли тестировать?
  showWeatherAfterClickOnList(text, weatherInfoWindowRiht);
}

window.cityInList = cityInList;

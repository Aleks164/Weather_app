import {
  readList,
  readCoordList,
  saveList,
  saveCoordList,
} from "./localStorage_read_save";
import { drawCityList } from "./drawCityList";
import { getWeather } from "./getWeather";
import { cityForList } from "./cityForList";
import { coordForList } from "./coordForList";
import { drawInfoWindowRiht } from "./drawInfoWindowRiht";
import { showWeatherInWindow } from "../wetherCurCityTempWindow/weatherInfoWindow";
// eslint-disable-next-line import/prefer-default-export
export async function crateDomEl(el) {
  el.innerHTML = `<h1 class="title">Weather</h1>
  <hr id="hr1">
<div id="maindiv">
<div id="textdiv">
<p id= "info">
     User can enter data in the input field, and see the list of entered data below. When the page is refreshed (or the browser is closed), the list is saved.
   The window below displays the weather in your city.
  </p>
  <div id="form">
  <form>
    <input
      id="userInput"
      placeholder="Type city and press enter"
      required
      autofocus
    />
    <button id="button">Get weather</button>
  </form>
  </div>
  </div>
  <hr id="hr2">
  <div id="weatherInfocont">
  <div id="weatherInfo"></div>
  <div id="map"></div>
  </div>
  <div  class="animate__fadeInLeft" id="weatherInfoWindow"></div>
  </div>
  <div class="animate__fadeInDown" id="weatherInfoWindowRiht"><p id= "p_before">Enter name of the city to find out temperature in this city or select a city from the list on the bottom left if the city you are interested is in it</p></div>    
`;

  const formEl = document.querySelector("form");
  const weatherInfoEl = document.querySelector("#weatherInfo");
  const weatherInfoWindowRiht = document.querySelector(
    "#weatherInfoWindowRiht"
  );
  const weatherInfoWindow = document.querySelector("#weatherInfoWindow");
  const items = await readList();
  const coordItems = await readCoordList();
  drawCityList(weatherInfoEl, items);
  await showWeatherInWindow(weatherInfoWindow);
  formEl.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const formElement = ev.target;
    const inputEl = formElement.querySelector("input");
    const cityName = inputEl.value;
    inputEl.value = "";
    const weather = await getWeather(cityName);

    const citylist = cityForList(weather);
    const coordList = coordForList(weather);
    console.log(coordList === [])
    if (coordList.length !== 0) {
      items.unshift(citylist);
      coordItems.unshift(coordList);
      saveList(items);
      saveCoordList(coordItems);
      drawInfoWindowRiht(weather, weatherInfoWindowRiht);
      drawCityList(weatherInfoEl, items);
    }

  });
}

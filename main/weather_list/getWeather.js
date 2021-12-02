import { showCityOnMapAfterClickOnButton } from "../drawYmap.js";

const API_KEY = "208564fc52a377799242a74d74f824e0";
export async function getWeather(cityName) {
  try {
    const respons = await window.fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${API_KEY}`
    );

    const resp = await respons.json();
    showCityOnMapAfterClickOnButton(resp);
    return resp;
  } catch (e) {
    return cityName;
  }
}

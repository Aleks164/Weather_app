import { showCityOnMapAfterClickOnButton } from "../balloon_and_hint.js";

const API_KEY = "208564fc52a377799242a74d74f824e0";
export async function getWeather(cityName) {
  const respons = await window.fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${API_KEY}`
  );
  if (respons.ok) {
    const resp = await respons.json();
    showCityOnMapAfterClickOnButton(resp); // - нужно ли мокать эту функцию?
    return resp;
  }
  return cityName;
}

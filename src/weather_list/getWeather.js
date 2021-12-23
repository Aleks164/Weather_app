import { showCityOnMapAfterClickOnButton } from "../drawYmap";

const API_KEY = "208564fc52a377799242a74d74f824e0";
// eslint-disable-next-line import/prefer-default-export
export async function getWeather(cityName) {

  const respons = await window.fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${API_KEY}`
  );
  if (respons.ok) {
    const resp = await respons.json();
    showCityOnMapAfterClickOnButton(resp);
    return resp;
  }
  return cityName;

}

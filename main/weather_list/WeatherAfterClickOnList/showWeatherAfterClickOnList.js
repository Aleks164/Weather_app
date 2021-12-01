import { clickOnList } from "../../balloon_and_hint.js";
const API_KEY = "208564fc52a377799242a74d74f824e0";

export async function showWeatherAfterClickOnList(text, weatherInfoWindowRiht) {
  try {
    clickOnList(text);
    const respons = await window.fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${text}&appid=${API_KEY}`
    );


    const result = await respons.json();
    weatherInfoWindowRiht.innerHTML = `<div><p id= "p_img">Current temperature in ${result.name} is  ${result.main.temp}&deg;С</p>
<img id="imgW" src="http://openweathermap.org/img/wn/${result.weather[0].icon}.png" alt="weathericon"></div>`;
  } catch (e) {
    weatherInfoWindowRiht.innerHTML = `<div><p id= "p_img">City with name ${text}</p></div>`;
  }
}

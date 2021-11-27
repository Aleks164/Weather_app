import * as weather from "./weatherInfoWindow.js";

const API_KEY = "208564fc52a377799242a74d74f824e0";
let cityCache = false;
let weatherCache = false;

export async function getLocaion(weatherInfoWindow) {
  try {
    if (!cityCache) {
      const response = await window.fetch(
        `https://get.geojs.io/v1/ip/geo.json`
      );
      cityCache = await response.json();
    }
    weatherInfoWindow.innerHTML = `<p id = "curCity">${cityCache.city}</p>`;
    return cityCache;
  } catch (e) {
    weatherInfoWindow.style.display = "unset";
    weatherInfoWindow.innerHTML = `<p id = "curCity">${e.message} of geo</p>`;
    return `${e.message} of geo`;
  }
}

export async function getCurrenCityTemp(weatherInfoWindow) {
  const curCity = await weather.getLocaion(weatherInfoWindow);
  try {

    const response = await window.fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${curCity.city}&appid=${API_KEY}`
    );
    weatherCache = await response.json();
    return weatherCache;
  } catch (e) {
    return `Current city '${curCity}' was not found`;
  }
}

export async function showWeatherInWindow(weatherInfoWindow) {
  const cityTemp = await weather.getCurrenCityTemp(weatherInfoWindow);
  if (typeof cityTemp === "string") {
    weatherInfoWindow.innerHTML += `<p id = "curCity">${cityTemp}</p>`;
    setTimeout(function () {
      weatherInfoWindow.style.display = "unset";
    }, 1000);
  } else if (cityTemp.main.temp) {
    console.log(cityTemp);
    weatherInfoWindow.innerHTML += `<img id="imgWind" src="http://openweathermap.org/img/wn/${cityTemp.weather[0].icon}.png" alt="weathericon"</img><hr><p id = "curTemp">Current temperature in your city is  <b id="tempColor"> ${cityTemp.main.temp}&deg;С</b></p>`;
    console.log(weatherInfoWindow.innerHTML);
    setTimeout(function () {
      weatherInfoWindow.style.display = "unset";
    }, 1000);
  }
}

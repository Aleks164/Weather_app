// eslint-disable-next-line import/no-self-import
import * as weather from "./weatherInfoWindow";

const API_KEY = "208564fc52a377799242a74d74f824e0";
// eslint-disable-next-line no-unused-vars
const cityCache = false;
let weatherCache = false;

// eslint-disable-next-line no-shadow
export async function getLocaion(cityCache) {
  try {
    if (!cityCache) {
      const response = await window.fetch(
        `https://get.geojs.io/v1/ip/geo.json`
      );
      cityCache = await response.json();
    }
    return cityCache;
  } catch (e) {
    return "Failed to fetch of geo";
  }
}

export async function getCurrenCityTemp() {
  const curCity = await weather.getLocaion();
  try {
    if (curCity === "Failed to fetch of geo") {
      throw new Error("Failed to fetch of geo");
    }
    const response = await window.fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${curCity.city}&appid=${API_KEY}`
    );
    weatherCache = await response.json();
    return weatherCache;
  } catch (e) {
    return `${e.message}`;
  }
}

export async function showWeatherInWindow(weatherInfoWindow) {
  const cityTemp = await weather.getCurrenCityTemp();
  if (typeof cityTemp === "string") {
    weatherInfoWindow.innerHTML = `<p id = "curCity">${cityTemp}</p><p id = "curTemp">Viewing the weather in your city is currently unavailable</p>`;
    setTimeout(() => {
      weatherInfoWindow.style.display = "unset";
    }, 1000);
  } else if (cityTemp.main.temp) {
    weatherInfoWindow.innerHTML = `<p id = "curCity">${cityTemp.name}</p><img id="imgWind" src="http://openweathermap.org/img/wn/${cityTemp.weather[0].icon}.png" alt="weathericon"</img><hr><p id = "curTemp">Current temperature in your city is  <b id="tempColor"> ${cityTemp.main.temp}&deg;С</b></p>`;
    setTimeout(() => {
      weatherInfoWindow.style.display = "unset";
    }, 1000);
  }
}

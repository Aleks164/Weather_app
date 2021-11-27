import * as weather from "./weatherInfoWindow.js";
const API_KEY = "208564fc52a377799242a74d74f824e0";
const weatherInfoWindow = document.querySelector("#weatherInfoWindow");

export async function getLocaion(weatherInfoWindow) {
  try {
    const response = await window.fetch(`https://get.geojs.io/v1/ip/geo.json`);
    const city = await response.json();
    const MyCity = city.city;
    weatherInfoWindow.innerHTML = `<p id = "curCity">${MyCity}</p>`;
    return MyCity;
  } catch (e) {
    if (weatherInfoWindow) {
      weatherInfoWindow.style.display = "unset";
      weatherInfoWindow.innerHTML = `<p id = "curCity">${e.message} of geo</p>`;
      return `${e.message} of geo`;
    }
  }
}

export async function getCurrenCityTemp() {
  const curCity = await weather.getLocaion(weatherInfoWindow);
  try {
    const response = await window.fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${curCity}&appid=${API_KEY}`
    );
    return await response.json();
  } catch (e) {
    return `Current city '${curCity}' was not found`;
  }
}

export async function showWeatherInWindow(weatherInfoWindow) {
  const cityTemp = await weather.getCurrenCityTemp();
  if (typeof cityTemp === "string") {
    weatherInfoWindow.innerHTML += `<p id = "curCity">${cityTemp}</p>`;
    setTimeout(function () {
      weatherInfoWindow.style.display = "unset";
    }, 1000);
  } else if (cityTemp.main.temp) {
    weatherInfoWindow.innerHTML += `<img id="imgWind" src="http://openweathermap.org/img/wn/${cityTemp.weather[0].icon}.png" alt="weathericon"</img><hr><p id = "curTemp">Current temperature in your city is  <b id="tempColor"> ${cityTemp.main.temp}&deg;С</b></p>`;
    setTimeout(function () {
      weatherInfoWindow.style.display = "unset";
    }, 1000);
  }
}

showWeatherInWindow(weatherInfoWindow);

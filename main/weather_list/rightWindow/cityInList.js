import { clickOnList } from "../../balloon_and_hint.js";

const weatherInfoWindowRiht = document.querySelector("#weatherInfoWindowRiht");
const API_KEY = "208564fc52a377799242a74d74f824e0";

async function cityInList(text) {
  const { innerText } = text;
  clickOnList(innerText);
  const respons = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${innerText}&appid=${API_KEY}`
  );
  if (respons.ok) {
    const result = await respons.json();
    weatherInfoWindowRiht.innerHTML = `</div><p id= "p_img">Current temperature in ${result.name} is  ${result.main.temp}&deg;С</p>
        <img id="imgW" src="http://openweathermap.org/img/wn/${result.weather[0].icon}.png" alt="weathericon"></div>`;
  } else {
    weatherInfoWindowRiht.innerHTML = `</div><p id= "p_img">City with name ${innerText}</p></div>`;
  }
}

window.cityInList = cityInList;

(async function () {

  const API_KEY = "208564fc52a377799242a74d74f824e0";
  const formEl = document.querySelector("form");
  const weatherInfoEl = document.querySelector("#weatherInfo");
  const weatherInfoWindowRiht = document.querySelector("#weatherInfoWindowRiht");

  async function readList() {
    const item = localStorage.getItem("inputs");
    return item === null ? [] : JSON.parse(item);
  }
  async function readCoordList() {
    const item = localStorage.getItem("coord");
    return item === null ? [] : JSON.parse(item);
  }
  function saveList(items) {
    const imputsPars = JSON.stringify(items);
    localStorage.setItem("inputs", imputsPars);
  }
  function saveCoordList(coordItems) {
    const imputsPars = JSON.stringify(coordItems);
    localStorage.setItem("coord", imputsPars);
  }

  async function drawCityList(el, items) {
    if (items.length > 10) {
      items.pop();
    }
    el.innerHTML = `<ol id = "olList">${items.map((el) => `<li onclick="cityInList(this);" class = "listItem">${el}</li>`).join("")}</ol>`;
  }
  const items = await readList();
  const coordItems = await readCoordList();

  drawCityList(weatherInfoEl, items);

  formEl.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const formElement = ev.target;
    const inputEl = formElement.querySelector("input");
    const cityName = inputEl.value;
    inputEl.value = "";
    const weather = await getWeather(cityName);

    async function getWeather(cityName) {
      const respons = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${API_KEY}`
      );
      if (respons.ok) {
        const resp = await respons.json();
        console.log(resp)
        return resp;
      }
      return cityName
    };

    function drawList(weather) {
      const check = ((typeof weather) === 'object');
      if (check) {
        const { temp } = weather.main;
        const city = weather.name;
        weatherInfoWindowRiht.innerHTML = `</div><p id= "p_img">Current temperature in ${city} is  ${temp}&deg;С</p>
        <img id="imgW" src="http://openweathermap.org/img/wn/${weather.weather[0].icon}.png" alt="alternatetext"></div>`;
      }
      else {
        weatherInfoWindowRiht.innerHTML = `"${weather}" was not found`
      }
    }
    function cityForList(weather) {
      const check = ((typeof weather) === 'object');
      if (check) {
        const city = weather.name;
        return city
      }
      return `"${weather}" was not found`
    }
    function coordForList(weather) {
      const check = ((typeof weather) === 'object');
      if (check) {
        const coord = [weather.coord.lat, weather.coord.lon];
        return coord;
      }
      return [];
    }
    const citylist = cityForList(weather);
    const coordList = coordForList(weather);

    items.unshift(citylist);
    coordItems.unshift(coordList);

    saveList(items);
    saveCoordList(coordItems)
    drawList(weather);
    drawCityList(weatherInfoEl, items);
  });

  // right window block

  async function cityInList(text) {
    const { innerText } = text;
      const respons = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${innerText}&appid=${API_KEY}`
      );
      if (respons.ok) {
        const result = await respons.json();
        const { temp } = result.main;
        const city = result.name;
        weatherInfoWindowRiht.innerHTML = `</div><p id= "p_img">Current temperature in ${city} is  ${temp}&deg;С</p>
        <img id="imgW" src="http://openweathermap.org/img/wn/${result.weather[0].icon}.png" alt="weathericon"></div>`;
      }
      else {
        weatherInfoWindowRiht.innerHTML = `</div><p id= "p_img">City with name ${innerText}</p></div>`
      }
    }
     
  // ___________________________________________________________________
  window.cityInList = cityInList;
})();



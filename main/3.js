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
    el.innerHTML = `<ol>${items.map((el) => `<li onclick="q(this);" class = "listItem">${el}</li>`).join("")}</ol>`;
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
        return resp;
      }
      return cityName
    };

    function drawList(weather) {
      const check = ((typeof weather) === 'object');
      if (check) {
        const { temp } = weather.main;
        const city = weather.name;
        weatherInfoWindowRiht.innerHTML = `Current temperature in ${city} is  ${temp}&deg;С`;
      }
      else {
        weatherInfoWindowRiht.innerHTML = `The entered name of the city "${weather}" was not found`
      }
    }
    function cityForList(weather) {
      const check = ((typeof weather) === 'object');
      if (check) {
        const city = weather.name;
        return city
      }
      return `The entered name of the city "${weather}" was not found`
    }
    function coordForList(weather) {
      const check = ((typeof weather) === 'object');
      if (check) {
        const coord = [weather.coord.lat,weather.coord.lon];
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

  async function q(text) {
    const { innerText } = text;
    console.log(innerText);

    const newdrawList = await getWeather(innerText);

    async function getWeather(innerText) {
      const respons = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${innerText}&appid=${API_KEY}`
      );
      if (respons.ok) {
        const result = await respons.json();
        const { temp } = result.main;
        const city = result.name;
        console.log(result);
        return `Current temperature in ${city} is  ${temp} °С`
      }
      return innerText
    };
    async function refresh(newdrawList) {
      weatherInfoWindowRiht.innerText = await newdrawList;
    }
    refresh(newdrawList);
  }
// ___________________________________________________________________
  window.q = q;  
})();




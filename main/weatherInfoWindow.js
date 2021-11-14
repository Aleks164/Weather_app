(async function () {
	const API_KEY = "208564fc52a377799242a74d74f824e0";
	const weatherInfoWindow = document.querySelector("#weatherInfoWindow");

	async function getLocaion() {
      const response = await fetch(
        `https://get.geojs.io/v1/ip/geo.json`
    	);
    if (response.ok) {
      const city = await response.json();
      const MyCity = city.city;
      // console.log(MyCity);
      return MyCity
    }
  };
 
  const curCity = await getLocaion();
  
  const currenCityTemp = async function getWeatherInCurrentLocation(currenCity) {
    const response = await fetch(
       `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${currenCity}&appid=${API_KEY}`
    );
    if (response.ok) {
      // console.log(response);
      return await response.json();
    }
    return  `Current city '${currenCity}' was not found`
  }
  currenCityTemp(curCity);

  function showWeatherInWindow(weatherInfo) {
  	console.log(weatherInfo.name);
    const city = weatherInfo.name;
    const {temp} = weatherInfo.main;
    console.log(temp);

    weatherInfoWindow.innerHTML = `Температура воздуха в Вашем городе:  ${  temp} &deg;С`;
  }
 	const cityTemp = await currenCityTemp(curCity);
 	showWeatherInWindow(cityTemp);










})();
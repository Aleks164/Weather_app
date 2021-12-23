// eslint-disable-next-line import/prefer-default-export
export function drawInfoWindowRiht(weather, weatherInfoWindowRiht) {
  const check = typeof weather === "object";
  if (check) {
    weatherInfoWindowRiht.innerHTML = `</div><p id= "p_img">Current temperature in ${weather.name} is  ${weather.main.temp}&deg;С</p>
        <img id="imgW" src="http://openweathermap.org/img/wn/${weather.weather[0].icon}.png" alt="alternatetext"></div>`;
  } else {
    weatherInfoWindowRiht.innerHTML = `"${weather}" was not found`;
  }
}

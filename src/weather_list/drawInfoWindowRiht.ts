// eslint-disable-next-line import/prefer-default-export
import WeatherType from "./types"

export function drawInfoWindowRiht<T, CalcType = T extends string ? string : WeatherType>(weather: T): CalcType

export function drawInfoWindowRiht(weather: WeatherType | string) {
  const check = typeof weather === "object";
  if (check) {
    return `</div><p id= "p_img">Current temperature in ${weather.name} is  ${weather.main.temp}&deg;С</p>
        <img id="imgW" src="http://openweathermap.org/img/wn/${weather.weather[0].icon}.png" alt="alternatetext"></div>`;
  }
  return `"${weather}" was not found`;

}

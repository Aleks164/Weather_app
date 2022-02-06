// eslint-disable-next-line import/prefer-default-export
import WeatherType from "./types"

export function cityForList<T, CalcType = T extends string ? string : WeatherType>(weather: T): CalcType

export function cityForList(weather: string | WeatherType) {
  const check = typeof weather === "object";
  if (check) {
    return weather.name;
  }
  return `"${weather}" was not found`;
}

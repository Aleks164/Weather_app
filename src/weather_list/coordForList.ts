// eslint-disable-next-line import/prefer-default-export
import WeatherType from "./types"

export function coordForList<T, CalcType = T extends string ? [] : [number, number]>(weather: T): CalcType

export function coordForList(weather: WeatherType | string) {
  const check = typeof weather === "object";
  if (check) {
    const coord = [weather.coord.lat, weather.coord.lon];
    return coord;
  }
  return [];
}

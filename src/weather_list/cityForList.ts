// eslint-disable-next-line import/prefer-default-export
import WeatherType from "./types";

export function cityForList(weather: string | WeatherType): string {
  const check = typeof weather === "object";
  if (check) {
    return weather.name;
  }
  return `"${weather}" was not found`;
}

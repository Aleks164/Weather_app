export function cityForList(weather) {
  const check = typeof weather === "object";
  if (check) {
    return weather.name;
  }
  return `"${weather}" was not found`;
}

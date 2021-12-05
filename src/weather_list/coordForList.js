// eslint-disable-next-line import/prefer-default-export
export function coordForList(weather) {
  const check = typeof weather === "object";
  if (check) {
    const coord = [weather.coord.lat, weather.coord.lon];
    return coord;
  }
  return [];
}

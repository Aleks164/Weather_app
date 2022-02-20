export async function readList() {
  const item = window.localStorage.getItem("inputs");
  return item === null ? [] : JSON.parse(item);
}
export async function readCoordList() {
  const item = window.localStorage.getItem("coord");
  return item === null ? [] : JSON.parse(item);
}
export function saveList(items: string[]) {
  const imputsPars = JSON.stringify(items);
  window.localStorage.setItem("inputs", imputsPars);
}
export function saveCoordList(coordItems: string[]) {
  const imputsPars = JSON.stringify(coordItems);
  window.localStorage.setItem("coord", imputsPars);
}

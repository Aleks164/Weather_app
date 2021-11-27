export async function readList() {
    const item = localStorage.getItem("inputs");
    return item === null ? [] : JSON.parse(item);
  }
export async function readCoordList() {
    const item = localStorage.getItem("coord");
    return item === null ? [] : JSON.parse(item);
  }
export function saveList(items) {
    const imputsPars = JSON.stringify(items);
    localStorage.setItem("inputs", imputsPars);
  }
export function saveCoordList(coordItems) {
    const imputsPars = JSON.stringify(coordItems);
    localStorage.setItem("coord", imputsPars);
  }
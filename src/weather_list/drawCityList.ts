// eslint-disable-next-line import/prefer-default-export
export function drawCityList(el: HTMLAnchorElement, items: string[]): string {
  if (items.length > 10) {
    items.pop();
  }
  // console.log(items)
  // console.log("el", el.innerHTML)
  const result = items.map(
    (item) =>
      `<li onclick="cityInList(this.innerHTML);" class = "listItem">${item}</li>`
  )
    .join("");
  // console.log("result", result)
  const newEl = el.innerHTML.replace(
    /{{weatherList}}/,
    `<ol id = "olList">${result}</ol>`
  );
  // console.log("newEl", newEl)
  // console.log(items)
  return newEl;
}

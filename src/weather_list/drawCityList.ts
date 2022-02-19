// eslint-disable-next-line import/prefer-default-export
export function drawCityList(el: HTMLAnchorElement, items: string[]): string {
  if (items.length > 10) {
    items.pop();
  }
  const result = items
    .map(
      (item) =>
        `<li onclick="cityInList(this.innerHTML);" class = "listItem">${item}</li>`
    )
    .join("");
  const newEl = el.innerHTML.replace(
    /{{weatherList}}/,
    `<ol id = "olList">${result}</ol>`
  );
  return newEl;
}

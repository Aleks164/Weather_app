// eslint-disable-next-line import/prefer-default-export
export function drawCityList(el: HTMLAnchorElement, items: string[]): string {
  if (items.length > 10) {
    items.pop();
  }
  const newEl = el.innerHTML.replace(
    /{{weatherList}}/,
    `<ol id = "olList">${items
      .map(
        (item) =>
          `<li onclick="cityInList(this.innerHTML);" class = "listItem">${item}</li>`
      )
      .join("")}</ol>`
  );
  return newEl;
}

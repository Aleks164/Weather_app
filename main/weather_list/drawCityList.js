export async function drawCityList(el, items) {
  if (items.length > 10) {
    items.pop();
  }
  el.innerHTML = `<ol id = "olList">${items
    .map(
      (item) =>
        `<li onclick="cityInList(this.innerHTML);" class = "listItem">${item}</li>`
    )
    .join("")}</ol>`;
}

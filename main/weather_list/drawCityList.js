 export async function drawCityList(el, items) {
    if (items.length > 10) {
      items.pop();
    }
    el.innerHTML = `<ol id = "olList">${items
      .map(
        (el) => `<li onclick="cityInList(this);" class = "listItem">${el}</li>`
      )
      .join("")}</ol>`;
  }
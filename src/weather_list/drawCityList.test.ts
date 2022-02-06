import { drawCityList } from "./drawCityList";

let el: HTMLElement;
describe("drawCityList", () => {
  beforeEach(() => {
    el = document.createElement("div");
    document.body.append(el);
  });
  afterEach(() => {
    document.getElementsByTagName("html")[0].innerHTML = "{{weatherList}}";
  });
  it("should draw list of cities in HTML element", () => {
    const items = ["Ekaterinburg", "Kursk", "Penza", "Krasnodar"];
    const inner =
      '<ol id="olList"><li onclick="cityInList(this.innerHTML);" class="listItem">Ekaterinburg</li><li onclick="cityInList(this.innerHTML);" class="listItem">Kursk</li><li onclick="cityInList(this.innerHTML);" class="listItem">Penza</li><li onclick="cityInList(this.innerHTML);" class="listItem">Krasnodar</li></ol>';

    drawCityList(el as unknown as HTMLAnchorElement, items);
    expect(el.innerHTML).toContain(inner);
    expect(el.childElementCount).toStrictEqual(4);
  });
  it("should not draw a list of cities with more than 10 elements", () => {
    const items = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
    drawCityList(el as unknown as HTMLAnchorElement, items);
    expect(el.childElementCount).toStrictEqual(10);
  });
});

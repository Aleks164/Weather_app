import { drawCityList } from "./drawCityList";

let el: HTMLElement;
describe("drawCityList", () => {
  beforeEach(() => {
    el = document.createElement("div");
    el.innerHTML = "{{weatherList}}";
    document.body.append(el);
  });
  afterEach(() => {
    document.getElementsByTagName("html")[0].innerHTML = "{{weatherList}}";
  });
  it("should draw list of cities in HTML element", () => {
    const items = ["Ekaterinburg", "Kursk", "Penza", "Krasnodar"];
    const inner = `<ol id = \"olList\"><li onclick=\"cityInList(this.innerHTML);\" class = \"listItem\">Ekaterinburg</li><li onclick=\"cityInList(this.innerHTML);\" class = \"listItem\">Kursk</li><li onclick=\"cityInList(this.innerHTML);\" class = \"listItem\">Penza</li><li onclick=\"cityInList(this.innerHTML);\" class = \"listItem\">Krasnodar</li></ol>`;

    expect(
      drawCityList(el as unknown as HTMLAnchorElement, items).trim()
    ).toStrictEqual(inner);
    el.innerHTML = drawCityList(el as unknown as HTMLAnchorElement, items);
    const nessList = document.querySelector("#olList");
    if (nessList) {
      expect(nessList.childElementCount).toStrictEqual(4);
    }
  });
  it("should not draw a list 10 elements", () => {
    const items = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
    expect(drawCityList(el as unknown as HTMLAnchorElement, items)).toMatch(
      /"listItem\">1<\/li>/
    );

    expect(drawCityList(el as unknown as HTMLAnchorElement, items)).toMatch(
      /"listItem\">10<\/li>/
    );

    expect(drawCityList(el as unknown as HTMLAnchorElement, items)).not.toMatch(
      /"listItem\">11<\/li>/
    );
  });
});

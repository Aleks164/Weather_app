import { drawInfoWindowRiht } from "./drawInfoWindowRiht";


let el: HTMLDivElement;
describe("drawInfoWindowRiht", () => {
  beforeEach(() => {
    el = document.createElement("div");
    document.body.append(el);
  });
  afterEach(() => {
    document.getElementsByTagName("html")[0].innerHTML = "";
  });
  it("should draw the right window with text and a picture of the weather", async () => {
    const weather = {
      main: { temp: 2.34 },
      name: "Saratov",
      weather: [
        {
          icon: "04n",
        },
      ],
    };
    const inner = '<p id="p_img">Current temperature in Saratov is  2.34°С</p>';

    expect(drawInfoWindowRiht(weather)).toContain(inner);
  });
  it("should draw the right window with the text that the entered city was not found", async () => {
    const weather = "Zaratov";
    const inner = `"${weather}" was not found`;

    expect(drawInfoWindowRiht(weather)).toBe(inner);
  });
});

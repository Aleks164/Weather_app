import { drawInfoWindowRiht } from "./drawInfoWindowRiht";

let el;
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
    drawInfoWindowRiht(weather, el);
    expect(el.innerHTML).toContain(inner);
  });
  it("it should draw the right window with the text that the entered city was not found", async () => {
    const weather = "Zaratov";
    const inner = `"${weather}" was not found`;
    drawInfoWindowRiht(weather, el);
    expect(el.innerHTML).toContain(inner);
  });
});

import { showWeatherAfterClickOnList } from "./showWeatherAfterClickOnList";

import { clickOnList } from "../../drawYmap";

jest.mock("../../drawYmap", () => ({
  clickOnList: jest.fn(() => "mocked")
}));

describe("cityInList", () => {
  let saveWindowFech: any;
  let el;
  const API_KEY = "208564fc52a377799242a74d74f824e0";

  beforeEach(() => {
    saveWindowFech = window.fetch;
    window.fetch = jest.fn();
  });

  afterEach(() => {
    window.fetch = saveWindowFech;
  });
  beforeEach(() => {
    el = document.createElement("div");
    el.id = "weatherInfoWindowRiht";
    document.body.append(el);
  });
  afterEach(() => {
    document.getElementsByTagName("html")[0].innerHTML = "";
  });

  it("api.openweathermap fetch should return expected data if resolve", async () => {
    const curCity = "Saratov";
    const result = {
      main: { temp: 2.34 },
      name: "Saratov",
      weather: [{ icon: "04n" }]
    };
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${curCity}&appid=${API_KEY}`;
    const inner = `<div><p id=\"p_img\">Current temperature in Saratov is  2.34°С</p>
<img id=\"imgW\" src=\"http://openweathermap.org/img/wn/04n.png\" alt=\"weathericon\"></div>`;

    (window.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({ json: () => Promise.resolve(result) })
    );
    const weatherInfoWindowRiht = document.querySelector(
      "#weatherInfoWindowRiht"
    );

    await showWeatherAfterClickOnList(curCity, weatherInfoWindowRiht);

    expect(clickOnList("123")).toBe("mocked");
    expect(window.fetch).toHaveBeenCalledTimes(1);
    if (weatherInfoWindowRiht) {
      expect(weatherInfoWindowRiht.innerHTML).toContain(inner);
    }
    expect(window.fetch).toHaveBeenCalledWith(url);
    expect(window.fetch).toHaveBeenCalledTimes(1);

    (clickOnList as jest.Mock).mockRestore();
  });
  it("api.openweathermap fetch should return expected data if promis reject", async () => {
    const curCity = "Zaratov";
    const errorMessage = '<div><p id="p_img">City with name Zaratov</p></div>';
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${curCity}&appid=${API_KEY}`;

    (window.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error("Failed to fetch"))
    );
    const weatherInfoWindowRiht = document.querySelector(
      "#weatherInfoWindowRiht"
    );
    await showWeatherAfterClickOnList(curCity, weatherInfoWindowRiht);
    if (weatherInfoWindowRiht) {
      expect(weatherInfoWindowRiht.innerHTML).toContain(errorMessage);
    }
    expect(window.fetch).toHaveBeenCalledWith(url);
    expect(window.fetch).toHaveBeenCalledTimes(1);
  });
});

import { getWeather } from "./getWeather";
import { showCityOnMapAfterClickOnButton } from "../balloon_and_hint.js";
jest.mock("../balloon_and_hint.js", () => {
  return {
    showCityOnMapAfterClickOnButton: jest.fn(() => 'mocked'),
  };
});
describe("getWeather", () => {
  let saveWindowFech;
  const API_KEY = "208564fc52a377799242a74d74f824e0";

  beforeEach(() => {
    saveWindowFech = window.fetch;
    window.fetch = jest.fn();
  });

  afterEach(() => {
    window.fetch = saveWindowFech;
  });

  it("api.openweathermap fetch should return expected data if respons.ok resolve", async () => {
    const curCity = "Saratov";
    const openweathermap = { temp: 12 };
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${curCity}&appid=${API_KEY}`;
    // const spy = jest.spyOn(ymap, "showCityOnMapAfterClickOnButton");
    // spy.mockReturnValue("mocked");
    window.fetch.mockImplementationOnce(() =>
      Promise.resolve({ json: () => Promise.resolve(openweathermap) })
    );
    const result = await getWeather(curCity);
    expect(showCityOnMapAfterClickOnButton()).toBe("mocked");
    expect(result).toEqual(openweathermap);
    expect(window.fetch).toHaveBeenCalledWith(url);
    expect(window.fetch).toHaveBeenCalledTimes(1);
  });
  it("api.openweathermap fetch should return expected data if promis reject", async () => {
    const curCity = "Saratov";
    const errorMessage = curCity;
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${curCity}&appid=${API_KEY}`;

    window.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error("Failed to fetch"))
    );
    const result = await getWeather(curCity);
    expect(result).toEqual(errorMessage);
    expect(window.fetch).toHaveBeenCalledWith(url);
    expect(window.fetch).toHaveBeenCalledTimes(1);
  });
});

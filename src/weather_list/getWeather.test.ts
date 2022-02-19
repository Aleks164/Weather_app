import { getWeather } from "./getWeather";
import { showCityOnMapAfterClickOnButton } from "../drawYmap";

jest.mock("../drawYmap", () => ({
  showCityOnMapAfterClickOnButton: jest.fn(() => "mocked")
}));
describe("getWeather", () => {
  let saveWindowFech: any;
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

    (window.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({ json: () => Promise.resolve(openweathermap), ok: true })
    );
    const result = await getWeather(curCity);
    expect(showCityOnMapAfterClickOnButton("123")).toBe("mocked");
    expect(result).toEqual(openweathermap);
    expect(window.fetch).toHaveBeenCalledWith(url);
    expect(window.fetch).toHaveBeenCalledTimes(1);
  });
  it("api.openweathermap fetch should return expected data if promis reject", async () => {
    const curCity = "Saratov";
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${curCity}&appid=${API_KEY}`;

    (window.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({ ok: false })
    );
    const result = await getWeather(curCity);
    expect(result).toEqual(curCity);
    expect(window.fetch).toHaveBeenCalledWith(url);
    expect(window.fetch).toHaveBeenCalledTimes(1);
  });
});

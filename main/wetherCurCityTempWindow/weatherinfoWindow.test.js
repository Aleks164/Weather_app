import * as weather from "./weatherInfoWindow";

describe("weatherInfoWindow", () => {
  let saveWindowFech, el;
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  beforeEach(() => {
    saveWindowFech = window.fetch;
    window.fetch = jest.fn();
  });

  afterEach(() => {
    window.fetch = saveWindowFech;
  });
  beforeEach(() => {
    el = document.createElement("div");
    el.style.display = "none";
    document.body.append(el);
  });
  afterEach(() => {
    document.getElementsByTagName("html")[0].innerHTML = "";
  });

  it("geo fetch should return expected data if promis resolve", async () => {
    const city = { city: "Saratov" };
    const url = `https://get.geojs.io/v1/ip/geo.json`;
    window.fetch.mockImplementationOnce(() =>
      Promise.resolve({ json: () => Promise.resolve(city) })
    );
    const result = await weather.getLocaion();
    expect(result).toStrictEqual(city);
    expect(window.fetch).toHaveBeenCalledWith(url);
    expect(window.fetch).toHaveBeenCalledTimes(1);
  });
  it("geo fetch should return expected data if promis reject", async () => {
    const url = `https://get.geojs.io/v1/ip/geo.json`;
    const errorMessage = "Failed to fetch of geo";
    window.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error("Failed to fetch"))
    );
    const result = await weather.getLocaion();
    expect(result).toEqual(errorMessage);
    expect(window.fetch).toHaveBeenCalledWith(url);
    expect(window.fetch).toHaveBeenCalledTimes(1);
  });
  it("api.openweathermap fetch should return expected data if promis resolve", async () => {
    const curCity = "Saratov";
    const openweathermap = { temp: 12 };
    const API_KEY = "208564fc52a377799242a74d74f824e0";
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${curCity}&appid=${API_KEY}`;
    const spy = jest.spyOn(weather, "getLocaion");
    spy.mockReturnValue(curCity);
    window.fetch.mockImplementationOnce(() =>
      Promise.resolve({ json: () => Promise.resolve(openweathermap) })
    );
    const result = await weather.getCurrenCityTemp();
    expect(result).toEqual(openweathermap);
    expect(window.fetch).toHaveBeenCalledWith(url);
    expect(window.fetch).toHaveBeenCalledTimes(1);
    weather.getLocaion.mockRestore();
  });
  it("api.openweathermap fetch should return expected data if promis reject", async () => {
    const curCity = "Saratov";
    const API_KEY = "208564fc52a377799242a74d74f824e0";
    const errorMessage = `Current city '${curCity}' was not found`;
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${curCity}&appid=${API_KEY}`;
    const spy = jest.spyOn(weather, "getLocaion");
    spy.mockReturnValue(curCity);
    window.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error("Failed to fetch"))
    );
    const result = await weather.getCurrenCityTemp();
    expect(result).toEqual(errorMessage);
    expect(window.fetch).toHaveBeenCalledWith(url);
    expect(window.fetch).toHaveBeenCalledTimes(1);
    weather.getLocaion.mockRestore();
  });
  it("will draw a weather window by adding a weather image and temperature in the text field", async () => {
    const cityTemp = {
      main: { temp: 12 },
      city: "Saratov",
      weather: [
        {
          icon: "04d"
        }
      ]
    };
    const innerHTMLtext = `<img id=\"imgWind\" src=\"http://openweathermap.org/img/wn/${cityTemp.weather[0].icon}.png\" alt=\"weathericon\" <=\"\" img=\"\"><hr><p id=\"curTemp\">Current temperature in your city is  <b id=\"tempColor\"> ${cityTemp.main.temp}°С</b></p>`;
    const spy = jest.spyOn(weather, "getCurrenCityTemp");
    spy.mockReturnValue(cityTemp);
    await weather.showWeatherInWindow(el);
    expect(el.innerHTML).toEqual(innerHTMLtext);
    expect(el.style.display).toEqual("none");
    await sleep(1001);
    expect(el.style.display).toEqual("unset");
    weather.getCurrenCityTemp.mockRestore();
  });
  it("will draw a weather window with error text", async () => {
    const curCity = "Gaduykino";
    const cityTemp = `Current city '${curCity}' was not found`;
    const innerHTMLtext = `<p id=\"curCity\">Current city '${curCity}' was not found</p>`;
    const spy = jest.spyOn(weather, "getCurrenCityTemp");
    spy.mockReturnValue(cityTemp);
    await weather.showWeatherInWindow(el);
    expect(el.innerHTML).toEqual(innerHTMLtext);
    expect(el.style.display).toEqual("none");
    await sleep(1001);
    expect(el.style.display).toEqual("unset");
    weather.getCurrenCityTemp.mockRestore();
  });
});

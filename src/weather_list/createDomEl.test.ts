import { crateDomEl } from "./createDomEl";
import * as weather from "../wetherCurCityTempWindow/weatherInfoWindow";

jest.mock("../drawYmap", () => ({
  clickOnList: jest.fn(() => "mocked"),
  showCityOnMapAfterClickOnButton: jest.fn(() => "mocked"),
}));
const mockStorage = {};

jest.mock("./localStorage_read_save", () => ({
  readList: jest.fn().mockResolvedValue(["Saratov", "NeSaratov"]),
  readCoordList: jest
    .fn()
    .mockResolvedValue([51.566, 46.0333], [66.566, 44.344]),
  saveList: jest.fn((value) => {
    mockStorage.inputs = value;
  }),
  saveCoordList: jest.fn((value) => {
    mockStorage.coord = value;
  }),
}));
const getweather = {
  main: { temp: 2.34 },
  name: "Saratov",
  weather: [{ icon: "04n" }],
  coord: {
    lat: 55.7522,
    lon: 37.6156,
  },
};
jest.mock("./getWeather", () => ({
  getWeather: jest.fn().mockResolvedValue(getweather),
}));

describe("crateDomEl", () => {
  let el;

  beforeEach(() => {
    el = document.createElement("div");
    document.body.append(el);
  });
  afterEach(() => {
    document.getElementsByTagName("html")[0].innerHTML = "";
  });

  it("Is appWeather work?", async () => {
    const cityTemp = {
      main: { temp: 12 },
      name: "Saratov",
      weather: [
        {
          icon: "04d",
        },
      ],
    };
    const showWeatherInWindowInnerHTML =
      '<p id="curCity">Saratov</p><img id="imgWind" src="http://openweathermap.org/img/wn/04d.png" alt="weathericon" <="" img=""><hr><p id="curTemp">Current temperature in your city is  <b id="tempColor"> 12°С</b></p>';
    const spyGetCurrenCityTemp = jest.spyOn(weather, "getCurrenCityTemp");
    spyGetCurrenCityTemp.mockReturnValue(cityTemp);

    const historyCityList =
      '<ol id="olList"><li onclick="cityInList(this.innerHTML);" class="listItem">Saratov</li><li onclick="cityInList(this.innerHTML);" class="listItem">NeSaratov</li></ol>';

    await crateDomEl(el);
    let weatherInfoEl = document.querySelector("#weatherInfo");
    const weatherInfoWindow = document.querySelector("#weatherInfoWindow");

    expect(weatherInfoEl.innerHTML).toBe(historyCityList);
    expect(weatherInfoWindow.innerHTML).toBe(showWeatherInWindowInnerHTML);

    const input = document.querySelector("#userInput");
    const inputText = "Saratov";
    input.value = inputText;
    const button = document.querySelector("#button");
    const event = new Event("click");
    button.dispatchEvent(event);

    setTimeout(() => {
      weatherInfoEl = document.querySelector("#weatherInfo");
      const weatherInfoWindowRiht = document.querySelector(
        "#weatherInfoWindowRiht"
      );
      const historyCityListAfterClick =
        '<ol id="olList"><li onclick="cityInList(this.innerHTML);" class="listItem">Saratov</li><li onclick="cityInList(this.innerHTML);" class="listItem">Saratov</li><li onclick="cityInList(this.innerHTML);" class="listItem">NeSaratov</li></ol>';
      const rightWindowInnerAfterClick =
        '<p id="p_img">Current temperature in Saratov is  2.34°С</p><img id="imgW" src="http://openweathermap.org/img/wn/04n.png" alt="alternatetext">';

      expect(weatherInfoEl.innerHTML).toBe(historyCityListAfterClick);

      expect(weatherInfoWindowRiht.innerHTML).toBe(rightWindowInnerAfterClick);
    }, 500);
  });
});

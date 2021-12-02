import { crateDomEl } from "./createDomEl.js";
import * as weather from "../wetherCurCityTempWindow/weatherInfoWindow.js";
// jest.mock("../../drawYmap.js", () => {
//     return {
//         clickOnList: jest.fn(() => "mocked")
//     };
// });
jest.mock("./localStorage_read_save.js", () => {
    return {
        readList: jest.fn().mockResolvedValue(["Saratov", "NeSaratov"]),
        readCoordList: jest.fn().mockResolvedValue([51.566, 46.0333], [66.566, 44.344]),
        //   saveList,
        //   saveCoordList
    };
});
import { showWeatherInWindow } from "../wetherCurCityTempWindow/weatherInfoWindow.js";



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
                    icon: "04d"
                }
            ]
        };
        const showWeatherInWindowInnerHTML =
            '<p id="curCity">Saratov</p><img id="imgWind" src="http://openweathermap.org/img/wn/04d.png" alt="weathericon" <="" img=""><hr><p id="curTemp">Current temperature in your city is  <b id="tempColor"> 12°С</b></p>';
        const spyGetCurrenCityTemp = jest.spyOn(weather, "getCurrenCityTemp");
        spyGetCurrenCityTemp.mockReturnValue(cityTemp);

        const historyCityList = "<ol id=\"olList\"><li onclick=\"cityInList(this.innerHTML);\" class=\"listItem\">Saratov</li><li onclick=\"cityInList(this.innerHTML);\" class=\"listItem\">NeSaratov</li></ol>"


        await crateDomEl(el);
        const weatherInfoEl = document.querySelector("#weatherInfo");
        const weatherInfoWindow = document.querySelector("#weatherInfoWindow");

        expect(weatherInfoEl.innerHTML).toBe(historyCityList);
        expect(weatherInfoWindow.innerHTML).toBe(showWeatherInWindowInnerHTML);
        //   expect(window.fetch).toHaveBeenCalledWith(url);
        //   expect(window.fetch).toHaveBeenCalledTimes(1);

    });
});
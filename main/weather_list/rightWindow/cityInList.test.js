import cityInList from "./cityInList";

describe("weatherInfoWindow", () => {
    let saveWindowFech;
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
        el.id = 'weatherInfoWindowRiht';
        document.body.append(el);
    });
    afterEach(() => {
        document.getElementsByTagName("html")[0].innerHTML = "";
    });

    it("api.openweathermap fetch should return expected data if respons.ok resolve", async () => {
        const curCity = "Saratov";
        const result = {
            main: { temp: 2.34 },
            name: "Saratov",
            weather: {
                icon: "04n"
            }
        }
        const openweathermap = { temp: 12 };
        const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${curCity}&appid=${API_KEY}`;
        const inner = `</div><p id= "p_img">Current temperature in ${result.name} is  ${result.main.temp}&deg;С</p>
        <img id="imgW" src="http://openweathermap.org/img/wn/${result.weather[0].icon}.png" alt="weathericon"></div>`;
        window.fetch.mockImplementationOnce(() =>
            Promise.resolve({ json: () => Promise.resolve(result) })
        );
        await cityInList(curCity);
        expect(el.innerHTML).toContain(inner);
        expect(window.fetch).toHaveBeenCalledWith(url);
        expect(window.fetch).toHaveBeenCalledTimes(1);
    });
    it("api.openweathermap fetch should return expected data if promis reject", async () => {
        const curCity = "Zaratov";
        const errorMessage = `</div><p id= "p_img">City with name ${curCity}</p></div>`;
        const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${curCity}&appid=${API_KEY}`;

        window.fetch.mockImplementationOnce(() =>
            Promise.reject(new Error("Failed to fetch"))
        );
        const result = await cityInList();
        expect(result).toEqual(errorMessage);
        expect(window.fetch).toHaveBeenCalledWith(url);
        expect(window.fetch).toHaveBeenCalledTimes(1);
    });
});
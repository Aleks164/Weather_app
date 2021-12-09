import { coordForList } from "./coordForList";

describe("coordForList", () => {
    it("should return expected data if argument of function corect", () => {
      const weather = { "coord":
        {"lat": 55.7522,
        "lon": 37.6156,
    }
     };
      expect(coordForList(weather)).toStrictEqual([weather.coord.lat, weather.coord.lon]);
    });
    it("should return expected message if argument of function incorect", () => {
      const weather = "Zaratov";
      expect(coordForList(weather)).toStrictEqual([]);
    });
  });
import { cityForList } from "./cityForList";

describe("cityForList", () => {
  it("should return expected data if argument of function corect", () => {
    const weather = { name: "Saratov" };
    expect(cityForList(weather)).toStrictEqual("Saratov");
  });
  it("should return expected message if argument of function incorect", () => {
    const weather = "Zaratov";
    expect(cityForList(weather)).toStrictEqual(`"${weather}" was not found`);
  });
});

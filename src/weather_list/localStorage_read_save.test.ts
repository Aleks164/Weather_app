import {
  readList,
  readCoordList,
  saveList,
  saveCoordList,
} from "./localStorage_read_save";

describe("localStorage_read_save", () => {
  let originalSetItem: any;
  let originalGetItem: any;
  let mockStorage: any;
  const cityKey = "inputs";
  const coorKey = "coord";
  beforeEach(() => {
    mockStorage = {};

    originalSetItem = window.Storage.prototype.setItem;
    window.Storage.prototype.setItem = jest
      .fn()
      .mockImplementation((key, value) => {
        mockStorage[key] = value;
      });

    originalGetItem = window.Storage.prototype.getItem;
    window.Storage.prototype.getItem = jest
      .fn()
      .mockImplementation((key) => mockStorage[key] || "[]");
  });

  afterEach(() => {
    window.Storage.prototype.setItem = originalSetItem;
    window.Storage.prototype.getItem = originalGetItem;
  });

  afterEach(() => {
    mockStorage = {};
  });
  it("cityList storage should returne [] for empty local storage", async () => {
    const result = await readList();

    expect(result).toStrictEqual([]);
    expect(window.Storage.prototype.getItem).toHaveBeenCalledWith(cityKey);
  });
  it("should retutne store with expected items", () => {
    const inputsHistory = ["Saratov", "NeSaratov"];
    saveList(inputsHistory);
    const expectLocalStorage = '["Saratov","NeSaratov"]';

    const expectedmockStorage: any = {};
    expectedmockStorage[cityKey] = expectLocalStorage;
    expect(mockStorage).toStrictEqual(expectedmockStorage);

    expect(window.Storage.prototype.setItem).toHaveBeenCalledWith(
      cityKey,
      expectLocalStorage
    );
  });
  it("CoordList storage should returne [] for empty local storage", async () => {
    const result = await readCoordList();

    expect(result).toStrictEqual([]);
    expect(window.Storage.prototype.getItem).toHaveBeenCalledWith(coorKey);
  });
  it("should store expected items", () => {
    const inputsHistory = ["[51.566, 46.0333]", "[66.566, 44.344]"];
    saveCoordList(inputsHistory);
    const expectLocalStorage = '["[51.566, 46.0333]","[66.566, 44.344]"]';

    const expectedmockStorage: any = {};
    expectedmockStorage[coorKey] = expectLocalStorage;
    expect(mockStorage).toStrictEqual(expectedmockStorage);

    expect(window.Storage.prototype.setItem).toHaveBeenCalledWith(
      coorKey,
      expectLocalStorage
    );
  });
});
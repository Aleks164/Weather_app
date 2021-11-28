import { drawCityList } from "./drawCityList";

describe("drawCityList", () => {
    beforeEach(() => {
        el = document.createElement("div");
        document.body.append(el);
    });
    afterEach(() => {
        document.getElementsByTagName("html")[0].innerHTML = "";
    });
    it("should draw list of cities in HTML element", () => {
        const items = ['Ekaterinburg', 'Kursk', 'Penza', 'Krasnodar'];
        const inner = '<ol id="olList"><li onclick="cityInList(this);" class="listItem">Ekaterinburg</li><li onclick="cityInList(this);" class="listItem">Kursk</li><li onclick="cityInList(this);" class="listItem">Penza</li><li onclick="cityInList(this);" class="listItem">Krasnodar</li></ol>';
        drawCityList(el, items);
        expect(el.innerHTML).toContain(inner);
        expect(el.childElementCount).toStrictEqual(4);
    });
    it("should not draw a list of cities with more than 10 elements", () => {
        const items = ['1', '2', '3', '4', '1', '2', '3', '4', '1', '2', '3', '4'];
        drawCityList(el, items);
        expect(el.childElementCount).toStrictEqual(10);
    });
});
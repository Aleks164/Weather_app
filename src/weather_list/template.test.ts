/* eslint-disable max-classes-per-file */
import { Template } from "./template";
import { readList, saveList } from "./localStorage_read_save";

// eslint-disable-next-line no-promise-executor-return
const sleep = (x: number) => new Promise((r) => setTimeout(r, x));

describe("Template", () => {
  let el: HTMLAnchorElement;
  let form: HTMLAnchorElement;

  beforeEach(() => {
    el = document.createElement("div") as unknown as HTMLAnchorElement;
    form = document.createElement("form") as unknown as HTMLAnchorElement;
    document.body.append(form, el);
  });
  afterEach(() => {
    document.getElementsByTagName("html")[0].innerHTML = "";
  });

  it("is a class", () => {
    expect(Template).toBeInstanceOf(Function);
    expect(new Template(el)).toBeInstanceOf(Template);
  });

  it("testing render()", async () => {
    const state = [`${Math.random()}`, `${Math.random()}`];
    const inner = `<ol id=\"olList\"><li onclick=\"cityInList(this.innerHTML);\" class=\"listItem\">${state[0]}</li><li onclick=\"cityInList(this.innerHTML);\" class=\"listItem\">${state[1]}</li></ol>`;
    const TestTemplate = new Template(el, state);
    TestTemplate.render();
    await sleep(0);

    expect(el.innerHTML.trim()).toBe(inner);
  });

  it("testing onMount", async () => {
    const state = [`${Math.random()}`, `${Math.random()}`];
    const TestTemplate = new Template(el, state);
    TestTemplate.render = jest.fn();
    TestTemplate.eventFunction = jest.fn();
    TestTemplate.onMount();
    await sleep(0);

    expect(TestTemplate.render).toHaveBeenCalled();
    expect(TestTemplate.eventFunction).toHaveBeenCalled();
  });
  it("testing updateState", async () => {
    const state = [`${Math.random()}`, `${Math.random()}`];
    const TestTemplate = new Template(el);
    TestTemplate.updateState(state);
    await sleep(0);

    expect(TestTemplate.state).toBe(state);
  });
  it("testing updateWeatherlist calls with localtorage data", async () => {
    const state = [`${Math.random()}`, `${Math.random()}`];
    saveList(state);
    await sleep(50);
    const TestTemplate = new Template(el);
    TestTemplate.render = jest.fn();
    TestTemplate.updateState = jest.fn();
    TestTemplate.updateWeatherlist();
    const localSt = await readList();
    await sleep(250);

    expect(TestTemplate.updateState).toHaveBeenCalledWith(localSt);
    expect(TestTemplate.render).toHaveBeenCalled();

    window.localStorage.removeItem("inputs");
  });
  it("testing result of updateWeatherlist", async () => {
    const state = [`${Math.random()}`, `${Math.random()}`];
    const inner = `<ol id=\"olList\"><li onclick=\"cityInList(this.innerHTML);\" class=\"listItem\">${state[0]}</li><li onclick=\"cityInList(this.innerHTML);\" class=\"listItem\">${state[1]}</li></ol>`;
    saveList(state);
    await sleep(50);
    const TestTemplate = new Template(el);
    TestTemplate.updateWeatherlist();
    await sleep(250);

    expect(TestTemplate.state).toStrictEqual(state);
    expect(el.innerHTML.trim()).toBe(inner);

    window.localStorage.removeItem("inputs");
  });
  it("testing eventFunction", async () => {
    const state = [`${Math.random()}`, `${Math.random()}`];
    const inner = `<ol id=\"olList\"><li onclick=\"cityInList(this.innerHTML);\" class=\"listItem\">${state[0]}</li><li onclick=\"cityInList(this.innerHTML);\" class=\"listItem\">${state[1]}</li></ol>`;
    saveList(state);
    await sleep(50);
    const TestTemplate = new Template(el);
    const event = new Event("submit");
    form.dispatchEvent(event);
    await sleep(350);

    console.log(document.body.innerHTML);
    expect(el.innerHTML.trim()).toBe(inner);
  });
  it("testing TestTemplate", async () => {
    const state = [`${Math.random()}`, `${Math.random()}`];
    const inner = `<ol id=\"olList\"><li onclick=\"cityInList(this.innerHTML);\" class=\"listItem\">${state[0]}</li><li onclick=\"cityInList(this.innerHTML);\" class=\"listItem\">${state[1]}</li></ol>`;
    saveList(state);
    const TestTemplate = new Template(el, state);
    await sleep(0);

    expect(el.innerHTML.trim()).toBe(inner);
  });
});

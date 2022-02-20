import { drawCityList } from "./drawCityList";
import { readList } from "./localStorage_read_save";
import { State, TemplateType } from "./types";

export class Template implements TemplateType {
  el: HTMLAnchorElement;

  state: State;

  constructor(el: HTMLAnchorElement, initialState?: State) {
    this.el = el;
    this.state = initialState || [];
    this.onMount();
  }

  updateState(newState: State) {
    this.state = newState;
  }

  async updateWeatherlist() {
    setTimeout(async () => {
      const items = await readList();
      this.updateState(items);
      this.render();
    }, 200);
    return Promise.resolve();
  }

  events = {
    "submit@form": this.updateWeatherlist.bind(this),
  };

  eventFunction() {
    Object.entries(this.events).forEach(([key, value]) => {
      const newKey = key.match(/(.*)@(.*)/);
      if (newKey) {
        document
          .querySelector(`${newKey[2]}`)
          ?.addEventListener(`${newKey[1]}`, value);
      }
    });
  }

  async onMount() {
    this.render();
    this.eventFunction();
    return Promise.resolve();
  }

  render() {
    this.el.innerHTML = `{{weatherList}}`;
    this.el.innerHTML = drawCityList(this.el, this.state);
  }
}

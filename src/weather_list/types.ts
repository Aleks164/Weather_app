export default interface WeatherType {
  name: string;
  coord: { lat: number; lon: number };
  main: { temp: number };
  weather: [
    {
      icon: string;
    }
  ];
}

export type State = string[];

export interface TemplateType {
  state: State;

  events: {
    [key: string]: (ev: Event) => void;
  };

  eventFunction(): void;

  onMount(el: HTMLElement): void;

  render(): void;
}

export default interface WeatherType {
    name: string;
    coord: { lat: number, lon: number };
    main: { temp: number };
    weather: [
        {
            icon: string;
        },
    ],
}  
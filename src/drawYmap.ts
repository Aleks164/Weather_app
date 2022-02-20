/* eslint-disable no-loop-func */
/* eslint-disable no-undef */
import { getLocaion } from "./wetherCurCityTempWindow/weatherInfoWindow";
import WeatherType from "./weather_list/types";
import arrow from "./images/arrow.png";

declare const ymaps: any;
const myArrow = new Image();
myArrow.src = arrow;

let myMap: {
  setCenter: (jI: [number, number]) => void;
  geoObjects: {
    remove: (placemark: unknown) => void;
    add: (placemark: unknown) => void;
  };
};
let mapposition: number[] | [] = [];
let placemark: unknown;

export function clickOnList(elItem: string) {
  const text = elItem;
  const item: string | null = localStorage.getItem("inputs");
  for (let i = 0; i < 11; i++) {
    if (item) {
      if (JSON.parse(item)[i] === text) {
        const el = localStorage.getItem("coord");
        if (el) {
          setTimeout(() => {
            const jI = JSON.parse(el)[i];
            if (typeof el[0] !== "undefined") {
              myMap.geoObjects.remove(placemark);
              placemark = new ymaps.Placemark(
                jI,
                {
                  hintContent: `${jI[0]}, ${jI[1]}`,
                },
                {
                  iconLayout: "default#image",
                  iconImageHref: arrow,
                  iconImageSize: [45, 45],
                  iconImageOffset: [-47, 5],
                }
              );
              myMap.geoObjects.add(placemark);
              myMap.setCenter(jI);
            }
          }, 200);
        }
      }
    }
  }
}

export function showCityOnMapAfterClickOnButton(loc: WeatherType) {
  const latitude = loc.coord.lat;
  const longitude = loc.coord.lon;
  myMap.geoObjects.remove(placemark);
  placemark = new ymaps.Placemark(
    [latitude, longitude],
    {
      hintContent: [latitude, longitude],
    },
    {
      iconLayout: "default#image",
      iconImageHref: arrow,
      iconImageSize: [45, 45],
      iconImageOffset: [-47, 5],
    }
  );
  myMap.geoObjects.add(placemark);
  myMap.setCenter([latitude, longitude]);
}

function readCoordList(): Array<number[]> | [] {
  const item = localStorage.getItem("coord");
  return item === null ? [] : JSON.parse(item);
}

async function checkStoreCoor(coord: [number, number] | []) {
  if (readCoordList().length === 0) {
    mapposition = coord;
  } else {
    mapposition = await readCoordList()[0];
  }
}

ymaps.ready(async () => {
  const loc: { latitude: number; longitude: number } = await getLocaion();
  const coord: [number, number] = [loc.latitude, loc.longitude];
  await checkStoreCoor(coord);

  myMap = new ymaps.Map("map", {
    center: [mapposition[0], mapposition[1]],
    zoom: 8,
    controls: ["zoomControl"],
    behaviors: ["drag"],
  });
  placemark = new ymaps.Placemark(
    [mapposition[0], mapposition[1]],
    {
      hintContent: `${mapposition[0]}, ${mapposition[1]}`,
    },
    {
      iconLayout: "default#image",
      iconImageHref: arrow,
      iconImageSize: [45, 45],
      iconImageOffset: [-47, 5],
    }
  );
  myMap.geoObjects.add(placemark);
});

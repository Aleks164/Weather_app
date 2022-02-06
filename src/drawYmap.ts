/* eslint-disable no-undef */
import { getLocaion } from "./wetherCurCityTempWindow/weatherInfoWindow";
import arrow from "./images/arrow.png";

const myArrow = new Image();
myArrow.src = arrow;

let myMap;
let mapposition = [];
let placemark;

export function clickOnList(elItem) {
  const text = elItem;
  const item = localStorage.getItem("inputs");
  for (let i = 0; i < 11; i++) {
    if (JSON.parse(item)[i] === text) {
      const el = localStorage.getItem("coord");
      // eslint-disable-next-line no-loop-func
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

export function showCityOnMapAfterClickOnButton(loc) {
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

function readCoordList() {
  const item = localStorage.getItem("coord");
  return item === null ? [] : JSON.parse(item);
}

async function checkStoreCoor(coord) {
  mapposition = (await readCoordList()[0]) || coord;
}

ymaps.ready(async () => {
  const loc = await getLocaion();
  const coord = [loc.latitude, loc.longitude];
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

import { getLocaion } from "./wetherCurCityTempWindow/weatherInfoWindow.js";

var myMap;
var mapposition = [];
var placemark;

export function clickOnList(el) {
  const text = el;
  let item = localStorage.getItem("inputs");
  for (let i = 0; i < 11; i++) {
    if (JSON.parse(item)[i] === text) {
      const el = localStorage.getItem("coord");
      setTimeout(function () {
        const jI = JSON.parse(el)[i];
        if (typeof el[0] !== "undefined") {
          myMap.geoObjects.remove(placemark);
          placemark = new ymaps.Placemark(
            jI,
            {
              hintContent: `${jI[0]}, ${jI[1]}`
            },
            {
              iconLayout: "default#image",
              iconImageHref: "images/arrow.png",
              iconImageSize: [45, 45],
              iconImageOffset: [-47, 5]
            }
          );
          myMap.geoObjects.add(placemark);
          myMap.setCenter(jI);
        }
      }, 200);
    }
  }
}
export function addEventForButtonAfterEl() {
  const formEl = document.querySelector("#button");
  formEl.addEventListener("click", () => {
    setTimeout(async function () {
      await checkStoreCoor();
      if (typeof mapposition[0] !== "undefined") {
        myMap.geoObjects.remove(placemark);
        placemark = new ymaps.Placemark(
          mapposition,
          {
            hintContent: `${mapposition[0]}, ${mapposition[1]}`
          },
          {
            iconLayout: "default#image",
            iconImageHref: "images/arrow.png",
            iconImageSize: [45, 45],
            iconImageOffset: [-47, 5]
          }
        );
        myMap.geoObjects.add(placemark);
        myMap.setCenter(mapposition);
      }
    }, 200);
  });
}
function readCoordList() {
  const item = localStorage.getItem("coord");
  return item === null ? [] : JSON.parse(item);
}

async function checkStoreCoor(coord) {
  mapposition = (await readCoordList()[0]) || coord;
}

ymaps.ready(start);
export async function start() {
  const weatherInfoWindow = document.querySelector("#weatherInfoWindow");
  let loc = await getLocaion(weatherInfoWindow);
  let coord = [loc.latitude, loc.longitude];
  await checkStoreCoor(coord);

  myMap = new ymaps.Map("map", {
    center: [mapposition[0], mapposition[1]],
    zoom: 8,
    controls: ["zoomControl"],
    behaviors: ["drag"]
  });
  placemark = new ymaps.Placemark(
    [mapposition[0], mapposition[1]],
    {
      hintContent: `${mapposition[0]}, ${mapposition[1]}`
    },
    {
      iconLayout: "default#image",
      iconImageHref: "images/arrow.png",
      iconImageSize: [45, 45],
      iconImageOffset: [-47, 5]
    }
  );
  myMap.geoObjects.add(placemark);
}

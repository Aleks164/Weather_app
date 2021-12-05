/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/drawYmap.js":
/*!*************************!*\
  !*** ./src/drawYmap.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clickOnList\": () => (/* binding */ clickOnList),\n/* harmony export */   \"showCityOnMapAfterClickOnButton\": () => (/* binding */ showCityOnMapAfterClickOnButton)\n/* harmony export */ });\n/* harmony import */ var _wetherCurCityTempWindow_weatherInfoWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wetherCurCityTempWindow/weatherInfoWindow.js */ \"./src/wetherCurCityTempWindow/weatherInfoWindow.js\");\n\n\nvar myMap;\nvar mapposition = [];\nvar placemark;\n\nfunction clickOnList(el) {\n  const text = el;\n  let item = localStorage.getItem(\"inputs\");\n  for (let i = 0; i < 11; i++) {\n    if (JSON.parse(item)[i] === text) {\n      const el = localStorage.getItem(\"coord\");\n      // eslint-disable-next-line no-loop-func\n      setTimeout(() => {\n        const jI = JSON.parse(el)[i];\n        if (typeof el[0] !== \"undefined\") {\n          myMap.geoObjects.remove(placemark);\n          placemark = new ymaps.Placemark(\n            jI,\n            {\n              hintContent: `${jI[0]}, ${jI[1]}`\n            },\n            {\n              iconLayout: \"default#image\",\n              iconImageHref: \"images/arrow.png\",\n              iconImageSize: [45, 45],\n              iconImageOffset: [-47, 5]\n            }\n          );\n          myMap.geoObjects.add(placemark);\n          myMap.setCenter(jI);\n        }\n      }, 200);\n    }\n  }\n}\n\nfunction showCityOnMapAfterClickOnButton(loc) {\n  const latitude = loc.coord.lat;\n  const longitude = loc.coord.lon;\n  myMap.geoObjects.remove(placemark);\n  placemark = new ymaps.Placemark(\n    [latitude, longitude],\n    {\n      hintContent: [latitude, longitude]\n    },\n    {\n      iconLayout: \"default#image\",\n      iconImageHref: \"images/arrow.png\",\n      iconImageSize: [45, 45],\n      iconImageOffset: [-47, 5]\n    }\n  );\n  myMap.geoObjects.add(placemark);\n  myMap.setCenter([latitude, longitude]);\n}\n\nfunction readCoordList() {\n  const item = localStorage.getItem(\"coord\");\n  return item === null ? [] : JSON.parse(item);\n}\n\nasync function checkStoreCoor(coord) {\n  mapposition = (await readCoordList()[0]) || coord;\n}\n\nymaps.ready(async () => {\n  const loc = await (0,_wetherCurCityTempWindow_weatherInfoWindow_js__WEBPACK_IMPORTED_MODULE_0__.getLocaion)();\n  const coord = [loc.latitude, loc.longitude];\n  await checkStoreCoor(coord);\n\n  myMap = new ymaps.Map(\"map\", {\n    center: [mapposition[0], mapposition[1]],\n    zoom: 8,\n    controls: [\"zoomControl\"],\n    behaviors: [\"drag\"]\n  });\n  placemark = new ymaps.Placemark(\n    [mapposition[0], mapposition[1]],\n    {\n      hintContent: `${mapposition[0]}, ${mapposition[1]}`\n    },\n    {\n      iconLayout: \"default#image\",\n      iconImageHref: \"images/arrow.png\",\n      iconImageSize: [45, 45],\n      iconImageOffset: [-47, 5]\n    }\n  );\n  myMap.geoObjects.add(placemark);\n});\n\n\n//# sourceURL=webpack://newproj/./src/drawYmap.js?");

/***/ }),

/***/ "./src/wetherCurCityTempWindow/weatherInfoWindow.js":
/*!**********************************************************!*\
  !*** ./src/wetherCurCityTempWindow/weatherInfoWindow.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLocaion\": () => (/* binding */ getLocaion),\n/* harmony export */   \"getCurrenCityTemp\": () => (/* binding */ getCurrenCityTemp),\n/* harmony export */   \"showWeatherInWindow\": () => (/* binding */ showWeatherInWindow)\n/* harmony export */ });\n/* harmony import */ var _weatherInfoWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherInfoWindow.js */ \"./src/wetherCurCityTempWindow/weatherInfoWindow.js\");\n// eslint-disable-next-line import/no-self-import\n\n\nconst API_KEY = \"208564fc52a377799242a74d74f824e0\";\nlet cityCache = false;\nlet weatherCache = false;\n\nasync function getLocaion(cityCache) {\n  try {\n    if (!cityCache) {\n      const response = await window.fetch(\n        `https://get.geojs.io/v1/ip/geo.json`\n      );\n      cityCache = await response.json();\n    }\n    return cityCache;\n  } catch (e) {\n    return \"Failed to fetch of geo\";\n  }\n}\n\nasync function getCurrenCityTemp() {\n  const curCity = await _weatherInfoWindow_js__WEBPACK_IMPORTED_MODULE_0__.getLocaion();\n  try {\n    if (curCity === \"Failed to fetch of geo\") {\n      throw new Error(\"Failed to fetch of geo\");\n    }\n    const response = await window.fetch(\n      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${curCity.city}&appid=${API_KEY}`\n    );\n    weatherCache = await response.json();\n    return weatherCache;\n  } catch (e) {\n    return `${e.message}`;\n  }\n}\n\nasync function showWeatherInWindow(weatherInfoWindow) {\n  const cityTemp = await _weatherInfoWindow_js__WEBPACK_IMPORTED_MODULE_0__.getCurrenCityTemp();\n  if (typeof cityTemp === \"string\") {\n    weatherInfoWindow.innerHTML = `<p id = \"curCity\">${cityTemp}</p><p id = \"curTemp\">Viewing the weather in your city is currently unavailable</p>`;\n    setTimeout(() => {\n      weatherInfoWindow.style.display = \"unset\";\n    }, 1000);\n  } else if (cityTemp.main.temp) {\n    weatherInfoWindow.innerHTML = `<p id = \"curCity\">${cityTemp.name}</p><img id=\"imgWind\" src=\"http://openweathermap.org/img/wn/${cityTemp.weather[0].icon}.png\" alt=\"weathericon\"</img><hr><p id = \"curTemp\">Current temperature in your city is  <b id=\"tempColor\"> ${cityTemp.main.temp}&deg;С</b></p>`;\n    setTimeout(() => {\n      weatherInfoWindow.style.display = \"unset\";\n    }, 1000);\n  }\n}\n\n\n//# sourceURL=webpack://newproj/./src/wetherCurCityTempWindow/weatherInfoWindow.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/drawYmap.js");
/******/ 	
/******/ })()
;
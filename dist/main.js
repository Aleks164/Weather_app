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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather_list_createDomEl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather_list/createDomEl.js */ \"./src/weather_list/createDomEl.js\");\n/* harmony import */ var _weather_list_WeatherAfterClickOnList_showWeatherAfterClickOnList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather_list/WeatherAfterClickOnList/showWeatherAfterClickOnList.js */ \"./src/weather_list/WeatherAfterClickOnList/showWeatherAfterClickOnList.js\");\n\n\n\nconst el = document.querySelector(\"#container\");\n(0,_weather_list_createDomEl_js__WEBPACK_IMPORTED_MODULE_0__.crateDomEl)(el);\n\nconst weatherInfoWindowRiht = document.querySelector(\"#weatherInfoWindowRiht\");\nfunction cityInList(text) {\n    (0,_weather_list_WeatherAfterClickOnList_showWeatherAfterClickOnList_js__WEBPACK_IMPORTED_MODULE_1__.showWeatherAfterClickOnList)(text, weatherInfoWindowRiht);\n}\n\nwindow.cityInList = cityInList;\n\n//# sourceURL=webpack://newproj/./src/main.js?");

/***/ }),

/***/ "./src/weather_list/WeatherAfterClickOnList/showWeatherAfterClickOnList.js":
/*!*********************************************************************************!*\
  !*** ./src/weather_list/WeatherAfterClickOnList/showWeatherAfterClickOnList.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showWeatherAfterClickOnList\": () => (/* binding */ showWeatherAfterClickOnList)\n/* harmony export */ });\n/* harmony import */ var _drawYmap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../drawYmap.js */ \"./src/drawYmap.js\");\n\r\n\r\nconst API_KEY = \"208564fc52a377799242a74d74f824e0\";\r\n\r\nasync function showWeatherAfterClickOnList(text, weatherInfoWindowRiht) {\r\n  try {\r\n    (0,_drawYmap_js__WEBPACK_IMPORTED_MODULE_0__.clickOnList)(text);\r\n    const respons = await window.fetch(\r\n      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${text}&appid=${API_KEY}`\r\n    );\r\n\r\n    const result = await respons.json();\r\n    weatherInfoWindowRiht.innerHTML = `<div><p id= \"p_img\">Current temperature in ${result.name} is  ${result.main.temp}&deg;С</p>\r\n<img id=\"imgW\" src=\"http://openweathermap.org/img/wn/${result.weather[0].icon}.png\" alt=\"weathericon\"></div>`;\r\n  } catch (e) {\r\n    weatherInfoWindowRiht.innerHTML = `<div><p id= \"p_img\">City with name ${text}</p></div>`;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://newproj/./src/weather_list/WeatherAfterClickOnList/showWeatherAfterClickOnList.js?");

/***/ }),

/***/ "./src/weather_list/cityForList.js":
/*!*****************************************!*\
  !*** ./src/weather_list/cityForList.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cityForList\": () => (/* binding */ cityForList)\n/* harmony export */ });\n// eslint-disable-next-line import/prefer-default-export\r\nfunction cityForList(weather) {\r\n  const check = typeof weather === \"object\";\r\n  if (check) {\r\n    return weather.name;\r\n  }\r\n  return `\"${weather}\" was not found`;\r\n}\r\n\n\n//# sourceURL=webpack://newproj/./src/weather_list/cityForList.js?");

/***/ }),

/***/ "./src/weather_list/coordForList.js":
/*!******************************************!*\
  !*** ./src/weather_list/coordForList.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"coordForList\": () => (/* binding */ coordForList)\n/* harmony export */ });\n// eslint-disable-next-line import/prefer-default-export\r\nfunction coordForList(weather) {\r\n  const check = typeof weather === \"object\";\r\n  if (check) {\r\n    const coord = [weather.coord.lat, weather.coord.lon];\r\n    return coord;\r\n  }\r\n  return [];\r\n}\r\n\n\n//# sourceURL=webpack://newproj/./src/weather_list/coordForList.js?");

/***/ }),

/***/ "./src/weather_list/createDomEl.js":
/*!*****************************************!*\
  !*** ./src/weather_list/createDomEl.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"crateDomEl\": () => (/* binding */ crateDomEl)\n/* harmony export */ });\n/* harmony import */ var _localStorage_read_save_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage_read_save.js */ \"./src/weather_list/localStorage_read_save.js\");\n/* harmony import */ var _drawCityList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawCityList.js */ \"./src/weather_list/drawCityList.js\");\n/* harmony import */ var _getWeather_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWeather.js */ \"./src/weather_list/getWeather.js\");\n/* harmony import */ var _cityForList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cityForList.js */ \"./src/weather_list/cityForList.js\");\n/* harmony import */ var _coordForList_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coordForList.js */ \"./src/weather_list/coordForList.js\");\n/* harmony import */ var _drawInfoWindowRiht_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drawInfoWindowRiht.js */ \"./src/weather_list/drawInfoWindowRiht.js\");\n/* harmony import */ var _wetherCurCityTempWindow_weatherInfoWindow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../wetherCurCityTempWindow/weatherInfoWindow.js */ \"./src/wetherCurCityTempWindow/weatherInfoWindow.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// eslint-disable-next-line import/prefer-default-export\r\nasync function crateDomEl(el) {\r\n  el.innerHTML = `<h1 class=\"title\">Weather</h1>\r\n  <hr id=\"hr1\">\r\n<div id=\"maindiv\">\r\n<div id=\"textdiv\">\r\n<p id= \"info\">\r\n     User can enter data in the input field, and see the list of entered data below. When the page is refreshed (or the browser is closed), the list is saved.\r\n   The window below displays the weather in your city.\r\n  </p>\r\n  <div id=\"form\">\r\n  <form>\r\n    <input\r\n      id=\"userInput\"\r\n      placeholder=\"Type city and press enter\"\r\n      required\r\n      autofocus\r\n    />\r\n    <button id=\"button\">Get weather</button>\r\n  </form>\r\n  </div>\r\n  </div>\r\n  <hr id=\"hr2\">\r\n  <div id=\"weatherInfocont\">\r\n  <div id=\"weatherInfo\"></div>\r\n  <div id=\"map\"></div>\r\n  </div>\r\n  <div  class=\"animate__fadeInLeft\" id=\"weatherInfoWindow\"></div>\r\n  </div>\r\n  <div class=\"animate__fadeInDown\" id=\"weatherInfoWindowRiht\"><p id= \"p_before\">Enter name of the city to find out temperature in this city or select a city from the list on the bottom left if the city you are interested is in it</p></div>    \r\n`;\r\n\r\n  const formEl = document.querySelector(\"form\");\r\n  const weatherInfoEl = document.querySelector(\"#weatherInfo\");\r\n  const weatherInfoWindowRiht = document.querySelector(\r\n    \"#weatherInfoWindowRiht\"\r\n  );\r\n  const weatherInfoWindow = document.querySelector(\"#weatherInfoWindow\");\r\n  const items = await (0,_localStorage_read_save_js__WEBPACK_IMPORTED_MODULE_0__.readList)();\r\n  const coordItems = await (0,_localStorage_read_save_js__WEBPACK_IMPORTED_MODULE_0__.readCoordList)();\r\n  (0,_drawCityList_js__WEBPACK_IMPORTED_MODULE_1__.drawCityList)(weatherInfoEl, items);\r\n  await (0,_wetherCurCityTempWindow_weatherInfoWindow_js__WEBPACK_IMPORTED_MODULE_6__.showWeatherInWindow)(weatherInfoWindow);\r\n  formEl.addEventListener(\"submit\", async (ev) => {\r\n    ev.preventDefault();\r\n    const formElement = ev.target;\r\n    const inputEl = formElement.querySelector(\"input\");\r\n    const cityName = inputEl.value;\r\n    inputEl.value = \"\";\r\n    const weather = await (0,_getWeather_js__WEBPACK_IMPORTED_MODULE_2__.getWeather)(cityName);\r\n\r\n    const citylist = (0,_cityForList_js__WEBPACK_IMPORTED_MODULE_3__.cityForList)(weather);\r\n    const coordList = (0,_coordForList_js__WEBPACK_IMPORTED_MODULE_4__.coordForList)(weather);\r\n    items.unshift(citylist);\r\n    coordItems.unshift(coordList);\r\n    (0,_localStorage_read_save_js__WEBPACK_IMPORTED_MODULE_0__.saveList)(items);\r\n    (0,_localStorage_read_save_js__WEBPACK_IMPORTED_MODULE_0__.saveCoordList)(coordItems);\r\n    (0,_drawInfoWindowRiht_js__WEBPACK_IMPORTED_MODULE_5__.drawInfoWindowRiht)(weather, weatherInfoWindowRiht);\r\n    (0,_drawCityList_js__WEBPACK_IMPORTED_MODULE_1__.drawCityList)(weatherInfoEl, items);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://newproj/./src/weather_list/createDomEl.js?");

/***/ }),

/***/ "./src/weather_list/drawCityList.js":
/*!******************************************!*\
  !*** ./src/weather_list/drawCityList.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawCityList\": () => (/* binding */ drawCityList)\n/* harmony export */ });\n// eslint-disable-next-line import/prefer-default-export\r\nasync function drawCityList(el, items) {\r\n  if (items.length > 10) {\r\n    items.pop();\r\n  }\r\n  el.innerHTML = `<ol id = \"olList\">${items\r\n    .map(\r\n      (item) =>\r\n        `<li onclick=\"cityInList(this.innerHTML);\" class = \"listItem\">${item}</li>`\r\n    )\r\n    .join(\"\")}</ol>`;\r\n}\r\n\n\n//# sourceURL=webpack://newproj/./src/weather_list/drawCityList.js?");

/***/ }),

/***/ "./src/weather_list/drawInfoWindowRiht.js":
/*!************************************************!*\
  !*** ./src/weather_list/drawInfoWindowRiht.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawInfoWindowRiht\": () => (/* binding */ drawInfoWindowRiht)\n/* harmony export */ });\n// eslint-disable-next-line import/prefer-default-export\r\nfunction drawInfoWindowRiht(weather, weatherInfoWindowRiht) {\r\n  const check = typeof weather === \"object\";\r\n  if (check) {\r\n    weatherInfoWindowRiht.innerHTML = `</div><p id= \"p_img\">Current temperature in ${weather.name} is  ${weather.main.temp}&deg;С</p>\r\n        <img id=\"imgW\" src=\"http://openweathermap.org/img/wn/${weather.weather[0].icon}.png\" alt=\"alternatetext\"></div>`;\r\n        } else {\r\n    weatherInfoWindowRiht.innerHTML = `\"${weather}\" was not found`;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://newproj/./src/weather_list/drawInfoWindowRiht.js?");

/***/ }),

/***/ "./src/weather_list/getWeather.js":
/*!****************************************!*\
  !*** ./src/weather_list/getWeather.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeather\": () => (/* binding */ getWeather)\n/* harmony export */ });\n/* harmony import */ var _drawYmap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../drawYmap.js */ \"./src/drawYmap.js\");\n\r\n\r\nconst API_KEY = \"208564fc52a377799242a74d74f824e0\";\r\n// eslint-disable-next-line import/prefer-default-export\r\nasync function getWeather(cityName) {\r\n  try {\r\n    const respons = await window.fetch(\r\n      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${API_KEY}`\r\n    );\r\n\r\n    const resp = await respons.json();\r\n    (0,_drawYmap_js__WEBPACK_IMPORTED_MODULE_0__.showCityOnMapAfterClickOnButton)(resp);\r\n    return resp;\r\n  } catch (e) {\r\n    return cityName;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://newproj/./src/weather_list/getWeather.js?");

/***/ }),

/***/ "./src/weather_list/localStorage_read_save.js":
/*!****************************************************!*\
  !*** ./src/weather_list/localStorage_read_save.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"readList\": () => (/* binding */ readList),\n/* harmony export */   \"readCoordList\": () => (/* binding */ readCoordList),\n/* harmony export */   \"saveList\": () => (/* binding */ saveList),\n/* harmony export */   \"saveCoordList\": () => (/* binding */ saveCoordList)\n/* harmony export */ });\nasync function readList() {\n  const item = window.localStorage.getItem(\"inputs\");\n  return item === null ? [] : JSON.parse(item);\n}\nasync function readCoordList() {\n  const item = window.localStorage.getItem(\"coord\");\n  return item === null ? [] : JSON.parse(item);\n}\nfunction saveList(items) {\n  const imputsPars = JSON.stringify(items);\n  window.localStorage.setItem(\"inputs\", imputsPars);\n}\nfunction saveCoordList(coordItems) {\n  const imputsPars = JSON.stringify(coordItems);\n  window.localStorage.setItem(\"coord\", imputsPars);\n}\n\n\n//# sourceURL=webpack://newproj/./src/weather_list/localStorage_read_save.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;
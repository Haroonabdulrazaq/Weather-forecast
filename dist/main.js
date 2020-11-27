/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\n\nconst submitButton = document.querySelector('.submit-btn');\n\nsubmitButton.addEventListener('click', (e) => {\n  e.preventDefault();\n  _weather__WEBPACK_IMPORTED_MODULE_0__.default.weatherInfo();\n});\n\n//# sourceURL=webpack://weather-forecast/./src/index.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst weatherModule = (() => {\n  const weatherInfo = async () => {\n    const pressureResult = document.querySelector('.pressure-result');\n    const humidityResult = document.querySelector('.humidity-result');\n    const precpitationResult = document.querySelector('.precipitation-result');\n    const windResult = document.querySelector('.wind-result');\n    const timeResult = document.querySelector('.time-result');\n    const mainWeather = document.querySelector('.main-weather');\n    const loader = document.querySelector('.loader');\n    const input = document.querySelector('.city-input');\n    const searchText = document.querySelector('.search-text');\n    const tempResult = document.querySelector('.temp-result');\n    const tempUnit = document.querySelector('.temp-unit');\n    let temp = 0;\n    const inputValue = input.value;\n\n    const regexp = /[a-zA-Z]/;\n    try {\n      if (inputValue.match(regexp)) {\n        loader.classList.remove('hide');\n\n        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=f1626be87a0ae483be20b659210c16a3`);\n        response = await response.json();\n\n        loader.classList.add('hide');\n\n        searchText.textContent = inputValue.toUpperCase();\n        mainWeather.textContent = `${response.weather[0].description}`;\n        temp = Math.floor((response.main.temp) - 273);\n        tempResult.textContent = `${temp}°C`;\n        pressureResult.textContent = `${response.main.pressure}mm`;\n        humidityResult.textContent = `${response.main.humidity}%`;\n        precpitationResult.textContent = `${response.weather[0].main}`;\n        windResult.textContent = `${response.wind.speed}m/s`;\n        timeResult.textContent = response.timezone < 0 ? `UTC${response.timezone / 3600}` : `UTC+${response.timezone / 3600}`;\n\n\n        tempUnit.addEventListener('click', (e) => {\n          e.preventDefault();\n          if (tempUnit.textContent === 'Celsius') {\n            tempUnit.textContent = 'Fahrenheit';\n            tempResult.textContent = `${temp}°C`;\n          } else if (tempUnit.textContent === 'Fahrenheit') {\n            tempUnit.textContent = 'Celsius';\n            tempResult.textContent = `${((temp * 9) / 5) + 32}F`;\n          } else {\n            tempUnit.textContent = 'Fahrenheit';\n            tempResult.textContent = `${temp}°C`;\n          }\n        });\n\n        return response;\n      }\n      searchText.textContent = 'Invalid Input';\n    } catch (error) {\n      searchText.textContent = 'Location not found';\n    }\n    return {};\n  };\n\n  return { weatherInfo };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherModule);\n\n//# sourceURL=webpack://weather-forecast/./src/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
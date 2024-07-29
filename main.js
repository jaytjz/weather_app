/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const weatherAPI = 'F92LRCNCWJPJ7WSCC5LP4HWCX';\nlet location = 'london';\n\nasync function getWeatherData(location) {\n    const link = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${weatherAPI}`;\n\n    try{\n        const response = await fetch(link);\n        const data = await response.json();\n        console.log(data);\n        return data;\n    } catch(error) {\n        console.error('Error fetching weather data:', error);\n    }\n}\n\nfunction updateDisplay(city) {\n    const content = document.getElementById(\"content\");\n    getWeatherData(city).then(data => {\n        const address = data.address;\n        const currentConditions = data.currentConditions;\n        const humidity = currentConditions.humidity;\n        const conditions = currentConditions.conditions;\n        const temp = currentConditions.temp;\n        const feelslike = currentConditions.feelslike;\n\n        content.innerHTML = `\n            <p>Temperature: ${temp} °F</p>\n            <p>Humidity: ${humidity} %</p>\n            <p>Feels like: ${feelslike} °F</p>\n            <p>Conditions: ${conditions}</p>\n            <p>City: ${address}</p>\n        `\n        console.log(temp);\n        console.log(humidity); \n        console.log(feelslike);\n        console.log(conditions);\n        console.log(address);      \n    })\n}\n\ndocument.querySelector(\"form\").addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n    const city = document.getElementById(\"location\").value;\n    updateDisplay(city);\n})\n\n//# sourceURL=webpack://weather_app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
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

/***/ "./src/es6-generator.js":
/*!******************************!*\
  !*** ./src/es6-generator.js ***!
  \******************************/
/***/ (() => {

eval("const hello = () => \"hello\";\r\nconst word = () => \"word\"\r\n\r\nfunction* generator(){\r\n\r\n    yield hello();\r\n    yield word();\r\n\r\n    return `${hello()}, ${word()}!`\r\n}\r\n\r\nconst r = generator();\r\n\r\nfunction run() {\r\n    console.log(r.next());\r\n}\r\n\r\n\n\n//# sourceURL=webpack://es6/./src/es6-generator.js?");

/***/ }),

/***/ "./src/workbox.js":
/*!************************!*\
  !*** ./src/workbox.js ***!
  \************************/
/***/ (() => {

eval("\r\nif(Reflect.has(navigator, \"serivceWorker\")){\r\n    window.addEventListener('load', () =>　{\r\n        navigator.serviceWorker.register(\"/service-worker.js\").then(res => {\r\n            console.log(\"SW 注册成功：\", res)\r\n        }).catch(err => {\r\n            console.log(\"SW 注册失败：\", err)\r\n        })\r\n    })\r\n}else{\r\n    console.log(\"不存在\")\r\n}\n\n//# sourceURL=webpack://es6/./src/workbox.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/workbox.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/es6-generator.js"]();
/******/ 	
/******/ })()
;
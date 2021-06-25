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

/***/ "./src/client.ts":
/*!***********************!*\
  !*** ./src/client.ts ***!
  \***********************/
/***/ (() => {

eval("var socket = new WebSocket(\"ws://localhost:8080\");\r\nsocket.onopen = function (e) {\r\n    socket.send(\"Hello traveler\");\r\n};\r\nsocket.onmessage = function (event) {\r\n    var msg = document.getElementById('messages');\r\n    var item = document.createElement('li');\r\n    item.textContent = event.data;\r\n    msg === null || msg === void 0 ? void 0 : msg.appendChild(item);\r\n};\r\ndocument.getElementById('send').addEventListener('click', function () {\r\n    socket.send(document.getElementById('msg').value);\r\n});\r\n\n\n//# sourceURL=webpack://lab7/./src/client.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client.ts"]();
/******/ 	
/******/ })()
;
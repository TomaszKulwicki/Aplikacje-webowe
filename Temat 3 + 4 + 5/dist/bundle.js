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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0px;\\n  margin: 0px;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\n:root {\\n  --color-bakcground:#0f1e50;\\n  --color-text: #E1E0DE;\\n  --color-button:#5f3e72;\\n  --color-white:white;\\n}\\n\\n[data-theme=dark] {\\n  --color-bakcground:rgb(156, 146, 146);\\n  --color-button:rgb(128, 128, 128);\\n}\\n\\nbody {\\n  background-color: var(--color-bakcground);\\n  color: #E1E0DE;\\n  font-size: 40px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100vh;\\n  text-align: center;\\n}\\n\\nul {\\n  display: flex;\\n}\\nul li {\\n  padding: 10px;\\n}\\n\\nbutton {\\n  background-color: var(--color-button);\\n  margin: 10px;\\n  border: none;\\n  color: white;\\n  padding: 15px 32px;\\n  text-decoration: none;\\n  display: inline-block;\\n  font-size: 30px;\\n}\\n\\ntd {\\n  text-align: center;\\n  background-color: var(--color-button);\\n  width: 100px;\\n  height: 100px;\\n}\\n\\n.changecolor {\\n  background-color: gray;\\n}\\n\\n#menuContainer {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n* {\\n  padding: 0px;\\n  margin: 0px;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\n:root {\\n  --color-bakcground:#0f1e50;\\n  --color-text: #E1E0DE;\\n  --color-button:#5f3e72;\\n  --color-white:white;\\n}\\n\\n[data-theme=dark] {\\n  --color-bakcground:rgb(156, 146, 146);\\n  --color-button:rgb(128, 128, 128);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./src/styles/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar GameMenu_1 = __webpack_require__(/*! ./gameMenu/GameMenu */ \"./src/gameMenu/GameMenu.ts\");\r\nvar game_1 = __webpack_require__(/*! ./gameMenu/game */ \"./src/gameMenu/game.ts\");\r\n__webpack_require__(/*! ./styles/styles.scss */ \"./src/styles/styles.scss\");\r\nvar App = /** @class */ (function () {\r\n    function App() {\r\n        this.init();\r\n    }\r\n    App.prototype.init = function () {\r\n        var gamesmenu = new GameMenu_1[\"default\"]();\r\n        gamesmenu.addGame(new game_1.GameEnabled(1));\r\n        gamesmenu.addGame(new game_1.GameEnabled(2));\r\n        gamesmenu.showMenu();\r\n    };\r\n    return App;\r\n}());\r\nvar myApp = new App();\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/darkmode.ts":
/*!*************************!*\
  !*** ./src/darkmode.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.DarkMode = void 0;\r\nvar DarkMode = /** @class */ (function () {\r\n    function DarkMode(val) {\r\n        this.value = val;\r\n    }\r\n    DarkMode.prototype.changeToDark = function () {\r\n        if (this.value === true) {\r\n            return (document.body.removeAttribute('data-theme'));\r\n        }\r\n        else {\r\n            return (document.body.setAttribute('data-theme', 'dark'));\r\n        }\r\n    };\r\n    return DarkMode;\r\n}());\r\nexports.DarkMode = DarkMode;\r\n\n\n//# sourceURL=webpack:///./src/darkmode.ts?");

/***/ }),

/***/ "./src/database/savegame.ts":
/*!**********************************!*\
  !*** ./src/database/savegame.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.GameSaver = void 0;\r\nvar GameSaver = /** @class */ (function () {\r\n    function GameSaver(key) {\r\n        this.key = key;\r\n    }\r\n    GameSaver.prototype.saveData = function (gameData) {\r\n        localStorage.setItem(this.key, JSON.stringify(gameData));\r\n    };\r\n    GameSaver.prototype.loadGameSave = function () {\r\n        return (JSON.parse(localStorage.getItem(this.key)));\r\n    };\r\n    GameSaver.prototype.deleteSave = function () {\r\n        localStorage.removeItem(this.key);\r\n    };\r\n    return GameSaver;\r\n}());\r\nexports.GameSaver = GameSaver;\r\n\n\n//# sourceURL=webpack:///./src/database/savegame.ts?");

/***/ }),

/***/ "./src/database/sessionstorage.ts":
/*!****************************************!*\
  !*** ./src/database/sessionstorage.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.SessionStorage = void 0;\r\nvar SessionStorage = /** @class */ (function () {\r\n    function SessionStorage(key) {\r\n        this.key = key;\r\n    }\r\n    SessionStorage.prototype.saveMove = function (gameData) {\r\n        var oldData;\r\n        oldData = JSON.parse(sessionStorage.getItem(this.key));\r\n        console.log(oldData);\r\n        if (oldData == null) {\r\n            oldData = [];\r\n        }\r\n        oldData.push(gameData);\r\n        sessionStorage.setItem(this.key, JSON.stringify(oldData));\r\n    };\r\n    SessionStorage.prototype.goBack = function () {\r\n        var moveData;\r\n        var remainingData;\r\n        moveData = JSON.parse(sessionStorage.getItem(this.key));\r\n        var moveNumber = (moveData.length - 1);\r\n        console.log(moveData);\r\n        remainingData = moveData.slice(0, moveData.length - 1);\r\n        console.log(remainingData);\r\n        sessionStorage.removeItem(this.key);\r\n        sessionStorage.setItem(this.key, JSON.stringify(remainingData));\r\n        return (moveData[moveNumber - 1]);\r\n    };\r\n    SessionStorage.prototype.returnAll = function () {\r\n        return (JSON.parse(sessionStorage.getItem(this.key)));\r\n    };\r\n    SessionStorage.prototype.resetStorage = function () {\r\n        sessionStorage.removeItem(this.key);\r\n    };\r\n    return SessionStorage;\r\n}());\r\nexports.SessionStorage = SessionStorage;\r\n\n\n//# sourceURL=webpack:///./src/database/sessionstorage.ts?");

/***/ }),

/***/ "./src/game.enum.ts":
/*!**************************!*\
  !*** ./src/game.enum.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.Games = void 0;\r\nvar Games;\r\n(function (Games) {\r\n    Games[Games[\"TicTacToe\"] = 1] = \"TicTacToe\";\r\n    Games[Games[\"BattleShips\"] = 2] = \"BattleShips\";\r\n})(Games = exports.Games || (exports.Games = {}));\r\n\n\n//# sourceURL=webpack:///./src/game.enum.ts?");

/***/ }),

/***/ "./src/gameMenu/GameMenu.ts":
/*!**********************************!*\
  !*** ./src/gameMenu/GameMenu.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar Tictactoe_1 = __webpack_require__(/*! ../ticTacToe/Tictactoe */ \"./src/ticTacToe/Tictactoe.ts\");\r\nvar darkmode_1 = __webpack_require__(/*! ../darkmode */ \"./src/darkmode.ts\");\r\nvar GameMenu = /** @class */ (function () {\r\n    function GameMenu() {\r\n        this.gameArray = [];\r\n    }\r\n    GameMenu.prototype.addGame = function (game) {\r\n        this.gameArray.push(game);\r\n    };\r\n    GameMenu.prototype.showMenu = function () {\r\n        var _this = this;\r\n        if (document.getElementById('openMenuButton')) {\r\n            document.body.removeChild(document.getElementById('openMenuButton'));\r\n        }\r\n        var changeColorButton = (document.createElement('BUTTON'));\r\n        changeColorButton.innerHTML = ('dark mode');\r\n        this.changeStyle = true;\r\n        changeColorButton.onclick = function () {\r\n            _this.changeStyle = !_this.changeStyle;\r\n            new darkmode_1.DarkMode(_this.changeStyle).changeToDark();\r\n        };\r\n        var menuContainer = (document.createElement('div'));\r\n        menuContainer.id = 'menuContainer';\r\n        var closeButton = (document.createElement('a'));\r\n        closeButton.innerHTML = ('Zamknij');\r\n        closeButton.onclick = function () { _this.hideMenu(); };\r\n        menuContainer.appendChild(closeButton);\r\n        menuContainer.appendChild(changeColorButton);\r\n        var list = document.createElement('ul');\r\n        this.gameArray.forEach(function (element) {\r\n            if (element.getFlag()) {\r\n                var listEntry = document.createElement('button');\r\n                listEntry.innerHTML = element.getGameName();\r\n                listEntry.onclick = function () { _this.openGame(element.getGame()); };\r\n                list.appendChild(listEntry);\r\n            }\r\n        });\r\n        menuContainer.appendChild(list);\r\n        document.body.appendChild(menuContainer);\r\n    };\r\n    GameMenu.prototype.hideMenu = function () {\r\n        var _this = this;\r\n        var openButton = (document.createElement('a'));\r\n        openButton.id = 'openMenuButton';\r\n        openButton.innerHTML = ('Menu');\r\n        openButton.onclick = function () { _this.showMenu(); };\r\n        document.body.removeChild(document.getElementById('menuContainer'));\r\n        document.body.appendChild(openButton);\r\n    };\r\n    GameMenu.prototype.openGame = function (gameId) {\r\n        document.body.removeChild(document.getElementById('menuContainer'));\r\n        switch (gameId) {\r\n            case 1:\r\n                console.log('tictactoe');\r\n                var tictactoe = new Tictactoe_1.TicTacToe();\r\n                tictactoe.startGame();\r\n                break;\r\n            case 2:\r\n                console.log('battleships');\r\n                break;\r\n            default:\r\n                alert('no such game');\r\n                break;\r\n        }\r\n    };\r\n    return GameMenu;\r\n}());\r\nexports.default = GameMenu;\r\n\n\n//# sourceURL=webpack:///./src/gameMenu/GameMenu.ts?");

/***/ }),

/***/ "./src/gameMenu/game.flags.ts":
/*!************************************!*\
  !*** ./src/gameMenu/game.flags.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.Flags = void 0;\r\nvar Flags;\r\n(function (Flags) {\r\n    Flags[Flags[\"disabled\"] = 0] = \"disabled\";\r\n    Flags[Flags[\"enabled\"] = 1] = \"enabled\";\r\n})(Flags = exports.Flags || (exports.Flags = {}));\r\n\n\n//# sourceURL=webpack:///./src/gameMenu/game.flags.ts?");

/***/ }),

/***/ "./src/gameMenu/game.ts":
/*!******************************!*\
  !*** ./src/gameMenu/game.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nexports.__esModule = true;\r\nexports.GameEnabled = exports.GameDisabled = exports.GameObj = void 0;\r\nvar game_flags_1 = __webpack_require__(/*! ./game.flags */ \"./src/gameMenu/game.flags.ts\");\r\nvar game_enum_1 = __webpack_require__(/*! ../game.enum */ \"./src/game.enum.ts\");\r\nfunction enableGame(gameConstructor) {\r\n    gameConstructor.prototype.gameFlag = game_flags_1.Flags.enabled;\r\n}\r\nfunction disableGame(gameConstructor) {\r\n    gameConstructor.prototype.gameFlag = game_flags_1.Flags.disabled;\r\n}\r\nvar GameObj = /** @class */ (function () {\r\n    function GameObj() {\r\n    }\r\n    GameObj.prototype.getFlag = function () {\r\n        return this.gameFlag;\r\n    };\r\n    GameObj.prototype.getGame = function () {\r\n        return this.gameSelector;\r\n    };\r\n    GameObj.prototype.getGameName = function () {\r\n        return this.gameType;\r\n    };\r\n    GameObj.prototype.getGameDetails = function () {\r\n        return [this.getGame(), this.getFlag()];\r\n    };\r\n    return GameObj;\r\n}());\r\nexports.GameObj = GameObj;\r\nvar GameEnabled = /** @class */ (function (_super) {\r\n    __extends(GameEnabled, _super);\r\n    function GameEnabled(gameSelector) {\r\n        var _this = _super.call(this) || this;\r\n        _this.gameSelector = gameSelector;\r\n        _this.gameType = game_enum_1.Games[gameSelector];\r\n        return _this;\r\n    }\r\n    GameEnabled = __decorate([\r\n        enableGame\r\n    ], GameEnabled);\r\n    return GameEnabled;\r\n}(GameObj));\r\nexports.GameEnabled = GameEnabled;\r\nvar GameDisabled = /** @class */ (function (_super) {\r\n    __extends(GameDisabled, _super);\r\n    function GameDisabled(gameSelector) {\r\n        var _this = _super.call(this) || this;\r\n        _this.gameSelector = gameSelector;\r\n        _this.gameType = game_enum_1.Games[gameSelector];\r\n        return _this;\r\n    }\r\n    GameDisabled = __decorate([\r\n        disableGame\r\n    ], GameDisabled);\r\n    return GameDisabled;\r\n}(GameObj));\r\nexports.GameDisabled = GameDisabled;\r\n\n\n//# sourceURL=webpack:///./src/gameMenu/game.ts?");

/***/ }),

/***/ "./src/ticTacToe/Board.ts":
/*!********************************!*\
  !*** ./src/ticTacToe/Board.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar Cell_1 = __webpack_require__(/*! ./Cell */ \"./src/ticTacToe/Cell.ts\");\r\nvar savegame_1 = __webpack_require__(/*! ../database/savegame */ \"./src/database/savegame.ts\");\r\nvar sessionstorage_1 = __webpack_require__(/*! ../database/sessionstorage */ \"./src/database/sessionstorage.ts\");\r\nvar Board = /** @class */ (function () {\r\n    function Board(size) {\r\n        var _this = this;\r\n        this.size = size;\r\n        this.movesMade = 0;\r\n        this.cells = new Array(size);\r\n        this.database = new savegame_1.GameSaver('tictactoe');\r\n        this.sessionStorage = new sessionstorage_1.SessionStorage('tictocsession');\r\n        this.createControlButtons();\r\n        this.sessionStorage.resetStorage();\r\n        var gameContainer = document.createElement('table');\r\n        gameContainer.id = 'tictactoe';\r\n        document.body.appendChild(gameContainer);\r\n        var table = document.getElementById(\"tictactoe\");\r\n        var i = 0;\r\n        for (var r = 0; r < size; r++) {\r\n            var row = table.insertRow(r);\r\n            var _loop_1 = function (c) {\r\n                var cell = row.insertCell(c);\r\n                cell.className = 'cell';\r\n                var newCell = new Cell_1[\"default\"](cell);\r\n                this_1.cells[i] = newCell;\r\n                cell.addEventListener(\"click\", function () { return _this.makeMove(newCell); }, false);\r\n                i++;\r\n            };\r\n            var this_1 = this;\r\n            for (var c = 0; c < size; c++) {\r\n                _loop_1(c);\r\n            }\r\n        }\r\n    }\r\n    Board.prototype.changeSymbol = function () {\r\n        switch (this.currentSymbol) {\r\n            case 1:\r\n                this.currentSymbol = -1;\r\n                break;\r\n            case -1:\r\n                this.currentSymbol = 1;\r\n                break;\r\n            default:\r\n                this.currentSymbol = 1;\r\n                break;\r\n        }\r\n    };\r\n    Board.prototype.makeMove = function (cell) {\r\n        this.changeSymbol();\r\n        this.movesMade++;\r\n        cell.setCellValue(this.currentSymbol);\r\n        if (this.checkRows()) {\r\n            console.log('GAME WON BY', this.currentSymbol);\r\n        }\r\n        else if (this.checkColumns()) {\r\n            console.log('GAME WON BY', this.currentSymbol);\r\n        }\r\n        else if (this.checkDiagonalOne()) {\r\n            console.log('GAME WON BY', this.currentSymbol);\r\n        }\r\n        else if (this.checkDiagonalTwo()) {\r\n            console.log('GAME WON BY', this.currentSymbol);\r\n        }\r\n        this.saveMove();\r\n    };\r\n    ;\r\n    Board.prototype.chceckForWin = function () {\r\n        //przeszukać rzędy->kolumny->przekatne\r\n        this.checkRows();\r\n    };\r\n    Board.prototype.checkRows = function () {\r\n        var firstElement;\r\n        var rowNumber;\r\n        var tempTable;\r\n        for (var r = 0; r < this.size; r++) {\r\n            rowNumber = r % this.size;\r\n            tempTable = this.cells.slice(rowNumber, rowNumber + this.size);\r\n            firstElement = this.cells[r * this.size].cellValue;\r\n            var valueEquals = function (currentValue) { return currentValue.cellValue === firstElement && currentValue.cellValue !== 0; };\r\n            return (tempTable.every(valueEquals));\r\n        }\r\n    };\r\n    Board.prototype.checkColumns = function () {\r\n        var firstElement;\r\n        var colNumber;\r\n        var tempTable = [];\r\n        for (var c = 0; c < this.size; c++) {\r\n            colNumber = c;\r\n            for (var col = 0; col < this.size; col++) {\r\n                tempTable.push(this.cells[c]);\r\n                c += this.size;\r\n            }\r\n            firstElement = this.cells[colNumber].cellValue;\r\n            var valueEquals = function (currentValue) { return currentValue.cellValue === firstElement && currentValue.cellValue !== 0; };\r\n            return (tempTable.every(valueEquals));\r\n        }\r\n    };\r\n    Board.prototype.checkDiagonalOne = function () {\r\n        var firstElement;\r\n        var colNumber = 0;\r\n        var tempTable = [];\r\n        var valueEquals = function (currentValue) { return currentValue.cellValue === firstElement && currentValue.cellValue !== 0; };\r\n        firstElement = this.cells[colNumber].cellValue;\r\n        for (var c = 0; c < this.size; c++) {\r\n            tempTable.push(this.cells[colNumber]);\r\n            colNumber += this.size + 1;\r\n        }\r\n        return (tempTable.every(valueEquals));\r\n    };\r\n    Board.prototype.checkDiagonalTwo = function () {\r\n        var firstElement;\r\n        var colNumber = this.size - 1;\r\n        var tempTable = [];\r\n        var valueEquals = function (currentValue) { return currentValue.cellValue === firstElement && currentValue.cellValue !== 0; };\r\n        firstElement = this.cells[colNumber].cellValue;\r\n        console.log(firstElement);\r\n        for (var c = 0; c < this.size; c++) {\r\n            tempTable.push(this.cells[colNumber]);\r\n            colNumber += this.size - 1;\r\n        }\r\n        return (tempTable.every(valueEquals));\r\n    };\r\n    Board.prototype.saveGame = function () {\r\n        alert('Game saved !');\r\n        var savedGameData;\r\n        savedGameData = [];\r\n        this.cells.forEach(function (element) {\r\n            savedGameData.push(element.cellValue);\r\n        });\r\n        this.database.saveData(savedGameData);\r\n    };\r\n    Board.prototype.loadGame = function () {\r\n        this.sessionStorage.resetStorage();\r\n        var dataFromLocalStorage;\r\n        dataFromLocalStorage = [];\r\n        dataFromLocalStorage = this.database.loadGameSave();\r\n        dataFromLocalStorage.join('');\r\n        if (dataFromLocalStorage !== null) {\r\n            this.applyChanges(dataFromLocalStorage);\r\n        }\r\n    };\r\n    Board.prototype.saveMove = function () {\r\n        var savedMoveData;\r\n        savedMoveData = [];\r\n        this.cells.forEach(function (element) {\r\n            savedMoveData.push(element.cellValue);\r\n        });\r\n        this.sessionStorage.saveMove(savedMoveData);\r\n    };\r\n    Board.prototype.goBack = function (moves) {\r\n        moves > 0 ? moves-- : alert('Cannot go back further');\r\n        var dataFromSessionStorage;\r\n        dataFromSessionStorage = [];\r\n        dataFromSessionStorage = this.sessionStorage.goBack();\r\n        dataFromSessionStorage.join('');\r\n        if (dataFromSessionStorage !== null) {\r\n            this.applyChanges(dataFromSessionStorage);\r\n        }\r\n    };\r\n    Board.prototype.applyChanges = function (dataToDisplay) {\r\n        for (var i = 0; i < this.size * this.size; i++) {\r\n            this.cells[i].setCellValue(dataToDisplay[i]);\r\n        }\r\n    };\r\n    Board.prototype.createControlButtons = function () {\r\n        var _this = this;\r\n        var buttonBox = document.createElement('div');\r\n        buttonBox.id = 'buttonBox';\r\n        var saveButton = document.createElement('button');\r\n        saveButton.id = 'saveButton';\r\n        saveButton.innerHTML = \"Zapisz stan\";\r\n        saveButton.onclick = (function () { return _this.saveGame(); });\r\n        buttonBox.appendChild(saveButton);\r\n        var loadButton = document.createElement('button');\r\n        loadButton.id = 'loadButton';\r\n        loadButton.innerHTML = \"Wczytaj stan\";\r\n        loadButton.onclick = (function () { return _this.loadGame(); });\r\n        buttonBox.appendChild(loadButton);\r\n        var gobackButton = document.createElement('button');\r\n        gobackButton.id = 'loadButton';\r\n        gobackButton.innerHTML = \"Cofnij ruch\";\r\n        gobackButton.onclick = (function () { return _this.goBack(1); });\r\n        buttonBox.appendChild(gobackButton);\r\n        document.body.appendChild(buttonBox);\r\n    };\r\n    return Board;\r\n}());\r\nexports.default = Board;\r\n\n\n//# sourceURL=webpack:///./src/ticTacToe/Board.ts?");

/***/ }),

/***/ "./src/ticTacToe/Cell.ts":
/*!*******************************!*\
  !*** ./src/ticTacToe/Cell.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nvar Cell = /** @class */ (function () {\r\n    function Cell(cell) {\r\n        this.htmlElement = cell;\r\n        this.cellValue = 0;\r\n    }\r\n    Cell.prototype.setCellValue = function (value) {\r\n        //1=krzyzyk, -1=kolko, 0=pole nieustawione\r\n        this.cellValue = value;\r\n        switch (value) {\r\n            case 1:\r\n                this.htmlElement.innerHTML = 'X';\r\n                break;\r\n            case -1:\r\n                this.htmlElement.innerHTML = '0';\r\n                break;\r\n            default:\r\n                this.htmlElement.innerHTML = '';\r\n                break;\r\n        }\r\n        //this.htmlElement.innerHTML=value.toString();\r\n    };\r\n    return Cell;\r\n}());\r\nexports.default = Cell;\r\n\n\n//# sourceURL=webpack:///./src/ticTacToe/Cell.ts?");

/***/ }),

/***/ "./src/ticTacToe/Tictactoe.ts":
/*!************************************!*\
  !*** ./src/ticTacToe/Tictactoe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.TicTacToe = void 0;\r\nvar Board_1 = __webpack_require__(/*! ./Board */ \"./src/ticTacToe/Board.ts\");\r\nvar savegame_1 = __webpack_require__(/*! ../database/savegame */ \"./src/database/savegame.ts\");\r\nvar TicTacToe = /** @class */ (function () {\r\n    function TicTacToe() {\r\n        this.name = \"Kółko i krzyżyk\";\r\n        console.log('tictactoe');\r\n    }\r\n    TicTacToe.prototype.getGameElement = function () {\r\n        console.log('gethtmlelement');\r\n        var div = document.createElement('div');\r\n        div.id = 'tictactoe';\r\n        document.body.appendChild(div);\r\n        return div;\r\n    };\r\n    TicTacToe.prototype.startGame = function () {\r\n        var gameSave = new savegame_1.GameSaver('tictactoe');\r\n        var board;\r\n        board = new Board_1[\"default\"](3);\r\n    };\r\n    return TicTacToe;\r\n}());\r\nexports.TicTacToe = TicTacToe;\r\n\n\n//# sourceURL=webpack:///./src/ticTacToe/Tictactoe.ts?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;
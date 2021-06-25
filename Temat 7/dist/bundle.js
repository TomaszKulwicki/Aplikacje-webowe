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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar noteboard_1 = __webpack_require__(/*! ./noteboard */ \"./src/noteboard.ts\");\r\nvar board = new noteboard_1.NoteBoard();\r\nboard.refreshList();\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/guid.ts":
/*!*********************!*\
  !*** ./src/guid.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.Guid = void 0;\r\nvar Guid = /** @class */ (function () {\r\n    function Guid() {\r\n    }\r\n    Guid.newGuid = function () {\r\n        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {\r\n            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);\r\n            return v.toString(16);\r\n        });\r\n    };\r\n    return Guid;\r\n}());\r\nexports.Guid = Guid;\r\n\n\n//# sourceURL=webpack:///./src/guid.ts?");

/***/ }),

/***/ "./src/note.ts":
/*!*********************!*\
  !*** ./src/note.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.Note = void 0;\r\nvar guid_1 = __webpack_require__(/*! ./guid */ \"./src/guid.ts\");\r\nvar Note = /** @class */ (function () {\r\n    function Note(title, content) {\r\n        this.id = guid_1.Guid.newGuid();\r\n        this.title = title;\r\n        this.content = content;\r\n        this.createdAt = new Date();\r\n    }\r\n    return Note;\r\n}());\r\nexports.Note = Note;\r\n\n\n//# sourceURL=webpack:///./src/note.ts?");

/***/ }),

/***/ "./src/noteboard.ts":
/*!**************************!*\
  !*** ./src/noteboard.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.NoteBoard = void 0;\r\nvar note_1 = __webpack_require__(/*! ./note */ \"./src/note.ts\");\r\nvar sessionstoragestore_1 = __webpack_require__(/*! ./sessionstoragestore */ \"./src/sessionstoragestore.ts\");\r\nvar NoteBoard = /** @class */ (function () {\r\n    function NoteBoard() {\r\n        this.storage = new sessionstoragestore_1.SessionStorageStore();\r\n        this.addTitleInput();\r\n        this.addContentInput();\r\n        this.addButton();\r\n        this.notesContainer = (document.createElement('div'));\r\n        document.body.append(this.notesContainer);\r\n    }\r\n    NoteBoard.prototype.addTitleInput = function () {\r\n        var div = (document.createElement('div'));\r\n        var span = (document.createElement('span'));\r\n        span.textContent = \"Title:\";\r\n        var titleInput = (document.createElement('input'));\r\n        titleInput.setAttribute('type', 'text');\r\n        titleInput.setAttribute('id', 'title');\r\n        div.appendChild(span);\r\n        div.appendChild(titleInput);\r\n        document.body.appendChild(div);\r\n    };\r\n    NoteBoard.prototype.addContentInput = function () {\r\n        var div = (document.createElement('div'));\r\n        var span = (document.createElement('span'));\r\n        span.textContent = \"Content:\";\r\n        var contentInput = (document.createElement('textarea'));\r\n        contentInput.setAttribute('id', 'content');\r\n        div.appendChild(span);\r\n        div.appendChild(contentInput);\r\n        document.body.appendChild(div);\r\n    };\r\n    NoteBoard.prototype.addButton = function () {\r\n        var _this = this;\r\n        var div = (document.createElement('div'));\r\n        var addButton = (document.createElement('button'));\r\n        addButton.textContent = \"Add\";\r\n        addButton.addEventListener('click', function () {\r\n            var title = document.getElementById('title').value;\r\n            var content = document.getElementById('content').value;\r\n            _this.storage.addNote(new note_1.Note(title, content));\r\n            _this.refreshList();\r\n        });\r\n        div.appendChild(addButton);\r\n        document.body.appendChild(div);\r\n    };\r\n    NoteBoard.prototype.refreshList = function () {\r\n        var _this = this;\r\n        this.notesContainer.innerHTML = '';\r\n        var notes = this.storage.getNotes();\r\n        if (!notes)\r\n            return;\r\n        notes.forEach(function (item) {\r\n            var titleDiv = (document.createElement('div'));\r\n            titleDiv.innerHTML = item.title;\r\n            var contentDiv = (document.createElement('div'));\r\n            contentDiv.innerHTML = item.content;\r\n            var removeBtn = (document.createElement('button'));\r\n            removeBtn.textContent = \"Remove\";\r\n            removeBtn.setAttribute('data-id', item.id.toString());\r\n            removeBtn.addEventListener('click', function (e) {\r\n                var id = e.target.getAttribute('data-id');\r\n                _this.storage.deleteNote(id);\r\n                _this.refreshList();\r\n            });\r\n            _this.notesContainer.appendChild(titleDiv);\r\n            _this.notesContainer.appendChild(contentDiv);\r\n            _this.notesContainer.appendChild(removeBtn);\r\n            _this.notesContainer.appendChild(document.createElement('hr'));\r\n        }, this);\r\n    };\r\n    return NoteBoard;\r\n}());\r\nexports.NoteBoard = NoteBoard;\r\n\n\n//# sourceURL=webpack:///./src/noteboard.ts?");

/***/ }),

/***/ "./src/sessionstoragestore.ts":
/*!************************************!*\
  !*** ./src/sessionstoragestore.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.SessionStorageStore = void 0;\r\nvar SessionStorageStore = /** @class */ (function () {\r\n    function SessionStorageStore() {\r\n    }\r\n    SessionStorageStore.prototype.deleteNote = function (id) {\r\n        var notesValue = sessionStorage.getItem('notes');\r\n        var notes;\r\n        notes = JSON.parse(notesValue);\r\n        notes = notes.filter(function (note) { return note.id !== id; });\r\n        sessionStorage.setItem('notes', JSON.stringify(notes));\r\n    };\r\n    SessionStorageStore.prototype.addNote = function (note) {\r\n        var notesValue = sessionStorage.getItem('notes');\r\n        var notes = JSON.parse(notesValue);\r\n        if (!notes)\r\n            notes = [];\r\n        notes.push(note);\r\n        sessionStorage.setItem('notes', JSON.stringify(notes));\r\n    };\r\n    SessionStorageStore.prototype.getNotes = function () {\r\n        var notesValue = sessionStorage.getItem('notes');\r\n        return JSON.parse(notesValue);\r\n    };\r\n    return SessionStorageStore;\r\n}());\r\nexports.SessionStorageStore = SessionStorageStore;\r\n\n\n//# sourceURL=webpack:///./src/sessionstoragestore.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;
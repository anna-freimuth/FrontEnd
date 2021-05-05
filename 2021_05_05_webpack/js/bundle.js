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

/***/ "./src/albums.js":
/*!***********************!*\
  !*** ./src/albums.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"albumsListener\": () => (/* binding */ albumsListener)\n/* harmony export */ });\n/* harmony import */ var _noActive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noActive */ \"./src/noActive.js\");\n/* harmony import */ var _localStorageHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorageHandler */ \"./src/localStorageHandler.js\");\n\r\n\r\n\r\nconst getAlbums = (id) => {\r\n    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            renderAlbums(data);\r\n        })\r\n}\r\n\r\nconst renderAlbums = (contentAlbums) => {\r\n    const albums = document.querySelector(\"#content\");\r\n    albums.innerHTML = \"\";\r\n    contentAlbums.forEach(albums => {\r\n        document\r\n            .querySelector(\"#content\")\r\n            .innerHTML += `<li id=\"userId_${albums.id}\">${albums.title}</li>`;\r\n    })\r\n}\r\n\r\nconst albumsListener = () => {\r\n    document.querySelector(\"#albums\")\r\n        .addEventListener(\"click\", event => {\r\n            event.preventDefault();\r\n            const id = (0,_localStorageHandler__WEBPACK_IMPORTED_MODULE_1__.getUserId)();\r\n            (0,_noActive__WEBPACK_IMPORTED_MODULE_0__.noActive)();\r\n            document.querySelector(\"#albums\").classList.add(\"active\");\r\n            getAlbums(id);\r\n        })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://2021_05_05_webpack/./src/albums.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ \"./src/users.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts */ \"./src/posts.js\");\n/* harmony import */ var _albums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./albums */ \"./src/albums.js\");\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info */ \"./src/info.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst getUsers = () => {\r\n    fetch('https://jsonplaceholder.typicode.com/users')\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            (0,_users__WEBPACK_IMPORTED_MODULE_0__.renderUsers)(data);\r\n            (0,_users__WEBPACK_IMPORTED_MODULE_0__.usersListener)();\r\n            (0,_todo__WEBPACK_IMPORTED_MODULE_1__.todoListener)();\r\n            (0,_posts__WEBPACK_IMPORTED_MODULE_2__.postsListener)();\r\n            (0,_albums__WEBPACK_IMPORTED_MODULE_3__.albumsListener)();\r\n            (0,_info__WEBPACK_IMPORTED_MODULE_4__.infoListener)();\r\n        })\r\n\r\n}\r\n\r\n\r\ngetUsers();\n\n//# sourceURL=webpack://2021_05_05_webpack/./src/app.js?");

/***/ }),

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"infoListener\": () => (/* binding */ infoListener),\n/* harmony export */   \"getInfo\": () => (/* binding */ getInfo)\n/* harmony export */ });\n/* harmony import */ var _localStorageHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorageHandler */ \"./src/localStorageHandler.js\");\n\r\n\r\nconst {noActive} = __webpack_require__(/*! ./noActive */ \"./src/noActive.js\");\r\n\r\nconst getInfo = (id) => {\r\n    fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            renderInfo(data);\r\n        })\r\n}\r\n\r\nconst infoListener = () => {\r\n    document.querySelector(\"#userInfo\")\r\n        .addEventListener(\"click\", event => {\r\n            event.preventDefault();\r\n            const id = (0,_localStorageHandler__WEBPACK_IMPORTED_MODULE_0__.getUserId)();\r\n            noActive();\r\n            document.querySelector(\"#userInfo\").classList.add(\"active\");\r\n            getInfo(id);\r\n        })\r\n}\r\n\r\nconst renderInfo = (data) => {\r\n    const infos = document.querySelector(\"#content\");\r\n    infos.innerHTML = \" \";\r\n    let user = data[0];\r\n    let addItem = (key, value) => document.querySelector(\"#content\").innerHTML += `<li>${key}: ${value}</li>`\r\n    addItem(\"id\", user[\"id\"]);\r\n    addItem(\"name\", user[\"name\"]);\r\n    addItem(\"email\", user[\"email\"]);\r\n    addItem(\"phone\", user[\"phone\"]);\r\n    addItem(\"website\", user[\"website\"]);\r\n}\r\n\n\n//# sourceURL=webpack://2021_05_05_webpack/./src/info.js?");

/***/ }),

/***/ "./src/localStorageHandler.js":
/*!************************************!*\
  !*** ./src/localStorageHandler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveUserId\": () => (/* binding */ saveUserId),\n/* harmony export */   \"getUserId\": () => (/* binding */ getUserId)\n/* harmony export */ });\nconst saveUserId = id => {\r\n    localStorage.setItem(\"userId\", id);\r\n}\r\n\r\nconst getUserId = () => {\r\n    return localStorage.getItem(\"userId\")\r\n}\r\n\r\n\n\n//# sourceURL=webpack://2021_05_05_webpack/./src/localStorageHandler.js?");

/***/ }),

/***/ "./src/noActive.js":
/*!*************************!*\
  !*** ./src/noActive.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"noActive\": () => (/* binding */ noActive)\n/* harmony export */ });\nconst noActive = () => {\r\n    const linkItems = document.querySelectorAll(\".nav-link\");\r\n    for (let item of linkItems) {\r\n        item.classList.remove(\"active\");\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://2021_05_05_webpack/./src/noActive.js?");

/***/ }),

/***/ "./src/posts.js":
/*!**********************!*\
  !*** ./src/posts.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postsListener\": () => (/* binding */ postsListener)\n/* harmony export */ });\n/* harmony import */ var _noActive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noActive */ \"./src/noActive.js\");\n/* harmony import */ var _localStorageHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorageHandler */ \"./src/localStorageHandler.js\");\n\r\n\r\n\r\nconst getPosts = (id) => {\r\n    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            renderPosts(data);\r\n        })\r\n}\r\n\r\nconst renderPosts = (contentPosts) => {\r\n    const posts = document.querySelector(\"#content\");\r\n    posts.innerHTML = \"\";\r\n    contentPosts.forEach(posts => {\r\n        document\r\n            .querySelector(\"#content\")\r\n            .innerHTML += `<li id=\"userId_${posts.id}\">${posts.title}</li>`;\r\n    })\r\n}\r\n\r\nconst postsListener = () => {\r\n    document.querySelector(\"#posts\")\r\n        .addEventListener(\"click\", event => {\r\n            event.preventDefault();\r\n            const id = (0,_localStorageHandler__WEBPACK_IMPORTED_MODULE_1__.getUserId)();\r\n            (0,_noActive__WEBPACK_IMPORTED_MODULE_0__.noActive)();\r\n            document.querySelector(\"#posts\").classList.add(\"active\");\r\n            getPosts(id);\r\n        })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://2021_05_05_webpack/./src/posts.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoListener\": () => (/* binding */ todoListener)\n/* harmony export */ });\n/* harmony import */ var _noActive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noActive */ \"./src/noActive.js\");\n/* harmony import */ var _localStorageHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorageHandler */ \"./src/localStorageHandler.js\");\n\r\n\r\n\r\nconst getTodo = (id) => {\r\n    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            renderTodo(data);\r\n        })\r\n}\r\n\r\nconst todoListener = () => {\r\n    document.querySelector(\"#todo\")\r\n        .addEventListener(\"click\", event => {\r\n            event.preventDefault();\r\n            const id = (0,_localStorageHandler__WEBPACK_IMPORTED_MODULE_1__.getUserId)();\r\n            (0,_noActive__WEBPACK_IMPORTED_MODULE_0__.noActive)();\r\n            document.querySelector(\"#todo\").classList.add(\"active\");\r\n            getTodo(id);\r\n        })\r\n}\r\n\r\nconst renderTodo = (contentTodo) => {\r\n    const todo = document.querySelector(\"#content\");\r\n    todo.innerHTML = \"\";\r\n    contentTodo.forEach(todos => {\r\n        document\r\n            .querySelector(\"#content\")\r\n            .innerHTML += `<li id=\"userId_${todos.id}\">${todos.title}</li>`;\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://2021_05_05_webpack/./src/todo.js?");

/***/ }),

/***/ "./src/users.js":
/*!**********************!*\
  !*** ./src/users.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderUsers\": () => (/* binding */ renderUsers),\n/* harmony export */   \"usersListener\": () => (/* binding */ usersListener)\n/* harmony export */ });\n/* harmony import */ var _noActive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noActive */ \"./src/noActive.js\");\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info */ \"./src/info.js\");\n/* harmony import */ var _localStorageHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorageHandler */ \"./src/localStorageHandler.js\");\n\r\n\r\n\r\n\r\nconst renderUsers = (userList) => {\r\n    userList.forEach(user => {\r\n        document\r\n            .querySelector(\"#userList\")\r\n            .innerHTML += `<button id=\"user_${user.id}\">${user.name}</button>`;\r\n    })\r\n}\r\n\r\nconst usersListener = () => {\r\n    const list = document.querySelectorAll(\"#userList\");\r\n    for (let item of list) {\r\n        item.addEventListener(\"click\", event => {\r\n            event.preventDefault();\r\n            const [, id] = event.target.id.split('_');\r\n            (0,_localStorageHandler__WEBPACK_IMPORTED_MODULE_2__.saveUserId)(id);\r\n            (0,_info__WEBPACK_IMPORTED_MODULE_1__.getInfo)(id);\r\n            (0,_noActive__WEBPACK_IMPORTED_MODULE_0__.noActive)();\r\n            document.querySelector(\"#userInfo\").classList.add(\"active\");\r\n        })\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://2021_05_05_webpack/./src/users.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
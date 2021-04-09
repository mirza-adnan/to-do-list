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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dom\": () => (/* binding */ dom)\n/* harmony export */ });\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n\r\n\r\nconst dom = (function() {\r\n  function toggleNav() {\r\n    const navButton = document.querySelector(\".hamburger\");\r\n      navButton.addEventListener(\"click\", function() {\r\n        document.querySelector(\"nav\").classList.toggle(\"nav-hide\");\r\n        document.querySelector(\"main\").classList.toggle(\"main-toggle-margin\");\r\n      })\r\n  }\r\n\r\n  function getProjectForm() {\r\n    return document.querySelector(\".project-form\");\r\n  }\r\n\r\n  function getNewProjectButton() {\r\n    return document.querySelector(\".new-project-btn\");\r\n  }\r\n\r\n  function newProjectButtons() {\r\n    const newProjectButton = getNewProjectButton();\r\n    const cancelProjectButton = document.querySelector(\".project-cancel-btn\");\r\n    newProjectButton.addEventListener(\"click\", openProjectForm);\r\n    cancelProjectButton.addEventListener(\"click\",cancelProject);\r\n  }\r\n\r\n  function openProjectForm() {\r\n    toggleNewProjectButton();\r\n    toggleProjectForm();\r\n  }\r\n\r\n  function cancelProject() {\r\n    const projectNameInput = document.querySelector(\".project-name-input\");\r\n    projectNameInput.value = \"\";\r\n    toggleNewProjectButton();\r\n    toggleProjectForm();\r\n  }\r\n\r\n  function toggleNewProjectButton() {\r\n    const newProjectButton = getNewProjectButton();\r\n    newProjectButton.classList.toggle(\"display-none\");\r\n  }\r\n\r\n  function toggleProjectForm() {\r\n    const projectForm = getProjectForm();\r\n    projectForm.classList.toggle(\"display-none\");\r\n  }\r\n\r\n  return {\r\n    toggleNav,\r\n    newProjectButtons,\r\n  }\r\n})()\r\n \r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\r\n_dom_js__WEBPACK_IMPORTED_MODULE_0__.dom.toggleNav();\r\n_dom_js__WEBPACK_IMPORTED_MODULE_0__.dom.newProjectButtons();\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\r\n  constructor(name) {\r\n    this.name = name;\r\n    this.tasks = [];\r\n    this.addTask = function(task) {\r\n      this.tasks.push(task);\r\n    }\r\n    this.makeElement = function() {\r\n      const li = document.createElement(\"li\");\r\n      li.classList.add(\"project\", \"new-project\");\r\n      const div = document.createElement(\"div\");\r\n      div.classList.add(\"new-project-name\");\r\n      const folderIcon = document.createElement(\"img\");\r\n      folderIcon.src = \"./img/folder.svg\";\r\n      const projectName = document.createElement(\"p\");\r\n      projectName.textContent = this.name;\r\n      div.appendChild(folderIcon);\r\n      div.appendChild(projectName);\r\n      const deleteButton = document.createElement(\"img\");\r\n      deleteButton.src = \"./img/delete.svg\";\r\n      li.appendChild(div);\r\n      li.appendChild(deleteButton);\r\n      \r\n      return li;\r\n    }\r\n    this.element = this.makeElement();\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://to-do-list/./src/projects.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
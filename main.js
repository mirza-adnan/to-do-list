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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass App {\r\n  constructor() {\r\n    this.projects = [];\r\n    this.addProject = function(project) {\r\n      this.projects.push(project);\r\n    }\r\n    this.removeProject = function(project) {\r\n      this.projects.splice(this.projects.indexOf(project), 1);\r\n    }\r\n  }\r\n}\r\n\r\nconst app = new App();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://to-do-list/./src/app.js?");

/***/ }),

/***/ "./src/defaultProjects.js":
/*!********************************!*\
  !*** ./src/defaultProjects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Default{\r\n  constructor(name, id) {\r\n    this.name = name;\r\n    this.tasks = [];\r\n    this.addTask = function(task) {\r\n      this.tasks.push(task);\r\n    }\r\n    this.removeTask = function(task) {\r\n      this.tasks.forEach(task => {\r\n        this.tasks.splice(this.tasks.indexOf(task), 1);\r\n      })\r\n    }\r\n    this.element = document.querySelector(`li#${id}`);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Default);\n\n//# sourceURL=webpack://to-do-list/./src/defaultProjects.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dom\": () => (/* binding */ dom)\n/* harmony export */ });\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _defaultProjects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultProjects.js */ \"./src/defaultProjects.js\");\n\r\n\r\n\r\nconst dom = (function() {\r\n\r\n  function init() {\r\n    toggleNav();\r\n    newProjectButtons();\r\n    createDefaultProjects()\r\n  }\r\n\r\n  function toggleNav() {\r\n    const navButton = document.querySelector(\".hamburger\");\r\n      navButton.addEventListener(\"click\", function() {\r\n        document.querySelector(\"nav\").classList.toggle(\"nav-hide\");\r\n        document.querySelector(\"main\").classList.toggle(\"main-toggle-margin\");\r\n      })\r\n  }\r\n\r\n  function getProjectForm() {\r\n    return document.querySelector(\".project-form\");\r\n  }\r\n\r\n  function getNewProjectButton() {\r\n    return document.querySelector(\".new-project-btn\");\r\n  }\r\n\r\n  function newProjectButtons() {\r\n    const newProjectButton = getNewProjectButton();\r\n    const cancelProjectButton = document.querySelector(\".cancel-project-btn\");\r\n    const addProjectButton = document.querySelector(\".add-project-btn\");\r\n    newProjectButton.addEventListener(\"click\", toggleProjectForm);\r\n    cancelProjectButton.addEventListener(\"click\", cancelProject);\r\n    addProjectButton.addEventListener(\"click\", addProject);\r\n  }\r\n\r\n  function cancelProject() {\r\n    clearProjectInput();\r\n    toggleProjectForm();\r\n  }\r\n\r\n  function addProject() {\r\n    const projectNameInput = document.querySelector(\".project-name-input\");\r\n    const projectName = projectNameInput.value;\r\n    const project = new _projects_js__WEBPACK_IMPORTED_MODULE_0__.default(projectName);\r\n    _app__WEBPACK_IMPORTED_MODULE_1__.default.addProject(project);\r\n    renderProjects();\r\n    toggleProjectForm();\r\n    clearProjectInput();\r\n  }\r\n\r\n  function renderProjects() {\r\n    const newProjectsList = document.querySelector(\".new-projects\");\r\n    _app__WEBPACK_IMPORTED_MODULE_1__.default.projects.forEach(project => {\r\n      newProjectsList.appendChild(project.element);\r\n    })\r\n  }\r\n\r\n  function createDefaultProjects() {\r\n    const inbox = new _defaultProjects_js__WEBPACK_IMPORTED_MODULE_2__.default(\"Inbox\", \"inbox\");\r\n    const today = new _defaultProjects_js__WEBPACK_IMPORTED_MODULE_2__.default(\"Today\", \"today\");\r\n    const thisWeek = new _defaultProjects_js__WEBPACK_IMPORTED_MODULE_2__.default(\"This Week\", \"this-week\");\r\n  }\r\n\r\n  function toggleProjectForm() {\r\n    const newProjectButton = getNewProjectButton();\r\n    newProjectButton.classList.toggle(\"display-none\");\r\n    const projectForm = getProjectForm();\r\n    projectForm.classList.toggle(\"display-none\");\r\n  }\r\n\r\n  function clearProjectInput() {\r\n    document.querySelector(\".project-name-input\").value = \"\";\r\n  }\r\n\r\n  return {\r\n    init,\r\n  }\r\n})()\r\n \r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\r\n_dom_js__WEBPACK_IMPORTED_MODULE_0__.dom.init();\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\r\n  constructor(name) {\r\n    this.name = name;\r\n    this.tasks = [];\r\n    this.addTask = function(task) {\r\n      this.tasks.push(task);\r\n    }\r\n    this.removeTask = function(task) {\r\n      this.tasks.forEach(task => {\r\n        this.tasks.splice(this.tasks.indexOf(task), 1);\r\n      })\r\n    }\r\n    this.makeElement = function() {\r\n      const li = document.createElement(\"li\");\r\n      li.classList.add(\"project\", \"new-project\");\r\n      const div = document.createElement(\"div\");\r\n      div.classList.add(\"new-project-name\");\r\n      const folderIcon = document.createElement(\"img\");\r\n      folderIcon.src = \"./img/folder.svg\";\r\n      const projectName = document.createElement(\"p\");\r\n      projectName.textContent = this.name;\r\n      div.appendChild(folderIcon);\r\n      div.appendChild(projectName);\r\n      const deleteButton = document.createElement(\"img\");\r\n      deleteButton.src = \"./img/delete.svg\";\r\n      li.appendChild(div);\r\n      li.appendChild(deleteButton);\r\n      \r\n      return li;\r\n    }\r\n    this.element = this.makeElement();\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://to-do-list/./src/projects.js?");

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